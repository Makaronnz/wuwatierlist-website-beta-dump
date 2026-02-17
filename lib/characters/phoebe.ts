import { Character } from "../characterTypes";

export const phoebe: Character = {
    id: "phoebe",
    name: "Phoebe",
    rarity: 5,
    element: "Spectro",
    weaponType: "Rectifier",
    role: "Hybrid",
    tags: ["Dual Mode", "Spectro Frazzle", "Hybrid Buffer", "Debuffer"],
    profileType: "Specialist",
    potential: "A",
    tier: {
        overall: "R1.5",
        tower: "R1.5",
        wastes: "R1.5"
    },
    imagePortrait: "/images/characters/PhoebeSmall.png",
    imageIcon: "/images/characters/PhoebeSmall.png",
    imageCard: "/images/characters/PhoebeLarge.png",
    stats: {
        hp: 10825,
        atk: 413,
        def: 1259
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "Crit DMG", value: "16%", stat: "critDamage", amount: 16 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "Firecracker Jewelweed", count: 60, icon: "/images/else/firecrackerjewelweed.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Cleansing Conch", count: 46, icon: "/images/else/cleansingconch.png" }
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
            { name: "Sentinel's Dagger", count: 26, icon: "/images/else/sentinelsdagger.png" }
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
                    { name: "Cleansing Conch", count: 3, icon: "/images/else/cleansingconch.png" },
                    { name: "Firecracker Jewelweed", count: 4, icon: "/images/else/firecrackerjewelweed.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Whisperin Core", count: 8, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Cleansing Conch", count: 6, icon: "/images/else/cleansingconch.png" },
                    { name: "Firecracker Jewelweed", count: 8, icon: "/images/else/firecrackerjewelweed.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Whisperin Core", count: 4, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Cleansing Conch", count: 9, icon: "/images/else/cleansingconch.png" },
                    { name: "Firecracker Jewelweed", count: 12, icon: "/images/else/firecrackerjewelweed.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Whisperin Core", count: 8, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Cleansing Conch", count: 12, icon: "/images/else/cleansingconch.png" },
                    { name: "Firecracker Jewelweed", count: 16, icon: "/images/else/firecrackerjewelweed.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
                    { name: "Cleansing Conch", count: 16, icon: "/images/else/cleansingconch.png" },
                    { name: "Firecracker Jewelweed", count: 20, icon: "/images/else/firecrackerjewelweed.png" }
                ]
            }
        ],
        weapon: {
            name: "Luminous Hymn",
            icon: "/images/weapons/luminoushymn.png",
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
        overview: `Phoebe is a remarkably unique **Spectro Rectifier** character who can switch between two distinct modes: **Absolution (DPS)** and **Confession (Hybrid Support)**.
        
        Her kit revolves around the new status effect **Spectro Frazzle**. In **Absolution** mode, she consumes Frazzle stacks to deal massive Heavy Attack DMG. In **Confession** mode, she applies Frazzle rapidly, enabling other Frazzle-scaling DPS characters (like Zani). This dual nature allows her to be the star of the show or a pivotal support piece depending on the team composition.`,
        playstyle: "Skill (Summon Ring) -> Heavy/Skill Hold (Select Mode) -> Liberation -> Basic/Heavy Loops (Starflash) -> Outro.",
        pros: [
            "**Frazzle Enabler**: The premier source of Spectro Frazzle application.",
            "**Dual Role**: Can be Main DPS (Absolution) or Hybrid Support (Confession), pretty versatile",
            "**Flexible Teams**: Fits into Hypercarry comps or Dual-DPS setups.",
            "**High Burst**: Massive multipliers on Heavy Attack: Starflash."
        ],
        cons: [
            "**Team Dependent**: Absolution mode needs external Frazzle application (e.g., Spectro Rover).",
            "**Confession Niche**: Confession mode is currently only optimal with Zani.",
            "**Complex Rotation**: Managing Divine Voice, Prayer, and Ring of Mirrors positioning can be tricky."
        ]
    },
    skills: [
        {
            name: "Basic: O Come Divine Light",
            type: "Basic",
            description: "3-hit combo. Inside **Ring of Mirrors** → **Chamuel's Star** (enhanced damage). Outside → Holy Light refracts through ring for grouping.",
            attributes: [
                { name: "Basic P1 DMG", value: "14.85%" },
                { name: "Basic P2 DMG", value: "11.25% + 13.75%" },
                { name: "Basic P3 DMG", value: "7.17% * 8" },
                { name: "Chamuel P3", value: "14.55% * 6" },
                { name: "Dodge Counter", value: "22.05% * 6" }
            ],
            priority: 1
        },
        {
            name: "Resonance: To Where Light Shines",
            type: "Skill",
            description: "Summon **Ring of Mirrors** (30s): Stagnates targets 2s. Recast → Teleport inside. Outside: Basic refracts + groups. Inside: Enhanced basics.",
            attributes: [
                { name: "Skill DMG", value: "31.50% * 2" },
                { name: "Refracted DMG", value: "7.50% * 2" },
                { name: "Cooldown", value: "12s" }
            ],
            priority: 3
        },
        {
            name: "Forte: Radiant Invocation",
            type: "Forte",
            description: "**Prayer** (max 120, +5/s): Full → Hold Basic = **Absolution** (DPS). Hold Skill = **Confession** (Frazzle support). **Divine Voice** (max 60): Spent on **Starflash** (costs 30, or 15 in Absolution). +12% Spectro DMG in either mode (Inherent).",
            attributes: [
                { name: "Absolution Litany", value: "321.00%" },
                { name: "Utter Confession", value: "94.50%" },
                { name: "Starflash DMG", value: "41.59% * 3" },
                { name: "Absolution Amp", value: "+256% on Frazzled targets" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Dawn of Enlightenment",
            type: "Ultimate",
            description: "Massive Spectro nuke. **Absolution**: +255% DMG Multiplier. **Confession**: Apply 8 Spectro Frazzle stacks.",
            attributes: [
                { name: "Skill DMG", value: "202.00%" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "125" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 2
        },
        {
            name: "Intro: Golden Grace",
            type: "Intro",
            description: "Knock back + Spectro DMG.",
            attributes: [
                { name: "Skill DMG", value: "100.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Attentive Heart",
            type: "Outro",
            description: "Deals Spectro DMG. **Absolution**: +255% Multiplier. **Confession**: Grant **Silent Prayer** (-10% Spectro RES, +100% Frazzle Amp, 30s).",
            attributes: [
                { name: "Outro DMG", value: "528.41%" },
                { name: "Spectro RES Shred", value: "-10% (Confession)" },
                { name: "Frazzle Amp", value: "+100% (Confession)" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Absolution Liberation DMG **+480%**. Confession Liberation applies Max Frazzle Stacks." },
        { node: "S2", name: "Sequence Node 2", description: "Confession Outro grants **120% more Frazzle AMP**. Absolution Outro DMG Amplified by **120%**." },
        { node: "S3", name: "Sequence Node 3", description: "Heavy Attack: Starflash Multiplier increased significantly in both modes." },
        { node: "S4", name: "Sequence Node 4", description: "Basic/Dodge Counters reduce target **Spectro RES by 10%**." },
        { node: "S5", name: "Sequence Node 5", description: "Intro Skill gives **15% Spectro DMG Bonus**." },
        { node: "S6", name: "Sequence Node 6", description: "Ring of Mirrors increases ATK by **10%** and triggers an extra free **Starflash** on summon." }
    ],
    rotation: [
        "**Absolution (Main DPS)**:",
        "1. **Intro**: Enter field.",
        "2. **Skill**: Summon Ring of Mirrors.",
        "3. **Hold Basic**: Enter Absolution Mode.",
        "4. **Liberation**: Nuke.",
        "5. **Combo**: Basic x3 -> Starflash Loop.",
        "6. **Outro**: Swap when gauge empty.",
        "",
        "**Confession (Hybrid)**:",
        "1. **Intro**: Enter field.",
        "2. **Skill**: Summon Ring of Mirrors.",
        "3. **Hold Skill**: Enter Confession Mode.",
        "4. **Liberation**: Apply Frazzle stacks.",
        "5. **Combo**: Dodge Counter/Basic -> Starflash to apply more stacks.",
        "6. **Outro**: Buff Main DPS."
    ],
    builds: {
        weapons: [
            {
                name: "Luminous Hymn",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Perfect synergy with Frazzle and Heavy Attacks. Huge CRIT Rate.",
                image: "/images/weapons/luminoushymn.png"
            },
            {
                name: "Stringmaster",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Great generalist stats and ATK buffs.",
                image: "/images/weapons/stringmaster.png"
            },
            {
                name: "Whispers of Sirens",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Cantarella's Signature. Very high stats.",
                image: "/images/weapons/whispersofsirens.png"
            },
            {
                name: "Rime-Draped Sprouts",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Zhezhi's Signature. Good option.",
                image: "/images/weapons/rimedrapedsprouts.png"
            },
            {
                name: "Augment",
                rank: "4-Star Option",
                rarity: 4,
                description: "High ATK buff on Liberation use.",
                image: "/images/weapons/augment.png"
            },
            {
                name: "Ocean's Gift",
                rank: "F2P Option",
                rarity: 4,
                description: "Spectro DMG boosts on Frazzle synergy.",
                image: "/images/weapons/oceansgift.png"
            }
        ],
        echoes: [
            {
                set: "Eternal Radiance (5pc)",
                mainEcho: "Capitaneus",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Spectro DMG", "Spectro DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Heavy Attack DMG", "ATK%"]
                },
                description: "Best In Slot.",
                recommendation_reason: "Tailor-made for Frazzle interactions and Spectro DMG.",
                echo_breakdown: {
                    cost4: [{ name: "Capitaneus", image: "/images/echoes/capitaneus.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Spectro DMG"] },
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Spectro DMG"] }
                    ],
                    cost1: [
                        { name: "Spectro Prism", image: "/images/echoes/spectroprism.png", mainStats: ["ATK%"] },
                        { name: "Tick Tack", image: "/images/echoes/ticktack.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Spectro DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Confession Support Build.",
                recommendation_reason: "Use when playing as a dedicated support for Zani.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Spectro DMG"] },
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["ATK%"] },
                        { name: "Whifflenier", image: "/images/echoes/whifflenier.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Spectro DMG > Heavy Attack DMG > ATK%"
    },
    teams: [
        {
            name: "Absolution Hypercarry",
            description: "Phoebe as Main DPS.",
            members: [
                { name: "Phoebe", role: "Main DPS" },
                { name: "Rover (Spectro)", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "Confession Support",
            description: "Supporting Zani.",
            members: [
                { name: "Zani", role: "Main DPS" },
                { name: "Phoebe", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        }
    ]
};
