import os
import urllib.request
import re
import sys

# Configuration
IMAGE_DIR = os.path.join('images', 'digimon')

def get_group_folder(first_char):
    first_char = first_char.lower()
    if not first_char.isalpha():
        return "others"
    
    groups = [
        ('a', 'c'), ('d', 'f'), ('g', 'i'), ('j', 'l'),
        ('m', 'o'), ('p', 'r'), ('s', 'u'), ('v', 'x'), ('y', 'z')
    ]
    
    for start, end in groups:
        if start <= first_char <= end:
            return f"{start}-{end}"
    return "others"

def get_safe_filename(name):
    # Match JS and downloader logic
    safe = name.lower()
    safe = re.sub(r'\s+', '_', safe)
    safe = re.sub(r'[^a-z0-9_]', '', safe)
    return safe + '.jpg'

def update_image(mon_name, image_url):
    filename = get_safe_filename(mon_name)
    group = get_group_folder(filename[0])
    group_dir = os.path.join(IMAGE_DIR, group)
    
    if not os.path.exists(group_dir):
        os.makedirs(group_dir)
        
    dest = os.path.join(group_dir, filename)

    print(f"Updating image for '{mon_name}'...")
    print(f"Source: {image_url}")
    print(f"Target: {dest}")

    try:
        req = urllib.request.Request(image_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as response:
            if response.status == 200:
                with open(dest, 'wb') as f:
                    f.write(response.read())
                print("\n✅ Successfully updated!")
                return True
            else:
                print(f"\n❌ Failed: Status Code {response.status}")
    except Exception as e:
        print(f"\n❌ Error: {str(e)}")
    
    return False

if __name__ == "__main__":
    if len(sys.argv) >= 3:
        # CLI usage: python update_mon_image.py "Agumon" "http://url.com/img.jpg"
        update_image(sys.argv[1], sys.argv[2])
    else:
        # Interactive mode
        print("--- Digimon Image Updater ---")
        name = input("Enter Digimon Name: ").strip()
        url = input("Enter Image Address (URL): ").strip()
        
        if name and url:
            update_image(name, url)
        else:
            print("Missing name or URL.")
