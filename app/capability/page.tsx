import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
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

        <div className="space-y-3">
          <h3 className={prose.h3}>How automated and human decisions become examinable as one</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>Automated systems produce <span className="text-slate-900 font-medium">declared executions</span>, each identified by a stable execution reference</li>
            <li>When a situation escalates, this reference is propagated through the organization's existing channels (alerts, tickets, consoles)</li>
            <li>Any human decision taken in response is recorded as a <span className="text-slate-900 font-medium">declared evaluation</span>, explicitly linked to the original execution</li>
            <li>Subsequent actions may reference either or both, preserving a <span className="text-slate-900 font-medium">single factual chain</span></li>
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
          <div className="text-slate-600 text-xs uppercase tracking-[0.18em]">
            Operational side-effect
          </div>
          <p className="mt-3 text-slate-700 text-[15px] md:text-base leading-relaxed">
            In practice, these same facts are often used daily to avoid transaction reconstruction, without turning the capability into an operations tool.
          </p>
        </div>

        <div className="pt-2">
          <CTAButton href="/engage">Discuss acceptability</CTAButton>
        </div>
      </div>
    </Section>
  );
}
