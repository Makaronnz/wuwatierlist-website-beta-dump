
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Don't show navbar on home page if we want to keep it "landing page" style, 
    // BUT user asked for "shortcut on every page". 
    // Usually landing pages still have navs. Let's keep it consistent.

    const navItems = [
        { name: 'Hub', href: '/', icon: 'fa-house' },
        { name: 'Arsenal', href: '/arsenal', icon: 'fa-khanda' },
        { name: 'Echoes', href: '/echoes', icon: 'fa-solid fa-ghost' },
        { name: 'Tier List', href: '/tier-list', icon: 'fa-layer-group' },
        { name: 'Comp Tierlist', href: '/comp-tier-list', icon: 'fa-crown' },
        { name: 'Resonators', href: '/characters', icon: 'fa-users' },
    ];

    return (
        <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img src="/images/logo.png" alt="MakaronGames" className="h-14 w-auto object-contain" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map(item => {
                        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors flex items-center gap-2 ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                            >
                                <i className={`fa-solid ${item.icon}`}></i>
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden flex flex-col items-center justify-center w-10 h-10 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-5 h-0.5 bg-white my-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 py-4 bg-[#0a0a0a] border-t border-gray-800 space-y-2">
                    {navItems.map(item => {
                        const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center gap-4 px-4 py-3 rounded-lg border transition-all ${isActive
                                        ? 'bg-primary/10 border-primary text-primary'
                                        : 'border-gray-800 text-gray-300 hover:bg-gray-800 hover:border-gray-700'
                                    }`}
                            >
                                <i className={`fa-solid ${item.icon} text-lg w-6 text-center`}></i>
                                <span className="font-medium text-base">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
