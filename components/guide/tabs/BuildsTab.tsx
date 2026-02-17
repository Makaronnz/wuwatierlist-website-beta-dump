/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Character } from '../../../lib/characters';
import { weapons } from '../../../lib/weapons';
import { echoes } from '../../../lib/echoes';
import { sonataEffects } from '../../../lib/sonata';

interface BuildsTabProps {
    character: Character;
}

export default function BuildsTab({ character }: BuildsTabProps) {
    return (
        <div className="p-8 md:p-12 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Weapons */}
            <section>
                <h3 className="text-lg font-black uppercase mb-6 border-b border-gray-800 pb-2">Recommended Weapons</h3>
                <div className="grid gap-6">
                    {character.builds.weapons.map((w, i) => (
                        <div key={i} className="relative group h-28">
                            {/* Base Card (Visible by default) */}
                            <div className="absolute inset-0 flex items-start gap-4 border border-gray-800 bg-[#0f0f0f] p-4 group-hover:border-yellow-500/50 transition-colors z-0">
                                {/* Ranking Badge */}
                                <div className={`absolute -top-2 -left-2 w-8 h-8 flex items-center justify-center font-black text-xs border z-20 ${i === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black border-yellow-500' :
                                    i === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-black border-gray-400' :
                                        i === 2 ? 'bg-gradient-to-br from-amber-600 to-amber-800 text-white border-amber-700' :
                                            'bg-gray-800 text-gray-400 border-gray-700'
                                    }`}>
                                    #{i + 1}
                                </div>
                                <div className="w-20 h-20 shrink-0 rounded-lg bg-gray-900 border border-gray-800 overflow-hidden">
                                    <img
                                        src={w.image}
                                        alt={w.name}
                                        className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = '/images/weapons/placeholder.png';
                                        }}
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">{w.rank}</div>
                                        <div className="flex text-yellow-500 text-[10px]">
                                            {Array.from({ length: w.rarity || 5 }).map((_, starIdx) => (
                                                <span key={starIdx}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-white uppercase text-lg mb-1 group-hover:text-yellow-500 transition-colors">{w.name}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed overflow-y-auto max-h-12 md:max-h-none md:line-clamp-2 scrollbar-thin scrollbar-thumb-gray-700">{w.description}</p>
                                </div>
                            </div>

                            {/* EXPANDED HOVER CARD */}
                            <div className="absolute top-[-20px] left-[-20px] right-[-20px] bottom-[-180px] z-[50] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto">
                                <div className="w-full h-full min-h-[350px] bg-[#0a0a0a] border border-yellow-500/50 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden relative">
                                    {/* Large Background Glow */}
                                    <div className={`absolute top-0 right-0 w-[200px] h-[200px] rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none ${(w.rarity || 5) === 5 ? 'bg-yellow-500' : (w.rarity || 5) === 4 ? 'bg-purple-500' : 'bg-blue-500'
                                        }`}></div>

                                    {/* Header with Image */}
                                    <div className="flex h-24 relative bg-gray-900/50 border-b border-gray-800 shrink-0">
                                        <div className="w-24 bg-gray-900 border-r border-gray-800 relative shrink-0">
                                            <div className={`absolute inset-0 opacity-20 ${(w.rarity || 5) === 5 ? 'bg-yellow-500' : (w.rarity || 5) === 4 ? 'bg-purple-500' : 'bg-blue-500'}`}></div>
                                            <img src={w.image} alt={w.name} className="w-full h-full object-contain p-2 relative z-10" />
                                        </div>
                                        <div className="p-4 flex flex-col justify-center relative z-10">
                                            <h3 className="font-black text-white text-lg uppercase tracking-tight leading-none mb-2">{w.name}</h3>
                                            <div className="flex items-center gap-2">
                                                <div className="flex text-yellow-500">
                                                    {Array.from({ length: w.rarity || 5 }).map((_, starIdx) => (
                                                        <span key={starIdx} className="text-sm">★</span>
                                                    ))}
                                                </div>
                                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider border border-gray-800 px-2 py-0.5 rounded bg-gray-900">{w.rank}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description Body - Show weapon passive from database */}
                                    <div className="p-4 flex-grow relative z-10 overflow-y-auto min-h-[120px] max-h-[200px] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-700/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-yellow-500/50">
                                        {(() => {
                                            const fullWeapon = weapons.find(weapon => weapon.name.toLowerCase() === w.name.toLowerCase());
                                            return (
                                                <>
                                                    {fullWeapon ? (
                                                        <>
                                                            <p className="text-xs text-yellow-500/80 uppercase tracking-wider font-bold mb-2">Weapon Passive</p>
                                                            <p className="text-sm text-gray-300 leading-relaxed">{fullWeapon.description}</p>
                                                        </>
                                                    ) : (
                                                        <p className="text-sm text-gray-300 leading-relaxed">{w.description}</p>
                                                    )}
                                                </>
                                            );
                                        })()}
                                    </div>

                                    {/* Footer Stats - Lookup from weapons database */}
                                    {(() => {
                                        const fullWeapon = weapons.find(weapon => weapon.name.toLowerCase() === w.name.toLowerCase());
                                        return (
                                            <div className="p-3 bg-gray-900/30 border-t border-gray-800 shrink-0 flex items-center gap-6">
                                                {fullWeapon ? (
                                                    <>
                                                        <div>
                                                            <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Base ATK</span>
                                                            <span className="text-sm font-bold text-white font-mono">{fullWeapon.baseAtk}</span>
                                                        </div>
                                                        {fullWeapon.subStat && (
                                                            <div>
                                                                <span className="text-[10px] text-gray-500 uppercase tracking-wider block">{fullWeapon.subStat.label}</span>
                                                                <span className="text-sm font-bold text-yellow-500 font-mono">{fullWeapon.subStat.value}</span>
                                                            </div>
                                                        )}
                                                        <div className="ml-auto">
                                                            <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Type</span>
                                                            <span className="text-sm font-bold text-purple-400 font-mono">{fullWeapon.type}</span>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        {w.mainStat && (
                                                            <div>
                                                                <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Main Stat</span>
                                                                <span className="text-sm font-bold text-white font-mono">{w.mainStat}</span>
                                                            </div>
                                                        )}
                                                        {w.subStat && (
                                                            <div>
                                                                <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Sub Stat</span>
                                                                <span className="text-sm font-bold text-yellow-500 font-mono">{w.subStat}</span>
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        );
                                    })()}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Echoes */}
            <section>
                <h3 className="text-lg font-black uppercase mb-6 border-b border-gray-800 pb-2">Echo Configuration</h3>
                <div className="space-y-8">
                    {character.builds.echoes.map((echo, i) => (
                        <div key={i} className="border border-gray-800 bg-[#0f0f0f] p-6">
                            <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                                {(() => {
                                    // Find all sets mentioned in the string or use exact match
                                    const matchedSets = sonataEffects.filter(s => echo.set.toLowerCase().includes(s.name.toLowerCase()));

                                    // Fallback to searching by icon key if no direct name match (unlikely but safe)
                                    const finalSets = matchedSets.length > 0 ? matchedSets : [];

                                    return (
                                        <div className="flex items-center gap-3">
                                            {/* Render Icons for all matched sets */}
                                            {finalSets.map(set => (
                                                <div key={set.name} className="relative group cursor-help">
                                                    <img
                                                        src={set.image}
                                                        alt={set.name}
                                                        className="w-10 h-10 object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
                                                    />
                                                    {/* Hover Card */}
                                                    <div className="absolute top-12 left-0 w-[320px] bg-[#0a0a0a] border border-gray-700 p-5 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-[60] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
                                                        <div className="flex items-center gap-4 mb-4 border-b border-gray-800 pb-4">
                                                            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center p-2 border border-gray-800">
                                                                <img src={set.image} className="w-full h-full object-contain" />
                                                            </div>
                                                            <div>
                                                                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest block mb-1">Sonata Effect</span>
                                                                <span className="font-black text-white text-lg leading-none">{set.name}</span>
                                                            </div>
                                                        </div>
                                                        <div className="space-y-4">
                                                            <div>
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                                                                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">2-Pc Set</span>
                                                                </div>
                                                                <p className="text-sm text-gray-300 leading-relaxed pl-3.5 border-l border-gray-800">{set.twoPiece}</p>
                                                            </div>
                                                            <div>
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                                                                    <span className="text-[10px] text-yellow-500 uppercase font-bold tracking-widest">5-Pc Set</span>
                                                                </div>
                                                                <p className="text-sm text-gray-300 leading-relaxed pl-3.5 border-l border-gray-800">{set.fivePiece}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                            <h4 className="font-bold text-white uppercase text-xl">
                                                {echo.set}
                                            </h4>
                                        </div>
                                    );
                                })()}
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-purple-400 font-mono uppercase text-right">
                                        Main: {echo.mainEcho}
                                    </span>
                                    {/* Dynamic Echo Image with Hover */}
                                    {(() => {
                                        const fullEcho = echoes.find(e => e.name === echo.mainEcho);
                                        return (
                                            <div className="relative group">
                                                <div className="w-12 h-12 rounded-full border border-gray-700 bg-gray-800 overflow-hidden cursor-help relative z-10 group-hover:border-white transition-colors group-hover:scale-110 duration-200">
                                                    <img
                                                        src={`/images/echoes/${echo.mainEcho.toLowerCase().replace(/[^a-z0-9]/g, '')}.png`}
                                                        alt={echo.mainEcho}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).style.display = 'none';
                                                        }}
                                                    />
                                                </div>

                                                {/* Hover Card */}
                                                {fullEcho && (
                                                    <div className="absolute top-full right-0 mt-4 w-[300px] bg-[#0a0a0a] border border-gray-700 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-[60] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden pointer-events-none translate-y-2 group-hover:translate-y-0">
                                                        {/* Header */}
                                                        <div className="relative h-40 bg-gray-900 group/image overflow-hidden">
                                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                                                            <img src={fullEcho.image} className="w-full h-full object-cover opacity-60 group-hover/image:scale-105 transition-transform duration-700" />
                                                            <div className="absolute bottom-4 left-5 z-20">
                                                                <div className="flex items-center gap-2 mb-1">
                                                                    <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border ${fullEcho.class === 'Calamity' ? 'border-red-900 bg-red-900/20 text-red-500' :
                                                                        fullEcho.class === 'Overlord' ? 'border-purple-900 bg-purple-900/20 text-purple-500' :
                                                                            'border-gray-700 bg-gray-800 text-gray-400'
                                                                        }`}>
                                                                        {fullEcho.class}
                                                                    </span>
                                                                    <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest bg-yellow-900/10 px-1.5 py-0.5 rounded border border-yellow-900/30">Cost {fullEcho.cost}</span>
                                                                </div>
                                                                <h5 className="text-xl font-black text-white leading-none shadow-black drop-shadow-md">{fullEcho.name}</h5>
                                                            </div>
                                                        </div>
                                                        {/* Body */}
                                                        <div className="p-5 max-h-[250px] overflow-y-auto custom-scrollbar bg-[#0a0a0a]">
                                                            <span className="text-[10px] text-gray-600 uppercase font-bold tracking-widest block mb-2">Echo Skill</span>
                                                            <p className="text-xs text-gray-300 leading-relaxed font-medium">{fullEcho.description}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()}
                                </div>
                            </div>

                            {/* Recommendation Reason */}
                            {echo.recommendation_reason && (
                                <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded">
                                    <h5 className="text-blue-400 text-xs font-bold uppercase mb-1">Why this set?</h5>
                                    <p className="text-sm text-gray-300 leading-relaxed">{echo.recommendation_reason}</p>
                                </div>
                            )}

                            {/* Detailed Echo Breakdown Grid */}
                            {echo.echo_breakdown ? (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {/* Cost 4 */}
                                    <div className="bg-gray-900/50 p-4 border border-gray-800 text-center group hover:border-yellow-500/30 transition-colors relative">
                                        <div className="text-yellow-500 font-black text-4xl mb-2 opacity-20 group-hover:opacity-40 transition-opacity">4</div>
                                        {(() => {
                                            const fullEcho = echoes.find(e => e.name === echo.echo_breakdown?.cost4[0].name);
                                            return (
                                                <div className="relative group/item inline-block">
                                                    <div className="w-20 h-20 mx-auto mb-3 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 overflow-hidden cursor-help relative z-10 group-hover/item:border-white transition-colors">
                                                        <img src={echo.echo_breakdown?.cost4[0].image} alt={echo.echo_breakdown?.cost4[0].name} className="w-full h-full object-cover" />
                                                    </div>
                                                    {fullEcho && (
                                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[280px] bg-[#0a0a0a] border border-gray-700 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-[60] opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 overflow-hidden pointer-events-none text-left">
                                                            {/* Header */}
                                                            <div className="relative h-32 bg-gray-900 overflow-hidden">
                                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                                                                <img src={fullEcho.image} className="w-full h-full object-cover opacity-60" />
                                                                <div className="absolute bottom-4 left-5 z-20">
                                                                    <div className="flex items-center gap-2 mb-1">
                                                                        <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border ${fullEcho.class === 'Calamity' ? 'border-red-900 bg-red-900/20 text-red-500' : fullEcho.class === 'Overlord' ? 'border-purple-900 bg-purple-900/20 text-purple-500' : 'border-gray-700 bg-gray-800 text-gray-400'}`}>
                                                                            {fullEcho.class}
                                                                        </span>
                                                                        <span className="text-[10px] font-bold text-yellow-500 uppercase bg-yellow-900/10 px-1.5 py-0.5 rounded border border-yellow-900/30">Cost {fullEcho.cost}</span>
                                                                    </div>
                                                                    <h5 className="text-lg font-black text-white leading-none shadow-black drop-shadow-md">{fullEcho.name}</h5>
                                                                </div>
                                                            </div>
                                                            {/* Body */}
                                                            <div className="p-4 max-h-[200px] overflow-y-auto custom-scrollbar bg-[#0a0a0a]">
                                                                <p className="text-[10px] text-gray-300 leading-relaxed font-medium">{fullEcho.description}</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })()}
                                        <div className="font-bold text-white text-sm uppercase mb-2 line-clamp-1">{echo.echo_breakdown.cost4[0].name}</div>
                                        <div className="space-y-1">
                                            {echo.echo_breakdown.cost4[0].mainStats.map((stat, idx) => (
                                                <div key={idx} className="text-xs font-mono text-gray-400 bg-gray-800/50 py-1 px-2 rounded border border-gray-700/50">{stat}</div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Cost 3 */}
                                    <div className="bg-gray-900/50 p-4 border border-gray-800 text-center group hover:border-purple-500/30 transition-colors relative">
                                        <div className="text-purple-500 font-black text-4xl mb-2 opacity-20 group-hover:opacity-40 transition-opacity">3</div>
                                        <div className="flex justify-center gap-2 mb-3 flex-wrap">
                                            {echo.echo_breakdown.cost3.map((item, idx) => (
                                                <div key={idx} className="relative group/subItem inline-block">
                                                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 overflow-hidden cursor-help group-hover/subItem:border-white transition-colors">
                                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    {(() => {
                                                        const fullEcho = echoes.find(e => e.name === item.name);
                                                        return fullEcho ? (
                                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[280px] bg-[#0a0a0a] border border-gray-700 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-[60] opacity-0 invisible group-hover/subItem:opacity-100 group-hover/subItem:visible transition-all duration-200 overflow-hidden pointer-events-none text-left">
                                                                {/* Header */}
                                                                <div className="relative h-32 bg-gray-900 overflow-hidden">
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                                                                    <img src={fullEcho.image} className="w-full h-full object-cover opacity-60" />
                                                                    <div className="absolute bottom-4 left-5 z-20">
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border ${fullEcho.class === 'Calamity' ? 'border-red-900 bg-red-900/20 text-red-500' : fullEcho.class === 'Overlord' ? 'border-purple-900 bg-purple-900/20 text-purple-500' : 'border-gray-700 bg-gray-800 text-gray-400'}`}>
                                                                                {fullEcho.class}
                                                                            </span>
                                                                            <span className="text-[10px] font-bold text-yellow-500 uppercase bg-yellow-900/10 px-1.5 py-0.5 rounded border border-yellow-900/30">Cost {fullEcho.cost}</span>
                                                                        </div>
                                                                        <h5 className="text-lg font-black text-white leading-none shadow-black drop-shadow-md">{fullEcho.name}</h5>
                                                                    </div>
                                                                </div>
                                                                {/* Body */}
                                                                <div className="p-4 max-h-[200px] overflow-y-auto custom-scrollbar bg-[#0a0a0a]">
                                                                    <p className="text-[10px] text-gray-300 leading-relaxed font-medium">{fullEcho.description}</p>
                                                                </div>
                                                            </div>
                                                        ) : null;
                                                    })()}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="font-bold text-white text-sm uppercase mb-2 line-clamp-1">
                                            {echo.echo_breakdown.cost3.map(i => i.name).join(" / ")}
                                        </div>
                                        <div className="space-y-1">
                                            {echo.echo_breakdown.cost3[0].mainStats.map((stat, idx) => (
                                                <div key={idx} className="text-xs font-mono text-gray-400 bg-gray-800/50 py-1 px-2 rounded border border-gray-700/50">{stat}</div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Cost 1 */}
                                    <div className="bg-gray-900/50 p-4 border border-gray-800 text-center group hover:border-gray-500/30 transition-colors relative">
                                        <div className="text-gray-500 font-black text-4xl mb-2 opacity-20 group-hover:opacity-40 transition-opacity">1</div>
                                        <div className="flex justify-center gap-2 mb-3 flex-wrap">
                                            {echo.echo_breakdown.cost1.map((item, idx) => (
                                                <div key={idx} className="relative group/subItem inline-block">
                                                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 overflow-hidden cursor-help group-hover/subItem:border-white transition-colors">
                                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    {(() => {
                                                        const fullEcho = echoes.find(e => e.name === item.name);
                                                        return fullEcho ? (
                                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[280px] bg-[#0a0a0a] border border-gray-700 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-[60] opacity-0 invisible group-hover/subItem:opacity-100 group-hover/subItem:visible transition-all duration-200 overflow-hidden pointer-events-none text-left">
                                                                {/* Header */}
                                                                <div className="relative h-32 bg-gray-900 overflow-hidden">
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                                                                    <img src={fullEcho.image} className="w-full h-full object-cover opacity-60" />
                                                                    <div className="absolute bottom-4 left-5 z-20">
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border ${fullEcho.class === 'Calamity' ? 'border-red-900 bg-red-900/20 text-red-500' : fullEcho.class === 'Overlord' ? 'border-purple-900 bg-purple-900/20 text-purple-500' : 'border-gray-700 bg-gray-800 text-gray-400'}`}>
                                                                                {fullEcho.class}
                                                                            </span>
                                                                            <span className="text-[10px] font-bold text-yellow-500 uppercase bg-yellow-900/10 px-1.5 py-0.5 rounded border border-yellow-900/30">Cost {fullEcho.cost}</span>
                                                                        </div>
                                                                        <h5 className="text-lg font-black text-white leading-none shadow-black drop-shadow-md">{fullEcho.name}</h5>
                                                                    </div>
                                                                </div>
                                                                {/* Body */}
                                                                <div className="p-4 max-h-[200px] overflow-y-auto custom-scrollbar bg-[#0a0a0a]">
                                                                    <p className="text-[10px] text-gray-300 leading-relaxed font-medium">{fullEcho.description}</p>
                                                                </div>
                                                            </div>
                                                        ) : null;
                                                    })()}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="font-bold text-white text-sm uppercase mb-2 line-clamp-1">
                                            {echo.echo_breakdown.cost1.map(i => i.name).join(" / ")}
                                        </div>
                                        <div className="space-y-1">
                                            {echo.echo_breakdown.cost1[0].mainStats.map((stat, idx) => (
                                                <div key={idx} className="text-xs font-mono text-gray-400 bg-gray-800/50 py-1 px-2 rounded border border-gray-700/50">{stat}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* Fallback for legacy data */
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="text-center p-4 bg-gray-900 border border-gray-800">
                                        <div className="text-gray-500 font-black mb-2">COST 4</div>
                                        {echo.stats.cost4.map((s, idx) => <div key={idx} className="text-xs text-white mb-1">{s}</div>)}
                                    </div>
                                    <div className="text-center p-4 bg-gray-900 border border-gray-800">
                                        <div className="text-gray-500 font-black mb-2">COST 3</div>
                                        {echo.stats.cost3.map((s, idx) => <div key={idx} className="text-xs text-white mb-1">{s}</div>)}
                                    </div>
                                    <div className="text-center p-4 bg-gray-900 border border-gray-800">
                                        <div className="text-gray-500 font-black mb-2">COST 1</div>
                                        {echo.stats.cost1.map((s, idx) => <div key={idx} className="text-xs text-white mb-1">{s}</div>)}
                                    </div>
                                </div>
                            )}

                            {/* Substats */}
                            <div className="mt-6 pt-6 border-t border-gray-800">
                                <h5 className="font-bold text-white uppercase text-sm mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                    Substat Priority
                                </h5>
                                <p className="font-mono text-sm text-gray-400 leading-relaxed">
                                    {character.builds.stats_priority}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Teams */}
            <section>
                <h3 className="text-lg font-black uppercase mb-6 border-b border-gray-800 pb-2">Team Synergy</h3>
                <div className="grid grid-cols-1 gap-6">
                    {character.teams.map((team, i) => (
                        <div key={i} className="border border-gray-800 bg-[#0f0f0f] p-6">
                            <div className="mb-4">
                                <h4 className="text-xl font-bold text-white mb-1">{team.name}</h4>
                                <p className="text-gray-400 text-sm">{team.description}</p>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                {team.members.map((member, idx) => (
                                    <Link
                                        key={idx}
                                        href={`/character/${member.name.toLowerCase().replace(/ /g, '-')}`}
                                        className="group block bg-gray-900/50 border border-gray-800 hover:border-white transition-all p-3"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 relative rounded-full overflow-hidden border border-gray-700 group-hover:border-white transition-colors flex-shrink-0">
                                                <img
                                                    src={`/images/characters/${member.name.replace(/ /g, '')}Small.png`}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="text-white font-bold text-sm truncate group-hover:text-yellow-500 transition-colors">{member.name}</div>
                                                <div className="text-xs text-gray-500 font-mono truncate">{member.role}</div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
