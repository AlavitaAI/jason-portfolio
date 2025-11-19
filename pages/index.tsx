// pages/index.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container-xl pt-16 pb-24">
      {/* Hero Card */}
      <div className="card py-16 px-6 md:px-12 text-center">
        <div className="mx-auto w-28 h-28 relative mb-6">
          <Image
            src="/profile.jpg" /* place a photo at /public/profile.jpg */
            alt="Jason Conroy"
            fill
            className="rounded-full object-cover shadow"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          Jason Conroy
        </h1>
        <p className="text-gray-500 mb-6">Private Equity professional in Boston</p>

        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed mb-6">
          Hi, I’m Jason Conroy, a Private Equity professional with a finance
          background. I specialize in valuation, modeling, and deal analysis—and
          I’m building this site to showcase my work and growth as a future
          investor.
        </p>
        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Every week, I publish an investment case study analyzing different
          public companies as if they were PE targets—modeling LBOs, writing
          investment memos, and identifying value creation strategies.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/portfolio" className="btn btn-primary">
            Explore Portfolio
          </Link>
          <Link href="/about" className="btn btn-ghost">
            About Me
          </Link>
          <Link href="/blog" className="btn btn-ghost">
            Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
