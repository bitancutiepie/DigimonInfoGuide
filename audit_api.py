import json
import urllib.request
import re
import time

# Mapping for API stages (JP) to our stages (EN)
API_TO_DB_STAGE = {
    "Baby I": "Fresh",
    "Baby II": "In-Training",
    "Child": "Rookie",
    "Adult": "Champion",
    "Perfect": "Ultimate",
    "Ultimate": "Mega",
    "Hybrid": "Hybrid",
    "Armor": "Armor"
}

# The user's provided mapping for cardLevels (standard TCG)
# Rookie=3, Champion=4, Ultimate=5, Mega=6, Ultra=7
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
    "Hybrid": 4, # Default, might need overrides
    "Unknown": 3
}

def get_db_entries():
    with open('guide_content.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    entries = []
    # Pattern to match ID, Name, Stage, and CardLevel
    pattern = re.compile(r'\{[^{}]*?"id":\s*"(\d+)".*?"name":\s*"([^"]+)".*?"stage":\s*"([^"]+)".*?"cardLevel":\s*(\d+).*?\}', re.DOTALL)
    for match in pattern.finditer(content):
        entries.append({
            'id': match.group(1),
            'name': match.group(2),
            'stage': match.group(3),
            'cardLevel': int(match.group(4))
        })
    return entries

def check_api(name):
    query = name.replace(" ", "%20")
    url = f"https://digi-api.com/api/v1/digimon/{query}"
    try:
        with urllib.request.urlopen(url) as response:
            data = json.loads(response.read())
            if 'levels' in data and len(data['levels']) > 0:
                return data['levels'][0]['level']
    except:
        pass
    return None

def main():
    db_entries = get_db_entries()
    print(f"Auditing {len(db_entries)} Digimon...")
    
    # We'll check in batches to avoid overwhelming the API
    # and just for a few known problematic ones first to see if we spot a pattern.
    to_check = db_entries
    
    mismatches = []
    for i, entry in enumerate(to_check):
        api_level = check_api(entry['name'])
        if api_level:
            expected_stage = API_TO_DB_STAGE.get(api_level, api_level)
            
            # Special case for "Ultimate" (API) which is "Mega" (DB)
            # and "Perfect" (API) which is "Ultimate" (DB)
            
            if entry['stage'] != expected_stage:
                mismatches.append({
                    'name': entry['name'],
                    'db_stage': entry['stage'],
                    'api_stage': expected_stage,
                    'db_level': entry['cardLevel']
                })
                print(f" mismatch: {entry['name']} (DB: {entry['stage']} vs API: {expected_stage})")
        
        # Stop after 20 found to verify pattern
        if len(mismatches) >= 20:
            break
        
        # Sleep to be polite
        time.sleep(0.1)

    print("\n--- Summary ---")
    for m in mismatches:
        print(f"{m['name']}: {m['db_stage']} -> {m['api_stage']}")

if __name__ == "__main__":
    main()
