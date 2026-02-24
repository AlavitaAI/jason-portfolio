export type BookPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  dateRead: string;
  rating: number; // 1-5 stars
  cover: string;
  summary: string;
  content: string;
};

const bookPosts: BookPost[] = [
  {
    slug: "the-personal-mba",
    title: "The Personal MBA",
    author: "Josh Kaufman",
    date: "Jan 9, 2026",
    dateRead: "January 7, 2026",
    rating: 4, // Change this to your rating (1-5)
    cover: "/covers/personal-mba.jpg",
    summary: "A comprehensive business education in one book.",
    content: `
      <h2>Summary</h2>
      <p>This book is a complete overview of all things business. From marketing to finance to working with other people, this book really does a great job of covering it all. Kaufman gives amazing ideas, principles, explanations, and also points the user in the right direction if they are looking to learn more about any of the vast pool of topics the author covers.</p>

      <h2>My Favorite Takeaways</h2>
      <ul>
        <li>I love the idea of making something people desire. That is such a strong word and it evokes so much emotion, it really made me think. When building a company, or creating a product, how can you get your prospects to have that visceral feeling? If you can't, you are probbaly just wasting your time and energy.</li>
        <li>Create as much value as possible, as effectively and effiiciently as possible. Do not spend time worrying about what you're competitors are doing, just focus on building something amazing, and exciting. This is exactly what Apple has done so well, and why their competition struggles to catchup. Apple focuses on their ideas, and how they can produce.</li>
        <li>I really enjoyed the idea of financial sufficiency. The idea is that once you are bringing in enough profit to pay rent, pay emplyees, have food on the table, etc., you are sufficient. Yeah, maybe you are not driving an Audi R8, or wearing a Rolex, but is that really what you need to be happy and successful? Being sufficient gives you the freedom to live your life, while working on something that fufills you everyday. That sounds like a successful life to me.</li>
        <li>Don't think that you are the voice in your head. The "onion brain" as Kaufman calls it, has many layers. You need to be able to take control of your brain and understand that although it is working 24/7, always analyzing and gathering data, you are in control of your destiny as you are the one who makes the actual decision. Calm down, maybe meditate a bit. Seomtimes life is challenging and scary but you are there to set some direction and reassure the crazy onion brain that is is safe to proceed.</li>
        <li>The Five-Fold Why is a great conce[t. Obviously not created by Kaufman, but his explanation of it was great. This is a simple way to figure out why you really want something.</li>
        <li>I think the chapter "Working With Yourself" is maybe the best one. Understanding your energy cycles throughout the day - what gives you energy, what drains you, are all super important. As is not falling on the hedonic treadmill of never being satisfied, and never achieving happiness. Comparison fallacy is another idea Kaufman mentions that I know I have fallen victim to before. Doing it is silly, your only metric of success should be: do you do things you like, with people you enjoy, in a way that keeps you financially sufficient?</li>

        </ul>

      <h2>Real World Application</h2>
      <p>The best part of this book is how actionable it is. You can definitely apply many of these ideas to your life, and use this book as a reference for years to come. Whether you are looking to start a business or just want to improve your business knowledge, this is a foundational text. Even if you aren't heavily involved in business, the mental models covered—like understanding energy cycles—apply to everyone. It encourages you to not just consume information, but to structure your life in a way that allows you to be financially sufficient while doing work that fulfills you.</p>
    `,
  },
  {
    slug: "grit",
    title: "Grit",
    author: "Angela Duckworth",
    date: "Jan 16, 2026",
    dateRead: "January 14, 2026",
    rating: 5,
    cover: "/covers/grit.jpg",
    summary: "The power of passion and perseverance.",
    content: `
      <h2>Summary</h2>
      <p>In Grit, Angela Duckworth argues that the secret to outstanding achievement isn't talent, but a special blend of passion and persistence she calls "grit." We often fall into the trap of being "distracted by talent," assuming that greatness is a divine gift rather than a result of mundane, individual feats performed over and over. Duckworth breaks down the "effort counts twice" formula: Talent x Effort = Skill, and Skill x Effort = Achievement.</p>
      <p>The book's central message is that our potential is one thing, but what we do with it is quite another. Achievement is what happens when you take your acquired skills and use them repeatedly, especially when things get boring or difficult. Whether it's through "deliberate practice," finding a deeper purpose, or building a "culture of grit," the book serves as a roadmap for anyone who wants to stop quitting too early and start finishing what they begin.</p>

      <h2>My Favorite Takeaways</h2>
      <ul>
        <li><strong>Effort Over Talent:</strong> We often fixate on talent as a way to avoid competing; if someone is a "genius," we aren't obligated to compare ourselves. In reality, greatness is just many doable feats added together. Talent only determines how quickly your skills improve, but effort is what actually produces results.</li>
        <li><strong>The 25/5 Rule for Passion:</strong> Passion isn't just excitement; it's direction. Write down 25 career goals, circle the top 5, and avoid the other 20 at all costs. Those secondary goals are the ones that distract you from the common purpose that actually matters.</li>
        <li><strong>Deliberate Practice vs. Flow:</strong> Flow is great when challenge and skill are balanced, but growth happens during "deliberate practice." This is the 3–5 hours a day of working on your weaknesses until they become fluent. It's not always fun, but achieving the results is.</li>
        <li><strong>Hope as Control:</strong> Hope in grit isn't just wishing things get better; it's the belief that your own efforts can improve your future. It's the "fall 6 times, get up 7" mentality. If you have a fixed mindset, you're guaranteed to stay disappointed.</li>
        <li><strong>The Hard Thing Rule:</strong> To build grit, you need to commit to one "hard thing" and stick to it. You can't quit on a bad day or when you're confused; you can only quit at a natural stopping point, like the end of a season or a project.</li>
        <li><strong>Culture Shapes Identity:</strong> It is much easier to be gritty when you are part of a gritty culture. We eventually adopt the habits of the people we surround ourselves with. If you think of yourself as someone who overcomes adversity, your behavior will eventually rise to meet that identity.</li>
      </ul>

      <h2>Real World Application</h2>
      <p>It is easy to be "distracted by talent" and assume successful people are just naturally gifted. However, realizing that they likely sucked at the start is empowering. Adopting a "growth mindset" allows you to accept confusion and failure as part of the process. When things get boring or difficult, that is usually just the signal that the "honeymoon phase" is over, and the real work of building grit begins.</p>
      <p>One practical way to build this is the "Hard Thing Rule." Commit to something and refuse to quit until a natural stopping point—like the end of a season or project—rather than quitting on a bad day. Additionally, be "supportive yet demanding" with the people you lead or love. High standards coupled with deep support create an environment where grit can thrive. Finally, stop envying successful people. Use their success as fuel and competition to shape the best version of yourself, and surround yourself with a "culture of grit" to make staying on the path easier.</p>
    `,
  },
  {
    slug: "thinking-in-bets",
    title: "Thinking in Bets",
    author: "Annie Duke",
    date: "Jan 23, 2026",
    dateRead: "January 22, 2026",
    rating: 4,
    cover: "/covers/thinking-in-bets.jpg",
    summary: "Making smarter decisions when you don't have all the facts.",
    content: `
      <h2>Summary</h2>
      <p>In Thinking in Bets, former World Series of Poker champion Annie Duke explores how to navigate a world where we rarely have all the facts. She argues that our lives are a series of bets based on our beliefs, which are often biased and incomplete. The book's central thesis is a rejection of "resulting"—the flawed habit of equating the quality of a decision with its outcome—and "hindsight bias," which makes us feel that a result was inevitable once it has occurred.</p>
      <p>By treating decisions as poker hands rather than chess moves, Duke provides a toolkit for making better choices under pressure. She teaches readers how to detach their egos from their ideas, embrace the "I'm not sure" mindset, and use "temporal distancing" to view current problems from a long-term perspective. Ultimately, the book is a guide to shifting your focus from the unpredictable results of life to the logic of the decision-making process itself, ensuring that even when you lose a "bet," you still gain the data necessary to win the next one.</p>

      <h2>My Favorite Takeaways</h2>
      <ul>
        <li><strong>Ditch "Resulting":</strong> Stop judging decisions solely by their outcomes. Life is more like poker than chess; it involves luck and hidden information. Making peace with the "grey area" and accepting uncertainty is the first step toward genuine growth.</li>
        <li><strong>Beliefs as Bets:</strong> Our beliefs aren't objective truths; they are often biased filters. By viewing your certainty as a percentage (e.g., "I'm 60% sure") rather than a binary "right or wrong," you become more open to new information and a better collaborator.</li>
        <li><strong>Luck vs. Skill:</strong> To grow, you must objectively "field" outcomes. Don't fall for the ego trap of blaming bad luck for failures while taking total credit for successes. Emulate pros like Phil Ivey: admit mistakes, give credit to others, and let your learning compound.</li>
        <li><strong>Build a Truth-Seeking Circle:</strong> Success is easier when you're surrounded by people who challenge you rather than just agree with you. Use these groups to hold yourself accountable, avoid echo chambers, and practice explaining your reasoning before you act.</li>
        <li><strong>Radical Transparency:</strong> Combat your brain's natural bias by sharing every detail—especially the ones you want to hide. Don't "shoot the messenger," withhold your opinion until others have spoken, and always acknowledge points of agreement first to lower defensiveness.</li>
        <li><strong>The Power of Time Travel:</strong> Use the 10-10-10 rule to zoom out and consult your future self. Tools like "backcasting" from success or "pre-mortems" on failure help you evaluate choices rationally before emotions take over. Wean yourself off the "outcome addiction" to find true contentment.</li>
      </ul>

      <h2>Real World Application</h2>
      <p>We often struggle with regret because we feel we "should have known" how things would turn out. In reality, you can only make the best bet given what you know at the moment. Accepting that good bets can lose and bad bets can win is liberating. It allows you to separate the quality of your decisions from the luck of the outcome.</p>
      <p>Embracing uncertainty is a strength, not a weakness. Being comfortable saying "I'm not sure"—or "I'm 60% sure"—allows for more honest collaboration and better decision making. Seek out people who challenge your views rather than just agreeing with you, as this prevents echo chambers.</p>
      <p>Finally, avoid being a "ticker watcher" in life. Zooming out during stressful moments helps verify if the current problem will actually matter in 10 months or 10 years. Instead of complaining about bad luck, analyze what could have been done better. Luck is a huge factor in life, but focusing on your process ensures you are ready when the next opportunity arises.</p>
    `,
  },
  {
    slug: "the-outsiders",
    title: "The Outsiders",
    author: "William N. Thorndike, Jr.",
    date: "Jan 30, 2026",
    dateRead: "January 30, 2026",
    rating: 5,
    cover: "/covers/the-outsiders.jpg",
    summary: "Eight Unconventional CEOs and Their Radically Rational Blueprint for Success.",
    content: `
      <h2>Summary</h2>
      <p>The Outsiders details the extraordinary success of eight unconventional CEOs who took a radically rational approach to capital allocation. William Thorndike analyzed these leaders—including names like Warren Buffett (Berkshire Hathaway), Henry Singleton (Teledyne), and Tom Murphy (Capital Cities)—and found that they shared a common set of traits that differed sharply from their peers. They didn't focus on quarterly earnings or empire building; instead, they focused relentlessly on maximizing per-share value over the long term.</p>
      <p>The core premise is that a CEO has two distinct jobs: running the operations efficiently and deploying the cash those operations generate. While most CEOs focus on the former, the "Outsiders" excelled at the latter. They treated capital allocation as their primary responsibility, often making contrarian moves like aggressive share buybacks when their stock was cheap, or avoiding dividends to reinvest in higher-return opportunities. The result? They outperformed the S&P 500 by a massive margin over decades.</p>

      <h2>My Favorite Takeaways</h2>
      <ul>
        <li><strong>Capital Allocation is King:</strong> The most important job of a CEO is capital allocation. It's not just about operations; it's about what you do with the money you make. Over the long term, returns are determined by how effectively cash is deployed.</li>
        <li><strong>Cash Flow > Reported Earnings:</strong> These CEOs ignored conventional metrics like reported earnings and focused entirely on cash flow. They knew that accounting profits could be manipulated or misleading, but cash was reality.</li>
        <li><strong> The Power of Buybacks:</strong> When their own stock was trading below intrinsic value, they bought it back aggressiveness. This simple act of shrinking the share count significantly boosted value per share for remaining shareholders—a strategy Henry Singleton pioneered at Teledyne.</li>
        <li><strong>Decentralization:</strong> Almost all of these companies operated with incredibly lean corporate headquarters. They pushed decision-making power down to the local managers who knew the business best, reducing bureaucracy and fostering an entrepreneurial spirit.</li>
        <li><strong>Patience and Boldness:</strong> They were willing to sit on cash for long periods when opportunities were scarce, but when a "fat pitch" came along, they bet big. They didn't feel the need to be active just for the sake of activity.</li>
      </ul>

      <h2>Real World Application</h2>
      <p>The "Outsiders" mindset reinforces the idea that "activity" does not equal "progress." In business and life, it is often better to focus less on vanity metrics—like revenue growth or social status—and more on the underlying value per unit of effort or capital.</p>
      <p>Beware of the "institutional imperative," which is the pressure to mindlessly copy what everyone else is doing. Applying this to the real world means having the courage to look foolish in the short term to be successful in the long term. Whether it's investing, career choices, or life decisions, you must be comfortable standing apart from the crowd if the logic and math support your path.</p>
    `,
  },
  {
    slug: "good-to-great",
    title: "Good to Great",
    author: "Jim Collins",
    date: "Feb 6, 2026",
    dateRead: "February 6, 2026",
    rating: 5,
    cover: "/covers/good-to-great.jpg",
    summary: "Why Some Companies Make the Leap... and Others Don't.",
    content: `
      <h2>Summary</h2>
      <p>In Good to Great, Jim Collins and his research team identify a set of elite companies that transitioned from average performance to sustained excellence, outperforming the general stock market by several multiples over 15 years. The book dismantles the myth of the "celebrity CEO" and focuses instead on a disciplined framework of people, thought, and action. Collins argues that greatness is not a function of circumstance, but a matter of conscious choice and discipline.</p>
      <p>The transition follows a specific trajectory: disciplined people lead to disciplined thought, which leads to disciplined action. This process creates a "Flywheel" effect—where small, consistent wins build momentum over time until a breakthrough occurs. Unlike the "Doom Loop" of reactionary changes and restructuring, great companies stay the course by sticking to their core competencies and hiring the right people before deciding where to drive the bus.</p>

      <h2>My Favorite Takeaways</h2>
      <ul>
        <li><strong>Level 5 Leadership:</strong> The most successful leaders aren't flashy or charismatic; they are humble, quiet, and possess a paradoxical blend of personal humility and professional will. They look in the mirror when things go wrong and out the window when things go right.</li>
        <li><strong>First Who, Then What:</strong> Before setting a vision or strategy, get the right people on the bus (and the wrong people off). If you have the right people, the problem of how to motivate and manage them largely goes away.</li>
        <li><strong>The Hedgehog Concept:</strong> Greatness comes from the intersection of three circles: what you are deeply passionate about, what you can be the best in the world at, and what drives your economic engine. If you can't be the best at it, it shouldn't be your core business.</li>
        <li><strong>The Stockdale Paradox:</strong> You must maintain unwavering faith that you will prevail in the end, regardless of the difficulties, while simultaneously confronting the most brutal facts of your current reality.</li>
        <li><strong>Technology Accelerators:</strong> Great companies never use technology as the primary creator of momentum. Instead, they use carefully selected technology to accelerate the momentum they have already built through their Hedgehog Concept.</li>
      </ul>

      <h2>Real World Application</h2>
      <p>The "Flywheel" is a perfect metaphor for career and personal growth. Success rarely comes from a single "lucky break" or a "big bang" moment. It comes from the accumulation of small, disciplined efforts that eventually reach a tipping point.</p>
      <p>Applying the "First Who" principle to life means being incredibly selective about your inner circle. Whether in a startup or a friendship group, the quality of the people around you will dictate the ultimate destination more than any roadmap ever could. Avoid the "genius with a thousand helpers" model; instead, build a culture of rigorous self-discipline where management becomes unnecessary.</p>
    `,
  },

  {
    slug: "zero-to-one",
    title: "Zero to One",
    author: "Peter Thiel",
    date: "Feb 21, 2026",
    dateRead: "February 13, 2026",
    rating: 5,
    cover: "/covers/zero-to-one.jpg",
    summary: "Notes on Startups, or How to Build the Future.",
    content: `
      <h2>Summary</h2>
      <p>Zero to One is a contrarian manifesto on innovation. Peter Thiel argues that we live in an age of technological stagnation, hidden by the flashiness of mobile devices. Most people focus on "1 to n"—copying things that already work (horizontal progress). True innovation is "0 to 1"—creating something entirely new (vertical progress). Thiel posits that the next Bill Gates won't build an operating system, and the next Mark Zuckerberg won't build a social network.</p>
      <p>The book challenges the standard economic praise for competition, arguing instead that "competition is for losers." To build a massively successful company, one must seek to build a creative monopoly. By doing something 10x better than anyone else or solving a problem no one else is looking at, a company can escape the cutthroat margins of a competitive market and earn the profits necessary to keep innovating.</p>

      <h2>My Favorite Takeaways</h2>
      <ul>
        <li><strong>The Contrarian Question:</strong> "What important truth do very few people agree with you on?" Most answers are based on the present, but good answers look toward the future. This is the starting point for any 0 to 1 business.</li>
        <li><strong>Monopoly is the Goal:</strong> Competition destroys profits. A "Creative Monopoly" is a company so good at what it does that no other firm can offer a close substitute. Think Google in search.</li>
        <li><strong>The Power Law of Venture Capital:</strong> In startups, a small handful of companies (or investments) will outperform all others combined. You should only start a business or join a team if you believe it has the potential to be that one-in-a-million outlier.</li>
        <li><strong>Secrets:</strong> Every great business is built around a secret—something true but difficult, or something known only to a few. If you believe there are no more secrets left to find, you’ll never look for the 0 to 1 opportunities.</li>
        <li><strong>Sales is Everywhere:</strong> Even the most brilliant product won't sell itself. Engineers often overlook this, but distribution is as important as the product. If you’ve invented something new but haven’t invented an effective way to sell it, you have a bad business.</li>
      </ul>

      <h2>Real World Application</h2>
      <p>Thiel’s philosophy encourages us to stop competing in crowded spaces. If you are doing what everyone else is doing, you are fighting for crumbs. Whether you are choosing a career path or a project, look for the "unpopular" or "ignored" niche where you can become the undisputed expert.</p>
      <p>The most important lesson is to think for yourself from "First Principles." Don't just follow the "lean startup" dogmas of incremental improvement. Have the courage to have a "Definite Plan" for the future. Even a bad plan is better than no plan at all, because a plan allows you to act with intention rather than reacting to the chaos of the market.</p>
    `,
  },
];

export default bookPosts;

// Triggering newsletter automation test 2
