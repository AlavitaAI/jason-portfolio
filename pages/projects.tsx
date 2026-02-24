import Link from "next/link";
import { projects } from "../content/projects";

// REMOVED <Layout> because _app.tsx already wraps everything in <Layout>

export default function Projects() {
    return (
        <div className="container-xl max-w-4xl py-12">
            <h1 className="h1 mb-4 text-4xl font-extrabold tracking-tight">Personal Projects</h1>
            <p className="text-gray-600 mb-10 text-lg max-w-2xl leading-relaxed">
                A collection of things I've built.
            </p>

            <div className="flex flex-col gap-6">
                {projects.map((project, idx) => (
                    <Link
                        key={idx}
                        href={`/projects/${project.slug}`}
                        className="group block p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-gray-300 transition-all duration-300"
                    >
                        <div className="flex flex-col h-full">
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-black transition-colors">
                                {project.title}
                            </h2>
                            <p className="text-gray-600 mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
