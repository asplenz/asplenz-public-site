export type Lang = 'en' | 'fr'

export const content = {
  en: {
    brand: 'HORIZON by ASPLENZ',
    brandShort: 'ASPLENZ',
    tagline: 'Eliminate reconstruction costs. Automate examination.',
    nav: {
      documentation: 'Documentation',
      contact: 'Contact',
      menu: 'Menu',
    },
    hero: {
      title: 'Stop paying to look for what your systems already did.',
      description: 'Every time a regulator asks a question or an incident occurs, your organization spends weeks "reconstructing" the past.',
      highlight: 'Horizon captures facts at execution time.',
      subtext: 'Stop searching for information: it is already structured and ready for use.',
      cta1: 'Contact us',
      cta2: 'Learn how it works',
    },
    problem: {
      label: 'THE PROBLEM: DATA ARCHAEOLOGY',
      title: 'The hidden cost of post-hoc reconstruction.',
      intro: 'In critical institutions, the inability to instantly explain a decision costs millions every year:',
      points: [
        {
          iconKey: 'brain',
          title: 'Expert Drain',
          text: 'Your most senior engineers spend 30% of their time correlating logs instead of building products.',
        },
        {
          iconKey: 'hourglass',
          title: 'Critical Delays',
          text: 'Weeks of waiting to provide a coherent evidence file.',
        },
        {
          iconKey: 'alert',
          title: 'Operational Uncertainty',
          text: 'Reports based on fragmented traces, creating credit and trust risks with regulators.',
        },
      ],
      deepDive: {
        text: 'Want to understand why reconstruction burden is systematically underestimated?',
        linkText: 'Explore the operational reality',
        href: '/foundations/operational-reality',
      },
    },
    solution: {
      label: 'THE SOLUTION: CAPTURE AT SOURCE',
      title: 'Move from investigation to immediate response.',
      intro: 'Horizon integrates with your critical flows to capture decision context in real-time. The result? Immediate factual availability.',
      points: [
        {
          iconKey: 'target',
          title: 'End the Log Hunt',
          text: 'No more mobilizing IT teams to understand past events.',
        },
        {
          iconKey: 'bolt',
          title: 'Instant Response',
          text: 'Deliver complete files in minutes, not months.',
        },
        {
          iconKey: 'check',
          title: 'Regulatory Peace of Mind',
          text: 'Present non-interpreted factual data that closes cases faster.',
        },
      ],
    },
    impact: {
      label: 'FINANCIAL IMPACT',
      title: 'Quantify the cost of data archaeology.',
      headers: ['Challenge', 'Without Horizon (Reconstruction)', 'With Horizon (Native Capture)'],
      rows: [
        { iconKey: 'users', label: 'Human Effort', without: 'N3 experts mobilized in "crisis mode".', with: 'Automated access without technical expertise.' },
        { iconKey: 'dollar', label: 'Investigation Cost', without: 'Unpredictable and growing OpEx.', with: 'Fixed, controlled infrastructure cost.' },
        { iconKey: 'rocket', label: 'IT Productivity', without: 'Innovation slowed by audit support.', with: 'Development capacity unlocked.' },
      ],
    },
    bridge: {
      label: 'TECHNICAL BRIDGE',
      title: 'Built for financial market requirements.',
      text: 'Horizon is a robust infrastructure designed for financial market requirements. For teams wishing to explore the underlying design principles and architecture,',
      link: 'view our technical foundations',
    },
    cta: {
      title: 'Ready to eliminate your reconstruction costs?',
      subtitle: 'Let\'s discuss your specific context and critical decisions.',
      emailButton: 'Contact us',
      calButton: 'Schedule a call',
    },
    langSwitch: 'FR',
    foundations: {
      title: 'Decision Observability Infrastructure (DOI)',
      docType: 'Foundations',
      subtitle: 'The Case for a New Layer in the Critical Stack',
      axiom: 'Decision Observability is the architectural decoupling of the act from its post-hoc explanation.',
      backToHome: 'Back to home',
      sections: [
        {
          title: '1. The Structural Gap: Execution vs. Examination',
          content: `Modern enterprise architecture has reached a peak in **Execution** (the ability to process complex logic at scale) and **IT Observability** (the ability to monitor system health and telemetry).

However, a fundamental gap remains: **Examination**.

While we can tell if a system is *running*, we struggle to explain exactly *why* a specific decision was made once the execution context has dissolved. Current architectures are built to operate, but they are not designed to be examined. A system that cannot explain itself without external reconstruction is a system with a **governance deficit**.`,
        },
        {
          title: '2. The Failure of Post-hoc Reconstruction',
          content: `In the absence of a dedicated observability layer for decisions, organizations rely on **Post-hoc Reconstruction**. This is the reactive attempt to rebuild a past decision using disparate traces.

This approach leads to the **Reconstruction Paradox**: The more complex, dynamic, and fast a system becomes, the more expensive and less reliable its reconstruction becomes. In systemic environments, a reconstructed narrative—no matter how coherent—is an insufficient substitute for factual evidence.`,
        },
        {
          title: '3. Defining Decision Observability Infrastructure (DOI)',
          content: `A **Decision Observability Infrastructure (DOI)** is the systemic capability that produces **Decision Snapshots** at execution time.

Unlike traditional IT Observability, which monitors the **vessel** (latency, throughput, errors), DOI preserves the **cargo**: the specific inputs, logic, and outcomes that constitute a business decision.`,
          pillars: {
            title: 'The Four Pillars of DOI:',
            items: [
              { name: '1. Immediacy', description: 'Evidence is produced as a native output of execution, not as a retrospective task.' },
              { name: '2. Atomicity', description: 'Every decision record is self-contained, including the exact state of all inputs and the logic version used **at execution time**.' },
              { name: '3. Neutrality (Fact vs. Judgment)', description: 'The infrastructure strictly decouples the **Observation** (raw execution facts) from any subsequent **Evaluation** (compliance verdicts or business logic results). The fact exists independently of the judgment.' },
              { name: '4. Tamper-Evidence', description: 'Integrity does not rely on physical storage alone but on mathematical proof. Any alteration of the record or its chronology must be detectable through cryptographic sealing and hash-linking.' },
            ],
          },
        },
        {
          title: '4. The Core Primitive: The Decision Snapshot',
          content: `The fundamental output of a DOI is the **Decision Snapshot**. It is an immutable, **flight-recorder-style record** of a single execution point.

A standard Decision Snapshot encapsulates three dimensions:`,
          dimensions: [
            { name: 'The Context (Inputs)', description: 'The specific data consumed by the decision logic.' },
            { name: 'The Blueprint (Logic)', description: 'The specific version or hash of the code/policy applied.' },
            { name: 'The Result (Outcome)', description: 'The final output produced and its technical justifications.' },
          ],
        },
        {
          title: '5. Why DOI is Necessary Now',
          content: 'Three forces make this infrastructure an institutional requirement:',
          forces: [
            { name: 'Algorithmic Complexity', description: 'As logic moves from static rules to dynamic heuristics, manual tracing becomes impossible.' },
            { name: 'The Shift in Scrutiny', description: 'Regulators are moving from "Show me your process" to "Prove the context of this specific case."' },
            { name: 'Operational Velocity', description: 'High-speed environments require an automated way to handle investigations without diverting expensive engineering resources.' },
          ],
        },
      ],
      conclusion: {
        title: 'Conclusion',
        content: 'Decision Observability is not a feature; it is an **intrinsic capability**. By moving from reactive reconstruction to proactive preservation, organizations ensure that their systems are not only operational, but **structurally examinable**.',
      },
    },
    horizon: {
      title: 'Horizon – An Implementation of DOI',
      docType: 'Implementation',
      partLabel: 'Part 2',
      subtitle: 'Instantiating Decision Observability',
      intro: 'While **Decision Observability Infrastructure (DOI)** defines the category, **Horizon** serves as the reference implementation. Horizon is designed as a passive, high-performance **infrastructure layer** that integrates into critical systems to automate the production and cryptographic sealing of **Decision Snapshots**.',
      backToHome: 'Back to home',
      faqLink: {
        text: 'Have questions about Horizon?',
        linkText: 'View frequently asked questions',
        href: '/faq',
      },
      sections: [
        {
          title: '1. Core Principle: The Passive Observer',
          content: 'Horizon operates as a non-intrusive observer of decision-making systems. It does not interfere with, validate, or modify the decision flow. It captures the factual state at the **Point of No Return** — the exact moment a decision is finalized and about to be externalized — and preserves it as immutable evidence.',
          points: [
            { name: 'Zero Logic Risk', description: 'Horizon cannot alter the outcome or the path of a decision.' },
            { name: 'Preservation Focus', description: 'Horizon ensures that even if the source system is modified or decommissioned, the evidence remains intact and accessible.' },
            { name: 'Fault Tolerance', description: 'If the observability layer is interrupted, the core execution flow remains unaffected.' },
          ],
        },
        {
          title: '2. Integration: Capturing the Point of No Return',
          content: 'Integrating Horizon requires a single call at the decision point. It is designed for minimal footprint: no middleware changes, no schema modifications, and no workflow redesign.',
          codeExample: {
            title: 'Single Integration Point',
            code: `# At the moment the decision is made
horizon.capture(
    input=application_data,
    output=decision_result,
    system_ref="lending_core_v2.1"
)

# Business flow continues immediately
send_decision_to_applicant(decision_result)`,
            note: 'The call is asynchronous and strictly non-blocking. Business continuity is prioritized: the execution flow proceeds immediately without waiting for persistence, ensuring zero impact on transaction latency.',
          },
          integrationTable: {
            title: 'What You Provide',
            rows: [
              { element: 'Input', description: 'The exact data consumed by the decision logic.' },
              { element: 'Output', description: 'The final result produced by the system.' },
              { element: 'System Reference', description: 'Identifier and version of the system that made the decision.' },
            ],
          },
          evaluationNote: 'The `system_ref` identifies the authority that made the decision. Compliance or policy evaluation is considered a separate observation, captured independently when required. This preserves the purity of the original execution fact.',
        },
        {
          title: '3. Key Technical Capabilities',
          content: '',
          capabilities: [
            { capability: 'Tamper-Evidence', mechanism: 'Cryptographic sealing + Hash linking.', outcome: 'Any alteration of the record or its chronology is immediately detectable.' },
            { capability: 'Authenticity', mechanism: 'Digital signatures.', outcome: 'The origin of every snapshot is verified and irrefutable.' },
            { capability: 'Determinism', mechanism: 'Canonical serialization.', outcome: 'The same input and context will always produce an identical cryptographic signature.' },
            { capability: 'Independence', mechanism: 'Self-contained records.', outcome: 'The evidence survives system migrations or source system decommissioning.' },
          ],
        },
        {
          title: '4. Deployment Flexibility',
          content: 'Horizon is deployed **in-perimeter**, ensuring total data sovereignty. It adapts to your existing infrastructure through two modes:',
          deploymentModes: [
            { name: 'Embedded Library', description: 'For high-performance or edge environments, with local persistence.' },
            { name: 'Centralized Service', description: 'For cloud-native microservices, with API-based capture.' },
          ],
          sovereigntyNote: 'No data ever leaves your organization\'s perimeter.',
        },
        {
          title: '5. Isolation by Design',
          content: 'Horizon does not sit in the critical decision path. Its design strictly adheres to the following constraints:',
          constraints: [
            { name: 'No Validation', description: 'It does not approve or block decisions.' },
            { name: 'No Transformation', description: 'It does not modify the captured data.' },
            { name: 'Zero Latency Impact', description: 'The non-blocking architecture ensures that business operations continue unhindered. Horizon prioritizes system availability, ensuring that even in the unlikely event of a capture failure, the business logic remains unaffected.' },
          ],
        },
      ],
    },
    hub: {
      title: 'How to Read Horizon',
      intro: 'Decision Observability is a new architectural requirement. To help you navigate our framework, we have organized our documentation by perspective.',
      chooseEntry: 'Choose your entry point:',
      backToHome: 'Back to home',
      perspectives: [
        {
          letter: 'A',
          title: 'Foundations: The Architectural & Systemic Perspective',
          audience: 'For CTOs, Chief Architects, and Engineering Leads.',
          description: 'Focus on the structural gap in modern stacks and the definition of the **Decision Observability Infrastructure (DOI)** as a new passive layer.',
          linkText: 'Go to Part 1: The Case for DOI',
          href: '/foundations/doi',
        },
        {
          letter: 'B',
          title: 'Horizon: The Implementation & Evidence Perspective',
          audience: 'For Risk Managers, Internal Auditors, and Technical Leads.',
          description: 'Focus on the **Decision Snapshot** lifecycle, the cryptographic integrity of records, and how Horizon integrates without interfering with business logic.',
          linkText: 'Go to Part 2: Horizon Implementation',
          href: '/horizon',
        },
        {
          letter: 'C',
          title: 'The Formal & Conceptual Perspective',
          audience: 'For institutions requiring formal definitions.',
          description: 'Formal definition of **execution-time evidence** and the conceptual boundaries of Decision Observability Infrastructure. Non-promotional white paper.',
          linkText: 'Go to Conceptual Reference',
          href: '/foundations/conceptual-reference',
        },
      ],
    },
    operationalReality: {
      title: 'The Cost of Post-hoc Decision Reconstruction',
      docType: 'Operational Reality',
      subtitle: 'Reconstruction burden, cost dynamics, scenarios',
      backToHub: 'Back to documentation hub',
      positioningStatement: {
        title: 'Positioning statement',
        content: `This document does not provide a benchmark or a single consolidated cost figure. Its purpose is to explain:`,
        points: [
          'why the operational and organizational burden associated with post-hoc decision reconstruction differs so significantly across organizations,',
          'why this burden is systematically underestimated,',
          'and why it depends primarily on decision architecture rather than transaction volume.',
        ],
        note: 'Throughout this document, the term cost does not refer to a single budget line item. It refers to the aggregate operational burden induced by reconstruction, including team mobilization, escalation dynamics, coordination overhead, and associated risk. The scenarios discussed are orders of magnitude of effort, not promises or industry averages.',
      },
      sections: [
        {
          title: '1. What post-hoc decision reconstruction actually means',
          content: `In automated decision environments, a post-hoc reconstruction occurs when an organization must explain, justify, or defend a decision after it has been executed, without having preserved a complete factual record at decision time.

Typical triggers include:`,
          points: [
            'customer or merchant disputes,',
            'partner or scheme inquiries,',
            'regulatory or supervisory requests,',
            'internal incident reviews,',
            'pre-litigation or litigation processes.',
          ],
          conclusion: 'Reconstruction is not explanation. It is an attempt to re-infer facts that were never captured as a coherent, authoritative whole.',
        },
        {
          title: '2. Why reconstruction is the default operating mode today',
          content: `Most decision stacks rely on a combination of:`,
          points: [
            'transaction logs,',
            'configuration repositories,',
            'rule engines,',
            'model registries,',
            'third-party APIs.',
          ],
          additionalContent: `These systems were designed to execute decisions, monitor performance, and troubleshoot incidents. They were not designed to preserve the exact factual state that produced a specific decision.

As a result, when a decision is challenged:`,
          challengePoints: [
            'Logs are pulled.',
            'Identifiers are correlated.',
            'Rules and models are reviewed retrospectively.',
            'Teams are consulted.',
            'A narrative explanation is reconstructed.',
          ],
          conclusion: 'Often weeks or months after execution. This is not a failure of teams. It is a consequence of architectural design.',
        },
        {
          title: '3. Why logs are not facts',
          content: 'Logs are often mistaken for evidence. In reality, they are:',
          points: [
            'fragmented across systems,',
            'asynchronous,',
            'mutable or overwritten,',
            'incomplete with respect to decision context.',
          ],
          conclusion: 'They rarely capture, in one place: the exact inputs consumed, the precise rule and model versions applied, the system state at the decision instant, the role of third-party signals. Reconstruction therefore relies on inference and interpretation, not on preserved facts.',
        },
        {
          title: '4. Why the reconstruction burden is systematically underestimated',
          content: 'Reconstruction almost never appears as a single budget item. The associated burden is distributed across:',
          points: [
            'operations and support,',
            'fraud and risk teams,',
            'data and engineering,',
            'compliance and legal,',
            'audit and governance functions.',
          ],
          additionalContent: 'Additional factors contribute to underestimation:',
          additionalPoints: [
            'no dedicated cost center,',
            'escalation paths that expand silently,',
            'episodic consumption of senior time,',
            'opportunity cost of diverted teams,',
            'organizational and emotional fatigue during audits or incidents.',
          ],
          conclusion: 'As a result, it is not the cost that is miscalculated, but the burden that is poorly perceived.',
        },
        {
          title: '5. Cost is not a number, it is a distribution of effort',
          content: 'Two organizations processing similar transaction volumes can experience radically different reconstruction burdens. This difference depends on:',
          points: [
            'how many decisions become contested,',
            'how many cases escalate beyond first-level explanation,',
            'the degree of reliance on opaque third-party components,',
            'the quality of rule and model versioning,',
            'whether execution-time facts exist or must be inferred.',
          ],
          conclusion: 'Reconstruction burden behaves as a distribution, not as a constant.',
        },
      ],
      scenarios: {
        title: '6. Reconstruction burden scenarios',
        intro: 'The following scenarios are neither maturity scores nor benchmarks. They illustrate how different architectural trajectories shape the behavior of reconstruction effort.',
        items: [
          {
            name: 'Scenario A: Fragmented decision stack',
            characteristics: 'Logs distributed across multiple systems, limited traceability of rule and model versions, strong dependence on opaque third-party components.',
            behavior: 'Frequent escalation to deep investigations, heavy reliance on senior profiles, justifications largely based on reconstructed narratives.',
            profile: 'Low predictability, high variability, strong tail risk, high sensitivity to audits and incidents.',
          },
          {
            name: 'Scenario B: Advanced decision stack (PSP, Fintech)',
            characteristics: 'Centralized logging, partial rule and model versioning, more mature monitoring and control tooling, combination of internal and external decision logic.',
            behavior: 'Most challenges are resolved quickly. A non-trivial share of cases still requires multi-team reconstruction, especially for complex, cross-product, or third-party driven decisions.',
            profile: 'Relatively stable central tendency, with periodic spikes during regulatory changes, deep audits, or atypical incidents.',
          },
          {
            name: 'Scenario C: Opening toward execution-time decision evidence',
            characteristics: 'Explicit preservation, at execution time, of the factual elements that produced the decision. Clear separation between decision facts and subsequent interpretation. Coverage designed to be transversal rather than limited to isolated products or flows.',
            behavior: 'Where such mechanisms are introduced, even partially, an immediate reduction of reconstruction burden is observed on the covered perimeter. Justifications become faster, reproducible, and less dependent on human escalation.',
            profile: 'More linear and predictable effort on covered decisions. Material reduction of tail risk, while highlighting the need for a systemic approach to avoid spillover effects outside the preserved perimeter.',
            note: 'This scenario does not describe a state that is broadly observed today. It represents an opening toward a target model, used to clarify what changes when factual preservation becomes systematic.',
          },
        ],
      },
      divergence: {
        title: '7. Why reconstruction burden diverges so strongly',
        content: 'Across all scenarios, divergence is driven by:',
        points: [
          'ambiguity around what qualifies as a challenged decision,',
          'implicit escalation thresholds,',
          'opacity of third-party components,',
          'absence of decision-time snapshots,',
          'organizational handoffs and coordination overhead.',
        ],
        conclusion: 'When facts are missing, reasoning substitutes evidence, and effort becomes non-linear.',
      },
      selfAssessment: {
        title: '8. Self-assessment: are you reconstructing or preserving decisions?',
        categories: [
          {
            name: 'Decision evidence',
            questions: [
              'Can you retrieve the exact inputs consumed by a decision?',
              'Can you identify the precise rule and model versions applied?',
              'Can you prove the system state at the moment of execution?',
            ],
          },
          {
            name: 'Operational handling',
            questions: [
              'Are most explanations resolved without multi-team escalation?',
              'Do investigations rely on interviews or memory?',
              'Are explanations reproducible months later?',
            ],
          },
          {
            name: 'Audit and compliance',
            questions: [
              'Can you produce audit-ready records without reconstruction?',
              'Are third-party scores explainable retroactively?',
              'Do audits trigger emergency engineering work?',
            ],
          },
        ],
        conclusion: 'If several answers are no, your organization is likely reconstructing decisions rather than preserving them.',
      },
      keyTakeaway: {
        title: '9. Key takeaway',
        content: `The central question is not:
"How much does post-hoc reconstruction cost?"

The real question is:
"Why are we reconstructing decisions at all?"

Post-hoc reconstruction is not an anomaly. It is the predictable outcome of architectures that do not preserve execution-time facts. This architectural gap is what Decision Observability Infrastructure is designed to address.`,
      },
      closingNote: {
        title: 'Closing note',
        content: 'This document focuses on today\'s operational reality. It does not prescribe tools, products, or implementations. It describes the structural burden of reconstructing what was never preserved. Understanding this burden is the first step toward architectural change.',
      },
      illustrativeScenarioLink: {
        title: 'See also',
        text: 'For a concrete illustration of how reconstruction becomes the problem when a decision is examined, see the',
        linkText: 'Illustrative Scenario',
        href: '/foundations/illustrative-scenario',
      },
    },
    illustrativeScenario: {
      title: 'Illustrative Scenario',
      docType: 'Operational Reality',
      subtitle: 'A canonical situation where reconstruction becomes the problem',
      backToHub: 'Back to documentation hub',
      intro: {
        title: 'What this scenario demonstrates',
        content: `This scenario demonstrates that when a decision is later examined, the outcome depends on whether an execution-time record exists or must be reconstructed.

It does so by comparing **two worlds**:`,
        worlds: [
          { name: 'World A: Reconstruction', description: 'The decision is examined weeks later using logs, dashboards, tickets, and memory.' },
          { name: 'World B: Execution-time evidence', description: 'The decision left behind a preserved artefact at the moment it was executed.' },
        ],
        conclusion: 'The events are identical. The difference is **not the decision**, but **what exists before scrutiny begins**.',
      },
      purpose: {
        title: 'Purpose of this page',
        content: `This page does not describe a customer case, an incident, or a deployment.

It describes an archetypal situation that occurs across regulated institutions, regardless of industry, technology stack, or decision logic.

The purpose is to make the underlying problem concrete without operational disclosure.`,
      },
      situation: {
        title: 'The situation',
        content: `At time T, a system performs an execution.

The execution may be:`,
        executionTypes: [
          'fully automated',
          'partially automated',
          'initiated by a human supported by a system',
        ],
        outcomeIntro: 'The execution produces an outcome that is:',
        outcomeTypes: [
          'institutionally consequential',
          'irreversible',
          'externally contestable',
        ],
        conclusion: 'At the time it occurs, nothing appears abnormal.',
      },
      later: {
        title: 'Weeks or months later',
        content: `A question arises. Not a general question about how the system usually behaves, but a **specific question about a specific case**:`,
        questions: [
          'Why was this action taken?',
          'What information was available at that moment?',
          'What evaluations were produced?',
          'What was known, assessed, or assumed when the execution occurred?',
        ],
        conclusion: 'The question is qualitative, case-specific, and non-statistical.',
      },
      twoWorlds: {
        title: 'Two possible worlds',
        intro: 'At this point, the institution finds itself in one of two situations.',
        worldA: {
          title: 'World A: Reconstruction',
          content: `No declared evidence exists for the execution at time T.

To answer the question, the organization must reconstruct what happened by:`,
          steps: [
            'correlating logs from multiple systems',
            'reviewing tickets, emails, or dashboards',
            'interviewing engineers and operators',
            'reloading configurations or models that may have changed',
          ],
          assessment: `Facts are inferred. Context is reassembled. Explanations are produced after the fact. The reconstruction may be honest and diligent, but it is:`,
          characteristics: [
            'time-consuming',
            'fragile',
            'dependent on human mediation',
            'potentially contestable',
          ],
          conclusion: '**At this stage, the reconstruction itself becomes part of what is examined.**',
        },
        worldB: {
          title: 'World B: Examination',
          content: `Declared evidence exists for the execution at time T.

When the execution occurred:`,
          facts: [
            'the action was recorded as a fact',
            'the evaluations produced at that moment were preserved',
            'ordering and integrity were guaranteed',
          ],
          examination: `To answer the question, the organization does not reconstruct. It examines. The facts examined are:`,
          factProperties: [
            'the same facts that existed at execution time',
            'independent of current system state',
            'independent of current personnel',
          ],
          discussion: `The discussion focuses on:`,
          discussionPoints: [
            'what was executed',
            'what was evaluated',
            'the declared context',
          ],
          conclusion: '**Not on how convincingly the past can be rebuilt.**',
        },
      },
      whatChanges: {
        title: 'What changes between the two worlds',
        content: `The difference between these two worlds is not technical sophistication. **It is when evidence is created.**`,
        comparison: [
          'In World A, evidence is assembled when the question arises.',
          'In World B, evidence already exists when the question is asked.',
        ],
        impacts: `This single shift changes:`,
        impactList: [
          'the duration of investigations',
          'the number of teams involved',
          'the stability of conclusions',
          'the institutional risk profile',
        ],
      },
      notAbout: {
        title: 'What this scenario is not about',
        content: 'This scenario does not address:',
        points: [
          'whether the decision was correct or incorrect',
          'whether the model or policy was good or bad',
          'whether the outcome should have been different',
        ],
        conclusion: '**It is strictly about whether facts are examinable without reconstruction.**',
      },
      whyMatters: {
        title: 'Why this scenario matters',
        content: `Institutions rarely fail because they cannot decide. They fail because, later, they cannot demonstrate what happened, under scrutiny, without reassembling the past.

**This scenario captures the moment where the ability to reconstruct is no longer sufficient, because reconstruction itself is examined.**`,
      },
      relationToHorizon: {
        title: 'Relation to Horizon',
        content: `Asplenz Horizon exists to make World B possible. It does not explain decisions. It does not judge outcomes. It does not prevent incidents.

**It ensures that, when examination is required, facts already exist.**`,
      },
      closingNote: {
        title: 'Closing note',
        content: `This scenario is intentionally generic. It applies wherever:`,
        points: [
          'executions are consequential',
          'time passes',
          'systems and teams evolve',
          'questions are asked after the fact',
        ],
        conclusion: 'The scenario does not argue that such a capability must exist. **It clarifies what changes if it does.**',
      },
      backLink: {
        text: 'Back to',
        linkText: 'The Cost of Reconstruction',
        href: '/foundations/operational-reality',
      },
    },
    conceptualReference: {
      title: 'Decision Observability Infrastructure',
      docType: 'White Paper',
      subtitle: 'Reference Documentation',
      tagline: 'Evidence before questions',
      backToHub: 'Back to documentation hub',
      sections: [
        {
          title: 'Introduction',
          content: `This white paper presents the operational foundations of **execution-time evidence** for automated and semi-automated decision systems operating in institutional contexts.

It is intended for organizations that must establish, over time, what was actually executed when decisions become irreversible — independently of how systems, models, data, or teams later evolve.

This document is intentionally non-promotional. It focuses on factual preservation rather than explanation, justification, or evaluation.`,
        },
        {
          title: 'Executive Summary',
          content: `Organizations increasingly rely on automated and semi-automated decision systems whose outputs carry durable operational, legal, financial, and reputational consequences. These systems evolve continuously: models are retrained, rules are adjusted, data sources change, infrastructures are refactored, and teams rotate. Yet the decisions produced by these systems often remain examinable long after the technical conditions that produced them have disappeared.

In most organizations, the factual state of past decisions is not preserved at execution time. When questions arise, institutions attempt to reconstruct what happened using logs, traces, configuration repositories, dashboards, tickets, and human recollection. This process is inherently fragile, costly, and uncertain. It produces narratives rather than facts.

Decision Observability Infrastructure addresses this structural gap. It introduces an execution-time evidence layer whose sole purpose is to capture, at the point of no return, the complete factual state of a decision and preserve it as an immutable, self-contained artifact. This artifact exists independently of the future evolution of the system that produced it.

The infrastructure does not explain, justify, or evaluate decisions. It preserves what was executed. By doing so, it reduces operational effort, limits uncertainty, and restores durable factual authority without altering institutional control or governance.`,
        },
        {
          title: 'Problem Statement',
          subtitle: 'Reconstruction is not evidence',
          content: `Most decision systems do not preserve factual execution states. They leave behind logs, metrics, and traces designed for observability, not evidentiary certainty. When decisions are later questioned, organizations reconstruct narratives under constraints that did not exist at execution time.

This leads to:`,
          points: [
            'fragmented and incomplete factual baselines,',
            'divergence between teams and interpretations,',
            'hindsight bias embedded into explanations,',
            'escalating operational cost over time.',
          ],
          conclusion: 'These failures are structural, not accidental. They arise from a mismatch between what execution systems are designed to retain and what institutions later require to establish facts.',
        },
        {
          title: 'Core Principle',
          subtitle: 'Capture at the point of no return',
          content: `A decision becomes a fact when it is executed. At that moment:`,
          points: [
            'specific inputs are consumed,',
            'specific logic is applied,',
            'under a specific execution context,',
            'producing a specific outcome.',
          ],
          conclusion: 'Once this moment passes, the original factual state cannot be reconstituted with certainty. Evidence must therefore be produced at execution time, not inferred later.',
        },
        {
          title: 'Decision Snapshot Artifact',
          content: `A **Decision Snapshot Artifact** is the canonical execution-time record produced by the system itself. It is not a log, trace, report, or explanation. It constitutes the institutional declaration of record of what existed at execution time.

Statements about execution-time reality are therefore statements about the contents of this artifact.`,
          propertiesTitle: 'Invariant properties',
          properties: [
            { name: 'Completeness', description: 'all inputs, context, logic state, and outputs present at execution time are embedded.' },
            { name: 'Temporal integrity', description: 'the execution timestamp is cryptographically bound.' },
            { name: 'Immutability', description: 'artifacts are append-only and non-modifiable.' },
            { name: 'Ordering', description: 'verifiable sequencing across decisions.' },
            { name: 'Authenticity', description: 'cryptographic proof of origin and integrity.' },
          ],
          note: 'If establishing execution-time facts requires querying external systems, reconstruction has already begun.',
        },
        {
          title: 'Evidence vs Reconstruction',
          comparisonTable: {
            headers: ['Reconstruction', 'Execution-time Evidence'],
            rows: [
              ['Narrative assembled after outcome', 'Fact declared before examination'],
              ['Depends on surviving traces', 'Self-contained artifact'],
              ['Subject to hindsight bias', 'Preserves knowledge at Time T'],
              ['Cost increases over time', 'Cost fixed at execution'],
            ],
          },
          conclusion: 'Decision Observability Infrastructure does not improve reconstruction. It makes reconstruction unnecessary within its perimeter.',
        },
        {
          title: 'Automated Decisions',
          content: `Automated decisions are execution-time events composed of volatile elements:`,
          points: [
            'input data,',
            'decision logic (rules, models, configurations),',
            'execution context,',
            'produced outputs.',
          ],
          conclusion: 'Logs capture fragments of these elements. They do not preserve the execution as a whole. Because these components evolve independently, post-hoc reconstruction cannot reliably re-establish factual state. Execution-time capture is therefore not optional. It is the only way to preserve factual certainty.',
        },
        {
          title: 'Separation of Execution and Evaluation',
          content: 'Decision Observability Infrastructure distinguishes:',
          definitions: [
            { term: 'Executions', definition: 'immutable facts declared at Time T.' },
            { term: 'Evaluations', definition: 'human or institutional assessments produced later, explicitly timestamped and linked.' },
          ],
          conclusion: 'This separation structurally prevents hindsight bias by ensuring that later knowledge does not contaminate execution-time facts.',
        },
        {
          title: 'Institutional Contexts',
          content: 'Execution-time evidence becomes critical wherever organizations must reliably answer questions about past decisions, including:',
          points: [
            'regulatory or audit review,',
            'internal investigations and post-mortems,',
            'client or partner inquiries,',
            'long-term accountability across system lifecycles.',
          ],
          conclusion: 'The infrastructure does not prescribe governance, interpretation, or disclosure. It provides a shared factual baseline upon which institutional discretion operates.',
        },
        {
          title: 'Operational Impact',
          content: `Decision Observability Infrastructure does not change what institutions choose to decide, record, or disclose. It changes the cost and fragility of establishing facts.

It reduces:`,
          points: [
            'cross-team coordination during reviews,',
            'dependency on legacy systems,',
            'time spent reconstructing past states,',
            'uncertainty during examination.',
          ],
          conclusion: 'What changes is not authority or intent. It is operational effort.',
        },
        {
          title: 'Principles and Boundaries',
          content: 'Decision Observability Infrastructure is governed by the following boundaries:',
          boundaries: [
            'Captures facts, not explanations.',
            'Neutral to interpretation, judgment, and governance.',
            'Independent of source system lifecycle.',
            'Non-intrusive to decision logic.',
            'Append-only, immutable, and verifiable by design.',
          ],
          conclusion: 'The infrastructure ends where interpretation begins.',
        },
        {
          title: 'Availability and Adoption',
          content: `Decision Observability Infrastructure is implemented as a bounded capability and introduced through controlled, intra-perimeter validation deployments.

These deployments are not platform adoptions. They exist to allow institutions to examine the operational and institutional acceptability of execution-time evidence produced by their own systems. A determination that the capability should not be pursued is considered a valid outcome of this stage.`,
        },
      ],
      conclusion: {
        title: 'Conclusion',
        content: `Automated decision systems do not fail because institutions are unable to act. They fail when, over time, institutions can no longer establish with certainty what was actually executed, under which conditions, and with what information.

Post-hoc reconstruction is structurally incapable of providing this certainty. It assembles narratives after outcomes are known, using traces that were never designed to serve as durable evidence. Decision Observability Infrastructure restores factual continuity by ensuring that execution-time evidence exists before questions arise.

It does not impose interpretation, governance, or judgment. It preserves the factual ground upon which institutional discretion operates. Evidence exists only at execution time. Preserving it is not a methodological choice. It is a structural necessity.`,
      },
      nextStep: {
        title: 'Next step',
        content: 'If you want to examine how these principles apply to your own decision systems or institutional constraints, you can initiate a discussion.',
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      backToHome: 'Back to home',
      categories: [
        {
          name: 'Terminology',
          questions: [
            {
              q: 'What is Decision Observability Infrastructure?',
              a: 'A Decision Observability Infrastructure is a technical layer that produces Decision Snapshots at execution time. It makes automated decisions observable and auditable.',
            },
            {
              q: 'What is a Decision Snapshot?',
              a: 'A Decision Snapshot is the verifiable record of what was decided at execution time. It is the evidence — the decision fact as established.',
            },
            {
              q: 'What is a Decision Snapshot Artifact?',
              a: 'A Decision Snapshot Artifact is the technical materialization of the Decision Snapshot: a signed, immutable, and self-contained object, preserved independently of source systems.',
            },
          ],
        },
        {
          name: 'General',
          questions: [
            {
              q: 'Why not do this with logs?',
              a: 'Logs are useful, but often scattered, reconstructed, and dependent on source IS. Horizon aims for autonomous, stable and usable decision evidence.',
            },
            {
              q: 'What is the recommended scope to start with?',
              a: 'The right approach is targeted: one critical use case, instrumentation at the decision point, then gradual extension. Avoid "capture everything".',
            },
          ],
        },
        {
          name: 'Data & Integration',
          questions: [
            {
              q: 'Does Horizon store sensitive data?',
              a: 'Horizon does not ingest operational data flows. It preserves declared decision facts at execution time, according to schemas and boundaries defined by the institution. Data minimization, retention, and sensitivity classification remain fully under institutional control.',
            },
            {
              q: 'How is the content of a decision snapshot defined?',
              a: 'Horizon defines a set of standard fields. Each institution defines system-specific fields and provides the schema used to populate the decision snapshot.',
            },
            {
              q: 'Who decides what data is captured?',
              a: 'Horizon does not decide what is relevant. Clients define the schema and the data provided for each system.',
            },
            {
              q: 'How does Horizon integrate into existing systems?',
              a: 'Asplenz provides a lightweight SDK that is integrated at the institution\'s decision point. Integration details are discussed on a case-by-case basis to reflect system constraints, security requirements, and institutional context. Technical documentation is available upon request.',
            },
          ],
        },
        {
          name: 'Positioning',
          questions: [
            {
              q: 'Does Horizon influence or participate in decision-making?',
              a: 'No. Horizon is a passive infrastructure component. It observes and records decision execution data, but never evaluates or makes decisions.',
            },
            {
              q: 'Is Horizon tied to specific regulatory frameworks?',
              a: 'No. Horizon is a technical infrastructure agnostic to regulatory regimes. It produces signed execution-time artifacts that institutions may use within their own regulatory processes.',
            },
          ],
        },
      ],
      keyQuestions: [
        {
          q: 'Why not do this with logs?',
          a: 'Logs are useful, but often scattered, reconstructed, and dependent on source IS. Horizon aims for autonomous, stable and usable decision evidence.',
        },
        {
          q: 'Does Horizon influence or participate in decision-making?',
          a: 'No. Horizon is a passive infrastructure component. It observes and records decision execution data, but never evaluates or makes decisions.',
        },
        {
          q: 'Does Horizon store sensitive data?',
          a: 'Horizon does not ingest operational data flows. It preserves declared decision facts at execution time, according to schemas and boundaries defined by the institution.',
        },
      ],
      viewAll: 'View all questions',
      viewAllHref: '/faq',
    },
  },
  fr: {
    brand: 'HORIZON par ASPLENZ',
    brandShort: 'ASPLENZ',
    tagline: 'Supprimez le coût de la reconstruction. Automatisez l\'examen.',
    nav: {
      documentation: 'Documentation',
      contact: 'Contact',
      menu: 'Menu',
    },
    hero: {
      title: 'Ne payez plus pour chercher ce que vos systèmes ont déjà fait.',
      description: 'Chaque fois qu\'un régulateur pose une question ou qu\'un incident survient, votre organisation perd des semaines à « reconstruire » le passé.',
      highlight: 'Horizon capture les faits au moment de l\'exécution.',
      subtext: 'Vous ne cherchez plus l\'information : elle est déjà structurée et disponible.',
      cta1: 'Nous contacter',
      cta2: 'Découvrir comment ça marche',
    },
    problem: {
      label: 'LE PROBLÈME : L\'ARCHÉOLOGIE DE DONNÉES',
      title: 'Le coût caché de la « reconstruction » post-hoc.',
      intro: 'Dans les institutions critiques, l\'incapacité à expliquer instantanément une décision coûte des millions d\'euros chaque année :',
      points: [
        {
          iconKey: 'brain',
          title: 'Mobilisation d\'experts',
          text: 'Vos ingénieurs les plus seniors passent 30 % de leur temps à corréler des logs au lieu de coder.',
        },
        {
          iconKey: 'hourglass',
          title: 'Délais critiques',
          text: 'Des semaines d\'attente pour fournir un dossier de preuve cohérent.',
        },
        {
          iconKey: 'alert',
          title: 'Incertitude opérationnelle',
          text: 'Des rapports basés sur des traces fragmentées, créant un risque de crédit face au régulateur.',
        },
      ],
      deepDive: {
        text: 'Vous voulez comprendre pourquoi la charge de reconstruction est systématiquement sous-estimée ?',
        linkText: 'Explorer la réalité opérationnelle',
        href: '/foundations/operational-reality',
      },
    },
    solution: {
      label: 'LA SOLUTION : LA CAPTURE À LA SOURCE',
      title: 'Passez de la recherche à la réponse immédiate.',
      intro: 'Horizon s\'intègre à vos flux critiques pour capturer le contexte des décisions en temps réel. Le résultat ? Une disponibilité immédiate des faits.',
      points: [
        {
          iconKey: 'target',
          title: 'Fin de la chasse aux logs',
          text: 'Plus besoin de mobiliser les équipes IT pour comprendre un événement passé.',
        },
        {
          iconKey: 'bolt',
          title: 'Réponse immédiate',
          text: 'Fournissez des dossiers complets en quelques minutes, pas en quelques mois.',
        },
        {
          iconKey: 'check',
          title: 'Sérénité réglementaire',
          text: 'Présentez des données factuelles non-interprétées qui ferment les dossiers plus vite.',
        },
      ],
    },
    impact: {
      label: 'IMPACT FINANCIER',
      title: 'Quantifiez le coût de l\'archéologie de données.',
      headers: ['Enjeu', 'Sans Horizon (Reconstruction)', 'Avec Horizon (Capture native)'],
      rows: [
        { iconKey: 'users', label: 'Effort humain', without: 'Experts N3 mobilisés en mode « crise ».', with: 'Accès automatisé sans expertise technique.' },
        { iconKey: 'dollar', label: 'Coût d\'investigation', without: 'OpEx imprévisible et croissant.', with: 'Coût d\'infrastructure fixe et maîtrisé.' },
        { iconKey: 'rocket', label: 'Productivité IT', without: 'Innovation freinée par le support audit.', with: 'Capacité de développement libérée.' },
      ],
    },
    bridge: {
      label: 'PASSERELLE TECHNIQUE',
      title: 'Conçu pour les exigences des marchés financiers.',
      text: 'Horizon est une infrastructure robuste conçue pour les exigences des marchés financiers. Pour les équipes souhaitant explorer les principes de design et l\'architecture sous-jacente,',
      link: 'consultez notre documentation de référence',
    },
    cta: {
      title: 'Prêt à éliminer vos coûts de reconstruction ?',
      subtitle: 'Discutons de votre contexte spécifique et de vos décisions critiques.',
      emailButton: 'Nous contacter',
      calButton: 'Planifier un appel',
    },
    langSwitch: 'EN',
    foundations: {
      title: 'Infrastructure d\'Observabilité Décisionnelle (DOI)',
      docType: 'Fondations',
      subtitle: 'Pour une nouvelle couche au sein des infrastructures critiques',
      axiom: 'L\'observabilité décisionnelle est le découplage architectural entre l\'acte et son explication a posteriori.',
      backToHome: 'Retour à l\'accueil',
      sections: [
        {
          title: '1. L\'écart structurel : Exécution vs Examen',
          content: `L'architecture d'entreprise moderne a atteint un sommet en matière d'**Exécution** (capacité à traiter une logique complexe à grande échelle) et d'**Observabilité Informatique** (capacité à surveiller la santé des systèmes et la télémétrie).

Cependant, une lacune fondamentale subsiste : l'**Examen**.

Bien que nous puissions affirmer qu'un système est en fonction, nous peinons à expliquer précisément *pourquoi* une décision spécifique a été prise une fois que le contexte d'exécution s'est dissous. Les architectures actuelles sont conçues pour opérer, mais elles ne sont pas conçues pour être examinées. Un système incapable de s'expliquer sans reconstruction externe est un système présentant un **déficit de gouvernance**.`,
        },
        {
          title: '2. L\'échec de la reconstruction a posteriori',
          content: `En l'absence d'une couche d'observabilité dédiée aux décisions, les organisations s'appuient sur la **reconstruction a posteriori**. Il s'agit d'une tentative réactive de rebâtir une décision passée en utilisant des traces disparates.

Cette approche mène au **paradoxe de la reconstruction** : plus un système devient complexe, dynamique et rapide, plus sa reconstruction devient coûteuse et incertaine. Dans des environnements systémiques, un récit reconstruit — aussi cohérent soit-il — ne peut se substituer à une preuve factuelle.`,
        },
        {
          title: '3. Définition de l\'Infrastructure d\'Observabilité Décisionnelle (DOI)',
          content: `Une **Infrastructure d'Observabilité Décisionnelle (DOI)** est la capacité systémique à produire des **Snapshots de décision** au moment de l'exécution.

Contrairement à l'observabilité informatique traditionnelle, qui surveille le **contenant** (latence, débit, erreurs), la DOI préserve le **contenu** : les entrées spécifiques, la logique et les résultats qui constituent une décision métier.`,
          pillars: {
            title: 'Les quatre piliers de la DOI :',
            items: [
              { name: '1. Immédiateté', description: 'La preuve est produite comme une sortie native de l\'exécution, et non comme une tâche rétrospective.' },
              { name: '2. Atomicité', description: 'Chaque enregistrement de décision est autonome et inclut l\'état exact de toutes les entrées et de la logique utilisée **au moment de l\'exécution**.' },
              { name: '3. Neutralité (Fait vs Jugement)', description: 'L\'infrastructure découple strictement l\'**Observation** (les faits bruts de l\'exécution) de toute **Évaluation** ultérieure (verdicts de conformité ou résultats logiques). Le fait existe indépendamment du jugement.' },
              { name: '4. Preuve d\'altération (Tamper-evidence)', description: 'L\'intégrité ne repose pas uniquement sur le stockage physique mais sur une preuve mathématique. Toute modification de l\'enregistrement ou de sa chronologie doit être détectable par scellement cryptographique et chaînage de hash.' },
            ],
          },
        },
        {
          title: '4. La primitive fondamentale : le Snapshot de décision',
          content: `La sortie fondamentale d'une DOI est le **Snapshot de décision**. Il s'agit d'un enregistrement immuable, comparable à un **enregistreur de vol**, portant sur un point d'exécution unique.

Un Snapshot de décision standard encapsule trois dimensions :`,
          dimensions: [
            { name: 'Le contexte (Entrées)', description: 'Les données spécifiques consommées par la logique de décision.' },
            { name: 'Le modèle (Logique)', description: 'La version spécifique ou l\'empreinte numérique (hash) du code ou de la règle appliquée.' },
            { name: 'Le résultat (Sortie)', description: 'Le résultat final produit et ses justifications techniques.' },
          ],
        },
        {
          title: '5. Pourquoi la DOI est désormais nécessaire',
          content: 'Trois forces font de cette infrastructure une exigence institutionnelle :',
          forces: [
            { name: 'Complexité algorithmique', description: 'À mesure que la logique passe de règles statiques à des heuristiques dynamiques, le traçage manuel devient impossible.' },
            { name: 'Évolution des exigences', description: 'Les régulateurs ne demandent plus seulement « montrez-moi votre processus », mais « prouvez le contexte de ce cas spécifique ».' },
            { name: 'Vélocité opérationnelle', description: 'Les environnements à haute vitesse nécessitent une méthode automatisée pour gérer les investigations sans mobiliser des ressources d\'ingénierie critiques.' },
          ],
        },
      ],
      conclusion: {
        title: 'Conclusion',
        content: 'L\'observabilité décisionnelle n\'est pas une fonctionnalité ; c\'est une **capacité intrinsèque**. En passant d\'une reconstruction réactive à une préservation proactive, les organisations garantissent que leurs systèmes ne sont pas seulement opérationnels, mais **structurellement examinables**.',
      },
    },
    horizon: {
      title: 'Horizon – Une implémentation de la DOI',
      docType: 'Implémentation',
      partLabel: 'Partie 2',
      subtitle: 'Instancier l\'observabilité décisionnelle',
      intro: 'Alors que l\'**Infrastructure d\'Observabilité Décisionnelle (DOI)** définit la catégorie, **Horizon** en constitue l\'implémentation de référence. Horizon est conçu comme une **couche d\'infrastructure** passive et performante qui s\'intègre aux systèmes critiques pour automatiser la production et le scellement cryptographique des **Snapshots de décision**.',
      backToHome: 'Retour à l\'accueil',
      faqLink: {
        text: 'Vous avez des questions sur Horizon ?',
        linkText: 'Voir les questions fréquentes',
        href: '/faq',
      },
      sections: [
        {
          title: '1. Principe fondamental : l\'observateur passif',
          content: 'Horizon opère comme un observateur non intrusif des systèmes décisionnels. Il n\'interfère pas avec le flux de décision, ne le valide pas et ne le modifie pas. Il capture l\'état factuel au **Point de non-retour** — l\'instant précis où une décision est finalisée et sur le point d\'être externalisée — et le préserve comme une preuve immuable.',
          points: [
            { name: 'Un risque logique nul', description: 'Horizon ne peut modifier ni l\'issue, ni le cheminement d\'une décision.' },
            { name: 'Focus sur la préservation', description: 'Horizon garantit que même si le système source est modifié ou déclassé, la preuve reste intacte et accessible.' },
            { name: 'Tolérance aux pannes', description: 'Si la couche d\'observabilité est interrompue, le flux d\'exécution principal reste inchangé.' },
          ],
        },
        {
          title: '2. Intégration : Capturer le Point de non-retour',
          content: 'L\'intégration d\'Horizon nécessite un appel unique au point de décision. Il est conçu pour une empreinte minimale : aucun changement de middleware, aucune modification de schéma et aucune refonte de vos processus métier.',
          codeExample: {
            title: 'Point d\'intégration unique',
            code: `# Au moment où la décision est prise
horizon.capture(
    input=donnees_application,
    output=resultat_decision,
    system_ref="lending_core_v2.1"
)

# Le flux métier continue immédiatement
notifier_decision_client(resultat_decision)`,
            note: 'L\'appel est asynchrone et strictement non bloquant. La continuité du flux métier est systématiquement privilégiée : l\'exécution se poursuit immédiatement sans attendre la persistance de la preuve, garantissant un impact nul sur la latence des transactions.',
          },
          integrationTable: {
            title: 'Ce que vous fournissez',
            rows: [
              { element: 'Entrées (Input)', description: 'Les données exactes consommées par la logique de décision.' },
              { element: 'Sortie (Output)', description: 'Le résultat final produit par le système.' },
              { element: 'Référence Système', description: 'Identifiant et version du système ayant pris la décision.' },
            ],
          },
          evaluationNote: 'Le `system_ref` identifie l\'autorité qui a pris la décision. L\'évaluation de conformité est considérée comme une observation séparée, capturée indépendamment si nécessaire. Cela préserve la pureté du fait d\'exécution original.',
        },
        {
          title: '3. Capacités techniques clés',
          content: '',
          capabilities: [
            { capability: 'Preuve d\'altération', mechanism: 'Scellement cryptographique + Chaînage de hash.', outcome: 'Toute modification de l\'enregistrement ou de sa chronologie est immédiatement détectable.' },
            { capability: 'Authenticité', mechanism: 'Signatures numériques.', outcome: 'L\'origine de chaque snapshot est vérifiée et irréfutable.' },
            { capability: 'Déterminisme', mechanism: 'Sérialisation canonique.', outcome: 'Une même entrée et un même contexte produiront toujours une signature identique.' },
            { capability: 'Indépendance', mechanism: 'Enregistrements autonomes.', outcome: 'La preuve survit aux migrations ou au déclassement du système source.' },
          ],
        },
        {
          title: '4. Flexibilité de déploiement',
          content: 'Horizon est déployé **dans votre périmètre (in-perimeter)**, garantissant une souveraineté totale des données. Il s\'adapte à votre infrastructure via deux modes :',
          deploymentModes: [
            { name: 'Bibliothèque embarquée', description: 'Pour les environnements haute performance ou "edge", avec persistance locale.' },
            { name: 'Service centralisé', description: 'Pour les microservices cloud-native, avec capture via API.' },
          ],
          sovereigntyNote: 'Aucune donnée ne quitte le périmètre de votre organisation.',
        },
        {
          title: '5. Isolation par conception',
          content: 'Horizon ne se situe pas sur le chemin critique de la décision. Sa conception respecte strictement les contraintes suivantes :',
          constraints: [
            { name: 'Pas de validation', description: 'Il n\'approuve ni ne bloque les décisions.' },
            { name: 'Pas de transformation', description: 'Il ne modifie pas les données capturées.' },
            { name: 'Impact nul sur la latence', description: 'L\'architecture non bloquante garantit que les opérations métier ne sont jamais entravées. Horizon privilégie la disponibilité du système source, s\'assurant que même dans l\'éventualité rare d\'un échec de capture, la logique métier reste inchangée.' },
          ],
        },
      ],
    },
    hub: {
      title: 'Guide de lecture Horizon',
      intro: 'L\'observabilité décisionnelle est une nouvelle exigence architecturale. Pour vous aider à naviguer dans notre cadre de référence, nous avons organisé notre documentation par perspective.',
      chooseEntry: 'Choisissez votre point d\'entrée :',
      backToHome: 'Retour à l\'accueil',
      perspectives: [
        {
          letter: 'A',
          title: 'Foundations : Perspective Architecturale & Systémique',
          audience: 'Pour les Directions Techniques (CTO), Architectes en Chef et Responsables Ingénierie.',
          description: 'Analysez la lacune structurelle des environnements modernes et la définition de l\'**Infrastructure d\'Observabilité Décisionnelle (DOI)** en tant que nouvelle couche passive.',
          linkText: 'Aller à la Partie 1 : Le concept de DOI',
          href: '/foundations/doi',
        },
        {
          letter: 'B',
          title: 'Horizon : Perspective Implémentation & Preuve',
          audience: 'Pour les Gestionnaires de Risques, Auditeurs Internes et Responsables Techniques.',
          description: 'Découvrez le cycle de vie du **Snapshot de décision**, l\'intégrité cryptographique des enregistrements et la manière dont Horizon s\'intègre sans interférer avec la logique métier.',
          linkText: 'Aller à la Partie 2 : L\'implémentation Horizon',
          href: '/horizon',
        },
        {
          letter: 'C',
          title: 'Perspective Formelle & Conceptuelle',
          audience: 'Pour les institutions nécessitant des définitions formelles.',
          description: 'Définition formelle de la **preuve à l\'exécution** et des limites conceptuelles de l\'Infrastructure d\'Observabilité Décisionnelle. Livre blanc non promotionnel.',
          linkText: 'Aller à la Référence Conceptuelle',
          href: '/foundations/conceptual-reference',
        },
      ],
    },
    operationalReality: {
      title: 'Le coût de la reconstruction de décision a posteriori',
      docType: 'Réalité Opérationnelle',
      subtitle: 'Charge de reconstruction, dynamique des coûts, scénarios',
      backToHub: 'Retour au hub documentation',
      positioningStatement: {
        title: 'Déclaration de positionnement',
        content: `Ce document ne fournit pas de référence comparative ou de chiffre de coût consolidé unique. Son objectif est d'expliquer :`,
        points: [
          'pourquoi la charge opérationnelle et organisationnelle associée à la reconstruction de décision a posteriori diffère si significativement d\'une organisation à l\'autre,',
          'pourquoi cette charge est systématiquement sous-estimée,',
          'et pourquoi elle dépend principalement de l\'architecture décisionnelle plutôt que du volume de transactions.',
        ],
        note: 'Tout au long de ce document, le terme coût ne fait pas référence à un poste budgétaire unique. Il désigne la charge opérationnelle globale induite par la reconstruction, incluant la mobilisation des équipes, la dynamique des escalades, les frais de coordination et le risque associé. Les scénarios discutés représentent des ordres de grandeur d\'effort, et non des promesses ou des moyennes sectorielles.',
      },
      sections: [
        {
          title: '1. Ce que signifie réellement la reconstruction de décision a posteriori',
          content: `Dans les environnements de décision automatisés, une reconstruction a posteriori se produit lorsqu'une organisation doit expliquer, justifier ou défendre une décision après son exécution, sans avoir préservé un enregistrement factuel complet au moment de la décision.

Les déclencheurs typiques incluent :`,
          points: [
            'les litiges clients ou marchands,',
            'les demandes de partenaires ou de réseaux,',
            'les requêtes réglementaires ou de supervision,',
            'les revues d\'incidents internes,',
            'les processus précontentieux ou contentieux.',
          ],
          conclusion: 'La reconstruction n\'est pas une explication. C\'est une tentative de déduire à nouveau des faits qui n\'ont jamais été capturés comme un tout cohérent et faisant autorité.',
        },
        {
          title: '2. Pourquoi la reconstruction est le mode de fonctionnement par défaut aujourd\'hui',
          content: `La plupart des piles décisionnelles s'appuient sur une combinaison de :`,
          points: [
            'journaux de transactions (logs),',
            'référentiels de configuration,',
            'moteurs de règles,',
            'registres de modèles,',
            'API tierces.',
          ],
          additionalContent: `Ces systèmes ont été conçus pour exécuter des décisions, surveiller les performances et dépanner les incidents. Ils n'ont pas été conçus pour préserver l'état factuel exact ayant produit une décision spécifique.

En conséquence, lorsqu'une décision est contestée :`,
          challengePoints: [
            'Les logs sont extraits.',
            'Les identifiants sont corrélés.',
            'Les règles et les modèles sont revus rétrospectivement.',
            'Les équipes sont consultées.',
            'Une explication narrative est reconstruite.',
          ],
          conclusion: 'Cela survient souvent des semaines ou des mois après l\'exécution. Ce n\'est pas un échec des équipes. C\'est une conséquence de la conception architecturale.',
        },
        {
          title: '3. Pourquoi les logs ne sont pas des faits',
          content: 'Les logs sont souvent confondus avec des preuves. En réalité, ils sont :',
          points: [
            'fragmentés entre plusieurs systèmes,',
            'asynchrones,',
            'mutables ou écrasés,',
            'incomplets par rapport au contexte de la décision.',
          ],
          conclusion: 'Ils capturent rarement, en un seul endroit : les entrées exactes consommées, les versions précises des règles et des modèles appliqués, l\'état du système à l\'instant de la décision et le rôle des signaux tiers. La reconstruction repose donc sur l\'inférence et l\'interprétation, et non sur des faits préservés.',
        },
        {
          title: '4. Pourquoi la charge de reconstruction est systématiquement sous-estimée',
          content: 'La reconstruction n\'apparaît presque jamais comme un poste budgétaire unique. La charge associée est répartie entre :',
          points: [
            'les opérations et le support,',
            'les équipes fraude et risques,',
            'la data et l\'ingénierie,',
            'la conformité et le juridique,',
            'les fonctions d\'audit et de gouvernance.',
          ],
          additionalContent: 'D\'autres facteurs contribuent à cette sous-estimation :',
          additionalPoints: [
            'l\'absence de centre de coûts dédié,',
            'des parcours d\'escalade qui s\'étendent silencieusement,',
            'la consommation épisodique du temps des cadres dirigeants,',
            'le coût d\'opportunité des équipes détournées de leurs missions,',
            'la fatigue organisationnelle et émotionnelle lors des audits ou des incidents.',
          ],
          conclusion: 'En conséquence, ce n\'est pas le coût qui est mal calculé, mais la charge qui est mal perçue.',
        },
        {
          title: '5. Le coût n\'est pas un nombre, c\'est une distribution d\'effort',
          content: 'Deux organisations traitant des volumes de transactions similaires peuvent connaître des charges de reconstruction radicalement différentes. Cette différence dépend de :',
          points: [
            'combien de décisions deviennent contestées,',
            'combien de cas escaladent au-delà de l\'explication de premier niveau,',
            'le degré de dépendance à des composants tiers opaques,',
            'la qualité du versionnage des règles et des modèles,',
            'la présence de faits à l\'exécution ou la nécessité de les inférer.',
          ],
          conclusion: 'La charge de reconstruction se comporte comme une distribution, et non comme une constante.',
        },
      ],
      scenarios: {
        title: '6. Scénarios de charge de reconstruction',
        intro: 'Les scénarios suivants ne sont ni des scores de maturité ni des références comparatives. Ils illustrent comment différentes trajectoires architecturales façonnent le comportement de l\'effort de reconstruction.',
        items: [
          {
            name: 'Scénario A : Pile décisionnelle fragmentée',
            characteristics: 'Logs distribués entre plusieurs systèmes, traçabilité limitée des versions de règles et modèles, forte dépendance à des composants tiers opaques.',
            behavior: 'Escalades fréquentes vers des investigations profondes, forte dépendance aux profils seniors, justifications largement basées sur des récits reconstruits.',
            profile: 'Faible prévisibilité, forte variabilité, risque de queue important, haute sensibilité aux audits et incidents.',
          },
          {
            name: 'Scénario B : Pile décisionnelle avancée (PSP, Fintech)',
            characteristics: 'Journalisation centralisée, versionnage partiel des règles et modèles, outils de monitoring et de contrôle plus matures, combinaison de logiques de décision internes et externes.',
            behavior: 'La plupart des contestations sont résolues rapidement. Une part non négligeable de cas nécessite encore une reconstruction multi-équipes, en particulier pour les décisions complexes, multi-produits ou pilotées par des tiers.',
            profile: 'Tendance centrale relativement stable, avec des pics périodiques lors de changements réglementaires, d\'audits approfondis ou d\'incidents atypiques.',
          },
          {
            name: 'Scénario C : Ouverture vers la preuve de décision à l\'exécution',
            characteristics: 'Préservation explicite, au moment de l\'exécution, des éléments factuels ayant produit la décision. Séparation claire entre les faits de décision et l\'interprétation ultérieure. Couverture conçue pour être transversale plutôt que limitée à des produits ou flux isolés.',
            behavior: 'Là où de tels mécanismes sont introduits, même partiellement, une réduction immédiate de la charge de reconstruction est observée sur le périmètre couvert. Les justifications deviennent plus rapides, reproductibles et moins dépendantes de l\'escalade humaine.',
            profile: 'Effort plus linéaire et prévisible sur les décisions couvertes. Réduction matérielle du risque de queue, tout en soulignant la nécessité d\'une approche systémique pour éviter les effets de débordement en dehors du périmètre préservé.',
            note: 'Ce scénario ne décrit pas un état largement observé aujourd\'hui. Il représente une ouverture vers un modèle cible, utilisé pour clarifier ce qui change lorsque la préservation factuelle devient systématique.',
          },
        ],
      },
      divergence: {
        title: '7. Pourquoi la charge de reconstruction diverge si fortement',
        content: 'Dans tous les scénarios, la divergence est alimentée par :',
        points: [
          'l\'ambiguïté autour de ce qui qualifie une décision contestée,',
          'des seuils d\'escalade implicites,',
          'l\'opacité des composants tiers,',
          'l\'absence de snapshots au moment de la décision,',
          'les passages de relais organisationnels et les frais de coordination.',
        ],
        conclusion: 'Lorsque les faits manquent, le raisonnement se substitue à la preuve, et l\'effort devient non linéaire.',
      },
      selfAssessment: {
        title: '8. Auto-évaluation : reconstruisez-vous ou préservez-vous les décisions ?',
        categories: [
          {
            name: 'Preuve de décision',
            questions: [
              'Pouvez-vous récupérer les entrées exactes consommées par une décision ?',
              'Pouvez-vous identifier les versions précises des règles et modèles appliqués ?',
              'Pouvez-vous prouver l\'état du système au moment de l\'exécution ?',
            ],
          },
          {
            name: 'Gestion opérationnelle',
            questions: [
              'La plupart des explications sont-elles résolues sans escalade multi-équipes ?',
              'Les investigations reposent-elles sur des entretiens ou la mémoire ?',
              'Les explications sont-elles reproductibles des mois plus tard ?',
            ],
          },
          {
            name: 'Audit et conformité',
            questions: [
              'Pouvez-vous produire des enregistrements prêts pour l\'audit sans reconstruction ?',
              'Les scores tiers sont-ils explicables rétroactivement ?',
              'Les audits déclenchent-ils des travaux d\'ingénierie d\'urgence ?',
            ],
          },
        ],
        conclusion: 'Si plusieurs réponses sont non, votre organisation est probablement en train de reconstruire des décisions plutôt que de les préserver.',
      },
      keyTakeaway: {
        title: '9. Point clé à retenir',
        content: `La question centrale n'est pas :
« Combien coûte la reconstruction a posteriori ? »

La vraie question est :
« Pourquoi reconstruisons-nous des décisions ? »

La reconstruction a posteriori n'est pas une anomalie. C'est le résultat prévisible d'architectures qui ne préservent pas les faits au moment de l'exécution. C'est cette lacune architecturale que l'Infrastructure d'Observabilité Décisionnelle est conçue pour combler.`,
      },
      closingNote: {
        title: 'Note de clôture',
        content: 'Ce document se concentre sur la réalité opérationnelle d\'aujourd\'hui. Il ne prescrit pas d\'outils, de produits ou d\'implémentations. Il décrit la charge structurelle liée à la reconstruction de ce qui n\'a jamais été préservé. Comprendre cette charge est la première étape vers un changement architectural.',
      },
      illustrativeScenarioLink: {
        title: 'Voir aussi',
        text: 'Pour une illustration concrète de la façon dont la reconstruction devient le problème lorsqu\'une décision est examinée, consultez le',
        linkText: 'Scénario Illustratif',
        href: '/foundations/illustrative-scenario',
      },
    },
    illustrativeScenario: {
      title: 'Scénario Illustratif',
      docType: 'Réalité Opérationnelle',
      subtitle: 'Une situation type où la reconstruction devient le problème',
      backToHub: 'Retour au hub documentation',
      intro: {
        title: 'Ce que ce scénario démontre',
        content: `Ce scénario démontre que lorsqu'une décision est examinée ultérieurement, l'issue dépend de l'existence d'un registre au moment de l'exécution ou de la nécessité d'une reconstruction.

Il procède par la comparaison de **deux mondes possibles** :`,
        worlds: [
          { name: 'Monde A : La reconstruction', description: 'La décision est examinée des semaines plus tard à l\'aide de journaux (logs), de tableaux de bord, de tickets et de la mémoire des acteurs.' },
          { name: 'Monde B : La preuve au moment de l\'exécution', description: 'La décision a laissé derrière elle un artefact préservé à l\'instant même où elle a été exécutée.' },
        ],
        conclusion: 'Les événements sont identiques. La différence ne réside **pas dans la décision**, mais dans **ce qui existe avant que l\'examen ne commence**.',
      },
      purpose: {
        title: 'Objet de cette page',
        content: `Cette page ne décrit pas un cas client, un incident ou un déploiement spécifique.

Elle décrit une situation archétypale propre aux institutions régulées, quels que soient leur secteur, leur pile technologique ou leur logique décisionnelle.

L'objectif est de rendre le problème sous-jacent concret sans divulgation opérationnelle.`,
      },
      situation: {
        title: 'La situation',
        content: `À l'instant T, un système procède à une exécution.

Cette exécution peut être :`,
        executionTypes: [
          'entièrement automatisée',
          'partiellement automatisée',
          'initiée par un humain assisté par un système',
        ],
        outcomeIntro: 'L\'exécution produit un résultat :',
        outcomeTypes: [
          'porteur de conséquences institutionnelles',
          'irréversible',
          'extérieurement contestable',
        ],
        conclusion: 'Au moment où elle survient, rien ne semble anormal.',
      },
      later: {
        title: 'Des semaines ou des mois plus tard',
        content: `Une question surgit. Il ne s'agit pas d'une question générale sur le comportement habituel du système, mais d'une **question précise sur un cas spécifique** :`,
        questions: [
          'Pourquoi cette action a-t-elle été entreprise ?',
          'Quelles informations étaient disponibles à cet instant ?',
          'Quelles évaluations ont été produites ?',
          'Qu\'est-ce qui était connu, évalué ou supposé lors de l\'exécution ?',
        ],
        conclusion: 'La question est qualitative, spécifique au cas et non statistique.',
      },
      twoWorlds: {
        title: 'Deux mondes possibles',
        intro: 'À ce stade, l\'institution se trouve dans l\'une des deux situations suivantes.',
        worldA: {
          title: 'Monde A : La reconstruction',
          content: `Aucune preuve déclarée n'existe pour l'exécution à l'instant T.

Pour répondre à la question, l'organisation doit reconstruire les événements :`,
          steps: [
            'en corrélant les logs de plusieurs systèmes',
            'en examinant les tickets, courriels ou tableaux de bord',
            'en interrogeant les ingénieurs et les opérateurs',
            'en rechargeant des configurations ou des modèles ayant pu évoluer',
          ],
          assessment: `Les faits sont déduits. Le contexte est réassemblé. Les explications sont produites après coup. Bien que la reconstruction puisse être honnête et diligente, elle est :`,
          characteristics: [
            'chronophage',
            'fragile',
            'dépendante de l\'intervention humaine',
            'potentiellement contestable',
          ],
          conclusion: '**À ce stade, la reconstruction elle-même devient l\'un des objets de l\'examen.**',
        },
        worldB: {
          title: 'Monde B : L\'examen',
          content: `Une preuve déclarée existe pour l'exécution à l'instant T.

Au moment de l'exécution :`,
          facts: [
            'l\'action a été consignée comme un fait',
            'les évaluations produites à cet instant ont été préservées',
            'l\'ordre et l\'intégrité ont été garantis',
          ],
          examination: `Pour répondre à la question, l'organisation ne reconstruit pas. Elle examine. Les faits examinés sont :`,
          factProperties: [
            'les mêmes faits que ceux existant au moment de l\'exécution',
            'indépendants de l\'état actuel du système',
            'indépendants du personnel en place',
          ],
          discussion: `La discussion se concentre sur :`,
          discussionPoints: [
            'ce qui a été exécuté',
            'ce qui a été évalué',
            'le contexte déclaré',
          ],
          conclusion: '**Et non sur la crédibilité de la reconstruction du passé.**',
        },
      },
      whatChanges: {
        title: 'Ce qui change entre les deux mondes',
        content: `La différence entre ces deux mondes n'est pas d'ordre technique. **Elle réside dans le moment où la preuve est créée.**`,
        comparison: [
          'Dans le Monde A, la preuve est assemblée quand la question se pose.',
          'Dans le Monde B, la preuve existe déjà quand la question est posée.',
        ],
        impacts: `Ce simple décalage modifie :`,
        impactList: [
          'la durée des investigations',
          'le nombre d\'équipes mobilisées',
          'la stabilité des conclusions',
          'le profil de risque institutionnel',
        ],
      },
      notAbout: {
        title: 'Ce que ce scénario n\'est pas',
        content: 'Ce scénario ne traite pas :',
        points: [
          'de la justesse ou de l\'erreur de la décision',
          'de la qualité du modèle ou de la politique appliquée',
          'de la pertinence du résultat obtenu',
        ],
        conclusion: '**Il porte exclusivement sur la capacité à examiner des faits sans reconstruction.**',
      },
      whyMatters: {
        title: 'Pourquoi ce scénario est crucial',
        content: `Les institutions échouent rarement par incapacité à décider. Elles échouent parce que, plus tard, elles ne peuvent démontrer ce qui s'est passé sous la pression d'un examen, sans avoir à réassembler le passé.

**Ce scénario capture l'instant où la capacité de reconstruction ne suffit plus, car la reconstruction elle-même fait l'objet de l'examen.**`,
      },
      relationToHorizon: {
        title: 'Relation avec Horizon',
        content: `Asplenz Horizon existe pour rendre le Monde B possible. Il n'explique pas les décisions. Il ne juge pas les résultats. Il ne prévient pas les incidents.

**Il garantit que, lorsqu'un examen est requis, les faits existent déjà.**`,
      },
      closingNote: {
        title: 'Note finale',
        content: `Ce scénario est intentionnellement générique. Il s'applique partout où :`,
        points: [
          'les exécutions sont lourdes de conséquences',
          'le temps passe',
          'les systèmes et les équipes évoluent',
          'des questions sont posées après coup',
        ],
        conclusion: 'Le scénario ne prétend pas qu\'un tel dispositif doive impérativement exister. **Il clarifie ce qui change s\'il existe.**',
      },
      backLink: {
        text: 'Retour à',
        linkText: 'Le coût de la reconstruction',
        href: '/foundations/operational-reality',
      },
    },
    conceptualReference: {
      title: 'Infrastructure d\'Observabilité Décisionnelle',
      docType: 'Livre Blanc',
      subtitle: 'Documentation de référence',
      tagline: 'La preuve avant les questions',
      backToHub: 'Retour au hub documentation',
      sections: [
        {
          title: 'Introduction',
          content: `Ce livre blanc présente les fondations opérationnelles de la **preuve à l'exécution** pour les systèmes de décision automatisés et semi-automatisés opérant dans des contextes institutionnels.

Il s'adresse aux organisations qui doivent établir, avec le temps, ce qui a réellement été exécuté lorsque les décisions deviennent irréversibles — indépendamment de l'évolution ultérieure des systèmes, des modèles, des données ou des équipes.

Ce document est volontairement non promotionnel. Il se concentre sur la préservation factuelle plutôt que sur l'explication, la justification ou l'évaluation.`,
        },
        {
          title: 'Résumé opérationnel',
          content: `Les organisations s'appuient de plus en plus sur des systèmes de décision dont les résultats entraînent des conséquences opérationnelles, juridiques, financières et réputationnelles durables. Ces systèmes évoluent continuellement : les modèles sont ré-entraînés, les règles ajustées, les sources de données modifiées, les infrastructures refondues et les équipes renouvelées. Pourtant, les décisions produites restent souvent examinables bien après que les conditions techniques ayant présidé à leur création ont disparu.

Dans la plupart des organisations, l'état factuel des décisions passées n'est pas préservé au moment de l'exécution. Lorsque des questions surgissent, les institutions tentent de reconstruire ce qui s'est passé à l'aide de logs, de traces, de référentiels de configuration, de tableaux de bord et de souvenirs humains. Ce processus est intrinsèquement fragile, coûteux et incertain. Il produit des récits plutôt que des faits.

L'Infrastructure d'Observabilité Décisionnelle comble cette lacune structurelle. Elle introduit une couche de preuve à l'exécution dont le seul but est de capturer, au point de non-retour, l'état factuel complet d'une décision et de le préserver sous la forme d'un artefact immuable et auto-contenu. Cet artefact existe indépendamment de l'évolution future du système qui l'a produit.

L'infrastructure n'explique, ne justifie, ni n'évalue les décisions. Elle préserve ce qui a été exécuté. Ce faisant, elle réduit l'effort opérationnel, limite l'incertitude et restaure une autorité factuelle durable sans altérer le contrôle institutionnel ou la gouvernance.`,
        },
        {
          title: 'Énoncé du problème',
          subtitle: 'La reconstruction n\'est pas une preuve',
          content: `La plupart des systèmes de décision ne préservent pas les états d'exécution factuels. Ils laissent derrière eux des logs, des métriques et des traces conçus pour l'observabilité, et non pour la certitude probante. Lorsque les décisions sont contestées plus tard, les organisations reconstruisent des récits sous des contraintes qui n'existaient pas au moment de l'exécution.

Cela conduit à :`,
          points: [
            'des bases factuelles fragmentées et incomplètes,',
            'des divergences entre les équipes et les interprétations,',
            'un biais de rétrospective intégré aux explications,',
            'une augmentation exponentielle des coûts opérationnels au fil du temps.',
          ],
          conclusion: 'Ces défaillances sont structurelles. Elles découlent d\'une inadéquation entre ce que les systèmes d\'exécution sont conçus pour conserver et ce dont les institutions ont besoin plus tard pour établir les faits.',
        },
        {
          title: 'Principe central',
          subtitle: 'Capturer au point de non-retour',
          content: `Une décision devient un fait lorsqu'elle est exécutée. À cet instant :`,
          points: [
            'des entrées spécifiques sont consommées,',
            'une logique spécifique est appliquée,',
            'dans un contexte d\'exécution spécifique,',
            'produisant un résultat spécifique.',
          ],
          conclusion: 'Une fois ce moment passé, l\'état factuel d\'origine ne peut plus être reconstitué avec certitude. La preuve doit donc être produite au moment de l\'exécution, et non déduite plus tard.',
        },
        {
          title: 'Artefact de Snapshot Décisionnel',
          content: `Un **Artefact de Snapshot Décisionnel** est l'enregistrement canonique de l'exécution produit par le système lui-même. Ce n'est ni un log, ni une trace, ni un rapport, ni une explication. Il constitue la déclaration institutionnelle de ce qui existait au moment de l'exécution.

Toute affirmation sur la réalité de l'exécution est donc une affirmation sur le contenu de cet artefact.`,
          propertiesTitle: 'Propriétés invariantes',
          properties: [
            { name: 'Complétude', description: 'toutes les entrées, le contexte, l\'état de la logique et les résultats présents à l\'exécution sont intégrés.' },
            { name: 'Intégrité temporelle', description: 'l\'horodatage de l\'exécution est lié par cryptographie.' },
            { name: 'Immuabilité', description: 'les artefacts sont en ajout exclusif (append-only) et non modifiables.' },
            { name: 'Ordonnancement', description: 'séquençage vérifiable entre les décisions.' },
            { name: 'Authenticité', description: 'preuve cryptographique de l\'origine et de l\'intégrité.' },
          ],
          note: 'Si l\'établissement des faits nécessite d\'interroger des systèmes externes, la reconstruction a déjà commencé.',
        },
        {
          title: 'Preuve vs Reconstruction',
          comparisonTable: {
            headers: ['Reconstruction', 'Preuve à l\'exécution'],
            rows: [
              ['Récit assemblé après le résultat', 'Fait déclaré avant l\'examen'],
              ['Dépend des traces survivantes', 'Artefact auto-contenu'],
              ['Soumise au biais de rétrospective', 'Préserve la connaissance au temps T'],
              ['Coût croissant avec le temps', 'Coût fixe à l\'exécution'],
            ],
          },
          conclusion: 'L\'Infrastructure d\'Observabilité Décisionnelle n\'améliore pas la reconstruction. Elle la rend inutile dans son périmètre.',
        },
        {
          title: 'Décisions automatisées',
          content: `Les décisions automatisées sont des événements d'exécution composés d'éléments volatils :`,
          points: [
            'les données d\'entrée,',
            'la logique de décision (règles, modèles, configurations),',
            'le contexte d\'exécution,',
            'les résultats produits.',
          ],
          conclusion: 'Les logs capturent des fragments de ces éléments. Ils ne préservent pas l\'exécution dans son ensemble. Comme ces composantes évoluent indépendamment, la reconstruction a posteriori ne peut rétablir l\'état factuel de manière fiable. La capture à l\'exécution est donc la seule voie vers la certitude factuelle.',
        },
        {
          title: 'Séparation de l\'Exécution et de l\'Évaluation',
          content: 'L\'Infrastructure d\'Observabilité Décisionnelle distingue :',
          definitions: [
            { term: 'Les Exécutions', definition: 'faits immuables déclarés au temps T.' },
            { term: 'Les Évaluations', definition: 'appréciations humaines ou institutionnelles produites ultérieurement, explicitement datées et liées.' },
          ],
          conclusion: 'Cette séparation empêche structurellement le biais de rétrospective en garantissant que les connaissances ultérieures ne contaminent pas les faits d\'exécution.',
        },
        {
          title: 'Contextes institutionnels',
          content: 'La preuve à l\'exécution devient critique partout où les organisations doivent répondre de manière fiable à des questions sur des décisions passées, incluant :',
          points: [
            'les revues réglementaires ou d\'audit,',
            'les enquêtes internes et les analyses post-mortem,',
            'les demandes d\'informations des clients ou partenaires,',
            'la responsabilité à long terme à travers les cycles de vie des systèmes.',
          ],
          conclusion: 'L\'infrastructure ne prescrit ni la gouvernance, ni l\'interprétation, ni la divulgation. Elle fournit un socle factuel partagé sur lequel s\'exerce le pouvoir discrétionnaire de l\'institution.',
        },
        {
          title: 'Impact opérationnel',
          content: `L'Infrastructure d'Observabilité Décisionnelle ne change pas ce que les institutions choisissent de décider ou d'enregistrer. Elle change le coût et la fragilité de l'établissement des faits.

Elle réduit :`,
          points: [
            'la coordination entre équipes lors des revues,',
            'la dépendance aux systèmes hérités (legacy),',
            'le temps passé à reconstruire des états passés,',
            'l\'incertitude lors de l\'examen.',
          ],
          conclusion: 'Ce qui change n\'est pas l\'autorité ou l\'intention. C\'est l\'effort opérationnel.',
        },
        {
          title: 'Principes et limites',
          content: 'L\'Infrastructure d\'Observabilité Décisionnelle est régie par les limites suivantes :',
          boundaries: [
            'Capture les faits, pas les explications.',
            'Neutre vis-à-vis de l\'interprétation, du jugement et de la gouvernance.',
            'Indépendante du cycle de vie du système source.',
            'Non intrusive pour la logique de décision.',
            'Conçue par défaut comme immuable, vérifiable et en ajout exclusif.',
          ],
          conclusion: 'L\'infrastructure s\'arrête là où l\'interprétation commence.',
        },
        {
          title: 'Disponibilité et adoption',
          content: `L'Infrastructure d'Observabilité Décisionnelle est implémentée comme une capacité délimitée et introduite par des déploiements de validation contrôlés, intra-périmètre.

Ces déploiements ne sont pas des adoptions de plateforme. Ils existent pour permettre aux institutions d'examiner l'acceptabilité opérationnelle et institutionnelle de la preuve à l'exécution produite par leurs propres systèmes. La décision de ne pas poursuivre est considérée comme un résultat valide de cette étape.`,
        },
      ],
      conclusion: {
        title: 'Conclusion',
        content: `Les systèmes de décision automatisés ne faiblissent pas parce que les institutions sont incapables d'agir. Ils faiblissent lorsque, avec le temps, les institutions ne peuvent plus établir avec certitude ce qui a réellement été exécuté, dans quelles conditions et avec quelles informations.

La reconstruction a posteriori est structurellement incapable de fournir cette certitude. Elle assemble des récits une fois les résultats connus, en utilisant des traces qui n'ont jamais été conçues pour servir de preuve durable. L'Infrastructure d'Observabilité Décisionnelle restaure la continuité factuelle en garantissant que la preuve existe avant que les questions ne surgissent.

Elle ne dicte ni l'interprétation, ni le jugement. Elle préserve le terrain factuel sur lequel s'exerce la discrétion institutionnelle. La preuve n'existe qu'au moment de l'exécution. Sa préservation n'est pas un choix méthodologique, c'est une nécessité structurelle.`,
      },
      nextStep: {
        title: 'Étape suivante',
        content: 'Si vous souhaitez examiner comment ces principes s\'appliquent à vos propres systèmes de décision ou contraintes institutionnelles, vous pouvez initier une discussion.',
      },
    },
    faq: {
      title: 'Questions fréquentes',
      backToHome: 'Retour à l\'accueil',
      categories: [
        {
          name: 'Terminologie',
          questions: [
            {
              q: 'Qu\'est-ce que la Decision Observability Infrastructure ?',
              a: 'Une infrastructure d\'observabilité décisionnelle est une couche technique qui produit des Decision Snapshots au moment de l\'exécution. Elle rend les décisions automatisées observables et auditables.',
            },
            {
              q: 'Qu\'est-ce qu\'un Decision Snapshot ?',
              a: 'Un Decision Snapshot est l\'enregistrement vérifiable de ce qui a été décidé au moment de l\'exécution. C\'est la preuve — le fait décisionnel tel qu\'il est établi.',
            },
            {
              q: 'Qu\'est-ce qu\'un Decision Snapshot Artifact ?',
              a: 'Un Decision Snapshot Artifact est la matérialisation technique du Decision Snapshot : un objet signé, immuable et auto-contenu, préservé indépendamment des systèmes sources.',
            },
          ],
        },
        {
          name: 'Général',
          questions: [
            {
              q: 'Pourquoi ne pas faire ça avec des logs ?',
              a: 'Les logs sont utiles, mais souvent dispersés, reconstitués, et dépendants du SI source. Horizon vise une preuve décisionnelle autonome, stable et exploitable.',
            },
            {
              q: 'Quel périmètre pour commencer ?',
              a: 'La bonne approche est ciblée : un use case critique, instrumentation au point de décision, puis extension progressive. Éviter "capturer tout".',
            },
          ],
        },
        {
          name: 'Données & Intégration',
          questions: [
            {
              q: 'Horizon stocke-t-il des données sensibles ?',
              a: 'Horizon n\'ingère pas les flux de données opérationnels. Il préserve les faits décisionnels déclarés au moment de l\'exécution, selon des schémas et périmètres définis par l\'institution. La minimisation des données, la rétention et la classification de sensibilité restent entièrement sous contrôle institutionnel.',
            },
            {
              q: 'Comment le contenu d\'un snapshot décisionnel est-il défini ?',
              a: 'Horizon définit un ensemble de champs standards. Chaque institution définit les champs spécifiques au système et fournit le schéma utilisé pour alimenter le snapshot décisionnel.',
            },
            {
              q: 'Qui décide quelles données sont capturées ?',
              a: 'Horizon ne décide pas de ce qui est pertinent. Les clients définissent le schéma et les données fournies pour chaque système.',
            },
            {
              q: 'Comment Horizon s\'intègre-t-il aux systèmes existants ?',
              a: 'Asplenz fournit un SDK léger qui s\'intègre au point de décision de l\'institution. Les détails d\'intégration sont discutés au cas par cas pour refléter les contraintes système, les exigences de sécurité et le contexte institutionnel. La documentation technique est disponible sur demande.',
            },
          ],
        },
        {
          name: 'Positionnement',
          questions: [
            {
              q: 'Horizon influence-t-il ou participe-t-il à la prise de décision ?',
              a: 'Non. Horizon est un composant d\'infrastructure passif. Il observe et enregistre les données d\'exécution des décisions, mais n\'évalue ni ne prend jamais de décision.',
            },
            {
              q: 'Horizon est-il lié à des cadres réglementaires spécifiques ?',
              a: 'Non. Horizon est une infrastructure technique agnostique aux régimes réglementaires. Il produit des artefacts signés au moment de l\'exécution que les institutions peuvent utiliser dans leurs propres processus réglementaires.',
            },
          ],
        },
      ],
      keyQuestions: [
        {
          q: 'Pourquoi ne pas faire ça avec des logs ?',
          a: 'Les logs sont utiles, mais souvent dispersés, reconstitués, et dépendants du SI source. Horizon vise une preuve décisionnelle autonome, stable et exploitable.',
        },
        {
          q: 'Horizon influence-t-il ou participe-t-il à la prise de décision ?',
          a: 'Non. Horizon est un composant d\'infrastructure passif. Il observe et enregistre les données d\'exécution des décisions, mais n\'évalue ni ne prend jamais de décision.',
        },
        {
          q: 'Horizon stocke-t-il des données sensibles ?',
          a: 'Horizon n\'ingère pas les flux de données opérationnels. Il préserve les faits décisionnels déclarés au moment de l\'exécution, selon des schémas et périmètres définis par l\'institution.',
        },
      ],
      viewAll: 'Voir toutes les questions',
      viewAllHref: '/faq',
    },
  },
}

export function getContent(lang: Lang) {
  return content[lang]
}
