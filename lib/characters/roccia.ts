import { Character } from "../characterTypes";

export const roccia: Character = {
    id: "roccia",
    name: "Roccia",
    rarity: 5,
    element: "Havoc",
    weaponType: "Gauntlets",
    role: "Hybrid",
    tags: ["Grouping", "Buffs Basic Attack", "Buffs Havoc DMG", "Hybrid"],
    profileType: "Specialist",
    potential: "A",
    tier: {
        overall: "R2",
        tower: "R2",
        wastes: "R2"
    },
    imagePortrait: "/images/characters/RocciaSmall.png",
    imageIcon: "/images/characters/RocciaSmall.png",
    imageCard: "/images/characters/RocciaLarge.png",
    stats: {
        hp: 12250,
        atk: 375,
        def: 1198
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "Crit DMG", value: "16%", stat: "critDamage", amount: 16 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Tidal Residuum", count: 4, icon: "/images/else/lftidalresiduum.png" },
            { name: "Firecracker Jewelweed", count: 60, icon: "/images/else/firecrackerjewelweed.png" },
            { name: "MF Tidal Residuum", count: 12, icon: "/images/else/mftidalresiduum.png" },
            { name: "HF Tidal Residuum", count: 12, icon: "/images/else/hftidalresiduum.png" },
            { name: "FF Tidal Residuum", count: 4, icon: "/images/else/fftidalresiduum.png" },
            { name: "Cleansing Conch", count: 46, icon: "/images/else/cleansingconch.png" }
        ],
        skills: [
            { name: "LF Tidal Residuum", count: 25, icon: "/images/else/lftidalresiduum.png" },
            { name: "MF Tidal Residuum", count: 28, icon: "/images/else/mftidalresiduum.png" },
            { name: "HF Tidal Residuum", count: 40, icon: "/images/else/hftidalresiduum.png" },
            { name: "FF Tidal Residuum", count: 57, icon: "/images/else/fftidalresiduum.png" },
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
                    { name: "LF Tidal Residuum", count: 4, icon: "/images/else/lftidalresiduum.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "MF Tidal Residuum", count: 4, icon: "/images/else/mftidalresiduum.png" },
                    { name: "Cleansing Conch", count: 3, icon: "/images/else/cleansingconch.png" },
                    { name: "Firecracker Jewelweed", count: 4, icon: "/images/else/firecrackerjewelweed.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Tidal Residuum", count: 8, icon: "/images/else/mftidalresiduum.png" },
                    { name: "Cleansing Conch", count: 6, icon: "/images/else/cleansingconch.png" },
                    { name: "Firecracker Jewelweed", count: 8, icon: "/images/else/firecrackerjewelweed.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Tidal Residuum", count: 4, icon: "/images/else/hftidalresiduum.png" },
                    { name: "Cleansing Conch", count: 9, icon: "/images/else/cleansingconch.png" },
                    { name: "Firecracker Jewelweed", count: 12, icon: "/images/else/firecrackerjewelweed.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Tidal Residuum", count: 8, icon: "/images/else/hftidalresiduum.png" },
                    { name: "Cleansing Conch", count: 12, icon: "/images/else/cleansingconch.png" },
                    { name: "Firecracker Jewelweed", count: 16, icon: "/images/else/firecrackerjewelweed.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Tidal Residuum", count: 4, icon: "/images/else/fftidalresiduum.png" },
                    { name: "Cleansing Conch", count: 16, icon: "/images/else/cleansingconch.png" },
                    { name: "Firecracker Jewelweed", count: 20, icon: "/images/else/firecrackerjewelweed.png" }
                ]
            }
        ],
        weapon: {
            name: "Tragicomedy",
            icon: "/images/weapons/tragicomedy.png",
            total: [
                { name: "MF Tidal Residuum", count: 20, icon: "/images/else/mftidalresiduum.png" },
                { name: "HF Tidal Residuum", count: 20, icon: "/images/else/hftidalresiduum.png" },
                { name: "FF Tidal Residuum", count: 12, icon: "/images/else/fftidalresiduum.png" },
                { name: "Cadence Seed", count: 26, icon: "/images/else/cadenceseed.png" },
                { name: "Cadence Bud", count: 26, icon: "/images/else/cadencebud.png" },
                { name: "Cadence Leaf", count: 16, icon: "/images/else/cadenceleaf.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Tidal Residuum", count: 6, icon: "/images/else/lftidalresiduum.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Tidal Residuum", count: 6, icon: "/images/else/mftidalresiduum.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Tidal Residuum", count: 10, icon: "/images/else/mftidalresiduum.png" },
                        { name: "Cadence Seed", count: 10, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Tidal Residuum", count: 6, icon: "/images/else/hftidalresiduum.png" },
                        { name: "Cadence Bud", count: 6, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Tidal Residuum", count: 10, icon: "/images/else/hftidalresiduum.png" },
                        { name: "Cadence Bud", count: 10, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Tidal Residuum", count: 6, icon: "/images/else/fftidalresiduum.png" },
                        { name: "Cadence Leaf", count: 6, icon: "/images/else/cadenceleaf.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Roccia is a premium **Havoc Sub-DPS** and **Buffer** who excels at grouping enemies and empowering Basic Attack/Havoc DMG dealers. She is the perfect partner for **Camellya** and **Havoc Rover**.
        
        Her kit features a unique "Imagination" mechanic that lets her perform bouncing Heavy Attacks ("Real Fantasy"). Her **Outro Skill** grants 20% Havoc DMG AMP and 25% Basic Attack DMG AMP. Additionally, she replaces the incoming character's Utility with a **Magic Box**, a powerful grouping tool.`,
        playstyle: "Intro -> Basic (Fill Imagination) -> Skill -> Heavy (Bounces) -> Liberation -> Outro (Magic Box).",
        pros: [
            "**Best Grouper**: Magic Box provides excellent, transferable grouping utility.",
            "**Havoc Specialist**: Massive buffs for Havoc and Basic Attack strategies (Camellya/Rover).",
            "**High Personal DMG**: Deals significant damage for a hybrid buffer.",
            "**Easy Rotation**: Simple and effective 'bounce' mechanics."
        ],
        cons: [
            "**Niche**: Best used in Havoc teams; less flexible than generic buffers.",
            "**Field Time**: Requires moderate field time to execute her full bounce combo.",
            "**Sanhua Competition**: Competes with Sanhua who is free and faster."
        ]
    },
    skills: [
        {
            name: "Basic: Pero, Easy",
            type: "Basic",
            description: "4-hit combo. Hold to charge **Imagination** (max 300). At 100+ → **Beyond Imagination** → air state.",
            attributes: [
                { name: "Basic P1 DMG", value: "36.81%" },
                { name: "Basic P2 DMG", value: "19.19% * 3" },
                { name: "Basic P3 DMG", value: "17.00% * 2 + 51.00%" },
                { name: "Basic P4 DMG", value: "52.41% * 2" },
                { name: "Heavy Attack", value: "85.00%" },
                { name: "Dodge Counter", value: "34.66% * 3" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Acrobatic Trick",
            type: "Skill",
            description: "Tornado that pulls enemies + Havoc DMG. Launches into air (Beyond Imagination). +100 Imagination. +20% ATK for 12s (Inherent).",
            attributes: [
                { name: "Skill DMG", value: "30.92% * 8" },
                { name: "Cooldown", value: "10s" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 3
        },
        {
            name: "Forte: A Prop Master Prepares",
            type: "Forte",
            description: "**Imagination** (max 300): At 100+, use Basic in air → **Real Fantasy** (up to 3x bounces, Heavy ATK DMG). Gains 100 from Intro/Skill.",
            attributes: [
                { name: "Real Fantasy P1", value: "162.00%" },
                { name: "Real Fantasy P2", value: "171.00%" },
                { name: "Real Fantasy P3", value: "180.00%" },
                { name: "P1 Concerto", value: "10" },
                { name: "P2 Concerto", value: "16" },
                { name: "P3 Concerto", value: "25" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Commedia Improvviso!",
            type: "Ultimate",
            description: "Heavy ATK nuke. Grants team +200 flat ATK (requires 70%+ Crit Rate). **Magic Box** utility on Outro (grouping tool).",
            attributes: [
                { name: "Skill DMG", value: "140.00% * 3" },
                { name: "ATK Buff", value: "200 (at 70%+ CR)" },
                { name: "Cooldown", value: "20s" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 4
        },
        {
            name: "Intro: Pero, Help",
            type: "Intro",
            description: "Attack dealing Havoc DMG. +100 Imagination. Chain into Basic P4.",
            attributes: [
                { name: "Skill DMG", value: "85.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Applause, Please!",
            type: "Outro",
            description: "Grant next character **Havoc DMG Amp** and **Basic ATK DMG Amp**. Pass **Magic Box** utility.",
            attributes: [
                { name: "Havoc Amp", value: "+20%" },
                { name: "Basic ATK Amp", value: "+25%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Skill grants extra 100 Imagination. Basic Fantasy gains Interruption Resistance." },
        { node: "S2", name: "Sequence Node 2", description: "Real Fantasy grants Team **10% Havoc DMG Bonus** (Stacks up to 3x)." },
        { node: "S3", name: "Sequence Node 3", description: "Intro increases Roccia's **Crit Rate/DMG** massively." },
        { node: "S4", name: "Sequence Node 4", description: "Skill increases Real Fantasy DMG by **60%**." },
        { node: "S5", name: "Sequence Node 5", description: "Liberation DMG **+20%**, Heavy Attack DMG **+80%**." },
        { node: "S6", name: "Sequence Node 6", description: "Liberation grants **60% DEF Ignore** to Fantasy. Unlocks extra jumps." }
    ],
    rotation: [
        "1. **Intro**: Enter field (100 Imagination).",
        "2. **Basic**: Basic Attack 4 (Cancel animation with Skill).",
        "3. **Skill**: Cast Acrobatic Trick (100 Imagination).",
        "4. **Forte**: Perform 3x Real Fantasy Bounces.",
        "5. **Liberation**: Cast Commedia Improvviso!",
        "6. **Outro**: Switch to Camellya/Rover with Magic Box."
    ],
    builds: {
        weapons: [
            {
                name: "Tragicomedy",
                rank: "Signature (Best)",
                rarity: 5,
                description: "CRIT Rate & Heavy ATK DMG. Perfect synergy.",
                image: "/images/weapons/tragicomedy.png"
            },
            {
                name: "Verity's Handle",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "High Base ATK & Crit DMG.",
                image: "/images/weapons/verityshandle.png"
            },
            {
                name: "Abyss Surges",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Good Energy Regen and ATK stats.",
                image: "/images/weapons/abysssurges.png"
            },
            {
                name: "Stonard",
                rank: "BP Option",
                rarity: 4,
                description: "Crit Rate stat stick.",
                image: "/images/weapons/stonard.png"
            }
        ],
        echoes: [
            {
                set: "Midnight Veil (5pc)",
                mainEcho: "Nightmare: Impermanence Heron",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Havoc DMG", "Havoc DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Energy Regen", "Heavy Attack DMG"]
                },
                description: "Best Sub-DPS Set.",
                recommendation_reason: "Provides Havoc DMG Bonus and Team Buffs on Outro.",
                echo_breakdown: {
                    cost4: [{ name: "Nightmare: Impermanence Heron", image: "/images/echoes/nightmareimpermanenceheron.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
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
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Havoc DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "General Support Build.",
                recommendation_reason: "Use if you need purely an ATK buffer for the next character.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Roseshroom", image: "/images/echoes/roseshroom.png", mainStats: ["Havoc DMG"] },
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["ATK%"] },
                        { name: "Whifflenier", image: "/images/echoes/whifflenier.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate (to 70%+) > Energy Regen (125%) > Crit DMG > Havoc DMG"
    },
    teams: [
        {
            name: "Premium Havoc Team",
            description: "Supporting Camellya.",
            members: [
                { name: "Camellya", role: "Main DPS" },
                { name: "Roccia", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "Mono Havoc Trio",
            description: "Supporting Phrolova.",
            members: [
                { name: "Phrolova", role: "Main DPS" },
                { name: "Cantarella", role: "Sub DPS" },
                { name: "Roccia", role: "Buffer" }
            ]
        }
    ]
};
