import Link from "next/link";
import Image from "next/image";

export default function AlavitaProject() {
    return (
        <div className="min-h-[100dvh] bg-black text-white selection:bg-emerald-500/30 font-sans">
            <div className="container-xl max-w-6xl mx-auto px-6 py-12 md:py-20">

                {/* Back link */}
                <Link href="/projects" className="group text-gray-400 hover:text-white transition-colors text-sm mb-16 inline-flex items-center gap-2 font-medium">
                    <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to Projects
                </Link>

                {/* Main Content */}
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-sm">
                        Alavita
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-8 leading-relaxed font-light">
                        Your AI-powered fitness coach. Personalized workouts, smart nutrition, and daily recovery plans that adapt to you.
                    </p>

                    <a
                        href="https://alavita.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-400 hover:text-emerald-300 transition-colors mb-24 hover:underline underline-offset-4"
                    >
                        Visit alavita.ai
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                </div>

                {/* iPhone Preview Section */}
                <div className="relative rounded-[2.5rem] bg-neutral-900/50 border border-white/5 p-8 md:p-16 flex flex-col md:flex-row items-center justify-center gap-16 overflow-hidden backdrop-blur-3xl">

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                    {/* iPhone Mockup Frame */}
                    <div className="relative z-10 w-full max-w-[280px] flex-shrink-0">
                        <div className="relative aspect-[9/19.5] rounded-[2.5rem] border-[10px] border-neutral-800 bg-black shadow-2xl overflow-hidden flex items-center justify-center ring-1 ring-white/10">

                            {/* Simulated screen content */}
                            <div className="absolute inset-0 bg-black">
                                <Image
                                    src="/alavita-preview.png"
                                    alt="Alavita iOS App Preview"
                                    fill
                                    className="object-cover object-top"
                                    quality={100}
                                />
                            </div>

                            {/* iPhone Notch Simulation */}
                            <div className="absolute top-0 inset-x-0 h-6 bg-neutral-800 rounded-b-3xl w-1/2 mx-auto"></div>
                        </div>
                    </div>

                    {/* App Store CTA */}
                    <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">Train Smarter</h3>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            Download the mobile companion app for on-the-go tracking, workout logging, and real-time fitness insights directly from your pocket.
                        </p>
                        <a
                            href="https://apps.apple.com/us/app/alavita-workout-tracker/id6747997775"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 hover:scale-105 transition-all w-full md:w-auto shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                        >
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16.365 1.5c-1.282 0-2.85.803-3.766 1.954-.8.995-1.427 2.47-1.185 3.864 1.439.103 2.923-.74 3.791-1.884.821-1.076 1.34-2.5 1.16-3.934zm.28 5.732c-1.892.015-3.376 1.157-4.248 1.157-.89 0-2.128-1.054-3.664-1.026-1.956.035-3.8 1.139-4.815 2.905-2.062 3.585-.526 8.898 1.488 11.8.98 1.411 2.147 2.99 3.655 2.932 1.442-.06 1.996-.93 3.73-.93 1.724 0 2.228.93 3.754.9 1.579-.029 2.584-1.42 3.54-2.83 1.106-1.621 1.565-3.195 1.593-3.275-.034-.015-3.059-1.173-3.097-4.664-.033-2.91 2.378-4.32 2.493-4.387-1.353-1.983-3.454-2.227-4.43-2.28z" />
                            </svg>
                            Try the App Now
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
