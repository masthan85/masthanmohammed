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

  // While the phone menu is open it covers the screen: stop the page behind
  // from scrolling, and close on Escape or when the screen grows to desktop.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const close = () => setIsMobileMenuOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const desktop = window.matchMedia("(min-width: 768px)");
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", close);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 px-6 backdrop-blur lg:px-10">
      <nav className="mx-auto max-w-[1400px]">
        <div className="flex h-16 items-center justify-between">
          <Link href="#top" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
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
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-16 flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto border-t border-border bg-background px-6 pb-8 md:hidden"
          >
            <ul className="divide-y divide-border">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-5 font-serif text-2xl font-semibold text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 block rounded-sm bg-navy px-6 py-3.5 text-center font-medium text-white"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
