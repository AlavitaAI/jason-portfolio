import Link from "next/link";

// Add your AI posts here
const posts: { slug: string; title: string; date: string }[] = [
  // Example:
  // { slug: "building-with-cursor", title: "Building with Cursor", date: "Jan 9, 2026" },
];

export default function AI() {
  return (
    <section className="container-xl py-16">
      <h1 className="text-3xl font-bold mb-2">AI</h1>
      <p className="text-gray-600 mb-10">Thoughts on artificial intelligence.</p>

      {posts.length === 0 ? (
        <p className="text-gray-500 italic">First post coming soon...</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/ai/${post.slug}`}
                className="flex items-baseline justify-between py-3 border-b border-gray-100 hover:bg-gray-50 -mx-3 px-3 rounded transition"
              >
                <span className="font-medium">{post.title}</span>
                <span className="text-sm text-gray-400">{post.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

