import json
import urllib.request
import re
import time

# Digimon Name Aliases (DB Name -> API Name)
ALIASES = {
    "HolyAngemon": "MagnaAngemon",
    "Tailmon": "Gatomon",
    "HolyDramon": "Magnadramon",
    "V-mon": "Veemon",
    "Chibimon": "DemiVeemon",
    "Yaksamon": "Yasyamon",
    "Yukidarumon": "Frigimon",
    "Insekimon": "Meteormon",
    "Tuchidarumon": "MudFrigimon",
    "Galgomon": "Gargomon",
    "SaintGalgomon": "MegaGargomon",
    "Agnimon": "Agunimon",
    "Wolfmon": "Lobomon",
    "Vritramon": "BurningGreymon",
    "Garmmon": "KendoGarurumon",
    "Blitzmon": "Beetlemon",
    "Bolgmon": "MetalKabuterimon",
    "Chackmon": "Kumamon",
    "Blizzarmon": "Korikakumon",
    "Fairymon": "Kazemon",
    "Shutumon": "Zephyrmon",
    "Grottemon": "Grumblemon",
    "Culumon": "Calumon",
    "Omegamon": "Omnimon",
    "Dukemon": "Gallantmon",
    "Piyomon": "Biyomon",
    "Lilimon": "Lillymon",
    "Hououmon": "Phoenixmon",
    "HerakleKabuterimon": "HerculesKabuterimon",
    "Sleipmon": "Kentaurosmon",
    "Duftmon": "Leopardmon",
    "Craniummon": "Craniamon",
    "Plotmon": "Salamon",
}

API_TO_DB_STAGE = {
    "Baby I": "Fresh", "Baby II": "In-Training", "Child": "Rookie", "Adult": "Champion", "Perfect": "Ultimate", "Ultimate": "Mega", "Hybrid": "Hybrid", "Armor": "Armor"
}

STAGE_TO_LEVEL = {
    "Fresh": 1, "In-Training": 2, "Rookie": 3, "Champion": 4, "Ultimate": 5, "Mega": 6, "Ultra": 7, "Ultra+": 7, "Armor": 4, "Hybrid": 4, "Unknown": 3
}

def get_api_level(db_name):
    api_name = ALIASES.get(db_name, db_name)
    query = api_name.replace(" ", "%20")
    try:
        url = f"https://digi-api.com/api/v1/digimon/{query}"
        with urllib.request.urlopen(url, timeout=5) as response:
            data = json.loads(response.read())
            if 'levels' in data and len(data['levels']) > 0:
                return data['levels'][0]['level']
    except:
        pass
    return None

def main():
    # Read with utf-8-sig to handle BOM
    with open('guide_content.js', 'r', encoding='utf-8-sig') as f:
        content = f.read()
    
    # Strip JS assignment to get JSON
    json_str = content.replace("const DIGIMON_DB = ", "").strip()
    if json_str.endswith(";"):
        json_str = json_str[:-1]
    
    # Also strip the header comment if it exists
    if json_str.startswith("//"):
        json_str = "\n".join(json_str.split("\n")[1:])
        
    db = json.loads(json_str)
    
    print(f"Auditing {len(db)} Digimon against API...")
    fixes = 0
    
    for i, digi in enumerate(db):
        name = digi['name']
        api_level = get_api_level(name)
        
        if api_level:
            new_stage = API_TO_DB_STAGE.get(api_level)
            if new_stage:
                target_level = STAGE_TO_LEVEL.get(new_stage)
                
                changed = False
                if digi.get('stage') != new_stage:
                    print(f"[{i+1}] {name}: stage {digi.get('stage')} -> {new_stage}")
                    digi['stage'] = new_stage
                    changed = True
                    
                if target_level and digi.get('cardLevel') != target_level:
                    print(f"[{i+1}] {name}: cardLevel {digi.get('cardLevel')} -> {target_level}")
                    digi['cardLevel'] = target_level
                    changed = True
                
                if changed: fixes += 1
            else:
                # print(f"[{i+1}] {name}: UNMAPPED {api_level}")
                pass
        
        # Throttling to be safe
        time.sleep(0.02)
        if (i+1) % 50 == 0:
            print(f"Processed {i+1}/{len(db)}...")

    # Write back
    with open('guide_content.js', 'w', encoding='utf-8') as f:
        f.write("// Perfectly Formatted Digimon Data\n")
        f.write("const DIGIMON_DB = " + json.dumps(db, indent=4) + ";\n")
        
    print(f"\nDone! Applied fixes to {fixes} Digimon.")

if __name__ == "__main__":
    main()
