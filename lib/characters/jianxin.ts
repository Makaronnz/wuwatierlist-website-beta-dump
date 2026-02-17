import { Character } from "../characterTypes";

export const jianxin: Character = {
    id: "jianxin",
    name: "Jianxin",
    rarity: 5,
    element: "Aero",
    weaponType: "Gauntlets",
    role: "Hybrid",
    tags: ["Shield", "Crowd Control", "Healing", "Resonance Liberation Buff"],
    profileType: "Versatile",
    potential: "D",
    tier: {
        overall: "R2.5",
        tower: "R2.5",
        wastes: "R2.5"
    },
    imagePortrait: "/images/characters/JianxinSmall.png",
    imageIcon: "/images/characters/JianxinSmall.png",
    imageCard: "/images/characters/JianxinLarge.png",
    stats: {
        hp: 14112,
        atk: 338,
        def: 1124
    },
    maxEnergy: 150,
    minorFortes: [
        { name: "CRIT Rate", value: "8%", stat: "critRate", amount: 8 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Howler Core", count: 4, icon: "/images/else/lfhowlercore.png" },
            { name: "Lanternberry", count: 60, icon: "/images/else/lanternberry.png" },
            { name: "MF Howler Core", count: 12, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 12, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
            { name: "Roaring Rock Fist", count: 46, icon: "/images/else/roaringrockfist.png" }
        ],
        skills: [
            { name: "LF Howler Core", count: 25, icon: "/images/else/lfhowlercore.png" },
            { name: "MF Howler Core", count: 28, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 40, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 57, icon: "/images/else/ffhowlercore.png" },
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
                    { name: "LF Howler Core", count: 4, icon: "/images/else/lfhowlercore.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "MF Howler Core", count: 4, icon: "/images/else/mfhowlercore.png" },
                    { name: "Roaring Rock Fist", count: 3, icon: "/images/else/roaringrockfist.png" },
                    { name: "Lanternberry", count: 4, icon: "/images/else/lanternberry.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Howler Core", count: 8, icon: "/images/else/mfhowlercore.png" },
                    { name: "Roaring Rock Fist", count: 6, icon: "/images/else/roaringrockfist.png" },
                    { name: "Lanternberry", count: 8, icon: "/images/else/lanternberry.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Howler Core", count: 4, icon: "/images/else/hfhowlercore.png" },
                    { name: "Roaring Rock Fist", count: 9, icon: "/images/else/roaringrockfist.png" },
                    { name: "Lanternberry", count: 12, icon: "/images/else/lanternberry.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Howler Core", count: 8, icon: "/images/else/hfhowlercore.png" },
                    { name: "Roaring Rock Fist", count: 12, icon: "/images/else/roaringrockfist.png" },
                    { name: "Lanternberry", count: 16, icon: "/images/else/lanternberry.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
                    { name: "Roaring Rock Fist", count: 16, icon: "/images/else/roaringrockfist.png" },
                    { name: "Lanternberry", count: 20, icon: "/images/else/lanternberry.png" }
                ]
            }
        ],
        weapon: {
            name: "Verity's Handle",
            icon: "/images/weapons/verityshandle.png",
            total: [
                { name: "MF Howler Core", count: 20, icon: "/images/else/mfhowlercore.png" },
                { name: "HF Howler Core", count: 20, icon: "/images/else/hfhowlercore.png" },
                { name: "FF Howler Core", count: 12, icon: "/images/else/ffhowlercore.png" },
                { name: "Cadence Seed", count: 26, icon: "/images/else/cadenceseed.png" },
                { name: "Cadence Bud", count: 26, icon: "/images/else/cadencebud.png" },
                { name: "Cadence Leaf", count: 16, icon: "/images/else/cadenceleaf.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Howler Core", count: 6, icon: "/images/else/lfhowlercore.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Howler Core", count: 6, icon: "/images/else/mfhowlercore.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Howler Core", count: 10, icon: "/images/else/mfhowlercore.png" },
                        { name: "Cadence Seed", count: 10, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Howler Core", count: 6, icon: "/images/else/hfhowlercore.png" },
                        { name: "Cadence Bud", count: 6, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Howler Core", count: 10, icon: "/images/else/hfhowlercore.png" },
                        { name: "Cadence Bud", count: 10, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Howler Core", count: 6, icon: "/images/else/ffhowlercore.png" },
                        { name: "Cadence Leaf", count: 6, icon: "/images/else/cadenceleaf.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Jianxin is a versatile **Aero Gauntlet Support/Hybrid** unit. She is the ultimate jack-of-all-trades, capable of providing **Shielding**, **Healing**, **Crowd Control**, and **Damage Reduction**.
        
        Her Resonance Liberation is one of the best grouping tools in the game, pulling small to medium enemies effectively. Her Outro Skill buffs **Resonance Liberation DMG**, making her a strong support for characters like Calcharo, Xiangli Yao, or Jinhsi (in specific setups).`,
        playstyle: "Concerto Build -> Liberation (Group) -> Forte Heavy Attack (Shield) -> Outro.",
        pros: [
            "**Excellent Grouping**: Her Ultimate has a large range and strong pull for mobs.",
            "**High Survivability**: Generates thick shields and heals herself/team.",
            "**Damage Immunity**: Skill (Parry Stance) can completely negate damage.",
            "**Liberation Buff**: Outro provides 38% Liberation DMG Deepen."
        ],
        cons: [
            "**Long Field Time**: Charging her Forte shield takes ~6 seconds of standing still.",
            "**Interruption Risk**: Can be knocked out of her Forte channel (needs Shield or Bell-Borne).",
            "**Low Personal DPS**: Without high investment, her damage is modest.",
            "**Parry Complexity**: Skill parry requires knowing enemy patterns."
        ]
    },
    skills: [
        {
            name: "Basic: Fengyiquan",
            type: "Basic",
            description: "4-hit combo generating **Chi** (Forte). P2 and P3 have multi-hit patterns.",
            attributes: [
                { name: "Basic P1 DMG", value: "34.94%" },
                { name: "Basic P2 DMG", value: "13.40% * 2 + 40.19%" },
                { name: "Basic P3 DMG", value: "21.00% * 4" },
                { name: "Basic P4 DMG", value: "57.04%" },
                { name: "Heavy Attack", value: "63.41%" },
                { name: "Dodge Counter", value: "20.54% * 2 + 82.14%" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Calming Air",
            type: "Skill",
            description: "Hold → **Parry Stance** (negates damage). **Chi Counter** on hit, **Chi Parry** on release.",
            attributes: [
                { name: "Chi Counter DMG", value: "168.30%" },
                { name: "Chi Parry DMG", value: "130.14%" },
                { name: "Cooldown", value: "12s" },
                { name: "Counter Concerto", value: "14" },
                { name: "Parry Concerto", value: "14" }
            ],
            priority: 1
        },
        {
            name: "Forte Circuit: Primordial Chi Spiral",
            type: "Forte",
            description: "**Chi** (max 120): Full gauge + Heavy → **Zhoutian Progress** (-50% DMG taken). Channels shield/heal. +20% Liberation DMG (Inherent). +20% Shield (Inherent).",
            attributes: [
                { name: "Zhoutian DMG", value: "12.50% / tick" },
                { name: "Major Zhoutian", value: "260.00%" },
                { name: "Max Shield", value: "2915 + 113.70% DEF" },
                { name: "Heal", value: "700 + 27.30% ATK / 6s" },
                { name: "Shield Duration", value: "30s" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Purification Force Field",
            type: "Ultimate",
            description: "Create vortex that pulls enemies (3.12s) and explodes for Aero DMG. Best grouping in the game.",
            attributes: [
                { name: "Continuous DMG", value: "15.00% / tick" },
                { name: "Explosion DMG", value: "320.00%" },
                { name: "Duration", value: "3.12s" },
                { name: "Cooldown", value: "20s" },
                { name: "Energy Cost", value: "150" }
            ],
            priority: 4
        },
        {
            name: "Intro: Essence of Tao",
            type: "Intro",
            description: "Pull nearby targets dealing Aero DMG. Builds Chi.",
            attributes: [
                { name: "Skill DMG", value: "17.00% * 3 + 34.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Transcendence",
            type: "Outro",
            description: "Grant next character massive **Liberation DMG Deepen** buff.",
            attributes: [
                { name: "Liberation Deepen", value: "+38%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "After Intro, Basic Attacks grant **100% more Chi**." },
        { node: "S2", name: "Sequence Node 2", description: "Resonance Skill can be used **1 more time**." },
        { node: "S3", name: "Sequence Node 3", description: "Parry Stance -> Chi Counter triggers faster (2.5s)." },
        { node: "S4", name: "Sequence Node 4", description: "Casting Forte Heavy Attack doubles Liberation DMG (**+80%**)." },
        { node: "S5", name: "Sequence Node 5", description: "Liberation Range increased by **33%**." },
        { node: "S6", name: "Sequence Node 6", description: "During Forte, can performing special Pushing Punch for massive damage." }
    ],
    rotation: [
        "1. **Intro**: Enter field.",
        "2. **Liberation**: Cast immediately to group enemies.",
        "3. **Build Chi**: Use Skill (Parry/Tap) + Basic Attacks until Forte is full.",
        "4. **Forte**: Hold Heavy Attack to channel shield and heal (cancel early if needed, but reducing shield).",
        "5. **Outro**: Switch to Liberation DPS (Calcharo/Xiangli Yao)."
    ],
    builds: {
        weapons: [
            {
                name: "Verity's Handle",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Boosts Liberation DMG heavily. Best for personal damage.",
                image: "/images/weapons/verityshandle.png"
            },
            {
                name: "Abyss Surges",
                rank: "Best In Slot",
                rarity: 5,
                description: "Standard 5-Star. ATK and Energy Regen are great.",
                image: "/images/weapons/abysssurges.png"
            },
            {
                name: "Marcato",
                rank: "Support Best",
                rarity: 4,
                description: "Concerto Energy generation is key for her support role.",
                image: "/images/weapons/marcato.png"
            },
            {
                name: "Stonard",
                rank: "Battle Pass",
                rarity: 4,
                description: "Crit Rate stat stick.",
                image: "/images/weapons/stonard.png"
            },
            {
                name: "Originite: Type IV",
                rank: "Healer Set Trigger",
                rarity: 3,
                description: "Free option that can trigger Rejuvenating Glow set.",
                image: "/images/weapons/originitetypeiv.png"
            }
        ],
        echoes: [
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG", "Healing Bonus"],
                    cost3: ["Aero DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Support/Sub-DPS Build.",
                recommendation_reason: "Buffs next character while providing decent personal damage.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit. Rate", "Crit. DMG", "Healing Bonus"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Aero DMG", "Energy Regen"] },
                        { name: "Hoochief", image: "/images/echoes/hoochief.png", mainStats: ["Aero DMG"] }
                    ],
                    cost1: [
                        { name: "Whifflenier", image: "/images/echoes/whifflenier.png", mainStats: ["ATK%"] },
                        { name: "Snip Snap", image: "/images/echoes/snipsnap.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Rejuvenating Glow (5pc)",
                mainEcho: "Bell-Borne Geochelone",
                stats: {
                    cost4: ["Healing Bonus", "HP%"],
                    cost3: ["Energy Regen", "HP%"],
                    cost1: ["HP%", "HP%"],
                    substats: ["Energy Regen", "HP%", "Def%"]
                },
                description: "Healer set. MUST Use Originite: Type IV weapon to trigger.",
                recommendation_reason: "Best for pure Sustain/ATK buffing with 3-star weapon.",
                echo_breakdown: {
                    cost4: [{ name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["Healing Bonus"] }],
                    cost3: [
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Energy Regen"] },
                        { name: "Stonewall Bracer", image: "/images/echoes/stonewallbracer.png", mainStats: ["HP%"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["HP%"] },
                        { name: "Tick Tack", image: "/images/echoes/ticktack.png", mainStats: ["HP%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (140%+) > Crit Rate/DMG > Aero DMG > ATK%"
    },
    teams: [
        {
            name: "Liberation Buffer",
            description: "Buffing Liberation-focused DPS.",
            members: [
                { name: "Calcharo", role: "Main DPS" },
                { name: "Jianxin", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        },
        {
            name: "F2P Control",
            description: "Grouping for AoE damage.",
            members: [
                { name: "Havoc Rover", role: "Main DPS" },
                { name: "Jianxin", role: "Sub DPS" },
                { name: "Baizhi", role: "Support" }
            ]
        }
    ]
};
