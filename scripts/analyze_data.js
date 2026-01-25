const fs = require('fs');

// Read the file content
const content = fs.readFileSync('d:/DigimonGuider/guide_content.js', 'utf8');

// Hacky way to parse the JS file content as JSON
// Assuming the file format is `const DIGIMON_DB = [...]`
const jsonStr = content.replace(/^const DIGIMON_DB =/, '').replace(/;$/, '').trim();

// The file might contain comments or trailing commas which JSON.parse might not like.
// But looking at the outline, it seems fairly standard JSON-like object literal.
// We'll try to refine it or just use eval (safe enough here since it's local file from user).
let db;
try {
    // Using eval to handle JS object literal syntax (which is looser than JSON)
    db = eval(jsonStr);
} catch (e) {
    console.error("Failed to parse DB:", e);
    process.exit(1);
}

const nameMap = new Map();
db.forEach(d => nameMap.set(d.name, d));

const issues = [];

db.forEach(d => {
    // Check next evolutions
    if (d.next) {
        d.next.forEach(evo => {
            const strings = [];
            const target = nameMap.get(evo.name);
            if (!target) {
                issues.push(`[Missing Target] ${d.name} (${d.stage}) -> ${evo.name} (Not found in DB)`);
            } else {
                // Check stage progression
                // Standard: Fresh -> In-Training -> Rookie -> Champion -> Ultimate -> Mega
                // But some variants exist.
                // We'll just list them for manual review or check for obvious regressions (like Mega -> Rookie)
            }
        });
    }

    // Check prev evolutions for consistency
    if (d.prev) {
        d.prev.forEach(prev => {
            const source = nameMap.get(prev.name);
            if (!source) {
                issues.push(`[Missing Source] ${d.name} claims to evolve from ${prev.name} which is not in DB`);
            } else {
                // Check if source actually lists d as next
                const linked = source.next && source.next.some(n => n.name === d.name);
                if (!linked) {
                    issues.push(`[Unlinked Evo] ${d.name} lists ${prev.name} as prev, but ${prev.name} doesn't list ${d.name} as next`);
                }
            }
        });
    }

    // Check for "prev" consistency from the other side
    if (d.next) {
        d.next.forEach(evo => {
            const target = nameMap.get(evo.name);
            if (target) {
                const linked = target.prev && target.prev.some(p => p.name === d.name);
                if (!linked) {
                    issues.push(`[Unlinked Prev] ${d.name} evolves to ${evo.name}, but ${evo.name} doesn't list ${d.name} as prev`);
                }
            }
        });
    }
});

console.log("Found issues:");
console.log(issues.join('\n'));

// Output a list of all Digimon and their stages for easy review
console.log("\nDigimon List:");
db.forEach(d => {
    console.log(`${d.name} - ${d.stage} (Evolves to: ${d.next ? d.next.map(n => n.name).join(', ') : 'None'})`);
});
