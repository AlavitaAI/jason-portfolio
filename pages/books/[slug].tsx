import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import bookPosts, { BookPost } from "@/content/books";

type Props = {
  post: BookPost;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-3xl">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={star <= rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function BookPostPage({ post }: Props) {
  return (
    <article className="container-xl py-16">
      {/* Back link */}
      <Link href="/books" className="text-gray-500 hover:text-gray-900 text-sm mb-8 inline-block">
        ← Back to Books
      </Link>

      {/* Header with Cover + Info */}
      <header className="flex gap-10 mb-12">
        {/* Cover Image */}
        <div className="relative w-64 h-96 flex-shrink-0">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover rounded-lg shadow-lg"
            unoptimized
            priority
          />
        </div>

        {/* Title, Author, Date, Rating */}
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl font-bold mb-4 leading-tight">{post.title}</h1>
          <p className="text-2xl text-gray-600 mb-6">by {post.author}</p>
          <p className="text-gray-400 mb-4">
            Date Read: {post.dateRead}
          </p>
          <StarRating rating={post.rating} />
        </div>
      </header>

      {/* Content */}
      <div
        className="prose prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = bookPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = bookPosts.find((p) => p.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};
