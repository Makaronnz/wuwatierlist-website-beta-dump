import { Character } from "../characterTypes";

export const cartethyia: Character = {
    id: "cartethyia",
    name: "Cartethyia",
    rarity: 5,
    element: "Aero",
    weaponType: "Sword",
    role: "Main DPS",
    tags: ["Aero DMG", "Aero Erosion", "HP Scaler", "Transform"],
    profileType: "Versatile",
    potential: "S+",
    tier: {
        overall: "R0",
        tower: "R0.5",
        wastes: "R1"
    },
    imagePortrait: "/images/characters/CartethyiaSmall.png",
    imageIcon: "/images/characters/CartethyiaSmall.png",
    imageCard: "/images/characters/CartethyiaLarge.png",
    stats: {
        hp: 14800,
        atk: 313,
        def: 611
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT Rate", value: "8%", stat: "critRate", amount: 8 },
        { name: "HP", value: "12%", stat: "hp", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Tidal Residuum", count: 4, icon: "/images/else/lftidalresiduum.png" },
            { name: "Bamboo Iris", count: 60, icon: "/images/else/bambooiris.png" },
            { name: "MF Tidal Residuum", count: 12, icon: "/images/else/mftidalresiduum.png" },
            { name: "HF Tidal Residuum", count: 12, icon: "/images/else/hftidalresiduum.png" },
            { name: "FF Tidal Residuum", count: 4, icon: "/images/else/fftidalresiduum.png" },
            { name: "Unfading Glory", count: 46, icon: "/images/else/unfadingglory.png" }
        ],
        skills: [
            { name: "LF Tidal Residuum", count: 25, icon: "/images/else/lftidalresiduum.png" },
            { name: "MF Tidal Residuum", count: 28, icon: "/images/else/mftidalresiduum.png" },
            { name: "HF Tidal Residuum", count: 40, icon: "/images/else/hftidalresiduum.png" },
            { name: "FF Tidal Residuum", count: 57, icon: "/images/else/fftidalresiduum.png" },
            { name: "Inert Metallic Drip", count: 25, icon: "/images/else/inertmetallicdrip.png" },
            { name: "Reactive Metallic Drip", count: 28, icon: "/images/else/reactivemetallicdrip.png" },
            { name: "Polarized Metallic Drip", count: 55, icon: "/images/else/polarizedmetallicdrip.png" },
            { name: "Heterized Metallic Drip", count: 67, icon: "/images/else/heterizedmetallicdrip.png" },
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
                    { name: "Unfading Glory", count: 3, icon: "/images/else/unfadingglory.png" },
                    { name: "Bamboo Iris", count: 4, icon: "/images/else/bambooiris.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Tidal Residuum", count: 8, icon: "/images/else/mftidalresiduum.png" },
                    { name: "Unfading Glory", count: 6, icon: "/images/else/unfadingglory.png" },
                    { name: "Bamboo Iris", count: 8, icon: "/images/else/bambooiris.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Tidal Residuum", count: 4, icon: "/images/else/hftidalresiduum.png" },
                    { name: "Unfading Glory", count: 9, icon: "/images/else/unfadingglory.png" },
                    { name: "Bamboo Iris", count: 12, icon: "/images/else/bambooiris.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Tidal Residuum", count: 8, icon: "/images/else/hftidalresiduum.png" },
                    { name: "Unfading Glory", count: 12, icon: "/images/else/unfadingglory.png" },
                    { name: "Bamboo Iris", count: 16, icon: "/images/else/bambooiris.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Tidal Residuum", count: 4, icon: "/images/else/fftidalresiduum.png" },
                    { name: "Unfading Glory", count: 16, icon: "/images/else/unfadingglory.png" },
                    { name: "Bamboo Iris", count: 20, icon: "/images/else/bambooiris.png" }
                ]
            }
        ],
        weapon: {
            name: "Defier's Thorn",
            icon: "/images/weapons/defiersthorn.png",
            total: [
                { name: "MF Tidal Residuum", count: 20, icon: "/images/else/mftidalresiduum.png" },
                { name: "HF Tidal Residuum", count: 20, icon: "/images/else/hftidalresiduum.png" },
                { name: "FF Tidal Residuum", count: 12, icon: "/images/else/fftidalresiduum.png" },
                { name: "Inert Metallic Drip", count: 26, icon: "/images/else/inertmetallicdrip.png" },
                { name: "Reactive Metallic Drip", count: 26, icon: "/images/else/reactivemetallicdrip.png" },
                { name: "Polarized Metallic Drip", count: 16, icon: "/images/else/polarizedmetallicdrip.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Tidal Residuum", count: 6, icon: "/images/else/lftidalresiduum.png" },
                        { name: "Inert Metallic Drip", count: 6, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Tidal Residuum", count: 6, icon: "/images/else/mftidalresiduum.png" },
                        { name: "Inert Metallic Drip", count: 6, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Tidal Residuum", count: 10, icon: "/images/else/mftidalresiduum.png" },
                        { name: "Inert Metallic Drip", count: 10, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Tidal Residuum", count: 6, icon: "/images/else/hftidalresiduum.png" },
                        { name: "Reactive Metallic Drip", count: 6, icon: "/images/else/reactivemetallicdrip.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Tidal Residuum", count: 10, icon: "/images/else/hftidalresiduum.png" },
                        { name: "Reactive Metallic Drip", count: 10, icon: "/images/else/reactivemetallicdrip.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Tidal Residuum", count: 6, icon: "/images/else/fftidalresiduum.png" },
                        { name: "Polarized Metallic Drip", count: 6, icon: "/images/else/polarizedmetallicdrip.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Cartethyia is the Wuthering Waves equivalent of a "luxury race car." When fueled by her signature weapon and supported by a specific technical crew (Ciaccona and Chisa), she is absolutely unrivaled. However, without these specific components, she can become a difficult and expensive investment.
        
        She is particularly recommended for players struggling in the **Tower of Adversity** who already own **Ciaccona** and are willing to invest heavily.`,
        playstyle: "Summon Three Swords -> Recall with Mid-Air Attack -> Transform into Fleurdelys (Lib) -> Combo to build Conviction -> Nuke with 2nd Lib.\n\n**Rotation**: Intro -> Basic x3 -> Skill -> Mid-Air Attack (Recall) -> Liberation (Transform) -> [Fleurdelys Combo: Skill 1 -> Mid-Air x3 -> Skill 2 -> Basic 3-5 -> Heavy -> Enhanced Heavy] -> Liberation (Nuke) -> Outro.",
        pros: [
            "**Unmatched Burst Ceiling**: When paired with Ciaccona and Chisa, she has the highest single-instance nuke potential in the game.",
            "**HP Scaling**: scales off HP rather than ATK, making her naturally tankier and more survivable.",
            "**TOA Dominance**: Outstanding performance against single targets and bosses, clearing floors extremely fast.",
            "**Cost Efficiency (Echoes)**: Excellent user of the 4-4-1-1-1 echo setup, where 1-cost HP% echoes provide massive value.",
            "**S3 Revolution**: At S3, her mechanics shift drastically, doubling stack generation and turning her into a one-woman army."
        ],
        cons: [
            "**Gear Dependent**: Performance drops dramatically without her signature weapon. Most swords give ATK, which is useless for her.",
            "**Strict Team Synergy**: Requires Ciaccona (for Arrow Erosion) to deal maximum damage. Average performance without her.",
            "**Weak AoE**: Damage is heavily backloaded into a single nuke, making her inefficient in crowded AoE content (e.g., Whimpering Wastes).",
            "**Complex Rotation**: Managing 3 swords, plunge triggers, and ult form is punishing. Missed timing means wasted nuke damage.",
            "**High Investment**: Requires Signature Weapon + Ciaccona + Chisa to function at peak capacity."
        ]
    },
    skills: [
        {
            name: "Basic: Sword to Carve My Forms",
            type: "Basic",
            description: "4-hit combo (HP scaling). P4 → Aero Erosion + summons **Sword of Divinity**. Heavy → **Sword of Discord**. Mid-air recalls swords to buff Fleurdelys.",
            attributes: [
                { name: "Basic P1 DMG", value: "2.41% HP" },
                { name: "Basic P2 DMG", value: "1.98% + 1.98% + 2.64% HP" },
                { name: "Basic P4 DMG", value: "1.27% * 3 + 3.80% HP" },
                { name: "Heavy Attack", value: "1.05% * 3 + 3.14% HP" },
                { name: "Mid-air 3 Swords", value: "5.68% * 3 HP" },
                { name: "Dodge Counter", value: "3.45% * 4 HP" }
            ],
            priority: 3
        },
        {
            name: "Resonance: Sword to Bear Their Names",
            type: "Skill",
            description: "Launch + plunge dealing Aero DMG. Applies 2 Aero Erosion. Summons **Sword of Virtue** (Interruption Resist).",
            attributes: [
                { name: "Skill DMG", value: "3.47% * 3 + 4.46% HP" },
                { name: "Cooldown", value: "14s" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 2
        },
        {
            name: "Forte: Tempest (Fleurdelys)",
            type: "Forte",
            description: "After Liberation → **Fleurdelys** form (12s). New moveset: 5-hit Basic, 2 Skills, Enhanced Heavy. Builds **Conviction** (max 120) → 2nd Ultimate.",
            attributes: [
                { name: "Fleurdelys P5", value: "3.63% + 14.49% HP" },
                { name: "Enhanced Heavy", value: "3.91% * 2 + 1.96% HP" },
                { name: "Skill 1 DMG", value: "0.94% * 4 + 8.73%" },
                { name: "Skill 2 DMG", value: "0.94% * 2 + 3.54% * 3" }
            ],
            priority: 4
        },
        {
            name: "Liberation: A Knight's Heartfelt Prayers",
            type: "Ultimate",
            description: "Reduce HP to 50% → Transform into **Fleurdelys**. At 120 Conviction → **Blade of Howling Squall**: Massive nuke, consumes Erosion (+20% per stack, max 5). +30% DMG vs 1-3 stacks, +10% per stack above 3 (Inherent). +20% Healing for team (Inherent).",
            attributes: [
                { name: "Nuke DMG", value: "6.60% * 7 HP" },
                { name: "Erosion Amp", value: "+20% per stack (max +100%)" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 3
        },
        {
            name: "Intro: Sword to Mark Tide's Trace",
            type: "Intro",
            description: "Deal Aero DMG + 2 Aero Erosion. Summons Sword of Discord. Chain into P2.",
            attributes: [
                { name: "Skill DMG", value: "1.05% * 3 + 3.14% HP" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Wind's Divine Blessing",
            type: "Outro",
            description: "Amplify teammate Aero DMG vs targets with Negative Status.",
            attributes: [
                { name: "Aero Amp", value: "+17.5%" },
                { name: "Duration", value: "20s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Gain **Zeal** on kill to spread Max Erosion stacks. Fleurdelys gains **+25% Crit DMG** (stackable)." },
        { node: "S2", name: "Sequence Node 2", description: "Liberation increases Erosion stack limit by 3 (Max 6). Basic/Heavy/Intro multipliers increased significantly." },
        { node: "S3", name: "Sequence Node 3", description: "Fleurdelys attacks inflict more Erosion. 2nd Ultimate DMG increased by **100%**." },
        { node: "S4", name: "Sequence Node 4", description: "Team gains **20% All-DMG Bonus** when inflicting Elemental Statuses (Erosion, Havoc Bane, etc.)." },
        { node: "S5", name: "Sequence Node 5", description: "Prevents fatal damage once every 10 mins (Gain Shield). Liberation HP cost reduced to 25%." },
        { node: "S6", name: "Sequence Node 6", description: "2nd Ultimate maxes out Erosion stacks instead of consuming them. +40% DMG vs Eroded targets." }
    ],
    rotation: [
        "1. **Intro**: Enter with Cartethyia (Summons Sword of Discord).",
        "2. **Basic**: Perform Basic Attacks x3 to x4 (Summons Sword of Divinity).",
        "3. **Skill**: Cast Resonance Skill (Summons Sword of Virtue).",
        "4. **Mid-Air**: Perform Mid-Air Attack to recall all swords and buff Fleurdelys.",
        "5. **Liberation**: Transform into **Fleurdelys**.",
        "6. **Combo**: Skill 1 -> Mid-Air x3 -> Skill 2 -> Basic chain -> Heavy -> Enhanced Heavy.",
        "7. **Nuke**: Cast **Blade of Howling Squall** (2nd Liberation) when Conviction is full.",
        "8. **Outro**: Switch out."
    ],
    builds: {
        weapons: [
            {
                name: "Defier's Thorn",
                rank: "Signature",
                rarity: 5,
                description: "Best in Slot. Huge HP% boost and Defense Ignore. Tailor-made for her.",
                image: "/images/weapons/defiersthorn.png"
            },
            {
                name: "Red Spring",
                rank: "5-Star Alt",
                rarity: 5,
                description: "Decent ATK buff (less useful) but Basic Attack bonus helps.",
                image: "/images/weapons/redspring.png"
            },
            {
                name: "Blazing Brilliance",
                rank: "5-Star Alt",
                rarity: 5,
                description: "Good Crit stat stick, passive is okay.",
                image: "/images/weapons/blazingbrilliance.png"
            },
            {
                name: "Unflickering Valor",
                rank: "5-Star Alt",
                rarity: 5,
                description: "Crit Rate and Basic Attack bonuses are solid.",
                image: "/images/weapons/unflickeringvalor.png"
            },
            {
                name: "Guardian Sword",
                rank: "F2P Option",
                rarity: 4,
                description: "The ONLY F2P Sword with HP% main stat. Essential for F2P players.",
                image: "/images/weapons/guardiansword.png"
            }
        ],
        echoes: [
            {
                set: "Windward Pilgrimage (5pc)",
                mainEcho: "Reminiscence: Fleurdelys",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["HP%", "HP%"],
                    cost1: ["HP%", "HP%"],
                    substats: ["Crit. Rate", "Crit. DMG", "HP%", "Basic Attack DMG"]
                },
                description: "The dedicated Erosion DPS set. Provides Aero DMG and Crit Rate.",
                recommendation_reason: "Best for Aero Erosion DPS.",
                echo_breakdown: {
                    cost4: [{ name: "Reminiscence: Fleurdelys", image: "/images/echoes/reminiscencefleurdelys.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["HP%"] },
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["HP%"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["HP%"] },
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["HP%"] }
                    ]
                }
            },
            {
                set: "Gusts of Welkin (5pc)",
                mainEcho: "Reminiscence: Fleurdelys",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Aero DMG", "Aero DMG"],
                    cost1: ["HP%", "HP%"],
                    substats: ["Crit. Rate", "Crit. DMG", "HP%", "Basic Attack DMG"]
                },
                description: "Standard Aero set. Viable alternative if Windward is unavailable.",
                recommendation_reason: "Good backup option.",
                echo_breakdown: {
                    cost4: [{ name: "Reminiscence: Fleurdelys", image: "/images/echoes/reminiscencefleurdelys.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Aero DMG"] },
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Aero DMG"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["HP%"] },
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["HP%"] }
                    ]
                }
            }
        ],
        stats_priority: "HP (to 50k) > Crit Rate/DMG > Basic Attack DMG > Energy Regen"
    },
    teams: [
        {
            name: "Premium Erosion",
            description: "Ciaccona provides Erosion stacks and buffs. Chisa/Rover provides healing and Erosion synergy.",
            members: [
                { name: "Cartethyia", role: "Main DPS" },
                { name: "Ciaccona", role: "Sub DPS" },
                { name: "Chisa", role: "Support" }
            ]
        },
        {
            name: "Non-Premium Team",
            description: "Sanhua buffs Basic Attacks. Aero Rover increases Erosion stack limit.",
            members: [
                { name: "Cartethyia", role: "Main DPS" },
                { name: "Sanhua", role: "Sub DPS" },
                { name: "Rover (Aero)", role: "Support" }
            ]
        }
    ]
};
