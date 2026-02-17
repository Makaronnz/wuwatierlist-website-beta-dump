import { Character } from "../characterTypes";

export const rover_aero: Character = {
    id: "rover-aero",
    name: "Rover (Aero)",
    rarity: 5,
    element: "Aero",
    weaponType: "Sword",
    role: "Support",
    tags: ["Aero Erosion", "Healing", "Mid-air Attack", "Concerto Gen"],
    tier: {
        overall: "R1.5",
        tower: "R1.5",
        wastes: "R1.5"
    },
    imagePortrait: "/images/characters/RoverSmall.png",
    imageIcon: "/images/characters/RoverSmall.png",
    imageCard: "/images/characters/RoverLarge.png",
    stats: {
        hp: 10775,
        atk: 438,
        def: 1137
    },
    minorFortes: [
        { name: "Healing Bonus", value: "12%", stat: "hp", amount: 12 },
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
            { name: "When Irises Bloom", count: 26, icon: "/images/else/whenirisesbloom.png" },
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
        overview: `Aero Rover is a **5-star Aero Sword Support** who focuses on applying **Aero Erosion** (RES Shred/Debuff) and amplifying Aero DMG.
            
            They use **Windstrings** (Forte) to unleash **Cloudburst Dance** (Air) and **Unbound Flow** (Forte Skill), providing healing and damage. Ideally paired with **Cartethyia** or **Iuno** for Aero synergy.`,

        playstyle: "**The Windwalker**: \n1. **Intro**: +20 Windstrings.\n2. **Cloudburst Dance** (Air Basic): Build Windstrings.\n3. **Ult**: Heal + Ground yourself.\n4. **Forte Skill** (Unbound Flow): Big DMG + Concerto. (Swap Cancel Part 1).",

        pros: [
            "**Aero Buffer**: Amplifies team Aero DMG via Weapon/Outro.",
            "**Free S6**: High stats and potential.",
            "**Healing**: Provides sustainability (Ult + Forte S2).",
            "**Mid-air Mobility**: Ignores ground mechanics."
        ],
        cons: [
            "**Niche**: Best only with Cartethyia/Iuno.",
            "**Complex Rotation**: Requires mid-air management.",
            "**Low Personal DMG**: Compared to dedicated DPS."
        ]
    },
    skills: [
        {
            name: "Basic: Wind Cutter",
            type: "Basic",
            description: "4-hit combo. P3 → Heavy Attack Razor Wind available. Mid-air attacks build **Windstrings** (max 120).",
            attributes: [
                { name: "Basic P1 DMG", value: "17.76%" },
                { name: "Basic P2 DMG", value: "21.66% * 2" },
                { name: "Basic P4 DMG", value: "38.59%" },
                { name: "Razor Wind", value: "18.30% + 22.36%" },
                { name: "Mid-air DMG", value: "70.80%" },
                { name: "Dodge Counter", value: "63.09% + 1.00% * 25" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Illusion Breaker",
            type: "Skill",
            description: "**Awakening Gale** (3s CD): Launch into air. **Skyfall Severance** (12s CD): Air skill that converts debuffs to **Aero Erosion**.",
            attributes: [
                { name: "Awakening Gale", value: "33.42% + 50.13%" },
                { name: "Skyfall Severance", value: "11.76% * 3 + 52.89%" },
                { name: "Gale CD", value: "3s" },
                { name: "Severance CD", value: "12s" }
            ],
            priority: 2
        },
        {
            name: "Liberation: Omega Storm",
            type: "Ultimate",
            description: "Eye of Tempest attack dealing Aero DMG and **healing all nearby team members**. Can cast in mid-air. +20% Heal (Inherent).",
            attributes: [
                { name: "Skill DMG", value: "270.00%" },
                { name: "Healing", value: "1100 + 36.67% ATK" },
                { name: "Cooldown", value: "24s" },
                { name: "Energy Cost", value: "150" }
            ],
            priority: 3
        },
        {
            name: "Forte: Cycle of Wind",
            type: "Forte",
            description: "**Windstrings** (max 120): Built by Cloudburst Dance (+25) and Intro (+20). Full gauge → **Unbound Flow** (high DMG). +20% ATK on Intro (Inherent).",
            attributes: [
                { name: "Cloudburst P1", value: "64.79%" },
                { name: "Cloudburst P2", value: "71.16%" },
                { name: "Cloudburst Heal", value: "330 + 11.00% ATK" },
                { name: "Unbound Flow P1", value: "17.26% * 5" },
                { name: "Unbound Flow P2", value: "363.68%" }
            ],
            priority: 4
        },
        {
            name: "Intro: Relentless Squall",
            type: "Intro",
            description: "Swift attack dealing Aero DMG. +20 Windstrings.",
            attributes: [
                { name: "Skill DMG", value: "40.00% + 60.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Storm's Echo",
            type: "Outro",
            description: "Grant **Aeolian Realm** (30s): Increases target's max **Aero Erosion** stacks by 3 on hit (10s).",
            attributes: [
                { name: "Erosion Bonus", value: "+3 stacks" },
                { name: "Duration", value: "30s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence 1", description: "Cloudburst Dance interruption resistance." },
        { node: "S2", name: "Sequence 2", description: "Unbound Flow heals team (20% ATK) over 30s." },
        { node: "S3", name: "Sequence 3", description: "Aero DMG +15%." },
        { node: "S4", name: "Sequence 4", description: "Cloudburst Dance buffs Skill DMG +15%." },
        { node: "S5", name: "Sequence 5", description: "Ult DMG +20%." },
        { node: "S6", name: "Sequence 6", description: "Unbound Flow DMG +30%." }
    ],
    rotation: [
        "1. **Intro**: +20 Windstrings.",
        "2. **Cloudburst Dance (Air Basic)**: Generate Forte.",
        "3. **Ult**: Heal + Land.",
        "4. **Skill**: Re-launch -> Skyfall Severance (Optional).",
        "5. **Unbound Flow P1**: Trigger Forte Skill.",
        "6. **Swap Cancel**: Switch to next character (P2 hits off-field)."
    ],
    builds: {
        weapons: [
            { name: "Bloodpact's Pledge", rank: "Best 5★", rarity: 5, description: "Signature. Team Aero DMG Amplify.", image: "/images/weapons/bloodpactspledge.png" },
            { name: "Emerald of Genesis", rank: "Alt 5★", rarity: 5, description: "Crit Rate & Energy.", image: "/images/weapons/emeraldofgenesis.png" },
            { name: "Commando of Conviction", rank: "Best 4★", rarity: 4, description: "ATK buff.", image: "/images/weapons/commandoofconviction.png" }
        ],
        echoes: [
            {
                set: "Rejuvenating Glow (5pc)",
                mainEcho: "Bell-Borne Geochelone",
                stats: {
                    cost4: ["Healing Bonus", "Crit Gate"],
                    cost3: ["Energy Regen", "Aero DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen (130%+)"]
                },
                description: "Support build. Healing triggers ATK buff.",
                recommendation_reason: "Team Utility.",
                echo_breakdown: {
                    cost4: [{ name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["Healing Bonus"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Aero DMG"] },
                        { name: "Hoochief", image: "/images/echoes/hoochief.png", mainStats: ["Aero DMG"] }
                    ],
                    cost1: [
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] },
                        { name: "Aero Predator", image: "/images/echoes/aeropredator.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (130%+) > Crit Rate/DMG > ATK%."
    },
    teams: [
        {
            name: "Cartethyia Team",
            description: "Rover (Aero) + Cartethyia.",
            members: [
                { name: "Cartethyia", role: "Main DPS", synergy: "Aero Erosion focus." },
                { name: "Rover (Aero)", role: "Support", synergy: "Erosion Stacks + Buffs." },
                { name: "Ciaccona", role: "Sub DPS", synergy: "Concerto." }
            ]
        }
    ]
};
