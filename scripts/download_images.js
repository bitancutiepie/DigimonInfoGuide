const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const DB_PATH = path.join(__dirname, '..', 'data', 'guide_content.js');
const REF_MAP_PATH = path.join(__dirname, '..', 'data', 'reference_map.js');
const IMAGE_DIR = path.join(__dirname, '..', 'images', 'digimon');

// Ensure image directory exists
if (!fs.existsSync(IMAGE_DIR)) {
    fs.mkdirSync(IMAGE_DIR, { recursive: true });
}

// Load DB
console.log('Loading database...');
const fileContent = fs.readFileSync(DB_PATH, 'utf8');
const jsonStart = fileContent.indexOf('[');
const jsonEnd = fileContent.lastIndexOf(']');
const db = eval(fileContent.substring(jsonStart, jsonEnd + 1));

// Load Reference Map (to find official names)
console.log('Loading reference map...');
const refMapContent = fs.readFileSync(REF_MAP_PATH, 'utf8');
const refMapStart = refMapContent.indexOf('{');
const refMapEnd = refMapContent.lastIndexOf('}');
const REFERENCE_IMAGE_MAP = eval('(' + refMapContent.substring(refMapStart, refMapEnd + 1) + ')');

/**
 * Normalizes name for images
 */
function getSafeFileName(name) {
    return name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '') + '.jpg';
}

/**
 * Gets fallbacks for a Digimon (similar logic to ui.js but for downloader)
 */
function getUrls(name) {
    const lowerName = name.toLowerCase();
    const mapped = REFERENCE_IMAGE_MAP[lowerName];
    const urls = [];

    if (mapped && mapped !== "PHOTO NOT AVAILABLE") {
        urls.push(`https://digimon.net/cimages/digimon/${mapped}.jpg`);
    }

    // Common normalization for other APIs
    const apiName = name.replace(/\s+/g, '_').replace(/[\[\]\(\)]/g, '');
    const apiNameEncoded = encodeURIComponent(name);

    urls.push(`https://digi-api.com/images/digimon/w/${apiName}.png`);
    urls.push(`https://digimon-api.com/images/digimon_sprites/${apiNameEncoded}.png`);
    urls.push(`https://wikimon.net/images/${name.charAt(0).toLowerCase()}/${name.replace(/\s+/g, '_')}.jpg`);

    return urls;
}

/**
 * Downloads a single image
 */
function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                file.close();
                fs.unlink(dest, () => { }); // Delete partial file
                return reject(new Error(`Status: ${response.statusCode}`));
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            file.close();
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
}

async function start() {
    console.log(`Starting download for ${db.length} Digimon...`);
    let downloaded = 0;
    let skipped = 0;
    let failed = 0;

    for (let i = 0; i < db.length; i++) {
        const digi = db[i];
        const fileName = getSafeFileName(digi.name);
        const dest = path.join(IMAGE_DIR, fileName);

        if (fs.existsSync(dest)) {
            skipped++;
            continue;
        }

        const urls = getUrls(digi.name);
        let success = false;

        process.stdout.write(`[${i + 1}/${db.length}] ${digi.name}... `);

        for (const url of urls) {
            try {
                await downloadImage(url, dest);
                success = true;
                break;
            } catch (e) {
                // Try next URL
            }
        }

        if (success) {
            console.log('✅ OK');
            downloaded++;
        } else {
            console.log('❌ FAILED');
            failed++;
        }

        // Small delay to be polite to APIs
        if (!success) await new Promise(r => setTimeout(r, 100));
    }

    console.log(`\n--- Done! ---`);
    console.log(`New: ${downloaded}`);
    console.log(`Skipped: ${skipped}`);
    console.log(`Failed: ${failed}`);
}

start();
