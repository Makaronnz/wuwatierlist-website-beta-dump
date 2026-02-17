import { Character } from "../characterTypes";

export const qiuyuan: Character = {
    id: "qiuyuan",
    name: "Qiuyuan",
    rarity: 5,
    element: "Aero",
    weaponType: "Sword",
    role: "Hybrid",
    tags: ["Echo Skill Buff", "Hybrid", "Quick Swap", "Team Buffer"],
    profileType: "Specialist",
    potential: "S",
    tier: {
        overall: "R0.5",
        tower: "R1",
        wastes: "R1"
    },
    imagePortrait: "/images/characters/QiuyuanSmall.png",
    imageIcon: "/images/characters/QiuyuanSmall.png",
    imageCard: "/images/characters/QiuyuanLarge.png",
    stats: {
        hp: 12237,
        atk: 375,
        def: 1198
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "Crit Rate", value: "8%", stat: "critRate", amount: 8 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "Wintry Bell", count: 60, icon: "/images/else/wintrybell.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Truth in Lies", count: 46, icon: "/images/else/truthinlies.png" }
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
            { name: "Curse of the Abyss", count: 26, icon: "/images/else/curseoftheabyss.png" }
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
                    { name: "Truth in Lies", count: 3, icon: "/images/else/truthinlies.png" },
                    { name: "Wintry Bell", count: 4, icon: "/images/else/wintrybell.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Whisperin Core", count: 8, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Truth in Lies", count: 6, icon: "/images/else/truthinlies.png" },
                    { name: "Wintry Bell", count: 8, icon: "/images/else/wintrybell.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Whisperin Core", count: 4, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Truth in Lies", count: 9, icon: "/images/else/truthinlies.png" },
                    { name: "Wintry Bell", count: 12, icon: "/images/else/wintrybell.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Whisperin Core", count: 8, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Truth in Lies", count: 12, icon: "/images/else/truthinlies.png" },
                    { name: "Wintry Bell", count: 16, icon: "/images/else/wintrybell.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
                    { name: "Truth in Lies", count: 16, icon: "/images/else/truthinlies.png" },
                    { name: "Wintry Bell", count: 20, icon: "/images/else/wintrybell.png" }
                ]
            }
        ],
        weapon: {
            name: "Emerald Sentence",
            icon: "/images/weapons/emeraldsentence.png",
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
        overview: `Qiuyuan is a specialized **Aero Sub-DPS/Buffer** who essentially enables the **Echo Skill DMG** archetype. He provides massive buffs to Echo Skill DMG for teammates, making him the best partner for characters like **Galbrena** and **Phrolova**.
        
        His Forte Gauge, **Swordster's Soliloquy**, is filled by his Intro and Basic Attacks. Using his Forte Heavy Attack consumes the gauge to deal DMG and restore Concerto. His Liberation grants **Crit DMG** to the team based on his own Crit Rate (Requires >65% Crit Rate).`,
        playstyle: "Intro -> Basic (Fill Forte) -> Skill/Echo -> Liberation -> Heavy (Consume Forte) -> Outro.",
        pros: [
            "**Echo Skill Enabler**: Massive buffs for Echo Skill DMG (Rare niche).",
            "**Quick Rotation**: Very fast field time, perfect for Quick Swap.",
            "**Team Crit DMG Buff**: Liberation provides up to 30% Crit DMG to active character.",
            "**Easy to Build**: Does not strictly require Signature Weapon (Standard/4-stars work well)."
        ],
        cons: [
            "**Niche Utility**: Only truly shines with Galbrena or Phrolova (Echo Skill DPS).",
            "**Low Personal DMG**: At S0, his own damage is negligible; S3+ unlocks DPS potential.",
            "**Interruptible**: Forte Heavy Attacks can be interrupted at S0."
        ]
    },
    skills: [
        {
            name: "Basic: Inkwash",
            type: "Basic",
            description: "3-hit combo. At 200 Forte → **Thus Spoke the Blade: Inkwash** (4-hit Heavy DMG). **Heavy**: 83.30% (chains to Inkwash P4). **Dodge Counter**: 98% + 14% * 3 (auto-triggers on hit during attacks).",
            attributes: [
                { name: "Basic P3", value: "12.39% * 4 + 33.04%" },
                { name: "Inkwash P4", value: "86.70%" },
                { name: "Dodge Counter", value: "98.00% + 14.00% * 3" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Through the Groves",
            type: "Skill",
            description: "Dash dealing Aero (Echo Skill DMG). **Undaunted Wayfarer** (Hold): Air dash / plunge. If cast while attacked → Immune + Stagnate enemies. 14s CD.",
            attributes: [
                { name: "Skill DMG", value: "36.14% * 3" },
                { name: "Wayfarer", value: "16.26% + 16.26% * 3 + 43.36%" },
                { name: "Cooldown", value: "14s" }
            ],
            priority: 2
        },
        {
            name: "Forte: Verdant Edge",
            type: "Forte",
            description: "**Swordster's Soliloquy** (max 600): +100 from Basic P3/Inkwash/Dodge, +400 from Intro. At 200 → Enhanced Basics. At 400 → **Bamboo's Shade** (+30% Echo Skill DMG Bonus, 30s). At 600 → **Inksplash of Mind** (8s): Hold → **To Teach** / **To Save** / **To Sacrifice** (Heavy, Echo Skill). **Inherent**: +50% DMG for Forte Heavies. +30 Concerto on Sacrifice. +10% ATK after Echo Skill (20s).",
            attributes: [
                { name: "To Teach", value: "45.99% * 5" },
                { name: "To Save", value: "19.34% * 3 + 15.82% * 3" },
                { name: "To Sacrifice", value: "109.50%" },
                { name: "Echo Skill Bonus", value: "+30%" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Sundering Strike",
            type: "Ultimate",
            description: "400% Aero (Echo Skill DMG). Grants active Resonator **+2% Crit DMG per 1% Crit Rate over 50%** (up to +30%, 30s).",
            attributes: [
                { name: "Skill DMG", value: "400.00%" },
                { name: "Team Buff", value: "Up to +30% Crit DMG" },
                { name: "Requirement", value: "65% Crit Rate" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 3
        },
        {
            name: "Intro: Attack the Must-Defend",
            type: "Intro",
            description: "Aero (Heavy DMG). **+400 Forte instantly**. Chains to Inkwash P3.",
            attributes: [
                { name: "Skill DMG", value: "4.80% * 5 + 24.00% + 72.00%" },
                { name: "Forte", value: "+400" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Strike Before Ready",
            type: "Outro",
            description: "100% Aero (Echo Skill DMG). Next Resonator: **+50% Echo Skill DMG Amp** (14s, ends on swap).",
            attributes: [
                { name: "Outro DMG", value: "100%" },
                { name: "Echo Amp", value: "+50%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Forte Heavy Attacks gain **Interruption Resistance**. **+20% Crit Rate**." },
        { node: "S2", name: "Sequence Node 2", description: "Bamboo's Shade (Forte Buff) grants additional **30% Echo Skill Amp** to team." },
        { node: "S3", name: "Sequence Node 3", description: "Liberation DMG **+500%**. Unlocks **DPS Playstyle** (Skill Reset Mechanic)." },
        { node: "S4", name: "Sequence Node 4", description: "ATK increased by **20%**." },
        { node: "S5", name: "Sequence Node 5", description: "Attacks ignore **15%** of target's DEF." },
        { node: "S6", name: "Sequence Node 6", description: "Heavy Attack **Stagnates** targets. Exiting Inksplash deals extra **600%** DMG." }
    ],
    rotation: [
        "1. **Intro**: Enter field (Gains 400 Forte).",
        "2. **Basic**: Inkwash Stage 3 & 4 (Reaches 600 Forte).",
        "3. **Liberation**: Cast Sundering Strike (Buffs Team Crit DMG).",
        "4. **Heavy**: Hold Basic to consume Forte (To Teach -> To Save -> To Sacrifice).",
        "5. **Skill**: Cast Through the Groves (Cancel animation if needed).",
        "6. **Outro**: Switch to Galbrena or Phrolova."
    ],
    builds: {
        weapons: [
            {
                name: "Emerald Sentence",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Team Echo Skill Buff + Heavy Attack DMG for self.",
                image: "/images/weapons/emeraldsentence.png"
            },
            {
                name: "Emerald of Genesis",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Great stat stick (Crit Rate/Energy Regen).",
                image: "/images/weapons/emeraldofgenesis.png"
            },
            {
                name: "Lumingloss",
                rank: "4-Star Option",
                rarity: 4,
                description: "Basic/Heavy DMG Bonus on Skill use.",
                image: "/images/weapons/lumingloss.png"
            },
            {
                name: "Commando of Conviction",
                rank: "F2P Option",
                rarity: 4,
                description: "ATK buff on Intro.",
                image: "/images/weapons/commandoofconviction.png"
            }
        ],
        echoes: [
            {
                set: "Law of Harmony (3pc) + Sierra Gale (2pc)",
                mainEcho: "Reminiscence: Fenrico",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Aero DMG", "Aero DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Energy Regen", "Heavy Attack DMG"]
                },
                description: "Best Hybrid/Buffer Build.",
                recommendation_reason: "Tests show this setup maximizes his team buffing potential via Law of Harmony while maintaining personal damage.",
                echo_breakdown: {
                    cost4: [{ name: "Reminiscence: Fenrico", image: "/images/echoes/reminiscencefenrico.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Aero DMG"] },
                        { name: "Hoochief", image: "/images/echoes/hoochief.png", mainStats: ["Aero DMG"] }
                    ],
                    cost1: [
                        { name: "Chirpuff", image: "/images/echoes/chirpuff.png", mainStats: ["ATK%"] },
                        { name: "Fusion Dreadmane", image: "/images/echoes/fusiondreadmane.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Aero DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "General Support Build.",
                recommendation_reason: "Use if you need purely an ATK buffer for the next character, but less specialized for Echo Skill users.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Aero DMG"] },
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["ATK%"] },
                        { name: "Whifflenier", image: "/images/echoes/whifflenier.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate (to 65%+) > Energy Regen (130%) > Crit DMG > Aero DMG"
    },
    teams: [
        {
            name: "Fusion Echo Skill Team",
            description: "Supporting Galbrena.",
            members: [
                { name: "Galbrena", role: "Main DPS" },
                { name: "Qiuyuan", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "Havoc Echo Skill Team",
            description: "Supporting Phrolova.",
            members: [
                { name: "Phrolova", role: "Main DPS" },
                { name: "Cantarella", role: "Sub DPS" },
                { name: "Qiuyuan", role: "Buffer" }
            ]
        }
    ]
};
