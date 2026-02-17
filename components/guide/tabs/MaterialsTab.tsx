/* eslint-disable @next/next/no-img-element */
import { Character } from '../../../lib/characters';

interface MaterialsTabProps {
    character: Character;
}

export default function MaterialsTab({ character }: MaterialsTabProps) {
    return (
        <div className="p-8 md:p-12 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Character Ascension */}
            <section>
                <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-white"></span>
                    Ascension Materials (Lv. 90)
                </h3>
                {character.materials?.ascension ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {character.materials.ascension.map((mat, i) => (
                            <div key={i} className="bg-[#111] border border-gray-800 p-4 flex flex-col items-center justify-center text-center group hover:border-pink-500/50 hover:bg-gray-900 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                                    {mat.icon ? (
                                        <img src={mat.icon} alt={mat.name} className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300" />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-500">{mat.name[0]}</div>
                                    )}
                                </div>
                                <span className="text-lg font-black text-white mb-1 font-mono tracking-tighter">{mat.count.toLocaleString()}</span>
                                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">{mat.name}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-6 border border-dashed border-gray-800 rounded bg-gray-900/20 text-center text-gray-600 font-mono text-sm uppercase">
                        Pending Data
                    </div>
                )}
            </section>

            {/* Ascension Ranks Breakdown - Always Visible */}
            <section>
                <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-white"></span>
                    Ascension Breakdown
                </h3>
                {character.materials?.ascensionRanks && character.materials.ascensionRanks.length > 0 ? (
                    <div className="space-y-4">
                        {character.materials.ascensionRanks.map((rank, i) => (
                            <div key={i} className="bg-[#111] border border-gray-800 p-6 flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-gray-600 transition-colors">
                                <div className="w-full md:w-32 flex-shrink-0 flex md:flex-col items-center justify-between md:justify-center text-center gap-4">
                                    <div>
                                        <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Rank {rank.rank}</span>
                                        <span className="block text-xl font-black text-white">{rank.levelRange}</span>
                                    </div>
                                </div>
                                <div className="hidden md:block w-px h-12 bg-gray-800"></div>
                                <div className="flex-grow grid grid-cols-4 md:flex md:flex-wrap gap-4">
                                    {rank.materials.map((mat, j) => (
                                        <div key={j} className="flex flex-col items-center justify-center gap-2" title={mat.name}>
                                            <div className="w-16 h-16 relative flex items-center justify-center bg-gray-900 border border-gray-800 rounded p-1 group-hover/item:border-gray-500 transition-colors group/tooltip">
                                                {/* Tooltip */}
                                                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 border border-gray-700 text-white text-[10px] font-bold uppercase tracking-wider rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl">
                                                    {mat.name}
                                                </div>
                                                {mat.icon ? (
                                                    <img src={mat.icon} alt={mat.name} className="w-full h-full object-contain" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-gray-500">{mat.name[0]}</div>
                                                )}
                                            </div>
                                            <div className="text-center">
                                                <span className="block text-xs font-bold text-white">{mat.count.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-8 border border-dashed border-gray-800 rounded bg-gray-900/20 text-center flex flex-col items-center justify-center gap-2">
                        <span className="text-gray-700 uppercase font-black tracking-widest text-lg">Detailed Info Unavailable</span>
                        <span className="text-gray-600 text-xs font-mono">Ascension rank breakdown data pending</span>
                    </div>
                )}
            </section>

            {/* Skill Upgrades */}
            <section>
                <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-white"></span>
                    Skill Upgrades (Max)
                </h3>
                {character.materials?.skills ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {character.materials.skills.map((mat, i) => (
                            <div key={i} className="bg-[#111] border border-gray-800 p-4 flex flex-col items-center justify-center text-center group hover:border-pink-500/50 hover:bg-gray-900 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                                    {mat.icon ? (
                                        <img src={mat.icon} alt={mat.name} className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300" />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-500">{mat.name[0]}</div>
                                    )}
                                </div>
                                <span className="text-lg font-black text-white mb-1 font-mono tracking-tighter">{mat.count.toLocaleString()}</span>
                                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">{mat.name}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-6 border border-dashed border-gray-800 rounded bg-gray-900/20 text-center text-gray-600 font-mono text-sm uppercase">
                        Pending Data
                    </div>
                )}
            </section>

            <div className="w-full h-px bg-gray-800 my-12" />

            {/* Weapon Materials - Always Visible */}
            <section>
                {character.materials?.weapon ? (
                    <>
                        <div className="flex items-center gap-6 mb-8">
                            {character.materials.weapon.icon && (
                                <div className="w-20 h-20 bg-[#111] border border-gray-800 p-2 flex items-center justify-center rounded-lg">
                                    <img src={character.materials.weapon.icon} alt={character.materials.weapon.name} className="w-full h-full object-contain" />
                                </div>
                            )}
                            <div>
                                <h3 className="text-xl font-black uppercase flex items-center gap-3">
                                    <span className="w-2 h-2 bg-pink-500"></span>
                                    Weapon Materials: {character.materials.weapon.name || "Signature Weapon"}
                                </h3>
                                <p className="text-gray-400 text-sm mt-1">Total materials for Lv. 90</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
                            {character.materials.weapon.total.map((mat, i) => (
                                <div key={i} className="bg-[#111] border border-gray-800 p-4 flex flex-col items-center justify-center text-center group hover:border-pink-500/50 hover:bg-gray-900 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                                        {mat.icon ? (
                                            <img src={mat.icon} alt={mat.name} className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300" />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-500">{mat.name[0]}</div>
                                        )}
                                    </div>
                                    <span className="text-lg font-black text-white mb-1 font-mono tracking-tighter">{mat.count.toLocaleString()}</span>
                                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">{mat.name}</span>
                                </div>
                            ))}
                        </div>

                        <h4 className="text-sm font-bold uppercase text-gray-500 mb-4 tracking-widest pl-5 border-l-2 border-gray-800">
                            Weapon Ascension Breakdown
                        </h4>
                        <div className="space-y-4">
                            {character.materials.weapon.ascensionRanks.map((rank, i) => (
                                <div key={i} className="bg-[#111] border border-gray-800 p-6 flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-gray-600 transition-colors">
                                    <div className="w-full md:w-32 flex-shrink-0 flex md:flex-col items-center justify-between md:justify-center text-center gap-4">
                                        <div>
                                            <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Rank {rank.rank}</span>
                                            <span className="block text-xl font-black text-white">{rank.levelRange}</span>
                                        </div>
                                    </div>
                                    <div className="hidden md:block w-px h-12 bg-gray-800"></div>
                                    <div className="flex-grow grid grid-cols-4 md:flex md:flex-wrap gap-4">
                                        {rank.materials.map((mat, j) => (
                                            <div key={j} className="flex flex-col items-center justify-center gap-2" title={mat.name}>
                                                <div className="w-16 h-16 relative flex items-center justify-center bg-gray-900 border border-gray-800 rounded p-1 group-hover/item:border-gray-500 transition-colors group/tooltip">
                                                    {/* Tooltip */}
                                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 border border-gray-700 text-white text-[10px] font-bold uppercase tracking-wider rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl">
                                                        {mat.name}
                                                    </div>
                                                    {mat.icon ? (
                                                        <img src={mat.icon} alt={mat.name} className="w-full h-full object-contain" />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-gray-500">{mat.name[0]}</div>
                                                    )}
                                                </div>
                                                <div className="text-center">
                                                    <span className="block text-xs font-bold text-white">{mat.count.toLocaleString()}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="p-8 border border-dashed border-gray-800 rounded bg-gray-900/20 text-center flex flex-col items-center justify-center gap-2">
                        <span className="text-gray-700 uppercase font-black tracking-widest text-lg">Detailed Info Unavailable</span>
                        <span className="text-gray-600 text-xs font-mono">Weapon ascension data pending</span>
                    </div>
                )}
            </section>
        </div>
    );
}

