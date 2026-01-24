import re

# Standard mapping for verification
STAGE_TO_LEVEL = {
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

# Enhanced regex to match entry blocks more reliably
entry_pattern = re.compile(r'\{[^{}]*?"name":\s*"([^"]+)".*?"stage":\s*"([^"]+)".*?"cardLevel":\s*(\d+).*?\}', re.DOTALL)

print("--- Database Level Audit ---")
print(f"{'Name':<25} | {'Stage':<12} | {'Level':<5} | {'Expected':<8}")
print("-" * 60)

inconsistencies = 0
for match in entry_pattern.finditer(content):
    name, stage, current_level, = match.groups()
    current_level = int(current_level)
    expected_level = STAGE_TO_LEVEL.get(stage)
    
    if expected_level is not None and current_level != expected_level:
        print(f"{name:<25} | {stage:<12} | {current_level:<5} | {expected_level:<8}")
        inconsistencies += 1

print("-" * 60)
print(f"Total inconsistencies found: {inconsistencies}")
