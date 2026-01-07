import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Product status",
  description: "Product status: current stage."
};

export default function ProductStatusPage() {
  return (
    <Section eyebrow="Product" title="Product status">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-3">
          <h3 className={prose.h3}>Current stage</h3>
          <p className={prose.body}>Horizon exists as an implemented MVP.</p>
          <p className={prose.body}>
            It is currently offered through in-perimeter capability validation deployments with a limited number of institutions.
          </p>
          <p className={prose.body}>
            These deployments are intentionally bounded. They are designed to allow institutions to examine the capability itself,
            rather than to initiate platform adoption.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>What this stage enables</h3>
          <p className={prose.body}>At this stage, Horizon allows institutions to:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>preserve execution and evaluation facts at the moment they occur</li>
            <li>operate the capability within their own trust perimeter</li>
            <li>examine how such facts can be reviewed, relied upon, and verified over time</li>
            <li>assess whether this approach is institutionally acceptable in their context</li>
          </ul>
          <p className={prose.body}>
            The focus is on working with real facts, produced by real systems, rather than on demonstrations or simulated examples.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>Scope of the validation deployments</h3>
          <p className={prose.body}>A validation deployment focuses on:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>a defined subset of execution and evaluation points</li>
            <li>observation and examination of preserved facts over a bounded period</li>
            <li>institutional learning and internal assessment</li>
          </ul>
          <p className={prose.body}>
            Reaching a conclusion, including the conclusion that the capability should not be pursued, is considered a valid and
            useful outcome of this stage.
          </p>
        </div>

        <hr />

        <div className="space-y-3">
          <h3 className={prose.h3}>How this fits the overall approach</h3>
          <p className={prose.body}>
            Horizon is deliberately introduced after conceptual clarity, but before institutional commitment.
          </p>
          <p className={prose.body}>
            The product exists in order to make the discussion concrete.
          </p>
          <p className={prose.body}>
            The pace and scope of any engagement remain controlled.
          </p>
        </div>

        <div className="pt-2">
          <CTAButton href="/engage">Discuss acceptability</CTAButton>
        </div>
      </div>
    </Section>
  );
}
