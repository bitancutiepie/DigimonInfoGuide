const { TYPE_CHART } = require('../data/type_chart.js');

const keys = Object.keys(TYPE_CHART);
const invalidRefs = [];

keys.forEach(key => {
    const entry = TYPE_CHART[key];
    ['weak', 'resist', 'immune', 'strong', 'weakAttack', 'immuneAttack'].forEach(prop => {
        entry[prop].forEach(t => {
            if (!keys.includes(t)) {
                invalidRefs.push({
                    source: key,
                    property: prop,
                    invalidType: t
                });
            }
        });
    });
});

if (invalidRefs.length > 0) {
    console.log("Found invalid type references:");
    console.log(JSON.stringify(invalidRefs, null, 2));
} else {
    console.log("All type references are valid.");
}
