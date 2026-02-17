import { Character } from "../characterTypes";

export const chixia: Character = {
    id: "chixia",
    name: "Chixia",
    rarity: 4,
    element: "Fusion",
    weaponType: "Pistols",
    role: "Main DPS",
    tags: ["Fusion DMG", "Skill DMG", "Ranged", "Burst"],
    tier: {
        overall: "R3",
        tower: "R3",
        wastes: "R3"
    },
    imagePortrait: "/images/characters/ChixiaSmall.png",
    imageIcon: "/images/characters/ChixiaSmall.png",
    imageCard: "/images/characters/ChixiaLarge.png",
    stats: {
        hp: 9088,
        atk: 300,
        def: 953
    },
    maxEnergy: 150,
    minorFortes: [
        { name: "Fusion DMG", value: "12%", stat: "elementalDamage", amount: 12 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "Belle Poppy", count: 60, icon: "/images/else/bellepoppy.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Rage Tacet Core", count: 46, icon: "/images/else/ragetacetcore.png" }
        ],
        skills: [
            { name: "LF Whisperin Core", count: 25, icon: "/images/else/lfwhisperincore.png" },
            { name: "MF Whisperin Core", count: 28, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 40, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 57, icon: "/images/else/ffwhisperincore.png" },
            { name: "Impure Phlogiston", count: 25, icon: "/images/else/impurephlogiston.png" },
            { name: "Extracted Phlogiston", count: 28, icon: "/images/else/extractedphlogiston.png" },
            { name: "Refined Phlogiston", count: 55, icon: "/images/else/refinedphlogiston.png" },
            { name: "Flawless Phlogiston", count: 67, icon: "/images/else/flawlessphlogiston.png" },
            { name: "Monument Bell", count: 26, icon: "/images/else/monumentbell.png" }
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
                    { name: "Rage Tacet Core", count: 3, icon: "/images/else/ragetacetcore.png" },
                    { name: "Belle Poppy", count: 4, icon: "/images/else/bellepoppy.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Whisperin Core", count: 8, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Rage Tacet Core", count: 6, icon: "/images/else/ragetacetcore.png" },
                    { name: "Belle Poppy", count: 8, icon: "/images/else/bellepoppy.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Whisperin Core", count: 4, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Rage Tacet Core", count: 9, icon: "/images/else/ragetacetcore.png" },
                    { name: "Belle Poppy", count: 12, icon: "/images/else/bellepoppy.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Whisperin Core", count: 8, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Rage Tacet Core", count: 12, icon: "/images/else/ragetacetcore.png" },
                    { name: "Belle Poppy", count: 16, icon: "/images/else/bellepoppy.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
                    { name: "Rage Tacet Core", count: 16, icon: "/images/else/ragetacetcore.png" },
                    { name: "Belle Poppy", count: 20, icon: "/images/else/bellepoppy.png" }
                ]
            }
        ],
        weapon: {
            name: "The Last Dance",
            icon: "/images/weapons/thelastdance.png",
            total: [
                { name: "MF Whisperin Core", count: 20, icon: "/images/else/mfwhisperincore.png" },
                { name: "HF Whisperin Core", count: 20, icon: "/images/else/hfwhisperincore.png" },
                { name: "FF Whisperin Core", count: 12, icon: "/images/else/ffwhisperincore.png" },
                { name: "Impure Phlogiston", count: 26, icon: "/images/else/impurephlogiston.png" },
                { name: "Extracted Phlogiston", count: 26, icon: "/images/else/extractedphlogiston.png" },
                { name: "Refined Phlogiston", count: 16, icon: "/images/else/refinedphlogiston.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Whisperin Core", count: 6, icon: "/images/else/lfwhisperincore.png" },
                        { name: "Impure Phlogiston", count: 6, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Whisperin Core", count: 6, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Impure Phlogiston", count: 6, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Whisperin Core", count: 10, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Impure Phlogiston", count: 10, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Whisperin Core", count: 6, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Extracted Phlogiston", count: 6, icon: "/images/else/extractedphlogiston.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Whisperin Core", count: 10, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Extracted Phlogiston", count: 10, icon: "/images/else/extractedphlogiston.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Whisperin Core", count: 6, icon: "/images/else/ffwhisperincore.png" },
                        { name: "Refined Phlogiston", count: 6, icon: "/images/else/refinedphlogiston.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Chixia is a free 4-star **Fusion Pistol Main DPS** known for her high-speed "Run & Gun" gameplay. Her kit revolves around building "Thermobaric Bullets" to unleash her Forte Circuit, **DAKA DAKA!**, followed by a powerful finisher, **Boom Boom**.
        
        She boasts one of the highest multiplier Resonance Liberations in the game, making her excellent for taking out groups of enemies or dealing burst damage to bosses, provided you can manage her high Energy cost (150).`,
        playstyle: "Generate 60 Thermobaric Bullets via Basic/Skill -> Hold Skill for DAKA DAKA! -> Tap Basic at 30 bullets for Boom Boom -> Ultimate when full.",
        pros: [
            "**High Burst**: Liberation has exceptionally high multipliers for a 4-star.",
            "**Mobile Gameplay**: Can move while channeling her Forte (DAKA DAKA!), making her safe and fun.",
            "**Free & Accessible**: Given to all players early on.",
            "**Strong Dual DPS**: Pairs exceptionally well with Changli for swap-cancel playstyles."
        ],
        cons: [
            "**High Energy Cost**: 150 Energy for Liberation is very demanding, requiring Energy Regen substats.",
            "**Single Target Focus**: Outside of Liberation, her AoE is limited.",
            "**Interruptible**: Channeling DAKA DAKA! can be interrupted if not careful."
        ]
    },
    skills: [
        {
            name: "Basic: POW POW",
            type: "Basic",
            description: "4-shot combo generating **Thermobaric Bullets** (max 60, +10 Inherent). High P4 multiplier.",
            attributes: [
                { name: "Basic P1 DMG", value: "33.30%" },
                { name: "Basic P2 DMG", value: "24.30% * 2" },
                { name: "Basic P3 DMG", value: "16.88% * 4" },
                { name: "Basic P4 DMG", value: "117.00%" },
                { name: "Charged Shot", value: "40.50%" },
                { name: "Dodge Counter", value: "171.00%" }
            ],
            priority: 3
        },
        {
            name: "Resonance: Whizzing Fight Spirit",
            type: "Skill",
            description: "Fire 8-hit barrage. 2 charges. Hold → **DAKA DAKA!** (consume Bullets). +1% ATK per hit, stacks 30x (Inherent).",
            attributes: [
                { name: "Skill DMG", value: "16.00% * 8" },
                { name: "Cooldown", value: "9s" },
                { name: "Charges", value: "2" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 2
        },
        {
            name: "Forte Circuit: Heroic Bullets",
            type: "Forte",
            description: "Hold Skill for **DAKA DAKA!** (consumes Bullets, mobile). At 30 Bullets → tap Basic for **Boom Boom** (high DMG). +50% Boom Boom DMG (Inherent).",
            attributes: [
                { name: "Bullet DMG", value: "10.00% each" },
                { name: "POW POW DMG", value: "220.00%" },
                { name: "DAKA Conc. Regen", value: "10 + 0.5/bullet" },
                { name: "Max Bullets", value: "70" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Blazing Flames",
            type: "Ultimate",
            description: "Rapid fire barrage at nearby enemies. Massive Fusion DMG but very high energy cost.",
            attributes: [
                { name: "Skill DMG", value: "480.00% + 29.10% * 11" },
                { name: "Cooldown", value: "20s" },
                { name: "Energy Cost", value: "150" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 4
        },
        {
            name: "Intro: Grand Entrance",
            type: "Intro",
            description: "Heroic dual pistol entrance generating Bullets.",
            attributes: [
                { name: "Skill DMG", value: "24.75% * 2 + 12.38% * 4" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Leaping Flames",
            type: "Outro",
            description: "Release shockwave dealing massive Fusion DMG.",
            attributes: [
                { name: "Outro DMG", value: "530.00% ATK" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "**Boom Boom** hits are always Critical Hits." },
        { node: "S2", name: "Sequence Node 2", description: "Liberation recovers **5 Energy** per kill (up to 20). Helps with high energy cost." },
        { node: "S3", name: "Sequence Node 3", description: "Liberation deals **40% more DMG** to targets below 50% HP." },
        { node: "S4", name: "Sequence Node 4", description: "Liberation grants **60 Bullets** and resets Skill Cooldown. Enables double burst rotations." },
        { node: "S5", name: "Sequence Node 5", description: "Max stacks of 'Numbingly Spicy!' (ATK buff) increases ATK by an additional **30%**." },
        { node: "S6", name: "Sequence Node 6", description: "**Boom Boom** increases team Basic Attack DMG by **25%** for 15s." }
    ],
    rotation: [
        "1. **Intro**: Enter with Chixia. Skill + Basic to fill Bullet Gauge.",
        "2. **Forte**: Hold Skill (DAKA DAKA!) until 30 bullets -> Tap Basic (Boom Boom).",
        "3. **Liberation**: Cast **Blazing Flames** if Energy is full (Best used on groups).",
        "4. **Loop**: Repeat Forte cycle if enabled by S4, or swap out.",
        "5. **Outro**: Switch to next character."
    ],
    builds: {
        weapons: [
            {
                name: "The Last Dance",
                rank: "Signature",
                rarity: 5,
                description: "Carlotta's Signature. Best in Slot. Massive Skill DMG bonus fits her rotation perfectly.",
                image: "/images/weapons/thelastdance.png"
            },
            {
                name: "Static Mist",
                rank: "5-Star Alt",
                rarity: 5,
                description: "Great Crit Rate and Energy Regen. Standard banner option.",
                image: "/images/weapons/staticmist.png"
            },
            {
                name: "Thunderbolt",
                rank: "4-Star Best",
                rarity: 4,
                description: "Increases Resonance Skill DMG, stacking with attacks.",
                image: "/images/weapons/thunderbolt.png"
            },
            {
                name: "Undying Flame",
                rank: "4-Star Alt",
                rarity: 4,
                description: "Boosts Skill DMG after Intro. Solid option.",
                image: "/images/weapons/undyingflame.png"
            },
            {
                name: "Novaburst",
                rank: "F2P Option",
                rarity: 4,
                description: "Craftable/Drop option if others unavailable.",
                image: "/images/weapons/novaburst.png"
            }
        ],
        echoes: [
            {
                set: "Molten Rift (5pc)",
                mainEcho: "Nightmare: Inferno Rider",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Fusion DMG", "Fusion DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Energy Regen", "Skill DMG", "ATK%"]
                },
                description: "Standard Fusion DPS set. Maximizes personal damage.",
                recommendation_reason: "Best for Hypercarry Chixia.",
                echo_breakdown: {
                    cost4: [{ name: "Nightmare: Inferno Rider", image: "/images/echoes/nightmareinfernorider.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Havoc Dreadmane", image: "/images/echoes/havocdreadmane.png", mainStats: ["Fusion DMG"] },
                        { name: "Violet-Feathered Heron", image: "/images/echoes/violetfeatheredheron.png", mainStats: ["Fusion DMG"] }
                    ],
                    cost1: [
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["ATK%"] },
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Energy Regen (130%+) > Skill DMG > ATK%"
    },
    teams: [
        {
            name: "Chixia Hypercarry",
            description: "Focuses on buffing Chixia's personal damage with Fusion amps.",
            members: [
                { name: "Chixia", role: "Main DPS" },
                { name: "Changli", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        },
        {
            name: "F2P Friendly",
            description: "Accessible team with excellent synergy.",
            members: [
                { name: "Chixia", role: "Main DPS" },
                { name: "Rover (Spectro)", role: "Sub DPS" },
                { name: "Baizhi", role: "Support" }
            ]
        }
    ]
};
