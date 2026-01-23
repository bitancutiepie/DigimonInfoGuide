const fs = require('fs');
const path = require('path');

// --- CONFIGURATION ---
const REF_DIR = path.join('d:', 'DigimonGuider', 'reference');
const FILES = {
    checklist: path.join(REF_DIR, "Digimon Trials Dex Spreadsheet Open Beta 7o3 - Checklist.csv"),
    notes: path.join(REF_DIR, "Evo Notes.xlsx - Notes Export.csv"),
    routes: path.join(REF_DIR, "detailedRoutes.txt")
};

const OUTPUT = {
    content: path.join('d:', 'DigimonGuider', 'guide_content.js'),
    locations: path.join('d:', 'DigimonGuider', 'locations_data.js')
};

// --- DATA STORAGE ---
const digimonDB = new Map(); // Key: Name (Normalized)
const idMap = new Map();     // Key: ID, Value: Name (Normalized)
const locationMap = new Map(); // Key: Location Name, Value: Array of Digimon Names

// --- HELPERS ---
function normalizeName(name) {
    if (!name) return "";
    let clean = name.trim().replace(/\s+/g, ' ');

    const mapping = {
        "WarWreymon": "WarGreymon",
        "Andiramon (Deva)": "AndiramonDeva",
        "Andiramon (Virus)": "Andiramon",
        "Imperialdramon DM": "Imperialdramon Dragon",
        "Imperialdramon Dragon Mode": "Imperialdramon Dragon",
        "Imperialdramon FM": "Imperialdramon Fighter",
        "Imperialdramon Fighter Mode": "Imperialdramon Fighter",
        "Imperialdramon PM": "Imperialdramon Paladin",
        "Imperialdramon Paladin Mode": "Imperialdramon Paladin",
        "Omegamon Alter-S": "Omegamon Alter S",
        "Gomgamon": "Gomamon",
        "Tururiemon": "Turuiemon",
        "Tururiemon": "Turuiemon",
        "Tururiemon": "Turuiemon",
        "Tururiemon": "Turuiemon",
        "Vritramon": "Vritamon",
        "AtlurKabuterumon": "AtlurKabuterimon",
        "Arbormor": "Arbormon",
        "Canturamon": "Caturamon",
        "Pumpkinmon": "Pumpmon",
        "ShineGreymon BM": "ShineGreymon Burst",
        "Rosemon BM": "Rosemon Burst",
        "MirageGaogamon BM": "MirageGaogamon Burst",
        "Ravemon BM": "Ravemon Burst",
        "Dukemon CM": "Dukemon Crimson",
        "Beelzebumon BM": "Beelzebumon Blast",
        "Lvl New Mauvile": "New Mauville",
    };

    for (let key in mapping) {
        if (key.toLowerCase() === clean.toLowerCase()) return mapping[key];
    }

    // Generic replacements
    clean = clean.replace(/\(Deva\)/i, "Deva")
        .replace(/\(Virus\)/i, "")
        .replace(/\(Evil\)/i, "Evil")
        .trim();

    return clean;
}

// --- PARSING FUNCTIONS ---

// 1. Checklist (ID, Stats, Moves, Types)
function parseChecklist() {
    const data = fs.readFileSync(FILES.checklist, 'utf8');
    const lines = data.split(/\r?\n/);

    lines.forEach(line => {
        if (!line.trim() || line.startsWith(',,') || line.startsWith('No.,')) return;

        // Simple CSV split (works for this specific data)
        const cols = line.split(',');
        const id = cols[0].trim();
        if (!id || isNaN(parseInt(id))) return;

        const rawName = cols[1].trim();
        if (!rawName) return;

        const name = normalizeName(rawName);
        const types = [cols[2], cols[3]].map(t => t.trim()).filter(t => t);
        const ability = cols[4].trim();
        const hiddenAbility = cols[5].trim();
        const evoMove = cols[7].trim();

        const moves = [];
        for (let i = 8; i < cols.length; i += 2) {
            const level = cols[i] ? cols[i].trim() : "";
            const moveName = cols[i + 1] ? cols[i + 1].trim() : "";
            if (level && moveName) {
                moves.push({ level, move: moveName });
            }
        }

        const entry = {
            id,
            name,
            types,
            ability,
            hiddenAbility,
            evoMove,
            moves,
            prev: [],
            next: [],
            locations: []
        };

        digimonDB.set(name, entry);
        idMap.set(id, name);
    });
    console.log(`Parsed ${digimonDB.size} entries from Checklist.`);
}

// 2. Evolution Notes (Deep evolution logic)
function parseNotes() {
    const data = fs.readFileSync(FILES.notes, 'utf8');
    const lines = data.split(/\r?\n/);

    let started = false;
    const allNames = Array.from(digimonDB.keys()).sort((a, b) => b.length - a.length);

    lines.forEach(line => {
        const cols = line.split(',');
        if (!cols[0]) return;
        if (cols[0].trim().toLowerCase() === 'digimon') {
            started = true;
            return;
        }
        if (!started) return;

        const name = normalizeName(cols[0].trim());
        const methodStr = cols[1] ? cols[1].trim() : "";
        if (!methodStr) return;

        if (!digimonDB.has(name)) {
            // Create placeholders for forms not in checklist (Burst mode, etc.)
            digimonDB.set(name, {
                id: "", name, types: [], ability: "", hiddenAbility: "",
                evoMove: "", moves: [], prev: [], next: [], locations: []
            });
        }

        const target = digimonDB.get(name);

        // Extract potential parents from method string
        let remainingMethod = methodStr;
        let foundParents = [];

        allNames.forEach(n => {
            const regex = new RegExp(`\\b${n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
            if (regex.test(remainingMethod)) {
                foundParents.push(n);
                remainingMethod = remainingMethod.replace(regex, "").trim();
            }
        });

        const method = remainingMethod.replace(/\s+/g, ' ').trim() || "Evolution";

        foundParents.forEach(parentName => {
            const parent = digimonDB.get(parentName);

            // Avoid duplicates
            if (!target.prev.find(p => p.name === parentName)) {
                target.prev.push({ name: parentName, method });
            }
            if (!parent.next.find(n => n.name === name)) {
                parent.next.push({ name, method });
            }
        });
    });
    console.log('Evolution notes processed.');
}

// 3. Routes (Locations + missing evolution links)
function parseRoutes() {
    const data = fs.readFileSync(FILES.routes, 'utf8');
    const lines = data.split(/\r?\n/);

    lines.forEach(line => {
        // Match table rows: | ID | Digimon | Type | Location | Notes |
        const match = line.match(/^\|\s*(\d+|\-)\s*\|\s*\*\*(.*?)\*\*\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|/);
        if (!match) return;

        const id = match[1].trim();
        const name = normalizeName(match[2]);
        const typesStr = match[3].trim();
        const locsRaw = match[4].trim();
        const notes = match[5].trim();

        if (!digimonDB.has(name)) return;
        const entry = digimonDB.get(name);

        // Fill ID if missing
        if (!entry.id && id !== '-') entry.id = id;

        // Fill Types if missing
        if (entry.types.length === 0 && typesStr) {
            entry.types = typesStr.split('/').map(t => t.trim()).filter(t => t);
        }

        // Process Locations
        if (locsRaw && !locsRaw.includes('Not Yet Logged') && !locsRaw.includes('Evolution Only') && !locsRaw.includes('Internal')) {
            const splitLocs = locsRaw.split(',').map(l => l.trim());
            let currentPrefix = "";

            splitLocs.forEach(loc => {
                if (!loc) return;

                // Route prefix propagation
                const routeMatch = loc.match(/^(Route|Rt)\s+(\d+)/i);
                if (routeMatch) {
                    currentPrefix = "Route " + routeMatch[2];
                    loc = currentPrefix + (loc.includes('(') ? " " + loc.substring(loc.indexOf('(')) : "");
                } else if (!isNaN(parseInt(loc)) && currentPrefix) {
                    // It's just a number like "102", use currentPrefix
                    loc = currentPrefix.replace(/\d+$/, loc);
                }

                if (!entry.locations.includes(loc)) {
                    entry.locations.push(loc);
                }

                if (!locationMap.has(loc)) locationMap.set(loc, []);
                if (!locationMap.get(loc).includes(entry.name)) {
                    locationMap.get(loc).push(entry.name);
                }
            });
        }

        // Process additional evolution links from routes (if not already found in notes)
        if (notes.startsWith('Evolve to')) {
            const targetNameMatch = notes.match(/Evolve to\s+(.*?)\s*\(/i);
            const methodMatch = notes.match(/\((.*?)\)/);

            if (targetNameMatch) {
                const targetName = normalizeName(targetNameMatch[1]);
                const method = methodMatch ? methodMatch[1] : "Unspecified";

                if (digimonDB.has(targetName)) {
                    const target = digimonDB.get(targetName);
                    if (!entry.next.find(n => n.name === targetName)) {
                        entry.next.push({ name: targetName, method });
                    }
                    if (!target.prev.find(p => p.name === name)) {
                        target.prev.push({ name: entry.name, method });
                    }
                }
            }
        }
    });
    console.log('Routes and locations processed.');
}

function generateFiles() {
    // 1. Array-ify and sort
    const dbArray = Array.from(digimonDB.values()).sort((a, b) => {
        const idA = parseInt(a.id) || 9999;
        const idB = parseInt(b.id) || 9999;
        if (idA !== idB) return idA - idB;
        return a.name.localeCompare(b.name);
    });

    // 2. Clear output and write
    const contentJS = `// Consolidated Digimon Guide Content\nconst DIGIMON_DB = ${JSON.stringify(dbArray, null, 2)};`;
    fs.writeFileSync(OUTPUT.content, contentJS);
    console.log(`Generated ${OUTPUT.content}`);

    // 3. Locations Data
    const sortedLocations = {};
    Array.from(locationMap.keys()).sort().forEach(loc => {
        sortedLocations[loc] = locationMap.get(loc).sort();
    });
    const locationsJS = `const LOCATIONS_DATA = ${JSON.stringify(sortedLocations, null, 2)};`;
    fs.writeFileSync(OUTPUT.locations, locationsJS);
    console.log(`Generated ${OUTPUT.locations}`);
}

// --- EXECUTION ---
try {
    console.log('--- Digimon Data Merger Starting ---');
    parseChecklist();
    parseNotes();
    parseRoutes();
    generateFiles();
    console.log('--- Success! No crumbs left. ---');
} catch (e) {
    console.error('Fatal Error:', e);
}
