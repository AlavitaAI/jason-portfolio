// pages/portfolio.tsx
import caseStudies from '../data/caseStudies';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-lime-400">Investment Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((deal) => (
          <Link key={deal.slug} href={`/portfolio/${deal.slug}`} className="bg-gray-800 rounded-lg p-5 hover:bg-gray-700 transition">
            <h2 className="text-2xl font-semibold">{deal.company}</h2>
            <p className="text-gray-300 text-sm mt-2">{deal.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
