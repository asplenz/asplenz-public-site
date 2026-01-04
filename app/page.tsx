import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { CTAButton } from "@/components/CTAButton";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Evidence must exist before questions. A factual evidence capability that observes and preserves, at execution time, what systems actually do and evaluate, so later examination doesn't depend on reconstruction."
};

export default function HomePage() {
  return (
    <>
      <section className="py-10 md:py-14">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className={prose.h1}>Evidence must exist before<br /> questions.</h1>

            <p className={prose.lead}>
              A factual evidence capability for regulated institutions, designed to{" "}
              <span className="text-slate-900 font-medium">observe and preserve</span>,{" "}
              <span className="text-slate-900 font-medium">at execution time</span>, what systems
              actually do and evaluate, whether decisions are automated or human.
            </p>

            <p className="text-slate-700 leading-relaxed">
             These observations are produced as execution occurs, before any audit, incident, or investigation exists. 
             When decisions are examined later, Horizon does not reconstruct events, infer intent, or assemble context retrospectively.
             It ensures that examination is performed on <span className="text-slate-700 font-medium mt-1">pre-existing factual artefacts</span>, not on narratives rebuilt from logs, memory, or interpretation.
            </p>

            <p className="text-slate-900 font-medium tracking-tightish">
              Not a monitoring tool. Not a decision engine. Not a compliance shortcut.
              <span className="block text-slate-700 font-normal mt-1">
              A neutral evidence layer that replaces reconstruction with fact
              </span>
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 pt-3">
              <Link href="/market-infrastructures" className="no-underline hover:no-underline">
                <Card
                  title="Market Infrastructures"
                  description="Exchanges, CCPs, CSDs, market data publishers."
                />
              </Link>

              <Link href="/systemic-banks" className="no-underline hover:no-underline">
                <Card
                  title="Systemic Banks"
                  description="G-SIB/D-SIB contexts where decisions become institutionally examinable."
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Section eyebrow="The structural problem">
        <div className="max-w-3xl space-y-4">
          <p className={prose.body}>Modern systems are designed to operate.</p>
          <p className={prose.body}>Very few are designed to be examined later.</p>
          <p className={prose.body}>
            When scrutiny begins, organizations fall back on logs, dashboards, tickets, and reconstruction.
            That works, until the question becomes:{" "}
            <span className="text-slate-900 font-medium">“What exactly happened in this case?”</span>
          </p>
        </div>
      </Section>

      <Section eyebrow="Principle">
        <div className="max-w-3xl space-y-6">
          <p className="text-slate-900 tracking-tightish font-medium text-lg md:text-xl leading-snug">
            Evidence is created at execution time, not when a question arises.
          </p>

          <div className="max-w-3xl">
            <div className="rounded-2xl bg-blue-50 shadow-hairline ring-1 ring-slate-200/70 p-5 md:p-6">
              <div className="text-slate-600 text-xs uppercase tracking-[0.18em]">
                What this enables
              </div>
              <ul className="mt-4 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed list-disc pl-5">
                <li>Stable, ordered, verifiable facts</li>
                <li>No post-hoc reconstruction required</li>
                <li>Examination without replaying systems or mobilizing multiple teams</li>
              </ul>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <CTAButton href="/engage">Discuss acceptability</CTAButton>
            <div className="text-sm text-slate-600">
              No sales demo. We discuss concrete evidence artefacts
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


