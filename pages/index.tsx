// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-lime-400">Jason Conroy</h1>
      <p className="text-lg md:text-xl max-w-xl text-center mb-8">
        Private Equity professional building investor-level skills. Every week I publish a new investment case study analyzing a public company like a buyout target.
      </p>
      <Link href="/portfolio" className="text-black bg-lime-400 px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition">
        View My Portfolio
      </Link>
    </main>
  );
}
