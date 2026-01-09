export type FinancePost = {
  slug: string;
  title: string;
  ticker: string;
  date: string;
  summary: string;
  content: string;
};

const financePosts: FinancePost[] = [
  {
    slug: "macys",
    title: "Macy's",
    ticker: "M",
    date: "Jan 9, 2026",
    summary: "Company analysis of Macy's.",
    content: `
      <p>Your analysis here...</p>
      
      <h2>Business Overview</h2>
      <p>...</p>
      
      <h2>Financials</h2>
      <p>...</p>
      
      <h2>Valuation</h2>
      <p>...</p>
      
      <h2>Thesis</h2>
      <p>...</p>
    `,
  },
];

export default financePosts;

