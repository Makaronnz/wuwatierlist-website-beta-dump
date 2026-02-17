import { Character } from "../characterTypes";

export const xiangli_yao: Character = {
    id: "xiangli-yao",
    name: "Xiangli Yao",
    rarity: 5,
    element: "Electro",
    weaponType: "Gauntlets",
    role: "Main DPS",
    tags: ["Liberation DMG", "Time Stop", "Hypercube", "Combo"],
    profileType: "Specialist",
    potential: "A",
    tier: {
        overall: "R1.5",
        tower: "R1.5", wastes: "R1.5"
    },
    imagePortrait: "/images/characters/XiangliyaoSmall.png",
    imageIcon: "/images/characters/XiangliyaoSmall.png",
    imageCard: "/images/characters/XiangliyaoLarge.png",
    stats: {
        hp: 10625,
        atk: 425,
        def: 1222
    },
    minorFortes: [
        { name: "Crit DMG", value: "16%", stat: "critDmg", amount: 16 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Hidden Thunder Tacet Core", count: 46, icon: "/images/else/hiddenthundertacetcore.png" },
            { name: "Violet Coral", count: 60, icon: "/images/else/violetcoral.png" },
            { name: "Shell Credit", count: 170000, icon: "/images/else/shellcredit.png" }
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
            { name: "Unending Destruction", count: 26, icon: "/images/else/unendingdestruction.png" },
            { name: "Shell Credit", count: 2030000, icon: "/images/else/shellcredit.png" }
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
        overview: `Xiangli Yao is a **5-star Electro Gauntlet Main DPS** centered around his **Resonance Liberation**.
            
            His Ultimate enters the **Intuition** state (24s), granting 3 **Hypercubes**. He consumes these cubes via **Law of Reigns** (Enhanced Skill) for massive damage. He offers high sustained DPS with a forgiving rotation due to time-stop mechanics and interruption resistance.`,

        playstyle: "**The Investigator**: \n1. **Ult**: Enter Intuition (Get 3 Cubes).\n2. **Divergence** (Skill) -> **Revamp** (Mid-air): Build Performance Capacity.\n3. **Law of Reigns**: Consume Cube (Big DMG).\n4. **Repeat**: Use Basic Combos/Skill to cycle 3 Cubes within 24s.",

        pros: [
            "**Simplest 5-Star Rotation**: Even if you play blindfolded, there's no chance you'll fail the rotation. Extremely beginner-friendly.",
            "**Forgiving Burst**: Long 24s timer allows swapping/dodging.",
            "**High Multipliers**: Law of Reigns hits very hard.",
            "**F2P Friendly**: Easy to build."
        ],
        cons: [
            "**Combo Heavy**: Requires specific sequences for optimal DPS.",
            "**Backloaded**: Needs to spend Cubes to deal damage."
        ]
    },
    skills: [
        {
            name: "Basic: Probe",
            type: "Basic",
            description: "Perform up to 5 consecutive attacks dealing Electro DMG. During Intuition (Ult), replaced by **Pivot - Impale** (3-hit combo that builds Performance Capacity).",
            attributes: [
                { name: "Stage 1 DMG", value: "16.65% * 2" },
                { name: "Stage 2 DMG", value: "50.10%" },
                { name: "Stage 3 DMG", value: "20.00% * 3" },
                { name: "Stage 4 DMG", value: "26.68% * 2 + 13.34%" },
                { name: "Stage 5 DMG", value: "100.00%" },
                { name: "Pivot P1 DMG (Ult)", value: "60.19%" },
                { name: "Pivot P2 DMG (Ult)", value: "30.65% * 4" },
                { name: "Pivot P3 DMG (Ult)", value: "67.03% * 2" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Deduction",
            type: "Skill",
            description: "Attack target dealing Electro DMG. At 100 Capacity → **Decipher**. During Intuition → **Divergence** (7s CD). At 5 Performance Capacity → **Law of Reigns** (consumes 1 Hypercube).",
            attributes: [
                { name: "Deduction DMG", value: "100.00%" },
                { name: "Decipher DMG", value: "200.10%" },
                { name: "Divergence DMG (Ult)", value: "24.94% * 3 + 87.29% * 2" },
                { name: "Law of Reigns DMG", value: "48.15% * 4 + 128.40%" },
                { name: "Deduction CD", value: "5s" },
                { name: "Divergence CD", value: "7s" }
            ],
            priority: 3
        },
        {
            name: "Liberation: Cogitation Model",
            type: "Ultimate",
            description: "Deal massive Electro DMG and enter **Intuition** (24s). Gain 3 **Hypercubes**. All abilities enhanced. Interruption resistance active. Time slows on cast.",
            attributes: [
                { name: "Cogitation DMG", value: "737.42%" },
                { name: "Unfathomed Counter DMG", value: "19.53% * 2 + 156.22%" },
                { name: "Intuition Duration", value: "24s" },
                { name: "Hypercubes", value: "3" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "125" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 4
        },
        {
            name: "Forte: Forever Seeking",
            type: "Forte",
            description: "**Capacity** (max 100): At full, Skill → Decipher. **Performance Capacity** (max 5, Ult only): At 5, Skill → Law of Reigns. **Revamp**: After Divergence/Decipher, use Basic for enhanced mid-air attack.",
            attributes: [
                { name: "Revamp DMG", value: "11.00% * 4 + 33.00% * 2" },
                { name: "Revamp Concerto", value: "5" },
                { name: "Performance Capacity (Pivot P1)", value: "+1" },
                { name: "Performance Capacity (Pivot P2/P3)", value: "+2" },
                { name: "Performance Capacity (Divergence)", value: "+2" },
                { name: "Performance Capacity (Revamp)", value: "+3" }
            ],
            priority: 3
        },
        {
            name: "Intro: Principle",
            type: "Intro",
            description: "Attack target dealing Electro DMG.",
            attributes: [
                { name: "Skill DMG", value: "50.00% * 2" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Chain Rule",
            type: "Outro",
            description: "Summon laser beams on next character's Basic Attack hits for 8s, dealing Electro DMG. Triggered once every 2s, up to 3 times.",
            attributes: [
                { name: "Laser DMG", value: "237.63% ATK" },
                { name: "Duration", value: "8s" },
                { name: "Trigger Interval", value: "2s" },
                { name: "Max Triggers", value: "3" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence 1", description: "Law of Reigns fires additional Matrices (Liberation DMG)." },
        { node: "S2", name: "Sequence 2", description: "Skill/Ult grants +30% Crit DMG (8s)." },
        { node: "S3", name: "Sequence 3", description: "Ult buffs next 5 Skills by 63%." },
        { node: "S4", name: "Sequence 4", description: "Ult grants 25% Team Liberation DMG Bonus (30s)." },
        { node: "S5", name: "Sequence 5", description: "Outro DMG +222%. Ult DMG +100%." },
        { node: "S6", name: "Sequence 6", description: "Hypercubes buff Law of Reigns by 76%." }
    ],
    rotation: [
        "1. **Ult**: Enter Intuition.",
        "2. **Divergence** -> **Revamp** -> **Law of Reigns** (Cube 1).",
        "3. **Basic Pivot** (x3) -> **Law of Reigns** (Cube 2).",
        "4. **Divergence** -> **Revamp** -> **Law of Reigns** (Cube 3).",
        "5. **Outro**."
    ],
    builds: {
        weapons: [
            {
                name: "Verity's Handle",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Best in Slot. Crit Rate & Massive Liberation Buffs.",
                image: "/images/weapons/verityshandle.png"
            },
            {
                name: "Blazing Justice",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Zani's Signature. High stats and DEF Ignore.",
                image: "/images/weapons/blazingjustice.png"
            },
            {
                name: "Moongazer's Sigil",
                rank: "Stat Stick",
                rarity: 5,
                description: "Iuno's Signature. Great Crit Rate stat stick.",
                image: "/images/weapons/moongazerssigil.png"
            },
            {
                name: "Abyss Surges",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Energy & ATK stacking. Reliable performance.",
                image: "/images/weapons/abysssurges.png"
            },
            {
                name: "Stonard",
                rank: "Best 4-Star",
                rarity: 4,
                description: "Battle Pass weapon. Crit Rate & Liberation Buff.",
                image: "/images/weapons/stonard.png"
            }
        ],
        echoes: [
            {
                set: "Void Thunder (5pc)",
                mainEcho: "Thundering Mephis",
                stats: {
                    cost4: ["Crit Rate", "Crit DMG"],
                    cost3: ["Electro DMG", "Electro DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit Rate", "Crit DMG", "Liberation DMG", "ATK%"]
                },
                description: "Standard Electro set. Thundering Mephis buffs Liberation DMG.",
                recommendation_reason: "Best for raw Electro DPS.",
                echo_breakdown: {
                    cost4: [{ name: "Thundering Mephis", image: "/images/echoes/thunderingmephis.png", mainStats: ["Crit Rate", "Crit DMG"] }],
                    cost3: [
                        { name: "Violet-Feathered Heron", image: "/images/echoes/violetfeatheredheron.png", mainStats: ["Electro DMG"] },
                        { name: "Flautist", image: "/images/echoes/flautist.png", mainStats: ["Electro DMG"] }
                    ],
                    cost1: [
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["ATK%"] },
                        { name: "Traffic Light", image: "/images/echoes/trafficlight.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Liberation DMG > Electro DMG > ATK%."
    },
    teams: [
        {
            name: "Premium Electro",
            description: "Yinlin buffs Liberation/Electro.",
            members: [
                { name: "Xiangli Yao", role: "Main DPS", synergy: "Liberation DMG." },
                { name: "Yinlin", role: "Sub DPS", synergy: "Outro Buffs (Electro/Ult)." },
                { name: "Verina", role: "Support", synergy: "Team Buffs." }
            ]
        },
        {
            name: "Liberation Buff",
            description: "Jianxin buffs Liberation DMG.",
            members: [
                { name: "Xiangli Yao", role: "Main DPS" },
                { name: "Jianxin", role: "Sub DPS", synergy: "Outro Liberation Buff." },
                { name: "Shorekeeper", role: "Support" }
            ]
        }
    ]
};
