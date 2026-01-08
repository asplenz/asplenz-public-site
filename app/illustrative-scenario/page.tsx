import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PageNav } from "@/components/PageNav";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Illustrative scenario",
  description: "A canonical situation where reconstruction becomes the problem."
};

export default function IllustrativeScenarioPage() {
  return (
    <Section eyebrow="Illustrative scenario" title="A canonical situation where reconstruction becomes the problem">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-3">
          <h3 className={prose.h3}>Purpose of this page</h3>
          <p className={prose.body}>
            This page does not describe a customer case, an incident, or a deployment.
          </p>
          <p className={prose.body}>
            It describes an archetypal situation that occurs across regulated institutions,
            regardless of industry, technology stack, or decision logic.
          </p>
          <p className={prose.body}>
            The purpose is to make the underlying problem concrete without operational disclosure.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>The situation</h3>
          <p className={prose.body}>
            At time T, a system performs an execution.
          </p>
          <p className={prose.body}>The execution may be:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>fully automated,</li>
            <li>partially automated,</li>
            <li>or initiated by a human supported by a system.</li>
          </ul>
          <p className={prose.body}>The execution produces an outcome that is:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>institutionally consequential,</li>
            <li>irreversible,</li>
            <li>or externally contestable.</li>
          </ul>
          <p className={prose.body}>
            At the time it occurs, nothing appears abnormal.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Weeks or months later</h3>
          <p className={prose.body}>A question arises.</p>
          <p className={prose.body}>
            Not a general question about how the system usually behaves, but a{" "}
            <span className="text-slate-900 font-medium">specific question about a specific case</span>:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>Why was this action taken?</li>
            <li>What information was available at that moment?</li>
            <li>What evaluations were produced?</li>
            <li>What was known, assessed, or assumed when the execution occurred?</li>
          </ul>
          <p className={prose.body}>
            The question is qualitative, case-specific, and non-statistical.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Two possible worlds</h3>
          <p className={prose.body}>
            At this point, the institution finds itself in one of two situations.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-slate-900 font-medium tracking-tightish text-base">World A: Reconstruction</h4>
          <p className={prose.body}>
            No declared evidence exists for the execution at time T.
          </p>
          <p className={prose.body}>
            To answer the question, the organization must reconstruct what happened by:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>correlating logs from multiple systems,</li>
            <li>reviewing tickets, emails, or dashboards,</li>
            <li>interviewing engineers and operators,</li>
            <li>reloading configurations or models that may have changed.</li>
          </ul>
          <p className={prose.body}>
            Facts are inferred. Context is reassembled. Explanations are produced after the fact.
          </p>
          <p className={prose.body}>
            The reconstruction may be honest and diligent, but it is:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>time-consuming,</li>
            <li>fragile,</li>
            <li>dependent on human mediation,</li>
            <li>and potentially contestable.</li>
          </ul>
          <p className="text-slate-900 font-medium tracking-tightish">
            At this stage, the reconstruction itself becomes part of what is examined.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-slate-900 font-medium tracking-tightish text-base">World B: Examination</h4>
          <p className={prose.body}>
            Declared evidence exists for the execution at time T.
          </p>
          <p className={prose.body}>When the execution occurred:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>the action was recorded as a fact,</li>
            <li>the evaluations produced at that moment were preserved,</li>
            <li>ordering and integrity were guaranteed.</li>
          </ul>
          <p className={prose.body}>
            To answer the question, the organization does not reconstruct. It examines.
          </p>
          <p className={prose.body}>The facts examined are:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>the same facts that existed at execution time,</li>
            <li>independent of current system state,</li>
            <li>independent of current personnel.</li>
          </ul>
          <p className={prose.body}>The discussion focuses on:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>what was executed,</li>
            <li>what was evaluated,</li>
            <li>and in what declared context.</li>
          </ul>
          <p className="text-slate-900 font-medium tracking-tightish">
            Not on how convincingly the past can be rebuilt.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>What changes between the two worlds</h3>
          <p className={prose.body}>
            The difference between these two worlds is not technical sophistication.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            It is when evidence is created.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>In World A, evidence is assembled when the question arises.</li>
            <li>In World B, evidence already exists when the question is asked.</li>
          </ul>
          <p className={prose.body}>This single shift changes:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>the duration of investigations,</li>
            <li>the number of teams involved,</li>
            <li>the stability of conclusions,</li>
            <li>the institutional risk profile.</li>
          </ul>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>What this scenario is not about</h3>
          <p className={prose.body}>This scenario does not address:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>whether the decision was correct or incorrect,</li>
            <li>whether the model or policy was good or bad,</li>
            <li>whether the outcome should have been different.</li>
          </ul>
          <p className="text-slate-900 font-medium tracking-tightish">
            It is strictly about whether facts are examinable without reconstruction.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Why this scenario matters</h3>
          <p className={prose.body}>
            Institutions rarely fail because they cannot decide.
          </p>
          <p className={prose.body}>
            They fail because, later, they cannot demonstrate what happened, under scrutiny, without reassembling the past.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            This scenario captures the moment where the ability to reconstruct is no longer sufficient,
            because reconstruction itself is examined.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Relation to Horizon</h3>
          <p className={prose.body}>
            Horizon exists to make World B possible.
          </p>
          <p className={prose.body}>
            It does not explain decisions. It does not judge outcomes. It does not prevent incidents.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            It ensures that, when examination is required, facts already exist.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Closing note</h3>
          <p className={prose.body}>
            This scenario is intentionally generic.
          </p>
          <p className={prose.body}>It applies wherever:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>executions are consequential,</li>
            <li>time passes,</li>
            <li>systems and teams evolve,</li>
            <li>and questions are asked after the fact.</li>
          </ul>
          <p className={prose.body}>
            The scenario does not argue that such a capability must exist.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            It clarifies what changes if it does.
          </p>
        </div>

        <PageNav
          prev={{ href: "/approach", label: "Approach" }}
          next={{ href: "/capability", label: "Capability" }}
        />
      </div>
    </Section>
  );
}
