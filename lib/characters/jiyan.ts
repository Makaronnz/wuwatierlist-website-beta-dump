import { Character } from "../characterTypes";

export const jiyan: Character = {
    id: "jiyan",
    name: "Jiyan",
    rarity: 5,
    element: "Aero",
    weaponType: "Broadblade",
    role: "Main DPS",
    tags: ["AoE", "Crowd Control", "Heavy Attack DMG", "Parry"],
    profileType: "Specialist",
    potential: "S",
    tier: {
        overall: "R1",
        tower: "R1",
        wastes: "R1"
    },
    imagePortrait: "/images/characters/JiyanSmall.png",
    imageIcon: "/images/characters/JiyanSmall.png",
    imageCard: "/images/characters/JiyanLarge.png",
    stats: {
        hp: 10488,
        atk: 438,
        def: 1186
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT Rate", value: "8%", stat: "critRate", amount: 8 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Howler Core", count: 4, icon: "/images/else/lfhowlercore.png" },
            { name: "Pecok Flower", count: 60, icon: "/images/else/pecokflower.png" },
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
            { name: "Waveworn Residue 210", count: 25, icon: "/images/else/wavewornresidue210.png" },
            { name: "Waveworn Residue 226", count: 28, icon: "/images/else/wavewornresidue226.png" },
            { name: "Waveworn Residue 235", count: 55, icon: "/images/else/wavewornresidue235.png" },
            { name: "Waveworn Residue 239", count: 67, icon: "/images/else/wavewornresidue239.png" },
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
                    { name: "Roaring Rock Fist", count: 3, icon: "/images/else/roaringrockfist.png" },
                    { name: "Pecok Flower", count: 4, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Howler Core", count: 8, icon: "/images/else/mfhowlercore.png" },
                    { name: "Roaring Rock Fist", count: 6, icon: "/images/else/roaringrockfist.png" },
                    { name: "Pecok Flower", count: 8, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Howler Core", count: 4, icon: "/images/else/hfhowlercore.png" },
                    { name: "Roaring Rock Fist", count: 9, icon: "/images/else/roaringrockfist.png" },
                    { name: "Pecok Flower", count: 12, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Howler Core", count: 8, icon: "/images/else/hfhowlercore.png" },
                    { name: "Roaring Rock Fist", count: 12, icon: "/images/else/roaringrockfist.png" },
                    { name: "Pecok Flower", count: 16, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
                    { name: "Roaring Rock Fist", count: 16, icon: "/images/else/roaringrockfist.png" },
                    { name: "Pecok Flower", count: 20, icon: "/images/else/pecokflower.png" }
                ]
            }
        ],
        weapon: {
            name: "Verdant Summit",
            icon: "/images/weapons/verdantsummit.png",
            total: [
                { name: "MF Howler Core", count: 20, icon: "/images/else/mfhowlercore.png" },
                { name: "HF Howler Core", count: 20, icon: "/images/else/hfhowlercore.png" },
                { name: "FF Howler Core", count: 12, icon: "/images/else/ffhowlercore.png" },
                { name: "Waveworn Residue 210", count: 26, icon: "/images/else/wavewornresidue210.png" },
                { name: "Waveworn Residue 226", count: 26, icon: "/images/else/wavewornresidue226.png" },
                { name: "Waveworn Residue 235", count: 16, icon: "/images/else/wavewornresidue235.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Howler Core", count: 6, icon: "/images/else/lfhowlercore.png" },
                        { name: "Waveworn Residue 210", count: 6, icon: "/images/else/wavewornresidue210.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Howler Core", count: 6, icon: "/images/else/mfhowlercore.png" },
                        { name: "Waveworn Residue 210", count: 6, icon: "/images/else/wavewornresidue210.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Howler Core", count: 10, icon: "/images/else/mfhowlercore.png" },
                        { name: "Waveworn Residue 210", count: 10, icon: "/images/else/wavewornresidue210.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Howler Core", count: 6, icon: "/images/else/hfhowlercore.png" },
                        { name: "Waveworn Residue 226", count: 6, icon: "/images/else/wavewornresidue226.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Howler Core", count: 10, icon: "/images/else/hfhowlercore.png" },
                        { name: "Waveworn Residue 226", count: 10, icon: "/images/else/wavewornresidue226.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Howler Core", count: 6, icon: "/images/else/ffhowlercore.png" },
                        { name: "Waveworn Residue 235", count: 6, icon: "/images/else/wavewornresidue235.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Jiyan is a powerful **Aero Broadblade Main DPS** and one of the best AoE damage dealers in the game. He excels at grouping enemies and unleashing sustained heavy attack damage during his **Qingloong Mode** (Resonance Liberation).
        
        His playstyle is straightforward: Build Resonance Energy, activate Liberation to enter Qingloong Mode, and spam Heavy Attacks that summon a massive dragon to sweep the battlefield.`,
        playstyle: "Generate Energy -> Liberation (Qingloong Mode) -> Hold Heavy Attack Spam -> Outro.",
        pros: [
            "**Massive AoE**: His dragon attacks cover a huge area and group small enemies.",
            "**Parry King**: His attacks have many hitboxes, making parrying bosses very easy.",
            "**Simple Rotation**: Very easy to execute his optimal damage combo.",
            "**Crowd Control**: Excellent for clearing waves of mobs in Tower of Adversity."
        ],
        cons: [
            "**Energy Hungry**: Heavily reliant on his Ultimate. Needs ~120-130% Energy Regen.",
            "**Backloaded DMG**: Deals most damage during Ult. Without Ult, he is weak.",
            "**Interruption**: Can be knocked out of air if not careful (though has high interruption resistance)."
        ]
    },
    skills: [
        {
            name: "Basic: Lone Lance",
            type: "Basic",
            description: "5-hit combo dealing Aero DMG. Generates **Resolve** on hit. Heavy Attack variants include **Windborne Strike** (hold) and **Abyssal Slash** (release).",
            attributes: [
                { name: "Basic P1 DMG", value: "36.80%" },
                { name: "Basic P3 DMG", value: "18.30% * 5" },
                { name: "Basic P5 DMG", value: "11.87% * 7 + 77.18% * 2" },
                { name: "Windborne Strike", value: "53.30%" },
                { name: "Abyssal Slash", value: "41.10%" },
                { name: "Dodge Counter", value: "63.30% * 2" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Windqueller",
            type: "Skill",
            description: "Dash forward dealing Aero DMG. Can be cast in air. 7s cooldown. Essential for Energy and gap-closing.",
            attributes: [
                { name: "Skill DMG", value: "53.50% * 4" },
                { name: "Cooldown", value: "7s" },
                { name: "Concerto Regen", value: "16" }
            ],
            priority: 3
        },
        {
            name: "Forte Circuit: Qingloong at War",
            type: "Forte",
            description: "**Resolve** (max 60): 30 Resolve enhances Skill (+20% DMG) or enables **Emerald Storm: Finale**. Inherent: +10% ATK (15s) after Intro, +12% Crit DMG (8s) on hit.",
            attributes: [
                { name: "Emerald Storm: Finale", value: "71.88% * 2 + 215.65%" },
                { name: "Resolve Cost", value: "30" },
                { name: "Max Resolve", value: "60" },
                { name: "Enhanced Skill Bonus", value: "+20% DMG" }
            ],
            priority: 3
        },
        {
            name: "Liberation: Emerald Storm: Prelude",
            type: "Ultimate",
            description: "Enter **Qingloong Mode** (10s). All attacks → **Lance of Qingloong** (3-hit Heavy combo, 8 hits each). Massive AoE + anti-interruption. Can cast **Finale** with 30 Resolve.",
            attributes: [
                { name: "Lance P1 DMG", value: "32.95% * 8" },
                { name: "Lance P2 DMG", value: "30.96% * 8" },
                { name: "Lance P3 DMG", value: "33.58% * 8" },
                { name: "Duration", value: "10s" },
                { name: "Cooldown", value: "16s" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 4
        },
        {
            name: "Intro: Tactical Strike",
            type: "Intro",
            description: "Stab from air dealing Aero DMG. Grants Resolve and triggers +10% ATK (Inherent).",
            attributes: [
                { name: "Skill DMG", value: "100.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Discipline",
            type: "Outro",
            description: "Summon Qingloong to launch Coordinated Attacks when teammates use Heavy Attacks. 8s duration, once per 1s, up to 2 times.",
            attributes: [
                { name: "Coordinated DMG", value: "313.40% ATK" },
                { name: "Duration", value: "8s" },
                { name: "Trigger", value: "1/s, max 2" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Resonance Skill can be used **1 more time**. Reduces Resolve cost." },
        { node: "S2", name: "Sequence Node 2", description: "Intro grants **30 Resolve** and **28% ATK**." },
        { node: "S3", name: "Sequence Node 3", description: "Crit Rate +16%, Crit DMG +32% after casting Skills/Ult." },
        { node: "S4", name: "Sequence Node 4", description: "Ult grants whole team **25% Heavy Attack DMG Bonus**." },
        { node: "S5", name: "Sequence Node 5", description: "Outro DMG increased by 120%. ATK stacking mechanic." },
        { node: "S6", name: "Sequence Node 6", description: "Gain 'Momentum'. Consumed on Ult end for massive **120% multiplier** increase." }
    ],
    rotation: [
        "1. **Supports**: Apply buffs (Mortefi/Verina).",
        "2. **Intro**: Jiyan enters.",
        "3. **Skill**: Use Windqueller x1-2 to gain Energy/Resolve.",
        "4. **Liberation**: Activate immediately when full.",
        "5. **Qingloong Mode**: Hold Attack to spam Lance of Qingloong until mode ends.",
        "6. **Skill**: Use Skill again if off cooldown before switching.",
        "7. **Outro**: Switch out."
    ],
    builds: {
        weapons: [
            {
                name: "Verdant Summit",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Massive Heavy Attack DMG Bonus and Crit DMG. Perfect for him.",
                image: "/images/weapons/verdantsummit.png"
            },
            {
                name: "Ages of Harvest",
                rank: "5-Star Stat Stick",
                rarity: 5,
                description: "Crit Rate and DMG Bonus. Good alternative.",
                image: "/images/weapons/agesofharvest.png"
            },
            {
                name: "Lustrous Razor",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Energy Regen helps rotations. High ATK.",
                image: "/images/weapons/lustrousrazor.png"
            },
            {
                name: "Autumntrace",
                rank: "Battle Pass",
                rarity: 4,
                description: "Crit Rate and ATK stacking. Best 4-star.",
                image: "/images/weapons/autumntrace.png"
            }
        ],
        echoes: [
            {
                set: "Sierra Gale (5pc)",
                mainEcho: "Feilian Beringal",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Aero DMG", "Aero DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "Heavy Attack DMG", "ATK%"]
                },
                description: "Standard Aero set. Best damage output.",
                recommendation_reason: "Best for pure Aero DPS.",
                echo_breakdown: {
                    cost4: [{ name: "Feilian Beringal", image: "/images/echoes/feilianberingal.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Hoochief", image: "/images/echoes/hoochief.png", mainStats: ["Aero DMG"] },
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Aero DMG"] }
                    ],
                    cost1: [
                        { name: "Young Geohide Saurian", image: "/images/echoes/younggeohidesaurian.png", mainStats: ["ATK%"] },
                        { name: "Chirpuff", image: "/images/echoes/chirpuff.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Sierra Gale (2pc) + Lingering Tunes (2pc)",
                mainEcho: "Feilian Beringal",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Aero DMG", "Aero DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "Heavy Attack DMG"]
                },
                description: "Easier to build.",
                recommendation_reason: "Good transitional set.",
                echo_breakdown: {
                    cost4: [{ name: "Feilian Beringal", image: "/images/echoes/feilianberingal.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Hoochief", image: "/images/echoes/hoochief.png", mainStats: ["Aero DMG"] },
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Aero DMG"] }
                    ],
                    cost1: [
                        { name: "Cruisewing", image: "/images/echoes/cruisewing.png", mainStats: ["ATK%"] },
                        { name: "Diamondclaw", image: "/images/echoes/diamondclaw.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (125%+) > Crit Rate/DMG > Heavy Attack DMG > ATK%"
    },
    teams: [
        {
            name: "Hypercarry",
            description: "Mortefi is his best partner.",
            members: [
                { name: "Jiyan", role: "Main DPS" },
                { name: "Mortefi", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        },
        {
            name: "Double Aero",
            description: "Using Aalto for Aero buffs.",
            members: [
                { name: "Jiyan", role: "Main DPS" },
                { name: "Aalto", role: "Sub DPS" },
                { name: "Baizhi", role: "Support" }
            ]
        }
    ]
};
