import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PageNav } from "@/components/PageNav";
import { prose } from "@/components/typography";

export const metadata: Metadata = {
  title: "Clarifications",
  description:
    "Clarifications about scope, exposure, and governance implications of a decision evidence capability."
};

type Clarification = {
  id: string;
  q: string;
  a: React.ReactNode;
};

const clarifications: Clarification[] = [
  {
    id: "problem",
    q: "1. What problem does Horizon actually solve?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          <span className="text-slate-900 font-medium">
            Horizon eliminates the need to reconstruct facts after a decision is
            questioned.
          </span>
        </p>
        <p className={prose.body}>Today, when a decision is examined, companies:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>pull logs from multiple systems</li>
          <li>search emails, PDFs, Excel files</li>
          <li>interview people</li>
          <li>reconcile timelines manually</li>
        </ul>
        <p className={prose.body}>
          Horizon preserves{" "}
          <span className="text-slate-900 font-medium">
            existing factual artifacts at decision time
          </span>
          , so examination relies on{" "}
          <span className="text-slate-900 font-medium">presentation</span>, not
          reconstruction.
        </p>
        <p className={prose.body}>
          <span className="text-slate-900 font-medium">
            This shifts examination from a reactive activity to a property of
            execution itself.
          </span>
        </p>
      </div>
    )
  },
  {
    id: "decide",
    q: "2. Does Horizon decide anything or influence decisions?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          <span className="text-slate-900 font-medium">No.</span>
        </p>
        <p className={prose.body}>Horizon:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>does not make decisions</li>
          <li>does not recommend actions</li>
          <li>does not approve or reject outcomes</li>
          <li>does not replace business logic or AI systems</li>
        </ul>
        <p className={prose.body}>
          It only observes and preserves{" "}
          <span className="text-slate-900 font-medium">what already happened</span>.
        </p>
      </div>
    )
  },
  {
    id: "implementation",
    q: "3. How are implementation details addressed?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          This Horizon documentation focuses on conceptual acceptability and institutional boundaries.
        </p>
        <p className={prose.body}>
          Questions related to how this capability is instantiated in a given environment, including:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>user interfaces and visualizations</li>
          <li>integration mechanisms</li>
          <li>access control models</li>
          <li>querying and search patterns</li>
          <li>retention automation</li>
          <li>performance and scalability characteristics</li>
          <li>scope selection tools</li>
          <li>handling of distributed or multi-stage decision chains</li>
        </ul>
        <p className={prose.body}>
          are intentionally not specified at the documentation level.
        </p>
        <p className={prose.body}>
          These aspects are defined during a bounded acceptability discussion, once:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>the capability itself is deemed conceptually acceptable, and</li>
          <li>the organization's architectural, governance, and security constraints are known.</li>
        </ul>
        <p className={prose.body}>
          This separation ensures that Horizon remains non-prescriptive, non-intrusive, and adaptable to different institutional environments.
        </p>
      </div>
    )
  },
  {
    id: "observability",
    q: "4. We already have observability, logging, and audit trails. Why is this different?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          Observability, logging, and audit trails help organizations understand how systems behave and support investigation after the fact.
        </p>
        <p className="text-slate-900 font-medium tracking-tightish">
          They are designed to support reconstruction.
        </p>
        <p className={prose.body}>
          Horizon addresses a different question: whether{" "}
          <span className="text-slate-900 font-medium">declared, examinable facts</span>{" "}
          existed at execution time, before any investigation, explanation, or justification was required.
        </p>
        <p className={prose.body}>
          Improving observability reduces the cost and effort of reconstruction. It does not remove reconstruction as a dependency.
        </p>
        <p className={prose.body}>
          This distinction does not disappear with better tooling or richer telemetry.
        </p>
        <p className="text-slate-900 font-medium tracking-tightish">
          Horizon is concerned with situations where reconstruction itself becomes the object of examination.
        </p>
      </div>
    )
  },
  {
    id: "artefacts",
    q: "5. We already capture execution-time facts and generate artefacts automatically. Why is this not sufficient?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          Many systems capture signals at execution time and retain them in structured logs, tables, or audit trails.
        </p>
        <p className={prose.body}>
          This is not disputed.
        </p>
        <p className={prose.body}>
          The distinction Horizon makes is not about whether data exists, but about{" "}
          <span className="text-slate-900 font-medium">when a fact becomes institutionally declared</span>.
        </p>
        <p className={prose.body}>In most architectures, logs and signals are:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>produced automatically by systems,</li>
          <li>selected, interpreted, and assembled later,</li>
          <li>transformed into an artefact after a question has been raised.</li>
        </ul>
        <p className={prose.body}>
          Even when fully automated, this process creates facts{" "}
          <span className="text-slate-900 font-medium">post hoc</span>.
        </p>
        <p className={prose.body}>Horizon addresses situations where certain facts are:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>explicitly declared by the organization,</li>
          <li>at execution time,</li>
          <li>with their scope, structure, and ordering defined in advance,</li>
          <li>and preserved independently of any later investigation.</li>
        </ul>
        <p className={prose.body}>
          The difference is not technical sophistication.
        </p>
        <p className="text-slate-900 font-medium tracking-tightish">
          It is whether the fact existed as an institutional record before scrutiny began.
        </p>
        <p className={prose.body}>
          Once scrutiny begins, no additional declaration can retroactively change when a fact came into existence.
        </p>
        <p className={prose.body}>Horizon exists for situations where organizations require certain records to:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>be defined as facts before execution,</li>
          <li>be preserved independently of code ownership,</li>
          <li>and retain their status regardless of later interpretation.</li>
        </ul>
        <p className={prose.body}>
          This often creates an illusion of institutional protection.
        </p>
        <p className={prose.body}>
          As long as no specific execution is examined under scrutiny, the distinction remains invisible.
        </p>
        <p className={prose.body}>
          It typically becomes visible only in difficult situations, such as:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>a regulatory inspection or supervisory review,</li>
          <li>a post-incident investigation,</li>
          <li>a legal or contractual dispute,</li>
          <li>an internal audit focusing on a specific case,</li>
          <li>or an ex post review of automated or AI-assisted decisions.</li>
        </ul>
        <p className={prose.body}>
          In these situations, the question is no longer whether data exists, but whether{" "}
          <span className="text-slate-900 font-medium">facts existed as institutional records at execution time</span>,
          independently of later reconstruction.
        </p>
      </div>
    )
  },
  {
    id: "log-more",
    q: "6. Does Horizon force companies to log more decisions than they already do?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          <span className="text-slate-900 font-medium">No.</span>
        </p>
        <p className={prose.body}>Horizon:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>does not define what should be logged</li>
          <li>does not introduce new decision policies</li>
          <li>does not expand the decision surface</li>
        </ul>
        <p className={prose.body}>
          It only consolidates{" "}
          <span className="text-slate-900 font-medium">
            facts already produced
          </span>{" "}
          (logs, files, tickets, reports) that are currently fragmented.
        </p>
      </div>
    )
  },
  {
    id: "legal-exposure",
    q: "7. Does Horizon create new legal or regulatory exposure?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          <span className="text-slate-900 font-medium">Not by design.</span>
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>Scope is chosen by the company</li>
          <li>Integration points are selective</li>
          <li>Retention policies are company-controlled</li>
          <li>Horizon does not publish to regulators</li>
          <li>Horizon does not define disclosure obligations</li>
        </ul>
        <p className={prose.body}>
          Clearer evidence can make weaknesses more visible. However, the inverse
          situation already exists today:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>most relevant facts already exist in SIEMs, archives, or systems of record</li>
          <li>access to those facts is often delayed, partial, or asymmetric</li>
          <li>interpretation frequently occurs before the full factual picture is assembled</li>
        </ul>
        <p className={prose.body}>
          In practice, this means decisions are often assessed based on{" "}
          <span className="text-slate-900 font-medium">
            reconstructed narratives
          </span>
          , where early or partial interpretations can dominate.
        </p>
        <p className={prose.body}>
          Horizon does not create new facts. It changes{" "}
          <span className="text-slate-900 font-medium">
            when
          </span>{" "}
          and{" "}
          <span className="text-slate-900 font-medium">
            how consistently
          </span>{" "}
          existing facts are accessible during examination.
        </p>
      </div>
    )
  },
  {
    id: "subpoena",
    q: "8. Could Horizon records be subpoenaed or discovered?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          Horizon records are subject to the{" "}
          <span className="text-slate-900 font-medium">
            same legal processes
          </span>{" "}
          as any other internal company data.
        </p>
        <p className={prose.body}>This includes:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>application logs</li>
          <li>databases</li>
          <li>documents</li>
          <li>emails</li>
          <li>audit trails</li>
        </ul>
        <p className={prose.body}>
          Horizon does not introduce new categories of data, new disclosure
          obligations, or special legal status.
        </p>
        <p className={prose.body}>
          It preserves evidence that already exists elsewhere in the
          organization, under the same rules governing discovery, subpoenas,
          legal holds, and privilege.
        </p>
        <p className={prose.body}>
          How such data is retained, protected, or produced remains governed by
          the company's existing legal and governance frameworks.
        </p>
      </div>
    )
  },
  {
    id: "every-decision",
    q: "9. Does Horizon record every decision in the company?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          <span className="text-slate-900 font-medium">No.</span>
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>Integration is selective by design</li>
          <li>Companies explicitly choose which systems, decisions, or processes are covered</li>
          <li>Adoption typically starts with one high-pain or high-scrutiny area</li>
        </ul>
        <p className={prose.body}>
          In practice, most Horizon integration points correspond to decisions or
          actions that are{" "}
          <span className="text-slate-900 font-medium">already traced today</span>,
          but in a fragmented way:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>across multiple systems</li>
          <li>in different formats (logs, tickets, files, reports)</li>
          <li>with inconsistent retention and accessibility</li>
        </ul>
        <p className={prose.body}>
          Horizon does not expand the decision surface. It consolidates and
          stabilizes <span className="text-slate-900 font-medium">existing decision traces</span>{" "}
          at a chosen point of no return.
        </p>
        <p className={prose.body}>
          The company remains fully in control of which decisions are captured,
          where integration points are placed, and which processes remain out of
          scope.
        </p>
        <p className={prose.body}>
          Horizon is not an omniscient recorder. It is a{" "}
          <span className="text-slate-900 font-medium">
            deliberately scoped evidence layer
          </span>
          .
        </p>
      </div>
    )
  },
  {
    id: "high-risk",
    q: "10. Can Horizon be limited to high-risk or high-scrutiny decisions only?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          <span className="text-slate-900 font-medium">Yes.</span>
        </p>
        <p className={prose.body}>
          As described in Question 9, the company explicitly decides which
          decisions, actions, or processes are within scope.
        </p>
        <p className={prose.body}>
          Typical starting points include decisions that are already traced today
          (but fragmented across systems), such as:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>regulatory decisions</li>
          <li>automated approvals or rejections</li>
          <li>incident response actions</li>
          <li>financial or market operations</li>
          <li>compliance-critical workflows</li>
        </ul>
        <p className={prose.body}>
          Horizon does not introduce new decision categories. It formalizes and
          stabilizes what the organization has already decided to record, at a
          clearly defined point of no return.
        </p>
        <p className={prose.body}>
          The choice of scope reflects organizational priorities, not product
          constraints.
        </p>
      </div>
    )
  },
  {
    id: "replace-logging",
    q: "11. Does Horizon replace logging, observability, or audit tools?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          <span className="text-slate-900 font-medium">No.</span>
        </p>
        <p className={prose.body}>Horizon:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>does not replace logs</li>
          <li>does not replace SIEM, APM, or observability</li>
          <li>does not replace audit processes</li>
        </ul>
        <p className={prose.body}>
          It sits <span className="text-slate-900 font-medium">above them</span>,
          acting as an evidence layer that correlates, stabilizes, orders, and
          preserves.
        </p>
      </div>
    )
  },
  {
    id: "after-wrong",
    q: "12. Does Horizon only matter after something goes wrong?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          <span className="text-slate-900 font-medium">No.</span>
        </p>
        <p className={prose.body}>
          Horizon matters <em>before</em> anything goes wrong, because evidence
          must exist <span className="text-slate-900 font-medium">before questions arise</span>.
        </p>
        <p className={prose.body}>
          The benefit is realized later, but the capability is exercised{" "}
          <span className="text-slate-900 font-medium">at execution time</span>.
        </p>
      </div>
    )
  },
  {
    id: "improve-logging",
    q: "13. How is Horizon different from just improving logging?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>Improved logging still leaves companies with:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>fragmented sources</li>
          <li>inconsistent retention</li>
          <li>missing context</li>
          <li>heavy reconstruction work</li>
        </ul>
        <p className={prose.body}>
          Horizon focuses on{" "}
          <span className="text-slate-900 font-medium">
            evidence integrity and examinability
          </span>
          , not telemetry.
        </p>
        <p className={prose.body}>
          <span className="text-slate-900 font-medium">
            Logging improves observation. Horizon establishes evidence at execution time.
          </span>
        </p>
      </div>
    )
  },
  {
    id: "human-decisions",
    q: "14. Does Horizon record human decisions and overrides?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          <span className="text-slate-900 font-medium">
            Only if the company chooses to integrate those points.
          </span>
        </p>
        <p className={prose.body}>Horizon does not mandate:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>override justification</li>
          <li>human reasoning capture</li>
          <li>additional annotations</li>
        </ul>
        <p className={prose.body}>
          If human artifacts already exist (tickets, approvals, files), Horizon
          can preserve them as facts.
        </p>
      </div>
    )
  },
  {
    id: "accountability",
    q: "15. Could Horizon increase individual accountability or blame?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          Horizon increases <span className="text-slate-900 font-medium">factual clarity</span>.
        </p>
        <p className={prose.body}>It:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>stabilizes timelines</li>
          <li>preserves declared artifacts</li>
          <li>reduces ambiguity about what existed at a given moment</li>
        </ul>
        <p className={prose.body}>
          Horizon does not introduce new information beyond what the organization
          has chosen to record. It makes visible what the organization has
          already decided to retain, in the same way that logs, tickets, or
          reports are retained today in systems such as SIEMs or document
          repositories.
        </p>
        <p className={prose.body}>
          Whether this leads to individual accountability, collective
          responsibility, or no change depends on governance rules, internal
          policies, and organizational culture.
        </p>
        <p className={prose.body}>
          These outcomes are determined by how evidence is used, not by the
          existence of the evidence layer itself.
        </p>
      </div>
    )
  },
  {
    id: "rigid-narratives",
    q: "16. Does Horizon lock companies into rigid narratives?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          Horizon shifts discussions toward{" "}
          <span className="text-slate-900 font-medium">what is factual</span>.
        </p>
        <p className={prose.body}>
          By stabilizing timestamps, artifacts, and declared outputs, it
          mechanically reduces the surface for interpretation, not by
          eliminating interpretation, but by grounding it in a shared factual
          baseline.
        </p>
        <p className={prose.body}>This applies symmetrically:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>to the organization under examination</li>
          <li>
            to the examiner, whose ability to impose asymmetric or selective
            interpretations is equally constrained
          </li>
        </ul>
        <p className={prose.body}>
          Horizon does not interpret intent, correctness, or quality.
        </p>
        <p className={prose.body}>
          Interpretation remains a human activity, but one anchored to stable
          facts rather than competing reconstructions.
        </p>
      </div>
    )
  },
  {
    id: "users",
    q: "17. Who typically uses Horizon?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>Horizon is designed for internal use.</p>
        <p className={prose.body}>Primary users are typically:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>internal audit</li>
          <li>risk management</li>
          <li>legal / investigations</li>
          <li>compliance</li>
          <li>engineering and incident response teams</li>
        </ul>
        <p className={prose.body}>
          These functions use Horizon to examine specific decisions or executions
          based on facts preserved at execution time, without relying on reconstruction.
        </p>
        <p className={prose.body}>
          External parties may review outputs only if and when the company decides
          or is required to disclose them.
        </p>
        <p className={prose.body}>
          Horizon does not provide direct access to third parties and is not an
          external-facing interface.
        </p>
      </div>
    )
  },
  {
    id: "retention",
    q: "18. What happens if a company decides not to retain certain evidence?",
    a: (
      <div className="space-y-3">
        <p className={prose.body}>
          Retention, deletion, and scope are entirely determined by the company's
          governance choices.
        </p>
        <p className={prose.body}>This includes:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-[15px] md:text-base leading-relaxed">
          <li>retention policies</li>
          <li>deletion rules</li>
          <li>scope limits</li>
        </ul>
        <p className={prose.body}>
          Horizon does not define, expand, or constrain these choices.
        </p>
        <p className={prose.body}>
          As with any other system, the company retains{" "}
          <span className="text-slate-900 font-medium">full sovereignty</span>{" "}
          over what is retained, for how long, and for what purpose.
        </p>
        <p className={prose.body}>
          Any dossier a company constitutes contains only the information the
          organization has decided is relevant for the case.
        </p>
        <p className={prose.body}>
          Horizon merely preserves evidence within the boundaries defined by the
          company's existing policies, applying those rules consistently to the
          artifacts placed within its scope.
        </p>
      </div>
    )
  }
];

function ClarificationItem({ id, q, a }: Clarification) {
  return (
    <div id={id} className="space-y-2 scroll-mt-20">
      <h3 className={prose.h3}>{q}</h3>
      {a}
    </div>
  );
}

export default function ClarificationsPage() {
  return (
    <Section eyebrow="Clarifications" title="Clarifications">
      <div className="max-w-3xl space-y-6">
        {/* Intro */}
        <div className="space-y-3">
          <p className={prose.body}>
            This page addresses common questions raised when considering whether a
            decision evidence capability should exist within an organization.
          </p>
          <p className={prose.body}>
            It focuses on scope, governance implications, and institutional
            consequences, not on product features or commercial terms.
          </p>
        </div>

        {/* Table of contents */}
        <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200/70 p-5 md:p-6">
          <nav className="space-y-2">
            {clarifications.map((item) => (
              <div key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-blue-700 text-[15px] md:text-base underline underline-offset-4 hover:text-blue-800"
                >
                  {item.q}
                </a>
              </div>
            ))}
          </nav>
        </div>

        <hr />

        {/* Clarifications list */}
        <div className="space-y-8">
          {clarifications.map((item) => (
            <ClarificationItem key={item.q} id={item.id} q={item.q} a={item.a} />
          ))}
        </div>

        <hr />

        {/* Final note */}
        <div className="space-y-3">
          <h3 className={prose.h3}>Final note</h3>
          <p className={prose.body}>
            Horizon does <span className="text-slate-900 font-medium">not</span>{" "}
            force truth. It does <span className="text-slate-900 font-medium">not</span>{" "}
            create new obligations. It does{" "}
            <span className="text-slate-900 font-medium">not</span> change decisions.
          </p>
          <p className={prose.body}>
            It answers one question more reliably:
          </p>
          <p className="text-slate-900 tracking-tightish font-medium text-[15px] md:text-base leading-relaxed">
            "What facts already existed at the moment this decision was made?"
          </p>
          <p className={prose.body}>
            Whether that capability should exist, and how it should be governed, is
            an <span className="text-slate-900 font-medium">institutional choice</span>,
            not a technical one.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Note: This page is written for institutional readers evaluating scope and governance.
          It is not a product support page.
        </p>

        <PageNav
          prev={{ href: "/principles", label: "Principles" }}
          next={{ href: "/institutional-contexts", label: "Institutional contexts" }}
        />
      </div>
    </Section>
  );
}
