# Digi-API Image Tester (PowerShell)
$dbPath = "d:\DigimonGuider\data\guide_content.js"
$content = Get-Content $dbPath -Raw

# Extract a few names using regex to avoid parsing the whole large JS file
$matches = [regex]::Matches($content, '"name":\s*"(.*?)"')
$names = $matches.Value | ForEach-Object { $_ -replace '"name":\s*', '' -replace '"', '' } | Select-Object -Unique -First 20

Write-Host "--- Digi-API Image Coverage Test (PowerShell) ---"
Write-Host "Checking 20 sample Digimon from your database...`n"

$hits = 0
foreach ($name in $names) {
    $apiUrlName = $name.Replace(" ", "_").Replace("[", "").Replace("]", "").Replace("(", "").Replace(")", "").Replace("'", "%27")
    $url = "https://digi-api.com/images/digimon/w/$apiUrlName.png"
    
    try {
        $response = Invoke-WebRequest -Uri $url -Method Head -ErrorAction Stop
        if ($response.StatusCode -eq 200) {
            Write-Host "Checking: $($name.PadRight(20)) ✅ Found" -ForegroundColor Green
            $hits++
        }
    }
    catch {
        Write-Host "Checking: $($name.PadRight(20)) ❌ MISSING" -ForegroundColor Red
    }
}

$rate = ($hits / 20) * 100
Write-Host "`nTest Finished. Success Rate: $rate%"
Write-Host "Mapping logic used: name.Replace(' ', '_').Replace('(', '')..."
