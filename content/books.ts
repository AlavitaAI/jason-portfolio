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

      <h2>How I'll Apply This</h2>
      <p>I think maybe the best part of this book is that there is so much content that is actionable. I will definitely be applying many of the ideas to my life, and I will definitely be using this book as a reference for the future. I think this is a great book for anyone who is looking to start a business, or just wants to improve their business knowledge. I recently started my own startup, and it has been a struggle. While I enjoy it, and it isn't my source of income, there are certain things I have struggled with that Kaufman covers in a very simple way. His ability to explain complex concepts and ideas in an easy to read and understand way is really great. I also think this book has a lot to do with the mental aspect of business and life, so even if you aren't heavily involved in business, it can still provide you with a lot of concepts and values that you can use in your own life. I really enjoyed this book, as it covered so much, but didn't feel overwhelmingly dense. His way of writing makes it light, and the structure of the book allows the read to pick it up and put it down easily without having to study large amounts of information at a time. Really enjoyed it, and would recommend it.</p>
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

      <h2>How I'll Apply This</h2>
      <p>I definitely relate to being "distracted by talent." When I was younger, I thought it was cool to succeed without trying, but weightlifting showed me that it's okay to absolutely suck at the start. I need to bring that same "growth mindset" to everything I am working on now. Right now, sometimes I quit too easily when things are confusing, but I need to accept that I'm not naturally gifted yet and just put in the hours.</p>
      <p>I'm going to start using the "Hard Thing Rule." I have a habit of getting really interested in something and then quitting when the "honeymoon phase" ends and it gets boring. From now on, I'm going to try harder to follow through until the natural end, no matter how hard it gets.</p>
      <p>I strive to be "supportive yet demanding" in my relationships. It is good to be demanding of the people you love because you believe in them, but you need to add a more supportive tone sometimes so that they know you are in their corner. I also need to make sure my body language matches my words. If I say I'm positive but my face looks defeated, I'm not being gritty. I fall victim to this quite a bit!</p>
      <p>Stop envying successful people and start using them as competition fuel. Like Pete Carroll using a Super Bowl loss as fuel, I want to use my own failures and the success of others to shape the best version of myself. Finding a "culture of grit" in your career is important—people who are on the same mission—because it's way easier to stay on the treadmill when everyone else is running too.</p>
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

      <h2>How I'll Apply This</h2>
      <p>I do think there is a lot I can take from this book and apply to my life. Sometimes I struggle with regret because I feel "I should have known". In reality, I need to accept that I can make the best bet given all I know at the moment, but good bets can still turnout bad, and bad bets can turnout good. Luck is always at play. Life is not black and white, 0% or 100%, right or wrong.</p>
      <p>Accepting uncertainty is actually a good thing. I could do a much better job in terms of acknowledging I am not 100% sure sometimes, and be okay with living in the in-between of confident and not confident.</p>
      <p>Find people who hold you accountable and don't all just agree with each other. That being said, not everyone needs to be committed to a truthseeking experience, and sometimes the situation just requires you to be quiet and let someone vent. It is okay to be quiet, even if you want to interject. Not everyone wants my advice all the time, sometimes they just want to complain about the world, and that is OK. There are times for advice and rationalization, and times for listening.</p>
      <p>Sometimes I am too quick to say someone else is lucky, when I would have claimed it was skill if I had achieved the same outcome. Instead of thinking lucky vs unlucky, I can instead figure out what they did well, or what I could have done better. This leads to growth.</p>
      <p>I can start by finding out where I agree with people. Be more open to their ideas, and the idea that I may be wrong, or just unsure! Newsflash: I don't know everything.</p>
      <p>I can do a much better job zooming out during stressful or emotional times. There is no need to get worked up about something that has no affect on the grand scheme of life. Don't be a ticker watcher!</p>
      <p>I tend to want to know how everything will go, so I can do more to accept the uncertainty of things, and instead just make my best bet. When I make that bet, I need to accept that luck is a huge factor, and we can never be 100% sure. I may win my bet, which is great, but I will inevitably lose quite a lot. So instead of complaining, learn from it, and use it to make a better bet next time. You will get a second chance.</p>
    `,
  },
  {
    slug: "the-outsiders",
    title: "The Outsiders",
    author: "William N. Thorndike, Jr.",
    date: "Feb 6, 2026",
    dateRead: "February 4, 2026",
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

      <h2>How I'll Apply This</h2>
      <p>This book completely changed how I view business success. It reinforced the idea that "activity" does not equal "progress." In my own work, I want to focus less on vanity metrics (like revenue growth for its own sake) and more on the underlying value per unit of effort or capital.</p>
      <p>I also love the concept of the "institutional imperative"—the tendency for executives to mindlessly copy their peers. Applying this to life means having the courage to look like an idiot in the short term to be a genius in the long term. Whether it's investing or career choices, I need to be comfortable being an "outsider" if the math and logic make sense, even when the crowd is going the other way.</p>
    `,
  },
];

export default bookPosts;

// Triggering final newsletter automation test
