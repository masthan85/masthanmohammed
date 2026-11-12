import { Database, Brain, Shield, Users } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const highlights = [
  {
    icon: Database,
    title: "Enterprise Architecture",
    description:
      "Designing and implementing large-scale data platforms for tier-one banks, asset managers, and energy companies.",
  },
  {
    icon: Brain,
    title: "AI-Enabled Delivery",
    description:
      "Applying large language models to extract, validate, and regenerate legacy business logic with production-grade quality.",
  },
  {
    icon: Shield,
    title: "Data Governance",
    description:
      "Ensuring regulatory compliance and data quality across financial services, capital markets, and treasury systems.",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description:
      "Leading cross-functional teams and mentoring through the DAMA UK community and professional engagements.",
  },
];

export function About() {
  return (
    <section id="about" className="px-6 py-16 md:py-24 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Building data platforms that drive business value"
          >
            Senior Data Architect and Principal Data Engineer with extensive
            background supporting treasury systems, equity markets, and
            large-scale financial data environments for global organisations.
            Recognised through UK and global professional awards and engaged in
            the DAMA UK community through mentoring and leadership.
          </SectionHeading>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="h-full rounded-sm border border-border border-t-2 border-t-primary bg-card p-5 shadow-sm sm:p-7 transition-shadow hover:shadow-md">
                <div className="mb-4 flex items-center justify-between sm:mb-6">
                  <item.icon size={24} className="text-primary" />
                  <span className="font-serif text-sm text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
