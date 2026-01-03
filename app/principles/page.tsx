import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Principles",
  description: "Principles, boundaries, and non-goals."
};

export default function PrinciplesPage() {
  return (
    <Section eyebrow="Principles" title="Principles, boundaries, and non-goals">
      <div className="max-w-3xl space-y-10">
        <div className="space-y-3">
          <h3 className={prose.h3}>Non-negotiable principles</h3>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>
              <span className="text-slate-900 font-medium">Evidence at time T</span> (point of no return)
            </li>
            <li>
              <span className="text-slate-900 font-medium">Append-only</span> records
            </li>
            <li>
              <span className="text-slate-900 font-medium">Agnostic to agent</span> (human or machine)
            </li>
            <li>
              <span className="text-slate-900 font-medium">Non-intrusive</span> (no blocking, no decision influence)
            </li>
            <li>
              <span className="text-slate-900 font-medium">Strict separation</span>: execution vs evaluation
            </li>
            <li>
              <span className="text-slate-900 font-medium">Independent verification</span> (including offline)
            </li>
          </ol>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>Clear non-goals (anti scope creep)</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>Not an investigation platform</li>
            <li>Not observability / SIEM</li>
            <li>Not a case-management workflow</li>
            <li>Not a compliance tool</li>
            <li>Not a “single pane of glass” for ops</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>Why logs + tickets are not equivalent (une section verrou)</h3>
          <p className={prose.body}>
            Logs and tickets can support reconstruction. They do not create immutable, ordered declared evidence at time T.
            Reconstruction is valuable—until it becomes the object of contestation.
          </p>
        </div>
      </div>
    </Section>
  );
}
