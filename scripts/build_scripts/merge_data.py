
import csv
import re
import json
import os
import difflib

# Paths
REF_DIR = r"d:\DigimonGuider\reference"
CHECKLIST_FILE = os.path.join(REF_DIR, "Digimon Trials Dex Spreadsheet Open Beta 7o3 - Checklist.csv")
EVO_NOTES_FILE = os.path.join(REF_DIR, "Evo Notes.xlsx - Notes Export.csv")
ROUTES_FILE = os.path.join(REF_DIR, "detailedRoutes.txt")

OUTPUT_GUIDE = r"d:\DigimonGuider\guide_content.js"
OUTPUT_LOCATIONS = r"d:\DigimonGuider\locations_data.js"

def normalize_name(name):
    if not name: return ""
    # Remove junk
    name = name.strip().replace('*', '').replace('"', '').replace('\n', ' ')
    name = re.sub(r'\s+', ' ', name)
    
    mapping = {
        "WarWreymon": "WarGreymon",
        "Andiramon (Deva)": "AndiramonDeva",
        "Andiramon (Virus)": "Andiramon",
        "Imperialdramon DM": "Imperialdramon Dragon",
        "Imperialdramon Dragon Mode": "Imperialdramon Dragon",
        "Imperialdramon FM": "Imperialdramon Fighter",
        "Imperialdramon Fighter Mode": "Imperialdramon Fighter",
        "Imperialdramon PM": "Imperialdramon Paladin",
        "Imperialdramon Paladin Mode": "Imperialdramon Paladin",
        "Omegamon Alter-S": "Omegamon Alter S",
        "Gomgamon": "Gomamon",
        "Tururiemon": "Turuiemon",
        "Vritramon": "Vritamon",
        "AtlurKabuterumon": "AtlurKabuterimon",
        "Arbormor": "Arbormon",
        "Canturamon": "Caturamon",
        "Pumpkinmon": "Pumpmon",
        "Pumpkinmon": "Pumpmon", # Duplicate just in case
        "ShineGreymon BM": "ShineGreymon Burst",
        "Rosemon BM": "Rosemon Burst",
        "MirageGaogamon BM": "MirageGaogamon Burst",
        "Ravemon BM": "Ravemon Burst",
        "Dukemon CM": "Dukemon Crimson",
        "Beelzebumon BM": "Beelzebumon Blast",
        "Magnamon X": "Magnamon X",
        "Panjyamon X": "Panjyamon X",
        "ExVeemon": "ExVeemon",
        "Lvl New Mauvile": "New Mauville",
        "AndiramonDeva": "AndiramonDeva",
        "Cherubimon Evil": "Cherubimon Evil",
    }
    
    for k, v in mapping.items():
        if k.lower() == name.lower():
            return v
            
    name = name.replace("(Deva)", "Deva")
    name = name.replace("(Virus)", "")
    name = name.replace("(Evil)", "Evil")
    
    return name.strip()

def find_best_match(query, choices, threshold=0.8):
    if not query: return None
    # Try exact first
    if query in choices: return query
    
    # Try normalized exact
    q_norm = normalize_name(query).lower()
    for c in choices:
        if normalize_name(c).lower() == q_norm:
            return c
            
    # Fuzzy
    matches = difflib.get_close_matches(query, choices, n=1, cutoff=threshold)
    if matches:
        return matches[0]
    return None

def parse_checklist():
    digimon_db = {} # name -> data
    with open(CHECKLIST_FILE, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        header_found = False
        for row in reader:
            if not header_found:
                if row and row[0].strip() == "No.":
                    header_found = True
                continue
            
            if not row or not row[0].strip().isdigit():
                continue
                
            id_val = row[0].strip()
            raw_name = row[1].strip()
            if not raw_name: continue
            
            name = normalize_name(raw_name)
            types = [t.strip() if t.strip() != "???" else "CHAOS" for t in [row[2], row[3]] if t.strip()]
            ability = row[4].strip()
            hidden = row[5].strip()
            evo_move = row[7].strip()
            
            moves = []
            for i in range(8, len(row), 2):
                if i + 1 < len(row):
                    lv = row[i].strip()
                    mv = row[i+1].strip()
                    if lv and mv and lv.isdigit():
                        moves.append({"level": lv, "move": mv})
            
            digimon_db[name] = {
                "id": id_val,
                "name": name,
                "types": types,
                "ability": ability,
                "hiddenAbility": hidden,
                "evoMove": evo_move,
                "moves": moves,
                "locations": [],
                "prev": [],
                "next": []
            }
    return digimon_db

def parse_notes(digimon_db):
    all_names = sorted(list(digimon_db.keys()), key=len, reverse=True)
    with open(EVO_NOTES_FILE, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        started = False
        for row in reader:
            if not row: continue
            if not started:
                if row[0].strip().lower() == 'digimon':
                    started = True
                continue
            
            raw_row_name = row[0].strip()
            name = normalize_name(raw_row_name)
            if not name: continue
            
            # If not in checklist, add as placeholder
            if name not in digimon_db:
                digimon_db[name] = {
                    "id": "", "name": name, "types": [], "ability": "", "hiddenAbility": "",
                    "evoMove": "", "moves": [], "locations": [], "prev": [], "next": []
                }
            
            method_str = row[1].strip() if len(row) > 1 else ""
            if not method_str: continue
            
            target = digimon_db[name]
            remaining = method_str.replace('\n', ' ')
            found_parents = []
            
            # Step 1: Try to find exact known names
            for kname in all_names:
                pattern = r'\b' + re.escape(kname) + r'\b'
                if re.search(pattern, remaining, re.IGNORECASE):
                    found_parents.append(kname)
                    remaining = re.sub(pattern, " ", remaining, flags=re.IGNORECASE).strip()
            
            # Step 2: For whatever is left, check if any word looks like a Digimon name (Fuzzy)
            if remaining:
                words = re.findall(r'[a-zA-Z]+', remaining)
                for w in words:
                    if len(w) < 4: continue # Skip short junk words
                    match = find_best_match(w, all_names, threshold=0.85)
                    if match and match not in found_parents:
                        found_parents.append(match)
                        remaining = remaining.replace(w, " ").strip()

            method = remaining.replace("  ", " ").strip() or "Evolution"
            
            # Special case: If row name is same as parent (circular or typo), skip
            for p_name in found_parents:
                if p_name == name: continue
                parent = digimon_db[p_name]
                if not any(prev_item["name"] == p_name for prev_item in target["prev"]):
                    target["prev"].append({"name": p_name, "method": method})
                if not any(next_item["name"] == name for next_item in parent["next"]):
                    parent["next"].append({"name": name, "method": method})

def parse_routes(digimon_db):
    with open(ROUTES_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    rows = re.findall(r'^\|\s*(\d+|\-)\s*\|\s*\*\*(.*?)\*\*\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|', content, re.MULTILINE)
    all_names = list(digimon_db.keys())
    location_map = {}
    
    for id_val, raw_name, types_str, locs_raw, notes in rows:
        name = normalize_name(raw_name)
        if name not in digimon_db:
            # Try fuzzy match if checklist missing it but routes has it
            match = find_best_match(name, all_names)
            if match:
                name = match
            else:
                continue
        
        entry = digimon_db[name]
        if not entry["id"] and id_val != "-": entry["id"] = id_val
        if not entry["types"]: entry["types"] = [t.strip() if t.strip() != "???" else "CHAOS" for t in types_str.split('/') if t.strip()]
            
        if locs_raw and "Not Yet Logged" not in locs_raw and "Evolution Only" not in locs_raw:
            raw_loc_list = locs_raw.split(',')
            current_prefix = ""
            for loc_item in raw_loc_list:
                loc = loc_item.strip()
                if not loc: continue
                
                route_match = re.match(r'^(Route|Rt)\s+(\d+)', loc, re.I)
                if route_match:
                    current_prefix = f"Route {route_match.group(2)}"
                    loc = f"Route {route_match.group(2)}" + (loc[route_match.end():] if len(loc) > route_match.end() else "")
                elif loc.isdigit() and current_prefix:
                    loc = re.sub(r'\d+', loc, current_prefix)
                
                if loc not in entry["locations"]:
                    entry["locations"].append(loc)
                
                if loc not in location_map: location_map[loc] = []
                if name not in location_map[loc]: location_map[loc].append(name)
                
        if notes.lower().startswith('evolve to'):
            match = re.search(r'Evolve to\s+(.*?)\s*(?:\((.*?)\))?$', notes, re.I)
            if match:
                target_raw = match.group(1).strip()
                method = match.group(2).strip() if match.group(2) else "Unspecified"
                target_name = find_best_match(normalize_name(target_raw), all_names)
                
                if target_name and target_name != name:
                    target = digimon_db[target_name]
                    if not any(n["name"] == target_name for n in entry["next"]):
                        entry["next"].append({"name": target_name, "method": method})
                    if not any(p["name"] == name for p in target["prev"]):
                        target["prev"].append({"name": name, "method": method})

    return location_map

def main():
    print("--- Digimon Data Consolidation Starting ---")
    db = parse_checklist()
    print(f"Checklist loaded: {len(db)} entries")
    
    parse_notes(db)
    print("Evolution notes integrated.")
    
    loc_map = parse_routes(db)
    print("Routes and locations integrated.")
    
    final_db = sorted(db.values(), key=lambda x: (int(x["id"]) if x["id"].isdigit() else 9999, x["name"]))
    
    with open(OUTPUT_GUIDE, 'w', encoding='utf-8') as f:
        f.write("// Perfectly Formatted Digimon Data\n")
        f.write("const DIGIMON_DB = ")
        json.dump(final_db, f, indent=2)
        f.write(";\n")
        
    sorted_locs = {k: sorted(v) for k, v in sorted(loc_map.items())}
    with open(OUTPUT_LOCATIONS, 'w', encoding='utf-8') as f:
        f.write("// Perfectly Formatted Location Data\n")
        f.write("const LOCATIONS_DATA = ")
        json.dump(sorted_locs, f, indent=2)
        f.write(";\n")
    print("--- Success! ---")

if __name__ == "__main__":
    main()
