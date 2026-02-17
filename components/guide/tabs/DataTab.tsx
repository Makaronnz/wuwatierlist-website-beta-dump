import { Character } from '../../../lib/characters';

interface DataTabProps {
    character: Character;
}

export default function DataTab({ character }: DataTabProps) {
    return (
        <div className="p-8 md:p-12 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-white"></span>
                Multiplier Database (Lv. 10)
            </h3>

            <div className="grid grid-cols-1 gap-8">
                {character.skills.map((skill, index) => (
                    <div key={index} className="border border-gray-800 bg-[#0a0a0a]">
                        <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 flex justify-between items-center">
                            <span className="text-xs font-bold text-white uppercase tracking-widest">{skill.name}</span>
                            <span className="text-[10px] bg-white text-black px-2 py-0.5 font-bold uppercase">{skill.type}</span>
                        </div>
                        <div className="divide-y divide-gray-800">
                            {skill.attributes?.map((attr, aIdx) => (
                                <div key={aIdx} className="grid grid-cols-12 hover:bg-white/5 transition-colors">
                                    <div className="col-span-5 px-4 py-3 text-xs text-gray-400 font-mono uppercase tracking-tight border-r border-gray-800 flex items-center">
                                        {attr.name}
                                    </div>
                                    <div className="col-span-7 px-4 py-3 text-sm text-white font-mono flex items-center">
                                        {attr.value}
                                    </div>
                                </div>
                            )) || (
                                    <div className="px-4 py-6 text-center text-xs text-gray-600 font-mono italic">
                                        NO_NUMERICAL_DATA_AVAILABLE
                                    </div>
                                )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
