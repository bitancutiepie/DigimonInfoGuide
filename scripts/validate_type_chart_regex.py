import re

try:
    with open('d:/DigimonGuider/data/type_chart.js', 'r') as f:
        lines = f.readlines()
        
    keys = []
    # Pass 1: find keys
    for line in lines:
        m = re.match(r'\s*"(\w+)":\s*{', line)
        if m:
            keys.append(m.group(1))
            
    print("Keys found:", keys)
    
    # Check for duplicate keys
    if len(keys) != len(set(keys)):
        print("DUPLICATE KEYS DETECTED!")
        import collections
        print([item for item, count in collections.Counter(keys).items() if count > 1])
        
    # Pass 2: check values
    current_key = None
    row_count = 0
    
    bad_refs = []
    
    for line in lines:
        # Check arrays like weak: ["Type1", "Type2"]
        m_arr = re.search(r'(\w+):\s*\[(.*?)\]', line)
        if m_arr:
            prop = m_arr.group(1)
            content = m_arr.group(2)
            # Find quoted strings
            types_in_row = re.findall(r'"(\w+)"', content)
            
            for t in types_in_row:
                if t not in keys:
                    bad_refs.append(f"Invalid type '{t}' in {prop}")

    if bad_refs:
        print("Bad references found in Type Chart:")
        for b in bad_refs:
            print(b)
    else:
        print("Type Chart references are clean.")

except Exception as e:
    print(e)
