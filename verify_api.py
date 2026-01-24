import json
import urllib.request
import re

# Mapping for API stages to our stages
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

# Mapping for Stage to cardLevel
STAGE_TO_CARD = {
    "Fresh": 1,
    "In-Training": 2,
    "Rookie": 3,
    "Champion": 4,
    "Ultimate": 5,
    "Mega": 6,
    "Ultra": 7,
    "Armor": 4,
    "Hybrid": 4,
    "Unknown": 3
}

def get_api_data():
    print("Fetching data from API...")
    url = "https://digi-api.com/api/v1/digimon?pageSize=1500"
    try:
        with urllib.request.urlopen(url) as response:
            data = json.loads(response.read())
            return data['content']
    except Exception as e:
        print(f"Error fetching API: {e}")
        return []

def get_db_data():
    with open('guide_content.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract entries
    entries = []
    # Pattern to match ID and Name and Stage
    for match in re.finditer(r'\{[^{}]*?"id":\s*"(\d+)".*?"name":\s*"([^"]+)".*?"stage":\s*"([^"]+)".*?"cardLevel":\s*(\d+).*?\}', content, re.DOTALL):
        entries.append({
            'id': match.group(1),
            'name': match.group(2),
            'stage': match.group(3),
            'cardLevel': int(match.group(4))
        })
    return entries

def run_comparison():
    api_list = get_api_data()
    api_map = {item['name'].lower(): item['id'] for item in api_list}
    
    db_list = get_db_data()
    print(f"Comparing {len(db_list)} DB entries...")
    
    mismatches = []
    
    for db_item in db_list:
        name = db_item['name']
        name_lower = name.lower()
        
        # Try finding in API
        api_id = api_map.get(name_lower)
        if not api_id:
            # Try variations (e.g. without spaces, with hyphens)
            name_alt = name_lower.replace(" ", "")
            for api_name in api_map:
                if api_name.replace(" ", "").replace("-", "") == name_alt:
                    api_id = api_map[api_name]
                    break
        
        if api_id:
            # Fetch individual detail for level info
            # (The list view doesn't have levels, unfortunately)
            # Actually, let's just fetch the ones we suspect or do a small batch
            mismatches.append(name)

    # Since fetching 500+ individual details is too slow, 
    # let's focus on the user's report of "others".
    # Wait, the list view might have levels if we use a different endpoint?
    # No, usually need /digimon/{id}
    
    print(f"Candidates for check: {len(mismatches)}")
    
run_comparison()
