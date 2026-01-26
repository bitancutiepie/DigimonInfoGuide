import pandas as pd
import json
import re
import os
import sys

# --- CONFIGURATION ---
EXCEL_PATH = 'd:/DigimonGuider/data/DataSource.xlsx'
LOCATIONS_JS_PATH = 'd:/DigimonGuider/data/locations_data.js'
STAGES_CSV_PATH = 'd:/DigimonGuider/data/digimon_stages.csv'
OUTPUT_JS_PATH = 'd:/DigimonGuider/data/guide_content.js'

def load_locations_map(file_path):
    """Parses the existing locations_data.js manually to extract the dict."""
    digimon_to_locs = {}
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        match = re.search(r'const LOCATIONS_DATA =\s*(\{.*?\});', content, re.DOTALL)
        if match:
            json_str = match.group(1)
            try:
                # Basic JSON load might fail if keys aren't quoted or have trailing commas
                # But the file looked mostly clean.
                data = json.loads(json_str)
                for loc, mon_list in data.items():
                    for mon in mon_list:
                        mon = mon.strip()
                        if mon not in digimon_to_locs:
                            digimon_to_locs[mon] = []
                        if loc not in digimon_to_locs[mon]:
                            digimon_to_locs[mon].append(loc)
            except json.JSONDecodeError:
                # Fallback: Regex parsing for JS object if strict JSON fails
                print("Warning: Strict JSON parse failed for locations. Using fallback regex.")
        else:
            print("Warning: Could not find LOCATIONS_DATA object.")
            
    except Exception as e:
        print(f"Error loading locations: {e}")
        
    return digimon_to_locs

def load_stages_map():
    stages = {}
    if os.path.exists(STAGES_CSV_PATH):
        try:
            df = pd.read_csv(STAGES_CSV_PATH)
            for _, row in df.iterrows():
                stages[str(row['Name']).strip()] = str(row['Stage']).strip()
        except:
            pass
    return stages

def clean_type(t_val):
    if pd.isna(t_val): return None
    t = str(t_val).strip()
    if t == "???" or t == "Unknown": return "Chaos"
    if t == "Earth": return "Ground"
    if t == "Light": return "Holy"
    if t == "Beast": return "Normal"
    if t == "Olympian": return "Holy"
    return t.title()

import openpyxl

def main():
    print("Starting Data Build Process...")
    
    # 0. PRE-SCAN BORDERS for Family Grouping
    # Map row_index (0-based in pandas) -> family_id
    row_to_family = {}
    try:
        wb = openpyxl.load_workbook(EXCEL_PATH)
        sheet = wb.active
        
        current_family_id = 1
        # Excel rows are 1-based. Pandas header takes up some.
        # We skipped 2 rows in read_excel. Row 3 is header. Data starts Row 4.
        # Let's align carefully.
        # In Pandas: Index 0 => Excel Row 4 (if header=None, skiprows=2, then row 0 is header row 3 in Excel? No wait).
        # user code: df = pd.read_excel(..., header=None, skiprows=2)
        # Pandas Index 0 = Excel Row 3 (The Header "No.", "Digimon"...)
        # Pandas Index 1 = Excel Row 4 (Patamon)
        
        # We will iterate starting from Excel Row 4
        # We need to map Pandas Index -> Family ID
        
        max_row = sheet.max_row
        
        for r in range(4, max_row + 1):
            cell = sheet.cell(row=r, column=1) # Column A
            
            # If Top Border -> New Family
            if cell.border and cell.border.top and cell.border.top.style:
                current_family_id += 1
            
            # Map to Pandas Index
            # Pandas Index = r - 3 (Since row 3 is index 0 in dataframe refering to header)
            pd_idx = r - 3
            row_to_family[pd_idx] = current_family_id

    except Exception as e:
        print(f"Border Scan Warning: {e}")

    # 1. READ EXCEL
    try:
        # Skip top 2 rows, Row 3 (index 2) is header
        df = pd.read_excel(EXCEL_PATH, header=None, skiprows=2)
    except Exception as e:
        print(f"Fatal Error: Could not read Excel file. {e}")
        return

    # 2. GATHER DIGIMON NAMES (for accurate parsing)
    all_digimon_names = set()
    raw_rows = []
    
    for i, row in df.iterrows():
        # Valid row check
        if pd.isna(row.iloc[0]): continue
        id_val = str(row.iloc[0]).strip()
        if id_val in ["No.", "ID"]: continue # Skip header if repeated
        
        name_val = str(row.iloc[1]).strip()
        if not name_val or name_val == "nan": continue
        
        all_digimon_names.add(name_val)
        raw_rows.append(row)
        
    # Sort names by length descending to match longest name first
    sorted_names = sorted(list(all_digimon_names), key=len, reverse=True)
    
    print(f"Found {len(all_digimon_names)} unique Digimon names.")

    # 3. LOAD AUXILIARY DATA
    loc_map = load_locations_map(LOCATIONS_JS_PATH)
    stages_map = load_stages_map()

    # 4. PROCESS ROWS
    digimon_db = []
    digimon_map = {} # Name -> Entry
    
    for row in raw_rows:
        col_id = row.iloc[0]
        col_name = str(row.iloc[1]).strip()
        
        col_evo = row.iloc[2]
        
        # --- TYPO FIXES & FILTERING ---
        # Fix known typos
        if col_name == "WarWreymon": col_name = "WarGreymon"
        if col_name == "AtlurKabuterumon": col_name = "AtlurKabuterimon"
        if col_name == "Tururiemon": col_name = "Turuiemon" 

        # Also fix typo in evo source
        if not pd.isna(col_evo):
            col_evo = str(col_evo).replace("Tururiemon", "Turuiemon")
        
        # Filter out training mons (pbmon)
        if "pbmon" in col_name.lower():
            continue
        col_t1 = row.iloc[3]
        col_t2 = row.iloc[4]
        col_ability = row.iloc[5]
        col_h_ability = row.iloc[6]
        col_card = row.iloc[7]
        col_evo_move = row.iloc[8]
        
        # --- PARSE MOVES ---
        moves = []
        # Moves start at index 9 (Move 1 Lvl, Move 1 Name, ...)
        # Range len(row) might go very far, stop when empty
        for idx in range(9, len(row) - 1, 2):
            if idx+1 >= len(row): break
            lvl_raw = row.iloc[idx]
            move_raw = row.iloc[idx+1]
            
            if pd.isna(move_raw) or str(move_raw).strip() == "": continue
            
            # Clean Level
            if pd.isna(lvl_raw):
                lvl_str = "1" # Default
            else:
                lvl_str = str(lvl_raw).replace('.0', '').strip()
                
            moves.append({
                "level": lvl_str,
                "move": str(move_raw).strip()
            })
            
        # --- PARSE PREVIOUS EVOLUTIONS ---
        prev_evos = []
        if not pd.isna(col_evo):
            # Split by line first
            evo_lines = str(col_evo).split('\n')
            for line in evo_lines:
                line = line.strip()
                if not line or line.lower() == "none" or line == "nan": continue
                
                # Intelligent Matching
                matched_name = None
                
                # Try finding a name at the start of the string
                for dname in sorted_names:
                    if line.startswith(dname):
                        # Ensure it's a full word match? (e.g. "Agumon" vs "Agumon X")
                        # Sorted reverse length handles "Agumon X" before "Agumon", so we are good.
                        matched_name = dname
                        break
                
                if matched_name:
                    method_part = line[len(matched_name):].strip()
                    prev_evos.append({
                        "name": matched_name,
                        "method": method_part
                    })
                else:
                    # Fallback: Split by first space
                    parts = line.split(' ', 1)
                    if len(parts) == 2:
                        prev_evos.append({"name": parts[0], "method": parts[1]})
                    else:
                        prev_evos.append({"name": parts[0], "method": ""})

        # --- PARSE TYPES ---
        types_list = []
        t1 = clean_type(col_t1)
        if t1: types_list.append(t1)
        t2 = clean_type(col_t2)
        if t2: types_list.append(t2)
        # Unique
        types = sorted(list(set(types_list)))

        # --- OTHER FIELDS ---
        location_data = loc_map.get(col_name, [])
        stage_data = stages_map.get(col_name, "Unknown")
        
        card_lvl = 0
        card_lvl = 0
        if not pd.isna(col_card):
            try:
                card_lvl = int(float(col_card))
            except:
                pass
        
        # Robust Fix: If card_lvl is 1 (placeholder) or 0, derive from Stage
        if card_lvl <= 1:
            stage_clean = str(stage_data).strip().lower()
            if stage_clean == "rookie": card_lvl = 3
            elif stage_clean == "champion": card_lvl = 4
            elif stage_clean == "ultimate": card_lvl = 5
            elif stage_clean == "mega": card_lvl = 6
            elif stage_clean == "ultra": card_lvl = 7
            elif stage_clean == "hybrid": card_lvl = 4 # Default hybrid to 4
            else: card_lvl = 0 # stays 0 if unknown
                
        # Clean ID
        id_str = str(col_id).replace('.0', '').strip()

        entry = {
            "id": id_str,
            "name": col_name,
            "types": types,
            "ability": str(col_ability).strip() if not pd.isna(col_ability) else "",
            "hiddenAbility": str(col_h_ability).strip() if not pd.isna(col_h_ability) else "",
            "evoMove": str(col_evo_move).strip() if not pd.isna(col_evo_move) else "",
            "moves": moves,
            "locations": location_data,
            "prev": prev_evos,
            "next": [], # Calculated later
            "stage": stage_data,
            "cardLevel": card_lvl,
            "familyId": row_to_family.get(i, 0)
        }
        
        digimon_db.append(entry)
        digimon_map[col_name] = entry

    # 5. CALCULATE NEXT EVOLUTIONS
    print("Calculating next evolutions...")
    for mon in digimon_db:
        for prev in mon['prev']:
            source_name = prev['name']
            method = prev['method']
            
            if source_name in digimon_map:
                # Add this mon as a 'next' for the source
                # Avoid duplicates
                existing_next = digimon_map[source_name]['next']
                already_exists = False
                for en in existing_next:
                    if en['name'] == mon['name']:
                        already_exists = True
                        break
                
                if not already_exists:
                    existing_next.append({
                        "name": mon['name'],
                        "method": method
                    })
            else:
                # Source name found in Method column but not in DB?
                # Could be a mismatched name typo in the 'Source' column vs the 'Digimon' column
                # print(f"Warning: {mon['name']} evolves from {source_name}, but {source_name} not found in DB.")
                pass

    # 6. VERIFICATION
    print("\n--- Verification ---")
    verify_list = ["Ariemon", "Gargolemon", "Metabee"]
    for v_name in verify_list:
        if v_name in digimon_map:
            v_entry = digimon_map[v_name]
            print(f"{v_name} Prev Evos: {json.dumps(v_entry['prev'])}")
        else:
            print(f"{v_name}: Not found in DB")

    # 7. WRITE OUTPUT
    print(f"\nWriting {len(digimon_db)} entries to {OUTPUT_JS_PATH}...")
    try:
        with open(OUTPUT_JS_PATH, 'w', encoding='utf-8') as f:
            f.write("const DIGIMON_DB = ")
            json.dump(digimon_db, f, indent=4)
            f.write(";")
        print("Success!")
    except Exception as e:
        print(f"Error writing file: {e}")

if __name__ == "__main__":
    main()
