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

const byName = (a: string, b: string) => a.localeCompare(b, "en", { sensitivity: "base" });

// Always shown alphabetically, whatever order entries are added in above.
const sortedCategories = [...skillCategories]
  .sort((a, b) => byName(a.title, b.title))
  .map((c) => ({ ...c, skills: [...c.skills].sort(byName) }));

export function Skills() {
  return (
    <section id="skills" className="px-6 py-16 md:py-24 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionHeading eyebrow="Expertise" title="Skills & technologies" />
        </Reveal>

        <div className="grid gap-x-10 gap-y-9 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
          {sortedCategories.map((category, i) => (
            <Reveal key={category.title} delay={(i % 3) * 60}>
              <div>
                <h3 className="border-b-2 border-foreground pb-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                  {category.title}
                </h3>
                {/* Phones: compact tags. Larger screens: ruled list. */}
                <ul className="mt-4 flex flex-wrap gap-2 md:hidden">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-sm border border-border bg-card px-2.5 py-1.5 text-sm text-foreground/80"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <ul className="hidden divide-y divide-border md:block">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 py-2.5 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 bg-primary" />
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
