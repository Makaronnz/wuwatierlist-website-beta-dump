import { Character } from "../characterTypes";

export const cantarella: Character = {
    id: "cantarella",
    name: "Cantarella",
    rarity: 5,
    element: "Havoc",
    weaponType: "Rectifier",
    role: "Hybrid",
    tags: ["Havoc DMG", "Coordinated Attack", "Healing", "Concerto Generator"],
    profileType: "Specialist",
    potential: "A",
    tier: {
        overall: "R1.5",
        tower: "R1.5",
        wastes: "R1.5"
    },
    imagePortrait: "/images/characters/CantarellaSmall.png",
    imageIcon: "/images/characters/CantarellaSmall.png",
    imageCard: "/images/characters/CantarellaLarge.png",
    stats: {
        hp: 11600,
        atk: 400,
        def: 1100
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT Rate", value: "8%", stat: "critRate", amount: 8 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Polygon Core", count: 4, icon: "/images/else/lfpolygoncore.png" },
            { name: "Seaside Cendrelis", count: 60, icon: "/images/else/seasidecendrelis.png" },
            { name: "MF Polygon Core", count: 12, icon: "/images/else/mfpolygoncore.png" },
            { name: "HF Polygon Core", count: 12, icon: "/images/else/hfpolygoncore.png" },
            { name: "FF Polygon Core", count: 4, icon: "/images/else/ffpolygoncore.png" },
            { name: "Cleansing Conch", count: 46, icon: "/images/else/cleansingconch.png" }
        ],
        skills: [
            { name: "LF Polygon Core", count: 25, icon: "/images/else/lfpolygoncore.png" },
            { name: "MF Polygon Core", count: 28, icon: "/images/else/mfpolygoncore.png" },
            { name: "HF Polygon Core", count: 40, icon: "/images/else/hfpolygoncore.png" },
            { name: "FF Polygon Core", count: 57, icon: "/images/else/ffpolygoncore.png" },
            { name: "Lento Helix", count: 25, icon: "/images/else/lentohelix.png" },
            { name: "Adagio Helix", count: 28, icon: "/images/else/adagiohelix.png" },
            { name: "Andante Helix", count: 55, icon: "/images/else/andantehelix.png" },
            { name: "Presto Helix", count: 67, icon: "/images/else/prestohelix.png" },
            { name: "When Irises Bloom", count: 26, icon: "/images/else/whenirisesbloom.png" }
        ],
        ascensionRanks: [
            {
                rank: 1,
                levelRange: "Lv. 20-40",
                materials: [
                    { name: "LF Polygon Core", count: 4, icon: "/images/else/lfpolygoncore.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "MF Polygon Core", count: 4, icon: "/images/else/mfpolygoncore.png" },
                    { name: "Cleansing Conch", count: 3, icon: "/images/else/cleansingconch.png" },
                    { name: "Seaside Cendrelis", count: 4, icon: "/images/else/seasidecendrelis.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Polygon Core", count: 8, icon: "/images/else/mfpolygoncore.png" },
                    { name: "Cleansing Conch", count: 6, icon: "/images/else/cleansingconch.png" },
                    { name: "Seaside Cendrelis", count: 8, icon: "/images/else/seasidecendrelis.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Polygon Core", count: 4, icon: "/images/else/hfpolygoncore.png" },
                    { name: "Cleansing Conch", count: 9, icon: "/images/else/cleansingconch.png" },
                    { name: "Seaside Cendrelis", count: 12, icon: "/images/else/seasidecendrelis.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Polygon Core", count: 8, icon: "/images/else/hfpolygoncore.png" },
                    { name: "Cleansing Conch", count: 12, icon: "/images/else/cleansingconch.png" },
                    { name: "Seaside Cendrelis", count: 16, icon: "/images/else/seasidecendrelis.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Polygon Core", count: 4, icon: "/images/else/ffpolygoncore.png" },
                    { name: "Cleansing Conch", count: 16, icon: "/images/else/cleansingconch.png" },
                    { name: "Seaside Cendrelis", count: 20, icon: "/images/else/seasidecendrelis.png" }
                ]
            }
        ],
        weapon: {
            name: "Whispers of Sirens",
            icon: "/images/weapons/whispersofsirens.png",
            total: [
                { name: "MF Polygon Core", count: 20, icon: "/images/else/mfpolygoncore.png" },
                { name: "HF Polygon Core", count: 20, icon: "/images/else/hfpolygoncore.png" },
                { name: "FF Polygon Core", count: 12, icon: "/images/else/ffpolygoncore.png" },
                { name: "Lento Helix", count: 26, icon: "/images/else/lentohelix.png" },
                { name: "Adagio Helix", count: 26, icon: "/images/else/adagiohelix.png" },
                { name: "Presto Helix", count: 16, icon: "/images/else/prestohelix.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Polygon Core", count: 6, icon: "/images/else/lfpolygoncore.png" },
                        { name: "Lento Helix", count: 6, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Polygon Core", count: 6, icon: "/images/else/mfpolygoncore.png" },
                        { name: "Lento Helix", count: 6, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Polygon Core", count: 10, icon: "/images/else/mfpolygoncore.png" },
                        { name: "Lento Helix", count: 10, icon: "/images/else/lentohelix.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Polygon Core", count: 6, icon: "/images/else/hfpolygoncore.png" },
                        { name: "Adagio Helix", count: 6, icon: "/images/else/adagiohelix.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Polygon Core", count: 10, icon: "/images/else/hfpolygoncore.png" },
                        { name: "Adagio Helix", count: 10, icon: "/images/else/adagiohelix.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Polygon Core", count: 6, icon: "/images/else/ffpolygoncore.png" },
                        { name: "Presto Helix", count: 6, icon: "/images/else/prestohelix.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Cantarella is a **Havoc Rectifier Sub-DPS** and **Hybrid** support. She is kind of versatile, offering damage, coordinated attacks, healing, and buffs.
        
        She can fit into many teams that need a mix of everything. Her Outro specifically buffs **Havoc DMG** and **Resonance Skill DMG**, making her a strong partner for characters like Havoc Rover or potentially Danjin.`,
        playstyle: "Cycles through Trance stacks to enter Mirage, applies Hazy Dream with Skill, and unleashes coordinated attacks with Liberation.\n\n**Rotation**: Intro -> Skill -> Liberation -> Heavy Attack (Enter Mirage) -> Enhanced Skill -> Enhanced Basics x3 -> Enhanced Skill (Perception Drain) -> Outro.",
        pros: [
            "**Mixture**: Heals, buffs, and deals damage.",
            "**Coordinated Attacks**: Great for off-field damage and stack generation.",
            "**Havoc Synergy**: Strong Outro buffs for Havoc main DPS.",
            "**Exploration Utility**: Swims faster and consumes less stamina in water."
        ],
        cons: [
            "**Energy Hungry**: High burst cost (125) requires careful ER management.",
            "**Jack of All Trades**: Excelled by specialized buffers/healers in their specific niches.",
            "**Complex Rotation**: Requires managing Trance, Shiver, and Mirage states properly.",
            "**Niche Teams**: Currently lacks a 'perfect' meta partner compared to other sub-DPS."
        ]
    },
    skills: [
        {
            name: "Basic: Illusion Collapse",
            type: "Basic",
            description: "3-hit combo. P3 grants +1 Trance. **Delusive Dive** (Heavy at full Trance): Enter **Mirage** (8s). In Mirage: **Phantom Sting** (3-hit, +1 Shiver/hit, heals team, P3 triggers 3 Coord. Attacks). **Abysmal Vortex** (Plunge). **Shadowy Sweep** (Dodge Counter).",
            attributes: [
                { name: "Basic P3", value: "36.50% * 2" },
                { name: "Delusive Dive", value: "26.68% * 2" },
                { name: "Phantom P3", value: "32.50% * 4" },
                { name: "Dodge Counter", value: "26.66% * 4" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Dance with Shadows",
            type: "Skill",
            description: "**Graceful Step** (+1 Trance, 6s CD). In Mirage: **Flickering Reverie** (Echo Skill, applies **Hazy Dream** slow 6.5s → **Jolt** 100% on Cantarella hit). At 3 Shiver → **Perception Drain** (massive nuke + team heal).",
            attributes: [
                { name: "Graceful Step", value: "37.02% * 2" },
                { name: "Flickering Reverie", value: "98.70%" },
                { name: "Jolt", value: "100.00%" },
                { name: "Perception Drain", value: "336.00% * 2" }
            ],
            priority: 3
        },
        {
            name: "Forte: Between Illusion and Reality",
            type: "Forte",
            description: "**Trance** (max 5): Gain from Intro (+1), Basic P3 (+1), Skill (+1), Ult (+3). At full Trance → Delusive Dive enters Mirage. **Shiver** (max 3): Gain from Phantom Sting/Vortex/Sweep hits. At 3 → Perception Drain. **Abyssal Rebirth** (25s after Intro): +6 Concerto per Echo Skill (up to 6x). **Inherent**: +20% Healing Bonus. +6% Havoc per Echo Skill (stacks 2x).",
            attributes: [
                { name: "Mirage Duration", value: "8s" },
                { name: "Perception Heal", value: "375 + 90% ATK" },
                { name: "Trance Heal", value: "90 + 21.60%" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Beneath the Sea",
            type: "Ultimate",
            description: "**Flowing Suffocation**: Big Havoc hit (Basic ATK DMG, Echo Skill). +3 Trance. Grants team **Diffusion** (30s): Summons **Dreamweavers** (Coord. Attacks) when dealing DMG, 1/sec up to 21 total.",
            attributes: [
                { name: "Skill DMG", value: "189.13%" },
                { name: "Dreamweaver", value: "7.31% * 21" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 4
        },
        {
            name: "Intro: Cruise",
            type: "Intro",
            description: "**Ripple**: +1 Trance, chains to Basic P3. In Mirage: **Tidal Surge** (3 Coord. Attacks). Activates **Abyssal Rebirth**.",
            attributes: [
                { name: "Ripple DMG", value: "21.25% * 4" },
                { name: "Tidal Surge", value: "8.50% * 3 + 59.50%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Gentle Tentacles",
            type: "Outro",
            description: "Next Resonator: **Havoc DMG +20%**, **Resonance Skill DMG +25%** (14s, ends on swap).",
            attributes: [
                { name: "Havoc Amp", value: "+20%" },
                { name: "Skill Amp", value: "+25%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Skill restores 1 Trance. Skill and Forte DMG multipliers increased by **50%**. Interruption immunity during Perception Drain." },
        { node: "S2", name: "Sequence Node 2", description: "Liberation applies Hazy Dream. 'Jolt' DMG multiplier increased by **245%**." },
        { node: "S3", name: "Sequence Node 3", description: "Liberation DMG increased by **370%**. Casting Liberation enters Mirage automatically." },
        { node: "S4", name: "Sequence Node 4", description: "In Mirage, **Healing Bonus increased by 25%**." },
        { node: "S5", name: "Sequence Node 5", description: "Increases max Dreamweavers from Liberation by 5." },
        { node: "S6", name: "Sequence Node 6", description: "Enhanced Basic ATK multiplier +80%. Liberation grants **30% DEF Ignore** for 10s." }
    ],
    rotation: [
        "1. **Intro**: Enter with Cantarella (Gains 1 Trance).",
        "2. **Skill**: Cast 'Graceful Step' (Gains 1 Trance).",
        "3. **Liberation**: Cast to gain max Trance and start Coordinated Attacks.",
        "4. **Heavy Attack**: Consumes Trance to enter **Mirage** state.",
        "5. **Enhanced Skill**: Cast 'Flickering Reverie' (Hazy Dream).",
        "6. **Combo**: 3x Enhanced Basic Attacks to build Shiver stacks.",
        "7. **Forte Skill**: Cast **Perception Drain** (Consumes Shiver) for Nuke/Heal.",
        "8. **Outro**: Switch to Main DPS."
    ],
    builds: {
        weapons: [
            {
                name: "Whispers of Sirens",
                rank: "Signature",
                rarity: 5,
                description: "Best in Slot. Tailor-made for her Echo Skill heavy kit. Huge ATK and CRIT DMG.",
                image: "/images/weapons/whispersofsirens.png"
            },
            {
                name: "Rime-Draped Sprouts",
                rank: "5-Star Alt",
                rarity: 5,
                description: "Zhezhi's weapon. Great for Basic ATK bonus and stack generation.",
                image: "/images/weapons/rimedrapedsprouts.png"
            },
            {
                name: "Stringmaster",
                rank: "5-Star Alt",
                rarity: 5,
                description: "Yinlin's weapon. solid Off-field ATK buff and Crit.",
                image: "/images/weapons/stringmaster.png"
            },
            {
                name: "Cosmic Ripples",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Good Energy Regen and Basic ATK boosts.",
                image: "/images/weapons/cosmicripples.png"
            },
            {
                name: "Augment",
                rank: "4-Star Best",
                rarity: 4,
                description: "BP Weapon. Crit Rate main stat is very valuable.",
                image: "/images/weapons/augment.png"
            },
            {
                name: "Rectifier #25",
                rank: "F2P Option",
                rarity: 4,
                description: "Energy Regen help, but lower damage ceiling.",
                image: "/images/weapons/rectifier25.png"
            }
        ],
        echoes: [
            {
                set: "Havoc Eclipse (5pc)",
                mainEcho: "Lorelei",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Havoc DMG", "Havoc DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Energy Regen", "ATK%"]
                },
                description: "Standard set for Sub-DPS damage. Increases her personal DMG output significantly.",
                recommendation_reason: "Best for personal damage contribution.",
                echo_breakdown: {
                    cost4: [{ name: "Lorelei", image: "/images/echoes/phantomlorelei.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Tambourinist", image: "/images/echoes/tambourinist.png", mainStats: ["Havoc DMG"] },
                        { name: "Roseshroom", image: "/images/echoes/roseshroom.png", mainStats: ["Havoc DMG"] }
                    ],
                    cost1: [
                        { name: "Hoartoise", image: "/images/echoes/hoartoise.png", mainStats: ["ATK%"] },
                        { name: "Tambourinist", image: "/images/echoes/tambourinist.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Havoc DMG", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG", "ATK%"]
                },
                description: "Support-focused set. Maximizes buffs for the next character at the cost of personal damage.",
                recommendation_reason: "Better for hypercarry buffering.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["Havoc DMG"] },
                        { name: "Chirpuff", image: "/images/echoes/chirpuff.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Zig Zag", image: "/images/echoes/zigzag.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (to 125%+) > Crit Rate/DMG > Havoc DMG > ATK%"
    },
    teams: [
        {
            name: "Mono Havoc Skill",
            description: "Phrolova and Roccia synergy team.",
            members: [
                { name: "Phrolova", role: "Main DPS" },
                { name: "Cantarella", role: "Sub DPS" },
                { name: "Roccia", role: "Sub DPS" }
            ]
        },
        {
            name: "Camellya Havoc",
            description: "Supports Camellya with Havoc buffs.",
            members: [
                { name: "Camellya", role: "Main DPS" },
                { name: "Cantarella", role: "Sub DPS" },
                { name: "Roccia", role: "Sub DPS" }
            ]
        }
    ]
};
