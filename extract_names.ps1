// PowerShell script to extract all unique Digimon names from guide_content.js
$content = Get-Content 'd:\DigimonGuider\guide_content.js' -Raw
$matches = [regex]::Matches($content, '"name":\s*"([^"]+)"')
$names = $matches | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique

# Output to file for processing
$names | Out-File 'd:\DigimonGuider\all_digimon_names.txt' -Encoding UTF8

Write-Host "Extracted $($names.Count) unique Digimon names"
$names | Select-Object -First 20
