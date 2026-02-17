import { Character } from "../characterTypes";

export const calcharo: Character = {
    id: "calcharo",
    name: "Calcharo",
    rarity: 5,
    element: "Electro",
    weaponType: "Broadblade",
    role: "Main DPS",
    tags: ["Electro DMG", "Resonance Liberation", "Combo-Heavy", "Hypercarry"],
    profileType: "Specialist",
    potential: "C",
    tier: {
        overall: "R3",
        tower: "R3",
        wastes: "R3"
    },
    imagePortrait: "/images/characters/CalcharoSmall.png",
    imageIcon: "/images/characters/CalcharoSmall.png",
    imageCard: "/images/characters/CalcharoLarge.png",
    stats: {
        hp: 10500,
        atk: 438,
        def: 1186
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT DMG", value: "16%", stat: "critDmg", amount: 16 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "Crude Ring", count: 4, icon: "/images/else/crudering.png" },
            { name: "Iris", count: 60, icon: "/images/else/iris.png" },
            { name: "Basic Ring", count: 12, icon: "/images/else/basicring.png" },
            { name: "Improved Ring", count: 12, icon: "/images/else/improvedring.png" },
            { name: "Tailored Ring", count: 4, icon: "/images/else/tailoredring.png" },
            { name: "Thundering Tacet Core", count: 46, icon: "/images/else/thunderingtacetcore.png" }
        ],
        skills: [
            { name: "Crude Ring", count: 25, icon: "/images/else/crudering.png" },
            { name: "Basic Ring", count: 28, icon: "/images/else/basicring.png" },
            { name: "Improved Ring", count: 40, icon: "/images/else/improvedring.png" },
            { name: "Tailored Ring", count: 57, icon: "/images/else/tailoredring.png" },
            { name: "Waveworn Residue 210", count: 25, icon: "/images/else/wavewornresidue210.png" },
            { name: "Waveworn Residue 226", count: 28, icon: "/images/else/wavewornresidue226.png" },
            { name: "Waveworn Residue 235", count: 55, icon: "/images/else/wavewornresidue235.png" },
            { name: "Waveworn Residue 239", count: 67, icon: "/images/else/wavewornresidue239.png" },
            { name: "Monument Bell", count: 26, icon: "/images/else/monumentbell.png" }
        ],
        ascensionRanks: [
            {
                rank: 1,
                levelRange: "Lv. 20-40",
                materials: [
                    { name: "Crude Ring", count: 4, icon: "/images/else/crudering.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "Basic Ring", count: 4, icon: "/images/else/basicring.png" },
                    { name: "Thundering Tacet Core", count: 3, icon: "/images/else/thunderingtacetcore.png" },
                    { name: "Iris", count: 4, icon: "/images/else/iris.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "Basic Ring", count: 8, icon: "/images/else/basicring.png" },
                    { name: "Thundering Tacet Core", count: 6, icon: "/images/else/thunderingtacetcore.png" },
                    { name: "Iris", count: 8, icon: "/images/else/iris.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "Improved Ring", count: 4, icon: "/images/else/improvedring.png" },
                    { name: "Thundering Tacet Core", count: 9, icon: "/images/else/thunderingtacetcore.png" },
                    { name: "Iris", count: 12, icon: "/images/else/iris.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "Improved Ring", count: 8, icon: "/images/else/improvedring.png" },
                    { name: "Thundering Tacet Core", count: 12, icon: "/images/else/thunderingtacetcore.png" },
                    { name: "Iris", count: 16, icon: "/images/else/iris.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "Tailored Ring", count: 4, icon: "/images/else/tailoredring.png" },
                    { name: "Thundering Tacet Core", count: 16, icon: "/images/else/thunderingtacetcore.png" },
                    { name: "Iris", count: 20, icon: "/images/else/iris.png" }
                ]
            }
        ],
        weapon: {
            name: "Lustrous Razor",
            icon: "/images/weapons/lustrousrazor.png",
            total: [
                { name: "Basic Ring", count: 20, icon: "/images/else/basicring.png" },
                { name: "Improved Ring", count: 20, icon: "/images/else/improvedring.png" },
                { name: "Tailored Ring", count: 12, icon: "/images/else/tailoredring.png" },
                { name: "Waveworn Residue 210", count: 26, icon: "/images/else/wavewornresidue210.png" },
                { name: "Waveworn Residue 226", count: 26, icon: "/images/else/wavewornresidue226.png" },
                { name: "Waveworn Residue 235", count: 16, icon: "/images/else/wavewornresidue235.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "Crude Ring", count: 6, icon: "/images/else/crudering.png" },
                        { name: "Waveworn Residue 210", count: 6, icon: "/images/else/wavewornresidue210.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "Basic Ring", count: 6, icon: "/images/else/basicring.png" },
                        { name: "Waveworn Residue 210", count: 6, icon: "/images/else/wavewornresidue210.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "Basic Ring", count: 10, icon: "/images/else/basicring.png" },
                        { name: "Waveworn Residue 210", count: 10, icon: "/images/else/wavewornresidue210.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "Improved Ring", count: 6, icon: "/images/else/improvedring.png" },
                        { name: "Waveworn Residue 226", count: 6, icon: "/images/else/wavewornresidue226.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "Improved Ring", count: 10, icon: "/images/else/improvedring.png" },
                        { name: "Waveworn Residue 226", count: 10, icon: "/images/else/wavewornresidue226.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "Tailored Ring", count: 6, icon: "/images/else/tailoredring.png" },
                        { name: "Waveworn Residue 235", count: 6, icon: "/images/else/wavewornresidue235.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Calcharo is a high-skill, high-reward **Electro Main DPS** who demands precise execution. He specializes in **Resonance Liberation** damage, entering a "Deathblade Gear" state where he unleashes powerful "Death Messenger" attacks.
        
        His damage potential is among the highest in the standard roster but requires managing strict combo windows, animation cancels, and maximizing Energy Regen to keep his burst active.`,
        playstyle: "Calcharo revolves around his **Liberation**. \n\n**Rotation**: Intro -> Skill Combo (builds Energy) -> Liberation (Enhanced State) -> Deathblade Gear Rotations (Basic Attacks -> Death Messenger) -> Outro.",
        pros: [
            "**High Burst Potential**: Can deal massive damage in his Liberation window.",
            "**Standard Banner**: Accessible 5-star unit.",
            "**Electro Synergy**: Scales incredibly well with Yinlin's buffs.",
            "**Skill Expression**: High ceiling for players mastering animation cancels."
        ],
        cons: [
            "**Very Difficulty**: Prone to interruption and requires tight timing.",
            "**Interruptible**: Getting hit cancels your Death Messenger combo, resulting in huge DPS loss.",
            "**Swap Heavy**: Often needs swap-canceling to be safe and optimal.",
            "**Single Target Focus**: Lacks wide AoE compared to Jiyan.",
            "If you ever feel useless, remember Calcharo exists."
        ]
    },
    skills: [
        {
            name: "Basic: Gnawing Fangs",
            type: "Basic",
            description: "4-hit combo dealing Electro DMG. In **Deathblade Gear**, replaced by **Hounds Roar** (5 hits, builds Killing Intent).",
            attributes: [
                { name: "Basic P1 DMG", value: "23.00% * 2" },
                { name: "Basic P2 DMG", value: "50.00%" },
                { name: "Basic P3 DMG", value: "42.84% + 21.42% * 3" },
                { name: "Basic P4 DMG", value: "39.99% * 2 + 53.32%" },
                { name: "Heavy Attack DMG", value: "20.80% * 5" },
                { name: "Dodge Counter DMG", value: "33.44% * 3 + 42.99%" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Extermination Order",
            type: "Skill",
            description: "Cast up to 3 attacks in quick succession. Each hit generates **Cruelty** (Forte gauge). If not continued, enters 10s cooldown. Generates 4 Concerto per hit.",
            attributes: [
                { name: "Part 1 DMG", value: "25.94% * 2 + 34.59%" },
                { name: "Part 2 DMG", value: "38.91% * 2 + 51.88%" },
                { name: "Part 3 DMG", value: "108.08% * 2" },
                { name: "Cooldown", value: "10s" },
                { name: "Concerto Regen", value: "4 per hit" }
            ],
            priority: 3
        },
        {
            name: "Forte Circuit: Hunting Mission",
            type: "Forte",
            description: "**Mercy** (3 Cruelty): Enhanced Heavy Attack, +10% Lib DMG (Inherent). **Death Messenger** (5 Killing Intent in Lib): Massive Liberation DMG, -15% DMG taken (Inherent).",
            attributes: [
                { name: "Mercy DMG", value: "19.67% * 8 + 39.34%" },
                { name: "Death Messenger DMG", value: "49.18% * 8 + 98.35%" },
                { name: "Mercy Concerto", value: "6" },
                { name: "Death Messenger Concerto", value: "10" },
                { name: "Death Messenger Energy", value: "5" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Phantom Etching",
            type: "Ultimate",
            description: "Enter **Deathblade Gear** (11s). Basic → **Hounds Roar** (5-hit, builds Killing Intent). 5 stacks → **Death Messenger** available. Post-Liberation Intro → **Necessary Means**.",
            attributes: [
                { name: "Skill DMG", value: "300.00%" },
                { name: "Necessary Means DMG", value: "100.00% * 2" },
                { name: "Hounds Roar P1-P5", value: "44.30% → 75.54% * 2" },
                { name: "Duration", value: "11s" },
                { name: "Cooldown", value: "20s" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 4
        },
        {
            name: "Intro: Wanted Outlaw",
            type: "Intro",
            description: "Attack target dealing Electro DMG. Generates Concerto Energy.",
            attributes: [
                { name: "Skill DMG", value: "20.00% * 2 + 30.00% * 2" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 2
        },
        {
            name: "Outro: Shadowy Raid",
            type: "Outro",
            description: "Summon Phantom to slash enemies dealing massive Electro DMG.",
            attributes: [
                { name: "Outro DMG", value: "195.98% + 391.96% ATK" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Resonance Skill hits restore **10 additional Resonance Energy** (once every 20s)." },
        { node: "S2", name: "Sequence Node 2", description: "Intro Skill grants **30% Resonance Skill DMG Bonus** for 15s." },
        { node: "S3", name: "Sequence Node 3", description: "During Deathblade Gear, **Electro DMG Bonus is increased by 25%**." },
        { node: "S4", name: "Sequence Node 4", description: "Casting Outro grants **20% Electro DMG Bonus** to the entire team for 30s." },
        { node: "S5", name: "Sequence Node 5", description: "Intro Skill damage increased by **50%**." },
        { node: "S6", name: "Sequence Node 6", description: "Death Messenger summons 2 Phantoms to perform Coordinated Attacks (100% ATK each, considered Lib DMG)." }
    ],
    rotation: [
        "1. **Intro**: Switch to Calcharo.",
        "2. **Skill**: Cast 3x Skill to build Energy/Forte if needed.",
        "3. **Liberation**: Enter Deathblade Gear state.",
        "4. **Combo**: 5x Basic Attack -> Heavy Attack (Death Messenger). Repeat 3 times if perfect, usually 2 times.",
        "5. **Outro**: Swap to Yinlin or Support."
    ],
    builds: {
        weapons: [
            {
                name: "Verdant Summit",
                rank: "Best In Slot",
                rarity: 5,
                description: "Jiyan's Signature. Massive Heavy Attack bonus fits Calcharo correctly.",
                image: "/images/weapons/verdantsummit.png"
            },
            {
                name: "Lustrous Razor",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Strong stats and Energy Regen helps with rotation.",
                image: "/images/weapons/lustrousrazor.png"
            },
            {
                name: "Autumntrace",
                rank: "Best 4-Star",
                rarity: 4,
                description: "Battle Pass weapon. Crit Rate main stat is huge.",
                image: "/images/weapons/autumntrace.png"
            },
            {
                name: "Helios Cleaver",
                rank: "F2P Option",
                rarity: 4,
                description: "Solid ATK option if Autumntrace is unavailable.",
                image: "/images/weapons/helioscleaver.png"
            }
        ],
        echoes: [
            {
                set: "Void Thunder (5pc)",
                mainEcho: "Thundering Mephis",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Electro DMG", "Electro DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Basic Attack DMG", "Heavy Attack DMG", "ATK%"]
                },
                description: "Standard DPS Build.",
                recommendation_reason: "Maximizes Electro output.",
                echo_breakdown: {
                    cost4: [{ name: "Thundering Mephis", image: "/images/echoes/thunderingmephis.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Violet-Feathered Heron", image: "/images/echoes/violetfeatheredheron.png", mainStats: ["Electro DMG"] },
                        { name: "Flautist", image: "/images/echoes/flautist.png", mainStats: ["Electro DMG"] }
                    ],
                    cost1: [
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] },
                        { name: "Chirpuff", image: "/images/echoes/chirpuff.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate > Crit DMG > Resonance Liberation > ATK%"
    },
    teams: [
        {
            name: "Premium Electro",
            description: "Yinlin boosts Calcharo's Electro and Liberation DMG significantly.",
            members: [
                { name: "Calcharo", role: "Main DPS" },
                { name: "Yinlin", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        },
        {
            name: "Hypercarry",
            description: "Standard hypercarry setup with buffers.",
            members: [
                { name: "Calcharo", role: "Main DPS" },
                { name: "Jianxin", role: "Sub DPS" },
                { name: "Baizhi", role: "Support" }
            ]
        }
    ]
};
