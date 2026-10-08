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
    <section id="about" className="py-28 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Building data platforms that drive business value"
          >
            Senior Data Architect and Principal Data Engineer with extensive
            background supporting treasury systems, equity markets, and
            large-scale financial data environments for global organisations.
            Recognised through UK and global professional awards and engaged in
            the DAMA UK community through mentoring and leadership.
          </SectionHeading>
        </Reveal>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="card-glow group h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/50">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
