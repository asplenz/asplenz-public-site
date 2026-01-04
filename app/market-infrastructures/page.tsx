import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Market Infrastructures",
  description: "Market Infrastructures require institutional evidence."
};

export default function MarketInfrastructuresPage() {
  return (
    <Section eyebrow="Context" title="Market Infrastructures require institutional evidence">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-3">
          <h3 className={prose.h3}>Why market infrastructures face institutional scrutiny</h3>
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
              <em>“Was the decision justifiable at the time?”</em>
            </li>
            <li>
              <em>“What was known, evaluated, and decided, and exactly when?”</em>
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
          <h3 className={prose.h3}>What “good” looks like under scrutiny</h3>
          <p className={prose.body}>A defensible dossier contains:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
            <li>The exact execution(s) that occurred</li>
            <li>The evaluations that existed at the time</li>
            <li>Their order and timestamps</li>
            <li>The roles involved (without relying on memory)</li>
            <li>Integrity verifiable independently of source systems</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className={prose.h3}>What changes</h3>
          <p className={prose.body}>
            Before: cross-system reconstruction, interviews, narrative consolidation
            <br />
            After: <span className="text-slate-900 font-medium">facts already exist</span>, immediately examinable
          </p>
        </div>

        <div className="pt-2">
          <CTAButton href="/engage">Discuss acceptability for market infrastructures</CTAButton>
        </div>
      </div>
    </Section>
  );
}
