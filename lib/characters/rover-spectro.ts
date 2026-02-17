import { Character } from "../characterTypes";

export const rover_spectro: Character = {
    id: "rover-spectro",
    name: "Rover (Spectro)",
    rarity: 5,
    element: "Spectro",
    weaponType: "Sword",
    role: "Support",
    tags: ["Spectro Frazzle", "Time Stop", "Free S6", "Healing"],
    tier: {
        overall: "R1.5",
        tower: "R1.5", wastes: "R1.5"
    },
    imagePortrait: "/images/characters/RoverSmall.png",
    imageIcon: "/images/characters/RoverSmall.png",
    imageCard: "/images/characters/RoverLarge.png",
    stats: {
        hp: 11400,
        atk: 375,
        def: 1369
    },
    minorFortes: [
        { name: "Spectro DMG", value: "12%", stat: "element", amount: 12 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Mysterious Code", count: 5, icon: "/images/else/mysteriouscode.png" },
            { name: "Pecok Flower", count: 60, icon: "/images/else/pecokflower.png" },
            { name: "Shell Credit", count: 170000, icon: "/images/else/shellcredit.png" }
        ],
        skills: [
            { name: "LF Whisperin Core", count: 25, icon: "/images/else/lfwhisperincore.png" },
            { name: "MF Whisperin Core", count: 28, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 40, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 57, icon: "/images/else/ffwhisperincore.png" },
            { name: "Inert Metallic Drip", count: 25, icon: "/images/else/inertmetallicdrip.png" },
            { name: "Reactive Metallic Drip", count: 28, icon: "/images/else/reactivemetallicdrip.png" },
            { name: "Polarized Metallic Drip", count: 55, icon: "/images/else/polarizedmetallicdrip.png" },
            { name: "Heterized Metallic Drip", count: 67, icon: "/images/else/heterizedmetallicdrip.png" },
            { name: "Unending Destruction", count: 26, icon: "/images/else/unendingdestruction.png" },
            { name: "Shell Credit", count: 2030000, icon: "/images/else/shellcredit.png" }
        ],
        ascensionRanks: [
            {
                rank: 1,
                levelRange: "Lv. 20-40",
                materials: [
                    { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "MF Whisperin Core", count: 4, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Mysterious Code", count: 3, icon: "/images/else/mysteriouscode.png" },
                    { name: "Pecok Flower", count: 4, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Whisperin Core", count: 8, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Mysterious Code", count: 6, icon: "/images/else/mysteriouscode.png" },
                    { name: "Pecok Flower", count: 8, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Whisperin Core", count: 4, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Mysterious Code", count: 9, icon: "/images/else/mysteriouscode.png" },
                    { name: "Pecok Flower", count: 12, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Whisperin Core", count: 8, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Mysterious Code", count: 12, icon: "/images/else/mysteriouscode.png" },
                    { name: "Pecok Flower", count: 16, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
                    { name: "Mysterious Code", count: 16, icon: "/images/else/mysteriouscode.png" },
                    { name: "Pecok Flower", count: 20, icon: "/images/else/pecokflower.png" }
                ]
            }
        ],
        weapon: {
            name: "Emerald of Genesis",
            icon: "/images/weapons/emeraldofgenesis.png",
            total: [
                { name: "MF Whisperin Core", count: 20, icon: "/images/else/mfwhisperincore.png" },
                { name: "HF Whisperin Core", count: 20, icon: "/images/else/hfwhisperincore.png" },
                { name: "FF Whisperin Core", count: 12, icon: "/images/else/ffwhisperincore.png" },
                { name: "Inert Metallic Drip", count: 26, icon: "/images/else/inertmetallicdrip.png" },
                { name: "Reactive Metallic Drip", count: 26, icon: "/images/else/reactivemetallicdrip.png" },
                { name: "Polarized Metallic Drip", count: 16, icon: "/images/else/polarizedmetallicdrip.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Whisperin Core", count: 6, icon: "/images/else/lfwhisperincore.png" },
                        { name: "Inert Metallic Drip", count: 6, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Whisperin Core", count: 6, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Inert Metallic Drip", count: 6, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Whisperin Core", count: 10, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Inert Metallic Drip", count: 10, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Whisperin Core", count: 6, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Reactive Metallic Drip", count: 6, icon: "/images/else/reactivemetallicdrip.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Whisperin Core", count: 10, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Reactive Metallic Drip", count: 10, icon: "/images/else/reactivemetallicdrip.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Whisperin Core", count: 6, icon: "/images/else/ffwhisperincore.png" },
                        { name: "Polarized Metallic Drip", count: 6, icon: "/images/else/polarizedmetallicdrip.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Spectro Rover is a **5-star Spectro Sword Support**. They specialize in applying **Spectro Frazzle** (DoT) and providing utility via **Time Stop** (Outro) and Healing (S4).
            
            Essential for **Phoebe** teams due to Frazzle application. Can use **Rejuvenating Glow** set due to S4 healing.`,

        playstyle: "**The Frazzler**: \n1. **Strength**: Apply Spectro Frazzle via Ult/Skill.\n2. **Utility**: Ult heals (S4) + Time Stop Outro.\n3. **Support**: Carry Moonlit or Rejuvenating set.",

        pros: [
            "**Spectro Frazzle**: Key for Phoebe/Zani.",
            "**Time Stop**: Outro freezes enemies (3s).",
            "**Healing**: S4 adds sustainability.",
            "**Free S6**: RES Shred at S6."
        ],
        cons: [
            "**Jack of All Trades**: Master of none (except Frazzle application).",
            "**Low DMG**: Without investment.",
            "**Niche**: Mostly for Phoebe teams."
        ]
    },
    skills: [
        {
            name: "Basic: Vibration Manifestation",
            type: "Basic",
            description: "Perform up to 4 consecutive attacks dealing Spectro DMG. Can chain into **Heavy Attack: Resonance** after Stage 3, then **Aftertune** for enhanced follow-up.",
            attributes: [
                { name: "Stage 1 DMG", value: "29.75%" },
                { name: "Stage 2 DMG", value: "38.25%" },
                { name: "Stage 3 DMG", value: "7.65% * 5" },
                { name: "Stage 4 DMG", value: "65.45%" },
                { name: "Heavy Attack DMG", value: "9.69% * 5" },
                { name: "HA: Resonance DMG", value: "38.25%" },
                { name: "HA: Aftertune DMG", value: "63.75%" },
                { name: "Dodge Counter DMG", value: "98.25%" }
            ],
            priority: 3
        },
        {
            name: "Resonance: Resonating Slashes",
            type: "Skill",
            description: "Launch attack forward dealing Spectro DMG. At 50+ Diminutive Sound → **Resonating Spin** (applies 2 Frazzle + Shimmer). Follow with **Resonating Echoes** (2-hit enhanced).",
            attributes: [
                { name: "Slashes DMG", value: "118.80%" },
                { name: "Resonating Spin DMG", value: "64.93% * 2" },
                { name: "Resonating Whirl DMG", value: "20.00%" },
                { name: "Echoes P1 DMG", value: "40.00%" },
                { name: "Echoes P2 DMG", value: "80.00% (+60% Inherent)" },
                { name: "Cooldown", value: "6s" },
                { name: "Shimmer Duration", value: "9s" }
            ],
            priority: 2
        },
        {
            name: "Liberation: Echoing Orchestra",
            type: "Ultimate",
            description: "Channel Spectro energy for massive AoE nuke, applying **6 stacks of Spectro Frazzle**. S4 heals team (20% ATK/sec for 5s).",
            attributes: [
                { name: "Skill DMG", value: "100.00% + 340.00%" },
                { name: "Spectro Frazzle", value: "6 stacks" },
                { name: "S4 Healing", value: "20% ATK/sec for 5s" },
                { name: "Cooldown", value: "20s" },
                { name: "Energy Cost", value: "125" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 4
        },
        {
            name: "Forte: World in a Grain of Sand",
            type: "Forte",
            description: "**Diminutive Sound**: Max 100 points. At 50+, Skill becomes Resonating Spin (2 Frazzle + Shimmer). S6: Resonating Spin/Echoes reduce Spectro RES by 10% for 20s.",
            attributes: [
                { name: "Spin Frazzle Stacks", value: "2" },
                { name: "Shimmer Duration", value: "9s" },
                { name: "S6 Spectro RES Shred", value: "-10% for 20s" },
                { name: "Spin Concerto", value: "20" },
                { name: "Echoes Concerto", value: "8" }
            ],
            priority: 3
        },
        {
            name: "Intro: Waveshock",
            type: "Intro",
            description: "Attack target dealing Spectro DMG. Restores Diminutive Sound.",
            attributes: [
                { name: "Skill DMG", value: "85.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Instant",
            type: "Outro",
            description: "Generate **Stasis** field around next character for 3s, slowing/freezing enemies in place. Provides comfort and safety.",
            attributes: [
                { name: "Stasis Duration", value: "3s" },
                { name: "Effect", value: "Time Stop" }
            ]
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence 1", description: "Skill Crit Rate +15%." },
        { node: "S2", name: "Sequence 2", description: "Spectro DMG +20%." },
        { node: "S3", name: "Sequence 3", description: "Energy Regen +20%." },
        { node: "S4", name: "Sequence 4", description: "Ult heals team (20% ATK/sec for 5s)." },
        { node: "S5", name: "Sequence 5", description: "Ult DMG +40%." },
        { node: "S6", name: "Sequence 6", description: "Skill reduces Spectro RES -10%." }
    ],
    rotation: [
        "1. **Intro**: Damage.",
        "2. **Ult**: Apply Frazzle + Heal.",
        "3. **Skill (Enhanced)**: Apply Frazzle + Shred.",
        "4. **Outro**: Time Stop."
    ],
    builds: {
        weapons: [
            { name: "Blazing Brilliance", rank: "Best 5★", rarity: 5, description: "Crit DMG & Skill Buffs.", image: "/images/weapons/blazingbrilliance.png" },
            { name: "Emerald of Genesis", rank: "Alt 5★", rarity: 5, description: "Crit Rate & Energy.", image: "/images/weapons/emeraldofgenesis.png" },
            { name: "Commando of Conviction", rank: "Best 4★", rarity: 4, description: "ATK Buff on Intro.", image: "/images/weapons/commandoofconviction.png" },
            { name: "Scale: Slasher", rank: "Support", rarity: 4, description: "Energy Restore.", image: "/images/weapons/scaleslasher.png" }
        ],
        echoes: [
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit Rate", "Healing Bonus"],
                    cost3: ["Energy Regen", "Spectro DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen"]
                },
                description: "Standard Support.",
                recommendation_reason: "Best Support.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit Rate", "Healing Bonus"] }],
                    cost3: [
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Spectro DMG"] },
                        { name: "Lightcrusher", image: "/images/echoes/lightcrusher.png", mainStats: ["Spectro DMG"] }
                    ],
                    cost1: [
                        { name: "Spectro Prism", image: "/images/echoes/spectroprism.png", mainStats: ["ATK%"] },
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (140%+) > Crit Rate > ATK%."
    },
    teams: [
        {
            name: "Phoebe Frazzle Team",
            description: "Rover (Spectro) + Phoebe.",
            members: [
                { name: "Phoebe", role: "Main DPS", synergy: "Needs Frazzle." },
                { name: "Rover (Spectro)", role: "Support", synergy: "Applies Frazzle." },
                { name: "Verina", role: "Healer", synergy: "Buffs." }
            ]
        }
    ]
};
