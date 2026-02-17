import { Character } from "../characterTypes";

export const yuanwu: Character = {
    id: "yuanwu",
    name: "Yuanwu",
    rarity: 4,
    element: "Electro",
    weaponType: "Gauntlets",
    role: "Support",
    tags: ["Vibration Shred", "Anti-Interruption", "Coordinated Attack", "Defense Scaling"],
    tier: {
        overall: "R3",
        tower: "R3",
        wastes: "R3"
    },
    imagePortrait: "/images/characters/YuanwuSmall.png",
    imageIcon: "/images/characters/YuanwuSmall.png",
    imageCard: "/images/characters/YuanwuLarge.png",
    stats: {
        hp: 8525,
        atk: 225,
        def: 1638
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "DEF", value: "15.2%", stat: "def", amount: 15.2 },
        { name: "Electro DMG", value: "12%", stat: "electroDmg", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "Crude Ring", count: 4, icon: "/images/else/crudering.png" },
            { name: "Terraspawn Fungus", count: 60, icon: "/images/else/terraspawnfungus.png" },
            { name: "Basic Ring", count: 12, icon: "/images/else/basicring.png" },
            { name: "Improved Ring", count: 12, icon: "/images/else/improvedring.png" },
            { name: "Tailored Ring", count: 4, icon: "/images/else/tailoredring.png" },
            { name: "Hidden Thunder Tacet Core", count: 46, icon: "/images/else/hiddenthundertacetcore.png" }
        ],
        skills: [
            { name: "Crude Ring", count: 25, icon: "/images/else/crudering.png" },
            { name: "Basic Ring", count: 28, icon: "/images/else/basicring.png" },
            { name: "Improved Ring", count: 40, icon: "/images/else/improvedring.png" },
            { name: "Tailored Ring", count: 57, icon: "/images/else/tailoredring.png" },
            { name: "Cadence Seed", count: 25, icon: "/images/else/cadenceseed.png" },
            { name: "Cadence Bud", count: 28, icon: "/images/else/cadencebud.png" },
            { name: "Cadence Leaf", count: 55, icon: "/images/else/cadenceleaf.png" },
            { name: "Cadence Blossom", count: 67, icon: "/images/else/cadenceblossom.png" },
            { name: "Unending Destruction", count: 26, icon: "/images/else/unendingdestruction.png" }
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
                    { name: "Hidden Thunder Tacet Core", count: 3, icon: "/images/else/hiddenthundertacetcore.png" },
                    { name: "Terraspawn Fungus", count: 4, icon: "/images/else/terraspawnfungus.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "Basic Ring", count: 8, icon: "/images/else/basicring.png" },
                    { name: "Hidden Thunder Tacet Core", count: 6, icon: "/images/else/hiddenthundertacetcore.png" },
                    { name: "Terraspawn Fungus", count: 8, icon: "/images/else/terraspawnfungus.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "Improved Ring", count: 4, icon: "/images/else/improvedring.png" },
                    { name: "Hidden Thunder Tacet Core", count: 9, icon: "/images/else/hiddenthundertacetcore.png" },
                    { name: "Terraspawn Fungus", count: 12, icon: "/images/else/terraspawnfungus.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "Improved Ring", count: 8, icon: "/images/else/improvedring.png" },
                    { name: "Hidden Thunder Tacet Core", count: 12, icon: "/images/else/hiddenthundertacetcore.png" },
                    { name: "Terraspawn Fungus", count: 16, icon: "/images/else/terraspawnfungus.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "Tailored Ring", count: 4, icon: "/images/else/tailoredring.png" },
                    { name: "Hidden Thunder Tacet Core", count: 16, icon: "/images/else/hiddenthundertacetcore.png" },
                    { name: "Terraspawn Fungus", count: 20, icon: "/images/else/terraspawnfungus.png" }
                ]
            }
        ],
        weapon: {
            name: "Abyss Surges",
            icon: "/images/weapons/abysssurges.png",
            total: [
                { name: "Basic Ring", count: 20, icon: "/images/else/basicring.png" },
                { name: "Improved Ring", count: 20, icon: "/images/else/improvedring.png" },
                { name: "Tailored Ring", count: 12, icon: "/images/else/tailoredring.png" },
                { name: "Cadence Seed", count: 26, icon: "/images/else/cadenceseed.png" },
                { name: "Cadence Bud", count: 26, icon: "/images/else/cadencebud.png" },
                { name: "Cadence Leaf", count: 16, icon: "/images/else/cadenceleaf.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "Crude Ring", count: 6, icon: "/images/else/crudering.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "Basic Ring", count: 6, icon: "/images/else/basicring.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "Basic Ring", count: 10, icon: "/images/else/basicring.png" },
                        { name: "Cadence Seed", count: 10, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "Improved Ring", count: 6, icon: "/images/else/improvedring.png" },
                        { name: "Cadence Bud", count: 6, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "Improved Ring", count: 10, icon: "/images/else/improvedring.png" },
                        { name: "Cadence Bud", count: 10, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "Tailored Ring", count: 6, icon: "/images/else/tailoredring.png" },
                        { name: "Cadence Leaf", count: 6, icon: "/images/else/cadenceleaf.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Yuanwu is a **Defense-scaling Electro Support/Sub-DPS** known for his ability to shred enemy Vibration Strength (Stun Bar) and provide Anti-Interruption. His "Thunder Wedge" (Skill) remains on field to deal coordinated attacks even after he swaps out.
        
        He is extremely low-investment, often used as a "skill-bot" to trigger sets like Rejuvenating Glow (using the Originite: Type IV weapon) or simply to provide vibration shred and shield breaking utility.`,
        playstyle: "Skill (Summon Wedge) -> Outro (Vibration Shred) -> Swap.",
        pros: [
            "**Vibration Shred**: Excellent at breaking boss stances quickly.",
            "**Low Investment**: Effective even at low levels with minimal gear.",
            "**Defense Scaling**: Uses DEF stats which are often throwaway on other chars.",
            "**Anti-Interruption**: Liberation grants team-wide resistance to interruption."
        ],
        cons: [
            "**Low Damage**: Very low personal damage output compared to other sub-DPS.",
            "**Stationary**: Thunder Wedge is static, bad against mobile enemies.",
            "**Niche**: Primarily used for his utility or in specific Jinhsi teams."
        ]
    },
    skills: [
        {
            name: "Basic: Leihuangquan",
            type: "Basic",
            description: "Perform up to 5 continuous attacks dealing Electro DMG. In Lightning Infused state, attacks have larger range and faster Heavy/Dodge attacks that shred Vibration Strength faster.",
            attributes: [
                { name: "Stage 1 DMG", value: "24.70%" },
                { name: "Stage 2 DMG", value: "26.06% * 2" },
                { name: "Stage 3 DMG", value: "10.99% * 2 + 16.48% * 2" },
                { name: "Stage 4 DMG", value: "26.06% * 2" },
                { name: "Stage 5 DMG", value: "24.70% * 2 + 32.94%" },
                { name: "Heavy Attack DMG", value: "80.00%" },
                { name: "Dodge Counter DMG", value: "57.60% * 2" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Leihuang Master",
            type: "Skill",
            description: "**Thunder Wedge**: Summons a Wedge dealing Electro DMG (DEF), lasts 12s. Creates Thunder Field for Coordinated Attacks (every 1.2s). Detonated by Forte or Liberation. **Rumbling Spark**: With full Readiness, hold Skill to detonate and enter Lightning Infused state.",
            attributes: [
                { name: "Skill DMG", value: "12.00% DEF" },
                { name: "Coordinated ATK DMG", value: "4.00% DEF" },
                { name: "Wedge Detonation DMG", value: "30.00% DEF" },
                { name: "Rumbling Spark DMG", value: "54.60% DEF" },
                { name: "Cooldown", value: "3s" },
                { name: "Wedge Duration", value: "12s" },
                { name: "Concerto Regen", value: "3 / 25 (Rumbling)" }
            ],
            priority: 4
        },
        {
            name: "Forte Circuit: Unassuming Blade",
            type: "Forte",
            description: "**Readiness**: Max 100. Gains 6/s when Wedge active, +5 on Coordinated Attack hits. **Lightning Infused**: Enhanced attacks scale with DEF, increased anti-interruption, faster Vibration Strength depletion. **Thunderweaver**: After Heavy/Dodge Counter in Lightning Infused, use Basic for extra attack.",
            attributes: [
                { name: "Thunder Uprising DMG", value: "20.00% DEF" },
                { name: "Infused Stage 1 DMG", value: "12.35% DEF" },
                { name: "Infused Stage 2 DMG", value: "13.03% * 2 DEF" },
                { name: "Infused Stage 3 DMG", value: "5.50% * 2 + 8.24% * 2 DEF" },
                { name: "Infused Stage 4 DMG", value: "5.77% * 5 DEF" },
                { name: "Infused Stage 5 DMG", value: "8.24% * 3 + 16.47% DEF" },
                { name: "Thunderweaver DMG", value: "15.60% + 10.40% * 2 DEF" },
                { name: "Lightning Infused Duration", value: "10s" }
            ],
            priority: 3
        },
        {
            name: "Liberation: Blazing Might",
            type: "Ultimate",
            description: "Awaken thunder power, grant Lightning Infused state to all nearby characters for 10s (increased Anti-interruption), then deal powerful Electro DMG based on DEF.",
            attributes: [
                { name: "Skill DMG", value: "88.00% * 2 DEF" },
                { name: "Cooldown", value: "20s" },
                { name: "Energy Cost", value: "125" },
                { name: "Concerto Regen", value: "20" },
                { name: "Team Buff", value: "Anti-Interrupt 10s" }
            ],
            priority: 2
        },
        {
            name: "Intro: Thunder Bombardment",
            type: "Intro",
            description: "Attack the target dealing Electro DMG based on DEF.",
            attributes: [
                { name: "Skill DMG", value: "32.00% DEF" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Lightning Manipulation",
            type: "Outro",
            description: "Summon thunderbolts centered on target, dealing significant Vibration Strength depletion to enemies hit. Excellent for breaking boss stun bars.",
            attributes: [
                { name: "Effect", value: "Massive Vibration Shred" }
            ],
            priority: 0
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Attack Speed increased by 20% in Lightning Infused state." },
        { node: "S2", name: "Sequence Node 2", description: "Intro Skill recovers 15 Resonance Energy." },
        { node: "S3", name: "Sequence Node 3", description: "Thunder Wedge Coordinated Attack DMG increased by 20% DEF." },
        { node: "S4", name: "Sequence Node 4", description: "Resonance Liberation grants a **Shield** equal to 200% DEF for 10s." },
        { node: "S5", name: "Sequence Node 5", description: "When Thunder Wedge is active, Liberation DMG +50%." },
        { node: "S6", name: "Sequence Node 6", description: "Thunder Wedge increases nearby team members' DEF by 32%." }
    ],
    rotation: [
        "1. **Intro**: Enter field.",
        "2. **Skill**: Summon Thunder Wedge.",
        "3. **Forte**: If full, hold Skill to detonate (Rumbling Spark).",
        "4. **Liberation**: Use Blazing Might if available (Team Anti-Interrupt).",
        "5. **Outro**: Swap out (Shred Vibration Strength)."
    ],
    builds: {
        weapons: [
            {
                name: "Verity's Handle",
                rank: "Best In Slot",
                rarity: 5,
                description: "Xiangli Yao's Signature. High CRIT and DMG bonuses. Best raw damage option.",
                image: "/images/weapons/verityshandle.png"
            },
            {
                name: "Amity Accord",
                rank: "Core 4-Star",
                rarity: 4,
                description: "Outstanding DEF scaling gauntlets. Beats many 5-stars for Yuanwu's kit.",
                image: "/images/weapons/amityaccord.png"
            },
            {
                name: "Stonard",
                rank: "Alternative",
                rarity: 4,
                description: "Crit Rate stat stick if Amity is unavailable.",
                image: "/images/weapons/stonard.png"
            },
            {
                name: "Marcato",
                rank: "Utility",
                rarity: 4,
                description: "Concerto Energy restoration for faster rotations.",
                image: "/images/weapons/marcato.png"
            },
            {
                name: "Originite: Type IV",
                rank: "Healer Set Trigger",
                rarity: 3,
                description: "Heals on hit. Use ONLY with Rejuvenating Glow set to trigger ATK buff.",
                image: "/images/weapons/originitetypeiv.png"
            }
        ],
        echoes: [
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Bell-Borne Geochelone",
                stats: {
                    cost4: ["DEF%", "DEF%"],
                    cost3: ["Energy Regen", "Electro DMG"],
                    cost1: ["DEF%", "DEF%"],
                    substats: ["Energy Regen", "DEF%", "Crit Rate"]
                },
                description: "Support Buffer Build.",
                recommendation_reason: "Standard support build to buff next character.",
                echo_breakdown: {
                    cost4: [{ name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["DEF%"] }],
                    cost3: [
                        { name: "Geohide Saurian", image: "/images/echoes/geohidesaurian.png", mainStats: ["Energy Regen"] },
                        { name: "Roseshroom", image: "/images/echoes/roseshroom.png", mainStats: ["Electro DMG"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["DEF%"] },
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["DEF%"] }
                    ]
                }
            },
            {
                set: "Rejuvenating Glow (5pc)",
                mainEcho: "Bell-Borne Geochelone",
                stats: {
                    cost4: ["DEF%", "DEF%"],
                    cost3: ["Energy Regen", "Electro DMG"],
                    cost1: ["DEF%", "DEF%"],
                    substats: ["Energy Regen", "DEF%", "Crit Rate"]
                },
                description: "Healer Set Trigger Build.",
                recommendation_reason: "Requires 'Originite: Type IV' weapon. Triggers ATK buff on hit.",
                echo_breakdown: {
                    cost4: [{ name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["DEF%"] }],
                    cost3: [
                        { name: "Chasm Guardian", image: "/images/echoes/chasmguardian.png", mainStats: ["Energy Regen"] },
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Electro DMG"] }
                    ],
                    cost1: [
                        { name: "Whifflenier", image: "/images/echoes/whifflenier.png", mainStats: ["DEF%"] },
                        { name: "Tick Tack", image: "/images/echoes/ticktack.png", mainStats: ["DEF%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen > DEF% > Crit Rate/DMG"
    },
    teams: [
        {
            name: "Jinhsi Team",
            description: "Coordinate Attacker.",
            members: [
                { name: "Jinhsi", role: "Main DPS" },
                { name: "Yuanwu", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        },
        {
            name: "Electro Team",
            description: "Sub-DPS / Vibration Shredder.",
            members: [
                { name: "Xiangli Yao", role: "Main DPS" },
                { name: "Yuanwu", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        }
    ]
};
