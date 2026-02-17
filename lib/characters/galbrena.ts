import { Character } from "../characterTypes";

export const galbrena: Character = {
    id: "galbrena",
    name: "Galbrena",
    rarity: 5,
    element: "Fusion",
    weaponType: "Pistols",
    role: "Main DPS",
    tags: ["Fusion DMG", "Echo Skill DMG", "Heavy Attack", "Self Buff"],
    profileType: "Versatile",
    potential: "S",
    tier: {
        overall: "R0",
        tower: "R0.5",
        wastes: "R1"
    },
    imagePortrait: "/images/characters/GalbrenaSmall.png",
    imageIcon: "/images/characters/GalbrenaSmall.png",
    imageCard: "/images/characters/GalbrenaLarge.png",
    stats: {
        hp: 10300,
        atk: 462,
        def: 1112
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT DMG", value: "16%", stat: "critDamage", amount: 16 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Tidal Residuum", count: 4, icon: "/images/else/lftidalresiduum.png" },
            { name: "Stone Rose", count: 60, icon: "/images/else/stonerose.png" },
            { name: "MF Tidal Residuum", count: 12, icon: "/images/else/mftidalresiduum.png" },
            { name: "HF Tidal Residuum", count: 12, icon: "/images/else/hftidalresiduum.png" },
            { name: "FF Tidal Residuum", count: 4, icon: "/images/else/fftidalresiduum.png" },
            { name: "Blighted Crown of Puppet King", count: 46, icon: "/images/else/blightedcrownofpuppetking.png" }
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
            { name: "Curse of the Abyss", count: 26, icon: "/images/else/curseoftheabyss.png" }
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
                    { name: "Blighted Crown of Puppet King", count: 3, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Stone Rose", count: 4, icon: "/images/else/stonerose.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Tidal Residuum", count: 8, icon: "/images/else/mftidalresiduum.png" },
                    { name: "Blighted Crown of Puppet King", count: 6, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Stone Rose", count: 8, icon: "/images/else/stonerose.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Tidal Residuum", count: 4, icon: "/images/else/hftidalresiduum.png" },
                    { name: "Blighted Crown of Puppet King", count: 9, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Stone Rose", count: 12, icon: "/images/else/stonerose.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Tidal Residuum", count: 8, icon: "/images/else/hftidalresiduum.png" },
                    { name: "Blighted Crown of Puppet King", count: 12, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Stone Rose", count: 16, icon: "/images/else/stonerose.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Tidal Residuum", count: 4, icon: "/images/else/fftidalresiduum.png" },
                    { name: "Blighted Crown of Puppet King", count: 16, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Stone Rose", count: 20, icon: "/images/else/stonerose.png" }
                ]
            }
        ],
        weapon: {
            name: "Lux & Umbra",
            icon: "/images/weapons/luxumbra.png",
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
        overview: `Galbrena is a **Fusion Pistol Main DPS** unique for her scaling with **Echo Skill DMG** and **Heavy Attack DMG**. She enters a powerful "Demon Hypostasis" state where her basic attacks become enhanced slashes.
        
        Effectively using her "Afterflame" mechanic (gained when teammates use Echo Skills) increases enemy DMG Taken, making her a potent burst dealer. She relies on the new **Flamewing's Shadow** set.`,
        playstyle: "Teammate Echo Skills (Build Afterflame) -> Galbrena Intro -> Echo -> Skill (Enter Demon Hypostasis) -> Liberation -> Basic Spam.",
        pros: [
            "**Unique Scaling**: Scales with Echo Skill DMG, opening new build paths.",
            "**High Burst**: Liberation state coupled with Afterflame behaves as a massive multiplier.",
            "**Dodge Counter**: Strong dodge counter makes her forgiving to play.",
            "**Flexible Teams**: Works with anyone who can spam Echo Skills (Qiuyuan, Lupa)."
        ],
        cons: [
            "**Weapon Dependent**: Signature weapon is far superior to alternatives due to unique scalings.",
            "**Backloaded DMG**: Most damage comes at the end of rotation, not great for multi-wave.",
            "**Complex Rotation**: Requires managing teammate Echo Skill usage for max Afterflame stacks."
        ]
    },
    skills: [
        {
            name: "Basic: Slayer's Trigger / Seraphic Execution",
            type: "Basic",
            description: "4-hit combo. P1-3: Heavy ATK DMG. P4: Echo Skill DMG. **Heavy - Volley of Death**: 3-hit combo. In **Demon Hypostasis**: **Seraphic Execution** (5-hit enhanced slashes, consumes Purging Flame). **Hellstride** (Dodge during skills): Fixed 666 DMG.",
            attributes: [
                { name: "Basic P4", value: "89.46%" },
                { name: "Seraphic P5", value: "33.84% + 78.96%" },
                { name: "Dodge Counter", value: "20.65% * 2 + 30.97% * 2" },
                { name: "Purgatory Scourge", value: "16.15% * 3 + 113.03%" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Encroach / Ascent of Malice",
            type: "Skill",
            description: "**Encroach**: Dash + flip (5s CD, Heavy DMG). At 100 **Sinflame** → **Ascent of Malice**: Enter **Demon Hypostasis**, converts Sinflame to Purging Flame (13s CD). In Demon Hypo: **Ravage** (shares CD).",
            attributes: [
                { name: "Encroach", value: "5.40% + 12.60%" },
                { name: "Ascent of Malice", value: "25.94% * 2" }
            ],
            priority: 1
        },
        {
            name: "Forte: Beyond Threshold",
            type: "Forte",
            description: "**Sinflame** (max 100): Build via Basics/Skill/Intro → full enables Ascent of Malice → converts to **Purging Flame**. **Afterflame** (max 40): +8 per teammate Echo Skill. +1.5% DMG Taken per point (up to **+60%**). **Burning Drive**: +20% ATK (4s) on certain skills. **Inherent**: +5% DMG Amp per stack (up to 4, 5.5s). +10 STA on P4/P5/Heavy P3.",
            attributes: [
                { name: "Afterflame Cap", value: "+60% DMG Taken" },
                { name: "Burning Drive", value: "+20% ATK" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Hellfire Absolution",
            type: "Ultimate",
            description: "12-hit Fusion (Echo Skill DMG). Grants **+85% DMG Multiplier** to all Demon Hypostasis attacks for 14s. Cast BEFORE attacking in state!",
            attributes: [
                { name: "Skill DMG", value: "55.79% + 45.64% * 11" },
                { name: "State Buff", value: "+85% Multiplier" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 3
        },
        {
            name: "Intro: Hellflare Overload",
            type: "Intro",
            description: "Fusion DMG. Chains to Basic P2. Triggers Burning Drive. Grants Sinflame.",
            attributes: [
                { name: "Skill DMG", value: "47.34%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Ashen Pursuit",
            type: "Outro",
            description: "Fusion DMG only (no buffs). Pure damage outro enables quickswapping.",
            attributes: [
                { name: "Outro DMG", value: "79.5% * 3 + 556.5%" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Afterflame points grant **Crit DMG** (up to 80%). Adds interruption resistance." },
        { node: "S2", name: "Sequence Node 2", description: "Burning Drive (Buff) grants **350% more ATK**." },
        { node: "S3", name: "Sequence Node 3", description: "Resonance Liberation DMG increased by **130%**." },
        { node: "S4", name: "Sequence Node 4", description: "Teammate Echo Skills grant **20% All-Elemental DMG** Bonus to team." },
        { node: "S5", name: "Sequence Node 5", description: "Skill DMG Multipliers increased by **150%**." },
        { node: "S6", name: "Sequence Node 6", description: "Enters **Eternal Hypostasis**. All multipliers +60%. Gains Fusion DMG Amplification." }
    ],
    rotation: [
        "1. **Teammates**: Use Echo Skills on supports (Qiuyuan/Shorekeeper) to build Afterflame.",
        "2. **Intro**: Galbrena enters.",
        "3. **Echo**: Cast Corrosaurus for buff/stacks.",
        "4. **Build**: Basic Attacks until Sinflame (Forte) is full (100).",
        "5. **Transform**: Cast Skill (Ascent of Malice) to enter Demon Hypostasis.",
        "6. **Liberation**: Cast IMMEDIATELY to buff state.",
        "7. **DPS**: Basic Attack spam (Seraphic Execution) until Forte depletes.",
        "8. **Outro**: Switch out."
    ],
    builds: {
        weapons: [
            {
                name: "Lux & Umbra",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Massive buffs to Echo Skill & Heavy Attack DMG. Perfect synergy.",
                image: "/images/weapons/luxumbra.png"
            },
            {
                name: "Static Mist",
                rank: "5-Star Standard",
                rarity: 5,
                description: "Good stat stick (Crit/Energy). Passive helps rotation.",
                image: "/images/weapons/staticmist.png"
            },
            {
                name: "The Last Dance",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "High stats, though skill is less relevant.",
                image: "/images/weapons/thelastdance.png"
            },
            {
                name: "Novaburst",
                rank: "4-Star Option",
                rarity: 4,
                description: "Dodge based ATK buff. Decent F2P option.",
                image: "/images/weapons/novaburst.png"
            }
        ],
        echoes: [
            {
                set: "Flamewing's Shadow (3pc) + Flaming Clawprint (2pc)",
                mainEcho: "Corrosaurus",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Fusion DMG", "Fusion DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Heavy Attack DMG", "ATK%", "Energy Regen"]
                },
                description: "Hybrid set maximizing Echo Skill and Fusion DMG scaling.",
                recommendation_reason: "Best for Galbrena's unique kit.",
                echo_breakdown: {
                    cost4: [{ name: "Corrosaurus", image: "/images/echoes/corrosaurus.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Havoc Dreadmane", image: "/images/echoes/havocdreadmane.png", mainStats: ["Fusion DMG"] },
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["Fusion DMG"] }
                    ],
                    cost1: [
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["ATK%"] },
                        { name: "Whisperbin", image: "/images/echoes/whisperbin.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Molten Rift (5pc)",
                mainEcho: "Nightmare: Inferno Rider",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Fusion DMG", "Fusion DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "ATK%", "Heavy Attack DMG"]
                },
                description: "Standard Fusion set. Good alternative.",
                recommendation_reason: "Reliable if new set unavailable.",
                echo_breakdown: {
                    cost4: [{ name: "Nightmare: Inferno Rider", image: "/images/echoes/nightmareinfernorider.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Violet-Feathered Heron", image: "/images/echoes/violetfeatheredheron.png", mainStats: ["Fusion DMG"] },
                        { name: "Havoc Dreadmane", image: "/images/echoes/havocdreadmane.png", mainStats: ["Fusion DMG"] }
                    ],
                    cost1: [
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["ATK%"] },
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Heavy Attack DMG > Echo Skill DMG > ATK%"
    },
    teams: [
        {
            name: "Echo Skill Spam",
            description: "Teammates spam Echo Skills to build Galbrena's Afterflame.",
            members: [
                { name: "Galbrena", role: "Main DPS" },
                { name: "Qiuyuan", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "Mono Fusion",
            description: "Standard Fusion synergy.",
            members: [
                { name: "Galbrena", role: "Main DPS" },
                { name: "Lupa", role: "Sub DPS" },
                { name: "Brant", role: "Support" }
            ]
        }
    ]
};
