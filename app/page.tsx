"use client";

import { useState } from "react";
import Link from "next/link";
import { Layers, Users, Zap, Sword, ArrowRight, Ghost, Crown, Info, ChevronUp, ChevronDown, AlertTriangle } from "lucide-react";

export default function Home() {
  const [infoExpanded, setInfoExpanded] = useState(false);

  const menuItems = [
    {
      title: "TIER_LIST",
      subtitle: "META RANKINGS (R0-R3)",
      href: "/tier-list",
      icon: Layers,
      status: "ONLINE",
      active: true,
      color: "hover:border-red-500 hover:text-red-500",
      bgHover: "hover:bg-red-500/5",
    },
    {
      title: "RESONATORS",
      subtitle: "CHARACTER ARCHIVE",
      href: "/characters",
      icon: Users,
      status: "ONLINE",
      active: true,
      color: "hover:border-blue-500 hover:text-blue-500",
      bgHover: "hover:bg-blue-500/5",
    },
    {
      title: "ARSENAL",
      subtitle: "WEAPONRY",
      href: "/arsenal",
      icon: Sword,
      status: "ONLINE",
      active: true,
      color: "hover:border-yellow-500 hover:text-yellow-500",
      bgHover: "hover:bg-yellow-500/5",
    },
    {
      title: "COMP_TIERLIST",
      subtitle: "TEAM RANKINGS",
      href: "/comp-tier-list",
      icon: Crown,
      status: "ONLINE",
      active: true,
      color: "hover:border-emerald-500 hover:text-emerald-500",
      bgHover: "hover:bg-emerald-500/5",
    },
    {
      title: "ECHO_ARCHIVE",
      subtitle: "STATS & SETS",
      href: "/echoes",
      icon: Ghost,
      status: "ONLINE",
      active: true,
      color: "hover:border-purple-500 hover:text-purple-500",
      bgHover: "hover:bg-purple-500/5",
    },
    {
      title: "SONATA_EFFECTS",
      subtitle: "SET BONUSES",
      href: "/sonata-effect",
      icon: Zap,
      status: "ONLINE",
      active: true,
      color: "hover:border-cyan-400 hover:text-cyan-400",
      bgHover: "hover:bg-cyan-400/5",
    },
  ];


  return (
    <main className="min-h-screen bg-[#080808] flex flex-col p-6 md:p-12 font-sans text-gray-100 selection:bg-white selection:text-black">

      {/* HUD Header */}
      <header className="max-w-7xl mx-auto w-full mb-8 flex justify-between items-end border-b border-gray-800 pb-4">
        <div className="flex items-baseline gap-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            <span className="text-pink-500">Makaron</span><span className="text-gray-600">Games</span>
          </h1>
          <span className="text-2xl md:text-3xl font-bold text-gray-500 tracking-tight hidden md:inline-block">Wuthering Waves </span> <span className="text-2xl md:text-3xl font-bold text-red-500 tracking-tight hidden md:inline-block">(BETA)</span>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Wuthering Waves<br />Version 3.0</p>
        </div>
      </header>

      {/* COLLAPSIBLE INFO SECTION */}
      <div className="max-w-7xl mx-auto w-full mb-12 border border-gray-800 bg-[#0a0a0a]">
        <button
          onClick={() => setInfoExpanded(!infoExpanded)}
          className="w-full p-4 flex items-center justify-between text-left hover:bg-[#111] transition-colors"
        >
          <div className="flex items-center gap-3">
            <Info size={18} className="text-gray-500" />
            <span className="font-bold uppercase tracking-wider text-sm">Beta Notice</span>
          </div>
          {infoExpanded ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
        </button>

        {infoExpanded && (
          <div className="p-6 border-t border-gray-800 text-sm text-gray-400 leading-relaxed">
            <div className="p-4 border border-yellow-900/50 bg-yellow-950/20 flex gap-4">
              <AlertTriangle size={24} className="text-yellow-500 flex-shrink-0" />
              <div>
                <p>
                  Hello! Before you dive deeper, I&apos;d like to make a small announcement. Since the website is still in its beta phase, some definitions, information, descriptions, or even numerical data may be incorrect or incomplete. Everything will be fully finalized in the near future. If you see anything that seems illogical or incorrect, please feel free to reach out via the <Link href="/contact" className="text-yellow-500 hover:text-yellow-400 underline font-bold">Contact Us</Link> section. Your feedback will be very helpful in improving the site.  Have fun!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {menuItems.map((item, index) => (
          <Link
            key={item.title}
            href={item.href}
            className={`
              group relative flex flex-col justify-between p-8 h-64 md:h-80
              border border-gray-800 bg-[#0a0a0a]
              transition-all duration-300
              ${item.active ? 'cursor-pointer' : 'cursor-not-allowed opacity-60 grayscale'}
              ${item.active ? item.color : ''}
              ${item.active ? item.bgHover : ''}
            `}
            // Prevent navigation for offline items
            onClick={!item.active ? (e) => e.preventDefault() : undefined}
          >
            {/* Top Row Removed */}

            {/* Center Content */}
            <div className="relative z-10">
              <item.icon size={48} strokeWidth={1} className="mb-4 text-gray-600 group-hover:text-current transition-colors duration-300" />
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-1 relative inline-block">
                {item.title}
              </h2>
            </div>

            {/* Icon Decoration */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
              <ArrowRight size={24} />
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-gray-800 group-hover:border-current transition-colors duration-300" />
            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-gray-800 group-hover:border-current transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-gray-800 group-hover:border-current transition-colors duration-300" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-gray-800 group-hover:border-current transition-colors duration-300" />
          </Link>
        ))}
      </div>
    </main>
  );
}
