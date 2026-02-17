import { Character } from "../characterTypes";

export const yangyang: Character = {
    id: "yangyang",
    name: "Yangyang",
    rarity: 4,
    element: "Aero",
    weaponType: "Sword",
    role: "Hybrid",
    tags: ["Energy Regen", "Grouping", "Quickswap", "Hybrid"],
    tier: {
        overall: "R3",
        tower: "R3",
        wastes: "R2.5"
    },
    imagePortrait: "/images/characters/YangyangSmall.png",
    imageIcon: "/images/characters/YangyangSmall.png",
    imageCard: "/images/characters/YangyangLarge.png",
    stats: {
        hp: 10200,
        atk: 250,
        def: 1100
    },
    maxEnergy: 100,
    minorFortes: [
        { name: "ATK", value: "12%", stat: "atk", amount: 12 },
        { name: "Aero DMG", value: "12%", stat: "aeroDmg", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "Crude Ring", count: 4, icon: "/images/else/crudering.png" },
            { name: "Wintry Bell", count: 60, icon: "/images/else/wintrybell.png" },
            { name: "Basic Ring", count: 12, icon: "/images/else/basicring.png" },
            { name: "Improved Ring", count: 12, icon: "/images/else/improvedring.png" },
            { name: "Tailored Ring", count: 4, icon: "/images/else/tailoredring.png" },
            { name: "Roaring Rock Fist", count: 46, icon: "/images/else/roaringrockfist.png" }
        ],
        skills: [
            { name: "Crude Ring", count: 25, icon: "/images/else/crudering.png" },
            { name: "Basic Ring", count: 28, icon: "/images/else/basicring.png" },
            { name: "Improved Ring", count: 40, icon: "/images/else/improvedring.png" },
            { name: "Tailored Ring", count: 57, icon: "/images/else/tailoredring.png" },
            { name: "Inert Metallic Drip", count: 25, icon: "/images/else/inertmetallicdrip.png" },
            { name: "Reactive Metallic Drip", count: 28, icon: "/images/else/reactivemetallicdrip.png" },
            { name: "Polarized Metallic Drip", count: 55, icon: "/images/else/polarizedmetallicdrip.png" },
            { name: "Heterized Metallic Drip", count: 67, icon: "/images/else/heterizedmetallicdrip.png" },
            { name: "Unending Destruction", count: 26, icon: "/images/else/unendingdestruction.png" }
        ],
        ascensionRanks: [
            {
                rank: 1,
                levelRange: "Lv. 20-40",
                materials: [
                    { name: "Crude Ring", count: 4, icon: "/images/else/crudering.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "Basic Ring", count: 4, icon: "/images/else/basicring.png" },
                    { name: "Roaring Rock Fist", count: 3, icon: "/images/else/roaringrockfist.png" },
                    { name: "Wintry Bell", count: 4, icon: "/images/else/wintrybell.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "Basic Ring", count: 8, icon: "/images/else/basicring.png" },
                    { name: "Roaring Rock Fist", count: 6, icon: "/images/else/roaringrockfist.png" },
                    { name: "Wintry Bell", count: 8, icon: "/images/else/wintrybell.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "Improved Ring", count: 4, icon: "/images/else/improvedring.png" },
                    { name: "Roaring Rock Fist", count: 9, icon: "/images/else/roaringrockfist.png" },
                    { name: "Wintry Bell", count: 12, icon: "/images/else/wintrybell.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "Improved Ring", count: 8, icon: "/images/else/improvedring.png" },
                    { name: "Roaring Rock Fist", count: 12, icon: "/images/else/roaringrockfist.png" },
                    { name: "Wintry Bell", count: 16, icon: "/images/else/wintrybell.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "Tailored Ring", count: 4, icon: "/images/else/tailoredring.png" },
                    { name: "Roaring Rock Fist", count: 16, icon: "/images/else/roaringrockfist.png" },
                    { name: "Wintry Bell", count: 20, icon: "/images/else/wintrybell.png" }
                ]
            }
        ],
        weapon: {
            name: "Emerald of Genesis",
            icon: "/images/weapons/emeraldofgenesis.png",
            total: [
                { name: "Basic Ring", count: 20, icon: "/images/else/basicring.png" },
                { name: "Improved Ring", count: 20, icon: "/images/else/improvedring.png" },
                { name: "Tailored Ring", count: 12, icon: "/images/else/tailoredring.png" },
                { name: "Inert Metallic Drip", count: 26, icon: "/images/else/inertmetallicdrip.png" },
                { name: "Reactive Metallic Drip", count: 26, icon: "/images/else/reactivemetallicdrip.png" },
                { name: "Polarized Metallic Drip", count: 16, icon: "/images/else/polarizedmetallicdrip.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "Crude Ring", count: 6, icon: "/images/else/crudering.png" },
                        { name: "Inert Metallic Drip", count: 6, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "Basic Ring", count: 6, icon: "/images/else/basicring.png" },
                        { name: "Inert Metallic Drip", count: 6, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "Basic Ring", count: 10, icon: "/images/else/basicring.png" },
                        { name: "Inert Metallic Drip", count: 10, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "Improved Ring", count: 6, icon: "/images/else/improvedring.png" },
                        { name: "Reactive Metallic Drip", count: 6, icon: "/images/else/reactivemetallicdrip.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "Improved Ring", count: 10, icon: "/images/else/improvedring.png" },
                        { name: "Reactive Metallic Drip", count: 10, icon: "/images/else/reactivemetallicdrip.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "Tailored Ring", count: 6, icon: "/images/else/tailoredring.png" },
                        { name: "Polarized Metallic Drip", count: 6, icon: "/images/else/polarizedmetallicdrip.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Yangyang is a free **Aero Sword Hybrid** known for extremely fast rotations and her unique **Energy Regeneration Outro Skill**. She excels in quickswap teams, providing energy to the next character and capable of grouping enemies with her Liberation.
        
        She is a highly accessible option for early-game players and a surprisingly strong niche pick for advanced quickswap strategies with characters like Xiangli Yao or Changli.`,
        playstyle: "Build Melody (3x) -> Feather Release -> Liberation -> Skill -> Outro.",
        pros: [
            "**Energy Funnel**: Unique Outro grants 4 Energy/s for 5s to the next character.",
            "**Fast Rotation**: One of the shortest rotations in the game.",
            "**Grouping**: Liberation gathers enemies effectively.",
            "**F2P Friendly**: Free character with solid performance at S6."
        ],
        cons: [
            "**No DMG Amplify**: Outro lacks the amplification buffs of premium supports.",
            "**Sequence Dependent**: S4/S5/S6 are significant power spikes; weak without them.",
            "**Niche**: Outclassed by stronger buffing hybrids in most team comps."
        ]
    },
    skills: [
        {
            name: "Basic: Feather as Blade",
            type: "Basic",
            description: "Perform up to 4 consecutive attacks dealing Aero DMG. After Heavy Attack or Dodge Counter, use Basic to trigger **Zephyr Song** which grants Melody.",
            attributes: [
                { name: "Stage 1 DMG", value: "22.50%" },
                { name: "Stage 2 DMG", value: "30.00%" },
                { name: "Stage 3 DMG", value: "23.55% * 2" },
                { name: "Stage 4 DMG", value: "29.86% * 2 + 39.81%" },
                { name: "Heavy Attack DMG", value: "10.00% * 3" },
                { name: "Zephyr Song DMG", value: "53.62%" },
                { name: "Dodge Counter DMG", value: "43.80% * 2" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Zephyr Domain",
            type: "Skill",
            description: "Wield sword to create a whirling vortex that gathers nearby enemies to center, dealing Aero DMG. Grants 1 Melody on hit.",
            attributes: [
                { name: "Skill DMG", value: "17.37% * 4 + 104.22%" },
                { name: "Cooldown", value: "10s" },
                { name: "Concerto Regen", value: "15" },
                { name: "Effect", value: "Grouping + 1 Melody" }
            ],
            priority: 3
        },
        {
            name: "Forte Circuit: Echoing Feathers",
            type: "Forte",
            description: "**Melody**: Max 3 stacks. Gained from Basic Stage 4, Zephyr Song, Resonance Skill, and Intro. **Stormy Strike**: With 3 Melodies, Heavy Attack triggers enhanced attack. **Feather Release**: With 3 Melodies, mid-air Basic consumes all Melodies for powerful dive attack.",
            attributes: [
                { name: "Stormy Strike DMG", value: "19.12% * 2" },
                { name: "Feather Release DMG", value: "10.93% * 5 + 63.78% * 2" },
                { name: "Feather Release Concerto", value: "30" },
                { name: "Stamina Recovery", value: "+30 after Feather Release" }
            ],
            priority: 3
        },
        {
            name: "Liberation: Wind Spirals",
            type: "Ultimate",
            description: "Conjure a mighty Cyclone that gathers nearby enemies, dealing multi-hit Aero DMG. Excellent for grouping enemies.",
            attributes: [
                { name: "Skill DMG", value: "23.43% * 12 + 187.46%" },
                { name: "Cooldown", value: "16s" },
                { name: "Energy Cost", value: "100" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 4
        },
        {
            name: "Intro: Cerulean Song",
            type: "Intro",
            description: "Send target into the air dealing Aero DMG. Grants 1 Melody and 8% Aero DMG Bonus for 8s via Inherent Skill.",
            attributes: [
                { name: "Skill DMG", value: "40.00% * 2" },
                { name: "Concerto Regen", value: "10" },
                { name: "Aero DMG Bonus", value: "+8% for 8s" }
            ],
            priority: 1
        },
        {
            name: "Outro: Whispering Breeze",
            type: "Outro",
            description: "The next character recovers 4 Resonance Energy per second for 5s (20 total). Unique energy funneling effect.",
            attributes: [
                { name: "Energy Regen", value: "4/s for 5s" },
                { name: "Total Energy", value: "20" }
            ],
            priority: 0
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Intro increases Aero DMG Bonus by 15% for 8s." },
        { node: "S2", name: "Sequence Node 2", description: "Heavy Attack recovers 10 Resonance Energy (20s CD)." },
        { node: "S3", name: "Sequence Node 3", description: "Skill DMG +40%. Pulling range expanded by 33%." },
        { node: "S4", name: "Sequence Node 4", description: "Feather Release DMG increased by 95%." },
        { node: "S5", name: "Sequence Node 5", description: "Liberation DMG increased by 85%." },
        { node: "S6", name: "Sequence Node 6", description: "After Feather Release, **team ATK +20%** for 20s." }
    ],
    rotation: [
        "1. **Basic P3** -> Heavy -> Zephyr Song (1 Melody).",
        "2. **Liberation**: Wind Spirals (group enemies).",
        "3. **Basic P1** -> Heavy -> Zephyr Song (2 Melodies).",
        "4. **Skill**: Zephyr Domain (3 Melodies).",
        "5. **Forte**: Jump -> Feather Release (consume Melody).",
        "6. **Outro**: Swap to DPS (Energy Regen Buff)."
    ],
    builds: {
        weapons: [
            {
                name: "Blazing Brilliance",
                rank: "Best In Slot",
                rarity: 5,
                description: "Changli's Signature. High Skill DMG bonus fits Yangyang's kit perfectly.",
                image: "/images/weapons/blazingbrilliance.png"
            },
            {
                name: "Emerald of Genesis",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Excellent stats. Energy Regen helps with rotation uptime.",
                image: "/images/weapons/emeraldofgenesis.png"
            },
            {
                name: "Commando of Conviction",
                rank: "Quickswap Best",
                rarity: 4,
                description: "ATK boost on Intro ideal for her quickswap playstyle.",
                image: "/images/weapons/commandoofconviction.png"
            },
            {
                name: "Lumingloss",
                rank: "Battle Pass",
                rarity: 4,
                description: "Basic/Heavy attacks buff Skill DMG. Solid option.",
                image: "/images/weapons/lumingloss.png"
            }
        ],
        echoes: [
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit Rate", "Crit DMG"],
                    cost3: ["Aero DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit Rate", "Crit DMG", "ATK%"]
                },
                description: "Support / Buffer Build.",
                recommendation_reason: "Provides ATK buff on Outro. Standard support setup.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit Rate", "Crit DMG"] }],
                    cost3: [
                        { name: "Roseshroom", image: "/images/echoes/roseshroom.png", mainStats: ["Aero DMG"] },
                        { name: "Geohide Saurian", image: "/images/echoes/geohidesaurian.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Sierra Gale (5pc)",
                mainEcho: "Nightmare: Feilian Beringal",
                stats: {
                    cost4: ["Crit Rate", "Crit DMG"],
                    cost3: ["Aero DMG", "Aero DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit Rate", "Crit DMG", "ATK%", "Energy Regen"]
                },
                description: "DPS Build.",
                recommendation_reason: "If you want Yangyang to deal more personal damage.",
                echo_breakdown: {
                    cost4: [{ name: "Nightmare: Feilian Beringal", image: "/images/echoes/nightmarefeilianberingal.png", mainStats: ["Crit Rate", "Crit DMG"] }],
                    cost3: [
                        { name: "Roseshroom", image: "/images/echoes/roseshroom.png", mainStats: ["Aero DMG"] },
                        { name: "Flautist", image: "/images/echoes/flautist.png", mainStats: ["Aero DMG"] }
                    ],
                    cost1: [
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["ATK%"] },
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (107%+) > Crit Rate/DMG > ATK% > Aero DMG"
    },
    teams: [
        {
            name: "Quickswap Xiangli Yao",
            description: "Energy funneling and fast rotations.",
            members: [
                { name: "Xiangli Yao", role: "Main DPS" },
                { name: "Yangyang", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "Early Game Team",
            description: "Accessible free team.",
            members: [
                { name: "Rover (Spectro)", role: "Main DPS" },
                { name: "Yangyang", role: "Sub DPS" },
                { name: "Baizhi", role: "Support" }
            ]
        }
    ]
};
