
import os

# Configuration
SOURCE_DIR = 'css/modules'
OUTPUT_FILE = 'css/bundle.css'

# Order matters for variables and base
ORDERED_BASICS = [
    'variables.css',
    'base.css'
]

def bundle_css():
    print(f"--- REGEN-SYSTEM: Bundling CSS to {OUTPUT_FILE} ---")
    
    if not os.path.exists(SOURCE_DIR):
        print(f"ERROR: Source directory {SOURCE_DIR} not found.")
        return

    css_content = [
        "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600&display=swap');",
        ""
    ]
    
    found_files = os.listdir(SOURCE_DIR)
    
    # 1. Add Basics
    for basic in ORDERED_BASICS:
        if basic in found_files:
            print(f"Adding basic: {basic}")
            path = os.path.join(SOURCE_DIR, basic)
            with open(path, 'r', encoding='utf-8') as f:
                css_content.append(f"\n/* --- SOURCE: {path} --- */\n{f.read()}")
            found_files.remove(basic)
    
    # 2. Add remaining modules
    for filename in sorted(found_files):
        if filename.endswith('.css'):
            print(f"Adding module: {filename}")
            path = os.path.join(SOURCE_DIR, filename)
            with open(path, 'r', encoding='utf-8') as f:
                css_content.append(f"\n/* --- SOURCE: {path} --- */\n{f.read()}")

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write("\n".join(css_content))
        
    print(f"--- REGEN-SYSTEM: CSS Bundling Complete. ---")

if __name__ == "__main__":
    bundle_css()
