'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { characters, ElementImages } from '@/lib/characters';
import {
    X, Terminal, Filter, Search
} from 'lucide-react';

const WeaponImages: Record<string, string> = {
    Sword: "/images/else/swords.png",
    Broadblade: "/images/else/broadblades.png",
    Pistols: "/images/else/pistols.png",
    Gauntlets: "/images/else/gauntlets.png",
    Rectifier: "/images/else/rectifiers.png",
};


export default function CharactersPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRarities, setSelectedRarities] = useState<number[]>([]);
    const [selectedElements, setSelectedElements] = useState<string[]>([]);
    const [selectedWeapons, setSelectedWeapons] = useState<string[]>([]);

    const toggleSelection = <T,>(item: T, list: T[], setList: (l: T[]) => void) => {
        if (list.includes(item)) setList(list.filter(i => i !== item));
        else setList([...list, item]);
    };

    const resetFilters = () => {
        setSearchQuery('');
        setSelectedRarities([]);
        setSelectedElements([]);
        setSelectedWeapons([]);
    };

    const filteredCharacters = useMemo(() => {
        const sortedChars = [...characters].sort((a, b) => a.name.localeCompare(b.name));
        return sortedChars.filter(char => {
            if (char.id.includes("-hybrid")) return false; // Prevent duplicates in list view

            const matchesSearch = char.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesRarity = selectedRarities.length === 0 || selectedRarities.includes(char.rarity);
            const matchesElement = selectedElements.length === 0 || selectedElements.includes(char.element);
            const matchesWeapon = selectedWeapons.length === 0 || selectedWeapons.includes(char.weaponType);
            return matchesSearch && matchesRarity && matchesElement && matchesWeapon;
        });
    }, [searchQuery, selectedRarities, selectedElements, selectedWeapons]);


    return (
        <main className="min-h-screen p-6 md:p-12 font-sans text-gray-100 selection:bg-white selection:text-black">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-8 flex justify-between items-end border-b border-gray-800 pb-4">
                <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-2 opacity-60">
                        <Terminal size={12} />
                        <span>DATABASE_ACCESS</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                        Resonators
                    </h1>
                </div>
                <div className="text-right">
                    <span className="text-xs font-mono text-gray-500 uppercase">
                        Records Found: <span className="text-white">{filteredCharacters.length}</span>
                    </span>
                </div>
            </div>

            {/* Filter Toolbar */}
            <div className="max-w-7xl mx-auto mb-12 border border-gray-800 bg-[#0a0a0a] p-1">
                <div className="flex flex-wrap items-stretch gap-1">

                    {/* Search */}
                    <div className="flex-1 min-w-[200px] flex items-center bg-[#111] border border-gray-800 px-4 h-12">
                        <input
                            type="text"
                            placeholder="SEARCH_ID..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent border-none outline-none text-white w-full text-xs font-mono uppercase tracking-wider placeholder:text-gray-700"
                        />
                        {searchQuery && (
                            <button onClick={() => setSearchQuery('')} className="text-gray-500 hover:text-white">
                                <X size={14} />
                            </button>
                        )}
                    </div>

                    {/* Rarity */}
                    <div className="flex items-center bg-[#111] border border-gray-800 px-2 h-12">
                        <span className="text-[10px] font-mono text-gray-600 mr-2 uppercase hidden md:inline">Rank</span>
                        {[5, 4].map(star => (
                            <button
                                key={star}
                                onClick={() => toggleSelection(star, selectedRarities, setSelectedRarities)}
                                className={`w-8 h-8 flex items-center justify-center text-xs font-bold border ml-1 transition-all ${selectedRarities.includes(star)
                                    ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500'
                                    : 'border-gray-800 text-gray-600 hover:border-gray-600'
                                    }`}
                            >
                                {star}★
                            </button>
                        ))}
                    </div>

                    {/* Elements */}
                    <div className="flex items-center bg-[#111] border border-gray-800 px-2 h-12 overflow-x-auto">
                        <span className="text-[10px] font-mono text-gray-600 mr-2 uppercase hidden md:inline">ATTR</span>
                        {Object.keys(ElementImages).map(elem => {
                            return (
                                <button
                                    key={elem}
                                    onClick={() => toggleSelection(elem, selectedElements, setSelectedElements)}
                                    className={`w-8 h-8 flex items-center justify-center ml-1 border transition-all ${selectedElements.includes(elem)
                                        ? 'border-white bg-white'
                                        : 'border-gray-800 hover:border-gray-600'
                                        }`}
                                    title={elem}
                                >
                                    <img
                                        src={ElementImages[elem as keyof typeof ElementImages]}
                                        alt={elem}
                                        className={`w-5 h-5 object-contain ${selectedElements.includes(elem) ? 'brightness-0 contrast-200' : 'opacity-70 hover:opacity-100'}`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Weapons */}
                    <div className="flex items-center bg-[#111] border border-gray-800 px-2 h-12 overflow-x-auto">
                        <span className="text-[10px] font-mono text-gray-600 mr-2 uppercase hidden md:inline">TYPE</span>
                        {Object.keys(WeaponImages).map(weapon => (
                            <button
                                key={weapon}
                                onClick={() => toggleSelection(weapon, selectedWeapons, setSelectedWeapons)}
                                className={`w-8 h-8 flex items-center justify-center ml-1 border transition-all ${selectedWeapons.includes(weapon)
                                    ? 'border-white bg-white'
                                    : 'border-gray-800 hover:border-gray-600'
                                    }`}
                                title={weapon}
                            >
                                <img
                                    src={WeaponImages[weapon]}
                                    alt={weapon}
                                    className={`w-4 h-4 object-contain invert transition-opacity ${selectedWeapons.includes(weapon) ? 'opacity-100 filter-none brightness-0' : 'opacity-50'}`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Active Filters Bar */}
                {(selectedRarities.length > 0 || selectedElements.length > 0 || selectedWeapons.length > 0) && (
                    <div className="mt-1 flex justify-between items-center bg-red-900/10 border border-red-900/30 px-4 py-2">
                        <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest flex items-center gap-2">
                            <Filter size={10} /> Active Filters
                        </span>
                        <button onClick={resetFilters} className="text-[10px] font-mono text-red-400 hover:text-white uppercase tracking-widest border-b border-transparent hover:border-white transition-colors">
                            Clear _ALL
                        </button>
                    </div>
                )}
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {filteredCharacters.map(char => (
                    <Link
                        key={char.id}
                        href={`/character/${char.id}`}
                        className="group relative block bg-[#0a0a0a] border border-gray-800 hover:border-gray-500 transition-all duration-300"
                    >
                        {/* Portrait */}
                        <div className="aspect-[9/16] relative overflow-hidden bg-[#111]">
                            {char.imageCard ? (
                                <img
                                    src={char.imageCard}
                                    alt={char.name}
                                    className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 scale-100 group-hover:scale-105"
                                />
                            ) : char.imagePortrait ? (
                                <img
                                    src={char.imagePortrait}
                                    alt={char.name}
                                    className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-500"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-4xl text-gray-800 font-black">
                                    {char.name[0]}
                                </div>
                            )}

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

                            {/* Top Stats */}
                            <div className="absolute top-2 right-2 flex gap-1 z-10">
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <img
                                        src={ElementImages[char.element]}
                                        alt={char.element}
                                        className="w-full h-full object-contain drop-shadow-md"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Name Plate */}
                        <div className="absolute bottom-0 inset-x-0 p-3 border-t border-gray-800 bg-[#0a0a0a] group-hover:bg-[#111] transition-colors">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">{char.role}</span>
                                <div className="flex gap-[1px]">
                                    {Array.from({ length: char.rarity }).map((_, i) => (
                                        <div key={i} className={`w-1 h-1 rounded-full ${char.rarity === 5 ? 'bg-yellow-500' : 'bg-purple-500'}`} />
                                    ))}
                                </div>
                            </div>
                            <h2 className="font-bold text-sm text-gray-300 group-hover:text-white uppercase tracking-tight truncate">
                                {char.name}
                            </h2>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-gray-800 group-hover:border-white transition-colors" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-gray-800 group-hover:border-white transition-colors" />
                    </Link>
                ))}
            </div>

            {filteredCharacters.length === 0 && (
                <div className="text-center py-20 border border-dashed border-gray-800">
                    <p className="font-mono text-gray-600 uppercase">Input parameters yielded no results.</p>
                    <button
                        onClick={resetFilters}
                        className="mt-4 text-xs font-mono text-red-500 hover:text-red-400 uppercase border-b border-red-900"
                    >
                        Initiate Reset Protocol
                    </button>
                </div>
            )}
        </main>
    );
}
