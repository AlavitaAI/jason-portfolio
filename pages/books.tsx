import Link from "next/link";
import bookPosts from "@/content/books";

export default function Books() {
  return (
    <section className="container-xl py-16">
      <h1 className="text-3xl font-bold mb-2">Books</h1>
      <p className="text-gray-600 mb-10">One book a week in 2026.</p>

      {bookPosts.length === 0 ? (
        <p className="text-gray-500 italic">First post coming soon...</p>
      ) : (
        <ul className="space-y-4">
          {bookPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/books/${post.slug}`}
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
