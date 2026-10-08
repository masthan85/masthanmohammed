import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const skillCategories = [
  {
    title: "Architecture & Platforms",
    skills: [
      "Enterprise Data Architecture",
      "Databricks Lakehouse",
      "Platform Design",
      "Data Modernisation",
      "Cloud Architecture",
      "System Integration",
    ],
  },
  {
    title: "AI & Modern Technologies",
    skills: [
      "LLM-Driven Development",
      "AI-Enabled Code Generation",
      "Business Logic Extraction",
      "Automated Validation",
      "Machine Learning Ops",
      "Natural Language Processing",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "Apache Spark",
      "Python",
      "SQL",
      "ETL/ELT Pipelines",
      "Data Warehousing",
      "Stream Processing",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Azure",
      "Databricks",
      "Athena",
      "S3",
      "Infrastructure as Code",
    ],
  },
  {
    title: "Governance & Compliance",
    skills: [
      "Data Governance",
      "Data Quality",
      "Regulatory Compliance",
      "DAMA Framework",
      "Metadata Management",
      "Data Lineage",
    ],
  },
  {
    title: "Domain Expertise",
    skills: [
      "Financial Services",
      "Capital Markets",
      "Treasury Systems",
      "Equity Markets",
      "Risk Management",
      "Regulatory Reporting",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <SectionHeading eyebrow="Expertise" title="Skills & technologies" />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={(i % 3) * 80}>
              <div className="card-glow h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
                <h3 className="mb-4 text-base font-semibold text-foreground">
                  {category.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border bg-background/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
