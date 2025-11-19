/*
Full layout for a beautiful, professional homepage built with Tailwind CSS and Next.js. This will:
- Feature a clean hero section
- Introduce you as an aspiring investor
- Include a professional nav bar
- Link to your investment portfolio page
*/

// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-lime-400">Jason Conroy</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-lime-300 transition">Home</Link>
          <Link href="/portfolio" className="hover:text-lime-300 transition">Portfolio</Link>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-extrabold text-lime-400 mb-6">Private Equity Portfolio Showcase</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          I’m a Private Equity professional focused on mastering investment analysis. Every week, I publish a deep-dive case study on a public company from an investor’s perspective—LBO modeling, valuation, memos, and more.
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