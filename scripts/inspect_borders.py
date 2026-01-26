import openpyxl

try:
    print("Loading workbook...")
    wb = openpyxl.load_workbook('d:/DigimonGuider/data/DataSource.xlsx')
    sheet = wb.active # or wb.sheetnames[0]
    
    print(f"Active sheet: {sheet.title}")
    
    print("\nInspecting borders for first 30 rows (Column A-B)...")
    
    # Iterate rows 1 to 30
    # Note: openpyxl is 1-indexed for rows
    for r in range(1, 31):
        cell_a = sheet.cell(row=r, column=1) # No.?
        cell_b = sheet.cell(row=r, column=2) # Name?
        
        # Check top border
        has_top = False
        if cell_a.border and cell_a.border.top and cell_a.border.top.style:
            has_top = True
            
        # Check bottom border
        has_bottom = False
        if cell_a.border and cell_a.border.bottom and cell_a.border.bottom.style:
            has_bottom = True
            
        val_name = cell_b.value
        
        border_info = []
        if has_top: border_info.append("TOP")
        if has_bottom: border_info.append("BOTTOM")
        
        border_str = "+".join(border_info) if border_info else "None"
        
        print(f"Row {r}: {val_name} (Border: {border_str})")

except Exception as e:
    print(f"Error: {e}")
