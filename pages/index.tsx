// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white font-sans">
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-lime-400">Jason Conroy</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-lime-300 transition">Home</Link>
          <Link href="/portfolio" className="hover:text-lime-300 transition">Portfolio</Link>
          <Link href="/blog" className="hover:text-lime-300 transition">Blog</Link>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center text-center px-6 py-28">
        <h2 className="text-5xl md:text-6xl font-extrabold text-lime-400 mb-6 leading-tight">
          Hi, I’m Jason Conroy
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-6">
          A Private Equity professional with a finance background. I specialize in valuation, modeling, and deal analysis—and I’m building this site to showcase my work and growth as a future investor.
        </p>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
          Every week, I publish an investment case study analyzing different public companies as if they were PE targets—modeling LBOs, writing investment memos, and identifying value creation strategies.
        </p>
        <Link href="/portfolio" className="bg-lime-400 text-black px-6 py-3 text-lg font-semibold rounded-full hover:bg-lime-300 transition">
          Explore My Work
        </Link>
      </main>

      <footer className="text-center text-sm text-gray-600 py-6 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Jason Conroy. All rights reserved.
      </footer>
    </div>
  );
}
