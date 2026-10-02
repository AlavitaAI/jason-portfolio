export type FinancePost = {
  slug: string;
  title: string;
  ticker?: string;
  author?: string;
  date: string;
  summary: string;
  content: string;
};

const financePosts: FinancePost[] = [
  {
    slug: "financial-intelligence",
    title: "Financial Intelligence: A Manager's Guide to Knowing What the Numbers Really Mean",
    author: "Karen Berman & Joe Knight",
    date: "October 2, 2026",
    summary: "My breakdown of 'Financial Intelligence' by Karen Berman and Joe Knight — why it's an essential read for demystifying corporate finance, understanding the art behind financial estimates, and making better business decisions.",
    content: `
      <h2>Overview & Why I Like It</h2>
      <p><em>Financial Intelligence</em> by Karen Berman and Joe Knight is one of the most practical finance books I've read. Instead of treating accounting as a rigid set of mechanical rules, the authors expose a fundamental truth that every manager and investor needs to know: <strong>financial reporting is as much an art as it is a science</strong>.</p>
      
      <p>What makes this book stand out is how accessible it makes complex corporate finance concepts. It strips away unnecessary jargon and equips you with the mindset needed to ask the right questions about balance sheets, income statements, and cash flows. Rather than taking figures at face value, it teaches you to understand the assumptions, estimates, and biases that shape them.</p>

      <h2>Key Breakdown & Core Takeaways</h2>

      <h3>1. Finance is an Art (Estimates & Assumptions)</h3>
      <p>One of the biggest misconceptions in business is that financial statements reflect exact physical reality. Berman and Knight emphasize that accountants constantly have to make educated guesses — from depreciation schedules and revenue recognition timing to bad debt allowances. Understanding where management has room for discretion is critical to evaluating the true health of a business.</p>

      <h3>2. Profit ≠ Cash (Cash Flow is Reality)</h3>
      <p>A company can report strong net income on paper while simultaneously spiraling into bankruptcy due to a lack of liquidity. Profit is an accounting estimate based on the accrual method; cash is cold, hard reality. The book does a fantastic job of highlighting why tracking operating cash flow is paramount when assessing solvency and operational efficiency.</p>

      <h3>3. The Big Three Statements are Interconnected</h3>
      <p>The authors walk through the Income Statement, Balance Sheet, and Statement of Cash Flows not as isolated reports, but as a dynamic, interconnected system:</p>
      <ul>
        <li><strong>Income Statement:</strong> Shows performance over a period of time (revenue, expenses, net profit).</li>
        <li><strong>Balance Sheet:</strong> A snapshot in time showing what the company owns (assets) versus what it owes (liabilities & equity).</li>
        <li><strong>Cash Flow Statement:</strong> Bridges the gap between profit and actual cash movement from operations, investing, and financing.</li>
      </ul>

      <h3>4. Ratios Tell the Real Story Behind the Numbers</h3>
      <p>Raw numbers don't mean much without context. The book breaks down crucial financial ratios into four key categories:</p>
      <ul>
        <li><strong>Profitability Ratios:</strong> Gross Margin, Net Margin, Return on Assets (ROA), Return on Equity (ROE).</li>
        <li><strong>Leverage Ratios:</strong> Debt-to-Equity, Interest Coverage.</li>
        <li><strong>Liquidity Ratios:</strong> Current Ratio, Quick Ratio.</li>
        <li><strong>Efficiency Ratios:</strong> Inventory Turnover, Days Sales Outstanding (DSO).</li>
      </ul>

      <h2>Final Thoughts</h2>
      <p>Whether you're managing a budget, evaluating equity investments, or building out a strategic financial model, <em>Financial Intelligence</em> provides a solid foundational framework. It shifts your perspective from passively reading financial numbers to actively interpreting what they really mean.</p>
    `,
  },
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
      <iframe src="/macys-analysis.pdf" width="100%" height="800px" style="border: 1px solid #ddd; border-radius: 4px;">
        <p>It appears your browser doesn't support PDFs. <a href="/macys-analysis.pdf">Click here to download the PDF</a>.</p>
      </iframe>
    `,
  },
];

export default financePosts;