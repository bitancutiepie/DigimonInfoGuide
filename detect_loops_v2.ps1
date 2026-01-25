
try {
    $content = Get-Content -Path "d:\DigimonGuider\data\guide_content.js" -Raw
    
    # robustly extract json array
    $startIndex = $content.IndexOf('[')
    $endIndex = $content.LastIndexOf(']')
    
    if ($startIndex -eq -1 -or $endIndex -eq -1) {
        Write-Error "Could not find JSON array boundaries"
        exit 1
    }
    
    $jsonString = $content.Substring($startIndex, $endIndex - $startIndex + 1)
    
    # Try parsing
    $jsonObj = $jsonString | ConvertFrom-Json
    
    $digimonMap = @{}
    foreach ($d in $jsonObj) {
        if ($d.name) {
            $digimonMap[$d.name] = $d
        } 
    }
    
    $stages = @{
        "Rookie"   = 1
        "Champion" = 2
        "Ultimate" = 3
        "Mega"     = 4
        "Ultra"    = 5
    }
    
    Write-Host "Analyzing $($jsonObj.Count) Digimon..."
    
    foreach ($d in $jsonObj) {
        if ($d.next) {
            $currentRank = $stages[$d.stage]
            if ($null -eq $currentRank) { continue }
            
            foreach ($evo in $d.next) {
                $nextDigi = $digimonMap[$evo.name]
                if ($nextDigi) {
                    $nextRank = $stages[$nextDigi.stage]
                    
                    # Logic: If current is Ultimate(3) and next is Champion(2) -> ERROR
                    if ($currentRank -ge 2 -and $nextRank -lt $currentRank) {
                        Write-Host "LOOP FOUND: $($d.name) ($($d.stage)) evolves back to $($nextDigi.name) ($($nextDigi.stage))"
                    }
                }
            }
        }
    }
}
catch {
    Write-Error $_
}
