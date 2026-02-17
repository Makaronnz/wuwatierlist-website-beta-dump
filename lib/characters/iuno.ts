import { Character } from "../characterTypes";

export const iuno: Character = {
    id: "iuno",
    name: "Iuno",
    rarity: 5,
    element: "Aero",
    weaponType: "Gauntlets",
    role: "Main DPS",
    tags: ["Aero DMG", "Self Shield", "Heavy Attack Buff", "Healing"],
    profileType: "Versatile",
    potential: "S+",
    tier: {
        overall: "R0",
        tower: "R0",
        wastes: "R1.5"
    },
    imagePortrait: "/images/characters/IunoSmall.png",
    imageIcon: "/images/characters/IunoSmall.png",
    imageCard: "/images/characters/IunoLarge.png",
    stats: {
        hp: 10525,
        atk: 450,
        def: 1124
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT Rate", value: "8%", stat: "critRate", amount: 8 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Polygon Core", count: 4, icon: "/images/else/lfpolygoncore.png" },
            { name: "Sliverglow Bloom", count: 60, icon: "/images/else/sliverglowbloom.png" },
            { name: "MF Polygon Core", count: 12, icon: "/images/else/mfpolygoncore.png" },
            { name: "HF Polygon Core", count: 12, icon: "/images/else/hfpolygoncore.png" },
            { name: "FF Polygon Core", count: 4, icon: "/images/else/ffpolygoncore.png" },
            { name: "Abyssal Husk", count: 46, icon: "/images/else/abyssalhusk.png" }
        ],
        skills: [
            { name: "LF Polygon Core", count: 25, icon: "/images/else/lfpolygoncore.png" },
            { name: "MF Polygon Core", count: 28, icon: "/images/else/mfpolygoncore.png" },
            { name: "HF Polygon Core", count: 40, icon: "/images/else/hfpolygoncore.png" },
            { name: "FF Polygon Core", count: 57, icon: "/images/else/ffpolygoncore.png" },
            { name: "Cadence Seed", count: 25, icon: "/images/else/cadenceseed.png" },
            { name: "Cadence Bud", count: 28, icon: "/images/else/cadencebud.png" },
            { name: "Cadence Leaf", count: 55, icon: "/images/else/cadenceleaf.png" },
            { name: "Cadence Blossom", count: 67, icon: "/images/else/cadenceblossom.png" },
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
                    { name: "Abyssal Husk", count: 3, icon: "/images/else/abyssalhusk.png" },
                    { name: "Sliverglow Bloom", count: 4, icon: "/images/else/sliverglowbloom.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Polygon Core", count: 8, icon: "/images/else/mfpolygoncore.png" },
                    { name: "Abyssal Husk", count: 6, icon: "/images/else/abyssalhusk.png" },
                    { name: "Sliverglow Bloom", count: 8, icon: "/images/else/sliverglowbloom.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Polygon Core", count: 4, icon: "/images/else/hfpolygoncore.png" },
                    { name: "Abyssal Husk", count: 9, icon: "/images/else/abyssalhusk.png" },
                    { name: "Sliverglow Bloom", count: 12, icon: "/images/else/sliverglowbloom.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Polygon Core", count: 8, icon: "/images/else/hfpolygoncore.png" },
                    { name: "Abyssal Husk", count: 12, icon: "/images/else/abyssalhusk.png" },
                    { name: "Sliverglow Bloom", count: 16, icon: "/images/else/sliverglowbloom.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Polygon Core", count: 4, icon: "/images/else/ffpolygoncore.png" },
                    { name: "Abyssal Husk", count: 16, icon: "/images/else/abyssalhusk.png" },
                    { name: "Sliverglow Bloom", count: 20, icon: "/images/else/sliverglowbloom.png" }
                ]
            }
        ],
        weapon: {
            name: "Moongazer's Sigil",
            icon: "/images/weapons/moongazerssigil.png",
            total: [
                { name: "MF Polygon Core", count: 20, icon: "/images/else/mfpolygoncore.png" },
                { name: "HF Polygon Core", count: 20, icon: "/images/else/hfpolygoncore.png" },
                { name: "FF Polygon Core", count: 12, icon: "/images/else/ffpolygoncore.png" },
                { name: "Cadence Seed", count: 26, icon: "/images/else/cadenceseed.png" },
                { name: "Cadence Bud", count: 26, icon: "/images/else/cadencebud.png" },
                { name: "Cadence Leaf", count: 16, icon: "/images/else/cadenceleaf.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Polygon Core", count: 6, icon: "/images/else/lfpolygoncore.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Polygon Core", count: 6, icon: "/images/else/mfpolygoncore.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Polygon Core", count: 10, icon: "/images/else/mfpolygoncore.png" },
                        { name: "Cadence Seed", count: 10, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Polygon Core", count: 6, icon: "/images/else/hfpolygoncore.png" },
                        { name: "Cadence Bud", count: 6, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Polygon Core", count: 10, icon: "/images/else/hfpolygoncore.png" },
                        { name: "Cadence Bud", count: 10, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Polygon Core", count: 6, icon: "/images/else/ffpolygoncore.png" },
                        { name: "Cadence Leaf", count: 6, icon: "/images/else/cadenceleaf.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Iuno is a versatile **Aero Gauntlet Hybrid DPS/Support** who utilizes a "Lunar Cycle" mechanic. She switches between Half Moon and New Moon states to deal damage and generate Sentience.
        
        She can heal the team, restore Stamina, and create a Shield for herself. Critically, her Outro provides a massive **50% Heavy Attack DMG Amplification**, making her the perfect partner for Heavy Attack DPS like Augusta or Jiyan.`,
        playstyle: "Intro -> Skill (Lunar Cycle) -> Jump (New Moon) -> Liberation -> Forte Attacks -> Heavy Attack (Full Moon Domain) -> Outro.",
        pros: [
            "**Role Compression**: DPS, Healer, Buffer, and Shielder in one.",
            "**Self-Sustain**: High survivability due to self-shields and healing.",
            "**Team Utility**: Restores team Stamina and HP in Full Moon Domain."
        ],
        cons: [
            "**Backloaded Buffs**: Best buffs come at the end of her rotation.",
            "**Dependency**: Her full potential works best with Augusta"
        ]
    },
    skills: [
        {
            name: "Basic: Moon Steps / Moonbow",
            type: "Basic",
            description: "3-hit combo. **Moonring** (Half Moon) or **Moonbow** (New Moon, Liberation DMG). Moonbow enhanced attacks heal team + extra Concerto.",
            attributes: [
                { name: "Moonring P1", value: "44.10%" },
                { name: "Moonring P3", value: "44.26% * 2 + 45.60%" },
                { name: "Moonbow P1", value: "63.60%" },
                { name: "Enhanced P3", value: "134.00% * 2" },
                { name: "Moonbow Heal", value: "13-24% ATK" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Pulse / Closing Refrain / Arc",
            type: "Skill",
            description: "**Pulse of Origins**: Dash + DMG (6s CD). **Closing Refrain** (from Intro/P3): Activate Lunar Cycle. **Arc Beyond the Edge** (New Moon): 2 charges, enhanced at Sentience, Liberation DMG.",
            attributes: [
                { name: "Pulse DMG", value: "9.38% * 7 + 65.65%" },
                { name: "Closing Refrain", value: "70.79% * 2 + 72.93%" },
                { name: "Arc DMG", value: "110.55% * 2" },
                { name: "Enhanced Arc", value: "160.55% * 2" }
            ],
            priority: 3
        },
        {
            name: "Forte: Ebb and Flow",
            type: "Forte",
            description: "**Lunar Cycle** (15s): Half Moon → Jump → New Moon. **Sentience** (max 100): Gained from Intro (40), Ult (60), Closing Refrain (25). New Moon attacks consume Sentience for enhanced DMG. **Absolute Fullness** (full Concerto): Heal + **Full Moon Domain** (30s, team HP/Stamina regen, grants **Blessing of Wan Light** +4% DMG Amp, 10 stacks). +5 stacks from Intro/Ult (Inherent). Self-shield on attacks (Inherent).",
            attributes: [
                { name: "Flux-Moonbow", value: "126.00%" },
                { name: "Flux-Moonring", value: "39.83% * 4" },
                { name: "Fullness DMG", value: "80.00%" },
                { name: "Fullness Heal", value: "97.71% ATK" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Beneath Lunar Tides",
            type: "Ultimate",
            description: "Massive Aero nuke. Activate Lunar Cycle. +60 Sentience. +5 Blessing stacks.",
            attributes: [
                { name: "Skill DMG", value: "550.00%" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "125" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 3
        },
        {
            name: "Intro: Illuminated Manifestation",
            type: "Intro",
            description: "Aero DMG + 40 Sentience + 5 Blessing stacks.",
            attributes: [
                { name: "Skill DMG", value: "8.00% * 7 + 24.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: From Gloom to Gleam",
            type: "Outro",
            description: "Aero DMG. Next character gains massive **Heavy ATK Amp**.",
            attributes: [
                { name: "Outro DMG", value: "100%" },
                { name: "Heavy Amp", value: "+50%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "ATK +40% in Lunar Cycle. Restores Energy in Full Moon Domain." },
        { node: "S2", name: "Sequence Node 2", description: "Wan Light Buffs (10 stacks) grant additional **40% All DMG Amp**." },
        { node: "S3", name: "Sequence Node 3", description: "Moonbow Attacks DMG Amplified by **65%**." },
        { node: "S4", name: "Sequence Node 4", description: "Heavy Attack (Full Moon) grants massive **Team Shield**." },
        { node: "S5", name: "Sequence Node 5", description: "Liberation DMG increased by **20%**." },
        { node: "S6", name: "Sequence Node 6", description: "Heavy Attack (Full Moon) Multiplier **+1600%**. Resets Cooldowns." }
    ],
    rotation: [
        "1. **Intro**: Enter field -> Cast Skill (Activate Lunar Cycle).",
        "2. **State Switch**: Jump (New Moon) -> Cast Liberation (Max Sentience).",
        "3. **DPS**: Basic x3 -> Skill x2 (Consume Sentience).",
        "4. **Finish**: Heavy Attack (Full Moon Domain) to heal/buff.",
        "5. **Outro**: Switch to Heavy Attack DPS (Augusta/Jiyan)."
    ],
    builds: {
        weapons: [
            {
                name: "Moongazer's Sigil",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Perfect stats. Bonuses for Shields and Liberation DMG.",
                image: "/images/weapons/moongazerssigil.png"
            },
            {
                name: "Verity's Handle",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Xiangli Yao's weapon. Strong Liberation buffs.",
                image: "/images/weapons/verityshandle.png"
            },
            {
                name: "Blazing Justice",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Zani's Signature. Good stats but passive partially wasted.",
                image: "/images/weapons/blazingjustice.png"
            },
            {
                name: "Abyss Surges",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Energy Regen & ATK. Solid stat stick.",
                image: "/images/weapons/abysssurges.png"
            },
            {
                name: "Stonard",
                rank: "Best 4-Star",
                rarity: 4,
                description: "Battle Pass weapon. Crit Rate & Liberation Buff.",
                image: "/images/weapons/stonard.png"
            },
            {
                name: "Hollow Mirage",
                rank: "Alternative 4-Star",
                rarity: 4,
                description: "Good stats but requires not taking damage.",
                image: "/images/weapons/hollowmirage.png"
            }
        ],
        echoes: [
            {
                set: "Crown of Valor (3pc) + Sierra Gale (2pc)",
                mainEcho: "Lady of the Sea",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Aero DMG", "Aero DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Liberation DMG", "ATK%", "Energy Regen"]
                },
                description: "Hybrid set maximizing Shield/Support capabilities and Aero DMG.",
                recommendation_reason: "Best for Support/Hybrid Iuno.",
                echo_breakdown: {
                    cost4: [{ name: "Lady of the Sea", image: "/images/echoes/ladyofthesea.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Aero DMG"] },
                        { name: "Hoochief", image: "/images/echoes/hoochief.png", mainStats: ["Aero DMG"] }
                    ],
                    cost1: [
                        { name: "Chirpuff", image: "/images/echoes/chirpuff.png", mainStats: ["ATK%"] },
                        { name: "Cruisewing", image: "/images/echoes/cruisewing.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Energy Regen (120%) > Aero/Lib DMG > ATK%"
    },
    teams: [
        {
            name: "Heavy Attack Support",
            description: "Supporting Heavy Attack DPS like Augusta.",
            members: [
                { name: "Augusta", role: "Main DPS" },
                { name: "Iuno", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        }
    ]
};

export const iuno_hybrid: Character = {
    ...iuno,
    id: "iuno-hybrid",
    role: "Hybrid",
    tier: {
        overall: "R0.5",
        tower: "R0.5",
        wastes: "R1"
    }
};
