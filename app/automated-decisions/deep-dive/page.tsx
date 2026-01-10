import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Automated Decisions: What Horizon records",
  description: "What Horizon records for automated decisions and what it explicitly refuses to do."
};

export default function AutomatedDecisionsDeepDivePage() {
  return (
    <Section eyebrow="Automated Decisions" title="What Horizon records">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-3">
          <h3 className={prose.h3}>The automated decision boundary</h3>
          <p className={prose.body}>An automated decision is considered at the point where:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>inputs are evaluated</li>
            <li>rules or models are applied</li>
            <li>an output is executed</li>
          </ul>
          <p className="text-slate-900 font-medium tracking-tightish">
            Horizon operates at this boundary.
          </p>
          <p className={prose.body}>
            It does not observe upstream data generation.
            It does not observe downstream impact.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>The execution-time artefact</h3>
          <p className={prose.body}>
            For an automated decision, Horizon preserves a single artefact containing:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>execution timestamp</li>
            <li>observed inputs (as seen by the decision system)</li>
            <li>rule set or model identifier</li>
            <li>configuration state</li>
            <li>evaluation signals present at execution time</li>
            <li>output produced</li>
            <li>strict ordering guarantees</li>
          </ul>
          <p className="text-slate-900 font-medium tracking-tightish">
            This artefact is immutable.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Independence from system lifecycle</h3>
          <p className={prose.body}>The artefact:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>does not depend on model retraining</li>
            <li>does not depend on log retention</li>
            <li>does not depend on dashboards</li>
            <li>does not depend on memory</li>
          </ul>
          <p className="text-slate-900 font-medium tracking-tightish">
            It exists independently of the system that produced it.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>What Horizon does not attempt (by design)</h3>
          <p className={prose.body}>Horizon does not attempt to:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>explain why a model behaved as it did</li>
            <li>assess bias or fairness</li>
            <li>evaluate correctness</li>
            <li>provide counterfactuals</li>
            <li>enforce governance</li>
          </ul>
          <p className="text-slate-900 font-medium tracking-tightish">
            Any such analysis occurs outside Horizon.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Why this separation matters</h3>
          <p className={prose.body}>
            Combining evidence preservation with interpretation introduces institutional risk.
          </p>
          <p className={prose.body}>
            Horizon avoids this by remaining strictly neutral.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            It preserves what existed.
            It does not explain what should have happened.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Summary</h3>
          <p className={prose.body}>
            Automated decisions require execution-time evidence
            because reconstruction becomes unreliable as systems evolve.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            Horizon preserves immutable decision artefacts
            and nothing else.
          </p>
        </div>
      </div>
    </Section>
  );
}
