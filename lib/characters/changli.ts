import { Character } from "../characterTypes";

export const changli: Character = {
    id: "changli",
    name: "Changli",
    rarity: 5,
    element: "Fusion",
    weaponType: "Sword",
    role: "Hybrid",
    tags: ["Fusion DMG", "Skill DMG", "Quickswap", "Hybrid"],
    profileType: "Versatile",
    potential: "B",
    tier: {
        overall: "R1",
        tower: "R1.5",
        wastes: "R1.5"
    },
    imagePortrait: "/images/characters/ChangliSmall.png",
    imageIcon: "/images/characters/ChangliSmall.png",
    imageCard: "/images/characters/ChangliLarge.png",
    stats: {
        hp: 10388,
        atk: 463,
        def: 1100
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT Rate", value: "8%", stat: "critRate", amount: 8 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "Crude Ring", count: 4, icon: "/images/else/crudering.png" },
            { name: "Pavo Plum", count: 60, icon: "/images/else/pavoplum.png" },
            { name: "Basic Ring", count: 12, icon: "/images/else/basicring.png" },
            { name: "Improved Ring", count: 12, icon: "/images/else/improvedring.png" },
            { name: "Tailored Ring", count: 4, icon: "/images/else/tailoredring.png" },
            { name: "Rage Tacet Core", count: 46, icon: "/images/else/ragetacetcore.png" }
        ],
        skills: [
            { name: "Crude Ring", count: 25, icon: "/images/else/crudering.png" },
            { name: "Basic Ring", count: 28, icon: "/images/else/basicring.png" },
            { name: "Improved Ring", count: 40, icon: "/images/else/improvedring.png" },
            { name: "Tailored Ring", count: 57, icon: "/images/else/tailoredring.png" },
            { name: "Inert Metallic Drip", count: 25, icon: "/images/else/inertmetallicdrip.png" },
            { name: "Reactive Metallic Drip", count: 28, icon: "/images/else/reactivemetallicdrip.png" },
            { name: "Polarized Metallic Drip", count: 55, icon: "/images/else/polarizedmetallicdrip.png" },
            { name: "Heterized Metallic Drip", count: 67, icon: "/images/else/heterizedmetallicdrip.png" },
            { name: "Sentinel's Dagger", count: 26, icon: "/images/else/sentinelsdagger.png" }
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
                    { name: "Rage Tacet Core", count: 3, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pavo Plum", count: 4, icon: "/images/else/pavoplum.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "Basic Ring", count: 8, icon: "/images/else/basicring.png" },
                    { name: "Rage Tacet Core", count: 6, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pavo Plum", count: 8, icon: "/images/else/pavoplum.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "Improved Ring", count: 4, icon: "/images/else/improvedring.png" },
                    { name: "Rage Tacet Core", count: 9, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pavo Plum", count: 12, icon: "/images/else/pavoplum.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "Improved Ring", count: 8, icon: "/images/else/improvedring.png" },
                    { name: "Rage Tacet Core", count: 12, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pavo Plum", count: 16, icon: "/images/else/pavoplum.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "Tailored Ring", count: 4, icon: "/images/else/tailoredring.png" },
                    { name: "Rage Tacet Core", count: 16, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pavo Plum", count: 20, icon: "/images/else/pavoplum.png" }
                ]
            }
        ],
        weapon: {
            name: "Blazing Brilliance",
            icon: "/images/weapons/blazingbrilliance.png",
            total: [
                { name: "Basic Ring", count: 20, icon: "/images/else/basicring.png" },
                { name: "Improved Ring", count: 20, icon: "/images/else/improvedring.png" },
                { name: "Tailored Ring", count: 12, icon: "/images/else/tailoredring.png" },
                { name: "Inert Metallic Drip", count: 26, icon: "/images/else/inertmetallicdrip.png" },
                { name: "Reactive Metallic Drip", count: 26, icon: "/images/else/reactivemetallicdrip.png" },
                { name: "Polarized Metallic Drip", count: 16, icon: "/images/else/polarizedmetallicdrip.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "Crude Ring", count: 6, icon: "/images/else/crudering.png" },
                        { name: "Inert Metallic Drip", count: 6, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "Basic Ring", count: 6, icon: "/images/else/basicring.png" },
                        { name: "Inert Metallic Drip", count: 6, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "Basic Ring", count: 10, icon: "/images/else/basicring.png" },
                        { name: "Inert Metallic Drip", count: 10, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "Improved Ring", count: 6, icon: "/images/else/improvedring.png" },
                        { name: "Reactive Metallic Drip", count: 6, icon: "/images/else/reactivemetallicdrip.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "Improved Ring", count: 10, icon: "/images/else/improvedring.png" },
                        { name: "Reactive Metallic Drip", count: 10, icon: "/images/else/reactivemetallicdrip.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "Tailored Ring", count: 6, icon: "/images/else/tailoredring.png" },
                        { name: "Polarized Metallic Drip", count: 6, icon: "/images/else/polarizedmetallicdrip.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Changli is a **Fusion Sword Hybrid** character who specializes in high burst damage and swift rotations. She utilizes a unique "True Sight" mechanic to enhance her attacks and build "Enflamement" stacks for her powerful Forte Heavy Attack, **Flaming Sacrifice**.
        
        She serves as an excellent Dual DPS or Quickswap carry, capable of dealing massive damage in short windows while buffing her teammates' Fusion and Liberation damage via her Outro Skill.`,
        playstyle: "Rotation revolves around generating 4 Enflamement stacks via True Sight attacks (Conquest/Charge) and Liberation, then unleashing Flaming Sacrifice. Use Intro and Skill to enter True Sight quickly.",
        pros: [
            "**High Burst DMG**: Flaming Sacrifice and Liberation deal massive Fusion damage.",
            "**Dual DPS Synergy**: Outro buffs (Fusion + Liberation) make her an excellent partner for other Fusion DPS.",
            "**Mobility**: Consistently dashes towards enemies with True Sight attacks.",
            "**Comfortable**: Her animations are pretty fast and it gives you more control over her.",
            "**Swap-Cancel Friendly**: Many of her animations (Skill, conquest) can be swap-cancelled for higher team DPS."
        ],
        cons: [
            "**Complex Rotations**: Optimal play requires managing stacks and swap-cancels efficiently.",
            "**Vulnerable**: Can be interrupted during some animations if not careful.",
            "**Resource Heavy**: Requires high investment in Skill and Forte levels."
        ]
    },
    skills: [
        {
            name: "Basic: Blazing Enlightenment",
            type: "Basic",
            description: "4-stage attack. Stage 4 enters **True Sight** (12s). Mid-air attacks also available. Heavy Attack launches upward.",
            attributes: [
                { name: "Basic P1 DMG", value: "14.84% * 2" },
                { name: "Basic P2 DMG", value: "17.85% * 2" },
                { name: "Basic P3 DMG", value: "18.34% * 3" },
                { name: "Basic P4 DMG", value: "25.50% + 14.88% * 4" },
                { name: "Dodge Counter DMG", value: "41.57% * 3" },
                { name: "Mid-Air Heavy DMG", value: "62.00%" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Tripartite Flames",
            type: "Skill",
            description: "**Capture** (2 charges, 12s each): Dash + plunge, enters **True Sight**. **Conquest** (ground): Dash slash, grants Enflamement. **Charge** (air): Phoenix dash, grants Enflamement.",
            attributes: [
                { name: "Capture DMG", value: "41.19% * 3 + 82.37%" },
                { name: "Conquest DMG", value: "29.65% * 2 + 41.51% + 47.44%" },
                { name: "Charge DMG", value: "36.56% + 54.84%" },
                { name: "Capture Concerto", value: "14" },
                { name: "Conquest Concerto", value: "7" },
                { name: "Charge Concerto", value: "6" }
            ],
            priority: 4
        },
        {
            name: "Forte Circuit: Flaming Sacrifice",
            type: "Forte",
            description: "At 4 **Enflamement** stacks, Heavy Attack becomes **Flaming Sacrifice** (massive Skill DMG). Ignores 15% DEF (Inherent). -40% DMG taken while casting.",
            attributes: [
                { name: "Flaming Sacrifice DMG", value: "19.74% * 5 + 230.30%" },
                { name: "Max Stacks", value: "4 Enflamement" },
                { name: "DEF Ignore", value: "15%" },
                { name: "DMG Reduction", value: "40%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Radiance of Fealty",
            type: "Ultimate",
            description: "Deal massive Fusion DMG, grant 4 Enflamement instantly, enter **Fiery Feather** (+25% ATK for 10s). Can be cast mid-air.",
            attributes: [
                { name: "Skill DMG", value: "610.00%" },
                { name: "Enflamement", value: "+4 stacks" },
                { name: "Fiery Feather ATK", value: "+25% (10s)" },
                { name: "Cooldown", value: "20s" },
                { name: "Energy Cost", value: "125" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 3
        },
        {
            name: "Intro: Obedience of Rules",
            type: "Intro",
            description: "Attack in mid-air and enter **True Sight** (12s). Essential for starting her rotation.",
            attributes: [
                { name: "Skill DMG", value: "22.38% + 13.06% * 4" },
                { name: "True Sight", value: "12s" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Strategy of Duality",
            type: "Outro",
            description: "Next character gains **Fusion DMG Amplify** and **Liberation DMG Amplify** for 10s.",
            attributes: [
                { name: "Fusion DMG Amp", value: "+20%" },
                { name: "Liberation DMG Amp", value: "+25%" },
                { name: "Duration", value: "10s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Resonance Skill and Flaming Sacrifice DMG +10% and Interruption Resistance increased." },
        { node: "S2", name: "Sequence Node 2", description: "Enflamement increases Crit. Rate by **25%** for 8s." },
        { node: "S3", name: "Sequence Node 3", description: "Resonance Liberation DMG increased by **80%**." },
        { node: "S4", name: "Sequence Node 4", description: "On Intro, all team members' ATK increased by **20%** for 30s." },
        { node: "S5", name: "Sequence Node 5", description: "Flaming Sacrifice Multiplier +50% and DMG +50%." },
        { node: "S6", name: "Sequence Node 6", description: "Skill, Flaming Sacrifice, and Liberation ignore an additional **40% DEF**." }
    ],
    rotation: [
        "1. **Opener**: Liberation (Grant 4 Stacks) -> Flaming Sacrifice.",
        "2. **Intro**: Enter with Intro (Grant True Sight).",
        "3. **Combo**: True Sight: Charge -> Mid-Air Heavy -> Basic 3 -> Basic 4 -> True Sight: Conquest.",
        "4. **Skill Loop**: Skill -> True Sight: Conquest -> Skill -> True Sight: Conquest.",
        "5. **Forte**: Cast **Flaming Sacrifice** at 4 stacks.",
        "6. **Liberation**: Cast Radiance of Fealty -> Flaming Sacrifice.",
        "7. **Outro**: Switch to next character."
    ],
    builds: {
        weapons: [
            {
                name: "Blazing Brilliance",
                rank: "Signature",
                rarity: 5,
                description: "Best in Slot. High Crit DMG and huge Skill DMG bonuses perfect for her kit.",
                image: "/images/weapons/blazingbrilliance.png"
            },
            {
                name: "Emerald of Genesis",
                rank: "5-Star Alt",
                rarity: 5,
                description: "Excellent Crit Rate and Energy Regen. A strong standard banner option.",
                image: "/images/weapons/emeraldofgenesis.png"
            },
            {
                name: "Red Spring",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Strong Basic Attack bonuses that Changli can utilize well.",
                image: "/images/weapons/redspring.png"
            },
            {
                name: "Commando of Conviction",
                rank: "4-Star Best",
                rarity: 4,
                description: "Best 4-star option. Provides ATK% on Intro, fitting her playstyle perfectly.",
                image: "/images/weapons/commandoofconviction.png"
            },
            {
                name: "Lunar Cutter",
                rank: "4-Star Alt",
                rarity: 4,
                description: "Good for short field times, but Commando is generally better.",
                image: "/images/weapons/lunarcutter.png"
            }
        ],
        echoes: [
            {
                set: "Molten Rift (5pc)",
                mainEcho: "Nightmare: Inferno Rider",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Fusion DMG", "Fusion DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Energy Regen", "Skill DMG", "ATK%"]
                },
                description: "The dedicated Fusion set. Grants significant Fusion DMG bonuses.",
                recommendation_reason: "Optimal for maximizing her personal damage.",
                echo_breakdown: {
                    cost4: [{ name: "Nightmare: Inferno Rider", image: "/images/echoes/nightmareinfernorider.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Havoc Dreadmane", image: "/images/echoes/havocdreadmane.png", mainStats: ["Fusion DMG"] },
                        { name: "Violet-Feathered Heron", image: "/images/echoes/violetfeatheredheron.png", mainStats: ["Fusion DMG"] }
                    ],
                    cost1: [
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["ATK%"] },
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Fusion DMG", "Fusion DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Supportive option if running her as a strict Sub-DPS/Buffer.",
                recommendation_reason: "Use only if prioritizing the main carry heavily.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Fusion DMG"] },
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Fusion DMG"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Energy Regen (120%+) > Skill DMG > ATK%"
    },
    teams: [
        {
            name: "High Synergy Mono Fusion",
            description: "Brant and Lupa provide Fusion buffs and benefit from Changli's Outro.",
            members: [
                { name: "Changli", role: "Main DPS" },
                { name: "Brant", role: "Sub DPS" },
                { name: "Lupa", role: "Sub DPS" }
            ]
        },
        {
            name: "Premium Main DPS",
            description: "Zhezhi buffs Skill/Liberation DMG. Shorekeeper provides sustain and buffs.",
            members: [
                { name: "Changli", role: "Main DPS" },
                { name: "Zhezhi", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        }
    ]
};
