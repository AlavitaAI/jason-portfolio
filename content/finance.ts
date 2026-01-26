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
    title: "Macy’s: A Bold New Chapter or a Value Trap? A $28.46 Case for Private Equity",
    ticker: "M",
    date: "Jan 25, 2026",
    summary: "Deep-dive equity research and LBO analysis of Macy's (M).",
    content: `
      <p>This report provides a comprehensive valuation of Macy's, including a detailed LBO model, comparable company analysis, and a technical investment thesis based on fiscal year 2024 and Q3 2025 performance data.</p>
      
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb;">
        <h3 style="margin-top: 0; color: #111827;">📊 Analysis Assets</h3>
        <p>For the full technical breakdown, you can access the original files below:</p>
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 12px;">
            <a href="/macys-analysis.pdf" target="_blank" style="color: #2563eb; font-weight: bold; text-decoration: underline;">
              📄 Read Full Investment Thesis & Strategic Notes (PDF)
            </a>
          </li>
          <li style="margin-bottom: 12px;">
            <a href="/macys-lbo-model.xlsx" download style="color: #2563eb; font-weight: bold; text-decoration: underline;">
              📈 Download LBO & Valuation Model (Excel)
            </a>
          </li>
          <li>
            <a href="/macys-financial-summaries.xlsx" download style="color: #2563eb; font-weight: bold; text-decoration: underline;">
              📈 Download LTM Financial Summaries (Excel)
            </a>
          </li>
        </ul>
      </div>

      <h2>The Investment Thesis: Asset-Backed Stability</h2>
      <p>Macy's (M) currently trades at a significant discount to its intrinsic value, with the market pricing the equity as a "melting ice cube." Our analysis indicates that the <strong>$5B–$10B real estate portfolio</strong> and the outperformance of luxury banners (Bloomingdale’s and Bluemercury) provide a valuation floor that is largely ignored.</p>
      
      

      <h2>LBO Highlights & The Return Bridge</h2>
      <p>Our LBO model suggests that a strategic sponsor could achieve a <strong>18.0% IRR</strong> even under conservative exit assumptions. The return profile is uniquely low-risk because it does not rely on a retail "miracle":</p>
      <ul>
        <li><strong>63% of Value Creation:</strong> Driven by aggressive deleveraging, utilizing Macy’s robust ~$1.2B annual cash flow to retire expensive debt.</li>
        <li><strong>17% of Value Creation:</strong> Sourced from EBITDA growth by rationalizing the "rot" (closing 150 underperforming stores) and investing in the high-performing "First 50" Reimagine locations.</li>
      </ul>
      
      <h2>Valuation Summary & Conclusion</h2>
      <p>Using a blended methodology of 5.5x–6.0x EV/EBITDA entry multiples and a detailed cash-flow sweep, we have established a <strong>Price Target of $28.46 per share</strong>. This represents a ~58% premium over recent market lows and aligns with a "Net Debt Zero" exit strategy by Year 5.</p>
      
      <p><strong>Verdict: Aggressive Buy / Take-Private Candidate.</strong> The margin of safety provided by trophy assets like Herald Square makes this one of the most asymmetric risk/reward plays in the retail sector today.</p>

      <hr style="margin: 40px 0; border: 0; border-top: 1px solid #eee;" />
      
      <h3>Full Report Preview</h3>
      <iframe src="/downloads/macys-analysis.pdf" width="100%" height="800px" style="border: 1px solid #ddd; border-radius: 4px;">
        <p>It appears your browser doesn't support PDFs. <a href="/downloads/macys-analysis.pdf">Click here to download the PDF</a>.</p>
      </iframe>
    `,
  },
];

export default financePosts;