$ErrorActionPreference = "Continue"

$content = Get-Content 'd:\DigimonGuider\guide_content.js' -Raw
# Split by { "id":
$chunks = $content -split '(?:\r?\n|^)\s*\{\s*"id":'

$dbMap = @{}

foreach ($chunk in $chunks) {
    if ($chunk -match '"name":\s*"([^"]+)"') {
        $name = $matches[1]
        
        $prevs = @()
        if ($chunk -match '(?s)"prev":\s*\[(.*?)\]') {
            $prevBody = $matches[1]
            $pMatches = [regex]::Matches($prevBody, '(?s)\{\s*"name":\s*"([^"]+)".*?"method":\s*"([^"]+)"\s*\}')
            foreach ($pm in $pMatches) {
                $prevs += @{ Name = $pm.Groups[1].Value.Trim(); Method = $pm.Groups[2].Value.Trim() }
            }
        }

        $nexts = @()
        if ($chunk -match '(?s)"next":\s*\[(.*?)\]') {
            $nextBody = $matches[1]
            $nMatches = [regex]::Matches($nextBody, '(?s)\{\s*"name":\s*"([^"]+)".*?"method":\s*"([^"]+)"\s*\}')
            foreach ($nm in $nMatches) {
                $nexts += @{ Name = $nm.Groups[1].Value.Trim(); Method = $nm.Groups[2].Value.Trim() }
            }
        }

        $dbMap[$name] = @{ Prev = $prevs; Next = $nexts }
    }
}

$issues = @()

foreach ($name in $dbMap.Keys) {
    $data = $dbMap[$name]

    # Check Next -> Prev consistency
    foreach ($next in $data.Next) {
        $targetName = $next.Name
        if (-not $dbMap.ContainsKey($targetName)) {
            $issues += "MISSING TARGET: $name evolves to $targetName, but $targetName is not in DB."
        }
        else {
            $targetData = $dbMap[$targetName]
            $foundBackLink = $false
            foreach ($tp in $targetData.Prev) {
                if ($tp.Name -eq $name) {
                    $foundBackLink = $true
                    break
                }
            }
            if (-not $foundBackLink) {
                # We can construct the fix suggestion here
                $issues += "BROKEN LINK: $name -> $targetName exists, but $targetName <- $name is missing."
            }
        }
    }

    # Check Prev -> Next consistency
    foreach ($prev in $data.Prev) {
        $sourceName = $prev.Name
        if (-not $dbMap.ContainsKey($sourceName)) {
            $issues += "MISSING SOURCE: $name evolves from $sourceName, but $sourceName is not in DB."
        }
        else {
            $sourceData = $dbMap[$sourceName]
            $foundFwdLink = $false
            foreach ($sn in $sourceData.Next) {
                if ($sn.Name -eq $name) {
                    $foundFwdLink = $true
                    break
                }
            }
            if (-not $foundFwdLink) {
                $issues += "BROKEN LINK: $name <- $sourceName exists, but $sourceName -> $name is missing."
            }
        }
    }
}

$issues | Sort-Object -Unique | Out-File 'd:\DigimonGuider\internal_issues.txt' -Encoding UTF8
Write-Host "Found $($issues.Count) internal inconsistency issues."
$issues | Select-Object -First 20
