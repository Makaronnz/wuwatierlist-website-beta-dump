"use client";

import Link from 'next/link';
import { Zap } from 'lucide-react';
import Navbar from '../../components/common/Navbar';

import EchoGallery from '../../components/library/EchoGallery';

export default function EchoesPage() {
    return (
        <main className="min-h-screen bg-black text-gray-100 selection:bg-blue-500/30">
            {/* Navbar is inside component to avoid duplicate */}

            <div className="max-w-[90rem] mx-auto p-6 md:p-12 animate-in fade-in duration-700">
                {/* Header */}
                <div className="mb-12 border-b border-gray-800 pb-6 flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">
                            <span className="text-gray-600">Echo</span> <span className="text-blue-500">Archive</span>
                        </h1>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest pl-1">
                            Echo Database // Patch 2.0
                        </p>
                    </div>

                    <Link
                        href="/sonata-effect"
                        className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all font-mono text-xs uppercase tracking-wider mb-2"
                    >
                        <Zap size={14} />
                        <span>View Sonata Effects</span>
                    </Link>

                    <div className="text-right">
                        <p className="text-xs font-mono text-gray-600 uppercase">Last Updated</p>
                        <p className="text-sm font-mono text-gray-400">2026.01.15</p>
                    </div>
                </div>

                <EchoGallery />
            </div>
        </main>
    );
}
