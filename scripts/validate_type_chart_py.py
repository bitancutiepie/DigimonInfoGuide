import json
import re

try:
    with open('d:/DigimonGuider/data/type_chart.js', 'r') as f:
        content = f.read()
        
    # Extract JSON object
    match = re.search(r'const TYPE_CHART = ({[\s\S]*?});', content)
    if not match:
        print("Could not find TYPE_CHART object")
        exit(1)
        
    # Python doesn't allow comments in JSON/dict text usually, but simple eval might work if it's clean JS object
    # However, keys might not be quoted? In the file they are quoted.
    # Comments like // ... need removal
    
    json_str = match.group(1)
    # Remove comments
    json_str = re.sub(r'//.*', '', json_str)
    
    # Eval is dangerous but local file
    # We need to make sure keys are quoted (they are) and brackets match
    # JSON requires double quotes. JS allows single.
    # The file uses double quotes based on cat output.
    
    data = json.loads(json_str)
    
    keys = list(data.keys())
    invalid_refs = []
    
    for key, entry in data.items():
        for prop in ['weak', 'resist', 'immune', 'strong', 'weakAttack', 'immuneAttack']:
            if prop in entry:
                for t in entry[prop]:
                    if t not in keys:
                        invalid_refs.append({
                            "source": key,
                            "property": prop,
                            "invalidType": t
                        })
                        
    if invalid_refs:
        print("Found invalid type references:")
        print(json.dumps(invalid_refs, indent=2))
    else:
        print("All type references are valid.")

except Exception as e:
    print(f"Error: {e}")
