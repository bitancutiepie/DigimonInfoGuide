import re

# Stage fixes: Digimon name -> new stage
fixes = {
    "Pegasmon": "Champion",
    "Wendimon": "Champion",
    "Andiramon": "Ultimate",
    "Nefertimon": "Champion",
    "Kyukimon": "Ultimate",
    "HolyDramon": "Mega",
    "Omegamon": "Mega",
    "Rafflesimon": "Mega",
    "Zamielmon": "Ultimate",
    "Megidramon": "Mega",
    "Magnamon": "Champion",
    "Whamon": "Champion",
    "Tlalocmon": "Mega",
    "Peacockmon": "Champion",
    "Agnimon": "Hybrid",
    "Aldamon": "Hybrid",
    "Wolfmon": "Hybrid",
    "Beowolfmon": "Hybrid",
    "Blitzmon": "Hybrid",
    "Grottemon": "Hybrid",
    "Mercurymon": "Mega",
    "Ranamon": "Hybrid",
    "Numemon": "Champion",
    "Monzaemon": "Ultimate",
    "Culumon": "Unknown",
    "Leomon": "Champion",
    "Marsmon": "Mega",
    "Arbormon": "Hybrid",
    "Examon": "Mega",
    "Ghilliedhumon": "Ultimate",
    "Brigadramon": "Mega",
    "Darkdramon": "Mega",
    "Hangyomon": "Ultimate",
    "Neptunemon": "Mega",
    "Aegisdramon": "Mega",
    "Proximamon": "Mega",
    "Soloogarmon": "Ultimate",
    "Fenriloogamon": "Mega",
    "Susanoomon": "Mega",
    "Garummon": "Hybrid",
    "Blizzarmon": "Hybrid",
    "Bolgmon": "Hybrid",
    "Ceresmon Medium": "Mega",
    "Gigasmon": "Hybrid",
    "Petaldramon": "Hybrid",
    "Shutumon": "Hybrid",
}

STAGE_TO_LEVEL = {
    "Rookie": 3, "Champion": 4, "Ultimate": 5, "Mega": 6, "Ultra": 7, "Armor": 4, "Hybrid": 4, "Unknown": 3, "Fresh": 1, "In-Training": 2,
}

with open('guide_content.js', 'r', encoding='utf-8') as f:
    content = f.read()

def fix_entry(match):
    full_entry = match.group(0)
    name_match = re.search(r'"name":\s*"([^"]+)"', full_entry)
    if name_match:
        name = name_match.group(1)
        if name in fixes:
            new_stage = fixes[name]
            new_level = STAGE_TO_LEVEL.get(new_stage, 4)
            # Replace stage
            full_entry = re.sub(r'("stage":\s*")[^"]+(")', f'\\g<1>{new_stage}\\g<2>', full_entry)
            # Replace cardLevel
            full_entry = re.sub(r'("cardLevel":\s*)\d+', f'\\g<1>{new_level}', full_entry)
            print(f"Fixed {name} -> {new_stage} (Lv {new_level})")
    return full_entry

# Find all blocks and fix
new_content = re.sub(r'\{[^{}]*?"id":\s*"\d+".*?\}', fix_entry, content, flags=re.DOTALL)

with open('guide_content.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Batch fix applied.")
