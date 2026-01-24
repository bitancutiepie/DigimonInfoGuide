import re

STAGE_TO_CARD = {
    "Fresh": 1,
    "In-Training": 2,
    "Rookie": 3,
    "Champion": 4,
    "Ultimate": 5,
    "Mega": 6,
    "Ultra": 7,
    "Ultra+": 7,
    "Armor": 4,
    "Hybrid": 4,
    "Unknown": 3
}

with open('guide_content.js', 'r', encoding='utf-8') as f:
    content = f.read()

def fix_entry(match):
    full_entry = match.group(0)
    name_match = re.search(r'"name":\s*"([^"]+)"', full_entry)
    stage_match = re.search(r'"stage":\s*"([^"]+)"', full_entry)
    level_match = re.search(r'"cardLevel":\s*(\d+)', full_entry)
    
    if name_match and stage_match and level_match:
        name = name_match.group(1)
        stage = stage_match.group(1)
        current_level = int(level_match.group(1))
        expected_level = STAGE_TO_CARD.get(stage)
        
        if expected_level is not None and current_level != expected_level:
            print(f"Fixing {name}: {stage} (Lv {current_level} -> {expected_level})")
            return re.sub(r'("cardLevel":\s*)\d+', f'\\1{expected_level}', full_entry)
    
    return full_entry

# Find all objects {} that contain "id", "name", "stage", "cardLevel"
new_content = re.sub(r'\{[^{}]*?"id":\s*"\d+".*?\}', fix_entry, content, flags=re.DOTALL)

with open('guide_content.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done.")
