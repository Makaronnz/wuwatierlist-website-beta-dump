import { Character } from '../../../lib/characters';
import { parseMarkdown } from '../utils';

interface AnalysisTabProps {
    character: Character;
}

export default function AnalysisTab({ character }: AnalysisTabProps) {
    return (
        <div className="p-8 md:p-12 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section>
                <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-white"></span>
                    Operational Analysis
                </h3>
                <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed whitespace-pre-line border-l-2 border-gray-800 pl-6">
                    {parseMarkdown(character.analysis.overview)}
                </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
                <div className="border border-green-900/30 bg-green-900/5 p-6">
                    <h4 className="text-green-500 font-bold uppercase tracking-widest text-xs mb-4 border-b border-green-900/50 pb-2">Advantages</h4>
                    <ul className="space-y-3">
                        {character.analysis.pros.map((pro, i) => (
                            <li key={i} className="flex gap-3 text-sm text-gray-300">
                                <span className="text-green-500 mt-1">▲</span>
                                <span dangerouslySetInnerHTML={{ __html: pro.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-bold">$1</span>') }} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="border border-red-900/30 bg-red-900/5 p-6">
                    <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-4 border-b border-red-900/50 pb-2">Risks</h4>
                    <ul className="space-y-3">
                        {character.analysis.cons.map((con, i) => (
                            <li key={i} className="flex gap-3 text-sm text-gray-300">
                                <span className="text-red-500 mt-1">▼</span>
                                <span dangerouslySetInnerHTML={{ __html: con.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-bold">$1</span>') }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section>
                <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 bg-white"></span>
                    Combat Protocol
                </h3>
                <div className="bg-gray-900/30 border border-gray-800 p-6">
                    <p className="font-mono text-sm text-gray-300 mb-6 border-b border-gray-700 pb-4">
                        {parseMarkdown(character.analysis.playstyle)}
                    </p>
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest hidden">Execution Sequence</h4>
                        <div className="grid gap-3 text-left">
                            {character.rotation.map((step, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <span className="font-mono text-gray-500 text-xs pt-1 flex-shrink-0">{(i + 1).toString().padStart(2, '0')}</span>
                                    <div className="hidden md:block w-px bg-gray-800 h-full self-stretch mx-2"></div>
                                    <span className="text-sm text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-bold">$1</span>') }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
