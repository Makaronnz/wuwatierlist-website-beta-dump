"use client";

import { useState } from 'react';
import { Character } from '../lib/characters';
import Link from 'next/link';
import Header from './guide/Header';
import Sidebar from './guide/Sidebar';
import AnalysisTab from './guide/tabs/AnalysisTab';
import SkillsTab from './guide/tabs/SkillsTab';
import BuildsTab from './guide/tabs/BuildsTab';
import DataTab from './guide/tabs/DataTab';
import MaterialsTab from './guide/tabs/MaterialsTab';

interface CharacterGuideProps {
    character: Character;
}

export default function CharacterGuide({ character }: CharacterGuideProps) {
    const [activeTab, setActiveTab] = useState<'analysis' | 'skills' | 'builds' | 'data' | 'materials'>('analysis');

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-white selection:text-black">
            {/* Navigation Bar - Brutalist */}
            <nav className="border-b border-gray-800 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-4 h-auto min-h-16 py-4 flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <Link href="/tier-list" className="flex items-center gap-2 hover:bg-white hover:text-black px-6 py-2 transition-colors uppercase tracking-widest text-xs font-bold border border-gray-800 w-fit">
                            <span>← BACK_TO_TIER_LIST</span>
                        </Link>
                        <Link href="/characters" className="flex items-center gap-2 hover:bg-white hover:text-black px-6 py-2 transition-colors uppercase tracking-widest text-xs font-bold border border-gray-800 w-fit">
                            <span>← BACK_TO_RESONATORS</span>
                        </Link>
                    </div>

                </div>
            </nav>

            {/* Header Section - Sharp & Technical */}
            <Header character={character} />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 border-x border-gray-800 min-h-screen">

                {/* Sidebar Navigation */}
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Content Area */}
                <div className="lg:col-span-10 bg-[#0a0a0a]">

                    {/* ANALYSIS TAB */}
                    {activeTab === 'analysis' && <AnalysisTab character={character} />}

                    {/* SKILLS TAB */}
                    {activeTab === 'skills' && <SkillsTab character={character} />}

                    {/* BUILDS TAB */}
                    {activeTab === 'builds' && <BuildsTab character={character} />}

                    {/* DATA TAB */}
                    {activeTab === 'data' && <DataTab character={character} />}

                    {/* MATERIALS TAB */}
                    {activeTab === 'materials' && <MaterialsTab character={character} />}

                </div>
            </main >
        </div >
    );
}
