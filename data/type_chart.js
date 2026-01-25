const TYPE_CHART = {
    "Normal": {
        weak: [],
        resist: [],
        immune: [],
        strong: [], // Beats
        weakAttack: [], // Not good against
        immuneAttack: [] // Immune enemies (Attacking them does 0)
    },
    "Fighting": {
        weak: ["Magic", "Dragon", "Fairy"],
        resist: ["Rock", "Undead", "Water", "Dark"],
        immune: [],
        strong: ["Rock", "Steel", "Ice", "Dark"],
        weakAttack: ["Holy", "Magic", "Undead", "Bug", "Poison", "Flying"],
        immuneAttack: []
    },
    "Flying": {
        weak: ["Rock", "Electric", "Ice"],
        resist: ["Fighting", "Bug", "Fire"],
        immune: ["Ground"],
        strong: ["Bug", "Fire"],
        weakAttack: ["Rock", "Steel", "Electric", "Ice", "Dragon"],
        immuneAttack: []
    },
    "Poison": {
        weak: ["Magic", "Dragon", "Dark"],
        resist: ["Fighting", "Poison", "Bug", "Undead", "Grass", "Fairy"],
        immune: [],
        strong: ["Water", "Grass", "Fairy"],
        weakAttack: ["Poison", "Ground", "Rock", "Magic", "Ice"],
        immuneAttack: ["Undead", "Steel"]
    },
    "Ground": {
        weak: ["Undead", "Water", "Grass"],
        resist: ["Poison", "Rock"],
        immune: ["Electric"],
        strong: ["Rock", "Steel", "Fire", "Electric"],
        weakAttack: ["Bug", "Undead", "Grass"],
        immuneAttack: ["Flying"]
    },
    "Rock": {
        weak: ["Fighting", "Ground", "Grass"],
        resist: ["Flying", "Poison", "Undead", "Fire"],
        immune: [],
        strong: ["Flying", "Bug"],
        weakAttack: ["Fighting", "Ground", "Water"],
        immuneAttack: []
    },
    "Bug": {
        weak: ["Flying", "Rock", "Fire"],
        resist: ["Fighting", "Ground", "Undead", "Grass"],
        immune: [],
        strong: ["Undead", "Electric", "Holy"],
        weakAttack: ["Flying", "Poison", "Fire", "Dragon", "Fairy"],
        immuneAttack: []
    },
    "Undead": {
        weak: ["Bug", "Fire", "Magic", "Holy"],
        resist: ["Fighting", "Ground", "Electric", "Ice"],
        immune: ["Poison", "Dark"],
        strong: ["Ground", "Grass", "Fairy"],
        weakAttack: ["Fighting", "Poison", "Rock", "Bug", "Dark", "Holy"],
        immuneAttack: []
    },
    "Steel": {
        weak: ["Fighting", "Ground", "Fire", "Water"],
        resist: ["Flying", "Magic", "Dragon", "Fairy", "Holy"],
        immune: ["Poison"],
        strong: ["Magic", "Ice", "Dark", "Fairy", "Holy"],
        weakAttack: ["Fire", "Electric"],
        immuneAttack: ["Water"]
    },
    "Fire": {
        weak: ["Flying", "Ground", "Water"],
        resist: ["Bug", "Steel", "Fire", "Grass", "Ice"],
        immune: [],
        strong: ["Bug", "Undead", "Steel", "Grass", "Ice"],
        weakAttack: ["Flying", "Rock", "Fire", "Water"],
        immuneAttack: []
    },
    "Water": {
        weak: ["Poison", "Grass", "Electric", "Ice"],
        resist: ["Rock", "Fire", "Water", "Holy"],
        immune: ["Steel"],
        strong: ["Ground", "Steel", "Fire"],
        weakAttack: ["Fighting", "Water", "Grass", "Ice"],
        immuneAttack: []
    },
    "Grass": {
        weak: ["Poison", "Undead", "Fire"],
        resist: ["Ground", "Water", "Grass", "Electric"],
        immune: [],
        strong: ["Ground", "Rock", "Water"],
        weakAttack: ["Poison", "Bug", "Fire", "Grass", "Ice"],
        immuneAttack: []
    },
    "Electric": {
        weak: ["Ground", "Bug"],
        resist: ["Flying", "Steel", "Electric", "Fairy"],
        immune: [],
        strong: ["Flying", "Water", "Magic"],
        weakAttack: ["Undead", "Grass", "Electric"],
        immuneAttack: ["Ground"]
    },
    "Magic": {
        weak: ["Steel", "Electric", "Dragon"],
        resist: ["Fighting", "Poison", "Magic"],
        immune: [],
        strong: ["Fighting", "Poison", "Undead"],
        weakAttack: ["Steel", "Magic", "Dragon", "Dark", "Fairy"],
        immuneAttack: []
    },
    "Ice": {
        weak: ["Fighting", "Steel", "Fire"],
        resist: ["Flying", "Poison", "Water", "Grass"],
        immune: ["Ice"],
        strong: ["Flying", "Water", "Dragon"],
        weakAttack: ["Undead", "Fire"],
        immuneAttack: []
    },
    "Dragon": {
        weak: ["Ice", "Dragon", "Fairy"],
        resist: ["Flying", "Bug", "Magic", "Holy"],
        immune: [],
        strong: ["Fighting", "Poison", "Magic", "Dragon"],
        weakAttack: ["Steel", "Holy"],
        immuneAttack: ["Fairy"]
    },
    "Dark": {
        weak: ["Fighting", "Steel", "Holy"],
        resist: ["Undead", "Magic", "Dark", "Fairy"],
        immune: [],
        strong: ["Poison", "Fairy", "Holy"],
        weakAttack: ["Fighting", "Dark"],
        immuneAttack: ["Undead"]
    },
    "Fairy": {
        weak: ["Poison", "Undead", "Steel", "Dark"],
        resist: ["Bug", "Magic", "Holy"],
        immune: ["Dragon"],
        strong: ["Fighting", "Dragon"],
        weakAttack: ["Poison", "Steel", "Electric", "Dark", "Holy"],
        immuneAttack: []
    },
    "Holy": {
        weak: ["Bug", "Steel", "Dark"],
        resist: ["Bug", "Undead", "Dragon", "Fairy", "Holy"],
        immune: [],
        strong: ["Undead", "Dark"],
        weakAttack: ["Steel", "Water", "Dragon", "Fairy", "Holy"],
        immuneAttack: []
    },
    "Chaos": {
        weak: [],
        resist: [],
        immune: [],
        strong: [],
        weakAttack: [],
        immuneAttack: []
    }
};

if (typeof window !== 'undefined') {
    window.TYPE_CHART = TYPE_CHART;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TYPE_CHART };
}
