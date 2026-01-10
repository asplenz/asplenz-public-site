import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { PageNav } from "@/components/PageNav";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Automated Decisions",
  description: "Why automated decisions create a specific evidence problem."
};

export default function AutomatedDecisionsPage() {
  return (
    <Section eyebrow="Automated Decisions" title="Why automated decisions create a specific evidence problem">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-3">
          <p className={prose.body}>
            Automated systems execute decisions continuously, at high frequency, and without human intervention.
          </p>
          <p className={prose.body}>
            In these environments, the original execution context is often transient.
            By the time a decision is examined, the inputs, configuration, or model state that produced it may no longer exist.
          </p>
          <p className={prose.body}>
            Traditional logging and observability capture activity and aggregates.
            They do not preserve the decision context as it existed at execution time.
          </p>
          <p className={prose.body}>
            Horizon addresses this gap by preserving execution-time evidence for selected automated decisions,
            without explaining models or evaluating outcomes.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Examples</h3>
          <p className={prose.body}>Automated decisions with material effects include:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>fraud detection</li>
            <li>ranking and allocation</li>
            <li>pricing and throttling</li>
            <li>content moderation</li>
            <li>access control</li>
          </ul>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Why evidence is lost in automated systems</h3>
          <p className={prose.body}>In automated environments:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>inputs are transient</li>
            <li>models are retrained</li>
            <li>parameters drift</li>
            <li>configurations are overwritten</li>
            <li>execution context is ephemeral</li>
          </ul>
          <p className={prose.body}>
            By the time a decision is questioned, the system that produced it may no longer exist in the same state.
          </p>
          <p className={prose.body}>
            Logs show activity.
            Metrics show aggregates.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            Neither preserves decision context.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>What Horizon preserves for automated decisions</h3>
          <p className={prose.body}>
            For selected automated decisions, Horizon preserves an execution-time record containing:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>execution inputs as observed</li>
            <li>rule or model version</li>
            <li>configuration and thresholds</li>
            <li>outputs produced</li>
            <li>temporal ordering</li>
          </ul>
          <p className="text-slate-900 font-medium tracking-tightish">
            This record exists independently of the system lifecycle.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>What Horizon does not do</h3>
          <p className={prose.body}>Horizon does not:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>explain model logic</li>
            <li>justify outcomes</li>
            <li>score decision quality</li>
            <li>guarantee fairness or compliance</li>
            <li>replace monitoring or observability</li>
          </ul>
          <p className="text-slate-900 font-medium tracking-tightish">
            Horizon preserves facts, not interpretations.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Why this matters</h3>
          <p className={prose.body}>When automated decisions are later examined:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>the question is often not <em>"was the model good?"</em></li>
            <li>but <em>"what existed when this decision was made?"</em></li>
          </ul>
          <p className="text-slate-900 font-medium tracking-tightish">
            Without execution-time evidence, that question cannot be answered reliably.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Summary</h3>
          <p className={prose.body}>
            Automation accelerates decision-making.
            It also accelerates evidence loss.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            Horizon exists to preserve execution-time evidence
            for automated decisions that may later be examined.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Further reading</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/automated-decisions/deep-dive"
                className="text-blue-700 text-[15px] md:text-base underline underline-offset-4 hover:text-blue-800"
              >
                Automated decisions: What Horizon records
              </Link>
            </li>
          </ul>
        </div>

        <PageNav
          prev={{ href: "/capability", label: "Capability" }}
          next={{ href: "/engage", label: "Engage" }}
        />
      </div>
    </Section>
  );
}
