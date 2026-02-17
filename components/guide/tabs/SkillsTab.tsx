import { Character } from '../../../lib/characters';
import { parseMarkdown } from '../utils';

interface SkillsTabProps {
    character: Character;
}

export default function SkillsTab({ character }: SkillsTabProps) {
    return (
        <div className="p-8 md:p-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {character.skills.map((skill, index) => (
                <div key={index} className="border border-gray-800 bg-[#0f0f0f] p-6 hover:border-gray-600 transition-colors group">
                    <div className="flex items-baseline justify-between mb-4 border-b border-gray-800 pb-4 group-hover:border-gray-600 transition-colors">
                        <h3 className="text-lg font-bold text-white uppercase tracking-tight">{skill.name}</h3>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{skill.type}</span>
                    </div>
                    <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                        {parseMarkdown(skill.description)}
                    </div>

                    {/* Preview of stats if exist */}
                    {skill.attributes && (
                        <div className="mt-4 pt-4 border-t border-gray-800/50">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {skill.attributes.slice(0, 4).map((attr, idx) => (
                                    <div key={idx} className="text-xs">
                                        <span className="block text-gray-600 uppercase mb-1 truncate">{attr.name}</span>
                                        <span className="font-mono text-gray-300">{attr.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Priority Indicator - Always Visible as Skeleton */}
                    <div className="mt-4 pt-4 border-t border-gray-800/50 flex items-center justify-between">
                        <span className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">Upgrade Priority</span>
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4].map((level) => (
                                <div
                                    key={level}
                                    className={`w-8 h-2 border ${level <= (skill.priority || 0)
                                        ? 'bg-white border-white'
                                        : 'bg-transparent border-gray-800 opacity-50'
                                        }`}
                                />
                            ))}
                            <span className="ml-2 text-xs font-mono text-white font-bold min-w-[60px] text-right">
                                {skill.priority === 4 ? 'TOP' :
                                    skill.priority === 3 ? 'HIGH' :
                                        skill.priority === 2 ? 'MEDIUM' :
                                            skill.priority === 1 ? 'LOW' :
                                                <span className="text-gray-600">PENDING</span>}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
