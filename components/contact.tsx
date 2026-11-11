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
    <section id="contact" className="bg-navy px-6 text-white lg:px-10">
      <div className="mx-auto max-w-[1400px] pb-8 pt-24">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                Contact
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Let&apos;s discuss your data &amp; AI priorities
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                Interested in data architecture, AI-enabled solutions, or
                potential collaborations? Feel free to reach out.
              </p>
              <p className="mt-8 flex items-center gap-2 text-sm text-slate-300">
                <MapPin size={16} className="text-sky-300" />
                {site.location}
              </p>
            </div>

            <ul className="self-start divide-y divide-white/15 border-y border-white/15">
              {channels.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 py-5 transition-colors hover:bg-white/5 sm:px-2"
                  >
                    <c.icon size={20} className="shrink-0 text-sky-300" />
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs uppercase tracking-wider text-slate-400">{c.label}</span>
                      <span className="block break-all font-medium">{c.value}</span>
                    </span>
                    <ArrowUpRight size={18} className="text-slate-400 transition-colors group-hover:text-white" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <footer className="mt-20 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-slate-400 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Data &amp; AI Architecture · {site.location}</p>
        </footer>
      </div>
    </section>
  );
}
