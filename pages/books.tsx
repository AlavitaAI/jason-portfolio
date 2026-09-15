import Link from "next/link";
import Image from "next/image";
import bookPosts from "@/content/books";

export default function Books() {
  return (
    <section className="container-xl py-16">
      <h1 className="text-5xl font-bold mb-6">My Books</h1>
      <h2 className="text-3xl font-semibold mb-6 text-gray-700">2026's Books</h2>
      <p className="text-lg text-gray-700 mb-10 max-w-4xl leading-relaxed">
        These are the books I have read so far in 2026. This order is the order in which I read them. I don't have any rhyme or reason to the reviews really, most of them I just try to give my honest thoughts are. Most of my reading is related to startups and business, as well as a lot pf psychology/development style books. Occssionally I read a fiction book like City of Thieves (which was amazing by the way), or my favorite book of all time - The Alchemist. I try to read often, but it really is not enough. Anways, feel free to see my choices and if any stand out, read them yourself.
      </p>

      {bookPosts.length === 0 ? (
        <p className="text-gray-500 italic">First post coming soon...</p>
      ) : (
        <div className="space-y-12">
          {bookPosts.map((post, index) => (
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
                    {index + 1}. {post.title}
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
