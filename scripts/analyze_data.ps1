$ErrorActionPreference = "Stop"

try {
    $content = Get-Content 'd:\DigimonGuider\data\guide_content.js' -Raw
    # Remove the variable assignment and semicolon
    $jsonC = $content -replace '^const DIGIMON_DB =', '' -replace ';$', ''
    $data = $jsonC | ConvertFrom-Json
} catch {
    Write-Error "Failed to parse JSON: $_"
    exit 1
}

$digimonMap = @{}
foreach ($d in $data) {
    if ($digimonMap.ContainsKey($d.name)) {
        Write-Host "Duplicate Digimon found: $($d.name)"
    }
    $digimonMap[$d.name] = $d
}

$issues = @()

foreach ($d in $data) {
    # Check Next evolutions
    if ($d.next) {
        foreach ($evo in $d.next) {
            if (-not $digimonMap.ContainsKey($evo.name)) {
                $issues += "[Missing Target] $($d.name) ($($d.stage)) -> $($evo.name)"
            } else {
                # Check for bidirectional link if possible, or just validity
                # $target = $digimonMap[$evo.name]
                # if ($target.prev) { ... }
            }
        }
    }

    # Check Prev evolutions
    if ($d.prev) {
        foreach ($prev in $d.prev) {
            if (-not $digimonMap.ContainsKey($prev.name)) {
                $issues += "[Missing Source] $($d.name) ($($d.stage)) <- $($prev.name)"
            }
        }
    }
}

if ($issues.Count -gt 0) {
    Write-Host "Found $($issues.Count) issues:"
    $issues | ForEach-Object { Write-Host $_ }
} else {
    Write-Host "No broken links found."
}

# Output sample for verification
Write-Host "`nSample Data:"
$data | Select-Object -First 5 | ForEach-Object {
    Write-Host "$($_.name) - $($_.stage)"
    if ($_.next) { Write-Host "  Next: $($_.next.name -join ', ')" }
}

