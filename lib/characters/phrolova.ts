import { Character } from "../characterTypes";

export const phrolova: Character = {
    id: "phrolova",
    name: "Phrolova",
    rarity: 5,
    element: "Havoc",
    weaponType: "Rectifier",
    role: "Main DPS",
    tags: ["Echo Skill DMG", "Off-field DMG", "Summoner", "Crowd Control"],
    profileType: "Versatile",
    potential: "S+",
    tier: {
        overall: "R0.5",
        tower: "R0",
        wastes: "R0"
    },
    imagePortrait: "/images/characters/PhrolovaSmall.png",
    imageIcon: "/images/characters/PhrolovaSmall.png",
    imageCard: "/images/characters/PhrolovaLarge.png",
    stats: {
        hp: 10775,
        atk: 438,
        def: 1137
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "Crit Rate", value: "8%", stat: "critRate", amount: 8 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Polygon Core", count: 4, icon: "/images/else/lfpolygoncore.png" },
            { name: "Afterlife", count: 60, icon: "/images/else/afterlife.png" },
            { name: "MF Polygon Core", count: 12, icon: "/images/else/mfpolygoncore.png" },
            { name: "HF Polygon Core", count: 12, icon: "/images/else/hfpolygoncore.png" },
            { name: "FF Polygon Core", count: 4, icon: "/images/else/ffpolygoncore.png" },
            { name: "Truth in Lies", count: 46, icon: "/images/else/truthinlies.png" }
        ],
        skills: [
            { name: "LF Polygon Core", count: 25, icon: "/images/else/lfpolygoncore.png" },
            { name: "MF Polygon Core", count: 28, icon: "/images/else/mfpolygoncore.png" },
            { name: "HF Polygon Core", count: 40, icon: "/images/else/hfpolygoncore.png" },
            { name: "FF Polygon Core", count: 57, icon: "/images/else/ffpolygoncore.png" },
            { name: "Lento Helix", count: 25, icon: "/images/else/lentohelix.png" },
            { name: "Adagio Helix", count: 28, icon: "/images/else/adagiohelix.png" },
            { name: "Andante Helix", count: 55, icon: "/images/else/andantehelix.png" },
            { name: "Presto Helix", count: 67, icon: "/images/else/prestohelix.png" },
            { name: "The Netherworld's Stare", count: 26, icon: "/images/else/thenetherworldsstare.png" }
        ],
        ascensionRanks: [
            {
                rank: 1,
                levelRange: "Lv. 20-40",
                materials: [
                    { name: "LF Polygon Core", count: 4, icon: "/images/else/lfpolygoncore.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "MF Polygon Core", count: 4, icon: "/images/else/mfpolygoncore.png" },
                    { name: "Truth in Lies", count: 3, icon: "/images/else/truthinlies.png" },
                    { name: "Afterlife", count: 4, icon: "/images/else/afterlife.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Polygon Core", count: 8, icon: "/images/else/mfpolygoncore.png" },
                    { name: "Truth in Lies", count: 6, icon: "/images/else/truthinlies.png" },
                    { name: "Afterlife", count: 8, icon: "/images/else/afterlife.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Polygon Core", count: 4, icon: "/images/else/hfpolygoncore.png" },
                    { name: "Truth in Lies", count: 9, icon: "/images/else/truthinlies.png" },
                    { name: "Afterlife", count: 12, icon: "/images/else/afterlife.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Polygon Core", count: 8, icon: "/images/else/hfpolygoncore.png" },
                    { name: "Truth in Lies", count: 12, icon: "/images/else/truthinlies.png" },
                    { name: "Afterlife", count: 16, icon: "/images/else/afterlife.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Polygon Core", count: 4, icon: "/images/else/ffpolygoncore.png" },
                    { name: "Truth in Lies", count: 16, icon: "/images/else/truthinlies.png" },
                    { name: "Afterlife", count: 20, icon: "/images/else/afterlife.png" }
                ]
            }
        ],
        weapon: {
            name: "Lethean Elegy",
            icon: "/images/weapons/letheanelegy.png",
            total: [
                { name: "MF Polygon Core", count: 20, icon: "/images/else/mfpolygoncore.png" },
                { name: "HF Polygon Core", count: 20, icon: "/images/else/hfpolygoncore.png" },
                { name: "FF Polygon Core", count: 12, icon: "/images/else/ffpolygoncore.png" },
                { name: "Lento Helix", count: 26, icon: "/images/else/lentohelix.png" },
                { name: "Adagio Helix", count: 26, icon: "/images/else/adagiohelix.png" },
                { name: "Andante Helix", count: 16, icon: "/images/else/andantehelix.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Polygon Core", count: 6, icon: "/images/else/lfpolygoncore.png" },
                        { name: "Lento Helix", count: 6, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Polygon Core", count: 6, icon: "/images/else/mfpolygoncore.png" },
                        { name: "Lento Helix", count: 6, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Polygon Core", count: 10, icon: "/images/else/mfpolygoncore.png" },
                        { name: "Lento Helix", count: 10, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Polygon Core", count: 6, icon: "/images/else/hfpolygoncore.png" },
                        { name: "Adagio Helix", count: 6, icon: "/images/else/adagiohelix.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Polygon Core", count: 10, icon: "/images/else/hfpolygoncore.png" },
                        { name: "Adagio Helix", count: 10, icon: "/images/else/adagiohelix.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Polygon Core", count: 6, icon: "/images/else/ffpolygoncore.png" },
                        { name: "Andante Helix", count: 6, icon: "/images/else/andantehelix.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Phrolova is a top-tier **Havoc Main DPS/Sub-DPS** who specializes in **Echo Skill DMG**. Her kit is extremely unique as she **uses 0 Resonance Energy** - her Liberation is instead unlocked by her rotation.
        
        She currently stands as one of the strongest DPS units in the game ("Top Tier Damage Ceiling") and creates excellent value for F2P players due to her 0 ER requirements and synergy with basic units like Havoc Rover/Danjin.`,
        playstyle: "Basic/Skill (Build Notes) -> Scarlet Coda (Heavy) -> Liberation (Summon Hecate) -> Hecate Attacks -> Outro.",
        pros: [
            "**Top Tier Damage Ceiling**: Currently one of the strongest DPS units in the game with the right team.",
            "**High Versatility**: Functions effectively as both an On-Field Main DPS and an Off-Field Sub-DPS/Buffer.",
            "**Zero ER Build**: Requires known Energy Regen, allowing full investment into offensive stats (Crit/ATK).",
            "**F2P Friendly**: Performs exceptionally well with accessible teammates like Havoc Rover and Danjin.",
            "**Exceptional AoE/CC**: Groups and staggers enemies, trivializing multi-wave content (e.g., Whimpering Wastes)."
        ],
        cons: [
            "**Limited Weapon Options**: Highly dependent on Signature ('Lethean Elegy') or 'Stringmaster'; other options drop off significantly.",
            "**Synergy Dependent**: Peak damage is locked behind teammates who can spam Echo Skills to trigger Hecate.",
            "**Visual Clutter**: Combat animations are visually overwhelming, leading to confusion in fast-paced encounters.",
            "**Strict Echo Set**: Must use 'Dream of the Lost' (3pc); standard sets don't function with her 0 Energy mechanic."
        ]
    },
    skills: [
        {
            name: "Basic: Movement of Life and Death",
            type: "Basic",
            description: "3-hit combo. P3 enters **Reincarnate** + gains String Note. **Scarlet Coda** (Heavy at 6 Notes, 25s Compose CD): Consumes Notes → massive nuke (Skill DMG, Echo Skill), staggers/pulls, unlocks Lib. +41.53% DMG per Aftersound stack.",
            attributes: [
                { name: "Basic P3", value: "16.44% * 6" },
                { name: "Heavy", value: "40.16% * 2" },
                { name: "Scarlet Coda", value: "16.61% * 2 + 6.23% * 8 + 249.03%" },
                { name: "Dodge Counter", value: "61.36%" }
            ],
            priority: 3
        },
        {
            name: "Resonance: Whispers in a Fleeting Dream",
            type: "Skill",
            description: "Havoc DMG + enters **Reincarnate** + gains Wind Note. 12s CD. In Reincarnate: **Murmurs** (Enhanced Skill, Skill DMG).",
            attributes: [
                { name: "Skill DMG", value: "53.30% * 2" },
                { name: "Murmurs", value: "11.67% * 4 + 23.34% + 163.38%" },
                { name: "Cooldown", value: "12s" }
            ],
            priority: 1
        },
        {
            name: "Forte: Rhapsody of a New World",
            type: "Forte",
            description: "**Volatile Notes** (max 6): String (Basic P3), Wind (Skill), Cadenza (Intro/Echo). At 6 + Compose → Scarlet Coda → Lib unlock. In Reincarnate: **Movement of Fate** (Enhanced Basic P3, Skill DMG, +String Note). **Aftersound** (max 24+): +2.5% Crit DMG/stack. Overcap: +1% Crit DMG each. **Inherent**: +10 Aftersound on combat. -30% DMG Taken after Echo Skill.",
            attributes: [
                { name: "Movement of Fate", value: "19.05% * 4 + 59.27% * 3" }
            ],
            priority: 3
        },
        {
            name: "Liberation: Waltz of Forsaken Depths",
            type: "Ultimate",
            description: "**0 Energy Cost**. Requires Resolving Chord (after Scarlet Coda). Enters **Maestro** (24s): +120% ATK, summon **Hecate** (shares stats). Hecate attacks (Echo Skill DMG): Auto 2-hit off-field. **Enhanced Attack** (up to 10x) on ally Echo Skill — type based on Notes (Strings/Winds/Cadenza). **Curtain Call** (234%, on exit/Lib press).",
            attributes: [
                { name: "Hecate Basic", value: "14.00% + 7.00% * 2" },
                { name: "Enhanced Strings", value: "52.50% + 122.50%" },
                { name: "Enhanced Cadenza", value: "52.50% + 122.50%" },
                { name: "Curtain Call", value: "234.00%" }
            ],
            priority: 4
        },
        {
            name: "Intro: Suite of Quietus",
            type: "Intro",
            description: "Havoc DMG, chains to Basic P3. Grants Cadenza Note. In Maestro: **Suite of Immortality** (300% nuke, Skill DMG, Stagnate, ends Maestro).",
            attributes: [
                { name: "Suite of Quietus", value: "40.55% + 60.82%" },
                { name: "Suite of Immortality", value: "300.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Unfinished Piece",
            type: "Outro",
            description: "Next Resonator: **Havoc DMG +20%**, **Heavy Attack DMG +25%** (14s, ends on swap). In Maestro: Hecate does 2 extra Enhanced Attacks.",
            attributes: [
                { name: "Havoc Amp", value: "+20%" },
                { name: "Heavy Amp", value: "+25%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Movement of Fate/Murmurs DMG **+80%**. Passive Note generation improved." },
        { node: "S2", name: "Sequence Node 2", description: "Scarlet Coda DMG **+75%** and grants **14 Aftersound** stacks." },
        { node: "S3", name: "Sequence Node 3", description: "Echo Skill DMG **Amplified by 80%**." },
        { node: "S4", name: "Sequence Node 4", description: "Casting Echo Skill grants Team **20% Attribute DMG Bonus**." },
        { node: "S5", name: "Sequence Node 5", description: "Maestro State generates Stagnation Field. DMG Taking reduced by 30%." },
        { node: "S6", name: "Sequence Node 6", description: "Hecate DMG Multiplier **+24%**. Phrolova gains **60% Havoc DMG Bonus** during Maestro." }
    ],
    rotation: [
        "1. **Intro**: Enter field.",
        "2. **Basic/Skill**: Combo to generate 6 **Volatile Notes**.",
        "3. **Heavy**: Cast **Scarlet Coda** (Consumes Notes, Unlocks Lib).",
        "4. **Liberation**: Cast **Waltz of Forsaken Depths** to summon Hecate.",
        "5. **Outro**: Switch to Teammates (Cantarella/Qiuyuan).",
        "6. **Teammates**: Cast **Echo Skills** to trigger Hecate's Enhanced Attacks off-field."
    ],
    builds: {
        weapons: [
            {
                name: "Lethean Elegy",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Essential. Massive ATK, Crit, and Echo Skill DMG Amp.",
                image: "/images/weapons/letheanelegy.png"
            },
            {
                name: "Stringmaster",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Good stat stick but falls behind Signature significantly.",
                image: "/images/weapons/stringmaster.png"
            },
            {
                name: "Whispers of Sirens",
                rank: "BP Option",
                rarity: 4,
                description: "Decent ATK boost on Echo skill use.",
                image: "/images/weapons/whispersofsirens.png"
            },
            {
                name: "Rectifier of Night",
                rank: "F2P Option",
                rarity: 4,
                description: "Basic ATK buff on Intro.",
                image: "/images/weapons/rectifierofnight.png"
            }
        ],
        echoes: [
            {
                set: "Dream of the Lost (3pc) + Havoc Eclipse (2pc)",
                mainEcho: "Nightmare: Hecate",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Havoc DMG", "Havoc DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "ATK%", "Resonance Skill DMG"]
                },
                description: "Mandatory Set.",
                recommendation_reason: "Only Phrolova can use Dream of the Lost (due to 0 Energy mechanic).",
                echo_breakdown: {
                    cost4: [{ name: "Nightmare: Hecate", image: "/images/echoes/nightmarehecate.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Roseshroom", image: "/images/echoes/roseshroom.png", mainStats: ["Havoc DMG"] },
                        { name: "Tambourinist", image: "/images/echoes/tambourinist.png", mainStats: ["Havoc DMG"] }
                    ],
                    cost1: [
                        { name: "Havoc Dreadmane", image: "/images/echoes/havocdreadmane.png", mainStats: ["ATK%"] },
                        { name: "Excarat", image: "/images/echoes/excarat.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Havoc DMG > ATK% > Skill DMG"
    },
    teams: [
        {
            name: "Echo Skill Mono-Havoc",
            description: "The intended Niche.",
            members: [
                { name: "Phrolova", role: "Main DPS" },
                { name: "Cantarella", role: "Sub DPS" },
                { name: "Qiuyuan", role: "Support" }
            ]
        },
        {
            name: "Havoc Heavy Attack",
            description: "Dual DPS with Roccia.",
            members: [
                { name: "Phrolova", role: "Main DPS" },
                { name: "Roccia", role: "Sub DPS" },
                { name: "Cantarella", role: "Support" }
            ]
        }
    ]
};
