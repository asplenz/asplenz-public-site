import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Evidence vs Reconstruction",
  description: "The difference between execution-time evidence and post-hoc reconstruction."
};

export default function EvidenceVsReconstructionPage() {
  return (
    <Section eyebrow="Evidence vs Reconstruction" title="The difference between execution-time evidence and post-hoc reconstruction">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-3">
          <p className={prose.body}>
            Many systems claim to "prove" what happened.
            Most of them reconstruct.
          </p>
          <p className={prose.body}>
            The distinction between <span className="text-slate-900 font-medium">evidence</span> and{" "}
            <span className="text-slate-900 font-medium">reconstruction</span> is often blurred in operational
            and institutional systems.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            Horizon exists specifically to avoid reconstruction.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>What reconstruction is</h3>
          <p className={prose.body}>
            Reconstruction is the process of assembling an explanation <span className="text-slate-900 font-medium">after</span> a decision has been executed.
          </p>
          <p className={prose.body}>It typically relies on:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>logs</li>
            <li>dashboards</li>
            <li>tickets</li>
            <li>alerts</li>
            <li>interviews</li>
            <li>memory</li>
          </ul>
          <p className={prose.body}>
            These elements are collected at different times, for different purposes, and under changing conditions.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            Reconstruction produces a narrative.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Why reconstruction is unreliable</h3>
          <p className={prose.body}>
            Reconstruction fails structurally, not accidentally.
          </p>
          <p className={prose.body}>Because:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>systems evolve</li>
            <li>configurations change</li>
            <li>models are retrained</li>
            <li>logs are rotated or sampled</li>
            <li>signals disappear</li>
            <li>interpretations diverge</li>
          </ul>
          <p className={prose.body}>
            By the time a decision is examined, the original execution context often no longer exists.
          </p>
          <p className={prose.body}>
            Reconstruction explains what <em>might</em> have happened.
            It does not preserve what <em>did</em> exist.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>What execution-time evidence is</h3>
          <p className={prose.body}>
            Execution-time evidence is a record created <span className="text-slate-900 font-medium">at the moment a decision is executed</span>.
          </p>
          <p className={prose.body}>It preserves:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>what inputs were present</li>
            <li>what evaluations existed</li>
            <li>what configuration was active</li>
            <li>what output was produced</li>
            <li>the ordering of these facts</li>
          </ul>
          <p className={prose.body}>
            This record exists <span className="text-slate-900 font-medium">before scrutiny begins</span>.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            It does not depend on later interpretation to exist.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>What Horizon changes</h3>
          <p className={prose.body}>
            Horizon does not improve reconstruction.
          </p>
          <p className={prose.body}>
            Horizon eliminates the need for it in specific cases by ensuring that:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>a decision leaves behind an artefact at execution time</li>
            <li>the artefact exists independently of system evolution</li>
            <li>later review does not require re-assembling fragments</li>
          </ul>
          <p className="text-slate-900 font-medium tracking-tightish">
            Horizon produces evidence, not explanations.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>What this page is not claiming</h3>
          <p className={prose.body}>This page does not claim that:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>reconstruction is useless</li>
            <li>reconstruction can be fully eliminated</li>
            <li>Horizon captures everything</li>
            <li>Horizon determines truth</li>
          </ul>
          <p className={prose.body}>
            Reconstruction will always exist.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            Horizon exists to bound it.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Summary</h3>
          <p className={prose.body}>
            Reconstruction assembles narratives after the fact.
            Evidence exists before questions arise.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            Horizon exists to preserve execution-time evidence
            so that later examination is not dependent on reconstruction alone.
          </p>
        </div>
      </div>
    </Section>
  );
}
