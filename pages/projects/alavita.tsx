import Link from "next/link";

export default function AlavitaProject() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
            <div className="container-xl max-w-4xl py-12">

                {/* Back link */}
                <Link href="/projects" className="text-blue-600 hover:text-blue-800 text-sm mb-8 inline-block font-medium w-fit">
                    ← Back to Projects
                </Link>

                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="text-5xl font-extrabold tracking-tight text-blue-900 mb-6">
                        Alavita
                    </h1>
                    <p className="text-xl text-blue-800/80 leading-relaxed max-w-3xl">
                        A comprehensive AI-powered fitness and workout tracking platform featuring both a web hub and a mobile iOS application.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2">

                    {/* Web App Card */}
                    <a
                        href="https://alavita.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-8 bg-white border border-blue-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex flex-col h-full">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 text-blue-950 group-hover:text-blue-600 transition-colors">
                                Alavita Web Platform
                            </h2>
                            <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                                The central web hub allowing you to analyze your fitness data, explore advanced metrics, and manage your account.
                            </p>
                            <div className="flex items-center text-sm font-bold text-blue-600 group-hover:translate-x-1 transition-transform duration-300">
                                Visit alavita.ai
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    </a>

                    {/* iOS App Card */}
                    <a
                        href="https://apps.apple.com/us/app/alavita-workout-tracker/id6747997775"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-8 bg-white border border-blue-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex flex-col h-full">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 text-blue-950 group-hover:text-blue-600 transition-colors">
                                Alavita iOS App
                            </h2>
                            <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                                The mobile companion application for on-the-go tracking, workout logging, and real-time fitness insights directly from your pocket.
                            </p>
                            <div className="flex items-center text-sm font-bold text-blue-600 group-hover:translate-x-1 transition-transform duration-300">
                                Download on the App Store
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
}
