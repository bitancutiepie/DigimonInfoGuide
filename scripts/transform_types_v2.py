import os
import re

# Paths
GUIDE_PATH = os.path.join('data', 'guide_content.js')

def transform_mon_types(path):
    if not os.path.exists(path):
        print(f"File {path} not found.")
        return

    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Define replacements for strings inside the types array
    # Logic: Find "types": [ ... ] blocks and replace specific words inside
    
    def replacer(match):
        types_block = match.group(0)
        # Apply replacements within this block only
        types_block = re.sub(r'"Fighter"', '"Fighting"', types_block, flags=re.IGNORECASE)
        types_block = re.sub(r'"Wind"', '"Flying"', types_block, flags=re.IGNORECASE)
        types_block = re.sub(r'"Machine"', '"Steel"', types_block, flags=re.IGNORECASE)
        
        # Deduplicate types if necessary (e.g., if it was ["Wind", "Flying"] -> ["Flying", "Flying"])
        # Extract names, deduplicate, and rebuild
        names = re.findall(r'"([^"]+)"', types_block)
        # Skip "types" itself
        if names and names[0] == "types":
            actual_types = []
            seen = set()
            for t in names[1:]:
                if t not in seen:
                    actual_types.append(t)
                    seen.add(t)
            
            # Reconstruct the block
            new_block = '        "types": [\n'
            new_block += ',\n'.join(f'            "{t}"' for t in actual_types)
            new_block += '\n        ]'
            return new_block
        return types_block

    # Match the types array pattern
    # We use a non-greedy match for the content between brackets
    pattern = r'"types":\s*\[[^\]]+\]'
    new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)

    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Successfully unified mon types in {path}")
    else:
        print(f"No mon types needed unification in {path}")

if __name__ == "__main__":
    transform_mon_types(GUIDE_PATH)
