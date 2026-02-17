import { Character } from "../characterTypes";

export const baizhi: Character = {
    id: "baizhi",
    name: "Baizhi",
    rarity: 4,
    element: "Glacio",
    weaponType: "Rectifier",
    role: "Support",
    tags: ["Healer", "Buffer", "Revive", "Glacio DMG"],
    tier: {
        overall: "R2.5",
        tower: "R2.5",
        wastes: "R2.5"
    },
    imagePortrait: "/images/characters/BaizhiSmall.png",
    imageIcon: "/images/characters/BaizhiSmall.png",
    imageCard: "/images/characters/BaizhiLarge.png",
    stats: {
        hp: 12812,
        atk: 212,
        def: 1002
    },
    materials: {
        ascension: [
            { name: "Sound-Keeping Tacet Core", count: 46, icon: "/images/else/soundkeepingtacetcore.png" },
            { name: "Lanternberry", count: 60, icon: "/images/else/lanternberry.png" },
            { name: "LF Howler Core", count: 4, icon: "/images/else/lfhowlercore.png" },
            { name: "MF Howler Core", count: 12, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 12, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" }
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
                    { name: "Sound-Keeping Tacet Core", count: 3, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Lanternberry", count: 4, icon: "/images/else/lanternberry.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Howler Core", count: 8, icon: "/images/else/mfhowlercore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 6, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Lanternberry", count: 8, icon: "/images/else/lanternberry.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Howler Core", count: 4, icon: "/images/else/hfhowlercore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 9, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Lanternberry", count: 12, icon: "/images/else/lanternberry.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Howler Core", count: 8, icon: "/images/else/hfhowlercore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 12, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Lanternberry", count: 16, icon: "/images/else/lanternberry.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 16, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Lanternberry", count: 20, icon: "/images/else/lanternberry.png" }
                ]
            }
        ],
        weapon: {
            name: "Variation",
            icon: "/images/weapons/variation.png",
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
    baseStats: {
        hp: 1025,
        atk: 17,
        def: 82
    },
    maxEnergy: 175,
    minorFortes: [
        { name: "HP%", value: "12%", stat: "hp", amount: 12 },
        { name: "Healing Bonus", value: "12%", stat: "healingBonus", amount: 12 }
    ],
    analysis: {
        overview: `Baizhi is a **4-star Glacio Healer** who provides reliable sustain and team-wide buffs. She is the primary free-to-play support option for players who don't have Verina or Shorekeeper.
        
        Her kit features a companion, **You’tan**, who attacks enemies and heals allies. Her **Outro Skill** is a key component, providing a **15% All-Type DMG Deepen** amp to the next character, similar to Verina but single-target focused.
        
        At **S5**, Baizhi gains the unique ability to **revive a downed ally** once every 10 minutes, making her invaluable for challenging content like Tower of Adversity.`,
        playstyle: "Baizhi wants to build Concerto Energy quickly to trigger her Outro. \n\n**Rotation**: Intro -> Basic Attacks (build 4 'Concentration') -> Skill (consume Concentration for energy/healing) -> Liberation -> Echo -> Outro.",
        pros: [
            "**Revive Mechanic**: S5 allows reviving a teammate, a unique utility.",
            "**DMG Amplification**: Outro provides 15% All-Type DMG Deepen.",
            "**Free & Accessible**: Given for free, easy to obtain sequences.",
            "**Flexible**: Can be used in almost any team as a healer/buffer."
        ],
        cons: [
            "**Single-Target Buff**: Outro buff only applies to the next character (unlike Verina).",
            "**Slower Rotation**: Needs more field time than Verina to build Concerto.",
            "**Pick-up Mechanic**: 'Euphonia' buff requires the DPS to walk over a feather, which can be clunky."
        ]
    },
    skills: [
        {
            name: "Basic: Destined Promise",
            type: "Basic",
            description: "Commands You'tan to perform 4 consecutive attacks. Generates **Concentration** stacks on hit (max 4).",
            attributes: [
                { name: "Basic P1 DMG", value: "32.94%" },
                { name: "Basic P2 DMG", value: "39.52%" },
                { name: "Basic P3 DMG", value: "6.59% * 7" },
                { name: "Basic P4 DMG", value: "39.52%" },
                { name: "Heavy Attack", value: "24.58%" },
                { name: "Dodge Counter", value: "89.86%" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Emergency Plan",
            type: "Skill",
            description: "Calls You'tan to attack and **heal the entire team**. Consumes Concentration for extra Concerto Energy. Generates **Euphonia** (15% ATK buff pick-up for 20s).",
            attributes: [
                { name: "Skill DMG", value: "8.02%" },
                { name: "Healing", value: "575 + 2.90% HP" },
                { name: "Cooldown", value: "16s" },
                { name: "Concerto Regen", value: "10 (+8/Conc)" }
            ],
            priority: 3
        },
        {
            name: "Forte Circuit: Cycle of Life",
            type: "Forte",
            description: "**Concentration** (max 4): Built by Basics, consumed by Skill/Heavy for healing ticks. +0.25% HP heal per Heavy hit (Inherent).",
            attributes: [
                { name: "Concentration Healing", value: "32 + 0.16% HP / 2s" },
                { name: "Heavy Conc. Energy", value: "4" },
                { name: "Skill Conc. Energy", value: "8" },
                { name: "Heavy Res. Energy", value: "2.5 per Conc" }
            ],
            priority: 1
        },
        {
            name: "Liberation: Momentary Union",
            type: "Ultimate",
            description: "Heals team and summons 4 **Remnant Entities** (6 at S4) that attack/heal periodically for 30s. Follows active character.",
            attributes: [
                { name: "Initial Healing", value: "310 + 1.26% HP" },
                { name: "Entity DMG", value: "2.05%" },
                { name: "Entity Healing", value: "349 + 1.42% HP / 2.5s" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "175" }
            ],
            priority: 4
        },
        {
            name: "Intro: Overflowing Frost",
            type: "Intro",
            description: "Plunging attack dealing Glacio DMG and healing team.",
            attributes: [
                { name: "Skill DMG", value: "40.00%" },
                { name: "Healing", value: "75 + 0.38% HP" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Rejuvenating Flow",
            type: "Outro",
            description: "Heals next character periodically and grants damage amplification.",
            attributes: [
                { name: "Healing", value: "1.54% HP / 3s for 30s" },
                { name: "DMG Deepen", value: "+15% All-Type" },
                { name: "Buff Duration", value: "6s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Complex Simplicity", description: "Resonance Skill restores extra **Resonance Energy** based on Concentration consumed." },
        { node: "S2", name: "Silent Tundra", description: "Resonance Skill increases Baizhi's **Glacio DMG** and **Healing** by 15% if 4 Concentration used." },
        { node: "S3", name: "Verdant Growth", description: "Intro Skill increases Baizhi's **Max HP by 12%** for 10s." },
        { node: "S4", name: "Eternal Verity", description: "Liberation Entities count increased by 2. Healing multiplier increased by 20%." },
        { node: "S5", name: "A Wish Answered", description: "**Revive**: If a team member is downed, immediately revive them to **100% HP**. Cooldown: 10 mins." },
        { node: "S6", name: "Seeker's Devotion", description: "Euphonia (Skill pick-up) now increases **Glacio DMG by 12%** for all nearby characters." }
    ],
    rotation: [
        "1. **Intro Skill**",
        "2. **Basic Attacks** (x4 to fill Concentration)",
        "3. **Skill** (Consume Concentration, spawn Euphonia)",
        "4. **Liberation** (If available)",
        "5. **Echo Skill** (Bell-Borne Geochelone)",
        "6. **Outro Skill** (Swap to DPS)"
    ],
    builds: {
        weapons: [
            {
                name: "Stellar Symphony",
                rank: "Signature (Shorekeeper)",
                rarity: 5,
                description: "Best stat stick for HP and Energy Regen. Passive buffs team ATK.",
                image: "/images/weapons/stellarsymphony.png"
            },
            {
                name: "Variation",
                rank: "Best 4-Star",
                rarity: 4,
                description: "Best 4-star option. Massive Concerto Energy generation allows for faster rotations.",
                image: "/images/weapons/variation.png"
            },
            {
                name: "Comet Flare",
                rank: "F2P Option",
                rarity: 4,
                description: "Craftable option. Provides Healing Bonus stacks.",
                image: "/images/weapons/cometflare.png"
            },
            {
                name: "Rectifier of Voyager",
                rank: "Utility",
                rarity: 3,
                description: "Restores Resonance Energy. Good budget option if struggling with Energy.",
                image: "/images/weapons/rectifierofvoyager.png"
            }
        ],
        echoes: [
            {
                set: "Rejuvenating Glow (5pc)",
                mainEcho: "Bell-Borne Geochelone",
                stats: {
                    cost4: ["Healing Bonus", "HP%"],
                    cost3: ["Energy Regen", "HP%"],
                    cost1: ["HP%", "HP%"],
                    substats: ["Energy Regen", "HP%", "Flat HP"]
                },
                description: "Standard Healer set. Buffs team ATK by 15% on heal.",
                recommendation_reason: "Maximizes healing output and provides team-wide ATK buff.",
                echo_breakdown: {
                    cost4: [{ name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["Healing Bonus", "HP%"] }],
                    cost3: [
                        { name: "Chirpuff", image: "/images/echoes/chirpuff.png", mainStats: ["Energy Regen"] },
                        { name: "Cruisewing", image: "/images/echoes/cruisewing.png", mainStats: ["HP%"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["HP%"] },
                        { name: "Snip Snap", image: "/images/echoes/snipsnap.png", mainStats: ["HP%"] }
                    ]
                }
            },
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Bell-Borne Geochelone",
                stats: {
                    cost4: ["Healing Bonus", "HP%"],
                    cost3: ["Energy Regen", "HP%"],
                    cost1: ["HP%", "HP%"],
                    substats: ["Energy Regen", "HP%", "Flat HP"]
                },
                description: "Buffer set. Use this if another teammate (e.g., Verina) is already holding Rejuvenating Glow.",
                echo_breakdown: {
                    cost4: [{ name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["Healing Bonus", "HP%"] }],
                    cost3: [
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["Energy Regen"] },
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["HP%"] }
                    ],
                    cost1: [
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["HP%"] },
                        { name: "Diamondclaw", image: "/images/echoes/diamondclaw.png", mainStats: ["HP%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (220%+) > HP% > Flat HP"
    },
    teams: [
        {
            name: "F2P Starter Team",
            description: "Basic team composition given at the start of the game.",
            members: [
                { name: "Rover (Spectro)", role: "Main DPS" },
                { name: "Yangyang", role: "Sub DPS" },
                { name: "Baizhi", role: "Support" }
            ]
        },
        {
            name: "Flex Support",
            description: "Baizhi serves as a universal healer for any team needing sustain.",
            members: [
                { name: "Any Main DPS", role: "Main DPS" },
                { name: "Any Sub DPS", role: "Sub DPS" },
                { name: "Baizhi", role: "Support" }
            ]
        }
    ]
};
