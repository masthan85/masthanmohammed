import { ArrowUpRight, CalendarDays, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";
import { bookingEmbedUrl, site } from "@/lib/site";
import { Reveal } from "./reveal";

const linkRow =
  "group flex items-center gap-4 py-5 transition-colors hover:bg-white/5 sm:px-2";

export function Contact() {
  const embedUrl = bookingEmbedUrl();

  return (
    <section id="contact" className="bg-navy px-6 text-white lg:px-10">
      <div className="mx-auto max-w-[1400px] pb-8 pt-16 md:pt-24">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                Contact
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                Let&apos;s discuss your data &amp; AI priorities
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
                {embedUrl
                  ? "Pick a time that suits you for an introductory call on data architecture, AI-enabled modernisation or a potential collaboration. You will receive a calendar invitation by email."
                  : "Interested in data architecture, AI-enabled solutions or a potential collaboration? Send a message on LinkedIn."}
              </p>

              {/* Below desktop width the booking page opens on Cal.com itself:
                  the embed needs about 900px to show dates and times side by side. */}
              {embedUrl && (
                <Link
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 rounded-sm bg-white px-6 py-3.5 font-medium text-navy transition-colors hover:bg-slate-100 sm:inline-flex lg:hidden"
                >
                  <CalendarDays size={18} />
                  Choose a time
                </Link>
              )}
            </div>

            <div>
              <Link
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkRow} border-y border-white/15`}
              >
                <Linkedin size={20} className="shrink-0 text-sky-300" />
                <span className="min-w-0 flex-1">
                  <span className="block text-xs uppercase tracking-wider text-slate-400">
                    LinkedIn
                  </span>
                  <span className="block font-medium">Connect or send a message</span>
                </span>
                <ArrowUpRight size={18} className="text-slate-400 transition-colors group-hover:text-white" />
              </Link>
              <p className="mt-6 flex items-center gap-2 text-sm text-slate-300">
                <MapPin size={16} className="text-sky-300" />
                {site.location}
              </p>
            </div>
          </div>

          {/* Full width so Cal.com lays out details, calendar and time slots
              in one row, with nothing to scroll inside the frame. */}
          {embedUrl && (
            <div className="mt-12 hidden overflow-hidden rounded-sm border border-white/15 bg-card lg:block">
              <iframe
                src={embedUrl}
                title={`Book a meeting with ${site.name}`}
                loading="lazy"
                className="block h-[620px] w-full border-0"
              />
            </div>
          )}
        </Reveal>

        <footer className="mt-14 flex md:mt-20 flex-col gap-2 border-t border-white/15 pt-6 text-sm text-slate-400 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Data &amp; AI Architecture · {site.location}</p>
        </footer>
      </div>
    </section>
  );
}
