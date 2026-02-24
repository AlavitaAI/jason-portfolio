export type Project = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
};

export const projects: Project[] = [
    {
        slug: "alavita",
        title: "Alavita",
        description: "A comprehensive AI-powered fitness and workout tracking platform featuring both a web hub and a mobile iOS application.",
        tags: ["Next.js", "React", "iOS", "Swift", "AI"],
    }
];
