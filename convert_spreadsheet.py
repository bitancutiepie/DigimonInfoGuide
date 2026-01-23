"""
Convert Digimon Trials spreadsheet data to JSON for website.
Merges CSV data with evolution notes from XLSX comments.
"""

import csv
import json
import re
import openpyxl

# Files
CSV_FILE = "Digimon Trials Dex Spreadsheet Open Beta 7o3 - Checklist.csv"
XLSX_FILE = "Evo Notes.xlsx"
OUTPUT_FILE = "guide_content.js"

def parse_moves(row):
    """Parse learnset from CSV row (pairs of level, move)."""
    moves = []
    # Columns 8+ contain alternating level/move pairs
    i = 8  # Start at column index 8 (Evo Move level is 6, move is 7, then learnset starts at 8)
    while i < len(row) - 1:
        level = row[i].strip() if row[i] else ""
        move = row[i+1].strip() if i+1 < len(row) and row[i+1] else ""
        if level and move:
            try:
                lvl = int(float(level))
                moves.append({"level": lvl, "move": move})
            except:
                pass
        i += 2
    return moves

def parse_evolution_note(note_text):
    """Parse evolution note text into structured data."""
    if not note_text:
        return []
    
    # Filter out Excel comment metadata
    skip_lines = [
        "[Threaded", "comment]", "Your version of Excel",
        "Comment:", "Learn more:", "microsoft.com", "https://",
        "newer version", "any edits"
    ]
    
    evolutions = []
    lines = note_text.strip().split('\n')
    for line in lines:
        line = line.strip()
        if not line:
            continue
        
        # Skip Excel metadata lines
        if any(skip in line for skip in skip_lines):
            continue
        
        # Skip very short lines (like "sa", author names)
        if len(line) < 3:
            continue
        
        # Try to extract: source name and method
        # Pattern: "SourceName Method" where method could be "Lv##", "Light Data", etc.
        match = re.match(r'^(.+?)\s+(Lv\s*\d+|Light|Dark|Data|Auspicious|Light Data|Dark Data|.+)$', line, re.IGNORECASE)
        if match:
            source = match.group(1).strip()
            method = match.group(2).strip()
            evolutions.append({"name": source, "method": method})
        else:
            # Just store the whole line as source with unknown method
            evolutions.append({"name": line, "method": ""})
    
    return evolutions

def load_evolution_notes():
    """Load evolution notes from XLSX comments."""
    notes = {}
    try:
        wb = openpyxl.load_workbook(XLSX_FILE)
        sheet = wb.active
        
        for row in sheet.iter_rows():
            for cell in row:
                if cell.comment and cell.value:
                    name = str(cell.value).strip()
                    note = cell.comment.text.strip()
                    notes[name] = note
        
        print(f"Loaded {len(notes)} evolution notes from {XLSX_FILE}")
    except Exception as e:
        print(f"Warning: Could not load notes from {XLSX_FILE}: {e}")
    
    return notes

def load_csv_data():
    """Load main data from CSV."""
    digimon_list = []
    
    with open(CSV_FILE, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        rows = list(reader)
    
    # Find header row (contains "No." and "Digimon")
    header_row = None
    for i, row in enumerate(rows):
        if len(row) > 1 and row[0] == "No." and row[1] == "Digimon":
            header_row = i
            break
    
    if header_row is None:
        # Default to row 3 based on CSV structure
        header_row = 2
    
    print(f"Header at row {header_row + 1}")
    
    # Process data rows
    for row in rows[header_row + 1:]:
        if len(row) < 3:
            continue
        
        dex_no = row[0].strip() if row[0] else ""
        name = row[1].strip() if row[1] else ""
        
        if not name or not dex_no:
            continue
        
        # Skip non-digimon entries
        if name.startswith("PBmon") or not re.match(r'^[\d.]+$', dex_no):
            continue
        
        try:
            dex_num = int(float(dex_no))
        except:
            continue
        
        # Types (columns 2 and 3)
        types = []
        if len(row) > 2 and row[2].strip():
            types.append(row[2].strip())
        if len(row) > 3 and row[3].strip():
            types.append(row[3].strip())
        
        # Abilities (columns 4 and 5)
        ability = row[4].strip() if len(row) > 4 and row[4] else ""
        hidden_ability = row[5].strip() if len(row) > 5 and row[5] else ""
        
        # Evolution move (columns 6 and 7)
        evo_level = row[6].strip() if len(row) > 6 and row[6] else ""
        evo_move = row[7].strip() if len(row) > 7 and row[7] else ""
        
        # Learnset
        moves = parse_moves(row)
        
        digimon_list.append({
            "dex": dex_num,
            "name": name,
            "types": types,
            "ability": ability,
            "hiddenAbility": hidden_ability,
            "evoLevel": int(float(evo_level)) if evo_level else None,
            "evoMove": evo_move,
            "moves": moves,
            "prev": [],
            "next": []
        })
    
    print(f"Loaded {len(digimon_list)} Digimon from CSV")
    return digimon_list

def build_evolution_links(digimon_list, notes):
    """Add evolution links based on notes."""
    name_to_digi = {d["name"]: d for d in digimon_list}
    
    for digi in digimon_list:
        note = notes.get(digi["name"], "")
        if note:
            evos = parse_evolution_note(note)
            for evo in evos:
                source_name = evo["name"]
                method = evo["method"]
                
                # Add to this digimon's prev
                digi["prev"].append({"name": source_name, "method": method})
                
                # Add to source's next if exists
                if source_name in name_to_digi:
                    source_digi = name_to_digi[source_name]
                    # Check if not already added
                    if not any(n["name"] == digi["name"] for n in source_digi["next"]):
                        source_digi["next"].append({"name": digi["name"], "method": method})

def main():
    print("Loading data...")
    
    # Load evolution notes
    notes = load_evolution_notes()
    
    # Load CSV data
    digimon_list = load_csv_data()
    
    # Build evolution links
    build_evolution_links(digimon_list, notes)
    
    # Sort by dex number
    digimon_list.sort(key=lambda x: x["dex"])
    
    # Count stats
    with_types = sum(1 for d in digimon_list if d["types"])
    with_moves = sum(1 for d in digimon_list if d["moves"])
    with_evos = sum(1 for d in digimon_list if d["prev"] or d["next"])
    
    print(f"\nStats:")
    print(f"  Total: {len(digimon_list)}")
    print(f"  With types: {with_types}")
    print(f"  With moves: {with_moves}")
    print(f"  With evolutions: {with_evos}")
    
    # Output as JS file (minified)
    output = f"const DIGIMON_DB = {json.dumps(digimon_list, separators=(',', ':'))};"
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(output)
    
    print(f"\nWritten to {OUTPUT_FILE} ({len(output):,} bytes)")

if __name__ == "__main__":
    main()
