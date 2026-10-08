import { Award, Trophy, HeartHandshake } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const certifications = [
  { title: "Azure AI Engineer Associate", issuer: "Microsoft" },
  { title: "Azure AI Fundamentals", issuer: "Microsoft" },
  { title: "Azure Data Fundamentals", issuer: "Microsoft" },
  { title: "Azure Fundamentals", issuer: "Microsoft" },
];

const awards = [
  {
    title: "DAMA Practitioner Award 2025 (Runner-Up)",
    description:
      "Recognised for excellence in data management practice by DAMA UK",
  },
  {
    title: "Global Recognition Award 2025",
    description:
      "Acknowledged for contributions to AI-enabled data modernisation practices",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6 lg:px-10 bg-card/40 border-y border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <SectionHeading eyebrow="Recognition" title="Certifications & awards" />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Award className="text-primary" size={22} />
              Professional certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 xl:gap-5">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-2xl border border-border bg-background/60 p-5 transition-all hover:-translate-y-1 hover:border-primary/50"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {cert.issuer}
                  </p>
                  <h4 className="mt-2 font-medium text-foreground leading-snug">
                    {cert.title}
                  </h4>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Trophy className="text-primary" size={22} />
              Industry recognition
            </h3>
            <div className="space-y-4">
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 to-transparent p-5"
                >
                  <h4 className="font-medium text-foreground">{award.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {award.description}
                  </p>
                </div>
              ))}
              <div className="rounded-2xl border border-border bg-background/60 p-5">
                <h4 className="flex items-center gap-2 font-medium text-foreground">
                  <HeartHandshake size={18} className="text-primary" />
                  DAMA UK community leadership
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Actively engaged in the DAMA UK community through mentoring
                  and leadership, contributing to the advancement of data
                  management practices across the industry.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
