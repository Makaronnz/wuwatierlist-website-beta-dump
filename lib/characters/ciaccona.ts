import { Character } from "../characterTypes";

export const ciaccona: Character = {
    id: "ciaccona",
    name: "Ciaccona",
    rarity: 5,
    element: "Aero",
    weaponType: "Pistols",
    role: "Hybrid",
    tags: ["Aero Erosion", "Spectro Frazzle", "Buffer", "Quickswap"],
    profileType: "Specialist",
    potential: "S",
    tier: {
        overall: "R0.5",
        tower: "R1",
        wastes: "R1"
    },
    imagePortrait: "/images/characters/CiacconaSmall.png",
    imageIcon: "/images/characters/CiacconaSmall.png",
    imageCard: "/images/characters/CiacconaLarge.png",
    stats: {
        hp: 12238,
        atk: 375,
        def: 1198
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT DMG", value: "16%", stat: "critDmg", amount: 16 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Tidal Residuum", count: 4, icon: "/images/else/lftidalresiduum.png" },
            { name: "Golden Fleece", count: 60, icon: "/images/else/goldenfleece.png" },
            { name: "MF Tidal Residuum", count: 12, icon: "/images/else/mftidalresiduum.png" },
            { name: "HF Tidal Residuum", count: 12, icon: "/images/else/hftidalresiduum.png" },
            { name: "FF Tidal Residuum", count: 4, icon: "/images/else/fftidalresiduum.png" },
            { name: "Blazing Bone", count: 46, icon: "/images/else/blazingbone.png" }
        ],
        skills: [
            { name: "LF Tidal Residuum", count: 25, icon: "/images/else/lftidalresiduum.png" },
            { name: "MF Tidal Residuum", count: 28, icon: "/images/else/mftidalresiduum.png" },
            { name: "HF Tidal Residuum", count: 40, icon: "/images/else/hftidalresiduum.png" },
            { name: "FF Tidal Residuum", count: 57, icon: "/images/else/fftidalresiduum.png" },
            { name: "Impure Phlogiston", count: 25, icon: "/images/else/impurephlogiston.png" },
            { name: "Extracted Phlogiston", count: 28, icon: "/images/else/extractedphlogiston.png" },
            { name: "Refined Phlogiston", count: 55, icon: "/images/else/refinedphlogiston.png" },
            { name: "Flawless Phlogiston", count: 67, icon: "/images/else/flawlessphlogiston.png" },
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
                    { name: "Blazing Bone", count: 3, icon: "/images/else/blazingbone.png" },
                    { name: "Golden Fleece", count: 4, icon: "/images/else/goldenfleece.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Tidal Residuum", count: 8, icon: "/images/else/mftidalresiduum.png" },
                    { name: "Blazing Bone", count: 6, icon: "/images/else/blazingbone.png" },
                    { name: "Golden Fleece", count: 8, icon: "/images/else/goldenfleece.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Tidal Residuum", count: 4, icon: "/images/else/hftidalresiduum.png" },
                    { name: "Blazing Bone", count: 9, icon: "/images/else/blazingbone.png" },
                    { name: "Golden Fleece", count: 12, icon: "/images/else/goldenfleece.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Tidal Residuum", count: 8, icon: "/images/else/hftidalresiduum.png" },
                    { name: "Blazing Bone", count: 12, icon: "/images/else/blazingbone.png" },
                    { name: "Golden Fleece", count: 16, icon: "/images/else/goldenfleece.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Tidal Residuum", count: 4, icon: "/images/else/fftidalresiduum.png" },
                    { name: "Blazing Bone", count: 16, icon: "/images/else/blazingbone.png" },
                    { name: "Golden Fleece", count: 20, icon: "/images/else/goldenfleece.png" }
                ]
            }
        ],
        weapon: {
            name: "Woodland Aria",
            icon: "/images/weapons/woodlandaria.png",
            total: [
                { name: "MF Tidal Residuum", count: 20, icon: "/images/else/mftidalresiduum.png" },
                { name: "HF Tidal Residuum", count: 20, icon: "/images/else/hftidalresiduum.png" },
                { name: "FF Tidal Residuum", count: 12, icon: "/images/else/fftidalresiduum.png" },
                { name: "Impure Phlogiston", count: 26, icon: "/images/else/impurephlogiston.png" },
                { name: "Extracted Phlogiston", count: 26, icon: "/images/else/extractedphlogiston.png" },
                { name: "Refined Phlogiston", count: 16, icon: "/images/else/refinedphlogiston.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Tidal Residuum", count: 6, icon: "/images/else/lftidalresiduum.png" },
                        { name: "Impure Phlogiston", count: 6, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Tidal Residuum", count: 6, icon: "/images/else/mftidalresiduum.png" },
                        { name: "Impure Phlogiston", count: 6, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Tidal Residuum", count: 10, icon: "/images/else/mftidalresiduum.png" },
                        { name: "Impure Phlogiston", count: 10, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Tidal Residuum", count: 6, icon: "/images/else/hftidalresiduum.png" },
                        { name: "Extracted Phlogiston", count: 6, icon: "/images/else/extractedphlogiston.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Tidal Residuum", count: 10, icon: "/images/else/hftidalresiduum.png" },
                        { name: "Extracted Phlogiston", count: 10, icon: "/images/else/extractedphlogiston.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Tidal Residuum", count: 6, icon: "/images/else/fftidalresiduum.png" },
                        { name: "Refined Phlogiston", count: 6, icon: "/images/else/refinedphlogiston.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Ciaccona (also Chicona) is practically "Caviar" — a luxury **5-star Aero Sub-DPS** who is arguably the best Aero support in the game but feels practically useless without a premium team to support.
        
        She is designed to hyper-buff characters like **Cartethyia** and **Iuno** through her rapid rotation speed and massive Aero Erosion amplification. While she offers immense power ceilings for Aero teams, she demands high technical skill (animation cancels) and strict investment to function.`,
        playstyle: "Basic 4 (Generate Essence/Sylph) -> Jump Cancel -> Skill -> Heavy Attack (Quadruple Downbeat) -> Liberation -> Outro.",
        pros: [
            "**Exceptional Rotation Speed**: One of the fastest '0-100' concerto rotations in the game if animation cancels are mastered.",
            "**Massive Aero Buffs**: Basic attacks alone provide 24% Aero DMG. Outro amplifies Aero Erosion DMG by **100%**.",
            "**Premier Erosion Support**: The absolute best partner for Cartethyia, enabling detonation playstyles.",
            "**High Value Sequences**: S2, S4, and S5 provide significant damage boosts and DEF ignore.",
            "**Versatile Synergies**: Works perfectly with Cartethyia, Iuno, and Chisa for top-tier meta teams.",
            "**Weapon Options**: 'Static Mist' (Standard 5-star) is a viable and strong alternative to her signature."
        ],
        cons: [
            "**High Skill Floor**: Clunky and slow without mastering jump-cancels and skill-cancels.",
            "**Strict ER Requirement**: Needs at least **130% Energy Regen** to maintain rotations; anything less causes major downtime.",
            "**'Luxury' Tax**: Feels useless without premium Aero partners (Cartethyia/Iuno). Offers little to non-Aero teams.",
            "**Niche Restriction**: Unlike Shorekeeper, she offers almost zero value outside of Aero compositions.",
            "**Signature Dependency**: Her 'True' potential (RES Shred) is locked behind her signature weapon."
        ]
    },
    skills: [
        {
            name: "Basic: Quadruple Time Steps",
            type: "Basic",
            description: "4-hit combo. P4 applies Aero Erosion and starts **Solo Concert** (24% Aero DMG to team). Jump-cancel P4 → **Ensemble Sylph**. Mid-air P2 → P4 chains.",
            attributes: [
                { name: "Basic P1 DMG", value: "28.70%" },
                { name: "Basic P2 DMG", value: "24.60% + 12.30% * 2 + 32.80%" },
                { name: "Basic P3 DMG", value: "16.61% * 4" },
                { name: "Basic P4 DMG", value: "30.75% * 4" },
                { name: "Solo Concert", value: "+24% Aero DMG (team)" },
                { name: "Dodge Counter", value: "28.76% * 4" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Harmonic Allegro",
            type: "Skill",
            description: "Quick dash attack dealing Aero DMG. Applies Aero Erosion. Can interrupt Basic 4 (generates Sylph). Mid-air castable.",
            attributes: [
                { name: "Skill DMG", value: "20.32% * 4" },
                { name: "Cooldown", value: "10s" },
                { name: "Concerto Regen", value: "15" }
            ],
            priority: 2
        },
        {
            name: "Forte: Symphony of Wind and Verse",
            type: "Forte",
            description: "**Musical Essence** (max 3): Intro/Basic 4 grants 1. At 3 → **Quadruple Downbeat** (Heavy): Pulls enemies + massive DMG. +30% Heavy DMG (Inherent).",
            attributes: [
                { name: "Downbeat DMG", value: "15.80% * 10 + 157.95%" },
                { name: "Concerto Regen", value: "25" }
            ],
            priority: 3
        },
        {
            name: "Liberation: Singer's Triple Cadenza",
            type: "Ultimate",
            description: "Massive Aero nuke. Enter **Recital** (off-field): Generate Green (Aero Erosion) or Yellow (Spectro Frazzle) Tonics. -50% DMG Taken. 100% HP Shield for 4s (Inherent).",
            attributes: [
                { name: "Improv DMG", value: "553.50%" },
                { name: "Tonic DMG", value: "3.08% * 20" },
                { name: "Cooldown", value: "20s" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 4
        },
        {
            name: "Intro: Roaming with the Wind",
            type: "Intro",
            description: "Attack dealing Aero DMG + Erosion. Follow with P3 directly. +1 Musical Essence.",
            attributes: [
                { name: "Skill DMG", value: "95.12%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Windcalling Tune",
            type: "Outro",
            description: "Amplify **Aero Erosion DMG** massively for all nearby characters.",
            attributes: [
                { name: "Erosion Amp", value: "+100%" },
                { name: "Duration", value: "30s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Skill grants Interruption Immunity. Basic Attack increases self ATK by 35%." },
        { node: "S2", name: "Sequence Node 2", description: "During Liberation, team gains **40% Aero DMG Bonus**." },
        { node: "S3", name: "Sequence Node 3", description: "Basic 4 grants extra Essence. Skill gets +1 Charge." },
        { node: "S4", name: "Sequence Node 4", description: "Forte Heavy Attack and Liberation ignore **45% DEF**." },
        { node: "S5", name: "Sequence Node 5", description: "Liberation DMG +40%. Reduces DMG taken by team near Liberation." },
        { node: "S6", name: "Sequence Node 6", description: "Solo Concert deals additional damage equal to 220% ATK." }
    ],
    rotation: [
        "1. **Intro**: Enter with Ciaccona (skips to Basic 3).",
        "2. **Build**: Basic 3 -> Basic 4 -> **Jump Cancel** (Generate Sylph).",
        "3. **Skill**: Cast Harmonic Allegro to cancel landing lag.",
        "4. **Forte**: Cast **Quadruple Downbeat** (Heavy Attack) to group enemies.",
        "5. **Liberation**: Cast Singer's Triple Cadenza (Activate Recital).",
        "6. **Outro**: Switch to Cartethyia (or Main DPS)."
    ],
    builds: {
        weapons: [
            {
                name: "Woodland Aria",
                rank: "Signature",
                rarity: 5,
                description: "Best in Slot. Shreds Aero RES by 10% and buffs Aero DMG by 24% on Erosion.",
                image: "/images/weapons/woodlandaria.png"
            },
            {
                name: "Static Mist",
                rank: "5-Star Alt",
                rarity: 5,
                description: "Excellent buffing pistol. Grants 10% ATK to next character on Outro.",
                image: "/images/weapons/staticmist.png"
            },
            {
                name: "Romance in Farewell",
                rank: "F2P Option",
                rarity: 4,
                description: "Craftable. ATK buff triggers on Negative Status damage.",
                image: "/images/weapons/romanceinfarewell.png"
            },
            {
                name: "Novaburst",
                rank: "4-Star Backup",
                rarity: 4,
                description: "Usable if no other options.",
                image: "/images/weapons/novaburst.png"
            }
        ],
        echoes: [
            {
                set: "Gusts of Welkin (5pc)",
                mainEcho: "Reminiscence: Fleurdelys",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Aero DMG", "Aero DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Energy Regen", "ATK%"]
                },
                description: "Aero Support Build. Maximizes team-wide Aero DMG buffs.",
                recommendation_reason: "Optimal for Aero teams.",
                echo_breakdown: {
                    cost4: [{ name: "Reminiscence: Fleurdelys", image: "/images/echoes/reminiscencefleurdelys.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Aero DMG"] },
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Aero DMG"] }
                    ],
                    cost1: [
                        { name: "Vanguard Junrock", image: "/images/echoes/vanguardjunrock.png", mainStats: ["ATK%"] },
                        { name: "Fission Junrock", image: "/images/echoes/fissionjunrock.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Aero DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "General Support Build. Buffs next character's ATK.",
                recommendation_reason: "Best for non-Aero teams (e.g. Spectro).",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Aero DMG"] },
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Energy Regen (115%+) > Aero DMG > ATK%"
    },
    teams: [
        {
            name: "Aero Erosion Premium",
            description: "Ciaccona enables Cartethyia's full potential with Erosion buffs.",
            members: [
                { name: "Cartethyia", role: "Main DPS" },
                { name: "Ciaccona", role: "Sub DPS" },
                { name: "Chisa", role: "Support" }
            ]
        },
        {
            name: "Spectro Frazzle Support",
            description: "Utilizes Yellow Tonics to stack Frazzle for Zani/Phoebe.",
            members: [
                { name: "Zani", role: "Main DPS" },
                { name: "Ciaccona", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        }
    ]
};
