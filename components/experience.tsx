import { Reveal } from "./reveal";
import { Years } from "./years";
import { SectionHeading } from "./section-heading";

const experiences: {
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  technologies: string[];
}[] = [
  {
    period: "Sep 2026 – Present",
    role: "Technology Architect",
    company: "Kezban",
    description:
      "Joined in September 2026 to lead data architecture and AI-enabled data platform delivery.",
    technologies: [
      "Data Architecture",
      "Databricks",
      "AI-Enabled Delivery",
      "Data Governance",
    ],
  },
  {
    period: "Oct 2021 – Sep 2026",
    role: "Technology Lead | Senior Data Architect",
    company: "Infosys Limited",
    location: "United Kingdom",
    description:
      "Led large-scale migration from AWS Athena-based analytics to Databricks lakehouse environments. Applied large language models to extract, validate, and regenerate legacy business logic, achieving significant acceleration in delivery cycles.",
    technologies: [
      "Databricks",
      "AWS",
      "LLM",
      "Python",
      "Spark",
      "Data Governance",
    ],
  },
  {
    period: "Previous",
    role: "Senior Data Engineer",
    company: "Major Financial Institutions",
    location: "United Kingdom",
    description:
      "Delivered enterprise-scale data platforms across financial services, capital markets, and regulated industries. Supported treasury systems, equity markets, and large-scale financial data environments for global organisations including tier-one banks and asset managers.",
    technologies: [
      "SQL",
      "ETL",
      "Data Warehousing",
      "Financial Systems",
      "Capital Markets",
    ],
  },
  {
    period: "Earlier Career",
    role: "Data Engineer & Architect",
    company: "Various Organisations",
    location: "Global",
    description:
      "Built foundational expertise in data architecture, platform design, and engineering across multiple industries. Developed deep understanding of data governance, quality frameworks, and regulatory compliance requirements.",
    technologies: [
      "Database Design",
      "ETL Pipelines",
      "Data Modeling",
      "SQL Server",
      "Oracle",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-secondary/60 px-6 py-16 md:py-24 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title={<><Years />+ years of data excellence</>}
          />
        </Reveal>

        <div className="border-t border-foreground/20">
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={index * 60}>
              <article className="grid gap-4 border-b border-border py-9 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr_1.4fr] lg:gap-10">
                <div>
                  <p className="text-sm font-medium text-foreground">{exp.period}</p>
                  {index === 0 && (
                    <span className="mt-2 inline-block rounded-sm bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                      Current
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {exp.location ? `${exp.company} · ${exp.location}` : exp.company}
                  </p>
                </div>

                <div className="md:col-span-2 lg:col-span-1">
                  <p className="leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-sm border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground/80"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
