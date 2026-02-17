import { Character } from "../characterTypes";

export const verina: Character = {
    id: "verina",
    name: "Verina",
    rarity: 5,
    element: "Spectro",
    weaponType: "Rectifier",
    role: "Support",
    tags: ["Healer", "Generalist Buffer", "Cheat Death", "Tier 0"],
    profileType: "Versatile",
    potential: "S",
    tier: {
        overall: "R1",
        tower: "R0.5",
        wastes: "R0.5"
    },
    imagePortrait: "/images/characters/VerinaSmall.png",
    imageIcon: "/images/characters/VerinaSmall.png",
    imageCard: "/images/characters/VerinaLarge.png",
    stats: {
        hp: 14238,
        atk: 338,
        def: 1100
    },
    maxEnergy: 175,
    minorFortes: [
        { name: "ATK", value: "12%", stat: "atk", amount: 12 },
        { name: "Healing Bonus", value: "12%", stat: "healingBonus", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Howler Core", count: 4, icon: "/images/else/lfhowlercore.png" },
            { name: "Belle Poppy", count: 60, icon: "/images/else/bellepoppy.png" },
            { name: "MF Howler Core", count: 12, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 12, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
            { name: "Elegy Tacet Core", count: 46, icon: "/images/else/elegytacetcore.png" }
        ],
        skills: [
            { name: "LF Howler Core", count: 25, icon: "/images/else/lfhowlercore.png" },
            { name: "MF Howler Core", count: 28, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 40, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 57, icon: "/images/else/ffhowlercore.png" },
            { name: "Lento Helix", count: 25, icon: "/images/else/lentohelix.png" },
            { name: "Adagio Helix", count: 28, icon: "/images/else/adagiohelix.png" },
            { name: "Andante Helix", count: 55, icon: "/images/else/andantehelix.png" },
            { name: "Presto Helix", count: 67, icon: "/images/else/prestohelix.png" },
            { name: "Monument Bell", count: 26, icon: "/images/else/monumentbell.png" }
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
                    { name: "Elegy Tacet Core", count: 3, icon: "/images/else/elegytacetcore.png" },
                    { name: "Belle Poppy", count: 4, icon: "/images/else/bellepoppy.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Howler Core", count: 8, icon: "/images/else/mfhowlercore.png" },
                    { name: "Elegy Tacet Core", count: 6, icon: "/images/else/elegytacetcore.png" },
                    { name: "Belle Poppy", count: 8, icon: "/images/else/bellepoppy.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Howler Core", count: 4, icon: "/images/else/hfhowlercore.png" },
                    { name: "Elegy Tacet Core", count: 9, icon: "/images/else/elegytacetcore.png" },
                    { name: "Belle Poppy", count: 12, icon: "/images/else/bellepoppy.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Howler Core", count: 8, icon: "/images/else/hfhowlercore.png" },
                    { name: "Elegy Tacet Core", count: 12, icon: "/images/else/elegytacetcore.png" },
                    { name: "Belle Poppy", count: 16, icon: "/images/else/bellepoppy.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
                    { name: "Elegy Tacet Core", count: 16, icon: "/images/else/elegytacetcore.png" },
                    { name: "Belle Poppy", count: 20, icon: "/images/else/bellepoppy.png" }
                ]
            }
        ],
        weapon: {
            name: "Stellar Symphony",
            icon: "/images/weapons/stellarsymphony.png",
            total: [
                { name: "MF Howler Core", count: 20, icon: "/images/else/mfhowlercore.png" },
                { name: "HF Howler Core", count: 20, icon: "/images/else/hfhowlercore.png" },
                { name: "FF Howler Core", count: 12, icon: "/images/else/ffhowlercore.png" },
                { name: "Lento Helix", count: 26, icon: "/images/else/lentohelix.png" },
                { name: "Adagio Helix", count: 26, icon: "/images/else/adagiohelix.png" },
                { name: "Andante Helix", count: 16, icon: "/images/else/andantehelix.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Howler Core", count: 6, icon: "/images/else/lfhowlercore.png" },
                        { name: "Lento Helix", count: 6, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Howler Core", count: 6, icon: "/images/else/mfhowlercore.png" },
                        { name: "Lento Helix", count: 6, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Howler Core", count: 10, icon: "/images/else/mfhowlercore.png" },
                        { name: "Lento Helix", count: 10, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Howler Core", count: 6, icon: "/images/else/hfhowlercore.png" },
                        { name: "Adagio Helix", count: 6, icon: "/images/else/adagiohelix.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Howler Core", count: 10, icon: "/images/else/hfhowlercore.png" },
                        { name: "Adagio Helix", count: 10, icon: "/images/else/adagiohelix.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Howler Core", count: 6, icon: "/images/else/ffhowlercore.png" },
                        { name: "Andante Helix", count: 6, icon: "/images/else/andantehelix.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Verina is a **Spectro Support** who serves as the premier generalist healer and buffer in Wuthering Waves. She provides a team-wide **15% All-Type DMG Deepen** via her Outro Skill, along with a **20% ATK buff** from her Inherent Skill (Gift of Nature).
        
        Her "Cheat Death" mechanic (Grace of Life) protects a teammate from fatal damage once every 10 minutes, making her invaluable for difficult content. She is universally useful in almost every team composition due to her minimal field time and potent buffs.`,
        playstyle: "Basic (if no Intro) -> Skill -> Liberation -> Jump -> Mid-air Attacks -> Outro.",
        pros: [
            "**Universal Support**: Fits in literally any team.",
            "**Powerful Buffs**: 15% DMG Deepen + 20% ATK + Healing.",
            "**Fast Rotation**: Very short field time requirement."
        ],
        cons: [
        ]
    },
    skills: [
        {
            name: "Basic: Cultivation",
            type: "Basic",
            description: "Perform up to 5 consecutive attacks with vines dealing Spectro DMG. Basic Stage 5 grants 1 Photosynthesis Energy.",
            attributes: [
                { name: "Stage 1 DMG", value: "19.04%" },
                { name: "Stage 2 DMG", value: "25.73%" },
                { name: "Stage 3 DMG", value: "12.87% * 2" },
                { name: "Stage 4 DMG", value: "33.86%" },
                { name: "Stage 5 DMG", value: "36.03%" },
                { name: "Heavy Attack DMG", value: "50.00%" },
                { name: "Dodge Counter DMG", value: "65.00%" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Botany Experiment",
            type: "Skill",
            description: "Converge energy field to grow foliage dealing Spectro DMG. Grants 1 Photosynthesis Energy on hit. Can be cancelled by Liberation to save time.",
            attributes: [
                { name: "Skill DMG", value: "18.00% * 3 + 36.00%" },
                { name: "Cooldown", value: "12s" },
                { name: "Concerto Regen", value: "30" },
                { name: "Effect", value: "+1 Photosynthesis Energy" }
            ],
            priority: 1
        },
        {
            name: "Forte Circuit: Starflower Blooms",
            type: "Forte",
            description: "**Photosynthesis Energy**: Max 4 stacks. Gained from Basic Stage 5, Resonance Skill, and Intro. When casting Heavy/Mid-air Attack with Energy, consume 1 stack to heal all party members and recover Concerto Energy.",
            attributes: [
                { name: "Heavy ATK: Starflower DMG", value: "32.67% + 49.00%" },
                { name: "Mid-air ATK: Starflower P1", value: "34.02%" },
                { name: "Mid-air ATK: Starflower P2", value: "32.10%" },
                { name: "Mid-air ATK: Starflower P3", value: "15.34% * 3" },
                { name: "Starflower Blooms Healing", value: "625 + 14.17% ATK" },
                { name: "Concerto per Stack", value: "12" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Arboreal Flourish",
            type: "Ultimate",
            description: "Nourish foliage dealing Spectro DMG and restoring HP to all team members. Applies **Photosynthesis Mark** to targets for 12s, triggering Coordinated Attacks and healing when attacked.",
            attributes: [
                { name: "Skill DMG", value: "100.00%" },
                { name: "Liberation Healing", value: "500 + 11.33% ATK" },
                { name: "Coordinated ATK DMG", value: "5.00%" },
                { name: "Coord. ATK Healing", value: "225 + 5.10% ATK" },
                { name: "Mark Duration", value: "12s" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "175" }
            ],
            priority: 4
        },
        {
            name: "Intro: Verdant Growth",
            type: "Intro",
            description: "Attack target dealing Spectro DMG. Grants 1 Photosynthesis Energy. Often skipped in optimal rotations as it places Verina in the air.",
            attributes: [
                { name: "Skill DMG", value: "50.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Blossom",
            type: "Outro",
            description: "Heal incoming character (19% ATK/sec for 6s). Grant all characters on nearby teams **15% All-Type DMG Deepen** for 30s. Also triggers 20% ATK buff via Inherent Skill.",
            attributes: [
                { name: "All-Type DMG Deepen", value: "15%" },
                { name: "Duration", value: "30s" },
                { name: "Continuous Healing", value: "19% ATK/sec for 6s" },
                { name: "ATK Buff (Inherent)", value: "+20% for 20s" }
            ],
            priority: 0
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Outro grants continuous healing (20% ATK every 5s for 30s)." },
        { node: "S2", name: "Sequence Node 2", description: "Resonance Skill grants +1 Photosynthesis Energy and +10 Concerto Energy." },
        { node: "S3", name: "Sequence Node 3", description: "Liberation Healing increased by 12%." },
        { node: "S4", name: "Sequence Node 4", description: "Heavy/Mid-air Attacks, Liberation, and Outro grant **15% Spectro DMG Bonus** to team." },
        { node: "S5", name: "Sequence Node 5", description: "Healing increased by 20% for teammates under 50% HP." },
        { node: "S6", name: "Sequence Node 6", description: "Starflower Blooms deal +20% DMG and trigger Coordinated Attacks + Healing 1 time." }
    ],
    rotation: [
        "1. **Swap In**: Basic P3 (if no Intro) -> P4 -> P5.",
        "2. **Skill**: Cast Botany Experiment.",
        "3. **Liberation**: Cast Arboreal Flourish.",
        "4. **Combos**: Jump -> Mid-air Attack x3 (consumes Forte).",
        "5. **Outro**: Swap to Main DPS."
    ],
    builds: {
        weapons: [
            {
                name: "Variation",
                rank: "Best In Slot",
                rarity: 4,
                description: "Excellent Energy Regen and Concerto restoration. Shortens rotation.",
                image: "/images/weapons/variation.png"
            },
            {
                name: "Stellar Symphony",
                rank: "5-Star Stat Stick",
                rarity: 5,
                description: "Massive Energy Regen and restores Concerto Energy.",
                image: "/images/weapons/stellarsymphony.png"
            },
            {
                name: "Cosmic Ripples",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Good Energy Regen stat stick.",
                image: "/images/weapons/cosmicripples.png"
            },
            {
                name: "Comet Flare",
                rank: "4-Star Option",
                rarity: 4,
                description: "Increases Healing Bonus and HP. Great F2P option.",
                image: "/images/weapons/cometflare.png"
            },
            {
                name: "Rectifier of Voyager",
                rank: "3-Star Option",
                rarity: 3,
                description: "Restores Resonance Energy directly. Good for ER needs.",
                image: "/images/weapons/rectifierofvoyager.png"
            }
        ],
        echoes: [
            {
                set: "Rejuvenating Glow (5pc)",
                mainEcho: "Fallacy of No Return",
                stats: {
                    cost4: ["Healing Bonus", "ATK%"],
                    cost3: ["Energy Regen", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "ATK%", "Flat ATK"]
                },
                description: "Standard Support Build.",
                recommendation_reason: "Provides ATK buff via set bonus and Energy Regen.",
                echo_breakdown: {
                    cost4: [{ name: "Fallacy of No Return", image: "/images/echoes/fallacyofnoreturn.png", mainStats: ["Healing Bonus", "ATK%"] }],
                    cost3: [
                        { name: "Chasm Guardian", image: "/images/echoes/chasmguardian.png", mainStats: ["Energy Regen"] },
                        { name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Whifflenier", image: "/images/echoes/whifflenier.png", mainStats: ["ATK%"] },
                        { name: "Tick Tack", image: "/images/echoes/ticktack.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Bell-Borne Geochelone",
                stats: {
                    cost4: ["Healing Bonus", "ATK%"],
                    cost3: ["Energy Regen", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "ATK%"]
                },
                description: "Buffing Alternative.",
                recommendation_reason: "If another support holds Rejuvenating Glow.",
                echo_breakdown: {
                    cost4: [{ name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["Healing Bonus", "ATK%"] }],
                    cost3: [
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Energy Regen"] },
                        { name: "Chasm Guardian", image: "/images/echoes/chasmguardian.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (220%+) > ATK% > Flat ATK"
    },
    teams: [
        {
            name: "Universal Support",
            description: "Verina fits every team.",
            members: [
                { name: "Jiyan", role: "Main DPS" },
                { name: "Mortefi", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        },
        {
            name: "Spectro Team",
            description: "Supporting Jinhsi/Rover.",
            members: [
                { name: "Jinhsi", role: "Main DPS" },
                { name: "Zhezhi", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        }
    ]
};
