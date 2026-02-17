"use client";

import React, { useState } from 'react';
import { weapons, Weapon } from '../../lib/weapons';
import { Star, Sword, Shield, Zap, Search, Filter } from 'lucide-react';

export default function WeaponGallery() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [selectedRarity, setSelectedRarity] = useState<number | null>(null);

    const filteredWeapons = weapons.filter(w => {
        const matchesSearch = w.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType ? w.type === selectedType : true;
        const matchesRarity = selectedRarity ? w.rarity === selectedRarity : true;
        return matchesSearch && matchesType && matchesRarity;
    });

    const categories = ["Sword", "Broadblade", "Gauntlets", "Pistols", "Rectifier"];
    const rarities = [5, 4, 3, 2, 1];

    const WeaponImages: Record<string, string> = {
        Sword: "/images/else/swords.png",
        Broadblade: "/images/else/broadblades.png",
        Gauntlets: "/images/else/gauntlets.png",
        Pistols: "/images/else/pistols.png",
        Rectifier: "/images/else/rectifiers.png",
    };

    return (
        <div className="space-y-8">
            {/* Filters */}
            <div className="flex flex-col gap-4 bg-[#0a0a0a] border border-gray-800 p-6 rounded-lg">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search Weapon..."
                        className="w-full bg-[#0f0f0f] border border-gray-800 text-gray-200 pl-10 pr-4 py-3 rounded focus:outline-none focus:border-yellow-500 transition-colors"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                    {/* Types */}
                    <div className="flex gap-2 flex-wrap items-center">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mr-2 py-1">Type:</span>
                        <button
                            onClick={() => setSelectedType(null)}
                            className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border transition-colors rounded ${selectedType === null ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}
                        >
                            All
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedType(cat)}
                                className={`px-2 py-1 text-xs font-bold uppercase tracking-wider border transition-colors rounded flex items-center gap-2 ${selectedType === cat ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}
                            >
                                <img src={WeaponImages[cat]} alt={cat} className={`w-6 h-6 object-contain invert transition-opacity ${selectedType === cat ? 'opacity-100' : 'opacity-50'}`} />
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Rarity */}
                    <div className="flex gap-2 flex-wrap items-center">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mr-2 py-1">Rarity:</span>
                        <button
                            onClick={() => setSelectedRarity(null)}
                            className={`px-3 py-1 text-xs font-bold uppercase tracking-wider border transition-colors rounded ${selectedRarity === null ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}
                        >
                            All
                        </button>
                        {rarities.map(rarity => (
                            <button
                                key={rarity}
                                onClick={() => setSelectedRarity(rarity)}
                                className={`px-3 py-1 text-xs font-bold uppercase tracking-wider border transition-colors rounded flex items-center gap-1 ${selectedRarity === rarity ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}
                            >
                                {rarity} <Star size={10} fill="currentColor" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredWeapons.map((weapon, idx) => (
                    <div key={idx} className="relative group h-56">
                        {/* Base Card (Visible by default) */}
                        <div className="bg-[#0f0f0f] border border-gray-800 transition-colors flex h-full overflow-hidden absolute inset-0 z-0 pointer-events-none group-hover:border-yellow-500/50">
                            {/* Image Section */}
                            <div className="w-1/3 bg-gray-900 overflow-hidden relative border-r border-gray-800">
                                <div className={`absolute inset-0 opacity-20 ${weapon.rarity === 5 ? 'bg-yellow-500' : weapon.rarity === 4 ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
                                <img
                                    src={weapon.image}
                                    alt={weapon.name}
                                    className="w-full h-full object-contain relative z-10 p-2 group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/200x200?text=?';
                                    }}
                                />
                            </div>

                            {/* Info Section */}
                            <div className="w-2/3 p-5 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-gray-100 text-lg leading-tight group-hover:text-yellow-500 transition-colors truncate">{weapon.name}</h3>
                                        <div className="flex text-yellow-500 shrink-0 ml-2">
                                            {[...Array(weapon.rarity)].map((_, i) => (
                                                <Star key={i} size={12} fill="currentColor" />
                                            ))}
                                        </div>
                                    </div>
                                    <span className="text-xs uppercase tracking-widest text-gray-500 font-mono mb-3 block">{weapon.type}</span>

                                    <p className="text-xs text-gray-400 leading-relaxed overflow-y-auto max-h-12 md:max-h-none md:line-clamp-4 scrollbar-thin scrollbar-thumb-gray-700">
                                        {weapon.description}
                                    </p>
                                </div>

                                <div className="flex gap-6 border-t border-gray-800 pt-4 mt-2">
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Base ATK</p>
                                        <p className="font-mono text-base font-bold text-white">{weapon.baseAtk}</p>
                                    </div>
                                    {weapon.subStat && (
                                        <div>
                                            <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">{weapon.subStat.label}</p>
                                            <p className="font-mono text-base font-bold text-yellow-500">{weapon.subStat.value}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* EXPANDED HOVER CARD */}
                        <div className="absolute top-[-20px] left-[-20px] right-[-20px] bottom-[-20px] z-[50] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto">
                            <div className="w-full h-full min-h-[340px] bg-[#0a0a0a] border border-yellow-500/50 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative">
                                {/* Large Background Glow */}
                                <div className={`absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none ${weapon.rarity === 5 ? 'bg-yellow-500' : weapon.rarity === 4 ? 'bg-purple-500' : 'bg-blue-500'
                                    }`}></div>

                                {/* Header with Image */}
                                <div className="flex h-32 relative bg-gray-900/50 border-b border-gray-800 shrink-0">
                                    <div className="w-32 bg-gray-900 border-r border-gray-800 relative shrink-0">
                                        <div className={`absolute inset-0 opacity-20 ${weapon.rarity === 5 ? 'bg-yellow-500' : weapon.rarity === 4 ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
                                        <img src={weapon.image} alt={weapon.name} className="w-full h-full object-contain p-2 relative z-10" />
                                    </div>
                                    <div className="p-4 flex flex-col justify-center relative z-10">
                                        <h3 className="font-black text-white text-xl uppercase tracking-tight leading-none mb-2">{weapon.name}</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="flex text-yellow-500">
                                                {[...Array(weapon.rarity)].map((_, i) => (
                                                    <Star key={i} size={14} fill="currentColor" />
                                                ))}
                                            </div>
                                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider border border-gray-800 px-2 py-0.5 rounded bg-gray-900">{weapon.type}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Scrollable Description Body */}
                                <div className="p-5 overflow-y-auto flex-grow relative z-10 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-700/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-yellow-500/50">
                                    <p className="text-sm text-gray-300 leading-relaxed font-sans">
                                        {weapon.description}
                                    </p>
                                </div>

                                {/* Footer Stats */}
                                <div className="p-4 bg-gray-900/30 border-t border-gray-800 shrink-0 flex items-center gap-6">
                                    <div>
                                        <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Base ATK</span>
                                        <span className="text-sm font-bold text-white font-mono">{weapon.baseAtk}</span>
                                    </div>
                                    {weapon.subStat && (
                                        <div>
                                            <span className="text-[10px] text-gray-500 uppercase tracking-wider block">{weapon.subStat.label}</span>
                                            <span className="text-sm font-bold text-yellow-500 font-mono">{weapon.subStat.value}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
