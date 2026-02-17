import { Character } from "../characterTypes";

export const youhu: Character = {
    id: "youhu",
    name: "Youhu",
    rarity: 4,
    element: "Glacio",
    weaponType: "Gauntlets",
    role: "Support",
    tags: ["Healer", "Coordinated Attack Buffer", "Random Buffs", "Glacio Support"],
    tier: {
        overall: "R2.5",
        tower: "R2.5",
        wastes: "R2"
    },
    imagePortrait: "/images/characters/YouhuSmall.png",
    imageIcon: "/images/characters/YouhuSmall.png",
    imageCard: "/images/characters/YouhuLarge.png",
    stats: {
        hp: 9975,
        atk: 263,
        def: 1051
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "ATK", value: "12%", stat: "atk", amount: 12 },
        { name: "CRIT Rate", value: "8%", stat: "critRate", amount: 8 }
    ],
    materials: {
        ascension: [
            { name: "Crude Ring", count: 4, icon: "/images/else/crudering.png" },
            { name: "Violet Coral", count: 60, icon: "/images/else/violetcoral.png" },
            { name: "Basic Ring", count: 12, icon: "/images/else/basicring.png" },
            { name: "Improved Ring", count: 12, icon: "/images/else/improvedring.png" },
            { name: "Tailored Ring", count: 4, icon: "/images/else/tailoredring.png" },
            { name: "Topological Confinement", count: 46, icon: "/images/else/topologicalconfinement.png" }
        ],
        skills: [
            { name: "Crude Ring", count: 25, icon: "/images/else/crudering.png" },
            { name: "Basic Ring", count: 28, icon: "/images/else/basicring.png" },
            { name: "Improved Ring", count: 40, icon: "/images/else/improvedring.png" },
            { name: "Tailored Ring", count: 57, icon: "/images/else/tailoredring.png" },
            { name: "Cadence Seed", count: 25, icon: "/images/else/cadenceseed.png" },
            { name: "Cadence Bud", count: 28, icon: "/images/else/cadencebud.png" },
            { name: "Cadence Leaf", count: 55, icon: "/images/else/cadenceleaf.png" },
            { name: "Cadence Blossom", count: 67, icon: "/images/else/cadenceblossom.png" },
            { name: "Monument Bell", count: 26, icon: "/images/else/monumentbell.png" }
        ],
        ascensionRanks: [
            {
                rank: 1,
                levelRange: "Lv. 20-40",
                materials: [
                    { name: "Crude Ring", count: 4, icon: "/images/else/crudering.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "Basic Ring", count: 4, icon: "/images/else/basicring.png" },
                    { name: "Topological Confinement", count: 3, icon: "/images/else/topologicalconfinement.png" },
                    { name: "Violet Coral", count: 4, icon: "/images/else/violetcoral.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "Basic Ring", count: 8, icon: "/images/else/basicring.png" },
                    { name: "Topological Confinement", count: 6, icon: "/images/else/topologicalconfinement.png" },
                    { name: "Violet Coral", count: 8, icon: "/images/else/violetcoral.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "Improved Ring", count: 4, icon: "/images/else/improvedring.png" },
                    { name: "Topological Confinement", count: 9, icon: "/images/else/topologicalconfinement.png" },
                    { name: "Violet Coral", count: 12, icon: "/images/else/violetcoral.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "Improved Ring", count: 8, icon: "/images/else/improvedring.png" },
                    { name: "Topological Confinement", count: 12, icon: "/images/else/topologicalconfinement.png" },
                    { name: "Violet Coral", count: 16, icon: "/images/else/violetcoral.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "Tailored Ring", count: 4, icon: "/images/else/tailoredring.png" },
                    { name: "Topological Confinement", count: 16, icon: "/images/else/topologicalconfinement.png" },
                    { name: "Violet Coral", count: 20, icon: "/images/else/violetcoral.png" }
                ]
            }
        ],
        weapon: {
            name: "Abyss Surges",
            icon: "/images/weapons/abysssurges.png",
            total: [
                { name: "Basic Ring", count: 20, icon: "/images/else/basicring.png" },
                { name: "Improved Ring", count: 20, icon: "/images/else/improvedring.png" },
                { name: "Tailored Ring", count: 12, icon: "/images/else/tailoredring.png" },
                { name: "Cadence Seed", count: 26, icon: "/images/else/cadenceseed.png" },
                { name: "Cadence Bud", count: 26, icon: "/images/else/cadencebud.png" },
                { name: "Cadence Leaf", count: 16, icon: "/images/else/cadenceleaf.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "Crude Ring", count: 6, icon: "/images/else/crudering.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "Basic Ring", count: 6, icon: "/images/else/basicring.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "Basic Ring", count: 10, icon: "/images/else/basicring.png" },
                        { name: "Cadence Seed", count: 10, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "Improved Ring", count: 6, icon: "/images/else/improvedring.png" },
                        { name: "Cadence Bud", count: 6, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "Improved Ring", count: 10, icon: "/images/else/improvedring.png" },
                        { name: "Cadence Bud", count: 10, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "Tailored Ring", count: 6, icon: "/images/else/tailoredring.png" },
                        { name: "Cadence Leaf", count: 6, icon: "/images/else/cadenceleaf.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Youhu is a unique **Glacio Support** and Healer who relies on a "Lucky Draw" mechanic to provide random buffs. She is a specialized buffer for Coordinated Attack characters (like Zhezhi, Yinlin, and Mortefi), boosting their damage by a massive **100% via her Outro Skill**.
        
        Her kit revolves around collecting "Antiques" and converting them into "Auspices" to unleash "Poetic Essence", which heals allies and provides additional effects based on the combination of Auspices collected.`,
        playstyle: "Collect Auspices (via Skill/Attacks) -> Liberation (choose final Antique) -> Poetic Essence -> Outro.",
        pros: [
            "**Massive Buff**: 100% Coordinated Attack DMG Deepen is best-in-class for specific teams.",
            "**Healing**: Provides solid team-wide healing.",
            "**Utility**: Can reduce Vibration Strength (Stun) and break stances.",
            "**Fun Factor**: Unique RNG 'gacha' mechanic in her kit."
        ],
        cons: [
            "**RNG Dependence**: Buffs and effects can be inconsistent due to Lucky Draw.",
            "**Niche**: Best used only with Coordinated Attack DPS.",
            "**Complex Rotation**: Requires managing Antiques and Auspices efficiently."
        ]
    },
    skills: [
        {
            name: "Basic: Frosty Punches",
            type: "Basic",
            description: "Perform up to 4 consecutive attacks dealing Glacio DMG. Hold Normal Attack to enter Fortune Rolling state to restore Frost. When Frost is full, Heavy Attack becomes Frostfall which dashes forward and performs Lucky Draw.",
            attributes: [
                { name: "Stage 1 DMG", value: "23.83%" },
                { name: "Stage 2 DMG", value: "16.05% + 29.81%" },
                { name: "Stage 3 DMG", value: "19.15% + 23.40%" },
                { name: "Stage 4 DMG", value: "58.53%" },
                { name: "Frostfall DMG", value: "7.27% * 6" },
                { name: "Dodge Counter DMG", value: "14.53% * 6" },
                { name: "Mid-air DMG", value: "62.00%" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Scroll Divination",
            type: "Skill",
            description: "Smash scroll at enemy dealing Glacio DMG, restoring HP for all party members, and perform Lucky Draw for an Antique. **Antique Appraisal**: Chime (Vibration Shred), Ruyi (High DMG), Ding (Stance Break), Mask (Pull enemies).",
            attributes: [
                { name: "Skill DMG", value: "78.70%" },
                { name: "Healing", value: "1041 + 39.00% ATK" },
                { name: "Chime DMG", value: "20.65% + 25.07% * 3 + 51.62%" },
                { name: "Ruyi DMG", value: "68.91% + 84.23%" },
                { name: "Ding DMG", value: "14.38% * 6 + 57.49%" },
                { name: "Mask DMG", value: "5.77% * 9 + 22.23%" },
                { name: "Cooldown", value: "15s" },
                { name: "Concerto Regen", value: "10 (each)" }
            ],
            priority: 3
        },
        {
            name: "Forte Circuit: Poetic Essence",
            type: "Forte",
            description: "At 4 Auspices, hold Basic to deal Glacio DMG and heal team. Bonuses based on Auspice combination: **Free Verse** (4 different) = Vibration Shred, **Antithesis** (1 pair) = +70% DMG, **Double Pun** (2 pairs) = Extra Heal, **Triplet** (3 same) = +175% DMG, **Perfect Rhyme** (4 same) = All effects.",
            attributes: [
                { name: "Poetic Essence DMG", value: "18.72% * 10" },
                { name: "Poetic Essence Heal", value: "1180 + 44.20% ATK" },
                { name: "Double Pun Bonus Heal", value: "694 + 26.00% ATK" },
                { name: "Concerto Regen", value: "20" },
                { name: "Antithesis Bonus", value: "+70% DMG" },
                { name: "Triplet Bonus", value: "+175% DMG" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Fortune's Favor",
            type: "Ultimate",
            description: "Hurl scroll at enemy causing Glacio DMG blast. Four buttons appear allowing you to choose the specific Antique obtained (or random if not selected in time).",
            attributes: [
                { name: "Skill DMG", value: "164.58%" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "100" },
                { name: "Concerto Regen", value: "20" },
                { name: "Effect", value: "Choose Antique" }
            ],
            priority: 2
        },
        {
            name: "Intro: Scroll of Wonders",
            type: "Intro",
            description: "Toss out the scroll and perform Lucky Draw. Grants 15% Glacio DMG Bonus for 14s via Inherent Skill.",
            attributes: [
                { name: "Skill DMG", value: "45.00% + 55.00%" },
                { name: "Concerto Regen", value: "10" },
                { name: "Glacio DMG Bonus", value: "+15% for 14s" }
            ],
            priority: 1
        },
        {
            name: "Outro: Timeless Classics",
            type: "Outro",
            description: "The incoming Resonator has their Coordinated Attack DMG Amplified by 100% for 28s. Best-in-class buff for Coordinated Attack characters.",
            attributes: [
                { name: "Coord. ATK Amp", value: "100%" },
                { name: "Duration", value: "28s" }
            ],
            priority: 0
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "10% chance for Immunity after Lucky Draw." },
        { node: "S2", name: "Sequence Node 2", description: "Doubles the DMG bonus of Auspice combinations (Antithesis, Triplet, Perfect Rhyme)." },
        { node: "S3", name: "Sequence Node 3", description: "ATK increased by **20%**." },
        { node: "S4", name: "Sequence Node 4", description: "20% chance for Skill to not enter cooldown." },
        { node: "S5", name: "Sequence Node 5", description: "Intro Skill increases **Crit Rate by 15%**." },
        { node: "S6", name: "Sequence Node 6", description: "Antique Appraisal grants 'Sky Blue' stacks (Crit DMG +15% per stack)." }
    ],
    rotation: [
        "1. **Intro**: Enter field (get Antique).",
        "2. **Attack**: Basic Attack (Antique Appraisal).",
        "3. **Skill**: Cast Scroll Divination (get Antique, Heal).",
        "4. **Loop**: Basic/Dodge Counter to collect 3 Auspices.",
        "5. **Liberation**: Cast Fortune's Favor (Choose 4th Auspice).",
        "6. **Forte**: Cast Poetic Essence (Consume Auspices).",
        "7. **Outro**: Swap to Coordinated Attack DPS (e.g., Zhezhi, Yinlin)."
    ],
    builds: {
        weapons: [
            {
                name: "Abyss Surges",
                rank: "Best In Slot",
                rarity: 5,
                description: "Energy Regen and ATK boost for better healing.",
                image: "/images/weapons/abysssurges.png"
            },
            {
                name: "Marcato",
                rank: "Best 4-Star",
                rarity: 4,
                description: "Massive Energy Regen and Concerto restoration.",
                image: "/images/weapons/marcato.png"
            },
            {
                name: "Hollow Mirage",
                rank: "Alternative",
                rarity: 4,
                description: "ATK and DEF stacking.",
                image: "/images/weapons/hollowmirage.png"
            },
            {
                name: "Gauntlets of Night",
                rank: "F2P Support",
                rarity: 3,
                description: "ATK buff on Intro.",
                image: "/images/weapons/gauntletsofnight.png"
            }
        ],
        echoes: [
            {
                set: "Rejuvenating Glow (5pc)",
                mainEcho: "Bell-Borne Geochelone",
                stats: {
                    cost4: ["Healing Bonus", "ATK%"],
                    cost3: ["Energy Regen", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "ATK%", "Flat ATK"]
                },
                description: "Healer / Support Build.",
                recommendation_reason: "Maximizes healing and team buffs.",
                echo_breakdown: {
                    cost4: [{ name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["Healing Bonus", "ATK%"] }],
                    cost3: [
                        { name: "Chasm Guardian", image: "/images/echoes/chasmguardian.png", mainStats: ["Energy Regen"] },
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Whifflenier", image: "/images/echoes/whifflenier.png", mainStats: ["ATK%"] },
                        { name: "Tick Tack", image: "/images/echoes/ticktack.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Healing Bonus", "Crit Rate"],
                    cost3: ["Energy Regen", "Glacio DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit Rate", "ATK%"]
                },
                description: "Sub-DPS / Buffer Build.",
                recommendation_reason: "If healing is sufficient and more buffs are needed.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Healing Bonus", "Crit Rate"] }],
                    cost3: [
                        { name: "Geohide Saurian", image: "/images/echoes/geohidesaurian.png", mainStats: ["Energy Regen"] },
                        { name: "Roseshroom", image: "/images/echoes/roseshroom.png", mainStats: ["Glacio DMG"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen > ATK% > Flat ATK > Healing Bonus"
    },
    teams: [
        {
            name: "Coordinated Attack Team",
            description: "Buffing Zhezhi/Yinlin.",
            members: [
                { name: "Jinhsi", role: "Main DPS" },
                { name: "Zhezhi", role: "Sub DPS" },
                { name: "Youhu", role: "Support" }
            ]
        },
        {
            name: "Double DPS Glacio",
            description: "Buffing Sanhua/Zhezhi.",
            members: [
                { name: "Zhezhi", role: "Main DPS" },
                { name: "Sanhua", role: "Sub DPS" },
                { name: "Youhu", role: "Support" }
            ]
        }
    ]
};
