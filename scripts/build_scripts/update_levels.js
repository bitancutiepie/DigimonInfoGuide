const fs = require('fs');

// Read the guide_content.js file
const content = fs.readFileSync('d:/DigimonGuider/guide_content.js', 'utf8');

// Extract the array part. 
// Assuming it starts with "const DIGIMON_DB = [" and ends with "];"
const startMarker = "const DIGIMON_DB = ";
const jsonStart = content.indexOf(startMarker) + startMarker.length;
const jsonEnd = content.lastIndexOf("];") + 1;

let jsonString = content.substring(jsonStart, jsonEnd);

// Fix potential trailing commas or other loose JS syntax if generic JSON.parse fails, 
// but since it's a JS file, let's try to eval it safely-ish or use Function
// Ideally we just want the data.
let digiDB;
try {
    digiDB = JSON.parse(jsonString);
} catch (e) {
    // If it's valid JS but not strict JSON (e.g. unquoted keys - though the file showed quoted keys),
    // we use eval.
    digiDB = eval(jsonString);
}

const digimonMap = new Map();
digiDB.forEach(d => digimonMap.set(d.name, d));

// Initialize all as depth -1
const depths = new Map();
digiDB.forEach(d => depths.set(d.name, -1));

// Find roots: Digimon with NO prev entries in the DB (different from empty prev array, 
// strictly meaning no other mon points to it? No, rely on "prev" array for now).
// The script.js uses logic: `hasNoPrev` = `!digi.prev || digi.prev.length === 0`.
// Let's use that.
const roots = digiDB.filter(d => !d.prev || d.prev.length === 0);

// Helper for Card Level
// Depth 0 = Level 3 (Rookie)
// Depth 1 = Level 4 (Champion)
// Depth 2 = Level 5 (Ultimate)
// Depth 3 = Level 6 (Mega)
// Depth 4 = Level 7 (Ultra)

const getStageName = (depth) => {
    switch (depth) {
        case 0: return "Rookie";
        case 1: return "Champion";
        case 2: return "Ultimate";
        case 3: return "Mega";
        case 4: return "Ultra";
        default: return depth > 4 ? "Ultra+" : "Unknown";
    }
};

const getCardLevel = (depth) => {
    return 3 + depth;
};

// BFS to assign depths
let queue = roots.map(r => ({ name: r.name, depth: 0 }));
const visited = new Map(); // Keep track of min depth assigned?

// Initialize roots in visited
roots.forEach(r => visited.set(r.name, 0));

while (queue.length > 0) {
    const { name, depth } = queue.shift();

    // Update the DB object
    const digi = digimonMap.get(name);
    if (!digi) continue;

    // We only set if not set or if we found a shorter path? 
    // Usually for "Level" we want the "Canonical" level.
    // If A -> B (Level 3 -> 4)
    // If C -> B (Level 5 -> ?). Jogress usually results in Higher level.
    // Let's stick to: Level = Max(Parent Levels) + 1?
    // Or just Min?
    // Standard evolution: Rookie -> Champion.
    // Slide evolution: Champion -> Champion (Depth 1 -> 1).
    // The "prev" array in DB has "method".

    // Wait, simple BFS from Roots gives "Shortest Path" to root.
    // Rookie (0) -> Champion (1).
    // If Armor is 0 -> 1, that's fine.
    // If Jogress is Mega (3) + Mega (3) -> Ultra (4). BFS will find it at depth 4 if linked from Mega.

    // Current approach: BFS gives shortest path (lowest level).
    // Is there a case where a Mega evolves from a Rookie? Warp Digivolve?
    // Agumon -> WarGreymon (Warp).
    // If Agumon -> WarGreymon is in "next", then WarGreymon becomes Depth 1 (Champion). This is WRONG.
    // WarGreymon should be Mega.

    // We need to check if Warp Digivolution exists in the "next" array.
    // Typically `guide_content.js` "next" contains direct evolutions.
    // Let's inspect "Agumon" in the earlier viewed file.
    // It has "Greymon". No WarGreymon.
    // So "Next" usually implies direct next stage.
    // Assuming this, BFS or simple traversal works.

    digi.stage = getStageName(depth);
    digi.cardLevel = getCardLevel(depth);

    if (digi.next) {
        digi.next.forEach(n => {
            const nextName = n.name;
            if (!visited.has(nextName)) {
                visited.set(nextName, depth + 1);
                queue.push({ name: nextName, depth: depth + 1 });
            } else {
                // Already visited. 
                // If we found a path that makes it HIGHER level (e.g. jogress of high levels),
                // we might want to update it?
                // Usually standard line defines the level.
                // Let's trust the first visit (roots are Rookie).
            }
        });
    }
}

// Special handling for edge cases / unconnected nodes?
// If any node wasn't reached, it stays without stage.
// We can assert or default them.

// Write back
const newContent = "const DIGIMON_DB = " + JSON.stringify(digiDB, null, 2) + ";\n";
fs.writeFileSync('d:/DigimonGuider/guide_content.js', newContent);
console.log("Database updated.");
