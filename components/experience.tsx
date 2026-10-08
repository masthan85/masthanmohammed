import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const experiences = [
  {
    period: "Current",
    role: "Technology Lead | Senior Data Architect",
    company: "Infosys Limited",
    location: "United Kingdom",
    description:
      "Leading large-scale migration from AWS Athena-based analytics to Databricks lakehouse environments. Applying large language models to extract, validate, and regenerate legacy business logic, achieving significant acceleration in delivery cycles.",
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
    <section id="experience" className="py-28 px-6 lg:px-10 bg-card/40 border-y border-border">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="17+ years of data excellence" />
        </Reveal>

        <div className="relative ml-3 border-l border-border">
          {experiences.map((exp, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group relative pl-10 pb-12 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-background ring-2 ring-primary shadow-[0_0_14px] shadow-primary/60 group-hover:scale-125 transition-transform" />

                <div className="grid gap-6 rounded-2xl border border-border bg-card p-7 lg:grid-cols-[minmax(240px,340px)_1fr] lg:gap-12 transition-all group-hover:border-primary/50 group-hover:-translate-y-0.5">
                  <div>
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
                      {exp.period}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {exp.company} · {exp.location}
                    </p>
                  </div>

                  <div>
                    <p className="text-muted-foreground leading-relaxed lg:text-lg">
                      {exp.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
