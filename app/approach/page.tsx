import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { PageNav } from "@/components/PageNav";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Approach",
  description: "Decision evidence is created at execution time, not reconstructed later."
};

export default function ApproachPage() {
  return (
    <Section eyebrow="Approach" title="From reconstruction to decision evidence">
      <div className="max-w-3xl space-y-6">
        {/* Orientation block */}
        <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200/70 p-5 md:p-6">
          <p className="text-slate-600 text-[15px] md:text-base leading-relaxed">
            This section explains how to read and understand Horizon. It covers the problem being addressed,
            the core principle, and what "fact" means in this context.
          </p>
        </div>

        {/* Intro */}
        <div className="space-y-3">
          <p className={prose.body}>
            Most systems are built to operate. Few are built to be examined later.
          </p>
          <p className={prose.body}>
            When a specific transaction, incident, or decision is scrutinized, organizations often discover that
            their "memory" is distributed across tools and teams, and that the past must be reconstructed before it
            can even be discussed.
          </p>
          <p className={prose.body}>
            This approach is about one thing: ensuring that examinable facts exist <span className="text-slate-900 font-medium">at execution time</span>,
            so that later examination relies on facts already constituted, not on correlation and interpretation assembled under pressure.
          </p>
        </div>

        <hr />

        {/* The failure mode */}
        <div className="space-y-3">
          <h3 className={prose.h3}>The failure mode</h3>
          <p className={prose.body}>
            When a case is questioned, teams typically rely on:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>Logs fragmented across multiple systems</li>
            <li>Dashboards that reflect current state (not past execution)</li>
            <li>Tickets, emails, documents, and post-mortems written later</li>
            <li>Human memory and informal explanations</li>
          </ul>
          <p className={prose.body}>This creates a predictable pattern:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>Timelines are rebuilt from heterogeneous traces</li>
            <li>Context is inferred after the fact</li>
            <li>Multiple "versions" of what happened emerge</li>
            <li>Explanations remain contestable because the reconstruction is contestable</li>
          </ul>
        </div>

        <hr />

        {/* The shift */}
        <div className="space-y-3">
          <h3 className={prose.h3}>The shift</h3>
          <p className={prose.body}>
            Under scrutiny, the question changes from:
          </p>
          <p className={prose.body}>"How does the system usually behave?"</p>
          <p className={prose.body}>to:</p>
          <p className="text-slate-900 tracking-tightish font-medium text-[15px] md:text-base leading-relaxed">
            "What exactly happened in this specific case, and what facts existed at that moment?"
          </p>
          <p className={prose.body}>
            At that point, the cost is not only time. It is also governance:
            the organization loses the ability to ground discussions in a shared factual baseline.
          </p>
        </div>

        <hr />

        {/* Core principle */}
        <div className="space-y-3">
          <h3 className={prose.h3}>Core principle</h3>
          <p className="text-slate-900 tracking-tightish font-medium text-base md:text-lg leading-relaxed">
            Evidence should be created at the point of no return: the moment an action becomes irreversible,
            institutionally binding, or materially consequential.
          </p>
          <p className={prose.body}>
            Examination may happen later. But evidence must exist before questions arise.
          </p>
        </div>

        <hr />

        {/* What "fact" means */}
        <div className="space-y-3">
          <h3 className={prose.h3}>What "fact" means here</h3>
          <p className={prose.body}>
            In this context, a "fact" is not business truth or regulatory correctness. It is:
          </p>
          <div className="rounded-2xl bg-blue-50 shadow-hairline ring-1 ring-slate-200/70 p-5 md:p-6">
            <p className={prose.body}>
              <em>
                a signed and recorded act or declaration, produced by a system or a human actor, regardless of its
                business truth or regulatory correctness.
              </em>
            </p>
          </div>
          <p className={prose.body}>
            The objective is not to "explain" the past with better narratives. It is to preserve what was declared and executed,
            <span className="text-slate-900 font-medium"> immutably and in order</span>, so discussion starts from stable facts.
          </p>
        </div>

        <hr />

        {/* What this is (and is not) */}
        <div className="space-y-3">
          <h3 className={prose.h3}>What this is (and is not)</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>
              This is an evidence approach: it preserves executions and declared evaluations at execution time.
            </li>
            <li>
              It does not replace observability, SIEM, audit tools, or case management.
            </li>
            <li>
              It does not decide, validate, optimize, or enforce.
            </li>
            <li>
              It applies equally to automated workflows and human-in-the-loop decisions: what matters is the point of no return.
            </li>
          </ul>
        </div>

        <hr />

        {/* Institutional implications (merged from Implications page) */}
        <div className="space-y-3">
          <h3 className={prose.h3}>Scope and control</h3>
          <p className={prose.body}>
            The company decides which decisions, actions, or processes are within scope.
            Integration is selective by design.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>Adoption typically starts with one high-pain or high-scrutiny area</li>
            <li>Companies explicitly choose which systems are covered</li>
            <li>Horizon does not expand the decision surface</li>
          </ul>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Retention and governance</h3>
          <p className={prose.body}>
            Retention, deletion, and scope are entirely determined by the company's governance choices.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>Retention policies remain company-controlled</li>
            <li>Deletion rules are respected</li>
            <li>Scope limits are enforced</li>
          </ul>
          <p className={prose.body}>
            As with any other system, the company retains{" "}
            <span className="text-slate-900 font-medium">full sovereignty</span>{" "}
            over what is retained, for how long, and for what purpose.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Legal considerations</h3>
          <p className={prose.body}>
            Horizon records are subject to the same legal processes as any other internal company data.
          </p>
          <p className={prose.body}>
            Horizon does not introduce new categories of data, new disclosure obligations, or special legal status.
            It preserves evidence that already exists elsewhere in the organization, under the same rules governing
            discovery, subpoenas, legal holds, and privilege.
          </p>
        </div>

        <hr />

        {/* Common questions */}
        <div className="space-y-3">
          <h3 className={prose.h3}>Common questions</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/clarifications#observability"
                className="text-slate-700 text-[15px] md:text-base no-underline hover:no-underline hover:text-blue-700"
              >
                We already have observability, logging, and audit trails. Why is this different?
              </Link>
            </li>
          </ul>
        </div>

        <PageNav
          prev={{ href: "/", label: "Home" }}
          next={{ href: "/illustrative-scenario", label: "Illustrative scenario" }}
        />
      </div>
    </Section>
  );
}
