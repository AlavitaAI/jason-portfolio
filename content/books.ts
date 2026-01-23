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
    dateRead: "[Month Year]",
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
    dateRead: "[Month Year]",
    rating: 5,
    cover: "/covers/grit.jpg",
    summary: "The power of passion and perseverance.",
    content: `
      <h2>Summary</h2>
      <p>[What's this book about?]</p>

      <h2>My Favorite Takeaways</h2>
      <ul>
        <li>[Takeaway 1]</li>
        <li>[Takeaway 2]</li>
        <li>[Takeaway 3]</li>
        <li>[Takeaway 4]</li>
        <li>[Takeaway 5]</li>
      </ul>

      <h2>How I'll Apply This</h2>
      <p>[What will you actually do differently after reading this?]</p>
    `,
  },
  {
    slug: "thinking-in-bets",
    title: "Thinking in Bets",
    author: "Annie Duke",
    date: "Jan 23, 2026",
    dateRead: "[Month Year]",
    rating: 5,
    cover: "/covers/thinking-in-bets.jpg",
    summary: "Making smarter decisions when you don't have all the facts.",
    content: `
      <h2>Summary</h2>
      <p>[What's this book about?]</p>

      <h2>My Favorite Takeaways</h2>
      <ul>
        <li>[Takeaway 1]</li>
        <li>[Takeaway 2]</li>
        <li>[Takeaway 3]</li>
        <li>[Takeaway 4]</li>
        <li>[Takeaway 5]</li>
      </ul>

      <h2>How I'll Apply This</h2>
      <p>[What will you actually do differently after reading this?]</p>
    `,
  },
];

export default bookPosts;
