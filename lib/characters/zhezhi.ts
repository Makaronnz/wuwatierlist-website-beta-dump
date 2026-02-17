import { Character } from "../characterTypes";

export const zhezhi: Character = {
    id: "zhezhi",
    name: "Zhezhi",
    rarity: 5,
    element: "Glacio",
    weaponType: "Rectifier",
    role: "Hybrid",
    tags: ["Coordinated Attack", "buffer", "Energy Regen", "Glacio DMG"],
    profileType: "Versatile",
    potential: "B",
    tier: {
        overall: "R2",
        tower: "R2",
        wastes: "R2"
    },
    imagePortrait: "/images/characters/ZhezhiSmall.png",
    imageIcon: "/images/characters/ZhezhiSmall.png",
    imageCard: "/images/characters/ZhezhiLarge.png",
    stats: {
        hp: 12250,
        atk: 375,
        def: 1198
    },
    materials: {
        ascension: [
            { name: "Sound-Keeping Tacet Core", count: 46, icon: "/images/else/soundkeepingtacetcore.png" },
            { name: "Lanternberry", count: 60, icon: "/images/else/lanternberry.png" },
            { name: "LF Howler Core", count: 4, icon: "/images/else/lfhowlercore.png" },
            { name: "MF Howler Core", count: 12, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 12, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" }
        ],
        skills: [
            { name: "LF Howler Core", count: 25, icon: "/images/else/lfhowlercore.png" },
            { name: "MF Howler Core", count: 28, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 40, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 57, icon: "/images/else/ffhowlercore.png" },
            { name: "Lento Helix", count: 25, icon: "/images/else/lentohelix.png" },
            { name: "Adagio Helix", count: 28, icon: "/images/else/adagiohelix.png" },
            { name: "Andante Helix", count: 55, icon: "/images/else/andantehelix.png" },
            { name: "Presto Helix", count: 67, icon: "/images/else/prestohelix.png" },
            { name: "Monument Bell", count: 26, icon: "/images/else/monumentbell.png" }
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
                    { name: "Sound-Keeping Tacet Core", count: 3, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Lanternberry", count: 4, icon: "/images/else/lanternberry.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Howler Core", count: 8, icon: "/images/else/mfhowlercore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 6, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Lanternberry", count: 8, icon: "/images/else/lanternberry.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Howler Core", count: 4, icon: "/images/else/hfhowlercore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 9, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Lanternberry", count: 12, icon: "/images/else/lanternberry.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Howler Core", count: 8, icon: "/images/else/hfhowlercore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 12, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Lanternberry", count: 16, icon: "/images/else/lanternberry.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
                    { name: "Sound-Keeping Tacet Core", count: 16, icon: "/images/else/soundkeepingtacetcore.png" },
                    { name: "Lanternberry", count: 20, icon: "/images/else/lanternberry.png" }
                ]
            }
        ],
        weapon: {
            name: "Rime-Draped Sprouts",
            icon: "/images/weapons/rimedrapedsprouts.png",
            total: [
                { name: "MF Howler Core", count: 20, icon: "/images/else/mfhowlercore.png" },
                { name: "HF Howler Core", count: 20, icon: "/images/else/hfhowlercore.png" },
                { name: "FF Howler Core", count: 12, icon: "/images/else/ffhowlercore.png" },
                { name: "Lento Helix", count: 26, icon: "/images/else/lentohelix.png" },
                { name: "Adagio Helix", count: 26, icon: "/images/else/adagiohelix.png" },
                { name: "Andante Helix", count: 16, icon: "/images/else/andantehelix.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Howler Core", count: 6, icon: "/images/else/lfhowlercore.png" },
                        { name: "Lento Helix", count: 6, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Howler Core", count: 6, icon: "/images/else/mfhowlercore.png" },
                        { name: "Lento Helix", count: 6, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Howler Core", count: 10, icon: "/images/else/mfhowlercore.png" },
                        { name: "Lento Helix", count: 10, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Howler Core", count: 6, icon: "/images/else/hfhowlercore.png" },
                        { name: "Adagio Helix", count: 6, icon: "/images/else/adagiohelix.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Howler Core", count: 10, icon: "/images/else/hfhowlercore.png" },
                        { name: "Adagio Helix", count: 10, icon: "/images/else/adagiohelix.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Howler Core", count: 6, icon: "/images/else/ffhowlercore.png" },
                        { name: "Andante Helix", count: 6, icon: "/images/else/andantehelix.png" }
                    ]
                }
            ]
        }
    },
    baseStats: {
        hp: 980,
        atk: 30,
        def: 98
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "ATK%", value: "12%", stat: "atk", amount: 12 },
        { name: "Crit Rate", value: "8%", stat: "critRate", amount: 8 }
    ],
    analysis: {
        overview: `Zhezhi is a **5-star Glacio Sub-DPS** who excels at rapid on-field burst damage and consistent off-field Coordinated Attacks.
        
        Her kit revolves around the **Afflatus** mechanic, where she builds up paint to summon **Phantasmic Imprints**. These allow her to teleport and execute powerful attacks. Her **Resonance Liberation** summons Inklit Spirits that deal coordinated damage whenever the active character attacks, making her a fantastic off-field damage dealer.
        
        Her most valuable asset is her **Outro Skill**, which amplifies **Glacio DMG** and **Resonance Skill DMG** for the next character, making her the premier support for characters like Jinhsi and Carlotta.`,
        playstyle: "Zhezhi's goal is to quickly build Afflatus, consume it via Skills to summon Imprints, and then unleash her Liberation. \n\n**Rotation**: Intro -> Basic Attack Combo (build Afflatus) -> Skill (summon Imprints) -> Forte Heavy Attack (summon Imprint) -> 3x Skill Combo (consume Imprints) -> Liberation -> Echo -> Outro.",
        pros: [
            "**Premier Glacio Support**: Massive buffs for Glacio and Skill DMG characters.",
            "**Off-field DMG**: Significant coordinated attack damage via Liberation.",
            "**Ease of Use**: Simple rotation with high impact.",
            "**Energy Support**: Outro restores energy to the next character (via Inherent Skill)."
        ],
        cons: [
            "**High Energy Cost**: Liberation has a long cooldown and high cost.",
            "**Not Quickswap Friendly**: Needs field time to execute her full combo.",
            "**Mobile Enemies**: Imprints are stationary, so mobile enemies can be tricky."
        ]
    },
    skills: [
        {
            name: "Basic: Dimming Brush",
            type: "Basic",
            description: "Performs up to 3 consecutive attacks dealing Glacio DMG. Generates Afflatus on hit.",
            attributes: [
                { name: "Stage 1 DMG", value: "21.00% * 2" },
                { name: "Stage 2 DMG", value: "10.34% * 5" },
                { name: "Stage 3 DMG", value: "67.20%" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Manifestation",
            type: "Skill",
            description: "Deals Glacio DMG. Consumes Afflatus to summon **Phantasmic Imprints** (Left/Right). Can be cast mid-air.",
            attributes: [
                { name: "Press DMG", value: "49.50% * 3" },
                { name: "Cooldown", value: "6s" },
                { name: "Concerto Regen", value: "8" }
            ],
            priority: 4
        },
        {
            name: "Forte Circuit: Ink and Wash",
            type: "Forte",
            description: "Core mechanic. Consumes **Afflatus** to summon Imprints via Skill or Heavy Attack. Imprints allow casting **Stroke of Genius** and **Creation's Zenith** for massive damage.",
            attributes: [
                { name: "Stroke of Genius DMG", value: "150.00%" },
                { name: "Creation's Zenith DMG", value: "60.00% * 3" },
                { name: "Afflatus Max", value: "90" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Living Canvas",
            type: "Ultimate",
            description: "Summons **Inklit Spirits** that perform Coordinated Attacks when the active Resonator deals damage. Lasts 30s.",
            attributes: [
                { name: "Spirit DMG", value: "32.80%" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 3
        },
        {
            name: "Intro: Radiant Ruin",
            type: "Intro",
            description: "Attacks the target dealing Glacio DMG and restores Afflatus.",
            attributes: [
                { name: "DMG", value: "43.34% * 3" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Carve and Draw",
            type: "Outro",
            description: "The next Resonator gains **20% Glacio DMG Amplification** and **25% Resonance Skill DMG Amplification** for 14s. **Inherent**: Restores 15 Energy to incoming Resonator.",
            attributes: [
                { name: "Glacio Amp", value: "+20%" },
                { name: "Skill Amp", value: "+25%" },
                { name: "Energy Regen", value: "+15" },
                { name: "Duration", value: "14s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Spilled Inklings", description: "Casting Creation's Zenith restores **15 Energy** and increases **Crit Rate by 10%** for 27s." },
        { node: "S2", name: "Vivid Strokes", description: "Max Inklit Spirits from Liberation increased by **6**." },
        { node: "S3", name: "Lifelike Portrayal", description: "Casting specific skills increases ATK by **15%**, stacking up to 3 times for 27s." },
        { node: "S4", name: "Hue of Emotion", description: "Liberation increases team ATK by **20%** for 30s." },
        { node: "S5", name: "Composition's Core", description: "For every 3 Inklit Spirits, summon 1 extra spirit dealing **140%** damage." },
        { node: "S6", name: "Infinite Imagination", description: "Casting Stroke of Genius or Creation's Zenith summons an extra **Ivory Herald** dealing 120% damage." }
    ],
    rotation: [
        "1. **Intro Skill**",
        "2. **Basic Attacks** (Generate 90 Afflatus)",
        "3. **Skill** (Tap/Hold to summon Imprints)",
        "4. **Heavy Attack** (Summon final Imprint)",
        "5. **Skill Combo** (Stroke of Genius x3)",
        "6. **Liberation** (Living Canvas)",
        "7. **Echo Skill** (Impermanence Heron - Swap Cancel)",
        "8. **Outro Skill**"
    ],
    builds: {
        weapons: [
            {
                name: "Rime-Draped Sprouts",
                rank: "Signature",
                rarity: 5,
                description: "Best in Slot. Tailored for her kit with ATK buffs, Basic ATK bonuses, and off-field DMG boosts.",
                image: "/images/weapons/rimedrapedsprouts.png"
            },
            {
                name: "Stringmaster",
                rank: "5-Star Alt",
                rarity: 5,
                description: "High Crit Rate and DMG bonus. Great stat stick.",
                image: "/images/weapons/stringmaster.png"
            },
            {
                name: "Cosmic Ripples",
                rank: "Standard 5★",
                rarity: 5,
                description: "Good Energy Regen and ATK stats.",
                image: "/images/weapons/cosmicripples.png"
            },
            {
                name: "Variation",
                rank: "4-Star Support",
                rarity: 4,
                description: "Excellent for Energy Regen and Concerto generation.",
                image: "/images/weapons/variation.png"
            }
        ],
        echoes: [
            {
                set: "Empyrean Anthem (5pc)",
                mainEcho: "Nightmare: Lampylumen Myriad",
                stats: {
                    cost4: ["Crit Rate", "Crit DMG"],
                    cost3: ["Glacio DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit Rate", "Crit DMG", "Basic Attack DMG"]
                },
                description: "Best set for Sub-DPS Zhezhi. Increases Coordinated Attack DMG and buffs the next character's ATK.",
                recommendation_reason: "Maximizes her off-field damage and support capabilities.",
                echo_breakdown: {
                    cost4: [{ name: "Nightmare: Lampylumen Myriad", image: "/images/echoes/nightmarelampylumenmyriad.png", mainStats: ["Crit Rate", "Crit DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Glacio DMG"] },
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Snip Snap", image: "/images/echoes/snipsnap.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit Rate", "Crit DMG"],
                    cost3: ["Glacio DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit Rate", "Crit DMG", "ATK%"]
                },
                description: "Standard Support option if Empyrean Anthem is unavailable. Good for Energy Regen and team buffs.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit Rate", "Crit DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Glacio DMG"] },
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Snip Snap", image: "/images/echoes/snipsnap.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (120%+) > Crit Rate/DMG > Basic Attack DMG > ATK%"
    },
    teams: [
        {
            name: "Glacio/Skill DPS Support",
            description: "Zhezhi buffs Main DPS (like Jinhsi or Carlotta) who rely on Skill/Glacio DMG.",
            members: [
                { name: "Jinhsi", role: "Main DPS" },
                { name: "Zhezhi", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "Glacio DPS Team",
            description: "Supporting a Glacio carry like Carlotta or Lingyang.",
            members: [
                { name: "Carlotta", role: "Main DPS" },
                { name: "Zhezhi", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        }
    ]
};
