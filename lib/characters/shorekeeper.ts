import { Character } from "../characterTypes";

export const shorekeeper: Character = {
    id: "shorekeeper",
    name: "Shorekeeper",
    rarity: 5,
    element: "Spectro",
    weaponType: "Rectifier",
    role: "Support",
    tags: ["Healer", "Crit Buffer", "Damage Amp", "Versatile"],
    profileType: "Versatile",
    potential: "S+",
    tier: {
        overall: "R0",
        tower: "R0",
        wastes: "R0"
    },
    imagePortrait: "/images/characters/ShorekeeperSmall.png",
    imageIcon: "/images/characters/ShorekeeperSmall.png",
    imageCard: "/images/characters/ShorekeeperLarge.png",
    stats: {
        hp: 16712,
        atk: 287,
        def: 1099
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "HP", value: "12%", stat: "hp", amount: 12 },
        { name: "Healing Bonus", value: "12%", stat: "healingBonus", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "Nova", count: 60, icon: "/images/else/nova.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Topological Confinement", count: 46, icon: "/images/else/topologicalconfinement.png" }
        ],
        skills: [
            { name: "LF Whisperin Core", count: 25, icon: "/images/else/lfwhisperincore.png" },
            { name: "MF Whisperin Core", count: 28, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 40, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 57, icon: "/images/else/ffwhisperincore.png" },
            { name: "Lento Helix", count: 25, icon: "/images/else/lentohelix.png" },
            { name: "Adagio Helix", count: 28, icon: "/images/else/adagiohelix.png" },
            { name: "Andante Helix", count: 55, icon: "/images/else/andantehelix.png" },
            { name: "Presto Helix", count: 67, icon: "/images/else/prestohelix.png" },
            { name: "Sentinel's Dagger", count: 26, icon: "/images/else/sentinelsdagger.png" }
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
                    { name: "Topological Confinement", count: 3, icon: "/images/else/topologicalconfinement.png" },
                    { name: "Nova", count: 4, icon: "/images/else/nova.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Whisperin Core", count: 8, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Topological Confinement", count: 6, icon: "/images/else/topologicalconfinement.png" },
                    { name: "Nova", count: 8, icon: "/images/else/nova.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Whisperin Core", count: 4, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Topological Confinement", count: 9, icon: "/images/else/topologicalconfinement.png" },
                    { name: "Nova", count: 12, icon: "/images/else/nova.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Whisperin Core", count: 8, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Topological Confinement", count: 12, icon: "/images/else/topologicalconfinement.png" },
                    { name: "Nova", count: 16, icon: "/images/else/nova.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
                    { name: "Topological Confinement", count: 16, icon: "/images/else/topologicalconfinement.png" },
                    { name: "Nova", count: 20, icon: "/images/else/nova.png" }
                ]
            }
        ],
        weapon: {
            name: "Stellar Symphony",
            icon: "/images/weapons/stellarsymphony.png",
            total: [
                { name: "MF Whisperin Core", count: 20, icon: "/images/else/mfwhisperincore.png" },
                { name: "HF Whisperin Core", count: 20, icon: "/images/else/hfwhisperincore.png" },
                { name: "FF Whisperin Core", count: 12, icon: "/images/else/ffwhisperincore.png" },
                { name: "Lento Helix", count: 26, icon: "/images/else/lentohelix.png" },
                { name: "Adagio Helix", count: 26, icon: "/images/else/adagiohelix.png" },
                { name: "Andante Helix", count: 16, icon: "/images/else/andantehelix.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Whisperin Core", count: 6, icon: "/images/else/lfwhisperincore.png" },
                        { name: "Lento Helix", count: 6, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Whisperin Core", count: 6, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Lento Helix", count: 6, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Whisperin Core", count: 10, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Lento Helix", count: 10, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Whisperin Core", count: 6, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Adagio Helix", count: 6, icon: "/images/else/adagiohelix.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Whisperin Core", count: 10, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Adagio Helix", count: 10, icon: "/images/else/adagiohelix.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Whisperin Core", count: 6, icon: "/images/else/ffwhisperincore.png" },
                        { name: "Andante Helix", count: 6, icon: "/images/else/andantehelix.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Shorekeeper is a Tier 0 **Spectro Support** who redefines the meta with her versatile kit. She provides massive **Crit Rate** and **Crit DMG** buffs, continuous healing, and damage amplification for the entire team.
        
        Her primary mechanic is the **Stellarealm** (Resonance Liberation), which evolves as teammates use Intro Skills within it. She also features a unique "Cheat Death" mechanic that saves teammates from fatal damage.`,
        playstyle: "Basic/Skill (Build Concerto) -> Liberation -> Outro -> Teammate Intro x2 (Evolve Realm).",
        pros: [
            "**Crit Buffs**: Up to 12.5% Crit Rate and 25% Crit DMG for the whole team.",
            "**Universal Support**: Fits into almost any team composition.",
            "**Cheat Death**: Prevents a teammate from dying once every 10 mins.",
            "**Easy Build**: Scales purely off Energy Regen and HP."
        ],
        cons: [
            "**High Energy Cost**: Requires 175 Energy for Liberation.",
            "**Strict Rotation**: Needs 2 Intro Skills to maximize her buffs."
        ]
    },
    skills: [
        {
            name: "Basic: Origin Calculus",
            type: "Basic",
            description: "Perform up to 4 consecutive attacks dealing Spectro DMG. Each hit generates 1 **Collapsed Core**. Hold to enter **Unbound Form** (gathers collectibles, generates Deductive Data).",
            attributes: [
                { name: "Stage 1 DMG", value: "15.99%" },
                { name: "Stage 2 DMG", value: "12.00% * 2" },
                { name: "Stage 3 DMG", value: "11.73% * 3" },
                { name: "Stage 4 DMG", value: "36.58%" },
                { name: "Heavy Attack DMG", value: "23.04%" },
                { name: "Plunging Attack DMG", value: "37.20%" },
                { name: "Dodge Counter DMG", value: "44.00% * 2" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Chaos Theory",
            type: "Skill",
            description: "Restore HP for all nearby party members and summon 5 **Dim Star Butterflies** that auto-attack targets. Can be used mid-air. Follow up with Basic Attack to start from Stage 2.",
            attributes: [
                { name: "Butterfly DMG", value: "15.75% (each)" },
                { name: "Healing", value: "660 + 3.00% HP" },
                { name: "Cooldown", value: "16s" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 3
        },
        {
            name: "Forte Circuit: Astral Chord",
            type: "Forte",
            description: "**Collapsed Cores**: Generated by Normal Attacks, transform into Flare Star Butterflies after 6s. **Empirical Data**: Max 5 stacks from Basic Attacks. At 5 stacks, Heavy ATK triggers **Illation** (pull + DMG) or Mid-air triggers **Transmutation** (DMG).",
            attributes: [
                { name: "Flare Star Butterfly DMG", value: "18.76%" },
                { name: "Illation DMG", value: "9.54% * 5" },
                { name: "Transmutation DMG", value: "37.20%" },
                { name: "Illation Concerto", value: "6" },
                { name: "Transmutation Concerto", value: "6" }
            ],
            priority: 2
        },
        {
            name: "Liberation: End Loop",
            type: "Ultimate",
            description: "Create **Stellarealm** (30s). Heals allies every 3s. Evolves with Intro Skills: **Outer** (Heal) → **Inner** (Crit Rate) → **Supernal** (Crit DMG). At 250% ER: +12.5% Crit Rate + 25% Crit DMG for team.",
            attributes: [
                { name: "Stellarealm Healing", value: "220 + 1.20% HP (every 3s)" },
                { name: "Crit Rate (Inner)", value: "0.01% per 0.2% ER (max 12.5%)" },
                { name: "Crit DMG (Supernal)", value: "0.01% per 0.1% ER (max 25%)" },
                { name: "Duration", value: "30s" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "175" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 4
        },
        {
            name: "Intro: Proof of Existence",
            type: "Intro",
            description: "**Enlightenment**: Heal team and summon 5 Dim Star Butterflies. **Discernment** (after Supernal Stellarealm): Ends realm, heals team, deals guaranteed Critical Hit Spectro DMG based on HP.",
            attributes: [
                { name: "Enlightenment DMG", value: "22.79% * 5" },
                { name: "Discernment DMG", value: "9.88% * 3 HP" },
                { name: "Enlightenment Healing", value: "130 + 0.60% HP" },
                { name: "Discernment Healing", value: "145 + 0.66% HP" },
                { name: "Enlightenment Concerto", value: "10" },
                { name: "Discernment Concerto", value: "20" }
            ],
            priority: 4
        },
        {
            name: "Outro: Binary Butterfly",
            type: "Outro",
            description: "Summon 1 Flare Star and 1 Dim Star Butterfly circling the active Resonator for 30s. All nearby party members' DMG amplified by **15%**. Grants dodge recovery on hit/launch (up to 5x).",
            attributes: [
                { name: "DMG Amplify", value: "15%" },
                { name: "Duration", value: "30s" },
                { name: "Dodge Recovery", value: "Up to 5x" }
            ],
            priority: 0
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Stellarealm Range +150%, Duration +10s. Discernment no longer ends realm." },
        { node: "S2", name: "Sequence Node 2", description: "Outer Stellarealm grants **40% ATK** to all party members." },
        { node: "S3", name: "Sequence Node 3", description: "Casting Liberation grants 20 Concerto Energy (CD: 25s)." },
        { node: "S4", name: "Sequence Node 4", description: "+70% Healing Bonus when casting Resonance Skill." },
        { node: "S5", name: "Sequence Node 5", description: "Increases pull range of Basic Attack 3 and Illation." },
        { node: "S6", name: "Sequence Node 6", description: "Discernment Multiplier +42%. Discernment increases Shorekeeper's Crit DMG by **500%**." }
    ],
    rotation: [
        "1. **Opener**: Basic Attacks & Skill to build Concerto.",
        "2. **Liberation**: Cast End Loop to create Outer Stellarealm.",
        "3. **Outro**: Swap to Sub-DPS (Evolves to Inner Stellarealm).",
        "4. **Cycle**: Teammates do their rotation.",
        "5. **Intro 2**: Main DPS Intro (Evolves to Supernal Stellarealm).",
        "6. **Return**: Swap back to Shorekeeper (Enhanced Intro Detonates if S0, sustains if S1+)."
    ],
    builds: {
        weapons: [
            {
                name: "Stellar Symphony",
                rank: "Best In Slot",
                rarity: 5,
                description: "Massive Energy Regen (77%) and Team ATK Buff.",
                image: "/images/weapons/stellarsymphony.png"
            },
            {
                name: "Variation",
                rank: "Best 4-Star",
                rarity: 4,
                description: "High Energy Regen and Concetro Restoration.",
                image: "/images/weapons/variation.png"
            },
            {
                name: "Call of the Abyss",
                rank: "F2P Option",
                rarity: 4,
                description: "Craftable. Decent Energy Regen.",
                image: "/images/weapons/calloftheabyss.png"
            }
        ],
        echoes: [
            {
                set: "Rejuvenating Glow (5pc)",
                mainEcho: "Fallacy of No Return",
                stats: {
                    cost4: ["HP%", "Healing Bonus"],
                    cost3: ["Energy Regen", "HP%"],
                    cost1: ["HP%", "HP%"],
                    substats: ["Energy Regen", "HP%", "HP", "Flat ATK"]
                },
                description: "Support / Healer Build.",
                recommendation_reason: "Maximized for healing and team ATK buffs.",
                echo_breakdown: {
                    cost4: [{ name: "Fallacy of No Return", image: "/images/echoes/fallacyofnoreturn.png", mainStats: ["HP%", "Healing Bonus"] }],
                    cost3: [
                        { name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["Energy Regen"] },
                        { name: "Chasm Guardian", image: "/images/echoes/chasmguardian.png", mainStats: ["HP%"] }
                    ],
                    cost1: [
                        { name: "Whifflenier", image: "/images/echoes/whifflenier.png", mainStats: ["HP%"] },
                        { name: "Tick Tack", image: "/images/echoes/ticktack.png", mainStats: ["HP%"] }
                    ]
                }
            },
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["HP%", "Crit. Rate"],
                    cost3: ["Energy Regen", "Spectro DMG"],
                    cost1: ["HP%", "HP%"],
                    substats: ["Energy Regen", "HP%", "Crit. Rate", "Crit. DMG"]
                },
                description: "Damage Buffer Build.",
                recommendation_reason: "Alternative if another team member uses Rejuvenating Glow.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["HP%", "Crit. Rate"] }],
                    cost3: [
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Energy Regen"] },
                        { name: "Lightcrusher", image: "/images/echoes/lightcrusher.png", mainStats: ["Spectro DMG"] }
                    ],
                    cost1: [
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["HP%"] },
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["HP%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (250% Cap) > HP% > Healing Bonus"
    },
    teams: [
        {
            name: "Hypercarry Support",
            description: "Buffing Main DPS like Jinhsi or Jiyan.",
            members: [
                { name: "Jinhsi", role: "Main DPS" },
                { name: "Zhezhi", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "F2P Rover Team",
            description: "Synergy with Rover.",
            members: [
                { name: "Rover (Havoc)", role: "Main DPS" },
                { name: "Yangyang", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        }
    ]
};
