import { Character } from "../characterTypes";

export const lynae: Character = {
    id: "lynae",
    name: "Lynae",
    rarity: 5,
    element: "Spectro",
    weaponType: "Pistols",
    role: "Hybrid",
    tags: ["Hybrid Buffer", "Team DMG Buff", "Liberation Buffer", "Tune Break Enabler"],
    profileType: "Versatile",
    potential: "S",
    tier: {
        overall: "R0",
        tower: "R0",
        wastes: "R0.5"
    },
    imagePortrait: "/images/characters/LynaeSmall.png",
    imageIcon: "/images/characters/LynaeSmall.png",
    imageCard: "/images/characters/LynaeLarge.png",
    stats: {
        hp: 12238,
        atk: 375,
        def: 1198
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "Crit Rate", value: "8%", stat: "critRate", amount: 8 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Exoswarm Core", count: 4, icon: "/images/else/lfexoswarmcore.png" },
            { name: "Rimewisp", count: 60, icon: "/images/else/rimewisp.png" },
            { name: "MF Exoswarm Core", count: 12, icon: "/images/else/mfexoswarmcore.png" },
            { name: "HF Exoswarm Core", count: 12, icon: "/images/else/hfexoswarmcore.png" },
            { name: "FF Exoswarm Core", count: 4, icon: "/images/else/ffexoswarmcore.png" },
            { name: "Suncoveter's Reach", count: 46, icon: "/images/else/suncovetersreach.png" }
        ],
        skills: [
            { name: "LF Exoswarm Core", count: 25, icon: "/images/else/lfexoswarmcore.png" },
            { name: "MF Exoswarm Core", count: 28, icon: "/images/else/mfexoswarmcore.png" },
            { name: "HF Exoswarm Core", count: 40, icon: "/images/else/hfexoswarmcore.png" },
            { name: "FF Exoswarm Core", count: 57, icon: "/images/else/ffexoswarmcore.png" },
            { name: "Incomplete Combustor", count: 25, icon: "/images/else/incompletecombustor.png" },
            { name: "Aftertune Combustor", count: 28, icon: "/images/else/aftertunecombustor.png" },
            { name: "Remnant Combustor", count: 55, icon: "/images/else/remnantcombustor.png" },
            { name: "Reverb Combustor", count: 67, icon: "/images/else/reverbcombustor.png" },
            { name: "Dreamless Feather", count: 26, icon: "/images/else/dreamlessfeather.png" }
        ],
        ascensionRanks: [
            {
                rank: 1,
                levelRange: "Lv. 20-40",
                materials: [
                    { name: "LF Exoswarm Core", count: 4, icon: "/images/else/lfexoswarmcore.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "MF Exoswarm Core", count: 4, icon: "/images/else/mfexoswarmcore.png" },
                    { name: "Suncoveter's Reach", count: 3, icon: "/images/else/suncovetersreach.png" },
                    { name: "Rimewisp", count: 4, icon: "/images/else/rimewisp.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Exoswarm Core", count: 8, icon: "/images/else/mfexoswarmcore.png" },
                    { name: "Suncoveter's Reach", count: 6, icon: "/images/else/suncovetersreach.png" },
                    { name: "Rimewisp", count: 8, icon: "/images/else/rimewisp.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Exoswarm Core", count: 4, icon: "/images/else/hfexoswarmcore.png" },
                    { name: "Suncoveter's Reach", count: 9, icon: "/images/else/suncovetersreach.png" },
                    { name: "Rimewisp", count: 12, icon: "/images/else/rimewisp.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Exoswarm Core", count: 8, icon: "/images/else/hfexoswarmcore.png" },
                    { name: "Suncoveter's Reach", count: 12, icon: "/images/else/suncovetersreach.png" },
                    { name: "Rimewisp", count: 16, icon: "/images/else/rimewisp.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Exoswarm Core", count: 4, icon: "/images/else/ffexoswarmcore.png" },
                    { name: "Suncoveter's Reach", count: 16, icon: "/images/else/suncovetersreach.png" },
                    { name: "Rimewisp", count: 20, icon: "/images/else/rimewisp.png" }
                ]
            }
        ],
        weapon: {
            name: "Spectrum Blaster",
            icon: "/images/weapons/spectrumblaster.png",
            total: [
                { name: "MF Exoswarm Core", count: 20, icon: "/images/else/mfexoswarmcore.png" },
                { name: "HF Exoswarm Core", count: 20, icon: "/images/else/hfexoswarmcore.png" },
                { name: "FF Exoswarm Core", count: 12, icon: "/images/else/ffexoswarmcore.png" },
                { name: "Incomplete Combustor", count: 26, icon: "/images/else/incompletecombustor.png" },
                { name: "Aftertune Combustor", count: 26, icon: "/images/else/aftertunecombustor.png" },
                { name: "Remnant Combustor", count: 16, icon: "/images/else/remnantcombustor.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Exoswarm Core", count: 6, icon: "/images/else/lfexoswarmcore.png" },
                        { name: "Incomplete Combustor", count: 6, icon: "/images/else/incompletecombustor.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Exoswarm Core", count: 6, icon: "/images/else/mfexoswarmcore.png" },
                        { name: "Incomplete Combustor", count: 6, icon: "/images/else/incompletecombustor.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Exoswarm Core", count: 10, icon: "/images/else/mfexoswarmcore.png" },
                        { name: "Incomplete Combustor", count: 10, icon: "/images/else/incompletecombustor.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Exoswarm Core", count: 6, icon: "/images/else/hfexoswarmcore.png" },
                        { name: "Aftertune Combustor", count: 6, icon: "/images/else/aftertunecombustor.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Exoswarm Core", count: 10, icon: "/images/else/hfexoswarmcore.png" },
                        { name: "Aftertune Combustor", count: 10, icon: "/images/else/aftertunecombustor.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Exoswarm Core", count: 6, icon: "/images/else/ffexoswarmcore.png" },
                        { name: "Remnant Combustor", count: 6, icon: "/images/else/remnantcombustor.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Lynae is a top-tier **Spectro Pistol Hybrid Buffer** and the first character to utilize new **Tune Break** mechanics (Tune Rupture/Tune Strain). She is a "Core Meta Enabler" for modern teams and a massive generalist Support/Sub-DPS who provides long-lasting buffs suitable for any rotation.
        
        Her kit revolves around her "Kaleidoscopic Parade" state where she gains enhanced mobility (skating) and uses "Overflow" and "Lumiflow" gauges. While she can be played as a Main DPS, her true value lies in her exceptional off-field damage and powerful team buffs.`,
        playstyle: "Into -> Skill (Fill Overflow) -> Liberation (Buff) -> Heavy (Convert to Lumiflow) -> Parade State -> Outro.",
        pros: [
            "**Long-Lasting Team Buffs**: Resonance Liberation provides a massive 24% 'All Damage' bonus lasting 30 seconds - one of the game's longest durations.",
            "**Exceptional Sub-DPS Output**: Contributes significant off-field damage, increasing total team DPS without taking field time.",
            "**Powerful Outro Synergy**: Grants 25% Resonance Liberation DMG Deepen, perfect for ultimate-heavy units (Iuno/Jinhsi).",
            "**Core Meta Enabler**: Fundamental for 'Tomb Break' archetypes and Version 3.0+ mechanics.",
            "**Exploration Utility**: 'Kaleidoscopic Parade' skating mechanic offers high mobility for exploration and combat dodging.",
            "**F2P Friendly Gear**: Performs exceptionally well with standard 5-star pistols, reducing gacha dependency."
        ],
        cons: [
            "**Complex Resource Management**: Juggling 'Overflow' and 'Lumiflow' bars takes practice to master.",
            "**Punishing Idle States**: 'Lumiflow' drains rapidly if stationary, forcing a high-intensity, constant-motion playstyle.",
            "**Inflexible Swap Mechanics**: Jump/Aerial animations don't swap-cancel well; switching early often results in damage loss.",
            "**Internal Cooldown Tracking**: Her strongest hit 'Visual Impact' has an ICD; triggering it too early wastes potential burst.",
            "**Average Main DPS Scaling**: While playable as a carry, her ceiling is notably lower than dedicated Main DPS units."
        ]
    },
    skills: [
        {
            name: "Basic: Chroma Drift",
            type: "Basic",
            description: "3-hit combo (Spectro). **Spark Collision** (full Overflow, hold): 3 levels based on Lumiflow (converts 15/0.2s → 12.5%), enter **Kaleidoscopic Parade**. **Parade Attacks**: 5-hit skating, Ground/Mid-air Heavy, enhanced Dodge Counter.",
            attributes: [
                { name: "Basic P3", value: "62.05%" },
                { name: "Spark Collision L3", value: "139.72% * 2" },
                { name: "Parade P5", value: "38.00% + 7.60% * 5 + 50.66%" },
                { name: "Dodge Counter", value: "120.70%" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Lynae-Style Palettes",
            type: "Skill",
            description: "Spectro DMG + Overflow regen. In Parade: **Additive Color** (ground Skill). Hold in Parade → exit state. Shared 6s CD.",
            attributes: [
                { name: "Palettes DMG", value: "70.08% + 23.36% * 3" },
                { name: "Additive Color", value: "58.50% * 2" },
                { name: "Cooldown", value: "6s" }
            ],
            priority: 2
        },
        {
            name: "Forte: Chromaticity Modeling",
            type: "Forte",
            description: "**Overflow** (max 120): Build via Basic/Skill → full enables Spark Collision. **Lumiflow** (max 120): Regen while moving, drains when still. **True Color** (max 3): Gain via **Polychrome Leap** (Jump attack, consumes 1/3 Lumiflow). At 3 → **Visual Impact** (612% nuke, +40 Tune Break Boost to team). **Iridescent Splash** (153%, when Impact on CD). +25% Spectro after Intro (Inherent).",
            attributes: [
                { name: "Visual Impact", value: "612.00%" },
                { name: "Iridescent Splash", value: "153.00%" },
                { name: "Polychrome Leap", value: "17.00% * 3 / 8.50% * 6 / 6.59% * 8" },
                { name: "Tune Rupture", value: "946.00% Tune AMP" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Prismatic Overblast",
            type: "Ultimate",
            description: "10-hit Spectro DMG. Grants team **24% All-DMG Bonus** (30s). **To a Vivid Tomorrow!** (follow-up Basic).",
            attributes: [
                { name: "Skill DMG", value: "44.00% * 10" },
                { name: "Follow-up", value: "4.22% * 12 + 5.06% * 10" },
                { name: "Team Buff", value: "+24% All DMG" },
                { name: "Duration", value: "30s" }
            ],
            priority: 4
        },
        {
            name: "Intro: Time to Show Some Colors!",
            type: "Intro",
            description: "10-hit Spectro DMG. **Instantly recovers 100 Overflow** (in Optical Sampling). Inflicts Photochromic Flux.",
            attributes: [
                { name: "Skill DMG", value: "11.31% * 10" },
                { name: "Overflow", value: "+100" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 3
        },
        {
            name: "Outro: Let's Hit the Road!",
            type: "Outro",
            description: "100% Spectro DMG. Next Resonator: **15% All-DMG Amp**, **25% Liberation DMG Amp** (14s, ends on swap).",
            attributes: [
                { name: "Outro DMG", value: "100%" },
                { name: "All Amp", value: "+15%" },
                { name: "Lib Amp", value: "+25%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Polychrome Leap DMG **+120%**. Grants **Interruption Immunity**." },
        { node: "S2", name: "Sequence Node 2", description: "Self All-DMG **+25%**. Outro now grants **25% All-DMG Amplification** (Up from 15%)." },
        { node: "S3", name: "Sequence Node 3", description: "Visual Impact DMG **+90%**. Stacking buff mechanic added." },
        { node: "S4", name: "Sequence Node 4", description: "ATK increased by **20%**." },
        { node: "S5", name: "Sequence Node 5", description: "Liberation DMG increased by **70%**." },
        { node: "S6", name: "Sequence Node 6", description: "Increases Basic/Visual Impact DMG by **30%** per stack. **Lumiflow Cap +200%**." }
    ],
    rotation: [
        "1. **Intro**: Use to fill Overflow instantly.",
        "2. **Skill**: Top off Overflow if needed.",
        "3. **Liberation**: Cast for Team Buffs.",
        "4. **Heavy**: Hold to cast **Spark Collision**, entering Parade State.",
        "5. **Parade**: Jump x3 (Polychrome Leaps) to build True Color.",
        "6. **Finisher**: Use **Visual Impact** (Mid-air Attack) with 3 True Color stacks.",
        "7. **Outro**: Switch to Main DPS."
    ],
    builds: {
        weapons: [
            {
                name: "Spectrum Blaster",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Perfect synergy. Grants Team All-DMG Bonus.",
                image: "/images/weapons/spectrumblaster.png"
            },
            {
                name: "Static Mist",
                rank: "Best Alternative",
                rarity: 5,
                description: "Boosts next character's ATK on Outro. Strong support option.",
                image: "/images/weapons/staticmist.png"
            },
            {
                name: "Phasic Homogenizer",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Great generalist stat stick with All-Attribute DMG Bonus.",
                image: "/images/weapons/phasichomogenizer.png"
            },
            {
                name: "Novaburst",
                rank: "4-Star Option",
                rarity: 4,
                description: "Decent attack boost on dodge.",
                image: "/images/weapons/novaburst.png"
            }
        ],
        echoes: [
            {
                set: "Pact of Neonlight Leap (5pc)",
                mainEcho: "Hyvatia",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Spectro DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Energy Regen", "ATK%"]
                },
                description: "Best Set. Maximizes Buffing Capabilities.",
                recommendation_reason: "Tailor-made for Spectro Supporters/Hybrids.",
                echo_breakdown: {
                    cost4: [{ name: "Hyvatia", image: "/images/echoes/hyvatia.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Spectro DMG"] },
                        { name: "Glacio Dreadmane", image: "/images/echoes/glaciodreadmane.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Spectro Prism", image: "/images/echoes/spectroprism.png", mainStats: ["ATK%"] },
                        { name: "Cruisewing", image: "/images/echoes/cruisewing.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Spectro DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Universal Support Set.",
                recommendation_reason: "Standard reliable support option.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Spectro DMG"] },
                        { name: "Lightcrusher", image: "/images/echoes/lightcrusher.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Snip Snap", image: "/images/echoes/snipsnap.png", mainStats: ["ATK%"] },
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (125%+) > Crit Rate/DMG > Spectro DMG > ATK%"
    },
    teams: [
        {
            name: "Liberation Nuke Team",
            description: "Buffing Liberation-focused carries.",
            members: [
                { name: "Iuno", role: "Main DPS" },
                { name: "Lynae", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "Sun & Moon",
            description: "High Synergy Hybrid Team.",
            members: [
                { name: "Augusta", role: "Main DPS" },
                { name: "Lynae", role: "Sub DPS" },
                { name: "Iuno", role: "Sub DPS" }
            ]
        }
    ]
};
