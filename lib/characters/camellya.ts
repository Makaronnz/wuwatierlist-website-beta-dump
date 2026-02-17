import { Character } from "../characterTypes";

export const camellya: Character = {
    id: "camellya",
    name: "Camellya",
    rarity: 5,
    element: "Havoc",
    weaponType: "Sword",
    role: "Main DPS",
    tags: ["Havoc DMG", "Basic Attack DMG", "State Switch", "Concerto Consumer"],
    profileType: "Specialist",
    potential: "A",
    tier: {
        overall: "R1.5",
        tower: "R1.5",
        wastes: "R1.5"
    },
    imagePortrait: "/images/characters/CamellyaSmall.png",
    imageIcon: "/images/characters/CamellyaSmall.png",
    imageCard: "/images/characters/CamellyaLarge.png",
    stats: {
        hp: 10325,
        atk: 450,
        def: 1161
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT DMG", value: "16%", stat: "critDmg", amount: 16 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
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
            { name: "Inert Metallic Drip", count: 25, icon: "/images/else/inertmetallicdrip.png" },
            { name: "Reactive Metallic Drip", count: 28, icon: "/images/else/reactivemetallicdrip.png" },
            { name: "Polarized Metallic Drip", count: 55, icon: "/images/else/polarizedmetallicdrip.png" },
            { name: "Heterized Metallic Drip", count: 67, icon: "/images/else/heterizedmetallicdrip.png" },
            { name: "Dreamless Feather", count: 26, icon: "/images/else/dreamlessfeather.png" }
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
            name: "Red Spring",
            icon: "/images/weapons/redspring.png",
            total: [
                { name: "MF Whisperin Core", count: 20, icon: "/images/else/mfwhisperincore.png" },
                { name: "HF Whisperin Core", count: 20, icon: "/images/else/hfwhisperincore.png" },
                { name: "FF Whisperin Core", count: 12, icon: "/images/else/ffwhisperincore.png" },
                { name: "Inert Metallic Drip", count: 26, icon: "/images/else/inertmetallicdrip.png" },
                { name: "Reactive Metallic Drip", count: 26, icon: "/images/else/reactivemetallicdrip.png" },
                { name: "Polarized Metallic Drip", count: 16, icon: "/images/else/polarizedmetallicdrip.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Whisperin Core", count: 6, icon: "/images/else/lfwhisperincore.png" },
                        { name: "Inert Metallic Drip", count: 6, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Whisperin Core", count: 6, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Inert Metallic Drip", count: 6, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Whisperin Core", count: 10, icon: "/images/else/mfwhisperincore.png" },
                        { name: "Inert Metallic Drip", count: 10, icon: "/images/else/inertmetallicdrip.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Whisperin Core", count: 6, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Reactive Metallic Drip", count: 6, icon: "/images/else/reactivemetallicdrip.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Whisperin Core", count: 10, icon: "/images/else/hfwhisperincore.png" },
                        { name: "Reactive Metallic Drip", count: 10, icon: "/images/else/reactivemetallicdrip.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Whisperin Core", count: 6, icon: "/images/else/ffwhisperincore.png" },
                        { name: "Polarized Metallic Drip", count: 6, icon: "/images/else/polarizedmetallicdrip.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Camellya is a **Havoc Main DPS** sword user who thrives on switching between two unique airborne states: **Blossom Mode** (standard enhanced) and **Budding Mode** (super enhanced).
        
        She is unique in that she **consumes Concerto Energy** mid-rotation to activate her most powerful attacks, demanding a playstyle focused on rapid high-yield Concerto generation. She excels at sustained Basic Attack damage with huge AoE coverage.`,
        playstyle: "Camellya wants to start in Blossom Mode (Skill), generate 100 Concerto, then unleash her Forte 'Ephemeral' to enter Budding Mode for massive burst.\n\n**Rotation**: Intro -> Skill (Blossom) -> Basic Combo -> Forte (Ephemeral) -> Budding Mode Combo -> Outro.",
        pros: [
            "**Huge AoE**: Her attacks have wide hitboxes, making her excellent for groups.",
            "**Sustained DPS**: Strong even without Liberation due to high Basic Attack scaling.",
            "**High Mobility**: Constant dashing and airborne movement makes her hard to pin down.",
            "**Self-Buffing**: Generates her own massive buffs in Budding Mode."
        ],
        cons: [
            "**Complex Resource Management**: Needs to balance Concerto, Stamina, and Forte gauges.",
            "**Interruptible**: Vulnerable to interruption in Blossom Mode without C1 or shields.",
            "**Backloaded Damage**: Needs setup time to reach Budding Mode peak output.",
            "**Concerto Hungry**: Consumes Concerto, preventing quick-swaps to supports.",
            "**Boss Movement**: Newer bosses move around much more than older ones, and usually causing Ephemeral (Resonance Skill) to miss and lose significant damage."
        ]
    },
    skills: [
        {
            name: "Basic: Burgeoning",
            type: "Basic",
            description: "5-hit ground combo. In **Blossom/Budding Mode** → **Vining Waltz** (4-hit aerial dashes). After Waltz Stage 3, hold for **Blazing Waltz** (spin attack).",
            attributes: [
                { name: "Basic P1 DMG", value: "31.45%" },
                { name: "Basic P4 DMG", value: "12.42% * 20" },
                { name: "Basic P5 DMG", value: "24.23% * 4" },
                { name: "Vining Waltz P1 DMG", value: "48.45%" },
                { name: "Vining Waltz P3 DMG", value: "11.04% * 6" },
                { name: "Blazing Waltz DMG", value: "11.04% * 19" },
                { name: "Vining Waltz P4 DMG", value: "34.00% * 3" }
            ],
            priority: 1
        },
        {
            name: "Resonance: Valse of Bloom and Blight",
            type: "Skill",
            description: "**Crimson Blossom**: Deal damage, enter **Blossom Mode** (airborne). Recast → **Floral Ravage** (exit to ground). 4s CD shared.",
            attributes: [
                { name: "Crimson Blossom DMG", value: "57.15% * 2" },
                { name: "Floral Ravage DMG", value: "26.46% * 5" },
                { name: "Vining Ronde DMG", value: "26.64% * 3" },
                { name: "Atonement DMG", value: "57.00% * 2" },
                { name: "Cooldown", value: "4s" },
                { name: "Concerto Regen", value: "7 + 7" }
            ],
            priority: 4
        },
        {
            name: "Forte Circuit: Vegetative Universe",
            type: "Forte",
            description: "**Crimson Pistils** (max 100): Consumed by attacks, generates Concerto (+4 per 10) + **Crimson Buds** (max 10). At 100 Concerto → **Ephemeral** (consumes 70, massive nuke, enters **Budding Mode**).",
            attributes: [
                { name: "Ephemeral DMG", value: "635.00%" },
                { name: "Sweet Dream Buff", value: "+50% DMG Multiplier" },
                { name: "Per Bud Bonus", value: "+5% (max +50%)" },
                { name: "Ephemeral Cooldown", value: "25s" },
                { name: "Budding Duration", value: "15s" },
                { name: "Max Pistils", value: "100" }
            ],
            priority: 3
        },
        {
            name: "Liberation: Fervor Efflorescent",
            type: "Ultimate",
            description: "Large Havoc nuke. Can be cast in mid-air. Use for Concerto generation before Ephemeral.",
            attributes: [
                { name: "Skill DMG", value: "605.00%" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "125" },
                { name: "Concerto Regen", value: "20" }
            ],
            priority: 2
        },
        {
            name: "Intro: Everblooming",
            type: "Intro",
            description: "Attack dealing Havoc DMG. Recovers **100 Crimson Pistils** immediately, essential for starting rotation.",
            attributes: [
                { name: "Skill DMG", value: "100.00%" },
                { name: "Pistils", value: "+100" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Twining",
            type: "Outro",
            description: "Deal Havoc DMG. If **Ephemeral** was used, deals massive additional damage.",
            attributes: [
                { name: "Base DMG", value: "329.24% ATK" },
                { name: "Post-Ephemeral DMG", value: "+459.02% ATK" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Intro Skill increases **Crit. DMG by 28%** for 18s. Grants Interruption Immunity during Ephemeral." },
        { node: "S2", name: "Sequence Node 2", description: "Ephemeral (Forte Skill) DMG Multiplier increased by **120%**." },
        { node: "S3", name: "Sequence Node 3", description: "Liberation DMG increased by 50%. While in Budding Mode, **ATK increased by 58%**." },
        { node: "S4", name: "Sequence Node 4", description: "Casting Intro grants whole team **25% Basic Attack DMG Bonus** for 30s." },
        { node: "S5", name: "Sequence Node 5", description: "Intro Skill multiplier +303%. Outro Skill multiplier +68%." },
        { node: "S6", name: "Sequence Node 6", description: "Sweet Dream DMG multiplier +150%. Unlocks 'Perennial' skill: an extra Ephemeral-like nuke that resets Budding Mode." }
    ],
    rotation: [
        "1. **Intro**: Switch to Camellya (Gains 100 Pistils).",
        "2. **Skill**: Cast 'Crimson Blossom' to enter Blossom Mode.",
        "3. **Liberation**: Use immediately if available for Concerto generation.",
        "4. **Combo**: Vining Waltz (Basic) combo + Blazing Waltz (Hold) to build Concerto to 100.",
        "5. **Forte**: Cast **Ephemeral** (consumes 70 Concerto) to enter **Budding Mode**.",
        "6. **Burst**: Use Budding Mode enhanced basics until buds deplete.",
        "7. **Outro**: Switch out."
    ],
    builds: {
        weapons: [
            {
                name: "Red Spring",
                rank: "Signature",
                rarity: 5,
                description: "Best in Slot. Designed exactly for her mechanism of consuming Concerto mid-fight. Huge Basic ATK Buffs.",
                image: "/images/weapons/redspring.png"
            },
            {
                name: "Blazing Brilliance",
                rank: "5-Star Alt",
                rarity: 5,
                description: "Good Crit DMG stat stick.",
                image: "/images/weapons/blazingbrilliance.png"
            },
            {
                name: "Emerald of Genesis",
                rank: "5-Star Alt",
                rarity: 5,
                description: "Standard 5-star sword. High crit rate and ATK% stacking. Solid generalist option.",
                image: "/images/weapons/emeraldofgenesis.png"
            },
            {
                name: "Somnoire Anchor",
                rank: "F2P Best",
                rarity: 4,
                description: "Excellent F2P option. Stacks ATK% and Crit Rate over time, fitting her long field time.",
                image: "/images/weapons/somnoireanchor.png"
            }
        ],
        echoes: [
            {
                set: "Havoc Eclipse (5pc)",
                mainEcho: "Nightmare: Crownless",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Havoc DMG", "Havoc DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Basic Attack DMG", "ATK%"]
                },
                description: "Her dedicated set. She deals Havoc and Basic Attack DMG, making this set fully optimal.",
                recommendation_reason: "Standard Havoc DPS setup.",
                echo_breakdown: {
                    cost4: [{ name: "Nightmare: Crownless", image: "/images/echoes/phantomnightmarecrownless.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Tambourinist", image: "/images/echoes/tambourinist.png", mainStats: ["Havoc DMG"] },
                        { name: "Roseshroom", image: "/images/echoes/roseshroom.png", mainStats: ["Havoc DMG"] }
                    ],
                    cost1: [
                        { name: "Hoartoise", image: "/images/echoes/hoartoise.png", mainStats: ["ATK%"] },
                        { name: "Tambourinist", image: "/images/echoes/tambourinist.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Basic Attack DMG > ATK% > Energy Regen"
    },
    teams: [
        {
            name: "Premium Havoc",
            description: "Roccia and Shorekeeper maximize her Havoc and Basic Attack potential.",
            members: [
                { name: "Camellya", role: "Main DPS" },
                { name: "Roccia", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "F2P Team",
            description: "Sanhua buffs Basic Attacks heavily, which is Camellya's main DMG source.",
            members: [
                { name: "Camellya", role: "Main DPS" },
                { name: "Sanhua", role: "Sub DPS" },
                { name: "Baizhi", role: "Support" }
            ]
        }
    ]
};
