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
    rating: 5, // Change this to your rating (1-5)
    cover: "/covers/personal-mba.jpg",
    summary: "A comprehensive business education in one book.",
    content: `
      <h2>One-Sentence Summary</h2>
      <p>[What's this book about in one sentence?]</p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>[Takeaway 1]</li>
        <li>[Takeaway 2]</li>
        <li>[Takeaway 3]</li>
        <li>[Takeaway 4]</li>
        <li>[Takeaway 5]</li>
      </ul>

      <h2>Favorite Quotes</h2>
      <blockquote>"[Quote that stuck with you...]"</blockquote>
      <blockquote>"[Another great quote...]"</blockquote>

      <h2>How I'll Apply This</h2>
      <p>[What will you actually do differently after reading this?]</p>
    `,
  },
];

export default bookPosts;
