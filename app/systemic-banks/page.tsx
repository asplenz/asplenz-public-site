import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Systemic Banks",
  description: "Systemic banks face a different kind of scrutiny."
};

export default function SystemicBanksPage() {
  return (
    <Section eyebrow="Context" title="Systemic banks face a different kind of scrutiny">
      <div className="max-w-3xl space-y-8">
        <div className="space-y-3">
          <h3 className={prose.h3}>Why systemic banks face institutional examination</h3>
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
          <p className={prose.body}>Examples of “point of no return” situations:</p>
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
            <li>the “state of knowledge” at the moment is reconstructed</li>
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

        <div className="pt-2">
          <CTAButton href="/engage">Discuss acceptability for systemic banks</CTAButton>
        </div>
      </div>
    </Section>
  );
}
