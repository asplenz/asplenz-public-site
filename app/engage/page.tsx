import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { PageNav } from "@/components/PageNav";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Engage",
  description: "Engage: an acceptability discussion (not a sales process)."
};

export default function EngagePage() {
  return (
    <Section eyebrow="Engage" title="Engage: an acceptability discussion">
      <div className="max-w-3xl space-y-8">
        {/* Orientation block */}
        <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200/70 p-5 md:p-6 space-y-3">
          <p className="text-slate-900 font-medium tracking-tightish text-base md:text-lg leading-relaxed">
            A short, structured discussion to assess whether this capability is acceptable in your context.
          </p>
          <p className="text-slate-600 text-[15px] md:text-base leading-relaxed">
            No demos. No incidents. No commitment.
          </p>
        </div>

        {/* Primary CTA - immediately after orientation */}
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

        {/* Repeated CTA at bottom */}
        <div className="pt-2">
          <CTAButton href="https://app.cal.eu/asplenz/institutional-acceptability">
            Schedule an acceptability discussion
          </CTAButton>
        </div>

        <PageNav
          prev={{ href: "/product-status", label: "Product status" }}
        />
      </div>
    </Section>
  );
}
