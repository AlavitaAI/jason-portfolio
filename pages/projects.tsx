import Layout from "../components/Layout";

export default function Projects() {
    return (
        <Layout>
            <div className="container-xl max-w-4xl py-12">
                <h1 className="h1 mb-4 text-4xl font-extrabold tracking-tight">Alavita</h1>
                <p className="text-gray-600 mb-10 text-lg max-w-2xl leading-relaxed">
                    A comprehensive AI-powered fitness and workout tracking platform featuring both a web hub and a mobile iOS application.
                </p>

                <div className="grid gap-8 sm:grid-cols-2">
                    {/* Web App Card */}
                    <a
                        href="https://alavita.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                    >
                        <div className="flex flex-col h-full">
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                Web Platform
                            </h2>
                            <p className="text-gray-600 mb-6 flex-grow">
                                The central web hub allowing you to analyze your fitness data, explore advanced metrics, and manage your account.
                            </p>
                            <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform duration-300">
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
                        className="group block p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                    >
                        <div className="flex flex-col h-full">
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                iOS App
                            </h2>
                            <p className="text-gray-600 mb-6 flex-grow">
                                The mobile companion application for on-the-go tracking, workout logging, and real-time fitness insights.
                            </p>
                            <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform duration-300">
                                Download on the App Store
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </Layout>
    );
}
