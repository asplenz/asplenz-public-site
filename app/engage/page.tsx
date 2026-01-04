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
    <Section eyebrow="Engage" title="Engage: an acceptability discussion (not a sales process)">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-3">
          <h3 className={prose.h3}>What we do (3 bullets)</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>We do not ask for internal incidents</li>
            <li>We do not present demos</li>
            <li>We do not promise ROI</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>The single question</h3>
          <div className="rounded-2xl bg-blue-50 shadow-hairline ring-1 ring-slate-200/70 p-5 md:p-6">
            <p className="text-slate-900 tracking-tightish font-medium text-base md:text-lg leading-relaxed">
              Would this evidence approach be defensible within your governance framework?
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className={prose.h3}>What you get (clear output)</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>A yes/no view on acceptability</li>
            <li>Constraints and red flags (architecture, governance, security)</li>
            <li>A minimal pilot shape (one point of no return), if relevant</li>
          </ul>
        </div>

        {/* Booking section (replaces form) */}
        <div className="space-y-4 pt-4">
          <h3 className={prose.h3}>Schedule an acceptability discussion</h3>

          <p className="text-slate-700 text-[15px] md:text-base leading-relaxed max-w-xl">
            A short, structured conversation focused on institutional defensibility.
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

          <p className="text-sm text-slate-600 max-w-xl">
            This discussion is designed for market infrastructures and systemic banks.
          </p>
        </div>
      </div>
    </Section>
  );
}
