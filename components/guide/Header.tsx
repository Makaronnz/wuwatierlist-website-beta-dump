/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Character, ElementImages } from '../../lib/characters';
import { Star } from 'lucide-react';

interface HeaderProps {
    character: Character;
}

export default function Header({ character }: HeaderProps) {
    const [level, setLevel] = useState(90);
    const [includeMinorFortes, setIncludeMinorFortes] = useState(false);

    return (
        <header className="relative border-b border-gray-800 bg-gray-900/50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-0 relative">
                {/* Portrait Column (Visual) - Now Static & Contained */}
                <div className="md:col-span-1 relative h-full min-h-[400px] flex items-start justify-center md:justify-start">
                    <div className="relative w-full h-full">
                        {/* Image container absolute relative to this column, but column is in grid */}
                        <img
                            src={character.imageCard || character.imagePortrait}
                            alt={character.name}
                            className="absolute top-0 left-0 w-full h-full object-cover object-top" // Force object-top to show head
                            style={{
                                imageRendering: 'auto',
                                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                            }}
                        />
                        {/* Gradient to blend with background if scalable */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]/20" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40" />
                    </div>
                </div>

                {/* Stats & Info Column */}
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-end min-h-[300px]">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest border ${character.element === 'Spectro' ? 'border-yellow-500 text-yellow-500' :
                            character.element === 'Havoc' ? 'border-pink-900 text-pink-500' :
                                character.element === 'Fusion' ? 'border-orange-500 text-orange-500' :
                                    character.element === 'Glacio' ? 'border-cyan-400 text-cyan-400' :
                                        character.element === 'Electro' ? 'border-purple-500 text-purple-500' :
                                            'border-green-500 text-green-500'
                            }`}>
                            <img src={ElementImages[character.element]} alt={character.element} className="w-6 h-6 object-contain" />
                        </span>
                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest border border-gray-600 text-gray-400">
                            {character.weaponType}
                        </span>
                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest border border-gray-600 text-gray-400">
                            {character.role}
                        </span>
                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest border border-white ${character.tier.tower === 'R0' ? 'text-red-500' : character.tier.tower === 'R0.5' ? 'text-orange-500' : character.tier.tower === 'R1' ? 'text-yellow-500' : character.tier.tower === 'R1.5' ? 'text-yellow-200' : 'text-white'}`}>
                            TOA: {character.tier.tower}
                        </span>
                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest border border-white ${character.tier.wastes === 'R0' ? 'text-red-500' : character.tier.wastes === 'R0.5' ? 'text-orange-500' : character.tier.wastes === 'R1' ? 'text-yellow-500' : character.tier.wastes === 'R1.5' ? 'text-yellow-200' : 'text-white'}`}>
                            WHIWA: {character.tier.wastes}
                        </span>

                        {/* New Classification Badge */}
                        {character.profileType && (
                            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest border ${character.profileType === 'Versatile'
                                    ? 'border-green-500 text-green-500'
                                    : 'border-orange-500 text-orange-500'
                                }`}>
                                {character.profileType}
                            </span>
                        )}

                        {/* New Potential Badge */}
                        {character.potential && (
                            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest border border-gray-600 ${character.potential === 'S+' ? 'text-red-500' :
                                    character.potential === 'S' ? 'text-yellow-500' :
                                        character.potential === 'A' ? 'text-purple-400' :
                                            character.potential === 'B' ? 'text-blue-400' :
                                                'text-gray-400'
                                }`}>
                                Potential: {character.potential}
                            </span>
                        )}
                        <div className="ml-auto flex items-center gap-4">
                            {/* Stars Display */}
                            <div className="flex gap-1">
                                {[...Array(character.rarity)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" className={character.rarity === 5 ? 'text-yellow-500' : 'text-purple-500'} />
                                ))}
                            </div>

                            <div className={`flex items-center gap-2 border-l-4 ${character.rarity === 5 ? 'border-yellow-500' : 'border-purple-500'} pl-4`}>
                                <span className="text-xs font-mono text-gray-500 hidden md:inline">//</span>
                                <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white">
                                    {character.name}
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Stats Module */}
                    <div className="bg-[#0a0a0a] border border-gray-800 p-4 md:p-6 mt-auto">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <h3 className="text-white font-black uppercase text-sm tracking-widest flex items-center gap-2">
                                    <span className="w-2 h-2 bg-pink-500"></span>
                                    Stats
                                </h3>
                                <label className="flex items-center gap-2 cursor-pointer group ml-4">
                                    <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${includeMinorFortes ? 'bg-pink-500' : 'bg-gray-700'}`} onClick={() => setIncludeMinorFortes(!includeMinorFortes)}>
                                        <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform ${includeMinorFortes ? 'translate-x-4' : 'translate-x-0'}`}></div>
                                    </div>
                                    <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${includeMinorFortes ? 'text-white' : 'text-gray-500 group-hover:text-gray-400'}`}>
                                        Include minor fortes
                                    </span>
                                </label>
                            </div>
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <span className="text-pink-500 font-black text-sm">Lv. {level}</span>
                                <input
                                    type="range"
                                    min="1"
                                    max="90"
                                    value={level}
                                    onChange={(e) => setLevel(parseInt(e.target.value))}
                                    className="w-full md:w-48 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-pink-500 hover:bg-gray-700 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {(() => {
                                // Calculation Logic
                                const baseHp = character.baseStats?.hp || character.stats.hp / 12.5; // Rough estimate if missing
                                const maxHp = character.stats.hp;
                                // Linear interpolation for now - fits most 'approximate' needs
                                const currentHp = Math.floor(baseHp + (maxHp - baseHp) * ((level - 1) / 89));

                                const baseAtk = character.baseStats?.atk || character.stats.atk / 12.5;
                                const maxAtk = character.stats.atk;
                                const currentAtk = Math.floor(baseAtk + (maxAtk - baseAtk) * ((level - 1) / 89));

                                const baseDef = character.baseStats?.def || character.stats.def / 12.5;
                                const maxDef = character.stats.def;
                                const currentDef = Math.floor(baseDef + (maxDef - baseDef) * ((level - 1) / 89));

                                // Bonuses
                                let bonusAtk = 0;
                                let bonusCritRate = 5; // Base 5%
                                let bonusCritDmg = 150; // Base 150%
                                let bonusElement = 0;
                                let bonusDef = 0; // Added DEF support
                                let bonusHp = 0; // Added HP support

                                if (includeMinorFortes && character.minorFortes) {
                                    character.minorFortes.forEach(f => {
                                        if (f.stat === 'atk') bonusAtk += (f.amount || 0);
                                        if (f.stat === 'critRate') bonusCritRate += (f.amount || 0);
                                        if (f.stat === 'critDmg') bonusCritDmg += (f.amount || 0);
                                        if (f.stat === 'element') bonusElement += (f.amount || 0);
                                        if (f.stat === 'def') bonusDef += (f.amount || 0);
                                        if (f.stat === 'hp') bonusHp += (f.amount || 0);
                                    });
                                }

                                // Apply bonuses (Additive percentage to base)
                                const finalHp = Math.floor(currentHp * (1 + bonusHp / 100));
                                const finalAtk = Math.floor(currentAtk * (1 + bonusAtk / 100));
                                const finalDef = Math.floor(currentDef * (1 + bonusDef / 100));

                                return (
                                    <>
                                        <div className="bg-[#0f0f0f] border border-gray-800 p-3 text-center group hover:border-gray-600 transition-colors">
                                            <span className="text-gray-500 text-[10px] uppercase tracking-widest block mb-1">HP</span>
                                            <span className="text-white font-mono font-bold text-lg">{finalHp}</span>
                                        </div>
                                        <div className="bg-[#0f0f0f] border border-gray-800 p-3 text-center group hover:border-gray-600 transition-colors">
                                            <span className="text-gray-500 text-[10px] uppercase tracking-widest block mb-1">ATK</span>
                                            <span className="text-white font-mono font-bold text-lg">{finalAtk}</span>
                                        </div>
                                        <div className="bg-[#0f0f0f] border border-gray-800 p-3 text-center group hover:border-gray-600 transition-colors">
                                            <span className="text-gray-500 text-[10px] uppercase tracking-widest block mb-1">DEF</span>
                                            <span className="text-white font-mono font-bold text-lg">{finalDef}</span>
                                        </div>
                                        <div className="bg-[#0f0f0f] border border-gray-800 p-3 text-center group hover:border-gray-600 transition-colors">
                                            <span className="text-gray-500 text-[10px] uppercase tracking-widest block mb-1">Max Energy</span>
                                            <span className="text-white font-mono font-bold text-lg">{character.maxEnergy || 'N/A'}</span>
                                        </div>
                                        <div className="bg-[#0f0f0f] border border-gray-800 p-3 text-center group hover:border-gray-600 transition-colors">
                                            <span className="text-gray-500 text-[10px] uppercase tracking-widest block mb-1">Crit Rate</span>
                                            <span className="text-white font-mono font-bold text-lg">{bonusCritRate}%</span>
                                        </div>
                                        <div className="bg-[#0f0f0f] border border-gray-800 p-3 text-center group hover:border-gray-600 transition-colors">
                                            <span className="text-gray-500 text-[10px] uppercase tracking-widest block mb-1">Crit DMG</span>
                                            <span className="text-white font-mono font-bold text-lg">{bonusCritDmg}%</span>
                                        </div>
                                        <div className="bg-[#0f0f0f] border border-gray-800 p-3 text-center group hover:border-gray-600 transition-colors">
                                            <span className="text-gray-500 text-[10px] uppercase tracking-widest block mb-1">Healing Bonus</span>
                                            <span className="text-white font-mono font-bold text-lg">0%</span>
                                        </div>
                                        <div className="bg-[#0f0f0f] border border-gray-800 p-3 text-center group hover:border-gray-600 transition-colors">
                                            <span className="text-pink-500 text-[10px] uppercase tracking-widest block mb-1">{character.element} DMG</span>
                                            <span className="text-white font-mono font-bold text-lg">{bonusElement}%</span>
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
