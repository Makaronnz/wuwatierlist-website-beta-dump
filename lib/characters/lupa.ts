import { Character } from "../characterTypes";

export const lupa: Character = {
    id: "lupa",
    name: "Lupa",
    rarity: 5,
    element: "Fusion",
    weaponType: "Broadblade",
    role: "Hybrid",
    tags: ["Fusion Enabler", "Fusion RES Shred", "Coordinated Attacks", "Team Buff"],
    profileType: "Specialist",
    potential: "S+",
    tier: {
        overall: "R0.5",
        tower: "R1",
        wastes: "R1.5"
    },
    imagePortrait: "/images/characters/LupaSmall.png",
    imageIcon: "/images/characters/LupaSmall.png",
    imageCard: "/images/characters/LupaLarge.png",
    stats: {
        hp: 11913,
        atk: 388,
        def: 1186
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "Crit Rate", value: "8%", stat: "critRate", amount: 8 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Howler Core", count: 4, icon: "/images/else/lfhowlercore.png" },
            { name: "Bloodleaf Viburnum", count: 60, icon: "/images/else/bloodleafviburnum.png" },
            { name: "MF Howler Core", count: 12, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 12, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
            { name: "Unfading Glory", count: 46, icon: "/images/else/unfadingglory.png" }
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
            { name: "The Netherworld's Stare", count: 26, icon: "/images/else/thenetherworldsstare.png" }
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
                    { name: "Unfading Glory", count: 3, icon: "/images/else/unfadingglory.png" },
                    { name: "Bloodleaf Viburnum", count: 4, icon: "/images/else/bloodleafviburnum.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Howler Core", count: 8, icon: "/images/else/mfhowlercore.png" },
                    { name: "Unfading Glory", count: 6, icon: "/images/else/unfadingglory.png" },
                    { name: "Bloodleaf Viburnum", count: 8, icon: "/images/else/bloodleafviburnum.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Howler Core", count: 4, icon: "/images/else/hfhowlercore.png" },
                    { name: "Unfading Glory", count: 9, icon: "/images/else/unfadingglory.png" },
                    { name: "Bloodleaf Viburnum", count: 12, icon: "/images/else/bloodleafviburnum.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Howler Core", count: 8, icon: "/images/else/hfhowlercore.png" },
                    { name: "Unfading Glory", count: 12, icon: "/images/else/unfadingglory.png" },
                    { name: "Bloodleaf Viburnum", count: 16, icon: "/images/else/bloodleafviburnum.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
                    { name: "Unfading Glory", count: 16, icon: "/images/else/unfadingglory.png" },
                    { name: "Bloodleaf Viburnum", count: 20, icon: "/images/else/bloodleafviburnum.png" }
                ]
            }
        ],
        weapon: {
            name: "Wildfire Mark",
            icon: "/images/weapons/wildfiremark.png",
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
        overview: `Lupa is a top-tier **Fusion Broadblade Enabler** who specializes in buffing the entire Fusion element. Her unique "Pack Hunt" and "Glory" mechanics provide massive **Fusion DMG Bonuses** and **Fusion RES Shred** to the team.
        
        She is best played in Mono-Fusion teams (e.g., with Brant, Changli, or Encore) where her buffs can reach their maximum potential. She also provides Coordinated Attacks and significant personal damage.`,
        playstyle: "Ult (Buffs) -> Forte (Wolflame/Wolfaith) -> Enhanced Skills -> Outro (Buffs).",
        pros: [
            "**Fusion Enabler**: Defines the Mono-Fusion meta with unparalleled buffs.",
            "**Team-Wide Buffs**: Increases Fusion DMG and shreds Fusion RES for everyone.",
            "**Boss Killer**: Bonus damage against Overlord/Calamity class enemies.",
            "**Flexible Sub-DPS**: Can support Hypercarries or act as a duo DPS."
        ],
        cons: [
            "**Restrictive Teams**: Reaches full potential mostly in Mono-Fusion (triple Fusion) teams. Especially with Mornye",
            "**Backloaded DMG**: Needs setup time to reach her damage peak."
        ]
    },
    skills: [
        {
            name: "Basic: Flaming Star",
            type: "Basic",
            description: "4-hit combo + mid-air (3 hits). At 50 Wolflame: **Wolf's Gnawing/Claw** (Heavy, consumes 50) → gains Wolfaith. **Firestrike** (mid-air P3). **Starfall** (after plunge).",
            attributes: [
                { name: "Basic P4 DMG", value: "37.16% + 37.16% + 24.77% * 2" },
                { name: "Wolf's Claw", value: "36.29% + 9.08% * 4 + 48.39%" },
                { name: "Firestrike", value: "14.33% + 14.33%" },
                { name: "Dodge Counter", value: "17.20% * 4 + 68.77%" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Shewolf's Hunt",
            type: "Skill",
            description: "Throw Wildfire Banner → mark target (8s), +15 Wolflame. **Feral Fang** (follow-up): +50% DMG vs marked, +15 Wolflame.",
            attributes: [
                { name: "Skill DMG", value: "70.81%" },
                { name: "Feral Fang", value: "157.74%" },
                { name: "Cooldown", value: "12s" }
            ],
            priority: 1
        },
        {
            name: "Forte: Ignis Lupa",
            type: "Forte",
            description: "**Wolflame** (max 100): Build via Basic/Skill/Ult. **Wolfaith** (max 2): Gain from enhanced attacks. At 2 Wolfaith → **Dance With the Wolf** (Liberation DMG). After Ult: **Burning Matchpoint** (12s, +500% Wolflame gen) → enables **Climax** variant. **Set the Arena Ablaze**: Off-field attack (8s after Forte) when ally uses Ult. +12% ATK on key attacks (Inherent).",
            attributes: [
                { name: "Dance Climax", value: "38.04% + 28.53% * 4 + 228.23%" },
                { name: "Arena Ablaze", value: "21.31% + 85.21%" }
            ],
            priority: 3
        },
        {
            name: "Liberation: Fire-Kissed Glory",
            type: "Ultimate",
            description: "Fusion nuke + 100 Wolflame. Grants team **Pack Hunt** (35s): +6% ATK (up to +18% after 2 Intros), +10-20% Fusion DMG vs bosses (3 Fusion chars). **Foebreaker** (follow-up): Extra DMG + enters Burning Matchpoint. **Glory** (Inherent): -3-15% Fusion RES (scales with Fusion chars).",
            attributes: [
                { name: "Skill DMG", value: "412.68%" },
                { name: "Foebreaker", value: "153.14%" },
                { name: "Cooldown", value: "20s" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 4
        },
        {
            name: "Intro: Try Focusing, Eh?",
            type: "Intro",
            description: "Fusion DMG, chain to mid-air P3. In **Wild Hunt** (full Pack Hunt): **Nowhere to Run!** (massive Liberation DMG, ends Pack Hunt/Glory).",
            attributes: [
                { name: "Intro DMG", value: "14.97% + 21.21% * 4" },
                { name: "Nowhere to Run", value: "399.16% + 24.95% * 4" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 2
        },
        {
            name: "Outro: Stand by Me, Warrior",
            type: "Outro",
            description: "Next Resonator: **Fusion DMG +20%**, **Basic Attack DMG +25%** for 14s (ends on swap).",
            attributes: [
                { name: "Fusion Amp", value: "+20%" },
                { name: "Basic Amp", value: "+25%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Ult restores **10 Concerto** and increases self **Crit Rate by 20%**." },
        { node: "S2", name: "Sequence Node 2", description: "Attacks grant team-wide **20% Fusion DMG Bonus** (Stacks up to 2x)." },
        { node: "S3", name: "Sequence Node 3", description: "Intro DMG **+100%**. Pack Hunt buff condition eased. Glory RES Shred increased to **15%**." },
        { node: "S4", name: "Sequence Node 4", description: "Forte Skill DMG increased by **125%**." },
        { node: "S5", name: "Sequence Node 5", description: "Intro Skills grant **15% Liberation Bonus**." },
        { node: "S6", name: "Sequence Node 6", description: "Major Skills ignore **30% DEF**. Cooldown resets." }
    ],
    rotation: [
        "1. **Intro**: Enter field.",
        "2. **Liberation**: Cast immediately to apply team buffs.",
        "3. **Skill/Basic**: Build Wolflame and convert to Wolfaith.",
        "4. **Forte**: Use **Dance With the Wolf** (Forte Skill).",
        "5. **Outro**: Switch to Fusion Main DPS (Brant/Changli).",
        "6. **Note**: Lupa will provide Coordinated Attacks off-field."
    ],
    builds: {
        weapons: [
            {
                name: "Wildfire Mark",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Tailor-made for her. Team-wide Fusion buffs + Liberation DMG.",
                image: "/images/weapons/wildfiremark.png"
            },
            {
                name: "Ages of Harvest",
                rank: "Stat Stick",
                rarity: 5,
                description: "Good stats but passive doesn't align perfectly.",
                image: "/images/weapons/agesofharvest.png"
            },
            {
                name: "Verdant Summit",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "High stats and Heavy Attack bonus.",
                image: "/images/weapons/verdantsummit.png"
            },
            {
                name: "Discord",
                rank: "4-Star Utility",
                rarity: 4,
                description: "Concerto Energy consistency.",
                image: "/images/weapons/discord.png"
            }
        ],
        echoes: [
            {
                set: "Flaming Clawprint (5pc)",
                mainEcho: "Lioness of Glory",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Fusion DMG", "Fusion DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Best Set. Supports team Fusion DMG and buffs self.",
                recommendation_reason: "Designed for Fusion Enablers.",
                echo_breakdown: {
                    cost4: [{ name: "Lioness of Glory", image: "/images/echoes/lionessofglory.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Havoc Dreadmane", image: "/images/echoes/havocdreadmane.png", mainStats: ["Fusion DMG"] },
                        { name: "Violet-Feathered Heron", image: "/images/echoes/violetfeatheredheron.png", mainStats: ["Fusion DMG"] }
                    ],
                    cost1: [
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] },
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Molten Rift (5pc)",
                mainEcho: "Inferno Rider",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Fusion DMG", "Fusion DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Standard Fusion Set.",
                recommendation_reason: "Good personal damage, less team support.",
                echo_breakdown: {
                    cost4: [{ name: "Inferno Rider", image: "/images/echoes/infernorider.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Havoc Dreadmane", image: "/images/echoes/havocdreadmane.png", mainStats: ["Fusion DMG"] },
                        { name: "Violet-Feathered Heron", image: "/images/echoes/violetfeatheredheron.png", mainStats: ["Fusion DMG"] }
                    ],
                    cost1: [
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] },
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (125%+) > Crit Rate/DMG > Fusion DMG > ATK%"
    },
    teams: [
        {
            name: "Mono-Fusion Trifecta",
            description: "The ultimate Fusion team.",
            members: [
                { name: "Changli", role: "Main DPS" },
                { name: "Brant", role: "Main DPS" },
                { name: "Lupa", role: "Sub DPS" }
            ]
        },
        {
            name: "F2P Fusion",
            description: "Accessible Mono-Fusion.",
            members: [
                { name: "Encore", role: "Main DPS" },
                { name: "Lupa", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        }
    ]
};
