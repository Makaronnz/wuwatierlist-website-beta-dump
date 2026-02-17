import { Character } from "../characterTypes";

export const xiangli: Character = {
    id: "xiangli",
    name: "Xiangli Yao",
    rarity: 5,
    element: "Electro",
    weaponType: "Gauntlets",
    role: "Main DPS",
    tags: ["Resonance Liberation", "Combo Heavy", "Time Stop", "Free Unit"],
    tier: {
        overall: "R0.5",
        tower: "R0.5",
        wastes: "R1.5"
    },
    imagePortrait: "/images/characters/XiangliyaoSmall.png",
    imageIcon: "/images/characters/XiangliyaoSmall.png",
    imageCard: "/images/characters/XiangliyaoLarge.png",
    stats: {
        hp: 10625,
        atk: 425,
        def: 1222
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT DMG", value: "16%", stat: "critDamage", amount: 16 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "Violet Coral", count: 60, icon: "/images/else/violetcoral.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Hidden Thunder Tacet Core", count: 46, icon: "/images/else/hiddenthundertacetcore.png" }
        ],
        skills: [
            { name: "LF Whisperin Core", count: 25, icon: "/images/else/lfwhisperincore.png" },
            { name: "MF Whisperin Core", count: 28, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 40, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 57, icon: "/images/else/ffwhisperincore.png" },
            { name: "Cadence Seed", count: 25, icon: "/images/else/cadenceseed.png" },
            { name: "Cadence Bud", count: 28, icon: "/images/else/cadencebud.png" },
            { name: "Cadence Leaf", count: 55, icon: "/images/else/cadenceleaf.png" },
            { name: "Cadence Blossom", count: 67, icon: "/images/else/cadenceblossom.png" },
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
                    { name: "Hidden Thunder Tacet Core", count: 3, icon: "/images/else/hiddenthundertacetcore.png" },
                    { name: "Violet Coral", count: 4, icon: "/images/else/violetcoral.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Whisperin Core", count: 8, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Hidden Thunder Tacet Core", count: 6, icon: "/images/else/hiddenthundertacetcore.png" },
                    { name: "Violet Coral", count: 8, icon: "/images/else/violetcoral.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Whisperin Core", count: 4, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Hidden Thunder Tacet Core", count: 9, icon: "/images/else/hiddenthundertacetcore.png" },
                    { name: "Violet Coral", count: 12, icon: "/images/else/violetcoral.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Whisperin Core", count: 8, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Hidden Thunder Tacet Core", count: 12, icon: "/images/else/hiddenthundertacetcore.png" },
                    { name: "Violet Coral", count: 16, icon: "/images/else/violetcoral.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
                    { name: "Hidden Thunder Tacet Core", count: 16, icon: "/images/else/hiddenthundertacetcore.png" },
                    { name: "Violet Coral", count: 20, icon: "/images/else/violetcoral.png" }
                ]
            }
        ],
        weapon: {
            name: "Verity's Handle",
            icon: "/images/weapons/verityshandle.png",
            total: [
                { name: "MF Whisperin Core", count: 20, icon: "/images/else/mfwhisperincore.png" },
                { name: "HF Whisperin Core", count: 20, icon: "/images/else/hfwhisperincore.png" },
                { name: "FF Whisperin Core", count: 12, icon: "/images/else/ffwhisperincore.png" },
                { name: "Cadence Seed", count: 26, icon: "/images/else/cadenceseed.png" },
                { name: "Cadence Bud", count: 26, icon: "/images/else/cadencebud.png" },
                { name: "Cadence Leaf", count: 16, icon: "/images/else/cadenceleaf.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Whisperin Core", count: 6, icon: "/images/else/lfwhisperincore.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Whisperin Core", count: 6, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Whisperin Core", count: 10, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Cadence Seed", count: 10, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Whisperin Core", count: 6, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Cadence Bud", count: 6, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Whisperin Core", count: 10, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Cadence Bud", count: 10, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Whisperin Core", count: 6, icon: "/images/else/ffwhisperincore.png" },
                        { name: "Cadence Leaf", count: 6, icon: "/images/else/cadenceleaf.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Xiangli Yao is a 5-star **Electro Main DPS** who specializes in explosive **Resonance Liberation** damage. His playstyle revolves around entering the "Intuition" state via his Liberation, where he gains "Hypercubes" to execute enhanced skills.
        
        He offers a very forgiving burst window (24s), high interruption resistance, and the ability to slow down enemies (Time Stop). He is extremely F2P friendly (given for free in 1.2) and scales incredibly well with high investment.`,
        playstyle: "Builder Phase (Concerto/Energy) -> Liberation (Intuition) -> Enhanced Skills x3 -> Outro.",
        pros: [
            "**Huge Burst DMG**: Multipliers on his Enhanced Skills are massive.",
            "**Forgiving Rotation**: 24s Intuition state allows flexible combos and dodging.",
            "**Time Stop**: Liberation slows enemies, making it easier to land hits.",
            "**F2P Friendly**: Strong base kit and accessible weapon options."
        ],
        cons: [
            "**Combo Reliance**: Maximizing damage requires learning his specific combo loops.",
            "**Animation Lock**: Long animations can leave him vulnerable if not timed well."
        ]
    },
    skills: [
        {
            name: "Basic: Probe / Pivot - Impale",
            type: "Basic",
            description: "5-hit combo (16.65%*2 → 50.10% → 20%*3 → 26.68%*2+13.34% → 100%). **Heavy**: 41.65%*2. In **Intuition**: **Pivot - Impale** (60.19% → 30.65%*4 → 67.03%*2). Generates Capacity/Performance Capacity.",
            attributes: [
                { name: "Basic P5", value: "100.00%" },
                { name: "Pivot P3", value: "67.03% * 2" },
                { name: "Performance Cap", value: "+1/+2/+2 per stage" }
            ],
            priority: 4
        },
        {
            name: "Resonance: Deduction / Divergence",
            type: "Skill",
            description: "**Deduction**: 100% Electro, 5s CD. At 100 Capacity → **Decipher** (200.10%, Liberation DMG). In **Intuition**: **Divergence** (24.94%*3 + 87.29%*2, 7s CD). **Mid-air Revamp** (11%*4 + 33%*2) after Decipher/Divergence.",
            attributes: [
                { name: "Deduction", value: "100.00%" },
                { name: "Decipher", value: "200.10%" },
                { name: "Divergence", value: "24.94% * 3 + 87.29% * 2" }
            ],
            priority: 2
        },
        {
            name: "Forte: Forever Seeking",
            type: "Forte",
            description: "**Capacity** (max 100): At full → Decipher (200.10%). **Performance Capacity** (max 5, Intuition only): At full → **Law of Reigns** (48.15%*4 + 128.40%, Liberation DMG). **Inherent**: +5% Electro DMG per Skill cast (stacks 4x, 8s).",
            attributes: [
                { name: "Law of Reigns", value: "48.15% * 4 + 128.40%" },
                { name: "Electro Buff", value: "+20% (4 stacks)" },
                { name: "Concerto", value: "+10 per Law" }
            ],
            priority: 1
        },
        {
            name: "Liberation: Cogitation Model",
            type: "Ultimate",
            description: "737.42% Electro DMG. Enters **Intuition** (24s): 3 Hypercubes, enhanced Basic/Skill/Dodge. Each **Law of Reigns** consumes 1 Hypercube. **Dodge Counter Unfathomed** (19.53%*2 + 156.22%, Liberation DMG).",
            attributes: [
                { name: "Skill DMG", value: "737.42%" },
                { name: "Duration", value: "24s" },
                { name: "Hypercubes", value: "3" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 0
        },
        {
            name: "Intro: Principle",
            type: "Intro",
            description: "50%*2 Electro DMG.",
            attributes: [
                { name: "Skill DMG", value: "50.00% * 2" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 3
        },
        {
            name: "Outro: Chain Rule",
            type: "Outro",
            description: "Next Resonator's Basic Attack triggers laser beam dealing **237.63%** ATK Electro DMG to an area. Lasts 8s, triggers every 2s, up to 3 times.",
            attributes: [
                { name: "Laser DMG", value: "237.63% ATK * 3" },
                { name: "Duration", value: "8s" },
                { name: "Max Triggers", value: "3" }
            ],
            priority: 5
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Law of Reigns launches additional matrices (extra DMG)." },
        { node: "S2", name: "Sequence Node 2", description: "Casting Skill or Liberation increases **Crit DMG by 30%**." },
        { node: "S3", name: "Sequence Node 3", description: "Liberation increases DMG of all Skill variants by **63%**." },
        { node: "S4", name: "Sequence Node 4", description: "Liberation grants **25% Liberation DMG Bonus** to the entire team." },
        { node: "S5", name: "Sequence Node 5", description: "Outro DMG +222%, Liberation DMG +100%." },
        { node: "S6", name: "Sequence Node 6", description: "Hypercubes enhance Law of Reigns DMG by **76%**." }
    ],
    rotation: [
        "1. **Intro**: Enter field.",
        "2. **Skill**: Cast Deduction to build Concerto/Energy.",
        "3. **Liberation**: Cast Cogitation Model (Enter Intuition).",
        "4. **Combo Loop** (Repeat x3): Enhanced Skill (Divergence) -> Mid-air (Revamp) -> Finisher (Law of Reigns).",
        "5. **Outro**: Swap to Sub-DPS once Hypercubes are consumed."
    ],
    builds: {
        weapons: [
            {
                name: "Verity's Handle",
                rank: "Best In Slot",
                rarity: 5,
                description: "Massive Crit Rate and Liberation DMG Bonus.",
                image: "/images/weapons/verityshandle.png"
            },
            {
                name: "Abyss Surges",
                rank: "Excellent Alternative",
                rarity: 5,
                description: "Good stats and Energy Regen.",
                image: "/images/weapons/abysssurges.png"
            },
            {
                name: "Stonard",
                rank: "Battle Pass",
                rarity: 4,
                description: "Crit Rate and Liberation DMG buff.",
                image: "/images/weapons/stonard.png"
            }
        ],
        echoes: [
            {
                set: "Void Thunder (5pc)",
                mainEcho: "Nightmare: Thundering Mephis",
                stats: {
                    cost4: ["Crit Rate", "Crit DMG"],
                    cost3: ["Electro DMG", "Electro DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit Rate", "Crit DMG", "Energy Regen", "Liberation DMG"]
                },
                description: "Standard DPS Build.",
                recommendation_reason: "Maximizes Electro and Liberation DMG.",
                echo_breakdown: {
                    cost4: [{ name: "Nightmare: Thundering Mephis", image: "/images/echoes/nightmarethunderingmephis.png", mainStats: ["Crit Rate", "Crit DMG"] }],
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
            name: "Hypercarry Electro",
            description: "Classic Electro setup.",
            members: [
                { name: "Xiangli Yao", role: "Main DPS" },
                { name: "Yinlin", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        },
        {
            name: "Liberation Buff",
            description: "Focus on Liberation DMG.",
            members: [
                { name: "Xiangli Yao", role: "Main DPS" },
                { name: "Jianxin", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        }
    ]
};
