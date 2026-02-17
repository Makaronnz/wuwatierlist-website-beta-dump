"use client";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-gray-800 bg-black/50 mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <img src="/images/logo.png" alt="WuwaTier" className="h-8 w-auto" />
                        </Link>
                        <p className="text-xs text-gray-600 font-mono">
                            © 2026 MakaronGames. Not affiliated with Kuro Games.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy-policy"
                            className="text-xs font-mono text-gray-500 hover:text-gray-300 uppercase tracking-wider transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/contact"
                            className="text-xs font-mono text-gray-500 hover:text-gray-300 uppercase tracking-wider transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Social / Credits */}
                    <div className="text-center md:text-right">
                        <p className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">
                            Fan Project • Game Content © Kuro Games
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
