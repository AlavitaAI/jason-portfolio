// pages/index.tsx
import Link from 'next/link';
import Image from 'next/image';


export default function Home() {
return (
<div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-900 font-sans">
<header className="w-full border-b border-gray-200 bg-white shadow-sm">
<div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
<h1 className="text-xl font-bold">Jason Conroy</h1>
<nav className="space-x-6 text-sm font-medium text-gray-600">
<Link href="/" className="hover:text-black">Home</Link>
<Link href="/about" className="hover:text-black">About</Link>
<Link href="/portfolio" className="hover:text-black">Portfolio</Link>
<Link href="/blog" className="hover:text-black">Blog</Link>
</nav>
</div>
</header>


<main className="flex flex-col items-center justify-center text-center px-6 py-28">
<Image
src="/profile.jpg"
alt="Jason Conroy profile"
width={120}
height={120}
className="rounded-full shadow-md mb-6"
/>
<h2 className="text-4xl font-extrabold mb-4">Jason Conroy</h2>
<p className="text-gray-500 text-sm mb-2">Private Equity Professional in Boston</p>
<p className="text-gray-700 max-w-xl mb-6">
I specialize in valuation, modeling, and deal analysis. Every week, I publish an investment case study analyzing different public companies like a PE target—LBO modeling, investment memos, and value creation strategies.
</p>
<div className="flex space-x-4">
<a
href="https://linkedin.com/in/jasonconroy"
target="_blank"
className="text-sm text-gray-600 hover:text-black border px-4 py-2 rounded-md"
>
LinkedIn
</a>
<a
href="mailto:jason@email.com"
className="text-sm text-gray-600 hover:text-black border px-4 py-2 rounded-md"
>
Contact
</a>
</div>
</main>


<footer className="text-center text-sm text-gray-400 py-6 border-t border-gray-200">
&copy; {new Date().getFullYear()} Jason Conroy. All rights reserved.
</footer>
</div>
);
}
