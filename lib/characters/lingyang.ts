import { Character } from "../characterTypes";

export const lingyang: Character = {
    id: "lingyang",
    name: "Lingyang",
    rarity: 5,
    element: "Glacio",
    weaponType: "Gauntlets",
    role: "Main DPS",
    tags: ["Aerial Combat", "Striding Lion", "Glacio DMG", "Self-Buff"],
    tier: {
        overall: "R3",
        tower: "R3",
        wastes: "R3"
    },
    imagePortrait: "/images/characters/LingyangSmall.png",
    imageIcon: "/images/characters/LingyangSmall.png",
    imageCard: "/images/characters/LingyangLarge.png",
    stats: {
        hp: 10388,
        atk: 438,
        def: 1210
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "Glacio DMG", value: "12%", stat: "glacioDamage", amount: 12 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "Coriolus", count: 60, icon: "/images/else/coriolus.png" },
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
                    { name: "Sound-Keeping Tacet Core", count: 3, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Coriolus", count: 4, icon: "/images/else/coriolus.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Whisperin Core", count: 8, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 6, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Coriolus", count: 8, icon: "/images/else/coriolus.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Whisperin Core", count: 4, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 9, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Coriolus", count: 12, icon: "/images/else/coriolus.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Whisperin Core", count: 8, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 12, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Coriolus", count: 16, icon: "/images/else/coriolus.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 16, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Coriolus", count: 20, icon: "/images/else/coriolus.png" }
                ]
            }
        ],
        weapon: {
            name: "Abyss Surges",
            icon: "/images/weapons/abysssurges.png",
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
        overview: `Lingyang is a unique **Glacio Gauntlet Main DPS** who specializes in aerial combat. His "Striding Lion" state allows him to fight mid-air, avoiding many ground-based attacks while unleashing rapid combos.
        
        Though difficult to master, Lingyang rewards skilled play with high sustainable damage. He is excellent in single-target scenarios where he can juggle opponents or continuously attack bosses from a safe height.`,
        playstyle: "Ult/Intro -> Enter Striding Lion (Mid-Air) -> Aerial Combos -> Finisher.",
        pros: [
            "**Unique Aerial Combat**: Can stay airborne for extended periods, avoiding ground hazards.",
            "**Self-Buffing**: Generates massive Glacio DMG bonuses from his kit.",
            "**High Mobility**: Very fast movement and gap closing while in Striding Lion.",
            "**Fun Factor**: Offers a very distinct playstyle from other DPS."
        ],
        cons: [
            "**High Skill Floor**: Aerial combat can be disorienting and hard to control.",
            "**Hitbox Issues**: Some bosses have hitboxes that are hard to hit from the air.",
            "**No AoE**: Strictly single-target tailored. Struggles against mobs.",
            "**Vulnerable**: While safe from ground, he has little defensive utility in air.",
            "He is competing with Calcharo for the “most useless 5-star character” title"
        ]
    },
    skills: [
        {
            name: "Basic: Majestic Fists",
            type: "Basic",
            description: "5-hit combo. **Feral Roars** follow-up after Skill. In Striding Lion → **Feral Gyrate** (2-hit aerial).",
            attributes: [
                { name: "Basic P1 DMG", value: "30.00%" },
                { name: "Basic P3 DMG", value: "36.65% * 2" },
                { name: "Basic P4 DMG", value: "10.27% * 5 + 21.99%" },
                { name: "Feral Roars", value: "40.00% * 2" },
                { name: "Feral Gyrate P1", value: "43.80% * 2 + 58.40%" },
                { name: "Feral Gyrate P2", value: "15.98% * 6" }
            ],
            priority: 3
        },
        {
            name: "Resonance: Ancient Arts",
            type: "Skill",
            description: "Punch attack. After Basic 3/4/5 → **Furious Punches**. In Striding Lion → **Mountain Roamer** (aerial dash). No CD.",
            attributes: [
                { name: "Ancient Arts DMG", value: "66.70%" },
                { name: "Furious Punches", value: "38.35% * 2" },
                { name: "Mountain Roamer", value: "41.69% * 2" },
                { name: "Cooldown", value: "0s" }
            ],
            priority: 3
        },
        {
            name: "Forte Circuit: Unification of Spirits",
            type: "Forte",
            description: "**Lion's Spirit** (max 100): Full gauge + Heavy → **Striding Lion** (aerial state). +150% Mountain Roamer DMG within 3s of Basic (Inherent).",
            attributes: [
                { name: "Glorious Plunge", value: "86.70%" },
                { name: "Stormy Kicks", value: "18.13% * 8 + 96.65%" },
                { name: "Tail Strike", value: "88.00% * 2" },
                { name: "Concerto Regen", value: "35" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Strive: Lion's Vigor",
            type: "Ultimate",
            description: "Deal Glacio DMG and enter **Lion's Vigor** (14s). +50% Glacio DMG. Lion's Spirit consumption -50%. +50% Intro DMG (Inherent).",
            attributes: [
                { name: "Skill DMG", value: "200.00%" },
                { name: "Glacio Bonus", value: "+50%" },
                { name: "Duration", value: "14s" },
                { name: "Cooldown", value: "20s" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 1
        },
        {
            name: "Intro: Lion Awakens",
            type: "Intro",
            description: "Swift strike dealing Glacio DMG. Restores Lion's Spirit.",
            attributes: [
                { name: "Skill DMG", value: "50.00% * 2" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Frosty Marks",
            type: "Outro",
            description: "Release shockwave dealing massive Glacio DMG.",
            attributes: [
                { name: "Outro DMG", value: "587.94% ATK" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Increases **Anti-Interruption** during Lion's Vigor (Ult)." },
        { node: "S2", name: "Sequence Node 2", description: "Intro Skill recovers **10 Energy** (20s CD)." },
        { node: "S3", name: "Sequence Node 3", description: "Ult grants **20% Basic ATK DMG** and **10% Skill DMG** bonus." },
        { node: "S4", name: "Sequence Node 4", description: "Outro grants entire team **20% Glacio DMG Bonus**." },
        { node: "S5", name: "Sequence Node 5", description: "Ult deals additional **200% ATK** damage." },
        { node: "S6", name: "Sequence Node 6", description: "In Striding Lion, Skill makes next Basic Attack deal **double damage** (100% Bonus)." }
    ],
    rotation: [
        "1. **Intro**: Enter field.",
        "2. **Liberation**: Cast immediately for buffs.",
        "3. **Forte**: Use Heavy Attack to enter **Striding Lion** (Air).",
        "4. **Combo**: Aerial Basic x1 -> Aerial Skill x1 -> Repeat.",
        "5. **Finisher**: When Spirit runs out, perform plunging attack.",
        "6. **Outro**: Switch out."
    ],
    builds: {
        weapons: [
            {
                name: "Abyss Surges",
                rank: "Standard 5-Star (Best)",
                rarity: 5,
                description: "Best In Slot. Great stats and buffs Basic/Skill damage which he needs.",
                image: "/images/weapons/abysssurges.png"
            },
            {
                name: "Verity's Handle",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Xiangli Yao's Signature. Good stats and Liberation buff.",
                image: "/images/weapons/verityshandle.png"
            },
            {
                name: "Blazing Justice",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Zani's Signature. High Crit DMG and DEF Ignore.",
                image: "/images/weapons/blazingjustice.png"
            },
            {
                name: "Hollow Mirage",
                rank: "4-Star Best",
                rarity: 4,
                description: "High ATK and stacks ATK/DEF. Great 4-star DPS option.",
                image: "/images/weapons/hollowmirage.png"
            },
            {
                name: "Stonard",
                rank: "Battle Pass",
                rarity: 4,
                description: "Crit Rate stat stick. Solid 4-star.",
                image: "/images/weapons/stonard.png"
            }
        ],
        echoes: [
            {
                set: "Frosty Resolve (5pc)",
                mainEcho: "Sentry Construct",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Glacio DMG", "Glacio DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Best for Lingyang. Skill DMG buffs + Glacio DMG.",
                recommendation_reason: "Optimized for his playstyle.",
                echo_breakdown: {
                    cost4: [{ name: "Sentry Construct", image: "/images/echoes/sentryconstruct.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Autopuppet Scout", image: "/images/echoes/autopuppetscout.png", mainStats: ["Glacio DMG"] },
                        { name: "Roseshroom", image: "/images/echoes/roseshroom.png", mainStats: ["Glacio DMG"] }
                    ],
                    cost1: [
                        { name: "Tambourinist", image: "/images/echoes/tambourinist.png", mainStats: ["ATK%"] },
                        { name: "Fissured Geode", image: "/images/echoes/fissuredgeode.png", mainStats: ["ATK%"] }
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
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Standard Glacio set.",
                recommendation_reason: "Alternative if Frosty Resolve not available.",
                echo_breakdown: {
                    cost4: [{ name: "Lampylumen Myriad", image: "/images/echoes/lampylumenmyriad.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Autopuppet Scout", image: "/images/echoes/autopuppetscout.png", mainStats: ["Glacio DMG"] },
                        { name: "Roseshroom", image: "/images/echoes/roseshroom.png", mainStats: ["Glacio DMG"] }
                    ],
                    cost1: [
                        { name: "Tambourinist", image: "/images/echoes/tambourinist.png", mainStats: ["ATK%"] },
                        { name: "Fissured Geode", image: "/images/echoes/fissuredgeode.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Glacio DMG > ATK% > Energy Regen"
    },
    teams: [
        {
            name: "Premium Glacio",
            description: "Zhezhi buffs Glacio heavily.",
            members: [
                { name: "Lingyang", role: "Main DPS" },
                { name: "Zhezhi", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "F2P Friendly",
            description: "Sanhua buffs Basic Attack DMG.",
            members: [
                { name: "Lingyang", role: "Main DPS" },
                { name: "Sanhua", role: "Sub DPS" },
                { name: "Baizhi", role: "Support" }
            ]
        }
    ]
};
