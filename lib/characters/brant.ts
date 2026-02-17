import { Character } from "../characterTypes";

export const brant: Character = {
    id: "brant",
    name: "Brant",
    rarity: 5,
    element: "Fusion",
    weaponType: "Sword",
    role: "Main DPS",
    tags: ["Hybrid", "Energy Regen Scaling", "Sustain", "Fusion DMG"],
    profileType: "Versatile",
    potential: "S",
    tier: {
        overall: "R1.5",
        tower: "R1.5",
        wastes: "R2"
    },
    imagePortrait: "/images/characters/BrantSmall.png",
    imageIcon: "/images/characters/BrantSmall.png",
    imageCard: "/images/characters/BrantLarge.png",
    stats: {
        hp: 11675,
        atk: 388,
        def: 1148
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT DMG", value: "16%", stat: "critDmg", amount: 16 },
        { name: "Energy Regen", value: "12%", stat: "energyRegen", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Howler Core", count: 4, icon: "/images/else/lfhowlercore.png" },
            { name: "Pecok Flower", count: 60, icon: "/images/else/pecokflower.png" },
            { name: "MF Howler Core", count: 12, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 12, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
            { name: "Rage Tacet Core", count: 46, icon: "/images/else/ragetacetcore.png" }
        ],
        skills: [
            { name: "LF Howler Core", count: 25, icon: "/images/else/lfhowlercore.png" },
            { name: "MF Howler Core", count: 28, icon: "/images/else/mfhowlercore.png" },
            { name: "HF Howler Core", count: 40, icon: "/images/else/hfhowlercore.png" },
            { name: "FF Howler Core", count: 57, icon: "/images/else/ffhowlercore.png" },
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
                    { name: "LF Howler Core", count: 4, icon: "/images/else/lfhowlercore.png" }
                ]
            },
            {
                rank: 2,
                levelRange: "Lv. 40-50",
                materials: [
                    { name: "MF Howler Core", count: 4, icon: "/images/else/mfhowlercore.png" },
                    { name: "Rage Tacet Core", count: 3, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pecok Flower", count: 4, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Howler Core", count: 8, icon: "/images/else/mfhowlercore.png" },
                    { name: "Rage Tacet Core", count: 6, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pecok Flower", count: 8, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Howler Core", count: 4, icon: "/images/else/hfhowlercore.png" },
                    { name: "Rage Tacet Core", count: 9, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pecok Flower", count: 12, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Howler Core", count: 8, icon: "/images/else/hfhowlercore.png" },
                    { name: "Rage Tacet Core", count: 12, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pecok Flower", count: 16, icon: "/images/else/pecokflower.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Howler Core", count: 4, icon: "/images/else/ffhowlercore.png" },
                    { name: "Rage Tacet Core", count: 16, icon: "/images/else/ragetacetcore.png" },
                    { name: "Pecok Flower", count: 20, icon: "/images/else/pecokflower.png" }
                ]
            }
        ],
        weapon: {
            name: "Unflickering Valor",
            icon: "/images/weapons/UnflickeringValor.png",
            total: [
                { name: "MF Howler Core", count: 20, icon: "/images/else/mfhowlercore.png" },
                { name: "HF Howler Core", count: 20, icon: "/images/else/hfhowlercore.png" },
                { name: "FF Howler Core", count: 12, icon: "/images/else/ffhowlercore.png" },
                { name: "Cadence Seed", count: 26, icon: "/images/else/cadenceseed.png" },
                { name: "Cadence Bud", count: 26, icon: "/images/else/cadencebud.png" },
                { name: "Cadence Leaf", count: 16, icon: "/images/else/cadenceleaf.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Howler Core", count: 6, icon: "/images/else/lfhowlercore.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Howler Core", count: 6, icon: "/images/else/mfhowlercore.png" },
                        { name: "Cadence Seed", count: 6, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Howler Core", count: 10, icon: "/images/else/mfhowlercore.png" },
                        { name: "Cadence Seed", count: 10, icon: "/images/else/cadenceseed.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Howler Core", count: 6, icon: "/images/else/hfhowlercore.png" },
                        { name: "Cadence Bud", count: 6, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Howler Core", count: 10, icon: "/images/else/hfhowlercore.png" },
                        { name: "Cadence Bud", count: 10, icon: "/images/else/cadencebud.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Howler Core", count: 6, icon: "/images/else/ffhowlercore.png" },
                        { name: "Cadence Leaf", count: 6, icon: "/images/else/cadenceleaf.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Brant is a unique **Fusion Sword Hybrid** who converts Energy Regen into Healing and Damage.
        
        His **Forte Circuit** allows him to consume Energy to deal massive Fusion DMG and heal the entire team. His Outro Skill provides a **Fusion DMG Amplification**, making him an excellent partner for Encore or Chixia.`,
        playstyle: "Basic Attacks (Build Energy) -> Skill (Deal DMG + Heal) -> Liberation (Big Burst) -> Outro.",
        pros: [
            "**Sustain + DPS**: Heals team while dealing respectable damage.",
            "**Energy Scaling**: Builds naturally into high Energy Regen.",
            "**Fusion Amp**: Great buffer for Fusion teams."
        ],
        cons: [
            "**Lower Ceiling**: Doesn't excel at pure DPS or pure Healing compared to specialists.",
            "**Energy Hungry**: Needs very high ER to function smoothly."
        ]
    },
    skills: [
        {
            name: "Basic: Captain's Rhapsody",
            type: "Basic",
            description: "4-hit combo (ground or mid-air). Mid-air has complex grapple + flip mechanics. Builds **Bravo**.",
            attributes: [
                { name: "Ground P1 DMG", value: "25.42%" },
                { name: "Ground P2 DMG", value: "25.50% + 25.50%" },
                { name: "Ground P3 DMG", value: "11.10% * 3 + 16.64% * 2" },
                { name: "Ground P4 DMG", value: "14.10% + 11.28% * 5" },
                { name: "Mid-air P4 DMG", value: "51.07% + 12.77% * 3 + 38.31%" },
                { name: "Dodge Counter", value: "19.13% * 3 + 28.69% * 2" }
            ],
            priority: 4
        },
        {
            name: "Resonance: Anchors Aweigh!",
            type: "Skill",
            description: "Launch into air and blast targets. While in air without full Bravo → Plunging Attack instead.",
            attributes: [
                { name: "Skill DMG", value: "100.77% + 67.18%" },
                { name: "Plunging DMG", value: "52.70%" },
                { name: "Cooldown", value: "4s" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Forte: Ocean Odyssey",
            type: "Forte",
            description: "**Bravo** (max 100): Fill via attacks. Full → **Returned from Ashes** (massive DMG + shield). Heals at 25/50/75/100 Bravo. +Flat ATK from ER% over 150%. +12 ATK per 1% ER (non-Aflame) or +20 ATK (Aflame). +20% Heal (Inherent). +15% Fusion DMG in Mid-air (Inherent).",
            attributes: [
                { name: "Returned from Ashes", value: "23.75% * 2 + 47.50% + 95.00% * 2 + 665.00%" },
                { name: "Shield", value: "2500 + 9 per 1% ER" },
                { name: "Shield Duration", value: "30s" },
                { name: "Heal per 25 Bravo", value: "312 + 1.09 per 1% ER" }
            ],
            priority: 4
        },
        {
            name: "Liberation: To the Horizon",
            type: "Ultimate",
            description: "Fusion DMG burst + team heal + enter **Aflame** (12s). Aflame: +100% Bravo gain, enhanced Forte ATK scaling. High energy cost.",
            attributes: [
                { name: "Skill DMG", value: "42.78% * 4 + 171.12%" },
                { name: "Healing", value: "500 + 1.75 per 1% ER" },
                { name: "Aflame Duration", value: "12s" },
                { name: "Cooldown", value: "24s" },
                { name: "Energy Cost", value: "175" }
            ],
            priority: 3
        },
        {
            name: "Intro: Applaud for Me!",
            type: "Intro",
            description: "Attack target dealing Fusion DMG. Gain **Interlude Applause** (start Mid-air at Stage 2).",
            attributes: [
                { name: "Skill DMG", value: "102.00% + 25.50%" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: The Course is Set!",
            type: "Outro",
            description: "Grant next character **Fusion DMG Amp** and **Skill DMG Amp**.",
            attributes: [
                { name: "Fusion Amp", value: "+20%" },
                { name: "Skill DMG Amp", value: "+25%" },
                { name: "Duration", value: "14s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence 1", description: "Skill heals more effective below 50% HP." },
        { node: "S2", name: "Sequence 2", description: "Phoenix State lasts 5s longer." },
        { node: "S3", name: "Sequence 3", description: "Liberation DMG +40%." },
        { node: "S4", name: "Sequence 4", description: "Intro grants team 10% ATK." },
        { node: "S5", name: "Sequence 5", description: "Outro Fusion Amp increased to 30%." },
        { node: "S6", name: "Sequence 6", description: "Phoenix State grants 100% Crit Rate to Basic Attacks." }
    ],
    rotation: [
        "1. **Intro**: Enter field.",
        "2. **Basic**: Build Energy.",
        "3. **Skill**: Heal/Damage.",
        "4. **Forte**: Enter Phoenix State.",
        "5. **Liberation**: Nuke.",
        "6. **Outro**: Swap."
    ],
    builds: {
        weapons: [
            {
                name: "Unflickering Valor",
                rank: "Signature",
                rarity: 5,
                description: "Perfect synergy. Massive Energy Regen and Basic ATK buff.",
                image: "/images/weapons/unflickeringvalor.png"
            },
            {
                name: "Bloodpact's Pledge",
                rank: "Alterative 5-Star",
                rarity: 5,
                description: "Strong ATK and Energy Regen stat stick.",
                image: "/images/weapons/bloodpactspledge.png"
            },
            {
                name: "Emerald of Genesis",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Good stat stick with Crit Rate and Energy Regen.",
                image: "/images/weapons/emeraldofgenesis.png"
            }
        ],
        echoes: [
            {
                set: "Tidebreaking Courage (5pc)",
                mainEcho: "Dragon of Dirge",
                stats: {
                    cost4: ["Crit. DMG", "Crit. Rate"],
                    cost3: ["Energy Regen", "Energy Regen"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen (to 250%)", "Crit. Rate", "Crit. DMG", "Basic Attack DMG"]
                },
                description: "Best in Slot. High investment required (250% ER).",
                recommendation_reason: "Provides massive ATK and DMG Bonus when ER requirements are met.",
                echo_breakdown: {
                    cost4: [{ name: "Dragon of Dirge", image: "/images/echoes/dragonofdirge.png", mainStats: ["Crit. DMG", "Crit. Rate"] }],
                    cost3: [
                        { name: "Lumiscale Construct", image: "/images/echoes/lumiscaleconstruct.png", mainStats: ["Energy Regen"] },
                        { name: "Lightcrusher", image: "/images/echoes/lightcrusher.png", mainStats: ["Energy Regen"] }
                    ],
                    cost1: [
                        { name: "Glacio Predator", image: "/images/echoes/glaciopredator.png", mainStats: ["ATK%"] },
                        { name: "Dwarf Cassowary", image: "/images/echoes/dwarfcassowary.png", mainStats: ["ATK%"] }
                    ]
                }
            },
            {
                set: "Molten Rift (5pc)",
                mainEcho: "Nightmare: Inferno Rider",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Fusion DMG", "Fusion DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "Crit. DMG"]
                },
                description: "Alternative DPS Set.",
                recommendation_reason: "Good if you cannot meet the 250% ER requirement for Tidebreaking Courage.",
                echo_breakdown: {
                    cost4: [{ name: "Nightmare: Inferno Rider", image: "/images/echoes/nightmareinfernorider.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Havoc Dreadmane", image: "/images/echoes/havocdreadmane.png", mainStats: ["Fusion DMG"] },
                        { name: "Violet-Feathered Heron", image: "/images/echoes/violetfeatheredheron.png", mainStats: ["Fusion DMG"] }
                    ],
                    cost1: [
                        { name: "Fusion Warrior", image: "/images/echoes/fusionwarrior.png", mainStats: ["ATK%"] },
                        { name: "Traffic Illuminator", image: "/images/echoes/trafficilluminator.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (250%+) > Crit Rate/DMG > Basic Attack DMG"
    },
    teams: [
        {
            name: "Fusion Team",
            description: "With Encore.",
            members: [
                { name: "Encore", role: "Main DPS" },
                { name: "Brant", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        }
    ]
};

export const brant_hybrid: Character = {
    ...brant,
    id: "brant-hybrid",
    role: "Hybrid",
    tier: {
        overall: "R1",
        tower: "R1",
        wastes: "R1"
    }
};
