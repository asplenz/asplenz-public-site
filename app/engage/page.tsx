import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Engage",
  description: "Engage: an acceptability discussion (not a sales process)."
};

export default function EngagePage() {
  return (
    <Section eyebrow="Engage" title="Engage: an acceptability discussion">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-3">
          <p className="text-slate-500 text-[15px] md:text-base -mt-4">(not a sales process, not a product pitch)</p>
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

        <div className="space-y-4 pt-4">
          <h3 className={prose.h3}>Schedule an acceptability discussion</h3>

          <p className="text-slate-700 text-[15px] md:text-base leading-relaxed max-w-xl">
            A short, structured conversation focused on institutional defensibility.<br />
            No demos. No incidents. No commercial discussion.
          </p>

          <CTAButton href="https://app.cal.eu/asplenz/institutional-acceptability">
            Schedule an acceptability discussion
          </CTAButton>

          <p className="text-sm text-slate-600 max-w-xl">
            If calendar booking is not permitted in your organization,
            you may contact us at{" "}
            <a href="mailto:contact@asplenz.com" className="text-slate-900">
              contact@asplenz.com
            </a>.
          </p>

          <p className={prose.body}>This discussion is intended for:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>market infrastructures (exchanges, CCPs, CSDs)</li>
            <li>systemic banks</li>
            <li>or exploratory functions acting on their behalf (CTO Office, architecture, operational resilience, risk methodology)</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
