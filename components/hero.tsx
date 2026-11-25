import { ArrowRight, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import portrait from "@/assets/masthan-mohammed.webp";
import { site } from "@/lib/site";
import { Years } from "./years";

const facts: { label: string; value: React.ReactNode }[] = [
  { label: "Experience", value: <><Years />+ years in enterprise data</> },
  { label: "Current role", value: "Technology Architect, Kezban" },
  { label: "Focus", value: "Databricks lakehouse · AI-enabled modernisation" },
  { label: "Sectors", value: "Financial Services · Capital Markets · Energy" },
  { label: "Recognition", value: "DAMA UK Individual Practitioner Award 2025 (Runner-Up)" },
];

const metrics: { value: React.ReactNode; label: string }[] = [
  { value: <><Years />+</>, label: "Years delivering enterprise data platforms" },
  { value: "3", label: "Regulated sectors: Financial Services, Capital Markets and Energy" },
  { value: "7", label: "Professional certifications across Microsoft, Anthropic, Salesforce and IBM" },
  { value: "2", label: "Industry awards in 2025, including DAMA UK Practitioner runner-up" },
];

export function Hero() {
  return (
    <>
      <section
        id="top"
        className="relative isolate overflow-hidden bg-navy px-6 pb-14 pt-24 text-white sm:pb-20 sm:pt-32 lg:px-10 lg:pb-28 lg:pt-40"
      >
        <div aria-hidden className="absolute inset-0 -z-10 bg-hairline-grid [mask-image:linear-gradient(to_bottom_left,#000,transparent_70%)]" />

        <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[1.4fr_1fr] xl:gap-24">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200 animate-fade-up">
              <span className="h-2 w-2 bg-sky-300" />
              Enterprise Data &amp; AI Architecture
            </p>

            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl 2xl:text-7xl animate-fade-up [animation-delay:80ms]">
              Governed, AI-ready data platforms for regulated enterprises.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed sm:mt-6 sm:text-lg text-slate-300 2xl:text-xl animate-fade-up [animation-delay:160ms]">
              <span className="font-medium text-white">{site.name}</span> is a
              Senior Data Architect and Principal Data Engineer who designs and
              delivers cloud data platforms across financial services and capital
              markets, applying LLMs to extract, validate and regenerate legacy
              business logic on the Databricks lakehouse.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row animate-fade-up [animation-delay:240ms]">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-white px-6 py-3.5 font-medium text-navy transition-colors hover:bg-slate-100"
              >
                {site.bookingUrl ? "Book a meeting" : "Get in touch"}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#experience"
                className="inline-flex items-center justify-center rounded-sm border border-white/30 px-6 py-3.5 font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              >
                View experience
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm sm:mt-10 text-slate-300 animate-fade-up [animation-delay:320ms]">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-sky-300" />
                {site.location}
              </span>
              <Link href={site.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2.5 hover:text-white">
                <Linkedin size={16} className="text-sky-300" />
                LinkedIn
              </Link>
            </div>
          </div>

          <aside className="rounded-sm border border-white/15 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-7 animate-fade-up [animation-delay:200ms] 2xl:p-9">
            <div className="flex items-center gap-5 border-b border-white/10 pb-6">
              <Image
                src={portrait}
                alt={`Portrait of ${site.name}`}
                priority
                sizes="(min-width: 640px) 128px, 104px"
                className="aspect-[4/5] w-[104px] shrink-0 rounded-sm border border-white/15 object-cover sm:w-32"
              />
              <div>
                <p className="font-serif text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
                  {site.name}
                </p>
                <p className="mt-1.5 text-sm text-slate-300">{site.title}</p>
              </div>
            </div>
            <h2 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
              At a glance
            </h2>
            <dl className="mt-5 divide-y divide-white/10">
              {facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[110px_1fr] gap-4 py-3.5 text-sm">
                  <dt className="text-slate-400">{f.label}</dt>
                  <dd className="font-medium text-white">{f.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Metrics band */}
      <section aria-label="Selected outcomes" className="border-b border-border bg-card px-6 lg:px-10">
        <dl className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-6 divide-border lg:grid-cols-4 lg:gap-x-0 lg:divide-x">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col-reverse justify-end px-0 py-6 sm:py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <dt className="mt-2 max-w-[16rem] text-sm leading-snug text-muted-foreground">
                {m.label}
              </dt>
              <dd className="font-serif text-4xl font-semibold tracking-tight text-primary 2xl:text-5xl">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
