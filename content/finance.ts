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
    summary: "Deep-dive equity research and LBO analysis of Macy's (M).",
    content: `
      <p>This report provides a comprehensive valuation of Macy's, including a detailed LBO model, comparable company analysis, and a 20-page investment thesis.</p>
      
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">📊 Analysis Assets</h3>
        <p>For the full technical breakdown, you can access the original files below:</p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 10px;">
            <a href="/downloads/macys-analysis.pdf" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">
              📄 Read Full 20-Page Investment Thesis (PDF)
            </a>
          </li>
          <li>
            <a href="/downloads/macys-lbo-model.xlsx" download style="color: #2563eb; font-weight: bold; text-decoration: underline;">
              📈 Download LBO & Valuation Model (Excel)
            </a>
          </li>
        </ul>
      </div>

      <h2>Investment Thesis</h2>
      <p>Macy's presents a compelling case based on its real estate value and ongoing 'A Bold New Chapter' strategy. My analysis suggests a significant margin of safety at current trading multiples.</p>
      
      <h2>Financials & LBO Highlights</h2>
      <p>Based on the LBO model, the exit IRR remains attractive under conservative exit multiples. Cash flow stability is the primary driver for the debt paydown schedule...</p>
      
      <h2>Valuation Summary</h2>
      <p>Using a blend of EV/EBITDA exit multiples and Perpetuity Growth methods, the intrinsic value per share is estimated at [Insert Your Price Target].</p>

      <hr style="margin: 40px 0;" />
      
      <h3>Full Report Preview</h3>
      <iframe src="/downloads/macys-analysis.pdf" width="100%" height="800px" style="border: 1px solid #ddd;">
        <p>It appears your browser doesn't support PDFs. <a href="/downloads/macys-analysis.pdf">Click here to download the PDF</a>.</p>
      </iframe>
    `,
  },
];

export default financePosts;