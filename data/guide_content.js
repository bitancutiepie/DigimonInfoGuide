// Perfectly Formatted Digimon Data
const DIGIMON_DB = [
    {
        "id": "1",
        "name": "Patamon",
                "types": [
            "Flying"
        ],
        "ability": "Run Away",
        "hiddenAbility": "Unburden",
        "evoMove": "Sonic Jab",
        "moves": [
            {
                "level": "6",
                "move": "Detect"
            },
            {
                "level": "9",
                "move": "Holy Shot"
            },
            {
                "level": "12",
                "move": "Fairy Wind"
            },
            {
                "level": "15",
                "move": "Quick Attack"
            },
            {
                "level": "18",
                "move": "Work Up"
            },
            {
                "level": "20",
                "move": "Air Cutter"
            }
        ],
        "locations": [
            "Spear Pillar F1"
        ],
        "prev": [],
        "next": [
            {
                "name": "Angemon",
                "method": "Lv20"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "2",
        "name": "Angemon",
                "types": [
            "Holy",
            "Flying"
        ],
        "ability": "Justified",
        "hiddenAbility": "Purifying Salt",
        "evoMove": "Heaven's Knuckle",
        "moves": [
            {
                "level": "23",
                "move": "Agility"
            },
            {
                "level": "26",
                "move": "Wing Attack"
            },
            {
                "level": "29",
                "move": "Life Dew"
            },
            {
                "level": "32",
                "move": "Protect"
            },
            {
                "level": "35",
                "move": "Brick Break"
            }
        ],
        "locations": [
            "Route 103 (Part 2)",
            "Spear Pillar F1"
        ],
        "prev": [
            {
                "name": "Patamon",
                "method": "Lv20"
            }
        ],
        "next": [
            {
                "name": "HolyAngemon",
                "method": "Lv35"
            },
            {
                "name": "Pegasmon",
                "method": "Light Data"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "3",
        "name": "HolyAngemon",
                "types": [
            "Holy",
            "Flying"
        ],
        "ability": "Justified",
        "hiddenAbility": "Purifying Salt",
        "evoMove": "Excalibur",
        "moves": [
            {
                "level": "39",
                "move": "Heavens Gate"
            },
            {
                "level": "41",
                "move": "Air Slash"
            },
            {
                "level": "44",
                "move": "Heal Pulse"
            },
            {
                "level": "47",
                "move": "Calm Mind"
            },
            {
                "level": "50",
                "move": "Heal Bell"
            },
            {
                "level": "53",
                "move": "Saint Legion"
            },
            {
                "level": "56",
                "move": "Ultra Turbulence"
            }
        ],
        "locations": [
            "Spear Pillar F5"
        ],
        "prev": [
            {
                "name": "Angemon",
                "method": "Lv35"
            }
        ],
        "next": [
            {
                "name": "Seraphimon",
                "method": "Lv56"
            },
            {
                "name": "Goddramon",
                "method": "Lv80"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "4",
        "name": "Seraphimon",
                "types": [
            "Holy",
            "Flying"
        ],
        "ability": "Justified",
        "hiddenAbility": "Purifying Salt",
        "evoMove": "7 Heavens",
        "moves": [
            {
                "level": "59",
                "move": "Tailwind"
            },
            {
                "level": "62",
                "move": "Bleakwind Storm"
            },
            {
                "level": "65",
                "move": "Divine Breaker"
            },
            {
                "level": "68",
                "move": "Revival Blessing"
            },
            {
                "level": "71",
                "move": "Brave Aura"
            },
            {
                "level": "74",
                "move": "Testament"
            },
            {
                "level": "77",
                "move": "Devotion Field"
            },
            {
                "level": "80",
                "move": "Hurricane"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "HolyAngemon",
                "method": "Lv56"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "5",
        "name": "Pegasmon",
                "types": [
            "Holy",
            "Flying"
        ],
        "ability": "Run Away",
        "hiddenAbility": "Justified",
        "evoMove": "Shooting Star",
        "moves": [
            {
                "level": "23",
                "move": "Agility"
            },
            {
                "level": "26",
                "move": "Sanctuary Bind"
            },
            {
                "level": "29",
                "move": "Pin Missile"
            },
            {
                "level": "32",
                "move": "Flash"
            }
        ],
        "locations": [
            "Route 110"
        ],
        "prev": [
            {
                "name": "Angemon",
                "method": "Light Data"
            }
        ],
        "next": [
            {
                "name": "HolyAngemon Priest",
                "method": "Lv35"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "6",
        "name": "HolyAngemon Priest",
                "types": [
            "Holy",
            "Flying"
        ],
        "ability": "Healer",
        "hiddenAbility": "Justified",
        "evoMove": "Excalibur",
        "moves": [
            {
                "level": "39",
                "move": "Heal Pulse"
            },
            {
                "level": "41",
                "move": "Air Slash"
            },
            {
                "level": "44",
                "move": "Heal Pulse"
            },
            {
                "level": "47",
                "move": "Calm Mind"
            },
            {
                "level": "50",
                "move": "Heal Bell"
            },
            {
                "level": "53",
                "move": "Saint Legion"
            },
            {
                "level": "56",
                "move": "Ultra Turbulence"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Pegasmon",
                "method": "Lv35"
            }
        ],
        "next": [],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "7",
        "name": "Goddramon",
                "types": [
            "Holy",
            "Dragon"
        ],
        "ability": "Parental Bond",
        "hiddenAbility": "Justified",
        "evoMove": "Holy Flame",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "HolyAngemon",
                "method": "Lv80"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "8",
        "name": "Lopmon",
                "types": [
            "Normal"
        ],
        "ability": "Inner Focus",
        "hiddenAbility": "Speed Boost",
        "evoMove": "Pound",
        "moves": [
            {
                "level": "6",
                "move": "Work Up"
            },
            {
                "level": "9",
                "move": "Double Kick"
            },
            {
                "level": "12",
                "move": "Powder Snow"
            },
            {
                "level": "15",
                "move": "Headbutt"
            },
            {
                "level": "18",
                "move": "Detect"
            },
            {
                "level": "20",
                "move": "Meditate"
            }
        ],
        "locations": [
            "Spear Pillar F1"
        ],
        "prev": [],
        "next": [
            {
                "name": "Turuiemon",
                "method": "Lv20"
            },
            {
                "name": "Wendimon",
                "method": "Dark Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "9",
        "name": "Turuiemon",
                "types": [
            "Fighting"
        ],
        "ability": "Tough Claws",
        "hiddenAbility": "Speed Boost",
        "evoMove": "Smart Strike",
        "moves": [
            {
                "level": "23",
                "move": "Bulk Up"
            },
            {
                "level": "26",
                "move": "Brick Break"
            },
            {
                "level": "29",
                "move": "Feint Attack"
            },
            {
                "level": "32",
                "move": "Steel Blade"
            },
            {
                "level": "35",
                "move": "Double Team"
            }
        ],
        "locations": [
            "Route 103 (Part 2)",
            "Spear Pillar F1"
        ],
        "prev": [
            {
                "name": "Lopmon",
                "method": "Lv20"
            }
        ],
        "next": [
            {
                "name": "AndiramonDeva",
                "method": "Lv35"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "10",
        "name": "AndiramonDeva",
                "types": [
            "Fighting",
            "Holy"
        ],
        "ability": "Tough Claws",
        "hiddenAbility": "Speed Boost",
        "evoMove": "Treasure Axe",
        "moves": [
            {
                "level": "39",
                "move": "Sky Uppercut"
            },
            {
                "level": "41",
                "move": "Detect"
            },
            {
                "level": "44",
                "move": "Heal Pulse"
            },
            {
                "level": "47",
                "move": "Saint Legion"
            },
            {
                "level": "50",
                "move": "Hammer Arm"
            },
            {
                "level": "53",
                "move": "Bounce"
            },
            {
                "level": "56",
                "move": "Fake Out"
            }
        ],
        "locations": [
            "Spear Pillar F5"
        ],
        "prev": [
            {
                "name": "Turuiemon",
                "method": "Lv35"
            }
        ],
        "next": [
            {
                "name": "Cherubimon",
                "method": "Lv56"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "11",
        "name": "Cherubimon",
                "types": [
            "Holy",
            "Fighting"
        ],
        "ability": "Tough Claws",
        "hiddenAbility": "Speed Boost",
        "evoMove": "Heaven Judge",
        "moves": [
            {
                "level": "59",
                "move": "Recover"
            },
            {
                "level": "62",
                "move": "Aura Sphere"
            },
            {
                "level": "65",
                "move": "Divine Breaker"
            },
            {
                "level": "68",
                "move": "Revival Blessing"
            },
            {
                "level": "71",
                "move": "Discharge"
            },
            {
                "level": "74",
                "move": "Focus Blast"
            },
            {
                "level": "77",
                "move": "Devotion Field"
            },
            {
                "level": "80",
                "move": "Giga Death"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "AndiramonDeva",
                "method": "Lv56"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "12",
        "name": "Wendimon",
                "types": [
            "Dark",
            "Fighting"
        ],
        "ability": "Berserk",
        "hiddenAbility": "Moxie",
        "evoMove": "Snarl",
        "moves": [
            {
                "level": "23",
                "move": "Brutal Swing"
            },
            {
                "level": "26",
                "move": "Brick Break"
            },
            {
                "level": "29",
                "move": "Supersonic"
            },
            {
                "level": "32",
                "move": "Rage Fist"
            }
        ],
        "locations": [
            "Route 110"
        ],
        "prev": [
            {
                "name": "Lopmon",
                "method": "Dark Data"
            }
        ],
        "next": [
            {
                "name": "Andiramon",
                "method": "Lv35"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "13",
        "name": "Andiramon",
                "types": [
            "Dark",
            "Fighting"
        ],
        "ability": "Berserk",
        "hiddenAbility": "Moxie",
        "evoMove": "Rage Fist",
        "moves": [
            {
                "level": "34",
                "move": "Mighty Cleave"
            },
            {
                "level": "37",
                "move": "Demon Katana"
            },
            {
                "level": "39",
                "move": "Sky Uppercut"
            },
            {
                "level": "41",
                "move": "Detect"
            },
            {
                "level": "44",
                "move": "Sucker Punch"
            },
            {
                "level": "47",
                "move": "Bulk Up"
            },
            {
                "level": "50",
                "move": "Hammer Arm"
            },
            {
                "level": "53",
                "move": "Bounce"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Wendimon",
                "method": "Lv35"
            }
        ],
        "next": [
            {
                "name": "Cherubimon Evil",
                "method": "Lv56"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "14",
        "name": "Cherubimon Evil",
                "types": [
            "Dark",
            "Fighting"
        ],
        "ability": "Dark Aura",
        "hiddenAbility": "Beast Boost",
        "evoMove": "Dark Lightning",
        "moves": [
            {
                "level": "59",
                "move": "Recover"
            },
            {
                "level": "62",
                "move": "Aura Sphere"
            },
            {
                "level": "65",
                "move": "Gravity"
            },
            {
                "level": "68",
                "move": "Necro Eclipse"
            },
            {
                "level": "71",
                "move": "Discharge"
            },
            {
                "level": "74",
                "move": "Focus Blast"
            },
            {
                "level": "77",
                "move": "Earthquake"
            },
            {
                "level": "80",
                "move": "Giga Death"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Andiramon",
                "method": "Lv56"
            }
        ],
        "next": [],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "15",
        "name": "Salamon",
                "types": [
            "Holy"
        ],
        "ability": "Cute Charm",
        "hiddenAbility": "Magic Bounce",
        "evoMove": "Sonic Jab",
        "moves": [
            {
                "level": "6",
                "move": "Work Up"
            },
            {
                "level": "9",
                "move": "Disarming Voice"
            },
            {
                "level": "12",
                "move": "Bite"
            },
            {
                "level": "15",
                "move": "Life Dew"
            },
            {
                "level": "18",
                "move": "Defense Curl"
            },
            {
                "level": "20",
                "move": "Roar"
            }
        ],
        "locations": [
            "Spear Pillar F1"
        ],
        "prev": [],
        "next": [
            {
                "name": "Tailmon",
                "method": "Lv20"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "16",
        "name": "Tailmon",
                "types": [
            "Holy"
        ],
        "ability": "Cute Charm",
        "hiddenAbility": "Magic Bounce",
        "evoMove": "Neko Punch",
        "moves": [
            {
                "level": "23",
                "move": "Agility"
            },
            {
                "level": "26",
                "move": "Detect"
            },
            {
                "level": "29",
                "move": "Glare"
            },
            {
                "level": "32",
                "move": "Shooting Star"
            },
            {
                "level": "35",
                "move": "Brick Break"
            }
        ],
        "locations": [
            "Spear Pillar F1 (as Gatomon)"
        ],
        "prev": [
            {
                "name": "Salamon",
                "method": "Lv20"
            }
        ],
        "next": [
            {
                "name": "Angewomon",
                "method": "Lv35"
            },
            {
                "name": "Nefertimon",
                "method": "Light Data"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "17",
        "name": "Angewomon",
                "types": [
            "Holy",
            "Fairy"
        ],
        "ability": "Hospitality",
        "hiddenAbility": "Magic Bounce",
        "evoMove": "Holy Arrow",
        "moves": [
            {
                "level": "39",
                "move": "Heal Pulse"
            },
            {
                "level": "41",
                "move": "Air Slash"
            },
            {
                "level": "44",
                "move": "Heal Bell"
            },
            {
                "level": "47",
                "move": "Calm Mind"
            },
            {
                "level": "50",
                "move": "Sanctuary Bind"
            },
            {
                "level": "53",
                "move": "Dazzling Gleam"
            },
            {
                "level": "56",
                "move": "Ultra Turbulence"
            }
        ],
        "locations": [
            "Spear Pillar F3/F5"
        ],
        "prev": [
            {
                "name": "Tailmon",
                "method": "Lv35"
            }
        ],
        "next": [
            {
                "name": "Ophanimon",
                "method": "Lv56"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "18",
        "name": "Ophanimon",
                "types": [
            "Holy",
            "Fairy"
        ],
        "ability": "Hospitality",
        "hiddenAbility": "Magic Bounce",
        "evoMove": "Edens Javelin",
        "moves": [
            {
                "level": "59",
                "move": "King's Shield"
            },
            {
                "level": "62",
                "move": "Moonblast"
            },
            {
                "level": "65",
                "move": "Divine Breaker"
            },
            {
                "level": "68",
                "move": "Revival Blessing"
            },
            {
                "level": "71",
                "move": "Devotion Field"
            },
            {
                "level": "74",
                "move": "Hyper Drill"
            },
            {
                "level": "77",
                "move": "Recover"
            },
            {
                "level": "80",
                "move": "Grand Cross"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Angewomon",
                "method": "Lv56"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "19",
        "name": "Nefertimon",
                "types": [
            "Holy",
            "Flying"
        ],
        "ability": "Magic Bounce",
        "hiddenAbility": "Regenerator",
        "evoMove": "Sanctuary Bind",
        "moves": [
            {
                "level": "21",
                "move": "Power Gem"
            },
            {
                "level": "23",
                "move": "Tailwind"
            },
            {
                "level": "26",
                "move": "Shooting Star"
            },
            {
                "level": "29",
                "move": "Glare"
            },
            {
                "level": "32",
                "move": "Air Slash"
            }
        ],
        "locations": [
            "Route 118",
            "Spear Pillar F3"
        ],
        "prev": [
            {
                "name": "Tailmon",
                "method": "Light Data"
            }
        ],
        "next": [
            {
                "name": "Kyukimon",
                "method": "Lv35"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "20",
        "name": "Kyukimon",
                "types": [
            "Holy",
            "Flying"
        ],
        "ability": "Magic Bounce",
        "hiddenAbility": "Regenerator",
        "evoMove": "Treasure Axe",
        "moves": [
            {
                "level": "34",
                "move": "Spell Sword"
            },
            {
                "level": "37",
                "move": "Ultra Turbulance"
            },
            {
                "level": "40",
                "move": "Diamond Storm"
            },
            {
                "level": "43",
                "move": "Phantom Claw"
            },
            {
                "level": "46",
                "move": "Agility"
            },
            {
                "level": "49",
                "move": "Sacred Sword"
            },
            {
                "level": "52",
                "move": "Swords Dance"
            }
        ],
        "locations": [
            "Route 110 (Guardian)"
        ],
        "prev": [
            {
                "name": "Nefertimon",
                "method": "Lv35"
            }
        ],
        "next": [
            {
                "name": "HolyDramon",
                "method": "Lv80"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "21",
        "name": "HolyDramon",
                "types": [
            "Holy",
            "Dragon"
        ],
        "ability": "Magic Bounce",
        "hiddenAbility": "Regenerator",
        "evoMove": "Holy Flame",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Kyukimon",
                "method": "Lv80"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "22",
        "name": "Gazimon",
                "types": [
            "Dark"
        ],
        "ability": "Pickup",
        "hiddenAbility": "Prankster",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Sand Attack"
            },
            {
                "level": "9",
                "move": "Thief"
            },
            {
                "level": "12",
                "move": "Evil Darts"
            },
            {
                "level": "15",
                "move": "Thunder Shock"
            },
            {
                "level": "18",
                "move": "Poison Gas"
            }
        ],
        "locations": [
            "Route 101",
            "Route 102"
        ],
        "prev": [],
        "next": [
            {
                "name": "Devidramon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "23",
        "name": "Devidramon",
                "types": [
            "Dark",
            "Dragon"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Berserk",
        "evoMove": "Demon Claw",
        "moves": [
            {
                "level": "19",
                "move": "Snarl"
            },
            {
                "level": "21",
                "move": "Dragon Breath"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Evil Bite"
            },
            {
                "level": "29",
                "move": "Dual Chop"
            },
            {
                "level": "32",
                "move": "Torment"
            }
        ],
        "locations": [
            "Route 111",
            "Mt Pyre",
            "Magma Hideout"
        ],
        "prev": [
            {
                "name": "Gazimon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Orochimon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "24",
        "name": "Orochimon",
                "types": [
            "Dark",
            "Dragon"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Dark Aura",
        "evoMove": "Dark Pulse",
        "moves": [
            {
                "level": "37",
                "move": "Dragon Breath"
            },
            {
                "level": "39",
                "move": "Poison Jab"
            },
            {
                "level": "41",
                "move": "Confuse Ray"
            },
            {
                "level": "44",
                "move": "Meltdown"
            },
            {
                "level": "47",
                "move": "Nasty Plot"
            },
            {
                "level": "50",
                "move": "Hell Fire"
            },
            {
                "level": "53",
                "move": "Will-o-Wisp"
            }
        ],
        "locations": [
            "Victory Road F3"
        ],
        "prev": [
            {
                "name": "Devidramon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Nidhoggmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "25",
        "name": "Nidhoggmon",
                "types": [
            "Dark",
            "Dragon"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Dark Aura",
        "evoMove": "Night Daze",
        "moves": [
            {
                "level": "56",
                "move": "Ruination"
            },
            {
                "level": "59",
                "move": "Dragon Pulse"
            },
            {
                "level": "62",
                "move": "Nasty Plot"
            },
            {
                "level": "65",
                "move": "Dark Roar"
            },
            {
                "level": "68",
                "move": "Fiery Wrath"
            },
            {
                "level": "71",
                "move": "Fire Blast"
            },
            {
                "level": "74",
                "move": "Draco Meteor"
            },
            {
                "level": "77",
                "move": "Steel Roller"
            },
            {
                "level": "80",
                "move": "Hyper Beam"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Orochimon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "26",
        "name": "Luxmon",
                "types": [
            "Holy"
        ],
        "ability": "Oblivious",
        "hiddenAbility": "Justified",
        "evoMove": "Pound",
        "moves": [
            {
                "level": "6",
                "move": "Play Nice"
            },
            {
                "level": "9",
                "move": "Holy Shot"
            },
            {
                "level": "12",
                "move": "Wide Guard"
            },
            {
                "level": "18",
                "move": "Mach Punch"
            }
        ],
        "locations": [
            "Route 102",
            "Route 104",
            "Spear Pillar F1"
        ],
        "prev": [],
        "next": [
            {
                "name": "Piddomon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "27",
        "name": "Piddomon",
                "types": [
            "Holy",
            "Fire"
        ],
        "ability": "Blaze",
        "hiddenAbility": "Justified",
        "evoMove": "Mega Flame",
        "moves": [
            {
                "level": "19",
                "move": "Fire Spin"
            },
            {
                "level": "21",
                "move": "Ligh Laser"
            },
            {
                "level": "23",
                "move": "Wish"
            },
            {
                "level": "26",
                "move": "Fire Punch"
            },
            {
                "level": "29",
                "move": "Wing Attack"
            }
        ],
        "locations": [
            "Route 110",
            "Spear Pillar F1/F3"
        ],
        "prev": [
            {
                "name": "Luxmon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "ArkhaiAngemon",
                "method": "Lv30"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "28",
        "name": "ArkhaiAngemon",
                "types": [
            "Holy",
            "Fire"
        ],
        "ability": "Blaze",
        "hiddenAbility": "Justified",
        "evoMove": "Saint Legion",
        "moves": [
            {
                "level": "32",
                "move": "Mach Punch"
            },
            {
                "level": "33",
                "move": "Aura Sphere"
            },
            {
                "level": "36",
                "move": "Instruct"
            },
            {
                "level": "39",
                "move": "Fiery Dance"
            },
            {
                "level": "41",
                "move": "Brave Aura"
            },
            {
                "level": "44",
                "move": "Heal Pulse"
            },
            {
                "level": "47",
                "move": "Helping Hand"
            },
            {
                "level": "50",
                "move": "Meltdown"
            },
            {
                "level": "53",
                "move": "Holy Blast"
            }
        ],
        "locations": [
            "Spear Pillar F3/F5"
        ],
        "prev": [
            {
                "name": "Piddomon",
                "method": "Lv30"
            }
        ],
        "next": [
            {
                "name": "ClavisAngemon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "29",
        "name": "ClavisAngemon",
                "types": [
            "Holy",
            "Fire"
        ],
        "ability": "Blaze",
        "hiddenAbility": "Justified",
        "evoMove": "Divine Breaker",
        "moves": [
            {
                "level": "56",
                "move": "Heavens Gate"
            },
            {
                "level": "59",
                "move": "Wish"
            },
            {
                "level": "62",
                "move": "Sacred Sword"
            },
            {
                "level": "65",
                "move": "Sharp Claymore"
            },
            {
                "level": "68",
                "move": "Magic Blade"
            },
            {
                "level": "71",
                "move": "Light Screen"
            },
            {
                "level": "74",
                "move": "Reflect"
            },
            {
                "level": "77",
                "move": "Whirlwind"
            },
            {
                "level": "80",
                "move": "King's Shield"
            }
        ],
        "locations": [
            "Spear Pillar F5"
        ],
        "prev": [
            {
                "name": "ArkhaiAngemon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "30",
        "name": "Gargolemon",
                "types": [
            "Holy",
            "Dragon"
        ],
        "ability": "Sturdy",
        "hiddenAbility": "",
        "evoMove": "Light Laser",
        "moves": [
            {
                "level": "19",
                "move": "Dual Chop"
            },
            {
                "level": "21",
                "move": "Rock Blast"
            },
            {
                "level": "23",
                "move": "Demon Claw"
            },
            {
                "level": "26",
                "move": "Wing Attack"
            },
            {
                "level": "29",
                "move": "Power Gem"
            },
            {
                "level": "32",
                "move": "Dragon Claw"
            }
        ],
        "locations": [
            "Route 110",
            "Spear Pillar F3"
        ],
        "prev": [
            {
                "name": "Veemon",
                "method": "Light Data"
            }
        ],
        "next": [
            {
                "name": "Manticoremon",
                "method": "Lv34"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "31",
        "name": "Manticoremon",
                "types": [
            "Holy",
            "Dragon"
        ],
        "ability": "No Guard",
        "hiddenAbility": "",
        "evoMove": "Trinity Gospel",
        "moves": [
            {
                "level": "36",
                "move": "Poison Tail"
            },
            {
                "level": "39",
                "move": "Brick Break"
            },
            {
                "level": "41",
                "move": "Roar"
            },
            {
                "level": "44",
                "move": "Pursuit"
            },
            {
                "level": "47",
                "move": "Poison Jab"
            },
            {
                "level": "50",
                "move": "Tri Attack"
            },
            {
                "level": "53",
                "move": "Holy Blast"
            }
        ],
        "locations": [
            "Spear Pillar F5"
        ],
        "prev": [
            {
                "name": "Gargolemon",
                "method": "Lv34"
            }
        ],
        "next": [],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "32",
        "name": "Agumon",
                "types": [
            "Fire"
        ],
        "ability": "Blaze",
        "hiddenAbility": "Solar Power",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Bulk Up"
            },
            {
                "level": "12",
                "move": "Fire Fang"
            },
            {
                "level": "15",
                "move": "Rock Smash"
            },
            {
                "level": "18",
                "move": "Headbutt"
            }
        ],
        "locations": [
            "Route 101",
            "Route 102",
            "Route 104",
            "Granite Cave"
        ],
        "prev": [],
        "next": [
            {
                "name": "Greymon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "33",
        "name": "Greymon",
                "types": [
            "Fire"
        ],
        "ability": "Blaze",
        "hiddenAbility": "Solar Power",
        "evoMove": "Mega Flame",
        "moves": [
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Circle Throw"
            },
            {
                "level": "29",
                "move": "Master Fire"
            },
            {
                "level": "32",
                "move": "Dragon Breath"
            }
        ],
        "locations": [
            "Granite Cave F4",
            "Route 110"
        ],
        "prev": [
            {
                "name": "Agumon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "MetalGreymon",
                "method": "Lv 32"
            },
            {
                "name": "BlitzGreymon",
                "method": "Metal  Lv New Mauvile"
            },
            {
                "name": "Kimeramon",
                "method": "Organic Data"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "34",
        "name": "MetalGreymon",
                "types": [
            "Steel",
            "Fire"
        ],
        "ability": "Blaze",
        "hiddenAbility": "Solar Power",
        "evoMove": "Giga Destroyer",
        "moves": [
            {
                "level": "33",
                "move": "Pulse Laser"
            },
            {
                "level": "36",
                "move": "Dragon Claw"
            },
            {
                "level": "39",
                "move": "Heat Wave"
            },
            {
                "level": "41",
                "move": "Shift Gear"
            },
            {
                "level": "44",
                "move": "Iron Head"
            },
            {
                "level": "47",
                "move": "Metal Sound"
            },
            {
                "level": "50",
                "move": "Meltdown"
            },
            {
                "level": "53",
                "move": "Evil Bite"
            }
        ],
        "locations": [
            "Victory Road F1"
        ],
        "prev": [
            {
                "name": "Greymon",
                "method": "Lv 32"
            }
        ],
        "next": [
            {
                "name": "WarGreymon",
                "method": "Lv54"
            },
            {
                "name": "ShineGreymon",
                "method": "Auspicious Armor"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "35",
        "name": "WarGreymon",
                "types": [
            "Fire",
            "Dragon"
        ],
        "ability": "Blaze",
        "hiddenAbility": "Solar Power",
        "evoMove": "Gaia Force",
        "moves": [
            {
                "level": "55",
                "move": "Dragon Sheer"
            },
            {
                "level": "56",
                "move": "Hyper Drill"
            },
            {
                "level": "59",
                "move": "Burning Bulwark"
            },
            {
                "level": "62",
                "move": "Dual Wield"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Dragon Rush"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Flare Blitz"
            },
            {
                "level": "77",
                "move": "Sunny Day"
            },
            {
                "level": "80",
                "move": "Sunsteel Strike"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "MetalGreymon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Omegamon",
                "method": "MetalGarurumon Jogress"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "36",
        "name": "ShineGreymon",
                "types": [
            "Fire",
            "Holy"
        ],
        "ability": "Solar Power",
        "hiddenAbility": "Drought",
        "evoMove": "Pyro Ball",
        "moves": [
            {
                "level": "55",
                "move": "Gran Del Sol"
            },
            {
                "level": "56",
                "move": "Sunny Day"
            },
            {
                "level": "59",
                "move": "Hone Claws"
            },
            {
                "level": "62",
                "move": "Holy Flame"
            },
            {
                "level": "65",
                "move": "Dragon Rush"
            },
            {
                "level": "68",
                "move": "Dual Wield"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Flare Blitz"
            },
            {
                "level": "77",
                "move": "Secret Sword"
            },
            {
                "level": "80",
                "move": "Dragon Dance"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "MetalGreymon",
                "method": "Auspicious Armor"
            }
        ],
        "next": [
            {
                "name": "ShineGreymon Burst",
                "method": "Shine Soul"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "37",
        "name": "BlitzGreymon",
                "types": [
            "Steel",
            "Electric"
        ],
        "ability": "Lightning Rod",
        "hiddenAbility": "Electric Surge",
        "evoMove": "Electro Shot",
        "moves": [
            {
                "level": "55",
                "move": "Wildbolt Storm"
            },
            {
                "level": "56",
                "move": "Laser Cannon"
            },
            {
                "level": "59",
                "move": "Thunder Wave"
            },
            {
                "level": "62",
                "move": "Dragon Pulse"
            },
            {
                "level": "65",
                "move": "Electric Terrain"
            },
            {
                "level": "68",
                "move": "Megalo Spark"
            },
            {
                "level": "71",
                "move": "Lock-On"
            },
            {
                "level": "74",
                "move": "Terrain Pulse"
            },
            {
                "level": "77",
                "move": "Draco Meteor"
            },
            {
                "level": "80",
                "move": "Thunder Cage"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Greymon",
                "method": "Metal  Lv New Mauvile"
            }
        ],
        "next": [
            {
                "name": "Omegamon Alter S",
                "method": "CresGarurumon  Jogress"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "38",
        "name": "Omegamon",
                "types": [
            "Fire",
            "Ice"
        ],
        "ability": "Protean",
        "hiddenAbility": "",
        "evoMove": "Grey Sword",
        "moves": [
            {
                "level": "83",
                "move": "Burning Bulwark"
            },
            {
                "level": "86",
                "move": "Omega Blade"
            },
            {
                "level": "89",
                "move": "Magic Blade"
            },
            {
                "level": "92",
                "move": "Hyper Beam"
            },
            {
                "level": "95",
                "move": "All Delete"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "WarGreymon",
                "method": "MetalGarurumon Jogress"
            },
            {
                "name": "MetalGarurumon",
                "method": "WarGreymon  Jogress"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "39",
        "name": "Gabumon",
                "types": [
            "Fire",
            "Ice"
        ],
        "ability": "Fur Coat",
        "hiddenAbility": "Snow Cloak",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Horn Attack"
            },
            {
                "level": "9",
                "move": "Bulk Up"
            },
            {
                "level": "12",
                "move": "Ice Fang"
            },
            {
                "level": "15",
                "move": "Rock Smash"
            },
            {
                "level": "18",
                "move": "Headbutt"
            }
        ],
        "locations": [
            "Route 101",
            "Route 102",
            "Route 104"
        ],
        "prev": [],
        "next": [
            {
                "name": "Garurumon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "40",
        "name": "Garurumon",
                "types": [
            "Fire",
            "Ice"
        ],
        "ability": "Fur Coat",
        "hiddenAbility": "Snow Cloak",
        "evoMove": "Mega Flame",
        "moves": [
            {
                "level": "19",
                "move": "Ice Fang"
            },
            {
                "level": "21",
                "move": "Icy Wind"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Evil Bite"
            },
            {
                "level": "29",
                "move": "Winter Blast"
            },
            {
                "level": "32",
                "move": "Mystical Fire"
            }
        ],
        "locations": [
            "Route 110 (Guardian)",
            "Route 117",
            "Gabumon Crest"
        ],
        "prev": [
            {
                "name": "Gabumon",
                "method": "Lv18"
            },
            {
                "name": "Strabimon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "WereGarurumon",
                "method": "Lv32"
            },
            {
                "name": "Kimeramon",
                "method": "Organic Data"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "41",
        "name": "WereGarurumon",
                "types": [
            "Ice",
            "Fighting"
        ],
        "ability": "Fur Coat",
        "hiddenAbility": "Snow Cloak",
        "evoMove": "Darkest Lariat",
        "moves": [
            {
                "level": "33",
                "move": "Jump Kick"
            },
            {
                "level": "36",
                "move": "Triple Axel"
            },
            {
                "level": "39",
                "move": "Moonlight"
            },
            {
                "level": "41",
                "move": "Blood Moon"
            },
            {
                "level": "44",
                "move": "Evil Bite"
            },
            {
                "level": "47",
                "move": "High Jump Kick"
            },
            {
                "level": "50",
                "move": "Moonblast"
            },
            {
                "level": "53",
                "move": "Light Laser"
            }
        ],
        "locations": [
            "Route 110 (Guardian)",
            "Victory Road F3"
        ],
        "prev": [
            {
                "name": "Garurumon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "MetalGarurumon",
                "method": "LV54"
            },
            {
                "name": "CresGarurumon",
                "method": "Auspicious Armor"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "42",
        "name": "MetalGarurumon",
                "types": [
            "Ice",
            "Steel"
        ],
        "ability": "Clear Body",
        "hiddenAbility": "Slush Rush",
        "evoMove": "Cocytus Breath",
        "moves": [
            {
                "level": "55",
                "move": "Giga Missile"
            },
            {
                "level": "56",
                "move": "Night Daze"
            },
            {
                "level": "59",
                "move": "Snowscape"
            },
            {
                "level": "62",
                "move": "Giga Freeze"
            },
            {
                "level": "65",
                "move": "Sheer Cold"
            },
            {
                "level": "68",
                "move": "Shift Gear"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Ice Burn"
            },
            {
                "level": "77",
                "move": "Steel Beam"
            },
            {
                "level": "80",
                "move": "Moonblast"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "WereGarurumon",
                "method": "LV54"
            }
        ],
        "next": [
            {
                "name": "Omegamon",
                "method": "WarGreymon  Jogress"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "43",
        "name": "CresGarurumon",
                "types": [
            "Ice",
            "Fighting"
        ],
        "ability": "Intrepid Sword",
        "hiddenAbility": "Sharpness",
        "evoMove": "Secret Sword",
        "moves": [
            {
                "level": "55",
                "move": "Blood Moon"
            },
            {
                "level": "56",
                "move": "Fenrir Sword"
            },
            {
                "level": "59",
                "move": "Swords Dance"
            },
            {
                "level": "62",
                "move": "Behemoth Blade"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Cocytus Breath"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Sharp Claymore"
            },
            {
                "level": "77",
                "move": "Moonlight"
            },
            {
                "level": "80",
                "move": "Moongeist Beam"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "WereGarurumon",
                "method": "Auspicious Armor"
            }
        ],
        "next": [
            {
                "name": "Omegamon Alter S",
                "method": "BlitzGreymon Jogress"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "44",
        "name": "Omegamon Alter S",
                "types": [
            "Fighting",
            "Electric"
        ],
        "ability": "Speed Boost",
        "hiddenAbility": "",
        "evoMove": "Garuru Sword",
        "moves": [
            {
                "level": "83",
                "move": "King's Shield"
            },
            {
                "level": "86",
                "move": "Omega Blade"
            },
            {
                "level": "89",
                "move": "Electro Drift"
            },
            {
                "level": "92",
                "move": "Hyper Beam"
            },
            {
                "level": "95",
                "move": "All Delete"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "BlitzGreymon",
                "method": "CresGarurumon  Jogress"
            },
            {
                "name": "CresGarurumon",
                "method": "BlitzGreymon Jogress"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "45",
        "name": "Piyomon",
                "types": [
            "Flying"
        ],
        "ability": "Run Away",
        "hiddenAbility": "Gale Wings",
        "evoMove": "Peck",
        "moves": [
            {
                "level": "6",
                "move": "Quick Attack"
            },
            {
                "level": "9",
                "move": "Gust"
            },
            {
                "level": "12",
                "move": "Tailwind"
            },
            {
                "level": "15",
                "move": "Flame Charge"
            },
            {
                "level": "18",
                "move": "Peck Flurry"
            }
        ],
        "locations": [
            "Route 103",
            "Route 104",
            "Jagged Pass",
            "Biyomon Crest"
        ],
        "prev": [],
        "next": [
            {
                "name": "Birdramon",
                "method": "Lv18"
            },
            {
                "name": "Xiquemon",
                "method": "Water Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "46",
        "name": "Birdramon",
                "types": [
            "Fire",
            "Flying"
        ],
        "ability": "Flame Body",
        "hiddenAbility": "Gale Wings",
        "evoMove": "Meteor Wing",
        "moves": [
            {
                "level": "19",
                "move": "Wing Attack"
            },
            {
                "level": "21",
                "move": "Tornado"
            },
            {
                "level": "23",
                "move": "Agility"
            },
            {
                "level": "26",
                "move": "Dragon Breath"
            },
            {
                "level": "29",
                "move": "Master Fire"
            },
            {
                "level": "32",
                "move": "Air Slash"
            }
        ],
        "locations": [
            "Route 103",
            "Route 110",
            "Route 112",
            "Jagged Pass"
        ],
        "prev": [
            {
                "name": "Piyomon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Garudamon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "47",
        "name": "Garudamon",
                "types": [
            "Fire",
            "Flying"
        ],
        "ability": "Wind Rider",
        "hiddenAbility": "Gale Wings",
        "evoMove": "Ultra Turbulence",
        "moves": [
            {
                "level": "33",
                "move": "Heat Wave"
            },
            {
                "level": "36",
                "move": "Jump Kick"
            },
            {
                "level": "39",
                "move": "Meltdown"
            },
            {
                "level": "41",
                "move": "Brick Break"
            },
            {
                "level": "44",
                "move": "Sky Drop"
            },
            {
                "level": "47",
                "move": "Fiery Dance"
            },
            {
                "level": "50",
                "move": "Agility"
            },
            {
                "level": "53",
                "move": "Brave Bird"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Birdramon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Hououmon",
                "method": "Lv54"
            },
            {
                "name": "Zhuqiaomon",
                "method": "Zuzaku Core"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "48",
        "name": "Hououmon",
                "types": [
            "Fire",
            "Holy"
        ],
        "ability": "Regenerator",
        "hiddenAbility": "Gale Wings",
        "evoMove": "Holy Flame",
        "moves": [
            {
                "level": "55",
                "move": "Heat Wave"
            },
            {
                "level": "56",
                "move": "Infinity Burn"
            },
            {
                "level": "59",
                "move": "Hurricane"
            },
            {
                "level": "62",
                "move": "Heaven Judge"
            },
            {
                "level": "65",
                "move": "Pyro Ball"
            },
            {
                "level": "68",
                "move": "Fire Blast"
            },
            {
                "level": "71",
                "move": "Bleakwind Storm"
            },
            {
                "level": "74",
                "move": "Whirlwind"
            },
            {
                "level": "77",
                "move": "Sunny Day"
            },
            {
                "level": "80",
                "move": "Overheat"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Garudamon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "49",
        "name": "Zhuqiaomon",
                "types": [
            "Fire",
            "Flying"
        ],
        "ability": "Turboblaze",
        "hiddenAbility": "Turboblaze",
        "evoMove": "Aeroblast",
        "moves": [
            {
                "level": "55",
                "move": "Raging Fury"
            },
            {
                "level": "56",
                "move": "Hurricane"
            },
            {
                "level": "59",
                "move": "Red Inferno"
            },
            {
                "level": "62",
                "move": "Hell Fire"
            },
            {
                "level": "65",
                "move": "Nasty Plot"
            },
            {
                "level": "68",
                "move": "Bleakwind Storm"
            },
            {
                "level": "71",
                "move": "Fusion Flare"
            },
            {
                "level": "74",
                "move": "Magma Storm"
            },
            {
                "level": "77",
                "move": "Sunny Day"
            },
            {
                "level": "80",
                "move": "Overheat"
            }
        ],
        "locations": [
            "Route 111 Ancient Tomb"
        ],
        "prev": [
            {
                "name": "Garudamon",
                "method": "Zuzaku Core"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "50",
        "name": "Xiquemon",
                "types": [
            "Water",
            "Flying"
        ],
        "ability": "Swift Swim",
        "hiddenAbility": "Gale Wings",
        "evoMove": "Aqua Jet",
        "moves": [
            {
                "level": "19",
                "move": "Pluck"
            },
            {
                "level": "21",
                "move": "Aqua Cutter"
            },
            {
                "level": "23",
                "move": "Tailwind"
            },
            {
                "level": "26",
                "move": "Ice Punch"
            },
            {
                "level": "29",
                "move": "Aerial Ace"
            },
            {
                "level": "32",
                "move": "Triple Dive"
            }
        ],
        "locations": [
            "Route 103",
            "Route 104",
            "Route 110",
            "Route 116",
            "Biyomon Crest"
        ],
        "prev": [
            {
                "name": "Piyomon",
                "method": "Water Data"
            }
        ],
        "next": [
            {
                "name": "Huankunmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "51",
        "name": "Huankunmon",
                "types": [
            "Water",
            "Flying"
        ],
        "ability": "Swift Swim",
        "hiddenAbility": "Gale Wings",
        "evoMove": "Fishious Rend",
        "moves": [
            {
                "level": "33",
                "move": "Evil Bite"
            },
            {
                "level": "36",
                "move": "Whirlpool"
            },
            {
                "level": "39",
                "move": "Moonlight"
            },
            {
                "level": "41",
                "move": "Icicle Crash"
            },
            {
                "level": "44",
                "move": "Water Tower"
            },
            {
                "level": "47",
                "move": "Rain Dance"
            },
            {
                "level": "50",
                "move": "Moonblast"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Xiquemon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Xiangpengmon",
                "method": "Lv52"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "52",
        "name": "Xiangpengmon",
                "types": [
            "Water",
            "Flying"
        ],
        "ability": "Drizzle",
        "hiddenAbility": "Delta Stream",
        "evoMove": "River of Power",
        "moves": [
            {
                "level": "55",
                "move": "Thunder"
            },
            {
                "level": "56",
                "move": "Rest"
            },
            {
                "level": "59",
                "move": "Heaven Judge"
            },
            {
                "level": "62",
                "move": "Wildbolt Storm"
            },
            {
                "level": "65",
                "move": "Sandsear Storm"
            },
            {
                "level": "68",
                "move": "Springtide Storm"
            },
            {
                "level": "71",
                "move": "Tidal Spear"
            },
            {
                "level": "74",
                "move": "Origin Pulse"
            },
            {
                "level": "77",
                "move": "Rain Dance"
            },
            {
                "level": "80",
                "move": "Thunderclap"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Huankunmon",
                "method": "Lv52"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "53",
        "name": "Tentomon",
                "types": [
            "Bug",
            "Electric"
        ],
        "ability": "Shell Armor",
        "hiddenAbility": "Huge Power",
        "evoMove": "Fury Cutter",
        "moves": [
            {
                "level": "6",
                "move": "Fury Swipes"
            },
            {
                "level": "9",
                "move": "Charge"
            },
            {
                "level": "12",
                "move": "Bug Bite"
            },
            {
                "level": "15",
                "move": "Thunder Wave"
            },
            {
                "level": "18",
                "move": "Electro Ball"
            }
        ],
        "locations": [
            "Route 102",
            "Route 104",
            "Petalburg Woods"
        ],
        "prev": [],
        "next": [
            {
                "name": "Kabuterimon",
                "method": "Lv18 Lowkey"
            },
            {
                "name": "Kuwagamon",
                "method": "Lv18 Amped"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "54",
        "name": "Kabuterimon",
                "types": [
            "Bug",
            "Electric"
        ],
        "ability": "Shell Armor",
        "hiddenAbility": "Quark Drive",
        "evoMove": "Mega Blaster",
        "moves": [
            {
                "level": "19",
                "move": "Shock Wave"
            },
            {
                "level": "21",
                "move": "Signal Beam"
            },
            {
                "level": "23",
                "move": "Arm Thrust"
            },
            {
                "level": "26",
                "move": "Aerial Ace"
            },
            {
                "level": "29",
                "move": "Rising Voltage"
            },
            {
                "level": "32",
                "move": "Quiver Dance"
            }
        ],
        "locations": [
            "Tentomon Crest",
            "Old Mauville"
        ],
        "prev": [
            {
                "name": "Tentomon",
                "method": "Lv18 Lowkey"
            }
        ],
        "next": [
            {
                "name": "AtlurKabuterimon",
                "method": "Lv32"
            },
            {
                "name": "Kimeramon",
                "method": "Organic Data"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "55",
        "name": "AtlurKabuterimon",
                "types": [
            "Bug",
            "Electric"
        ],
        "ability": "Electromorphosis",
        "hiddenAbility": "Quark Drive",
        "evoMove": "Lunge",
        "moves": [
            {
                "level": "33",
                "move": "Body Press"
            },
            {
                "level": "36",
                "move": "Electric Cloud"
            },
            {
                "level": "39",
                "move": "Electric Terrain"
            },
            {
                "level": "41",
                "move": "Iron Defense"
            },
            {
                "level": "44",
                "move": "Circle Throw"
            },
            {
                "level": "47",
                "move": "Megalo Spark"
            },
            {
                "level": "50",
                "move": "Wild Charge"
            },
            {
                "level": "53",
                "move": "X-Scissor"
            }
        ],
        "locations": [
            "Victory Road F1"
        ],
        "prev": [
            {
                "name": "Kabuterimon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "HerculesKabuterimon",
                "method": "Lv54"
            },
            {
                "name": "TyrantKabuterimon",
                "method": "Sachet"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "56",
        "name": "HerculesKabuterimon",
                "types": [
            "Bug",
            "Electric"
        ],
        "ability": "Electromorphosis",
        "hiddenAbility": "Quark Drive",
        "evoMove": "Megalo Spark",
        "moves": [
            {
                "level": "56",
                "move": "Bug Buzz"
            },
            {
                "level": "59",
                "move": "Victory Dance"
            },
            {
                "level": "62",
                "move": "Volt Switch"
            },
            {
                "level": "65",
                "move": "Close Combat"
            },
            {
                "level": "68",
                "move": "Protect"
            },
            {
                "level": "71",
                "move": "Electric Terrain"
            },
            {
                "level": "74",
                "move": "Seismic Toss"
            },
            {
                "level": "77",
                "move": "Mega Death"
            },
            {
                "level": "80",
                "move": "Bolt Strike"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "AtlurKabuterimon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "57",
        "name": "TyrantKabuterimon",
                "types": [
            "Bug",
            "Dark"
        ],
        "ability": "Grim Neigh",
        "hiddenAbility": "Vessel of Ruin",
        "evoMove": "Night Daze",
        "moves": [
            {
                "level": "55",
                "move": "Wildbolt Storm"
            },
            {
                "level": "56",
                "move": "Instruct"
            },
            {
                "level": "59",
                "move": "Quiver Dance"
            },
            {
                "level": "62",
                "move": "Dark Roar"
            },
            {
                "level": "65",
                "move": "Close Combat"
            },
            {
                "level": "68",
                "move": "Shine of Bee"
            },
            {
                "level": "71",
                "move": "Heal Order"
            },
            {
                "level": "74",
                "move": "Defend Order"
            },
            {
                "level": "77",
                "move": "Mega Death"
            },
            {
                "level": "80",
                "move": "Dark Lightning"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "AtlurKabuterimon",
                "method": "Sachet"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "58",
        "name": "Kuwagamon",
                "types": [
            "Bug",
            "Fighting"
        ],
        "ability": "Sturdy",
        "hiddenAbility": "Huge Power",
        "evoMove": "Scissor Jaw",
        "moves": [
            {
                "level": "19",
                "move": "Aerial Ace"
            },
            {
                "level": "21",
                "move": "Vital Throw"
            },
            {
                "level": "23",
                "move": "Demon Claw"
            },
            {
                "level": "26",
                "move": "Bulk Up"
            },
            {
                "level": "29",
                "move": "Brick Break"
            },
            {
                "level": "32",
                "move": "Spike Finish"
            }
        ],
        "locations": [
            "Petalburg Woods"
        ],
        "prev": [
            {
                "name": "Tentomon",
                "method": "Lv18 Amped"
            }
        ],
        "next": [
            {
                "name": "Okuwamon",
                "method": "Lv32"
            },
            {
                "name": "Kimeramon",
                "method": "Organic Data"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "59",
        "name": "Okuwamon",
                "types": [
            "Bug",
            "Fighting"
        ],
        "ability": "Tough Claws",
        "hiddenAbility": "Compound Eyes",
        "evoMove": "X-Scissor",
        "moves": [
            {
                "level": "33",
                "move": "Seismic Toss"
            },
            {
                "level": "36",
                "move": "Darkest Lariat"
            },
            {
                "level": "39",
                "move": "Fell Stinger"
            },
            {
                "level": "41",
                "move": "U-Turn"
            },
            {
                "level": "44",
                "move": "Swords Dance"
            },
            {
                "level": "47",
                "move": "Iron Defense"
            },
            {
                "level": "50",
                "move": "Punishment"
            },
            {
                "level": "53",
                "move": "First Impression"
            }
        ],
        "locations": [
            "Victory Road F1",
            "F3"
        ],
        "prev": [
            {
                "name": "Kuwagamon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "GranKuwagamon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "60",
        "name": "GranKuwagamon",
                "types": [
            "Bug",
            "Fighting"
        ],
        "ability": "Tough Claws",
        "hiddenAbility": "Compound Eyes",
        "evoMove": "Spacial Rend",
        "moves": [
            {
                "level": "55",
                "move": "Guillotine"
            },
            {
                "level": "56",
                "move": "Laser Focus"
            },
            {
                "level": "59",
                "move": "First Impression"
            },
            {
                "level": "62",
                "move": "Superpower"
            },
            {
                "level": "65",
                "move": "Ghost Drive"
            },
            {
                "level": "68",
                "move": "Necro Eclipse"
            },
            {
                "level": "71",
                "move": "Meteor Assault"
            },
            {
                "level": "74",
                "move": "Jaw Lock"
            },
            {
                "level": "77",
                "move": "Sucker Punch"
            },
            {
                "level": "80",
                "move": "Extreme Speed"
            }
        ],
        "locations": [
            "Victory Road F1"
        ],
        "prev": [
            {
                "name": "Okuwamon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "61",
        "name": "Palmon",
                "types": [
            "Grass",
            "Poison"
        ],
        "ability": "Chlorophyll",
        "hiddenAbility": "Effect Spore",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Poison Sting"
            },
            {
                "level": "9",
                "move": "Stun Spore"
            },
            {
                "level": "12",
                "move": "Wrap"
            },
            {
                "level": "15",
                "move": "Magical Leaf"
            },
            {
                "level": "18",
                "move": "Poison Fang"
            }
        ],
        "locations": [
            "Route 102",
            "Route 104",
            "Petalburg Woods"
        ],
        "prev": [],
        "next": [
            {
                "name": "Togemon",
                "method": "Lv18 Amped"
            },
            {
                "name": "Sunflowmon",
                "method": "lv18 Lowkey"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "62",
        "name": "Togemon",
                "types": [
            "Grass"
        ],
        "ability": "Sand Veil",
        "hiddenAbility": "Iron Fist",
        "evoMove": "Needle Arm",
        "moves": [
            {
                "level": "19",
                "move": "Spikes"
            },
            {
                "level": "21",
                "move": "Pin Missile"
            },
            {
                "level": "23",
                "move": "Drain Punch"
            },
            {
                "level": "26",
                "move": "Spiky Shield"
            },
            {
                "level": "29",
                "move": "Grassy Slide"
            },
            {
                "level": "32",
                "move": "Grassy Terrain"
            }
        ],
        "locations": [
            "Route 103 (Part 2)",
            "Route 111"
        ],
        "prev": [
            {
                "name": "Palmon",
                "method": "Lv18 Amped"
            }
        ],
        "next": [
            {
                "name": "Lilimon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "63",
        "name": "Lilimon",
                "types": [
            "Grass",
            "Fairy"
        ],
        "ability": "Flower Veil",
        "hiddenAbility": "Grassy Surge",
        "evoMove": "Petal Blizzard",
        "moves": [
            {
                "level": "33",
                "move": "Alluring Voice"
            },
            {
                "level": "36",
                "move": "Jump Kick"
            },
            {
                "level": "39",
                "move": "Flower Shield"
            },
            {
                "level": "41",
                "move": "Aromatherapy"
            },
            {
                "level": "44",
                "move": "Misty Terrain"
            },
            {
                "level": "47",
                "move": "Petal Dance"
            },
            {
                "level": "50",
                "move": "Moonblast"
            },
            {
                "level": "53",
                "move": "High Jump Kick"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Togemon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Rosemon",
                "method": "Lv54"
            },
            {
                "name": "BanchoLilimon",
                "method": "Gakuren"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "64",
        "name": "Rosemon",
                "types": [
            "Grass",
            "Poison"
        ],
        "ability": "Flower Veil",
        "hiddenAbility": "Grassy Surge",
        "evoMove": "Power Whip",
        "moves": [
            {
                "level": "55",
                "move": "Play Rough"
            },
            {
                "level": "56",
                "move": "Poison Jab"
            },
            {
                "level": "59",
                "move": "Victory Dance"
            },
            {
                "level": "62",
                "move": "Dazzling Gleam"
            },
            {
                "level": "65",
                "move": "Gran Del Sol"
            },
            {
                "level": "68",
                "move": "Sunny Day"
            },
            {
                "level": "71",
                "move": "Close Combat"
            },
            {
                "level": "74",
                "move": "X-Scissor"
            },
            {
                "level": "77",
                "move": "Seed Tempest"
            },
            {
                "level": "80",
                "move": "Leaf Storm"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Lilimon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Rosemon Burst",
                "method": "Rose Soul"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "65",
        "name": "Rafflesimon",
                "types": [
            "Grass",
            "Fairy"
        ],
        "ability": "Misty Surge",
        "hiddenAbility": "Grassy Surge",
        "evoMove": "Chloroblast",
        "moves": [
            {
                "level": "83",
                "move": "Springtide Storm"
            },
            {
                "level": "86",
                "move": "Nasty Plot"
            },
            {
                "level": "89",
                "move": "Lovely Attack"
            },
            {
                "level": "92",
                "move": "Heart Break"
            },
            {
                "level": "95",
                "move": "Fleur Cannon"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Lotusmon",
                "method": "Rosemon Jogress"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "66",
        "name": "BanchoLilimon",
                "types": [
            "Grass",
            "Fighting"
        ],
        "ability": "Justified",
        "hiddenAbility": "Grassy Surge",
        "evoMove": "Power Whip",
        "moves": [
            {
                "level": "54",
                "move": "Play Rough"
            },
            {
                "level": "56",
                "move": "Poison Jab"
            },
            {
                "level": "59",
                "move": "Victory Dance"
            },
            {
                "level": "62",
                "move": "Triple Kick"
            },
            {
                "level": "65",
                "move": "Gran Del Sol"
            },
            {
                "level": "68",
                "move": "Sunny Day"
            },
            {
                "level": "71",
                "move": "Close Combat"
            },
            {
                "level": "74",
                "move": "X-Scissor"
            },
            {
                "level": "77",
                "move": "Seed Tempest"
            },
            {
                "level": "80",
                "move": "Leaf Storm"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Lilimon",
                "method": "Gakuren"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "67",
        "name": "Sunflowmon",
                "types": [
            "Grass",
            "Flying"
        ],
        "ability": "Clorophyll",
        "hiddenAbility": "Solar Power",
        "evoMove": "Giga Drain",
        "moves": [
            {
                "level": "19",
                "move": "Draining Kiss"
            },
            {
                "level": "21",
                "move": "Fairy Wind"
            },
            {
                "level": "23",
                "move": "Sweet Scent"
            },
            {
                "level": "26",
                "move": "Cotton Spore"
            },
            {
                "level": "29",
                "move": "Air Slash"
            },
            {
                "level": "32",
                "move": "Petal Blizzard"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Palmon",
                "method": "lv18 Lowkey"
            }
        ],
        "next": [
            {
                "name": "Lilamon",
                "method": "Lv32 Female"
            },
            {
                "name": "Blossomon",
                "method": "Lv32 Male"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "68",
        "name": "Lilamon",
                "types": [
            "Grass"
        ],
        "ability": "Cute Charm",
        "hiddenAbility": "Leaf Guard",
        "evoMove": "Petal Blizzard",
        "moves": [
            {
                "level": "33",
                "move": "Flower Trick"
            },
            {
                "level": "36",
                "move": "Flower Shield"
            },
            {
                "level": "39",
                "move": "Moonlight"
            },
            {
                "level": "41",
                "move": "Petal Dance"
            },
            {
                "level": "44",
                "move": "Electric Cloud"
            },
            {
                "level": "47",
                "move": "Attract"
            },
            {
                "level": "50",
                "move": "Energy Ball"
            },
            {
                "level": "53",
                "move": "Lovely Attack"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Sunflowmon",
                "method": "Lv32 Female"
            }
        ],
        "next": [
            {
                "name": "Lotusmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "69",
        "name": "Lotusmon",
                "types": [
            "Grass",
            "Magic"
        ],
        "ability": "Triage",
        "hiddenAbility": "Dark Aura",
        "evoMove": "Sparkly Swirl",
        "moves": [
            {
                "level": "56",
                "move": "Seed Flare"
            },
            {
                "level": "59",
                "move": "Quiver Dance"
            },
            {
                "level": "62",
                "move": "Heal Pulse"
            },
            {
                "level": "65",
                "move": "Night Daze"
            },
            {
                "level": "68",
                "move": "Flower Shield"
            },
            {
                "level": "71",
                "move": "Grassy Terrain"
            },
            {
                "level": "74",
                "move": "Nasty Plot"
            },
            {
                "level": "77",
                "move": "Eldrich Blast"
            },
            {
                "level": "80",
                "move": "Spell Blast"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Lilamon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Rafflesimon",
                "method": "Rosemon Jogress"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "70",
        "name": "Blossomon",
                "types": [
            "Grass"
        ],
        "ability": "Regenerator",
        "hiddenAbility": "Solar Power",
        "evoMove": "Petal Blizzard",
        "moves": [
            {
                "level": "36",
                "move": "Ingrain"
            },
            {
                "level": "39",
                "move": "Poison Powder"
            },
            {
                "level": "41",
                "move": "Spikes"
            },
            {
                "level": "44",
                "move": "Snap Trap"
            },
            {
                "level": "47",
                "move": "Evil Bite"
            },
            {
                "level": "50",
                "move": "Pollen Puff"
            },
            {
                "level": "52",
                "move": "Seed Tempest"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Sunflowmon",
                "method": "Lv32 Male"
            }
        ],
        "next": [
            {
                "name": "Zamielmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "71",
        "name": "Zamielmon",
                "types": [
            "Grass",
            "Fairy"
        ],
        "ability": "Super Luck",
        "hiddenAbility": "Solar Power",
        "evoMove": "Solar Beam",
        "moves": [
            {
                "level": "55",
                "move": "Moonblast"
            },
            {
                "level": "56",
                "move": "Triple Arrows"
            },
            {
                "level": "59",
                "move": "Treasure Arrow"
            },
            {
                "level": "62",
                "move": "Dazzling Gleam"
            },
            {
                "level": "65",
                "move": "Laser Focus"
            },
            {
                "level": "68",
                "move": "Minimize"
            },
            {
                "level": "71",
                "move": "Seed Flare"
            },
            {
                "level": "74",
                "move": "Springtide Storm"
            },
            {
                "level": "77",
                "move": "Nature's Madness"
            },
            {
                "level": "80",
                "move": "Frenzy Plant"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Blossomon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "72",
        "name": "Gomamon",
                "types": [
            "Water"
        ],
        "ability": "Thick Fat",
        "hiddenAbility": "Intimidate",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Bulk Up"
            },
            {
                "level": "12",
                "move": "Icy Wind"
            },
            {
                "level": "15",
                "move": "Bubble Beam"
            },
            {
                "level": "18",
                "move": "Headbutt"
            }
        ],
        "locations": [
            "Route 104",
            "Shoal Cave"
        ],
        "prev": [],
        "next": [
            {
                "name": "Ikkakumon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "73",
        "name": "Ikkakumon",
                "types": [
            "Water",
            "Ice"
        ],
        "ability": "Thick Fat",
        "hiddenAbility": "Intimidate",
        "evoMove": "Ice Needle",
        "moves": [
            {
                "level": "19",
                "move": "Avalanche"
            },
            {
                "level": "21",
                "move": "Peck Flurry"
            },
            {
                "level": "23",
                "move": "Buster Dive"
            },
            {
                "level": "26",
                "move": "Work Up"
            },
            {
                "level": "29",
                "move": "Icicle Crash"
            },
            {
                "level": "32",
                "move": "Aqua Jet"
            }
        ],
        "locations": [
            "Route 121"
        ],
        "prev": [
            {
                "name": "Gomamon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Zudomon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "74",
        "name": "Zudomon",
                "types": [
            "Water",
            "Ice"
        ],
        "ability": "Galvanize",
        "hiddenAbility": "Intimidate",
        "evoMove": "Zing Zap",
        "moves": [
            {
                "level": "33",
                "move": "Heavy Slam"
            },
            {
                "level": "36",
                "move": "Withdraw"
            },
            {
                "level": "39",
                "move": "Electric Cloud"
            },
            {
                "level": "41",
                "move": "Crabhammer"
            },
            {
                "level": "44",
                "move": "Evil Bite"
            },
            {
                "level": "47",
                "move": "Gigaton Hammer"
            },
            {
                "level": "50",
                "move": "Wild Charge"
            },
            {
                "level": "53",
                "move": "Liquidation"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Ikkakumon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Vikemon",
                "method": "Lv54"
            },
            {
                "name": "Plesiomon",
                "method": "King's Rock"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "75",
        "name": "Vikemon",
                "types": [
            "Water",
            "Ice"
        ],
        "ability": "Snow Warning",
        "hiddenAbility": "Intimidate",
        "evoMove": "Giga Freeze",
        "moves": [
            {
                "level": "56",
                "move": "Meteor Mash"
            },
            {
                "level": "59",
                "move": "Hail"
            },
            {
                "level": "62",
                "move": "Plasma Fists"
            },
            {
                "level": "65",
                "move": "Mountain Gale"
            },
            {
                "level": "68",
                "move": "Wave Crash"
            },
            {
                "level": "71",
                "move": "Earthquake"
            },
            {
                "level": "74",
                "move": "Glacial Lance"
            },
            {
                "level": "77",
                "move": "Thunder"
            },
            {
                "level": "80",
                "move": "Freeze Shock"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Zudomon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "76",
        "name": "Plesiomon",
                "types": [
            "Water"
        ],
        "ability": "Liquid Voice",
        "hiddenAbility": "Mold Breaker",
        "evoMove": "Sparkling Aria",
        "moves": [
            {
                "level": "55",
                "move": "Absolute Zero"
            },
            {
                "level": "56",
                "move": "Perish Song"
            },
            {
                "level": "59",
                "move": "Sing"
            },
            {
                "level": "62",
                "move": "Dragon Pulse"
            },
            {
                "level": "65",
                "move": "Alluring Voice"
            },
            {
                "level": "68",
                "move": "Aqua Magic"
            },
            {
                "level": "71",
                "move": "River of Power"
            },
            {
                "level": "74",
                "move": "Defog"
            },
            {
                "level": "77",
                "move": "Mist"
            },
            {
                "level": "80",
                "move": "Hydro Cannon"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Zudomon",
                "method": "King's Rock"
            }
        ],
        "next": [
            {
                "name": "Aegisdramon",
                "method": "Jogress MetalSeadramon"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "77",
        "name": "Terriermon",
                "types": [
            "Normal"
        ],
        "ability": "Steadfast",
        "hiddenAbility": "Cute Charm",
        "evoMove": "Rapid Spin",
        "moves": [
            {
                "level": "6",
                "move": "Horn Attack"
            },
            {
                "level": "9",
                "move": "Quick Attack"
            },
            {
                "level": "12",
                "move": "Double Slap"
            },
            {
                "level": "15",
                "move": "Rock Smash"
            },
            {
                "level": "18",
                "move": "Flame Wheel"
            }
        ],
        "locations": [
            "Route 101",
            "Route 102"
        ],
        "prev": [],
        "next": [
            {
                "name": "Gargomon",
                "method": "LV18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "78",
        "name": "Gargomon",
                "types": [
            "Normal"
        ],
        "ability": "Steadfast",
        "hiddenAbility": "Thick Fat",
        "evoMove": "Power Gatling",
        "moves": [
            {
                "level": "19",
                "move": "Power-Up Punch"
            },
            {
                "level": "21",
                "move": "Drain Punch"
            },
            {
                "level": "23",
                "move": "Bulk Up"
            },
            {
                "level": "26",
                "move": "Brick Break"
            },
            {
                "level": "29",
                "move": "Spread Fire"
            },
            {
                "level": "32",
                "move": "Buster Dive"
            }
        ],
        "locations": [
            "Route 103",
            "110 (Guardian)",
            "Route 117"
        ],
        "prev": [
            {
                "name": "Terriermon",
                "method": "LV18"
            }
        ],
        "next": [
            {
                "name": "Rapidmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "79",
        "name": "Rapidmon",
                "types": [
            "Steel"
        ],
        "ability": "Speed Boost",
        "hiddenAbility": "Mega Launcher",
        "evoMove": "Giga Destroyer",
        "moves": [
            {
                "level": "33",
                "move": "Holy Blast"
            },
            {
                "level": "36",
                "move": "Extreme Speed"
            },
            {
                "level": "39",
                "move": "Tri Attack"
            },
            {
                "level": "41",
                "move": "Shift Gear"
            },
            {
                "level": "44",
                "move": "Pulse Laser"
            },
            {
                "level": "47",
                "move": "Detect"
            },
            {
                "level": "50",
                "move": "Double Team"
            },
            {
                "level": "53",
                "move": "Laser Focus"
            }
        ],
        "locations": [
            "Victory Road F1"
        ],
        "prev": [
            {
                "name": "Gargomon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "SaintGargomon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "80",
        "name": "SaintGargomon",
                "types": [
            "Steel",
            "Fighting"
        ],
        "ability": "Speed Boost",
        "hiddenAbility": "Mega Launcher",
        "evoMove": "Giga Missile",
        "moves": [
            {
                "level": "55",
                "move": "Aura Sphere"
            },
            {
                "level": "56",
                "move": "Close Combat"
            },
            {
                "level": "59",
                "move": "Iron Defense"
            },
            {
                "level": "62",
                "move": "Lock-On"
            },
            {
                "level": "65",
                "move": "Meltdown"
            },
            {
                "level": "68",
                "move": "Focus Blast"
            },
            {
                "level": "71",
                "move": "Mugen Cannon"
            },
            {
                "level": "74",
                "move": "Meteor Mash"
            },
            {
                "level": "77",
                "move": "Superpower"
            },
            {
                "level": "80",
                "move": "Explosion"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Rapidmon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "81",
        "name": "Guilmon",
                "types": [
            "Fire",
            "Dark"
        ],
        "ability": "Berserk",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Rock Smash"
            },
            {
                "level": "9",
                "move": "Bulk Up"
            },
            {
                "level": "12",
                "move": "Fire Fang"
            },
            {
                "level": "15",
                "move": "Pursuit"
            },
            {
                "level": "18",
                "move": "Headbutt"
            }
        ],
        "locations": [
            "Route 116"
        ],
        "prev": [],
        "next": [
            {
                "name": "Growmon",
                "method": "LV18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "82",
        "name": "Growmon",
                "types": [
            "Fire",
            "Dark"
        ],
        "ability": "Berserk",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Mega Flame",
        "moves": [
            {
                "level": "19",
                "move": "Dragon Rage"
            },
            {
                "level": "21",
                "move": "Demon Claw"
            },
            {
                "level": "23",
                "move": "Dragon Breath"
            },
            {
                "level": "26",
                "move": "Wind Cutter"
            },
            {
                "level": "29",
                "move": "Master Fire"
            },
            {
                "level": "32",
                "move": "Roar"
            }
        ],
        "locations": [
            "Granite Cave F4",
            "Route 111"
        ],
        "prev": [
            {
                "name": "Guilmon",
                "method": "LV18"
            }
        ],
        "next": [
            {
                "name": "MegaloGrowmon",
                "method": "LV32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "83",
        "name": "MegaloGrowmon",
                "types": [
            "Fire",
            "Steel"
        ],
        "ability": "Berserk",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Fire Tower",
        "moves": [
            {
                "level": "33",
                "move": "Steel Blade"
            },
            {
                "level": "36",
                "move": "Spread Fire"
            },
            {
                "level": "39",
                "move": "Iron Defense"
            },
            {
                "level": "41",
                "move": "Evil Bite"
            },
            {
                "level": "44",
                "move": "Bitter Blade"
            },
            {
                "level": "47",
                "move": "Dark Pulse"
            },
            {
                "level": "50",
                "move": "Pulse Laser"
            },
            {
                "level": "53",
                "move": "Dragon Claw"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Growmon",
                "method": "LV32"
            }
        ],
        "next": [
            {
                "name": "Dukemon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "84",
        "name": "Dukemon",
                "types": [
            "Fire",
            "Fighting"
        ],
        "ability": "Dauntless Shield",
        "hiddenAbility": "Justified",
        "evoMove": "Edens Javelin",
        "moves": [
            {
                "level": "55",
                "move": "Aura Sphere"
            },
            {
                "level": "56",
                "move": "Pyro Ball"
            },
            {
                "level": "59",
                "move": "Burning Bulwark"
            },
            {
                "level": "62",
                "move": "Behemoth Bash"
            },
            {
                "level": "65",
                "move": "Meteor Assault"
            },
            {
                "level": "68",
                "move": "Divine Breaker"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Flare Blitz"
            },
            {
                "level": "77",
                "move": "Swords Dance"
            },
            {
                "level": "80",
                "move": "Sunsteel Strike"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "MegaloGrowmon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Dukemon Crimson",
                "method": "Grani"
            },
            {
                "name": "Megidramon",
                "method": "Dark Data"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "85",
        "name": "Megidramon",
                "types": [
            "Dark",
            "Dragon"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Dragon's Maw",
        "evoMove": "Meggido Flame",
        "moves": [
            {
                "level": "55",
                "move": "Dragon Energy"
            },
            {
                "level": "56",
                "move": "Red Inferno"
            },
            {
                "level": "59",
                "move": "Dragon Dance"
            },
            {
                "level": "62",
                "move": "Draco Meteor"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Outrage"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Dark Lightning"
            },
            {
                "level": "77",
                "move": "Raging Fury"
            },
            {
                "level": "80",
                "move": "Gift of Darkness"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Dukemon",
                "method": "Dark Data"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "86",
        "name": "Renamon",
                "types": [
            "Fighting",
            "Magic"
        ],
        "ability": "Inner Focus",
        "hiddenAbility": "Vital Spirit",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Double Kick"
            },
            {
                "level": "9",
                "move": "Fury Swipes"
            },
            {
                "level": "12",
                "move": "Mach Punch"
            },
            {
                "level": "15",
                "move": "Koyousetsu"
            },
            {
                "level": "18",
                "move": "Magic Attack"
            }
        ],
        "locations": [
            "Route 116"
        ],
        "prev": [],
        "next": [
            {
                "name": "Kyubimon",
                "method": "Lv18"
            },
            {
                "name": "Tenkomon",
                "method": "Ice Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "87",
        "name": "Kyubimon",
                "types": [
            "Magic",
            "Fire"
        ],
        "ability": "Inner Focus",
        "hiddenAbility": "Magic Guard",
        "evoMove": "Mystical Fire",
        "moves": [
            {
                "level": "19",
                "move": "Mega Flame"
            },
            {
                "level": "21",
                "move": "Vacuum Wave"
            },
            {
                "level": "23",
                "move": "Will-o-Wisp"
            },
            {
                "level": "26",
                "move": "Dragon Rage"
            },
            {
                "level": "29",
                "move": "Master Fire"
            },
            {
                "level": "32",
                "move": "Magic Game"
            }
        ],
        "locations": [
            "Route 110 (Guardian)",
            "Gabumon Crest",
            "Mirage Tower"
        ],
        "prev": [
            {
                "name": "Renamon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Taomon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "88",
        "name": "Taomon",
                "types": [
            "Magic",
            "Fighting"
        ],
        "ability": "Magic Bounce",
        "hiddenAbility": "Magic Guard",
        "evoMove": "Aura Sphere",
        "moves": [
            {
                "level": "33",
                "move": "Disable"
            },
            {
                "level": "36",
                "move": "Mystical Buster"
            },
            {
                "level": "39",
                "move": "Protect"
            },
            {
                "level": "41",
                "move": "Wide Guard"
            },
            {
                "level": "44",
                "move": "Lumina Crash"
            },
            {
                "level": "47",
                "move": "High Jump Kick"
            },
            {
                "level": "50",
                "move": "Trinity Gospel"
            },
            {
                "level": "53",
                "move": "Leaf Blade"
            }
        ],
        "locations": [
            "Mirage Tower"
        ],
        "prev": [
            {
                "name": "Kyubimon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Sakuyamon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "89",
        "name": "Sakuyamon",
                "types": [
            "Magic",
            "Fighting"
        ],
        "ability": "Magic Bounce",
        "hiddenAbility": "Magic Guard",
        "evoMove": "Kongoukai Mandala",
        "moves": [
            {
                "level": "56",
                "move": "Focus Blast"
            },
            {
                "level": "59",
                "move": "Wide Guard"
            },
            {
                "level": "62",
                "move": "Safeguard"
            },
            {
                "level": "65",
                "move": "Steel Blade"
            },
            {
                "level": "68",
                "move": "Victory Dance"
            },
            {
                "level": "71",
                "move": "Spell Blast"
            },
            {
                "level": "74",
                "move": "Giga Death"
            },
            {
                "level": "77",
                "move": "Holy Flame"
            },
            {
                "level": "80",
                "move": "Night Daze"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Taomon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "90",
        "name": "Tenkomon",
                "types": [
            "Ice",
            "Fairy"
        ],
        "ability": "Snow Cloak",
        "hiddenAbility": "Slush Rush",
        "evoMove": "Glaciate",
        "moves": [
            {
                "level": "19",
                "move": "Draining Kiss"
            },
            {
                "level": "21",
                "move": "Hail"
            },
            {
                "level": "23",
                "move": "Will-o-Wisp"
            },
            {
                "level": "26",
                "move": "Icy Wind"
            },
            {
                "level": "29",
                "move": "Fairy Wind"
            },
            {
                "level": "31",
                "move": "Lovely Attack"
            }
        ],
        "locations": [
            "Shoal Cave"
        ],
        "prev": [
            {
                "name": "Renamon",
                "method": "Ice Data"
            }
        ],
        "next": [
            {
                "name": "Sekkamon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "91",
        "name": "Sekkamon",
                "types": [
            "Ice",
            "Fairy"
        ],
        "ability": "Snow Cloak",
        "hiddenAbility": "Slush Rush",
        "evoMove": "Ice Needle",
        "moves": [
            {
                "level": "34",
                "move": "Holy Arrow"
            },
            {
                "level": "36",
                "move": "Spirit Break"
            },
            {
                "level": "39",
                "move": "Feint Attack"
            },
            {
                "level": "41",
                "move": "Winter Blast"
            },
            {
                "level": "44",
                "move": "Spell Sword"
            },
            {
                "level": "47",
                "move": "Triple Arrows"
            },
            {
                "level": "50",
                "move": "Spirit Shackle"
            },
            {
                "level": "53",
                "move": "Dazzling Gleam"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Tenkomon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Yukinamon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "92",
        "name": "Yukinamon",
                "types": [
            "Ice",
            "Fairy"
        ],
        "ability": "Snow Cloak",
        "hiddenAbility": "Slush Rush",
        "evoMove": "Giga Freeze",
        "moves": [
            {
                "level": "57",
                "move": "Eldrich Blast"
            },
            {
                "level": "59",
                "move": "Misty Terrain"
            },
            {
                "level": "62",
                "move": "Hypnosis"
            },
            {
                "level": "65",
                "move": "Attract"
            },
            {
                "level": "68",
                "move": "Absolute Zero"
            },
            {
                "level": "71",
                "move": "Alluring Voice"
            },
            {
                "level": "74",
                "move": "Aurora Veil"
            },
            {
                "level": "77",
                "move": "Springtide Storm"
            },
            {
                "level": "80",
                "move": "Spell Blast"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Sekkamon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "93",
        "name": "Monodramon",
                "types": [
            "Dragon"
        ],
        "ability": "Berserk",
        "hiddenAbility": "Moxie",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Rock Smash"
            },
            {
                "level": "9",
                "move": "Bulk Up"
            },
            {
                "level": "12",
                "move": "Smart Strike"
            },
            {
                "level": "15",
                "move": "Bite"
            },
            {
                "level": "18",
                "move": "Bulldoze"
            }
        ],
        "locations": [
            "Granite Cave F1"
        ],
        "prev": [],
        "next": [
            {
                "name": "Strikedramon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "94",
        "name": "Strikedramon",
                "types": [
            "Dragon"
        ],
        "ability": "Berserk",
        "hiddenAbility": "Moxie",
        "evoMove": "Fire Punch",
        "moves": [
            {
                "level": "19",
                "move": "Drill Buster"
            },
            {
                "level": "21",
                "move": "Dual Chop"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Dragon Dance"
            },
            {
                "level": "29",
                "move": "Flame Wheel"
            },
            {
                "level": "32",
                "move": "Scale Shot"
            }
        ],
        "locations": [
            "Route 111",
            "Route 113",
            "Meteor Falls"
        ],
        "prev": [
            {
                "name": "Monodramon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Cyberdramon",
                "method": "LV32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "95",
        "name": "Cyberdramon",
                "types": [
            "Dragon",
            "Steel"
        ],
        "ability": "Berserk",
        "hiddenAbility": "Moxie",
        "evoMove": "Darkest Lariat",
        "moves": [
            {
                "level": "33",
                "move": "Dragon Claw"
            },
            {
                "level": "36",
                "move": "Dual Wield"
            },
            {
                "level": "39",
                "move": "Tital Drill"
            },
            {
                "level": "41",
                "move": "X-Scissor"
            },
            {
                "level": "44",
                "move": "Evil Bite"
            },
            {
                "level": "47",
                "move": "Cross Chop"
            },
            {
                "level": "50",
                "move": "Punishment"
            },
            {
                "level": "53",
                "move": "Pulse Laser"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Strikedramon",
                "method": "LV32"
            }
        ],
        "next": [
            {
                "name": "Justimon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "96",
        "name": "Justimon",
                "types": [
            "Fighting",
            "Steel"
        ],
        "ability": "Iron Fist",
        "hiddenAbility": "Moxie",
        "evoMove": "Thunderous Kick",
        "moves": [
            {
                "level": "55",
                "move": "Meteor Mash"
            },
            {
                "level": "56",
                "move": "Megalo Spark"
            },
            {
                "level": "59",
                "move": "Victory Dance"
            },
            {
                "level": "62",
                "move": "Earthquake"
            },
            {
                "level": "65",
                "move": "Close Combat"
            },
            {
                "level": "68",
                "move": "Plasma Fists"
            },
            {
                "level": "71",
                "move": "Hyper Drill"
            },
            {
                "level": "74",
                "move": "Steel Roller"
            },
            {
                "level": "77",
                "move": "Belly Drum"
            },
            {
                "level": "80",
                "move": "Fissure"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Cyberdramon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "97",
        "name": "Veemon",
                "types": [
            "Dragon"
        ],
        "ability": "Rock Head",
        "hiddenAbility": "Adaptability",
        "evoMove": "Tackle",
        "moves": [
            {
                "level": "6",
                "move": "Comet Punch"
            },
            {
                "level": "9",
                "move": "Bulk Up"
            },
            {
                "level": "12",
                "move": "Headbutt"
            },
            {
                "level": "15",
                "move": "Rock Smash"
            },
            {
                "level": "18",
                "move": "Work Up"
            }
        ],
        "locations": [
            "Route 101",
            "Route 102",
            "Route 104"
        ],
        "prev": [],
        "next": [
            {
                "name": "ExVeemon",
                "method": "Lv18"
            },
            {
                "name": "Gargolemon",
                "method": "Light Data"
            },
            {
                "name": "Lighdramon",
                "method": "Thunder Data"
            },
            {
                "name": "Fladramon",
                "method": "Fire Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "98",
        "name": "ExVeemon",
                "types": [
            "Dragon",
            "Flying"
        ],
        "ability": "Justified",
        "hiddenAbility": "Adaptability",
        "evoMove": "Wind Cutter",
        "moves": [
            {
                "level": "19",
                "move": "Dual Chop"
            },
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Dragon Dance"
            },
            {
                "level": "26",
                "move": "Light Laser"
            },
            {
                "level": "29",
                "move": "Aerial Ace"
            },
            {
                "level": "32",
                "move": "Dragon Tail"
            }
        ],
        "locations": [
            "Granite Cave F4",
            "Route 110"
        ],
        "prev": [
            {
                "name": "Veemon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "AeroVeedramon",
                "method": "Lv32"
            },
            {
                "name": "Paildramon",
                "method": "Lv28 Stingmon"
            },
            {
                "name": "Dinobeemon",
                "method": "Stingmon Lv28"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "99",
        "name": "AeroVeedramon",
                "types": [
            "Dragon",
            "Flying"
        ],
        "ability": "Justified",
        "hiddenAbility": "Adaptability",
        "evoMove": "Dragon Tail",
        "moves": [
            {
                "level": "34",
                "move": "Holy Arrow"
            },
            {
                "level": "36",
                "move": "Dragon Breath"
            },
            {
                "level": "39",
                "move": "Dragon Dance"
            },
            {
                "level": "41",
                "move": "Floaty Fall"
            },
            {
                "level": "44",
                "move": "Evil Bite"
            },
            {
                "level": "47",
                "move": "Dragon Rush"
            },
            {
                "level": "50",
                "move": "Dragon Pulse"
            },
            {
                "level": "53",
                "move": "Ultra Turbulence"
            }
        ],
        "locations": [
            "Victory Road F2"
        ],
        "prev": [
            {
                "name": "ExVeemon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "UlforceVeedramon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "100",
        "name": "UlforceVeedramon",
                "types": [
            "Dragon",
            "Flying"
        ],
        "ability": "Gale Wings",
        "hiddenAbility": "Adaptability",
        "evoMove": "Spacial Rend",
        "moves": [
            {
                "level": "55",
                "move": "Dragon Ascent"
            },
            {
                "level": "56",
                "move": "Sharp Claymore"
            },
            {
                "level": "59",
                "move": "Detect"
            },
            {
                "level": "62",
                "move": "Double Team"
            },
            {
                "level": "65",
                "move": "Victory Dance"
            },
            {
                "level": "68",
                "move": "Draco Meteor"
            },
            {
                "level": "71",
                "move": "V-Create"
            },
            {
                "level": "74",
                "move": "Behemoth Blade"
            },
            {
                "level": "77",
                "move": "Dragon Energy"
            },
            {
                "level": "80",
                "move": "Close Combat"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "AeroVeedramon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "101",
        "name": "Paildramon",
                "types": [
            "Dragon",
            "Bug"
        ],
        "ability": "Battle Armor",
        "hiddenAbility": "Speed Boost",
        "evoMove": "Desperado Blaster",
        "moves": [
            {
                "level": "34",
                "move": "X-Scissor"
            },
            {
                "level": "36",
                "move": "Spreead Fire"
            },
            {
                "level": "39",
                "move": "Dragon Pulse"
            },
            {
                "level": "41",
                "move": "Demon Claw"
            },
            {
                "level": "44",
                "move": "Power Gatling"
            },
            {
                "level": "47",
                "move": "Dragon Claw"
            },
            {
                "level": "50",
                "move": "Bug Buzz"
            },
            {
                "level": "53",
                "move": "Agility"
            }
        ],
        "locations": [
            "Mirage Tower (Fossil Room)"
        ],
        "prev": [
            {
                "name": "ExVeemon",
                "method": "Lv28 Stingmon"
            }
        ],
        "next": [
            {
                "name": "Imperialdramon Dragon",
                "method": "Lv52"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "102",
        "name": "Imperialdramon Dragon",
                "types": [
            "Dragon",
            "Bug"
        ],
        "ability": "Mega Launcher",
        "hiddenAbility": "Tough Claws",
        "evoMove": "Mega Death",
        "moves": [
            {
                "level": "55",
                "move": "Aeroblast"
            },
            {
                "level": "56",
                "move": "Brave Bird"
            },
            {
                "level": "59",
                "move": "Dragon Dance"
            },
            {
                "level": "62",
                "move": "Positron Laser"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Roar"
            },
            {
                "level": "71",
                "move": "Dragon Energy"
            },
            {
                "level": "74",
                "move": "U-Turn"
            },
            {
                "level": "77",
                "move": "Ancient Power"
            },
            {
                "level": "80",
                "move": "Hyper Beam"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Paildramon",
                "method": "Lv52"
            },
            {
                "name": "Dinobeemon",
                "method": "Lv 52"
            }
        ],
        "next": [
            {
                "name": "Imperialdramon Fighter",
                "method": "Positron Laser"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "103",
        "name": "Lighdramon",
                "types": [
            "Dragon",
            "Electric"
        ],
        "ability": "Lightning Rod",
        "hiddenAbility": "Adaptability",
        "evoMove": "Thunder Fang",
        "moves": [
            {
                "level": "19",
                "move": "Quick Attack"
            },
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Dragon Dance"
            },
            {
                "level": "26",
                "move": "Shock Wave"
            },
            {
                "level": "29",
                "move": "Thunder Wave"
            },
            {
                "level": "32",
                "move": "Dragon Breath"
            }
        ],
        "locations": [
            "Route 110"
        ],
        "prev": [
            {
                "name": "Veemon",
                "method": "Thunder Data"
            }
        ],
        "next": [
            {
                "name": "Majiramon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "104",
        "name": "Majiramon",
                "types": [
            "Dragon",
            "Electric"
        ],
        "ability": "Lightning Rod",
        "hiddenAbility": "Adaptability",
        "evoMove": "Dragon Breath",
        "moves": [
            {
                "level": "34",
                "move": "Holy Blast"
            },
            {
                "level": "36",
                "move": "Master Fire"
            },
            {
                "level": "39",
                "move": "Nasty Plot"
            },
            {
                "level": "41",
                "move": "Dragon Claw"
            },
            {
                "level": "44",
                "move": "Electric Cloud"
            },
            {
                "level": "47",
                "move": "Dragon Pulse"
            },
            {
                "level": "50",
                "move": "Meltdown"
            },
            {
                "level": "53",
                "move": "Fly"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Lighdramon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Qinglongmon",
                "method": "Lv70"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "105",
        "name": "Qinglongmon",
                "types": [
            "Electric",
            "Dragon"
        ],
        "ability": "Hadron Engine",
        "hiddenAbility": "Dragon's Maw",
        "evoMove": "Fusion Bolt",
        "moves": [
            {
                "level": "71",
                "move": "Thunder Cage"
            },
            {
                "level": "74",
                "move": "Draco Meteor"
            },
            {
                "level": "77",
                "move": "Electric Terrain"
            },
            {
                "level": "80",
                "move": "Bolt Strike"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Majiramon",
                "method": "Lv70"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "106",
        "name": "Fladramon",
                "types": [
            "Dragon",
            "Fire"
        ],
        "ability": "Blaze",
        "hiddenAbility": "Adaptability",
        "evoMove": "Fire Punch",
        "moves": [
            {
                "level": "19",
                "move": "Mega Flame"
            },
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Dragon Dance"
            },
            {
                "level": "26",
                "move": "Master Fire"
            },
            {
                "level": "29",
                "move": "Fire Spin"
            },
            {
                "level": "32",
                "move": "Dragon Tail"
            }
        ],
        "locations": [
            "Granite Cave F4"
        ],
        "prev": [
            {
                "name": "Veemon",
                "method": "Fire Data"
            }
        ],
        "next": [
            {
                "name": "Magnamon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "107",
        "name": "Magnamon",
                "types": [
            "Dragon",
            "Steel"
        ],
        "ability": "Clear Body",
        "hiddenAbility": "Adaptability",
        "evoMove": "Extreme Jihad",
        "moves": [
            {
                "level": "33",
                "move": "Pulse Laser"
            },
            {
                "level": "36",
                "move": "Dragon Pulse"
            },
            {
                "level": "39",
                "move": "Calm Mind"
            },
            {
                "level": "41",
                "move": "Spread Fire"
            },
            {
                "level": "44",
                "move": "Flash"
            },
            {
                "level": "47",
                "move": "Detect"
            },
            {
                "level": "50",
                "move": "Power Gatling"
            },
            {
                "level": "53",
                "move": "Holy Blast"
            },
            {
                "level": "56",
                "move": "Dragon Rush"
            },
            {
                "level": "59",
                "move": "King's Shield"
            },
            {
                "level": "62",
                "move": "Meteor Mash"
            },
            {
                "level": "65",
                "move": "Dragon Energy"
            },
            {
                "level": "68",
                "move": "Steel Beam"
            },
            {
                "level": "71",
                "move": "7 Heavens"
            }
        ],
        "locations": [
            "Meteor Falls"
        ],
        "prev": [
            {
                "name": "Fladramon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Magnamon X",
                "method": "X Antibody"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "108",
        "name": "Wormmon",
                "types": [
            "Bug",
            "Poison"
        ],
        "ability": "Run Away",
        "hiddenAbility": "Defeatist",
        "evoMove": "Silk Thread",
        "moves": [
            {
                "level": "6",
                "move": "Rollout"
            },
            {
                "level": "9",
                "move": "Bug Bite"
            },
            {
                "level": "12",
                "move": "Silver Wind"
            },
            {
                "level": "15",
                "move": "Headbutt"
            },
            {
                "level": "18",
                "move": "Poison Fang"
            }
        ],
        "locations": [
            "Route 102",
            "Route 103",
            "Route 104",
            "Petalburg Woods"
        ],
        "prev": [],
        "next": [
            {
                "name": "Stingmon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "109",
        "name": "Stingmon",
                "types": [
            "Bug",
            "Poison"
        ],
        "ability": "Sniper",
        "hiddenAbility": "Super Luck",
        "evoMove": "Spike Finish",
        "moves": [
            {
                "level": "19",
                "move": "Demon Claw"
            },
            {
                "level": "21",
                "move": "Low Sweep"
            },
            {
                "level": "23",
                "move": "Double Team"
            },
            {
                "level": "24",
                "move": "Pin Missile"
            },
            {
                "level": "26",
                "move": "Poison Jab"
            },
            {
                "level": "29",
                "move": "X-Scissor"
            },
            {
                "level": "32",
                "move": "Jump Kick"
            }
        ],
        "locations": [
            "Tentomon Crest",
            "Route 110"
        ],
        "prev": [
            {
                "name": "Wormmon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "JewelBeemon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "110",
        "name": "JewelBeemon",
                "types": [
            "Bug",
            "Poison"
        ],
        "ability": "Sniper",
        "hiddenAbility": "Super Luck",
        "evoMove": "Lunge",
        "moves": [
            {
                "level": "33",
                "move": "Spike Cannon"
            },
            {
                "level": "36",
                "move": "Hone Claws"
            },
            {
                "level": "39",
                "move": "Extreme Speed"
            },
            {
                "level": "41",
                "move": "High Jump Kick"
            },
            {
                "level": "44",
                "move": "Dazzling Gleam"
            },
            {
                "level": "47",
                "move": "Victory Dance"
            },
            {
                "level": "50",
                "move": "Acrobatics"
            },
            {
                "level": "53",
                "move": "Smart Strike"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Stingmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "BanchoStingmon",
                "method": "Gakuren"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "111",
        "name": "BanchoStingmon",
                "types": [
            "Bug",
            "Poison"
        ],
        "ability": "Sniper",
        "hiddenAbility": "Super Luck",
        "evoMove": "Megahorn",
        "moves": [
            {
                "level": "55",
                "move": "Flash Bancho Punch"
            },
            {
                "level": "56",
                "move": "Hyper Drill"
            },
            {
                "level": "59",
                "move": "Swords Dance"
            },
            {
                "level": "62",
                "move": "Submission"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Head Smash"
            },
            {
                "level": "71",
                "move": "Victory Dance"
            },
            {
                "level": "74",
                "move": "Throat Chop"
            },
            {
                "level": "77",
                "move": "Fake Out"
            },
            {
                "level": "80",
                "move": "Bug NIghtmare"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "JewelBeemon",
                "method": "Gakuren"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "112",
        "name": "Dinobeemon",
                "types": [
            "Bug",
            "Dragon"
        ],
        "ability": "Compound Eyes",
        "hiddenAbility": "Tough Claws",
        "evoMove": "Hell Dance",
        "moves": [
            {
                "level": "33",
                "move": "X-Scissor"
            },
            {
                "level": "36",
                "move": "Extreme Speed"
            },
            {
                "level": "39",
                "move": "Dragon Claw"
            },
            {
                "level": "41",
                "move": "Demon Claw"
            },
            {
                "level": "44",
                "move": "Leech Life"
            },
            {
                "level": "47",
                "move": "Hone Claws"
            },
            {
                "level": "50",
                "move": "Iron Head"
            },
            {
                "level": "53",
                "move": "Swords Dance"
            }
        ],
        "locations": [
            "Mirage Tower (Fossil Room)"
        ],
        "prev": [
            {
                "name": "ExVeemon",
                "method": "Stingmon Lv28"
            }
        ],
        "next": [
            {
                "name": "Imperialdramon Dragon",
                "method": "Lv 52"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "113",
        "name": "Armadimon",
                "types": [
            "Ground"
        ],
        "ability": "Sturdy",
        "hiddenAbility": "Marvel Scale",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Fury Swipes"
            },
            {
                "level": "9",
                "move": "Bulldoze"
            },
            {
                "level": "12",
                "move": "Rock Smash"
            },
            {
                "level": "15",
                "move": "Dig"
            },
            {
                "level": "18",
                "move": "Metal Claw"
            }
        ],
        "locations": [
            "Route 101",
            "Route 111",
            "Tentomon Crest"
        ],
        "prev": [],
        "next": [
            {
                "name": "Ankylomon",
                "method": "Lv18"
            },
            {
                "name": "Submarimon",
                "method": "Water Data"
            },
            {
                "name": "Digmon",
                "method": "Earth Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "114",
        "name": "Ankylomon",
                "types": [
            "Ground",
            "Steel"
        ],
        "ability": "Sturdy",
        "hiddenAbility": "Marvel Scale",
        "evoMove": "Megaton Press",
        "moves": [
            {
                "level": "19",
                "move": "Body Press"
            },
            {
                "level": "21",
                "move": "Heavy Slam"
            },
            {
                "level": "23",
                "move": "Iron Defense"
            },
            {
                "level": "26",
                "move": "Rock Slide"
            },
            {
                "level": "29",
                "move": "Iron Tail"
            },
            {
                "level": "32",
                "move": "Magnitude"
            }
        ],
        "locations": [
            "Route 110",
            "Route 111"
        ],
        "prev": [
            {
                "name": "Armadimon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Brachiomon",
                "method": "Lv32"
            },
            {
                "name": "Shakkoumon",
                "method": "Lv28 Angemon"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "115",
        "name": "Brachiomon",
                "types": [
            "Ground",
            "Water"
        ],
        "ability": "Long Reach",
        "hiddenAbility": "Sap Sipper",
        "evoMove": "Aqua Tail",
        "moves": [
            {
                "level": "33",
                "move": "Stomping Tamtrum"
            },
            {
                "level": "36",
                "move": "Bubble Beam"
            },
            {
                "level": "39",
                "move": "Dragon Breath"
            },
            {
                "level": "41",
                "move": "Sandstorm"
            },
            {
                "level": "44",
                "move": "Water Tower"
            },
            {
                "level": "47",
                "move": "High Horsepower"
            },
            {
                "level": "50",
                "move": "Dragon Hammer"
            },
            {
                "level": "53",
                "move": "Iron Head"
            }
        ],
        "locations": [
            "Route 111",
            "Route 114"
        ],
        "prev": [
            {
                "name": "Ankylomon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "UltimateBrachiomon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "116",
        "name": "UltimateBrachiomon",
                "types": [
            "Ground",
            "Steel"
        ],
        "ability": "Long Reach",
        "hiddenAbility": "Sap Sipper",
        "evoMove": "Steel Beam",
        "moves": [
            {
                "level": "55",
                "move": "Giga Missile"
            },
            {
                "level": "56",
                "move": "Earthquake"
            },
            {
                "level": "59",
                "move": "Draco Meteor"
            },
            {
                "level": "62",
                "move": "Stone Edge"
            },
            {
                "level": "65",
                "move": "Body Press"
            },
            {
                "level": "68",
                "move": "Gravity"
            },
            {
                "level": "71",
                "move": "Stealth Rock"
            },
            {
                "level": "74",
                "move": "Terrain Pulse"
            },
            {
                "level": "77",
                "move": "Smokescreen"
            },
            {
                "level": "80",
                "move": "Steam Eruption"
            }
        ],
        "locations": [
            "Victory Road F2"
        ],
        "prev": [
            {
                "name": "Brachiomon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "117",
        "name": "Shakkoumon",
                "types": [
            "Steel",
            "Holy"
        ],
        "ability": "Levitate",
        "hiddenAbility": "",
        "evoMove": "Justice Beam",
        "moves": [
            {
                "level": "33",
                "move": "Gear Grind"
            },
            {
                "level": "36",
                "move": "Mirror Coat"
            },
            {
                "level": "41",
                "move": "Mud Bomb"
            },
            {
                "level": "44",
                "move": "Moonblast"
            },
            {
                "level": "47",
                "move": "Earth Power"
            },
            {
                "level": "50",
                "move": "Holy Blast"
            },
            {
                "level": "53",
                "move": "Protect"
            }
        ],
        "locations": [
            "Mirage Tower",
            "Spear Pillar F5"
        ],
        "prev": [
            {
                "name": "Ankylomon",
                "method": "Lv28 Angemon"
            }
        ],
        "next": [
            {
                "name": "SlashAngemon",
                "method": "Lv 52"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "118",
        "name": "SlashAngemon",
                "types": [
            "Steel",
            "Holy"
        ],
        "ability": "Sharpness",
        "hiddenAbility": "",
        "evoMove": "Dual Wield",
        "moves": [
            {
                "level": "53",
                "move": "Protect"
            },
            {
                "level": "55",
                "move": "Sacred Sword"
            },
            {
                "level": "56",
                "move": "Sharp Claymore"
            },
            {
                "level": "59",
                "move": "Hone Claws"
            },
            {
                "level": "62",
                "move": "Behemoth Blade"
            },
            {
                "level": "65",
                "move": "Laser Focus"
            },
            {
                "level": "68",
                "move": "Swords Dance"
            },
            {
                "level": "71",
                "move": "Brave Bird"
            },
            {
                "level": "74",
                "move": "Spell Sword"
            },
            {
                "level": "77",
                "move": "Guillotine"
            },
            {
                "level": "80",
                "move": "Smart Strike"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Shakkoumon",
                "method": "Lv 52"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "119",
        "name": "Submarimon",
                "types": [
            "Ground",
            "Water"
        ],
        "ability": "Swift Swim",
        "hiddenAbility": "Marvel Scale",
        "evoMove": "Aqua Jet",
        "moves": [
            {
                "level": "19",
                "move": "Bubble Beam"
            },
            {
                "level": "21",
                "move": "Drill Buster"
            },
            {
                "level": "23",
                "move": "Smart Strike"
            },
            {
                "level": "26",
                "move": "Aqua Magic"
            },
            {
                "level": "29",
                "move": "Water Tower"
            },
            {
                "level": "32",
                "move": "Triple Dive"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Armadimon",
                "method": "Water Data"
            }
        ],
        "next": [
            {
                "name": "Whamon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "120",
        "name": "Whamon",
                "types": [
            "Water"
        ],
        "ability": "Storm Drain",
        "hiddenAbility": "Marvel Scale",
        "evoMove": "Aqua Tail",
        "moves": [
            {
                "level": "33",
                "move": "Heavy Slam"
            },
            {
                "level": "36",
                "move": "Evil Bite"
            },
            {
                "level": "39",
                "move": "Body Press"
            },
            {
                "level": "41",
                "move": "Muddy Water"
            },
            {
                "level": "44",
                "move": "Water Spout"
            },
            {
                "level": "47",
                "move": "Rest"
            },
            {
                "level": "50",
                "move": "Earth Power"
            },
            {
                "level": "53",
                "move": "Rain Dance"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Submarimon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "MarineAngemon",
                "method": "Lv54"
            },
            {
                "name": "KingWhamon",
                "method": "King's Rock"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "121",
        "name": "KingWhamon",
                "types": [
            "Water",
            "Ground"
        ],
        "ability": "Storm Drain",
        "hiddenAbility": "Marvel Scale",
        "evoMove": "River of Power",
        "moves": [
            {
                "level": "56",
                "move": "Headlong Rush"
            },
            {
                "level": "59",
                "move": "Protect"
            },
            {
                "level": "62",
                "move": "Flip Turn"
            },
            {
                "level": "65",
                "move": "Evil Bite"
            },
            {
                "level": "68",
                "move": "Scald"
            },
            {
                "level": "71",
                "move": "Origin Pulse"
            },
            {
                "level": "74",
                "move": "Precipice Blades"
            },
            {
                "level": "77",
                "move": "Meteor Beam"
            },
            {
                "level": "80",
                "move": "Fissure"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Whamon",
                "method": "King's Rock"
            }
        ],
        "next": [],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "122",
        "name": "MarineAngemon",
                "types": [
            "Holy",
            "Water"
        ],
        "ability": "Healer",
        "hiddenAbility": "Marvel Scale",
        "evoMove": "Holy Blast",
        "moves": [
            {
                "level": "55",
                "move": "Sing"
            },
            {
                "level": "56",
                "move": "Heal Pulse"
            },
            {
                "level": "59",
                "move": "Lovely Attack"
            },
            {
                "level": "62",
                "move": "Dazzling Gleam"
            },
            {
                "level": "65",
                "move": "River of Power"
            },
            {
                "level": "68",
                "move": "Attract"
            },
            {
                "level": "71",
                "move": "Helping Hand"
            },
            {
                "level": "74",
                "move": "Wish"
            },
            {
                "level": "77",
                "move": "Springtide Storm"
            },
            {
                "level": "80",
                "move": "Origin Pulse"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Whamon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "123",
        "name": "Digmon",
                "types": [
            "Ground",
            "Bug"
        ],
        "ability": "Sturdy",
        "hiddenAbility": "Marvel Scale",
        "evoMove": "Pin Missile",
        "moves": [
            {
                "level": "19",
                "move": "Drill Buster"
            },
            {
                "level": "21",
                "move": "Pluck"
            },
            {
                "level": "23",
                "move": "Iron Defense"
            },
            {
                "level": "26",
                "move": "Dig"
            },
            {
                "level": "29",
                "move": "Spike Finish"
            },
            {
                "level": "32",
                "move": "Smart Strike"
            }
        ],
        "locations": [
            "Petalburg Woods",
            "Rusturf"
        ],
        "prev": [
            {
                "name": "Armadimon",
                "method": "Earth Data"
            }
        ],
        "next": [
            {
                "name": "Scorpiomon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "124",
        "name": "Scorpiomon",
                "types": [
            "Ground",
            "Bug"
        ],
        "ability": "Sturdy",
        "hiddenAbility": "Marvel Scale",
        "evoMove": "Poison Tail",
        "moves": [
            {
                "level": "33",
                "move": "Poison Fang"
            },
            {
                "level": "36",
                "move": "Smokescreen"
            },
            {
                "level": "39",
                "move": "Titan Drill"
            },
            {
                "level": "41",
                "move": "Leech Life"
            },
            {
                "level": "44",
                "move": "Evil Bite"
            },
            {
                "level": "47",
                "move": "Hyper Drill"
            },
            {
                "level": "50",
                "move": "Poison Jab"
            },
            {
                "level": "53",
                "move": "X-Scissor"
            }
        ],
        "locations": [
            "Route 111"
        ],
        "prev": [
            {
                "name": "Digmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "ElDoradimon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "125",
        "name": "ElDoradimon",
                "types": [
            "Ground",
            "Grass"
        ],
        "ability": "Solid Rock",
        "hiddenAbility": "Sap Sipper",
        "evoMove": "Earthquake",
        "moves": [
            {
                "level": "56",
                "move": "Liquidation"
            },
            {
                "level": "59",
                "move": "Wide Guard"
            },
            {
                "level": "62",
                "move": "Protect"
            },
            {
                "level": "65",
                "move": "Precipice Blades"
            },
            {
                "level": "68",
                "move": "Body Press"
            },
            {
                "level": "71",
                "move": "Heavy Slam"
            },
            {
                "level": "74",
                "move": "Evil Bite"
            },
            {
                "level": "77",
                "move": "Land's Wrath"
            },
            {
                "level": "80",
                "move": "Hydro Cannon"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Scorpiomon",
                "method": "Lv54"
            },
            {
                "name": "Jagamon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Tlalocmon",
                "method": "SaberLeomon Jogress"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "126",
        "name": "Tlalocmon",
                "types": [
            "Electric",
            "Grass"
        ],
        "ability": "Primordial Sea",
        "hiddenAbility": "",
        "evoMove": "Origin Pulse",
        "moves": [
            {
                "level": "83",
                "move": "Seed Tempest"
            },
            {
                "level": "86",
                "move": "Grassy Terrain"
            },
            {
                "level": "89",
                "move": "Chloroblast"
            },
            {
                "level": "92",
                "move": "Hurricane"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "ElDoradimon",
                "method": "SaberLeomon Jogress"
            },
            {
                "name": "SaberLeomon",
                "method": "Jogress ElDoradimon"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "127",
        "name": "Hawkmon",
                "types": [
            "Flying"
        ],
        "ability": "Keen Eye",
        "hiddenAbility": "Infiltrator",
        "evoMove": "Peck",
        "moves": [
            {
                "level": "6",
                "move": "Quick Attack"
            },
            {
                "level": "9",
                "move": "Wind Cutter"
            },
            {
                "level": "12",
                "move": "Sonic Boom"
            },
            {
                "level": "15",
                "move": "Peck Flurry"
            },
            {
                "level": "18",
                "move": "Whirlwind"
            }
        ],
        "locations": [
            "Route 103",
            "Petalburg Woods"
        ],
        "prev": [],
        "next": [
            {
                "name": "Aquilamon",
                "method": "Lv18"
            },
            {
                "name": "Shurimon",
                "method": "Wood Data"
            },
            {
                "name": "Holsmon",
                "method": "Flying Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "128",
        "name": "Aquilamon",
                "types": [
            "Flying"
        ],
        "ability": "Keen Eye",
        "hiddenAbility": "Infiltrator",
        "evoMove": "Wing Attack",
        "moves": [
            {
                "level": "19",
                "move": "Uproar"
            },
            {
                "level": "21",
                "move": "Supersonic"
            },
            {
                "level": "23",
                "move": "Chatter"
            },
            {
                "level": "26",
                "move": "Demon Claw"
            },
            {
                "level": "29",
                "move": "Pluck"
            },
            {
                "level": "32",
                "move": "Drill Buster"
            }
        ],
        "locations": [
            "Route 111",
            "112 (Part 2)"
        ],
        "prev": [
            {
                "name": "Hawkmon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Silphymon",
                "method": "Lv28 Tailmon"
            },
            {
                "name": "Hippogriffomon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "129",
        "name": "Silphymon",
                "types": [
            "Flying",
            "Holy"
        ],
        "ability": "Gale Wings",
        "hiddenAbility": "Wind Rider",
        "evoMove": "Top Gun",
        "moves": [
            {
                "level": "33",
                "move": "Dual Wingbeat"
            },
            {
                "level": "36",
                "move": "Tailwind"
            },
            {
                "level": "39",
                "move": "Hyper Voice"
            },
            {
                "level": "42",
                "move": "Aura Sphere"
            },
            {
                "level": "44",
                "move": "Holy Blast"
            },
            {
                "level": "47",
                "move": "High Jump Kick"
            },
            {
                "level": "50",
                "move": "Air Slash"
            },
            {
                "level": "53",
                "move": "Heal Pulse"
            }
        ],
        "locations": [
            "Mirage Tower (Fossil Room)"
        ],
        "prev": [
            {
                "name": "Aquilamon",
                "method": "Lv28 Tailmon"
            }
        ],
        "next": [
            {
                "name": "Valkyrimon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "130",
        "name": "Valkyrimon",
                "types": [
            "Flying",
            "Holy"
        ],
        "ability": "Gale Wings",
        "hiddenAbility": "Wind Rider",
        "evoMove": "Fenrir Sword",
        "moves": [
            {
                "level": "55",
                "move": "Edens Javelin"
            },
            {
                "level": "56",
                "move": "Sacred Sword"
            },
            {
                "level": "59",
                "move": "Brave Bird"
            },
            {
                "level": "62",
                "move": "Swords Dance"
            },
            {
                "level": "65",
                "move": "Sharp Claymore"
            },
            {
                "level": "68",
                "move": "Triple Arrows"
            },
            {
                "level": "71",
                "move": "Aeroblast"
            },
            {
                "level": "74",
                "move": "Hurricane"
            },
            {
                "level": "77",
                "move": "Recover"
            },
            {
                "level": "80",
                "move": "Sheer Cold"
            }
        ],
        "locations": [
            "Spear Pillar F5"
        ],
        "prev": [
            {
                "name": "Silphymon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "131",
        "name": "Shurimon",
                "types": [
            "Flying",
            "Grass"
        ],
        "ability": "Sharpness",
        "hiddenAbility": "Infiltrator",
        "evoMove": "Leaf Blade",
        "moves": [
            {
                "level": "19",
                "move": "Water Shuriken"
            },
            {
                "level": "21",
                "move": "Swift"
            },
            {
                "level": "23",
                "move": "Kawarimi"
            },
            {
                "level": "26",
                "move": "Air Slash"
            },
            {
                "level": "29",
                "move": "Grassy Glide"
            },
            {
                "level": "32",
                "move": "Steel Blade"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Hawkmon",
                "method": "Wood Data"
            }
        ],
        "next": [
            {
                "name": "Fumamon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "132",
        "name": "Fumamon",
                "types": [
            "Steel",
            "Undead"
        ],
        "ability": "Sharpness",
        "hiddenAbility": "Infiltrator",
        "evoMove": "Demon Katana",
        "moves": [
            {
                "level": "33",
                "move": "Sucker Punch"
            },
            {
                "level": "36",
                "move": "Fake Out"
            },
            {
                "level": "39",
                "move": "Spirit Shackle"
            },
            {
                "level": "42",
                "move": "X-Scissor"
            },
            {
                "level": "44",
                "move": "Devil Sword"
            },
            {
                "level": "47",
                "move": "Necrophobia"
            },
            {
                "level": "50",
                "move": "Cross Poison"
            },
            {
                "level": "53",
                "move": "Bitter Blade"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Shurimon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Tactimon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "133",
        "name": "Tactimon",
                "types": [
            "Steel",
            "Undead"
        ],
        "ability": "Cursed Body",
        "hiddenAbility": "Infiltrator",
        "evoMove": "Instruct",
        "moves": [
            {
                "level": "55",
                "move": "Astral Barrage"
            },
            {
                "level": "56",
                "move": "Behemoth Blade"
            },
            {
                "level": "59",
                "move": "Precipice Blades"
            },
            {
                "level": "62",
                "move": "Spotlight"
            },
            {
                "level": "65",
                "move": "Last Respects"
            },
            {
                "level": "68",
                "move": "Gigaton Hammer"
            },
            {
                "level": "71",
                "move": "Victory Dance"
            },
            {
                "level": "74",
                "move": "Mighty Cleave"
            },
            {
                "level": "77",
                "move": "Steel Roller"
            },
            {
                "level": "80",
                "move": "Fissure"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Fumamon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "134",
        "name": "Holsmon",
                "types": [
            "Flying",
            "Fairy"
        ],
        "ability": "Soul Heart",
        "hiddenAbility": "Friend Guard",
        "evoMove": "Spirit Break",
        "moves": [
            {
                "level": "19",
                "move": "Aerial Ace"
            },
            {
                "level": "21",
                "move": "Glare"
            },
            {
                "level": "23",
                "move": "Drill Buster"
            },
            {
                "level": "26",
                "move": "Fairy Wind"
            },
            {
                "level": "29",
                "move": "Pluck"
            },
            {
                "level": "32",
                "move": "Tornado"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Hawkmon",
                "method": "Flying Data"
            }
        ],
        "next": [
            {
                "name": "Peacockmon",
                "method": "Lv32 (Corrected from Peacockmon Lv32)"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "135",
        "name": "Peacockmon",
                "types": [
            "Flying",
            "Steel"
        ],
        "ability": "Gale Wings",
        "hiddenAbility": "Infiltrator",
        "evoMove": "Burning Jealousy",
        "moves": [
            {
                "level": "33",
                "move": "Holy Blast"
            },
            {
                "level": "36",
                "move": "Drill Peck"
            },
            {
                "level": "39",
                "move": "Tailwind"
            },
            {
                "level": "41",
                "move": "Steel Wing"
            },
            {
                "level": "44",
                "move": "Sizzly Slide"
            },
            {
                "level": "47",
                "move": "Air Slash"
            },
            {
                "level": "50",
                "move": "Pulse Laser"
            },
            {
                "level": "53",
                "move": "Trinity Gospel"
            }
        ],
        "locations": [
            "Biyomon Crest"
        ],
        "prev": [
            {
                "name": "Holsmon",
                "method": "Lv32 (Corrected from Peacockmon Lv32)"
            },
            {
                "name": "Peacockmon",
                "method": "Holsmon Lv32 (Corrected from  Lv32)"
            }
        ],
        "next": [
            {
                "name": "Peacockmon",
                "method": "Holsmon Lv32 (Corrected from  Lv32)"
            },
            {
                "name": "Valdurmon",
                "method": "Lv54"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "136",
        "name": "Valdurmon",
                "types": [
            "Flying",
            "Holy"
        ],
        "ability": "Justified",
        "hiddenAbility": "Good as Gold",
        "evoMove": "Heaven Judge",
        "moves": [
            {
                "level": "55",
                "move": "Hyper Voice"
            },
            {
                "level": "56",
                "move": "Hurricane"
            },
            {
                "level": "59",
                "move": "Protect"
            },
            {
                "level": "62",
                "move": "Agility"
            },
            {
                "level": "65",
                "move": "Divine Breaker"
            },
            {
                "level": "68",
                "move": "Aeroblast"
            },
            {
                "level": "71",
                "move": "Flash"
            },
            {
                "level": "74",
                "move": "Rain Dance"
            },
            {
                "level": "77",
                "move": "Bleakwind Storm"
            },
            {
                "level": "80",
                "move": "Oblivion Wing"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Peacockmon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Chaosmon Valdur Arm",
                "method": "BanchoLeomon Jogress"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "137",
        "name": "Chaosmon Valdur Arm",
                "types": [
            "CHAOS"
        ],
        "ability": "Moody",
        "hiddenAbility": "",
        "evoMove": "Ban-Tyo Blade",
        "moves": [
            {
                "level": "83",
                "move": "Bleakwind Storm"
            },
            {
                "level": "86",
                "move": "Behemoth Blade"
            },
            {
                "level": "89",
                "move": "Flash Bancho Punch"
            },
            {
                "level": "92",
                "move": "Hyper Beam"
            },
            {
                "level": "95",
                "move": "End of Paradox"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Valdurmon",
                "method": "BanchoLeomon Jogress"
            },
            {
                "name": "BanchoLeomon",
                "method": "Jogress Valdurmon"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "138",
        "name": "Impmon",
                "types": [
            "Dark"
        ],
        "ability": "Prankster",
        "hiddenAbility": "Run Away",
        "evoMove": "Petit Flame",
        "moves": [
            {
                "level": "6",
                "move": "Powder Snow"
            },
            {
                "level": "9",
                "move": "Thief"
            },
            {
                "level": "12",
                "move": "Little Plasma"
            },
            {
                "level": "15",
                "move": "Nasty Plot"
            },
            {
                "level": "17",
                "move": "Will-o-Wisp"
            },
            {
                "level": "18",
                "move": "Torment"
            }
        ],
        "locations": [
            "Route 102",
            "Route 116"
        ],
        "prev": [],
        "next": [
            {
                "name": "Wizarmon",
                "method": "Lv18"
            },
            {
                "name": "Punkmon",
                "method": "Dark Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "139",
        "name": "Wizarmon",
                "types": [
            "Dark",
            "Magic"
        ],
        "ability": "Magic Guard",
        "hiddenAbility": "Magic Bounce",
        "evoMove": "Shock Wave",
        "moves": [
            {
                "level": "19",
                "move": "Magic Game"
            },
            {
                "level": "21",
                "move": "Double Team"
            },
            {
                "level": "23",
                "move": "Power Gem"
            },
            {
                "level": "26",
                "move": "Fire Tower"
            },
            {
                "level": "29",
                "move": "Electric Cloud"
            },
            {
                "level": "32",
                "move": "Mystical Power"
            }
        ],
        "locations": [
            "Route 103 (Part 2)",
            "Route 110",
            "Route 111",
            "Mirage Tower"
        ],
        "prev": [
            {
                "name": "Impmon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Baalmon",
                "method": "Lv32 Amped"
            },
            {
                "name": "Mystimon",
                "method": "Lv32 Lowkey"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "140",
        "name": "Baalmon",
                "types": [
            "Magic",
            "Dark"
        ],
        "ability": "Magic Guard",
        "hiddenAbility": "Magic Bounce",
        "evoMove": "Mystical Power",
        "moves": [
            {
                "level": "33",
                "move": "Spell Sword"
            },
            {
                "level": "36",
                "move": "Night Daze"
            },
            {
                "level": "39",
                "move": "Calm Mind"
            },
            {
                "level": "42",
                "move": "Imprison"
            },
            {
                "level": "44",
                "move": "Disable"
            },
            {
                "level": "47",
                "move": "Spread Fire"
            },
            {
                "level": "50",
                "move": "Distortion"
            },
            {
                "level": "53",
                "move": "Spirit Shackle"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Wizarmon",
                "method": "Lv32 Amped"
            }
        ],
        "next": [
            {
                "name": "Beelzebumon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "141",
        "name": "Beelzebumon",
                "types": [
            "Dark",
            "Steel"
        ],
        "ability": "Beast Boost",
        "hiddenAbility": "Power of Alchemy",
        "evoMove": "Double Impact",
        "moves": [
            {
                "level": "55",
                "move": "Steel Roller"
            },
            {
                "level": "56",
                "move": "Throat Chop"
            },
            {
                "level": "59",
                "move": "Sucker Punch"
            },
            {
                "level": "62",
                "move": "Death The Cannon"
            },
            {
                "level": "65",
                "move": "Snatch"
            },
            {
                "level": "68",
                "move": "Soul Predator"
            },
            {
                "level": "71",
                "move": "Hone Claws"
            },
            {
                "level": "74",
                "move": "Steel Beam"
            },
            {
                "level": "77",
                "move": "Spell Blast"
            },
            {
                "level": "80",
                "move": "Close Combat"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Baalmon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Beelzebumon Blast",
                "method": "Toy Gun"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "142",
        "name": "Mystimon",
                "types": [
            "Magic",
            "Fire"
        ],
        "ability": "Long Reach",
        "hiddenAbility": "Magic Bounce",
        "evoMove": "Mystical Power",
        "moves": [
            {
                "level": "33",
                "move": "Spell Sword"
            },
            {
                "level": "36",
                "move": "Aura Sphere"
            },
            {
                "level": "39",
                "move": "Fire Tower"
            },
            {
                "level": "42",
                "move": "Swords Dance"
            },
            {
                "level": "44",
                "move": "Magic Blade"
            },
            {
                "level": "41",
                "move": "Fire Lash"
            },
            {
                "level": "50",
                "move": "Steel Blade"
            },
            {
                "level": "53",
                "move": "Devil Sword"
            }
        ],
        "locations": [
            "Victory Road F3"
        ],
        "prev": [
            {
                "name": "Wizarmon",
                "method": "Lv32 Lowkey"
            }
        ],
        "next": [
            {
                "name": "Dynasmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "143",
        "name": "Dynasmon",
                "types": [
            "Magic",
            "Dragon"
        ],
        "ability": "Neuroforce",
        "hiddenAbility": "Magic Bounce",
        "evoMove": "Dragon Energy",
        "moves": [
            {
                "level": "55",
                "move": "Photon Geyser"
            },
            {
                "level": "56",
                "move": "Dragon Rush"
            },
            {
                "level": "59",
                "move": "Meltdown"
            },
            {
                "level": "62",
                "move": "Dragon Dance"
            },
            {
                "level": "65",
                "move": "Freezing Glare"
            },
            {
                "level": "68",
                "move": "Dragon Cheer"
            },
            {
                "level": "71",
                "move": "Dragon Ascent"
            },
            {
                "level": "74",
                "move": "Aether Strike"
            },
            {
                "level": "77",
                "move": "Aeroblast"
            },
            {
                "level": "80",
                "move": "Draco Meteor"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Mystimon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "144",
        "name": "Punkmon",
                "types": [
            "Dark",
            "Dragon"
        ],
        "ability": "Punk Rock",
        "hiddenAbility": "Soundproof",
        "evoMove": "Snarl",
        "moves": [
            {
                "level": "18",
                "move": "Snarl"
            },
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Brutal Swing"
            },
            {
                "level": "29",
                "move": "Dragon Breath"
            },
            {
                "level": "32",
                "move": "Metal Sound"
            }
        ],
        "locations": [
            "Route 103 (Part 2)",
            "Route 110",
            "Granite Cave"
        ],
        "prev": [
            {
                "name": "Impmon",
                "method": "Dark Data"
            }
        ],
        "next": [
            {
                "name": "Loudmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "145",
        "name": "Loudmon",
                "types": [
            "Dark",
            "Steel"
        ],
        "ability": "Punk Rock",
        "hiddenAbility": "Soundproof",
        "evoMove": "Metal Sound",
        "moves": [
            {
                "level": "33",
                "move": "Overdrive"
            },
            {
                "level": "36",
                "move": "Pulse Laser"
            },
            {
                "level": "39",
                "move": "Torch Song"
            },
            {
                "level": "41",
                "move": "Noble Roar"
            },
            {
                "level": "44",
                "move": "Dark Pulse"
            },
            {
                "level": "47",
                "move": "Parting Shot"
            },
            {
                "level": "50",
                "move": "Meltdown"
            },
            {
                "level": "53",
                "move": "Demon Claw"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Punkmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "HeavyMetalDramon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "146",
        "name": "Heavy MetalDramon",
                "types": [
            "Dark",
            "Dragon"
        ],
        "ability": "Punk Rock",
        "hiddenAbility": "Soundproof",
        "evoMove": "Dark Lightning",
        "moves": [
            {
                "level": "55",
                "move": "Clanging Scales"
            },
            {
                "level": "56",
                "move": "Clangorous Soul"
            },
            {
                "level": "59",
                "move": "Fire Blast"
            },
            {
                "level": "62",
                "move": "Hyper Voice"
            },
            {
                "level": "65",
                "move": "Dark Roar"
            },
            {
                "level": "68",
                "move": "Dragon Rush"
            },
            {
                "level": "71",
                "move": "Iron Tail"
            },
            {
                "level": "74",
                "move": "Boomburst"
            },
            {
                "level": "77",
                "move": "Screech"
            },
            {
                "level": "80",
                "move": "Draco Meteor"
            }
        ],
        "locations": [],
        "prev": [],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "147",
        "name": "DORUmon",
                "types": [
            "Steel"
        ],
        "ability": "Clear Body",
        "hiddenAbility": "Magic Guard",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Tail Whip"
            },
            {
                "level": "12",
                "move": "Headbutt"
            },
            {
                "level": "15",
                "move": "Magnet Bomb"
            },
            {
                "level": "18",
                "move": "Quick Attack"
            }
        ],
        "locations": [
            "Rusturf Tunnel"
        ],
        "prev": [],
        "next": [
            {
                "name": "DORUgamon",
                "method": "LV18"
            },
            {
                "name": "DexDORUgamon",
                "method": "Dark Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "148",
        "name": "DORUgamon",
                "types": [
            "Dragon",
            "Steel"
        ],
        "ability": "Clear Body",
        "hiddenAbility": "Magic Guard",
        "evoMove": "Magnet Bomb",
        "moves": [
            {
                "level": "19",
                "move": "Gatling"
            },
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Bomb Blast"
            },
            {
                "level": "29",
                "move": "Dragon Breath"
            },
            {
                "level": "32",
                "move": "Acrobatics"
            }
        ],
        "locations": [
            "Route 110",
            "Route 111",
            "Jagged Pass"
        ],
        "prev": [
            {
                "name": "DORUmon",
                "method": "LV18"
            }
        ],
        "next": [
            {
                "name": "Doruguremon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "149",
        "name": "Doruguremon",
                "types": [
            "Dragon",
            "Steel"
        ],
        "ability": "Clear Body",
        "hiddenAbility": "Magic Guard",
        "evoMove": "Pulse Laser",
        "moves": [
            {
                "level": "33",
                "move": "Dragon Pulse"
            },
            {
                "level": "36",
                "move": "Giga Destroyer"
            },
            {
                "level": "39",
                "move": "Dragon Dance"
            },
            {
                "level": "42",
                "move": "Rock Slide"
            },
            {
                "level": "44",
                "move": "Evil Bite"
            },
            {
                "level": "47",
                "move": "Wing Attack"
            },
            {
                "level": "50",
                "move": "Iron Tail"
            },
            {
                "level": "53",
                "move": "Dragon Claw"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "DORUgamon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "DORUgoramon",
                "method": "LV54"
            },
            {
                "name": "Alphamon",
                "method": "Auspicious Armor"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "150",
        "name": "DORUgoramon",
                "types": [
            "Dragon",
            "Steel"
        ],
        "ability": "Clear Body",
        "hiddenAbility": "Magic Guard",
        "evoMove": "Outrage",
        "moves": [
            {
                "level": "55",
                "move": "Metal Burst"
            },
            {
                "level": "56",
                "move": "Fire Lash"
            },
            {
                "level": "59",
                "move": "Iron Defense"
            },
            {
                "level": "62",
                "move": "Steel Beam"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Dragon Rush"
            },
            {
                "level": "71",
                "move": "Earthquake"
            },
            {
                "level": "74",
                "move": "Flare Blitz"
            },
            {
                "level": "77",
                "move": "Meteor Mash"
            },
            {
                "level": "80",
                "move": "Draco Meteor"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Doruguremon",
                "method": "LV54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "151",
        "name": "DexDORUgamon",
                "types": [
            "Dragon",
            "Undead"
        ],
        "ability": "Steelworker",
        "hiddenAbility": "Galvanize",
        "evoMove": "Magnet Bomb",
        "moves": [
            {
                "level": "19",
                "move": "Gatling"
            },
            {
                "level": "21",
                "move": "Shock Wave"
            },
            {
                "level": "23",
                "move": "Undead Bite"
            },
            {
                "level": "26",
                "move": "Bomb Blast"
            },
            {
                "level": "29",
                "move": "Dragon Breath"
            },
            {
                "level": "32",
                "move": "Spark"
            }
        ],
        "locations": [
            "Route 116"
        ],
        "prev": [
            {
                "name": "DORUmon",
                "method": "Dark Data"
            }
        ],
        "next": [
            {
                "name": "DexDORUguremon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "152",
        "name": "DexDORUguremon",
                "types": [
            "Dragon",
            "Undead"
        ],
        "ability": "Steelworker",
        "hiddenAbility": "Galvanize",
        "evoMove": "Pulse Laser",
        "moves": [
            {
                "level": "33",
                "move": "Giga Destroyer"
            },
            {
                "level": "36",
                "move": "Death Ball"
            },
            {
                "level": "39",
                "move": "Electric Cloud"
            },
            {
                "level": "42",
                "move": "Rock Slide"
            },
            {
                "level": "44",
                "move": "Evil Bite"
            },
            {
                "level": "47",
                "move": "Dragon Pulse"
            },
            {
                "level": "50",
                "move": "Iron Tail"
            },
            {
                "level": "53",
                "move": "Infernal Parade"
            }
        ],
        "locations": [
            "Route 113",
            "Victory Road F2"
        ],
        "prev": [
            {
                "name": "DexDORUgamon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "DexDORUgoramon",
                "method": "LV54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "153",
        "name": "DexDORUgoramon",
                "types": [
            "Dragon",
            "Undead"
        ],
        "ability": "Steelworker",
        "hiddenAbility": "Galvanize",
        "evoMove": "Outrage",
        "moves": [
            {
                "level": "56",
                "move": "Dragon Rush"
            },
            {
                "level": "59",
                "move": "Screech"
            },
            {
                "level": "62",
                "move": "Grave Scream"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Draco Meteor"
            },
            {
                "level": "71",
                "move": "Earthquake"
            },
            {
                "level": "74",
                "move": "Flare Blitz"
            },
            {
                "level": "77",
                "move": "Meteor Mash"
            },
            {
                "level": "80",
                "move": "Soul Predator"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "DexDORUguremon",
                "method": "LV54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "154",
        "name": "Alphamon",
                "types": [
            "Steel"
        ],
        "ability": "Anticipation",
        "hiddenAbility": "Multiscale",
        "evoMove": "Laser Cannon",
        "moves": [
            {
                "level": "55",
                "move": "Eldrich Blast"
            },
            {
                "level": "56",
                "move": "King's Shield"
            },
            {
                "level": "59",
                "move": "Protect"
            },
            {
                "level": "62",
                "move": "Dual Wield"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Meteor Mash"
            },
            {
                "level": "71",
                "move": "Future Sight"
            },
            {
                "level": "74",
                "move": "Steel Beam"
            },
            {
                "level": "77",
                "move": "Moonblast"
            },
            {
                "level": "80",
                "move": "Secret Sword"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Doruguremon",
                "method": "Auspicious Armor"
            }
        ],
        "next": [
            {
                "name": "Alphamon Ouryuken",
                "method": "Jogress Ouryumon"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "155",
        "name": "Alphamon Ouryuken",
                "types": [
            "Steel",
            "Dragon"
        ],
        "ability": "Anticipation",
        "hiddenAbility": "Multiscale",
        "evoMove": "Ouryuken",
        "moves": [
            {
                "level": "54",
                "move": "Eldrich Blast"
            },
            {
                "level": "56",
                "move": "King's Shield"
            },
            {
                "level": "59",
                "move": "Protect"
            },
            {
                "level": "62",
                "move": "Dual Wield"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Meteor Mash"
            },
            {
                "level": "71",
                "move": "Future Sight"
            },
            {
                "level": "74",
                "move": "Steel Beam"
            },
            {
                "level": "77",
                "move": "Moonblast"
            },
            {
                "level": "81",
                "move": "Omega Blade"
            },
            {
                "level": "83",
                "move": "Swords Dance"
            },
            {
                "level": "86",
                "move": "King's Shiel"
            },
            {
                "level": "89",
                "move": "Steel Roller"
            },
            {
                "level": "92",
                "move": "Hyper Beam"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Alphamon",
                "method": "Jogress Ouryumon"
            },
            {
                "name": "Ouryumon",
                "method": "Alphamon Jogress"
            }
        ],
        "next": [],
        "stage": "Ultra",
        "cardLevel": 7
    },
    {
        "id": "156",
        "name": "Ryudamon",
                "types": [
            "Fighting"
        ],
        "ability": "Sharpness",
        "hiddenAbility": "Inner Focus",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Swords Dance"
            },
            {
                "level": "12",
                "move": "Helping Hand"
            },
            {
                "level": "15",
                "move": "Aerial Ace"
            },
            {
                "level": "18",
                "move": "Wall Rake"
            }
        ],
        "locations": [
            "Rusturf Tunnel"
        ],
        "prev": [],
        "next": [
            {
                "name": "Ginryumon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "157",
        "name": "Ginryumon",
                "types": [
            "Fighting",
            "Dragon"
        ],
        "ability": "Sharpness",
        "hiddenAbility": "Inner Focus",
        "evoMove": "Steel Blade",
        "moves": [
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Iron Defense"
            },
            {
                "level": "26",
                "move": "Dragon Tail"
            },
            {
                "level": "29",
                "move": "Knife Spiral"
            },
            {
                "level": "32",
                "move": "Dragon Claw"
            }
        ],
        "locations": [
            "Fiery Path",
            "Jagged Pass"
        ],
        "prev": [
            {
                "name": "Ryudamon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Hisyaryumon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "158",
        "name": "Hisyaryumon",
                "types": [
            "Fighting",
            "Dragon"
        ],
        "ability": "Sharpness",
        "hiddenAbility": "Inner Focus",
        "evoMove": "Iron Tail",
        "moves": [
            {
                "level": "33",
                "move": "Dragon Breath"
            },
            {
                "level": "36",
                "move": "Power Gem"
            },
            {
                "level": "39",
                "move": "Coil"
            },
            {
                "level": "42",
                "move": "Evil Bite"
            },
            {
                "level": "44",
                "move": "Iron Head"
            },
            {
                "level": "47",
                "move": "Helping Hand"
            },
            {
                "level": "50",
                "move": "Energy Ball"
            },
            {
                "level": "53",
                "move": "Meltdown"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Ginryumon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Ouryumon",
                "method": "LV54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "159",
        "name": "Ouryumon",
                "types": [
            "Fighting",
            "Dragon"
        ],
        "ability": "Sharpness",
        "hiddenAbility": "Inner Focus",
        "evoMove": "Dual Wield",
        "moves": [
            {
                "level": "56",
                "move": "Dragon Rush"
            },
            {
                "level": "59",
                "move": "Protect"
            },
            {
                "level": "62",
                "move": "Helping Hand"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Steel Roller"
            },
            {
                "level": "71",
                "move": "Meteor Assault"
            },
            {
                "level": "74",
                "move": "Ouryuken"
            },
            {
                "level": "77",
                "move": "Dragon Cheer"
            },
            {
                "level": "80",
                "move": "Meteor Mash"
            }
        ],
        "locations": [
            "Victory Road F1"
        ],
        "prev": [
            {
                "name": "Hisyaryumon",
                "method": "LV54"
            }
        ],
        "next": [
            {
                "name": "Alphamon Ouryuken",
                "method": "Alphamon Jogress"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "160",
        "name": "Gaomon",
                "types": [
            "Fighting"
        ],
        "ability": "Justified",
        "hiddenAbility": "Iron Fist",
        "evoMove": "Comet Punch",
        "moves": [
            {
                "level": "6",
                "move": "Mach Punch"
            },
            {
                "level": "9",
                "move": "Bulk Up"
            },
            {
                "level": "12",
                "move": "Rollout"
            },
            {
                "level": "15",
                "move": "Rock Smash"
            },
            {
                "level": "18",
                "move": "Bullet Punch"
            }
        ],
        "locations": [],
        "prev": [],
        "next": [
            {
                "name": "Gaogamon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "161",
        "name": "Gaogamon",
                "types": [
            "Fighting"
        ],
        "ability": "Justified",
        "hiddenAbility": "Iron Fist",
        "evoMove": "Tornado",
        "moves": [
            {
                "level": "19",
                "move": "Arm Thrust"
            },
            {
                "level": "21",
                "move": "Power-Up Punch"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Air Slash"
            },
            {
                "level": "29",
                "move": "Whirlwind"
            },
            {
                "level": "32",
                "move": "Brick Break"
            }
        ],
        "locations": [
            "Route 110 (Guardian)",
            "Route 114",
            "Gabumon Crest"
        ],
        "prev": [
            {
                "name": "Gaomon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "MachGaogamon",
                "method": "Lv30"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "162",
        "name": "MachGaogamon",
                "types": [
            "Fighting",
            "Steel"
        ],
        "ability": "Speed Boost",
        "hiddenAbility": "Iron Fist",
        "evoMove": "Dynamic Punch",
        "moves": [
            {
                "level": "32",
                "move": "Brick Break"
            },
            {
                "level": "33",
                "move": "Ultra Turbulence"
            },
            {
                "level": "36",
                "move": "Focus Punch"
            },
            {
                "level": "39",
                "move": "Shift Gear"
            },
            {
                "level": "42",
                "move": "Iron Head"
            },
            {
                "level": "44",
                "move": "Moonblast"
            },
            {
                "level": "47",
                "move": "Cross Chop"
            },
            {
                "level": "50",
                "move": "Play Rough"
            },
            {
                "level": "53",
                "move": "Detect"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Gaogamon",
                "method": "Lv30"
            }
        ],
        "next": [
            {
                "name": "MirageGaogamon",
                "method": "LV54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "163",
        "name": "MirageGaogamon",
                "types": [
            "Fighting",
            "Fairy"
        ],
        "ability": "Speed Boost",
        "hiddenAbility": "Tough Claws",
        "evoMove": "Moonblast",
        "moves": [
            {
                "level": "55",
                "move": "Extreme Speed"
            },
            {
                "level": "56",
                "move": "Aeroblast"
            },
            {
                "level": "59",
                "move": "Hyper Voice"
            },
            {
                "level": "62",
                "move": "Play Rough"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Tailwind"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Moongeist Beam"
            },
            {
                "level": "77",
                "move": "Moonlight"
            },
            {
                "level": "80",
                "move": "Aura Sphere"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "MachGaogamon",
                "method": "LV54"
            }
        ],
        "next": [
            {
                "name": "MirageGaogamon Burst",
                "method": "Mirage Soul"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "164",
        "name": "Falcomon",
                "types": [
            "Dark",
            "Flying"
        ],
        "ability": "Infiltrator",
        "hiddenAbility": "Long Reach",
        "evoMove": "Peck",
        "moves": [
            {
                "level": "6",
                "move": "Pursuit"
            },
            {
                "level": "9",
                "move": "Double Team"
            },
            {
                "level": "12",
                "move": "Wind Cutter"
            },
            {
                "level": "15",
                "move": "Smokescreen"
            },
            {
                "level": "18",
                "move": "Koyousetsu"
            }
        ],
        "locations": [
            "Route 102",
            "Route 103"
        ],
        "prev": [],
        "next": [
            {
                "name": "Peckmon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "165",
        "name": "Peckmon",
                "types": [
            "Dark",
            "Flying"
        ],
        "ability": "Infiltrator",
        "hiddenAbility": "Long Reach",
        "evoMove": "Aerial Ace",
        "moves": [
            {
                "level": "19",
                "move": "Low Sweep"
            },
            {
                "level": "21",
                "move": "Feint Attack"
            },
            {
                "level": "23",
                "move": "Agility"
            },
            {
                "level": "26",
                "move": "Wing Attack"
            },
            {
                "level": "29",
                "move": "Blaze Kick"
            },
            {
                "level": "32",
                "move": "Drill Buster"
            }
        ],
        "locations": [
            "Route 111"
        ],
        "prev": [
            {
                "name": "Falcomon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Yatagaramon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "166",
        "name": "Yatagaramon",
                "types": [
            "Dark",
            "Flying"
        ],
        "ability": "Infiltrator",
        "hiddenAbility": "Long Reach",
        "evoMove": "Dark Pulse",
        "moves": [
            {
                "level": "33",
                "move": "Drill Peck"
            },
            {
                "level": "36",
                "move": "Aura Sphere"
            },
            {
                "level": "39",
                "move": "Electric Cloud"
            },
            {
                "level": "42",
                "move": "Haze"
            },
            {
                "level": "44",
                "move": "Necro Mist"
            },
            {
                "level": "47",
                "move": "High Jump Kick"
            },
            {
                "level": "50",
                "move": "Dual Wingbeat"
            },
            {
                "level": "53",
                "move": "Night Daze"
            }
        ],
        "locations": [
            "Biyomon Crest"
        ],
        "prev": [
            {
                "name": "Peckmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Ravemon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "167",
        "name": "Ravemon",
                "types": [
            "Dark",
            "Flying"
        ],
        "ability": "Infiltrator",
        "hiddenAbility": "Shadow Tag",
        "evoMove": "Dark Lightning",
        "moves": [
            {
                "level": "55",
                "move": "Dual Wingbeat"
            },
            {
                "level": "56",
                "move": "Steel Blade"
            },
            {
                "level": "59",
                "move": "U-Turn"
            },
            {
                "level": "62",
                "move": "Electro Ball"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Dual Wield"
            },
            {
                "level": "71",
                "move": "Fake Out"
            },
            {
                "level": "74",
                "move": "Wildbolt Storm"
            },
            {
                "level": "77",
                "move": "Darkest Lariat"
            },
            {
                "level": "80",
                "move": "Bleakwind Storm"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Yatagaramon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Ravemon Burst",
                "method": "Raven Soul"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "168",
        "name": "Flamon",
                "types": [
            "Fire"
        ],
        "ability": "Flash Fire",
        "hiddenAbility": "Blaze",
        "evoMove": "Petit Flame",
        "moves": [
            {
                "level": "6",
                "move": "Will-o-Wisp"
            },
            {
                "level": "9",
                "move": "Flame Wheel"
            },
            {
                "level": "12",
                "move": "Fire Spin"
            },
            {
                "level": "15",
                "move": "Low Sweep"
            },
            {
                "level": "18",
                "move": "Mega Flame"
            }
        ],
        "locations": [
            "Rusturf Tunnel",
            "Granite Cave",
            "Fiery Path"
        ],
        "prev": [],
        "next": [
            {
                "name": "Meramon",
                "method": "Lv18"
            },
            {
                "name": "Agnimon",
                "method": "Fire Data"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "169",
        "name": "Agnimon",
                "types": [
            "Fire",
            "Fighting"
        ],
        "ability": "Flash Fire",
        "hiddenAbility": "Blaze",
        "evoMove": "Salamander Break",
        "moves": [
            {
                "level": "18",
                "move": "Mega Flame"
            },
            {
                "level": "19",
                "move": "Drain Punch"
            },
            {
                "level": "21",
                "move": "Rapid Spin"
            },
            {
                "level": "23",
                "move": "Bulk Up"
            },
            {
                "level": "26",
                "move": "Sunny Day"
            },
            {
                "level": "29",
                "move": "Master Fire"
            },
            {
                "level": "32",
                "move": "Jump Kick"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Flamon",
                "method": "Fire Data"
            }
        ],
        "next": [
            {
                "name": "Aldamon",
                "method": "Lv32"
            },
            {
                "name": "Vritamon",
                "method": "Salamander Break"
            },
            {
                "name": "Vritamon",
                "method": "Flame Storm"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "170",
        "name": "Aldamon",
                "types": [
            "Fire",
            "Dragon"
        ],
        "ability": "Flash Fire",
        "hiddenAbility": "Solar Power",
        "evoMove": "Jump Kick",
        "moves": [
            {
                "level": "34",
                "move": "Tornado"
            },
            {
                "level": "36",
                "move": "Brick Break"
            },
            {
                "level": "39",
                "move": "Sunny Day"
            },
            {
                "level": "42",
                "move": "Fire Lash"
            },
            {
                "level": "44",
                "move": "Dragon Pulse"
            },
            {
                "level": "47",
                "move": "Power Gatling"
            },
            {
                "level": "50",
                "move": "Aura Sphere"
            },
            {
                "level": "53",
                "move": "Meltdown"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Agnimon",
                "method": "Lv32"
            },
            {
                "name": "Vritamon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "AncientGreymon",
                "method": "Lv54"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "171",
        "name": "AncientGreymon",
                "types": [
            "Fire",
            "Dragon"
        ],
        "ability": "Orichalcum Pulse",
        "hiddenAbility": "Dragon's Maw",
        "evoMove": "Omega Burst",
        "moves": [
            {
                "level": "55",
                "move": "Raging Fury"
            },
            {
                "level": "56",
                "move": "Ancient Power"
            },
            {
                "level": "59",
                "move": "Aeroblast"
            },
            {
                "level": "62",
                "move": "Dragon Dance"
            },
            {
                "level": "65",
                "move": "Sunny Day"
            },
            {
                "level": "68",
                "move": "Gaia Force"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Grey Sword"
            },
            {
                "level": "77",
                "move": "Red Inferno"
            },
            {
                "level": "80",
                "move": "Infinity Burn"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Aldamon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Susanoomon",
                "method": "Jogress AncientGarurumon"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "172",
        "name": "Meramon",
                "types": [
            "Fire"
        ],
        "ability": "Flash Fire",
        "hiddenAbility": "Flame Body",
        "evoMove": "Fire Punch",
        "moves": [
            {
                "level": "19",
                "move": "Mega Flame"
            },
            {
                "level": "21",
                "move": "Fire Spin"
            },
            {
                "level": "23",
                "move": "Sunny Day"
            },
            {
                "level": "26",
                "move": "Brick Break"
            },
            {
                "level": "29",
                "move": "Master Fire"
            },
            {
                "level": "32",
                "move": "Blaze Kick"
            }
        ],
        "locations": [
            "Route 111",
            "Route 112",
            "Granite Cave F4",
            "Magma Hideout"
        ],
        "prev": [
            {
                "name": "Flamon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Asuramon",
                "method": "Lv32 Amped"
            },
            {
                "name": "DeathMeramon",
                "method": "Lv30 Lowkey"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "173",
        "name": "Asuramon",
                "types": [
            "Fire",
            "Fighting"
        ],
        "ability": "Iron Fist",
        "hiddenAbility": "Flame Body",
        "evoMove": "Blaze Kick",
        "moves": [
            {
                "level": "33",
                "move": "Dynamic Punch"
            },
            {
                "level": "36",
                "move": "Fire Spin"
            },
            {
                "level": "39",
                "move": "Power-Up Punch"
            },
            {
                "level": "41",
                "move": "Confuse Ray"
            },
            {
                "level": "44",
                "move": "Meditate"
            },
            {
                "level": "47",
                "move": "Bulk Up"
            },
            {
                "level": "50",
                "move": "Flare Blitz"
            },
            {
                "level": "53",
                "move": "Close Combat"
            },
            {
                "level": "77",
                "move": "Victory Dance"
            },
            {
                "level": "80",
                "move": "No Retreat"
            }
        ],
        "locations": [
            "Fiery Path",
            "Route 113"
        ],
        "prev": [
            {
                "name": "Meramon",
                "method": "Lv32 Amped"
            }
        ],
        "next": [
            {
                "name": "Apollomon",
                "method": "Lv54"
            },
            {
                "name": "Gankoomon",
                "method": "Auspicious Armor"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "174",
        "name": "Gankoomon",
                "types": [
            "Fire",
            "Fighting"
        ],
        "ability": "Sheer Force",
        "hiddenAbility": "Reckless",
        "evoMove": "Blaze Kick",
        "moves": [
            {
                "level": "55",
                "move": "Flare Blitz"
            },
            {
                "level": "56",
                "move": "Eartquake"
            },
            {
                "level": "59",
                "move": "Belly Drum"
            },
            {
                "level": "62",
                "move": "Hammer Arm"
            },
            {
                "level": "65",
                "move": "Wood Hammer"
            },
            {
                "level": "68",
                "move": "Mind Blown"
            },
            {
                "level": "71",
                "move": "Instruct"
            },
            {
                "level": "74",
                "move": "Baton Pass"
            },
            {
                "level": "77",
                "move": "Focus Blast"
            },
            {
                "level": "80",
                "move": "7 Heavens"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Asuramon",
                "method": "Auspicious Armor"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "175",
        "name": "Apollomon",
                "types": [
            "Fire",
            "Holy"
        ],
        "ability": "Orichalcum Pulse",
        "hiddenAbility": "Solar Power",
        "evoMove": "Divine Breaker",
        "moves": [
            {
                "level": "55",
                "move": "Fissure"
            },
            {
                "level": "56",
                "move": "Gran Del Sol"
            },
            {
                "level": "59",
                "move": "Burning Bulwark"
            },
            {
                "level": "62",
                "move": "Holy Flame"
            },
            {
                "level": "65",
                "move": "Red Inferno"
            },
            {
                "level": "68",
                "move": "Noble Roar"
            },
            {
                "level": "71",
                "move": "Gaia Force"
            },
            {
                "level": "74",
                "move": "Flare Blitz"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Asuramon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "GraceNovamon",
                "method": "Jogress Dianamon"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "176",
        "name": "DeathMeramon",
                "types": [
            "Fire",
            "Undead"
        ],
        "ability": "Flash Fire",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Heat Chain",
        "moves": [
            {
                "level": "34",
                "move": "Cursed Bone"
            },
            {
                "level": "39",
                "move": "Drain Punch"
            },
            {
                "level": "41",
                "move": "Heat Wave"
            },
            {
                "level": "44",
                "move": "Iron Head"
            },
            {
                "level": "47",
                "move": "Metal Sound"
            },
            {
                "level": "50",
                "move": "Meltdown"
            },
            {
                "level": "53",
                "move": "Death Ball"
            }
        ],
        "locations": [
            "Magma Hideout"
        ],
        "prev": [
            {
                "name": "Meramon",
                "method": "Lv30 Lowkey"
            }
        ],
        "next": [
            {
                "name": "Demon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "177",
        "name": "Demon",
                "types": [
            "Fire",
            "Undead"
        ],
        "ability": "Berserk",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Infernal Parade",
        "moves": [
            {
                "level": "55",
                "move": "Red Inferno"
            },
            {
                "level": "56",
                "move": "Phantom Force"
            },
            {
                "level": "59",
                "move": "Fire Blast"
            },
            {
                "level": "62",
                "move": "Raging Fury"
            },
            {
                "level": "65",
                "move": "Ruination"
            },
            {
                "level": "68",
                "move": "Astral Barrage"
            },
            {
                "level": "71",
                "move": "Hammer Arm"
            },
            {
                "level": "74",
                "move": "Overheat"
            },
            {
                "level": "77",
                "move": "Magic Blade"
            },
            {
                "level": "80",
                "move": "Necro Eclipse"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "DeathMeramon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "178",
        "name": "Strabimon",
                "types": [
            "Holy"
        ],
        "ability": "Berserk",
        "hiddenAbility": "Tough Claws",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Rage"
            },
            {
                "level": "9",
                "move": "Howl"
            },
            {
                "level": "12",
                "move": "Holy Shot"
            },
            {
                "level": "15",
                "move": "Fury Swipes"
            },
            {
                "level": "18",
                "move": "Neko Punch"
            }
        ],
        "locations": [
            "Rusturf Tunnel",
            "Gabumon Crest"
        ],
        "prev": [],
        "next": [
            {
                "name": "Garurumon",
                "method": "Lv18"
            },
            {
                "name": "Wolfmon",
                "method": "likely )"
            },
            {
                "name": "Wolfmon",
                "method": "Light Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "179",
        "name": "Wolfmon",
                "types": [
            "Holy",
            "Fighting"
        ],
        "ability": "Steadfast",
        "hiddenAbility": "Justified",
        "evoMove": "Wolf Kendo",
        "moves": [
            {
                "level": "18",
                "move": "Double Kick"
            },
            {
                "level": "21",
                "move": "Flash"
            },
            {
                "level": "23",
                "move": "Agility"
            },
            {
                "level": "26",
                "move": "Holy Blast"
            },
            {
                "level": "29",
                "move": "Brick Break"
            },
            {
                "level": "32",
                "move": "Aerial Ace"
            }
        ],
        "locations": [
            "Route 110 (Guardian)"
        ],
        "prev": [
            {
                "name": "Strabimon",
                "method": "likely )"
            },
            {
                "name": "Wolfmon",
                "method": "Light Data (Note: Base form seems to be missing"
            }
        ],
        "next": [
            {
                "name": "Wolfmon",
                "method": "Light Data (Note: Base form seems to be missing"
            },
            {
                "name": "Beowolfmon",
                "method": "Lv32"
            },
            {
                "name": "Garummon",
                "method": "Wolf Kendo"
            },
            {
                "name": "Garummon",
                "method": "Lupine Laser"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "180",
        "name": "Beowolfmon",
                "types": [
            "Holy",
            "Steel"
        ],
        "ability": "Justified",
        "hiddenAbility": "Speed Boost",
        "evoMove": "Aerial Ace",
        "moves": [
            {
                "level": "34",
                "move": "Pulse Laser"
            },
            {
                "level": "36",
                "move": "Hone Claws"
            },
            {
                "level": "39",
                "move": "Extreme Speed"
            },
            {
                "level": "41",
                "move": "Shift Gear"
            },
            {
                "level": "44",
                "move": "Holy Arrow"
            },
            {
                "level": "47",
                "move": "Metal Sound"
            },
            {
                "level": "50",
                "move": "Dual Wield"
            },
            {
                "level": "53",
                "move": "Trinity Gospel"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Wolfmon",
                "method": "Lv32"
            },
            {
                "name": "Garummon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "AncientGarurumon",
                "method": "Lv54"
            },
            {
                "name": "Takutoumon",
                "method": "Auspicious Armor"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "181",
        "name": "AncientGarurumon",
                "types": [
            "Holy",
            "Steel"
        ],
        "ability": "Parental Bond",
        "hiddenAbility": "Speed Boost",
        "evoMove": "Sharp Claymore",
        "moves": [
            {
                "level": "55",
                "move": "Guillotine"
            },
            {
                "level": "56",
                "move": "Behemoth Blade"
            },
            {
                "level": "59",
                "move": "Swords Dance"
            },
            {
                "level": "62",
                "move": "Heaven Judge"
            },
            {
                "level": "65",
                "move": "Noble Roar"
            },
            {
                "level": "68",
                "move": "Garuru Cannon"
            },
            {
                "level": "71",
                "move": "Detect"
            },
            {
                "level": "74",
                "move": "Omega Blade"
            },
            {
                "level": "77",
                "move": "Secret Sword"
            },
            {
                "level": "80",
                "move": "Laser Cannon"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Beowolfmon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Susanoomon",
                "method": "AncientGreymon Jogress"
            },
            {
                "name": "Susanoomon",
                "method": "Jogress AncientGreymon"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "182",
        "name": "Takutoumon",
                "types": [
            "Holy",
            "Fighting"
        ],
        "ability": "Justified",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Aerial Ace",
        "moves": [
            {
                "level": "55",
                "move": "Spell Sword"
            },
            {
                "level": "56",
                "move": "Meteor Mash"
            },
            {
                "level": "59",
                "move": "Disable"
            },
            {
                "level": "62",
                "move": "Dual Wield"
            },
            {
                "level": "65",
                "move": "Swords Dance"
            },
            {
                "level": "68",
                "move": "Sharp Claymore"
            },
            {
                "level": "71",
                "move": "Parting Shot"
            },
            {
                "level": "74",
                "move": "Close Combat"
            },
            {
                "level": "77",
                "move": "Heaven Judge"
            },
            {
                "level": "80",
                "move": "Meteor Assault"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Beowolfmon",
                "method": "Auspicious Armor"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "183",
        "name": "Tinkermon",
                "types": [
            "Flying",
            "Fairy"
        ],
        "ability": "Cute Charm",
        "hiddenAbility": "Prankster",
        "evoMove": "Poison Sting",
        "moves": [
            {
                "level": "6",
                "move": "Quick Attack"
            },
            {
                "level": "9",
                "move": "Covet"
            },
            {
                "level": "12",
                "move": "Fairy Wind"
            },
            {
                "level": "15",
                "move": "Wind Cutter"
            },
            {
                "level": "18",
                "move": "Static Electricity"
            }
        ],
        "locations": [
            "Route 104",
            "Petalburg Woods",
            "Spear Pillar"
        ],
        "prev": [],
        "next": [
            {
                "name": "Darcmon",
                "method": "Lv18"
            },
            {
                "name": "Fairymon",
                "method": "Flying Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "184",
        "name": "Fairymon",
                "types": [
            "Flying",
            "Fairy"
        ],
        "ability": "Cute Charm",
        "hiddenAbility": "Pixilate",
        "evoMove": "Brezzo Petalo",
        "moves": [
            {
                "level": "18",
                "move": "Double Kick"
            },
            {
                "level": "21",
                "move": "Attract"
            },
            {
                "level": "23",
                "move": "Draining Kiss"
            },
            {
                "level": "26",
                "move": "Tornado"
            },
            {
                "level": "32",
                "move": "Hammer Rush"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Tinkermon",
                "method": "Flying Data"
            }
        ],
        "next": [
            {
                "name": "JetSilphymon",
                "method": "Lv32"
            },
            {
                "name": "Shutumon",
                "method": "Brezzo Petalo"
            },
            {
                "name": "Shutumon",
                "method": "Plasma Talon"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "185",
        "name": "JetSilphymon",
                "types": [
            "Flying",
            "Fairy"
        ],
        "ability": "Wind Rider",
        "hiddenAbility": "Pixilate",
        "evoMove": "Ultra Turbulence",
        "moves": [
            {
                "level": "33",
                "move": "Moonblast"
            },
            {
                "level": "36",
                "move": "Whirlwind"
            },
            {
                "level": "39",
                "move": "Extreme Speed"
            },
            {
                "level": "41",
                "move": "Tailwind"
            },
            {
                "level": "44",
                "move": "Gear Grind"
            },
            {
                "level": "47",
                "move": "Aeroblast"
            },
            {
                "level": "50",
                "move": "Dazzling Gleam"
            },
            {
                "level": "53",
                "move": "Fly"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Fairymon",
                "method": "Lv32"
            },
            {
                "name": "Shutumon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "AncientIrismon",
                "method": "Lv54"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "186",
        "name": "AncientIrismon",
                "types": [
            "Flying",
            "Fairy"
        ],
        "ability": "Delta Stream",
        "hiddenAbility": "Pixilate",
        "evoMove": "Aeroblast",
        "moves": [
            {
                "level": "55",
                "move": "Hurricane"
            },
            {
                "level": "56",
                "move": "Rain Dance"
            },
            {
                "level": "59",
                "move": "Springtide Storm"
            },
            {
                "level": "62",
                "move": "Eldrich Blast"
            },
            {
                "level": "65",
                "move": "Calm Mind"
            },
            {
                "level": "68",
                "move": "Sky Attack"
            },
            {
                "level": "71",
                "move": "Whirlwind"
            },
            {
                "level": "74",
                "move": "Defog"
            },
            {
                "level": "77",
                "move": "Sparkly Swirl"
            },
            {
                "level": "80",
                "move": "Floral Healing"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "JetSilphymon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "187",
        "name": "Darcmon",
                "types": [
            "Holy",
            "Flying"
        ],
        "ability": "Sharpness",
        "hiddenAbility": "Justified",
        "evoMove": "Angel Blade",
        "moves": [
            {
                "level": "21",
                "move": "Steel Blade"
            },
            {
                "level": "23",
                "move": "Meditate"
            },
            {
                "level": "26",
                "move": "Excalibur"
            },
            {
                "level": "29",
                "move": "Wish"
            },
            {
                "level": "32",
                "move": "Aerial Ace"
            }
        ],
        "locations": [
            "Route 103 (Part 2)",
            "Route 117",
            "Route 118",
            "Spear Pillar"
        ],
        "prev": [
            {
                "name": "Tinkermon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Hippogriffomon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "188",
        "name": "Hippogriffomon",
                "types": [
            "Holy",
            "Flying"
        ],
        "ability": "Solar Power",
        "hiddenAbility": "Beast Boost",
        "evoMove": "Heat Wave",
        "moves": [
            {
                "level": "34",
                "move": "Hyper Voice"
            },
            {
                "level": "36",
                "move": "Wing Attack"
            },
            {
                "level": "39",
                "move": "Agility"
            },
            {
                "level": "41",
                "move": "Air Slash"
            },
            {
                "level": "44",
                "move": "Holy Blast"
            },
            {
                "level": "47",
                "move": "Ultra Turbulence"
            },
            {
                "level": "50",
                "move": "Meltdown"
            },
            {
                "level": "53",
                "move": "Chatter"
            }
        ],
        "locations": [
            "Route 114",
            "Biyomon Crest",
            "Spear Pillar"
        ],
        "prev": [
            {
                "name": "Aquilamon",
                "method": "Lv32"
            },
            {
                "name": "Darcmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "LovelyAngemon",
                "method": "Lv54 Female"
            },
            {
                "name": "Griffomon",
                "method": "Lv54 Male"
            },
            {
                "name": "Murmukusmon",
                "method": "Sachet"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "189",
        "name": "LovelyAngemon",
                "types": [
            "Holy",
            "Fighting"
        ],
        "ability": "Sturdy",
        "hiddenAbility": "Healer",
        "evoMove": "Marble Impact",
        "moves": [
            {
                "level": "55",
                "move": "High Jump Kick"
            },
            {
                "level": "56",
                "move": "Heal Bell"
            },
            {
                "level": "59",
                "move": "Safeguard"
            },
            {
                "level": "62",
                "move": "Edens Javelin"
            },
            {
                "level": "65",
                "move": "Victory Dance"
            },
            {
                "level": "68",
                "move": "Close Combat"
            },
            {
                "level": "71",
                "move": "Heal Pulse"
            },
            {
                "level": "74",
                "move": "Divine Breaker"
            },
            {
                "level": "77",
                "move": "Sunny Day"
            },
            {
                "level": "80",
                "move": "Meteor Mash"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Hippogriffomon",
                "method": "Lv54 Female"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "190",
        "name": "Murmukusmon",
                "types": [
            "Dark",
            "Flying"
        ],
        "ability": "Competitive",
        "hiddenAbility": "Supreme Overlord",
        "evoMove": "Meggido Flame",
        "moves": [
            {
                "level": "56",
                "move": "Pyro Ball"
            },
            {
                "level": "59",
                "move": "Sucker Punch"
            },
            {
                "level": "62",
                "move": "Punishment"
            },
            {
                "level": "65",
                "move": "Night Daze"
            },
            {
                "level": "68",
                "move": "Hurricane"
            },
            {
                "level": "71",
                "move": "Necrophobia"
            },
            {
                "level": "74",
                "move": "Hell Fire"
            },
            {
                "level": "77",
                "move": "Bitter Blade"
            },
            {
                "level": "80",
                "move": "Necro Eclipse"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Hippogriffomon",
                "method": "Sachet"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "191",
        "name": "Griffomon",
                "types": [
            "Flying"
        ],
        "ability": "Aerilate",
        "hiddenAbility": "Beast Boost",
        "evoMove": "Hyper Voice",
        "moves": [
            {
                "level": "55",
                "move": "Poison Fang"
            },
            {
                "level": "56",
                "move": "Brave Bird"
            },
            {
                "level": "59",
                "move": "Hyper Drill"
            },
            {
                "level": "62",
                "move": "Evil Bite"
            },
            {
                "level": "65",
                "move": "Extreme Speed"
            },
            {
                "level": "68",
                "move": "Acid Breath"
            },
            {
                "level": "71",
                "move": "Hurricane"
            },
            {
                "level": "74",
                "move": "Flare Blitz"
            },
            {
                "level": "77",
                "move": "Hyper Beam"
            },
            {
                "level": "80",
                "move": "Bleakwind Storm"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Hippogriffomon",
                "method": "Lv54 Male"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "192",
        "name": "KoKabuterimon",
                "types": [
            "Bug"
        ],
        "ability": "Vital Spirit",
        "hiddenAbility": "Swarm",
        "evoMove": "Fell Stinger",
        "moves": [
            {
                "level": "6",
                "move": "Karate Chop"
            },
            {
                "level": "9",
                "move": "Harden"
            },
            {
                "level": "12",
                "move": "Bug Bite"
            },
            {
                "level": "15",
                "move": "Rock Smash"
            },
            {
                "level": "18",
                "move": "Circle Throw"
            }
        ],
        "locations": [
            "Petalburg Woods",
            "Route 116"
        ],
        "prev": [],
        "next": [
            {
                "name": "Blitzmon",
                "method": "Thunder Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "193",
        "name": "Blitzmon",
                "types": [
            "Electric",
            "Bug"
        ],
        "ability": "Galvanize",
        "hiddenAbility": "Bulletproof",
        "evoMove": "Thor Hammer",
        "moves": [
            {
                "level": "18",
                "move": "Charge"
            },
            {
                "level": "21",
                "move": "Drain Punch"
            },
            {
                "level": "26",
                "move": "Shock Wave"
            },
            {
                "level": "29",
                "move": "Focus Energy"
            },
            {
                "level": "32",
                "move": "Vacuum Wave"
            }
        ],
        "locations": [
            "Tentomon Crest"
        ],
        "prev": [
            {
                "name": "KoKabuterimon",
                "method": "Thunder Data"
            }
        ],
        "next": [
            {
                "name": "Bolgmon",
                "method": "Thor Hammer"
            },
            {
                "name": "Bolgmon",
                "method": "Electro Cannon"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "194",
        "name": "RhinoKabuterimon",
                "types": [
            "Electric",
            "Bug"
        ],
        "ability": "Electric Surge",
        "hiddenAbility": "Wind Power",
        "evoMove": "Vacuum Wave",
        "moves": [
            {
                "level": "33",
                "move": "Lunge"
            },
            {
                "level": "36",
                "move": "Charge"
            },
            {
                "level": "39",
                "move": "Charge Beam"
            },
            {
                "level": "41",
                "move": "Thunder Wave"
            },
            {
                "level": "44",
                "move": "Signal Beam"
            },
            {
                "level": "47",
                "move": "Lock-On"
            },
            {
                "level": "50",
                "move": "Megalo Spark"
            },
            {
                "level": "53",
                "move": "Discharge"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Bolgmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "AncientBeetlemon",
                "method": "Lv54"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "195",
        "name": "AncientBeetlemon",
                "types": [
            "Electric",
            "Bug"
        ],
        "ability": "Hadron Engine",
        "hiddenAbility": "Wind Power",
        "evoMove": "Wildbolt Storm",
        "moves": [
            {
                "level": "55",
                "move": "Quiver Dance"
            },
            {
                "level": "56",
                "move": "Shine of Bee"
            },
            {
                "level": "59",
                "move": "Thunder Cage"
            },
            {
                "level": "62",
                "move": "First Impression"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Thunderclap"
            },
            {
                "level": "71",
                "move": "Electric Terrain"
            },
            {
                "level": "74",
                "move": "Bug Nightmare"
            },
            {
                "level": "77",
                "move": "Electro Shot"
            },
            {
                "level": "80",
                "move": "Ancient Power"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "RhinoKabuterimon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "196",
        "name": "Penmon",
                "types": [
            "Ice"
        ],
        "ability": "Slush Rush",
        "hiddenAbility": "Ice Body",
        "evoMove": "Peck",
        "moves": [
            {
                "level": "6",
                "move": "Aqua Jet"
            },
            {
                "level": "9",
                "move": "Whirlwind"
            },
            {
                "level": "12",
                "move": "Double Slap"
            },
            {
                "level": "15",
                "move": "Ice Needle"
            },
            {
                "level": "18",
                "move": "Peck Flurry"
            }
        ],
        "locations": [
            "Route 104",
            "Shoal Cave"
        ],
        "prev": [],
        "next": [
            {
                "name": "Mojyamon",
                "method": "Lv18 Male"
            },
            {
                "name": "Frigimon",
                "method": "Lv18 Female"
            },
            {
                "name": "Chakmon",
                "method": "Ice Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "197",
        "name": "Chakmon",
                "types": [
            "Ice"
        ],
        "ability": "Slush Rush",
        "hiddenAbility": "Ice Body",
        "evoMove": "Snow Bomber",
        "moves": [
            {
                "level": "18",
                "move": "Slam"
            },
            {
                "level": "21",
                "move": "Snowscape"
            },
            {
                "level": "23",
                "move": "Helping Hand"
            },
            {
                "level": "26",
                "move": "Icicle Crash"
            },
            {
                "level": "29",
                "move": "Protect"
            },
            {
                "level": "32",
                "move": "Icy Wind"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Penmon",
                "method": "Ice Data"
            }
        ],
        "next": [
            {
                "name": "Frozomon",
                "method": "Lv32"
            },
            {
                "name": "Blizzarmon",
                "method": "Snow Bomber"
            },
            {
                "name": "Blizzarmon",
                "method": "Avalanche Step"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "198",
        "name": "Frozomon",
                "types": [
            "Ice",
            "Steel"
        ],
        "ability": "Snow Warning",
        "hiddenAbility": "Ice Body",
        "evoMove": "Icy Wind",
        "moves": [
            {
                "level": "33",
                "move": "Bitter Blade"
            },
            {
                "level": "36",
                "move": "Winter Blast"
            },
            {
                "level": "39",
                "move": "Sunny Day"
            },
            {
                "level": "41",
                "move": "Shift Gear"
            },
            {
                "level": "44",
                "move": "Pulse Laser"
            },
            {
                "level": "47",
                "move": "Hail"
            },
            {
                "level": "50",
                "move": "Ice Spinner"
            },
            {
                "level": "53",
                "move": "Giga Freeze"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Chakmon",
                "method": "Lv32"
            },
            {
                "name": "Blizzarmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Megatheurimon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "199",
        "name": "Megatheurimon",
                "types": [
            "Ice"
        ],
        "ability": "Snow Warning",
        "hiddenAbility": "Ice Body",
        "evoMove": "Mountain Gale",
        "moves": [
            {
                "level": "55",
                "move": "Ancient Power"
            },
            {
                "level": "56",
                "move": "Cocytus Breath"
            },
            {
                "level": "59",
                "move": "Aurora Veil"
            },
            {
                "level": "62",
                "move": "Sheer Cold"
            },
            {
                "level": "65",
                "move": "Chilling Water"
            },
            {
                "level": "68",
                "move": "Absolute Zero"
            },
            {
                "level": "71",
                "move": "Chill Out"
            },
            {
                "level": "74",
                "move": "Glacial Lance"
            },
            {
                "level": "77",
                "move": "Ancient Power"
            },
            {
                "level": "80",
                "move": "Giga Impact"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Frozomon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "200",
        "name": "Mojyamon",
                "types": [
            "Ice",
            "Ground"
        ],
        "ability": "Fur Coat",
        "hiddenAbility": "Thick Fat",
        "evoMove": "Icicle Crash",
        "moves": [
            {
                "level": "21",
                "move": "Chill Out"
            },
            {
                "level": "23",
                "move": "Dizzy Punch"
            },
            {
                "level": "26",
                "move": "Avalanche"
            },
            {
                "level": "29",
                "move": "Bonemerang"
            },
            {
                "level": "32",
                "move": "Freeze-Dry"
            }
        ],
        "locations": [
            "Route 103 (Part 2)",
            "Gabumon Crest",
            "Shoal Cave"
        ],
        "prev": [
            {
                "name": "Penmon",
                "method": "Lv18 Male"
            }
        ],
        "next": [
            {
                "name": "Mammothmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "201",
        "name": "Mammothmon",
                "types": [
            "Ice",
            "Ground"
        ],
        "ability": "Fur Coat",
        "hiddenAbility": "Thick Fat",
        "evoMove": "Frost Breath",
        "moves": [
            {
                "level": "33",
                "move": "Iron Tail"
            },
            {
                "level": "36",
                "move": "Zen Headbutt"
            },
            {
                "level": "39",
                "move": "Hail"
            },
            {
                "level": "41",
                "move": "Future Sight"
            },
            {
                "level": "44",
                "move": "Ice Spinner"
            },
            {
                "level": "47",
                "move": "Heavy Slam"
            },
            {
                "level": "50",
                "move": "Earthquake"
            },
            {
                "level": "53",
                "move": "Glaciate"
            }
        ],
        "locations": [
            "Shoal Cave"
        ],
        "prev": [
            {
                "name": "Mojyamon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "SkullMammothmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "202",
        "name": "SkullMammothmon",
                "types": [
            "Undead",
            "Ice"
        ],
        "ability": "Sand Force",
        "hiddenAbility": "Sand Veil",
        "evoMove": "Cursed Bone",
        "moves": [
            {
                "level": "55",
                "move": "Stone Edge"
            },
            {
                "level": "56",
                "move": "Mountain Gale"
            },
            {
                "level": "59",
                "move": "Ghost Dive"
            },
            {
                "level": "62",
                "move": "Absolute Zero"
            },
            {
                "level": "65",
                "move": "Roar"
            },
            {
                "level": "68",
                "move": "Fissure"
            },
            {
                "level": "71",
                "move": "Astral Barrage"
            },
            {
                "level": "74",
                "move": "Glacial Lance"
            },
            {
                "level": "77",
                "move": "Precipice Blades"
            },
            {
                "level": "80",
                "move": "Meteor Mash"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Mammothmon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "203",
        "name": "Frigimon",
                "types": [
            "Ice"
        ],
        "ability": "Ice Body",
        "hiddenAbility": "Ice Scales",
        "evoMove": "Ice Punch",
        "moves": [
            {
                "level": "21",
                "move": "Chill Out"
            },
            {
                "level": "23",
                "move": "Dizzy Punch"
            },
            {
                "level": "26",
                "move": "Icy Wind"
            },
            {
                "level": "29",
                "move": "Icicle Crash"
            },
            {
                "level": "32",
                "move": "Freeze-Dry"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Penmon",
                "method": "Lv18 Female"
            }
        ],
        "next": [
            {
                "name": "Polarbearmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "204",
        "name": "Polarbearmon",
                "types": [
            "Ice"
        ],
        "ability": "Ice Body",
        "hiddenAbility": "Slush Rush",
        "evoMove": "Freeze-Dry",
        "moves": [
            {
                "level": "33",
                "move": "Power Gatling"
            },
            {
                "level": "36",
                "move": "Ice Shard"
            },
            {
                "level": "39",
                "move": "Hail"
            },
            {
                "level": "41",
                "move": "Mist"
            },
            {
                "level": "44",
                "move": "Winter Blast"
            },
            {
                "level": "47",
                "move": "Pulse Laser"
            },
            {
                "level": "50",
                "move": "Slash"
            },
            {
                "level": "53",
                "move": "Aurora Veil"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Frigimon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Skadimon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "205",
        "name": "Skadimon",
                "types": [
            "Ice"
        ],
        "ability": "Ice Body",
        "hiddenAbility": "Slush Rush",
        "evoMove": "Giga Freeze",
        "moves": [
            {
                "level": "55",
                "move": "Substitute"
            },
            {
                "level": "56",
                "move": "Buster Dive"
            },
            {
                "level": "59",
                "move": "Freezing Glare"
            },
            {
                "level": "60",
                "move": "Sheer Cold"
            },
            {
                "level": "62",
                "move": "Absolute Zero"
            },
            {
                "level": "65",
                "move": "Sing"
            },
            {
                "level": "68",
                "move": "Teeter Dance"
            },
            {
                "level": "71",
                "move": "Skitter Smack"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Polarbearmon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "206",
        "name": "Goblimon",
                "types": [
            "Ground"
        ],
        "ability": "Emergency Exit",
        "hiddenAbility": "Run Away",
        "evoMove": "Bone Club",
        "moves": [
            {
                "level": "6",
                "move": "Pursuit"
            },
            {
                "level": "9",
                "move": "Bulk Up"
            },
            {
                "level": "12",
                "move": "Bulldoze"
            },
            {
                "level": "15",
                "move": "Feint Attack"
            },
            {
                "level": "18",
                "move": "Headbutt"
            }
        ],
        "locations": [
            "Route 102",
            "Route 114",
            "Granite Cave",
            "Rusturf"
        ],
        "prev": [],
        "next": [
            {
                "name": "Ogremon",
                "method": "Lv18"
            },
            {
                "name": "Grottemon",
                "method": "Earth Data"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "207",
        "name": "Ogremon",
                "types": [
            "Ground",
            "Dark"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Headbutt",
        "moves": [
            {
                "level": "19",
                "move": "Drain Punch"
            },
            {
                "level": "21",
                "move": "Bone Rush"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Throat Chop"
            },
            {
                "level": "29",
                "move": "Vital Throw"
            },
            {
                "level": "32",
                "move": "Rock Slide"
            }
        ],
        "locations": [
            "Route 110",
            "Fiery Path"
        ],
        "prev": [
            {
                "name": "Goblimon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Rebellimon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "208",
        "name": "Rebellimon",
                "types": [
            "Steel",
            "Dark"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Rock Slide",
        "moves": [
            {
                "level": "33",
                "move": "Autotomize"
            },
            {
                "level": "36",
                "move": "Darkest Lariat"
            },
            {
                "level": "39",
                "move": "Iron Head"
            },
            {
                "level": "41",
                "move": "Shift Gear"
            },
            {
                "level": "44",
                "move": "Cross Chop"
            },
            {
                "level": "47",
                "move": "Metal Sound"
            },
            {
                "level": "50",
                "move": "Giga Destroyer"
            },
            {
                "level": "53",
                "move": "Bullet Punch"
            }
        ],
        "locations": [
            "Rusturf Tunnel",
            "Victory Road F2"
        ],
        "prev": [
            {
                "name": "Ogremon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Titamon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "209",
        "name": "Titamon",
                "types": [
            "Ground",
            "Dark"
        ],
        "ability": "Huge Power",
        "hiddenAbility": "Huge Power",
        "evoMove": "Zanjintou",
        "moves": [
            {
                "level": "55",
                "move": "Obstruct"
            },
            {
                "level": "56",
                "move": "Earthquake"
            },
            {
                "level": "59",
                "move": "Ruination"
            },
            {
                "level": "62",
                "move": "Meteor Mash"
            },
            {
                "level": "65",
                "move": "Belly Drum"
            },
            {
                "level": "68",
                "move": "Fissure"
            },
            {
                "level": "71",
                "move": "Wicked Blow"
            },
            {
                "level": "74",
                "move": "Precipice Blades"
            },
            {
                "level": "77",
                "move": "Necro Eclipse"
            },
            {
                "level": "80",
                "move": "Gigaton Hammer"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Rebellimon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "210",
        "name": "Grottemon",
                "types": [
            "Rock"
        ],
        "ability": "Sand Stream",
        "hiddenAbility": "Earth Eater",
        "evoMove": "Grotte Hammer",
        "moves": [
            {
                "level": "18",
                "move": "Smart Strike"
            },
            {
                "level": "21",
                "move": "Substitute"
            },
            {
                "level": "23",
                "move": "Magnitude"
            },
            {
                "level": "26",
                "move": "Smack Down"
            },
            {
                "level": "29",
                "move": "Iron Head"
            },
            {
                "level": "32",
                "move": "Dig"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Goblimon",
                "method": "Earth Data"
            }
        ],
        "next": [
            {
                "name": "Gigasmon",
                "method": "Grotte Hammer"
            },
            {
                "name": "Gigasmon",
                "method": "Quagmire Twist"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "211",
        "name": "Volcamon",
                "types": [
            "Ground",
            "Rock"
        ],
        "ability": "Sand Stream",
        "hiddenAbility": "Sand Force",
        "evoMove": "Dig",
        "moves": [
            {
                "level": "34",
                "move": "Hyper Voice"
            },
            {
                "level": "36",
                "move": "Supersonic"
            },
            {
                "level": "39",
                "move": "Sandstorm"
            },
            {
                "level": "41",
                "move": "Meteor Wing"
            },
            {
                "level": "44",
                "move": "Rock Slide"
            },
            {
                "level": "47",
                "move": "Metal Sound"
            },
            {
                "level": "50",
                "move": "Titan Drill"
            },
            {
                "level": "53",
                "move": "Screech"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Gigasmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "AncientVolcamon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "212",
        "name": "AncientVolcamon",
                "types": [
            "Ground",
            "Rock"
        ],
        "ability": "Sand Stream",
        "hiddenAbility": "Sand Force",
        "evoMove": "Earthquake",
        "moves": [
            {
                "level": "55",
                "move": "Precipice Blades"
            },
            {
                "level": "56",
                "move": "Stone Axe"
            },
            {
                "level": "59",
                "move": "Stealth Rock"
            },
            {
                "level": "62",
                "move": "Magma Storm"
            },
            {
                "level": "65",
                "move": "Ancient Power"
            },
            {
                "level": "68",
                "move": "Headlong Rush"
            },
            {
                "level": "71",
                "move": "Steel Roller"
            },
            {
                "level": "74",
                "move": "Flare Blitz"
            },
            {
                "level": "77",
                "move": "Meteor Beam"
            },
            {
                "level": "80",
                "move": "Sandsear Storm"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Volcamon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "213",
        "name": "Hagurumon",
                "types": [
            "Steel"
        ],
        "ability": "Motor Drive",
        "hiddenAbility": "Volt Absorb",
        "evoMove": "Sonic Jab",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Gear Up"
            },
            {
                "level": "12",
                "move": "Shift Gear"
            },
            {
                "level": "15",
                "move": "Gear Grind"
            },
            {
                "level": "18",
                "move": "Rapid Spin"
            }
        ],
        "locations": [
            "Route 116",
            "Route 114"
        ],
        "prev": [],
        "next": [
            {
                "name": "Machmon",
                "method": "Lv18"
            },
            {
                "name": "Mercurymon",
                "method": "Metal Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "214",
        "name": "Mercurymon",
                "types": [
            "Steel",
            "Magic"
        ],
        "ability": "Mirror Armor",
        "hiddenAbility": "Magic Bounce",
        "evoMove": "Mirror Move",
        "moves": [
            {
                "level": "18",
                "move": "Mirror Coat"
            },
            {
                "level": "21",
                "move": "Counter"
            },
            {
                "level": "23",
                "move": "Reflect"
            },
            {
                "level": "26",
                "move": "Light Screen"
            },
            {
                "level": "29",
                "move": "Reflect Type"
            },
            {
                "level": "32",
                "move": "Pulse Laser"
            }
        ],
        "locations": [
            "Mirage Tower"
        ],
        "prev": [
            {
                "name": "Hagurumon",
                "method": "Metal Data"
            }
        ],
        "next": [
            {
                "name": "Wisemon",
                "method": "Lv32"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "215",
        "name": "Wisemon",
                "types": [
            "Steel",
            "Magic"
        ],
        "ability": "Magic Bounce",
        "hiddenAbility": "Analytic",
        "evoMove": "Distortion",
        "moves": [
            {
                "level": "34",
                "move": "Protect"
            },
            {
                "level": "36",
                "move": "Dark Pulse"
            },
            {
                "level": "39",
                "move": "Power Gem"
            },
            {
                "level": "41",
                "move": "Imprison"
            },
            {
                "level": "44",
                "move": "Disable"
            },
            {
                "level": "47",
                "move": "Calm Mind"
            },
            {
                "level": "50",
                "move": "Eldrich Blast"
            },
            {
                "level": "53",
                "move": "Extreme Jihad"
            }
        ],
        "locations": [
            "Victory Road F3"
        ],
        "prev": [
            {
                "name": "Mercurymon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "AncientWisemon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "216",
        "name": "AncientWisemon",
                "types": [
            "Steel",
            "Magic"
        ],
        "ability": "Magic Bounce",
        "hiddenAbility": "Mirror Armor",
        "evoMove": "Laplace Demon",
        "moves": [
            {
                "level": "55",
                "move": "Recover"
            },
            {
                "level": "56",
                "move": "Future Sight"
            },
            {
                "level": "59",
                "move": "Safeguard"
            },
            {
                "level": "62",
                "move": "Spacial Rend"
            },
            {
                "level": "65",
                "move": "Night Daze"
            },
            {
                "level": "68",
                "move": "Steel Beam"
            },
            {
                "level": "71",
                "move": "Parting Shot"
            },
            {
                "level": "74",
                "move": "Moongeist Beam"
            },
            {
                "level": "77",
                "move": "Spell Blast"
            },
            {
                "level": "80",
                "move": "Doom Desire"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Wisemon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "217",
        "name": "Machmon",
                "types": [
            "Steel"
        ],
        "ability": "Speed Boost",
        "hiddenAbility": "Technician",
        "evoMove": "Steel Blade",
        "moves": [
            {
                "level": "19",
                "move": "Quick Attack"
            },
            {
                "level": "21",
                "move": "Me First"
            },
            {
                "level": "23",
                "move": "Pursuit"
            },
            {
                "level": "26",
                "move": "Gatling"
            },
            {
                "level": "29",
                "move": "Flame Charge"
            },
            {
                "level": "32",
                "move": "Spread Fire"
            }
        ],
        "locations": [
            "Route 110"
        ],
        "prev": [
            {
                "name": "Hagurumon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Locomon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "218",
        "name": "Locomon",
                "types": [
            "Steel"
        ],
        "ability": "Speed Boost",
        "hiddenAbility": "Technician",
        "evoMove": "Spread Fire",
        "moves": [
            {
                "level": "33",
                "move": "Gear Grind"
            },
            {
                "level": "36",
                "move": "Smokescreen"
            },
            {
                "level": "39",
                "move": "Scald"
            },
            {
                "level": "41",
                "move": "Steamroller"
            },
            {
                "level": "44",
                "move": "Titan Drill"
            },
            {
                "level": "47",
                "move": "Meteor Mash"
            },
            {
                "level": "50",
                "move": "Head Smash"
            },
            {
                "level": "53",
                "move": "Wild Charge"
            }
        ],
        "locations": [
            "Route 111 (Desert)"
        ],
        "prev": [
            {
                "name": "Machmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "GrandLocomon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "219",
        "name": "GrandLocomon",
                "types": [
            "Steel"
        ],
        "ability": "Speed Boost",
        "hiddenAbility": "Technician",
        "evoMove": "Steam Eruption",
        "moves": [
            {
                "level": "55",
                "move": "Head Smash"
            },
            {
                "level": "56",
                "move": "Flare Blitz"
            },
            {
                "level": "59",
                "move": "Extreme Speed"
            },
            {
                "level": "62",
                "move": "Earthquake"
            },
            {
                "level": "65",
                "move": "Spikes"
            },
            {
                "level": "68",
                "move": "Iron Defense"
            },
            {
                "level": "71",
                "move": "U-Turn"
            },
            {
                "level": "74",
                "move": "Heavy Slam"
            },
            {
                "level": "77",
                "move": "Volt Tackle"
            },
            {
                "level": "80",
                "move": "Ally Switch"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Locomon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "220",
        "name": "Sangomon",
                "types": [
            "Water",
            "Poison"
        ],
        "ability": "Natural Cure",
        "hiddenAbility": "Regenerator",
        "evoMove": "Sonic Jab",
        "moves": [
            {
                "level": "6",
                "move": "Poison Gas"
            },
            {
                "level": "9",
                "move": "Smog"
            },
            {
                "level": "12",
                "move": "Aqua Jet"
            },
            {
                "level": "15",
                "move": "Water Shot"
            },
            {
                "level": "18",
                "move": "Headbutt"
            }
        ],
        "locations": [
            "Route 103",
            "Route 104"
        ],
        "prev": [],
        "next": [
            {
                "name": "Shellmon",
                "method": "Lv18 Lowkey"
            },
            {
                "name": "Tobiumon",
                "method": "Lv18 Amped"
            },
            {
                "name": "Ranamon",
                "method": "Water Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "221",
        "name": "Shellmon",
                "types": [
            "Water"
        ],
        "ability": "Shell Armor",
        "hiddenAbility": "Iron Barbs",
        "evoMove": "Headbutt",
        "moves": [
            {
                "level": "19",
                "move": "Withdraw"
            },
            {
                "level": "21",
                "move": "Aqua Magic"
            },
            {
                "level": "23",
                "move": "Drill Buster"
            },
            {
                "level": "26",
                "move": "Muddy Water"
            },
            {
                "level": "29",
                "move": "Rapid Spin"
            },
            {
                "level": "31",
                "move": "Teleport"
            }
        ],
        "locations": [
            "Route 110"
        ],
        "prev": [
            {
                "name": "Sangomon",
                "method": "Lv18 Lowkey"
            }
        ],
        "next": [
            {
                "name": "MarinBullmon",
                "method": "Lv32"
            },
            {
                "name": "Pixiemon",
                "method": "Teleport"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "222",
        "name": "MarinBullmon",
                "types": [
            "Water",
            "Poison"
        ],
        "ability": "Gooey",
        "hiddenAbility": "Poison Touch",
        "evoMove": "Snipe Shot",
        "moves": [
            {
                "level": "34",
                "move": "Sand Tomb"
            },
            {
                "level": "39",
                "move": "Water Tower"
            },
            {
                "level": "41",
                "move": "Toxic"
            },
            {
                "level": "44",
                "move": "Sucker Punch"
            },
            {
                "level": "47",
                "move": "Sludge Wave"
            },
            {
                "level": "50",
                "move": "Water Spout"
            },
            {
                "level": "53",
                "move": "Toxic Spikes"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Shellmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Ryugumon",
                "method": "Lv54"
            },
            {
                "name": "Ariemon",
                "method": "Lunar Scale"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "223",
        "name": "Ryugumon",
                "types": [
            "Water",
            "Holy"
        ],
        "ability": "Gooey",
        "hiddenAbility": "Healer",
        "evoMove": "River Of Power",
        "moves": [
            {
                "level": "55",
                "move": "Trinity Gospel"
            },
            {
                "level": "56",
                "move": "Aqua Magic"
            },
            {
                "level": "59",
                "move": "Calm Mind"
            },
            {
                "level": "62",
                "move": "Dragon Pulse"
            },
            {
                "level": "65",
                "move": "Hydro Cannon"
            },
            {
                "level": "68",
                "move": "Heaven Judge"
            },
            {
                "level": "71",
                "move": "Mystic Buster"
            },
            {
                "level": "74",
                "move": "Defog"
            },
            {
                "level": "77",
                "move": "Rest"
            },
            {
                "level": "80",
                "move": "Dragon Energy"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "MarinBullmon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Ariemon",
                "method": "Water Data"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "224",
        "name": "Ranamon",
                "types": [
            "Water",
            "Fairy"
        ],
        "ability": "Drizzle",
        "hiddenAbility": "Regenerator",
        "evoMove": "Jealousy Rain",
        "moves": [
            {
                "level": "19",
                "move": "Acid Spray"
            },
            {
                "level": "21",
                "move": "Soak"
            },
            {
                "level": "23",
                "move": "Aqua Magic"
            },
            {
                "level": "26",
                "move": "Attract"
            },
            {
                "level": "29",
                "move": "Water Tower"
            },
            {
                "level": "32",
                "move": "Sludge"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Sangomon",
                "method": "Water Data"
            }
        ],
        "next": [
            {
                "name": "Calmaramon",
                "method": "Jealousy Rain"
            },
            {
                "name": "Calmaramon",
                "method": "Titanic Charge"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "225",
        "name": "Mermaimon",
                "types": [
            "Water"
        ],
        "ability": "Drizzle",
        "hiddenAbility": "Steel Worker",
        "evoMove": "Sludge",
        "moves": [
            {
                "level": "33",
                "move": "False Surrender"
            },
            {
                "level": "36",
                "move": "Triple Dive"
            },
            {
                "level": "39",
                "move": "Soak"
            },
            {
                "level": "41",
                "move": "Sing"
            },
            {
                "level": "44",
                "move": "Iron Tail"
            },
            {
                "level": "47",
                "move": "Aqua Tail"
            },
            {
                "level": "50",
                "move": "Muddy Water"
            },
            {
                "level": "53",
                "move": "Chilling Water"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Calmaramon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "AncientMermaimon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "226",
        "name": "AncientMermaimon",
                "types": [
            "Water",
            "Fairy"
        ],
        "ability": "Primordial Sea",
        "hiddenAbility": "Storm Drain",
        "evoMove": "Origin Pulse",
        "moves": [
            {
                "level": "56",
                "move": "Behemoth Blade"
            },
            {
                "level": "59",
                "move": "Tera Hydro"
            },
            {
                "level": "62",
                "move": "Rain Dance"
            },
            {
                "level": "65",
                "move": "Bleakwind Storm"
            },
            {
                "level": "69",
                "move": "Wave Crash"
            },
            {
                "level": "71",
                "move": "Victory Dance"
            },
            {
                "level": "74",
                "move": "Hydro Cannon"
            },
            {
                "level": "77",
                "move": "Water Spout"
            },
            {
                "level": "80",
                "move": "Flip Turn"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Mermaimon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "227",
        "name": "Tobiumon",
                "types": [
            "Water",
            "Flying"
        ],
        "ability": "Swift Swim",
        "hiddenAbility": "Wind Rider",
        "evoMove": "Aqua Cutter",
        "moves": [
            {
                "level": "19",
                "move": "Aerial Ace"
            },
            {
                "level": "21",
                "move": "Agility"
            },
            {
                "level": "23",
                "move": "Pursuit"
            },
            {
                "level": "26",
                "move": "Water Pulse"
            },
            {
                "level": "29",
                "move": "Demon Claw"
            },
            {
                "level": "32",
                "move": "Triple Dive"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Sangomon",
                "method": "Lv18 Amped"
            }
        ],
        "next": [
            {
                "name": "Piranimon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "228",
        "name": "Piranimon",
                "types": [
            "Water"
        ],
        "ability": "Strong Jaw",
        "hiddenAbility": "Intimidate",
        "evoMove": "Fishious Rend",
        "moves": [
            {
                "level": "34",
                "move": "Evil Bite"
            },
            {
                "level": "36",
                "move": "Ice Fang"
            },
            {
                "level": "39",
                "move": "Agility"
            },
            {
                "level": "41",
                "move": "Liquidation"
            },
            {
                "level": "44",
                "move": "Beat Up"
            },
            {
                "level": "47",
                "move": "Magic Fang"
            },
            {
                "level": "50",
                "move": "Aqua Tail"
            },
            {
                "level": "53",
                "move": "Anchor Shot"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Tobiumon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "MetalPiranimon",
                "method": "Lv54"
            },
            {
                "name": "Cthyllamon",
                "method": "Unholy Heart"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "229",
        "name": "MetalPiranimon",
                "types": [
            "Water",
            "Steel"
        ],
        "ability": "Strong Jaw",
        "hiddenAbility": "Intimidate",
        "evoMove": "Iron Tail",
        "moves": [
            {
                "level": "55",
                "move": "Jaw Lock"
            },
            {
                "level": "56",
                "move": "Hone Claws"
            },
            {
                "level": "59",
                "move": "Meteor Mash"
            },
            {
                "level": "62",
                "move": "Icicle Crash"
            },
            {
                "level": "65",
                "move": "River Of Power"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Piranimon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "230",
        "name": "Cthyllamon",
                "types": [
            "Water",
            "Undead"
        ],
        "ability": "Strong Jaw",
        "hiddenAbility": "Intimidate",
        "evoMove": "Soul Predator",
        "moves": [
            {
                "level": "55",
                "move": "Hypnosis"
            },
            {
                "level": "56",
                "move": "Nasty Plot"
            },
            {
                "level": "59",
                "move": "Instruct"
            },
            {
                "level": "62",
                "move": "Muddy Water"
            },
            {
                "level": "65",
                "move": "Spectral Thief"
            },
            {
                "level": "68",
                "move": "Whirlpool"
            },
            {
                "level": "71",
                "move": "Titan Drill"
            },
            {
                "level": "74",
                "move": "Sludge Bomb"
            },
            {
                "level": "77",
                "move": "Liquidation"
            },
            {
                "level": "80",
                "move": "Astral Barrage"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Piranimon",
                "method": "Unholy Heart"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "231",
        "name": "Pixiemon",
                "types": [
            "Fairy",
            "Magic"
        ],
        "ability": "Prankster",
        "hiddenAbility": "Lingering Aroma",
        "evoMove": "Sludge Bomb",
        "moves": [
            {
                "level": "33",
                "move": "Lovely Attack"
            },
            {
                "level": "35",
                "move": "Confuse Ray"
            },
            {
                "level": "39",
                "move": "Lunge"
            },
            {
                "level": "41",
                "move": "Poison Jab"
            },
            {
                "level": "44",
                "move": "Spirit Break"
            },
            {
                "level": "47",
                "move": "Spell Sword"
            },
            {
                "level": "50",
                "move": "Eerie Noise"
            },
            {
                "level": "52",
                "move": "Moonblast"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Shellmon",
                "method": "Teleport"
            }
        ],
        "next": [
            {
                "name": "Venusmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "232",
        "name": "Venusmon",
                "types": [
            "Fairy",
            "Holy"
        ],
        "ability": "Triage",
        "hiddenAbility": "Lingering Aroma",
        "evoMove": "Heal Pulse",
        "moves": [
            {
                "level": "55",
                "move": "Attract"
            },
            {
                "level": "56",
                "move": "Pain Split"
            },
            {
                "level": "59",
                "move": "Flash"
            },
            {
                "level": "62",
                "move": "Wish"
            },
            {
                "level": "65",
                "move": "Healing Wish"
            },
            {
                "level": "68",
                "move": "Revival Blessing"
            },
            {
                "level": "71",
                "move": "Recover"
            },
            {
                "level": "74",
                "move": "Sparkly Swirl"
            },
            {
                "level": "77",
                "move": "Flower Shield"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Pixiemon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "233",
        "name": "Numemon",
                "types": [
            "Poison"
        ],
        "ability": "Stench",
        "hiddenAbility": "Toxic Debris",
        "evoMove": "Lick",
        "moves": [
            {
                "level": "19",
                "move": "Mud Shot"
            },
            {
                "level": "21",
                "move": "Astonish"
            },
            {
                "level": "23",
                "move": "Leer"
            },
            {
                "level": "32",
                "move": "Giga Poop Toss"
            }
        ],
        "locations": [
            "Petalburg Woods",
            "Route 110"
        ],
        "prev": [],
        "next": [
            {
                "name": "Monzaemon",
                "method": "Cute Plush"
            },
            {
                "name": "WaruMonzaemon",
                "method": "Evil Plush"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "234",
        "name": "Monzaemon",
                "types": [
            "Normal",
            "Fairy"
        ],
        "ability": "Misty Surge",
        "hiddenAbility": "Pixilate",
        "evoMove": "Lovely Attack",
        "moves": [
            {
                "level": "33",
                "move": "Attract"
            },
            {
                "level": "36",
                "move": "Play Rough"
            },
            {
                "level": "39",
                "move": "Heal Bell"
            },
            {
                "level": "44",
                "move": "Dizzy Punch"
            },
            {
                "level": "47",
                "move": "Heal Pulse"
            },
            {
                "level": "50",
                "move": "Justice Beam"
            },
            {
                "level": "53",
                "move": "Sing"
            }
        ],
        "locations": [
            "Route 119"
        ],
        "prev": [
            {
                "name": "Numemon",
                "method": "Cute Plush"
            }
        ],
        "next": [
            {
                "name": "ShinMonzaemon",
                "method": "Lv54"
            },
            {
                "name": "ExTyrannomon",
                "method": "Fire Data"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "235",
        "name": "WaruMonzaemon",
                "types": [
            "Normal",
            "Dark"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Pressure",
        "evoMove": "Heart Break",
        "moves": [
            {
                "level": "33",
                "move": "Slash"
            },
            {
                "level": "36",
                "move": "Perish Song"
            },
            {
                "level": "39",
                "move": "Haze"
            },
            {
                "level": "41",
                "move": "Play Rough"
            },
            {
                "level": "44",
                "move": "Dizzy Punch"
            },
            {
                "level": "47",
                "move": "Ruination"
            },
            {
                "level": "50",
                "move": "Electric Cloud"
            },
            {
                "level": "53",
                "move": "Night Daze"
            }
        ],
        "locations": [
            "Route 119"
        ],
        "prev": [
            {
                "name": "Numemon",
                "method": "Evil Plush"
            }
        ],
        "next": [
            {
                "name": "ShinMonzaemon",
                "method": "Lv54"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "236",
        "name": "ShinMonzaemon",
                "types": [
            "Fairy",
            "Dark"
        ],
        "ability": "Bad Dreams",
        "hiddenAbility": "Comatose",
        "evoMove": "Dark Void",
        "moves": [
            {
                "level": "55",
                "move": "Nightmare"
            },
            {
                "level": "56",
                "move": "Laser Cannon"
            },
            {
                "level": "59",
                "move": "Dream Eater"
            },
            {
                "level": "62",
                "move": "Spirit Break"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Evil Bite"
            },
            {
                "level": "71",
                "move": "Gigaton Hammer"
            },
            {
                "level": "74",
                "move": "Soul Predator"
            },
            {
                "level": "77",
                "move": "Spectral Thief"
            },
            {
                "level": "80",
                "move": "Poltergeist"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Monzaemon",
                "method": "Lv54"
            },
            {
                "name": "WaruMonzaemon",
                "method": "Lv54"
            },
            {
                "name": "ExTyrannomon",
                "method": "Night Daze"
            }
        ],
        "next": [],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "237",
        "name": "Culumon",
                "types": [
            "CHAOS"
        ],
        "ability": "No Guard",
        "hiddenAbility": "",
        "evoMove": "Heal Pulse",
        "moves": [],
        "locations": [
            "Routes 101",
            "103",
            "117",
            "Mirage Tower",
            "etc."
        ],
        "prev": [],
        "next": [],
        "stage": "Unknown",
        "cardLevel": 3
    },
    {
        "id": "238",
        "name": "Liollmon",
                "types": [
            "Holy",
            "Dark"
        ],
        "ability": "Super Luck",
        "hiddenAbility": "Intimidate",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Bulk Up"
            },
            {
                "level": "12",
                "move": "Peck Flurry"
            },
            {
                "level": "15",
                "move": "Evil Bite"
            },
            {
                "level": "18",
                "move": "Slash"
            }
        ],
        "locations": [
            "Route 104",
            "Rusturf Tunnel"
        ],
        "prev": [],
        "next": [
            {
                "name": "Leomon",
                "method": "Lv18 Amped (Assumption"
            },
            {
                "name": "Liamon",
                "method": "Lv18 Lowkey"
            },
            {
                "name": "Lowemon",
                "method": "Dark Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "239",
        "name": "Leomon",
                "types": [
            "Fighting"
        ],
        "ability": "Justified",
        "hiddenAbility": "Rattled",
        "evoMove": "Juouken",
        "moves": [
            {
                "level": "21",
                "move": "Noble Roar"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Fire Punch"
            },
            {
                "level": "29",
                "move": "Thunder Punch"
            },
            {
                "level": "32",
                "move": "Brick Break"
            }
        ],
        "locations": [
            "Route 103 (Part 2)"
        ],
        "prev": [
            {
                "name": "Liollmon",
                "method": "Lv18 Amped (Assumption"
            },
            {
                "name": "Leomon",
                "method": "base form is )"
            }
        ],
        "next": [
            {
                "name": "Leomon",
                "method": "base form is )"
            },
            {
                "name": "GrapLeomon",
                "method": "Lv32"
            },
            {
                "name": "SaberLeomon",
                "method": "Loader  Lv54"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "240",
        "name": "GrapLeomon",
                "types": [
            "Fighting",
            "Steel"
        ],
        "ability": "Iron Fist",
        "hiddenAbility": "Intimidate",
        "evoMove": "Brick Break",
        "moves": [
            {
                "level": "34",
                "move": "Bullet Punch"
            },
            {
                "level": "36",
                "move": "Ultra Turbulence"
            },
            {
                "level": "39",
                "move": "Shift Gear"
            },
            {
                "level": "41",
                "move": "Hammer Rush"
            },
            {
                "level": "44",
                "move": "Iron Head"
            },
            {
                "level": "47",
                "move": "Rapid Spin"
            },
            {
                "level": "50",
                "move": "Cross Chop"
            },
            {
                "level": "53",
                "move": "Hyper Drill"
            }
        ],
        "locations": [
            "Route 120"
        ],
        "prev": [
            {
                "name": "Leomon",
                "method": "Lv32"
            },
            {
                "name": "Grizzlymon",
                "method": "Hammer Rush"
            }
        ],
        "next": [
            {
                "name": "HeavyLeomon",
                "method": "LV54"
            },
            {
                "name": "BanchoLeomon",
                "method": "Gakuren"
            },
            {
                "name": "Marsmon",
                "method": "Swords Dance"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "241",
        "name": "HeavyLeomon",
                "types": [
            "Fighting",
            "Steel"
        ],
        "ability": "Mold Breaker",
        "hiddenAbility": "Intimidate",
        "evoMove": "Meltdown",
        "moves": [
            {
                "level": "55",
                "move": "Headlong Rush"
            },
            {
                "level": "56",
                "move": "Giga Missile"
            },
            {
                "level": "59",
                "move": "Burning Bulwark"
            },
            {
                "level": "62",
                "move": "Close Combat"
            },
            {
                "level": "65",
                "move": "Earthquake"
            },
            {
                "level": "68",
                "move": "Laser Cannon"
            },
            {
                "level": "71",
                "move": "Flare Blitz"
            },
            {
                "level": "74",
                "move": "Heavy Slam"
            },
            {
                "level": "77",
                "move": "Sunsteel Strike"
            },
            {
                "level": "80",
                "move": "Dynamic Punch"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "GrapLeomon",
                "method": "LV54"
            }
        ],
        "next": [],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "242",
        "name": "Marsmon",
                "types": [
            "Fighting",
            "Fire"
        ],
        "ability": "Technician",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Hyper Drill",
        "moves": [
            {
                "level": "55",
                "move": "Asura Shinken"
            },
            {
                "level": "56",
                "move": "Arm Thrust"
            },
            {
                "level": "59",
                "move": "Detect"
            },
            {
                "level": "62",
                "move": "Foresight"
            },
            {
                "level": "65",
                "move": "Earthquake"
            },
            {
                "level": "68",
                "move": "Dynamic Punch"
            },
            {
                "level": "71",
                "move": "Flare Blitz"
            },
            {
                "level": "74",
                "move": "Meteor Mash"
            },
            {
                "level": "77",
                "move": "Belly Drum"
            },
            {
                "level": "80",
                "move": "Divine Breaker"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "GrapLeomon",
                "method": "Swords Dance"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "243",
        "name": "BanchoLeomon",
                "types": [
            "Fighting",
            "Fire"
        ],
        "ability": "Iron Fist",
        "hiddenAbility": "Intimidate",
        "evoMove": "Burn Bancho Punch",
        "moves": [
            {
                "level": "53",
                "move": "Hyper Drill"
            },
            {
                "level": "54",
                "move": "Behemoth Blade"
            },
            {
                "level": "59",
                "move": "Bulk Up"
            },
            {
                "level": "62",
                "move": "Sacred Sword"
            },
            {
                "level": "65",
                "move": "Earthquake"
            },
            {
                "level": "68",
                "move": "Plasma Fists"
            },
            {
                "level": "71",
                "move": "Flare Blitz"
            },
            {
                "level": "74",
                "move": "Sunsteel Strike"
            },
            {
                "level": "77",
                "move": "Meteor Assault"
            },
            {
                "level": "80",
                "move": "Close Combat"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "GrapLeomon",
                "method": "Gakuren"
            }
        ],
        "next": [
            {
                "name": "Chaosmon Valdur Arm",
                "method": "Jogress Valdurmon"
            },
            {
                "name": "Caosmon",
                "method": "Jogress Darkdramon"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "244",
        "name": "Liamon",
                "types": [
            "Electric",
            "Holy"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Lightning Rod",
        "evoMove": "Shock Wave",
        "moves": [
            {
                "level": "21",
                "move": "Pursuit"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Thunder Fang"
            },
            {
                "level": "29",
                "move": "Rock Smash"
            },
            {
                "level": "32",
                "move": "Holy Blast"
            }
        ],
        "locations": [
            "Route 117"
        ],
        "prev": [
            {
                "name": "Liollmon",
                "method": "Lv18 Lowkey"
            }
        ],
        "next": [
            {
                "name": "LoaderLeomon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "245",
        "name": "LoaderLeomon",
                "types": [
            "Electric",
            "Steel"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Wind Power",
        "evoMove": "Holy Blast",
        "moves": [
            {
                "level": "34",
                "move": "Iron Head"
            },
            {
                "level": "36",
                "move": "Body Press"
            },
            {
                "level": "39",
                "move": "Tornado"
            },
            {
                "level": "41",
                "move": "Shift Gear"
            },
            {
                "level": "44",
                "move": "Iron Tail"
            },
            {
                "level": "47",
                "move": "Hyper Drill"
            },
            {
                "level": "50",
                "move": "Wild Charge"
            },
            {
                "level": "53",
                "move": "Ultra Turbulence"
            }
        ],
        "locations": [
            "Old Mauville"
        ],
        "prev": [
            {
                "name": "Liamon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "SaberLeomon",
                "method": "Lv. 54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "246",
        "name": "SaberLeomon",
                "types": [
            "Electric",
            "Holy"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Wind Power",
        "evoMove": "Volt Tackle",
        "moves": [
            {
                "level": "55",
                "move": "Ancient Power"
            },
            {
                "level": "56",
                "move": "Hyper Fang"
            },
            {
                "level": "59",
                "move": "Divine Breaker"
            },
            {
                "level": "62",
                "move": "Plasma Fists"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Discharge"
            },
            {
                "level": "71",
                "move": "Heaven Judge"
            },
            {
                "level": "74",
                "move": "Thunderous Kick"
            },
            {
                "level": "77",
                "move": "Thunder Cage"
            },
            {
                "level": "80",
                "move": "Precipice Blades"
            }
        ],
        "locations": [
            "Victory Road F3"
        ],
        "prev": [
            {
                "name": "Leomon",
                "method": "Loader  Lv54"
            },
            {
                "name": "LoaderLeomon",
                "method": "Lv. 54"
            }
        ],
        "next": [
            {
                "name": "Tlalocmon",
                "method": "Jogress ElDoradimon"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "247",
        "name": "Lowemon",
                "types": [
            "Dark"
        ],
        "ability": "Sword of Ruin",
        "hiddenAbility": "Intimidate",
        "evoMove": "Shadow Meteor",
        "moves": [
            {
                "level": "19",
                "move": "Steel Blade"
            },
            {
                "level": "21",
                "move": "Protect"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Dark Pulse"
            },
            {
                "level": "29",
                "move": "Death Ball"
            },
            {
                "level": "32",
                "move": "Electric Cloud"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Liollmon",
                "method": "Dark Data"
            }
        ],
        "next": [
            {
                "name": "Rihimon",
                "method": "Lv32"
            },
            {
                "name": "KaiserLeomon",
                "method": "Shadow Meteor"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "248",
        "name": "Rihimon",
                "types": [
            "Dark"
        ],
        "ability": "Beads of Ruin",
        "hiddenAbility": "Sword of Ruin",
        "evoMove": "Electric Cloud",
        "moves": [
            {
                "level": "33",
                "move": "Extreme Speed"
            },
            {
                "level": "36",
                "move": "Pulse Laser"
            },
            {
                "level": "39",
                "move": "Haze"
            },
            {
                "level": "41",
                "move": "Gravity"
            },
            {
                "level": "44",
                "move": "Night Daze"
            },
            {
                "level": "47",
                "move": "Metal Sound"
            },
            {
                "level": "50",
                "move": "Spread Fire"
            },
            {
                "level": "54",
                "move": "Necrophobia"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Lowemon",
                "method": "Lv32"
            },
            {
                "name": "KaiserLeomon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "AncientSphinxmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "249",
        "name": "AncientSphinxmon",
                "types": [
            "Dark"
        ],
        "ability": "Beads of Ruin",
        "hiddenAbility": "Dark Aura",
        "evoMove": "Necro Eclipse",
        "moves": [
            {
                "level": "55",
                "move": "Ghost Dive"
            },
            {
                "level": "56",
                "move": "Ancient Power"
            },
            {
                "level": "59",
                "move": "Heal Block"
            },
            {
                "level": "62",
                "move": "Soul Predator"
            },
            {
                "level": "65",
                "move": "Nasty Plot"
            },
            {
                "level": "68",
                "move": "Ruination"
            },
            {
                "level": "71",
                "move": "Astral Barrage"
            },
            {
                "level": "74",
                "move": "Grave Scream"
            },
            {
                "level": "77",
                "move": "Oblivion Wing"
            },
            {
                "level": "80",
                "move": "Dark Prominence"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Rihimon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "250",
        "name": "Pomumon",
                "types": [
            "Grass"
        ],
        "ability": "Supersweet Syrup",
        "hiddenAbility": "Seed Sower",
        "evoMove": "Sonic Jab",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Growth"
            },
            {
                "level": "12",
                "move": "Gust"
            },
            {
                "level": "15",
                "move": "Mega Drain"
            },
            {
                "level": "18",
                "move": "Headbutt"
            }
        ],
        "locations": [
            "Route 103",
            "Route 104",
            "Petalburg Woods"
        ],
        "prev": [],
        "next": [
            {
                "name": "Parasaurmon",
                "method": "Lv18"
            },
            {
                "name": "Arbormon",
                "method": "Wood Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "251",
        "name": "Parasaurmon",
                "types": [
            "Grass"
        ],
        "ability": "Supersweet Syrup",
        "hiddenAbility": "Seed Sower",
        "evoMove": "Heatbutt",
        "moves": [
            {
                "level": "19",
                "move": "Leech Seed"
            },
            {
                "level": "21",
                "move": "Sweet Scent"
            },
            {
                "level": "23",
                "move": "Giga Drain"
            },
            {
                "level": "26",
                "move": "Roar"
            },
            {
                "level": "27",
                "move": "Grass Tower"
            },
            {
                "level": "29",
                "move": "Sludge"
            },
            {
                "level": "32",
                "move": "Buster Dive"
            }
        ],
        "locations": [
            "Route 111",
            "Route 117",
            "110 (Guardian)"
        ],
        "prev": [
            {
                "name": "Pomumon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Ajatarmon",
                "method": "Lv18 Amped"
            },
            {
                "name": "Tropiamon",
                "method": "Lv18 Lowkey"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "252",
        "name": "Ajatarmon",
                "types": [
            "Grass"
        ],
        "ability": "Iron Barbs",
        "hiddenAbility": "Seed Sower",
        "evoMove": "Buster Dive",
        "moves": [
            {
                "level": "34",
                "move": "Twineedle"
            },
            {
                "level": "36",
                "move": "X-Scissor"
            },
            {
                "level": "39",
                "move": "Feint Attack"
            },
            {
                "level": "41",
                "move": "Snap Trap"
            },
            {
                "level": "44",
                "move": "Grass Tower"
            },
            {
                "level": "47",
                "move": "Wrap"
            },
            {
                "level": "50",
                "move": "Aerial Ace"
            },
            {
                "level": "54",
                "move": "Power Whip"
            }
        ],
        "locations": [
            "Victory Road F3"
        ],
        "prev": [
            {
                "name": "Parasaurmon",
                "method": "Lv18 Amped"
            }
        ],
        "next": [
            {
                "name": "BloomLordmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "253",
        "name": "BloomLordmon",
                "types": [
            "Grass",
            "Fairy"
        ],
        "ability": "Drought",
        "hiddenAbility": "Seed Sower",
        "evoMove": "Gran Del Sol",
        "moves": [
            {
                "level": "56",
                "move": "Secret Sword"
            },
            {
                "level": "59",
                "move": "Flower Shield"
            },
            {
                "level": "62",
                "move": "Solar Beam"
            },
            {
                "level": "65",
                "move": "Recycle"
            },
            {
                "level": "68",
                "move": "Aura Sphere"
            },
            {
                "level": "71",
                "move": "Victory Dance"
            },
            {
                "level": "74",
                "move": "Seed Flare"
            },
            {
                "level": "77",
                "move": "Sharp Claymore"
            },
            {
                "level": "80",
                "move": "Meteor Assault"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Ajatarmon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "254",
        "name": "Tropiamon",
                "types": [
            "Grass",
            "Poison"
        ],
        "ability": "Corrosion",
        "hiddenAbility": "Seed Sower",
        "evoMove": "Syrup Bomb",
        "moves": [
            {
                "level": "34",
                "move": "Powder"
            },
            {
                "level": "36",
                "move": "Meltdown"
            },
            {
                "level": "39",
                "move": "Seed Bomb"
            },
            {
                "level": "41",
                "move": "Dragon Breath"
            },
            {
                "level": "44",
                "move": "Sludge Wave"
            },
            {
                "level": "47",
                "move": "Toxic"
            },
            {
                "level": "50",
                "move": "Petal Dance"
            },
            {
                "level": "53",
                "move": "Dragon Pulse"
            }
        ],
        "locations": [
            "Route 111",
            "Victory Road F2"
        ],
        "prev": [
            {
                "name": "Parasaurmon",
                "method": "Lv18 Lowkey"
            }
        ],
        "next": [
            {
                "name": "Hydramon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "255",
        "name": "Hydramon",
                "types": [
            "Grass",
            "Poison"
        ],
        "ability": "Corrosion",
        "hiddenAbility": "Merciless",
        "evoMove": "Fickle Beam",
        "moves": [
            {
                "level": "55",
                "move": "Syrup Bomb"
            },
            {
                "level": "56",
                "move": "Corrosive Gas"
            },
            {
                "level": "59",
                "move": "Outrage"
            },
            {
                "level": "62",
                "move": "Gunk Shot"
            },
            {
                "level": "65",
                "move": "Toxic Spikes"
            },
            {
                "level": "68",
                "move": "Leaf Storm"
            },
            {
                "level": "71",
                "move": "Roar"
            },
            {
                "level": "74",
                "move": "Malignant Chain"
            },
            {
                "level": "77",
                "move": "Dragon Energy"
            },
            {
                "level": "80",
                "move": "Frenzy Plant"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Tropiamon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "256",
        "name": "Arbormon",
                "types": [
            "Grass"
        ],
        "ability": "Battle Armor",
        "hiddenAbility": "Grassy Surge",
        "evoMove": "Blockage Seed",
        "moves": [
            {
                "level": "19",
                "move": "Bullet Punch"
            },
            {
                "level": "21",
                "move": "Comet Punch"
            },
            {
                "level": "23",
                "move": "Wrap"
            },
            {
                "level": "26",
                "move": "Needle Arm"
            },
            {
                "level": "29",
                "move": "Brick Break"
            },
            {
                "level": "32",
                "move": "Iron Head"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Pomumon",
                "method": "Wood Data"
            }
        ],
        "next": [
            {
                "name": "Petaldramon",
                "method": "Blockage Seed"
            },
            {
                "name": "Petaldramon",
                "method": "Leaf Cyclone"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "257",
        "name": "Entmon",
                "types": [
            "Grass",
            "Bug"
        ],
        "ability": "Sap Sipper",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Attack Order",
        "moves": [
            {
                "level": "33",
                "move": "Horn Leech"
            },
            {
                "level": "36",
                "move": "Phantom Claw"
            },
            {
                "level": "39",
                "move": "Leech Seed"
            },
            {
                "level": "41",
                "move": "Infestation"
            },
            {
                "level": "44",
                "move": "Power Whip"
            },
            {
                "level": "47",
                "move": "Leech Life"
            },
            {
                "level": "50",
                "move": "Corrosive Gas"
            },
            {
                "level": "53",
                "move": "Evil Bite"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Petaldramon",
                "method": "Arbormon Lv32"
            }
        ],
        "next": [
            {
                "name": "AncientTroiamon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "258",
        "name": "AncientTroiamon",
                "types": [
            "Grass",
            "Steel"
        ],
        "ability": "Grassy Surge",
        "hiddenAbility": "Heatproof",
        "evoMove": "Seed Flare",
        "moves": [
            {
                "level": "55",
                "move": "Grassy Terrain"
            },
            {
                "level": "56",
                "move": "Shift Gear"
            },
            {
                "level": "59",
                "move": "Spiky Shield"
            },
            {
                "level": "62",
                "move": "Camouflage"
            },
            {
                "level": "65",
                "move": "Leaf Storm"
            },
            {
                "level": "68",
                "move": "Steel Beam"
            },
            {
                "level": "71",
                "move": "Head Smash"
            },
            {
                "level": "74",
                "move": "Frenzy Plant"
            },
            {
                "level": "77",
                "move": "Solar Beam"
            },
            {
                "level": "80",
                "move": "Meteor Mash"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Entmon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "259",
        "name": "Blucomon",
                "types": [
            "Ice",
            "Dragon"
        ],
        "ability": "Ice Scales",
        "hiddenAbility": "Refrigerate",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Mist"
            },
            {
                "level": "12",
                "move": "Icy Wind"
            },
            {
                "level": "15",
                "move": "Twister"
            },
            {
                "level": "18",
                "move": "Ice Fang"
            }
        ],
        "locations": [
            "Route 116",
            "Granite Cave"
        ],
        "prev": [],
        "next": [
            {
                "name": "Paledramon",
                "method": "Lv18"
            },
            {
                "name": "Sorcerimon",
                "method": "Ice Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "260",
        "name": "Paledramon",
                "types": [
            "Ice",
            "Dragon"
        ],
        "ability": "Dry Skin",
        "hiddenAbility": "Slush Rush",
        "evoMove": "Frost Breath",
        "moves": [
            {
                "level": "19",
                "move": "Dragon Breath"
            },
            {
                "level": "21",
                "move": "Wing Attack"
            },
            {
                "level": "23",
                "move": "Snowscape"
            },
            {
                "level": "26",
                "move": "Freeze-Dry"
            },
            {
                "level": "29",
                "move": "Dragon Tail"
            },
            {
                "level": "32",
                "move": "Air Slash"
            }
        ],
        "locations": [
            "Shoal Cave"
        ],
        "prev": [
            {
                "name": "Blucomon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "CrysPaledramon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "261",
        "name": "CrysPaledramon",
                "types": [
            "Ice",
            "Dragon"
        ],
        "ability": "Thermal Exchange",
        "hiddenAbility": "Slush Rush",
        "evoMove": "Winter Blast",
        "moves": [
            {
                "level": "33",
                "move": "Dragon Pulse"
            },
            {
                "level": "36",
                "move": "Aerial Ace"
            },
            {
                "level": "39",
                "move": "Extreme Speed"
            },
            {
                "level": "41",
                "move": "Hail"
            },
            {
                "level": "44",
                "move": "Ice Spinner"
            },
            {
                "level": "47",
                "move": "Ice Shard"
            },
            {
                "level": "50",
                "move": "Scale Shot"
            },
            {
                "level": "53",
                "move": "Slash"
            }
        ],
        "locations": [
            "Meteor Falls",
            "Shoal Cave"
        ],
        "prev": [
            {
                "name": "Paledramon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Hexeblaumon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "262",
        "name": "Hexeblaumon",
                "types": [
            "Ice",
            "Magic"
        ],
        "ability": "Snow Warning",
        "hiddenAbility": "Slush Rush",
        "evoMove": "Absolute Zero",
        "moves": [
            {
                "level": "56",
                "move": "Calm Mind"
            },
            {
                "level": "59",
                "move": "Protect"
            },
            {
                "level": "62",
                "move": "Giga Freeze"
            },
            {
                "level": "65",
                "move": "Aurora Beam"
            },
            {
                "level": "68",
                "move": "Magic Blade"
            },
            {
                "level": "71",
                "move": "Glacial Lance"
            },
            {
                "level": "74",
                "move": "Freezing Glare"
            },
            {
                "level": "77",
                "move": "Spell Blast"
            },
            {
                "level": "80",
                "move": "Freeze Shock"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "CrysPaledramon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "263",
        "name": "Sorcerimon",
                "types": [
            "Ice",
            "Magic"
        ],
        "ability": "Healer",
        "hiddenAbility": "Snow Warning",
        "evoMove": "Glaciate",
        "moves": [
            {
                "level": "19",
                "move": "Light Laser"
            },
            {
                "level": "21",
                "move": "Life Dew"
            },
            {
                "level": "23",
                "move": "Water Pulse"
            },
            {
                "level": "26",
                "move": "Magic Game"
            },
            {
                "level": "29",
                "move": "Freeze-Dry"
            },
            {
                "level": "32",
                "move": "Heal Pulse"
            }
        ],
        "locations": [
            "Route 103",
            "Route 116",
            "Route 110",
            "Route 117",
            "Mirage Tower"
        ],
        "prev": [
            {
                "name": "Blucomon",
                "method": "Ice Data"
            }
        ],
        "next": [
            {
                "name": "Panjyamon X",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "264",
        "name": "Panjyamon X",
                "types": [
            "Ice",
            "Magic"
        ],
        "ability": "Snow Cloak",
        "hiddenAbility": "Snow Warning",
        "evoMove": "Triple Axel",
        "moves": [
            {
                "level": "34",
                "move": "Spell Sword"
            },
            {
                "level": "36",
                "move": "Brick Break"
            },
            {
                "level": "39",
                "move": "Noble Roar"
            },
            {
                "level": "41",
                "move": "Calm Mind"
            },
            {
                "level": "44",
                "move": "Winter Blast"
            },
            {
                "level": "47",
                "move": "Icicle Crash"
            },
            {
                "level": "50",
                "move": "Eldrich Blast"
            },
            {
                "level": "53",
                "move": "Drain Punch"
            }
        ],
        "locations": [
            "Shoal Cave"
        ],
        "prev": [
            {
                "name": "Sorcerimon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "FrosVelgrmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "265",
        "name": "FrosVelgrmon",
                "types": [
            "Ice",
            "Flying"
        ],
        "ability": "Snow Cloak",
        "hiddenAbility": "Snow Warning",
        "evoMove": "Giga Freeze",
        "moves": [
            {
                "level": "56",
                "move": "Hurricane"
            },
            {
                "level": "59",
                "move": "Sing"
            },
            {
                "level": "62",
                "move": "Absolute Zero"
            },
            {
                "level": "65",
                "move": "Hail"
            },
            {
                "level": "68",
                "move": "Spell Blast"
            },
            {
                "level": "71",
                "move": "Bleakwind Storm"
            },
            {
                "level": "74",
                "move": "Sheer Cold"
            },
            {
                "level": "77",
                "move": "Glacial Lance"
            },
            {
                "level": "80",
                "move": "Aurora Veil"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Panjyamon X",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "266",
        "name": "Kotemon",
                "types": [
            "Fighting"
        ],
        "ability": "Battle Armor",
        "hiddenAbility": "Sharpness",
        "evoMove": "Branch Poke",
        "moves": [
            {
                "level": "6",
                "move": "Spark"
            },
            {
                "level": "9",
                "move": "Focus Energy"
            },
            {
                "level": "12",
                "move": "Fury Swipes"
            },
            {
                "level": "15",
                "move": "Smart Strike"
            },
            {
                "level": "18",
                "move": "Leaf Blade"
            }
        ],
        "locations": [
            "Route 116"
        ],
        "prev": [],
        "next": [
            {
                "name": "Dinohumon",
                "method": "Lv18 Amped"
            },
            {
                "name": "Musyamon",
                "method": "Lv18 Lowkey"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "267",
        "name": "Dinohumon",
                "types": [
            "Dragon",
            "Fighting"
        ],
        "ability": "Dancer",
        "hiddenAbility": "Infiltrator",
        "evoMove": "Leaf Blade",
        "moves": [
            {
                "level": "19",
                "move": "Steel Blade"
            },
            {
                "level": "21",
                "move": "Dragon Dance"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Dragon Claw"
            },
            {
                "level": "29",
                "move": "Swords Dance"
            },
            {
                "level": "32",
                "move": "Dual Wield"
            }
        ],
        "locations": [
            "Route 103 (Part 2)",
            "Route 114"
        ],
        "prev": [
            {
                "name": "Kotemon",
                "method": "Lv18 Amped"
            }
        ],
        "next": [
            {
                "name": "Knightmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "268",
        "name": "Knightmon",
                "types": [
            "Fighting",
            "Holy"
        ],
        "ability": "Steelworker",
        "hiddenAbility": "Justified",
        "evoMove": "Excalibur",
        "moves": [
            {
                "level": "36",
                "move": "Sacred Sword"
            },
            {
                "level": "39",
                "move": "Air Slash"
            },
            {
                "level": "41",
                "move": "Excalibur"
            },
            {
                "level": "44",
                "move": "Iron Head"
            },
            {
                "level": "47",
                "move": "Wide Guard"
            },
            {
                "level": "50",
                "move": "Follow Me"
            },
            {
                "level": "53",
                "move": "Body Press"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Dinohumon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "LordKnightmon",
                "method": "Lv54"
            },
            {
                "name": "Craniummon",
                "method": "Malicious Armor"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "269",
        "name": "LordKnightmon",
                "types": [
            "Fighting",
            "Holy"
        ],
        "ability": "Steelworker",
        "hiddenAbility": "Justified",
        "evoMove": "Meteor Mash",
        "moves": [
            {
                "level": "55",
                "move": "Dynamic Punch"
            },
            {
                "level": "56",
                "move": "Instruct"
            },
            {
                "level": "59",
                "move": "Divine Breaker"
            },
            {
                "level": "62",
                "move": "Steel Roller"
            },
            {
                "level": "65",
                "move": "Earthquake"
            },
            {
                "level": "68",
                "move": "Close Combat"
            },
            {
                "level": "71",
                "move": "Punishment"
            },
            {
                "level": "74",
                "move": "Gigaton Hammer"
            },
            {
                "level": "77",
                "move": "Play Rough"
            },
            {
                "level": "80",
                "move": "Meteor Assault"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Knightmon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "270",
        "name": "Craniummon",
                "types": [
            "Magic",
            "Holy"
        ],
        "ability": "Magic Bounce",
        "hiddenAbility": "Sturdy",
        "evoMove": "King's Shield",
        "moves": [
            {
                "level": "55",
                "move": "Behemoth Blade"
            },
            {
                "level": "56",
                "move": "Divine Braker"
            },
            {
                "level": "59",
                "move": "Cosmic Power"
            },
            {
                "level": "62",
                "move": "Brute Wall"
            },
            {
                "level": "65",
                "move": "Earthquake"
            },
            {
                "level": "68",
                "move": "Close Combat"
            },
            {
                "level": "71",
                "move": "Punishment"
            },
            {
                "level": "74",
                "move": "Devil Sword"
            },
            {
                "level": "77",
                "move": "Grand Cross"
            },
            {
                "level": "80",
                "move": "Meteor Assault"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Knightmon",
                "method": "Malicious Armor"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "271",
        "name": "Musyamon",
                "types": [
            "Undead",
            "Fighting"
        ],
        "ability": "Battle Armor",
        "hiddenAbility": "Sharpness",
        "evoMove": "Drain Slash",
        "moves": [
            {
                "level": "19",
                "move": "Retaliate"
            },
            {
                "level": "21",
                "move": "Steel Blade"
            },
            {
                "level": "23",
                "move": "Curse"
            },
            {
                "level": "26",
                "move": "Phantom Force"
            },
            {
                "level": "29",
                "move": "Bitter Blade"
            },
            {
                "level": "32",
                "move": "Cut"
            }
        ],
        "locations": [
            "Granite Cave",
            "Route 121",
            "Mt Pyre"
        ],
        "prev": [
            {
                "name": "Kotemon",
                "method": "Lv18 Lowkey"
            }
        ],
        "next": [
            {
                "name": "Oboromon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "272",
        "name": "Oboromon",
                "types": [
            "Undead",
            "Fighting"
        ],
        "ability": "Sword of Ruin",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Rashomon",
        "moves": [
            {
                "level": "33",
                "move": "Soul Chopper"
            },
            {
                "level": "36",
                "move": "Sacred Sword"
            },
            {
                "level": "39",
                "move": "Wrap"
            },
            {
                "level": "41",
                "move": "Swords Dance"
            },
            {
                "level": "44",
                "move": "Ghost Dive"
            },
            {
                "level": "47",
                "move": "Will-o Wisp"
            },
            {
                "level": "50",
                "move": "Soul Predator"
            },
            {
                "level": "53",
                "move": "Sucker Punch"
            }
        ],
        "locations": [
            "Route 113"
        ],
        "prev": [
            {
                "name": "Musyamon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Gaiomon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "273",
        "name": "Gaiomon",
                "types": [
            "Undead",
            "Fighting"
        ],
        "ability": "Sword of Ruin",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Rinkazan",
        "moves": [
            {
                "level": "55",
                "move": "Air Slash"
            },
            {
                "level": "56",
                "move": "Brave Tornado"
            },
            {
                "level": "59",
                "move": "Parting Shot"
            },
            {
                "level": "62",
                "move": "Cross Chop"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Laser Focus"
            },
            {
                "level": "71",
                "move": "Dragon Rush"
            },
            {
                "level": "74",
                "move": "Flare Blitz"
            },
            {
                "level": "77",
                "move": "Astral Barrage"
            },
            {
                "level": "80",
                "move": "Guillotine"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Oboromon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "274",
        "name": "Bearmon",
                "types": [
            "Fighting"
        ],
        "ability": "Hustle",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Karate Chop",
        "moves": [
            {
                "level": "6",
                "move": "Defense Curl"
            },
            {
                "level": "8",
                "move": "Bulk Up"
            },
            {
                "level": "12",
                "move": "Rock Smash"
            },
            {
                "level": "15",
                "move": "Seismic Toss"
            },
            {
                "level": "18",
                "move": "Mach Punch"
            }
        ],
        "locations": [
            "Route 104"
        ],
        "prev": [],
        "next": [
            {
                "name": "Grizzlymon",
                "method": "Lv18 Amped"
            },
            {
                "name": "Dorulumon",
                "method": "Lv18 Lowkey"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "275",
        "name": "Grizzlymon",
                "types": [
            "Ground",
            "Fighting"
        ],
        "ability": "Hustle",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Bulldoze",
        "moves": [
            {
                "level": "19",
                "move": "Body Press"
            },
            {
                "level": "21",
                "move": "Rock Blast"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Vital Throw"
            },
            {
                "level": "29",
                "move": "Stomping Tantrum"
            },
            {
                "level": "31",
                "move": "Hammer Rush"
            },
            {
                "level": "32",
                "move": "Rock Slide"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Bearmon",
                "method": "Lv18 Amped"
            }
        ],
        "next": [
            {
                "name": "GreatGryzzlymon",
                "method": "Lv. 32"
            },
            {
                "name": "GrapLeomon",
                "method": "Hammer Rush"
            },
            {
                "name": "GreatGryzzlymon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "276",
        "name": "GreatGryzzlymon",
                "types": [
            "Fighting",
            "Dark"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Mold Breaker",
        "evoMove": "Brick Break",
        "moves": [
            {
                "level": "34",
                "move": "Submission"
            },
            {
                "level": "36",
                "move": "Poison Gas"
            },
            {
                "level": "39",
                "move": "Powder"
            },
            {
                "level": "41",
                "move": "Sucker Punch"
            },
            {
                "level": "44",
                "move": "Stomping Tantrum"
            },
            {
                "level": "47",
                "move": "Sizzly Slide"
            },
            {
                "level": "50",
                "move": "Cross Chop"
            },
            {
                "level": "53",
                "move": "Wicked Blow"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Grizzlymon",
                "method": "Lv. 32"
            }
        ],
        "next": [
            {
                "name": "Callismon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "277",
        "name": "Callismon",
                "types": [
            "Fighting",
            "Dark"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Mold Breaker",
        "evoMove": "Double Impact",
        "moves": [
            {
                "level": "55",
                "move": "False Surrender"
            },
            {
                "level": "56",
                "move": "Parting Shot"
            },
            {
                "level": "59",
                "move": "Genocide Rain"
            },
            {
                "level": "62",
                "move": "Hammer Arm"
            },
            {
                "level": "65",
                "move": "Earthquake"
            },
            {
                "level": "69",
                "move": "Dire Claw"
            },
            {
                "level": "71",
                "move": "Dynamic Punch"
            },
            {
                "level": "74",
                "move": "Belly Drum"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "GreatGryzzlymon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "278",
        "name": "Dorulumon",
                "types": [
            "Ground",
            "Steel"
        ],
        "ability": "Sand Rush",
        "hiddenAbility": "Infiltrator",
        "evoMove": "Drill Buster",
        "moves": [
            {
                "level": "21",
                "move": "Spike Cannon"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Evil Bite"
            },
            {
                "level": "29",
                "move": "Stomping Tantrum"
            },
            {
                "level": "30",
                "move": "Aerial Ace"
            },
            {
                "level": "31",
                "move": "King's Shield"
            }
        ],
        "locations": [
            "Route 111"
        ],
        "prev": [
            {
                "name": "Bearmon",
                "method": "Lv18 Lowkey"
            }
        ],
        "next": [
            {
                "name": "Mihiramon",
                "method": "Lv32"
            },
            {
                "name": "YaegerDorulumon",
                "method": "King's Shield"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "279",
        "name": "YaegerDorulumon",
                "types": [
            "Ground",
            "Steel"
        ],
        "ability": "Super Luck",
        "hiddenAbility": "Infiltrator",
        "evoMove": "Titan Drill",
        "moves": [
            {
                "level": "33",
                "move": "Spiky Shield"
            },
            {
                "level": "36",
                "move": "Iron Head"
            },
            {
                "level": "39",
                "move": "Brick Break"
            },
            {
                "level": "41",
                "move": "Iron Defense"
            },
            {
                "level": "44",
                "move": "Hyper Drill"
            },
            {
                "level": "47",
                "move": "Iron Tail"
            },
            {
                "level": "50",
                "move": "Cross Chop"
            },
            {
                "level": "53",
                "move": "Laser Focus"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Dorulumon",
                "method": "King's Shield"
            }
        ],
        "next": [
            {
                "name": "Duftmon",
                "method": "Malicious Armor"
            },
            {
                "name": "Mercurimon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "280",
        "name": "Mercurimon",
                "types": [
            "Fighting",
            "Undead"
        ],
        "ability": "Speed Boost",
        "hiddenAbility": "Infiltrator",
        "evoMove": "Close Combat",
        "moves": [
            {
                "level": "55",
                "move": "Astral Barrage"
            },
            {
                "level": "56",
                "move": "Double Team"
            },
            {
                "level": "59",
                "move": "Detect"
            },
            {
                "level": "62",
                "move": "Sacred Sword"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Phantom Force"
            },
            {
                "level": "71",
                "move": "Fake Out"
            },
            {
                "level": "74",
                "move": "Necro Magic"
            },
            {
                "level": "77",
                "move": "Substitute"
            },
            {
                "level": "80",
                "move": "Meteor Assault"
            }
        ],
        "locations": [
            "Mirage Tower"
        ],
        "prev": [
            {
                "name": "YaegerDorulumon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "281",
        "name": "Duftmon",
                "types": [
            "Fighting",
            "Holy"
        ],
        "ability": "Telepathy",
        "hiddenAbility": "Infiltrator",
        "evoMove": "Vulcan Crush",
        "moves": [
            {
                "level": "55",
                "move": "Swords Dance"
            },
            {
                "level": "56",
                "move": "Instruct"
            },
            {
                "level": "59",
                "move": "Spotlight"
            },
            {
                "level": "62",
                "move": "Close Combat"
            },
            {
                "level": "65",
                "move": "Lock-On"
            },
            {
                "level": "68",
                "move": "Edens Jabelin"
            },
            {
                "level": "71",
                "move": "Divine Breaker"
            },
            {
                "level": "74",
                "move": "Thousand Arrows"
            },
            {
                "level": "77",
                "move": "Sandstorm"
            },
            {
                "level": "80",
                "move": "Meteor Assault"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "YaegerDorulumon",
                "method": "Malicious Armor"
            }
        ],
        "next": [
            {
                "name": "Duftmon Leopard",
                "method": "Vulcan Crush"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "282",
        "name": "Mihiramon",
                "types": [
            "Ground",
            "Fighting"
        ],
        "ability": "Speed Boost",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Iron Tail",
        "moves": [
            {
                "level": "33",
                "move": "Earth Power"
            },
            {
                "level": "36",
                "move": "Wing Attack"
            },
            {
                "level": "39",
                "move": "Evil Bite"
            },
            {
                "level": "41",
                "move": "Agility"
            },
            {
                "level": "44",
                "move": "Iron Head"
            },
            {
                "level": "47",
                "move": "Earthquake"
            },
            {
                "level": "50",
                "move": "Sacred Sword"
            },
            {
                "level": "53",
                "move": "Extreme Speed"
            }
        ],
        "locations": [
            "Mirage Tower (Fossil)"
        ],
        "prev": [
            {
                "name": "Dorulumon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Baihumon",
                "method": "Biakko Core"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "283",
        "name": "Baihumon",
                "types": [
            "Steel",
            "Fighting"
        ],
        "ability": "Steelworker",
        "hiddenAbility": "Tough Claws",
        "evoMove": "Kongou",
        "moves": [
            {
                "level": "53",
                "move": "Hyper Voice"
            },
            {
                "level": "56",
                "move": "Close Combat"
            },
            {
                "level": "59",
                "move": "King's Shield"
            },
            {
                "level": "62",
                "move": "Meteor Mash"
            },
            {
                "level": "65",
                "move": "Metal Sound"
            },
            {
                "level": "68",
                "move": "Steel Roller"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Precipice Blades"
            },
            {
                "level": "77",
                "move": "Steel Beam"
            },
            {
                "level": "80",
                "move": "Guillotine"
            }
        ],
        "locations": [
            "Route 121 Ancient Tomb"
        ],
        "prev": [
            {
                "name": "Mihiramon",
                "method": "Biakko Core"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "284",
        "name": "Zubamon",
                "types": [
            "Steel"
        ],
        "ability": "Sharpness",
        "hiddenAbility": "Super Luck",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Sharpen"
            },
            {
                "level": "12",
                "move": "Focus Energy"
            },
            {
                "level": "15",
                "move": "Smart Strike"
            },
            {
                "level": "18",
                "move": "Quick Attack"
            }
        ],
        "locations": [
            "Route 116",
            "Rusturf Tunnel"
        ],
        "prev": [],
        "next": [
            {
                "name": "ZubaEagermon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "285",
        "name": "ZubaEagermon",
                "types": [
            "Steel"
        ],
        "ability": "Sharpness",
        "hiddenAbility": "Super Luck",
        "evoMove": "Steel Blade",
        "moves": [
            {
                "level": "19",
                "move": "Fury Cutter"
            },
            {
                "level": "21",
                "move": "Helping Hand"
            },
            {
                "level": "23",
                "move": "Rapid Spin"
            },
            {
                "level": "26",
                "move": "Knife Spiral"
            },
            {
                "level": "29",
                "move": "Retaliate"
            },
            {
                "level": "32",
                "move": "Aerial Ace"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Zubamon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Duramon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "286",
        "name": "Duramon",
                "types": [
            "Steel"
        ],
        "ability": "Sharpness",
        "hiddenAbility": "Super Luck",
        "evoMove": "Dual Wield",
        "moves": [
            {
                "level": "33",
                "move": "Swords Dance"
            },
            {
                "level": "36",
                "move": "Sacred Sword"
            },
            {
                "level": "39",
                "move": "Bitter Blade"
            },
            {
                "level": "41",
                "move": "X-Scissor"
            },
            {
                "level": "44",
                "move": "Spell Sword"
            },
            {
                "level": "47",
                "move": "Devil Sword"
            },
            {
                "level": "50",
                "move": "Excalibur"
            },
            {
                "level": "53",
                "move": "Air Slash"
            }
        ],
        "locations": [
            "Victory Road F1"
        ],
        "prev": [
            {
                "name": "ZubaEagermon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Durandamon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "287",
        "name": "Durandamon",
                "types": [
            "Steel"
        ],
        "ability": "Sharpness",
        "hiddenAbility": "Super Luck",
        "evoMove": "Behemoth Blade",
        "moves": [
            {
                "level": "55",
                "move": "Sharp Claymore"
            },
            {
                "level": "56",
                "move": "Demon Katana"
            },
            {
                "level": "59",
                "move": "Stone Edge"
            },
            {
                "level": "62",
                "move": "Fenrir Sword"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Magic Blade"
            },
            {
                "level": "71",
                "move": "Guillotine"
            },
            {
                "level": "74",
                "move": "Gran Del Sol"
            },
            {
                "level": "77",
                "move": "Bitter Blade"
            },
            {
                "level": "80",
                "move": "Omega Blade"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Duramon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "RagnaLoardmon",
                "method": "Jogress BryweLudramon"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "288",
        "name": "RagnaLoardmon",
                "types": [
            "Steel",
            "Fire"
        ],
        "ability": "Stance Change",
        "hiddenAbility": "",
        "evoMove": "King's Shield",
        "moves": [
            {
                "level": "83",
                "move": "Sacred Fire"
            },
            {
                "level": "86",
                "move": "Omega Blade"
            },
            {
                "level": "89",
                "move": "Dynamax Cannon"
            },
            {
                "level": "92",
                "move": "Hyper Beam"
            },
            {
                "level": "95",
                "move": "Dual Edge Flow"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Durandamon",
                "method": "Jogress BryweLudramon"
            },
            {
                "name": "BryweLudramon",
                "method": "Durandamon Jogress"
            }
        ],
        "next": [],
        "stage": "Ultra",
        "cardLevel": 7
    },
    {
        "id": "289",
        "name": "Ludomon",
                "types": [
            "Steel"
        ],
        "ability": "Bulletproof",
        "hiddenAbility": "Magic Guard",
        "evoMove": "Sonic Jab",
        "moves": [
            {
                "level": "6",
                "move": "Protect"
            },
            {
                "level": "9",
                "move": "Harden"
            },
            {
                "level": "12",
                "move": "Flame Charge"
            },
            {
                "level": "15",
                "move": "Metal Claw"
            },
            {
                "level": "18",
                "move": "Headbutt"
            }
        ],
        "locations": [
            "Route 116",
            "Rusturf Tunnel"
        ],
        "prev": [],
        "next": [
            {
                "name": "TiaLudomon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "290",
        "name": "TiaLudomon",
                "types": [
            "Steel",
            "Ice"
        ],
        "ability": "Bulletproof",
        "hiddenAbility": "Magic Guard",
        "evoMove": "Wide Guard",
        "moves": [
            {
                "level": "19",
                "move": "Iron Defense"
            },
            {
                "level": "21",
                "move": "Bullet Punch"
            },
            {
                "level": "23",
                "move": "Follow Me"
            },
            {
                "level": "26",
                "move": "Aurora Freeze"
            },
            {
                "level": "29",
                "move": "Reflect"
            },
            {
                "level": "32",
                "move": "Light Screen"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Ludomon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "RaijiLudomon",
                "method": "Lv32 (Corrected from RiaLudomon)"
            },
            {
                "name": "RaijiLudomon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "291",
        "name": "RaijiLudomon",
                "types": [
            "Steel",
            "Electric"
        ],
        "ability": "Bulletproof",
        "hiddenAbility": "Magic Guard",
        "evoMove": "Thunder Punch",
        "moves": [
            {
                "level": "33",
                "move": "Safeguard"
            },
            {
                "level": "36",
                "move": "Giga Destroyer"
            },
            {
                "level": "39",
                "move": "Thunder Wave"
            },
            {
                "level": "41",
                "move": "Baton Pass"
            },
            {
                "level": "44",
                "move": "Cosmic Power"
            },
            {
                "level": "47",
                "move": "Electric Cloud"
            },
            {
                "level": "50",
                "move": "Dual Wield"
            },
            {
                "level": "53",
                "move": "Wide Guard"
            }
        ],
        "locations": [
            "Victory Road F1"
        ],
        "prev": [
            {
                "name": "TiaLudomon",
                "method": "Lv32 (Corrected from RiaLudomon)"
            }
        ],
        "next": [
            {
                "name": "BryweLudramon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "292",
        "name": "BryweLudramon",
                "types": [
            "Steel",
            "Fire"
        ],
        "ability": "Bulletproof",
        "hiddenAbility": "Magic Guard",
        "evoMove": "King's Shield",
        "moves": [
            {
                "level": "55",
                "move": "Burning Bulwark"
            },
            {
                "level": "56",
                "move": "Meltdown"
            },
            {
                "level": "59",
                "move": "Dragon Pulse"
            },
            {
                "level": "62",
                "move": "Meteor Mash"
            },
            {
                "level": "65",
                "move": "Cosmic Power"
            },
            {
                "level": "68",
                "move": "Dragon Rush"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Flare Blitz"
            },
            {
                "level": "77",
                "move": "Sunny Day"
            },
            {
                "level": "80",
                "move": "Sacred Fire"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "RaijiLudomon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "RagnaLoardmon",
                "method": "Durandamon Jogress"
            },
            {
                "name": "RagnaLoardmon",
                "method": "Jogress Durandamon"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "293",
        "name": "Dracomon",
                "types": [
            "Dragon"
        ],
        "ability": "Adaptability",
        "hiddenAbility": "Multiscale",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Dragon Rage"
            },
            {
                "level": "12",
                "move": "Gust"
            },
            {
                "level": "18",
                "move": "Mega Flame"
            }
        ],
        "locations": [
            "Route 116",
            "Rusturf Tunnel",
            "Granite Cave"
        ],
        "prev": [],
        "next": [
            {
                "name": "CoreDramon Blue",
                "method": "Lv18 Lowkey"
            },
            {
                "name": "Coredramon Green",
                "method": "Lv18 Amped"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "294",
        "name": "CoreDramon Blue",
                "types": [
            "Dragon",
            "Flying"
        ],
        "ability": "Adaptability",
        "hiddenAbility": "Multiscale",
        "evoMove": "Wing Attack",
        "moves": [
            {
                "level": "19",
                "move": "Fire Fang"
            },
            {
                "level": "21",
                "move": "Dual Chop"
            },
            {
                "level": "23",
                "move": "Dragon Dance"
            },
            {
                "level": "26",
                "move": "Tornado"
            },
            {
                "level": "29",
                "move": "Master Fire"
            },
            {
                "level": "32",
                "move": "Dragon Breath"
            }
        ],
        "locations": [
            "Granite Cave F4",
            "Fiery Path",
            "Meteor Falls"
        ],
        "prev": [
            {
                "name": "Dracomon",
                "method": "Lv18 Lowkey"
            }
        ],
        "next": [
            {
                "name": "Wingdramon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "295",
        "name": "Wingdramon",
                "types": [
            "Dragon",
            "Flying"
        ],
        "ability": "Adaptability",
        "hiddenAbility": "Multiscale",
        "evoMove": "Brave Bird",
        "moves": [
            {
                "level": "33",
                "move": "Dragon Pulse"
            },
            {
                "level": "36",
                "move": "Extreme Speed"
            },
            {
                "level": "39",
                "move": "Agility"
            },
            {
                "level": "41",
                "move": "Ultra Turbulence"
            },
            {
                "level": "44",
                "move": "Dragon Claw"
            },
            {
                "level": "47",
                "move": "Tailwind"
            },
            {
                "level": "50",
                "move": "Meltdown"
            },
            {
                "level": "53",
                "move": "Evil Bite"
            }
        ],
        "locations": [
            "Route 112",
            "Jagged Pass",
            "Victory Road F2"
        ],
        "prev": [
            {
                "name": "CoreDramon Blue",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Slayerdramon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "296",
        "name": "Slayerdramon",
                "types": [
            "Dragon",
            "Flying"
        ],
        "ability": "Adaptability",
        "hiddenAbility": "Multiscale",
        "evoMove": "Tenryuzanha",
        "moves": [
            {
                "level": "55",
                "move": "Aeroblast"
            },
            {
                "level": "56",
                "move": "Swords Dance"
            },
            {
                "level": "59",
                "move": "Counter"
            },
            {
                "level": "62",
                "move": "Behemoth Blade"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Dragon Rush"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Outrage"
            },
            {
                "level": "77",
                "move": "Dragon Ascent"
            },
            {
                "level": "80",
                "move": "Draco Meteor"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Wingdramon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Examon",
                "method": "Jogress Breakdramon"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "297",
        "name": "Coredramon Green",
                "types": [
            "Dragon",
            "Ground"
        ],
        "ability": "Adaptability",
        "hiddenAbility": "Multiscale",
        "evoMove": "Bulldoze",
        "moves": [
            {
                "level": "19",
                "move": "Fire Fang"
            },
            {
                "level": "21",
                "move": "Dual Chop"
            },
            {
                "level": "23",
                "move": "Dragon Dance"
            },
            {
                "level": "26",
                "move": "Stomping Tantrum"
            },
            {
                "level": "29",
                "move": "Master Fire"
            },
            {
                "level": "32",
                "move": "Dragon Breath"
            }
        ],
        "locations": [
            "Granite Cave F4",
            "Fiery Path",
            "Meteor Falls"
        ],
        "prev": [
            {
                "name": "Dracomon",
                "method": "Lv18 Amped"
            }
        ],
        "next": [
            {
                "name": "Groundramon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "298",
        "name": "Groundramon",
                "types": [
            "Dragon",
            "Ground"
        ],
        "ability": "Adaptability",
        "hiddenAbility": "Multiscale",
        "evoMove": "Iron Tail",
        "moves": [
            {
                "level": "33",
                "move": "Dragon Claw"
            },
            {
                "level": "36",
                "move": "Titan Drill"
            },
            {
                "level": "39",
                "move": "Bulk Up"
            },
            {
                "level": "41",
                "move": "Earth Power"
            },
            {
                "level": "44",
                "move": "Dragon Pulse"
            },
            {
                "level": "47",
                "move": "Sandstorm"
            },
            {
                "level": "50",
                "move": "Meltdown"
            },
            {
                "level": "53",
                "move": "Evil Bite"
            }
        ],
        "locations": [
            "Rusturf Tunnel",
            "Route 112",
            "Magma Hideout"
        ],
        "prev": [
            {
                "name": "Coredramon Green",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Breakdramon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "299",
        "name": "Breakdramon",
                "types": [
            "Dragon",
            "Ground"
        ],
        "ability": "Adaptability",
        "hiddenAbility": "Multiscale",
        "evoMove": "Hyper Drill",
        "moves": [
            {
                "level": "55",
                "move": "Heavy Slam"
            },
            {
                "level": "56",
                "move": "Swords Dance"
            },
            {
                "level": "59",
                "move": "Dragon Rush"
            },
            {
                "level": "62",
                "move": "Behemoth Bash"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Draco Meteor"
            },
            {
                "level": "71",
                "move": "Roar"
            },
            {
                "level": "74",
                "move": "Outrage"
            },
            {
                "level": "77",
                "move": "Land's Wrath"
            },
            {
                "level": "80",
                "move": "Dragon Energy"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Groundramon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Examon",
                "method": "Slayerdramon Jogress"
            },
            {
                "name": "Examon",
                "method": "Jogress Slayerdramon"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "300",
        "name": "Examon",
                "types": [
            "Dragon"
        ],
        "ability": "Adaptability",
        "hiddenAbility": "Multiscale",
        "evoMove": "Avalon Gate",
        "moves": [
            {
                "level": "83",
                "move": "Whirlwind"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Slayerdramon",
                "method": "Jogress Breakdramon"
            },
            {
                "name": "Breakdramon",
                "method": "Slayerdramon Jogress"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "301",
        "name": "Vorvomon",
                "types": [
            "Rock",
            "Fire"
        ],
        "ability": "Steam Engine",
        "hiddenAbility": "Flash Fire",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Rock Throw"
            },
            {
                "level": "9",
                "move": "Bite"
            },
            {
                "level": "12",
                "move": "Flame Charge"
            },
            {
                "level": "15",
                "move": "Rock Blast"
            },
            {
                "level": "18",
                "move": "Headbutt"
            }
        ],
        "locations": [
            "Route 116",
            "Route 111",
            "Route 112",
            "Fiery Path"
        ],
        "prev": [],
        "next": [
            {
                "name": "Lavorvomon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "302",
        "name": "Lavorvomon",
                "types": [
            "Rock",
            "Fire"
        ],
        "ability": "Steam Engine",
        "hiddenAbility": "Flash Fire",
        "evoMove": "Mega Flame",
        "moves": [
            {
                "level": "19",
                "move": "Headbutt"
            },
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Stomping Tantrum"
            },
            {
                "level": "26",
                "move": "Fire Fang"
            },
            {
                "level": "29",
                "move": "Fire Spin"
            },
            {
                "level": "32",
                "move": "Rock Tomb"
            }
        ],
        "locations": [
            "Route 111",
            "Route 113"
        ],
        "prev": [
            {
                "name": "Vorvomon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Lavogaritamon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "303",
        "name": "Lavogaritamon",
                "types": [
            "Rock",
            "Fire"
        ],
        "ability": "Steam Engine",
        "hiddenAbility": "Flash Fire",
        "evoMove": "Heat Wave",
        "moves": [
            {
                "level": "33",
                "move": "Wing Attack"
            },
            {
                "level": "36",
                "move": "Rock Slide"
            },
            {
                "level": "39",
                "move": "Titan Drill"
            },
            {
                "level": "44",
                "move": "Meltdown"
            },
            {
                "level": "47",
                "move": "Tornado"
            },
            {
                "level": "50",
                "move": "Stone Edge"
            },
            {
                "level": "53",
                "move": "Meteor Wing"
            }
        ],
        "locations": [
            "Route 111",
            "Jagged Pass"
        ],
        "prev": [
            {
                "name": "Lavorvomon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Volcanicdramon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "304",
        "name": "Volcanicdramon",
                "types": [
            "Rock",
            "Fire"
        ],
        "ability": "Steam Engine",
        "hiddenAbility": "Flash Fire",
        "evoMove": "Eruption",
        "moves": [
            {
                "level": "55",
                "move": "Brave Bird"
            },
            {
                "level": "56",
                "move": "Head Smash"
            },
            {
                "level": "59",
                "move": "Stone Axe"
            },
            {
                "level": "62",
                "move": "Steam Eruption"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Raging Fury"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Flare Blitz"
            },
            {
                "level": "77",
                "move": "Meteor Beam"
            },
            {
                "level": "80",
                "move": "Burning Jealousy"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Lavogaritamon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "305",
        "name": "Tyrannomon",
                "types": [
            "Fire"
        ],
        "ability": "Blaze",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Fire Fang",
        "moves": [
            {
                "level": "19",
                "move": "Dual Chop"
            },
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Mega Flame"
            },
            {
                "level": "29",
                "move": "Rock Smash"
            },
            {
                "level": "31",
                "move": "Scale Shot"
            }
        ],
        "locations": [
            "Granite Cave F4",
            "Route 111"
        ],
        "prev": [
            {
                "name": "Betamon",
                "method": "Attack > Defense"
            }
        ],
        "next": [
            {
                "name": "MasterTyrannomon",
                "method": "Lv32"
            },
            {
                "name": "DarkTyrannomon",
                "method": "Dark Data"
            },
            {
                "name": "ExTyrannomon",
                "method": "Cute Plush"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "306",
        "name": "MasterTyrannomon",
                "types": [
            "Fire",
            "Dragon"
        ],
        "ability": "Blaze",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Meltdown",
        "moves": [
            {
                "level": "33",
                "move": "Fire Spin"
            },
            {
                "level": "36",
                "move": "Dragon Claw"
            },
            {
                "level": "39",
                "move": "Heat Wave"
            },
            {
                "level": "41",
                "move": "Dragon Dance"
            },
            {
                "level": "44",
                "move": "Head Smash"
            },
            {
                "level": "47",
                "move": "Fire Tower"
            },
            {
                "level": "50",
                "move": "Evil Bite"
            },
            {
                "level": "53",
                "move": "Dragon Pulse"
            }
        ],
        "locations": [
            "Fiery Path",
            "Route 113",
            "Victory Road F1"
        ],
        "prev": [
            {
                "name": "Tyrannomon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Dinomon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "307",
        "name": "Dinomon",
                "types": [
            "Fire",
            "Dragon"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Dragon Energy",
        "moves": [
            {
                "level": "55",
                "move": "Raging Fury"
            },
            {
                "level": "56",
                "move": "Close Combat"
            },
            {
                "level": "59",
                "move": "Sunny Day"
            },
            {
                "level": "62",
                "move": "Outrage"
            },
            {
                "level": "65",
                "move": "Pyro Ball"
            },
            {
                "level": "68",
                "move": "Magma Storm"
            },
            {
                "level": "71",
                "move": "Draco Meteor"
            },
            {
                "level": "74",
                "move": "Precipice Blades"
            },
            {
                "level": "77",
                "move": "Sacred Fire"
            },
            {
                "level": "80",
                "move": "Infinity Burn"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "MasterTyrannomon",
                "method": "Lv54"
            },
            {
                "name": "ExTyrannomon",
                "method": "Dragon Pulse"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "308",
        "name": "Jazamon",
                "types": [
            "Steel",
            "Flying"
        ],
        "ability": "Wind Rider",
        "hiddenAbility": "Speed Boost",
        "evoMove": "Peck",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Sharpen"
            },
            {
                "level": "12",
                "move": "Metal Claw"
            },
            {
                "level": "15",
                "move": "Aerial Ace"
            },
            {
                "level": "18",
                "move": "Quick Attack"
            }
        ],
        "locations": [
            "Route 116",
            "Route 111",
            "Route 112"
        ],
        "prev": [],
        "next": [
            {
                "name": "Jazardmon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "309",
        "name": "Jazardmon",
                "types": [
            "Steel",
            "Flying"
        ],
        "ability": "Gale Wings",
        "hiddenAbility": "Speed Boost",
        "evoMove": "Gatling",
        "moves": [
            {
                "level": "19",
                "move": "Light Laser"
            },
            {
                "level": "21",
                "move": "Wing Attack"
            },
            {
                "level": "23",
                "move": "Autotomize"
            },
            {
                "level": "26",
                "move": "Spread Fire"
            },
            {
                "level": "29",
                "move": "Signal Beam"
            },
            {
                "level": "32",
                "move": "Tornado"
            }
        ],
        "locations": [
            "Route 114"
        ],
        "prev": [
            {
                "name": "Jazamon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Jazarichmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "310",
        "name": "Jazarichmon",
                "types": [
            "Steel",
            "Flying"
        ],
        "ability": "Gale Wings",
        "hiddenAbility": "Speed Boost",
        "evoMove": "Knife Spiral",
        "moves": [
            {
                "level": "33",
                "move": "Holy Blast"
            },
            {
                "level": "36",
                "move": "Air Slash"
            },
            {
                "level": "39",
                "move": "Extreme Speed"
            },
            {
                "level": "41",
                "move": "Shift Gear"
            },
            {
                "level": "44",
                "move": "Pulse Laser"
            },
            {
                "level": "47",
                "move": "Brave Bird"
            },
            {
                "level": "50",
                "move": "Power Gatling"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Jazardmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Metallicdramon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "311",
        "name": "Metallicdramon",
                "types": [
            "Steel",
            "Flying"
        ],
        "ability": "Gale Wings",
        "hiddenAbility": "Speed Boost",
        "evoMove": "Laser Cannon",
        "moves": [
            {
                "level": "55",
                "move": "Hurricane"
            },
            {
                "level": "56",
                "move": "Secret Sword"
            },
            {
                "level": "59",
                "move": "Laser Focus"
            },
            {
                "level": "62",
                "move": "Excalibur"
            },
            {
                "level": "65",
                "move": "Shift Gear"
            },
            {
                "level": "68",
                "move": "Dragon Rush"
            },
            {
                "level": "71",
                "move": "Prismatic Laser"
            },
            {
                "level": "74",
                "move": "Justice Beam"
            },
            {
                "level": "77",
                "move": "Aeroblast"
            },
            {
                "level": "80",
                "move": "Extreme Jihad"
            }
        ],
        "locations": [
            "Victory Road F2"
        ],
        "prev": [
            {
                "name": "Jazarichmon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "312",
        "name": "DarkTyrannomon",
                "types": [
            "Fire",
            "Dark"
        ],
        "ability": "Sheer Force",
        "hiddenAbility": "Berserk",
        "evoMove": "Fire Fang",
        "moves": [
            {
                "level": "19",
                "move": "Demon Claw"
            },
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Mega Flame"
            },
            {
                "level": "29",
                "move": "Evil Bite"
            },
            {
                "level": "32",
                "move": "Dual Chop"
            }
        ],
        "locations": [
            "Granite Cave F1"
        ],
        "prev": [
            {
                "name": "Tyrannomon",
                "method": "Dark Data"
            }
        ],
        "next": [
            {
                "name": "MetalTyrannomon",
                "method": "Lv32"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "313",
        "name": "MetalTyrannomon",
                "types": [
            "Steel",
            "Dark"
        ],
        "ability": "Sheer Force",
        "hiddenAbility": "Galvanize",
        "evoMove": "Giga Destroyer",
        "moves": [
            {
                "level": "33",
                "move": "Dark Pulse"
            },
            {
                "level": "36",
                "move": "Dragon Pulse"
            },
            {
                "level": "39",
                "move": "Meltdown"
            },
            {
                "level": "41",
                "move": "Shift Gear"
            },
            {
                "level": "44",
                "move": "Iron Tail"
            },
            {
                "level": "47",
                "move": "Fire Tower"
            },
            {
                "level": "50",
                "move": "Night Daze"
            },
            {
                "level": "53",
                "move": "Thunder Fang"
            }
        ],
        "locations": [
            "Old Mauville",
            "Victory Road F2"
        ],
        "prev": [
            {
                "name": "DarkTyrannomon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "RustTyranomon",
                "method": "Lv54"
            },
            {
                "name": "Mugendramon",
                "method": "Steel Data"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "314",
        "name": "RustTyranomon",
                "types": [
            "Steel",
            "Electric"
        ],
        "ability": "Sheer Force",
        "hiddenAbility": "Galvanize",
        "evoMove": "Electro Shot",
        "moves": [
            {
                "level": "55",
                "move": "Laser Cannon"
            },
            {
                "level": "56",
                "move": "Lock-On"
            },
            {
                "level": "59",
                "move": "Iron Defense"
            },
            {
                "level": "62",
                "move": "Wildbolt Storm"
            },
            {
                "level": "65",
                "move": "Electric Terrain"
            },
            {
                "level": "68",
                "move": "Heavy Slam"
            },
            {
                "level": "71",
                "move": "Fire Blast"
            },
            {
                "level": "74",
                "move": "Flare Blitz"
            },
            {
                "level": "77",
                "move": "Volt Tackle"
            },
            {
                "level": "80",
                "move": "Mugen Cannon"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "MetalTyrannomon",
                "method": "Lv54"
            },
            {
                "name": "ExTyrannomon",
                "method": "Thunder Cloud"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "315",
        "name": "Mugendramon",
                "types": [
            "Steel"
        ],
        "ability": "Supreme Overlord",
        "hiddenAbility": "Mega Launcher",
        "evoMove": "Mugen Cannon",
        "moves": [
            {
                "level": "55",
                "move": "Lock-On"
            },
            {
                "level": "56",
                "move": "Dragon Energy"
            },
            {
                "level": "59",
                "move": "Nasty Plot"
            },
            {
                "level": "62",
                "move": "Laser Focus"
            },
            {
                "level": "68",
                "move": "Electro Cannon"
            },
            {
                "level": "71",
                "move": "Dynamax Cannon"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "MetalTyrannomon",
                "method": "Steel Data"
            },
            {
                "name": "Megadramon",
                "method": "Lv70"
            },
            {
                "name": "MetalMamemon",
                "method": "Lv70"
            }
        ],
        "next": [
            {
                "name": "Millenniummon",
                "method": "Jogress Kimeramon"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "316",
        "name": "Phascomon",
                "types": [
            "Dark"
        ],
        "ability": "Comatose",
        "hiddenAbility": "",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Peck Flurry"
            },
            {
                "level": "9",
                "move": "Hypnosis"
            },
            {
                "level": "12",
                "move": "Feint Attack"
            },
            {
                "level": "15",
                "move": "Evil Darts"
            },
            {
                "level": "18",
                "move": "Wake-Up Slap"
            }
        ],
        "locations": [
            "Granite Cave F2/F3"
        ],
        "prev": [],
        "next": [
            {
                "name": "MadLeomon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "317",
        "name": "MadLeomon",
                "types": [
            "Dark",
            "Undead"
        ],
        "ability": "Berserk",
        "hiddenAbility": "Adaptability",
        "evoMove": "Cross Poison",
        "moves": [
            {
                "level": "19",
                "move": "Undead Bite"
            },
            {
                "level": "21",
                "move": "Rage"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Dire Claw"
            },
            {
                "level": "29",
                "move": "Rage Fist"
            },
            {
                "level": "32",
                "move": "Snarl"
            }
        ],
        "locations": [
            "Granite Cave F4"
        ],
        "prev": [
            {
                "name": "Phascomon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Astamon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "318",
        "name": "Astamon",
                "types": [
            "Dark"
        ],
        "ability": "Steelworker",
        "hiddenAbility": "Intimidate",
        "evoMove": "Spread Fire",
        "moves": [
            {
                "level": "33",
                "move": "Sucker Punch"
            },
            {
                "level": "36",
                "move": "Jump Kick"
            },
            {
                "level": "39",
                "move": "Power Trip"
            },
            {
                "level": "41",
                "move": "Nasty Plot"
            },
            {
                "level": "44",
                "move": "Night Daze"
            },
            {
                "level": "47",
                "move": "Spread Fire"
            },
            {
                "level": "50",
                "move": "High Jump Kick"
            },
            {
                "level": "53",
                "move": "Punishment"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "MadLeomon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Belphemon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "319",
        "name": "Belphemon",
                "types": [
            "Dark"
        ],
        "ability": "Slow Start",
        "hiddenAbility": "Slow Start",
        "evoMove": "Gift of Darkness",
        "moves": [
            {
                "level": "55",
                "move": "Rest"
            },
            {
                "level": "56",
                "move": "Snore"
            },
            {
                "level": "59",
                "move": "Fiery Wrath"
            },
            {
                "level": "62",
                "move": "Raging Fury"
            },
            {
                "level": "65",
                "move": "Raging Bull"
            },
            {
                "level": "68",
                "move": "Outrage"
            },
            {
                "level": "71",
                "move": "Roar"
            },
            {
                "level": "77",
                "move": "Sleep Talk"
            },
            {
                "level": "80",
                "move": "Hyperspace Fury"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Astamon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "320",
        "name": "KoDokugumon",
                "types": [
            "Bug",
            "Poison"
        ],
        "ability": "Poison Touch",
        "hiddenAbility": "Swarm",
        "evoMove": "Fell Stinger",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Bug Bite"
            },
            {
                "level": "12",
                "move": "Silk Thread"
            },
            {
                "level": "15",
                "move": "Acid"
            },
            {
                "level": "18",
                "move": "Beat Up"
            }
        ],
        "locations": [
            "Petalburg Woods",
            "Route 104"
        ],
        "prev": [],
        "next": [
            {
                "name": "Dokugumon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "321",
        "name": "Dokugumon",
                "types": [
            "Bug",
            "Poison"
        ],
        "ability": "Poison Touch",
        "hiddenAbility": "Swarm",
        "evoMove": "Poison Fang",
        "moves": [
            {
                "level": "19",
                "move": "Sticky Web"
            },
            {
                "level": "21",
                "move": "Signal Beam"
            },
            {
                "level": "23",
                "move": "Spider Web"
            },
            {
                "level": "26",
                "move": "Cross Poison"
            },
            {
                "level": "29",
                "move": "Silk Trap"
            },
            {
                "level": "32",
                "move": "Electroweb"
            }
        ],
        "locations": [
            "Route 111"
        ],
        "prev": [
            {
                "name": "KoDokugumon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Archnemon",
                "method": "Jogress Hudiemon"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "322",
        "name": "Archnemon",
                "types": [
            "Bug",
            "Poison"
        ],
        "ability": "Disguise",
        "hiddenAbility": "",
        "evoMove": "Spider Thread",
        "moves": [
            {
                "level": "33",
                "move": "Sucker Punch"
            },
            {
                "level": "36",
                "move": "Poison Jab"
            },
            {
                "level": "39",
                "move": "Infestation"
            },
            {
                "level": "41",
                "move": "Quiver Dance"
            },
            {
                "level": "44",
                "move": "Attack Order"
            },
            {
                "level": "47",
                "move": "Toxic"
            },
            {
                "level": "50",
                "move": "Defend Order"
            },
            {
                "level": "53",
                "move": "Sludge Bomb"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Dokugumon",
                "method": "Jogress Hudiemon"
            },
            {
                "name": "Hudiemon",
                "method": "Lv30"
            }
        ],
        "next": [
            {
                "name": "Parasimon",
                "method": "Unspecified"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "323",
        "name": "Parasimon",
                "types": [
            "Bug",
            "Poison"
        ],
        "ability": "Commander",
        "hiddenAbility": "Commander",
        "evoMove": "Thunder Cage",
        "moves": [
            {
                "level": "55",
                "move": "Acid Breath"
            },
            {
                "level": "56",
                "move": "Bug Nightmare"
            },
            {
                "level": "59",
                "move": "Baneful Bunker"
            },
            {
                "level": "62",
                "move": "Wildbolt Storm"
            },
            {
                "level": "65",
                "move": "Sludge Wave"
            },
            {
                "level": "68",
                "move": "Necrophobia"
            },
            {
                "level": "71",
                "move": "Helping Hand"
            },
            {
                "level": "74",
                "move": "Baton Pass"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Archnemon",
                "method": "Unspecified"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "324",
        "name": "Commandramon",
                "types": [
            "Steel",
            "Dragon"
        ],
        "ability": "Battle Armor",
        "hiddenAbility": "Long Reach",
        "evoMove": "Bite",
        "moves": [
            {
                "level": "6",
                "move": "Beat Up"
            },
            {
                "level": "9",
                "move": "Lock On"
            },
            {
                "level": "12",
                "move": "Pursuit"
            },
            {
                "level": "15",
                "move": "Gatling"
            },
            {
                "level": "18",
                "move": "Bomb Blast"
            }
        ],
        "locations": [
            "Route 116",
            "Route 120"
        ],
        "prev": [],
        "next": [
            {
                "name": "Hi-Commandramon",
                "method": "Lv18 Lowkey (Corrected"
            },
            {
                "name": "Sealsdramon",
                "method": "Lv18 Amped"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "325",
        "name": "Hi-Commandramon",
                "types": [
            "Steel",
            "Dragon"
        ],
        "ability": "Battle Armor",
        "hiddenAbility": "Long Reach",
        "evoMove": "Magnet Bomb",
        "moves": [
            {
                "level": "19",
                "move": "Protect"
            },
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Wall Rake"
            },
            {
                "level": "26",
                "move": "Power Gatling"
            },
            {
                "level": "29",
                "move": "Spread Fire"
            },
            {
                "level": "31",
                "move": "Camouflage"
            },
            {
                "level": "32",
                "move": "Scale Shot"
            }
        ],
        "locations": [
            "Route 110",
            "Route 120"
        ],
        "prev": [
            {
                "name": "Commandramon",
                "method": "Lv18 Lowkey (Corrected"
            },
            {
                "name": "Hi-Commandramon",
                "method": "original was  lv18)"
            }
        ],
        "next": [
            {
                "name": "Hi-Commandramon",
                "method": "original was  lv18)"
            },
            {
                "name": "Cargodramon",
                "method": "Lv32 (Corrected"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "326",
        "name": "Cargodramon",
                "types": [
            "Steel",
            "Dragon"
        ],
        "ability": "Levitate",
        "hiddenAbility": "Levitate",
        "evoMove": "Giga Destroyer",
        "moves": [
            {
                "level": "33",
                "move": "U-Turn"
            },
            {
                "level": "36",
                "move": "Tornado"
            },
            {
                "level": "39",
                "move": "Dragon Pulse"
            },
            {
                "level": "41",
                "move": "Shift Gear"
            },
            {
                "level": "44",
                "move": "Pulse Laser"
            },
            {
                "level": "47",
                "move": "Metal Sound"
            },
            {
                "level": "50",
                "move": "Meltdown"
            },
            {
                "level": "53",
                "move": "Fly"
            }
        ],
        "locations": [
            "Route 120"
        ],
        "prev": [
            {
                "name": "Hi-Commandramon",
                "method": "Lv32 (Corrected"
            },
            {
                "name": "Cargodramon",
                "method": "original was  lv32)"
            }
        ],
        "next": [
            {
                "name": "Cargodramon",
                "method": "original was  lv32)"
            },
            {
                "name": "Brigadramon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "327",
        "name": "Ghilliedhumon",
                "types": [
            "Dragon",
            "Fairy"
        ],
        "ability": "Sniper",
        "hiddenAbility": "Protean",
        "evoMove": "Phantom Force",
        "moves": [
            {
                "level": "33",
                "move": "Lock-On"
            },
            {
                "level": "36",
                "move": "Foresight"
            },
            {
                "level": "39",
                "move": "Snipe Shot"
            },
            {
                "level": "41",
                "move": "Laser Focus"
            },
            {
                "level": "44",
                "move": "Dragon Darts"
            },
            {
                "level": "47",
                "move": "Seed Bomb"
            },
            {
                "level": "50",
                "move": "Power Gatling"
            },
            {
                "level": "53",
                "move": "Laser Cannon"
            }
        ],
        "locations": [
            "Route 119",
            "Route 120"
        ],
        "prev": [],
        "next": [
            {
                "name": "Brigadramon",
                "method": "Lv54"
            },
            {
                "name": "Darkdramon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "328",
        "name": "Brigadramon",
                "types": [
            "Steel",
            "Dragon"
        ],
        "ability": "Battery",
        "hiddenAbility": "Steely Spirit",
        "evoMove": "Genocide Rain",
        "moves": [
            {
                "level": "55",
                "move": "Aura Sphere"
            },
            {
                "level": "56",
                "move": "Brave Tornado"
            },
            {
                "level": "59",
                "move": "King's Shield"
            },
            {
                "level": "62",
                "move": "Laser Focus"
            },
            {
                "level": "65",
                "move": "Steel Roller"
            },
            {
                "level": "68",
                "move": "Draco Meteor"
            },
            {
                "level": "71",
                "move": "Laser Cannon"
            },
            {
                "level": "74",
                "move": "Dragon Energy"
            },
            {
                "level": "77",
                "move": "Focus Blast"
            },
            {
                "level": "80",
                "move": "Mugen Cannon"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Cargodramon",
                "method": "Lv54"
            },
            {
                "name": "Ghilliedhumon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "329",
        "name": "Sealsdramon",
                "types": [
            "Steel",
            "Dragon"
        ],
        "ability": "Moxie",
        "hiddenAbility": "No Guard",
        "evoMove": "Feint Attack",
        "moves": [
            {
                "level": "19",
                "move": "Dual Chop"
            },
            {
                "level": "21",
                "move": "Knife Spiral"
            },
            {
                "level": "23",
                "move": "Shadow Sneak"
            },
            {
                "level": "26",
                "move": "Guillotine"
            },
            {
                "level": "29",
                "move": "Laser Focus"
            },
            {
                "level": "30",
                "move": "Camouflage"
            },
            {
                "level": "32",
                "move": "Demon Claw"
            }
        ],
        "locations": [
            "Meteor Falls",
            "Route 120"
        ],
        "prev": [
            {
                "name": "Commandramon",
                "method": "Lv18 Amped"
            }
        ],
        "next": [
            {
                "name": "Tankdramon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "330",
        "name": "Tankdramon",
                "types": [
            "Steel",
            "Dragon"
        ],
        "ability": "Bulletproof",
        "hiddenAbility": "Sturdy",
        "evoMove": "Power Gatling",
        "moves": [
            {
                "level": "33",
                "move": "Dragon Pulse"
            },
            {
                "level": "36",
                "move": "Dark Pulse"
            },
            {
                "level": "39",
                "move": "Meltdown"
            },
            {
                "level": "41",
                "move": "Shift Gear"
            },
            {
                "level": "44",
                "move": "Spread Fire"
            },
            {
                "level": "47",
                "move": "Metal Sound"
            },
            {
                "level": "50",
                "move": "Assurance"
            },
            {
                "level": "53",
                "move": "Giga Destroyer"
            }
        ],
        "locations": [
            "Route 120"
        ],
        "prev": [
            {
                "name": "Sealsdramon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Darkdramon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "331",
        "name": "Darkdramon",
                "types": [
            "Steel",
            "Dragon"
        ],
        "ability": "Competitive",
        "hiddenAbility": "Sturdy",
        "evoMove": "Dark Roar",
        "moves": [
            {
                "level": "55",
                "move": "Hyper Drill"
            },
            {
                "level": "56",
                "move": "Brave Tornado"
            },
            {
                "level": "59",
                "move": "Sucker Punch"
            },
            {
                "level": "62",
                "move": "Outrage"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Confuse Ray"
            },
            {
                "level": "71",
                "move": "Ruination"
            },
            {
                "level": "74",
                "move": "Dragon Energy"
            },
            {
                "level": "77",
                "move": "Meteor Assault"
            },
            {
                "level": "80",
                "move": "Meteor Mash"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Ghilliedhumon",
                "method": "Lv54"
            },
            {
                "name": "Tankdramon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Caosmon",
                "method": "BanchoLeomon Jogress"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "332",
        "name": "Caosmon",
                "types": [
            "CHAOS"
        ],
        "ability": "Moody",
        "hiddenAbility": "",
        "evoMove": "Ban-Tyo Blade",
        "moves": [
            {
                "level": "83",
                "move": "Zanjintou"
            },
            {
                "level": "86",
                "move": "Behemoth Blade"
            },
            {
                "level": "89",
                "move": "Flash Bancho Punch"
            },
            {
                "level": "92",
                "move": "Hyper Beam"
            },
            {
                "level": "95",
                "move": "End of Paradox"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "BanchoLeomon",
                "method": "Jogress Darkdramon"
            },
            {
                "name": "Darkdramon",
                "method": "BanchoLeomon Jogress"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "333",
        "name": "Dracmon",
                "types": [
            "Undead",
            "Dark"
        ],
        "ability": "Prankster",
        "hiddenAbility": "Pickpocket",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Astonish"
            },
            {
                "level": "9",
                "move": "Thief"
            },
            {
                "level": "12",
                "move": "Hypnosis"
            },
            {
                "level": "15",
                "move": "Evil Darts"
            },
            {
                "level": "18",
                "move": "Confuse Ray"
            }
        ],
        "locations": [
            "Granite Cave F2",
            "Mt Pyre"
        ],
        "prev": [],
        "next": [
            {
                "name": "Sangloupmon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "334",
        "name": "Sangloupmon",
                "types": [
            "Dark"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Super Luck",
        "evoMove": "Drain Slash",
        "moves": [
            {
                "level": "19",
                "move": "Demon Claw"
            },
            {
                "level": "21",
                "move": "Howl"
            },
            {
                "level": "23",
                "move": "Pursuit"
            },
            {
                "level": "26",
                "move": "Sucker Punch"
            },
            {
                "level": "29",
                "move": "Shadow Sneak"
            },
            {
                "level": "32",
                "move": "Leech Life"
            }
        ],
        "locations": [
            "Route 110 (Guardian)",
            "Mt Pyre"
        ],
        "prev": [
            {
                "name": "Dracmon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Matadormon",
                "method": "Lv32 Amped"
            },
            {
                "name": "Myotismon",
                "method": "Lv32 Lowkey"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "335",
        "name": "Matadormon",
                "types": [
            "Undead",
            "Dark"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Super Luck",
        "evoMove": "Spike Cannon",
        "moves": [
            {
                "level": "33",
                "move": "Devil Sword"
            },
            {
                "level": "36",
                "move": "Swords Dance"
            },
            {
                "level": "39",
                "move": "Soul Chopper"
            },
            {
                "level": "41",
                "move": "Hell Dance"
            },
            {
                "level": "44",
                "move": "Secret Sword"
            },
            {
                "level": "47",
                "move": "Spell Sword"
            },
            {
                "level": "50",
                "move": "Soul Predator"
            },
            {
                "level": "53",
                "move": "High Jump Kick"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Sangloupmon",
                "method": "Lv32 Amped"
            }
        ],
        "next": [
            {
                "name": "Grandracmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "336",
        "name": "Grandracmon",
                "types": [
            "Undead",
            "Dark"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Super Luck",
        "evoMove": "Gorgon's Eye",
        "moves": [
            {
                "level": "55",
                "move": "Power Gem"
            },
            {
                "level": "56",
                "move": "Curse"
            },
            {
                "level": "59",
                "move": "Sheer Cold"
            },
            {
                "level": "62",
                "move": "Revival Blessing"
            },
            {
                "level": "65",
                "move": "Nasty Plot"
            },
            {
                "level": "68",
                "move": "Perish Song"
            },
            {
                "level": "71",
                "move": "Grave Scream"
            },
            {
                "level": "74",
                "move": "Mean Look"
            },
            {
                "level": "77",
                "move": "Astral Barrage"
            },
            {
                "level": "80",
                "move": "Meteor Beam"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Matadormon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "337",
        "name": "Myotismon",
                "types": [
            "Undead",
            "Dark"
        ],
        "ability": "Dry Skin",
        "hiddenAbility": "Regenerator",
        "evoMove": "Night Raid",
        "moves": [
            {
                "level": "33",
                "move": "Glare"
            },
            {
                "level": "36",
                "move": "Haze"
            },
            {
                "level": "39",
                "move": "Necro Mist"
            },
            {
                "level": "41",
                "move": "Giga Drain"
            },
            {
                "level": "44",
                "move": "Fire Lash"
            },
            {
                "level": "47",
                "move": "Night Daze"
            },
            {
                "level": "50",
                "move": "Death Ball"
            },
            {
                "level": "53",
                "move": "Heal Block"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Sangloupmon",
                "method": "Lv32 Lowkey"
            }
        ],
        "next": [
            {
                "name": "VenomMyotismon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "338",
        "name": "VenomMyotismon",
                "types": [
            "Undead",
            "Dark"
        ],
        "ability": "Dry Skin",
        "hiddenAbility": "Regenerator",
        "evoMove": "Bitter Malice",
        "moves": [
            {
                "level": "55",
                "move": "Fire Blast"
            },
            {
                "level": "56",
                "move": "Screech"
            },
            {
                "level": "59",
                "move": "Phantom Force"
            },
            {
                "level": "62",
                "move": "Gift of Darkness"
            },
            {
                "level": "65",
                "move": "Nasty Plot"
            },
            {
                "level": "68",
                "move": "Red Inferno"
            },
            {
                "level": "71",
                "move": "Poltergeist"
            },
            {
                "level": "74",
                "move": "Sucker Punch"
            },
            {
                "level": "77",
                "move": "Burning Jealousy"
            },
            {
                "level": "80",
                "move": "Moongeist Beam"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Myotismon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "339",
        "name": "DemiDevimon",
                "types": [
            "Dark",
            "Flying"
        ],
        "ability": "Prankster",
        "hiddenAbility": "Emergency Exit",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Gust"
            },
            {
                "level": "9",
                "move": "Thief"
            },
            {
                "level": "12",
                "move": "Torment"
            },
            {
                "level": "15",
                "move": "Feint Attack"
            },
            {
                "level": "18",
                "move": "Wind Cutter"
            }
        ],
        "locations": [
            "Granite Cave F2",
            "Mt Pyre"
        ],
        "prev": [],
        "next": [
            {
                "name": "Devimon",
                "method": "Lv18"
            },
            {
                "name": "Vilemon",
                "method": "Dark Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "340",
        "name": "Devimon",
                "types": [
            "Dark",
            "Flying"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Moxie",
        "evoMove": "Wind Cutter",
        "moves": [
            {
                "level": "19",
                "move": "Whirlwind"
            },
            {
                "level": "21",
                "move": "Mean Look"
            },
            {
                "level": "23",
                "move": "Wing Attack"
            },
            {
                "level": "26",
                "move": "Dark Pulse"
            },
            {
                "level": "29",
                "move": "Glare"
            },
            {
                "level": "32",
                "move": "Cross Poison"
            }
        ],
        "locations": [
            "Mt Pyre"
        ],
        "prev": [
            {
                "name": "DemiDevimon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "NeoDevimon",
                "method": "Lv32 Amped"
            },
            {
                "name": "Jokermon",
                "method": "Lv32 Lowkey"
            },
            {
                "name": "Kimeramon",
                "method": "Organic Data"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "341",
        "name": "NeoDevimon",
                "types": [
            "Dark",
            "Flying"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Moxie",
        "evoMove": "Darkest Lariat",
        "moves": [
            {
                "level": "33",
                "move": "Fake Out"
            },
            {
                "level": "36",
                "move": "Sucker Punch"
            },
            {
                "level": "39",
                "move": "Thunder Punch"
            },
            {
                "level": "41",
                "move": "Hone Claws"
            },
            {
                "level": "44",
                "move": "Night Daze"
            },
            {
                "level": "47",
                "move": "Air Slash"
            },
            {
                "level": "50",
                "move": "Electric Cloud"
            },
            {
                "level": "53",
                "move": "Poison Jab"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Devimon",
                "method": "Lv32 Amped"
            }
        ],
        "next": [
            {
                "name": "DoneDevimon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "342",
        "name": "DoneDevimon",
                "types": [
            "Dark",
            "Flying"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Moxie",
        "evoMove": "Ruination",
        "moves": [
            {
                "level": "56",
                "move": "Gift of Darkness"
            },
            {
                "level": "59",
                "move": "Will-o-Wisp"
            },
            {
                "level": "62",
                "move": "Hell Fire"
            },
            {
                "level": "65",
                "move": "Sucker Punch"
            },
            {
                "level": "68",
                "move": "Hyperspace Fury"
            },
            {
                "level": "71",
                "move": "Mean Look"
            },
            {
                "level": "74",
                "move": "Throat Chop"
            },
            {
                "level": "77",
                "move": "Aeroblast"
            },
            {
                "level": "80",
                "move": "Acid Breath"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "NeoDevimon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "343",
        "name": "Jokermon",
                "types": [
            "Dark",
            "Magic"
        ],
        "ability": "Mold Breaker",
        "hiddenAbility": "Infiltrator",
        "evoMove": "Spell Sword",
        "moves": [
            {
                "level": "33",
                "move": "Fake Out"
            },
            {
                "level": "36",
                "move": "Dark Pulse"
            },
            {
                "level": "39",
                "move": "Mystic Buster"
            },
            {
                "level": "41",
                "move": "Nasty Plot"
            },
            {
                "level": "44",
                "move": "Teeter Dance"
            },
            {
                "level": "47",
                "move": "Night Daze"
            },
            {
                "level": "50",
                "move": "Distortion"
            },
            {
                "level": "53",
                "move": "Heal Block"
            }
        ],
        "locations": [
            "Mirage Tower"
        ],
        "prev": [
            {
                "name": "Devimon",
                "method": "Lv32 Lowkey"
            }
        ],
        "next": [
            {
                "name": "Piedmon",
                "method": "Lv32"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "344",
        "name": "Piedmon",
                "types": [
            "Dark",
            "Magic"
        ],
        "ability": "Mold Breaker",
        "hiddenAbility": "Infiltrator",
        "evoMove": "Trump Sword",
        "moves": [
            {
                "level": "56",
                "move": "Magic Blade"
            },
            {
                "level": "59",
                "move": "Parting Shot"
            },
            {
                "level": "62",
                "move": "Disable"
            },
            {
                "level": "65",
                "move": "Hyperspace Fury"
            },
            {
                "level": "68",
                "move": "Guillotine"
            },
            {
                "level": "71",
                "move": "Hyperspace Hole"
            },
            {
                "level": "74",
                "move": "Mirror Coat"
            },
            {
                "level": "77",
                "move": "Trick"
            },
            {
                "level": "80",
                "move": "Ally Switch"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Jokermon",
                "method": "Lv32"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "345",
        "name": "Vilemon",
                "types": [
            "Dark"
        ],
        "ability": "Prankster",
        "hiddenAbility": "Emergency Exit",
        "evoMove": "Fake Out",
        "moves": [
            {
                "level": "18",
                "move": "Wind Cutter"
            },
            {
                "level": "19",
                "move": "Hypnosis"
            },
            {
                "level": "21",
                "move": "Snarl"
            },
            {
                "level": "23",
                "move": "Supersonic"
            },
            {
                "level": "26",
                "move": "Flatter"
            },
            {
                "level": "29",
                "move": "Fake Tears"
            },
            {
                "level": "31",
                "move": "False Surrender"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "DemiDevimon",
                "method": "Dark Data"
            }
        ],
        "next": [
            {
                "name": "SkullSatamon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "346",
        "name": "SkullSatamon",
                "types": [
            "Undead",
            "Magic"
        ],
        "ability": "Cursed Body",
        "hiddenAbility": "Perish Body",
        "evoMove": "Death Ball",
        "moves": [
            {
                "level": "33",
                "move": "Magic Game"
            },
            {
                "level": "36",
                "move": "Dark Pulse"
            },
            {
                "level": "39",
                "move": "Destiny Bond"
            },
            {
                "level": "41",
                "move": "Necro Magic"
            },
            {
                "level": "44",
                "move": "Necro Mist"
            },
            {
                "level": "47",
                "move": "Mystic Buster"
            },
            {
                "level": "50",
                "move": "Bone Rush"
            },
            {
                "level": "52",
                "move": "Demon Katana"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Vilemon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Barbamon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "347",
        "name": "Barbamon",
                "types": [
            "Undead",
            "Magic"
        ],
        "ability": "Pressure",
        "hiddenAbility": "Perish Body",
        "evoMove": "Spell Blast",
        "moves": [
            {
                "level": "55",
                "move": "Hell Fire"
            },
            {
                "level": "56",
                "move": "Psych Up"
            },
            {
                "level": "59",
                "move": "Court Change"
            },
            {
                "level": "62",
                "move": "Dark Lightning"
            },
            {
                "level": "65",
                "move": "Red Inferno"
            },
            {
                "level": "68",
                "move": "Perish Song"
            },
            {
                "level": "71",
                "move": "Last Respects"
            },
            {
                "level": "80",
                "move": "Necro Eclipse"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "SkullSatamon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "348",
        "name": "Gizamon",
                "types": [
            "Water"
        ],
        "ability": "Dry Skin",
        "hiddenAbility": "Swift Swim",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Rollout"
            },
            {
                "level": "9",
                "move": "Defense Curl"
            },
            {
                "level": "12",
                "move": "Life Dew"
            },
            {
                "level": "15",
                "move": "Razor Shell"
            },
            {
                "level": "18",
                "move": "Double Kick"
            }
        ],
        "locations": [],
        "prev": [],
        "next": [
            {
                "name": "Gesomon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "349",
        "name": "Gesomon",
                "types": [
            "Water",
            "Poison"
        ],
        "ability": "Liquid Ooze",
        "hiddenAbility": "Toxic Debris",
        "evoMove": "Deadly Shade",
        "moves": [
            {
                "level": "19",
                "move": "Wrap"
            },
            {
                "level": "21",
                "move": "Sludge"
            },
            {
                "level": "23",
                "move": "Fury Swipes"
            },
            {
                "level": "26",
                "move": "Whirlpool"
            },
            {
                "level": "29",
                "move": "Cross Poison"
            },
            {
                "level": "32",
                "move": "Smokescreen"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Gizamon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "MarineDevimon",
                "method": "Lv32"
            },
            {
                "name": "Dolphmon",
                "method": "Lv18 (This appears to be a branching evolution at the same level)"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "350",
        "name": "MarineDevimon",
                "types": [
            "Water",
            "Poison"
        ],
        "ability": "Merciless",
        "hiddenAbility": "Toxic Debris",
        "evoMove": "",
        "moves": [
            {
                "level": "33",
                "move": "Sludge Bomb"
            },
            {
                "level": "36",
                "move": "Electric Cloud"
            },
            {
                "level": "39",
                "move": "Slam"
            },
            {
                "level": "41",
                "move": "Toxic"
            },
            {
                "level": "44",
                "move": "Liquidation"
            },
            {
                "level": "47",
                "move": "Venoshock"
            },
            {
                "level": "50",
                "move": "Wild Charge"
            },
            {
                "level": "53",
                "move": "Dark Pulse"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Gesomon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Leviamon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "351",
        "name": "Leviamon",
                "types": [
            "Water",
            "Dark"
        ],
        "ability": "Opportunist",
        "hiddenAbility": "Strong Jaw",
        "evoMove": "Evil Bite",
        "moves": [
            {
                "level": "55",
                "move": "Guillotine"
            },
            {
                "level": "56",
                "move": "Snatch"
            },
            {
                "level": "59",
                "move": "Jaw Lock"
            },
            {
                "level": "62",
                "move": "Wave Crash"
            },
            {
                "level": "65",
                "move": "Tail Slap"
            },
            {
                "level": "68",
                "move": "Torment"
            },
            {
                "level": "71",
                "move": "Punishment"
            },
            {
                "level": "74",
                "move": "Hydro Cannon"
            },
            {
                "level": "77",
                "move": "Rain Dance"
            },
            {
                "level": "80",
                "move": "Ruination"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "MarineDevimon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "352",
        "name": "Dolphmon",
                "types": [
            "Water"
        ],
        "ability": "Storm Drain",
        "hiddenAbility": "Swift Swim",
        "evoMove": "Water Pulse",
        "moves": [
            {
                "level": "19",
                "move": "Supersonic"
            },
            {
                "level": "21",
                "move": "Circle Throw"
            },
            {
                "level": "23",
                "move": "Aqua Jet"
            },
            {
                "level": "26",
                "move": "Round"
            },
            {
                "level": "29",
                "move": "Water Tower"
            },
            {
                "level": "32",
                "move": "Aqua Magic"
            }
        ],
        "locations": [
            "Route 110"
        ],
        "prev": [
            {
                "name": "Gesomon",
                "method": "Lv18 (This appears to be a branching evolution at the same level)"
            }
        ],
        "next": [
            {
                "name": "Hangyomon",
                "method": "Lv32"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "353",
        "name": "Hangyomon",
                "types": [
            "Water"
        ],
        "ability": "Storm Drain",
        "hiddenAbility": "Swift Swim",
        "evoMove": "Triple Dive",
        "moves": [
            {
                "level": "33",
                "move": "Smart Strike"
            },
            {
                "level": "36",
                "move": "Pin Missile"
            },
            {
                "level": "39",
                "move": "Evil Bite"
            },
            {
                "level": "41",
                "move": "Shift Gear"
            },
            {
                "level": "44",
                "move": "Aqua Tail"
            },
            {
                "level": "47",
                "move": "Magic Fang"
            },
            {
                "level": "50",
                "move": "Steel Blade"
            },
            {
                "level": "53",
                "move": "Icicle Crash"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Dolphmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Neptunemon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "354",
        "name": "Neptunemon",
                "types": [
            "Water"
        ],
        "ability": "Drizzle",
        "hiddenAbility": "Swift Swim",
        "evoMove": "Wave Crash",
        "moves": [
            {
                "level": "55",
                "move": "Meteor Mash"
            },
            {
                "level": "56",
                "move": "Muddy Water"
            },
            {
                "level": "59",
                "move": "Rain Dance"
            },
            {
                "level": "62",
                "move": "Earthquake"
            },
            {
                "level": "65",
                "move": "Soak"
            },
            {
                "level": "68",
                "move": "Origin Pulse"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "River of Power"
            },
            {
                "level": "77",
                "move": "Steel Roller"
            },
            {
                "level": "80",
                "move": "Hydro Cannon"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Hangyomon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "355",
        "name": "Betamon",
                "types": [
            "Water",
            "Electric"
        ],
        "ability": "Volt Absorb",
        "hiddenAbility": "Water Absorb",
        "evoMove": "Static Electricity",
        "moves": [
            {
                "level": "6",
                "move": "Scratch"
            },
            {
                "level": "9",
                "move": "Electro Shock"
            },
            {
                "level": "12",
                "move": "Sonic Boom"
            },
            {
                "level": "15",
                "move": "Razor Shell"
            },
            {
                "level": "18",
                "move": "Spark"
            }
        ],
        "locations": [
            "Route 103",
            "Route 104",
            "Agumon Crest"
        ],
        "prev": [],
        "next": [
            {
                "name": "Seadramon",
                "method": "Defense > Attack"
            },
            {
                "name": "Airdramon",
                "method": "Attack = Defense"
            },
            {
                "name": "Tyrannomon",
                "method": "Attack > Defense"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "356",
        "name": "Seadramon",
                "types": [
            "Water",
            "Dragon"
        ],
        "ability": "Swift Swim",
        "hiddenAbility": "Water Absorb",
        "evoMove": "Ice Needle",
        "moves": [
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Wrap"
            },
            {
                "level": "26",
                "move": "Ice Shard"
            },
            {
                "level": "29",
                "move": "Chilling Water"
            },
            {
                "level": "32",
                "move": "Dragon Breath"
            }
        ],
        "locations": [
            "Meteor Falls"
        ],
        "prev": [
            {
                "name": "Betamon",
                "method": "Defense > Attack"
            }
        ],
        "next": [
            {
                "name": "MegaSeadramon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "357",
        "name": "MegaSeadramon",
                "types": [
            "Water",
            "Dragon"
        ],
        "ability": "Lightning Rod",
        "hiddenAbility": "Water Absorb",
        "evoMove": "Electric Cloud",
        "moves": [
            {
                "level": "33",
                "move": "Muddy Water"
            },
            {
                "level": "36",
                "move": "Freeze-Dry"
            },
            {
                "level": "39",
                "move": "Dragon Pulse"
            },
            {
                "level": "41",
                "move": "Whirlpool"
            },
            {
                "level": "44",
                "move": "Bolt Break"
            },
            {
                "level": "47",
                "move": "Dragon Tail"
            },
            {
                "level": "50",
                "move": "Aqua Tail"
            },
            {
                "level": "53",
                "move": "Iron Tail"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Seadramon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "MetalSeadramon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "358",
        "name": "MetalSeadramon",
                "types": [
            "Water",
            "Steel"
        ],
        "ability": "Multiscale",
        "hiddenAbility": "Water Absorb",
        "evoMove": "River of Power",
        "moves": [
            {
                "level": "55",
                "move": "Laser Cannon"
            },
            {
                "level": "56",
                "move": "Winter Blast"
            },
            {
                "level": "59",
                "move": "Thunder Wave"
            },
            {
                "level": "62",
                "move": "Thunder Cage"
            },
            {
                "level": "65",
                "move": "Coil"
            },
            {
                "level": "68",
                "move": "Origin Pulse"
            },
            {
                "level": "71",
                "move": "Steel Beam"
            },
            {
                "level": "74",
                "move": "Wildbolt Storm"
            },
            {
                "level": "77",
                "move": "Flip Turn"
            },
            {
                "level": "80",
                "move": "Volt Switch"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "MegaSeadramon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Aegisdramon",
                "method": "Plesiomon Jogress"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "359",
        "name": "Aegisdramon",
                "types": [
            "Water",
            "Steel"
        ],
        "ability": "Mega Launcher",
        "hiddenAbility": "",
        "evoMove": "Tera Hydro",
        "moves": [
            {
                "level": "83",
                "move": "Mugen Cannon"
            },
            {
                "level": "86",
                "move": "Holy Blast"
            },
            {
                "level": "89",
                "move": "Freeze Shock"
            },
            {
                "level": "92",
                "move": "Hyper Beam"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Plesiomon",
                "method": "Jogress MetalSeadramon"
            },
            {
                "name": "MetalSeadramon",
                "method": "Plesiomon Jogress"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "360",
        "name": "Airdramon",
                "types": [
            "Flying",
            "Dragon"
        ],
        "ability": "Wind Rider",
        "hiddenAbility": "Gale Wings",
        "evoMove": "Shock Wave",
        "moves": [
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Vacuum Wave"
            },
            {
                "level": "26",
                "move": "Volt Switch"
            },
            {
                "level": "29",
                "move": "Air Slash"
            },
            {
                "level": "32",
                "move": "Dragon Breath"
            }
        ],
        "locations": [
            "Route 104",
            "Route 110",
            "Route 111",
            "Magma Hideout"
        ],
        "prev": [
            {
                "name": "Betamon",
                "method": "Attack = Defense"
            }
        ],
        "next": [
            {
                "name": "Megadramon",
                "method": "Lv32"
            },
            {
                "name": "Kimeramon",
                "method": "Organic Data"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "361",
        "name": "Megadramon",
                "types": [
            "Steel",
            "Dragon"
        ],
        "ability": "Levitate",
        "hiddenAbility": "Mega Launcher",
        "evoMove": "Giga Destroyer",
        "moves": [
            {
                "level": "33",
                "move": "Aerial Ace"
            },
            {
                "level": "36",
                "move": "Dragon Claw"
            },
            {
                "level": "39",
                "move": "Autotomize"
            },
            {
                "level": "41",
                "move": "Tailwind"
            },
            {
                "level": "44",
                "move": "Pulse Laser"
            },
            {
                "level": "47",
                "move": "Dragon Pulse"
            },
            {
                "level": "50",
                "move": "Ultra Turbulence"
            },
            {
                "level": "53",
                "move": "Electric Cloud"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Airdramon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Mugendramon",
                "method": "Lv70"
            },
            {
                "name": "Mugendramon",
                "method": "Steel Data"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "362",
        "name": "Sunarizamon",
                "types": [
            "Ground"
        ],
        "ability": "Sand Veil",
        "hiddenAbility": "Sand Force",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Sand Tomb"
            },
            {
                "level": "12",
                "move": "Rock Throw"
            },
            {
                "level": "15",
                "move": "Rock Smash"
            },
            {
                "level": "17",
                "move": "Withdraw"
            },
            {
                "level": "18",
                "move": "Shore Up"
            }
        ],
        "locations": [
            "Granite Cave F1",
            "Route 111"
        ],
        "prev": [],
        "next": [
            {
                "name": "Landramon",
                "method": "Lv18"
            },
            {
                "name": "Golemon",
                "method": "Earth Data"
            },
            {
                "name": "Tortomon",
                "method": "Withdraw"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "363",
        "name": "Tortomon",
                "types": [
            "Ground"
        ],
        "ability": "Shell Armor",
        "hiddenAbility": "Sand Force",
        "evoMove": "Rock Blast",
        "moves": [
            {
                "level": "18",
                "move": "Shore Up"
            },
            {
                "level": "19",
                "move": "Rapid Spin"
            },
            {
                "level": "21",
                "move": "Take Down"
            },
            {
                "level": "23",
                "move": "Spiky Shield"
            },
            {
                "level": "26",
                "move": "Rock Slide"
            },
            {
                "level": "29",
                "move": "Body Press"
            },
            {
                "level": "32",
                "move": "Bulldoze"
            }
        ],
        "locations": [
            "Route 117"
        ],
        "prev": [
            {
                "name": "Sunarizamon",
                "method": "Withdraw"
            }
        ],
        "next": [
            {
                "name": "Jagamon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "364",
        "name": "Jagamon",
                "types": [
            "Ground",
            "Grass"
        ],
        "ability": "Shell Armor",
        "hiddenAbility": "Sap Sipper",
        "evoMove": "Stone Axe",
        "moves": [
            {
                "level": "33",
                "move": "Dig"
            },
            {
                "level": "36",
                "move": "Bullet Seed"
            },
            {
                "level": "39",
                "move": "Flame Charge"
            },
            {
                "level": "41",
                "move": "Ingrain"
            },
            {
                "level": "44",
                "move": "Stone Edge"
            },
            {
                "level": "47",
                "move": "Titan Drill"
            },
            {
                "level": "50",
                "move": "Seed Bomb"
            },
            {
                "level": "53",
                "move": "Flare Blitz"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Tortomon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "ElDoradimon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "365",
        "name": "Golemon",
                "types": [
            "Rock",
            "Ground"
        ],
        "ability": "Sturdy",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Golem Punch",
        "moves": [
            {
                "level": "19",
                "move": "Will-o-Wisp"
            },
            {
                "level": "21",
                "move": "Self-Destruct"
            },
            {
                "level": "23",
                "move": "Bulldoze"
            },
            {
                "level": "26",
                "move": "Rock Slide"
            },
            {
                "level": "29",
                "move": "Drain Punch"
            },
            {
                "level": "32",
                "move": "Fire Punch"
            }
        ],
        "locations": [
            "Route 111",
            "Route 112"
        ],
        "prev": [
            {
                "name": "Sunarizamon",
                "method": "Earth Data"
            }
        ],
        "next": [
            {
                "name": "Gogmamon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "366",
        "name": "Gogmamon",
                "types": [
            "Rock",
            "Ground"
        ],
        "ability": "Earth Eater",
        "hiddenAbility": "Magic Bounce",
        "evoMove": "Mighty Cleave",
        "moves": [
            {
                "level": "33",
                "move": "Mirror Coat"
            },
            {
                "level": "36",
                "move": "Titan Drill"
            },
            {
                "level": "39",
                "move": "Stored Power"
            },
            {
                "level": "41",
                "move": "Rock Polish"
            },
            {
                "level": "44",
                "move": "Fissure"
            },
            {
                "level": "47",
                "move": "Stone Edge"
            },
            {
                "level": "50",
                "move": "Body Press"
            },
            {
                "level": "53",
                "move": "Accelerock"
            }
        ],
        "locations": [
            "Rustboro (Trade)",
            "Magma Hideout"
        ],
        "prev": [
            {
                "name": "Golemon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Blastmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "367",
        "name": "Blastmon",
                "types": [
            "Rock",
            "Ground"
        ],
        "ability": "Earth Eater",
        "hiddenAbility": "Magic Bounce",
        "evoMove": "Diamond Storm",
        "moves": [
            {
                "level": "56",
                "move": "Dynamic Punch"
            },
            {
                "level": "69",
                "move": "Tar Shot"
            },
            {
                "level": "62",
                "move": "Solar Beam"
            },
            {
                "level": "65",
                "move": "Bulk Up"
            },
            {
                "level": "68",
                "move": "Head Smash"
            },
            {
                "level": "71",
                "move": "Smack Down"
            },
            {
                "level": "74",
                "move": "Rock Wrecker"
            },
            {
                "level": "77",
                "move": "Precipice Blades"
            },
            {
                "level": "80",
                "move": "Meteor Mash"
            }
        ],
        "locations": [
            "Victory Road F2"
        ],
        "prev": [
            {
                "name": "Gogmamon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "368",
        "name": "Monochromon",
                "types": [
            "Ground",
            "Fire"
        ],
        "ability": "Sturdy",
        "hiddenAbility": "Drought",
        "evoMove": "Mega Flame",
        "moves": [
            {
                "level": "18",
                "move": "Bulldoze"
            },
            {
                "level": "21",
                "move": "Rock Slide"
            },
            {
                "level": "23",
                "move": "Fire Fang"
            },
            {
                "level": "26",
                "move": "Drill Buster"
            },
            {
                "level": "29",
                "move": "Master Fire"
            },
            {
                "level": "32",
                "move": "Megaton Press"
            }
        ],
        "locations": [
            "Granite Cave F1/F4",
            "Route 111",
            "Magma Hideout"
        ],
        "prev": [],
        "next": [
            {
                "name": "Triceramon",
                "method": "Lv32"
            },
            {
                "name": "Kimeramon",
                "method": "Organic Data"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "369",
        "name": "Triceramon",
                "types": [
            "Ground",
            "Dragon"
        ],
        "ability": "Sturdy",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Titan Drill",
        "moves": [
            {
                "level": "33",
                "move": "Raging Bull"
            },
            {
                "level": "36",
                "move": "Wild Charge"
            },
            {
                "level": "39",
                "move": "Flame Wheel"
            },
            {
                "level": "41",
                "move": "Bulk Up"
            },
            {
                "level": "44",
                "move": "Iron Head"
            },
            {
                "level": "47",
                "move": "Earthquake"
            },
            {
                "level": "50",
                "move": "Megahorn"
            },
            {
                "level": "53",
                "move": "Flare Blitz"
            }
        ],
        "locations": [
            "Meteor Falls",
            "Magma Hideout",
            "Victory Road F3"
        ],
        "prev": [
            {
                "name": "Monochromon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "DinoRexmon",
                "method": "Lv. 54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "370",
        "name": "DinoRexmon",
                "types": [
            "Ground",
            "Dragon"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Magma Storm",
        "moves": [
            {
                "level": "56",
                "move": "Guillotine"
            },
            {
                "level": "59",
                "move": "Dragon Dance"
            },
            {
                "level": "62",
                "move": "Sucker Punch"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Fire Blast"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Precipice Blades"
            },
            {
                "level": "77",
                "move": "Raging Fury"
            },
            {
                "level": "80",
                "move": "Outrage"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Triceramon",
                "method": "Lv. 54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "371",
        "name": "Gammamon",
                "types": [
            "Dragon"
        ],
        "ability": "Rock Head",
        "hiddenAbility": "Adaptability",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Rock Smash"
            },
            {
                "level": "9",
                "move": "Bulk Up"
            },
            {
                "level": "12",
                "move": "Dual Chop"
            },
            {
                "level": "15",
                "move": "Headbutt"
            },
            {
                "level": "18",
                "move": "Crush Claw"
            }
        ],
        "locations": [
            "Granite Cave F2/F4",
            "Agumon Crest"
        ],
        "prev": [],
        "next": [
            {
                "name": "BetelGammamon",
                "method": "Lv18"
            },
            {
                "name": "GulusGammamon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "372",
        "name": "BetelGammamon",
                "types": [
            "Dragon",
            "Fire"
        ],
        "ability": "Blaze",
        "hiddenAbility": "Solar Power",
        "evoMove": "Fire Punch",
        "moves": [
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Will-o-Wisp"
            },
            {
                "level": "26",
                "move": "Master Fire"
            },
            {
                "level": "29",
                "move": "Brick Break"
            },
            {
                "level": "32",
                "move": "Dragon Breath"
            }
        ],
        "locations": [
            "Granite Cave F4",
            "Agumon Crest"
        ],
        "prev": [
            {
                "name": "Gammamon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Canoweissmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "373",
        "name": "Canoweissmon",
                "types": [
            "Dragon",
            "Flying"
        ],
        "ability": "Tough Claws",
        "hiddenAbility": "Multiscale",
        "evoMove": "Dragon Rush",
        "moves": [
            {
                "level": "33",
                "move": "Holy Blast"
            },
            {
                "level": "36",
                "move": "Aerial Ace"
            },
            {
                "level": "39",
                "move": "Dragon Dance"
            },
            {
                "level": "41",
                "move": "Roar"
            },
            {
                "level": "44",
                "move": "Dragon Pulse"
            },
            {
                "level": "47",
                "move": "Trinity Gospel"
            },
            {
                "level": "50",
                "move": "Shooting Star"
            },
            {
                "level": "54",
                "move": "Brave Bird"
            }
        ],
        "locations": [
            "Route 113"
        ],
        "prev": [
            {
                "name": "BetelGammamon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Siriusmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "374",
        "name": "Siriusmon",
                "types": [
            "Dragon",
            "Holy"
        ],
        "ability": "Tough Claws",
        "hiddenAbility": "Multiscale",
        "evoMove": "Dragon Energy",
        "moves": [
            {
                "level": "56",
                "move": "Brave Tornado"
            },
            {
                "level": "59",
                "move": "Detect"
            },
            {
                "level": "62",
                "move": "Dual Wield"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Sharp Claymore"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Flare Blitz"
            },
            {
                "level": "77",
                "move": "Sunny Day"
            },
            {
                "level": "80",
                "move": "Dragon Hammer"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Canoweissmon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Proximamon",
                "method": "Jogress Arcturusmon"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "375",
        "name": "GulusGammamon",
                "types": [
            "Dragon",
            "Dark"
        ],
        "ability": "Beast Boost",
        "hiddenAbility": "Intimidate",
        "evoMove": "Haouken",
        "moves": [
            {
                "level": "19",
                "move": "Sucker Punch"
            },
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Will-o-Wisp"
            },
            {
                "level": "26",
                "move": "Dark Pulse"
            },
            {
                "level": "29",
                "move": "Brick Break"
            },
            {
                "level": "32",
                "move": "Dragon Breath"
            }
        ],
        "locations": [
            "Granite Cave F2/F4"
        ],
        "prev": [
            {
                "name": "Gammamon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Regulusmon",
                "method": "Lv42"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "376",
        "name": "Regulusmon",
                "types": [
            "Dragon",
            "Poison"
        ],
        "ability": "Moxie",
        "hiddenAbility": "Intimidate",
        "evoMove": "Dragon Rush",
        "moves": [
            {
                "level": "33",
                "move": "Poison Jab"
            },
            {
                "level": "36",
                "move": "Aerial Ace"
            },
            {
                "level": "39",
                "move": "Dragon Dance"
            },
            {
                "level": "41",
                "move": "Toxic"
            },
            {
                "level": "44",
                "move": "Dragon Pulse"
            },
            {
                "level": "47",
                "move": "Evil Bite"
            },
            {
                "level": "50",
                "move": "Sludge Wave"
            },
            {
                "level": "53",
                "move": "Brave Bird"
            }
        ],
        "locations": [
            "Route 113"
        ],
        "prev": [
            {
                "name": "GulusGammamon",
                "method": "Lv42"
            }
        ],
        "next": [
            {
                "name": "Arcturusmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "377",
        "name": "Arcturusmon",
                "types": [
            "Dragon",
            "Poison"
        ],
        "ability": "Moxie",
        "hiddenAbility": "Intimidate",
        "evoMove": "Dragon Energy",
        "moves": [
            {
                "level": "55",
                "move": "Hyper Drill"
            },
            {
                "level": "56",
                "move": "Brave Tornado"
            },
            {
                "level": "59",
                "move": "Detect"
            },
            {
                "level": "62",
                "move": "Malignant Chain"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Acid Breath"
            },
            {
                "level": "71",
                "move": "Punishment"
            },
            {
                "level": "74",
                "move": "Dragon Hammer"
            },
            {
                "level": "77",
                "move": "Sunny Day"
            },
            {
                "level": "80",
                "move": "Gunk Shot"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Regulusmon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Proximamon",
                "method": "Siriusmon Jogress"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "378",
        "name": "Proximamon",
                "types": [
            "Holy",
            "Dark"
        ],
        "ability": "Beads of Ruin",
        "hiddenAbility": "Beads of Ruin",
        "evoMove": "Extinction Cloud",
        "moves": [
            {
                "level": "83",
                "move": "Baneful Bunker"
            },
            {
                "level": "86",
                "move": "Recover"
            },
            {
                "level": "89",
                "move": "Heal Pulse"
            },
            {
                "level": "92",
                "move": "Revival Blessing"
            },
            {
                "level": "95",
                "move": "Necro Eclipse"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Siriusmon",
                "method": "Jogress Arcturusmon"
            },
            {
                "name": "Arcturusmon",
                "method": "Siriusmon Jogress"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "379",
        "name": "Angoramon",
                "types": [
            "Fighting",
            "Flying"
        ],
        "ability": "Fur Coat",
        "hiddenAbility": "Overcoat",
        "evoMove": "Pound",
        "moves": [
            {
                "level": "6",
                "move": "Rapid Spin"
            },
            {
                "level": "9",
                "move": "Bulk Up"
            },
            {
                "level": "12",
                "move": "Double Kick"
            },
            {
                "level": "15",
                "move": "Karate Chop"
            },
            {
                "level": "18",
                "move": "Slam"
            }
        ],
        "locations": [
            "Route 101"
        ],
        "prev": [],
        "next": [
            {
                "name": "SymbareAngoramon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "380",
        "name": "SymbareAngoramon",
                "types": [
            "Fighting",
            "Flying"
        ],
        "ability": "Speed Boost",
        "hiddenAbility": "Skill Link",
        "evoMove": "Jump Kick",
        "moves": [
            {
                "level": "19",
                "move": "Tornado"
            },
            {
                "level": "21",
                "move": "Agility"
            },
            {
                "level": "23",
                "move": "Slash"
            },
            {
                "level": "26",
                "move": "Hammer Rush"
            },
            {
                "level": "29",
                "move": "Aerial Ace"
            },
            {
                "level": "32",
                "move": "Brick Break"
            }
        ],
        "locations": [
            "Route 110 (Guardian)",
            "Gabumon Crest"
        ],
        "prev": [
            {
                "name": "Angoramon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Lamortmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "381",
        "name": "Lamortmon",
                "types": [
            "Fighting",
            "Flying"
        ],
        "ability": "Berserk",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Brick Break",
        "moves": [
            {
                "level": "33",
                "move": "Steel Blade"
            },
            {
                "level": "36",
                "move": "Vacuum Wave"
            },
            {
                "level": "39",
                "move": "Air Slash"
            },
            {
                "level": "41",
                "move": "Rage"
            },
            {
                "level": "44",
                "move": "Cross Chop"
            },
            {
                "level": "47",
                "move": "Cut"
            },
            {
                "level": "50",
                "move": "Evil Bite"
            },
            {
                "level": "53",
                "move": "Screech"
            }
        ],
        "locations": [
            "Mirage Tower"
        ],
        "prev": [
            {
                "name": "SymbareAngoramon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Diarbbitmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "382",
        "name": "Diarbbitmon",
                "types": [
            "Fighting",
            "Magic"
        ],
        "ability": "Super Luck",
        "hiddenAbility": "Beast Boost",
        "evoMove": "Spell Sword",
        "moves": [
            {
                "level": "55",
                "move": "Sacred Sword"
            },
            {
                "level": "59",
                "move": "Double Team"
            },
            {
                "level": "62",
                "move": "Extreme Speed"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Close Combat"
            },
            {
                "level": "71",
                "move": "Sharp Claymore"
            },
            {
                "level": "74",
                "move": "Victory Dance"
            },
            {
                "level": "77",
                "move": "Laser Focus"
            },
            {
                "level": "80",
                "move": "Trump Sword"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Lamortmon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "383",
        "name": "Jellymon",
                "types": [
            "Electric",
            "Water"
        ],
        "ability": "Static",
        "hiddenAbility": "Volt Absorb",
        "evoMove": "Lullaby Bubble",
        "moves": [
            {
                "level": "6",
                "move": "Charge"
            },
            {
                "level": "9",
                "move": "Water Shot"
            },
            {
                "level": "12",
                "move": "Static Electricity"
            },
            {
                "level": "15",
                "move": "Double Kick"
            },
            {
                "level": "18",
                "move": "Spark"
            }
        ],
        "locations": [
            "Route 103"
        ],
        "prev": [],
        "next": [
            {
                "name": "TeslaJellymon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "384",
        "name": "TeslaJellymon",
                "types": [
            "Electric",
            "Water"
        ],
        "ability": "Lightning Rod",
        "hiddenAbility": "Quark Drive",
        "evoMove": "Thunder Punch",
        "moves": [
            {
                "level": "21",
                "move": "Mach Punch"
            },
            {
                "level": "23",
                "move": "Water Pulse"
            },
            {
                "level": "26",
                "move": "Shock Wave"
            },
            {
                "level": "29",
                "move": "Vacuum Wave"
            },
            {
                "level": "32",
                "move": "Wild Charge"
            }
        ],
        "locations": [
            "Route 103 (Part 2)",
            "Route 110",
            "Route 111"
        ],
        "prev": [
            {
                "name": "Jellymon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Thetismon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "385",
        "name": "Thetismon",
                "types": [
            "Electric",
            "Water"
        ],
        "ability": "Lightning Rod",
        "hiddenAbility": "Quark Drive",
        "evoMove": "Thunder Cage",
        "moves": [
            {
                "level": "33",
                "move": "Water Tower"
            },
            {
                "level": "36",
                "move": "Jump Kick"
            },
            {
                "level": "39",
                "move": "Poison Jab"
            },
            {
                "level": "41",
                "move": "Heal Pulse"
            },
            {
                "level": "44",
                "move": "Electric Cloud"
            },
            {
                "level": "47",
                "move": "Jet Punch"
            },
            {
                "level": "50",
                "move": "High Jump Kick"
            },
            {
                "level": "53",
                "move": "Toxic"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "TeslaJellymon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Amphimon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "386",
        "name": "Amphimon",
                "types": [
            "Steel",
            "Water"
        ],
        "ability": "Lightning Rod",
        "hiddenAbility": "Quark Drive",
        "evoMove": "Discharge",
        "moves": [
            {
                "level": "55",
                "move": "River of Power"
            },
            {
                "level": "56",
                "move": "Aura Sphere"
            },
            {
                "level": "59",
                "move": "Magnet Rise"
            },
            {
                "level": "62",
                "move": "Pulse Laser"
            },
            {
                "level": "65",
                "move": "Wildbolt Storm"
            },
            {
                "level": "68",
                "move": "Wave Crash"
            },
            {
                "level": "71",
                "move": "Rain Dance"
            },
            {
                "level": "74",
                "move": "Steel Beam"
            },
            {
                "level": "77",
                "move": "Electro Shot"
            },
            {
                "level": "80",
                "move": "Origin Pulse"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Thetismon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "387",
        "name": "Morphomon",
                "types": [
            "Bug",
            "Dark"
        ],
        "ability": "Effect Store",
        "hiddenAbility": "Shed Skin",
        "evoMove": "Struggle Bug",
        "moves": [
            {
                "level": "6",
                "move": "Magic Attack"
            },
            {
                "level": "9",
                "move": "Silver Wind"
            },
            {
                "level": "12",
                "move": "Poison Powder"
            },
            {
                "level": "15",
                "move": "Fairy Wind"
            },
            {
                "level": "18",
                "move": "Quick Attack"
            }
        ],
        "locations": [
            "Petalburg Woods",
            "Route 116",
            "Tentomon Crest"
        ],
        "prev": [],
        "next": [
            {
                "name": "Hudiemon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "388",
        "name": "Hudiemon",
                "types": [
            "Bug",
            "Dark"
        ],
        "ability": "Hospitality",
        "hiddenAbility": "Healer",
        "evoMove": "Signal Beam",
        "moves": [
            {
                "level": "19",
                "move": "Tornado"
            },
            {
                "level": "21",
                "move": "Jump Kick"
            },
            {
                "level": "23",
                "move": "Sleep Powder"
            },
            {
                "level": "26",
                "move": "Pollen Puff"
            },
            {
                "level": "29",
                "move": "Air Slash"
            },
            {
                "level": "32",
                "move": "Triple Kick"
            }
        ],
        "locations": [
            "Route 111",
            "Route 117"
        ],
        "prev": [
            {
                "name": "Morphomon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Archnemon",
                "method": "Lv30"
            },
            {
                "name": "LadyDevimon",
                "method": "Lv30"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "389",
        "name": "FunBeemon",
                "types": [
            "Bug"
        ],
        "ability": "Levitate",
        "hiddenAbility": "Honey Gather",
        "evoMove": "Poison Sting",
        "moves": [
            {
                "level": "6",
                "move": "Peck"
            },
            {
                "level": "9",
                "move": "Infestation"
            },
            {
                "level": "12",
                "move": "Quick Attack"
            },
            {
                "level": "15",
                "move": "Bug Bite"
            },
            {
                "level": "18",
                "move": "Peck Flurry"
            }
        ],
        "locations": [
            "Tentomon Crest",
            "Route 120"
        ],
        "prev": [],
        "next": [
            {
                "name": "Waspmon",
                "method": "Lv18 Male"
            },
            {
                "name": "ForgeBeemon",
                "method": "Lv18 Female"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "390",
        "name": "Waspmon",
                "types": [
            "Bug",
            "Steel"
        ],
        "ability": "Levitate",
        "hiddenAbility": "Levitate",
        "evoMove": "Peck Flurry",
        "moves": [
            {
                "level": "19",
                "move": "Sludge"
            },
            {
                "level": "21",
                "move": "Wind Cutter"
            },
            {
                "level": "23",
                "move": "Spike Finish"
            },
            {
                "level": "26",
                "move": "Spread Fire"
            },
            {
                "level": "29",
                "move": "Poison Jab"
            },
            {
                "level": "32",
                "move": "Air Slash"
            }
        ],
        "locations": [
            "Route 111",
            "Route 112",
            "Route 120"
        ],
        "prev": [
            {
                "name": "FunBeemon",
                "method": "Lv18 Male"
            }
        ],
        "next": [
            {
                "name": "Vespamon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "391",
        "name": "Vespamon",
                "types": [
            "Bug",
            "Steel"
        ],
        "ability": "Friend Guard",
        "hiddenAbility": "Speed Boost",
        "evoMove": "Iron Head",
        "moves": [
            {
                "level": "33",
                "move": "King's Shield"
            },
            {
                "level": "36",
                "move": "Wide Guard"
            },
            {
                "level": "39",
                "move": "Iron Head"
            },
            {
                "level": "41",
                "move": "Twineedle"
            },
            {
                "level": "44",
                "move": "Titan Drill"
            },
            {
                "level": "47",
                "move": "Defend Order"
            },
            {
                "level": "50",
                "move": "Beat Up"
            },
            {
                "level": "53",
                "move": "Megahorn"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Waspmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "TigerVespamon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "392",
        "name": "TigerVespamon",
                "types": [
            "Bug",
            "Steel"
        ],
        "ability": "Parental Bond",
        "hiddenAbility": "Speed Boost",
        "evoMove": "X-Scissor",
        "moves": [
            {
                "level": "55",
                "move": "Dual Wield"
            },
            {
                "level": "56",
                "move": "Twineedle"
            },
            {
                "level": "59",
                "move": "Extreme Speed"
            },
            {
                "level": "62",
                "move": "Leaf Blade"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Swords Dance"
            },
            {
                "level": "71",
                "move": "First Impression"
            },
            {
                "level": "74",
                "move": "Devil Sword"
            },
            {
                "level": "77",
                "move": "Behemoth Blade"
            },
            {
                "level": "80",
                "move": "Guillotine"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Vespamon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "393",
        "name": "ForgeBeemon",
                "types": [
            "Bug",
            "Normal"
        ],
        "ability": "Swarm",
        "hiddenAbility": "Battle Armor",
        "evoMove": "Peck Flurry",
        "moves": [
            {
                "level": "19",
                "move": "Gear Grind"
            },
            {
                "level": "21",
                "move": "Sticky Web"
            },
            {
                "level": "23",
                "move": "Reflect"
            },
            {
                "level": "26",
                "move": "Lunge"
            },
            {
                "level": "29",
                "move": "Static Electricity"
            },
            {
                "level": "32",
                "move": "Iron Head"
            }
        ],
        "locations": [
            "Route 112",
            "Route 120"
        ],
        "prev": [
            {
                "name": "FunBeemon",
                "method": "Lv18 Female"
            }
        ],
        "next": [
            {
                "name": "CannonBeemon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "394",
        "name": "CannonBeemon",
                "types": [
            "Bug",
            "Steel"
        ],
        "ability": "Swarm",
        "hiddenAbility": "Parental Bond",
        "evoMove": "Pulse Laser",
        "moves": [
            {
                "level": "33",
                "move": "Attack Order"
            },
            {
                "level": "36",
                "move": "Laser Focus"
            },
            {
                "level": "39",
                "move": "Sludge Bomb"
            },
            {
                "level": "41",
                "move": "Shift Gear"
            },
            {
                "level": "44",
                "move": "Bug Buzz"
            },
            {
                "level": "47",
                "move": "Defend Order"
            },
            {
                "level": "50",
                "move": "Beat Up"
            },
            {
                "level": "53",
                "move": "Aerial Ace"
            }
        ],
        "locations": [
            "Route 111"
        ],
        "prev": [
            {
                "name": "ForgeBeemon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "QueenBeemon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "395",
        "name": "QueenBeemon",
                "types": [
            "Bug",
            "Steel"
        ],
        "ability": "Queenly Majesty",
        "hiddenAbility": "Parental Bond",
        "evoMove": "Bug Nightmare",
        "moves": [
            {
                "level": "55",
                "move": "Laser Cannon"
            },
            {
                "level": "56",
                "move": "Toxic"
            },
            {
                "level": "59",
                "move": "Instruct"
            },
            {
                "level": "62",
                "move": "Shine of Bee"
            },
            {
                "level": "65",
                "move": "Quiver Dance"
            },
            {
                "level": "68",
                "move": "Mugen Cannon"
            },
            {
                "level": "71",
                "move": "Darkness Love"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "CannonBeemon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "396",
        "name": "Herissmon",
                "types": [
            "Electric",
            "Poison"
        ],
        "ability": "Poison Point",
        "hiddenAbility": "Iron Barbs",
        "evoMove": "Sonic Jab",
        "moves": [
            {
                "level": "6",
                "move": "Thunder Wave"
            },
            {
                "level": "9",
                "move": "Charge"
            },
            {
                "level": "12",
                "move": "Poison Sting"
            },
            {
                "level": "15",
                "move": "Spark"
            },
            {
                "level": "18",
                "move": "Rollout"
            }
        ],
        "locations": [
            "Route 116",
            "Old Mauville"
        ],
        "prev": [],
        "next": [
            {
                "name": "Filmon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "397",
        "name": "Filmon",
                "types": [
            "Electric",
            "Poison"
        ],
        "ability": "Poison Point",
        "hiddenAbility": "Iron Barbs",
        "evoMove": "Thunder Punch",
        "moves": [
            {
                "level": "21",
                "move": "Poison Sting"
            },
            {
                "level": "23",
                "move": "Spiky Shield"
            },
            {
                "level": "26",
                "move": "Volt Switch"
            },
            {
                "level": "29",
                "move": "Poison Jab"
            },
            {
                "level": "32",
                "move": "Spike Finish"
            }
        ],
        "locations": [
            "Route 110",
            "Old Mauville"
        ],
        "prev": [
            {
                "name": "Herissmon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Stiffilmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "398",
        "name": "Stiffilmon",
                "types": [
            "Electric",
            "Poison"
        ],
        "ability": "Poison Point",
        "hiddenAbility": "Iron Barbs",
        "evoMove": "Zing Zap",
        "moves": [
            {
                "level": "33",
                "move": "Drain Punch"
            },
            {
                "level": "36",
                "move": "X-Scissor"
            },
            {
                "level": "39",
                "move": "Steel Blade"
            },
            {
                "level": "41",
                "move": "Electric Cloud"
            },
            {
                "level": "44",
                "move": "Needle Arm"
            },
            {
                "level": "47",
                "move": "Bulk Up"
            },
            {
                "level": "50",
                "move": "Spike Cannon"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Filmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Rasenmon Fury Mode",
                "method": "Lv50"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "399",
        "name": "Rasenmon Fury Mode",
                "types": [
            "Poison",
            "Dark"
        ],
        "ability": "Berserk",
        "hiddenAbility": "Reckless",
        "evoMove": "Despair Vortex",
        "moves": [
            {
                "level": "54",
                "move": "Outrage"
            },
            {
                "level": "80",
                "move": "Gift of Darkness"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Stiffilmon",
                "method": "Lv50"
            }
        ],
        "next": [
            {
                "name": "Rasenmon True Form",
                "method": "Friendship"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "400",
        "name": "Rasenmon True Form",
                "types": [
            "Electric",
            "Poison"
        ],
        "ability": "Poison Point",
        "hiddenAbility": "Iron Barbs",
        "evoMove": "Plasma Fists",
        "moves": [
            {
                "level": "53",
                "move": "Wild Charge"
            },
            {
                "level": "57",
                "move": "Close Combat"
            },
            {
                "level": "59",
                "move": "Malignant Chain"
            },
            {
                "level": "62",
                "move": "Toxic"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Focus Blast"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Rasenmon Fury Mode",
                "method": "Friendship"
            }
        ],
        "next": [],
        "stage": "Ultra",
        "cardLevel": 7
    },
    {
        "id": "401",
        "name": "Pulsemon",
                "types": [
            "Electric"
        ],
        "ability": "Static",
        "hiddenAbility": "Volt Absorb",
        "evoMove": "Quick Attack",
        "moves": [
            {
                "level": "6",
                "move": "Thunder Wave"
            },
            {
                "level": "9",
                "move": "Spark"
            },
            {
                "level": "15",
                "move": "Shock Wave"
            },
            {
                "level": "17",
                "move": "Work Up"
            }
        ],
        "locations": [
            "Route 116",
            "Tentomon Crest",
            "Old Mauville"
        ],
        "prev": [],
        "next": [
            {
                "name": "Bulkmon",
                "method": "Work Up"
            },
            {
                "name": "Exermon",
                "method": "Meditate"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "402",
        "name": "Bulkmon",
                "types": [
            "Electric",
            "Fighting"
        ],
        "ability": "Simple",
        "hiddenAbility": "Static",
        "evoMove": "Thunder Punch",
        "moves": [
            {
                "level": "19",
                "move": "Bulk Up"
            },
            {
                "level": "21",
                "move": "Comet Punch"
            },
            {
                "level": "23",
                "move": "Mach Punch"
            },
            {
                "level": "26",
                "move": "Wild Charge"
            },
            {
                "level": "29",
                "move": "Brick Break"
            },
            {
                "level": "32",
                "move": "Charge Beam"
            }
        ],
        "locations": [
            "Old Mauville"
        ],
        "prev": [
            {
                "name": "Pulsemon",
                "method": "Work Up"
            }
        ],
        "next": [
            {
                "name": "Boutmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "403",
        "name": "Boutmon",
                "types": [
            "Electric",
            "Fighting"
        ],
        "ability": "Simple",
        "hiddenAbility": "Static",
        "evoMove": "Triple Kick",
        "moves": [
            {
                "level": "33",
                "move": "Electric Cloud"
            },
            {
                "level": "36",
                "move": "Volt Switch"
            },
            {
                "level": "39",
                "move": "Charge"
            },
            {
                "level": "41",
                "move": "Coaching"
            },
            {
                "level": "44",
                "move": "Thunderous Kick"
            },
            {
                "level": "47",
                "move": "Aura Sphere"
            },
            {
                "level": "50",
                "move": "Octolock"
            },
            {
                "level": "53",
                "move": "Thunderclap"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Bulkmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Kazuchimon",
                "method": "Lv54"
            },
            {
                "name": "Shroudmon",
                "method": "Malicious Armor"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "404",
        "name": "Kazuchimon",
                "types": [
            "Electric",
            "Fighting"
        ],
        "ability": "Simple",
        "hiddenAbility": "Static",
        "evoMove": "Nitou Seirai",
        "moves": [
            {
                "level": "55",
                "move": "Sacred Sword"
            },
            {
                "level": "56",
                "move": "Dual Wield"
            },
            {
                "level": "59",
                "move": "Swords Dance"
            },
            {
                "level": "62",
                "move": "Thunder Cage"
            },
            {
                "level": "65",
                "move": "Electric Terrain"
            },
            {
                "level": "68",
                "move": "Cross Chop"
            },
            {
                "level": "71",
                "move": "Electro Drift"
            },
            {
                "level": "74",
                "move": "Bolt Strike"
            },
            {
                "level": "77",
                "move": "Close Combat"
            },
            {
                "level": "80",
                "move": "Double Shock"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Boutmon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Fenriloogamon Takemikazuchi",
                "method": "Fenriloogamon Jogress"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "405",
        "name": "Exermon",
                "types": [
            "Bug",
            "Magic"
        ],
        "ability": "Telepathy",
        "hiddenAbility": "Solar Power",
        "evoMove": "Silver Wind",
        "moves": [
            {
                "level": "19",
                "move": "Magic Attack"
            },
            {
                "level": "21",
                "move": "Calm Mind"
            },
            {
                "level": "23",
                "move": "Mega Blaster"
            },
            {
                "level": "26",
                "move": "Signal Beam"
            },
            {
                "level": "29",
                "move": "Infestation"
            },
            {
                "level": "32",
                "move": "Miracle Eye"
            }
        ],
        "locations": [
            "Tentomon Crest",
            "Mirage Tower"
        ],
        "prev": [
            {
                "name": "Pulsemon",
                "method": "Meditate"
            }
        ],
        "next": [
            {
                "name": "Climbmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "406",
        "name": "Climbmon",
                "types": [
            "Bug",
            "Magic"
        ],
        "ability": "Quick Draw",
        "hiddenAbility": "Sharpness",
        "evoMove": "Rock Climb",
        "moves": [
            {
                "level": "33",
                "move": "Spell Sword"
            },
            {
                "level": "37",
                "move": "Feint Attack"
            },
            {
                "level": "41",
                "move": "Camouflage"
            },
            {
                "level": "44",
                "move": "Steel Blade"
            },
            {
                "level": "47",
                "move": "X-Scissor"
            },
            {
                "level": "50",
                "move": "Magic Fang"
            },
            {
                "level": "53",
                "move": "Leech Life"
            }
        ],
        "locations": [
            "Route 111"
        ],
        "prev": [
            {
                "name": "Exermon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Shivamon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "407",
        "name": "Shivamon",
                "types": [
            "Bug",
            "Magic"
        ],
        "ability": "Multiscale",
        "hiddenAbility": "Own Tempo",
        "evoMove": "Protect",
        "moves": [
            {
                "level": "56",
                "move": "Eldrich Blast"
            },
            {
                "level": "62",
                "move": "Whirlwind"
            },
            {
                "level": "65",
                "move": "Bug Buzz"
            },
            {
                "level": "68",
                "move": "Discharge"
            },
            {
                "level": "71",
                "move": "Cosmic Power"
            },
            {
                "level": "74",
                "move": "Power Split"
            },
            {
                "level": "77",
                "move": "Pain Split"
            },
            {
                "level": "80",
                "move": "Terrain Pulse"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Climbmon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "408",
        "name": "Shroudmon",
                "types": [
            "Dark",
            "Fighting"
        ],
        "ability": "Iron Fist",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Close Combat",
        "moves": [
            {
                "level": "55",
                "move": "Bullet Punch"
            },
            {
                "level": "56",
                "move": "Ghoul Punch"
            },
            {
                "level": "59",
                "move": "Belly Drum"
            },
            {
                "level": "62",
                "move": "Plasma Fists"
            },
            {
                "level": "65",
                "move": "Thunderous Kick"
            },
            {
                "level": "68",
                "move": "High Horsepower"
            },
            {
                "level": "71",
                "move": "Raging Fury"
            },
            {
                "level": "74",
                "move": "Sky Uppercut"
            },
            {
                "level": "77",
                "move": "Meteor Mash"
            },
            {
                "level": "80",
                "move": "Meggido Flame"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Boutmon",
                "method": "Malicious Armor"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "409",
        "name": "Loogamon",
                "types": [
            "Magic",
            "Fire"
        ],
        "ability": "Mold Breaker",
        "hiddenAbility": "Anticipation",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Magic Attack"
            },
            {
                "level": "12",
                "move": "Will-o-Wisp"
            },
            {
                "level": "15",
                "move": "Flame Charge"
            },
            {
                "level": "18",
                "move": "Fire Fang"
            }
        ],
        "locations": [
            "Route 116",
            "Route 121"
        ],
        "prev": [],
        "next": [
            {
                "name": "Loogarmon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "410",
        "name": "Loogarmon",
                "types": [
            "Magic",
            "Fire"
        ],
        "ability": "Mold Breaker",
        "hiddenAbility": "Anticipation",
        "evoMove": "Mystical Fire",
        "moves": [
            {
                "level": "21",
                "move": "Roar"
            },
            {
                "level": "23",
                "move": "Demon Claw"
            },
            {
                "level": "26",
                "move": "Fire Tower"
            },
            {
                "level": "29",
                "move": "Magic Game"
            },
            {
                "level": "32",
                "move": "Safeguard"
            }
        ],
        "locations": [
            "Route 110",
            "Route 121"
        ],
        "prev": [
            {
                "name": "Loogamon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Helloogarmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "411",
        "name": "Helloogarmon",
                "types": [
            "Magic",
            "Fire"
        ],
        "ability": "Flame Body",
        "hiddenAbility": "Intimidate",
        "evoMove": "",
        "moves": [
            {
                "level": "50",
                "move": "Raging Fury"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Loogarmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Soloogarmon",
                "method": "Friendship"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "412",
        "name": "Soloogarmon",
                "types": [
            "Magic",
            "Fire"
        ],
        "ability": "Steam Engine",
        "hiddenAbility": "Inner Focus",
        "evoMove": "Spell Sword",
        "moves": [
            {
                "level": "36",
                "move": "Steel Blade"
            },
            {
                "level": "39",
                "move": "Extreme Speed"
            },
            {
                "level": "41",
                "move": "Swords Dance"
            },
            {
                "level": "44",
                "move": "Zen Headbutt"
            },
            {
                "level": "47",
                "move": "Heat Wave"
            },
            {
                "level": "50",
                "move": "Heavy Slam"
            },
            {
                "level": "53",
                "move": "Agility"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Helloogarmon",
                "method": "Friendship"
            }
        ],
        "next": [
            {
                "name": "Fenriloogamon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "413",
        "name": "Fenriloogamon",
                "types": [
            "Magic",
            "Fire"
        ],
        "ability": "Clear Body",
        "hiddenAbility": "Inner Focus",
        "evoMove": "Fusion Flare",
        "moves": [
            {
                "level": "55",
                "move": "Eldrich Blast"
            },
            {
                "level": "56",
                "move": "Double Team"
            },
            {
                "level": "59",
                "move": "Substitute"
            },
            {
                "level": "62",
                "move": "Magic Fang"
            },
            {
                "level": "65",
                "move": "Magic Terrain"
            },
            {
                "level": "68",
                "move": "Expanding Force"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Blue Flare"
            },
            {
                "level": "77",
                "move": "Sunny Day"
            },
            {
                "level": "80",
                "move": "Spell Blast"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Soloogarmon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Fenriloogamon Takemikazuchi",
                "method": "Jogress Kazuchimon"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "414",
        "name": "Fenriloogamon Takemikazuchi",
                "types": [
            "Magic",
            "Electric"
        ],
        "ability": "Sharpness",
        "hiddenAbility": "Inner Focus",
        "evoMove": "Takemikazuchi",
        "moves": [
            {
                "level": "83",
                "move": "Magic Blade"
            },
            {
                "level": "86",
                "move": "Omega Blade"
            },
            {
                "level": "89",
                "move": "Wildbolt Storm"
            },
            {
                "level": "92",
                "move": "Red Inferno"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Kazuchimon",
                "method": "Fenriloogamon Jogress"
            },
            {
                "name": "Fenriloogamon",
                "method": "Jogress Kazuchimon"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "415",
        "name": "Kudamon",
                "types": [
            "Holy"
        ],
        "ability": "Levitate",
        "hiddenAbility": "Clear Body",
        "evoMove": "Holy Shot",
        "moves": [
            {
                "level": "6",
                "move": "Bullet Punch"
            },
            {
                "level": "9",
                "move": "Flash"
            },
            {
                "level": "12",
                "move": "Wrap"
            },
            {
                "level": "15",
                "move": "Quick Attack"
            },
            {
                "level": "18",
                "move": "Mirror Shot"
            }
        ],
        "locations": [
            "Route 101"
        ],
        "prev": [],
        "next": [
            {
                "name": "Reppamon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "416",
        "name": "Reppamon",
                "types": [
            "Holy"
        ],
        "ability": "Hyper Cutter",
        "hiddenAbility": "Justified",
        "evoMove": "Angel Blade",
        "moves": [
            {
                "level": "19",
                "move": "Wind Cutter"
            },
            {
                "level": "21",
                "move": "Steel Blade"
            },
            {
                "level": "23",
                "move": "Aerial Ace"
            },
            {
                "level": "26",
                "move": "Fury Cutter"
            },
            {
                "level": "29",
                "move": "Neko Punch"
            },
            {
                "level": "32",
                "move": "Tornado"
            }
        ],
        "locations": [
            "Route 110 (Guardian)",
            "Gabumon Crest"
        ],
        "prev": [
            {
                "name": "Kudamon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Tyilinmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "417",
        "name": "Tyilinmon",
                "types": [
            "Holy",
            "Flying"
        ],
        "ability": "Hospitality",
        "hiddenAbility": "Justified",
        "evoMove": "Holy Blast",
        "moves": [
            {
                "level": "33",
                "move": "Double Team"
            },
            {
                "level": "36",
                "move": "Air Slash"
            },
            {
                "level": "39",
                "move": "Extreme Speed"
            },
            {
                "level": "41",
                "move": "Heal Pulse"
            },
            {
                "level": "44",
                "move": "Excalibur"
            },
            {
                "level": "47",
                "move": "Iron Head"
            },
            {
                "level": "50",
                "move": "Drill Peck"
            },
            {
                "level": "53",
                "move": "Recover"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Reppamon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Mitamamon",
                "method": "Lv54"
            },
            {
                "name": "Sleipmon",
                "method": "Auspicious Armor"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "418",
        "name": "Mitamamon",
                "types": [
            "Holy",
            "Flying"
        ],
        "ability": "Wonder Guard",
        "hiddenAbility": "Wonder Guard",
        "evoMove": "Holy Flame",
        "moves": [
            {
                "level": "55",
                "move": "Heat Wave"
            },
            {
                "level": "56",
                "move": "River of Power"
            },
            {
                "level": "59",
                "move": "Aeroblast"
            },
            {
                "level": "62",
                "move": "7 Heavens"
            },
            {
                "level": "65",
                "move": "Calm Mind"
            },
            {
                "level": "68",
                "move": "Dragon Pulse"
            },
            {
                "level": "71",
                "move": "Searing Shot"
            },
            {
                "level": "74",
                "move": "Wildbolt Storm"
            },
            {
                "level": "77",
                "move": "Draco Meteor"
            },
            {
                "level": "80",
                "move": "Bleakwind Storm"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Tyilinmon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "419",
        "name": "Sleipmon",
                "types": [
            "Holy",
            "Ice"
        ],
        "ability": "Slush Rush",
        "hiddenAbility": "Snow Warning",
        "evoMove": "Glacial Lance",
        "moves": [
            {
                "level": "55",
                "move": "Holy Arrow"
            },
            {
                "level": "56",
                "move": "High Jump Kick"
            },
            {
                "level": "59",
                "move": "High Horsepower"
            },
            {
                "level": "62",
                "move": "Divine Breaker"
            },
            {
                "level": "65",
                "move": "Swords Dance"
            },
            {
                "level": "68",
                "move": "Glacial Lance"
            },
            {
                "level": "71",
                "move": "Focus Blast"
            },
            {
                "level": "74",
                "move": "Hail"
            },
            {
                "level": "77",
                "move": "Absolute Zero"
            },
            {
                "level": "80",
                "move": "Bleakwind Storm"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Tyilinmon",
                "method": "Auspicious Armor"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "420",
        "name": "Ghostmon",
                "types": [
            "Undead"
        ],
        "ability": "Levitate",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Astonish",
        "moves": [
            {
                "level": "6",
                "move": "Magic Attack"
            },
            {
                "level": "9",
                "move": "Thief"
            },
            {
                "level": "12",
                "move": "Confuse Ray"
            },
            {
                "level": "15",
                "move": "Shadow Sneak"
            },
            {
                "level": "18",
                "move": "Bada Boom"
            }
        ],
        "locations": [
            "Granite Cave F2/F3",
            "Mt Pyre"
        ],
        "prev": [],
        "next": [
            {
                "name": "Bakemon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "421",
        "name": "Bakemon",
                "types": [
            "Undead"
        ],
        "ability": "Levitate",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Necro Mist",
        "moves": [
            {
                "level": "21",
                "move": "Poison Gas"
            },
            {
                "level": "23",
                "move": "Mean Look"
            },
            {
                "level": "26",
                "move": "Karate Chop"
            },
            {
                "level": "29",
                "move": "Phantom Claw"
            },
            {
                "level": "32",
                "move": "Demon Claw"
            }
        ],
        "locations": [
            "Granite Cave F2",
            "Mt Pyre",
            "Agumon Crest"
        ],
        "prev": [
            {
                "name": "Ghostmon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Phantomon",
                "method": "Lv32"
            },
            {
                "name": "Pumpmon",
                "method": "Wood Data"
            },
            {
                "name": "Mummymon",
                "method": "Dark Data"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "422",
        "name": "Phantomon",
                "types": [
            "Undead"
        ],
        "ability": "Levitate",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Soul Chopper",
        "moves": [
            {
                "level": "33",
                "move": "Curse"
            },
            {
                "level": "36",
                "move": "Steel Blade"
            },
            {
                "level": "39",
                "move": "Perish Song"
            },
            {
                "level": "41",
                "move": "Death Ball"
            },
            {
                "level": "44",
                "move": "Spirit Shackle"
            },
            {
                "level": "47",
                "move": "Snake Bandage"
            },
            {
                "level": "50",
                "move": "X-Scissor"
            },
            {
                "level": "53",
                "move": "Spell Sword"
            }
        ],
        "locations": [
            "Mt Pyre"
        ],
        "prev": [
            {
                "name": "Bakemon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Necromon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "423",
        "name": "Necromon",
                "types": [
            "Undead",
            "Magic"
        ],
        "ability": "Grim Neigh",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Astral Barrage",
        "moves": [
            {
                "level": "55",
                "move": "Stone Axe"
            },
            {
                "level": "56",
                "move": "Torment"
            },
            {
                "level": "59",
                "move": "Grave Scream"
            },
            {
                "level": "62",
                "move": "Spell Blast"
            },
            {
                "level": "65",
                "move": "Sheer Cold"
            },
            {
                "level": "68",
                "move": "Soul Predator"
            },
            {
                "level": "71",
                "move": "Aether Strike"
            },
            {
                "level": "74",
                "move": "Ruination"
            },
            {
                "level": "77",
                "move": "Revival Blessing"
            },
            {
                "level": "80",
                "move": "Stored Power"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Phantomon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "424",
        "name": "Pumpmon",
                "types": [
            "Undead",
            "Grass"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Shadow Tag",
        "evoMove": "Halloween Bomb",
        "moves": [
            {
                "level": "33",
                "move": "Trick-or-Treat"
            },
            {
                "level": "36",
                "move": "Seed Bomb"
            },
            {
                "level": "39",
                "move": "Fire Tower"
            },
            {
                "level": "41",
                "move": "Nasty Plot"
            },
            {
                "level": "44",
                "move": "Infernal Parade"
            },
            {
                "level": "47",
                "move": "Grass Tower"
            },
            {
                "level": "50",
                "move": "Meltdown"
            },
            {
                "level": "53",
                "move": "Fake Out"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Bakemon",
                "method": "Wood Data"
            }
        ],
        "next": [
            {
                "name": "NoblePumpmon",
                "method": "Lv50 (Corrected from Pumpkinmon)"
            },
            {
                "name": "NoblePumpmon",
                "method": "Lv50"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "425",
        "name": "NoblePumpmon",
                "types": [
            "Undead",
            "Grass"
        ],
        "ability": "Intimidate",
        "hiddenAbility": "Shadow Tag",
        "evoMove": "Trick-or-Treat Wallace",
        "moves": [
            {
                "level": "55",
                "move": "Apple Acid"
            },
            {
                "level": "56",
                "move": "Teatime"
            },
            {
                "level": "59",
                "move": "Ghost Dive"
            },
            {
                "level": "62",
                "move": "Scald"
            },
            {
                "level": "65",
                "move": "Matcha Gotcha"
            },
            {
                "level": "68",
                "move": "Poltergeist"
            },
            {
                "level": "71",
                "move": "Nasty Plot"
            },
            {
                "level": "74",
                "move": "Teeter Dance"
            },
            {
                "level": "77",
                "move": "Astral Barrage"
            },
            {
                "level": "80",
                "move": "Seed Flare"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Pumpmon",
                "method": "Lv50 (Corrected from Pumpkinmon)"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "426",
        "name": "Mummymon",
                "types": [
            "Undead",
            "Poison"
        ],
        "ability": "Mummy",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Snake Bandage",
        "moves": [
            {
                "level": "33",
                "move": "Necrophobia"
            },
            {
                "level": "36",
                "move": "Pulse Laser"
            },
            {
                "level": "39",
                "move": "Curse"
            },
            {
                "level": "41",
                "move": "Sludge Bomb"
            },
            {
                "level": "44",
                "move": "Death Ball"
            },
            {
                "level": "47",
                "move": "Spread Fire"
            },
            {
                "level": "50",
                "move": "Toxic"
            },
            {
                "level": "53",
                "move": "Toxic Spikes"
            }
        ],
        "locations": [
            "Route 111 (Desert)"
        ],
        "prev": [
            {
                "name": "Bakemon",
                "method": "Dark Data"
            }
        ],
        "next": [
            {
                "name": "Pharaohmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "427",
        "name": "Pharaohmon",
                "types": [
            "Undead",
            "Poison"
        ],
        "ability": "Mummy",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Astral Barrage",
        "moves": [
            {
                "level": "55",
                "move": "Acid Breath"
            },
            {
                "level": "56",
                "move": "King's Shield"
            },
            {
                "level": "59",
                "move": "Necro Magic"
            },
            {
                "level": "62",
                "move": "Disable"
            },
            {
                "level": "65",
                "move": "Gastro Acid"
            },
            {
                "level": "68",
                "move": "Dark Void"
            },
            {
                "level": "71",
                "move": "Last Respects"
            },
            {
                "level": "80",
                "move": "Necro Eclipse"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Mummymon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "428",
        "name": "Tsukaimon",
                "types": [
            "Flying",
            "Dark"
        ],
        "ability": "Competitive",
        "hiddenAbility": "Prankster",
        "evoMove": "Sonic Jab",
        "moves": [
            {
                "level": "6",
                "move": "Gust"
            },
            {
                "level": "9",
                "move": "Thief"
            },
            {
                "level": "12",
                "move": "Petit Flame"
            },
            {
                "level": "15",
                "move": "Bada Boom"
            },
            {
                "level": "18",
                "move": "Smog"
            }
        ],
        "locations": [
            "Granite Cave F2",
            "Route 121"
        ],
        "prev": [],
        "next": [
            {
                "name": "Witchmon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "429",
        "name": "Witchmon",
                "types": [
            "Dark",
            "Magic"
        ],
        "ability": "Competitive",
        "hiddenAbility": "Prankster",
        "evoMove": "Water Pulse",
        "moves": [
            {
                "level": "19",
                "move": "Magic Game"
            },
            {
                "level": "21",
                "move": "Double Team"
            },
            {
                "level": "23",
                "move": "Air Slash"
            },
            {
                "level": "26",
                "move": "Water Tower"
            },
            {
                "level": "29",
                "move": "Dark Pulse"
            },
            {
                "level": "32",
                "move": "Ultra Turbulence"
            }
        ],
        "locations": [
            "Route 111",
            "110 (Guardian)",
            "Route 119",
            "Route 121",
            "Mirage Tower"
        ],
        "prev": [
            {
                "name": "Tsukaimon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "LadyDevimon",
                "method": "Lv32 Lowkey"
            },
            {
                "name": "Bastemon",
                "method": "Lv32 Amped"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "430",
        "name": "LadyDevimon",
                "types": [
            "Dark",
            "Poison"
        ],
        "ability": "Mold Breaker",
        "hiddenAbility": "Prankster",
        "evoMove": "Night Raid",
        "moves": [
            {
                "level": "33",
                "move": "Toxic"
            },
            {
                "level": "36",
                "move": "Thunder Punch"
            },
            {
                "level": "39",
                "move": "Venoshock"
            },
            {
                "level": "41",
                "move": "Attract"
            },
            {
                "level": "44",
                "move": "Jump Kick"
            },
            {
                "level": "47",
                "move": "Night Daze"
            },
            {
                "level": "50",
                "move": "Sludge Bomb"
            },
            {
                "level": "53",
                "move": "Thunderclap"
            }
        ],
        "locations": [
            "Route 118"
        ],
        "prev": [
            {
                "name": "Hudiemon",
                "method": "Lv30"
            },
            {
                "name": "Witchmon",
                "method": "Lv32 Lowkey"
            }
        ],
        "next": [
            {
                "name": "Lilithmon",
                "method": "Lv54"
            },
            {
                "name": "Dianamon",
                "method": "Lunar Scale"
            },
            {
                "name": "Mastemon",
                "method": "Angewomon Jogress"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "431",
        "name": "Dianamon",
                "types": [
            "Dark",
            "Ice"
        ],
        "ability": "Snow Cloak",
        "hiddenAbility": "Shadow Shield",
        "evoMove": "Dark Void",
        "moves": [
            {
                "level": "55",
                "move": "Lunar Dance"
            },
            {
                "level": "56",
                "move": "Foul Play"
            },
            {
                "level": "59",
                "move": "Moonblast"
            },
            {
                "level": "62",
                "move": "Moonlight"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Glacial Lance"
            },
            {
                "level": "71",
                "move": "Play Rough"
            },
            {
                "level": "74",
                "move": "Gift of Darkness"
            },
            {
                "level": "77",
                "move": "Moongeist Beam"
            },
            {
                "level": "80",
                "move": "Spell Blast"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "LadyDevimon",
                "method": "Lunar Scale"
            }
        ],
        "next": [
            {
                "name": "GraceNovamon",
                "method": "Apollomon Jogress"
            },
            {
                "name": "GraceNovamon",
                "method": "Jogress Apollomon"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "432",
        "name": "Mastemon",
                "types": [
            "Holy",
            "Dark"
        ],
        "ability": "Dazzling",
        "hiddenAbility": "As One",
        "evoMove": "Chaos Degrade",
        "moves": [
            {
                "level": "53",
                "move": "Dark Void"
            },
            {
                "level": "56",
                "move": "Trinity Gospel"
            },
            {
                "level": "59",
                "move": "Moonblast"
            },
            {
                "level": "62",
                "move": "Ruination"
            },
            {
                "level": "65",
                "move": "Cosmic Power"
            },
            {
                "level": "68",
                "move": "Hyperspace Fury"
            },
            {
                "level": "71",
                "move": "Hyperspace Hole"
            },
            {
                "level": "74",
                "move": "Edens Javelin"
            },
            {
                "level": "77",
                "move": "Moongeist Beam"
            },
            {
                "level": "80",
                "move": "Necro Eclipse"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "LadyDevimon",
                "method": "Angewomon Jogress"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "433",
        "name": "Bastemon",
                "types": [
            "Dark",
            "Fairy"
        ],
        "ability": "Cute Charm",
        "hiddenAbility": "Prankster",
        "evoMove": "Drain Slash",
        "moves": [
            {
                "level": "33",
                "move": "Draining Kiss"
            },
            {
                "level": "36",
                "move": "Attract"
            },
            {
                "level": "39",
                "move": "Drain Punch"
            },
            {
                "level": "41",
                "move": "Giga Drain"
            },
            {
                "level": "44",
                "move": "Devil Sword"
            },
            {
                "level": "47",
                "move": "Hone Claws"
            },
            {
                "level": "50",
                "move": "Aerial Ace"
            },
            {
                "level": "53",
                "move": "Wicked Blow"
            }
        ],
        "locations": [
            "Route 118",
            "Route 119"
        ],
        "prev": [
            {
                "name": "Witchmon",
                "method": "Lv32 Amped"
            }
        ],
        "next": [
            {
                "name": "Lilithmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "434",
        "name": "Lilithmon",
                "types": [
            "Dark",
            "Poison"
        ],
        "ability": "Mold Breaker",
        "hiddenAbility": "Prankster",
        "evoMove": "Darkness Love",
        "moves": [
            {
                "level": "55",
                "move": "Malignant Chain"
            },
            {
                "level": "56",
                "move": "Eldrich Blast"
            },
            {
                "level": "59",
                "move": "Swagger"
            },
            {
                "level": "65",
                "move": "Night Daze"
            },
            {
                "level": "68",
                "move": "Acid Breath"
            },
            {
                "level": "71",
                "move": "Astral Barrage"
            },
            {
                "level": "74",
                "move": "Necro Eclipse"
            },
            {
                "level": "77",
                "move": "Spell Blast"
            },
            {
                "level": "80",
                "move": "Ruination"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "LadyDevimon",
                "method": "Lv54"
            },
            {
                "name": "Bastemon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "435",
        "name": "Labramon",
                "types": [
            "Normal"
        ],
        "ability": "Frisbee Fetch",
        "hiddenAbility": "Intimidate",
        "evoMove": "Bite",
        "moves": [
            {
                "level": "6",
                "move": "Life Dew"
            },
            {
                "level": "9",
                "move": "Howl"
            },
            {
                "level": "12",
                "move": "Snarl"
            },
            {
                "level": "15",
                "move": "Round"
            },
            {
                "level": "18",
                "move": "Fury Swipes"
            }
        ],
        "locations": [
            "Route 101",
            "Route 102",
            "Route 104",
            "Spear Pillar"
        ],
        "prev": [],
        "next": [
            {
                "name": "Seasarmon",
                "method": "Lv18 Lowkey"
            },
            {
                "name": "Dobermon",
                "method": "Lv18 Amped"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "436",
        "name": "Seasarmon",
                "types": [
            "Holy"
        ],
        "ability": "Guard Dog",
        "hiddenAbility": "Intimidate",
        "evoMove": "Light Laser",
        "moves": [
            {
                "level": "19",
                "move": "Misty Terrain"
            },
            {
                "level": "21",
                "move": "Fairy Wind"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Shooting Star"
            },
            {
                "level": "29",
                "move": "Roar"
            },
            {
                "level": "32",
                "move": "Safeguard"
            }
        ],
        "locations": [
            "Route 110",
            "110 (Guardian)",
            "Gabumon Crest",
            "Spear Pillar"
        ],
        "prev": [
            {
                "name": "Labramon",
                "method": "Lv18 Lowkey"
            }
        ],
        "next": [
            {
                "name": "Caturamon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "437",
        "name": "Caturamon",
                "types": [
            "Holy"
        ],
        "ability": "Guard Dog",
        "hiddenAbility": "Intimidate",
        "evoMove": "Holy Blast",
        "moves": [
            {
                "level": "33",
                "move": "Heavy Slam"
            },
            {
                "level": "36",
                "move": "Earth Power"
            },
            {
                "level": "39",
                "move": "Hyper Voice"
            },
            {
                "level": "41",
                "move": "Evil Bite"
            },
            {
                "level": "44",
                "move": "Moonblast"
            },
            {
                "level": "47",
                "move": "Trinity Gospel"
            },
            {
                "level": "50",
                "move": "Energy Ball"
            },
            {
                "level": "53",
                "move": "Hammer Arm"
            }
        ],
        "locations": [
            "Route 114"
        ],
        "prev": [
            {
                "name": "Seasarmon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Erlangmon",
                "method": "Lv54 (Corrected from Canturamon)"
            },
            {
                "name": "Erlangmon",
                "method": "Evolution"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "438",
        "name": "Erlangmon",
                "types": [
            "Holy"
        ],
        "ability": "Illusion",
        "hiddenAbility": "Super Luck",
        "evoMove": "Edens Javelin",
        "moves": [
            {
                "level": "55",
                "move": "Laser Focus"
            },
            {
                "level": "56",
                "move": "Dual Wield"
            },
            {
                "level": "59",
                "move": "Hyper Drill"
            },
            {
                "level": "62",
                "move": "Heaven Judge"
            },
            {
                "level": "65",
                "move": "Sacred Sword"
            },
            {
                "level": "68",
                "move": "Swords Dance"
            },
            {
                "level": "71",
                "move": "Noble Roar"
            },
            {
                "level": "74",
                "move": "Substitute"
            },
            {
                "level": "77",
                "move": "Garuru Cannon"
            },
            {
                "level": "80",
                "move": "Sharp Claymore"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Caturamon",
                "method": "Lv54 (Corrected from Canturamon)"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "439",
        "name": "Dobermon",
                "types": [
            "Dark"
        ],
        "ability": "Guard Dog",
        "hiddenAbility": "Intimidate",
        "evoMove": "Black Beam",
        "moves": [
            {
                "level": "21",
                "move": "Gastro Acid"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Odor Sleuth"
            },
            {
                "level": "29",
                "move": "Evil Bite"
            },
            {
                "level": "32",
                "move": "Imprison"
            }
        ],
        "locations": [
            "Route 103 (Part 2)",
            "Route 110",
            "Gabumon Crest"
        ],
        "prev": [
            {
                "name": "Labramon",
                "method": "Lv18 Amped"
            }
        ],
        "next": [
            {
                "name": "Cerberusmon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "440",
        "name": "Cerberusmon",
                "types": [
            "Dark",
            "Fire"
        ],
        "ability": "Guard Dog",
        "hiddenAbility": "Intimidate",
        "evoMove": "Hell Fire",
        "moves": [
            {
                "level": "33",
                "move": "Will-o-Wisp"
            },
            {
                "level": "36",
                "move": "Burning Bealousy"
            },
            {
                "level": "39",
                "move": "Sucker Punch"
            },
            {
                "level": "41",
                "move": "Tri Attack"
            },
            {
                "level": "44",
                "move": "Dark Pulse"
            },
            {
                "level": "47",
                "move": "Infernal Parade"
            },
            {
                "level": "50",
                "move": "Meltdown"
            },
            {
                "level": "53",
                "move": "Rashomon"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Dobermon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Anubismon",
                "method": "as Anubismon doesn't evolve from itself. Assuming it evolves from )"
            },
            {
                "name": "Anubismon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "441",
        "name": "Anubismon",
                "types": [
            "Undead",
            "Holy"
        ],
        "ability": "Guard Dog",
        "hiddenAbility": "Shadow Tag",
        "evoMove": "Astral Barrage",
        "moves": [
            {
                "level": "55",
                "move": "Holy Blast"
            },
            {
                "level": "56",
                "move": "Revival Blessing"
            },
            {
                "level": "59",
                "move": "Ancient Power"
            },
            {
                "level": "62",
                "move": "Heal Pulse"
            },
            {
                "level": "65",
                "move": "Calm Mind"
            },
            {
                "level": "68",
                "move": "Distortion"
            },
            {
                "level": "71",
                "move": "Destiny Bond"
            },
            {
                "level": "74",
                "move": "Last Respects"
            },
            {
                "level": "77",
                "move": "Spell Blast"
            },
            {
                "level": "80",
                "move": "Heaven Judge"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Cerberusmon",
                "method": "as Anubismon doesn't evolve from itself. Assuming it evolves from )"
            },
            {
                "name": "Anubismon",
                "method": "Lv54 (This seems to be a typo in the original file"
            }
        ],
        "next": [
            {
                "name": "Anubismon",
                "method": "Lv54 (This seems to be a typo in the original file"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "442",
        "name": "Crabmon",
                "types": [
            "Water"
        ],
        "ability": "Hyper Cutter",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Scratch",
        "moves": [
            {
                "level": "6",
                "move": "Fury Cutter"
            },
            {
                "level": "9",
                "move": "Metal Claw"
            },
            {
                "level": "12",
                "move": "Razor Shell"
            },
            {
                "level": "15",
                "move": "Water Shot"
            },
            {
                "level": "18",
                "move": "Body Press"
            }
        ],
        "locations": [
            "Route 103 (Part 2)"
        ],
        "prev": [],
        "next": [
            {
                "name": "Ebidramon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "443",
        "name": "Ebidramon",
                "types": [
            "Water",
            "Dragon"
        ],
        "ability": "Defiant",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Aqua Cutter",
        "moves": [
            {
                "level": "21",
                "move": "Mud Shot"
            },
            {
                "level": "23",
                "move": "Demon Claw"
            },
            {
                "level": "26",
                "move": "Triple Dive"
            },
            {
                "level": "29",
                "move": "Drill Buster"
            },
            {
                "level": "32",
                "move": "Mud Bomb"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Crabmon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Gusokumon",
                "method": "Lv32"
            },
            {
                "name": "MarineKimeramon",
                "method": "Water Data"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "444",
        "name": "MarineKimeramon",
                "types": [
            "Water",
            "Electric"
        ],
        "ability": "Beast Boost",
        "hiddenAbility": "Moody",
        "evoMove": "Bolt Beak",
        "moves": [
            {
                "level": "33",
                "move": "Whirlpool"
            },
            {
                "level": "36",
                "move": "Steel Blade"
            },
            {
                "level": "39",
                "move": "Ice Fang"
            },
            {
                "level": "41",
                "move": "Thunder Fang"
            },
            {
                "level": "44",
                "move": "Crabhammer"
            },
            {
                "level": "47",
                "move": "Titan Drill"
            },
            {
                "level": "50",
                "move": "Icicle Crash"
            },
            {
                "level": "53",
                "move": "Anchor Shot"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Ebidramon",
                "method": "Water Data"
            }
        ],
        "next": [
            {
                "name": "Regalecusmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "445",
        "name": "Gusokumon",
                "types": [
            "Water",
            "Bug"
        ],
        "ability": "Shell Armor",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Crabhammer",
        "moves": [
            {
                "level": "33",
                "move": "Megaton Press"
            },
            {
                "level": "36",
                "move": "Giga Destroyer"
            },
            {
                "level": "39",
                "move": "Stealth Rock"
            },
            {
                "level": "41",
                "move": "Shell Smash"
            },
            {
                "level": "44",
                "move": "Shell Side Arm"
            },
            {
                "level": "47",
                "move": "Titan Drill"
            },
            {
                "level": "50",
                "move": "River of Power"
            },
            {
                "level": "53",
                "move": "X-Scissor"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Ebidramon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Regalecusmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "446",
        "name": "Regalecusmon",
                "types": [
            "Water",
            "Electric"
        ],
        "ability": "Beast Boost",
        "hiddenAbility": "Moody",
        "evoMove": "Aqua Viper",
        "moves": [
            {
                "level": "55",
                "move": "Dual Wield"
            },
            {
                "level": "56",
                "move": "Fishious Rend"
            },
            {
                "level": "59",
                "move": "Spike Finish"
            },
            {
                "level": "62",
                "move": "Discharge"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Ice Hammer"
            },
            {
                "level": "71",
                "move": "Hydro Steam"
            },
            {
                "level": "74",
                "move": "Wildbolt Storm"
            },
            {
                "level": "77",
                "move": "Hyper Drill"
            },
            {
                "level": "80",
                "move": "Rain Dance"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "MarineKimeramon",
                "method": "Lv54"
            },
            {
                "name": "Gusokumon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "447",
        "name": "Monmon",
                "types": [
            "Normal"
        ],
        "ability": "Keen Eye",
        "hiddenAbility": "Super Luck",
        "evoMove": "Pound",
        "moves": [
            {
                "level": "6",
                "move": "Double Kick"
            },
            {
                "level": "9",
                "move": "Bullet Seed"
            },
            {
                "level": "12",
                "move": "Wrap"
            },
            {
                "level": "15",
                "move": "Mud Shot"
            },
            {
                "level": "18",
                "move": "Headbutt"
            }
        ],
        "locations": [
            "Route 116"
        ],
        "prev": [],
        "next": [
            {
                "name": "Apemon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "448",
        "name": "Apemon",
                "types": [
            "Fighting",
            "Holy"
        ],
        "ability": "Skill Link",
        "hiddenAbility": "Super Luck",
        "evoMove": "Pin Missile",
        "moves": [
            {
                "level": "19",
                "move": "Heaven's Knuckle"
            },
            {
                "level": "21",
                "move": "Brutal Swing"
            },
            {
                "level": "23",
                "move": "Fire Punch"
            },
            {
                "level": "26",
                "move": "Shooting Star"
            },
            {
                "level": "29",
                "move": "Neko Punch"
            },
            {
                "level": "32",
                "move": "Brick Break"
            }
        ],
        "locations": [
            "Route 114"
        ],
        "prev": [
            {
                "name": "Monmon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Gokuumon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "449",
        "name": "Gokuumon",
                "types": [
            "Fighting"
        ],
        "ability": "Long Reach",
        "hiddenAbility": "Super Luck",
        "evoMove": "Wild Charge",
        "moves": [
            {
                "level": "33",
                "move": "Extreme Speed"
            },
            {
                "level": "36",
                "move": "Double Team"
            },
            {
                "level": "39",
                "move": "Dual Wield"
            },
            {
                "level": "41",
                "move": "Fly"
            },
            {
                "level": "44",
                "move": "Electric Cloud"
            },
            {
                "level": "47",
                "move": "Cross Chop"
            },
            {
                "level": "50",
                "move": "Bonemerang"
            },
            {
                "level": "53",
                "move": "Acrobatics"
            }
        ],
        "locations": [
            "Spear Pillar F3/F5"
        ],
        "prev": [
            {
                "name": "Apemon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Shakamon",
                "method": "Jogress Sagomon"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "450",
        "name": "Kamemon",
                "types": [
            "Water",
            "Steel"
        ],
        "ability": "Shell Armor",
        "hiddenAbility": "Solid Rock",
        "evoMove": "Sonic Jab",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "Metal Cannon"
            },
            {
                "level": "12",
                "move": "Aqua Jet"
            },
            {
                "level": "15",
                "move": "Bubble Beam"
            },
            {
                "level": "18",
                "move": "Headbutt"
            }
        ],
        "locations": [],
        "prev": [],
        "next": [
            {
                "name": "Gawappamon",
                "method": "Lv18"
            },
            {
                "name": "Tylomon",
                "method": "Water Data"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "451",
        "name": "Gawappamon",
                "types": [
            "Water",
            "Steel"
        ],
        "ability": "Dancer",
        "hiddenAbility": "Tangled Feet",
        "evoMove": "Jet Punch",
        "moves": [
            {
                "level": "21",
                "move": "Mirror Shot"
            },
            {
                "level": "23",
                "move": "Low Sweep"
            },
            {
                "level": "26",
                "move": "Water Tower"
            },
            {
                "level": "29",
                "move": "Fury Swipes"
            },
            {
                "level": "32",
                "move": "Rain Dance"
            }
        ],
        "locations": [
            "Route 111",
            "110 (Guardian)"
        ],
        "prev": [
            {
                "name": "Kamemon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Sagomon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "452",
        "name": "Sagomon",
                "types": [
            "Water",
            "Steel"
        ],
        "ability": "Swift Swim",
        "hiddenAbility": "Tangled Feet",
        "evoMove": "Aqua Step",
        "moves": [
            {
                "level": "33",
                "move": "Steel Blade"
            },
            {
                "level": "36",
                "move": "Whirlpool"
            },
            {
                "level": "39",
                "move": "Earth Power"
            },
            {
                "level": "41",
                "move": "Scald"
            },
            {
                "level": "44",
                "move": "Iron Head"
            },
            {
                "level": "47",
                "move": "Muddy Water"
            },
            {
                "level": "50",
                "move": "Water Spout"
            },
            {
                "level": "53",
                "move": "Soak"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Gawappamon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "JumboGamemon",
                "method": "Lv54"
            },
            {
                "name": "Shakamon",
                "method": "Jogress Gokuumon"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "453",
        "name": "JumboGamemon",
                "types": [
            "Water",
            "Steel"
        ],
        "ability": "Shell Armor",
        "hiddenAbility": "Filter",
        "evoMove": "River of Power",
        "moves": [
            {
                "level": "55",
                "move": "Laser Cannon"
            },
            {
                "level": "56",
                "move": "Iron Defense"
            },
            {
                "level": "59",
                "move": "Shelter"
            },
            {
                "level": "62",
                "move": "Hydro Cannon"
            },
            {
                "level": "65",
                "move": "Laser Focus"
            },
            {
                "level": "68",
                "move": "Mugen Cannon"
            },
            {
                "level": "71",
                "move": "Heavy Slam"
            },
            {
                "level": "74",
                "move": "Body Press"
            },
            {
                "level": "77",
                "move": "Hard Press"
            },
            {
                "level": "80",
                "move": "Origin Pulse"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Sagomon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "454",
        "name": "Tylomon",
                "types": [
            "Water"
        ],
        "ability": "Swift Swim",
        "hiddenAbility": "Speed Boost",
        "evoMove": "Aqua Jet",
        "moves": [
            {
                "level": "18",
                "move": "Sludge"
            },
            {
                "level": "21",
                "move": "Rapid Spin"
            },
            {
                "level": "23",
                "move": "Swift"
            },
            {
                "level": "26",
                "move": "Aqua Cutter"
            },
            {
                "level": "29",
                "move": "Evil Bite"
            },
            {
                "level": "32",
                "move": "Cross Poison"
            }
        ],
        "locations": [
            "Route 103 (Part 2)"
        ],
        "prev": [
            {
                "name": "Kamemon",
                "method": "Water Data"
            }
        ],
        "next": [
            {
                "name": "Sandiramon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "455",
        "name": "Sandiramon",
                "types": [
            "Poison",
            "Holy"
        ],
        "ability": "Merciless",
        "hiddenAbility": "Corrosion",
        "evoMove": "Poison Jab",
        "moves": [
            {
                "level": "33",
                "move": "Smart Strike"
            },
            {
                "level": "36",
                "move": "Treasure Axe"
            },
            {
                "level": "39",
                "move": "Coil"
            },
            {
                "level": "41",
                "move": "Bind"
            },
            {
                "level": "44",
                "move": "Iron Head"
            },
            {
                "level": "47",
                "move": "Trinity Gospel"
            },
            {
                "level": "50",
                "move": "Sludge Bomb"
            },
            {
                "level": "53",
                "move": "Hyper Voice"
            }
        ],
        "locations": [
            "Mirage Tower (Fossil)"
        ],
        "prev": [],
        "next": [
            {
                "name": "Xuanwumon",
                "method": "Genku Core"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "456",
        "name": "Xuanwumon",
                "types": [
            "Grass",
            "Holy"
        ],
        "ability": "Grassy Surge",
        "hiddenAbility": "Regenerator",
        "evoMove": "Mist Ball",
        "moves": [
            {
                "level": "55",
                "move": "Giga Drain"
            },
            {
                "level": "56",
                "move": "Holy Flame"
            },
            {
                "level": "59",
                "move": "Spiky Shield"
            },
            {
                "level": "62",
                "move": "Distortion"
            },
            {
                "level": "65",
                "move": "Seed Flare"
            },
            {
                "level": "68",
                "move": "Ancient Power"
            },
            {
                "level": "71",
                "move": "Frenzy Plant"
            },
            {
                "level": "74",
                "move": "Meteor Beam"
            },
            {
                "level": "77",
                "move": "Earthquake"
            },
            {
                "level": "80",
                "move": "Haze"
            }
        ],
        "locations": [
            "Shoal Cave (Item)"
        ],
        "prev": [
            {
                "name": "Sandiramon",
                "method": "Genku Core"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "457",
        "name": "Kokuwamon",
                "types": [
            "Electric"
        ],
        "ability": "Static",
        "hiddenAbility": "Volt Absorb",
        "evoMove": "Static Electricity",
        "moves": [
            {
                "level": "6",
                "move": "Thunder Wave"
            },
            {
                "level": "9",
                "move": "Charge"
            },
            {
                "level": "12",
                "move": "Spark"
            },
            {
                "level": "15",
                "move": "Electric Shock"
            },
            {
                "level": "18",
                "move": "Smart Strike"
            }
        ],
        "locations": [
            "Tentomon Crest",
            "Old Mauville"
        ],
        "prev": [],
        "next": [
            {
                "name": "Thundermon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "458",
        "name": "Thundermon",
                "types": [
            "Electric"
        ],
        "ability": "Magnet Pull",
        "hiddenAbility": "Volt Absorb",
        "evoMove": "Shock Wave",
        "moves": [
            {
                "level": "21",
                "move": "Rollout"
            },
            {
                "level": "23",
                "move": "Thunder Punch"
            },
            {
                "level": "26",
                "move": "Bomb Blast"
            },
            {
                "level": "29",
                "move": "Electro Ball"
            },
            {
                "level": "32",
                "move": "Comet Punch"
            }
        ],
        "locations": [
            "Route 110",
            "110 (Guardian)",
            "Old Mauville"
        ],
        "prev": [
            {
                "name": "Kokuwamon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Mamemon",
                "method": "Lv34"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "459",
        "name": "Mamemon",
                "types": [
            "Normal",
            "Electric"
        ],
        "ability": "Iron Fist",
        "hiddenAbility": "Adaptability",
        "evoMove": "Buster Dive",
        "moves": [
            {
                "level": "33",
                "move": "Pulse Laser"
            },
            {
                "level": "36",
                "move": "Brick Break"
            },
            {
                "level": "39",
                "move": "Egg Bomb"
            },
            {
                "level": "41",
                "move": "Volt Switch"
            },
            {
                "level": "44",
                "move": "Iron Head"
            },
            {
                "level": "47",
                "move": "Dizzy Punch"
            },
            {
                "level": "50",
                "move": "Mach Punch"
            },
            {
                "level": "53",
                "move": "Sky Uppercut"
            }
        ],
        "locations": [
            "Victory Road F1"
        ],
        "prev": [
            {
                "name": "Thundermon",
                "method": "Lv34"
            }
        ],
        "next": [
            {
                "name": "BanchoMamemon",
                "method": "Lv54"
            },
            {
                "name": "MetalMamemon",
                "method": "Metal Data"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "460",
        "name": "BanchoMamemon",
                "types": [
            "Fighting",
            "Electric"
        ],
        "ability": "Iron Fist",
        "hiddenAbility": "Adaptability",
        "evoMove": "Cross Chop",
        "moves": [
            {
                "level": "55",
                "move": "Anchor Shot"
            },
            {
                "level": "56",
                "move": "Victory Dance"
            },
            {
                "level": "59",
                "move": "Taunt"
            },
            {
                "level": "62",
                "move": "Dual Wield"
            },
            {
                "level": "65",
                "move": "Flash Bancho Punch"
            },
            {
                "level": "68",
                "move": "Plasma Fists"
            },
            {
                "level": "71",
                "move": "Earthquake"
            },
            {
                "level": "74",
                "move": "Meteor Mash"
            },
            {
                "level": "77",
                "move": "Close Combat"
            },
            {
                "level": "80",
                "move": "Giga Impact"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Mamemon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "461",
        "name": "MetalMamemon",
                "types": [
            "Steel",
            "Electric"
        ],
        "ability": "Mega Launcher",
        "hiddenAbility": "Sheer Force",
        "evoMove": "Prototype Mugen Cannon",
        "moves": [
            {
                "level": "33",
                "move": "Megalo Spark"
            },
            {
                "level": "46",
                "move": "Brick Break"
            },
            {
                "level": "39",
                "move": "Magnet Bomb"
            },
            {
                "level": "41",
                "move": "Lock-On"
            },
            {
                "level": "44",
                "move": "Electric Cloud"
            },
            {
                "level": "47",
                "move": "Aura Sphere"
            },
            {
                "level": "50",
                "move": "Explosion"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Mamemon",
                "method": "Metal Data"
            }
        ],
        "next": [
            {
                "name": "Mugendramon",
                "method": "Lv70"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "462",
        "name": "Floramon",
                "types": [
            "Grass"
        ],
        "ability": "Effect Store",
        "hiddenAbility": "Chlorophyll",
        "evoMove": "Absorb",
        "moves": [
            {
                "level": "6",
                "move": "Leech Seed"
            },
            {
                "level": "9",
                "move": "Mega Drain"
            },
            {
                "level": "12",
                "move": "Poison Powder"
            },
            {
                "level": "15",
                "move": "Poison Sting"
            },
            {
                "level": "18",
                "move": "Sleep Powder"
            }
        ],
        "locations": [
            "Granite Cave F2"
        ],
        "prev": [],
        "next": [
            {
                "name": "Woodmon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "463",
        "name": "Woodmon",
                "types": [
            "Grass"
        ],
        "ability": "Dry Skin",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Giga Drain",
        "moves": [
            {
                "level": "21",
                "move": "Camouflage"
            },
            {
                "level": "23",
                "move": "Needle Arm"
            },
            {
                "level": "26",
                "move": "Poison Jab"
            },
            {
                "level": "29",
                "move": "Drain Punch"
            },
            {
                "level": "32",
                "move": "Koyousetsu"
            }
        ],
        "locations": [
            "Route 111"
        ],
        "prev": [
            {
                "name": "Floramon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Oleamon",
                "method": "Lv32 Female"
            },
            {
                "name": "Cherrymon",
                "method": "Lv32 Male"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "464",
        "name": "Oleamon",
                "types": [
            "Grass",
            "Poison"
        ],
        "ability": "Supersweet Syrup",
        "hiddenAbility": "Mycelium Might",
        "evoMove": "Snap Trap",
        "moves": [
            {
                "level": "33",
                "move": "Toxic"
            },
            {
                "level": "36",
                "move": "Venoshock"
            },
            {
                "level": "39",
                "move": "Venom Drench"
            },
            {
                "level": "41",
                "move": "Energy Ball"
            },
            {
                "level": "44",
                "move": "Leaf Blade"
            },
            {
                "level": "47",
                "move": "Attract"
            },
            {
                "level": "50",
                "move": "Gunk Shot"
            },
            {
                "level": "53",
                "move": "Sludge Bomb"
            }
        ],
        "locations": [
            "Route 118",
            "Route 119"
        ],
        "prev": [
            {
                "name": "Woodmon",
                "method": "Lv32 Female"
            }
        ],
        "next": [
            {
                "name": "Ceresmon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "465",
        "name": "Ceresmon",
                "types": [
            "Grass",
            "Ground"
        ],
        "ability": "Harvest",
        "hiddenAbility": "Grassy Surge",
        "evoMove": "Frenzy Plant",
        "moves": [
            {
                "level": "55",
                "move": "Apple Acid"
            },
            {
                "level": "55",
                "move": "Magma Storm"
            },
            {
                "level": "56",
                "move": "Earthquake"
            },
            {
                "level": "59",
                "move": "Spiky Shield"
            },
            {
                "level": "62",
                "move": "Grav Apple"
            },
            {
                "level": "55",
                "move": "Acid Breath"
            },
            {
                "level": "68",
                "move": "Heavy Slam"
            },
            {
                "level": "70",
                "move": "Meteor Wing"
            },
            {
                "level": "73",
                "move": "Malignant Chain"
            },
            {
                "level": "76",
                "move": "Seed Flare"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Oleamon",
                "method": "Lv54"
            }
        ],
        "next": [
            {
                "name": "Ceresmon Medium",
                "method": "Famis"
            }
        ],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "466",
        "name": "Cherrymon",
                "types": [
            "Grass"
        ],
        "ability": "Dry Skin",
        "hiddenAbility": "Analytic",
        "evoMove": "Seed Tempest",
        "moves": [
            {
                "level": "33",
                "move": "Nasty Plot"
            },
            {
                "level": "36",
                "move": "Ingrain"
            },
            {
                "level": "39",
                "move": "Sucker Punch"
            },
            {
                "level": "41",
                "move": "Power Whip"
            },
            {
                "level": "44",
                "move": "Confuse Ray"
            },
            {
                "level": "47",
                "move": "Misty Terrain"
            },
            {
                "level": "50",
                "move": "Gunk Shot"
            },
            {
                "level": "53",
                "move": "Petal Blizzard"
            }
        ],
        "locations": [
            "Route 121"
        ],
        "prev": [
            {
                "name": "Woodmon",
                "method": "Lv32 Male"
            }
        ],
        "next": [
            {
                "name": "Pinochimon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "467",
        "name": "Pinochimon",
                "types": [
            "Grass",
            "Steel"
        ],
        "ability": "Moody",
        "hiddenAbility": "Defiant",
        "evoMove": "Wood Hammer",
        "moves": [
            {
                "level": "55",
                "move": "False Surrender"
            },
            {
                "level": "56",
                "move": "Bonemerang"
            },
            {
                "level": "59",
                "move": "Taunt"
            },
            {
                "level": "62",
                "move": "Power Gatling"
            },
            {
                "level": "65",
                "move": "Frenzy Plant"
            },
            {
                "level": "68",
                "move": "Hammer Arm"
            },
            {
                "level": "71",
                "move": "Torment"
            },
            {
                "level": "74",
                "move": "Meteor Mash"
            },
            {
                "level": "77",
                "move": "Seed Flare"
            },
            {
                "level": "80",
                "move": "Darkest Lariat"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Cherrymon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "468",
        "name": "Keramon",
                "types": [
            "Poison",
            "Dark"
        ],
        "ability": "Toxic Debris",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Fake Out",
        "moves": [
            {
                "level": "6",
                "move": "Smog"
            },
            {
                "level": "9",
                "move": "Poison Gas"
            },
            {
                "level": "12",
                "move": "Evil Darts"
            },
            {
                "level": "15",
                "move": "Feint Attack"
            },
            {
                "level": "18",
                "move": "Sludge"
            }
        ],
        "locations": [
            "Granite Cave F2"
        ],
        "prev": [],
        "next": [
            {
                "name": "Chrysalimon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "469",
        "name": "Chrysalimon",
                "types": [
            "Poison",
            "Dark"
        ],
        "ability": "Toxic Debris",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Demon Claw",
        "moves": [
            {
                "level": "19",
                "move": "Withdraw"
            },
            {
                "level": "21",
                "move": "Wrap"
            },
            {
                "level": "23",
                "move": "Poison Jab"
            },
            {
                "level": "26",
                "move": "Pin Missile"
            },
            {
                "level": "29",
                "move": "Dark Pulse"
            },
            {
                "level": "32",
                "move": "X-Scissor"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Keramon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Infermon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "470",
        "name": "Infermon",
                "types": [
            "Poison",
            "Dark"
        ],
        "ability": "Toxic Debris",
        "hiddenAbility": "Cursed Body",
        "evoMove": "X-Scissor",
        "moves": [
            {
                "level": "33",
                "move": "Spread Fire"
            },
            {
                "level": "36",
                "move": "Extreme Speed"
            },
            {
                "level": "39",
                "move": "Dark Pulse"
            },
            {
                "level": "41",
                "move": "Toxic"
            },
            {
                "level": "44",
                "move": "Sludge Bomb"
            },
            {
                "level": "47",
                "move": "Venoshock"
            },
            {
                "level": "50",
                "move": "Gift of Darkness"
            },
            {
                "level": "53",
                "move": "Gunk Shot"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Chrysalimon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Diaboromon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "471",
        "name": "Diaboromon",
                "types": [
            "Poison",
            "Dark"
        ],
        "ability": "Toxic Debris",
        "hiddenAbility": "Cursed Body",
        "evoMove": "Night Daze",
        "moves": [
            {
                "level": "55",
                "move": "Double Team"
            },
            {
                "level": "56",
                "move": "Malignant Chain"
            },
            {
                "level": "59",
                "move": "U-Turn"
            },
            {
                "level": "62",
                "move": "Disable"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Dire Claw"
            },
            {
                "level": "71",
                "move": "Dark Prominence"
            },
            {
                "level": "74",
                "move": "Extinction Cloud"
            },
            {
                "level": "77",
                "move": "All Delete"
            },
            {
                "level": "80",
                "move": "Explosion"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Infermon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "472",
        "name": "Chuumon",
                "types": [
            "Poison"
        ],
        "ability": "Wimp Out",
        "hiddenAbility": "Run Away",
        "evoMove": "Pound",
        "moves": [
            {
                "level": "6",
                "move": "Bug Bite"
            },
            {
                "level": "9",
                "move": "Thief"
            },
            {
                "level": "12",
                "move": "Play Nice"
            },
            {
                "level": "15",
                "move": "Sludge"
            }
        ],
        "locations": [
            "Route 103",
            "Route 104"
        ],
        "prev": [],
        "next": [
            {
                "name": "Sukamon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "473",
        "name": "Sukamon",
                "types": [
            "Poison"
        ],
        "ability": "Stench",
        "hiddenAbility": "Poison Touch",
        "evoMove": "Giga Poop Toss",
        "moves": [
            {
                "level": "21",
                "move": "Buster Dive"
            }
        ],
        "locations": [
            "Route 110 (Guardian)",
            "Meteor Falls"
        ],
        "prev": [
            {
                "name": "Chuumon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Etemon",
                "method": "Lv32"
            },
            {
                "name": "Betsumon",
                "method": "Cute Plush"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "474",
        "name": "Etemon",
                "types": [
            "Poison",
            "Fairy"
        ],
        "ability": "Punk Rock",
        "hiddenAbility": "Soundproof",
        "evoMove": "Hyper Voice",
        "moves": [
            {
                "level": "33",
                "move": "Eerie Noise"
            },
            {
                "level": "36",
                "move": "Snarl"
            },
            {
                "level": "39",
                "move": "Overdrive"
            },
            {
                "level": "41",
                "move": "Sludge Bomb"
            },
            {
                "level": "44",
                "move": "Perish Song"
            },
            {
                "level": "47",
                "move": "Metal Sound"
            },
            {
                "level": "50",
                "move": "Parting Shot"
            },
            {
                "level": "53",
                "move": "Dazzling Gleam"
            }
        ],
        "locations": [
            "Route 111",
            "Victory Road F3"
        ],
        "prev": [
            {
                "name": "Sukamon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "MetalEtemon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "475",
        "name": "MetalEtemon",
                "types": [
            "Poison",
            "Steel"
        ],
        "ability": "Punk Rock",
        "hiddenAbility": "Soundproof",
        "evoMove": "Boomburst",
        "moves": [
            {
                "level": "55",
                "move": "Moonblast"
            },
            {
                "level": "56",
                "move": "Cross Chop"
            },
            {
                "level": "59",
                "move": "Malignant Chain"
            },
            {
                "level": "62",
                "move": "Taunt"
            },
            {
                "level": "65",
                "move": "Bulk Up"
            },
            {
                "level": "68",
                "move": "Close Combat"
            },
            {
                "level": "71",
                "move": "Sludge Wave"
            },
            {
                "level": "74",
                "move": "Steel Roller"
            },
            {
                "level": "77",
                "move": "Kongou"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Etemon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "476",
        "name": "Pteromon",
                "types": [
            "Flying"
        ],
        "ability": "Gale Wings",
        "hiddenAbility": "Wind Rider",
        "evoMove": "Peck",
        "moves": [
            {
                "level": "6",
                "move": "Quick Attack"
            },
            {
                "level": "9",
                "move": "Agility"
            },
            {
                "level": "12",
                "move": "Fury Swipes"
            },
            {
                "level": "15",
                "move": "Aerial Ace"
            },
            {
                "level": "18",
                "move": "Feather Dance"
            }
        ],
        "locations": [
            "Route 103"
        ],
        "prev": [],
        "next": [
            {
                "name": "Galemon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "477",
        "name": "Galemon",
                "types": [
            "Flying"
        ],
        "ability": "Gale Wings",
        "hiddenAbility": "Wind Rider",
        "evoMove": "Tornado",
        "moves": [
            {
                "level": "19",
                "move": "Slash"
            },
            {
                "level": "21",
                "move": "Tailwind"
            },
            {
                "level": "23",
                "move": "Dragon Dance"
            },
            {
                "level": "26",
                "move": "Air Slash"
            },
            {
                "level": "29",
                "move": "Extreme Speed"
            },
            {
                "level": "31",
                "move": "Dual Wingbeat"
            }
        ],
        "locations": [
            "Route 110",
            "Jagged Pass",
            "Biyomon Crest"
        ],
        "prev": [
            {
                "name": "Pteromon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "GrandGalemon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "478",
        "name": "GrandGalemon",
                "types": [
            "Flying",
            "Magic"
        ],
        "ability": "Gale Wings",
        "hiddenAbility": "Wind Rider",
        "evoMove": "Ultra Turbulence",
        "moves": [
            {
                "level": "33",
                "move": "Spell Sword"
            },
            {
                "level": "36",
                "move": "Whirlwind"
            },
            {
                "level": "39",
                "move": "Dual Chop"
            },
            {
                "level": "41",
                "move": "Tailwind"
            },
            {
                "level": "44",
                "move": "Air Slash"
            },
            {
                "level": "47",
                "move": "Steel Wing"
            },
            {
                "level": "50",
                "move": "Eerie Noise"
            },
            {
                "level": "53",
                "move": "Fly"
            }
        ],
        "locations": [
            "Route 114",
            "Mirage Tower"
        ],
        "prev": [
            {
                "name": "Galemon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Zephagamon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "479",
        "name": "Zephagamon",
                "types": [
            "Flying",
            "Magic"
        ],
        "ability": "Gale Wings",
        "hiddenAbility": "Wind Rider",
        "evoMove": "Magic Blade",
        "moves": [
            {
                "level": "55",
                "move": "Brave Bird"
            },
            {
                "level": "56",
                "move": "Guillotine"
            },
            {
                "level": "59",
                "move": "Whirlwind"
            },
            {
                "level": "62",
                "move": "Bleakwind Storm"
            },
            {
                "level": "65",
                "move": "Hone Claws"
            },
            {
                "level": "68",
                "move": "Eldrich Blast"
            },
            {
                "level": "71",
                "move": "Sacred Sword"
            },
            {
                "level": "74",
                "move": "Hurricane"
            },
            {
                "level": "77",
                "move": "Extreme Speed"
            },
            {
                "level": "80",
                "move": "Behemoth Blade"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "GrandGalemon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "480",
        "name": "Shoemon",
                "types": [
            "Fairy",
            "Normal"
        ],
        "ability": "Suction Cups",
        "hiddenAbility": "Simple",
        "evoMove": "Sonic Jab",
        "moves": [
            {
                "level": "6",
                "move": "Bite"
            },
            {
                "level": "9",
                "move": "String Shot"
            },
            {
                "level": "12",
                "move": "Stomp"
            },
            {
                "level": "15",
                "move": "Pin Missile"
            },
            {
                "level": "18",
                "move": "Disarming Voice"
            }
        ],
        "locations": [
            "Route 101",
            "Route 118",
            "Route 119",
            "Rusturf Tunnel"
        ],
        "prev": [],
        "next": [
            {
                "name": "Shoeshoemon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "481",
        "name": "Shoeshoemon",
                "types": [
            "Fairy",
            "Normal"
        ],
        "ability": "Cheek Pouch",
        "hiddenAbility": "Simple",
        "evoMove": "Disarming Voice",
        "moves": [
            {
                "level": "19",
                "move": "Recycle"
            },
            {
                "level": "21",
                "move": "Bullet Seed"
            },
            {
                "level": "23",
                "move": "Quick Attack"
            },
            {
                "level": "26",
                "move": "Pluck"
            },
            {
                "level": "29",
                "move": "Agility"
            },
            {
                "level": "32",
                "move": "Seed Bomb"
            }
        ],
        "locations": [
            "Route 110",
            "Route 114"
        ],
        "prev": [
            {
                "name": "Shoemon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Chaperomon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "482",
        "name": "Chaperomon",
                "types": [
            "Fairy",
            "Normal"
        ],
        "ability": "Cute Charm",
        "hiddenAbility": "Simple",
        "evoMove": "Seed Bomb",
        "moves": [
            {
                "level": "33",
                "move": "Power Gatling"
            },
            {
                "level": "36",
                "move": "Demon Claw"
            },
            {
                "level": "39",
                "move": "Will-o-Wisp"
            },
            {
                "level": "41",
                "move": "Spirit Break"
            },
            {
                "level": "44",
                "move": "Slash"
            },
            {
                "level": "47",
                "move": "Decorate"
            },
            {
                "level": "50",
                "move": "Present"
            },
            {
                "level": "53",
                "move": "Spread Fire"
            }
        ],
        "locations": [
            "Jagged Pass"
        ],
        "prev": [
            {
                "name": "Shoeshoemon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Cendrillmon",
                "method": "Lv54"
            },
            {
                "name": "Nyabootmon",
                "method": "Gakuren"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "483",
        "name": "Cendrillmon",
                "types": [
            "Fairy",
            "Normal"
        ],
        "ability": "Skill Link",
        "hiddenAbility": "Dancer",
        "evoMove": "Population Bomb",
        "moves": [
            {
                "level": "55",
                "move": "Hyper Drill"
            },
            {
                "level": "56",
                "move": "Drill Peck"
            },
            {
                "level": "59",
                "move": "Hyper Beam"
            },
            {
                "level": "62",
                "move": "Sword Dance"
            },
            {
                "level": "65",
                "move": "Moonblast"
            },
            {
                "level": "68",
                "move": "Marble Impact"
            },
            {
                "level": "71",
                "move": "Wassamu Ring Jack"
            },
            {
                "level": "75",
                "move": "Acrobatics"
            },
            {
                "level": "77",
                "move": "Stone Edge"
            },
            {
                "level": "80",
                "move": "Victory Dance"
            },
            {
                "level": "80",
                "move": "Victory Dance"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Chaperomon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "484",
        "name": "Elizamon",
                "types": [
            "Dragon"
        ],
        "ability": "Regenerator",
        "hiddenAbility": "Heatproof",
        "evoMove": "Growl",
        "moves": [
            {
                "level": "6",
                "move": "Rapid Spin"
            },
            {
                "level": "9",
                "move": "Twister"
            },
            {
                "level": "12",
                "move": "Charm"
            },
            {
                "level": "15",
                "move": "Agility"
            },
            {
                "level": "17",
                "move": "Tail Slap"
            }
        ],
        "locations": [
            "Route 102",
            "Route 118",
            "Route 119",
            "Granite Cave F1"
        ],
        "prev": [],
        "next": [
            {
                "name": "Dimetromon",
                "method": "Lv18"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "485",
        "name": "Dimetromon",
                "types": [
            "Dragon"
        ],
        "ability": "Regenerator",
        "hiddenAbility": "Heatproof",
        "evoMove": "Dragon Tail",
        "moves": [
            {
                "level": "19",
                "move": "Bulk Up"
            },
            {
                "level": "21",
                "move": "Dragon Rage"
            },
            {
                "level": "23",
                "move": "Roar"
            },
            {
                "level": "26",
                "move": "Mega Flame"
            },
            {
                "level": "29",
                "move": "Dragon Breath"
            },
            {
                "level": "31",
                "move": "Dragon Cheer"
            }
        ],
        "locations": [
            "Route 103 (Part 2)"
        ],
        "prev": [
            {
                "name": "Elizamon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Lamiamon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "486",
        "name": "Lamiamon",
                "types": [
            "Dragon",
            "Poison"
        ],
        "ability": "Corrosion",
        "hiddenAbility": "Merciless",
        "evoMove": "Sludge Bomb",
        "moves": [
            {
                "level": "33",
                "move": "Toxic"
            },
            {
                "level": "36",
                "move": "Venom Drench"
            },
            {
                "level": "39",
                "move": "Demon Claw"
            },
            {
                "level": "41",
                "move": "Venoshock"
            },
            {
                "level": "44",
                "move": "Attract"
            },
            {
                "level": "47",
                "move": "Baneful Bunker"
            },
            {
                "level": "50",
                "move": "Sludge Wave"
            },
            {
                "level": "53",
                "move": "Dragon Pulse"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Dimetromon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Medusamon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "487",
        "name": "Medusamon",
                "types": [
            "Dragon",
            "Poison"
        ],
        "ability": "Corrosion",
        "hiddenAbility": "Merciless",
        "evoMove": "Dragon Rush",
        "moves": [
            {
                "level": "55",
                "move": "Evil Bite"
            },
            {
                "level": "56",
                "move": "Gorgon's Eye"
            },
            {
                "level": "59",
                "move": "High Jump Kick"
            },
            {
                "level": "62",
                "move": "Dragon Energy"
            },
            {
                "level": "65",
                "move": "Nasty Plot"
            },
            {
                "level": "68",
                "move": "Glare"
            },
            {
                "level": "71",
                "move": "Draco Meteor"
            },
            {
                "level": "75",
                "move": "Acid Breath"
            },
            {
                "level": "77",
                "move": "Triple Kick"
            },
            {
                "level": "80",
                "move": "Corrosive Gas"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Lamiamon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "488",
        "name": "Susanoomon",
                "types": [
            "CHAOS"
        ],
        "ability": "Protean",
        "hiddenAbility": "",
        "evoMove": "Zero Arms",
        "moves": [
            {
                "level": "90",
                "move": "All Delete"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "AncientGreymon",
                "method": "Jogress AncientGarurumon"
            },
            {
                "name": "AncientGarurumon",
                "method": "AncientGreymon Jogress"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "489",
        "name": "Kimeramon",
                "types": [
            "CHAOS"
        ],
        "ability": "Protean",
        "hiddenAbility": "Libero",
        "evoMove": "Brutal Swing",
        "moves": [
            {
                "level": "33",
                "move": "Phantom Claw"
            },
            {
                "level": "36",
                "move": "Dragon Claw"
            },
            {
                "level": "39",
                "move": "Heat Wave"
            },
            {
                "level": "41",
                "move": "Holy Blast"
            },
            {
                "level": "44",
                "move": "Iron Head"
            },
            {
                "level": "47",
                "move": "X-Scissor"
            },
            {
                "level": "50",
                "move": "Meltdown"
            },
            {
                "level": "53",
                "move": "Evil Bite"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Greymon",
                "method": "Organic Data"
            },
            {
                "name": "Garurumon",
                "method": "Organic Data"
            },
            {
                "name": "Kabuterimon",
                "method": "Organic Data"
            },
            {
                "name": "Kuwagamon",
                "method": "Organic Data"
            },
            {
                "name": "Devimon",
                "method": "Organic Data"
            },
            {
                "name": "Airdramon",
                "method": "Organic Data"
            },
            {
                "name": "Monochromon",
                "method": "Organic Data"
            }
        ],
        "next": [
            {
                "name": "Millenniummon",
                "method": "Mugendramon Jogress"
            },
            {
                "name": "Millenniummon",
                "method": "Jogress Mugendramon"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "490",
        "name": "Millenniummon",
                "types": [
            "CHAOS"
        ],
        "ability": "Shadow Shield",
        "hiddenAbility": "Power of Alchemy",
        "evoMove": "Dimension Destroyer",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Mugendramon",
                "method": "Jogress Kimeramon"
            },
            {
                "name": "Kimeramon",
                "method": "Mugendramon Jogress"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "491",
        "name": "Shakamon",
                "types": [
            "Holy",
            "Magic"
        ],
        "ability": "Psychic Surge",
        "hiddenAbility": "Telepathy",
        "evoMove": "Grand Cross",
        "moves": [
            {
                "level": "81",
                "move": "Roar"
            },
            {
                "level": "84",
                "move": "Protect"
            },
            {
                "level": "87",
                "move": "7 Heavens"
            },
            {
                "level": "90",
                "move": "Focus Blast"
            },
            {
                "level": "93",
                "move": "Heal Pulse"
            },
            {
                "level": "95",
                "move": "Hyper Voice"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Gokuumon",
                "method": "Jogress Sagomon"
            },
            {
                "name": "Sagomon",
                "method": "Jogress Gokuumon"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "492",
        "name": "Lucemon",
                "types": [
            "Holy"
        ],
        "ability": "Pressure",
        "hiddenAbility": "",
        "evoMove": "7 Heavens",
        "moves": [
            {
                "level": "33",
                "move": "Recover"
            },
            {
                "level": "36",
                "move": "Divine Breaker"
            },
            {
                "level": "39",
                "move": "Grand Cross"
            }
        ],
        "locations": [
            "Spear Pillar F5 (Rare)"
        ],
        "prev": [],
        "next": [
            {
                "name": "Lucemon Falldown",
                "method": "Lv30"
            }
        ],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "493",
        "name": "Lucemon Falldown",
                "types": [
            "Holy",
            "Dark"
        ],
        "ability": "Pressure",
        "hiddenAbility": "",
        "evoMove": "Dead or Alive",
        "moves": [
            {
                "level": "41",
                "move": "Night Daze"
            },
            {
                "level": "44",
                "move": "Ruination"
            },
            {
                "level": "47",
                "move": "Instruct"
            },
            {
                "level": "50",
                "move": "Meggido Flame"
            },
            {
                "level": "53",
                "move": "Hell Fire"
            },
            {
                "level": "56",
                "move": "Red Inferno"
            },
            {
                "level": "59",
                "move": "Gift of Darkness"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Lucemon",
                "method": "Lv30"
            }
        ],
        "next": [],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "494",
        "name": "GraceNovamon",
                "types": [
            "CHAOS"
        ],
        "ability": "Neuroforce",
        "hiddenAbility": "",
        "evoMove": "Prismatic Laser",
        "moves": [
            {
                "level": "83",
                "move": "Gravity"
            },
            {
                "level": "86",
                "move": "Grav Apple"
            },
            {
                "level": "89",
                "move": "Hyperspace Hole"
            },
            {
                "level": "92",
                "move": "Hyper Beam"
            },
            {
                "level": "95",
                "move": "Spacial Rend"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Apollomon",
                "method": "Jogress Dianamon"
            },
            {
                "name": "Dianamon",
                "method": "Apollomon Jogress"
            }
        ],
        "next": [],
        "stage": "Ultra",
        "cardLevel": 7
    },
    {
        "id": "495",
        "name": "Betsumon",
                "types": [
            "CHAOS"
        ],
        "ability": "Imposter",
        "hiddenAbility": "Imposter",
        "evoMove": "Transform",
        "moves": [],
        "locations": [
            "Route 113",
            "Route 118",
            "Route 119"
        ],
        "prev": [
            {
                "name": "Sukamon",
                "method": "Cute Plush"
            }
        ],
        "next": [],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "496",
        "name": "LaeusGreymon",
                "types": [
            "Fire",
            "Poison"
        ],
        "ability": "Corrosion",
        "hiddenAbility": "Orichalcum Pulse",
        "evoMove": "Bleakwind Storm",
        "moves": [],
        "locations": [],
        "prev": [],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "497",
        "name": "ZinoGarurumon",
                "types": [
            "Ice",
            "Electric"
        ],
        "ability": "Motor Drive",
        "hiddenAbility": "Hadron Engine",
        "evoMove": "Sheer Cold",
        "moves": [],
        "locations": [],
        "prev": [],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "498",
        "name": "Nyabootmon",
                "types": [
            "Fairy",
            "Normal"
        ],
        "ability": "Justified",
        "hiddenAbility": "Technician",
        "evoMove": "Extreme Speed",
        "moves": [
            {
                "level": "55",
                "move": "Gravity"
            },
            {
                "level": "56",
                "move": "Meteor Mash"
            },
            {
                "level": "59",
                "move": "Magic Blade"
            },
            {
                "level": "62",
                "move": "Swords Dance"
            },
            {
                "level": "65",
                "move": "Dynamite Kick"
            },
            {
                "level": "68",
                "move": "Meteor Assault"
            },
            {
                "level": "71",
                "move": "Close Combat"
            },
            {
                "level": "74",
                "move": "Acrobatics"
            },
            {
                "level": "77",
                "move": "Assist"
            },
            {
                "level": "80",
                "move": "Edens Javelin"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Chaperomon",
                "method": "Gakuren"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "499",
        "name": "Ariemon",
                "types": [
            "Water"
        ],
        "ability": "Dry Skin",
        "hiddenAbility": "Levitate",
        "evoMove": "Aqua Step",
        "moves": [
            {
                "level": "55",
                "move": "Smelling Salts"
            },
            {
                "level": "56",
                "move": "Aqua Magic"
            },
            {
                "level": "59",
                "move": "Swords Dance"
            },
            {
                "level": "62",
                "move": "Heal Pulse"
            },
            {
                "level": "65",
                "move": "Recover"
            },
            {
                "level": "68",
                "move": "Power Whip"
            },
            {
                "level": "71",
                "move": "Stone Edge"
            },
            {
                "level": "74",
                "move": "Wish"
            },
            {
                "level": "76",
                "move": "Rain Dance"
            },
            {
                "level": "78",
                "move": "VIctory Dance"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "MarinBullmon",
                "method": "Lunar Scale"
            },
            {
                "name": "Ryugumon",
                "method": "Water Data"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "500",
        "name": "Landramon",
                "types": [
            "Rock",
            "Ground"
        ],
        "ability": "Sand Force",
        "hiddenAbility": "Dry Skin",
        "evoMove": "Shore Up",
        "moves": [
            {
                "level": "19",
                "move": "Spikes"
            },
            {
                "level": "21",
                "move": "Sandstorm"
            },
            {
                "level": "23",
                "move": "Stone Axe"
            },
            {
                "level": "26",
                "move": "Bulldoze"
            },
            {
                "level": "29",
                "move": "Instruct"
            },
            {
                "level": "31",
                "move": "Rock Slide"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Sunarizamon",
                "method": "Lv18"
            }
        ],
        "next": [
            {
                "name": "Proganomon",
                "method": "Lv32"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "501",
        "name": "Proganomon",
                "types": [
            "Rock",
            "Ground"
        ],
        "ability": "Shell Armor",
        "hiddenAbility": "Dry Skin",
        "evoMove": "Titan Drill",
        "moves": [
            {
                "level": "33",
                "move": "Rototiller"
            },
            {
                "level": "36",
                "move": "Mighty Cleave"
            },
            {
                "level": "39",
                "move": "Bulldoze"
            },
            {
                "level": "41",
                "move": "Dig"
            },
            {
                "level": "44",
                "move": "Withdraw"
            },
            {
                "level": "47",
                "move": "Scorching Sands"
            },
            {
                "level": "50",
                "move": "Body Press"
            },
            {
                "level": "53",
                "move": "Stone Edge"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Landramon",
                "method": "Lv32"
            }
        ],
        "next": [
            {
                "name": "Pyramidimon",
                "method": "Lv54"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "502",
        "name": "Pyramidimon",
                "types": [
            "Rock",
            "Ground"
        ],
        "ability": "Sand Stream",
        "hiddenAbility": "Earth Eather",
        "evoMove": "Sandsear Storm",
        "moves": [
            {
                "level": "55",
                "move": "Hyper Drill"
            },
            {
                "level": "56",
                "move": "Crush Grip"
            },
            {
                "level": "59",
                "move": "Substitute"
            },
            {
                "level": "62",
                "move": "Earthquake"
            },
            {
                "level": "65",
                "move": "Calm Mind"
            },
            {
                "level": "68",
                "move": "Ancient Power"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Proganomon",
                "method": "Lv54"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "503",
        "name": "ExTyrannomon",
                "types": [
            "Fire",
            "Fairy"
        ],
        "ability": "Pixilate",
        "hiddenAbility": "Multiscale",
        "evoMove": "Lovely Attack",
        "moves": [
            {
                "level": "33",
                "move": "Dark Pulse"
            },
            {
                "level": "35",
                "move": "Confuse Ray"
            },
            {
                "level": "39",
                "move": "Attract"
            },
            {
                "level": "41",
                "move": "Meltdown"
            },
            {
                "level": "44",
                "move": "Evil Bite"
            },
            {
                "level": "47",
                "move": "Death Ball"
            },
            {
                "level": "54",
                "move": "Thunder Cloud"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Monzaemon",
                "method": "Fire Data"
            },
            {
                "name": "Tyrannomon",
                "method": "Cute Plush"
            }
        ],
        "next": [
            {
                "name": "ShinMonzaemon",
                "method": "Night Daze"
            },
            {
                "name": "Dinomon",
                "method": "Dragon Pulse"
            },
            {
                "name": "RustTyranomon",
                "method": "Thunder Cloud"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "504",
        "name": "Garummon",
                "types": [
            "Holy"
        ],
        "ability": "Speed Boost",
        "hiddenAbility": "Berserk",
        "evoMove": "Lupine Laser",
        "moves": [
            {
                "level": "19",
                "move": "Steel Blade"
            },
            {
                "level": "21",
                "move": "Flash"
            },
            {
                "level": "23",
                "move": "Agility"
            },
            {
                "level": "26",
                "move": "Holy Blast"
            },
            {
                "level": "29",
                "move": "Pulse Laser"
            },
            {
                "level": "32",
                "move": "Aerial Ace"
            }
        ],
        "locations": [],
        "prev": [
            {
                "name": "Wolfmon",
                "method": "Wolf Kendo"
            }
        ],
        "next": [
            {
                "name": "Beowolfmon",
                "method": "Lv32"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "514",
        "name": "Archnemon Disguise",
                "types": [
            "Normal"
        ],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [],
        "next": [],
        "stage": "Rookie",
        "cardLevel": 3
    },
    {
        "id": "515",
        "name": "Beelzebumon Blast",
        "types": [],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Beelzebumon",
                "method": "Toy Gun"
            }
        ],
        "next": [],
        "stage": "Ultra",
        "cardLevel": 7
    },
    {
        "id": "516",
        "name": "Blizzarmon",
                "types": [
            "Ice"
        ],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Chakmon",
                "method": "Snow Bomber"
            }
        ],
        "next": [
            {
                "name": "Frozomon",
                "method": "Lv32"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "517",
        "name": "Bolgmon",
                "types": [
            "Electric",
            "Steel"
        ],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Blitzmon",
                "method": "Thor Hammer"
            }
        ],
        "next": [
            {
                "name": "RhinoKabuterimon",
                "method": "Lv32"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "518",
        "name": "Calmaramon",
                "types": [
            "Water",
            "Poison"
        ],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Ranamon",
                "method": "Jealousy Rain"
            }
        ],
        "next": [
            {
                "name": "Mermaimon",
                "method": "Lv32"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "519",
        "name": "Ceresmon Medium",
                "types": [
            "Grass",
            "Poison"
        ],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Ceresmon",
                "method": "Famis"
            }
        ],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "520",
        "name": "Duftmon Leopard",
                "types": [
            "Ground",
            "Holy"
        ],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Duftmon",
                "method": "Vulcan Crush"
            }
        ],
        "next": [],
        "stage": "Ultra",
        "cardLevel": 7
    },
    {
        "id": "521",
        "name": "Dukemon Crimson",
        "types": [],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Dukemon",
                "method": "Grani"
            }
        ],
        "next": [],
        "stage": "Ultra",
        "cardLevel": 7
    },
    {
        "id": "522",
        "name": "Gigasmon",
                "types": [
            "Ground"
        ],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Grottemon",
                "method": "Grotte Hammer"
            }
        ],
        "next": [
            {
                "name": "Volcamon",
                "method": "Lv32"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "523",
        "name": "Imperialdramon Fighter",
        "types": [],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Imperialdramon Dragon",
                "method": "Positron Laser"
            }
        ],
        "next": [
            {
                "name": "Imperialdramon Paladin",
                "method": "Omega Data"
            }
        ],
        "stage": "Ultra",
        "cardLevel": 7
    },
    {
        "id": "524",
        "name": "Imperialdramon Paladin",
        "types": [],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Imperialdramon Fighter",
                "method": "Omega Data"
            }
        ],
        "next": [],
        "stage": "Ultra",
        "cardLevel": 7
    },
    {
        "id": "525",
        "name": "KaiserLeomon",
                "types": [
            "Dark"
        ],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Lowemon",
                "method": "Shadow Meteor"
            }
        ],
        "next": [
            {
                "name": "Rihimon",
                "method": "Lv32"
            }
        ],
        "stage": "Ultimate",
        "cardLevel": 5
    },
    {
        "id": "526",
        "name": "LaeusGreymon Rage",
                "types": [
            "Fire",
            "Poison"
        ],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "527",
        "name": "Magnamon X",
        "types": [],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Magnamon",
                "method": "X Antibody"
            },
            {
                "name": "Magnamon X",
                "method": "Antibody"
            }
        ],
        "next": [
            {
                "name": "Magnamon X",
                "method": "Antibody"
            }
        ],
        "stage": "Champion",
        "cardLevel": 4
    },
    {
        "id": "528",
        "name": "MirageGaogamon Burst",
        "types": [],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "MirageGaogamon",
                "method": "Mirage Soul"
            }
        ],
        "next": [],
        "stage": "Ultra",
        "cardLevel": 7
    },
    {
        "id": "529",
        "name": "Petaldramon",
                "types": [
            "Grass",
            "Dragon"
        ],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Arbormon",
                "method": "Blockage Seed"
            }
        ],
        "next": [
            {
                "name": "Entmon",
                "method": "Arbormon Lv32"
            },
            {
                "name": "Entmon",
                "method": "Lv32 Arbormon"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "530",
        "name": "Ravemon Burst",
        "types": [],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Ravemon",
                "method": "Raven Soul"
            }
        ],
        "next": [],
        "stage": "Ultra",
        "cardLevel": 7
    },
    {
        "id": "531",
        "name": "Rosemon Burst",
        "types": [],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Rosemon",
                "method": "Rose Soul"
            }
        ],
        "next": [],
        "stage": "Ultra",
        "cardLevel": 7
    },
    {
        "id": "532",
        "name": "ShineGreymon Burst",
        "types": [],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "ShineGreymon",
                "method": "Shine Soul"
            }
        ],
        "next": [],
        "stage": "Ultra",
        "cardLevel": 7
    },
    {
        "id": "533",
        "name": "Shutumon",
                "types": [
            "Flying",
            "Normal"
        ],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Fairymon",
                "method": "Brezzo Petalo"
            }
        ],
        "next": [
            {
                "name": "JetSilphymon",
                "method": "Lv32"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "534",
        "name": "Vritamon",
        "types": [],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [
            {
                "name": "Agnimon",
                "method": "Salamander Break"
            }
        ],
        "next": [
            {
                "name": "Aldamon",
                "method": "Lv32"
            }
        ],
        "stage": "Hybrid",
        "cardLevel": 4
    },
    {
        "id": "535",
        "name": "ZinoGarurumon Rage",
                "types": [
            "Ice",
            "Electric"
        ],
        "ability": "",
        "hiddenAbility": "",
        "evoMove": "",
        "moves": [],
        "locations": [],
        "prev": [],
        "next": [],
        "stage": "Mega",
        "cardLevel": 6
    },
    {
        "id": "536",
        "name": "Meicoomon",
                "types": [
            "Chaos"
        ],
        "stage": "Champion",
        "next": [
            {
                "name": "Meicrackmon",
                "method": "Lv28"
            }
        ],
        "prev": [],
        "cardLevel": 4
    },
    {
        "id": "537",
        "name": "Meicrackmon",
                "types": [
            "Chaos"
        ],
        "stage": "Ultimate",
        "next": [
            {
                "name": "Rasielmon",
                "method": "Lv50"
            },
            {
                "name": "Raguelmon",
                "method": "Darkness"
            }
        ],
        "prev": [
            {
                "name": "Meicoomon",
                "method": "Lv28"
            }
        ],
        "cardLevel": 5
    },
    {
        "id": "538",
        "name": "Rasielmon",
                "types": [
            "Holy"
        ],
        "stage": "Mega",
        "next": [],
        "prev": [
            {
                "name": "Meicrackmon",
                "method": "Lv50"
            }
        ],
        "cardLevel": 6
    },
    {
        "id": "539",
        "name": "Gaioumon Itto Mode",
                "types": [
            "Dragon",
            "Steel"
        ],
        "stage": "Burst Mode",
        "next": [],
        "prev": [],
        "cardLevel": 7
    },
    {
        "id": "540",
        "name": "Coatlmon",
                "types": [
            "Light"
        ],
        "stage": "Armor",
        "next": [
            {
                "name": "Sandiramon",
                "method": "Lv50"
            }
        ],
        "prev": [],
        "cardLevel": 4
    },
    {
        "id": "541",
        "name": "Sandiramon",
                "types": [
            "Earth"
        ],
        "stage": "Ultimate",
        "next": [
            {
                "name": "Xuanwumon",
                "method": "Genku Core"
            }
        ],
        "prev": [
            {
                "name": "Tylomon",
                "method": "Lv32"
            },
            {
                "name": "Coatlmon",
                "method": "Lv50"
            }
        ],
        "cardLevel": 5
    },
    {
        "id": "542",
        "name": "Minervamon",
                "types": [
            "Olympian"
        ],
        "stage": "Mega",
        "next": [
            {
                "name": "Mervamon",
                "method": "Burst"
            }
        ],
        "prev": [],
        "cardLevel": 6
    },
    {
        "id": "543",
        "name": "Mervamon",
                "types": [
            "Olympian"
        ],
        "stage": "Burst Mode",
        "next": [],
        "prev": [
            {
                "name": "Minervamon",
                "method": "Burst"
            }
        ],
        "cardLevel": 7
    },
    {
        "id": "544",
        "name": "Karatenmon",
                "types": [
            "Flying"
        ],
        "stage": "Ultimate",
        "next": [
            {
                "name": "Tengumon",
                "method": "Evolution"
            }
        ],
        "prev": [],
        "cardLevel": 5
    },
    {
        "id": "545",
        "name": "Tengumon",
                "types": [
            "Flying",
            "Magic"
        ],
        "stage": "Mega",
        "next": [],
        "prev": [
            {
                "name": "Karatenmon",
                "method": "Evolution"
            }
        ],
        "cardLevel": 6
    },
    {
        "id": "546",
        "name": "Seiten Gokuwmon",
                "types": [
            "Fighting"
        ],
        "stage": "Mega",
        "next": [],
        "prev": [
            {
                "name": "Gokuwmon",
                "method": "Evolution"
            }
        ],
        "cardLevel": 6
    },
    {
        "id": "547",
        "name": "VictoryGreymon",
                "types": [
            "Dragon",
            "Fighting"
        ],
        "stage": "Mega",
        "next": [],
        "prev": [],
        "cardLevel": 6
    },
    {
        "id": "548",
        "name": "Z'dGarurumon",
                "types": [
            "Beast",
            "Steel"
        ],
        "stage": "Mega",
        "next": [],
        "prev": [],
        "cardLevel": 6
    },
    {
        "id": "549",
        "name": "SkullGreymon",
                "types": [
            "Undead"
        ],
        "stage": "Ultimate",
        "next": [
            {
                "name": "G-Erosion SkullGreymon",
                "method": "G-Cells"
            }
        ],
        "prev": [],
        "cardLevel": 5
    },
    {
        "id": "550",
        "name": "Metabee",
                "types": [
            "Steel"
        ],
        "stage": "Crossover",
        "next": [
            {
                "name": "Omedamon",
                "method": "Jogress"
            }
        ],
        "prev": [],
        "cardLevel": 4
    },
    {
        "id": "551",
        "name": "Rokusho",
                "types": [
            "Steel"
        ],
        "stage": "Crossover",
        "next": [
            {
                "name": "Omedamon",
                "method": "Jogress"
            }
        ],
        "prev": [],
        "cardLevel": 4
    },
    {
        "id": "552",
        "name": "Omedamon",
                "types": [
            "Steel"
        ],
        "stage": "Ultra",
        "next": [],
        "prev": [
            {
                "name": "Metabee",
                "method": "Jogress"
            },
            {
                "name": "Rokusho",
                "method": "Jogress"
            }
        ],
        "cardLevel": 7
    },
    {
        "id": "553",
        "name": "Cutemon",
                "types": [
            "Fairy"
        ],
        "stage": "Rookie",
        "next": [],
        "prev": [],
        "cardLevel": 3
    },
    {
        "id": "554",
        "name": "Gokuwmon",
                "types": [
            "Fighting"
        ],
        "stage": "Ultimate",
        "next": [
            {
                "name": "Seiten Gokuwmon",
                "method": "Evolution"
            }
        ],
        "prev": [],
        "cardLevel": 5
    }
];
