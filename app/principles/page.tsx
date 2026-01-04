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
        {/* Intro framing (why these constraints exist) */}
        <div className="space-y-3">
          <p className={prose.body}>
            <span className="text-slate-900 font-medium">
              Reconstruction is valuable, until it becomes the object of contestation.
            </span>{" "}
            These principles are not design preferences. They exist because, in formal examination contexts, flexibility
            becomes a liability: evidence must be created at the moment of execution, not rebuilt later.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>Non-negotiable principles</h3>
          <ol className="list-decimal pl-5 space-y-3 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>
              <div>
                <span className="text-slate-900 font-medium">Evidence at time T</span>{" "}
                <span className="text-slate-500">(point of no return)</span>
              </div>
              <div className="text-slate-600">
                Prevents retrospective reconstruction from becoming “the evidence,” by producing facts when the action
                occurs.
              </div>
            </li>

            <li>
              <div>
                <span className="text-slate-900 font-medium">Append-only</span> records
              </div>
              <div className="text-slate-600">
                Eliminates ambiguity about edits, deletions, or rewrites; evidence can be trusted without relying on
                narratives.
              </div>
            </li>

            <li>
              <div>
                <span className="text-slate-900 font-medium">Agnostic to agent</span>{" "}
                <span className="text-slate-500">(human or machine)</span>
              </div>
              <div className="text-slate-600">
                Preserves a single factual chain across automated decisions and human interventions, with no "handoff gap."
              </div>
            </li>

            <li>
              <div>
                <span className="text-slate-900 font-medium">Non-intrusive</span>{" "}
                <span className="text-slate-500">(no blocking, no decision influence)</span>
              </div>
              <div className="text-slate-600">
                Ensures evidence capture does not alter outcomes, workflows, or latency; the evidence layer stays
                observational.
              </div>
            </li>

            <li>
              <div>
                <span className="text-slate-900 font-medium">Strict separation</span>: execution vs evaluation
              </div>
              <div className="text-slate-600">
                Keeps “what happened” distinct from “what was assessed,” so later examination can separate action from
                interpretation.
              </div>
            </li>

            <li>
              <div>
                <span className="text-slate-900 font-medium">Independent verification</span>{" "}
                <span className="text-slate-500">(including offline)</span>
              </div>
              <div className="text-slate-600">
                Allows integrity to be checked without trusting the producing systems (or even the vendor) when scrutiny
                is highest.
              </div>
            </li>
          </ol>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>Clear non-goals</h3>
          <p className={prose.body}>
            These non-goals are deliberate. They preserve Horizon's role as an evidence layer, orthogonal to operational
            tooling, so evidence remains stable even as systems evolve.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>Not an investigation platform</li>
            <li>Not observability / SIEM</li>
            <li>Not a case-management workflow</li>
            <li>Not a compliance tool</li>
            <li>Not a “single pane of glass” for ops</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>Why logs + tickets are not equivalent</h3>
          <p className={prose.body}>
            Logs and tickets can support reconstruction. They do not create immutable, ordered, declared evidence at
            time T. When scrutiny is case-specific, the question is no longer “what usually happens,” but “what exactly
            happened here," and reconstruction itself becomes contestable.
          </p>
        </div>
      </div>
    </Section>
  );
}
