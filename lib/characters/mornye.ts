import { Character } from "../characterTypes";

export const mornye: Character = {
    id: "mornye",
    name: "Mornye",
    rarity: 5,
    element: "Fusion",
    weaponType: "Broadblade",
    role: "Support",
    tags: ["Healer", "Off-Tune Enabler", "DEF Scaling", "Tune Break"],
    profileType: "Specialist",
    potential: "S+",
    tier: {
        overall: "R1",
        tower: "R1",
        wastes: "R1"
    },
    imagePortrait: "/images/characters/MornyeSmall.png",
    imageIcon: "/images/characters/MornyeSmall.png",
    imageCard: "/images/characters/MornyeLarge.png",
    stats: {
        hp: 15375,
        atk: 287,
        def: 1356
    },
    maxEnergy: 175,
    minorFortes: [
        { name: "Healing Bonus", value: "10%", stat: "healingBonus", amount: 10 },
        { name: "DEF", value: "11%", stat: "def", amount: 11 }
    ],
    materials: {
        ascension: [
            { name: "LF Mech Core", count: 4, icon: "/images/else/lfmechcore.png" },
            { name: "Gemini Spore", count: 60, icon: "/images/else/geminispore.png" },
            { name: "MF Mech Core", count: 12, icon: "/images/else/mfmechcore.png" },
            { name: "HF Mech Core", count: 12, icon: "/images/else/hfmechcore.png" },
            { name: "FF Mech Core", count: 4, icon: "/images/else/ffmechcore.png" },
            { name: "Burning Judgment", count: 46, icon: "/images/else/burningjudgment.png" }
        ],
        skills: [
            { name: "LF Mech Core", count: 25, icon: "/images/else/lfmechcore.png" },
            { name: "MF Mech Core", count: 28, icon: "/images/else/mfmechcore.png" },
            { name: "HF Mech Core", count: 40, icon: "/images/else/hfmechcore.png" },
            { name: "FF Mech Core", count: 57, icon: "/images/else/ffmechcore.png" },
            { name: "LF Carved Crystal", count: 25, icon: "/images/else/lfcarvedcrystal.png" },
            { name: "MF Carved Crystal", count: 28, icon: "/images/else/mfcarvedcrystal.png" },
            { name: "HF Carved Crystal", count: 55, icon: "/images/else/hfcarvedcrystal.png" },
            { name: "FF Carved Crystal", count: 67, icon: "/images/else/ffcarvedcrystal.png" },
            { name: "The Netherworld's Stare", count: 26, icon: "/images/else/thenetherworld'sstare.png" }
        ],
        ascensionRanks: [
            {
                rank: 1,
                levelRange: "Lv. 20-40",
                materials: [
                    { name: "LF Mech Core", count: 4, icon: "/images/else/lfmechcore.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "MF Mech Core", count: 4, icon: "/images/else/mfmechcore.png" },
                    { name: "Burning Judgment", count: 3, icon: "/images/else/burningjudgment.png" },
                    { name: "Gemini Spore", count: 4, icon: "/images/else/geminispore.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Mech Core", count: 8, icon: "/images/else/mfmechcore.png" },
                    { name: "Burning Judgment", count: 6, icon: "/images/else/burningjudgment.png" },
                    { name: "Gemini Spore", count: 8, icon: "/images/else/geminispore.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Mech Core", count: 4, icon: "/images/else/hfmechcore.png" },
                    { name: "Burning Judgment", count: 9, icon: "/images/else/burningjudgment.png" },
                    { name: "Gemini Spore", count: 12, icon: "/images/else/geminispore.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Mech Core", count: 8, icon: "/images/else/hfmechcore.png" },
                    { name: "Burning Judgment", count: 12, icon: "/images/else/burningjudgment.png" },
                    { name: "Gemini Spore", count: 16, icon: "/images/else/geminispore.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Mech Core", count: 4, icon: "/images/else/ffmechcore.png" },
                    { name: "Burning Judgment", count: 16, icon: "/images/else/burningjudgment.png" },
                    { name: "Gemini Spore", count: 20, icon: "/images/else/geminispore.png" }
                ]
            }
        ],
        weapon: {
            name: "Starfield Calibrator",
            icon: "/images/weapons/starfieldcalibrator.png",
            total: [
                { name: "MF Mech Core", count: 20, icon: "/images/else/mfmechcore.png" },
                { name: "HF Mech Core", count: 20, icon: "/images/else/hfmechcore.png" },
                { name: "FF Mech Core", count: 12, icon: "/images/else/ffmechcore.png" },
                { name: "LF Carved Crystal", count: 26, icon: "/images/else/lfcarvedcrystal.png" },
                { name: "MF Carved Crystal", count: 26, icon: "/images/else/mfcarvedcrystal.png" },
                { name: "HF Carved Crystal", count: 16, icon: "/images/else/hfcarvedcrystal.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Mech Core", count: 6, icon: "/images/else/lfmechcore.png" },
                        { name: "LF Carved Crystal", count: 6, icon: "/images/else/lfcarvedcrystal.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Mech Core", count: 6, icon: "/images/else/mfmechcore.png" },
                        { name: "LF Carved Crystal", count: 6, icon: "/images/else/lfcarvedcrystal.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Mech Core", count: 10, icon: "/images/else/mfmechcore.png" },
                        { name: "LF Carved Crystal", count: 10, icon: "/images/else/lfcarvedcrystal.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Mech Core", count: 6, icon: "/images/else/hfmechcore.png" },
                        { name: "MF Carved Crystal", count: 6, icon: "/images/else/mfcarvedcrystal.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Mech Core", count: 10, icon: "/images/else/hfmechcore.png" },
                        { name: "MF Carved Crystal", count: 10, icon: "/images/else/mfcarvedcrystal.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Mech Core", count: 6, icon: "/images/else/ffmechcore.png" },
                        { name: "HF Carved Crystal", count: 6, icon: "/images/else/hfcarvedcrystal.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Mornye (Mourn) is a **Fusion Broadblade Support** who specializes in **Off-Tune/Tune Break** mechanics. While she acts as a competent healer and buffer at S0, her **S1 (Sequence 1)** is game-changing, removing restrictive conditions and elevating her to "Universal Support" status arguably superior to Shorekeeper.
        
        Her kit revolves around her **Syntony Field** and **Interfered Markers**. At S1, she can apply her massive 40% DMG Taken Debuff without needing specific teammates to trigger mechanics, making her a "must-have" for her versatility.`,
        playstyle: "Basic x3 (Ground) -> Heavy (Float) -> Basic x3 (Air) -> Skill -> Liberation -> Heavy (Apply Marker) -> Outro.",
        pros: [
            "**S1 Freedom**: At S1, provides 40% DMG Taken debuff indepedently, making her possibly the strongest generalist support. ",
            "**Potent Outro**: Her 25% All-DMG Amplification stacks with all other outro buffs, providing huge team value.",
            "**Survival Specialist**: Continuous healing + unique 'Anti One-Shot' mechanic prevents teammates from instant death.",
            "**Easy To Build**: She only needs ~260% Energy Regen to maximize her passive buffs and ensure smooth rotations.",

            "**Weapon Friendly**: R5 Discord is a fantastic alternative to her signature, offering comparable Energy/Concerto generation."
        ],
        cons: [
            "**Not a Generalist at S0**: If you're looking for a generalist support, don't get her. Shorekeeper is still the best, and even Verina performs better than her without S1. Only pull her if you have enough resources to get her to S1.",
            "**S0 Restrictions**: Without S1, she is strictly dependent on teammates (Lynae/Lupa) to trigger her main buffs.",
            "**No Quickswap**: Rotations are rigid; swapping out early cancels her enhanced state and buffs."
        ]
    },
    skills: [
        {
            name: "Basic: Ground State Calibration",
            type: "Basic",
            description: "4-hit ground combo. **Wide Field Observation Mode**: 3-hit air combo (7%*4 → 13%*4 → 4.68%*4+16.64%*2). **Heavy**: 5.58%+5.58%+7.44%. **Dodge Counter**: 81.60% (ground) / 13%*4 (air).",
            attributes: [
                { name: "Basic P4", value: "68.00%" },
                { name: "Air Basic P3", value: "4.68% * 4 + 16.64% * 2" },
                { name: "Dodge Counter", value: "81.60%" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Resolution",
            type: "Skill",
            description: "**Expectation Error** (Ground): Parry (100% DMG reduction). On hit → **Optimal Solution** (90.40%, Stagnate, -2s CD). Heals 49+11.88% DEF. **Distributed Array** (Air): Heals 225+54% DEF, summons Hover Cannons (20%*4). 5s/16s CD.",
            attributes: [
                { name: "Optimal Solution", value: "90.40%" },
                { name: "Distributed Array", value: "20.00% * 4" },
                { name: "Array Heal", value: "225 + 54% DEF" }
            ],
            priority: 3
        },
        {
            name: "Forte: Mass-Energy Equivalence",
            type: "Forte",
            description: "**Rest Mass Energy** (max 100): Build ground via Basic/Heavy/Skill → full enables **Geopotential Shift** (22.20%+49.81%) → enter **Wide Field Observation Mode** (30s, creates Syntony Field). **Relative Momentum** (max 100): Build air → full enables **Inversion** (130%) → applies **Observation Marker** (30s). On Tune Break → **Interfered Marker** (8s): +0.25% DMG per 1% ER over 100%, up to **+40%**. **Particle Jet**: 150% Tune AMP on Tune Rupture. **Inherent**: +10% ER. +20 Concerto on Intro/Air P3 (20s CD each). **Proof of Boundedness** (60s, 5min CD): 3 oneshot resists or 1 death resist.",
            attributes: [
                { name: "Inversion", value: "130.00%" },
                { name: "Interfered Cap", value: "+40% DMG" },
                { name: "Particle Jet", value: "150% Tune AMP" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Critical Protocol",
            type: "Ultimate",
            description: "262.73% DEF Fusion DMG. +0.5% Crit Rate (up to 80%) and +1% Crit DMG (up to 160%) per 1% ER over 100%. Upgrades Syntony Field → **High Syntony Field** (25s): +20% DEF, +40% healing.",
            attributes: [
                { name: "Skill DMG", value: "262.73% DEF" },
                { name: "Crit Bonus", value: "Up to +80% Rate / +160% DMG" },
                { name: "High Syntony", value: "+20% DEF, +40% Heal" },
                { name: "Energy Cost", value: "175" }
            ],
            priority: 4
        },
        {
            name: "Intro: Convergence",
            type: "Intro",
            description: "102% Fusion DMG. **Instantly enters Wide Field Observation Mode** (skips Rest Mass Energy phase).",
            attributes: [
                { name: "Skill DMG", value: "102.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Recursion",
            type: "Outro",
            description: "All Resonators in the team: **+25% All DMG Amplification** (30s).",
            attributes: [
                { name: "All Amp", value: "+25%" },
                { name: "Duration", value: "30s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Interfered Marker duration +150%, **no longer requires Tune Rupture/Strain** to activate. Air Basic Attacks become uninterruptible." },
        { node: "S2", name: "Sequence Node 2", description: "Team gains Crit. DMG vs marked targets (0.2% per 1% ER over 100%, up to 32%). Syntony Field Off-Tune Rate +20%." },
        { node: "S3", name: "Sequence Node 3", description: "Distributed Array restores 25 Concerto Energy and 100 Relative Momentum (25s CD)." },
        { node: "S4", name: "Sequence Node 4", description: "High Syntony Field healing +30%." },
        { node: "S5", name: "Sequence Node 5", description: "Liberation DMG Multiplier +40%. Tune Rupture Response DMG +160%." },
        { node: "S6", name: "Sequence Node 6", description: "Liberation deals **400% more DMG**. Out of combat for 4s: Restores 10% Max Energy every 0.2s." }
    ],
    rotation: [
        "**Opener (Ground Phase)**:",
        "1. Basic Attack x3 (Fill Rest Mass Energy).",
        "2. Heavy Attack (Enter Wide Field Observation Mode).",
        "",
        "**Main Rotation (Air Phase)**:",
        "3. Basic Attack x3 (Air) (Fill Relative Momentum).",
        "4. Resonance Skill - Distributed Array (Heal + DMG).",
        "5. Resonance Liberation (Upgrade to High Syntony Field).",
        "6. Heavy Attack - Inversion (Apply Observation Marker).",
        "7. Outro (25% DMG Amp to team).",
        "",
        "**Note**: After opener, use Intro to skip ground phase entirely."
    ],
    builds: {
        weapons: [
            {
                name: "Starfield Calibrator",
                rank: "Signature (Best)",
                rarity: 5,
                description: "DEF +32%, 77% Energy Regen, team Crit DMG +20%. Perfect stats.",
                image: "/images/weapons/starfieldcalibrator.png"
            },
            {
                name: "Discord",
                rank: "Best 4-Star",
                rarity: 4,
                description: "51.8% Energy Regen, +14 Concerto on Skill. Essential for smooth rotations.",
                image: "/images/weapons/discord.png"
            },
            {
                name: "Dauntless Evernight",
                rank: "DEF Option",
                rarity: 4,
                description: "ATK +8% and DEF +15% on Intro. Good stats but no Concerto.",
                image: "/images/weapons/dauntlessevernight.png"
            },
            {
                name: "Broadblade#41",
                rank: "F2P Craftable",
                rarity: 4,
                description: "32.3% Energy Regen. Barely meets 260% requirement, slower rotation.",
                image: "/images/weapons/broadblade_41.png"
            }
        ],
        echoes: [
            {
                set: "Halo of Starry Radiance (5pc)",
                mainEcho: "Reactor Husk",
                stats: {
                    cost4: ["Healing Bonus", "DEF%"],
                    cost3: ["Energy Regen", "Energy Regen"],
                    cost1: ["DEF%", "DEF%"],
                    substats: ["Energy Regen (260%)", "DEF%", "Flat DEF", "Crit DMG"]
                },
                description: "Best In Slot.",
                recommendation_reason: "Provides 25% ATK buff to team based on Off-Tune Buildup Rate. Reactor Husk gives 10% ER.",
                echo_breakdown: {
                    cost4: [{ name: "Reactor Husk", image: "/images/echoes/reactorhusk.png", mainStats: ["Healing Bonus", "DEF%"] }],
                    cost3: [
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Energy Regen"] },
                        { name: "Chasm Guardian", image: "/images/echoes/chasmguardian.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Whifflenier", image: "/images/echoes/whifflenier.png", mainStats: ["DEF%"] },
                        { name: "Crysalis", image: "/images/echoes/crysalis.png", mainStats: ["DEF%"] }
                    ]
                }
            },
            {
                set: "Rejuvenating Glow (5pc)",
                mainEcho: "Fallacy of No Return",
                stats: {
                    cost4: ["Healing Bonus", "DEF%"],
                    cost3: ["Energy Regen", "Energy Regen"],
                    cost1: ["DEF%", "DEF%"],
                    substats: ["Energy Regen (260%)", "DEF%", "Flat DEF"]
                },
                description: "Alternative Set.",
                recommendation_reason: "15% ATK buff to team on heal. Fallacy gives extra 10% ATK and ER.",
                echo_breakdown: {
                    cost4: [{ name: "Fallacy of No Return", image: "/images/echoes/fallacyofnoreturn.png", mainStats: ["Healing Bonus", "DEF%"] }],
                    cost3: [
                        { name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["Energy Regen"] },
                        { name: "Rocksteady Guardian", image: "/images/echoes/rocksteadyguardian.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Snip Snap", image: "/images/echoes/snipsnap.png", mainStats: ["DEF%"] },
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["DEF%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (260% Cap) > DEF% > Flat DEF > Liberation DMG > Crit DMG"
    },
    teams: [
        {
            name: "Iuno Tune Break",
            description: "Best team with Lynae for Off-Tune synergy.",
            members: [
                { name: "Iuno", role: "Main DPS" },
                { name: "Lynae", role: "Sub DPS" },
                { name: "Mornye", role: "Support" }
            ]
        },
        {
            name: "Lynae Hypercarry",
            description: "Supporting Main DPS Lynae with Sanhua.",
            members: [
                { name: "Lynae", role: "Main DPS" },
                { name: "Sanhua", role: "Sub DPS" },
                { name: "Mornye", role: "Support" }
            ]
        },
        {
            name: "Universal Flex",
            description: "Works with any DPS via Tune Break mechanics.",
            members: [
                { name: "Any Main DPS", role: "Main DPS" },
                { name: "Lynae", role: "Sub DPS" },
                { name: "Mornye", role: "Support" }
            ]
        }
    ]
};
