// pages/portfolio.tsx
import Image from "next/image";
import Link from "next/link";
import caseStudies from "@/data/caseStudies";

export default function Portfolio() {
  return (
    <section className="container-xl py-12">
      <h1 className="text-3xl font-bold mb-2">Portfolio / Deal Room</h1>
      <p className="text-gray-600 mb-8">
        Weekly case studies analyzing public companies like PE targets. Each
        includes a memo, valuation work, LBO, and value creation plan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((deal) => (
          <div key={deal.slug} className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              {deal.logo && (
                <div className="relative w-10 h-10">
                  <Image src={deal.logo} alt={deal.company} fill className="object-contain" />
                </div>
              )}
              <h2 className="text-xl font-semibold">{deal.company}</h2>
            </div>

            <p className="text-gray-700 mb-5">{deal.summary}</p>

            <div className="flex flex-wrap gap-3">
              <Link href={`/portfolio/${deal.slug}`} className="btn btn-primary">
                Full Analysis
              </Link>
              {deal.memo && (
                <a className="btn btn-ghost" href={deal.memo} target="_blank" rel="noreferrer">
                  Investment Memo
                </a>
              )}
              {deal.dcf && (
                <a className="btn btn-ghost" href={deal.dcf} target="_blank" rel="noreferrer">
                  DCF / Comps
                </a>
              )}
              {deal.lbo && (
                <a className="btn btn-ghost" href={deal.lbo} target="_blank" rel="noreferrer">
                  LBO Model
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
