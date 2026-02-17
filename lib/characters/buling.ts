import { Character } from "../characterTypes";

export const buling: Character = {
    id: "buling",
    name: "Buling",
    rarity: 4,
    element: "Electro",
    weaponType: "Rectifier",
    role: "Support",
    tags: ["Healer", "Electro Flare", "Buffer", "Damage Amplification"],
    tier: {
        overall: "R1.5",
        tower: "R1.5",
        wastes: "R1.5"
    },
    imagePortrait: "/images/characters/BulingSmall.png",
    imageIcon: "/images/characters/BulingSmall.png",
    imageCard: "/images/characters/BulingLarge.png",
    stats: {
        hp: 10625,
        atk: 225,
        def: 1259
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "Healing Bonus", value: "12%", stat: "healingBonus", amount: 12 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "Pecok Flower", count: 60, icon: "/images/else/pecokflower.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Blighted Crown of Puppet King", count: 46, icon: "/images/else/blightedcrownofpuppetking.png" }
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
            { name: "Curse of the Abyss", count: 26, icon: "/images/else/curseoftheabyss.png" }
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
                    { name: "Blighted Crown", count: 3, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Pecok Flower", count: 4, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Whisperin Core", count: 8, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Blighted Crown", count: 6, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Pecok Flower", count: 8, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Whisperin Core", count: 4, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Blighted Crown", count: 9, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Pecok Flower", count: 12, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Whisperin Core", count: 8, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Blighted Crown", count: 12, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Pecok Flower", count: 16, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
                    { name: "Blighted Crown", count: 16, icon: "/images/else/blightedcrownofpuppetking.png" },
                    { name: "Pecok Flower", count: 20, icon: "/images/else/pecokflower.png" }
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
        overview: `Buling is a **4-star Electro Rectifier Support** and a dedicated "Resonance Skill Specialist". She is designed to hyper-buff characters like **Jinhsi** or **Carla** whose primary damage comes from their Resonance Skills.
        
        Beyond simple healing, she is defined by her "Lightning-Fast Rotation," capable of dumping her entire support kit in under 5 seconds. Her future-proof "Electro Flare" mechanics and powerful S6 (which doubles her damage buff) make her a potent, albeit niche, alternative to 5-star supports.`,
        playstyle: "Simple support rotation involving Trigram generation.\n\n**Rotation**: Basic 4 / Skill (Generate Trigrams) -> Special Heavy Attack (Consume Trigrams to gain Minor Yin/Yang) ->  Resonance Liberation (Empowered) -> Outro.",
        pros: [
            "**Lightning-Fast Rotation**: Executes full support sequence in <5 seconds, maximizing Main DPS field time.",
            "**Resonance Skill Specialist**: Tailor-made to buffer Skill DMG hyper-carries (Jinhsi/Carla).",
            "**Hybrid Utility**: Consolidates Healing, DMG Amplification, and crowd control (pull) into one kit.",
            "**Top-Tier S6 Potential**: At S6, her buff doubles (25% -> 50%), allowing her to outperform some 0-sequence 5-stars."
        ],
        cons: [
            "**Sky-High Energy Needs**: Demands extreme Energy Regen (~230%+) to function without rotation gaps.",
            "**Niche Application**: Value drops significantly if the Main DPS isn't focused on Resonance Skill damage.",
            "**Punishing Playstyle**: Mismanaging Yin-Yang mechanic triggers 'misfire' animations, stalling rotations.",
            "**Low Personal Damage**: Deal negligible damage; investing in offensive stats is inefficient.",
            "**Sequence Dependent**: Needs high sequences (especially S6) to truly compete with meta generalists."
        ]
    },
    skills: [
        {
            name: "Basic: Hexagram Calls",
            type: "Basic",
            description: "4-hit combo. P2 → Mountain Trigram, P4 → Thunder Trigram. Hold Basic → consume 2 Trigrams for special Heavy ATK. **Ghost Gate Omen** (penalty on wrong combo: lose HP, lose Trigrams).",
            attributes: [
                { name: "Basic P4 DMG", value: "47.10%" },
                { name: "Mountain over Thunder", value: "90.00%" },
                { name: "Thunder over Mountain", value: "45.00%" },
                { name: "Twin Mountains Heal", value: "360 + 68% ATK" },
                { name: "Twin Thunders HoT", value: "85 + 9.2% ATK/s (8s)" }
            ],
            priority: 4
        },
        {
            name: "Resonance: In Shadow Thunder Stirs",
            type: "Skill",
            description: "Electro DMG + **pull enemies in**. Generates Thunder Trigram. Chain into P4.",
            attributes: [
                { name: "Skill DMG", value: "29.37%" },
                { name: "Pull DMG", value: "2.94% * 10" },
                { name: "Cooldown", value: "15s" },
                { name: "Concerto Regen", value: "23" }
            ],
            priority: 1
        },
        {
            name: "Forte: Thunder Begets Life",
            type: "Forte",
            description: "**Minor Yang** (from Mountain/Thunder Heavy) + **Minor Yin** (from Twin Heavy) → **Yin-Yang Balance** → Enhanced Liberation. **Thunder Spell** buff tiers: Primordial Qi → Yin/Yang (+10% Skill DMG) → Heaven/Earth/Mind (+25%, S6: +50%). +25% Healing on low HP allies (Inherent). Intro applies 4 Electro Flare (Inherent).",
            attributes: [
                { name: "Skill DMG Bonus", value: "+10% → +25%" },
                { name: "S6 Bonus", value: "+50%" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Flashing Thunder Spell",
            type: "Ultimate",
            description: "Electro nuke. **Harmony** (enhanced): Create **Five Thunders Spell Array** (24s, 2 Electro Flare every 2s, enables Thunder Spell buffs).",
            attributes: [
                { name: "Base DMG", value: "180.00%" },
                { name: "Harmony DMG", value: "270.00%" },
                { name: "Array DoT", value: "10.00% per tick" },
                { name: "Energy Cost", value: "150" }
            ],
            priority: 1
        },
        {
            name: "Intro: Summon and Smite",
            type: "Intro",
            description: "Electro DMG + team heal. Applies 4 Electro Flare (Inherent).",
            attributes: [
                { name: "Skill DMG", value: "65.94%" },
                { name: "Healing", value: "350 + 40% ATK" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 2
        },
        {
            name: "Outro: Exorcism Spell",
            type: "Outro",
            description: "Heal active Resonator over time. **Amplify team DMG by 15%** for 30s.",
            attributes: [
                { name: "HoT", value: "18% ATK/s (16s)" },
                { name: "DMG Amp", value: "+15%" },
                { name: "Duration", value: "30s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Increases Crit. Rate of Enhanced Liberation by **20%**." },
        { node: "S2", name: "Sequence Node 2", description: "Restores **25 Energy** when entering Yin-Yang Balance (Enhanced Lib state)." },
        { node: "S3", name: "Sequence Node 3", description: "Spell Array heals team members below 50% HP periodically." },
        { node: "S4", name: "Sequence Node 4", description: "Gains **20% Healing Bonus**." },
        { node: "S5", name: "Sequence Node 5", description: "Spell Array inflicts 6 stacks of Electro Flare on cast." },
        { node: "S6", name: "Sequence Node 6", description: "Thunder Spell buff now grants **50% Resonance Skill DMG Bonus** to the active Resonator." }
    ],
    rotation: [
        "1. **Basic/Skill**: Use Basic 2 -> Basic 4 or Skill to generate Trigrams.",
        "2. **Heavy Attack**: Hold Attack to cast Mountain over Thunder or Twin Thunders to gain Yin/Yang.",
        "3. **Liberation**: Cast Enhanced Liberation to set up Spell Array.",
        "4. **Outro**: Switch to Main DPS."
    ],
    builds: {
        weapons: [
            {
                name: "Stellar Symphony",
                rank: "Signature",
                rarity: 5,
                description: "Best in Slot. Provides massive stats and supports team ATK via healing.",
                image: "/images/weapons/stellarsymphony.png"
            },
            {
                name: "Cosmic Ripples",
                rank: "Standard 5*",
                rarity: 5,
                description: "Good stat stick for ATK and Energy Regen.",
                image: "/images/weapons/cosmicripples.png"
            },
            {
                name: "Variation",
                rank: "Best 4*",
                rarity: 4,
                description: "Excellent for Energy Regen and Concerto generation.",
                image: "/images/weapons/variation.png"
            },
            {
                name: "Call of the Abyss",
                rank: "F2P Option",
                rarity: 4,
                description: "Free option that boosts Healing Bonus after Liberation.",
                image: "/images/weapons/calloftheabyss.png"
            }
        ],
        echoes: [
            {
                set: "Rejuvenating Glow (5pc)",
                mainEcho: "Fallacy of No Return",
                stats: {
                    cost4: ["Healing Bonus", "ATK%"],
                    cost3: ["Energy Regen", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "ATK%", "Flat ATK", "HP%"]
                },
                description: "Best set for supports. Buffs team ATK by 15% on heal.",
                recommendation_reason: "Standard healer set, perfect for her role.",
                echo_breakdown: {
                    cost4: [{ name: "Fallacy of No Return", image: "/images/echoes/fallacyofnoreturn.png", mainStats: ["Healing Bonus", "ATK%"] }],
                    cost3: [
                        { name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["Energy Regen"] },
                        { name: "Chasm Guardian", image: "/images/echoes/chasmguardian.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Tick Tack", image: "/images/echoes/ticktack.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Healing Bonus", "ATK%"],
                    cost3: ["Energy Regen", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "ATK%", "Flat ATK", "HP%"]
                },
                description: "Alternative set if you need more Energy Regen or team buffs via Heron.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Healing Bonus", "ATK%"] }],
                    cost3: [
                        { name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["Energy Regen"] },
                        { name: "Chasm Guardian", image: "/images/echoes/chasmguardian.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Tick Tack", image: "/images/echoes/ticktack.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (150%+) > ATK% > Flat ATK"
    },
    teams: [
        {
            name: "Skill DMG Buff",
            description: "Supports Skill DMG focused DPS characters.",
            members: [
                { name: "Carlotta", role: "Main DPS" },
                { name: "Zhezhi", role: "Sub DPS" },
                { name: "Buling", role: "Support" }
            ]
        },
        {
            name: "Jinhsi Team",
            description: "Provides buffs for Jinhsi's massive burst.",
            members: [
                { name: "Jinhsi", role: "Main DPS" },
                { name: "Zhezhi", role: "Sub DPS" },
                { name: "Buling", role: "Support" }
            ]
        },
        {
            name: "General Support",
            description: "Flexible healer for any team.",
            members: [
                { name: "Rover (Havoc)", role: "Main DPS" },
                { name: "Sanhua", role: "Sub DPS" },
                { name: "Buling", role: "Support" }
            ]
        }
    ]
};
