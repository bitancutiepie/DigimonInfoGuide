// --- Storage Helpers ---
function getFavorites() {
    return JSON.parse(localStorage.getItem('digimon_favs')) || [];
}

function saveFavorites(favs) {
    localStorage.setItem('digimon_favs', JSON.stringify(favs));
}

function getTeam() {
    return JSON.parse(localStorage.getItem('digimon_team')) || [];
}

function saveTeam(team) {
    localStorage.setItem('digimon_team', JSON.stringify(team));
}

// --- Data Loading ---
function loadData() {
    if (typeof DIGIMON_DB === 'undefined') {
        console.error("DIGIMON_DB is not defined.");
        return;
    }

    DIGIMON_DB.forEach(entry => {
        if (!digimonMap.has(entry.name)) {
            digimonMap.set(entry.name, entry);
        } else {
            const existing = digimonMap.get(entry.name);
            entry.types.forEach(t => {
                if (!existing.types.includes(t)) existing.types.push(t);
            });
            entry.next.forEach(n => {
                if (!existing.next.some(en => en.name === n.name)) existing.next.push(n);
            });
            entry.prev.forEach(p => {
                if (!existing.prev.some(ep => ep.name === p.name)) existing.prev.push(p);
            });
            if (entry.locations) {
                if (!existing.locations) existing.locations = [];
                entry.locations.forEach(l => {
                    if (!existing.locations.includes(l)) existing.locations.push(l);
                });
            }
        }
        entry.types.forEach(t => allTypes.add(t));
    });

    // Find base forms (no prev evolutions and has known types)
    digimonMap.forEach((digi, name) => {
        const hasNoPrev = !digi.prev || digi.prev.length === 0;
        const hasKnownType = digi.types && digi.types.length > 0;
        const hasEvolutions = digi.next && digi.next.length > 0;
        if (hasNoPrev && hasKnownType && hasEvolutions) {
            baseForms.push(digi);
        }
    });
    baseForms.sort((a, b) => a.name.localeCompare(b.name));

    // Populate type filter dropdown
    const typeFilter = document.getElementById('typeFilter');
    if (typeFilter) {
        // Clear current options except the first one
        while (typeFilter.options.length > 1) {
            typeFilter.remove(1);
        }
        Array.from(allTypes).sort().forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            typeFilter.appendChild(option);
        });
    }

    // Populate location filter dropdown
    const routeInput = document.getElementById('routeInput');
    if (routeInput && typeof LOCATIONS_DATA !== 'undefined') {
        // Clear current options except the first one
        while (routeInput.options.length > 1) {
            routeInput.remove(1);
        }
        Object.keys(LOCATIONS_DATA).sort().forEach(loc => {
            const option = document.createElement('option');
            option.value = loc;
            option.textContent = loc;
            routeInput.appendChild(option);
        });
    }
}

// --- Image Sources & Path Logic ---

// Helper to determine alphabetical group folder
function getGroupFolder(fileName) {
    const firstChar = fileName[0].toLowerCase();
    if (!/[a-z]/.test(firstChar)) return "others";

    const groups = [
        { start: 'a', end: 'c' },
        { start: 'd', end: 'f' },
        { start: 'g', end: 'i' },
        { start: 'j', end: 'l' },
        { start: 'm', end: 'o' },
        { start: 'p', end: 'r' },
        { start: 's', end: 'u' },
        { start: 'v', end: 'x' },
        { start: 'y', end: 'z' }
    ];

    const group = groups.find(g => firstChar >= g.start && firstChar <= g.end);
    return group ? `${group.start}-${group.end}` : "others";
}

// Helper to get consistent safe filename matching downloader
function getLocalFileName(name) {
    return name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '') + '.jpg';
}

// Get primary image URL (Local Only)
function getImageUrl(name) {
    const fileName = getLocalFileName(name);
    const group = getGroupFolder(fileName);
    return `images/digimon/${group}/${fileName}`;
}

// Get all fallback URLs for a Digimon (Now only local path)
function getFallbackUrls(name) {
    return [getImageUrl(name)];
}
