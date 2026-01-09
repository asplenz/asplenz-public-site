import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { PageNav } from "@/components/PageNav";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Engage",
  description: "Two engagement types: Horizon acceptability discussion, or analytical engagements."
};

export default function EngagePage() {
  return (
    <Section eyebrow="Engage" title="Two ways to engage">
      <div className="max-w-3xl space-y-8">
        {/* Orientation block */}
        <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200/70 p-5 md:p-6 space-y-3">
          <p className={prose.body}>
            This page describes two distinct engagement types:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>
              <span className="text-slate-900 font-medium">Horizon acceptability discussion</span>: assessing whether
              the Horizon evidence capability would be institutionally acceptable in your context
            </li>
            <li>
              <span className="text-slate-900 font-medium">Analytical engagements</span>: bounded analyses that do not
              involve adopting Horizon or any other system
            </li>
          </ul>
        </div>

        <hr />

        {/* ====== HORIZON ACCEPTABILITY ====== */}
        <div className="space-y-3">
          <div className="text-slate-600 text-xs uppercase tracking-[0.18em]">Horizon</div>
          <h3 className="text-slate-900 tracking-tightish font-semibold text-xl md:text-2xl">Acceptability discussion</h3>
          <p className={prose.body}>
            A short, structured discussion to assess whether the Horizon evidence capability would be
            institutionally acceptable in your context.
          </p>
          <p className="text-slate-600 text-[15px] md:text-base leading-relaxed">
            No demos. No incidents. No commitment.
          </p>
        </div>

        {/* Primary CTA */}
        <div>
          <CTAButton href="https://app.cal.eu/asplenz/institutional-acceptability">
            Schedule an acceptability discussion
          </CTAButton>
          <p className="mt-3 text-sm text-slate-500">
            If calendar booking is not permitted in your organization,
            contact us at{" "}
            <a href="mailto:contact@asplenz.com" className="text-slate-700 underline underline-offset-4">
              contact@asplenz.com
            </a>.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <p className={prose.body}>
            This engagement is designed to explore, in a bounded and non-critical way, whether a specific evidence capability would be institutionally acceptable in your context.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            It is explicitly not a commitment to adopt a system.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>What we do (and do not do)</h3>
          <p className={prose.body}>We do not:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>ask for internal incidents or sensitive cases</li>
            <li>present product demos or live systems</li>
            <li>promise ROI, efficiency gains, or operational optimization</li>
            <li>propose production deployment or enterprise-wide integration</li>
          </ul>
          <p className={prose.body}>We do:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>discuss a clearly scoped evidence approach</li>
            <li>focus on institutional defensibility, not performance</li>
            <li>accept non-adoption as a valid outcome</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>The single question</h3>
          <div className="rounded-2xl bg-blue-50 shadow-hairline ring-1 ring-slate-200/70 p-5 md:p-6">
            <p className="text-slate-900 tracking-tightish font-medium text-base md:text-lg leading-relaxed">
              Would this evidence approach be institutionally defensible in your governance, risk, and accountability framework?
            </p>
          </div>
          <p className={prose.body}>Not:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>Is it useful?</li>
            <li>Is it efficient?</li>
            <li>Is it mature?</li>
          </ul>
          <p className={prose.body}>But:</p>
          <p className="text-slate-900 font-medium tracking-tightish">
            Could such a capability exist here without creating new institutional risk?
          </p>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>What this discussion produces</h3>
          <p className={prose.body}>
            This discussion aims to produce <span className="text-slate-900 font-medium">clarity</span>, not alignment.
          </p>
          <p className={prose.body}>Specifically:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li><span className="text-slate-900 font-medium">A shared understanding</span> of whether the approach is conceptually acceptable in your institutional context</li>
            <li><span className="text-slate-900 font-medium">The explicit conditions</span> under which such a capability could exist (governance boundaries, architectural constraints, security assumptions)</li>
            <li><span className="text-slate-900 font-medium">The key objections or blockers</span>, if any, that would prevent acceptability</li>
            <li>Where relevant, <span className="text-slate-900 font-medium">an outline of a minimal, non-intrusive pilot</span>, strictly bounded:
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>limited in scope</li>
                <li>outside production-critical paths</li>
                <li>focused on a single point of no return (a specific moment where a decision or action becomes institutionally irreversible or materially consequential)</li>
              </ul>
            </li>
          </ul>
          <p className="text-slate-900 font-medium tracking-tightish mt-4">
            Concluding that the capability should not be pursued is considered a valid and useful outcome.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>About scope and maturity</h3>
          <p className={prose.body}>
            As an early-stage vendor, we intentionally frame this engagement to minimize institutional and vendor risk:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>no dependency on Horizon as a system</li>
            <li>no lock-in</li>
            <li>no critical-path integration</li>
            <li>clear entry and exit boundaries</li>
          </ul>
          <p className="text-slate-900 font-medium tracking-tightish">
            This is a capability exploration, not an adoption process.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className={prose.h3}>This discussion is intended for</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>market infrastructures (exchanges, CCPs, CSDs)</li>
            <li>systemic banks</li>
            <li>or exploratory functions acting on their behalf (CTO Office, architecture, operational resilience, risk methodology)</li>
          </ul>
        </div>

        <hr />

        {/* Repeated CTA at bottom of Horizon section */}
        <div className="pt-2">
          <CTAButton href="https://app.cal.eu/asplenz/institutional-acceptability">
            Schedule an acceptability discussion
          </CTAButton>
        </div>

        <hr className="my-12 border-slate-300" />

        {/* ====== ANALYTICAL ENGAGEMENTS ====== */}
        <div className="space-y-3">
          <div className="text-slate-600 text-xs uppercase tracking-[0.18em]">Analytical engagements</div>
          <h3 className="text-slate-900 tracking-tightish font-semibold text-xl md:text-2xl">Bounded analyses (no system adoption)</h3>
          <p className={prose.body}>
            In some situations, organizations do not need a new system.
            They need clarity about what actually happened, or what would be examinable if it did.
          </p>
          <p className={prose.body}>
            These engagements are not product deployments.
            They are bounded analyses designed to surface structural dependencies on reconstruction.
          </p>
        </div>

        <div className="rounded-2xl bg-blue-50 shadow-hairline ring-1 ring-slate-200/70 p-5 md:p-6 space-y-4">
          <div className="space-y-2">
            <div className="text-slate-900 font-medium tracking-tightish">Post-incident analysis</div>
            <p className={prose.body}>
              Applied after an incident, dispute, or review.
              Focused on understanding where reconstruction replaced execution-time facts.
            </p>
          </div>

          <hr />

          <div className="space-y-2">
            <div className="text-slate-900 font-medium tracking-tightish">Readiness review</div>
            <p className={prose.body}>
              Applied before audits or critical deployments.
              Focused on identifying whether examinable facts would exist if a specific decision were reviewed.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className={prose.body}>
            These analyses do not result in mandatory follow-up actions or tool adoption.
            Reaching the conclusion that no change is required is a valid outcome.
          </p>
          <p className="text-slate-900 font-medium tracking-tightish">
            Analytical engagements are independent from Horizon adoption.
          </p>
        </div>

        <div className="pt-2">
          <p className={prose.body}>
            Available through direct engagement:{" "}
            <a href="mailto:contact@asplenz.com?subject=Analytical%20engagement%20inquiry" className="text-blue-700 underline underline-offset-4 hover:text-blue-800">
              contact@asplenz.com
            </a>
          </p>
        </div>

        <PageNav
          prev={{ href: "/use-cases", label: "Use cases" }}
        />
      </div>
    </Section>
  );
}
