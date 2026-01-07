import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PageNav } from "@/components/PageNav";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Use cases",
  description: "Contexts where decision evidence capability is examined."
};

export default function UseCasesPage() {
  return (
    <Section eyebrow="Use cases" title="Where Horizon is examined">
      <div className="max-w-3xl space-y-6">
        <div className="space-y-3">
          <p className={prose.body}>
            Horizon is examined in environments where decisions may later require case-by-case scrutiny,
            and where reconstruction under pressure creates institutional risk.
          </p>
          <p className={prose.body}>
            The following contexts describe why this capability is considered in these environments,
            not what benefits it provides.
          </p>
        </div>

        <hr />

        {/* Market infrastructures */}
        <div className="space-y-3">
          <h2 className="text-slate-900 font-medium tracking-tightish text-xl">Market infrastructures</h2>
          <p className={prose.body}>Market infrastructures operate under a distinct constraint:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>Decisions are examined not only for correctness</li>
            <li>
              But for <span className="text-slate-900 font-medium">institutional legitimacy</span>
            </li>
          </ul>
          <p className={prose.body}>
            When trading continues or halts, when data is published, when exceptions are applied, the question is often:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>
              <em>"Was the decision justifiable at the time?"</em>
            </li>
            <li>
              <em>"What was known, evaluated, and decided, and exactly when?"</em>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>Critical moments</h3>
          <p className={prose.body}>This capability becomes relevant at points of no return such as:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>Trading halt / continuation decisions under uncertainty</li>
            <li>Market data publication under degraded conditions</li>
            <li>Methodology interpretation during exceptional events</li>
            <li>Exception handling / manual overrides in critical workflows</li>
            <li>Post-incident reviews where chronology itself becomes contested</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>What "good" looks like under scrutiny</h3>
          <p className={prose.body}>A defensible dossier contains:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>The exact execution(s) that occurred</li>
            <li>The evaluations that existed at the time</li>
            <li>Their order and timestamps</li>
            <li>The roles involved (without relying on memory)</li>
            <li>Integrity verifiable independently of source systems</li>
          </ul>
        </div>

        <hr />

        {/* Systemic banks */}
        <div className="space-y-3">
          <h2 className="text-slate-900 font-medium tracking-tightish text-xl">Systemic banks</h2>
          <p className={prose.body}>
            In systemic contexts, what matters is not only whether controls existed, but whether the institution can prove:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>What it knew</li>
            <li>What it evaluated</li>
            <li>What it decided at time T</li>
          </ul>
          <p className={prose.body}>
            This is most visible when automated decisions interact with human escalation.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>High-criticality situations</h3>
          <p className={prose.body}>Examples of "point of no return" situations:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>continuing critical services under partial outage</li>
            <li>overriding a blocking control under time pressure (fraud / sanctions / AML / risk)</li>
            <li>approving an exception with explicit risk acceptance</li>
            <li>operating under degraded or ambiguous market data</li>
            <li>model-assisted decisions where context changes (including GenAI/RAG-assisted workflows)</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>What is typically missing today</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>the human decision is recorded later (ticket notes, emails, post-mortems)</li>
            <li>the "state of knowledge" at the moment is reconstructed</li>
            <li>technical logs exist, but institutional stance is unclear</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>What the capability provides</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>execution facts + evaluation facts</li>
            <li>explicit linkage between automated triggers and human decisions</li>
            <li>ordered, immutable chronology</li>
            <li>verifiable integrity</li>
          </ul>
        </div>

        <PageNav
          prev={{ href: "/principles", label: "Principles" }}
          next={{ href: "/product-status", label: "Product status" }}
        />
      </div>
    </Section>
  );
}
