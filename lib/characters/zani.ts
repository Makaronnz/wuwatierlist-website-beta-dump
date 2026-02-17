import { Character } from "../characterTypes";

export const zani: Character = {
    id: "zani",
    name: "Zani",
    rarity: 5,
    element: "Spectro",
    weaponType: "Gauntlets",
    role: "Main DPS",
    tags: ["Spectro Frazzle", "Parry", "Damage Reduction", "Reset Mechanism"],
    profileType: "Specialist",
    potential: "S",
    tier: {
        overall: "R0",
        tower: "R1",
        wastes: "R1.5"
    },
    imagePortrait: "/images/characters/ZaniSmall.png",
    imageIcon: "/images/characters/ZaniSmall.png",
    imageCard: "/images/characters/ZaniLarge.png",
    stats: {
        hp: 10775,
        atk: 438,
        def: 1137
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "ATK", value: "12%", stat: "atk", amount: 12 },
        { name: "CRIT Rate", value: "8%", stat: "critRate", amount: 8 }
    ],
    materials: {
        ascension: [
            { name: "LF Polygon Core", count: 4, icon: "/images/else/lfpolygoncore.png" },
            { name: "Sword Acorus", count: 60, icon: "/images/else/swordacorus.png" },
            { name: "MF Polygon Core", count: 12, icon: "/images/else/mfpolygoncore.png" },
            { name: "HF Polygon Core", count: 12, icon: "/images/else/hfpolygoncore.png" },
            { name: "FF Polygon Core", count: 4, icon: "/images/else/ffpolygoncore.png" },
            { name: "Platinum Core", count: 46, icon: "/images/else/platinumcore.png" }
        ],
        skills: [
            { name: "LF Polygon Core", count: 25, icon: "/images/else/lfpolygoncore.png" },
            { name: "MF Polygon Core", count: 28, icon: "/images/else/mfpolygoncore.png" },
            { name: "HF Polygon Core", count: 40, icon: "/images/else/hfpolygoncore.png" },
            { name: "FF Polygon Core", count: 57, icon: "/images/else/ffpolygoncore.png" },
            { name: "Cadence Seed", count: 25, icon: "/images/else/cadenceseed.png" },
            { name: "Cadence Bud", count: 28, icon: "/images/else/cadencebud.png" },
            { name: "Cadence Leaf", count: 55, icon: "/images/else/cadenceleaf.png" },
            { name: "Cadence Blossom", count: 67, icon: "/images/else/cadenceblossom.png" },
            { name: "The Netherworld's Stare", count: 26, icon: "/images/else/thenetherworldsstare.png" }
        ],
        ascensionRanks: [
            {
                rank: 1,
                levelRange: "Lv. 20-40",
                materials: [
                    { name: "LF Polygon Core", count: 4, icon: "/images/else/lfpolygoncore.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "MF Polygon Core", count: 4, icon: "/images/else/mfpolygoncore.png" },
                    { name: "Platinum Core", count: 3, icon: "/images/else/platinumcore.png" },
                    { name: "Sword Acorus", count: 4, icon: "/images/else/swordacorus.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Polygon Core", count: 8, icon: "/images/else/mfpolygoncore.png" },
                    { name: "Platinum Core", count: 6, icon: "/images/else/platinumcore.png" },
                    { name: "Sword Acorus", count: 8, icon: "/images/else/swordacorus.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Polygon Core", count: 4, icon: "/images/else/hfpolygoncore.png" },
                    { name: "Platinum Core", count: 9, icon: "/images/else/platinumcore.png" },
                    { name: "Sword Acorus", count: 12, icon: "/images/else/swordacorus.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Polygon Core", count: 8, icon: "/images/else/hfpolygoncore.png" },
                    { name: "Platinum Core", count: 12, icon: "/images/else/platinumcore.png" },
                    { name: "Sword Acorus", count: 16, icon: "/images/else/swordacorus.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Polygon Core", count: 4, icon: "/images/else/ffpolygoncore.png" },
                    { name: "Platinum Core", count: 16, icon: "/images/else/platinumcore.png" },
                    { name: "Sword Acorus", count: 20, icon: "/images/else/swordacorus.png" }
                ]
            }
        ],
        weapon: {
            name: "Blazing Justice",
            icon: "/images/weapons/blazingjustice.png",
            total: [
                { name: "MF Polygon Core", count: 20, icon: "/images/else/mfpolygoncore.png" },
                { name: "HF Polygon Core", count: 20, icon: "/images/else/hfpolygoncore.png" },
                { name: "FF Polygon Core", count: 12, icon: "/images/else/ffpolygoncore.png" },
                { name: "Cadence Seed", count: 26, icon: "/images/else/cadenceseed.png" },
                { name: "Cadence Bud", count: 26, icon: "/images/else/cadencebud.png" },
                { name: "Cadence Leaf", count: 16, icon: "/images/else/cadenceleaf.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Polygon Core", count: 6, icon: "/images/else/lfpolygoncore.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Polygon Core", count: 6, icon: "/images/else/mfpolygoncore.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Polygon Core", count: 10, icon: "/images/else/mfpolygoncore.png" },
                        { name: "Cadence Seed", count: 10, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Polygon Core", count: 6, icon: "/images/else/hfpolygoncore.png" },
                        { name: "Cadence Bud", count: 6, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Polygon Core", count: 10, icon: "/images/else/hfpolygoncore.png" },
                        { name: "Cadence Bud", count: 10, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Polygon Core", count: 6, icon: "/images/else/ffpolygoncore.png" },
                        { name: "Cadence Leaf", count: 6, icon: "/images/else/cadenceleaf.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Zani is a powerful **Spectro Gauntlets Main DPS** who introduces a unique parry and damage reduction playstyle. Her kit revolves around utilizing "Spectro Frazzle" to charge her "Inferno Mode" (via **Resonance Liberation**), where she unleashes devastating Heavy Attacks.
        
        She excels when paired with a dedicated Spectro Frazzle applicator like Phoebe or Rover (Spectro) to quickly convert Frazzle into **Heliacal Embers** and build up her "Blaze" stacks for maximum damage.`,
        playstyle: "Parry/Skill to build Energy -> Liberation (Inferno Mode) -> Heavy Slash combos -> Finish with 2nd Liberation.",
        pros: [
            "**High Burst Damage**: 'Inferno Mode' deals massive cleave and single-target damage.",
            "**Tankiness**: Built-in parry mechanics and damage reduction make her very durable.",
            "**Engaging Gameplay**: Parry-based combat is rewarding and skill-expressive.",
            "It feels like you are playing Elden Ring."
        ],
        cons: [
            "**Team Restricted**: Highly dependent on Spectro Frazzle teammates (Phoebe/Rover) for optimal performance. Can't fit into any team, she basically does not exist without them.",
            "**Complex Rotation**: Requires managing multiple resources (Redundant Energy, Blaze, Frazzle).",
            "**High Investment**: Scales significantly with signature weapon and specific teammates.",
            "It feels like you are playing Elden Ring."
        ]
    },
    skills: [
        {
            name: "Basic: Routine Negotiation",
            type: "Basic",
            description: "Perform up to 4 consecutive attacks dealing Spectro DMG. After Stage 3, press Normal Attack at the right time for Breakthrough attack. In Inferno Mode, replaced by Heavy Slashes.",
            attributes: [
                { name: "Stage 1 DMG", value: "29.60%" },
                { name: "Stage 2 DMG", value: "40.00%" },
                { name: "Stage 3 DMG", value: "21.34% * 3" },
                { name: "Stage 4 DMG", value: "34.00% * 4" },
                { name: "Breakthrough DMG", value: "30.94% + 8.84% * 7" },
                { name: "Heavy Attack DMG", value: "20.66% * 4" },
                { name: "Dodge Counter DMG", value: "37.34% * 3" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Restless Watch",
            type: "Skill",
            description: "**Standard Defense Protocol**: Attack dealing Spectro DMG and enter block stance. Reduces damage by 100% when attacked, triggers Pinpoint Strike. **Crisis Response Protocol**: When Redundant Energy is full, hold to enter Ready Stance (immune to interruption), release to cast Targeted Action or parry for Forcible Riposte.",
            attributes: [
                { name: "Standard Defense DMG", value: "32.16%" },
                { name: "Pinpoint Strike DMG", value: "30.68% + 61.36%" },
                { name: "Targeted Action DMG", value: "43.35% + 14.45% + 86.70%" },
                { name: "Forcible Riposte DMG", value: "43.35% + 14.45% + 86.70%" },
                { name: "Cooldown", value: "5s" },
                { name: "DMG Reduction", value: "30% for 2s" },
                { name: "Sunburst Duration", value: "14s" },
                { name: "Sunburst Buff", value: "Spectro Frazzle DMG +20%" }
            ],
            priority: 3
        },
        {
            name: "Forte Circuit: There Will Be A Light",
            type: "Forte",
            description: "**Heliacal Ember**: Converts Spectro Frazzle stacks to Heliacal Ember, granting Blaze (5 per stack). Cap: 60 stacks. **Scorching Light** (Inferno Mode): Heavy Slash attacks that deal both Heavy ATK and Spectro Frazzle DMG.",
            attributes: [
                { name: "Heavy Slash - Daybreak", value: "100.00%" },
                { name: "Heavy Slash - Dawning", value: "213.30%" },
                { name: "Heavy Slash - Nightfall", value: "68.00% + 132.00%" },
                { name: "Nightfall Bonus/Blaze", value: "+5.00% per Blaze" },
                { name: "Heavy Slash - Lightsmash", value: "213.30%" },
                { name: "Max Redundant Energy", value: "100" },
                { name: "Max Blaze (Normal)", value: "100" },
                { name: "Max Blaze (Inferno)", value: "150" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Between Dawn and Dusk",
            type: "Ultimate",
            description: "**Rekindle**: Deal Spectro DMG and enter Inferno Mode. Max Blaze increases to 150, grants 50 Blaze. Basic Attack DMG Multiplier +25%. **The Last Stand**: Available when Blaze <30 or after 8s in Inferno Mode. Deals massive Spectro DMG and ends Inferno Mode.",
            attributes: [
                { name: "Rekindle DMG", value: "160.22%" },
                { name: "Judgment Day DMG", value: "96.13% + 544.73%" },
                { name: "Basic ATK Multiplier+", value: "25%" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "125" },
                { name: "Inferno Mode Duration", value: "20s" }
            ],
            priority: 3
        },
        {
            name: "Intro: Immediate Execution",
            type: "Intro",
            description: "Attack the target dealing Spectro DMG. Grants 12% Spectro DMG Bonus for 14s via Inherent Skill.",
            attributes: [
                { name: "Skill DMG", value: "12.20% * 5 + 40.64%" },
                { name: "Spectro DMG Bonus", value: "+12% for 14s" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Beacon For the Future",
            type: "Outro",
            description: "Attack dealing Spectro DMG equal to 150% ATK, removing all Heliacal Ember stacks. Each stack increases DMG by 10%. Amplifies team's Spectro DMG to Heliacal Ember targets by 20% for 20s.",
            attributes: [
                { name: "Base DMG", value: "150% ATK" },
                { name: "DMG Bonus/Stack", value: "+10% per Heliacal Ember" },
                { name: "Team Spectro Amp", value: "+20% for 20s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Grants 50% Spectro DMG Bonus after specific skills. Immunity during Heavy Slash - Nightfall." },
        { node: "S2", name: "Sequence Node 2", description: "Crit Rate +20%. Targeted Action/Forcible Riposte DMG +80%." },
        { node: "S3", name: "Sequence Node 3", description: "Increases 'The Last Stand' DMG based on Blaze consumed (up to 1200%)." },
        { node: "S4", name: "Sequence Node 4", description: "Intro Skill grants 20% Team ATK Bonus." },
        { node: "S5", name: "Sequence Node 5", description: "'Rekindle' (Initial Liberation) DMG increased by 120%." },
        { node: "S6", name: "Sequence Node 6", description: "Heavy Slash multipliers increased by 40%. 'cheat death' mechanic added in Inferno Mode." }
    ],
    rotation: [
        "1. **Intro**: Enter field (Buff Spectro DMG).",
        "2. **Skill**: Build Redundant Energy (Parry if possible).",
        "3. **Transformed Skill**: Cast Crisis Response Protocol (Enter Sunburst Mode).",
        "4. **Liberation**: Cast Between Dawn and Dusk (Enter Inferno Mode).",
        "5. **Combo**: Perform Heavy Slash combos to consume Blaze.",
        "6. **Finisher**: Cast Liberation again (The Last Stand).",
        "7. **Outro**: Swap to Frazzle Applicator (Phoebe/Rover)."
    ],
    builds: {
        weapons: [
            {
                name: "Blazing Justice",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Massive Crit DMG, DEF Ignore, and Frazzle Amplify.",
                image: "/images/weapons/blazingjustice.png"
            },
            {
                name: "Tragicomedy",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Heavy Attack DMG bonus fits her kit well.",
                image: "/images/weapons/tragicomedy.png"
            },
            {
                name: "Verity's Handle",
                rank: "Stat Stick",
                rarity: 5,
                description: "Good stats but passive is less optimal.",
                image: "/images/weapons/verityshandle.png"
            },
            {
                name: "Moongazer's Sigil",
                rank: "Stat Stick",
                rarity: 5,
                description: "Iuno's Signature. Good stats but passive partially wasted.",
                image: "/images/weapons/moongazerssigil.png"
            },
            {
                name: "Abyss Surges",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Energy & ATK. Solid stat stick.",
                image: "/images/weapons/abysssurges.png"
            },
            {
                name: "Stonard",
                rank: "Best 4-Star",
                rarity: 4,
                description: "Battle Pass weapon. Good Crit stat stick.",
                image: "/images/weapons/stonard.png"
            }
        ],
        echoes: [
            {
                set: "Eternal Radiance (5pc)",
                mainEcho: "Capitaneus",
                stats: {
                    cost4: ["Crit Rate", "Crit DMG"],
                    cost3: ["Spectro DMG", "Spectro DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit Rate", "Crit DMG", "Heavy Attack DMG", "ATK%"]
                },
                description: "Main DPS Build.",
                recommendation_reason: "Best set for Spectro DPS, capitalizing on Frazzle mechanics.",
                echo_breakdown: {
                    cost4: [{ name: "Capitaneus", image: "/images/echoes/capitaneus.png", mainStats: ["Crit Rate", "Crit DMG"] }],
                    cost3: [
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Spectro DMG"] },
                        { name: "Chasm Guardian", image: "/images/echoes/chasmguardian.png", mainStats: ["Spectro DMG"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Spectro DMG > Heavy Attack DMG > ATK%"
    },
    teams: [
        {
            name: "Premium Frazzle Team",
            description: "Optimal DMG with Phoebe.",
            members: [
                { name: "Zani", role: "Main DPS" },
                { name: "Phoebe", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "F2P Frazzle Team",
            description: "Accessible Spectro Team.",
            members: [
                { name: "Zani", role: "Main DPS" },
                { name: "Rover (Spectro)", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        }
    ]
};
