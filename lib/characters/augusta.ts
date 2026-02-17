import { Character } from "../characterTypes";

export const augusta: Character = {
    id: "augusta",
    name: "Augusta",
    rarity: 5,
    element: "Electro",
    weaponType: "Broadblade",
    role: "Main DPS",
    tags: ["Time Stop", "Shield", "Heavy Attack", "Electro DMG"],
    profileType: "Versatile",
    potential: "S+",
    tier: {
        overall: "R0",
        tower: "R0",
        wastes: "R0.5"
    },
    imagePortrait: "/images/characters/AugustaSmall.png",
    imageIcon: "/images/characters/AugustaSmall.png",
    imageCard: "/images/characters/AugustaLarge.png",
    stats: {
        hp: 10300,
        atk: 463,
        def: 1112
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT Rate", value: "8%", stat: "critRate", amount: 8 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Tidal Residuum", count: 4, icon: "/images/else/lftidalresiduum.png" },
            { name: "Luminous Calendula", count: 60, icon: "/images/else/luminouscalendula.png" },
            { name: "MF Tidal Residuum", count: 12, icon: "/images/else/mftidalresiduum.png" },
            { name: "HF Tidal Residuum", count: 12, icon: "/images/else/hftidalresiduum.png" },
            { name: "FF Tidal Residuum", count: 4, icon: "/images/else/fftidalresiduum.png" },
            { name: "Blighted Crown of Puppet King", count: 46, icon: "/images/else/blightedcrownofpuppetking.png" }
        ],
        skills: [
            { name: "LF Tidal Residuum", count: 25, icon: "/images/else/lftidalresiduum.png" },
            { name: "MF Tidal Residuum", count: 28, icon: "/images/else/mftidalresiduum.png" },
            { name: "HF Tidal Residuum", count: 40, icon: "/images/else/hftidalresiduum.png" },
            { name: "FF Tidal Residuum", count: 57, icon: "/images/else/fftidalresiduum.png" },
            { name: "Waveworn Residue 210", count: 25, icon: "/images/else/wavewornresidue210.png" },
            { name: "Waveworn Residue 226", count: 28, icon: "/images/else/wavewornresidue226.png" },
            { name: "Waveworn Residue 235", count: 55, icon: "/images/else/wavewornresidue235.png" },
            { name: "Waveworn Residue 239", count: 67, icon: "/images/else/wavewornresidue239.png" },
            { name: "When Irises Bloom", count: 26, icon: "/images/else/whenirisesbloom.png" }
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
                    { name: "Blighted Crown", count: 3, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Luminous Calendula", count: 4, icon: "/images/else/luminouscalendula.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Tidal Residuum", count: 8, icon: "/images/else/mftidalresiduum.png" },
                    { name: "Blighted Crown", count: 6, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Luminous Calendula", count: 8, icon: "/images/else/luminouscalendula.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Tidal Residuum", count: 4, icon: "/images/else/hftidalresiduum.png" },
                    { name: "Blighted Crown", count: 9, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Luminous Calendula", count: 12, icon: "/images/else/luminouscalendula.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Tidal Residuum", count: 8, icon: "/images/else/hftidalresiduum.png" },
                    { name: "Blighted Crown", count: 12, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Luminous Calendula", count: 16, icon: "/images/else/luminouscalendula.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Tidal Residuum", count: 4, icon: "/images/else/fftidalresiduum.png" },
                    { name: "Blighted Crown", count: 16, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Luminous Calendula", count: 20, icon: "/images/else/luminouscalendula.png" }
                ]
            }
        ],
        weapon: {
            name: "Thunderflare Dominion",
            icon: "/images/weapons/thunderflaredominion.png",
            total: [
                { name: "MF Tidal Residuum", count: 20, icon: "/images/else/mftidalresiduum.png" },
                { name: "HF Tidal Residuum", count: 20, icon: "/images/else/hftidalresiduum.png" },
                { name: "FF Tidal Residuum", count: 12, icon: "/images/else/fftidalresiduum.png" },
                { name: "Waveworn Residue 210", count: 26, icon: "/images/else/wavewornresidue210.png" },
                { name: "Waveworn Residue 226", count: 26, icon: "/images/else/wavewornresidue226.png" },
                { name: "Waveworn Residue 235", count: 16, icon: "/images/else/wavewornresidue235.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Tidal Residuum", count: 6, icon: "/images/else/lftidalresiduum.png" },
                        { name: "Waveworn Residue 210", count: 6, icon: "/images/else/wavewornresidue210.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Tidal Residuum", count: 6, icon: "/images/else/mftidalresiduum.png" },
                        { name: "Waveworn Residue 210", count: 6, icon: "/images/else/wavewornresidue210.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Tidal Residuum", count: 10, icon: "/images/else/mftidalresiduum.png" },
                        { name: "Waveworn Residue 210", count: 10, icon: "/images/else/wavewornresidue210.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Tidal Residuum", count: 6, icon: "/images/else/hftidalresiduum.png" },
                        { name: "Waveworn Residue 226", count: 6, icon: "/images/else/wavewornresidue226.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Tidal Residuum", count: 10, icon: "/images/else/hftidalresiduum.png" },
                        { name: "Waveworn Residue 226", count: 10, icon: "/images/else/wavewornresidue226.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Tidal Residuum", count: 6, icon: "/images/else/fftidalresiduum.png" },
                        { name: "Waveworn Residue 235", count: 6, icon: "/images/else/wavewornresidue235.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Augusta is a **5-star Electro Broadblade** and the Ephor of Septimont. She is a top-tier DPS known for her unique **Time Stop** mechanic and high burst damage.
        
        Her kit revolves around building three resources: **Prowess**, **Ascendancy**, and **Majesty**. Mastering the flow between these states allows her to unleash "Sublime is the Sun", a powerful Liberation state that freezes time, allowing her to deal massive damage safely and pause game timers—a massive advantage in Tower of Adversity.`,
        playstyle: "Augusta's rotation is a rhythmic cycle of building resources.\n\n**Rotation**: Intro (Fills Prowess) -> Heavy Attack Combo (Backstep -> Spinslash) -> Skill (Fills Ascendancy) -> Empowered Skill Combo (Strike -> Leap -> Plunge) -> Hold Liberation (Enters Time Stop) -> 9x Sunborne Slashes -> Final Slash -> Outro.",
        pros: [
            "**Time Stop**: Unique mechanic that freezes enemies and timers, maximizing DPS windows.",
            "**High Burst**: Capable of immense single-target and AoE damage.",
            "**Self-Sustain**: Generates shields frequently, enhancing survivability.",
            "**F2P Friendly**: performs well with F2P weapons like Guardian Broadblade."
        ],
        cons: [
            "**Backloaded Damage**: Significant portion of damage comes at the end of her rotation.",
            "**Weak Shields**: Shields are frequent but relatively weak, serving mostly to trigger buffs. Do not trust it."
        ]
    },
    skills: [
        {
            name: "Basic: Hunter's Path",
            type: "Basic",
            description: "4-hit combo. **Heavy - Steelclash**: 23.34%*3. At full Prowess → **Thunderoar: Backstep** (27%) → **Spinslash** (71.28%*3). **Uppercut** (Jump, 90%*2). **Dodge Counter**: 33.70%*2.",
            attributes: [
                { name: "Basic P4", value: "32.51% * 3" },
                { name: "Backstep", value: "27.00%" },
                { name: "Spinslash", value: "71.28% * 3" },
                { name: "Uppercut", value: "90.00% * 2" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Warrior's Blade",
            type: "Skill",
            description: "110%*3 Electro. +10% Ascendancy. 15s CD. **Undying Sunlight** (at full Ascendancy): **Strike** (70%*2) → **Leap** (112%+14%*2) → **Plunge** (43.55%+391.95%, grants **1 Majesty**).",
            attributes: [
                { name: "Base Skill", value: "110.00% * 3" },
                { name: "Strike", value: "70.00% * 2" },
                { name: "Leap", value: "112.00% + 14.00% * 2" },
                { name: "Plunge", value: "43.55% + 391.95%" }
            ],
            priority: 1
        },
        {
            name: "Forte: Call Me By the Sun",
            type: "Forte",
            description: "**Prowess** (max 100): Build via attacks → full enables Enhanced Heavy (Backstep/Spinslash/Uppercut). **Ascendancy** (max 100): +20% from Intro, +10% from Skill, +40% from Ult → full enables Undying Sunlight combo. **Majesty** (max 2): +1 from Plunge, +1 from Outro recipient's Outro → 2 enables Time Stop. **Crown of Wills** (max 1): +15% Electro DMG, gained via Outro. **Inherent**: Shield (350+2.5% HP) on dealing DMG (0.5s CD). Out of combat 4s → restore 1 Majesty + full Crown.",
            attributes: [
                { name: "Max Prowess", value: "100" },
                { name: "Max Ascendancy", value: "100" },
                { name: "Majesty", value: "2 Stacks" },
                { name: "Crown Bonus", value: "+15% Electro" }
            ],
            priority: 3
        },
        {
            name: "Liberation: Sunward Conquest",
            type: "Ultimate",
            description: "**Sword of Eternal Oath** (Tap): 16.59%*2 + 66.36%*3 + 16.59%*2 + 287.56% (Heavy). +40% Ascendancy. 125 Energy. **Sublime is the Sun** (Hold at 2 Majesty, 0 Energy): Enter **Sworn Allegiance** (Time Stop, 7s). 9x **Sunborne** (60%) → **Everbright Protector** (120%+450%+3%*10). Creates **Ruler's Realm** (30s): Intro grants Shield (650+5% HP, 10s).",
            attributes: [
                { name: "Sunborne", value: "60.00% * 9 hits" },
                { name: "Finisher", value: "120% + 450% + 3% * 10" },
                { name: "Energy Cost", value: "125 (Tap) / 0 (Hold)" },
                { name: "Time Stop", value: "7s" }
            ],
            priority: 4
        },
        {
            name: "Intro: Stride of Goldenflare",
            type: "Intro",
            description: "50%*2 Electro DMG. **+100 Prowess** (full). **+20% Ascendancy**.",
            attributes: [
                { name: "Skill DMG", value: "50.00% * 2" },
                { name: "Prowess", value: "+100" },
                { name: "Ascendancy", value: "+20%" }
            ],
            priority: 1
        },
        {
            name: "Outro: Battlesong of the Unyielding",
            type: "Outro",
            description: "Next Resonator: **+15% All-DMG Amplification** (14s, ends on swap). If they cast Outro → Augusta gains **+1 Majesty** and **+1 Crown of Wills** (+15% Electro).",
            attributes: [
                { name: "All Amp", value: "+15%" },
                { name: "Duration", value: "14s" },
                { name: "Majesty", value: "+1 on Outro" },
                { name: "Crown", value: "+15% Electro" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Each stack of Crown of Wills increases **Crit. DMG by 15%**. Max stacks increased to 2. Intro Skill grants 1 stack." },
        { node: "S2", name: "Sequence Node 2", description: "Crown of Wills stacks increase **Crit. Rate by 20%**. Excess Crit Rate (>100%) converts to Crit DMG." },
        { node: "S3", name: "Sequence Node 3", description: "Increases DMG Multipliers for Heavy Attacks, Empowered Skills, and Time Stop attacks by **25%**." },
        { node: "S4", name: "Sequence Node 4", description: "Intro Skill increases **Team ATK by 20%** for 30s." },
        { node: "S5", name: "Sequence Node 5", description: "Shield provided by 'Glory's Favor' increased by **50%**." },
        { node: "S6", name: "Sequence Node 6", description: "Max Crown of Wills stacks increased to 4. Excess Crit Rate (>150%) converts to Crit DMG. Triggering specific Heavy Attacks grants stacks and deals **Thunder Rage** damage." }
    ],
    rotation: [
        "1. **Intro Skill**: Enter to fill Prowess.",
        "2. **Heavy Attack Combo**: Backstep + Spinslash to consume Prowess.",
        "3. **Skill & Liberation**: Use Base Skill and Base Liberation to build Ascendancy.",
        "4. **Empowered Skill**: Perform Strike -> Leap -> Plunge to gain Majesty.",
        "5. **Time Stop**: Hold Liberation (with 2 Majesty) to enter Time Stop.",
        "6. **Punish**: 9x Attacks -> Finisher.",
        "7. **Outro**: Swap to Sub-DPS/Support."
    ],
    builds: {
        weapons: [
            {
                name: "Thunderflare Dominion",
                rank: "Signature",
                rarity: 5,
                description: "Massive Base ATK and provides Heavy Attack DMG bonus and DEF ignore on shields.",
                image: "/images/weapons/thunderflaredominion.png"
            },
            {
                name: "Verdant Summit",
                rank: "Best Alt",
                rarity: 5,
                description: "Jiyan's signature. Excellent stat stick with Heavy Attack DMG bonuses.",
                image: "/images/weapons/verdantsummit.png"
            },
            {
                name: "Ages of Harvest",
                rank: "Alternative",
                rarity: 5,
                description: "Jinhsi's signature. Good for Skill DMG and Crit Rate.",
                image: "/images/weapons/agesofharvest.png"
            },
            {
                name: "Autumntrace",
                rank: "BP Option",
                rarity: 4,
                description: "Battle Pass weapon. Stacks ATK% on Basic/Heavy attacks.",
                image: "/images/weapons/autumntrace.png"
            },
            {
                name: "Guardian Broadblade",
                rank: "F2P",
                rarity: 3,
                description: "Accessible 3-star option with Heavy Attack bonuses.",
                image: "/images/weapons/guardianbroadblade.png"
            }
        ],
        echoes: [
            {
                set: "Crown of Valor (5pc)",
                mainEcho: "The False Sovereign",
                stats: {
                    cost4: ["Crit. DMG", "Crit. Rate"],
                    cost3: ["Electro DMG", "Electro DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Heavy Attack DMG", "ATK%", "Energy Regen"]
                },
                description: "Augusta's best set. Maximizes ATK and Crit DMG while shielded. (Note: Guide suggests mixing 2pc Void Thunder if needed).",
                recommendation_reason: "Provides massive stats for her specific playstyle.",
                echo_breakdown: {
                    cost4: [{ name: "The False Sovereign", image: "/images/echoes/thefalsesovereign.png", mainStats: ["Crit. DMG", "Crit. Rate"] }],
                    cost3: [
                        { name: "Violet-Feathered Heron", image: "/images/echoes/nightmarevioletfeatheredheron.png", mainStats: ["Electro DMG"] },
                        { name: "Flautist", image: "/images/echoes/nightmareelectropredator.png", mainStats: ["Electro DMG"] }
                    ],
                    cost1: [
                        { name: "Glacio Prism", image: "/images/echoes/calcifiedjunrock.png", mainStats: ["ATK%"] },
                        { name: "Fusion Prism", image: "/images/echoes/hurriclaw.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Void Thunder (5pc)",
                mainEcho: "Tempest Mephis",
                stats: {
                    cost4: ["Crit. DMG", "Crit. Rate"],
                    cost3: ["Electro DMG", "Electro DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Heavy Attack DMG", "ATK%", "Energy Regen"]
                },
                description: "Standard Electro set. Good fallback if Crown of Valor is unavailable.",
                echo_breakdown: {
                    cost4: [{ name: "Tempest Mephis", image: "/images/echoes/tempestmephis.png", mainStats: ["Crit. DMG", "Crit. Rate"] }],
                    cost3: [
                        { name: "Violet-Feathered Heron", image: "/images/echoes/nightmarevioletfeatheredheron.png", mainStats: ["Electro DMG"] },
                        { name: "Flautist", image: "/images/echoes/nightmareelectropredator.png", mainStats: ["Electro DMG"] }
                    ],
                    cost1: [
                        { name: "Glacio Prism", image: "/images/echoes/calcifiedjunrock.png", mainStats: ["ATK%"] },
                        { name: "Fusion Prism", image: "/images/echoes/hurriclaw.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate (70%+) > Crit DMG (220%+) > Heavy Attack DMG > ATK%"
    },
    teams: [
        {
            name: "Premium Hypercarry",
            description: "Maximizes Augusta's damage with top-tier supports.",
            members: [
                { name: "Augusta", role: "Main DPS" },
                { name: "Iuno", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "Dual DPS",
            description: "Uses Phrolova to cover downtime and burst heavily.",
            members: [
                { name: "Augusta", role: "Main DPS" },
                { name: "Phrolova", role: "Main DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "F2P Friendly",
            description: "Effective team using accessible units.",
            members: [
                { name: "Augusta", role: "Main DPS" },
                { name: "Mortefi", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        }
    ]
};
