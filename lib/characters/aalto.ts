import { Character } from "../characterTypes";

export const aalto: Character = {
    id: "aalto",
    name: "Aalto",
    rarity: 4,
    element: "Aero",
    weaponType: "Pistols",
    role: "Hybrid",
    tags: ["Aero DMG", "Mist Mechanism", "Mobility", "Hybrid"],
    tier: {
        overall: "R3",
        tower: "R3",
        wastes: "R3"
    },
    imagePortrait: "/images/characters/AaltoSmall.png", imageIcon: "/images/characters/AaltoSmall.png",
    imageCard: "/images/characters/AaltoLarge.png",
    stats: { hp: 9850, atk: 263, def: 1076 },
    materials: {
        ascension: [
            { name: "Roaring Rock Fist", count: 46, icon: "/images/else/roaringrockfist.png" },
            { name: "Wintry Bell", count: 60, icon: "/images/else/wintrybell.png" },
            { name: "LF Howler Core", count: 4, icon: "/images/else/lfhowlercore.png" },
            { name: "MF Howler Core", count: 12, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 12, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
            { name: "Shell Credit", count: 170000, icon: "/images/else/shellcredit.png" }
        ],
        skills: [
            { name: "LF Howler Core", count: 25, icon: "/images/else/lfhowlercore.png" },
            { name: "MF Howler Core", count: 28, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 40, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 57, icon: "/images/else/ffhowlercore.png" },
            { name: "Impure Phlogiston", count: 25, icon: "/images/else/impurephlogiston.png" },
            { name: "Extracted Phlogiston", count: 28, icon: "/images/else/extractedphlogiston.png" },
            { name: "Refined Phlogiston", count: 55, icon: "/images/else/refinedphlogiston.png" },
            { name: "Flawless Phlogiston", count: 67, icon: "/images/else/flawlessphlogiston.png" },
            { name: "Monument Bell", count: 26, icon: "/images/else/monumentbell.png" },
            { name: "Shell Credit", count: 2030000, icon: "/images/else/shellcredit.png" }
        ],
        ascensionRanks: [
            {
                rank: 1,
                levelRange: "Lv. 20-40",
                materials: [
                    { name: "LF Howler Core", count: 4, icon: "/images/else/lfhowlercore.png" },
                    { name: "Shell Credit", count: 5000, icon: "/images/else/shellcredit.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "MF Howler Core", count: 4, icon: "/images/else/mfhowlercore.png" },
                    { name: "Roaring Rock Fist", count: 3, icon: "/images/else/roaringrockfist.png" },
                    { name: "Wintry Bell", count: 4, icon: "/images/else/wintrybell.png" },
                    { name: "Shell Credit", count: 10000, icon: "/images/else/shellcredit.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Howler Core", count: 8, icon: "/images/else/mfhowlercore.png" },
                    { name: "Roaring Rock Fist", count: 6, icon: "/images/else/roaringrockfist.png" },
                    { name: "Wintry Bell", count: 8, icon: "/images/else/wintrybell.png" },
                    { name: "Shell Credit", count: 15000, icon: "/images/else/shellcredit.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Howler Core", count: 4, icon: "/images/else/hfhowlercore.png" },
                    { name: "Roaring Rock Fist", count: 9, icon: "/images/else/roaringrockfist.png" },
                    { name: "Wintry Bell", count: 12, icon: "/images/else/wintrybell.png" },
                    { name: "Shell Credit", count: 20000, icon: "/images/else/shellcredit.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Howler Core", count: 8, icon: "/images/else/hfhowlercore.png" },
                    { name: "Roaring Rock Fist", count: 12, icon: "/images/else/roaringrockfist.png" },
                    { name: "Wintry Bell", count: 16, icon: "/images/else/wintrybell.png" },
                    { name: "Shell Credit", count: 40000, icon: "/images/else/shellcredit.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
                    { name: "Roaring Rock Fist", count: 16, icon: "/images/else/roaringrockfist.png" },
                    { name: "Wintry Bell", count: 20, icon: "/images/else/wintrybell.png" },
                    { name: "Shell Credit", count: 80000, icon: "/images/else/shellcredit.png" }
                ]
            }
        ],
        weapon: {
            name: "Static Mist",
            icon: "/images/weapons/staticmist.png",
            total: [
                { name: "MF Howler Core", count: 20, icon: "/images/else/mfhowlercore.png" },
                { name: "HF Howler Core", count: 20, icon: "/images/else/hfhowlercore.png" },
                { name: "FF Howler Core", count: 12, icon: "/images/else/ffhowlercore.png" },
                { name: "Impure Phlogiston", count: 26, icon: "/images/else/impurephlogiston.png" },
                { name: "Extracted Phlogiston", count: 26, icon: "/images/else/extractedphlogiston.png" },
                { name: "Refined Phlogiston", count: 16, icon: "/images/else/refinedphlogiston.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Howler Core", count: 6, icon: "/images/else/lfhowlercore.png" },
                        { name: "Impure Phlogiston", count: 6, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Howler Core", count: 6, icon: "/images/else/mfhowlercore.png" },
                        { name: "Impure Phlogiston", count: 6, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Howler Core", count: 10, icon: "/images/else/mfhowlercore.png" },
                        { name: "Impure Phlogiston", count: 10, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Howler Core", count: 6, icon: "/images/else/hfhowlercore.png" },
                        { name: "Extracted Phlogiston", count: 6, icon: "/images/else/extractedphlogiston.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Howler Core", count: 10, icon: "/images/else/hfhowlercore.png" },
                        { name: "Extracted Phlogiston", count: 10, icon: "/images/else/extractedphlogiston.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Howler Core", count: 6, icon: "/images/else/ffhowlercore.png" },
                        { name: "Refined Phlogiston", count: 6, icon: "/images/else/refinedphlogiston.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `**Aalto** is an enigmatic Information Broker known for his elusive nature. He functions as a **Sub-DPS and Support** hybrid, specializing in **Aero DMG amplification** and **taunting enemies** with his Mist Avatars.

            His kit revolves around creating "Mist" and "Gates of Quandary". Shooting through these gates buffs his damage, and dashing through mist increases his speed and generates Mist Drops.
            
            His **Outro Skill** is his key support feature, granting a **23% Aero DMG Deepen** to the next character, making him the premier support for Jiyan and other Aero DPS units.`,
        playstyle: "Aalto's goal is to build Concerto quickly to trigger his Outro buff. \n\n**Rotation**: Skill (Mist Avatar) -> Intro -> Liberation (Gate) -> Skill -> Basic Attacks -> Echo -> Outro.\n\nHe wants to spend minimal field time while maximizing Concerto generation.",
        pros: [
            "**Aero Support**: Unique 23% Aero DMG Deepen Outro.",
            "**Taunt Utility**: Mist Avatar distracts enemies, improving survivability.",
            "**High Mobility**: Mistcloak Dash allows for hit-and-run tactics.",
            "**Concerto Gen**: Generates Concerto efficiently with proper rotation."
        ],
        cons: [
            "**Energy Hungry**: Resonance Liberation has a high cost (150).",
            "**Positioning**: Requires shooting through gates for max personal DMG.",
            "**AoE**: Lack of significant Area of Effect damage."
        ]
    },
    skills: [
        {
            name: "Basic: Half Truths",
            type: "Basic",
            description: "5-shot combo. P4 spreads **Mist** (1.5s). Aimed shots charge for higher DMG.",
            attributes: [
                { name: "Basic P1 DMG", value: "16.00%" },
                { name: "Basic P2 DMG", value: "26.67%" },
                { name: "Basic P3 DMG", value: "24.00% * 2" },
                { name: "Basic P4 DMG", value: "25.34% * 2" },
                { name: "Basic P5 DMG", value: "90.40%" },
                { name: "Charged Shot", value: "40.50%" },
                { name: "Dodge Counter", value: "107.70%" }
            ],
            priority: 4
        },
        {
            name: "Resonance: Shift Trick",
            type: "Skill",
            description: "Cast **Mist** + **Mist Avatar** (taunts, 8s). Avatar fires 6 **Mist Bullets** dealing Aero DMG.",
            attributes: [
                { name: "Mist Missile DMG", value: "30.00%" },
                { name: "Avatar HP", value: "100% of Aalto" },
                { name: "Avatar Duration", value: "8s" },
                { name: "Cooldown", value: "10s" },
                { name: "Concerto Regen", value: "15" }
            ],
            priority: 4
        },
        {
            name: "Forte: Misty Cover",
            type: "Forte",
            description: "**Mist Drops** (max 6): Gained by shooting through Mist. Pass through Mist/Gate → **Mistcloak Dash** (+40% speed). Consumes Drops to fire Missiles. +Stamina regen in Dash (Inherent).",
            attributes: [
                { name: "Mist Missile DMG", value: "30.00%" },
                { name: "Move Speed", value: "+40%" },
                { name: "Max Drops", value: "6" }
            ],
            priority: 3
        },
        {
            name: "Liberation: Flower in the Mist",
            type: "Ultimate",
            description: "Generate **Gate of Quandary** (10s). Bullets through Gate gain +10% ATK. High energy cost.",
            attributes: [
                { name: "Skill DMG", value: "200.00%" },
                { name: "ATK Increase", value: "+10%" },
                { name: "Gate Duration", value: "10s" },
                { name: "Cooldown", value: "20s" },
                { name: "Energy Cost", value: "150" }
            ],
            priority: 2
        },
        {
            name: "Intro: Feint Shot",
            type: "Intro",
            description: "Rapid continuous shooting dealing Aero DMG.",
            attributes: [
                { name: "Skill DMG", value: "33.34% * 3" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Dissolving Mist",
            type: "Outro",
            description: "Grant next character massive **Aero DMG Deepen** buff.",
            attributes: [
                { name: "Aero Deepen", value: "+23%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Trickster's Opening", description: "Resonance Skill Cooldown reduced by 4s." },
        { node: "S2", name: "Mist Error", description: "Mist Avatar inherits 100% more HP. Aalto deals 15% more DMG to taunted targets." },
        { node: "S3", name: "Hazey Transition", description: "Shooting through Gate generates 2 extra bullets dealing 50% DMG." },
        { node: "S4", name: "Blake's Gaze", description: "Mist Bullets DMG +30%. Aalto takes 30% less DMG in Mistcloak Dash." },
        { node: "S5", name: "Lost in Fog", description: "In Mistcloak Dash, Aero DMG Bonus +25% for 6s." },
        { node: "S6", name: "Broker's Secret", description: "Liberation increases Crit Rate by 8%. Heavy Attack through Gate deals +50% DMG." }
    ],
    rotation: [
        "Skill (Mist Avatar)",
        "Intro Skill",
        "Resonance Liberation",
        "Skill (Mist Avatar) (if available)",
        "Basic Attacks (until Concerto full)",
        "Echo Skill",
        "Outro Skill (Swap to Main DPS)"
    ],
    builds: {
        weapons: [
            {
                name: "Static Mist",
                rank: "Best Hybrid",
                rarity: 5,
                description: "Best for Support/Hybrid role. Provides Energy Regen and buffs the next character's ATK.",
                image: "/images/weapons/staticmist.png"
            },
            {
                name: "The Last Dance",
                rank: "Best Personal DMG",
                rarity: 5,
                description: "Carlotta's Signature. Highest raw damage output if playing Aalto as a main DPS.",
                image: "/images/weapons/thelastdance.png"
            },
            {
                name: "Novaburst",
                rank: "Strongest 4-Star",
                rarity: 4,
                description: "High ATK and Crit Rate stat stick. Great for personal damage.",
                image: "/images/weapons/novaburst.png"
            },
            {
                name: "Pistols #26",
                rank: "Alternative",
                rarity: 4,
                description: "Decent accessible option. Buffs ATK when healing or as a stat stick.",
                image: "/images/weapons/pistols26.png"
            }
        ],
        echoes: [
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit Rate", "Crit DMG"],
                    cost3: ["Aero DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit Rate", "Crit DMG", "ATK%"]
                },
                description: "Standard Support set. Heron buffs next character.",
                recommendation_reason: "Ideally suited for Aalto's role as a buffer; the Moonlit set further enhances the next character's damage.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit Rate", "Crit DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Aero DMG"] },
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Snip Snap", image: "/images/echoes/snipsnap.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Sierra Gale (5pc)",
                mainEcho: "Feilian Beringal",
                stats: {
                    cost4: ["Crit Rate", "Crit DMG"],
                    cost3: ["Aero DMG", "Aero DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit Rate", "Crit DMG", "ATK%", "Energy Regen"]
                },
                description: "Personal Damage set if playing as Main DPS.",
                echo_breakdown: {
                    cost4: [{ name: "Feilian Beringal", image: "/images/echoes/feilianberingal.png", mainStats: ["Crit Rate", "Crit DMG"] }],
                    cost3: [
                        { name: "Hoochief", image: "/images/echoes/hoochief.png", mainStats: ["Aero DMG"] },
                        { name: "Chirpuff", image: "/images/echoes/chirpuff.png", mainStats: ["Aero DMG"] }
                    ],
                    cost1: [
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["ATK%"] },
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (145%+) > Crit Rate/DMG > Aero DMG > ATK%"
    },
    teams: [
        {
            name: "Jiyan Hypercarry",
            members: [
                { name: "Jiyan", role: "Main DPS" },
                { name: "Aalto", role: "Sub DPS" },
                { name: "Verina", role: "Healer" }
            ],
            description: "Aalto provides Aero Deepen to Jiyan."
        },
        {
            name: "Mono Aero",
            members: [
                { name: "Jiyan", role: "Main DPS" },
                { name: "Aalto", role: "Sub DPS" },
                { name: "Yangyang", role: "Support" }
            ],
            description: "Full wind team composition."
        }
    ],

};
