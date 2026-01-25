import os
import re

# Files to update
FILES = [
    os.path.join('data', 'guide_content.js'),
    os.path.join('data', 'data_drops.js'),
    os.path.join('data', 'evo_requirements.js'),
    os.path.join('data', 'locations_data.js'),
    os.path.join('data', 'reference_map.js')
]

def apply_replacements():
    # Mapping of Old -> New
    # Case insensitive patterns
    mapping = {
        # Digimon Types
        r'"wind"': r'"Flying"',
        r'"wind type"': r'"Flying type"',
        r'"fighter"': r'"Fighting"',
        r'"fighting"': r'"Fighting"', # Ensure proper case
        r'"machine"': r'"Steel"',
        
        # Evolution Methods & Data Types (Capitalized versions usually)
        r'"Wind Data"': r'"Flying Data"',
        r'"Mechanic Data"': r'"Steel Data"',
        # Update descriptions if needed
        r'the Wind element': r'the Flying element',
        r'Mechanic/Machine type': r'Steel type',
    }

    for path in FILES:
        if not os.path.exists(path):
            continue
            
        print(f"Processing {path}...")
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original = content
        for pattern, replacement in mapping.items():
            # Use regex for quoted strings specifically to avoid partial matches
            content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)
            
        if content != original:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✅ Updated {path}")
        else:
            print(f"ℹ️ No changes needed in {path}")

if __name__ == "__main__":
    apply_replacements()
