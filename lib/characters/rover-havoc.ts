import { Character } from "../characterTypes";

export const rover_havoc: Character = {
    id: "rover-havoc",
    name: "Rover (Havoc)",
    rarity: 5,
    element: "Havoc",
    weaponType: "Sword",
    role: "Main DPS",
    tags: ["Dark Surge", "Nuke", "Free S6", "Dreamless"],
    profileType: "Specialist",
    potential: "B",
    tier: {
        overall: "R2.5",
        tower: "R2.5", wastes: "R3"
    },
    imagePortrait: "/images/characters/RoverSmall.png",
    imageIcon: "/images/characters/RoverSmall.png",
    imageCard: "/images/characters/RoverLarge.png",
    stats: {
        hp: 10825,
        atk: 413,
        def: 1259
    },
    minorFortes: [
        { name: "Havoc DMG", value: "12%", stat: "element", amount: 12 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Mysterious Code", count: 5, icon: "/images/else/mysteriouscode.png" },
            { name: "Pecok Flower", count: 60, icon: "/images/else/pecokflower.png" },
            { name: "Shell Credit", count: 170000, icon: "/images/else/shellcredit.png" }
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
            { name: "Unwarranted Feather", count: 26, icon: "/images/else/unwarrantedfeather.png" },
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
        overview: `Havoc Rover is a **5-star Havoc Sword Main/Sub DPS**. Accessing **Dark Surge** state via Forte allows for rapid burst damage.
            
            They have a unique synergy with the **Dreamless** Echo, which gains +50% DMG when used by Rover after Ult.`,

        playstyle: "**The Dark Surger**: \n1. **Intro**: Gain Umbra.\n2. **Skill**: Gain Umbra.\n3. **Heavy (Devastation)**: Enter Dark Surge.\n4. **Enhanced Basics**: DPS Window.\n5. **Ult** -> **Dreamless** (Swap Cancel).",

        pros: [
            "**Dreamless Synergy**: Massive Echo Nuke.",
            "**Free S6**: High stats and easy scaling.",
            "**Flexible**: Works as Main or Sub DPS.",
            "**Burst**: High frontloaded damage."
        ],
        cons: [
            "**Field Time**: Can be long in Main DPS role.",
            "**Basic Spam**: Requires Basic Attacks in Dark Surge.",
            "**No Team Buffs**: Selfish damage dealer (except S4 Shred)."
        ]
    },
    skills: [
        {
            name: "Basic: Tuneslayer",
            type: "Basic",
            description: "5-hit combo. In **Dark Surge** → Enhanced Basic (higher DMG). P4 and P5 are multi-hit.",
            attributes: [
                { name: "Basic P1 DMG", value: "28.50%" },
                { name: "Basic P2 DMG", value: "28.50% * 2" },
                { name: "Basic P3 DMG", value: "42.75%" },
                { name: "Basic P5 DMG", value: "47.50% * 2" },
                { name: "Dark Surge P5", value: "14.35% * 4 + 57.38%" },
                { name: "Dodge Counter", value: "90.25%" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Wingblade",
            type: "Skill",
            description: "Feather attack. In Dark Surge → **Lifetaker** (enhanced). CD resets on Dark Surge (S2).",
            attributes: [
                { name: "Wingblade DMG", value: "144.00% * 2" },
                { name: "Lifetaker DMG", value: "139.00% * 2 + 5.00% * 4" },
                { name: "Cooldown", value: "12s" },
                { name: "Concerto Regen", value: "15" }
            ],
            priority: 2
        },
        {
            name: "Liberation: Deadening Abyss",
            type: "Ultimate",
            description: "Gather echoes for massive Havoc burst. +50% Dreamless Echo DMG. -10% Havoc RES (S4).",
            attributes: [
                { name: "Skill DMG", value: "765.00%" },
                { name: "Cooldown", value: "16s" },
                { name: "Energy Cost", value: "125" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 4
        },
        {
            name: "Forte: Umbra Eclipse",
            type: "Forte",
            description: "**Umbra** (max 100): Full gauge + Heavy → **Devastation** → enter **Dark Surge**. +20% Havoc DMG in Dark Surge (Inherent). +10% Res Energy on Enhanced Basic 5 (Inherent).",
            attributes: [
                { name: "Devastation", value: "114.75%" },
                { name: "Enhanced P1", value: "28.35%" },
                { name: "Enhanced P3", value: "78.30%" },
                { name: "Thwackblade", value: "63.70% + 5.00% * 4" },
                { name: "Dark Surge DC", value: "159.30%" }
            ],
            priority: 4
        },
        {
            name: "Intro: Instant of Annihilation",
            type: "Intro",
            description: "Swift strike dealing Havoc DMG. Restores Umbra.",
            attributes: [
                { name: "Skill DMG", value: "100.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Soundweaver",
            type: "Outro",
            description: "Summon Havoc Field dealing DoT to enemies inside.",
            attributes: [
                { name: "Field DMG", value: "143.45% * 5" },
                { name: "Duration", value: "3s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence 1", description: "Skill DMG +30%." },
        { node: "S2", name: "Sequence 2", description: "Reset Skill CD on entering Dark Surge." },
        { node: "S3", name: "Sequence 3", description: "Dark Surge Basic 5 heals Rover." },
        { node: "S4", name: "Sequence 4", description: "Devastation/Ult reduces Enemy Havoc RES -10%." },
        { node: "S5", name: "Sequence 5", description: "Dark Surge Basic 5 deals +50% DMG." },
        { node: "S6", name: "Sequence 6", description: "Dark Surge Crit Rate +25%." }
    ],
    rotation: [
        "1. **Intro**: Get Umbra.",
        "2. **Skill**: Fill Umbra.",
        "3. **Heavy: Devastation**: Enter Dark Surge.",
        "4. **Enhanced Attacks**: Deal DMG.",
        "5. **Ult**: Nuke.",
        "6. **Dreamless Echo**: Swap Cancel."
    ],
    builds: {
        weapons: [
            { name: "Red Spring", rank: "Best 5★", rarity: 5, description: "Huge Basic ATK Buffs.", image: "/images/weapons/redspring.png" },
            { name: "Blazing Brilliance", rank: "Alt 5★", rarity: 5, description: "Crit DMG & Skill Buffs.", image: "/images/weapons/blazingbrilliance.png" },
            { name: "Emerald of Genesis", rank: "Alt 5★", rarity: 5, description: "Crit Rate & Energy.", image: "/images/weapons/emeraldofgenesis.png" },
            { name: "Lumingloss", rank: "Best 4★", rarity: 4, description: "Battle Pass Sword. Crit Rate.", image: "/images/weapons/lumingloss.png" }
        ],
        echoes: [
            {
                set: "Havoc (5pc)",
                mainEcho: "Dreamless",
                stats: {
                    cost4: ["Crit Rate", "Crit DMG"],
                    cost3: ["Havoc DMG", "Havoc DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit Rate", "Crit DMG", "Energy Regen"]
                },
                description: "Dreamless is mandatory for burst.",
                recommendation_reason: "Best Slot.",
                echo_breakdown: {
                    cost4: [{ name: "Dreamless", image: "/images/echoes/dreamless.png", mainStats: ["Crit Rate", "Crit DMG"] }],
                    cost3: [
                        { name: "Havoc Heron", image: "/images/echoes/havocheron.png", mainStats: ["Havoc DMG"] },
                        { name: "Jue", image: "/images/echoes/jue.png", mainStats: ["Havoc DMG"] }
                    ],
                    cost1: [
                        { name: "Havoc Prism", image: "/images/echoes/havocprism.png", mainStats: ["ATK%"] },
                        { name: "Clang Bang", image: "/images/echoes/clangbang.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate (60%+) > Crit DMG > Havoc DMG > ATK%."
    },
    teams: [
        {
            name: "Danjin Team",
            description: "Rover (Havoc) + Danjin.",
            members: [
                { name: "Rover (Havoc)", role: "Main DPS", synergy: "Havoc DMG." },
                { name: "Danjin", role: "Sub DPS", synergy: "Havoc DMG Buff." },
                { name: "Verina", role: "Healer", synergy: "ATK Buff." }
            ]
        }
    ]
};
