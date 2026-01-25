const fs = require('fs');
const path = require('path');
const https = require('https');

// Path to your guide data
const dbPath = path.join(__dirname, '..', 'data', 'guide_content.js');
console.log('Loading DB from:', dbPath);

const fileContent = fs.readFileSync(dbPath, 'utf8');
const jsonStart = fileContent.indexOf('[');
const jsonEnd = fileContent.lastIndexOf(']');
const db = eval(fileContent.substring(jsonStart, jsonEnd + 1));

console.log(`Found ${db.length} Digimon in database.`);

/**
 * Normalizes name for Digi-API
 */
function getApiUrl(name) {
    const apiName = name
        .replace(/\s+/g, '_')
        .replace(/[\[\]\(\)]/g, '')
        .replace(/'/g, '%27');
    return `https://digi-api.com/images/digimon/w/${apiName}.png`;
}

async function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            resolve(res.statusCode === 200);
        }).on('error', () => resolve(false));
    });
}

async function runTest() {
    console.log('\n--- Digi-API Image Coverage Test ---');
    console.log('Testing a sample of 20 random Digimon to check API status...\n');

    const sample = db.sort(() => 0.5 - Math.random()).slice(0, 20);
    let hits = 0;

    for (const digi of sample) {
        const url = getApiUrl(digi.name);
        process.stdout.write(`Checking: ${digi.name.padEnd(20)} `);

        const exists = await checkUrl(url);
        if (exists) {
            console.log('✅ Found');
            hits++;
        } else {
            console.log('❌ MISSING');
        }
    }

    console.log(`\nTest Finished. Success Rate: ${(hits / 20 * 100).toFixed(0)}%`);
    console.log('If the success rate is high, the "One-Source" strategy is safe.');
    console.log('\nTo test a SPECIFIC Digimon, run: node scripts/test_digi_api.js "Agumon"');
}

// Support command line argument for specific name test
if (process.argv[2]) {
    const name = process.argv[2];
    const url = getApiUrl(name);
    console.log(`Testing specific: ${name}`);
    console.log(`URL: ${url}`);
    checkUrl(url).then(exists => {
        console.log(`Result: ${exists ? '✅ FOUND' : '❌ NOT FOUND'}`);
    });
} else {
    runTest();
}
