import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Approach",
  description: "From reconstruction to factual continuity."
};

export default function ApproachPage() {
  return (
    <Section eyebrow="Approach" title="From reconstruction to factual continuity">
      <div className="max-w-3xl space-y-6">
        <div className="space-y-3">
          <h3 className={prose.h3}>The failure mode (concrete, non-blaming)</h3>
          <p className={prose.body}>
            When an incident, transaction, or decision is examined, teams often rely on:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>distributed logs across systems,</li>
            <li>dashboards reflecting current state,</li>
            <li>tickets and post-mortems written later,</li>
            <li>human memory.</li>
          </ul>
          <p className={prose.body}>This creates a predictable failure mode:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>timelines are reconstructed,</li>
            <li>interpretations replace facts,</li>
            <li>explanations remain contestable.</li>
          </ul>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>The shift</h3>
          <p className={prose.body}>The question changes from:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>“How does the system usually behave?”</li>
            <li>
              <span className="text-slate-900 font-medium">
                “What exactly happened in this specific case?”
              </span>
            </li>
          </ul>
          <p className={prose.body}>
            At that point, the cost is not only time. It is loss of institutional control over the narrative.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Principle</h3>
          <p className="text-slate-900 tracking-tightish font-medium text-base md:text-lg leading-relaxed">
            Evidence must be produced at the point of no return—the moment an action becomes irreversible or responsibility is engaged.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>What “fact” means here (définition)</h3>
          <p className={prose.body}>In this context, a fact is:</p>
          <div className="rounded-2xl bg-blue-50 shadow-hairline ring-1 ring-slate-200/70 p-5 md:p-6">
            <p className={prose.body}>
              a signed, recorded act or declaration, regardless of its business truth or regulatory correctness.
            </p>
          </div>
          <p className={prose.body}>
            The capability does not certify reality. It preserves what was declared and done—immutably and in order.
          </p>
        </div>

        <div className="pt-2">
          <CTAButton href="/capability" variant="secondary">
            If this framing resonates, see the capability
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
