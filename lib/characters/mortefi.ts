import { Character } from "../characterTypes";

export const mortefi: Character = {
    id: "mortefi",
    name: "Mortefi",
    rarity: 4,
    element: "Fusion",
    weaponType: "Pistols",
    role: "Hybrid",
    tags: ["Coordinated Attacks", "Heavy Attack Buff", "Off-field DMG", "High Hit Rate"],
    profileType: "Specialist",
    potential: "B",
    tier: {
        overall: "R1.5",
        tower: "R1.5",
        wastes: "R1.5"
    },
    imagePortrait: "/images/characters/MortefiSmall.png",
    imageIcon: "/images/characters/MortefiSmall.png",
    imageCard: "/images/characters/MortefiLarge.png",
    stats: {
        hp: 10025,
        atk: 250,
        def: 1137
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "Fusion DMG", value: "12%", stat: "fusionDamage", amount: 12 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "Coriolus", count: 60, icon: "/images/else/coriolus.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Rage Tacet Core", count: 46, icon: "/images/else/ragetacetcore.png" }
        ],
        skills: [
            { name: "LF Whisperin Core", count: 25, icon: "/images/else/lfwhisperincore.png" },
            { name: "MF Whisperin Core", count: 28, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 40, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 57, icon: "/images/else/ffwhisperincore.png" },
            { name: "Impure Phlogiston", count: 25, icon: "/images/else/impurephlogiston.png" },
            { name: "Extracted Phlogiston", count: 28, icon: "/images/else/extractedphlogiston.png" },
            { name: "Refined Phlogiston", count: 55, icon: "/images/else/refinedphlogiston.png" },
            { name: "Flawless Phlogiston", count: 67, icon: "/images/else/flawlessphlogiston.png" },
            { name: "Monument Bell", count: 26, icon: "/images/else/monumentbell.png" }
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
                    { name: "Rage Tacet Core", count: 3, icon: "/images/else/ragetacetcore.png" },
                    { name: "Coriolus", count: 4, icon: "/images/else/coriolus.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Whisperin Core", count: 8, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Rage Tacet Core", count: 6, icon: "/images/else/ragetacetcore.png" },
                    { name: "Coriolus", count: 8, icon: "/images/else/coriolus.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Whisperin Core", count: 4, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Rage Tacet Core", count: 9, icon: "/images/else/ragetacetcore.png" },
                    { name: "Coriolus", count: 12, icon: "/images/else/coriolus.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Whisperin Core", count: 8, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Rage Tacet Core", count: 12, icon: "/images/else/ragetacetcore.png" },
                    { name: "Coriolus", count: 16, icon: "/images/else/coriolus.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
                    { name: "Rage Tacet Core", count: 16, icon: "/images/else/ragetacetcore.png" },
                    { name: "Coriolus", count: 20, icon: "/images/else/coriolus.png" }
                ]
            }
        ],
        weapon: {
            name: "Static Mist",
            icon: "/images/weapons/staticmist.png",
            total: [
                { name: "MF Whisperin Core", count: 20, icon: "/images/else/mfwhisperincore.png" },
                { name: "HF Whisperin Core", count: 20, icon: "/images/else/hfwhisperincore.png" },
                { name: "FF Whisperin Core", count: 12, icon: "/images/else/ffwhisperincore.png" },
                { name: "Impure Phlogiston", count: 26, icon: "/images/else/impurephlogiston.png" },
                { name: "Extracted Phlogiston", count: 26, icon: "/images/else/extractedphlogiston.png" },
                { name: "Refined Phlogiston", count: 16, icon: "/images/else/refinedphlogiston.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Whisperin Core", count: 6, icon: "/images/else/lfwhisperincore.png" },
                        { name: "Impure Phlogiston", count: 6, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Whisperin Core", count: 6, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Impure Phlogiston", count: 6, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Whisperin Core", count: 10, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Impure Phlogiston", count: 10, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Whisperin Core", count: 6, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Extracted Phlogiston", count: 6, icon: "/images/else/extractedphlogiston.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Whisperin Core", count: 10, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Extracted Phlogiston", count: 10, icon: "/images/else/extractedphlogiston.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Whisperin Core", count: 6, icon: "/images/else/ffwhisperincore.png" },
                        { name: "Refined Phlogiston", count: 6, icon: "/images/else/refinedphlogiston.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Mortefi is a premier **Fusion Pistol Sub-DPS** and Heavy Attack buffer. His kit shines when paired with Heavy Attack-focused characters like **Jiyan** or **Augusta**, as his Outro Skill provides a massive **38% Heavy Attack DMG Deepen**.
        
        His Resonance Liberation unleashes **Coordinated Attacks** (Marcato) whenever the active character hits an enemy, with double the frequency for Heavy Attacks, making him an incredible off-field damage source.`,
        playstyle: "Skill -> Echo -> Outro (Buff) -> Liberation (Coordinated Attacks).",
        pros: [
            "**Powerful Buffer**: +38% Heavy Attack DMG Deepen is best-in-slot for Jiyan/Augusta.",
            "**Off-Field DMG**: High damage potential with Coordinated Attacks.",
            "**Versatile**: Fits into many teams requiring Coordinated Attacks.",
            "**Strong Sequences**: S4 (Duration) and S6 (Team ATK) make him Tier 0."
        ],
        cons: [
            "**Energy Hungry**: Needs high ER (~130-150%) to burst on cooldown.",
            "**Squishy**: Low base defense makes him vulnerable while on-field.",
            "**Niche Outro**: Less effective for Basic/Skill DMG focused carries."
        ]
    },
    skills: [
        {
            name: "Basic: Impromptu Show",
            type: "Basic",
            description: "4-hit pistol combo. Restores **Annoyance** (Forte). Enhanced Annoyance gain for 5s after Skill.",
            attributes: [
                { name: "Basic P1 DMG", value: "24.29%" },
                { name: "Basic P2 DMG", value: "20.51% * 2" },
                { name: "Basic P3 DMG", value: "53.97%" },
                { name: "Basic P4 DMG", value: "10.57% * 4 + 63.84%" },
                { name: "Aimed Shot", value: "84.00% (charged)" },
                { name: "Dodge Counter", value: "98.07%" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Passionate Variation",
            type: "Skill",
            description: "Fire high-speed flame lightning. +25% Fury Fugue DMG for 8s after cast (Inherent).",
            attributes: [
                { name: "Skill DMG", value: "105.00%" },
                { name: "Cooldown", value: "14s" },
                { name: "Concerto Regen", value: "18" }
            ],
            priority: 2
        },
        {
            name: "Forte Circuit: Fury Fugue",
            type: "Forte",
            description: "**Annoyance** (max 100): Full gauge → **Fury Fugue** (enhanced Skill, no CD). Marcato DMG +1.5% per hit, stacks 50x (Inherent).",
            attributes: [
                { name: "Fury Fugue DMG", value: "164.00%" },
                { name: "Concerto Regen", value: "18" },
                { name: "Max Stacks", value: "100 Annoyance" }
            ],
            priority: 3
        },
        {
            name: "Liberation: Violent Finale",
            type: "Ultimate",
            description: "Apply **Burning Rhapsody** (10s). Launches **Marcato** (Coordinated) on hits: 1 per Basic, 2 per Heavy. Max once per 0.35s.",
            attributes: [
                { name: "Violent Finale DMG", value: "80.00%" },
                { name: "Marcato DMG", value: "16.00% each" },
                { name: "Duration", value: "10s (17s S4)" },
                { name: "Cooldown", value: "20s" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 4
        },
        {
            name: "Intro: Dissonance",
            type: "Intro",
            description: "Attack dealing Fusion DMG. Restores Annoyance.",
            attributes: [
                { name: "Skill DMG", value: "85.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Rage Transposition",
            type: "Outro",
            description: "Grant next character massive **Heavy Attack DMG Deepen** buff.",
            attributes: [
                { name: "Heavy Deepen", value: "+38%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Burning Rhapsody triggers **2** Marcato hits on Skill use too." },
        { node: "S2", name: "Sequence Node 2", description: "Restores **10 Resonance Energy** after using Echo Skill (20s CD)." },
        { node: "S3", name: "Sequence Node 3", description: "Crit DMG of Marcato increased by **30%**." },
        { node: "S4", name: "Sequence Node 4", description: "Liberation duration extended by **7s**. **Tier 1 Upgrade**." },
        { node: "S5", name: "Sequence Node 5", description: "Skill hits trigger 4 reduced-damage Marcato hits." },
        { node: "S6", name: "Sequence Node 6", description: "Liberation increases **Team ATK by 20%**. **Tier 0 Upgrade**." }
    ],
    rotation: [
        "1. **Intro**: Enter field.",
        "2. **Skill**: Cast **Passionate Variation**.",
        "3. **Forte**: Cast **Fury Fugue** (if gauge full).",
        "4. **Echo**: Use Impermanence Heron.",
        "5. **Liberation**: Cast **Violent Finale**.",
        "6. **Outro**: Switch to Heavy Attack DPS (Jiyan/Augusta)."
    ],
    builds: {
        weapons: [
            {
                name: "Static Mist",
                rank: "Best In Slot",
                rarity: 5,
                description: "Huge Crit Rate and Outro buffs next character's ATK.",
                image: "/images/weapons/staticmist.png"
            },
            {
                name: "The Last Dance",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Carlotta's Signature. High Crit DMG stat stick.",
                image: "/images/weapons/thelastdance.png"
            },
            {
                name: "Novaburst",
                rank: "4-Star DPS",
                rarity: 4,
                description: "ATK buff on dodge.",
                image: "/images/weapons/novaburst.png"
            },
            {
                name: "Cadenza",
                rank: "4-Star Support",
                rarity: 4,
                description: "High Energy Regen and Concetro gain. Great for comfort.",
                image: "/images/weapons/cadenza.png"
            }
        ],
        echoes: [
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Fusion DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Best Support Set. Buffs next character.",
                recommendation_reason: "Standard Sub-DPS build for Jiyan teams.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["Fusion DMG"] },
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["ATK%"] },
                        { name: "Diamondclaw", image: "/images/echoes/diamondclaw.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Empyrean Anthem (5pc)",
                mainEcho: "Hecate",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Fusion DMG", "Fusion DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Personal Damage Set.",
                recommendation_reason: "Better for Mortefi's own damage, especially if S4+.",
                echo_breakdown: {
                    cost4: [{ name: "Hecate", image: "/images/echoes/hecate.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["Fusion DMG"] },
                        { name: "Viridblaze Saurian", image: "/images/echoes/viridblazesaurian.png", mainStats: ["Fusion DMG"] }
                    ],
                    cost1: [
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] },
                        { name: "Fusion Dreadmane", image: "/images/echoes/fusiondreadmane.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (130%+) > Crit Rate/DMG > Fusion DMG > ATK%"
    },
    teams: [
        {
            name: "Aero Heavy Attack",
            description: "Classic Jiyan Hypercarry.",
            members: [
                { name: "Jiyan", role: "Main DPS" },
                { name: "Mortefi", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        },
        {
            name: "Electro Heavy Attack",
            description: "Augusta Nuke Team.",
            members: [
                { name: "Augusta", role: "Main DPS" },
                { name: "Mortefi", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        }
    ]
};
