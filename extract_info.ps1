$content = Get-Content 'd:\DigimonGuider\guide_content.js' -Raw
# Extract name and stage
# We assume the format is somewhat consistent
$digimonList = @()
$matches = [regex]::Matches($content, '(?s)\{\s*"id".*?"name":\s*"([^"]+)".*?"stage":\s*"([^"]+)"')

foreach ($match in $matches) {
    $digimonList += [PSCustomObject]@{
        Name  = $match.Groups[1].Value
        Stage = $match.Groups[2].Value
    }
}

$digimonList | Format-Table -AutoSize
$digimonList | Export-Csv -Path 'd:\DigimonGuider\digimon_stages.csv' -NoTypeInformation
Write-Host "Extracted $($digimonList.Count) Digimon."
