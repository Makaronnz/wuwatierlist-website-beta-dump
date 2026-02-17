"use client";

import React, { useState } from 'react';
import { echoes, setIcons, Echo } from '../../lib/echoes';
import { Search, Filter, Disc } from 'lucide-react';

export default function EchoGallery() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCost, setSelectedCost] = useState<number | null>(null);
    const [selectedSet, setSelectedSet] = useState<string | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Class priority for sorting (higher = rarer)
    const classOrder: Record<string, number> = {
        'Calamity': 4,
        'Overlord': 3,
        'Elite': 2,
        'Common': 1
    };

    const filteredEchoes = echoes.filter((e: Echo) => {
        const matchesSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCost = selectedCost ? e.cost === selectedCost : true;
        const matchesSet = selectedSet ? e.sets.includes(selectedSet) : true;
        return matchesSearch && matchesCost && matchesSet;
    }).sort((a: Echo, b: Echo) => {
        // Sort by class rarity (Calamity > Overlord > Elite > Common)
        const classCompare = (classOrder[b.class] || 0) - (classOrder[a.class] || 0);
        if (classCompare !== 0) return classCompare;
        // Then by cost (4 > 3 > 1)
        return b.cost - a.cost;
    });

    const costs = [4, 3, 1];

    // Sets are now hardcoded in the filter view for categorization


    return (
        <div className="space-y-8">
            {/* Search and Toggle */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search Echo..."
                        className="w-full bg-[#0f0f0f] border border-gray-800 text-gray-200 pl-10 pr-4 py-3 rounded focus:outline-none focus:border-blue-500 transition-colors"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className={`flex items-center justify-center gap-2 px-6 py-3 rounded border transition-colors ${isFilterOpen ? 'bg-blue-500/10 border-blue-500 text-blue-400' : 'bg-[#0f0f0f] border-gray-800 text-gray-400 hover:border-gray-600'}`}
                >
                    <Filter size={18} />
                    <span>Filters</span>
                </button>
            </div>

            {/* Collapsible Filters */}
            <div className={`grid transition-all duration-300 ease-in-out ${isFilterOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="flex flex-col gap-6 bg-[#0a0a0a] border border-gray-800 p-6 rounded-lg">
                        {/* Cost Filter */}
                        <div className="flex flex-col gap-3">
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Cost</span>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setSelectedCost(null)}
                                    className={`px-4 py-2 text-sm font-bold uppercase tracking-wider border transition-all rounded ${selectedCost === null ? 'bg-blue-500 text-white border-blue-500' : 'bg-transparent border-gray-800 text-gray-500 hover:border-gray-600'}`}
                                >
                                    All
                                </button>
                                {costs.map(cost => (
                                    <button
                                        key={cost}
                                        onClick={() => setSelectedCost(cost)}
                                        className={`px-4 py-2 text-sm font-bold uppercase tracking-wider border transition-all rounded ${selectedCost === cost ? 'bg-blue-500 text-white border-blue-500' : 'bg-transparent border-gray-800 text-gray-500 hover:border-gray-600'}`}
                                    >
                                        {cost}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Set Filter */}
                        <div className="flex flex-col gap-3">
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Sonata Effect</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 gap-6">
                                {[
                                    { name: 'Aero', sets: ["Sierra Gale", "Gusts of Welkin", "Windward Pilgrimage"] },
                                    { name: 'Fusion', sets: ["Molten Rift", "Flaming Clawprint", "Flamewing's Shadow"] },
                                    { name: 'Electro', sets: ["Void Thunder"] },
                                    { name: 'Glacio', sets: ["Freezing Frost", "Frosty Resolve"] },
                                    { name: 'Havoc', sets: ["Havoc Eclipse", "Midnight Veil", "Thread of Severed Fate"] },
                                    { name: 'Spectro', sets: ["Celestial Light", "Eternal Radiance", "Rite of Gilded Revelation", "Pact of Neonlight Leap"] },
                                    { name: 'Heal', sets: ["Rejuvenating Glow", "Halo of Starry Radiance"] },
                                    { name: 'More', sets: ["Moonlit Clouds", "Lingering Tunes", "Tidebreaking Courage", "Crown of Valor", "Dream of the Lost", "Law of Harmony", "Empyrean Anthem"] },
                                ].map((category) => (
                                    <div key={category.name} className="flex flex-col gap-2">
                                        <h4 className={`text-xs font-bold uppercase tracking-wider mb-1 border-b border-gray-800 pb-1 ${category.name === 'Aero' ? 'text-teal-400' :
                                            category.name === 'Fusion' ? 'text-orange-400' :
                                                category.name === 'Electro' ? 'text-purple-400' :
                                                    category.name === 'Glacio' ? 'text-cyan-400' :
                                                        category.name === 'Havoc' ? 'text-rose-900' : // Dark pink/red for Havoc
                                                            category.name === 'Spectro' ? 'text-yellow-400' :
                                                                category.name === 'Heal' ? 'text-green-400' :
                                                                    'text-gray-400'
                                            }`}>
                                            {category.name}
                                        </h4>
                                        <div className="flex flex-col gap-1">
                                            {category.sets.map(set => (
                                                <button
                                                    key={set}
                                                    onClick={() => setSelectedSet(selectedSet === set ? null : set)}
                                                    className={`px-2 py-1.5 text-[10px] text-left font-bold uppercase tracking-wider border transition-all rounded flex items-center gap-2 ${selectedSet === set ? 'bg-blue-500 text-white border-blue-500' : 'bg-transparent border-gray-800 text-gray-400 hover:border-gray-600 hover:text-gray-200'}`}
                                                    title={set}
                                                >
                                                    {setIcons[set] ? (
                                                        <img
                                                            src={setIcons[set]}
                                                            alt={set}
                                                            className={`w-4 h-4 object-contain ${selectedSet === set ? 'brightness-0 invert' : 'opacity-60'}`}
                                                        />
                                                    ) : (
                                                        <Disc size={16} className={selectedSet === set ? 'text-white' : 'text-gray-600'} />
                                                    )}
                                                    <span className="truncate">{set}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="flex justify-between items-end mb-4 border-b border-gray-800 pb-2">
                <p className="text-sm text-gray-500 font-mono uppercase tracking-wider">
                    Showing <span className="text-blue-500 font-bold">{filteredEchoes.length}</span> Echoes
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredEchoes.map((echo: Echo, idx: number) => (
                    <div key={idx} className="relative group h-64">
                        {/* Placeholder/Base Card (Visible when not hovering/loading) */}
                        {/* We modify the base card to NOT have overflow-hidden on the parent so the popup can escape */}
                        <div className="bg-[#0f0f0f] border border-gray-800 transition-colors flex h-full overflow-hidden absolute inset-0 z-0">
                            {/* Image Section */}
                            <div className="w-1/3 bg-gray-900 relative border-r border-gray-800">
                                <div className={`absolute inset-0 opacity-20 ${echo.class === 'Calamity' ? 'bg-red-500' : echo.class === 'Overlord' ? 'bg-purple-500' : echo.class === 'Elite' ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
                                <img
                                    src={echo.image}
                                    alt={echo.name}
                                    className="w-full h-full object-contain relative z-10 p-2 transition-all duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/200x200?text=?';
                                    }}
                                />
                                <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-mono border border-gray-700 text-gray-300 z-20">
                                    COST {echo.cost}
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="w-2/3 p-5 flex flex-col relative">
                                <div className="mb-auto">
                                    <h3 className="font-bold text-gray-100 text-lg leading-tight mb-1 truncate">{echo.name}</h3>
                                    <span className={`text-[10px] uppercase tracking-widest font-mono mb-3 block ${echo.class === 'Calamity' ? 'text-red-400' : echo.class === 'Overlord' ? 'text-purple-400' : echo.class === 'Elite' ? 'text-blue-400' : 'text-gray-400'}`}>
                                        {echo.class} CLASS
                                    </span>
                                    <p className="text-xs text-gray-500 leading-relaxed overflow-y-auto max-h-12 md:max-h-none md:line-clamp-3 scrollbar-thin scrollbar-thumb-gray-700">
                                        {echo.description}
                                    </p>
                                </div>
                                {/* Base Card Sets Display - Ensured Visibility */}
                                <div className="mt-auto pt-4 border-t border-gray-800">
                                    <div className="flex flex-wrap gap-2">
                                        {echo.sets.map((set: string, i: number) => (
                                            <div key={i} className="flex items-center gap-1.5 bg-gray-900 border border-gray-800 rounded px-2 py-1" title={set}>
                                                <img src={setIcons[set]} alt={set} className="w-4 h-4 object-contain" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* EXPANDED HOVER CARD (The "Big Box") */}
                        {/* Positioned absolutely to cover the card and expand beyond it. scale-100 on hover. */}
                        <div className="absolute top-[-20px] left-[-20px] right-[-20px] bottom-[-20px] z-[50] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto">
                            <div className="w-full h-full min-h-[340px] bg-[#0a0a0a] border border-blue-500/50 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative">
                                {/* Large Background Glow */}
                                <div className={`absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none ${echo.class === 'Calamity' ? 'bg-red-500' : echo.class === 'Overlord' ? 'bg-purple-500' : echo.class === 'Elite' ? 'bg-blue-500' : 'bg-gray-500'}`}></div>

                                {/* Header with Image */}
                                <div className="flex h-32 relative bg-gray-900/50 border-b border-gray-800 shrink-0">
                                    <div className="w-32 bg-gray-900 border-r border-gray-800 relative shrink-0">
                                        <div className={`absolute inset-0 opacity-20 ${echo.class === 'Calamity' ? 'bg-red-500' : echo.class === 'Overlord' ? 'bg-purple-500' : echo.class === 'Elite' ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
                                        <img src={echo.image} alt={echo.name} className="w-full h-full object-contain p-2 relative z-10" />
                                    </div>
                                    <div className="p-4 flex flex-col justify-center relative z-10">
                                        <h3 className="font-black text-white text-xl uppercase tracking-tight leading-none mb-2">{echo.name}</h3>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border ${echo.class === 'Calamity' ? 'border-red-500/30 text-red-400 bg-red-500/10' :
                                                echo.class === 'Overlord' ? 'border-purple-500/30 text-purple-400 bg-purple-500/10' :
                                                    echo.class === 'Elite' ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' :
                                                        'border-gray-500/30 text-gray-400 bg-gray-500/10'
                                                }`}>
                                                {echo.class}
                                            </span>
                                            <span className="text-[10px] font-mono text-gray-500">COST {echo.cost}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Scrollable Description Body with Custom Scrollbar */}
                                <div className="p-5 overflow-y-auto flex-grow relative z-10 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-700/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-blue-500/50">
                                    <p className="text-sm text-gray-300 leading-relaxed font-sans">
                                        {echo.description}
                                    </p>
                                </div>

                                {/* Footer Sets */}
                                <div className="p-4 bg-gray-900/30 border-t border-gray-800 shrink-0 flex items-center gap-3">
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">Sonata Effects</span>
                                    <div className="flex gap-2">
                                        {echo.sets.map((set: string, i: number) => (
                                            <div key={i} className="flex items-center gap-1.5 bg-gray-900 border border-gray-800 rounded px-2 py-1" title={set}>
                                                <img src={setIcons[set]} alt={set} className="w-3 h-3 object-contain" />
                                                <span className="text-[10px] text-gray-400 font-bold truncate max-w-[100px]">{set}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
