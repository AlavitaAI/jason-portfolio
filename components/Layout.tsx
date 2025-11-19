// components/Layout.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <header className="w-full border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="container-xl h-14 flex items-center justify-between">
          <Link href="/" className="text-base font-bold">
            Jason Conroy
          </Link>
          <nav className="flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${pathname === l.href ? "text-black" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="container-xl py-8 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Jason Conroy. All rights reserved.</p>
          <div className="flex gap-3">
            <a href="mailto:you@email.com" className="nav-link">Email</a>
            <a href="https://www.linkedin.com/" target="_blank" className="nav-link">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
