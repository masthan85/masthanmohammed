"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Capabilities", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#skills" },
  { name: "Recognition", href: "#certifications" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = ["top", ...navItems.map((i) => i.href.slice(1)), "contact"];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (e) => e.isIntersecting && setActive(e.target.id === "top" ? "" : e.target.id),
        );
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 px-6 backdrop-blur lg:px-10">
      <nav className="mx-auto max-w-[1400px]">
        <div className="flex h-16 items-center justify-between">
          <Link href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-navy font-serif text-sm font-semibold text-white">
              MM
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-foreground">
                Masthan Mohammed
              </span>
              <span className="hidden text-xs text-muted-foreground sm:block">
                Data &amp; AI Architecture
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`relative py-5 text-sm transition-colors ${
                    active === item.href.slice(1)
                      ? "font-medium text-foreground after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="rounded-sm bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-soft"
              >
                Contact
              </Link>
            </li>
          </ul>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <ul id="mobile-menu" className="flex flex-col border-t border-border pb-3 md:hidden">
            {[...navItems, { name: "Contact", href: "#contact" }].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
