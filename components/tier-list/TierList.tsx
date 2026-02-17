"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { characters, Character, RoleType, ElementImages } from '@/lib/characters';
import { Terminal, Swords, Skull, ChevronDown, ChevronUp, AlertTriangle, Info, Target, Zap } from 'lucide-react';

const elementColors: Record<string, string> = {
    Aero: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    Fusion: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    Glacio: "text-cyan-300 bg-cyan-300/10 border-cyan-300/20",
    Electro: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    Havoc: "text-pink-600 bg-pink-600/10 border-pink-600/20",
    Spectro: "text-yellow-200 bg-yellow-200/10 border-yellow-200/20",
};

type GameMode = 'tower' | 'wastes';

export default function TierList() {
    const [mode, setMode] = useState<GameMode>('tower');
    const [infoExpanded, setInfoExpanded] = useState(false);

    const roles: { label: string; value: RoleType | 'Hybrid' }[] = [
        { label: "Main DPS", value: "Main DPS" },
        { label: "Sub DPS / Hybrid", value: "Sub DPS" },
        { label: "Support", value: "Support" },
    ];

    const tiers = ["R0", "R0.5", "R1", "R1.5", "R2", "R2.5", "R3"];

    // Characters to exclude from tier list (beta characters)
    const excludedIds = ["sigrika", "luuk-herssen", "lucilla", "aemeath"];

    const getChars = (tier: string, roleColumn: string) => {
        return characters.filter(c => {
            // Exclude specific characters
            if (excludedIds.includes(c.id)) return false;

            // Tier match based on active mode
            const charTier = mode === 'tower' ? c.tier.tower : c.tier.wastes;
            const tierMatch = charTier === tier;

            let roleMatch = false;
            if (roleColumn === "Main DPS") roleMatch = c.role === "Main DPS";
            else if (roleColumn === "Sub DPS") roleMatch = c.role === "Sub DPS" || c.role === "Hybrid";
            else if (roleColumn === "Support") roleMatch = c.role === "Support" || c.role === "Healer";
            return tierMatch && roleMatch;
        });
    };

    return (
        <div className="max-w-[90rem] mx-auto p-3 md:p-12 animate-in fade-in duration-700 font-sans text-gray-100 selection:bg-white selection:text-black">

            {/* HUD Header */}
            <div className="mb-8 border-b border-gray-800 pb-6 flex justify-between items-end">
                <div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">
                        <span className="text-gray-600">Prey</span> or <span className="text-red-600">Predator</span>
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
                        <span className="font-bold uppercase tracking-wider text-sm">About This Tier List</span>
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
                                        This tier list is calculated based on <strong className="text-white">maximum level Resonators </strong> with <strong className="text-white">Sequence 0 (S0)</strong> and <strong className="text-white">Signature Weapons (R0)</strong>.
                                    </p>
                                    <p className="mt-2">
                                        Individual Value and Versatility are prioritized in this Tier List. Characters "tailor-made" for specific teammates or those requiring a very niche setup to function tend to be ranked lower. While a character might reach S+ tier in their best possible team, the evaluation is based on performance across various situations and suboptimal pairings.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SPECIALIST VS. VERSATILE CATEGORIZATION */}
                        <div className="p-4 border border-cyan-900/30 bg-cyan-950/10">
                            <h4 className="font-bold text-cyan-400 uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                                <Zap size={14} /> Tags
                            </h4>
                            <p className="mb-3">
                                A clear distinction is maintained between two types of high-performance units:
                            </p>
                            <div className="space-y-2">
                                <p>
                                    <strong className="text-green-400">Versatile Units:</strong> Identified as safe, flexible investments. These resonators function effectively in nearly any team and provide consistent value with minimal setup.
                                </p>
                                <p>
                                    <strong className="text-orange-400">Specialist Units:</strong> These resonators may appear &quot;underwhelming&quot; when evaluated solo but reach peak potential when paired with their best partners. In scenarios where the ideal team is available, a Specialist should be viewed as one or two tiers higher than their base rank.
                                </p>
                                <strong className="text-blue-400">Potential:</strong> Possible overall damage with right teammates/value in the future with right teammates.
                            </div>
                        </div>

                        {/* RANKING CRITERIA */}
                        <div>
                            <p className="mb-4">
                                <strong className="text-white">Characters are primarily ranked based on their self-sufficiency, versatility and pull value.</strong> The specific criteria for each role are as follows:
                            </p>

                            <div className="space-y-4">
                                <div className="p-3 border border-red-900/30 bg-red-950/10">
                                    <h4 className="font-bold text-red-400 uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                                        <Target size={14} /> DPS Resonators
                                    </h4>
                                    <p>
                                        Rankings are largely determined by <strong className="text-white">ease of use</strong>, <strong className="text-white">dependency on other characters</strong>, and <strong className="text-white">effectiveness in 1v1 combat scenarios</strong>. Performance in endgame content is evaluated based on how these characters function solo or within suboptimal teams, specifically focusing on built-in interruption resistance, self buffing/debuffing enemy and evasion/quickswap capabilities within their kits.
                                    </p>
                                </div>

                                <div className="p-3 border border-orange-900/30 bg-orange-950/10">
                                    <h4 className="font-bold text-orange-400 uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                                        <Zap size={14} /> Sub-DPS / Hybrid Resonators
                                    </h4>
                                    <p>
                                        These characters are ranked according to <strong className="text-white">rotation speeds</strong>, the ability to <strong className="text-white">deal maximum damage in the shortest time possible</strong>, <strong className="text-white">ease of use</strong>, the <strong className="text-white">frequency of skill usage</strong>, and the <strong className="text-white">balance between being self-sufficient and providing support</strong> to the team.                                    </p>
                                </div>

                                <div className="p-3 border border-green-900/30 bg-green-950/10">
                                    <h4 className="font-bold text-green-400 uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                                        <i className="fa-solid fa-hand-holding-medical text-sm"></i> Support Resonators
                                    </h4>
                                    <p>
                                        Unlike other roles, Supports are evaluated based on the <strong className="text-white">utility of their buffs/debuffs and rotation speed</strong>. Since their primary purpose is to empower the Main or Sub-DPS, their personal damage output and individual survivability are considered secondary to the benefits they provide to the team.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* VARIANCE NOTE */}
                        <div className="p-4 border border-blue-900/30 bg-blue-950/10">
                            <p>
                                Rankings may appear higher or lower than expected due to differences in playstyle or builds. For example, a character like Calcharo may exhibit superior performance depending on a player&apos;s mechanical mastery, regardless of specific kit limitations. Decisions regarding team building should always prioritize individual playstyle and available resources. </p>

                            <p className="mt-2">
                                Having a low rank doesn't mean the character is completely useless. Some characters can easily clear end-game content with the right teammates, even if they're only rank 2.
                            </p>
                            <p className="mt-2">
                                For those specifically seeking to optimize for endgame content clearance, the <Link href="/comp-tier-list" className="text-blue-400 hover:text-blue-300 underline font-bold">Comp Tier List</Link> should be consulted.
                            </p>
                            <p className="mt-2 text-yellow-400 font-semibold">
                                This list serves as a reference rather than a rule, blindly following ANY list is not recommended.
                            </p>
                        </div>

                        {/* TIER BRACKETS */}
                        <div>
                            <h3 className="font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                                <Zap size={16} className="text-yellow-500" /> Power Brackets
                            </h3>
                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <span className="font-black text-red-500 w-20 flex-shrink-0">R0 - R0.5</span>
                                    <p><strong className="text-white">Predators</strong> — The absolute elite. These characters trivialize content with exceptional damage output, game-changing buffs, or unmatched survivability. They devour their enemies' dreams and hopes for breakfast. When paired with best teams, they deliver consistent, top-tier results with minimal effort.</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="font-black text-yellow-500 w-20 flex-shrink-0">R1 - R1.5</span>
                                    <p><strong className="text-white">Meta</strong> — Reliable endgame performers. May require more mechanical skill, specific team comps, or higher investment to match Apex units. They excel when given the right conditions and shouldn't be underestimated.</p>
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
                    const hasAnyChars = roles.some(role => getChars(tier, role.value).length > 0);
                    if (!hasAnyChars) return null;

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

                            {/* Role Sections */}
                            <div className="divide-y divide-gray-800">
                                {roles.map((role) => {
                                    const chars = getChars(tier, role.value);
                                    if (chars.length === 0) return null;

                                    return (
                                        <div key={role.label} className="p-2">
                                            <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">{role.label}</p>
                                            <div className="grid grid-cols-3 gap-1.5">
                                                {chars.map((char) => (
                                                    <CharacterCard key={char.id} char={char} />
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
                                <th key={role.label} className="p-2 text-left font-mono text-xs uppercase text-gray-400 tracking-wider border-r border-gray-800 last:border-r-0 min-w-[26rem] w-[26rem]">
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
                                    px-4 py-8 align-top border-r border-gray-800 sticky left-0 z-10 bg-[#0a0a0a] group-hover:bg-[#111] transition-colors
                                    font-black text-3xl italic tracking-tighter
                                    ${tier === 'R0' ? 'text-red-500' : ''}
                                    ${tier === 'R0.5' ? 'text-orange-500' : ''}
                                    ${tier === 'R1' ? 'text-yellow-500' : ''}
                                    ${tier === 'R1.5' ? 'text-yellow-200/80' : 'text-gray-600'}
                                `}>
                                    {tier}
                                </td>

                                {/* ROLE COLUMNS */}
                                {roles.map((role) => (
                                    <td key={role.label} className="px-2 py-8 align-top border-r border-gray-800 last:border-r-0 h-full">
                                        <div className="grid grid-cols-3 gap-2">
                                            {getChars(tier, role.value).map((char) => (
                                                <CharacterCard key={char.id} char={char} />
                                            ))}
                                            {getChars(tier, role.value).length === 0 && (
                                                <span className="text-gray-800 font-mono text-xs p-2">_NO_DATA</span>
                                            )}
                                        </div>
                                    </td>
                                ))}
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

function CharacterCard({ char }: { char: Character }) {
    return (
        <Link
            href={`/character/${char.id}`}
            className="group/card relative block w-full aspect-square md:w-[7.5rem] md:h-[7.5rem] bg-gray-900 border border-gray-800 hover:border-gray-500 overflow-hidden transition-all duration-300"
        >
            {/* ELEMENT INDICATOR */}
            <div className="absolute top-1 right-1 z-10 w-4 h-4">
                <img
                    src={ElementImages[char.element]}
                    alt={char.element}
                    className="w-full h-full object-contain drop-shadow-md"
                />
            </div>

            {/* IMAGE */}
            {char.imageIcon ? (
                <img src={char.imageIcon} alt={char.name} className="w-full h-full object-cover object-top origin-top scale-[1.3] transition-all duration-500" />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-2xl font-black text-gray-800 uppercase">
                    {char.name[0]}
                </div>
            )}

            {/* NAME OVERLAY */}
            <div className={`absolute bottom-0 inset-x-0 py-1 border-t group-hover/card:border-gray-500 transition-colors ${char.rarity === 5
                ? 'bg-yellow-900/80 border-yellow-800/50'
                : 'bg-purple-900/80 border-purple-800/50'
                }`}>
                <p className="text-[9px] font-mono font-bold text-center text-gray-300 truncate tracking-tighter uppercase group-hover/card:text-white">
                    {char.name}
                </p>
            </div>

            {/* TOOLTIP ON HOVER */}
            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-2 z-20 pointer-events-none">
                {char.potential && (
                    <div className="text-center mb-1">
                        <span className="text-[9px] text-gray-400 uppercase tracking-widest block">Potential</span>
                        <span className={`font-black text-xl leading-none ${char.potential === 'S+' ? 'text-red-500' :
                            char.potential === 'S' ? 'text-yellow-500' :
                                char.potential === 'A' ? 'text-purple-400' :
                                    char.potential === 'B' ? 'text-blue-400' :
                                        'text-gray-400'
                            }`}>{char.potential}</span>
                    </div>
                )}

                {char.profileType && (
                    <div className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded border ${char.profileType === 'Versatile'
                        ? 'text-green-400 border-green-500/50 bg-green-950/50'
                        : 'text-orange-400 border-orange-500/50 bg-orange-950/50'
                        }`}>
                        {char.profileType}
                    </div>
                )}
            </div>

            {/* CORNER ACCENT */}
            <div className="absolute top-0 left-0 w-1 h-1 bg-white opacity-0 group-hover/card:opacity-100 transition-opacity" />
        </Link>
    );
}
