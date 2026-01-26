
const fs = require('fs');
const path = require('path');

// Read the guide_content.js file
const dbPath = path.join(__dirname, 'data', 'guide_content.js');
const fileContent = fs.readFileSync(dbPath, 'utf8');

// Hacky parsing because the file is "const DIGIMON_DB = [...]"
// We'll strip the variable declaration and try to parse the array
const jsonStart = fileContent.indexOf('[');
const jsonEnd = fileContent.lastIndexOf(']');

if (jsonStart === -1 || jsonEnd === -1) {
    console.error("Could not find JSON array in file");
    process.exit(1);
}

const jsonString = fileContent.substring(jsonStart, jsonEnd + 1);

let db;
try {
    // There might be trailing commas or JS specific things, so clean JSON.parse might fail if it's not strict JSON.
    // However, looking at previous output, it looks like standard JSON structure.
    // If eval is safer/easier for this specific structure:
    db = eval(jsonString);
} catch (e) {
    console.error("Failed to parse DB:", e.message);
    // Fallback: try using Function to return the array
    try {
        db = new Function('return ' + jsonString)();
    } catch (e2) {
        console.error("Fallback parse failed:", e2.message);
        process.exit(1);
    }
}

// Map for quick lookup
const digimonMap = new Map();
db.forEach(d => digimonMap.set(d.name, d));

// Stages rank
const stages = {
    "Rookie": 1,
    "Champion": 2,
    "Ultimate": 3,
    "Mega": 4,
    "Ultra": 5
};

console.log(`Analyzing ${db.length} Digimon for regression loops...`);

const issues = [];

db.forEach(d => {
    if (!d.next || d.next.length === 0) return;

    const currentRank = stages[d.stage] || 0;

    d.next.forEach(evo => {
        const nextDigi = digimonMap.get(evo.name);
        if (!nextDigi) return; // Might be missing data, ignore for now or log warning

        const nextRank = stages[nextDigi.stage] || 0;

        // Check for regression (Next stage is lower than current stage)
        // Ignoring "Armor" or special cases if they aren't in the rank, but user said Champ->Ult->Champ
        if (currentRank > 0 && nextRank > 0 && nextRank < currentRank) {
            issues.push({
                from: d.name,
                fromStage: d.stage,
                to: nextDigi.name,
                toStage: nextDigi.stage
            });
        }
    });
});

if (issues.length > 0) {
    console.log("Found Issues:");
    issues.forEach(i => {
        console.log(`[REGRESSION] ${i.from} (${i.fromStage}) evolves into ${i.to} (${i.toStage})`);
    });
} else {
    console.log("No regression loops found.");
}
