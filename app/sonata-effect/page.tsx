import React from 'react';
import Navbar from '../../components/common/Navbar';
import SonataGallery from '../../components/library/SonataGallery';
import { Sparkles } from 'lucide-react';

export default function SonataEffectPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a]">


            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8 border-b border-gray-800 pb-6">
                    <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <Sparkles size={32} className="text-blue-500" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black text-white uppercase tracking-tighter mb-1">Sonata Effects</h1>
                        <p className="text-gray-500 font-mono text-sm">Set Bonuses & Effects Database</p>
                    </div>
                </div>

                <SonataGallery />
            </div>
        </main>
    );
}
