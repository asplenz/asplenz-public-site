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
          <h3 className={prose.h3}>The failure mode</h3>
          <p className={prose.body}>
            When an incident, transaction, or decision is examined, teams often rely on:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>Distributed logs across systems</li>
            <li>Dashboards reflecting current state</li>
            <li>Tickets and post-mortems written later</li>
            <li>Human memory</li>
          </ul>
          <p className={prose.body}>This creates a predictable failure mode:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>Timelines are reconstructed</li>
            <li>Interpretations replace facts</li>
            <li>Explanations remain contestable</li>
          </ul>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>The shift</h3>
          <p className={prose.body}>The question shifts from:</p>
          <p className={prose.body}>"How does the system usually behave?"</p>
          <p className={prose.body}>to:</p>
          <p className="text-slate-900 tracking-tightish font-medium text-[15px] md:text-base leading-relaxed">
            "What exactly happened in this specific case?"
          </p>
          <p className={prose.body}>
            At that point, the cost is not only time.<br />
            It is the <span className="text-slate-900 font-medium">loss of institutional control over the narrative</span>.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Principle</h3>
          <p className="text-slate-900 tracking-tightish font-medium text-base md:text-lg leading-relaxed">
            Evidence must be produced at the point of no return: the moment an action becomes irreversible or responsibility is engaged.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>What “fact” means here</h3>
          <p className={prose.body}>In this context, a fact is:</p>
          <div className="rounded-2xl bg-blue-50 shadow-hairline ring-1 ring-slate-200/70 p-5 md:p-6">
            <p className={prose.body}>
              <em>a signed and recorded act or declaration, produced by a system or a human actor, regardless of its business truth or regulatory correctness.</em>
            </p>
          </div>
          <p className={prose.body}>
            This capability does not certify reality. It preserves what was declared and executed, <span className="text-slate-900 font-medium">immutably and in order</span>.
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
