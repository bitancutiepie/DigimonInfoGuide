import requests
from PIL import Image
from io import BytesIO
import os

images_to_update = [
    {
        "name": "Tenkomon",
        "url": "https://static.wikia.nocookie.net/digimon/images/4/44/Tenkomon_%28Alysion%29_b.jpg/revision/latest/scale-to-width-down/1000?cb=20251231055137",
        "path": r"d:\DigimonGuider\images\digimon\s-u\tenkomon.jpg"
    },
    {
        "name": "Sekkamon",
        "url": "https://wikimon.net/images/thumb/9/9c/Sekkamon_alysion.png/179px-Sekkamon_alysion.png",
        "path": r"d:\DigimonGuider\images\digimon\s-u\sekkamon.jpg"
    },
    {
        "name": "Yukinamon",
        "url": "https://wikimon.net/images/8/83/Yukinamon_alysion.png",
        "path": r"d:\DigimonGuider\images\digimon\y-z\yukinamon.jpg"
    }
]

def download_and_replace(img_data):
    try:
        print(f"Downloading {img_data['name']} from {img_data['url']}...")
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        response = requests.get(img_data['url'], headers=headers)
        response.raise_for_status()

        # Try to open as image to verify and convert if necessary
        try:
            img = Image.open(BytesIO(response.content))
        except Exception as img_err:
            print(f"Error opening image data for {img_data['name']}: {img_err}")
            return

        target_path = img_data['path']
        print(f"Saving to {target_path}...")
        
        # Ensure directory exists (it should, but safety first)
        os.makedirs(os.path.dirname(target_path), exist_ok=True)
        
        # If target is jpg, ensure we convert to RGB (removing alpha if present)
        if target_path.lower().endswith('.jpg') or target_path.lower().endswith('.jpeg'):
            if img.mode in ('RGBA', 'P'):
                print(f"Converting {img_data['name']} to RGB for JPG format...")
                img = img.convert('RGB')
            img.save(target_path, 'JPEG', quality=95)
        else:
            img.save(target_path)
            
        print(f"Successfully updated {img_data['name']}")
        
    except Exception as e:
        print(f"Failed to update {img_data['name']}: {e}")

if __name__ == "__main__":
    for img in images_to_update:
        download_and_replace(img)
