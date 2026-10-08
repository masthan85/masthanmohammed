import { ArrowRight, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

const stats = [
  { value: "17+", label: "Years in enterprise data" },
  { value: "2025", label: "DAMA UK & Global award recognition" },
  { value: "4", label: "Microsoft Azure certifications" },
  { value: "LLM", label: "AI-led legacy modernisation" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden min-h-screen flex items-center px-6 pt-28 pb-20"
    >
      {/* Background */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-float"
      />
      <div
        aria-hidden
        className="absolute top-1/3 -right-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-sky-500/15 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary animate-fade-up">
            <Sparkles size={14} />
            Databricks · AI-enabled data modernisation
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-up [animation-delay:80ms]">
            Hi, I&apos;m{" "}
            <span className="text-gradient">Masthan Mohammed</span>
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-medium text-foreground/90 animate-fade-up [animation-delay:160ms]">
            Senior Data Architect &amp; Principal Data Engineer
          </p>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed animate-fade-up [animation-delay:240ms]">
            I design and deliver enterprise-scale data platforms across
            financial services, capital markets and regulated industries,
            applying LLMs to extract, validate and regenerate legacy business
            logic on the Databricks lakehouse.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:320ms]">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
            >
              Get in touch
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#experience"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card/60 px-6 py-3.5 font-medium text-foreground backdrop-blur hover:border-primary/60 hover:-translate-y-0.5 transition-all"
            >
              View experience
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground animate-fade-up [animation-delay:400ms]">
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              {site.location}
            </span>
            <Link
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={16} />
              {site.email}
            </Link>
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Stat panel */}
        <div className="relative animate-fade-up [animation-delay:300ms]">
          <div
            aria-hidden
            className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/60 via-transparent to-sky-400/40 opacity-70 blur-sm"
          />
          <div className="relative rounded-3xl border border-border bg-card/80 p-6 backdrop-blur-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-sky-400 text-2xl font-bold text-primary-foreground">
                MM
              </div>
              <div>
                <p className="font-semibold text-foreground">Masthan Mohammed</p>
                <p className="text-sm text-muted-foreground">
                  Technology Lead · Infosys
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-background/60 p-4"
                >
                  <p className="text-3xl font-bold text-gradient">{s.value}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
