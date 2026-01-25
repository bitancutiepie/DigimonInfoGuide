import json
import re

INPUT_FILE = r"d:\DigimonGuider\newDigimonGuide.txt"
OUTPUT_FILE = r"d:\DigimonGuider\guide_content.js"

VALID_TYPES = {
    "Fire", "Water", "Ice", "Ground", "Rock", "Electric", "Holy", "Dark", 
    "Fighting", "Steel", "Bug", "Poison", "Undead", "Dragon", 
    "Fairy", "Magic", "Normal", "Mystery", "Grass", "Flying"
}

def normalize_type(t):
    t = t.strip().title()
    if t == "Fight": return "Fighting"
    if t == "Fly": return "Flying"
    return t

def parse_types(type_str):
    types = []
    for t in type_str.split():
        normalized = normalize_type(t)
        if normalized in VALID_TYPES:
            types.append(normalized)
    return list(set(types))

def is_valid_name(name):
    """Check if a name looks like a real Digimon name"""
    if not name or len(name) < 3 or len(name) > 40:
        return False
    # Reject names starting with special chars
    if re.match(r'^[\-=\[\{\<\d🔥💀❌✝️⚔️❤️👍👀]', name):
        return False
    # Reject names that are purely dashes or punctuation
    if re.match(r'^[\-=]+$', name):
        return False
    # Reject meta text
    if any(x in name.lower() for x in ['pinned', 'exported', 'work in prog', 'type chart', 'gender lock', 'digicongratz', 'interest', 'neutral to all', 'is weak against']):
        return False
    # Reject method strings mistakenly treated as names
    if re.match(r'^(lvl|Lvl|Light|Dark|Water|Fire|Earth|Wind|Ice|Metal|Wood|Thunder|Female|Male|Lowkey|Amped|Jogress|Data|Mechanic|Attack|Defense|Scary Plush|Cute Plush|Unholy|Both|Gakuren|Sachet|Kings rock|Level up|Red Digicore|Auspicious Armor|Malicious Armor)\b', name, re.I):
        return False
    return True

def parse_entity(text):
    text = text.strip()
    match = re.match(r'^(.*?)\s*\(([^)]+)\)\s*(.*)$', text)
    if match:
        name = match.group(1).strip()
        types = parse_types(match.group(2))
        rest = match.group(3).strip()
        return name, types, rest
    
    keywords = r'(?=\s+(?:lvl|Jogress|jogress|with|Item|holding|using|Gakuren|Data|learning|without|randomly|male|female|low key|lowkey|amped|Amped))'
    parts = re.split(keywords, text, 1, flags=re.IGNORECASE)
    name = parts[0].strip()
    rest = parts[1].strip() if len(parts) > 1 else ""
    return name, [], rest

def process_guide():
    digimon = {}  # name -> {name, types, next, prev}
    
    def get_or_create(name):
        if not is_valid_name(name):
            return None
        if name not in digimon:
            digimon[name] = {"name": name, "types": [], "next": [], "prev": []}
        return digimon[name]
    
    def add_types(entry, types):
        if not entry: return
        for t in types:
            if t and t not in entry["types"]:
                entry["types"].append(t)
    
    def link(parent_name, child_name, method):
        if not is_valid_name(parent_name) or not is_valid_name(child_name):
            return
        parent = get_or_create(parent_name)
        child = get_or_create(child_name)
        if not parent or not child:
            return
        
        if not any(n["name"] == child_name for n in parent["next"]):
            parent["next"].append({"name": child_name, "method": method})
        if not any(p["name"] == parent_name for p in child["prev"]):
            child["prev"].append({"name": parent_name, "method": method})
    
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    current_parent = None
    
    for line in lines:
        original = line
        stripped = line.strip()
        
        if not stripped or stripped.startswith('=') or stripped.startswith('[') or stripped.startswith('{') or ':' in stripped[:20]:
            continue
        
        processed = stripped.replace('><', '>')
        
        if '>' not in processed:
            name, types, _ = parse_entity(stripped)
            entry = get_or_create(name)
            if entry:
                add_types(entry, types)
            continue
        
        parts = processed.split('>')
        is_indented = original.startswith(' ') or original.startswith('\t')
        prev_name = current_parent if is_indented else None
        
        for i, part in enumerate(parts):
            part = part.strip()
            if not part:
                continue
            
            targets = [part] if i == 0 else part.split(' or ')
            
            for target in targets:
                name, types, rest = parse_entity(target)
                
                if i == 0:
                    if not is_indented and is_valid_name(name):
                        entry = get_or_create(name)
                        add_types(entry, types)
                        prev_name = name
                        current_parent = name
                else:
                    if is_valid_name(name) and is_valid_name(prev_name):
                        entry = get_or_create(name)
                        add_types(entry, types)
                        
                        method = ""
                        if i == 1 and is_indented:
                            method = parts[0].strip()
                        else:
                            _, _, method = parse_entity(parts[i-1])
                        
                        link(prev_name, name, method)
                    
                    if len(targets) == 1 and is_valid_name(name):
                        prev_name = name
    
    # Final cleanup - remove entries with no connections and no types
    result = []
    valid_names = set(digimon.keys())
    
    for name in sorted(valid_names):
        entry = digimon[name]
        # Filter connections to only valid names
        entry["next"] = [n for n in entry["next"] if n["name"] in valid_names]
        entry["prev"] = [p for p in entry["prev"] if p["name"] in valid_names]
        result.append(entry)
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write("const DIGIMON_DB=")
        json.dump(result, f, separators=(',', ':'))
        f.write(";")
    
    print(f"Processed {len(result)} Digimon entries")

if __name__ == "__main__":
    process_guide()
