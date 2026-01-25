$ErrorActionPreference = "Stop"

$content = Get-Content 'd:\DigimonGuider\data\guide_content.js' -Raw
# Remove single line comments
$content = $content -replace '//.*', ''
# Remove block comments (simple version, might break if strings contain */)
$content = $content -replace '/\*[\s\S]*?\*/', ''
# Remove the JS assignment part
$content = $content -replace '^const DIGIMON_DB =', '' -replace ';$', ''
# Trim whitespace
$content = $content.Trim()

# Try to parse
try {
    $data = $content | ConvertFrom-Json -Depth 10
    Write-Host "Successfully parsed $($data.Count) Digimon entries."
    
    # Export to a temporary clean JSON for easier usage if needed, or just use $data
    $data | ConvertTo-Json -Depth 10 | Out-File 'd:\DigimonGuider\temp_db.json' -Encoding UTF8
}
catch {
    Write-Error "JSON Parsing Failed: $_"
    # Print the first few chars to see what's wrong
    Write-Host "Start of content: $($content.Substring(0, 100))"
}

