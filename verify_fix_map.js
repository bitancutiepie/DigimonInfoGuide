
const fs = require('fs');
const http = require('https');
const { exec } = require('child_process');

// Read reference map
let mapContent = fs.readFileSync('reference_map.js', 'utf8');
global.window = {};
eval(mapContent);
const map = window.REFERENCE_IMAGE_MAP;

const missingList = [
    "Aegisdramon", "AeroVeedramon", "Alphamon Ouryuken", "AncientBeetlemon", "AncientSphinxmon",
    "AncientWisemon", "AndiramonDeva", "Apemon", "Archnemon Disguise", "ArkhaiAngemon",
    "Beelzebumon Blast", "Belphemon", "Blucomon", "Calmaramon", "Cerberusmon", "Ceresmon Medium",
    "Chaosmon Valdur Arm", "Cherubimon Evil", "Chuumon", "CoreDramon Blue", "Coredramon Green",
    "DarkTyrannomon", "DexDORUgamon", "DexDORUgoramon", "DexDORUguremon", "Diaboromon",
    "Dolphmon", "Dracmon", "Duftmon Leopard", "Dukemon Crimson", "ExTyrannomon", "Fairymon",
    "Frigimon", "Gaiomon", "Gargolemon", "Garummon", "Goblimon", "Gokuumon", "GreatGryzzlymon",
    "HerculesKabuterimon", "Hi-Commandramon", "Imperialdramon Dragon", "Imperialdramon Fighter",
    "Imperialdramon Paladin", "Jagamon", "Kimeramon", "KingWhamon", "Lowemon", "Lucemon Falldown",
    "MarineAngemon", "MarineDevimon", "MarineKimeramon", "MasterTyrannomon", "Megatheurimon",
    "MetalTyrannomon", "Millenniummon", "MirageGaogamon Burst", "Ogremon", "Omegamon Alter S",
    "Phantomon", "Piddomon", "Pixiemon", "RagnaLoardmon", "Rasenmon Fury Mode", "Ravemon",
    "Ravemon Burst", "Rosemon Burst", "Sekkamon", "ShineGreymon Burst", "Shutumon", "Strabimon",
    "Submarimon", "Sukamon", "Tenkomon", "Thundermon", "Tortomon", "Tropiamon", "Tsukaimon",
    "Tyrannomon", "UltimateBrachiomon", "Vilemon", "WereGarurumon", "YaegerDorulumon",
    "Yukinamon", "ZinoGarurumon", "ZinoGarurumon Rage"
];

const normalize = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[().]/g, '');
const normalizeKey = (name) => name.toLowerCase();

console.log("--- ANALYSIS START ---");

missingList.forEach(name => {
    let key = normalizeKey(name);
    let mapped = map[key];

    // Check variations if not found directly
    if (!mapped) {
        // Try cleaned key from script.js logic
        const cleanKey = name.toLowerCase().replace(/[().]/g, '').replace(/\s+/g, ' ').trim();
        if (map[cleanKey]) {
            key = cleanKey;
            mapped = map[cleanKey];
        }
    }

    let urlDir = mapped;
    if (!urlDir) {
        // Default behavior if not in map
        urlDir = normalize(name);
    }

    console.log(`"${name}"`);
    console.log(`   Key: '${key}' -> Map: '${mapped || '(null)'}' -> Dir: '${urlDir}'`);
    console.log(`   URL: https://digimon.net/cimages/digimon/${urlDir}.jpg`);
});
