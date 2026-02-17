import { Character } from '../../lib/characters';

interface SidebarProps {
    activeTab: 'analysis' | 'skills' | 'builds' | 'data' | 'materials';
    setActiveTab: (tab: 'analysis' | 'skills' | 'builds' | 'data' | 'materials') => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
    return (
        <aside className="lg:col-span-2 border-r border-gray-800 bg-[#0f0f0f]">
            <div className="sticky top-14">
                {['analysis', 'skills', 'builds', 'materials', 'data'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`w-full text-left px-6 py-4 text-xs font-bold uppercase tracking-widest border-b border-gray-800 hover:bg-gray-800 transition-colors flex items-center justify-between ${activeTab === tab ? 'bg-white text-black border-white' : 'text-gray-500'
                            }`}
                    >
                        {tab}
                        {activeTab === tab && <span>›</span>}
                    </button>
                ))}
            </div>
        </aside>
    );
}
