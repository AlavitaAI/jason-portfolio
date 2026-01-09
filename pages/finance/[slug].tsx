import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import financePosts, { FinancePost } from "@/content/finance";

type Props = {
  post: FinancePost;
};

export default function FinancePostPage({ post }: Props) {
  return (
    <article className="container-xl py-16">
      <Link href="/finance" className="text-gray-500 hover:text-gray-900 text-sm mb-8 inline-block">
        ← Back to Finance
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500">
          ${post.ticker} · {post.date}
        </p>
      </header>

      <div
        className="prose prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = financePosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post = financePosts.find((p) => p.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

