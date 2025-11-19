// pages/blog.tsx
export default function Blog() {
const posts = [
{
title: 'How I Analyze a Company Like a PE Investor',
slug: 'how-i-analyze',
summary: 'My weekly framework for evaluating public companies like LBO targets.',
},
{
title: 'Favorite Resources for Learning Private Equity',
slug: 'learning-pe',
summary: 'Books, courses, and tools that helped me master the fundamentals.',
},
];


return (
<div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-6 py-10">
<h1 className="text-4xl font-bold mb-6 text-lime-400 text-center">Blog & Insights</h1>
<p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
Occasional thoughts, resources, and posts on investing, analysis, and building my skillset.
</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{posts.map((post) => (
<div key={post.slug} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition">
<h2 className="text-2xl font-semibold text-lime-300 mb-2">{post.title}</h2>
<p className="text-gray-300 text-sm mb-4">{post.summary}</p>
<a href={`/blog/${post.slug}`} className="bg-lime-400 text-black px-4 py-2 text-sm rounded hover:bg-lime-300 font-semibold">
Read Post
</a>
</div>
))}
</div>
</div>
);
}