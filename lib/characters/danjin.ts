import { Character } from "../characterTypes";

export const danjin: Character = {
    id: "danjin",
    name: "Danjin",
    rarity: 4,
    element: "Havoc",
    weaponType: "Sword",
    role: "Hybrid",
    tags: ["Havoc DMG", "Self Healing", "High Risk High Reward", "Buffer"],
    tier: {
        overall: "R1.5",
        tower: "R2.5",
        wastes: "R2"
    },
    imagePortrait: "/images/characters/DanjinSmall.png",
    imageIcon: "/images/characters/DanjinSmall.png",
    imageCard: "/images/characters/DanjinLarge.png",
    stats: {
        hp: 9438,
        atk: 263,
        def: 1148
    },
    maxEnergy: 100,
    minorFortes: [
        { name: "Havoc DMG", value: "12%", stat: "elementalDamage", amount: 12 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "Crude Ring", count: 4, icon: "/images/else/crudering.png" },
            { name: "Belle Poppy", count: 60, icon: "/images/else/bellepoppy.png" },
            { name: "Basic Ring", count: 12, icon: "/images/else/basicring.png" },
            { name: "Improved Ring", count: 12, icon: "/images/else/improvedring.png" },
            { name: "Tailored Ring", count: 4, icon: "/images/else/tailoredring.png" },
            { name: "Strife Tacet Core", count: 46, icon: "/images/else/strifetacetcore.png" }
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
            { name: "Unwarranted Feather", count: 26, icon: "/images/else/unwarrantedfeather.png" }
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
                    { name: "Strife Tacet Core", count: 3, icon: "/images/else/strifetacetcore.png" },
                    { name: "Belle Poppy", count: 4, icon: "/images/else/bellepoppy.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "Basic Ring", count: 8, icon: "/images/else/basicring.png" },
                    { name: "Strife Tacet Core", count: 6, icon: "/images/else/strifetacetcore.png" },
                    { name: "Belle Poppy", count: 8, icon: "/images/else/bellepoppy.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "Improved Ring", count: 4, icon: "/images/else/improvedring.png" },
                    { name: "Strife Tacet Core", count: 9, icon: "/images/else/strifetacetcore.png" },
                    { name: "Belle Poppy", count: 12, icon: "/images/else/bellepoppy.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "Improved Ring", count: 8, icon: "/images/else/improvedring.png" },
                    { name: "Strife Tacet Core", count: 12, icon: "/images/else/strifetacetcore.png" },
                    { name: "Belle Poppy", count: 16, icon: "/images/else/bellepoppy.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "Tailored Ring", count: 4, icon: "/images/else/tailoredring.png" },
                    { name: "Strife Tacet Core", count: 16, icon: "/images/else/strifetacetcore.png" },
                    { name: "Belle Poppy", count: 20, icon: "/images/else/bellepoppy.png" }
                ]
            }
        ],
        weapon: {
            name: "Emerald of Genesis",
            icon: "/images/weapons/emeraldofgenesis.png",
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
        overview: `Danjin is a **4-star Havoc Sword Main DPS** characterized by her "High Risk, High Reward" playstyle. She constantly consumes her own HP to cast her Resonance Skill (which has **no cooldown**), dealing massive damage in return.
        
        She relies on filling her "Ruby Blossom" gauge to unleash powerful Heavy Attacks that restore her health. Her Outro skill provides a significant **Havoc DMG Deepen** buff, making her an excellent sub-DPS for Havoc teams (e.g., with Havoc Rover).`,
        playstyle: "Spam Skill combos (consume HP) -> Fill Forte -> Heavy Attack (Heal + DMG) -> Liberation -> Outro (Havoc Buff).",
        pros: [
            "**High DPS**: Exceptional damage output for a 4-star.",
            "**Sustainability**: Self-healing mechanic allows her to survive without a dedicated healer if played perfectly.",
            "**Havoc Support**: Outro grants 23% Havoc DMG Deepen, huge for Havoc teams.",
            "**Fun Gameplay**: Skill-expressive kit with multiple combos."
        ],
        cons: [
            "**Glass Cannon**: Constantly at low HP, making her very vulnerable to one-shots.",
            "**Skill Dependent**: Requires mastering dodge counters and managing HP/Forte carefully.",
            "**High Risk**: Mistakes are punished heavily."
        ]
    },
    skills: [
        {
            name: "Basic: Execution",
            type: "Basic",
            description: "3-hit combo. Can weave with Resonance Skill for combos. Heavy Attack consumes stamina for multi-hit.",
            attributes: [
                { name: "Basic P1 DMG", value: "28.80%" },
                { name: "Basic P2 DMG", value: "29.60%" },
                { name: "Basic P3 DMG", value: "40.00%" },
                { name: "Heavy Attack", value: "18.67% * 3" },
                { name: "Dodge Counter", value: "32.00% * 3" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Crimson Fragment",
            type: "Skill",
            description: "**No Cooldown** (consumes 3% HP). **Crimson Erosion** (after Basic 2): 2 hits, applies **Incinerating Will** (+20% DMG for 12s). **Sanguine Pulse** (after Basic 3): 3 hits.",
            attributes: [
                { name: "Carmine Gleam DMG", value: "19.20% * 2" },
                { name: "Crimson Erosion P1", value: "32.40% * 2" },
                { name: "Crimson Erosion P2", value: "30.00% * 2" },
                { name: "Sanguine Pulse P1", value: "28.20% * 2" },
                { name: "Sanguine Pulse P3", value: "32.40% * 3" },
                { name: "HP Cost", value: "3% per hit" }
            ],
            priority: 4
        },
        {
            name: "Forte Circuit: Serene Vigil",
            type: "Forte",
            description: "**Ruby Blossom** (max 120): 60+ → **Chaoscleave** (heals). 120 → enhanced multipliers (2.4x). +30% Heavy DMG after Sanguine Pulse (Inherent).",
            attributes: [
                { name: "Chaoscleave DMG", value: "30.00% * 7" },
                { name: "Scatterbloom DMG", value: "90%" },
                { name: "Full Chaoscleave", value: "72.00% * 7" },
                { name: "Full Scatterbloom", value: "216.00%" },
                { name: "Healing", value: "~36 HP" },
                { name: "Concerto Regen", value: "50" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Crimson Bloom",
            type: "Ultimate",
            description: "Rapid consecutive slashes (8 hits) + **Scarlet Burst** finisher. Low energy cost.",
            attributes: [
                { name: "Continuous DMG", value: "24.69% * 8" },
                { name: "Scarlet Burst", value: "197.50%" },
                { name: "Cooldown", value: "16s" },
                { name: "Energy Cost", value: "100" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 3
        },
        {
            name: "Intro: Vindication",
            type: "Intro",
            description: "Swift strike dealing Havoc DMG. Can chain into Crimson Erosion.",
            attributes: [
                { name: "Skill DMG", value: "25.00% * 4" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Duality",
            type: "Outro",
            description: "Grant next character massive **Havoc DMG Deepen** buff.",
            attributes: [
                { name: "Havoc Deepen", value: "+23%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Attacking enemies with Incinerating Will increases ATK by **5%** (stacks up to 30%)." },
        { node: "S2", name: "Sequence Node 2", description: "Increases **DMG Bonus** against enemies with Incinerating Will by **20%**." },
        { node: "S3", name: "Sequence Node 3", description: "Resonance Liberation DMG increased by **30%**." },
        { node: "S4", name: "Sequence Node 4", description: "With >60 Ruby Blossom, **Crit Rate increased by 15%**." },
        { node: "S5", name: "Sequence Node 5", description: "Havoc DMG +15%. Additional +15% when HP < 60%." },
        { node: "S6", name: "Sequence Node 6", description: "Heavy Attack Chaoscleave increases **Team ATK by 20%**." }
    ],
    rotation: [
        "1. **Intro**: Enter combat.",
        "2. **Marker**: Skill x2 (Crimson Erosion) to apply 'Incinerating Will' (20% DMG buff).",
        "3. **Build**: Basic 3 -> Skill 3 (Sanguine Pulse) to fill Ruby Blossom.",
        "4. **Forte**: Heavy Attack (Hold) -> Heavy Attack (Tap) for Chaoscleave/Scatterbloom.",
        "5. **Liberation**: Cast Crimson Bloom.",
        "6. **Outro**: Switch to next character (Havoc Rover highly recommended)."
    ],
    builds: {
        weapons: [
            {
                name: "Blazing Brilliance",
                rank: "Best In Slot",
                rarity: 5,
                description: "Changli's Signature. Perfect for Skill-heavy rotation and Crit stats.",
                image: "/images/weapons/blazingbrilliance.png"
            },
            {
                name: "Emerald of Genesis",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Excellent stats. Energy Regen helps with rotation uptime.",
                image: "/images/weapons/emeraldofgenesis.png"
            },
            {
                name: "Commando of Conviction",
                rank: "Best 4-Star",
                rarity: 4,
                description: "High ATK buff on Intro. Ideal for her quickswap playstyle.",
                image: "/images/weapons/commandoofconviction.png"
            },
            {
                name: "Sword of Night",
                rank: "Best F2P",
                rarity: 4,
                description: "Craftable Option. Stacking ATK buff fits her extended field time.",
                image: "/images/weapons/swordofnight.png"
            }
        ],
        echoes: [
            {
                set: "Havoc Eclipse (5pc)",
                mainEcho: "Dreamless",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Havoc DMG", "Havoc DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "ATK%", "Flat ATK", "Heavy Attack DMG"]
                },
                description: "Standard Havoc DPS set. Maximizes personal damage.",
                recommendation_reason: "Best for Main DPS Danjin. Dreamless provides massive burst damage.",
                echo_breakdown: {
                    cost4: [{ name: "Dreamless", image: "/images/echoes/dreamless.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Havoc Dreadmane", image: "/images/echoes/havocdreadmane.png", mainStats: ["Havoc DMG"] },
                        { name: "Tambourinist", image: "/images/echoes/tambourinist.png", mainStats: ["Havoc DMG"] }
                    ],

                    cost1: [
                        { name: "Excarat", image: "/images/echoes/excarat.png", mainStats: ["ATK%"] },
                        { name: "Roseshroom", image: "/images/echoes/roseshroom.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Havoc Eclipse (2pc) + Moonlit Clouds (2pc)",
                mainEcho: "Dreamless",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Havoc DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "ATK%", "Energy Regen"]
                },
                description: "Hybrid Build. Better for quickswap burst damage.",
                recommendation_reason: "Good if transitioning or lacking full set.",
                echo_breakdown: {
                    cost4: [{ name: "Dreamless", image: "/images/echoes/dreamless.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Havoc Dreadmane", image: "/images/echoes/havocdreadmane.png", mainStats: ["Havoc DMG"] },
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Excarat", image: "/images/echoes/excarat.png", mainStats: ["ATK%"] },
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Havoc DMG > Skill/Heavy DMG > ATK%"
    },
    teams: [
        {
            name: "Havoc Duo",
            description: "Pairs with another Havoc DPS to maximize Deepen buffs.",
            members: [
                { name: "Danjin", role: "Main DPS" },
                { name: "Havoc Rover", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        },
        {
            name: "Hypercarry",
            description: "Focuses on boosting Danjin's personal damage.",
            members: [
                { name: "Danjin", role: "Main DPS" },
                { name: "Mortefi", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        }
    ]
};
