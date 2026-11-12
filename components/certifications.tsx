import { Award, Trophy, HeartHandshake } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const certifications = [
  { title: "Azure AI Engineer Associate", issuer: "Microsoft" },
  { title: "Claude Certified Architect – Foundations", issuer: "Anthropic" },
  { title: "Salesforce Certified AI Associate", issuer: "Salesforce" },
  { title: "IBM Quantum Consultant", issuer: "IBM" },
  { title: "Azure AI Fundamentals", issuer: "Microsoft" },
  { title: "Azure Data Fundamentals", issuer: "Microsoft" },
  { title: "Azure Fundamentals", issuer: "Microsoft" },
];

const awards = [
  {
    title: "DAMA UK Individual Practitioner Award 2025 (Runner-Up)",
    description:
      "Recognised at the IRM UK Data & AI Conference Europe, London, October 2025",
  },
  {
    title: "Global Recognition Award 2025",
    description:
      "For contributions to enterprise data architecture, AI-driven analytics, treasury platform modernisation and cloud-native financial technology transformation",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="border-y border-border bg-secondary/60 px-6 py-16 md:py-24 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionHeading eyebrow="Recognition" title="Certifications & awards" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 xl:gap-20">
          <Reveal>
            <h3 className="mb-2 flex items-center gap-2 border-b-2 border-foreground pb-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              <Award className="text-primary" size={18} />
              Professional certifications
            </h3>
            <ul className="divide-y divide-border">
              {certifications.map((cert) => (
                <li key={cert.title} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="font-medium text-foreground">{cert.title}</span>
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {cert.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <h3 className="mb-2 flex items-center gap-2 border-b-2 border-foreground pb-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              <Trophy className="text-primary" size={18} />
              Industry recognition
            </h3>
            <ul className="divide-y divide-border">
              {awards.map((award) => (
                <li key={award.title} className="py-4">
                  <p className="font-medium text-foreground">{award.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{award.description}</p>
                </li>
              ))}
              <li className="py-4">
                <p className="flex items-center gap-2 font-medium text-foreground">
                  <HeartHandshake size={16} className="text-primary" />
                  DAMA UK community leadership
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Actively engaged in the DAMA UK community through mentoring
                  and leadership, contributing to the advancement of data
                  management practices across the industry.
                </p>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
