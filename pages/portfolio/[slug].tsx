// pages/portfolio/[slug].tsx
import { useRouter } from "next/router";
import Image from "next/image";
import caseStudies from "@/data/caseStudies";

export default function DealPage() {
  const { query } = useRouter();
  const deal = caseStudies.find((d) => d.slug === query.slug);

  if (!deal) return <section className="container-xl py-12">Not found.</section>;

  return (
    <section className="container-xl py-12">
      <div className="card p-8">
        <div className="flex items-center gap-3 mb-2">
          {deal.logo && (
            <div className="relative w-10 h-10">
              <Image src={deal.logo} alt={deal.company} fill className="object-contain" />
            </div>
          )}
          <h1 className="text-2xl md:text-3xl font-bold">{deal.company}</h1>
        </div>
        <p className="text-gray-600 mb-6">{deal.summary}</p>

        <article className="prose max-w-none">
          {deal.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>

        <div className="mt-8 flex flex-wrap gap-3">
          {deal.memo && (
            <a className="btn btn-primary" href={deal.memo} target="_blank" rel="noreferrer">
              Investment Memo (PDF)
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
    </section>
  );
}
