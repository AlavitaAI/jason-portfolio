import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();

  const links = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Books" },
    { href: "/finance", label: "Finance" },
    { href: "/ai", label: "AI" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="container-xl h-14 flex items-center justify-between">
          <Link href="/" className="text-base font-bold">
            JC
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
        <div className="container-xl py-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Jason Conroy
        </div>
      </footer>
    </div>
  );
}
