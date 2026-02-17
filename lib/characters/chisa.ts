import { Character } from "../characterTypes";

export const chisa: Character = {
    id: "chisa",
    name: "Chisa",
    rarity: 5,
    element: "Havoc",
    weaponType: "Broadblade",
    role: "Support",
    tags: ["Havoc Bane", "Healer", "Negative Status Buffer", "DEF Shred"],
    profileType: "Specialist",
    potential: "S",
    tier: {
        overall: "R0.5",
        tower: "R1",
        wastes: "R2"
    },
    imagePortrait: "/images/characters/ChisaSmall.png",
    imageIcon: "/images/characters/ChisaSmall.png",
    imageCard: "/images/characters/ChisaLarge.png",
    stats: {
        hp: 10775,
        atk: 438,
        def: 1137
    },
    maxEnergy: 125,
    minorFortes: [
        { name: "CRIT Rate", value: "8%", stat: "critRate", amount: 8 },
        { name: "ATK", value: "12%", stat: "atk", amount: 12 }
    ],
    materials: {
        ascension: [
            { name: "LF Polygon Core", count: 4, icon: "/images/else/lfpolygoncore.png" },
            { name: "Summer Flower", count: 60, icon: "/images/else/summerflower.png" },
            { name: "MF Polygon Core", count: 12, icon: "/images/else/mfpolygoncore.png" },
            { name: "HF Polygon Core", count: 12, icon: "/images/else/hfpolygoncore.png" },
            { name: "FF Polygon Core", count: 4, icon: "/images/else/ffpolygoncore.png" },
            { name: "Abyssal Husk", count: 46, icon: "/images/else/abyssalhusk.png" }
        ],
        skills: [
            { name: "LF Polygon Core", count: 25, icon: "/images/else/lfpolygoncore.png" },
            { name: "MF Polygon Core", count: 28, icon: "/images/else/mfpolygoncore.png" },
            { name: "HF Polygon Core", count: 40, icon: "/images/else/hfpolygoncore.png" },
            { name: "FF Polygon Core", count: 57, icon: "/images/else/ffpolygoncore.png" },
            { name: "Waveworn Residue 210", count: 25, icon: "/images/else/wavewornresidue210.png" },
            { name: "Waveworn Residue 226", count: 28, icon: "/images/else/wavewornresidue226.png" },
            { name: "Waveworn Residue 235", count: 55, icon: "/images/else/wavewornresidue235.png" },
            { name: "Waveworn Residue 239", count: 67, icon: "/images/else/wavewornresidue239.png" },
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
                    { name: "Abyssal Husk", count: 3, icon: "/images/else/abyssalhusk.png" },
                    { name: "Summer Flower", count: 4, icon: "/images/else/summerflower.png" }
                ]
            },
            {
                rank: 3,
                levelRange: "Lv. 50-60",
                materials: [
                    { name: "MF Polygon Core", count: 8, icon: "/images/else/mfpolygoncore.png" },
                    { name: "Abyssal Husk", count: 6, icon: "/images/else/abyssalhusk.png" },
                    { name: "Summer Flower", count: 8, icon: "/images/else/summerflower.png" }
                ]
            },
            {
                rank: 4,
                levelRange: "Lv. 60-70",
                materials: [
                    { name: "HF Polygon Core", count: 4, icon: "/images/else/hfpolygoncore.png" },
                    { name: "Abyssal Husk", count: 9, icon: "/images/else/abyssalhusk.png" },
                    { name: "Summer Flower", count: 12, icon: "/images/else/summerflower.png" }
                ]
            },
            {
                rank: 5,
                levelRange: "Lv. 70-80",
                materials: [
                    { name: "HF Polygon Core", count: 8, icon: "/images/else/hfpolygoncore.png" },
                    { name: "Abyssal Husk", count: 12, icon: "/images/else/abyssalhusk.png" },
                    { name: "Summer Flower", count: 16, icon: "/images/else/summerflower.png" }
                ]
            },
            {
                rank: 6,
                levelRange: "Lv. 80-90",
                materials: [
                    { name: "FF Polygon Core", count: 4, icon: "/images/else/ffpolygoncore.png" },
                    { name: "Abyssal Husk", count: 16, icon: "/images/else/abyssalhusk.png" },
                    { name: "Summer Flower", count: 20, icon: "/images/else/summerflower.png" }
                ]
            }
        ],
        weapon: {
            name: "Kumokiri",
            icon: "/images/weapons/kumokiri.png",
            total: [
                { name: "MF Polygon Core", count: 20, icon: "/images/else/mfpolygoncore.png" },
                { name: "HF Polygon Core", count: 20, icon: "/images/else/hfpolygoncore.png" },
                { name: "FF Polygon Core", count: 12, icon: "/images/else/ffpolygoncore.png" },
                { name: "Waveworn Residue 210", count: 26, icon: "/images/else/wavewornresidue210.png" },
                { name: "Waveworn Residue 226", count: 26, icon: "/images/else/wavewornresidue226.png" },
                { name: "Waveworn Residue 235", count: 16, icon: "/images/else/wavewornresidue235.png" }
            ],
            ascensionRanks: [
                {
                    rank: 1,
                    levelRange: "Lv. 20-40",
                    materials: [
                        { name: "LF Polygon Core", count: 6, icon: "/images/else/lfpolygoncore.png" },
                        { name: "Waveworn Residue 210", count: 6, icon: "/images/else/wavewornresidue210.png" }
                    ]
                },
                {
                    rank: 2,
                    levelRange: "Lv. 40-50",
                    materials: [
                        { name: "MF Polygon Core", count: 6, icon: "/images/else/mfpolygoncore.png" },
                        { name: "Waveworn Residue 210", count: 6, icon: "/images/else/wavewornresidue210.png" }
                    ]
                },
                {
                    rank: 3,
                    levelRange: "Lv. 50-60",
                    materials: [
                        { name: "MF Polygon Core", count: 10, icon: "/images/else/mfpolygoncore.png" },
                        { name: "Waveworn Residue 210", count: 10, icon: "/images/else/wavewornresidue210.png" }
                    ]
                },
                {
                    rank: 4,
                    levelRange: "Lv. 60-70",
                    materials: [
                        { name: "HF Polygon Core", count: 6, icon: "/images/else/hfpolygoncore.png" },
                        { name: "Waveworn Residue 226", count: 6, icon: "/images/else/wavewornresidue226.png" }
                    ]
                },
                {
                    rank: 5,
                    levelRange: "Lv. 70-80",
                    materials: [
                        { name: "HF Polygon Core", count: 10, icon: "/images/else/hfpolygoncore.png" },
                        { name: "Waveworn Residue 226", count: 10, icon: "/images/else/wavewornresidue226.png" }
                    ]
                },
                {
                    rank: 6,
                    levelRange: "Lv. 80-90",
                    materials: [
                        { name: "FF Polygon Core", count: 6, icon: "/images/else/ffpolygoncore.png" },
                        { name: "Waveworn Residue 235", count: 6, icon: "/images/else/wavewornresidue235.png" }
                    ]
                }
            ]
        }
    },
    analysis: {
        overview: `Chisa is a **Havoc Broadblade Support** specialized in enabling "Negative Status" teams (Erosion, Frazzle, etc.). She introduces the unique **Havoc Bane** mechanic, which reduces enemy DEF (stackable).
        
        Her Outro Skill is game-changing, increasing the maximum stack count of Negative Status effects by 3, allowing for higher damage ceilings in specific compositions. She also provides consistent healing and shielding, doubling as a sustainer.`,
        playstyle: "Builder -> Liberation (Buff/Heal) -> Chainsaw Mode (Damage/Shields) -> Outro. Key goal is to maintain Havoc Bane and trigger Outro for the Main DPS.",
        pros: [
            "**Unique DEF Shred**: Havoc Bane provides valuable DEF reduction.",
            "**Stack Cap Increase**: Only character who can increase the max stacks of Negative Statuses (e.g., Aero Erosion).",
            "**Role Consolidation**: Heals, shields, and buffs all in one kit.",
            "**Versatile**: Can function as a pure healer or a hybrid Sub-DPS/Support."
        ],
        cons: [
            "**Niche Utility**: Best performance is locked behind Negative Status teams.",
            "**Unknown Future**: She still does not have her best teammates for best performace, investing her is like investing into crypto.",
            "**Long Field Time**: Chainsaw Mode combo can take time away from the Main DPS if not optimized."
        ]
    },
    skills: [
        {
            name: "Basic: Reign of Silence",
            type: "Basic",
            description: "2-hit combo → **Rending Lunge** → **Death Snip** (heals team, Liberation DMG) → **Thread Withdrawn**. Complex chain with multiple branches.",
            attributes: [
                { name: "Basic P1 DMG", value: "8.40% * 2" },
                { name: "Basic P2 DMG", value: "4.80% + 9.60% + 33.60%" },
                { name: "Death Snip", value: "15.00% + 7.50% + 52.48%" },
                { name: "Death Snip Heal", value: "600 + 24% ATK" },
                { name: "Rending Lunge", value: "7.61% * 4 + 45.61%" }
            ],
            priority: 2
        },
        {
            name: "Resonance: Fractured Composition",
            type: "Skill",
            description: "**Eye of Unraveling**: Stagnate + Havoc DMG. At full Ring → **Serrated Loop**: Enter **Chainsaw Mode** (pulls + enhanced combos).",
            attributes: [
                { name: "Eye of Unraveling", value: "18.00%" },
                { name: "Serrated Loop", value: "8.78% * 8" },
                { name: "Serrated Hold", value: "3.76% * 16" },
                { name: "Cooldown", value: "12s" }
            ],
            priority: 1
        },
        {
            name: "Forte: Sight of Unraveling",
            type: "Forte",
            description: "**Unseen Snare**: Mark target → inflict **Havoc Bane** (DEF shred, every 2s). **Thread of Bane**: Ignore 18% DEF vs marked. **Chainsaw Mode**: Sawring-Blitz (3-hit combo) → Sawring-Eradication (team shield). **Ring of Chainsaw** (max 100). +20% Havoc DMG (Inherent).",
            attributes: [
                { name: "Sawring-Blitz P3", value: "8.04% * 8" },
                { name: "Sawring-Eradication", value: "25.92% + 103.68%" },
                { name: "Bonus per Ring", value: "+1.30%" },
                { name: "Shield", value: "2000 + 80% ATK" }
            ],
            priority: 4
        },
        {
            name: "Liberation: Moment of Nihility",
            type: "Ultimate",
            description: "Massive Havoc nuke + team heal. Enter **Woven Myriad** (15s): +120% Chainsaw Mode multipliers. +40 Ring of Chainsaw.",
            attributes: [
                { name: "Skill DMG", value: "480.00%" },
                { name: "Healing", value: "1400 + 56% ATK" },
                { name: "Cooldown", value: "25s" },
                { name: "Energy Cost", value: "125" }
            ],
            priority: 4
        },
        {
            name: "Intro: Reverberance - Return",
            type: "Intro",
            description: "Havoc DMG + 20 Ring of Chainsaw. Chain into P2 or Sawring.",
            attributes: [
                { name: "Skill DMG", value: "48.00%" },
                { name: "Ring Gain", value: "20" },
                { name: "Concerto Regen", value: "10" }
            ],
            priority: 1
        },
        {
            name: "Outro: Unraveling - Law Zero",
            type: "Outro",
            description: "Grant team **Resonant Thread of Closure**: +3 max Negative Status stacks (15s). Grant **Thread of Bane** (18% DEF Ignore) to allies inflicting Negative Status.",
            attributes: [
                { name: "Stack Increase", value: "+3" },
                { name: "DEF Ignore", value: "18%" },
                { name: "Duration", value: "20s" }
            ],
            priority: 1
        }
    ],
    resonanceChain: [
        { node: "S1", name: "Sequence Node 1", description: "Gain Interruption Immunity during Chainsaw Mode attacks. Inflicting Unseen Snare grants +30% ATK and deals fixed HP% DMG." },
        { node: "S2", name: "Sequence Node 2", description: "Ignore 10% Havoc RES. Allies with Thread of Bane gain **+50% All-Attribute DMG**." },
        { node: "S3", name: "Sequence Node 3", description: "Sawring (Chainsaw Mode) attacks have significantly increased DMG multipliers (+120%)." },
        { node: "S4", name: "Sequence Node 4", description: "Unseen Snare triggers Havoc Bane application every 1s (instead of 2s), stacking DEF shred faster." },
        { node: "S5", name: "Sequence Node 5", description: "Resonance Liberation DMG +100%. Lifethread glide cost reduced." },
        { node: "S6", name: "Sequence Node 6", description: "Survive fatal DMG (1 HP). Unseen Snare becomes **Finality**: Targets take +30% Amplified DMG from Negative Statuses and +40% from Chisa." }
    ],
    rotation: [
        "1. **Intro**: Enter with Chisa. Use Skill + Basic chain (Death Snip) to build Ring.",
        "2. **Liberation**: Cast **Moment of Nihility** to heal, buff, and fill Ring/Energy.",
        "3. **Chainsaw Mode**: Use Enhanced Skill to enter. Hold Attack for full **Sawring** combo.",
        "4. **Finisher**: Unleash **Sawring - Eradication** (Shields team).",
        "5. **Outro**: Switch to Main DPS (e.g., Cartethyia/Phoebe) to utilize the Negative Status stack buff."
    ],
    builds: {
        weapons: [
            {
                name: "Kumokiri",
                rank: "Signature",
                rarity: 5,
                description: "Best in Slot. Tailor-made for Negative Status supports, providing team-wide DMG buffs.",
                image: "/images/weapons/kumokiri.png"
            },
            {
                name: "Lustrous Razor",
                rank: "5-Star Alt",
                rarity: 5,
                description: "Good stat stick for Energy Regen and Liberation DMG.",
                image: "/images/weapons/lustrousrazor.png"
            },
            {
                name: "Wildfire Mark",
                rank: "4-Star Option",
                rarity: 4,
                description: "Provides buffs on Intro/Liberation, fitting her rotation.",
                image: "/images/weapons/wildfiremark.png"
            },
            {
                name: "Autumntrace",
                rank: "4-Star Alt",
                rarity: 4,
                description: "CRIT Rate stat stick if playing a more offensive hybrid build.",
                image: "/images/weapons/autumntrace.png"
            },
            {
                name: "Meditations on Mercy",
                rank: "F2P Option",
                rarity: 4,
                description: "Excellent F2P choice. ATK buff triggers easily on Negative Status enemies.",
                image: "/images/weapons/meditationsonmercy.png"
            }
        ],
        echoes: [
            {
                set: "Rejuvenating Glow (5pc)",
                mainEcho: "Fallacy of No Return",
                stats: {
                    cost4: ["Crit. Rate", "Treatment Effect Bonus"],
                    cost3: ["Energy Regen", "HP%"],
                    cost1: ["HP%", "HP%"],
                    substats: ["Energy Regen", "HP%", "Crit. Rate", "ATK%"]
                },
                description: "Healer/Support Build. Maximizes team buffs and sustain.",
                recommendation_reason: "Best for pure support role.",
                echo_breakdown: {
                    cost4: [{ name: "Fallacy of No Return", image: "/images/echoes/fallacyofnoreturn.png", mainStats: ["Crit. Rate", "Treatment Effect Bonus"] }],
                    cost3: [
                        { name: "Bell-Borne Geochelone", image: "/images/echoes/bellbornegeochelone.png", mainStats: ["Energy Regen"] },
                        { name: "Stonewall Bracer", image: "/images/echoes/stonewallbracer.png", mainStats: ["HP%"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["HP%"] },
                        { name: "Tick Tack", image: "/images/echoes/ticktack.png", mainStats: ["HP%"] }
                    ]
                }
            },
            {
                set: "Moonlit Clouds (5pc)",
                mainEcho: "Impermanence Heron",
                stats: {
                    cost4: ["Crit. Rate", "Crit. DMG"],
                    cost3: ["Energy Regen", "Havoc DMG"],
                    cost1: ["ATK%", "ATK%"],
                    substats: ["Energy Regen", "Crit. Rate", "ATK%", "Havoc DMG"]
                },
                description: "Buffer Build. Provides ATK buffs to the next character.",
                recommendation_reason: "Good for hypercarry teams.",
                echo_breakdown: {
                    cost4: [{ name: "Impermanence Heron", image: "/images/echoes/impermanenceheron.png", mainStats: ["Crit. Rate", "Crit. DMG"] }],
                    cost3: [
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Energy Regen"] },
                        { name: "Cyan-Feathered Heron", image: "/images/echoes/cyanfeatheredheron.png", mainStats: ["Havoc DMG"] }
                    ],
                    cost1: [
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] },
                        { name: "Whiff Whaff", image: "/images/echoes/whiffwhaff.png", mainStats: ["ATK%"] }
                    ]
                }
            }
        ],
        stats_priority: "Energy Regen (120%+) > HP% (Healer) / Crit (Hybrid) > ATK%"
    },
    teams: [
        {
            name: "Aero Erosion Team",
            description: "Chisa increases max Erosion stacks, boosting Cartethyia's and Ciaccona's damage output.",
            members: [
                { name: "Cartethyia", role: "Main DPS" },
                { name: "Ciaccona", role: "Sub DPS" },
                { name: "Chisa", role: "Support" }
            ]
        },
        {
            name: "Spectro Frazzle Team",
            description: "Supports Phoebe's Frazzle application with DEF Shred and stack increases.",
            members: [
                { name: "Phoebe", role: "Main DPS" },
                { name: "Rover (Spectro)", role: "Sub DPS" },
                { name: "Chisa", role: "Support" }
            ]
        }
    ]
};
