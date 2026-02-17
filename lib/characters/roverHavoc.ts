import { Character } from "../characterTypes";

export const roverHavoc: Character = {
    id: "rover-havoc",
    name: "Rover (Havoc)",
    rarity: 5,
    element: "Havoc",
    weaponType: "Sword",
    role: "Main DPS",
    tags: ["Burst", "Transformation", "Dreamless", "F2P Friendly"],
    tier: {
        overall: "R1.5",
        tower: "R1.5",
        wastes: "R1.5"
    },
    imagePortrait: "/images/characters/RoverSmall.png",
    imageIcon: "/images/characters/RoverSmall.png",
    imageCard: "/images/characters/RoverLarge.png",
    stats: {
        hp: 10825,
        atk: 412,
        def: 1258
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "ATK", value: "12%", stat: "atk", amount: 12 },
        { name: "Havoc DMG", value: "12%", stat: "havocDamage", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "Pecok Flower", count: 60, icon: "/images/else/pecokflower.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Mysterious Code", count: 46, icon: "/images/else/mysteriouscode.png" }
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
                    { name: "Mysterious Code", count: 3, icon: "/images/else/mysteriouscode.png" },
                    { name: "Pecok Flower", count: 4, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Whisperin Core", count: 8, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Mysterious Code", count: 6, icon: "/images/else/mysteriouscode.png" },
                    { name: "Pecok Flower", count: 8, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Whisperin Core", count: 4, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Mysterious Code", count: 9, icon: "/images/else/mysteriouscode.png" },
                    { name: "Pecok Flower", count: 12, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Whisperin Core", count: 8, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Mysterious Code", count: 12, icon: "/images/else/mysteriouscode.png" },
                    { name: "Pecok Flower", count: 16, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
                    { name: "Mysterious Code", count: 16, icon: "/images/else/mysteriouscode.png" },
                    { name: "Pecok Flower", count: 20, icon: "/images/else/pecokflower.png" }
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
        overview: `Rover (Havoc) is an exceptional **Havoc Main DPS** unlocked after Chapter 1 Act 6. They deal massive burst damage in their **Dark Surge** state and have a unique synergy with the **Dreamless** Echo.
        
        Using Resonance Liberation unlocks the Dreamless's full potential, and the Dreamless Echo supports Rover's burst playstyle perfectly. They are friendly to build and perform at top-tier levels.`,
        playstyle: "Skill -> Heavy Attack (Enter Dark Surge) -> Basic/Skill Combo -> Liberation -> Dreamless Echo.",
        pros: [
            "**Dreamless Synergy**: Unique interaction boosts Echo DMG significantly.",
            "**High Burst**: Dark Surge + Liberation deals massive damage.",
            "**F2P Friendly**: Strongest free character, arguably S-tier.",
            "**Flexible**: Can be played as on-field DPS or Quick-swap Burst."
        ],
        cons: [
            "**Skill Cap**: Managing Dark Surge state requires good rotation timing.",
            "**Materials**: Uses same materials as Spectro Rover (shared pool)."
        ]
    },
    skills: [
        {
            name: "Basic: Devastation",
            type: "Basic",
            description: "5-hit combo (28.50% → 28.50%*2 → 42.75% → 20.27%*3 → 47.50%*2). **Heavy**: 48%. In **Dark Surge**: Enhanced (28.35% → 47.25% → 78.30% → 18.68%*3+56.03% → 14.35%*4+57.38%). **Thwackblade**: 63.70%+5%*4 after Enhanced Heavy.",
            attributes: [
                { name: "Basic P5", value: "47.50% * 2" },
                { name: "Dark P5", value: "14.35% * 4 + 57.38%" },
                { name: "Devastation", value: "114.75%" }
            ],
            priority: 4
        },
        {
            name: "Resonance: Wingblade / Lifetaker",
            type: "Skill",
            description: "**Wingblade**: 144%*2 Havoc, 12s CD. In **Dark Surge**: **Lifetaker** (139%*2 + 5%*4). Both restore Umbra.",
            attributes: [
                { name: "Wingblade", value: "144.00% * 2" },
                { name: "Lifetaker", value: "139.00% * 2 + 5.00% * 4" },
                { name: "Cooldown", value: "12s" }
            ],
            priority: 2
        },
        {
            name: "Forte: Umbra Eclipse",
            type: "Forte",
            description: "**Umbra** (max 100): Build via Basic/Skill/Intro. At max → **Devastation** (114.75%, Heavy) → enter **Dark Surge**: Enhanced Basic/Heavy/Skill. **Inherent**: +20% Havoc DMG in Dark Surge. +1 Energy per Basic hit (1/s).",
            attributes: [
                { name: "Devastation", value: "114.75%" },
                { name: "Havoc Buff", value: "+20% in Dark Surge" },
                { name: "Dodge Counter", value: "159.30%" }
            ],
            priority: 1
        },
        {
            name: "Liberation: Deadening Abyss",
            type: "Ultimate",
            description: "765% Havoc DMG nuke. Boosts Dreamless Echo DMG for 50s.",
            attributes: [
                { name: "Skill DMG", value: "765.00%" },
                { name: "Dreamless Buff", value: "50s" },
                { name: "Cooldown", value: "16s" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 3
        },
        {
            name: "Intro: Instant of Annihilation",
            type: "Intro",
            description: "100% Havoc DMG. Restores Umbra.",
            attributes: [
                { name: "Skill DMG", value: "100.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 5
        },
        {
            name: "Outro: Soundweaver",
            type: "Outro",
            description: "Summons a Havoc Field dealing **143.3%** Havoc DMG to targets within range every 2s for 6s (3 hits total).",
            attributes: [
                { name: "Field DMG", value: "143.30% * 3" },
                { name: "Duration", value: "6s" },
                { name: "Interval", value: "2s" }
            ],
            priority: 6
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Resonance Skill DMG Bonus increased by **30%**." },
        { node: "S2", name: "Sequence Node 2", description: "Reset Resonance Skill CD when entering Dark Surge." },
        { node: "S3", name: "Sequence Node 3", description: "Dark Surge Basic Attack DMG increased by **20%**." },
        { node: "S4", name: "Sequence Node 4", description: "Heavy Attack / Resonance Skill heals Rover for **20%** of ATK." },
        { node: "S5", name: "Sequence Node 5", description: "Resonance Liberation DMG increased by **40%**." },
        { node: "S6", name: "Sequence Node 6", description: "In Dark Surge, Crit Rate increased by **25%**." }
    ],
    rotation: [
        "1. **Intro**: Enter field.",
        "2. **Skill**: Cast Wingblade to build Umbra.",
        "3. **Heavy**: Enter Dark Surge state.",
        "4. **Combo**: Spam Enhanced Basic Attacks & Lifetaker Skill.",
        "5. **Liberation**: Cast Deadening Abyss.",
        "6. **Echo**: Cast Dreamless (Enhanced).",
        "7. **Outro**: Swap to Sub-DPS."
    ],
    builds: {
        weapons: [
            {
                name: "Emerald of Genesis",
                rank: "Best In Slot",
                rarity: 5,
                description: "Crit Rate & ATK are perfect for Main DPS.",
                image: "/images/weapons/emeraldofgenesis.png"
            },
            {
                name: "Commando of Conviction",
                rank: "4-Star Option",
                rarity: 4,
                description: "ATK buff on Intro.",
                image: "/images/weapons/commandoofconviction.png"
            },
            {
                name: "Lunar Cutter",
                rank: "BP Option",
                rarity: 4,
                description: "Stackable ATK buff.",
                image: "/images/weapons/lunarcutter.png"
            }
        ],
        echoes: [
            {
                set: "Havoc Eclipse (5pc)",
                mainEcho: "Dreamless",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Havoc DMG", "Havoc DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "ATK%", "Energy Regen"]
                },
                description: "Standard DPS Build.",
                recommendation_reason: "Dreamless is mandatory for Havoc Rover due to unique kit synergy.",
                echo_breakdown: {
                    cost4: [{ name: "Dreamless", image: "/images/echoes/dreamless.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Roseshroom", image: "/images/echoes/roseshroom.png", mainStats: ["Havoc DMG"] },
                        { name: "Tambourinist", image: "/images/echoes/tambourinist.png", mainStats: ["Havoc DMG"] }
                    ],
                    cost1: [
                        { name: "Havoc Dreadmane", image: "/images/echoes/havocdreadmane.png", mainStats: ["ATK%"] },
                        { name: "Excarat", image: "/images/echoes/excarat.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Havoc Eclipse (2pc) + Moonlit Clouds (2pc)",
                mainEcho: "Dreamless",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Havoc DMG", "Havoc DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "ATK%", "Energy Regen"]
                },
                description: "Transition/Mixed Build.",
                recommendation_reason: "Easier to farm early game.",
                echo_breakdown: {
                    cost4: [{ name: "Dreamless", image: "/images/echoes/dreamless.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
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
        stats_priority: "Crit Rate/DMG > Havoc DMG > ATK% > Energy Regen"
    },
    teams: [
        {
            name: "Havoc DPS Team",
            description: "General Havoc Synergy.",
            members: [
                { name: "Rover (Havoc)", role: "Main DPS" },
                { name: "Danjin", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        },
        {
            name: "Dreamless Burst Team",
            description: "Quickswap Burst focus.",
            members: [
                { name: "Rover (Havoc)", role: "Main DPS" },
                { name: "Sanhua", role: "Sub DPS" },
                { name: "Jianxin", role: "Support" }
            ]
        }
    ]
};
