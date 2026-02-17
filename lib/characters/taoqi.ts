import { Character } from "../characterTypes";

export const taoqi: Character = {
    id: "taoqi",
    name: "Taoqi",
    rarity: 4,
    element: "Havoc",
    weaponType: "Broadblade",
    role: "Hybrid",
    tags: ["Shielder", "Skill DMG Buff", "Damage Reduction", "Tank"],
    tier: {
        overall: "R3",
        tower: "R3",
        wastes: "R3"
    },
    imagePortrait: "/images/characters/TaoqiSmall.png",
    imageIcon: "/images/characters/TaoqiSmall.png",
    imageCard: "/images/characters/TaoqiLarge.png",
    stats: {
        hp: 8950,
        atk: 225,
        def: 1564
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "DEF", value: "15.2%", stat: "def", amount: 15.2 },
        { name: "Havoc DMG", value: "12%", stat: "havocDamage", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Howler Core", count: 4, icon: "/images/else/lfhowlercore.png" },
            { name: "Iris", count: 60, icon: "/images/else/iris.png" },
            { name: "MF Howler Core", count: 12, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 12, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
            { name: "Gold-Dissolving Feather", count: 46, icon: "/images/else/golddissolvingfeather.png" }
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
            { name: "Dreamless Feather", count: 26, icon: "/images/else/dreamlessfeather.png" }
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
                    { name: "Gold-Dissolving Feather", count: 3, icon: "/images/else/golddissolvingfeather.png" },
                    { name: "Iris", count: 4, icon: "/images/else/iris.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Howler Core", count: 8, icon: "/images/else/mfhowlercore.png" },
                    { name: "Gold-Dissolving Feather", count: 6, icon: "/images/else/golddissolvingfeather.png" },
                    { name: "Iris", count: 8, icon: "/images/else/iris.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Howler Core", count: 4, icon: "/images/else/hfhowlercore.png" },
                    { name: "Gold-Dissolving Feather", count: 9, icon: "/images/else/golddissolvingfeather.png" },
                    { name: "Iris", count: 12, icon: "/images/else/iris.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Howler Core", count: 8, icon: "/images/else/hfhowlercore.png" },
                    { name: "Gold-Dissolving Feather", count: 12, icon: "/images/else/golddissolvingfeather.png" },
                    { name: "Iris", count: 16, icon: "/images/else/iris.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
                    { name: "Gold-Dissolving Feather", count: 16, icon: "/images/else/golddissolvingfeather.png" },
                    { name: "Iris", count: 20, icon: "/images/else/iris.png" }
                ]
            }
        ],
        weapon: {
            name: "Dauntless Evernight",
            icon: "/images/weapons/dauntlessevernight.png",
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
        overview: `Taoqi is a 4-star Havoc Broadblade user who serves as a **Defensive Support** and **Skill DMG Buffer**. She provides shields, damage reduction, and a massive **38% Resonance Skill DMG Deepen** buff through her Outro Skill, making her a niche but powerful support for Skill-based DPS characters like **Jinhsi** and **Danjin** (and historically, Havoc Rover).
        
        However, her slow animations, reliance on getting hit for counters, and long field time make her clunky to play in optimal rotations. She excels in providing comfortable sustain for players who want a tankier team or maximizing "Damage Per Screenshot" numbers.`,
        playstyle: "Strategic Parry (Wait for hit) -> Basic Attack Chain -> Outro.",
        pros: [
            "**Massive Skill Buff**: 38% Resonance Skill Deepen is unmatched for specific DPS.",
            "**Tanky**: Provides shields and damage reduction, increasing team survivability.",
            "**F2P Friendly**: Scales off DEF and uses a 4-star craftable weapon as BiS."
        ],
        cons: [
            "**Slow**: Extremely slow animations and field time requirements.",
            "**Clunky**: 'Strategic Parry' requires getting hit or perfect timing.",
            "**Low Personal DMG**: Even with DEF scaling, her damage is negligible."
        ]
    },
    skills: [
        {
            name: "Basic: Concealed Edge",
            type: "Basic",
            description: "Perform up to 4 consecutive attacks dealing Havoc DMG. Hold to enter **Rocksteady Defense** (35% DMG reduction). When attacked during defense or after 3s, triggers **Strategic Parry**.",
            attributes: [
                { name: "Stage 1 DMG", value: "45.34%" },
                { name: "Stage 2 DMG", value: "42.67%" },
                { name: "Stage 3 DMG", value: "56.00%" },
                { name: "Stage 4 DMG", value: "136.00%" },
                { name: "Heavy Attack DMG", value: "110.84%" },
                { name: "Strategic Parry DMG", value: "39.59% DEF" },
                { name: "Defense DMG Reduction", value: "35%" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Fortified Defense",
            type: "Skill",
            description: "Deal Havoc DMG to surrounding targets, generate 3 **Rocksteady Shields**, and restore HP to Taoqi. Shields reduce damage taken by 15% when on-field character is attacked.",
            attributes: [
                { name: "Skill DMG", value: "67.86% DEF" },
                { name: "HP Recovery", value: "950 + 45.00% DEF" },
                { name: "Shield DMG Reduction", value: "15%" },
                { name: "Cooldown", value: "15s" },
                { name: "Concerto Regen", value: "15" }
            ],
            priority: 2
        },
        {
            name: "Forte Circuit: Power Shift",
            type: "Forte",
            description: "**Timed Counters**: With Resolving Caliber, use Basic after Strategic Parry/Intro to perform 3 enhanced attacks dealing Havoc DMG. Each hit grants a shield. **Resolving Caliber**: Max 3 stacks, obtained when Rocksteady Shields are consumed.",
            attributes: [
                { name: "Counter P1 DMG", value: "43.36% DEF" },
                { name: "Counter P2 DMG", value: "55.80% DEF" },
                { name: "Counter P3 DMG", value: "73.14% DEF" },
                { name: "Counter P1 Shield", value: "300 + 11.25% DEF" },
                { name: "Counter P2 Shield", value: "450 + 16.87% DEF" },
                { name: "Counter P3 Shield", value: "750 + 28.12% DEF" },
                { name: "Shield Duration", value: "18s" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Unmovable",
            type: "Ultimate",
            description: "Launch a powerful attack based on DEF dealing Havoc DMG. DEF-scaling burst damage.",
            attributes: [
                { name: "Skill DMG", value: "226.20% DEF" },
                { name: "Cooldown", value: "16s" },
                { name: "Energy Cost", value: "125" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 3
        },
        {
            name: "Intro: Defense Formation",
            type: "Intro",
            description: "Attack target dealing Havoc DMG. Can immediately follow with Timed Counters if Resolving Caliber is available.",
            attributes: [
                { name: "Skill DMG", value: "105.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Iron Will",
            type: "Outro",
            description: "The next character gains **38% Resonance Skill DMG Deepen** for 14s or until switched. Best-in-slot buff for Skill-based DPS like Jinhsi/Carlotta.",
            attributes: [
                { name: "Skill DMG Deepen", value: "38%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 0
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Forte Circuit Shield strength increased by **40%**." },
        { node: "S2", name: "Sequence Node 2", description: "Liberation Crit Rate/DMG increased by **20%**." },
        { node: "S3", name: "Sequence Node 3", description: "Rocksteady Shield duration extended to 30s." },
        { node: "S4", name: "Sequence Node 4", description: "Strategic Parry restores 25% HP and increases DEF by **50%**." },
        { node: "S5", name: "Sequence Node 5", description: "Forte Circuit DMG increased by **50%** and restores 20 Energy." },
        { node: "S6", name: "Sequence Node 6", description: "Basic/Heavy Attack DMG increased by **40%** while Shield holds." }
    ],
    rotation: [
        "1. **Intro**: Enter to trigger Defense Formation.",
        "2. **Counters**: Use Timed Counters (Basic Attacks) to build Concerto.",
        "3. **Skill**: Cast Fortified Defense (if available).",
        "4. **Liberation**: Cast Unmovable (if available).",
        "5. **Outro**: Swap to Skill-based Main DPS."
    ],
    builds: {
        weapons: [
            {
                name: "Discord",
                rank: "Best Support",
                rarity: 4,
                description: "Essential for smoothing out her rotation with Concerto Energy.",
                image: "/images/weapons/discord.png"
            },
            {
                name: "Dauntless Evernight",
                rank: "Best Defensive",
                rarity: 4,
                description: "Massive DEF% boost. Great for shields but slower rotation.",
                image: "/images/weapons/dauntlessevernight.png"
            },
            {
                name: "Broadblade#41",
                rank: "F2P Option",
                rarity: 4,
                description: "Decent DEF option if others are unavailable.",
                image: "/images/weapons/broadblade_41.png"
            }
        ],
        echoes: [
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["DEF%", "DEF%"],
                    cost3: ["Energy Regen", "DEF%"],
                    cost1: ["DEF%", "DEF%"],
                    substats: ["DEF%", "Energy Regen", "Flat DEF", "Crit Rate"]
                },
                description: "Support Build.",
                recommendation_reason: "Prioritizes buffing the Main DPS over own damage.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["DEF%", "Energy Regen"] }],
                    cost3: [
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Energy Regen"] },
                        { name: "Stonewall Bracer", image: "/images/echoes/stonewallbracer.png", mainStats: ["DEF%"] }
                    ],
                    cost1: [
                        { name: "Whifflenier", image: "/images/echoes/whifflenier.png", mainStats: ["DEF%"] },
                        { name: "Crysalis", image: "/images/echoes/crysalis.png", mainStats: ["DEF%"] }
                    ]
                }
            },
            {
                set: "Rejuvenating Glow (5pc)",
                mainEcho: "Bell-Borne Geochelone",
                stats: {
                    cost4: ["DEF%", "Healing Bonus"],
                    cost3: ["Energy Regen", "DEF%"],
                    cost1: ["DEF%", "DEF%"],
                    substats: ["DEF%", "Energy Regen", "Flat DEF"]
                },
                description: "Healer/Sustain Build.",
                recommendation_reason: "Maximizes shields and healing for team survival.",
                echo_breakdown: {
                    cost4: [{ name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["DEF%", "Healing Bonus"] }],
                    cost3: [
                        { name: "Chasm Guardian", image: "/images/echoes/chasmguardian.png", mainStats: ["Energy Regen"] },
                        { name: "Stonewall Bracer", image: "/images/echoes/stonewallbracer.png", mainStats: ["DEF%"] }
                    ],
                    cost1: [
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["DEF%"] },
                        { name: "Snip Snap", image: "/images/echoes/snipsnap.png", mainStats: ["DEF%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen > DEF% > Flat DEF"
    },
    teams: [
        {
            name: "Skill Nuke Team",
            description: "Buffing Jinhsi or Danjin.",
            members: [
                { name: "Jinhsi", role: "Main DPS" },
                { name: "Taoqi", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        },
        {
            name: "Havoc Sustain",
            description: "Supporting Havoc Rover/Danjin.",
            members: [
                { name: "Danjin", role: "Main DPS" },
                { name: "Taoqi", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        }
    ]
};
