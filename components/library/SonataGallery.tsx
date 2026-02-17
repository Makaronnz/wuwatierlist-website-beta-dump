"use client";

import React, { useState } from 'react';
import { sonataEffects } from '../../lib/sonata';
import { Search, Filter } from 'lucide-react';

export default function SonataGallery() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Hardcoded mapping of Categories to Sets (mirrors EchoGallery logic)
    const categoryMap: { name: string; sets: string[] }[] = [
        { name: 'Aero', sets: ["Sierra Gale", "Gusts of Welkin", "Windward Pilgrimage"] },
        { name: 'Fusion', sets: ["Molten Rift", "Flaming Clawprint", "Flamewing's Shadow"] },
        { name: 'Electro', sets: ["Void Thunder"] },
        { name: 'Glacio', sets: ["Freezing Frost", "Frosty Resolve"] },
        { name: 'Havoc', sets: ["Havoc Eclipse", "Midnight Veil", "Thread of Severed Fate"] },
        { name: 'Spectro', sets: ["Celestial Light", "Eternal Radiance", "Rite of Gilded Revelation", "Pact of Neonlight Leap"] },
        { name: 'Heal', sets: ["Rejuvenating Glow", "Halo of Starry Radiance"] },
        { name: 'More', sets: ["Moonlit Clouds", "Lingering Tunes", "Tidebreaking Courage", "Crown of Valor", "Dream of the Lost", "Law of Harmony", "Empyrean Anthem"] },
    ];

    const filteredEffects = sonataEffects.filter(effect => {
        const matchesSearch = effect.name.toLowerCase().includes(searchTerm.toLowerCase());

        let matchesCategory = true;
        if (selectedCategory) {
            const categoryObj = categoryMap.find(c => c.name === selectedCategory);
            if (categoryObj) {
                matchesCategory = categoryObj.sets.includes(effect.name);
            }
        }

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-8">
            {/* Search and Toggle */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search Sonata Effect..."
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
                        {/* Category Filter */}
                        <div className="flex flex-col gap-3">
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Category</span>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className={`px-4 py-2 text-sm font-bold uppercase tracking-wider border transition-all rounded ${selectedCategory === null ? 'bg-blue-500 text-white border-blue-500' : 'bg-transparent border-gray-800 text-gray-500 hover:border-gray-600'}`}
                                >
                                    All
                                </button>
                                {categoryMap.map(category => (
                                    <button
                                        key={category.name}
                                        onClick={() => setSelectedCategory(category.name)}
                                        className={`px-4 py-2 text-sm font-bold uppercase tracking-wider border transition-all rounded ${selectedCategory === category.name ?
                                            // Active State Styles matching category colors
                                            category.name === 'Aero' ? 'bg-teal-500/20 border-teal-500 text-teal-400' :
                                                category.name === 'Fusion' ? 'bg-orange-500/20 border-orange-500 text-orange-400' :
                                                    category.name === 'Electro' ? 'bg-purple-500/20 border-purple-500 text-purple-400' :
                                                        category.name === 'Glacio' ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' :
                                                            category.name === 'Havoc' ? 'bg-rose-900/40 border-rose-900 text-rose-400' :
                                                                category.name === 'Spectro' ? 'bg-yellow-500/20 border-yellow-500 text-yellow-400' :
                                                                    category.name === 'Heal' ? 'bg-green-500/20 border-green-500 text-green-400' :
                                                                        'bg-gray-700 text-white border-gray-500' // More/Default
                                            :
                                            // Inactive State
                                            'bg-transparent border-gray-800 text-gray-500 hover:border-gray-600'
                                            }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEffects.map((effect, idx) => (
                    <div key={idx} className="bg-[#0f0f0f] border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                        <div className="flex items-center gap-4 mb-4 border-b border-gray-800 pb-4">
                            <div className="w-16 h-16 bg-gray-900 rounded p-2 flex items-center justify-center">
                                <img
                                    src={effect.image}
                                    alt={effect.name}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/100x100?text=?';
                                    }}
                                />
                            </div>
                            <h3 className="font-bold text-gray-100 text-lg">{effect.name}</h3>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">2-PC Bonus</span>
                                <p className="text-sm text-gray-300">{effect.twoPiece}</p>
                            </div>
                            <div>
                                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">Full Set Bonus</span>
                                <p className="text-sm text-gray-300">{effect.fivePiece}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredEffects.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    <p className="text-lg">No Sonata Effects found matching your criteria.</p>
                </div>
            )}
        </div>
    );
}
