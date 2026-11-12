import { Reveal } from "./reveal";
import { Years } from "./years";
import { SectionHeading } from "./section-heading";

type Detail = { title: string; meta?: string; text: string };

const experiences: {
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  projects?: Detail[];
  earlierRoles?: Detail[];
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
    period: "Sep 2014 – Sep 2026",
    role: "Principal Data Architect | Technology Lead",
    company: "Infosys Limited",
    location: "United Kingdom, France and India",
    description:
      "Twelve years with Infosys, the last five in London as Principal Data Architect leading data platform, treasury and cloud migration programmes for financial services clients: managing data engineering teams, setting data governance standards and owning delivery from requirements through to production.",
    projects: [
      {
        title: "AI-assisted Databricks lakehouse delivery",
        text: "Built AI agents that generate Python and SQL transformation code and test suites from a single specification. Delivered 283 tables and jobs in under 12 months against a two-to-three-year estimate, cutting per-object delivery from 5–8 days to 3 with zero production regressions.",
      },
      {
        title: "Treasury data migration",
        text: "Architected the ETL strategy and pipelines for the move from a legacy Wall Street application to FIS Quantum and Sierra, covering static and transactional data. Automated reconciliation and quality checks cut manual sign-off effort by over 80%.",
      },
      {
        title: "Database migration from on-premise to AWS",
        text: "Led the migration of 300+ database tables within a four-hour SLA, using a reusable, metadata-driven reconciliation framework and real-time Splunk dashboards in place of spreadsheet tracking.",
      },
      {
        title: "Treasury analytics platform",
        text: "Led design and delivery of a Microsoft Fabric platform with ML cash forecasting across five-year horizons for the CFO and treasury leadership. Standardised data capture reduced quarterly reconciliation variance from £2bn to under £50k.",
      },
    ],
    earlierRoles: [
      {
        title: "Technology Lead, India",
        meta: "From May 2019",
        text: "Designed and built big data platforms with Hive and Impala on Cloudera, and set coding standards for platform engineering.",
      },
      {
        title: "Technology Lead, France",
        meta: "Nov 2017 – Apr 2019",
        text: "Set up the Informatica infrastructure and reusable integration frameworks, ran monthly production releases and coordinated the offshore team as onsite lead.",
      },
      {
        title: "Technology Lead, India",
        meta: "Sep 2014 – Oct 2017",
        text: "Led Informatica PowerCenter workflow development and Oracle module support, managed the Informatica upgrade and introduced CI/CD for database builds with Jenkins and Liquibase.",
      },
    ],
    technologies: [
      "Databricks",
      "Microsoft Fabric",
      "AWS",
      "Azure Synapse",
      "Snowflake",
      "Talend",
      "Informatica",
      "Python",
      "SQL",
      "Splunk",
      "Power BI",
      "Azure DevOps",
    ],
  },
  {
    period: "Mar 2008 – Jul 2014",
    role: "Senior Software Engineer",
    company: "Wipro Technologies",
    location: "India",
    description:
      "Led a team of engineers designing and building data integration, warehousing and reporting solutions, and introduced agile delivery practices across projects.",
    technologies: [
      "Oracle PL/SQL",
      "Informatica PowerCenter",
      "SSIS",
      "SSAS",
      "Sybase T-SQL",
      "Unix Shell",
    ],
  },
];

function DetailList({ label, items }: { label: string; items: Detail[] }) {
  return (
    <div className="mt-7">
      <h4 className="border-b-2 border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
        {label}
      </h4>
      <ul className="divide-y divide-border">
        {items.map((item) => (
          <li key={item.title + (item.meta ?? "")} className="py-4">
            <p className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 font-medium text-foreground">
              {item.title}
              {item.meta && (
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.meta}
                </span>
              )}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-secondary/60 px-6 py-24 lg:px-10">
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
                  {exp.projects && <DetailList label="Key projects" items={exp.projects} />}
                  {exp.earlierRoles && <DetailList label="Earlier roles" items={exp.earlierRoles} />}
                  <ul className="mt-6 flex flex-wrap gap-2">
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
