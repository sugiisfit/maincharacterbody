import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-heading text-lg font-bold uppercase tracking-wider text-gold">
              Main Character Body
            </p>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              Evidence-based fitness for men who want to look sharp, feel
              confident, and build a physique that matches their ambition.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About" },
                { href: "/programs", label: "Programs" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Follow
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://youtube.com/@sugiisfit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-gold transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://instagram.com/sugiisfit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-gold transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-text-secondary">
          &copy; {new Date().getFullYear()} Main Character Body. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
