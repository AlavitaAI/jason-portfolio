import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import bookPosts, { BookPost } from "@/content/books";

type Props = {
  post: BookPost;
};

export default function BookPostPage({ post }: Props) {
  return (
    <article className="container-xl py-16">
      {/* Back link */}
      <Link href="/books" className="text-gray-500 hover:text-gray-900 text-sm mb-8 inline-block">
        ← Back to Books
      </Link>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500">
          by {post.author} · {post.date}
        </p>
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

