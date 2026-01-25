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

// --- Image Sources & Fallbacks ---

// Direct Fandom Wiki image URLs for Digimon not on official Reference Book
const FANDOM_DIRECT_IMAGES = {
    "piddomon": "https://static.wikia.nocookie.net/digimon/images/1/1a/Piddomon_b.jpg",
    "kingwhamon": "https://static.wikia.nocookie.net/digimon/images/4/45/6-05_Analyzer-06_JP.png",
    "ancientmegatheriummon": "https://static.wikia.nocookie.net/digimon/images/1/15/AncientMegatheriummon_b.jpg",
    "megatheurimon": "https://static.wikia.nocookie.net/digimon/images/1/15/AncientMegatheriummon_b.jpg", // Same as AncientMegatheriummon
    "grapleomon": "https://static.wikia.nocookie.net/digimon/images/1/1f/GrapLeomon_b.jpg",
    "jagamon": "https://static.wikia.nocookie.net/digimon/images/a/a3/Jagamon_b.jpg",
    "marinechimairamon": "https://static.wikia.nocookie.net/digimon/images/6/61/MarineChimairamon_b.jpg",
    "marinekimeramon": "https://static.wikia.nocookie.net/digimon/images/6/61/MarineChimairamon_b.jpg", // Alias
    "gokuumon": "https://static.wikia.nocookie.net/digimon/images/d/d9/Gokuumon_b.jpg",
    "chuumon": "https://static.wikia.nocookie.net/digimon/images/9/9a/Chuumon_b.jpg",
    "extyrannomon": "https://static.wikia.nocookie.net/digimon/images/1/11/ExTyrannomon_b.jpg",
    "laeusgreymon": "https://static.wikia.nocookie.net/digimon/images/b/ba/LaeusGreymon_b.jpg",
    "zinogarurumon": "https://static.wikia.nocookie.net/digimon/images/9/98/ZinoGarurumon_b.jpg",
    "greymon": "https://static.wikia.nocookie.net/digimon/images/5/56/Greymon_b.jpg",
    "metabee": "https://static.wikia.nocookie.net/digimon/images/c/c0/Metabee_i.png/revision/latest?cb=20221109044519",
    "rokusho": "https://static.wikia.nocookie.net/digimon/images/a/ad/Rokusho_i.png/revision/latest?cb=20221109045412",
    "gaioumonittomode": "https://static.wikia.nocookie.net/digimon/images/1/13/Gaiomon_Fierce_Blade_Mode_b.jpg/revision/latest?cb=20210630041844",
    "gaioumon itto mode": "https://static.wikia.nocookie.net/digimon/images/1/13/Gaiomon_Fierce_Blade_Mode_b.jpg/revision/latest?cb=20210630041844",
};

// Image source configurations - multiple fallbacks for maximum coverage
const IMAGE_SOURCES = {
    // Primary: Official Digimon Reference Book (Japanese)
    digimonNet: (mappedName) => `https://digimon.net/cimages/digimon/${mappedName}.jpg`,

    // Secondary: Fandom Wiki (direct static URLs for specific Digimon)
    fandomDirect: (name) => {
        const lowerName = name.toLowerCase().replace(/\s+/g, '');
        return FANDOM_DIRECT_IMAGES[lowerName] || null;
    },

    // Tertiary: Digimon API (uses English names)
    digimonApi: (name) => `https://digimon-api.com/images/digimon_sprites/${encodeURIComponent(name)}.png`,

    // Quaternary: Wikimon (uses English names, various formats)
    wikimon: (name) => `https://wikimon.net/images/${name.charAt(0).toLowerCase()}/${name.replace(/\s+/g, '_')}.jpg`,

    // Quinary: Digimon API alternate format
    digimonApiAlt: (name) => `https://digi-api.com/images/digimon/w/${encodeURIComponent(name)}.png`,
};

// Get the mapped name for official reference book
function getMappedName(name) {
    const lowerName = name.toLowerCase();

    // Check the reference map first
    if (window.REFERENCE_IMAGE_MAP && window.REFERENCE_IMAGE_MAP[lowerName]) {
        return window.REFERENCE_IMAGE_MAP[lowerName];
    }

    // Fallback: normalize the name
    return lowerName
        .replace(/\s+/g, '')
        .replace(/[\[\]\(\)]/g, '')
        .replace(/[^a-z0-9-]/g, '');
}

// Get primary image URL
function getImageUrl(name) {
    const fallbacks = getFallbackUrls(name);
    return fallbacks[0];
}

// Get all fallback URLs for a Digimon
function getFallbackUrls(name) {
    const mappedName = getMappedName(name);
    const fandomUrl = IMAGE_SOURCES.fandomDirect(name);

    // If explicitly marked as missing in our map, prioritize Fandom images
    if (mappedName === "PHOTO NOT AVAILABLE") {
        const urls = [];
        if (fandomUrl) urls.push(fandomUrl);
        urls.push(
            IMAGE_SOURCES.wikimon(name),
            IMAGE_SOURCES.digimonApi(name),
            IMAGE_SOURCES.digimonApiAlt(name),
        );
        return urls;
    }

    // Standard fallback chain with Fandom as secondary option
    const urls = [IMAGE_SOURCES.digimonNet(mappedName)];
    if (fandomUrl) urls.push(fandomUrl);
    urls.push(
        IMAGE_SOURCES.wikimon(name),
        IMAGE_SOURCES.digimonApi(name),
        IMAGE_SOURCES.digimonApiAlt(name),
    );
    return urls;
}
