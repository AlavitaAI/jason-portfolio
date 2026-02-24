import Link from "next/link";
import Image from "next/image";
import bookPosts from "@/content/books";

export default function Books() {
  return (
    <section className="container-xl py-16">
      <h1 className="text-5xl font-bold mb-12">My Books</h1>

      {bookPosts.length === 0 ? (
        <p className="text-gray-500 italic">First post coming soon...</p>
      ) : (
        <div className="space-y-12">
          {bookPosts.map((post) => (
            <div key={post.slug} className="flex gap-8">
              {/* Cover Image */}
              <Link href={`/books/${post.slug}`} className="flex-shrink-0">
                <div className="relative w-36 h-52">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 144px, 144px"
                    className="object-cover rounded-lg shadow-md hover:shadow-lg transition"
                  />
                </div>
              </Link>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <Link href={`/books/${post.slug}`}>
                  <h2 className="text-2xl font-bold mb-2 hover:text-gray-600 transition">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-3">{post.summary}</p>
                <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                <Link
                  href={`/books/${post.slug}`}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition w-fit"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))
          }
        </div >
      )}
    </section >
  );
}
