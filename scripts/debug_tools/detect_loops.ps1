
$content = Get-Content -Path "d:\DigimonGuider\data\guide_content.js" -Raw
$jsonObj = $content -replace '^const DIGIMON_DB = ', '' -replace ';$', '' | ConvertFrom-Json

$digimonMap = @{}
foreach ($d in $jsonObj) {
    if ($d.name) {
        $digimonMap[$d.name] = $d
    }
}

$stages = @{
    "Rookie" = 1
    "Champion" = 2
    "Ultimate" = 3
    "Mega" = 4
    "Ultra" = 5
}

Write-Host "Analyzing $($jsonObj.Count) Digimon for loops..."

foreach ($d in $jsonObj) {
    if ($d.next) {
        $currentRank = $stages[$d.stage]
        if ($null -eq $currentRank) { continue }

        foreach ($evo in $d.next) {
            $nextDigi = $digimonMap[$evo.name]
            if ($nextDigi) {
                $nextRank = $stages[$nextDigi.stage]
                if ($nextRank -lt $currentRank -and $currentRank -ge 2) {
                     Write-Host "REGRESSION FOUND: $($d.name) ($($d.stage)) -> $($nextDigi.name) ($($nextDigi.stage))" -ForegroundColor Red
                }
            }
        }
    }
}
