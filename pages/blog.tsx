// pages/blog.tsx
import Link from "next/link";

const posts = [
  {
    title: "How I Analyze a Company Like a PE Investor",
    slug: "how-i-analyze",
    summary:
      "My weekly framework for evaluating public companies as LBO targets.",
  },
  {
    title: "Favorite Resources for Learning Private Equity",
    slug: "learning-pe",
    summary:
      "Books, courses, and tools that helped me master the fundamentals.",
  },
];

export default function Blog() {
  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-gray-600 mb-8">
        Notes, frameworks, and reflections on investing and PE craft.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((p) => (
          <article key={p.slug} className="card p-6">
            <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
            <p className="text-gray-700 mb-4">{p.summary}</p>
            <Link href={`/blog/${p.slug}`} className="btn btn-primary">
              Read Post
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
