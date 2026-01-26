$ErrorActionPreference = "Stop"

# 1. Read Reference CSV
# Skip first 2 lines. Line 3 is header "Digimon,".
# We will manually parse or use explicit headers to handle the empty 2nd column header.
$csvContent = Get-Content 'd:\DigimonGuider\reference\Evo Notes.xlsx - Notes Export.csv' | Select-Object -Skip 3
$referenceList = $csvContent | ConvertFrom-Csv -Header "Name", "EvolutionRaw"

# 2. Read DB
$dbContent = Get-Content 'd:\DigimonGuider\data\guide_content.js' -Raw

# Helper to normalize strings (remove extra spaces)
function Normalize-String($s) {
    if (-not $s) { return "" }
    return $s.Trim() -replace '\s+', ' '
}

$issues = @()

# 3. Build DB Map (Regex Extraction)
Write-Host "Parsing DB..."
$dbMap = @{}
# Alternate parsing: Split by { "id":
# The file format is very consistent: "    {\n        "id":"
$chunks = $dbContent -split '(?:\r?\n|^)\s*\{\s*"id":'
Write-Host "Split into $($chunks.Count) chunks."

foreach ($chunk in $chunks) {
    if ($chunk -match '"name":\s*"([^"]+)"') {
        $name = $matches[1]
        
        $prevs = @()
        if ($chunk -match '(?s)"prev":\s*\[(.*?)\]') {
            $prevBody = $matches[1]
            $pMatches = [regex]::Matches($prevBody, '(?s)\{\s*"name":\s*"([^"]+)".*?"method":\s*"([^"]+)"\s*\}')
            foreach ($pm in $pMatches) {
                $prevs += @{ Name = Normalize-String $pm.Groups[1].Value; Method = Normalize-String $pm.Groups[2].Value }
            }
        }

        $nexts = @()
        if ($chunk -match '(?s)"next":\s*\[(.*?)\]') {
            $nextBody = $matches[1]
            $nMatches = [regex]::Matches($nextBody, '(?s)\{\s*"name":\s*"([^"]+)".*?"method":\s*"([^"]+)"\s*\}')
            foreach ($nm in $nMatches) {
                $nexts += @{ Name = Normalize-String $nm.Groups[1].Value; Method = Normalize-String $nm.Groups[2].Value }
            }
        }

        $dbMap[$name] = @{ Prev = $prevs; Next = $nexts }
    }
}

Write-Host "DB Parsed. Analyzing $($dbMap.Count) entries..."

# 4. Compare
foreach ($row in $referenceList) {
    $digiName = Normalize-String $row.Name
    if ([string]::IsNullOrWhiteSpace($digiName)) { continue }

    if (-not $dbMap.ContainsKey($digiName)) {
        $issues += "MISSING IN DB: $digiName"
        # continue
    }
    else {
        $dbData = $dbMap[$digiName]
        $evoRaw = $row.EvolutionRaw

        # If reference has no evolution (Base form?)
        if ([string]::IsNullOrWhiteSpace($evoRaw)) {
            # Check if DB has prevs (maybe it shouldn't?)
            # But the user only said check if it's correct.
            # If CSV says nothing, maybe it's a Rookie.
        }
        else {
            # Parse Reference Evolutions
            # Format: "Source Method" OR multiple lines "Source Method\nSource2 Method2"
            $refEvos = $evoRaw -split "`n" | ForEach-Object { Normalize-String $_ }
            
            foreach ($refEvoLine in $refEvos) {
                # Attempt to split Name and Method keys using DB keys (Longest Prefix Match)
                $matchedKey = $null
                $matchedLen = 0
                
                foreach ($key in $dbMap.Keys) {
                    if ($refEvoLine.StartsWith($key) -and $key.Length -gt $matchedLen) {
                        # Ensure boundary (space or end of string) - logic check
                        # $key = "Agumon", Match "Agumon Lv18" -> StartsWith Yes.
                        # $key = "Agumon", Match "AgumonX" -> StartsWith Yes. boundary check needed.
                        $rest = $refEvoLine.Substring($key.Length)
                        if ($rest.Length -eq 0 -or $rest -match '^\s') {
                            $matchedKey = $key
                            $matchedLen = $key.Length
                        }
                    }
                }

                if ($matchedKey) {
                    $refSource = $matchedKey
                    $refMethod = Normalize-String ($refEvoLine.Substring($matchedLen))
                    
                    # 1. Check if DB has this Prev
                    $foundPrev = $false
                    foreach ($p in $dbData.Prev) {
                        if ($p.Name -eq $refSource) {
                            $foundPrev = $true
                            # Compare method
                            if ($p.Method -ne $refMethod) {
                                $issues += ("METHOD MISMATCH for {0}: Ref says '{1}' (from {2}), DB says '{3}'" -f $digiName, $refMethod, $refSource, $p.Method)
                            }
                            break
                        }
                    }
                    if (-not $foundPrev) {
                        $issues += ("MISSING PREV for {0}: Reference lists {1} ({2})" -f $digiName, $refSource, $refMethod)
                    }

                    # 2. Check source's next
                    if ($dbMap.ContainsKey($refSource)) {
                        $sourceData = $dbMap[$refSource]
                        $foundNext = $false
                        foreach ($n in $sourceData.Next) {
                            if ($n.Name -eq $digiName) {
                                $foundNext = $true
                                break
                            }
                        }
                        if (-not $foundNext) {
                            $issues += ("BROKEN LINK: {0} indicates next->{1} missing" -f $refSource, $digiName)
                        }
                    } 
                }
                else {
                    $issues += ("UNKNOWN SOURCE for {0}: '{1}' (No matching Digimon in DB)" -f $digiName, $refEvoLine)
                }
            }
        }
    }
}

$issues | Out-File 'd:\DigimonGuider\docs\evo_issues.txt' -Encoding UTF8
Write-Host "Found $($issues.Count) issues. Saved to evo_issues.txt"
$issues | Select-Object -First 20

