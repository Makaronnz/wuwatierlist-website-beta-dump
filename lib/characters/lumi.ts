import { Character } from "../characterTypes";

export const lumi: Character = {
    id: "lumi",
    name: "Lumi",
    rarity: 4,
    element: "Electro",
    weaponType: "Broadblade",
    role: "Hybrid",
    tags: ["Skill DMG Buff", "Hybrid", "Mobile", "Coordinated Attacks"],
    tier: {
        overall: "R3",
        tower: "R3",
        wastes: "R3"
    },
    imagePortrait: "/images/characters/LumiSmall.png",
    imageIcon: "/images/characters/LumiSmall.png",
    imageCard: "/images/characters/LumiLarge.png",
    stats: {
        hp: 8500,
        atk: 338,
        def: 880
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "Electro DMG", value: "8%", stat: "electroDamage", amount: 8 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Howler Core", count: 4, icon: "/images/else/lfhowlercore.png" },
            { name: "Terraspawn Fungus", count: 60, icon: "/images/else/terraspawnfungus.png" },
            { name: "MF Howler Core", count: 12, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 12, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
            { name: "Thundering Tacet Core", count: 46, icon: "/images/else/thunderingtacetcore.png" }
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
                    { name: "Thundering Tacet Core", count: 3, icon: "/images/else/thunderingtacetcore.png" },
                    { name: "Terraspawn Fungus", count: 4, icon: "/images/else/terraspawnfungus.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Howler Core", count: 8, icon: "/images/else/mfhowlercore.png" },
                    { name: "Thundering Tacet Core", count: 6, icon: "/images/else/thunderingtacetcore.png" },
                    { name: "Terraspawn Fungus", count: 8, icon: "/images/else/terraspawnfungus.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Howler Core", count: 4, icon: "/images/else/hfhowlercore.png" },
                    { name: "Thundering Tacet Core", count: 9, icon: "/images/else/thunderingtacetcore.png" },
                    { name: "Terraspawn Fungus", count: 12, icon: "/images/else/terraspawnfungus.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Howler Core", count: 8, icon: "/images/else/hfhowlercore.png" },
                    { name: "Thundering Tacet Core", count: 12, icon: "/images/else/thunderingtacetcore.png" },
                    { name: "Terraspawn Fungus", count: 16, icon: "/images/else/terraspawnfungus.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
                    { name: "Thundering Tacet Core", count: 16, icon: "/images/else/thunderingtacetcore.png" },
                    { name: "Terraspawn Fungus", count: 20, icon: "/images/else/terraspawnfungus.png" }
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
        overview: `Lumi is a **Electro Broadblade Sub-DPS** who primarily functions as a buffer for **Resonance Skill DMG**. Her Outro provides a massive **38% Skill Amplify** to the next character, making her an excellent partner for Skill-focused DPS like Changli or Jinhsi (though Jinhsi prefers Coordinated Attacks).
        
        She features a unique dual-mode playstyle (Yellow Light Ranged vs. Red Light Melee) and can swap between them to build energy. While primarily a buffer, she can deal respectable damage if built for crit.`,
        playstyle: "Charge Sparks -> Enhanced Skill (Swap Mode) -> Repeat -> Outro.",
        pros: [
            "**Powerful Buffer**: +38% Resonance Skill DMG Amplify is very rare and strong.",
            "**Hybrid Playstyle**: Can swap between melee and ranged for flexibility.",
            "**Defensive Shred**: S2 ignores 20% DEF on skills.",
            "**Easy Rotation**: Simple loop of charging sparks and swapping modes."
        ],
        cons: [
            "**Long Field Time**: Requires time to build sparks compared to quick-swap supports.",
            "**Energy Hungry**: Needs high ER (~140-150%) to Ult consistently.",
            "**Niche**: Only buffs Skill DMG, limiting her team options compared to universal buffers."
        ]
    },
    skills: [
        {
            name: "Basic: Navigation Support",
            type: "Basic",
            description: "**Yellow Light**: Ranged shots via Squeakie (3-hit, Glitter in Zoom). **Red Light**: 3-hit melee combo. Shared plunge.",
            attributes: [
                { name: "Yellow Basic", value: "16.00% * 3" },
                { name: "Glitter", value: "32.00%" },
                { name: "Red P1", value: "45.60%" },
                { name: "Red P3", value: "32.49% + 75.81%" },
                { name: "Dodge Counter", value: "84.15% + 16.83% * 5" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Searchlight Service",
            type: "Skill",
            description: "**Pounce** (Yellow→Red): Costs stamina, mode swap. **Rebound** (Red→Yellow): Leap back + swap. No CD, stamina cost.",
            attributes: [
                { name: "Pounce DMG", value: "91.20%" },
                { name: "Rebound DMG", value: "87.40%" },
                { name: "Stamina Cost", value: "30" }
            ],
            priority: 2
        },
        {
            name: "Forte: Signal Light",
            type: "Forte",
            description: "**Light Sparks** (max 100 each color): Full → **Energized Pounce/Rebound** (enhanced swap, Liberation DMG). **Spotlight Mode**: Enhanced attacks (4 Red hits / 6 Yellow Glares). **Laser** (on Outro): Consumes Sparks (25+), up to 4 beams. +10% Electro in Red (Inherent). +10% ATK after Energized (Inherent).",
            attributes: [
                { name: "Energized Pounce", value: "92.20% * 2" },
                { name: "Energized Rebound", value: "126.60%" },
                { name: "Glare", value: "41.00%" },
                { name: "Laser Beam", value: "37.50% each" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Squeakie Express",
            type: "Ultimate",
            description: "Throw giant Squeakie for massive Electro nuke.",
            attributes: [
                { name: "Skill DMG", value: "480.00%" },
                { name: "Cooldown", value: "20s" },
                { name: "Energy Cost", value: "125" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 3
        },
        {
            name: "Intro: Special Delivery",
            type: "Intro",
            description: "Enter Yellow Light Mode. Deal Electro DMG.",
            attributes: [
                { name: "Skill DMG", value: "28.34% * 3" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Escorting",
            type: "Outro",
            description: "Next Resonator: **Resonance Skill DMG Amplified by 38%** for 10s or until swapped out.",
            attributes: [
                { name: "Skill Amp", value: "+38%" },
                { name: "Duration", value: "10s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Recovers **60 Stamina** after Energized Rebound." },
        { node: "S2", name: "Sequence Node 2", description: "Enhanced Skills ignore **20% DEF**." },
        { node: "S3", name: "Sequence Node 3", description: "Liberation DMG increased by **30%**." },
        { node: "S4", name: "Sequence Node 4", description: "Gain **30% Basic Attack DMG Bonus**." },
        { node: "S5", name: "Sequence Node 5", description: "Laser DMG Multiplier increased by **100%**." },
        { node: "S6", name: "Sequence Node 6", description: "Liberation increases **Team ATK by 20%** for 20s." }
    ],
    rotation: [
        "1. **Intro**: Enter in Yellow Mode.",
        "2. **Charge**: Use Basic/Sprint to fill Yellow Sparks.",
        "3. **Skill**: Use **Energized Pounce** to swap to Red Mode.",
        "4. **Combat**: Use Red Mode attacks to fill Red Sparks.",
        "5. **Skill**: Use **Energized Rebound** to swap back (optional).",
        "6. **Liberation**: Cast when ready.",
        "7. **Outro**: Switch to Skill DMG DPS."
    ],
    builds: {
        weapons: [
            {
                name: "Ages of Harvest",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Best damage option. Skill DMG Bonus fits her perfectly.",
                image: "/images/weapons/agesofharvest.png"
            },
            {
                name: "Verdant Summit",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Huge Crit DMG stat stick.",
                image: "/images/weapons/verdantsummit.png"
            },
            {
                name: "Lustrous Razor",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "High Base ATK and Energy Regen.",
                image: "/images/weapons/lustrousrazor.png"
            },
            {
                name: "Discord",
                rank: "4-Star Utility",
                rarity: 4,
                description: "Concerto Energy helps faster rotations.",
                image: "/images/weapons/discord.png"
            }
        ],
        echoes: [
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Electro DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Best Support set. Maximizes Outro buffs.",
                recommendation_reason: "Standard Sub-DPS build.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Electro Predator", image: "/images/echoes/electropredator.png", mainStats: ["Electro DMG"] },
                        { name: "Flautist", image: "/images/echoes/flautist.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Fusion Dreadmane", image: "/images/echoes/fusiondreadmane.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Void Thunder (5pc)",
                mainEcho: "Thundering Mephis",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Electro DMG", "Electro DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Personal Damage set.",
                recommendation_reason: "If you want Lumi to do more damage herself.",
                echo_breakdown: {
                    cost4: [{ name: "Thundering Mephis", image: "/images/echoes/thunderingmephis.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Electro Predator", image: "/images/echoes/electropredator.png", mainStats: ["Electro DMG"] },
                        { name: "Violet-Feathered Heron", image: "/images/echoes/violetfeatheredheron.png", mainStats: ["Electro DMG"] }
                    ],
                    cost1: [
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] },
                        { name: "Havoc Dreadmane", image: "/images/echoes/havocdreadmane.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (140%+) > Crit Rate/DMG > Electro DMG > ATK%"
    },
    teams: [
        {
            name: "Skill DMG Comp",
            description: "Buffing Changli's massive Skill DMG.",
            members: [
                { name: "Changli", role: "Main DPS" },
                { name: "Lumi", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "Hybrid Team",
            description: "Flexible team with decent buffs.",
            members: [
                { name: "Carlotta", role: "Main DPS" },
                { name: "Lumi", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        }
    ]
};
