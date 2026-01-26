import pandas as pd

try:
    df = pd.read_excel('d:/DigimonGuider/data/DataSource.xlsx', header=None, skiprows=2)
    # Check column 7 (index 7) which corresponds to Card Level/Ability 2/Hidden Ability/etc?
    # Let's check headers again.
    # Previous analysis said:
    # 0: No
    # 1: Digimon
    # 2: Evo Source
    # 3: Type 1
    # 4: Type 2
    # 5: Ability
    # 6: Hidden Ability
    # 7: Card Level?
    
    print("Sample content of Column 7 (Card Level?):")
    print(df.iloc[:20, 7])
    
    print("\nSample content of Column 8:")
    print(df.iloc[:20, 8])

except Exception as e:
    print(e)
