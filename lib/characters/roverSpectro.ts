import { Character } from "../characterTypes";

export const roverSpectro: Character = {
    id: "rover-spectro",
    name: "Rover (Spectro)",
    rarity: 5,
    element: "Spectro",
    weaponType: "Sword",
    role: "Sub DPS",
    tags: ["Spectro Frazzle", "Time Stop", "Starter", "Flexible"],
    tier: {
        overall: "R1.5",
        tower: "R1.5",
        wastes: "R1.5"
    },
    imagePortrait: "/images/characters/RoverSmall.png",
    imageIcon: "/images/characters/RoverSmall.png",
    imageCard: "/images/characters/RoverLarge.png",
    stats: {
        hp: 11400,
        atk: 375,
        def: 1368
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "ATK", value: "12%", stat: "atk", amount: 12 },
        { name: "Healing Bonus", value: "12%", stat: "healingBonus", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "Pecok Flower", count: 60, icon: "/images/else/pecokflower.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Mysterious Code", count: 46, icon: "/images/else/mysteriouscode.png" }
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
            { name: "Unwarranted Feather", count: 26, icon: "/images/else/unwarrantedfeather.png" }
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
        overview: `Rover (Spectro) is a versatile **Spectro Sub-DPS/Support** character available to everyone. They excel at applying **Spectro Frazzle** and providing utility through their **Time Stop** Outro Skill.
        
        While they start as a solid Main DPS, they transition well into a Sub-DPS role in late game, supporting characters like **Zani** or **Jinhsi** (via Spectro interaction). Their Outro creates a stasis field, pausing enemies for 3s, which is universally useful.`,
        playstyle: "Intro -> Skill -> Heavy Attack (Fill Forte) -> Enhanced Skill -> Liberation -> Outro (Stasis).",
        pros: [
            "**Time Stop Outro**: Unique and powerful Crowd Control (3s Stasis).",
            "**Spectro Frazzle Application**: Essential for Spectro DPS like Zani.",
            "**Free & Easy**: Full Resonance Chain available for free.",
            "** Flexible**: Can be main DPS early game, Sub-DPS late game."
        ],
        cons: [
            "**Average DMG**: Falls behind premium 5-star DPS units.",
            "**Jack of All Trades**: Master of none compared to specialized buffers/DPS."
        ]
    },
    skills: [
        {
            name: "Basic: Vibration Manifestation",
            type: "Basic",
            description: "4-hit combo (29.75% → 38.25% → 7.65%*5 → 65.45%). **Heavy**: 9.69%*5. **Heavy Resonance** (after P3/Heavy): 38.25%. **Heavy Aftertune** (after Resonance/Dodge): 63.75%. **Dodge Counter**: 98.25%.",
            attributes: [
                { name: "Basic P4", value: "65.45%" },
                { name: "Aftertune", value: "63.75%" },
                { name: "Dodge Counter", value: "98.25%" }
            ],
            priority: 4
        },
        {
            name: "Resonance: Resonating Slashes / Spin",
            type: "Skill",
            description: "**Slashes**: 118.80% Spectro, 6s CD. At 50+ Diminutive Sound → **Resonating Spin** (64.93%*2, applies Shimmer + 2 Frazzle). → **Resonating Echoes** (40% + 80%, +60% from Inherent).",
            attributes: [
                { name: "Slashes", value: "118.80%" },
                { name: "Spin", value: "64.93% * 2" },
                { name: "Echoes", value: "40% + 80%" }
            ],
            priority: 2
        },
        {
            name: "Forte: World in a Grain of Sand",
            type: "Forte",
            description: "**Diminutive Sound** (max 100): Build via Basic/Aftertune/Intro. At 50+ → Resonating Spin. **Shimmer** (9s): Prevents Frazzle decay. **Inherent**: +60% Echoes DMG. +15% ATK after Heavy Resonance (5s).",
            attributes: [
                { name: "Shimmer Duration", value: "9s" },
                { name: "Echoes Buff", value: "+60% DMG" },
                { name: "ATK Buff", value: "+15%" }
            ],
            priority: 1
        },
        {
            name: "Liberation: Echoing Orchestra",
            type: "Ultimate",
            description: "100%+340% Spectro AoE DMG. Applies **6 stacks** of Spectro Frazzle. S4: Heals team 20% ATK/s for 5s.",
            attributes: [
                { name: "Skill DMG", value: "100.00% + 340.00%" },
                { name: "Frazzle", value: "+6 stacks" },
                { name: "Cooldown", value: "20s" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 3
        },
        {
            name: "Intro: Waveshock",
            type: "Intro",
            description: "85% Spectro DMG. Restores Diminutive Sound.",
            attributes: [
                { name: "Skill DMG", value: "85.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 5
        },
        {
            name: "Outro: Instant",
            type: "Outro",
            description: "Generates a **Stasis Field** around the next character, **stopping time** for enemies within range for 3s.",
            attributes: [
                { name: "Effect", value: "Time Stop" },
                { name: "Duration", value: "3s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Crit Rate increased by **5%**." },
        { node: "S2", name: "Sequence Node 2", description: "Spectro DMG Bonus increased by **10%**." },
        { node: "S3", name: "Sequence Node 3", description: "Energy Regen increased by **20%**." },
        { node: "S4", name: "Sequence Node 4", description: "Resonance Liberation heals team for **20%** of Rover's ATK." },
        { node: "S5", name: "Sequence Node 5", description: "Resonance Liberation DMG increased by **40%**." },
        { node: "S6", name: "Sequence Node 6", description: "Resonance Skill reduces target's Spectro RES by **10%**." }
    ],
    rotation: [
        "1. **Intro**: Enter field.",
        "2. **Skill**: Cast Resonating Slashes (or Enhanced if Forte ready).",
        "3. **Combo**: Basic Attacks & Heavy Attack: Aftertune to fill Forte.",
        "4. **Enhanced Skill**: Cast Resonating Spin -> Resonating Echoes.",
        "5. **Liberation**: Cast Echoing Resonance.",
        "6. **Outro**: Swap to Main DPS (Stasis triggers)."
    ],
    builds: {
        weapons: [
            {
                name: "Emerald of Genesis",
                rank: "Best In Slot",
                rarity: 5,
                description: "Energy Regen & ATK buffs perfectly suit Sub-DPS role.",
                image: "/images/weapons/emeraldofgenesis.png"
            },
            {
                name: "Commando of Conviction",
                rank: "4-Star Option",
                rarity: 4,
                description: "ATK buff on Intro.",
                image: "/images/weapons/commandoofconviction.png"
            },
            {
                name: "Sword of Night",
                rank: "F2P Option",
                rarity: 3,
                description: "Basic ATK stat stick.",
                image: "/images/weapons/swordofnight.png"
            }
        ],
        echoes: [
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Spectro DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Support/Sub-DPS Build.",
                recommendation_reason: "Best for buffing the Main DPS while maintaining good burst uptime.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Spectro DMG"] },
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["ATK%"] },
                        { name: "Whifflenier", image: "/images/echoes/whifflenier.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Eternal Radiance (5pc)",
                mainEcho: "Mourning Aix",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Spectro DMG", "Spectro DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "ATK%", "Energy Regen"]
                },
                description: "Main DPS Build.",
                recommendation_reason: "maximize personal Spectro DMG output.",
                echo_breakdown: {
                    cost4: [{ name: "Mourning Aix", image: "/images/echoes/mourningaix.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Spectro DMG"] },
                        { name: "Lightcrusher", image: "/images/echoes/lightcrusher.png", mainStats: ["Spectro DMG"] }
                    ],
                    cost1: [
                        { name: "Tick Tack", image: "/images/echoes/ticktack.png", mainStats: ["ATK%"] },
                        { name: "Snip Snap", image: "/images/echoes/snipsnap.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (130%+) > Crit Rate/DMG > Spectro DMG"
    },
    teams: [
        {
            name: "Spectro Frazzle Team",
            description: "Supporting Zani/Phoebe.",
            members: [
                { name: "Zani", role: "Main DPS" },
                { name: "Rover (Spectro)", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "F2P Starter Team",
            description: "Early game progression.",
            members: [
                { name: "Rover (Spectro)", role: "Main DPS" },
                { name: "Yangyang", role: "Sub DPS" },
                { name: "Baizhi", role: "Support" }
            ]
        }
    ]
};
