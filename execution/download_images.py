import os
import re
import urllib.request
import time
import json

# Paths
DB_PATH = os.path.join('data', 'guide_content.js')
REF_MAP_PATH = os.path.join('data', 'reference_map.js')
IMAGE_DIR = os.path.join('images', 'digimon')

def get_group_folder(first_char):
    first_char = first_char.lower()
    if not first_char.isalpha():
        return "others"
    
    # Define groupings (3 letters each)
    groups = [
        ('a', 'c'),
        ('d', 'f'),
        ('g', 'i'),
        ('j', 'l'),
        ('m', 'o'),
        ('p', 'r'),
        ('s', 'u'),
        ('v', 'x'),
        ('y', 'z')
    ]
    
    for start, end in groups:
        if start <= first_char <= end:
            return f"{start}-{end}"
    
    return "others"

def get_safe_filename(name):
    # Match the JS logic: lowercase, spaces to underscores, remove non-alphanumeric
    safe = name.lower()
    safe = re.sub(r'\s+', '_', safe)
    safe = re.sub(r'[^a-z0-9_]', '', safe)
    return safe + '.jpg'

def get_urls(name, ref_map):
    lower_name = name.lower()
    mapped = ref_map.get(lower_name)
    urls = []

    if mapped and mapped != "PHOTO NOT AVAILABLE":
        urls.append(f"https://digimon.net/cimages/digimon/{mapped}.jpg")

    # API fallbacks
    api_name = name.replace(' ', '_').replace('[', '').replace(']', '').replace('(', '').replace(')', '')
    api_name_encoded = urllib.parse.quote(name)

    urls.append(f"https://digi-api.com/images/digimon/w/{urllib.parse.quote(api_name)}.png")
    urls.append(f"https://digimon-api.com/images/digimon_sprites/{api_name_encoded}.png")
    urls.append(f"https://wikimon.net/images/{name[0].lower()}/{api_name}.jpg")

    return urls

print("Loading data...")

# Utility to parse "const X = [...]" hackily
def parse_js_array(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        start = content.find('[')
        end = content.rfind(']')
        return re.findall(r'"name":\s*"([^"]+)"', content)

def parse_js_obj(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        matches = re.findall(r'"([^"]+)":\s*"([^"]+)"', content)
        return {k.lower(): v for k, v in matches}

names = list(set(parse_js_array(DB_PATH)))
ref_map = parse_js_obj(REF_MAP_PATH)

print(f"Total unique Digimon to check: {len(names)}")

downloaded = 0
skipped = 0
failed = 0

for i, name in enumerate(names):
    filename = get_safe_filename(name)
    group = get_group_folder(filename[0])
    group_dir = os.path.join(IMAGE_DIR, group)
    
    if not os.path.exists(group_dir):
        os.makedirs(group_dir)
        
    dest = os.path.join(group_dir, filename)

    if os.path.exists(dest):
        skipped += 1
        continue

    urls = get_urls(name, ref_map)
    success = False

    print(f"[{i+1}/{len(names)}] {name}... ", end="", flush=True)

    for url in urls:
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=5) as response:
                if response.status == 200:
                    with open(dest, 'wb') as f:
                        f.write(response.read())
                    success = True
                    break
        except Exception:
            continue

    if success:
        print("✅ OK")
        downloaded += 1
    else:
        print("❌ FAILED")
        failed += 1

    time.sleep(0.05)

print(f"\nFinished!\nDownloaded: {downloaded}\nSkipped: {skipped}\nFailed: {failed}")
