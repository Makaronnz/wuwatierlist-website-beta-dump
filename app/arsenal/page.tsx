"use client";


import WeaponGallery from '../../components/library/WeaponGallery';

export default function ArsenalPage() {
    return (
        <main className="min-h-screen bg-black text-gray-100 selection:bg-yellow-500/30">


            <div className="max-w-[90rem] mx-auto p-6 md:p-12 animate-in fade-in duration-700">
                {/* Header */}
                <div className="mb-12 border-b border-gray-800 pb-6 flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-2">
                            <span className="text-gray-600">Tactical</span> <span className="text-yellow-500">Arsenal</span>
                        </h1>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest pl-1">
                            Weapon Database // Patch 2.0
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-mono text-gray-600 uppercase">Last Updated</p>
                        <p className="text-sm font-mono text-gray-400">2026.01.15</p>
                    </div>
                </div>

                <WeaponGallery />
            </div>
        </main>
    );
}
