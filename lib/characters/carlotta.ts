import { Character } from "../characterTypes";

export const carlotta: Character = {
    id: "carlotta",
    name: "Carlotta",
    rarity: 5,
    element: "Glacio",
    weaponType: "Pistols",
    role: "Main DPS",
    tags: ["Glacio DMG", "Resonance Skill DMG", "Ranged", "Burst DPS"],
    profileType: "Versatile",
    potential: "A",
    tier: {
        overall: "R0.5",
        tower: "R0.5",
        wastes: "R2"
    },
    imagePortrait: "/images/characters/CarlottaSmall.png",
    imageIcon: "/images/characters/CarlottaSmall.png",
    imageCard: "/images/characters/CarlottaLarge.png",
    stats: {
        hp: 12450,
        atk: 463,
        def: 1198
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT Rate", value: "8%", stat: "critRate", amount: 8 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Polygon Core", count: 4, icon: "/images/else/lfpolygoncore.png" },
            { name: "Sword Acorus", count: 60, icon: "/images/else/swordacorus.png" },
            { name: "MF Polygon Core", count: 12, icon: "/images/else/mfpolygoncore.png" },
            { name: "HF Polygon Core", count: 12, icon: "/images/else/hfpolygoncore.png" },
            { name: "FF Polygon Core", count: 4, icon: "/images/else/ffpolygoncore.png" },
            { name: "Platinum Core", count: 46, icon: "/images/else/platinumcore.png" }
        ],
        skills: [
            { name: "LF Polygon Core", count: 25, icon: "/images/else/lfpolygoncore.png" },
            { name: "MF Polygon Core", count: 28, icon: "/images/else/mfpolygoncore.png" },
            { name: "HF Polygon Core", count: 40, icon: "/images/else/hfpolygoncore.png" },
            { name: "FF Polygon Core", count: 57, icon: "/images/else/ffpolygoncore.png" },
            { name: "Impure Phlogiston", count: 25, icon: "/images/else/impurephlogiston.png" },
            { name: "Extracted Phlogiston", count: 28, icon: "/images/else/extractedphlogiston.png" },
            { name: "Refined Phlogiston", count: 55, icon: "/images/else/refinedphlogiston.png" },
            { name: "Flawless Phlogiston", count: 67, icon: "/images/else/flawlessphlogiston.png" },
            { name: "The Netherworld's Stare", count: 26, icon: "/images/else/thenetherworldsstare.png" }
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
                    { name: "Platinum Core", count: 3, icon: "/images/else/platinumcore.png" },
                    { name: "Sword Acorus", count: 4, icon: "/images/else/swordacorus.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Polygon Core", count: 8, icon: "/images/else/mfpolygoncore.png" },
                    { name: "Platinum Core", count: 6, icon: "/images/else/platinumcore.png" },
                    { name: "Sword Acorus", count: 8, icon: "/images/else/swordacorus.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Polygon Core", count: 4, icon: "/images/else/hfpolygoncore.png" },
                    { name: "Platinum Core", count: 9, icon: "/images/else/platinumcore.png" },
                    { name: "Sword Acorus", count: 12, icon: "/images/else/swordacorus.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Polygon Core", count: 8, icon: "/images/else/hfpolygoncore.png" },
                    { name: "Platinum Core", count: 12, icon: "/images/else/platinumcore.png" },
                    { name: "Sword Acorus", count: 16, icon: "/images/else/swordacorus.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Polygon Core", count: 4, icon: "/images/else/ffpolygoncore.png" },
                    { name: "Platinum Core", count: 16, icon: "/images/else/platinumcore.png" },
                    { name: "Sword Acorus", count: 20, icon: "/images/else/swordacorus.png" }
                ]
            }
        ],
        weapon: {
            name: "The Last Dance",
            icon: "/images/weapons/thelastdance.png",
            total: [
                { name: "MF Polygon Core", count: 20, icon: "/images/else/mfpolygoncore.png" },
                { name: "HF Polygon Core", count: 20, icon: "/images/else/hfpolygoncore.png" },
                { name: "FF Polygon Core", count: 12, icon: "/images/else/ffpolygoncore.png" },
                { name: "Impure Phlogiston", count: 26, icon: "/images/else/impurephlogiston.png" },
                { name: "Extracted Phlogiston", count: 26, icon: "/images/else/extractedphlogiston.png" },
                { name: "Refined Phlogiston", count: 16, icon: "/images/else/refinedphlogiston.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Polygon Core", count: 6, icon: "/images/else/lfpolygoncore.png" },
                        { name: "Impure Phlogiston", count: 6, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Polygon Core", count: 6, icon: "/images/else/mfpolygoncore.png" },
                        { name: "Impure Phlogiston", count: 6, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Polygon Core", count: 10, icon: "/images/else/mfpolygoncore.png" },
                        { name: "Impure Phlogiston", count: 10, icon: "/images/else/impurephlogiston.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Polygon Core", count: 6, icon: "/images/else/hfpolygoncore.png" },
                        { name: "Extracted Phlogiston", count: 6, icon: "/images/else/extractedphlogiston.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Polygon Core", count: 10, icon: "/images/else/hfpolygoncore.png" },
                        { name: "Extracted Phlogiston", count: 10, icon: "/images/else/extractedphlogiston.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Polygon Core", count: 6, icon: "/images/else/ffpolygoncore.png" },
                        { name: "Refined Phlogiston", count: 6, icon: "/images/else/refinedphlogiston.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Carlotta is a powerful **Glacio Pistol Main DPS** who specializes in dealing massive **Resonance Skill DMG** from range. She is unique as the first 5-star Pistol user and brings a distinctive "setup and burst" playstyle.
        
        Her kit revolves around accumulating **Substance** through her skills and **Moldable Crystals**, then unleashing a devastating volley of 6 empowered Resonance Liberation shots in her "Twilight Tango" state.`,
        playstyle: "Generate Moldable Crystals -> Convert to Substance -> Activate Liberation for 6 bursting shots.\n\n**Rotation**: Skill (Art of Violence) -> Skill (Chromatic Splendor) -> Heavy Attack (Imminent Oblivion) -> Liberation -> Death Knell x4 -> Fatal Finale -> Outro.",
        pros: [
            "**Incredible Burst**: Capable of outputting huge damage numbers in her burst window.",
            "**Ranged Gameplay**: First dedicated ranged DPS, allowing for safer positioning.",
            "**Unique Mechanics**: 6 Liberation casts in a row offer a satisfying burst phase.",
            "**High Ceiling**: Scales exceptionally well with Resonance Skill buffs."
        ],
        cons: [
            "**Setup Heavy**: Requires careful resource management of Moldable Crystals and Substance.",
            "**Long Cooldowns**: Punishing if rotation is messed up or interrupted.",
            "**Single Target Focus**: Primarily excels at deleting single targets, has some AoE but less than others.",
            "**Energy Hungry**: Needs 125 Energy for full rotation efficiency."
        ]
    },
    skills: [
        {
            name: "Basic: Silent Execution",
            type: "Basic",
            description: "2-hit combo. With **Moldable Crystals**, becomes **Necessary Measures** (3-hit, consumes 1 Crystal each for 10 Substance). Heavy → **Containment Tactics** at full Substance.",
            attributes: [
                { name: "Stage 1 DMG", value: "27.20%" },
                { name: "Stage 2 DMG", value: "19.89% * 2 + 26.52%" },
                { name: "Necessary P1 DMG", value: "33.15%" },
                { name: "Necessary P2 DMG", value: "30.22% + 36.94%" },
                { name: "Necessary P3 DMG", value: "70.38% + 11.73% * 4" },
                { name: "Containment DMG", value: "17.22% * 4 + 45.90%" },
                { name: "Dodge Counter DMG", value: "52.20% + 69.19%" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Art of Violence",
            type: "Skill",
            description: "Deal Glacio DMG + **Dispersion** (1.5s immobilize). Generates 3 Crystals. Recast → **Chromatic Splendor** (consumes all Crystals for Substance). CD shared.",
            attributes: [
                { name: "Art of Violence DMG", value: "72.49% * 2" },
                { name: "Chromatic Splendor DMG", value: "56.70% * 2 + 170.10%" },
                { name: "Dispersion Duration", value: "1.5s" },
                { name: "Cooldown", value: "14s" },
                { name: "Substance per Crystal", value: "10" },
                { name: "Concerto Regen", value: "5 + 5" }
            ],
            priority: 4
        },
        {
            name: "Forte Circuit: Lethal Repertoire",
            type: "Forte",
            description: "**Substance**: Max 120. At full → **Imminent Oblivion** (every 22s) + **Final Bow** (+80% to all Liberation DMG). Crystals: Max 6, generated by attacks/skills, consumed for Substance.",
            attributes: [
                { name: "Imminent Oblivion DMG", value: "33.62% * 5 + 252.11%" },
                { name: "Final Bow Buff", value: "+80% Liberation DMG" },
                { name: "Skill CD Reduction", value: "6s" },
                { name: "Tinted Crystal CD", value: "22s" },
                { name: "Max Substance", value: "120" },
                { name: "Max Crystals", value: "6" }
            ],
            priority: 3
        },
        {
            name: "Liberation: Era of New Wave",
            type: "Ultimate",
            description: "Enter **Twilight Tango** (10s). Cast 4x **Death Knell** → 1x **Fatal Finale**. All shots = Skill DMG. **Deconstruction**: -18% DEF for 4s.",
            attributes: [
                { name: "Era of New Wave DMG", value: "202.56%" },
                { name: "Death Knell DMG", value: "92.37% + 7.30% * 4" },
                { name: "Fatal Finale DMG", value: "324.09%" },
                { name: "Deconstruction", value: "-18% DEF" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "125" },
                { name: "Concerto Regen", value: "20 + 7*4 + 10" }
            ],
            priority: 4
        },
        {
            name: "Intro: Wintertime Aria",
            type: "Intro",
            description: "Attack target dealing Glacio DMG. Restores 30 Substance and 3 Moldable Crystals. Essential for rotation start.",
            attributes: [
                { name: "Skill DMG", value: "90.00% + 30.00% * 2" },
                { name: "Substance", value: "+30" },
                { name: "Crystals", value: "+3" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Closing Remark",
            type: "Outro",
            description: "Deal massive Glacio DMG equal to **794.2%** of ATK. S3 adds extra 1032.18% hit.",
            attributes: [
                { name: "Outro DMG", value: "794.2% ATK" },
                { name: "S3 Bonus DMG", value: "1032.18% ATK" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Deconstruction targets take hits with **+12.5% Crit Rate**. Chromatic Splendor restores extra Substance." },
        { node: "S2", name: "Sequence Node 2", description: "Fatal Finale (Ultimate finisher) DMG increased by **126%**." },
        { node: "S3", name: "Sequence Node 3", description: "Adds a massive extra hit to Outro Skill (1032% multiplier). Skill DMG multipliers increased by **93%**." },
        { node: "S4", name: "Sequence Node 4", description: "Heavy Attacks grant team-wide **25% Resonance Skill DMG Bonus**." },
        { node: "S5", name: "Sequence Node 5", description: "Imminent Oblivion (Forte Heavy) DMG increased by **47%**." },
        { node: "S6", name: "Sequence Node 6", description: "Death Knell (Ultimate shots) fire double shards and deal **+186% DMG**. Inflicts Scattering (Immobilize)." }
    ],
    rotation: [
        "1. **Intro**: Enter with Carlotta (Gains Substance/Crystals).",
        "2. **Skill**: Cast 'Art of Violence' -> 'Chromatic Splendor' to build Substance.",
        "3. **Forte**: Use 'Imminent Oblivion' (Heavy Attack) if Substance full (Reduces Skill CD).",
        "4. **Liberation**: Cast 'Era of New Wave' to enter Twilight Tango.",
        "5. **Burst**: Fire 4x 'Death Knell' shots -> 1x 'Fatal Finale'.",
        "6. **Skill**: Cast Skill again if available to generate energy.",
        "7. **Outro**: Switch out."
    ],
    builds: {
        weapons: [
            {
                name: "The Last Dance",
                rank: "Signature",
                rarity: 5,
                description: "Best in Slot. Massive 48% Resonance Skill DMG buff fits her kit perfectly.",
                image: "/images/weapons/thelastdance.png"
            },
            {
                name: "Phasic Homogenizer",
                rank: "Alternative 5-Star",
                rarity: 5,
                description: "Strongest alternative. Provides universal DMG bonus.",
                image: "/images/weapons/phasichomogenizer.png"
            },
            {
                name: "Woodland Aria",
                rank: "Stat Stick",
                rarity: 5,
                description: "Great Crit Rate stat stick, though passive is for Aero.",
                image: "/images/weapons/woodlandaria.png"
            },
            {
                name: "Static Mist",
                rank: "Standard 5-Star",
                rarity: 5,
                description: "Good stat stick for ATK and Energy Regen.",
                image: "/images/weapons/staticmist.png"
            },
            {
                name: "Novaburst",
                rank: "4-Star Best",
                rarity: 4,
                description: "Good ATK boost on dodge, functional for DPS.",
                image: "/images/weapons/novaburst.png"
            }
        ],
        echoes: [
            {
                set: "Frosty Resolve (5pc)",
                mainEcho: "Sentry Construct",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Glacio DMG", "Glacio DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Crit. Rate", "Crit. DMG", "Resonance Skill DMG", "ATK%"]
                },
                description: "Dedicated Glacio set. Boosts Resonance Skill DMG, which is 90% of her output.",
                recommendation_reason: "Tailor made for her.",
                echo_breakdown: {
                    cost4: [{ name: "Sentry Construct", image: "/images/echoes/sentryconstruct.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Passerby", image: "/images/echoes/mechabomination.png", mainStats: ["Glacio DMG"] },
                        { name: "Passerby", image: "/images/echoes/mechabomination.png", mainStats: ["Glacio DMG"] }
                    ],
                    cost1: [
                        { name: "Passerby", image: "/images/echoes/fusionprism.png", mainStats: ["ATK%"] },
                        { name: "Passerby", image: "/images/echoes/fusionprism.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Crit Rate/DMG > Resonance Skill DMG > Energy Regen > ATK%"
    },
    teams: [
        {
            name: "Premium Glacio",
            description: "Zhezhi buffs Skill/Glacio DMG, Shorekeeper provides Crit buffs.",
            members: [
                { name: "Carlotta", role: "Main DPS" },
                { name: "Zhezhi", role: "Sub DPS" },
                { name: "Shorekeeper", role: "Support" }
            ]
        },
        {
            name: "Skill Damage Team",
            description: "Cantarella or Taoqi provide Resonance Skill DMG amplification.",
            members: [
                { name: "Carlotta", role: "Main DPS" },
                { name: "Cantarella", role: "Sub DPS" },
                { name: "Verina", role: "Support" }
            ]
        }
    ]
};
