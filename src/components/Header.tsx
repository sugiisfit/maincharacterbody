"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/start-here", label: "Start Here" },
  { href: "/blog", label: "Content" },
  { href: "/vipcoaching", label: "Premium Coaching" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-xl font-bold tracking-wider uppercase text-gold">
          Main Character Body
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-text-secondary hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quiz"
            className="bg-gold hover:bg-gold-hover text-bg px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors"
          >
            Take The Quiz
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-text transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-text transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-text transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg border-b border-border px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium uppercase tracking-wide text-text-secondary hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/quiz"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 bg-gold hover:bg-gold-hover text-bg px-5 py-3 text-sm font-bold uppercase tracking-wide text-center transition-colors"
          >
            Take The Quiz
          </Link>
        </div>
      )}
    </header>
  );
}
