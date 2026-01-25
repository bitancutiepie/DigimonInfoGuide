"""
Parse detailedRoutes.txt and create a location-based JSON structure.
"""
import json
import re

INPUT_FILE = "detailedRoutes.txt"
OUTPUT_FILE = "locations_data.js"

def parse_detailed_routes():
    """Parse the detailed routes markdown table."""
    locations_map = {}  # Location -> List of Digimon
    
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    in_table = False
    for line in lines:
        line = line.strip()
        
        # Detect table start
        if line.startswith('| ID |'):
            in_table = True
            continue
        
        # Skip separator line
        if line.startswith('|:---|'):
            continue
            
        # End of table
        if in_table and not line.startswith('|'):
            in_table = False
            continue
        
        if not in_table or not line.startswith('|'):
            continue
        
        # Parse table row
        parts = [p.strip() for p in line.split('|')]
        if len(parts) < 5:
            continue
        
        # parts[0] is empty, parts[1] is ID, parts[2] is name, parts[3] is type, parts[4] is location
        digimon_id = parts[1]
        digimon_name = parts[2].replace('**', '').strip()
        location_text = parts[4]
        
        # Skip header, empty, or internal data
        if not digimon_name or digimon_name == 'Digimon' or 'PBmon' in digimon_name or 'Internal' in location_text:
            continue
        
        # Parse locations from the text
        if 'Not Yet Logged' in location_text or not location_text:
            continue
        
        # Extract location names
        # Examples: "Route 101", "Spear Pillar F1", "Route 103 (Part 2)"
        location_matches = re.findall(r'(?:Route|Rt)\s+\d+(?:\s+\([^)]+\))?|[A-Z][a-zA-Z\s]+(?:Cave|Tower|Path|Tunnel|Woods|Pillar|Hideout|Falls|Pass|Crest|Area|City|Tomb)(?:\s+F\d+)?(?:\s+\([^)]+\))?', location_text)
        
        for loc in location_matches:
            loc = loc.strip()
            # Normalize location names
            loc = loc.replace('Rt ', 'Route ')
            
            if loc not in locations_map:
                locations_map[loc] = []
            
            if digimon_name not in locations_map[loc]:
                locations_map[loc].append(digimon_name)
    
    # Sort locations alphabetically
    sorted_locations = {}
    for loc in sorted(locations_map.keys()):
        sorted_locations[loc] = sorted(locations_map[loc])
    
    print(f"Parsed {len(sorted_locations)} unique locations")
    print(f"Total encounters: {sum(len(v) for v in sorted_locations.values())}")
    
    return sorted_locations

def main():
    locations = parse_detailed_routes()
    
    # Write as JavaScript file
    output = f"const LOCATIONS_DATA = {json.dumps(locations, indent=2)};"
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(output)
    
    print(f"\nWritten to {OUTPUT_FILE}")
    
    # Print sample
    print("\nSample locations:")
    for i, (loc, digimon) in enumerate(list(locations.items())[:5]):
        print(f"  {loc}: {len(digimon)} Digimon")

if __name__ == "__main__":
    main()
