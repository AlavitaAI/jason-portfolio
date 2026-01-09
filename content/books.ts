export type BookPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  summary: string;
  content: string; // HTML or plain text
};

const bookPosts: BookPost[] = [
  {
    slug: "the-personal-mba",
    title: "The Personal MBA",
    author: "Josh Kaufman",
    date: "Jan 9, 2026",
    summary: "A comprehensive business education in one book.",
    content: `
      <p>Write your thoughts about The Personal MBA here...</p>
      
      <h2>Key Takeaways</h2>
      <ul>
        <li>Takeaway 1</li>
        <li>Takeaway 2</li>
        <li>Takeaway 3</li>
      </ul>
      
      <h2>Favorite Quotes</h2>
      <blockquote>
        "Add your favorite quote here..."
      </blockquote>
      
      <h2>How I'll Apply This</h2>
      <p>Write how you plan to apply what you learned...</p>
      
      <h2>Rating</h2>
      <p>⭐⭐⭐⭐⭐ (5/5)</p>
    `,
  },
];

export default bookPosts;

