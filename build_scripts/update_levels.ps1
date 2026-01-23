$content = Get-Content -Path "d:\DigimonGuider\guide_content.js" -Raw

# Remove "const DIGIMON_DB = " and trailing ";"
# Using regex or simple replace
$jsonPart = $content -replace "^//.*`r`nconst DIGIMON_DB = ", "" -replace ";\s*$", ""
# The first line might be comment, check index
if ($content -match "const DIGIMON_DB = ") {
    $startIndex = $content.IndexOf("const DIGIMON_DB = ") + 19
    $endIndex = $content.LastIndexOf(";")
    $jsonPart = $content.Substring($startIndex, $endIndex - $startIndex)
}

$digimonList = $jsonPart | ConvertFrom-Json

# create a lookup table
$digimonMap = @{}
foreach ($d in $digimonList) {
    $digimonMap[$d.name] = $d
}

# visited map (Name -> Depth)
$visited = @{}

# Queue for BFS
$queue = [System.Collections.Generic.Queue[Object]]::new()

# Find roots and initialize
foreach ($d in $digimonList) {
    if ($null -eq $d.prev -or $d.prev.Count -eq 0) {
        $visited[$d.name] = 0
        $obj = @{ name = $d.name; depth = 0 }
        $queue.Enqueue($obj)
    }
}

function Get-StageName($depth) {
    switch ($depth) {
        0 { return "Rookie" }
        1 { return "Champion" }
        2 { return "Ultimate" }
        3 { return "Mega" }
        4 { return "Ultra" }
        Default { return "Ultra+" }
    }
}

while ($queue.Count -gt 0) {
    $current = $queue.Dequeue()
    $name = $current.name
    $depth = $current.depth
    
    $digi = $digimonMap[$name]
    if ($null -eq $digi) { continue }
    
    # Update properties
    # Note: PowerShell objects from JSON are PSCustomObject. Adding members needs Add-Member
    if ($null -eq $digi.stage) {
        $digi | Add-Member -MemberType NoteProperty -Name "stage" -Value (Get-StageName $depth) -Force
    } else {
        $digi.stage = (Get-StageName $depth)
    }
    
    if ($null -eq $digi.cardLevel) {
        $digi | Add-Member -MemberType NoteProperty -Name "cardLevel" -Value (3 + $depth) -Force
    } else {
        $digi.cardLevel = (3 + $depth)
    }
    
    if ($null -ne $digi.next) {
        foreach ($n in $digi.next) {
            $nextName = $n.name
            if (-not $visited.ContainsKey($nextName)) {
                $visited[$nextName] = $depth + 1
                $queue.Enqueue(@{ name = $nextName; depth = $depth + 1 })
            }
        }
    }
}

# Convert back to JSON
$newJson = $digimonList | ConvertTo-Json -Depth 10

# Reconstruct file
$newContent = "// Perfectly Formatted Digimon Data`r`nconst DIGIMON_DB = $newJson;"

Set-Content -Path "d:\DigimonGuider\guide_content.js" -Value $newContent -Encoding UTF8
Write-Host "Database updated successfully via PowerShell."
