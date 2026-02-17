"use client";
import React, { useState } from 'react';
import { Swords, Skull, ChevronDown, ChevronUp, AlertTriangle, Info, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ElementImages } from '../../lib/characterTypes';
import { characters } from '../../lib/characters';

const elementColors: Record<string, string> = {
    Aero: "border-emerald-400/40 bg-emerald-900/20",
    Fusion: "border-orange-400/40 bg-orange-900/20",
    Glacio: "border-cyan-300/40 bg-cyan-900/20",
    Electro: "border-purple-400/40 bg-purple-900/20",
    Havoc: "border-pink-600/40 bg-pink-900/20",
    Spectro: "border-yellow-200/40 bg-yellow-900/20",
};

type GameMode = 'tower' | 'wastes';

interface TeamMember {
    name: string;
    image: string;
    role: string;
}

interface TeamComp {
    id: string;
    name: string;
    element: string;
    members: TeamMember[];
    description: string;
    towerTier: string;
    wastesTier: string;
    category: 'Meta' | 'Alt' | 'F2P';
    pros?: string[];
    cons?: string[];
}

const teamComps: TeamComp[] = [
    // ===== R0 META =====
    {
        id: "modern-mega",
        name: "sun and moon",
        element: "Spectro",
        members: [
            { name: "Augusta", image: "/images/characters/AugustaSmall.png", role: "Main DPS" },
            { name: "Iuno", image: "/images/characters/IunoSmall.png", role: "Sub DPS" },
            { name: "Shorekeeper", image: "/images/characters/ShorekeeperSmall.png", role: "Support" }
        ],
        description: "One of the most flexible and valuable team. Unmatched adaptation.",
        towerTier: "R0",
        wastesTier: "R0.5",
        category: "Meta",
        pros: [
            "Super flexible team on the roster.",
            "Each unit can be used to build separate high tier teams.",
            "High single target damage and good AoE damage.",
            "Includes Shorekeeper, the best general support."
        ],
        cons: [
            "Fixed rotation order limits flexible swapping.",
            "Needs to time Augusta's ultimate perfectly in WhiWa."
        ]
    },
    {
        id: "tune-break-meta",
        name: "Tune Break",
        element: "Fusion",
        members: [
            { name: "Iuno", image: "/images/characters/IunoSmall.png", role: "Main DPS" },
            { name: "Lynae", image: "/images/characters/LynaeSmall.png", role: "Sub DPS" },
            { name: "Mornye", image: "/images/characters/MornyeSmall.png", role: "Support" }
        ],
        description: "Best specialized team. Massive damage buff via Tomb Break mechanics.",
        towerTier: "R0",
        wastesTier: "R1.5",
        category: "Meta",
        pros: [
            "Offers a massive 40% additional damage taken buff via Lynae.",
            "Highly effective synergy with 'rupture' and 'shifting' effects.",
            "High utility: HP restoration and interruption resistance.",
            "Remove Iuno and any DPS just works fine."
        ],
        cons: [
            "At S0, Mornye is heavily dependent on Lynae to activate buffs.",
            "Interference marker duration (8s) is short for some rotations."
        ]
    },
    {
        id: "echo-nuke",
        name: "Phrolova carry",
        element: "Havoc",
        members: [
            { name: "Phrolova", image: "/images/characters/PhrolovaSmall.png", role: "Main DPS" },
            { name: "Qiuyuan", image: "/images/characters/QiuyuanSmall.png", role: "Sub DPS" },
            { name: "Cantarella", image: "/images/characters/CantarellaSmall.png", role: "Support" }
        ],
        description: "Phrolova's damage maximization. Rank 0 for both endgame modes.",
        towerTier: "R0",
        wastesTier: "R0",
        category: "Meta",
        pros: [
            "Undisputed best performance in Whimpering Waves.",
            "Massive damage buffs scale with fight duration.",
            "You don't have to use Roccia.",
            "High personal damage from all members."
        ],
        cons: [
            "Very low budget value (Niche units).",
            "Cantarella's kit feels unwieldy to some users."
        ]
    },
    // ===== R0.5 META =====
    {
        id: "fusion-amp",
        name: "Fusion Amplification",
        element: "Fusion",
        members: [
            { name: "Galbrena", image: "/images/characters/GalbrenaSmall.png", role: "Main DPS" },
            { name: "Lupa", image: "/images/characters/LupaSmall.png", role: "Sub DPS" },
            { name: "Mornye", image: "/images/characters/MornyeSmall.png", role: "Support" }
        ],
        description: "Explosive fusion damage combining Mornye's amp with Lupa.",
        towerTier: "R0",
        wastesTier: "R0.5",
        category: "Meta",
        pros: [
            "Combines 25% All-DMG amp with Fusion resistance reduction.",
            "Can complete rotation blindfolded.",
            "Exceptionally strong with Mornye S1 (removes restrictions)."
        ],
        cons: [
            "Lacks 'interference' triggers without Mornye S1.",
            "Requires specific Fusion DPS to maximize value."
        ]
    },
    {
        id: "arrow-team",
        name: "Erosion Nuke",
        element: "Aero",
        members: [
            { name: "Cartethyia", image: "/images/characters/CartethyiaSmall.png", role: "Main DPS" },
            { name: "Ciaccona", image: "/images/characters/CiacconaSmall.png", role: "Sub DPS" },
            { name: "Chisa", image: "/images/characters/ChisaSmall.png", role: "Support" }
        ],
        description: "Highest single-target damage ceiling in TOA.",
        towerTier: "R0",
        wastesTier: "R1",
        category: "Meta",
        pros: [
            "Unmatched single target damage in Tower of Adversity.",
            "Chisa provides significant performance boost."
        ],
        cons: [
            "Extremely expensive (3x Signature Weapons needed).",
            "Poor performance in multi-wave content.",
            "Currently the only team where Chisa can work good.",
            "Ciaccona's rotation is clunky without mastery."
        ]
    },
    {
        id: "carlotta-tune-break",
        name: "Carlotta Tune-Break",
        element: "Glacio",
        members: [
            { name: "Carlotta", image: "/images/characters/CarlottaSmall.png", role: "Main DPS" },
            { name: "Lynae", image: "/images/characters/LynaeSmall.png", role: "Sub DPS" },
            { name: "Mornye", image: "/images/characters/MornyeSmall.png", role: "Support" }
        ],
        description: "Premium Hypercarry.",
        towerTier: "R0.5",
        wastesTier: "R1.5",
        category: "Meta",
        pros: [
            "Lynae provides top-tier generalist buffs plus off-field damage.",
            "Consistent rotation loops with high damage amplification."
        ],
        cons: [
            "Very expensive team."
        ]
    },
    {
        id: "galbrena-hyper",
        name: "Galbrena Carry",
        element: "Fusion",
        members: [
            { name: "Galbrena", image: "/images/characters/GalbrenaSmall.png", role: "Main DPS" },
            { name: "Qiuyuan", image: "/images/characters/QiuyuanSmall.png", role: "Sub DPS" },
            { name: "Shorekeeper", image: "/images/characters/ShorekeeperSmall.png", role: "Support" }
        ],
        description: "'Brain-dead' team with huge AoE and survival.",
        towerTier: "R0.5",
        wastesTier: "R0.5",
        category: "Meta",
        pros: [
            "Easiest team to pilot; simple rotations.",
            "High survival rate (CC + Healing).",
            "Shorekeeper is high value generally."
        ],
        cons: [
            "Qiuyuan has limited synergy outside specific teams."
        ]
    },
    {
        id: "zani-team",
        name: "Heavy Spectro",
        element: "Spectro",
        members: [
            { name: "Zani", image: "/images/characters/ZaniSmall.png", role: "Main DPS" },
            { name: "Phoebe", image: "/images/characters/PhoebeSmall.png", role: "Sub DPS" },
            { name: "Shorekeeper", image: "/images/characters/ShorekeeperSmall.png", role: "Support" }
        ],
        description: "Extremely high damage ceiling but clunky kit. For experts only.",
        towerTier: "R0.5",
        wastesTier: "R1.5",
        category: "Meta",
        pros: [
            "Kinda old but still deals massive damage with the right teammates.",
            "Currently the best Spectro team.",
            "Very high skill mastery potential thanks to Zani's unique parry mechanic."
        ],
        cons: [
            "A nightmare for casual players.",
            "Requires near-flawless play for best results.",
            "Relatively expensive team to build.",
            "Zani becomes ineffective in WhiWa when enemies scatter."
        ]
    },
    // ===== R1/R1.5 META/ALT =====
    {
        id: "mono-fusion",
        name: "Brant Sub-DPS",
        element: "Fusion",
        members: [
            { name: "Lupa", image: "/images/characters/LupaSmall.png", role: "Main DPS" },
            { name: "Brant", image: "/images/characters/BrantSmall.png", role: "Sub DPS" },
            { name: "Mornye", image: "/images/characters/MornyeSmall.png", role: "Support" }
        ],
        description: "High AoE but expensive.",
        towerTier: "R1",
        wastesTier: "R1",
        category: "Meta",
        pros: [
            "Good synergy",
            "High AoE."
        ],
        cons: [
            "Very expensive (3 limited characters).",
            "Highly restrictive (Mono element).",
            "Feels not that good to play compared to other options."
        ]
    },
    {
        id: "mornye-standard",
        name: "Mornye Standard",
        element: "Spectro",
        members: [
            { name: "Jinhsi", image: "/images/characters/JinhsiSmall.png", role: "Main DPS" },
            { name: "Zhezhi", image: "/images/characters/ZhezhiSmall.png", role: "Sub DPS" },
            { name: "Mornye", image: "/images/characters/MornyeSmall.png", role: "Support" }
        ],
        description: "Competent generalist support alternative to Shorekeeper/Verina.",
        towerTier: "R2",
        wastesTier: "R2",
        category: "Alt",
        pros: [
            "Competent third generalist healer/support.",
            "Simple playstyle and explosive animations."
        ],
        cons: [
            "Significantly worse than Shorekeeper at S0 without synergy.",
            "No quick-swap synergy (needs field time)."
        ]
    },
    // ===== HONORABLE MENTIONS / F2P =====
    {
        id: "f2p-best",
        name: "Phrolova F2P",
        element: "Havoc",
        members: [
            { name: "Phrolova", image: "/images/characters/PhrolovaSmall.png", role: "Main DPS" },
            { name: "Rover (Havoc)", image: "/images/characters/RoverSmall.png", role: "Sub DPS" },
            { name: "Danjin", image: "/images/characters/DanjinSmall.png", role: "Support" }
        ],
        description: "No healer needed. Self-sustain clears content.",
        towerTier: "R1.5",
        wastesTier: "R1.5",
        category: "F2P"
    },
    {
        id: "carlotta-f2p",
        name: "Carlotta F2P",
        element: "Glacio",
        members: [
            { name: "Carlotta", image: "/images/characters/CarlottaSmall.png", role: "Main DPS" },
            { name: "Yangyang", image: "/images/characters/YangyangSmall.png", role: "Sub DPS" },
            { name: "Buling", image: "/images/characters/BulingSmall.png", role: "Support" }
        ],
        description: "Accessible, energy-efficient team. Yangyang funnels Energy to Carlotta.",
        towerTier: "R1.5",
        wastesTier: "R1.5",
        category: "F2P",
        pros: [
            "Buling boosts Skill DMG.",
            "Super simple and fast rotations."
        ],
        cons: [
            "Lower damage ceiling.",
            "S6 Buling is needed."
        ]
    },
    {
        id: "1x-dps",
        name: "Best 1.x DPS",
        element: "Aero",
        members: [
            { name: "Jiyan", image: "/images/characters/JiyanSmall.png", role: "Main DPS" },
            { name: "Ciaccona", image: "/images/characters/CiacconaSmall.png", role: "Sub DPS" },
            { name: "Iuno", image: "/images/characters/IunoSmall.png", role: "Support" }
        ],
        description: "Jiyan remains competitive with modern supports.",
        towerTier: "R1",
        wastesTier: "R1",
        category: "Alt"
    }
];

function TeamCard({ team, mode }: { team: TeamComp; mode: GameMode }) {
    return (
        <div className={`p-4 border ${elementColors[team.element] || 'border-gray-700 bg-gray-900/30'} rounded-xl hover:scale-[1.02] transition-transform cursor-pointer w-full md:min-w-[350px] md:max-w-[400px] flex flex-col`}>
            {/* Team Name */}
            <div className="flex items-center gap-2 mb-3">
                <span className="text-base font-bold uppercase tracking-wider text-white break-words leading-tight" title={team.name}>{team.name}</span>
                {team.category === 'Meta' && <span className="text-[10px] bg-yellow-500/20 text-yellow-500 px-1.5 py-0.5 border border-yellow-500/50 rounded">META</span>}
                {team.category === 'F2P' && <span className="text-[10px] bg-green-500/20 text-green-500 px-1.5 py-0.5 border border-green-500/50 rounded">F2P</span>}
            </div>

            {/* Character Icons */}
            <div className="flex gap-4 mb-4 justify-center">
                {team.members.map((member, idx) => {
                    // Convert character name to URL slug
                    const slug = member.name.toLowerCase()
                        .replace(/[()]/g, '')
                        .replace(/\s+/g, '-')
                        .replace('xiangli-yao', 'xiangli')
                        .replace('rover-spectro', 'rover')
                        .replace('rover-havoc', 'rover')
                        .replace('rover-aero', 'rover');

                    // Find character element
                    const characterData = characters.find(c => c.name.toLowerCase() === member.name.toLowerCase()) ||
                        characters.find(c => c.id === slug); // Fallback to slug if name doesn't match
                    const element = characterData?.element;
                    const elementIcon = element ? ElementImages[element] : null;

                    return (
                        <Link key={idx} href={`/character/${slug}`} className="flex flex-col items-center group w-24">
                            <div className="relative w-24 h-24 mb-1">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover rounded-lg border-2 border-gray-600 group-hover:border-white transition-all shadow-lg"
                                />
                                {elementIcon && (
                                    <div className="absolute top-0.5 right-0.5 w-4 h-4 z-10">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={elementIcon}
                                                alt={element || "Element"}
                                                fill
                                                className="object-contain drop-shadow-md"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <span className="text-[11px] font-medium text-gray-400 text-center leading-tight group-hover:text-white break-words w-full">
                                {member.role}
                            </span>
                        </Link>
                    );
                })}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed mb-4 border-b border-gray-800 pb-2 min-h-[48px]">{team.description}</p>

            {/* Pros & Cons */}
            {(team.pros || team.cons) && (
                <div className="space-y-3">
                    {team.pros && (
                        <div>
                            <span className="text-xs font-bold text-emerald-500 uppercase flex items-center gap-1 mb-1">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Pros
                            </span>
                            <ul className="text-xs text-gray-400 space-y-1 list-disc list-outside pl-3">
                                {team.pros.map((p, i) => (
                                    <li key={i} className="leading-snug break-words" title={p}>{p}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {team.cons && (
                        <div>
                            <span className="text-xs font-bold text-red-500 uppercase flex items-center gap-1 mb-1">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Cons
                            </span>
                            <ul className="text-xs text-gray-400 space-y-1 list-disc list-outside pl-3">
                                {team.cons.map((c, i) => (
                                    <li key={i} className="leading-snug break-words" title={c}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default function CompTierList() {
    const [mode, setMode] = useState<GameMode>('tower');
    const [infoExpanded, setInfoExpanded] = useState(false);

    const roles: { label: string; value: 'Meta' | 'Alt' | 'F2P' }[] = [
        { label: "Meta Teams", value: "Meta" },
        { label: "Alternative", value: "Alt" },
        { label: "F2P Friendly", value: "F2P" },
    ];

    const tiers = ["R0", "R0.5", "R1", "R1.5", "R2", "R2.5", "R3"];

    const getTeamsForTierAndCategory = (tier: string, category: 'Meta' | 'Alt' | 'F2P') => {
        return teamComps.filter(t => {
            const teamTier = mode === 'tower' ? t.towerTier : t.wastesTier;
            return teamTier === tier && t.category === category;
        });
    };

    return (
        <div className="max-w-[90rem] mx-auto p-3 md:p-12 animate-in fade-in duration-700 font-sans text-gray-100 selection:bg-white selection:text-black">

            {/* HUD Header */}
            <div className="mb-8 border-b border-gray-800 pb-6 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">
                        <span className="text-gray-600">Team</span> <span className="text-emerald-600">Composition</span>
                    </h1>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest pl-1">
                        Global Meta Rankings // Patch 3.0
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-xs font-mono text-gray-600 uppercase">Last Updated</p>
                    <p className="text-sm font-mono text-gray-400">2026.01.15</p>
                </div>
            </div>

            {/* COLLAPSIBLE INFO SECTION */}
            <div className="mb-8 border border-gray-800 bg-[#0a0a0a]">
                <button
                    onClick={() => setInfoExpanded(!infoExpanded)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-[#111] transition-colors"
                >
                    <div className="flex items-center gap-3">
                        <Info size={18} className="text-gray-500" />
                        <span className="font-bold uppercase tracking-wider text-sm">About This List</span>
                    </div>
                    {infoExpanded ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
                </button>

                {infoExpanded && (
                    <div className="p-6 border-t border-gray-800 space-y-6 text-sm text-gray-400 leading-relaxed">

                        {/* DISCLAIMER */}
                        <div className="p-4 border border-yellow-900/50 bg-yellow-950/20">
                            <div className="flex items-start gap-3">
                                <AlertTriangle size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-yellow-500 uppercase text-xs tracking-wider mb-2">Important Disclaimer</p>
                                    <p>
                                        This tier list is calculated based on <strong className="text-white">Sequence 0</strong> with <strong className="text-white">Signature Weapons</strong> and <strong className="text-white">maximum level Resonators</strong>.
                                        Our in-game data may differ from your personal results. Certain characters may appear higher or lower than expected based on our echo stats and maybe even mistakes made while testing.
                                        Always consider your own playstyle and available resources when building teams.
                                    </p>
                                    <p className="mt-2">
                                        <strong className="text-yellow-400"> Blindly following any list is not recommended</strong>, use it as a reference, not a rule.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ABOUT */}
                        <div>
                            <p className="mt-3 text-gray-500 italic">
                                Note: Teams within the same tier are listed by general effectiveness.
                            </p>
                        </div>

                        {/* GAME MODES */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 border border-red-900/30 bg-red-950/10">
                                <h4 className="font-bold text-red-400 uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                                    <Swords size={14} /> Tower of Adversity
                                </h4>
                                <p>
                                    The ultimate endgame challenge. Requires <strong className="text-white">4 fully-built teams</strong> to conquer rotating Hazard Zones.
                                    Since the hardest floors focus on Boss elimination, single target Resonators usually the rock-stars of this gamemode.
                                </p>
                            </div>
                            <div className="p-4 border border-purple-900/30 bg-purple-950/10">
                                <h4 className="font-bold text-purple-400 uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                                    <Skull size={14} /> Whimpering Wastes
                                </h4>
                                <p>
                                    Wave-based survival mode requiring <strong className="text-white">2 teams</strong>.
                                    Success depends on quickly clearing multiple waves of smaller enemies within a 2-minute time limit.
                                    And without<strong className="text-purple-300"> AoE damage dealers</strong>, you will suffer for eternity.
                                </p>
                            </div>
                        </div>

                        {/* POWER BRACKETS */}
                        <div>
                            <h3 className="font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                <Zap size={16} className="text-yellow-500" /> Power Brackets
                            </h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-black text-red-500 w-20 flex-shrink-0">R0 - R0.5</span>
                                    <p><strong className="text-white">Predators</strong> — The absolute elite. These teams trivialize content with exceptional damage output, game-changing buffs, or unmatched survivability. When paired with optimal rotations, they deliver consistent, top-tier results with minimal effort.</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-black text-yellow-500 w-20 flex-shrink-0">R1 - R1.5</span>
                                    <p><strong className="text-white">Meta</strong> — Reliable endgame performers. May require more mechanical skill, specific team comps, or higher investment to match Apex units. They excel when given the right conditions and shouldn&apos;t be underestimated.</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-black text-gray-500 w-20 flex-shrink-0">R2 - R3</span>
                                    <p><strong className="text-white">Preys</strong> — They devour your hopes and dreams for breakfast. If you have better alternatives, just use them. Can still clear content but require significantly more effort and investment to compete with higher-tier options.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* MODE SWITCHER */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                    onClick={() => setMode('tower')}
                    className={`relative h-32 overflow-hidden border transition-all duration-300 group text-left p-6 flex flex-col justify-end ${mode === 'tower'
                        ? 'border-red-500 bg-red-950/20'
                        : 'border-gray-800 bg-[#0f0f0f] hover:border-gray-600'
                        }`}
                >
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-50 transition-opacity">
                        <Swords size={48} className={mode === 'tower' ? 'text-red-500' : 'text-gray-500'} />
                    </div>
                    <span className={`text-xs font-mono uppercase mb-1 ${mode === 'tower' ? 'text-red-400' : 'text-gray-500'}`}>Target Analysis</span>
                    <h3 className={`text-2xl font-black uppercase tracking-tight ${mode === 'tower' ? 'text-white' : 'text-gray-400'}`}>
                        Tower of Adversity
                    </h3>
                    {mode === 'tower' && <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500" />}
                </button>

                <button
                    onClick={() => setMode('wastes')}
                    className={`relative h-32 overflow-hidden border transition-all duration-300 group text-left p-6 flex flex-col justify-end ${mode === 'wastes'
                        ? 'border-purple-500 bg-purple-950/20'
                        : 'border-gray-800 bg-[#0f0f0f] hover:border-gray-600'
                        }`}
                >
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-50 transition-opacity">
                        <Skull size={48} className={mode === 'wastes' ? 'text-purple-500' : 'text-gray-500'} />
                    </div>
                    <span className={`text-xs font-mono uppercase mb-1 ${mode === 'wastes' ? 'text-purple-400' : 'text-gray-500'}`}>Zone Evaluation</span>
                    <h3 className={`text-2xl font-black uppercase tracking-tight ${mode === 'wastes' ? 'text-white' : 'text-gray-400'}`}>
                        Whimpering Wastes
                    </h3>
                    {mode === 'wastes' && <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500" />}
                </button>
            </div>

            {/* MOBILE CARD VIEW */}
            <div className="md:hidden space-y-4">
                {tiers.map((tier) => {
                    const hasAnyTeams = roles.some(role => getTeamsForTierAndCategory(tier, role.value).length > 0);
                    if (!hasAnyTeams) return null;

                    return (
                        <div key={tier} className="border border-gray-800 bg-[#0a0a0a]">
                            {/* Tier Header */}
                            <div className={`p-4 border-b border-gray-800 flex items-center gap-3
                                ${tier === 'R0' ? 'bg-red-950/30' : ''}
                                ${tier === 'R0.5' ? 'bg-orange-950/30' : ''}
                                ${tier === 'R1' ? 'bg-yellow-950/30' : ''}
                                ${tier === 'R1.5' ? 'bg-yellow-950/20' : 'bg-gray-900/50'}
                            `}>
                                <span className={`font-black text-2xl italic tracking-tighter
                                    ${tier === 'R0' ? 'text-red-500' : ''}
                                    ${tier === 'R0.5' ? 'text-orange-500' : ''}
                                    ${tier === 'R1' ? 'text-yellow-500' : ''}
                                    ${tier === 'R1.5' ? 'text-yellow-200/80' : 'text-gray-600'}
                                `}>
                                    {tier}
                                </span>
                            </div>

                            {/* Category Sections */}
                            <div className="divide-y divide-gray-800">
                                {roles.map((role) => {
                                    const teams = getTeamsForTierAndCategory(tier, role.value);
                                    if (teams.length === 0) return null;

                                    return (
                                        <div key={role.label} className="p-3">
                                            <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">{role.label}</p>
                                            <div className="space-y-3">
                                                {teams.map((team) => (
                                                    <TeamCard key={team.id} team={team} mode={mode} />
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* DESKTOP TABLE VIEW */}
            <div className="hidden md:block w-full overflow-x-auto border border-gray-800 bg-[#0a0a0a]">
                <table className="w-full min-w-[900px] border-collapse text-sm">
                    <thead>
                        <tr className="bg-[#0f0f0f] border-b border-gray-800">
                            <th className="p-4 w-24 text-left font-mono text-xs uppercase text-gray-500 tracking-wider border-r border-gray-800 sticky left-0 bg-[#0f0f0f] z-20">
                                Rank
                            </th>
                            {roles.map((role) => (
                                <th key={role.label} className={`p-4 text-left font-mono text-xs uppercase text-gray-400 tracking-wider border-r border-gray-800 last:border-r-0 ${role.value === 'Meta' ? 'w-[40%]' : 'w-[30%]'}`}>
                                    {role.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                        {tiers.map((tier) => (
                            <tr key={tier} className="group hover:bg-[#111] transition-colors">
                                {/* TIER HEADER ROW */}
                                <td className={`
                                    p-4 align-top border-r border-gray-800 sticky left-0 z-10 bg-[#0a0a0a] group-hover:bg-[#111] transition-colors
                                    font-black text-3xl italic tracking-tighter
                                    ${tier === 'R0' ? 'text-red-500' : ''}
                                    ${tier === 'R0.5' ? 'text-orange-500' : ''}
                                    ${tier === 'R1' ? 'text-yellow-500' : ''}
                                    ${tier === 'R1.5' ? 'text-yellow-200/80' : 'text-gray-600'}
                                `}>
                                    {tier}
                                </td>

                                {/* ROLE COLUMNS */}
                                {roles.map((role) => {
                                    const teams = getTeamsForTierAndCategory(tier, role.value);
                                    return (
                                        <td key={role.label} className="p-4 align-top border-r border-gray-800 last:border-r-0 h-full">
                                            <div className="flex flex-wrap gap-4 content-start">
                                                {teams.length > 0 ? (
                                                    teams.map((team) => (
                                                        <TeamCard key={team.id} team={team} mode={mode} />
                                                    ))
                                                ) : (
                                                    <span className="text-gray-800 font-mono text-xs p-2">—</span>
                                                )}
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-gray-600 uppercase">
                <span>* There is nothing here</span>
                <span>End of Report</span>
            </div>
        </div>
    );
}

