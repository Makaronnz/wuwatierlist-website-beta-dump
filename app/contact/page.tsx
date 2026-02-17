import { Metadata } from 'next';
import { Mail, MessageSquare, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | WuwaTier',
    description: 'Contact the WuwaTier team - Wuthering Waves Tier List and Guides',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-gray-100">
            <div className="max-w-4xl mx-auto p-6 md:p-12 animate-in fade-in duration-700">
                {/* Header */}
                <div className="mb-12 border-b border-gray-800 pb-6">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-2">
                        <span className="text-gray-600">Contact</span> <span className="text-yellow-500">Us</span>
                    </h1>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                        Get in Touch with the Team
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-8">
                    <p className="text-gray-400 leading-relaxed">
                        Have questions, suggestions, or feedback? We&apos;d love to hear from you! Feel free to reach out through any of the following channels.
                    </p>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email */}
                        <div className="border border-gray-800 bg-[#0f0f0f] p-6 hover:border-yellow-500/50 transition-colors">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center justify-center">
                                    <Mail className="text-yellow-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white uppercase tracking-wider">Email</h3>
                                    <p className="text-xs text-gray-500">Preferred method</p>
                                </div>
                            </div>
                            <a
                                href="mailto:plmakarongames@gmail.com"
                                className="text-yellow-500 hover:text-yellow-400 font-mono text-sm break-all"
                            >
                                plmakarongames@gmail.com
                            </a>
                        </div>

                        {/* Discord */}
                        <div className="border border-gray-800 bg-[#0f0f0f] p-6 hover:border-purple-500/50 transition-colors">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center">
                                    <MessageSquare className="text-purple-500" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white uppercase tracking-wider">Discord</h3>
                                    <p className="text-xs text-gray-500">Community</p>
                                </div>
                            </div>
                            <span className="text-gray-600 font-mono text-sm italic">
                                Currently Unavailable
                            </span>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-12 border border-gray-800 bg-[#0f0f0f] p-6">
                        <h2 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-2">
                            <Globe size={20} className="text-gray-500" />
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4 text-sm">
                            <div className="border-b border-gray-800 pb-4">
                                <p className="font-bold text-gray-300 mb-1">Is this site affiliated with Kuro Games?</p>
                                <p className="text-gray-500">No, WuwaTier is a fan-made project and is not officially affiliated with Kuro Games or Wuthering Waves.</p>
                            </div>
                            <div className="border-b border-gray-800 pb-4">
                                <p className="font-bold text-gray-300 mb-1">Can I suggest changes to the tier list?</p>
                                <p className="text-gray-500">Yes! Feedback and suggestions are welcome. Please send an email with your thoughts.</p>
                            </div>
                            <div>
                                <p className="font-bold text-gray-300 mb-1">How often is the tier list updated?</p>
                                <p className="text-gray-500">We update our tier lists after major patches and balance changes, typically within a few days of new content releases.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
