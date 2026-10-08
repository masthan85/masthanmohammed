import { Mail, Linkedin, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";

const channels = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: site.linkedin, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 pt-28 pb-10">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-8 md:p-14 text-center">
            <div aria-hidden className="absolute inset-0 -z-0 bg-grid opacity-60" />
            <div aria-hidden className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/25 blur-[90px]" />
            <div className="relative">
              <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                Contact
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-balance">
                Let&apos;s build something <span className="text-gradient">great</span> with data
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground text-lg">
                Interested in data architecture, AI-enabled solutions, or
                potential collaborations? Feel free to reach out.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3 text-left">
                {channels.map((c) => (
                  <Link
                    key={c.label}
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-3 rounded-2xl border border-border bg-background/70 p-4 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/60"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <c.icon size={18} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-muted-foreground">{c.label}</span>
                      <span className="block break-all text-sm font-medium text-foreground">{c.value}</span>
                    </span>
                    <ArrowUpRight size={16} className="text-muted-foreground transition-colors group-hover:text-primary" />
                  </Link>
                ))}
              </div>

              <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                {site.location}
              </p>
            </div>
          </div>
        </Reveal>

        <footer className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
