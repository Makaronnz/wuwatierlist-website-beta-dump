import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | WuwaTier',
    description: 'Privacy Policy for WuwaTier - Wuthering Waves Tier List and Guides',
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-black text-gray-100">
            <div className="max-w-4xl mx-auto p-6 md:p-12 animate-in fade-in duration-700">
                {/* Header */}
                <div className="mb-12 border-b border-gray-800 pb-6">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-2">
                        <span className="text-gray-600">Privacy</span> <span className="text-yellow-500">Policy</span>
                    </h1>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                        Last Updated: January 16, 2026
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-8 text-gray-400 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-white uppercase mb-4">Introduction</h2>
                        <p>
                            WuwaTier is a fan-made tier list and guide website for Wuthering Waves. This page explains what information may be collected when visiting this website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase mb-4">Data Collection</h2>
                        <p>
                            This website does not actively collect, store, or process any personal information. No analytics tools, tracking scripts, or cookies are used by the website itself.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase mb-4">Hosting Provider</h2>
                        <p>
                            This website is hosted on Cloudflare Pages. As part of standard web hosting operations, Cloudflare may automatically collect basic server logs (such as IP addresses and request timestamps) for security and performance purposes. For more information, refer to <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline">Cloudflare&apos;s Privacy Policy</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase mb-4">External Resources</h2>
                        <p>
                            This website loads fonts from Font Awesome CDN. External services may have their own privacy policies regarding how they handle requests.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase mb-4">Changes to This Policy</h2>
                        <p>
                            This Privacy Policy may be updated from time to time. Any changes will be posted on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white uppercase mb-4">Contact</h2>
                        <p>
                            For any questions, please visit the <a href="/contact" className="text-yellow-500 hover:text-yellow-400 underline">Contact Page</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
