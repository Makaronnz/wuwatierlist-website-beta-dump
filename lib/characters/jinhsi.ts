import { Character } from "../characterTypes";

export const jinhsi: Character = {
    id: "jinhsi",
    name: "Jinhsi",
    rarity: 5,
    element: "Spectro",
    weaponType: "Broadblade",
    role: "Main DPS",
    tags: ["Resonance Skill DMG", "Burst", "Coordinated Attack Synergy", "Unison"],
    profileType: "Specialist",
    potential: "A",
    tier: {
        overall: "R1",
        tower: "R1",
        wastes: "R2"
    },
    imagePortrait: "/images/characters/JinhsiSmall.png",
    imageIcon: "/images/characters/JinhsiSmall.png",
    imageCard: "/images/characters/JinhsiLarge.png",
    stats: {
        hp: 10825,
        atk: 413,
        def: 1258
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "Spectro DMG", value: "12%", stat: "spectroDamage", amount: 12 },
        { name: "CRIT Rate", value: "8%", stat: "critRate", amount: 8 }
    ],
    materials: {
        ascension: [
            { name: "LF Howler Core", count: 4, icon: "/images/else/lfhowlercore.png" },
            { name: "Loong's Pearl", count: 60, icon: "/images/else/loongspearl.png" },
            { name: "MF Howler Core", count: 12, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 12, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
            { name: "Elegy Tacet Core", count: 46, icon: "/images/else/elegytacetcore.png" }
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
            { name: "Sentinel's Dagger", count: 26, icon: "/images/else/sentinelsdagger.png" }
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
                    { name: "Elegy Tacet Core", count: 3, icon: "/images/else/elegytacetcore.png" },
                    { name: "Loong's Pearl", count: 4, icon: "/images/else/loongspearl.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Howler Core", count: 8, icon: "/images/else/mfhowlercore.png" },
                    { name: "Elegy Tacet Core", count: 6, icon: "/images/else/elegytacetcore.png" },
                    { name: "Loong's Pearl", count: 8, icon: "/images/else/loongspearl.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Howler Core", count: 4, icon: "/images/else/hfhowlercore.png" },
                    { name: "Elegy Tacet Core", count: 9, icon: "/images/else/elegytacetcore.png" },
                    { name: "Loong's Pearl", count: 12, icon: "/images/else/loongspearl.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Howler Core", count: 8, icon: "/images/else/hfhowlercore.png" },
                    { name: "Elegy Tacet Core", count: 12, icon: "/images/else/elegytacetcore.png" },
                    { name: "Loong's Pearl", count: 16, icon: "/images/else/loongspearl.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
                    { name: "Elegy Tacet Core", count: 16, icon: "/images/else/elegytacetcore.png" },
                    { name: "Loong's Pearl", count: 20, icon: "/images/else/loongspearl.png" }
                ]
            }
        ],
        weapon: {
            name: "Ages of Harvest",
            icon: "/images/weapons/agesofharvest.png",
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
        overview: `Jinhsi is a world-class **Spectro Broadblade Main DPS** who specializes in massive burst damage via her **Resonance Skill** (Illuminous Epiphany).
        
        Her kit revolves around building **Incandescence** stacks through team-wide coordinated attacks and elemental damage. Once stacked, she unleashes a devastating beam that can one-shot many enemies. She features a unique **Unison** mechanic that allows for seamless rotations.`,
        playstyle: "Team Coordinated Attacks -> Jinhsi Intro -> Skill -> Incarnation Mode -> Max Incandescence Nuke -> Outro.",
        pros: [
            "**Incredible Burst**: One of the highest single-hit damage potentials in the game.",
            "**Aerial Combat**: Incarnation state provides flight and safety from ground attacks.",
            "**Unison Mechanic**: Allows for flexible and faster team rotations.",
            "**Ease of Use**: Auto-targeting on her beam and skills is very generous."
        ],
        cons: [
            "**Teammate Dependent**: Needs teammates with frequent Coordinated Attacks (Zhezhi, Yinlin, Yuanwu) to function optimally.",
            "**Complexity**: Requires understanding of Incandescence and Unison for max potential.",
            "**Vulnerable in Air**: While safe from ground, she can still be hit by projectiles/large hitboxes."
        ]
    },
    skills: [
        {
            name: "Basic: Slash of Breaking Dawn",
            type: "Basic",
            description: "Perform up to 4 consecutive strikes dealing Spectro DMG. In **Incarnation** state, replaced by enhanced aerial combos (considered Skill DMG).",
            attributes: [
                { name: "Stage 1 DMG", value: "33.43%" },
                { name: "Stage 2 DMG", value: "19.61% + 9.81% * 3" },
                { name: "Stage 3 DMG", value: "5.36% * 7 + 16.07%" },
                { name: "Stage 4 DMG", value: "31.74% + 47.60%" },
                { name: "Incarnation P1 DMG", value: "44.58%" },
                { name: "Incarnation P2 DMG", value: "39.22% + 13.08% * 2" },
                { name: "Incarnation P3 DMG", value: "50.02% + 33.35%" },
                { name: "Incarnation P4 DMG", value: "9.39% * 6 + 37.56%" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Trailing Lights of Eons",
            type: "Skill",
            description: "**Standard**: Dash attack. **Overflowing Radiance** (after Basic 4/Intro): Enter Incarnation (10s). **Crescent Divinity** (in Incarnation): Big Spectro DMG. **Illuminous Epiphany** (after Incarnation P4): THE NUKE - consumes Incandescence.",
            attributes: [
                { name: "Standard Skill DMG", value: "9.79% * 4 + 39.15%" },
                { name: "Overflowing Radiance DMG", value: "4.96% * 4 + 14.88% * 4 + 19.84%" },
                { name: "Crescent Divinity DMG", value: "50.68% + 38.01% * 2 + 126.70%" },
                { name: "Solar Flare DMG", value: "10.00% * 6" },
                { name: "Stella Glamor DMG", value: "175.00%" },
                { name: "Per Incandescence Bonus", value: "+22.40%" },
                { name: "Standard CD", value: "3s" },
                { name: "Overflowing CD", value: "12s" },
                { name: "Crescent CD", value: "10s" }
            ],
            priority: 4
        },
        {
            name: "Forte Circuit: Luminal Synthesis",
            type: "Forte",
            description: "**Incandescence**: Max 50. Gained from ally damage (1/3s) and Coordinated Attacks (2/3s per element). After Outro → 1/1s cooldown. **Unison**: After Illuminous Epiphany, gain instant Outro (25s CD). **Incarnation**: 10s flight state with enhanced abilities.",
            attributes: [
                { name: "Max Incandescence", value: "50" },
                { name: "Base Generation", value: "1/3s per element" },
                { name: "Coordinated Gen", value: "2/3s per element" },
                { name: "Post-Outro Gen", value: "1/1s per element" },
                { name: "Incarnation Duration", value: "10s" },
                { name: "Unison CD", value: "25s" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Purge of Light",
            type: "Ultimate",
            description: "Unleash massive Spectro DMG. Can be cast in mid-air. High energy cost but devastating damage.",
            attributes: [
                { name: "Skill DMG", value: "251.40% + 586.60%" },
                { name: "Cooldown", value: "24s" },
                { name: "Energy Cost", value: "150" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 2
        },
        {
            name: "Intro: Loong's Halo",
            type: "Intro",
            description: "Attack target dealing Spectro DMG. Enables Overflowing Radiance. +50% DMG via Inherent Skill.",
            attributes: [
                { name: "Skill DMG", value: "80.00% (+50% Inherent)" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 2
        },
        {
            name: "Outro: Temporal Bender",
            type: "Outro",
            description: "For 20s, Incandescence generation cooldown reduced from 3s to 1s per element type. Essential for maximizing Illuminous Epiphany stacks.",
            attributes: [
                { name: "Duration", value: "20s" },
                { name: "Gen Cooldown", value: "1s (from 3s)" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Casting Incarnation Basic/Skill grants stacks. Max stacks boost **Illuminous Epiphany DMG by 80%**." },
        { node: "S2", name: "Sequence Node 2", description: "Restores **50 Incandescence** when out of combat (Instant start)." },
        { node: "S3", name: "Sequence Node 3", description: "Intro grants **ATK +50%** (2 stacks)." },
        { node: "S4", name: "Sequence Node 4", description: "Liberation/Skill grants team **20% All-Elemental DMG Bonus**." },
        { node: "S5", name: "Sequence Node 5", description: "Liberation DMG increased by **120%**." },
        { node: "S6", name: "Sequence Node 6", description: "Illuminous Epiphany Multiplier **+45%**. Incandescence Multiplier **+45%**." }
    ],
    rotation: [
        "1. **Team**: Setup Coordinated Attacks (Verina, Zhezhi/Yinlin).",
        "2. **Intro**: Jinhsi Enters.",
        "3. **Skill 1**: Overflowing Radiance (Enter Incarnation).",
        "4. **Skill 2**: Crescent Divinity.",
        "5. **Attacks**: Basic Attack x4 (Build Stacks/Concerto).",
        "6. **NUKE**: Cast **Illuminous Epiphany** (Consumes Incandescence).",
        "7. **Liberation**: Cast anytime (preferably full buffs).",
        "8. **Outro**: Switch out."
    ],
    builds: {
        weapons: [
            {
                name: "Ages of Harvest",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Tailor-made for Jinhsi. Massive Skill DMG stats.",
                image: "/images/weapons/agesofharvest.png"
            },
            {
                name: "Wildfire Mark",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Lupa's Signature. Strong Liberation buff and Crit DMG.",
                image: "/images/weapons/wildfiremark.png"
            },
            {
                name: "Verdant Summit",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Jiyan's Signature. Great Crit DMG stat stick.",
                image: "/images/weapons/verdantsummit.png"
            },
            {
                name: "Lustrous Razor",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Good ATK and Energy Regen. Solid baseline.",
                image: "/images/weapons/lustrousrazor.png"
            },
            {
                name: "Helios Cleaver",
                rank: "4-Star Option",
                rarity: 4,
                description: "ATK stat stick. Better than Autumntrace for Jinhsi.",
                image: "/images/weapons/helioscleaver.png"
            }
        ],
        echoes: [
            {
                set: "Celestial Light (5pc)",
                mainEcho: "Jué",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Spectro DMG", "Spectro DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Skill DMG", "ATK%", "Energy Regen"]
                },
                description: "Best in slot. Jué provides Incandescence stacks and Skill DMG buff.",
                recommendation_reason: "Essential for max damage.",
                echo_breakdown: {
                    cost4: [{ name: "Jue", image: "/images/echoes/ju.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Spectro Prism", image: "/images/echoes/spectroprism.png", mainStats: ["Spectro DMG"] },
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Spectro DMG"] }
                    ],
                    cost1: [
                        { name: "Spectro Prism", image: "/images/echoes/spectroprism.png", mainStats: ["ATK%"] },
                        { name: "Traffic Light", image: "/images/echoes/trafficlight.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Celestial Light (2pc) + Lingering Tunes (2pc)",
                mainEcho: "Jué",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Spectro DMG", "Spectro DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Skill DMG", "ATK%"]
                },
                description: "Good transitional set if lacking full 5pc.",
                recommendation_reason: "Flexible 2pc options.",
                echo_breakdown: {
                    cost4: [{ name: "Jue", image: "/images/echoes/jue.png?placeholder=true", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Lightcrusher", image: "/images/echoes/lightcrusher.png", mainStats: ["Spectro DMG"] },
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Spectro DMG"] }
                    ],
                    cost1: [
                        { name: "Cruisewing", image: "/images/echoes/cruisewing.png", mainStats: ["ATK%"] },
                        { name: "Diamondclaw", image: "/images/echoes/diamondclaw.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Skill DMG > ATK% > Energy Regen (115% for smoothing)"
    },
    teams: [
        {
            name: "Best Team",
            description: "High Synergy for Incandescence generation.",
            members: [
                { name: "Jinhsi", role: "Main DPS" },
                { name: "Zhezhi", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "Coordinated Setup",
            description: "Using Yinlin/Yuanwu for stack generation.",
            members: [
                { name: "Jinhsi", role: "Main DPS" },
                { name: "Yinlin", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        }
    ]
};
