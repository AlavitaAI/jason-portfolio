// pages/portfolio/[slug].tsx
import { useRouter } from 'next/router';
import caseStudies from '../../data/caseStudies'

export default function DealPage() {
  const router = useRouter();
  const { slug } = router.query;
  const deal = caseStudies.find((d) => d.slug === slug);

  if (!deal) return <p className="text-white p-10">Deal not found.</p>;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-lime-400 mb-4">{deal.company}</h1>
      <p className="text-gray-300 mb-6">{deal.summary}</p>
      <div className="space-y-4 text-gray-200 leading-relaxed">
        {deal.body.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </div>
  );
}
