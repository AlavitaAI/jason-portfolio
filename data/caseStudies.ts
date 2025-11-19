// data/caseStudies.ts
export type CaseStudy = {
  slug: string;
  company: string;
  logo?: string;      // /public/logos/txrh.png (optional)
  summary: string;
  memo?: string;      // link to PDF
  dcf?: string;       // Google Sheet or file
  lbo?: string;       // Google Sheet or file
  body: string[];     // paragraphs for detail page
};

const caseStudies: CaseStudy[] = [
  {
    slug: "texas-roadhouse",
    company: "Texas Roadhouse ($TXRH)",
    logo: "/logos/txrh.png",
    summary:
      "LBO and investment memo on a resilient casual dining chain with real estate value.",
    memo: "#", // add your PDF link
    dcf: "#",
    lbo: "#",
    body: [
      "This case explores a buyout of Texas Roadhouse, a profitable operator with 700+ locations.",
      "Value creation: operations, new unit growth, and real estate optimization.",
      "Assuming 9.0x entry, 60% leverage, 5-year exit at 10.5x, modeled IRR ≈ 24.2%.",
    ],
  },
  {
    slug: "dollar-general",
    company: "Dollar General ($DG)",
    logo: "/logos/dg.png",
    summary:
      "Public-to-private thesis on recession-resistant retail with rural penetration.",
    memo: "#",
    dcf: "#",
    lbo: "#",
    body: [
      "Compelling due to consistent cash flow and loyal value-oriented customer base.",
      "Entry 7.5x LTM EBITDA; deleveraging drives returns; private label margin upside.",
      "Exit: IPO or strategic in 4–5 years.",
    ],
  },
];

export default caseStudies;
