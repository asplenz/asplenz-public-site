import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PageNav } from "@/components/PageNav";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Capability",
  description: "A factual evidence capability (in-perimeter)."
};

export default function CapabilityPage() {
  return (
    <Section eyebrow="Capability" title="A factual evidence capability (in-perimeter)">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-4">
          <h3 className={prose.h3}>What it records</h3>
          <p className={prose.body}>Two types of declared facts, strictly separated:</p>

          <div className="rounded-2xl bg-blue-50 shadow-hairline ring-1 ring-slate-200/70 p-5 md:p-6 space-y-4">
            <div className="space-y-2">
              <div className="text-slate-900 font-medium tracking-tightish">1) Executions</div>
              <p className={prose.body}>An execution is <em>an irreversible act</em>:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
                <li>An automated decision applied</li>
                <li>A human authorization</li>
                <li>A continuation/suspension choice</li>
                <li>A publication, override, or acceptance</li>
              </ul>
              <p className={prose.body}>Executions record what happened, in declared context, at time T.</p>
            </div>

            <hr />

            <div className="space-y-2">
              <div className="text-slate-900 font-medium tracking-tightish">2) Evaluations</div>
              <p className={prose.body}>An evaluation is <em>an organizational assessment at time T</em>:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
                <li>Severity classification</li>
                <li>Risk acceptance</li>
                <li>Declared basis</li>
                <li>Confidence level</li>
              </ul>
              <p className="text-slate-900 font-medium tracking-tightish">
                An evaluation does not authorize an action.
              </p>
              <p className={prose.body}>
                It preserves state of knowledge and organizational stance at the time.
              </p>
            </div>
          </div>
        </div>

        {/* NEW: Contexts section (includes AI, without making it a top-level market) */}
        <div className="space-y-3">
          <h3 className={prose.h3}>Contexts where this applies</h3>
          <p className={prose.body}>
            This capability is agnostic to the decision source. It applies whenever a specific decision or action may later
            require case-by-case examination.
          </p>

          <div className="rounded-2xl bg-blue-50 shadow-hairline ring-1 ring-slate-200/70 p-5 md:p-6 space-y-4">
            <div className="space-y-2">
              <div className="text-slate-900 font-medium tracking-tightish">AI-assisted decisions</div>
              <p className={prose.body}>
                AI-assisted systems increasingly inform or produce decisions. When those decisions are later examined
                (by Risk, Audit, Legal, or regulators) the question is not only about model performance, but about{" "}
                <span className="text-slate-900 font-medium">what actually happened in that specific case</span>.
              </p>
              <p className={prose.body}>
                The same approach captures executions and evaluations from AI-assisted workflows{" "}
                <span className="text-slate-900 font-medium">at execution time</span>, immutably, before any question
                arises, exactly like any other decision or action.
              </p>
              <p className={prose.body}>
                This supports a shift from outcome-based testing (“did it give the right answer?”) to{" "}
                <span className="text-slate-900 font-medium">behavior-based examinability</span> (“what did the system see,
                evaluate, and decide, and when?").
              </p>
              <p className={prose.body}>
                It does not replace AI governance frameworks (e.g., EU AI Act, CDMC/ADAC). It provides the{" "}
                <span className="text-slate-900 font-medium">evidence layer</span> that allows those frameworks to be
                demonstrated in real, case-by-case examinations.
              </p>
            </div>

            <hr />

            <div className="space-y-2">
              <div className="text-slate-900 font-medium tracking-tightish">Automated decision workflows</div>
              <p className={prose.body}>
                Risk engines, eligibility rules, throttling, suspensions, and automated outcomes are recorded as declared
                executions, with optional evaluations preserving organizational stance at time T.
              </p>
            </div>

            <hr />

            <div className="space-y-2">
              <div className="text-slate-900 font-medium tracking-tightish">Human-in-the-loop escalations</div>
              <p className={prose.body}>
                When automated outcomes escalate to humans, the original execution reference is propagated through existing
                channels (alerts, tickets, consoles). Human decisions are recorded as evaluations linked to the triggering
                execution, preserving a single factual chain.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>How automated and human decisions become examinable as one</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>
              Automated systems produce <span className="text-slate-900 font-medium">declared executions</span>, each
              identified by a stable execution reference
            </li>
            <li>
              When a situation escalates, this reference is propagated through the organization's existing channels
              (alerts, tickets, consoles)
            </li>
            <li>
              Any human decision taken in response is recorded as a{" "}
              <span className="text-slate-900 font-medium">declared evaluation</span>, explicitly linked to the original
              execution
            </li>
            <li>
              Subsequent actions may reference either or both, preserving a{" "}
              <span className="text-slate-900 font-medium">single factual chain</span>
            </li>
          </ul>
          <p className="text-slate-900 font-medium tracking-tightish">
            Facts are linked by explicit references, not reconstructed through interfaces or workflows.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>Properties</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>
              <span className="text-slate-900 font-medium">Append-only</span>: no edits, no deletes
            </li>
            <li>
              <span className="text-slate-900 font-medium">Ordering</span>: explicit chronology
            </li>
            <li>
              <span className="text-slate-900 font-medium">Integrity</span>: verifiable records
            </li>
            <li>
              <span className="text-slate-900 font-medium">In-perimeter</span>: deployable on-prem/private cloud
            </li>
            <li>
              <span className="text-slate-900 font-medium">Non-intrusive</span>: not in the critical execution path
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>What it is NOT</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>Not observability / monitoring</li>
            <li>Not SIEM</li>
            <li>Not workflow</li>
            <li>Not decision-making</li>
            <li>Not compliance automation</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-blue-50 shadow-hairline ring-1 ring-slate-200/70 p-5 md:p-6">
          <div className="text-slate-600 text-xs uppercase tracking-[0.18em]">Operational side-effect</div>
          <p className="mt-3 text-slate-700 text-[15px] md:text-base leading-relaxed">
            In practice, these same facts are often used daily to avoid transaction reconstruction, without turning the
            capability into an operations tool.
          </p>
        </div>

        <PageNav
          prev={{ href: "/approach", label: "Approach" }}
          next={{ href: "/principles", label: "Principles" }}
        />
      </div>
    </Section>
  );
}
