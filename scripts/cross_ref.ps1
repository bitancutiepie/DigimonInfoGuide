$ErrorActionPreference = "Stop"

# 1. Fetch ALL Digimon from API
Write-Host "Fetching API data..."
$apiUrl = "https://digi-api.com/api/v1/digimon?pageSize=2000"
$apiData = Invoke-RestMethod -Uri $apiUrl
$apiList = $apiData.content

$apiNameMap = @{}
foreach ($d in $apiList) {
    # Store exact name and normalized for lookup
    $apiNameMap[$d.name] = $d.name
    $apiNameMap[$d.name.ToLower().Replace(" ", "")] = $d.name # "holyangemon" -> "Holy Angemon"
}

Write-Host "API returned $($apiList.Count) Digimon."

# 2. Read Local DB
$dbPath = "d:\DigimonGuider\data\guide_content.js"
$content = Get-Content $dbPath -Raw
# Extract name fields simply
$regex = '"name":\s*"(.*?)"'
$matches = [regex]::Matches($content, $regex)
$localNames = $matches.Value | ForEach-Object { $_ -replace '"name":\s*', '' -replace '"', '' } | Select-Object -Unique

# 3. Cross Reference
$mapping = @{}
$missing = @()

foreach ($rawName in $localNames) {
    # Normalize local name
    $searchName = $rawName.ToLower().Replace(" ", "")
    
    if ($apiNameMap.ContainsKey($rawName)) {
        # Exact Match
        continue
    }
    elseif ($apiNameMap.ContainsKey($searchName)) {
        # Normalized Match (e.g. Local "HolyAngemon" -> API "Holy Angemon")
        $mapping[$rawName] = $apiNameMap[$searchName]
    }
    else {
        # Possible English/Dub difference or Missing
        $missing += $rawName
    }
}

# 4. Generate Output Files
# Discrepancy Map
$mapJson = $mapping | ConvertTo-Json -Depth 2
$mapFileContent = "window.start_api_map = $mapJson;"
Set-Content -Path "d:\DigimonGuider\data\api_name_map.js" -Value $mapFileContent

# Missing Report
$missingPath = "d:\DigimonGuider\docs\missing_in_api.txt"
$missing | Out-File $missingPath

Write-Host "Done!"
Write-Host "Mapped: $($mapping.Count) Names"
Write-Host "Missing/Unknown: $($missing.Count) Names"
Write-Host "Map saved to data\api_name_map.js"
Write-Host "Missing list saved to docs\missing_in_api.txt"
