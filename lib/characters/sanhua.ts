import { Character } from "../characterTypes";

export const sanhua: Character = {
    id: "sanhua",
    name: "Sanhua",
    rarity: 4,
    element: "Glacio",
    weaponType: "Sword",
    role: "Hybrid",
    tags: ["Basic Attack Buff", "Fast Rotation", "Free", "Hybrid"],
    profileType: "Versatile",
    potential: "A",
    tier: {
        overall: "R2",
        tower: "R2",
        wastes: "R2"
    },
    imagePortrait: "/images/characters/SanhuaSmall.png",
    imageIcon: "/images/characters/SanhuaSmall.png",
    imageCard: "/images/characters/SanhuaLarge.png",
    stats: {
        hp: 10062,
        atk: 275,
        def: 941
    },
    maxEnergy: 100,
    minorFortes: [
        { name: "Glacio DMG", value: "12%", stat: "glacioDamage", amount: 12 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "Wintry Bell", count: 60, icon: "/images/else/wintrybell.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Sound-Keeping Tacet Core", count: 46, icon: "/images/else/soundkeepingtacetcore.png" }
        ],
        skills: [
            { name: "LF Whisperin Core", count: 25, icon: "/images/else/lfwhisperincore.png" },
            { name: "MF Whisperin Core", count: 28, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 40, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 57, icon: "/images/else/ffwhisperincore.png" },
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
                    { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "MF Whisperin Core", count: 4, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 3, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Wintry Bell", count: 4, icon: "/images/else/wintrybell.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Whisperin Core", count: 8, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 6, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Wintry Bell", count: 8, icon: "/images/else/wintrybell.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Whisperin Core", count: 4, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 9, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Wintry Bell", count: 12, icon: "/images/else/wintrybell.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Whisperin Core", count: 8, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 12, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Wintry Bell", count: 16, icon: "/images/else/wintrybell.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 16, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Wintry Bell", count: 20, icon: "/images/else/wintrybell.png" }
                ]
            }
        ],
        weapon: {
            name: "Emerald of Genesis",
            icon: "/images/weapons/emeraldofgenesis.png",
            total: [
                { name: "MF Whisperin Core", count: 20, icon: "/images/else/mfwhisperincore.png" },
                { name: "HF Whisperin Core", count: 20, icon: "/images/else/hfwhisperincore.png" },
                { name: "FF Whisperin Core", count: 12, icon: "/images/else/ffwhisperincore.png" },
                { name: "Inert Metallic Drip", count: 26, icon: "/images/else/inertmetallicdrip.png" },
                { name: "Reactive Metallic Drip", count: 26, icon: "/images/else/reactivemetallicdrip.png" },
                { name: "Polarized Metallic Drip", count: 16, icon: "/images/else/polarizedmetallicdrip.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Whisperin Core", count: 6, icon: "/images/else/lfwhisperincore.png" },
                        { name: "Inert Metallic Drip", count: 6, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Whisperin Core", count: 6, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Inert Metallic Drip", count: 6, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Whisperin Core", count: 10, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Inert Metallic Drip", count: 10, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Whisperin Core", count: 6, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Reactive Metallic Drip", count: 6, icon: "/images/else/reactivemetallicdrip.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Whisperin Core", count: 10, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Reactive Metallic Drip", count: 10, icon: "/images/else/reactivemetallicdrip.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Whisperin Core", count: 6, icon: "/images/else/ffwhisperincore.png" },
                        { name: "Polarized Metallic Drip", count: 6, icon: "/images/else/polarizedmetallicdrip.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Sanhua is a 4-star Glacio Sword wielder and one of the finest **Sub-DPS/Support** hybrids in Wuthering Waves. Her kit revolves around creating "Ice Structures" (Prisms, Glaciers, Thorns) and detonating them with a timed Heavy Attack for massive burst damage and energy generation.
        
        Her Outro Skill provides a massive **38% Basic Attack DMG Deepen** buff, making her the premier partner for Basic Attack-focused carries like **Camellya**, **Encore**, and **Lingyang**. With the fastest rotation in the game, she takes up minimal field time while contributing significant personal damage.`,
        playstyle: "Intro -> Liberation -> Skill -> Heavy Attack (Detonate) -> Outro.",
        pros: [
            "**Fastest Rotation**: Can dump her entire kit and swap out in under 3-4 seconds.",
            "**Powerful Buffer**: 38% Basic Attack DMG Deepen is best-in-slot for many top DPS.",
            "**Free**: Everyone gets her for free, making her accessible.",
            "**High Burst**: Detonating 3 Ice Structures deals surprisingly high AoE damage."
        ],
        cons: [
            "**Skill Ceilling**: The 'Forte Gauge' minigame requires precise timing (though it's generous).",
            "**Squishy**: Base stats are on the lower side as a 4-star."
        ]
    },
    skills: [
        {
            name: "Basic: Frigid Light",
            type: "Basic",
            description: "Perform up to 5 consecutive attacks dealing Glacio DMG. Basic Attack V grants 1 stack of **Clarity** (expands Frostbite area). Also triggers +20% Ice Burst DMG via Inherent Skill.",
            attributes: [
                { name: "Stage 1 DMG", value: "24.50%" },
                { name: "Stage 2 DMG", value: "37.10%" },
                { name: "Stage 3 DMG", value: "10.85% * 4" },
                { name: "Stage 4 DMG", value: "19.95% * 2" },
                { name: "Stage 5 DMG", value: "117.60%" },
                { name: "Heavy Attack DMG", value: "11.20% * 5" },
                { name: "Dodge Counter DMG", value: "84.00%" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Eternal Frost",
            type: "Skill",
            description: "Send an air blade to create 1 **Ice Prism** on the ground dealing Glacio DMG. Grants 1 Clarity stack. Prism lasts 5s and can be detonated.",
            attributes: [
                { name: "Skill DMG", value: "181.00%" },
                { name: "Ice Prism Burst DMG", value: "40.00%" },
                { name: "Prism Duration", value: "5s" },
                { name: "Cooldown", value: "10s" },
                { name: "Concerto Regen", value: "15" }
            ],
            priority: 2
        },
        {
            name: "Forte Circuit: Clarity of Mind",
            type: "Forte",
            description: "**Heavy Attack: Detonate**: Hold to move cursor, release in Frostbite area to detonate all Ice Structures. **Ice Burst**: Detonating Ice Thorns/Prisms/Glaciers deals Glacio DMG (considered Skill DMG). Frostbite area expands with Clarity (max 2).",
            attributes: [
                { name: "Detonate DMG", value: "93.70% * 2" },
                { name: "Glacier Burst DMG", value: "70.00%" },
                { name: "Ice Prism Burst DMG", value: "40.00%" },
                { name: "Ice Thorn Burst DMG", value: "30.00%" },
                { name: "Structure Duration", value: "5-8s" },
                { name: "Burst Concerto (each)", value: "15" }
            ],
            priority: 3
        },
        {
            name: "Liberation: Glacial Gaze",
            type: "Ultimate",
            description: "Deal Glacio DMG and create 1 **Glacier**. Grants 2 Clarity stacks. Glacier lasts 5s and can be detonated for massive burst.",
            attributes: [
                { name: "Skill DMG", value: "407.16%" },
                { name: "Glacier Burst DMG", value: "70.00%" },
                { name: "Glacier Duration", value: "5s" },
                { name: "Cooldown", value: "16s" },
                { name: "Energy Cost", value: "100" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 4
        },
        {
            name: "Intro: Freezing Thorns",
            type: "Intro",
            description: "Swing blade downward creating 1 **Ice Thorn** dealing Glacio DMG. Grants 1 Clarity stack. +20% Skill DMG for 8s via Inherent Skill.",
            attributes: [
                { name: "Skill DMG", value: "70.00%" },
                { name: "Ice Thorn Burst DMG", value: "30.00%" },
                { name: "Thorn Duration", value: "8s" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Silversnow",
            type: "Outro",
            description: "The next character gains **38% Basic Attack DMG Deepen** for 14s or until switched off. Best-in-slot buff for Basic Attack DPS characters.",
            attributes: [
                { name: "Basic ATK DMG Deepen", value: "38%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 0
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Basic Attack V increases Crit Rate by **15%** for 10s." },
        { node: "S2", name: "Sequence Node 2", description: "Reduces Heavy Attack Detonate Stamina cost by 10. Enhances Skill Anti-interruption." },
        { node: "S3", name: "Sequence Node 3", description: "DMG vs targets under 70% HP increased by **35%**." },
        { node: "S4", name: "Sequence Node 4", description: "Liberation restores 10 Energy. Next Heavy Detonate DMG increased by **120%**." },
        { node: "S5", name: "Sequence Node 5", description: "Forte Crit DMG increased by **100%**. Ice Structures explode automatically on expiration." },
        { node: "S6", name: "Sequence Node 6", description: "Detonating Ice Structures increases team ATK by **10%** (stacks up to 20%)." }
    ],
    rotation: [
        "1. **Intro**: Enter field (Creates Ice Thorn).",
        "2. **Liberation**: Cast Glacial Gaze immediately (Creates Ice Glacier).",
        "3. **Skill**: Cast Eternal Frost (Creates Ice Prism).",
        "4. **Heavy Attack**: Hold and release in blue zone to **Detonate** all 3 structures.",
        "5. **Echo**: Use Impermanence Heron (if equipped).",
        "6. **Outro**: Swap to Main DPS immediately."
    ],
    builds: {
        weapons: [
            {
                name: "Blazing Brilliance",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Changli's Signature. Massive Crit DMG and Skill buff.",
                image: "/images/weapons/blazingbrilliance.png"
            },
            {
                name: "Red Spring",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Camellya's Signature. High Crit Rate and Basic ATK buff.",
                image: "/images/weapons/redspring.png"
            },
            {
                name: "Emerald of Genesis",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Crit Rate and Energy Regen make this perfect for Sub-DPS Sanhua.",
                image: "/images/weapons/emeraldofgenesis.png"
            },
            {
                name: "Commando of Conviction",
                rank: "Best 4-Star",
                rarity: 4,
                description: "ATK buff on Intro perfectly fits her rotation.",
                image: "/images/weapons/commandoofconviction.png"
            },
            {
                name: "Overture",
                rank: "Energy Option",
                rarity: 4,
                description: "Good for Energy Regen if struggling to burst every rotation.",
                image: "/images/weapons/overture.png"
            },
            {
                name: "Sword of Night",
                rank: "F2P Option",
                rarity: 3,
                description: "Basic ATK buff option.",
                image: "/images/weapons/swordofnight.png"
            }
        ],
        echoes: [
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Glacio DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Support Build (Recommended).",
                recommendation_reason: "Maximizes her buffing potential for the Main DPS.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Electro Predator", image: "/images/echoes/electropredator.png", mainStats: ["Glacio DMG"] },
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Whifflenier", image: "/images/echoes/whifflenier.png", mainStats: ["ATK%"] },
                        { name: "Snip Snap", image: "/images/echoes/snipsnap.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Freezing Frost (5pc)",
                mainEcho: "Lampylumen Myriad",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Glacio DMG", "Glacio DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "ATK%", "Energy Regen"]
                },
                description: "Personal DMG Build.",
                recommendation_reason: "Higher personal damage, but less team utility. Use if she is the Main DPS.",
                echo_breakdown: {
                    cost4: [{ name: "Lampylumen Myriad", image: "/images/echoes/lampylumenmyriad.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Glacio Predator", image: "/images/echoes/glaciopredator.png", mainStats: ["Glacio DMG"] },
                        { name: "Glacio Prism", image: "/images/echoes/glacioprism.png", mainStats: ["Glacio DMG"] }
                    ],
                    cost1: [
                        { name: "Glacio Predator", image: "/images/echoes/glaciopredator.png", mainStats: ["ATK%"] },
                        { name: "Excarat", image: "/images/echoes/excarat.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (110-120%) > Crit Rate/DMG > Glacio DMG"
    },
    teams: [
        {
            name: "Basic ATK Hypercarry",
            description: "Buffing Camellya or Encore.",
            members: [
                { name: "Camellya", role: "Main DPS" },
                { name: "Sanhua", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "F2P Team",
            description: "Solid starter team.",
            members: [
                { name: "Encore", role: "Main DPS" },
                { name: "Sanhua", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        }
    ]
};
