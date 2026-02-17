import { Character } from "../characterTypes";

export const encore: Character = {
    id: "encore",
    name: "Encore",
    rarity: 5,
    element: "Fusion",
    weaponType: "Rectifier",
    role: "Main DPS",
    tags: ["Fusion DMG", "Burst", "Ranged", "Melee Transformation"],
    profileType: "Specialist",
    potential: "A",
    tier: {
        overall: "R1.5",
        tower: "R2",
        wastes: "R3"
    },
    imagePortrait: "/images/characters/EncoreSmall.png",
    imageIcon: "/images/characters/EncoreSmall.png",
    imageCard: "/images/characters/EncoreLarge.png",
    stats: {
        hp: 10512,
        atk: 425,
        def: 1246
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "Fusion DMG", value: "12%", stat: "elementalDamage", amount: 12 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Whisperin Core", count: 4, icon: "/images/else/lfwhisperincore.png" },
            { name: "Pecok Flower", count: 60, icon: "/images/else/pecokflower.png" },
            { name: "MF Whisperin Core", count: 12, icon: "/images/else/mfwhisperincore.png" },
            { name: "HF Whisperin Core", count: 12, icon: "/images/else/hfwhisperincore.png" },
            { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
            { name: "Rage Tacet Core", count: 46, icon: "/images/else/ragetacetcore.png" }
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
            { name: "Unending Destruction", count: 26, icon: "/images/else/unendingdestruction.png" }
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
                    { name: "Rage Tacet Core", count: 3, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pecok Flower", count: 4, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Whisperin Core", count: 8, icon: "/images/else/mfwhisperincore.png" },
                    { name: "Rage Tacet Core", count: 6, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pecok Flower", count: 8, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Whisperin Core", count: 4, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Rage Tacet Core", count: 9, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pecok Flower", count: 12, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Whisperin Core", count: 8, icon: "/images/else/hfwhisperincore.png" },
                    { name: "Rage Tacet Core", count: 12, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pecok Flower", count: 16, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Whisperin Core", count: 4, icon: "/images/else/ffwhisperincore.png" },
                    { name: "Rage Tacet Core", count: 16, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pecok Flower", count: 20, icon: "/images/else/pecokflower.png" }
                ]
            }
        ],
        weapon: {
            name: "Stringmaster",
            icon: "/images/weapons/stringmaster.png",
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
        overview: `Encore is a **Fusion Rectifier Main DPS** with a unique dual playstyle. She fights as a ranged mage with her plushies, but her Resonance Liberation transforms her into a melee powerhouse, drastically increasing her damage output.
        
        She is simple to pick up but has a high skill ceiling due to "Swap Cancels" (especially her Heavy Attack). She works exceptionally well in both Hypercarry and Quickswap teams.`,
        playstyle: "Use Skill/Echo on cooldown -> Build Forte -> Heavy Attack (Swap Cancel) -> Liberation -> Rampage/Frolicking.",
        pros: [
            "**High Burst DMG**: Liberation state deals massive damage.",
            "**Versatile**: Fits equally well in Hypercarry and Quickswap teams.",
            "**Easy to Learn**: straightforward kit with high impact.",
            "**Excellent Scaling**: Benefits greatly from Stringmaster and Changli."
        ],
        cons: [
            "**Animation Locks**: Heavy Attack has a long cast time (Swap Cancel required).",
            "**Vulnerable**: Melee form in Liberation makes her prone to hits.",
            "**Energy Hungry**: Needs Energy Regen (~125%) for consistent Liberation."
        ]
    },
    skills: [
        {
            name: "Basic: Wooly Attack",
            type: "Basic",
            description: "4-hit ranged combo + **Wooly Strike** follow-up. In Liberation → **Cosmos: Frolicking** (4-hit melee).",
            attributes: [
                { name: "Basic P1 DMG", value: "28.00%" },
                { name: "Basic P3 DMG", value: "33.35% * 2" },
                { name: "Basic P4 DMG", value: "19.25% * 4" },
                { name: "Wooly Strike", value: "120.00%" },
                { name: "Cosmos Frolicking P4", value: "97.59% * 3" },
                { name: "Dodge Counter", value: "63.34% * 2" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Flaming Woolies",
            type: "Skill",
            description: "Fire ray barrage (8 hits). Follow-up **Energetic Welcome** (explosion). In Liberation → **Cosmos: Rampage** (frenzy slashes).",
            attributes: [
                { name: "Flaming Woolies DMG", value: "38.53% * 8" },
                { name: "Energetic Welcome", value: "170.60%" },
                { name: "Cosmos Rampage", value: "31.85% * 4" },
                { name: "Cooldown", value: "10s (Rampage 4s)" },
                { name: "Concerto Regen", value: "15 + 5" }
            ],
            priority: 3
        },
        {
            name: "Forte Circuit: Black & White Woolies",
            type: "Forte",
            description: "**Dissonance** (max 100): Full gauge → **Cloudy Frenzy** (or **Cosmos Rupture** in Lib). -70% DMG taken during channel. Swap-cancel recommended.",
            attributes: [
                { name: "Cloudy Frenzy DMG", value: "168.00%" },
                { name: "Cosmos Rupture DMG", value: "23.35% * 6 + 249.08%" },
                { name: "DMG Reduction", value: "70%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Cosmos Rave",
            type: "Ultimate",
            description: "Enter **Cosmos Rampage** (10s). Melee transformation with enhanced multipliers. +10% DMG above 70% HP (Inherent). +10% Fusion after Skill (Inherent).",
            attributes: [
                { name: "Duration", value: "10s" },
                { name: "Cooldown", value: "16s" },
                { name: "Energy Cost", value: "125" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 4
        },
        {
            name: "Intro: Woolies Can Help!",
            type: "Intro",
            description: "Pounce attack dealing Fusion DMG.",
            attributes: [
                { name: "Skill DMG", value: "100.00%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Thermal Field",
            type: "Outro",
            description: "Create Flame Zone (3m radius) burning enemies for 6s.",
            attributes: [
                { name: "Burn DMG", value: "176.76% ATK / 1.5s" },
                { name: "Duration", value: "6s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Basic Attacks increase **Fusion DMG Bonus** by 3% (up to 12%)." },
        { node: "S2", name: "Sequence Node 2", description: "Restores **10 Energy** when using Basic Attack or Skill (10s CD)." },
        { node: "S3", name: "Sequence Node 3", description: "Forte Heavy Attack (Frenzy/Rupture) DMG increased by **40%**." },
        { node: "S4", name: "Sequence Node 4", description: "Cosmos Rupture increases **Team Fusion DMG** by 20% for 30s." },
        { node: "S5", name: "Sequence Node 5", description: "Skill DMG Bonus increased by **35%**." },
        { node: "S6", name: "Sequence Node 6", description: "During Liberation, stacks ATK up to **30%**." }
    ],
    rotation: [
        "1. **Intro**: Enter combat.",
        "2. **Skill**: Cast Flaming Woolies -> Swap Cancel (if needed) or finish cast.",
        "3. **Echo**: Enhanced Echo (Inferno Rider).",
        "4. **Forte**: If full, cast Heavy Attack -> **Swap Cancel**.",
        "5. **Liberation**: Activate Cosmos Rave.",
        "6. **Burst**: Skill (Rampage) -> Basic x4 -> Skill -> Basic x4 -> Skill -> Forte Heavy (Rupture).",
        "7. **Outro**: Switch character."
    ],
    builds: {
        weapons: [
            {
                name: "Stringmaster",
                rank: "Signature (Best)",
                rarity: 5,
                description: "Yinlin's weapon. Best in slot due to huge Crit Rate and DMG Bonus.",
                image: "/images/weapons/stringmaster.png"
            },
            {
                name: "Rime-Draped Sprouts",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Zhezhi's weapon. Fantastic stats and ATK buffs.",
                image: "/images/weapons/rimedrapedsprouts.png"
            },
            {
                name: "Cosmic Ripples",
                rank: "5-Star Standard",
                rarity: 5,
                description: "Great ATK and Energy Regen stats. Strong alternative.",
                image: "/images/weapons/cosmicripples.png"
            },
            {
                name: "Augment",
                rank: "Battle Pass",
                rarity: 4,
                description: "Significant ATK boost on Liberation.",
                image: "/images/weapons/augment.png"
            },
            {
                name: "Variation",
                rank: "Energy Support",
                rarity: 4,
                description: "Helps with Energy Regen if struggling.",
                image: "/images/weapons/variation.png"
            }
        ],
        echoes: [
            {
                set: "Molten Rift (5pc)",
                mainEcho: "Nightmare: Inferno Rider",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Fusion DMG", "Fusion DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Energy Regen", "ATK%"]
                },
                description: "Standard Fusion DPS set.",
                recommendation_reason: "Best for Hypercarry Encore.",
                echo_breakdown: {
                    cost4: [{ name: "Nightmare: Inferno Rider", image: "/images/echoes/nightmareinfernorider.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Havoc Dreadmane", image: "/images/echoes/havocdreadmane.png", mainStats: ["Fusion DMG"] },
                        { name: "Violet-Feathered Heron", image: "/images/echoes/violetfeatheredheron.png", mainStats: ["Fusion DMG"] }
                    ],
                    cost1: [
                        { name: "Fusion Prism", image: "/images/echoes/fusionprism.png", mainStats: ["ATK%"] },
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Energy Regen (125%+) > Fusion DMG > ATK%"
    },
    teams: [
        {
            name: "Encore Hypercarry",
            description: "Maximizes Encore's burst window with heavy buffs.",
            members: [
                { name: "Encore", role: "Main DPS" },
                { name: "Sanhua", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        },
        {
            name: "Double Fusion",
            description: "Quickswap team with Changli for mutual buffing.",
            members: [
                { name: "Encore", role: "Main DPS" },
                { name: "Changli", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        }
    ]
};
