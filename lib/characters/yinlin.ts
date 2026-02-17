import { Character } from "../characterTypes";

export const yinlin: Character = {
    id: "yinlin",
    name: "Yinlin",
    rarity: 5,
    element: "Electro",
    weaponType: "Rectifier",
    role: "Hybrid",
    tags: ["Coordinated Attack", "Electro Buffer", "Liberation Buffer", "AoE"],
    profileType: "Specialist",
    potential: "B",
    tier: {
        overall: "R2.5",
        tower: "R2.5",
        wastes: "R2.5"
    },
    imagePortrait: "/images/characters/YinlinSmall.png",
    imageIcon: "/images/characters/YinlinSmall.png",
    imageCard: "/images/characters/YinlinLarge.png",
    stats: {
        hp: 11000,
        atk: 400,
        def: 1283
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT Rate", value: "8%", stat: "critRate", amount: 8 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "Coriolus", count: 60, icon: "/images/else/coriolus.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Group Abomination Tacet Core", count: 46, icon: "/images/else/groupabominationtacetcore.png" }
        ],
        skills: [
            { name: "LF Whisperin Core", count: 25, icon: "/images/else/lfwhisperincore.png" },
            { name: "MF Whisperin Core", count: 28, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 40, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 57, icon: "/images/else/ffwhisperincore.png" },
            { name: "Lento Helix", count: 25, icon: "/images/else/lentohelix.png" },
            { name: "Adagio Helix", count: 28, icon: "/images/else/adagiohelix.png" },
            { name: "Andante Helix", count: 55, icon: "/images/else/andantehelix.png" },
            { name: "Presto Helix", count: 67, icon: "/images/else/prestohelix.png" },
            { name: "Dreamless Feather", count: 26, icon: "/images/else/dreamlessfeather.png" }
        ],
        ascensionRanks: [
            {
                rank: 1,
                levelRange: "Lv. 20-40",
                materials: [
                    { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "MF Whisperin Core", count: 4, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Group Abomination Tacet Core", count: 3, icon: "/images/else/groupabominationtacetcore.png" },
                    { name: "Coriolus", count: 4, icon: "/images/else/coriolus.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Whisperin Core", count: 8, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Group Abomination Tacet Core", count: 6, icon: "/images/else/groupabominationtacetcore.png" },
                    { name: "Coriolus", count: 8, icon: "/images/else/coriolus.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Whisperin Core", count: 4, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Group Abomination Tacet Core", count: 9, icon: "/images/else/groupabominationtacetcore.png" },
                    { name: "Coriolus", count: 12, icon: "/images/else/coriolus.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Whisperin Core", count: 8, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Group Abomination Tacet Core", count: 12, icon: "/images/else/groupabominationtacetcore.png" },
                    { name: "Coriolus", count: 16, icon: "/images/else/coriolus.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
                    { name: "Group Abomination Tacet Core", count: 16, icon: "/images/else/groupabominationtacetcore.png" },
                    { name: "Coriolus", count: 20, icon: "/images/else/coriolus.png" }
                ]
            }
        ],
        weapon: {
            name: "Stringmaster",
            icon: "/images/weapons/stringmaster.png",
            total: [
                { name: "MF Whisperin Core", count: 20, icon: "/images/else/mfwhisperincore.png" },
                { name: "HF Whisperin Core", count: 20, icon: "/images/else/hfwhisperincore.png" },
                { name: "FF Whisperin Core", count: 12, icon: "/images/else/ffwhisperincore.png" },
                { name: "Lento Helix", count: 26, icon: "/images/else/lentohelix.png" },
                { name: "Adagio Helix", count: 26, icon: "/images/else/adagiohelix.png" },
                { name: "Andante Helix", count: 16, icon: "/images/else/andantehelix.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Whisperin Core", count: 6, icon: "/images/else/lfwhisperincore.png" },
                        { name: "Lento Helix", count: 6, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Whisperin Core", count: 6, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Lento Helix", count: 6, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Whisperin Core", count: 10, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Lento Helix", count: 10, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Whisperin Core", count: 6, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Adagio Helix", count: 6, icon: "/images/else/adagiohelix.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Whisperin Core", count: 10, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Adagio Helix", count: 10, icon: "/images/else/adagiohelix.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Whisperin Core", count: 6, icon: "/images/else/ffwhisperincore.png" },
                        { name: "Andante Helix", count: 6, icon: "/images/else/andantehelix.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Yinlin is a 5-star **Electro Sub-DPS** and a powerful buffer for Electro and Resonance Liberation Damage. She specializes in off-field AoE damage via her "Punishment Marks" and Coordinated Attacks.
        
        She is an essential teammate for characters like Xiangli Yao and Calcharo, providing a massive **20% Electro DMG Deepen** and **25% Resonance Liberation DMG Deepen** via her Outro Skill.`,
        playstyle: "Apply Sinner's Mark -> Build Judgment Points -> Heavy Attack (Consumed) -> Outro.",
        pros: [
            "**Strong Off-field DMG**: Punishment Marks deal consistent damage.",
            "**Powerful Buffs**: Best-in-slot buffer for Electro and Liberation DPS.",
            "**AoE King**: Excellent at clearing groups of enemies.",
            "**Flexible**: Can be played as a quickswap burst DPS."
        ],
        cons: [
            "**Animation Locks**: Some skills have long animations (can be swap-cancelled).",
            "**Squishy**: Vulnerable during long cast times if not careful."
        ]
    },
    skills: [
        {
            name: "Basic: Zapstring's Dance",
            type: "Basic",
            description: "Control puppet Zapstring to perform up to 4 attacks dealing Electro DMG. Generates Judgment Points on hit.",
            attributes: [
                { name: "Stage 1 DMG", value: "14.49%" },
                { name: "Stage 2 DMG", value: "17.01% * 2" },
                { name: "Stage 3 DMG", value: "7.04% * 7" },
                { name: "Stage 4 DMG", value: "37.80%" },
                { name: "Heavy Attack DMG", value: "15% * 2" },
                { name: "Dodge Counter DMG", value: "12.18% * 7" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Magnetic Roar",
            type: "Skill",
            description: "Zapstring deals Electro DMG and enters Execution Mode (10s). Basic/Dodge Counter triggers Electromagnetic Blast on marked targets (up to 4x). **Lightning Execution**: Recast skill for powerful follow-up attack.",
            attributes: [
                { name: "Magnetic Roar DMG", value: "30% * 3" },
                { name: "Lightning Execution DMG", value: "45% * 4" },
                { name: "Electromagnetic Blast DMG", value: "10%" },
                { name: "Cooldown", value: "12s" },
                { name: "Execution Mode Duration", value: "10s" },
                { name: "Concerto (Roar)", value: "10" },
                { name: "Concerto (Execution)", value: "15" },
                { name: "Concerto (Blast)", value: "5" }
            ],
            priority: 3
        },
        {
            name: "Forte Circuit: Chameleon Cipher",
            type: "Forte",
            description: "When Judgment Points full, Heavy Attack becomes Chameleon Cipher dealing massive AoE Electro DMG and converting Sinner's Marks to **Punishment Marks** (18s). Punishment Marks trigger Judgment Strike Coordinated Attacks (once/sec) when targets are damaged.",
            attributes: [
                { name: "Chameleon Cipher DMG", value: "90% * 2" },
                { name: "Judgment Strike DMG", value: "39.56%" },
                { name: "Max Judgment Points", value: "100" },
                { name: "Punishment Mark Duration", value: "18s" },
                { name: "Coord. ATK Rate", value: "Once/sec" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Thundering Wrath",
            type: "Ultimate",
            description: "Command Zapstring to call thunder upon a large range dealing Electro DMG. Can be swap-cancelled.",
            attributes: [
                { name: "Skill DMG", value: "58.63% * 7" },
                { name: "Cooldown", value: "16s" },
                { name: "Energy Cost", value: "125" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 3
        },
        {
            name: "Intro: Raging Storm",
            type: "Intro",
            description: "Command puppet Zapstring to attack dealing Electro DMG in a large range. Applies Sinner's Mark.",
            attributes: [
                { name: "Skill DMG", value: "7.2% * 10" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 2
        },
        {
            name: "Outro: Strategist",
            type: "Outro",
            description: "The next character gains 20% Electro DMG Deepen and 25% Resonance Liberation DMG Deepen for 14s. Essential buff for Electro/Liberation DPS.",
            attributes: [
                { name: "Electro DMG Deepen", value: "20%" },
                { name: "Liberation DMG Deepen", value: "25%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 0
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Magnetic Roar and Lightning Execution deal +70% DMG." },
        { node: "S2", name: "Sequence Node 2", description: "Electromagnetic Blast restores extra Judgment Points and Energy." },
        { node: "S3", name: "Sequence Node 3", description: "Forte Circuit Judgment Strike DMG +55%." },
        { node: "S4", name: "Sequence Node 4", description: "Judgment Strike hits grant **20% ATK Bonus** to entire team." },
        { node: "S5", name: "Sequence Node 5", description: "Liberation deals +100% DMG to marked targets." },
        { node: "S6", name: "Sequence Node 6", description: "Basic Attacks trigger Furious Thunder (419% ATK) for first 30s after Liberation." }
    ],
    rotation: [
        "1. **Intro**: Enter field.",
        "2. **Skill**: Cast Magnetic Roar (apply Sinner's Mark).",
        "3. **Skill Recast**: Use Lightning Execution.",
        "4. **Combos**: Basic Attacks to fill Judgment Points.",
        "5. **Heavy Attack**: Cast Chameleon Cipher (consume Points, apply Punishment Mark).",
        "6. **Liberation**: Cast Thundering Wrath (can be swap-cancelled).",
        "7. **Outro**: Swap to Main DPS."
    ],
    builds: {
        weapons: [
            {
                name: "Stringmaster",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Massive Crit Rate and DMG Bonus. Also buffs off-field ATK.",
                image: "/images/weapons/stringmaster.png"
            },
            {
                name: "Rime-Draped Sprouts",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Zhezhi's Signature. High Crit DMG and Basic ATK buffs.",
                image: "/images/weapons/rimedrapedsprouts.png"
            },
            {
                name: "Cosmic Ripples",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Good stat stick with Energy Regen. Reliable performance.",
                image: "/images/weapons/cosmicripples.png"
            },
            {
                name: "Augment",
                rank: "Best 4-Star",
                rarity: 4,
                description: "Battle Pass weapon. Crit Rate & Liberation ATK Buff.",
                image: "/images/weapons/augment.png"
            },
            {
                name: "Jinzhou Keeper",
                rank: "F2P Option",
                rarity: 4,
                description: "ATK and HP buff on Intro. Solid craftable.",
                image: "/images/weapons/jinzhoukeeper.png"
            }
        ],
        echoes: [
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit Rate", "Crit DMG"],
                    cost3: ["Electro DMG", "Electro DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit Rate", "Crit DMG", "Energy Regen", "ATK%"]
                },
                description: "Support / Sub-DPS Build.",
                recommendation_reason: "Provides buffs to next character while maintaining good personal DMG.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit Rate", "Crit DMG"] }],
                    cost3: [
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Electro DMG"] },
                        { name: "Chasm Guardian", image: "/images/echoes/chasmguardian.png", mainStats: ["Electro DMG"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Void Thunder (5pc)",
                mainEcho: "Nightmare: Tempest Mephis",
                stats: {
                    cost4: ["Crit Rate", "Crit DMG"],
                    cost3: ["Electro DMG", "Electro DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit Rate", "Crit DMG", "Energy Regen", "ATK%"]
                },
                description: "Pure DMG Build.",
                recommendation_reason: "If playing as Main DPS (less recommended).",
                echo_breakdown: {
                    cost4: [{ name: "Nightmare: Tempest Mephis", image: "/images/echoes/nightmaretempestmephis.png", mainStats: ["Crit Rate", "Crit DMG"] }],
                    cost3: [
                        { name: "Violet-Feathered Heron", image: "/images/echoes/violetfeatheredheron.png", mainStats: ["Electro DMG"] },
                        { name: "Flautist", image: "/images/echoes/flautist.png", mainStats: ["Electro DMG"] }
                    ],
                    cost1: [
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["ATK%"] },
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Electro DMG > ATK% > Energy Regen"
    },
    teams: [
        {
            name: "Calcharo/Xiangli Yao",
            description: "Best in Slot Support.",
            members: [
                { name: "Calcharo", role: "Main DPS" },
                { name: "Yinlin", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        },
        {
            name: "Jinhsi Team",
            description: "Hybrid Sub-DPS.",
            members: [
                { name: "Jinhsi", role: "Main DPS" },
                { name: "Yinlin", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        }
    ]
};
