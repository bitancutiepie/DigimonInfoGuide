$files = Get-ChildItem "d:\DigimonGuider\dataset\images\digimon"
$map = @{}

foreach ($f in $files) {
    # format: 120px-Name.jpg
    if ($f.Name -match "^\d+px-(.+)\.(.+)$") {
        $rawName = $matches[1] # e.g. Agumon, Agumon_black
        
        # Key 1: Exact match (case insensitive) of the name part with dashes/underlines
        $key1 = $rawName.ToLower()

        # Key 2: Spaces instead of underscores
        $key2 = $rawName.Replace('_', ' ').ToLower()

        # Key 3: Try to match "Agumon (Black)" style from "Agumon_black"
        # If last part is black, virus, etc.
        # This is hard to perfect, but the search party logic in JS can try multiple keys.
        
        # We store the relative path
        $path = "dataset/images/digimon/" + $f.Name

        if (-not $map.ContainsKey($key1)) { $map[$key1] = $path }
        if (-not $map.ContainsKey($key2)) { $map[$key2] = $path }
    }
}

$json = $map | ConvertTo-Json -Depth 2
"window.LOCAL_IMAGE_MAP = $json;" | Set-Content "d:\DigimonGuider\image_map.js" -Encoding UTF8
