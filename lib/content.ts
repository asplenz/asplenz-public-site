export type Lang = 'en' | 'fr'

export const content = {
  en: {
    brand: 'HORIZON by ASPLENZ',
    brandShort: 'ASPLENZ',
    tagline: 'Decision Observability Infrastructure (DOI)',
    nav: {
      documentation: 'Foundations',
      foundationsOverview: 'Overview',
      foundationsPart1: 'Part 1: The Framework',
      foundationsPart2: 'Part 2: Implementation',
      foundationsPart3: 'Part 3: Observability',
      conceptualReference: 'Conceptual Reference',
      executiveBriefing: 'Executive Briefing',
      faq: 'FAQ',
      contact: 'Contact',
      menu: 'Menu',
    },
    footer: {
      product: 'Product',
      expertise: 'Expertise',
      company: 'Company',
      home: 'Home',
      copyright: '© 2025 Horizon by Asplenz. All rights reserved.',
    },
    hero: {
      topTitle: 'The Foundation of Decision Authority',
      title: 'Stop Reconstructing. Start Proving.',
      descriptionParts: [
        { text: 'Automated systems evolve. Decisions are permanent. When an automated decision is challenged, whether clinical or financial, produce the exact factual state of the execution, ', bold: false },
        { text: 'immediately, without reconstruction, and with mathematical certainty.', bold: true },
      ],
      highlight: '',
      subtext: 'For Risk, Compliance, and Risk Technology leaders',
      bottomText: 'A factual, execution-time record of what actually happened.',
      cta1: 'Request a Decision Evidence Briefing',
      cta2: 'Read the Foundations',
    },
    problem: {
      label: 'THE PROBLEM',
      title: 'The Hidden Cost of Reconstruction',
      intro: 'Most banking institutions rely on Post-hoc Reconstruction. When a regulator or an auditor asks for proof, teams spend weeks digging through disparate logs, data extracts, and human memories to "rebuild" what happened.',
      points: [
        {
          iconKey: 'brain',
          title: 'Reconstruction is a Narrative',
          text: 'It is an interpretation of the past, not a proof of the fact. It is subject to hindsight bias and data gaps.',
        },
        {
          iconKey: 'hourglass',
          title: 'Reconstruction is Volatile',
          text: 'Credit inputs (3rd party scores, real-time debt ratios) are transient. They dissolve after execution, leaving the bank\'s defense structurally fragile.',
        },
        {
          iconKey: 'alert',
          title: 'Reconstruction is Costly',
          text: 'A single regulatory look-back can mobilize a cross-functional team for months, costing up to €1M in operational overhead.',
        },
      ],
      deepDive: {
        text: 'In critical lending, if evidence was not captured at the source, it does not exist.',
        linkText: '',
        href: '',
      },
    },
    solution: {
      label: 'THE SOLUTION',
      title: 'Horizon - The Decision Ledger',
      intro: 'Horizon is a passive infrastructure layer designed to capture and seal your critical credit decisions at the Point of No Return. This is the moment where institutions are most exposed: a contested automated decision with no native evidence.',
      points: [
        {
          iconKey: 'target',
          title: 'Factual Integrity',
          text: 'Every decision is captured with its exact inputs and outputs, sealed via cryptographic hash-linking.',
        },
        {
          iconKey: 'bolt',
          title: 'Structural Examinability',
          text: 'Shift from "rebuilding the past" to "retrieving the truth" through a dedicated, independent repository of evidence.',
        },
        {
          iconKey: 'check',
          title: 'AI Act Readiness',
          text: 'The EU AI Act classifies automated lending as high-risk, requiring strict ex-post traceability. Horizon does not make you compliant; it makes your compliance provable.',
        },
      ],
    },
    impact: {
      label: 'THE ECONOMICS OF EVIDENCE',
      title: 'Horizon is designed to be profitable from the first regulatory inquiry or legal challenge.',
      headers: ['', 'Manual Reconstruction', 'Horizon Decision Ledger'],
      rows: [
        { iconKey: 'users', label: 'Effort', without: '8 to 12 weeks of investigation.', with: 'Immediate API retrieval.' },
        { iconKey: 'dollar', label: 'Team', without: 'Risk, IT, Legal, Data Engineering.', with: '1 Authorized Auditor.' },
        { iconKey: 'rocket', label: 'Reliability', without: 'Probable (Narrative-based).', with: 'Irrefutable (Mathematically sealed).' },
      ],
    },
    safeguards: {
      label: 'INSTITUTIONAL SAFEGUARDS',
      title: 'Enterprise-grade guarantees',
      points: [
        {
          iconKey: 'bolt',
          title: 'Zero Latency Impact',
          text: 'The asynchronous capture architecture ensures that your lending engine\'s performance is never compromised.',
        },
        {
          iconKey: 'shield',
          title: 'In-Perimeter Sovereignty',
          text: 'Horizon is deployed within your secure infrastructure. No data ever leaves your organization\'s control.',
        },
        {
          iconKey: 'eye',
          title: 'Passive Observer',
          text: 'Horizon requires no modification of your business logic and no changes to your existing database schemas.',
        },
      ],
      note: 'Horizon does not analyze, score, or judge decisions. It guarantees that the facts exist.',
    },
    faqTeaser: {
      text: 'Questions about integration or compliance?',
      linkText: 'Read the full FAQ',
      href: '/faq',
    },
    bridge: {
      label: 'ESTABLISH FACTUAL AUTHORITY',
      title: 'The cost of a single major investigation exceeds the cost of a decade of structural evidence.',
      text: '',
      link: '',
    },
    cta: {
      title: 'Establish Factual Authority.',
      subtitle: 'The cost of a single major investigation exceeds the cost of a decade of structural evidence.',
      emailButton: 'Request a Briefing',
      calButton: 'Read the Foundations',
    },
    contact: {
      title: 'Contact Asplenz',
      intro: 'This briefing is intended for leaders responsible for Risk, Compliance, and Risk Technology in regulated environments.',
      backToHome: 'Back to home',
      scheduleTitle: 'Schedule a Briefing',
      scheduleDescription: 'Book a 30-minute technical or risk briefing with our team.',
      scheduleButton: 'Choose a time',
      emailTitle: 'Send an Email',
      emailDescription: 'For general inquiries or if you prefer written communication.',
      note: 'We typically respond within 24-48 hours on business days.',
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

This approach leads to the **Reconstruction Paradox**: The more complex, dynamic, and fast a system becomes, the more expensive and less reliable its reconstruction becomes. In systemic environments, a reconstructed narrative -no matter how coherent -is an insufficient substitute for factual evidence.`,
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
          content: 'Horizon operates as a non-intrusive observer of decision-making systems. It does not interfere with, validate, or modify the decision flow. It captures the factual state at the **Point of No Return**  - the exact moment a decision is finalized and about to be externalized  - and preserves it as immutable evidence.',
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
      label: 'Foundations: Overview',
      title: 'Automated Decision Governance & Authority',
      subtitle: 'Principles and architecture for regulated systems',
      backToHome: 'Back to home',
      introduction: {
        title: 'Introduction',
        content: 'Modern institutions increasingly rely on **automated decisions** to operate at scale. As these decisions accelerate in frequency and complexity, traditional notions of auditability, accountability, and proof begin to fail.',
        conclusion: 'This body of work describes the architectural principles required to establish **automated decision governance** - the ability to preserve authority over every execution fact, independently of specific technologies, vendors, or regulations. These documents provide a structural response to the erosion of factual certainty in automated environments.',
      },
      whatCovered: {
        title: 'What the Foundations Cover',
        intro: 'The Foundations establish a rigorous standard for how critical systems must handle their own execution history. This architecture defines:',
        points: [
          {
            title: 'Evidence Sovereignty',
            description: 'How automated decision facts must be captured to remain authoritative and irrefutable.',
          },
          {
            title: 'Architectural Decoupling',
            description: 'Why integrity (Layer 0) and analysis (Layer 1) cannot coexist in the same technical layer.',
          },
          {
            title: 'The Chain of Trust',
            description: 'How investigation, observability, and intelligence build on immutable, contemporaneous facts.',
          },
          {
            title: 'System Classes',
            description: 'What types of critical systems require native decision authority by design.',
          },
        ],
      },
      doiCategory: {
        title: 'The Category: Decision Observability Infrastructure (DOI)',
        content: 'Together, the principles laid out in these documents define a new class of system: the **Decision Observability Infrastructure (DOI)**.',
        description: 'A DOI is the specialized infrastructure layer required to implement **Automated Decision Governance**. It ensures that an institution never has to rely on fragile, post-hoc reconstruction to explain its actions.',
        quote: 'The DOI is the technical realization of the Automated Decision Governance & Authority framework.',
      },
      pillars: {
        title: 'The Three Pillars',
        intro: 'The Foundations are organized into three sequential parts, moving from governing logic to technical reality:',
        items: [
          {
            number: '1',
            title: 'The Automated Decision Authority Framework',
            description: 'How decision integrity is preserved through the strategic separation of Evidence and Analysis.',
            linkText: 'Read Foundations | Part 1',
            href: '/foundations/framework',
          },
          {
            number: '2',
            title: 'Decision Evidence with Horizon',
            description: 'How Layer 0 can be implemented as a passive, non-intrusive "Decision Ledger" for automated systems.',
            linkText: 'Read Foundations | Part 2',
            href: '/foundations/implementation',
          },
          {
            number: '3',
            title: 'Observability & Intelligence',
            description: 'How investigation, context reconstruction, and governance reporting are built upon the foundation of immutable facts.',
            linkText: 'Read Foundations | Part 3',
            href: '/foundations/observability',
          },
        ],
      },
      implementation: {
        title: 'Implementation',
        content: 'Asplenz builds production systems that instantiate these principles in critical environments. Our role is to provide the engineering required to turn these architectural requirements into reliable institutional assets.',
      },
      additionalResources: {
        title: 'Additional Resources',
        items: [
          {
            title: 'Deep Dive: The Decision Snapshot',
            description: 'Technical anatomy of the atomic unit of institutional evidence.',
            href: '/foundations/snapshot',
          },
          {
            title: 'Conceptual Reference',
            description: 'Complete reference documentation on Decision Observability Infrastructure.',
            href: '/foundations/conceptual-reference',
          },
          {
            title: 'FAQ',
            description: 'Quick answers on security, performance, integration, and compliance.',
            href: '/faq',
          },
          {
            title: 'Illustrative Scenario',
            description: 'A concrete comparison: audit at D+180 with and without Horizon.',
            href: '/credit-illustrative-scenario',
          },
        ],
      },
    },
    framework: {
      label: 'Foundations | Part 1',
      title: 'The Automated Decision Authority Framework',
      subtitle: 'Decoupling Integrity from Complexity',
      backToHub: 'Back to Foundations',
      backToHubHref: '/foundations',
      paradox: {
        title: 'The Paradox of Automated Trust',
        content: 'Institutional trust in automated systems is facing a structural paradox: as decisions accelerate and become more autonomous, the ability to prove them erodes.',
        explanation: 'Current systems fail to provide certainty because they attempt to solve two contradictory problems within the same layer: **Preservation** (freezing the past) and **Analysis** (interpreting the past). The **Automated Decision Authority Framework** resolves this by mandating a strict architectural decoupling: **Integrity must be separated from Complexity.**',
      },
      threeLayers: {
        title: 'The Three Layers of Decision Authority',
        intro: 'To establish true governance, the **Decision Observability Infrastructure (DOI)** must be organized into three specialized layers. This ensures that the **integrity of evidence** is never contaminated by the **complexity of analysis**.',
        headers: ['Layer', 'Functional Name', 'Focus', 'Primary Objective'],
        rows: [
          {
            layer: 'Layer 0',
            name: 'Decision Evidence',
            focus: 'Truth',
            objective: 'Passive capture and cryptographic sealing of facts at the Point of No Return.',
          },
          {
            layer: 'Layer 1',
            name: 'Decision Observability',
            focus: 'Clarity',
            objective: 'Reconstruction of context, lineage, and investigation-ready interfaces.',
          },
          {
            layer: 'Layer 2',
            name: 'Decision Intelligence',
            focus: 'Alignment',
            objective: 'Monitoring of outcome quality, bias detection, and policy performance.',
          },
        ],
      },
      layer0: {
        title: 'Layer 0: The Sovereign Foundation',
        intro: '**Layer 0 (instantiated by Horizon)** is the foundational layer of the framework. It is intentionally "blind" and non-analytical. Its sole purpose is to act as a **Decision Ledger** - an immutable witness of what was executed.',
        points: [
          {
            title: 'Evidence cannot be retrofitted',
            text: 'When an automated decision is challenged, you either possess the native proof captured at T₀, or you are forced into a narrative reconstruction.',
          },
          {
            title: 'Structural Neutrality',
            text: 'Layer 0 does not judge or evaluate. It guarantees that the facts exist, exactly as they were at the precise moment the decision became irreversible.',
          },
          {
            title: 'Integrity First',
            text: 'By keeping Layer 0 separate, the bank ensures that even if its analysis tools (Layer 1) or its risk policies (Layer 2) change over time, the underlying evidence remains stable, original, and irrefutable.',
          },
        ],
      },
      axiom: {
        title: 'The "Point of No Return" Axiom',
        content: 'A decision becomes an institutional fact the moment it is externalized (e.g., a credit is rejected). Once this **Point of No Return** is passed, the original factual state - including transient data and the specific version of the logic applied - begins to dissolve.',
        conclusion: 'The Framework establishes that **evidence must be produced at execution-time, or it is forfeit.** Any attempt to "rebuild" this state later is a reconstruction, not a proof. This is the baseline for **Automated Decision Governance.**',
      },
      nextPart: {
        text: 'Continue to Part 2',
        title: 'Decision Evidence with Horizon',
        href: '/foundations/implementation',
      },
    },
    snapshot: {
      title: 'Technical Focus: The Decision Snapshot Anatomy',
      subtitle: 'The Atomic Unit of Institutional Evidence',
      backToHub: 'Back to Foundations',
      backToHubHref: '/foundations',
      introduction: {
        title: 'Introduction',
        content: 'The **Decision Snapshot** is the immutable, self-contained artifact produced by Horizon at the exact moment of execution (T₀).',
        explanation: 'Unlike application logs, which are mutable streams of operational data designed for debugging, a Decision Snapshot is a **cryptographically sealed institutional declaration**. It is designed to sustain hostile forensic scrutiny years after the originating system has been decommissioned.',
        conclusion: 'This document outlines the logical structure and technical properties of this atomic unit of evidence.',
      },
      structure: {
        title: '1. Logical Structure: The Cryptographic Onion',
        intro: 'A Decision Snapshot is composed of three inseparable layers. The outer layers provide context and security to the inner raw data, forming a single, verifiable object.',
        layers: [
          {
            id: 'A',
            name: 'The Business Payload',
            subtitle: 'The "What"',
            description: 'This is the raw, untouched evidence. Horizon captures the inputs consumed and the outputs produced by the decision engine at the point of no return.',
            points: [
              { title: 'Data Purity', text: 'The payload is captured verbatim. Horizon performs no transformation, normalization, or enrichment on this layer.' },
              { title: 'Schema Agnostic', text: 'The structure of the payload is defined entirely by the client institution\'s business logic.' },
            ],
          },
          {
            id: 'B',
            name: 'The Context Envelope',
            subtitle: 'The "When, Where, Who"',
            description: 'This layer provides the standardized metadata required for indexing, retrieval, and governance.',
            points: [
              { title: 'Global Decision ID', text: 'A unique, collision-resistant identifier for the execution event.' },
              { title: 'Accurate Timestamp (T₀)', text: 'A high-precision timestamp captured at the instant of execution, synchronized with reliable time sources.' },
              { title: 'System Reference (System_Ref)', text: 'A critical identifier specifying the exact version of the logic, model, or policy in authority (e.g., credit-scoring-engine-v4.2.1-beta).' },
            ],
          },
          {
            id: 'C',
            name: 'The Integrity Seal',
            subtitle: 'The "Proof"',
            description: 'The outermost layer is a cryptographic signature that binds the Envelope and the Payload together.',
            points: [
              { title: 'Mechanism', text: 'The contents of Layers A and B are serialized canonically and hashed using a strong algorithm (e.g., SHA-256). This hash is then signed using the institution\'s private key.' },
              { title: 'Guarantee', text: 'Any alteration to a single bit within the Payload or Context will result in a mismatch during hash re-computation, immediately invalidating the seal.' },
            ],
          },
        ],
      },
      properties: {
        title: '2. Key Technical Properties',
        items: [
          {
            title: 'Canonical Serialization',
            description: 'To ensure repeatable hashing across different systems and languages, snapshots employ canonical serialization. This guarantees that the logical order of data fields does not affect the resulting cryptographic hash, preventing false positives during verification.',
          },
          {
            title: 'Cryptographic Chaining',
            description: 'Snapshots are not isolated islands. Each new snapshot\'s Integrity Seal incorporates the hash of the preceding snapshot\'s seal.',
            outcome: 'This creates an unbroken chronological chain (similar to a Merkle chain or blockchain structure).',
            security: 'It becomes computationally infeasible to insert, delete, or reorder a decision record in the past without breaking the chain of custody for all subsequent records.',
          },
          {
            title: 'Self-Containment & Portability',
            description: 'A snapshot is designed to be verifiable "offline." It contains all the necessary context within its envelope. An auditor does not need access to the original production database to verify what data was used in a decision five years prior.',
          },
        ],
      },
      verification: {
        title: '3. The Verification Model (Sovereign)',
        subtitle: 'Why it works',
        intro: 'The verification process is designed to be autonomous and standard-based. It does not rely on Asplenz proprietary technology to prove the truth.',
        steps: [
          { number: '1', title: 'Public Key Availability', text: 'The institution publishes the Public Key corresponding to the Private Key used for signing by Horizon (stored in an HSM or secure vault).' },
          { number: '2', title: 'Standard computation', text: 'A verifier (internal audit tool, regulator script) takes the Snapshot object.' },
          { number: '3', title: 'Re-Hashing', text: 'It separates the seal from the content, canonically serializes the content, and computes the hash.' },
          { number: '4', title: 'Signature Validation', text: 'It uses the Public Key to decrypt the Integrity Seal and compares the two hashes. If they match, the evidence is mathematically proven to be authentic and unaltered.' },
        ],
      },
      cta: {
        text: 'Questions about technical integration?',
        linkText: 'Read the FAQ',
        href: '/faq',
      },
    },
    implementation: {
      label: 'Foundations | Part 2',
      title: 'Decision Evidence Implementation',
      subtitle: 'Instantiating Layer 0 with Horizon',
      backToHub: 'Back to Foundations',
      backToHubHref: '/foundations',
      intro: {
        title: 'From Framework to Infrastructure',
        content: 'While the *Automated Decision Authority Framework* defines the rules for integrity, **Horizon** provides the physical infrastructure to enforce them. As the reference implementation of **Layer 0**, Horizon is designed to be a passive, high-performance observer that captures decision facts without interfering with the primary business logic.',
      },
      nonBlocking: {
        title: '1. The Non-Blocking Capture Pattern',
        intro: 'The most critical requirement for a Layer 0 is **operational neutrality**. Horizon must not slow down the lending engine or introduce new points of failure in the decision path.',
        explanation: 'To achieve this, Horizon utilizes an **asynchronous, "fire-and-forget" pattern**. The capture call is offloaded to a background process, ensuring that the customer\'s credit response time remains unaffected.',
        codeExample: `# Integration at the Point of No Return
# The business decision is finalized, then evidence is sealed.

horizon.capture(
    input=application_data,    # Raw financials, scores, context
    output=credit_decision,   # Approved/Rejected + Terms
    system_ref="lending_v2.1" # The specific authority version
)

# Business flow continues instantly
send_response_to_customer(credit_decision)`,
      },
      deployment: {
        title: '2. Deployment Archetypes: Total Sovereignty',
        intro: 'Horizon is an **in-perimeter** solution. To maintain absolute evidence sovereignty, no data ever leaves the institution\'s secure environment. It adapts to existing architectures through two primary archetypes:',
        archetypes: [
          {
            title: 'Embedded (SDK)',
            text: 'For high-frequency environments where microsecond latency is a requirement.',
          },
          {
            title: 'Service (API)',
            text: 'For cloud-native microservices architectures requiring a centralized evidence ledger.',
          },
        ],
        securityGuarantee: 'Horizon requires no external network access to sign, seal, or verify snapshots. The institution remains the sole owner of the cryptographic keys and the resulting ledger.',
      },
      systemRef: {
        title: '3. The "System_Ref" Authority',
        content: 'A Decision Snapshot is only as valuable as the context of its authority. Horizon enforces the inclusion of a `System_Ref` -a unique identifier for the specific version of the logic, model, or rule-set that was in power at the moment of execution.',
        conclusion: 'This ensures that five years after a decision, the bank can identify exactly which "version of the truth" was applied, even if the source code or the AI model has long since evolved.',
      },
      passive: {
        title: '4. Passive Observation vs. Active Validation',
        intro: 'Horizon does not sit *in* the critical path; it sits *beside* it.',
        points: [
          {
            title: 'It does not validate',
            text: 'Horizon does not decide if a loan should be granted.',
          },
          {
            title: 'It does not transform',
            text: 'It records data exactly as consumed and produced.',
          },
          {
            title: 'It is fault-tolerant',
            text: 'If the capture layer experiences a disruption, the core business engine continues to function. Evidence is decoupled from execution to protect continuity.',
          },
        ],
      },
      nextPart: {
        text: 'Deep Dive',
        title: 'The Decision Snapshot Anatomy',
        href: '/foundations/snapshot',
      },
      cta: {
        text: 'Continue to Part 3 of the Foundations.',
        linkText: 'Read Observability & Intelligence',
        href: '/foundations/observability',
      },
      ctaSecondary: {
        text: 'Want to dive into technical details?',
        linkText: 'Read the Technical Focus',
        href: '/foundations/snapshot',
      },
    },
    observability: {
      label: 'Foundations | Part 3',
      title: 'Observability & Intelligence',
      subtitle: 'From Silent Evidence to Active Governance',
      backToHub: 'Back to Foundations',
      backToHubHref: '/foundations',
      transition: {
        title: 'Introduction: Making Truth Actionable',
        content: 'The first two pillars of the Foundations ensure that an institution possesses the **Truth** (immutable facts captured by Horizon). This provides the essential foundation for **The Decision Authority Stack**: a tiered architecture where every layer of analysis is anchored in a sovereign record.',
        emphasis: '**All observability capabilities are strictly derived from the immutable evidence captured by Horizon at Layer 0 (Decision Evidence).** Layer 1 and Layer 2 represent the subsequent analytical levels of the Stack, transforming silent cryptographic snapshots into a clear, navigable, and strategic map of the institution\'s automated life.',
        guardrail: '**Decision Observability is strictly read-only.** It exposes existing execution facts without inference, enrichment, or interpretation.',
      },
      layerSeparation: {
        layer1: 'Layer 1 (Observability): Examine what happened, based on immutable facts.',
        layer2: 'Layer 2 (Intelligence): Interpret those facts to produce insights, metrics, or judgments.',
      },
      layer1: {
        title: '1. Layer 1: Decision Observability',
        subtitle: 'The Examination Engine',
        intro: 'Decision Observability is the ability to expose the factual execution context behind a decision, without interpretation. While Horizon records the execution, **Asplenz Insights** provides the interface to examine it.',
        points: [
          {
            title: 'Contextual Reassembly',
            text: 'Exposing the environment of a decision (market conditions, policy versions, and team authority) at any point in history, based solely on preserved facts.',
          },
          {
            title: 'Lineage & Trajectory',
            text: 'Visualizing how a specific customer data point traveled through multiple models to result in a final decision, without inference.',
          },
          {
            title: 'Human-in-the-Loop Integration',
            text: 'Providing investigators with a high-fidelity workspace where evidence is pre-correlated, reducing investigation time from weeks to hours.',
          },
        ],
      },
      layer2: {
        title: '2. Layer 2: Decision Intelligence',
        subtitle: 'Strategic Governance',
        intro: 'Once observability is established at scale, the institution can move from individual cases to global patterns. This is the realm of **Automated Decision Governance.** Layer 2 interprets the facts exposed by Layer 1.',
        points: [
          {
            title: 'Policy Drift Detection',
            text: 'Comparing execution facts against intended risk policies. Early warning when automated systems deviate from strategic intent.',
          },
          {
            title: 'Bias & Fairness Auditing',
            text: 'Analyzing aggregated snapshots for systematic skews in outcomes. Native compliance with AI Act and ethical lending mandates.',
          },
          {
            title: 'Operational Feedback',
            text: 'Identifying "edge cases" where models struggle or produce inconsistent results to drive continuous improvement.',
          },
        ],
      },
      goldenRule: {
        title: '3. The Golden Rule: Interpretation Cannot Corrupt Evidence',
        content: 'In the Asplenz architecture, Layers 1 and 2 are strictly consumers of Layer 0. Layer 1 exposes facts. Layer 2 interprets them. Neither can alter them.',
        points: [
          {
            title: 'One-Way Integrity',
            text: 'Insights can examine, tag, and annotate snapshots, but it can **never modify** the original record.',
          },
          {
            title: 'Separation of Concerns',
            text: 'Your investigation tools can evolve, your AI models can change - but the underlying **Decision Ledger** remains the sovereign, untouched reference point.',
          },
        ],
      },
      conclusion: {
        title: 'Conclusion: The Future of the Sovereign Institution',
        content: 'By completing the transition from Layer 0 to Layer 2, a bank moves from a **reactive posture** to a **proactive governance**. As decisions become more automated, the institution becomes more accountable, not less.',
      },
      cta: {
        text: 'Questions about capabilities or integration?',
        linkText: 'Consult the FAQ',
        href: '/faq',
      },
      ctaSecondary: {
        text: 'For Risk and Compliance leaders:',
        linkText: 'Read the Executive Briefing',
        href: '/executive-briefing',
      },
    },
    executiveBriefing: {
      label: 'Strategic Note: The Board Briefing',
      title: 'Safeguarding Institutional Authority in Automated Lending',
      subtitle: 'A briefing for leadership on automated lending risks.',
      backToHome: 'Back to home',
      executiveSummary: {
        title: 'Executive Summary',
        content: 'As lending operations transition from human-centric to model-centric (AI/ML), the bank\'s traditional audit trails are becoming obsolete. The "Reconstruction Paradox" creates a liability: the inability to mathematically prove the factual basis of a past automated decision.',
        conclusion: 'Asplenz provides the infrastructure to convert this systemic risk into a sovereign institutional asset.',
      },
      risk: {
        title: '1. The Risk: The Erosion of Proof',
        intro: 'In a regulated environment, a "probable narrative" is not evidence. Without a **dedicated Decision Evidence Layer (Layer 0)**  - a foundational level of truth that is independent of your operational systems  - the bank is exposed to:',
        points: [
          {
            title: 'Regulatory Fragility',
            text: 'Inability to meet the transparency mandates of the EU AI Act.',
          },
          {
            title: 'Operational Friction',
            text: 'High-cost "Task Forces" required for every complex audit or litigation.',
          },
          {
            title: 'Loss of Sovereignty',
            text: 'Dependence on mutable logs that dissolve as systems evolve.',
          },
        ],
      },
      solution: {
        title: '2. The Solution: Decision Authority',
        intro: 'By deploying **Horizon**, the bank establishes a **Decision Ledger**. This is the "Black Box" of your automated systems: a governance safeguard that ensures:',
        points: [
          {
            title: 'Contemporaneous Evidence',
            text: 'Proof is captured at the moment of execution, not reconstructed later.',
          },
          {
            title: 'Cryptographic Certainty',
            text: 'Decisions are sealed and immutable, providing absolute defensibility in court or audit.',
          },
        ],
      },
      recommendation: {
        title: '3. Strategic Recommendation',
        content: 'We recommend the immediate integration of Decision Observability Infrastructure (DOI) as a core component of the bank\'s Risk & Compliance architecture. This investment future-proofs the institution, ensuring that as decisions accelerate, **Accountability** remains a constant.',
      },
      cta: {
        text: 'Ready to discuss implementation?',
        linkText: 'Request an Executive Briefing',
        href: '/contact',
      },
    },
    conceptualReference: {
      label: 'Reference Documentation',
      title: 'Decision Observability Infrastructure',
      subtitle: 'Evidence before questions',
      backToHub: 'Back to Foundations',
      backToHubHref: '/foundations',
      introduction: {
        title: 'Introduction',
        content: 'This white paper presents the operational foundations of **execution-time evidence** for automated and semi-automated decision systems operating in institutional contexts.',
        audience: 'It is intended for organizations that must establish, over time, what was actually executed when decisions become irreversible  - independently of how systems, models, data, or teams later evolve.',
        note: 'This document is intentionally non-promotional. It focuses on factual preservation rather than explanation, justification, or evaluation.',
      },
      executiveSummary: {
        title: 'Executive Summary',
        content: 'Organizations increasingly rely on automated and semi-automated decision systems whose outputs carry durable operational, legal, financial, and reputational consequences. These systems evolve continuously: models are retrained, rules are adjusted, data sources change, infrastructures are refactored, and teams rotate. Yet the decisions produced by these systems often remain examinable long after the technical conditions that produced them have disappeared.',
        problem: 'In most organizations, the factual state of past decisions is not preserved at execution time. When questions arise, institutions attempt to reconstruct what happened using logs, traces, configuration repositories, dashboards, tickets, and human recollection. This process is inherently fragile, costly, and uncertain. It produces narratives rather than facts.',
        solution: 'Decision Observability Infrastructure addresses this structural gap. It introduces an execution-time evidence layer whose sole purpose is to capture, at the point of no return, the complete factual state of a decision and preserve it as an immutable, self-contained artifact.',
        conclusion: 'The infrastructure does not explain, justify, or evaluate decisions. It preserves what was executed. By doing so, it reduces operational effort, limits uncertainty, and restores durable factual authority without altering institutional control or governance.',
      },
      problemStatement: {
        title: 'Problem Statement',
        subtitle: 'Reconstruction is not evidence',
        intro: 'Most decision systems do not preserve factual execution states. They leave behind logs, metrics, and traces designed for observability, not evidentiary certainty. When decisions are later questioned, organizations reconstruct narratives under constraints that did not exist at execution time.',
        consequences: [
          'fragmented and incomplete factual baselines,',
          'divergence between teams and interpretations,',
          'hindsight bias embedded into explanations,',
          'escalating operational cost over time.',
        ],
        conclusion: 'These failures are structural, not accidental. They arise from a mismatch between what execution systems are designed to retain and what institutions later require to establish facts.',
      },
      corePrinciple: {
        title: 'Core Principle',
        subtitle: 'Capture at the point of no return',
        intro: 'A decision becomes a fact when it is executed. At that moment:',
        points: [
          'specific inputs are consumed,',
          'specific logic is applied,',
          'under a specific execution context,',
          'producing a specific outcome.',
        ],
        conclusion: 'Once this moment passes, the original factual state cannot be reconstituted with certainty. Evidence must therefore be produced at execution time, not inferred later.',
      },
      snapshotArtifact: {
        title: 'Decision Snapshot Artifact',
        intro: 'A **Decision Snapshot Artifact** is the canonical execution-time record produced by the system itself. It is not a log, trace, report, or explanation. It constitutes the institutional declaration of record of what existed at execution time.',
        statement: 'Statements about execution-time reality are therefore statements about the contents of this artifact.',
        propertiesTitle: 'Invariant properties',
        properties: [
          { title: 'Completeness', text: 'all inputs, context, logic state, and outputs present at execution time are embedded.' },
          { title: 'Temporal integrity', text: 'the execution timestamp is cryptographically bound.' },
          { title: 'Immutability', text: 'artifacts are append-only and non-modifiable.' },
          { title: 'Ordering', text: 'verifiable sequencing across decisions.' },
          { title: 'Authenticity', text: 'cryptographic proof of origin and integrity.' },
        ],
        warning: 'If establishing execution-time facts requires querying external systems, reconstruction has already begun.',
      },
      comparison: {
        title: 'Evidence vs Reconstruction',
        headers: ['Reconstruction', 'Execution-time Evidence'],
        rows: [
          ['Narrative assembled after outcome', 'Fact declared before examination'],
          ['Depends on surviving traces', 'Self-contained artifact'],
          ['Subject to hindsight bias', 'Preserves knowledge at Time T'],
          ['Cost increases over time', 'Cost fixed at execution'],
        ],
        conclusion: 'Decision Observability Infrastructure does not improve reconstruction. It makes reconstruction unnecessary within its perimeter.',
      },
      automatedDecisions: {
        title: 'Automated Decisions',
        intro: 'Automated decisions are execution-time events composed of volatile elements:',
        elements: [
          'input data,',
          'decision logic (rules, models, configurations),',
          'execution context,',
          'produced outputs.',
        ],
        explanation: 'Logs capture fragments of these elements. They do not preserve the execution as a whole. Because these components evolve independently, post-hoc reconstruction cannot reliably re-establish factual state.',
        conclusion: 'Execution-time capture is therefore not optional. It is the only way to preserve factual certainty.',
      },
      separation: {
        title: 'Separation of Execution and Evaluation',
        intro: 'Decision Observability Infrastructure distinguishes:',
        items: [
          { title: 'Executions', text: 'immutable facts declared at Time T.' },
          { title: 'Evaluations', text: 'human or institutional assessments produced later, explicitly timestamped and linked.' },
        ],
        conclusion: 'This separation structurally prevents hindsight bias by ensuring that later knowledge does not contaminate execution-time facts.',
      },
      institutionalContexts: {
        title: 'Institutional Contexts',
        intro: 'Execution-time evidence becomes critical wherever organizations must reliably answer questions about past decisions, including:',
        contexts: [
          'regulatory or audit review,',
          'internal investigations and post-mortems,',
          'client or partner inquiries,',
          'long-term accountability across system lifecycles.',
        ],
        conclusion: 'The infrastructure does not prescribe governance, interpretation, or disclosure. It provides a shared factual baseline upon which institutional discretion operates.',
      },
      operationalImpact: {
        title: 'Operational Impact',
        intro: 'Decision Observability Infrastructure does not change what institutions choose to decide, record, or disclose. It changes the cost and fragility of establishing facts.',
        reduces: [
          'cross-team coordination during reviews,',
          'dependency on legacy systems,',
          'time spent reconstructing past states,',
          'uncertainty during examination.',
        ],
        conclusion: 'What changes is not authority or intent. It is operational effort.',
      },
      principles: {
        title: 'Principles and Boundaries',
        intro: 'Decision Observability Infrastructure is governed by the following boundaries:',
        items: [
          'Captures facts, not explanations.',
          'Neutral to interpretation, judgment, and governance.',
          'Independent of source system lifecycle.',
          'Non-intrusive to decision logic.',
          'Append-only, immutable, and verifiable by design.',
        ],
        conclusion: 'The infrastructure ends where interpretation begins.',
      },
      availability: {
        title: 'Availability and Adoption',
        content: 'Decision Observability Infrastructure is implemented as a bounded capability and introduced through controlled, intra-perimeter validation deployments.',
        clarification: 'These deployments are not platform adoptions. They exist to allow institutions to examine the operational and institutional acceptability of execution-time evidence produced by their own systems. A determination that the capability should not be pursued is considered a valid outcome of this stage.',
      },
      conclusion: {
        title: 'Conclusion',
        problem: 'Automated decision systems do not fail because institutions are unable to act. They fail when, over time, institutions can no longer establish with certainty what was actually executed, under which conditions, and with what information.',
        limitation: 'Post-hoc reconstruction is structurally incapable of providing this certainty. It assembles narratives after outcomes are known, using traces that were never designed to serve as durable evidence.',
        solution: 'Decision Observability Infrastructure restores factual continuity by ensuring that execution-time evidence exists before questions arise.',
        final: 'It does not impose interpretation, governance, or judgment. It preserves the factual ground upon which institutional discretion operates. Evidence exists only at execution time. Preserving it is not a methodological choice. It is a structural necessity.',
      },
      nextStep: {
        title: 'Next Step',
        content: 'If you want to examine how these principles apply to your own decision systems or institutional constraints, you can initiate a discussion.',
        linkText: 'Contact us',
        href: '/contact',
      },
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
      cta: {
        forCRO: {
          text: 'For strategic decision-makers:',
          linkText: 'Read the Executive Briefing',
          href: '/executive-briefing',
        },
        forCTO: {
          text: 'For technical architects:',
          linkText: 'Explore the Technical Focus',
          href: '/foundations/snapshot',
        },
      },
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Securing Decision Authority',
      backToHome: 'Back to home',
      categories: [
        {
          name: 'I. Terminology',
          questions: [
            {
              q: 'What is Decision Observability Infrastructure (DOI)?',
              a: 'DOI is a specialized technical layer dedicated to the capture and preservation of decision facts at the point of execution. It ensures that automated decisions are not just logged, but made structurally observable and auditable.',
            },
            {
              q: 'What is a Decision Snapshot?',
              a: 'A Decision Snapshot is the verifiable record of what was decided at the moment of execution (T₀). It is the evidence - the decision fact as established.',
            },
            {
              q: 'What is a Decision Snapshot Artifact?',
              a: 'It is the technical materialization of a snapshot: a signed, immutable, and self-contained object. It carries all the data required for its own verification, preserved independently of the source systems.',
            },
          ],
        },
        {
          name: 'II. Strategy & Business Value',
          questions: [
            {
              q: 'Why not use application logs?',
              a: 'Logs are designed for technical debugging, not for institutional proof. They are mutable, fragmented, and depend on the persistence of source systems. Horizon is Layer 0 (Decision Evidence): it creates an independent Decision Ledger. Unlike logs, a Horizon Snapshot is irrefutable and mathematically sealed.',
            },
            {
              q: 'What is the immediate ROI of Horizon?',
              a: 'The ROI is triggered by a single regulatory inquiry or legal challenge. By replacing weeks of "post-hoc reconstruction" (typically costing between €500,000 and €1M per major audit) with instant evidence retrieval, Horizon pays for itself through the elimination of operational investigation overhead.',
            },
          ],
        },
        {
          name: 'III. Data & Sovereignty',
          questions: [
            {
              q: 'Does Horizon store sensitive data (PII)?',
              a: 'Horizon captures only the data you choose to transmit. It supports selective hashing or masking of sensitive fields before the record is sealed. Data minimization, retention policies, and sensitivity classification remain entirely under your institution\'s control.',
            },
            {
              q: 'Do our decision snapshots leave our infrastructure?',
              a: 'No. Horizon is deployed in-perimeter. All captured data, ledgers, and signing keys remain under your institution\'s exclusive control. Asplenz has zero access to your decision data.',
            },
            {
              q: 'Who defines what data is captured?',
              a: 'The institution defines the schema and the specific fields for each system. Horizon provides a set of standard fields (Context Envelope) but the business payload is entirely defined by the client to reflect their specific risk models.',
            },
          ],
        },
        {
          name: 'IV. Performance & Integration',
          questions: [
            {
              q: 'Will Horizon slow down my lending engine?',
              a: 'No. Horizon utilizes an asynchronous capture model (fire-and-forget). The capture call is processed in the background and never blocks the core business execution flow. The impact on your decision latency is zero.',
            },
            {
              q: 'How does Horizon integrate into existing systems?',
              a: 'Asplenz provides a lightweight SDK that is integrated at the "Point of No Return" (where the decision is finalized). It acts as a passive observer and requires no modification of your business logic or database schemas.',
            },
          ],
        },
        {
          name: 'V. Regulation & Compliance',
          questions: [
            {
              q: 'How does Horizon assist with EU AI Act compliance?',
              a: 'The AI Act imposes strict ex-post traceability obligations for "high-risk" systems like automated lending. Horizon directly addresses this requirement by providing an immediate factual demonstration capability. Horizon makes your compliance provable to a regulator.',
            },
            {
              q: 'Is Horizon compatible with GDPR Article 22?',
              a: 'Yes. Article 22 governs automated decision-making and the associated rights of individuals. Horizon ensures that the exact factual state of the decision - the specific data seen by the engine at T₀ - is available and irrefutable, allowing for accurate and fact-based explanations.',
            },
          ],
        },
      ],
      cta: {
        text: 'Request a Decision Evidence Briefing',
        subtext: 'Typically attended by Risk Technology, Compliance, and Risk leaders',
        href: '/contact',
      },
      keyQuestions: [
        {
          q: 'Why not use application logs?',
          a: 'Logs are designed for technical debugging, not for institutional proof. They are mutable, fragmented, and depend on the persistence of source systems. Horizon creates an independent Decision Ledger with irrefutable, mathematically sealed snapshots.',
        },
        {
          q: 'Does Horizon influence or participate in decision-making?',
          a: 'No. Horizon is a passive infrastructure component. It observes and records decision execution data, but never evaluates or makes decisions.',
        },
        {
          q: 'Does Horizon store sensitive data?',
          a: 'Horizon captures only the data you choose to transmit. It supports selective hashing or masking of sensitive fields. Data remains entirely under your institution\'s control.',
        },
      ],
      viewAll: 'View all questions',
      viewAllHref: '/faq',
    },
    creditIllustrativeScenario: {
      backToHome: 'Back to Home',
      title: 'Illustrative Scenario: The 180-Day Audit Challenge',
      subtitle: 'From Fragile Reconstruction to Factual Authority',
      context: {
        title: 'The Context',
        content: 'Consider a major retail bank processing **50,000 automated credit applications per day**. Decisions are made by a complex engine integrating real-time debt ratios, third-party credit scores, and internal risk models.',
        event: '**The Event:** 180 days after a specific loan rejection, a regulatory body (or a legal representative) challenges the decision, citing a potential bias or lack of transparency. The bank is required to prove the exact factual basis of that specific decision.',
      },
      scenarioA: {
        title: 'Scenario A: Post-hoc Reconstruction (Without Horizon)',
        intro: '*The bank relies on traditional logs and database backups.*',
        steps: [
          {
            title: 'The Investigation Crisis',
            text: 'The Risk team contacts IT. IT discovers that the production database has been updated 12 times since the decision. The original input data has been overwritten or archived in a cold-storage data lake.',
          },
          {
            title: 'The Manual Excavation',
            text: 'A "Task Force" of 6 people (Data Engineers, Risk Analysts, Legal) is formed. They spend 4 weeks attempting to correlate server logs with archived data extracts to "guess" what the system saw at T₀.',
          },
          {
            title: 'The Result: A Narrative',
            text: 'The bank produces a 40-page report explaining what "likely happened."',
          },
          {
            title: 'The Weakness',
            text: 'The evidence is a **reconstruction**. It is subject to hindsight bias. The regulator notes that the bank cannot mathematically prove that the data used in the report is exactly what the engine consumed six months ago. **The responsibility for the proof implicitly falls back on the institution\'s risk leadership.**',
          },
        ],
        cost: '~€450,000 in operational overhead',
        result: 'Residual regulatory fine for "Lack of Process Traceability."',
      },
      scenarioB: {
        title: 'Scenario B: Execution-time Evidence (With Horizon)',
        intro: '*The bank has implemented Horizon as its Decision Ledger (Layer 0).*',
        steps: [
          {
            title: 'The Instant Retrieval',
            text: 'The Internal Auditor enters the `Decision_ID` into the system. Horizon immediately retrieves the **Decision Snapshot** captured 180 days ago.',
          },
          {
            title: 'The Factual Proof',
            text: 'The snapshot contains the exact **Inputs**, the **System Reference** (the specific model version), and the **Output** as they existed at the Point of No Return.',
          },
          {
            title: 'The Mathematical Seal',
            text: 'The auditor runs a verification script. The **Integrity Seal** matches. It is mathematically proven that this record has not been altered since the moment of execution.',
          },
          {
            title: 'The Result: A Fact',
            text: 'The bank provides a 1-page certificate of evidence. The case is closed in 48 hours. **No interpretation is required. The evidence stands independently of any narrative.**',
          },
        ],
        cost: 'Near zero (Internal Audit time)',
        result: 'Total Regulatory De-risking.',
      },
      comparison: {
        title: 'Operational Comparison',
        headers: ['Metric', 'Scenario A (Reconstruction)', 'Scenario B (Horizon)'],
        rows: [
          ['Time to Answer', '8 - 12 Weeks', '< 24 Hours'],
          ['Resource Mobilization', 'Cross-functional Task Force', '1 Authorized Auditor'],
          ['Nature of Output', 'Analytical Narrative (Probable)', 'Factual Proof (Certain)'],
          ['Data Integrity', 'Fragile (Post-hoc correlation)', 'Absolute (Cryptographic seal)'],
          ['Institutional Risk', 'High (Exposed to challenge)', 'Null (Sovereign authority)'],
        ],
      },
      conclusion: {
        title: 'Conclusion',
        content: 'This scenario demonstrates that **evidence cannot be retrofitted**.',
        statement: 'Authority is established at execution time - or it is never established. By deploying Horizon as its Decision Ledger, the bank stops being a defendant trying to justify its past. It becomes an **Authority** capable of producing the truth on demand.',
      },
      ctas: {
        snapshot: 'Explore the Technical Snapshot',
        snapshotHref: '/foundations/snapshot',
        contact: 'Discuss This Audit Scenario',
        contactHref: '/contact',
      },
      faqLink: {
        text: 'How is this possible? Read the',
        linkText: 'full FAQ',
        href: '/faq',
      },
    },
  },
  fr: {
    brand: 'HORIZON par ASPLENZ',
    brandShort: 'ASPLENZ',
    tagline: 'Infrastructure d\'Observabilité Décisionnelle (DOI)',
    nav: {
      documentation: 'Fondations',
      foundationsOverview: 'Vue d\'ensemble',
      foundationsPart1: 'Partie 1 : Le Cadre',
      foundationsPart2: 'Partie 2 : Implémentation',
      foundationsPart3: 'Partie 3 : Observabilité',
      conceptualReference: 'Référence Conceptuelle',
      executiveBriefing: 'Briefing Exécutif',
      faq: 'FAQ',
      contact: 'Contact',
      menu: 'Menu',
    },
    footer: {
      product: 'Produit',
      expertise: 'Expertise',
      company: 'Entreprise',
      home: 'Accueil',
      copyright: '© 2025 Horizon par Asplenz. Tous droits réservés.',
    },
    hero: {
      topTitle: 'Le Socle de l\'Autorité Décisionnelle',
      title: 'Cessez de reconstruire. Commencez à prouver.',
      descriptionParts: [
        { text: 'Les systèmes automatisés évoluent. Les décisions sont permanentes. Lorsqu\'une décision automatisée est contestée, qu\'elle soit clinique ou financière, produisez l\'état factuel exact de l\'exécution, ', bold: false },
        { text: 'immédiatement, sans reconstruction, et avec une certitude mathématique.', bold: true },
      ],
      highlight: '',
      subtext: 'Pour les responsables Risk, Compliance et Risk Technology',
      bottomText: 'Un enregistrement factuel, au moment de l\'exécution, de ce qui s\'est réellement passé.',
      cta1: 'Demander un Briefing Decision Evidence',
      cta2: 'Explorer les Fondations',
    },
    problem: {
      label: 'LE PROBLÈME',
      title: 'Le coût caché de la reconstruction',
      intro: 'La plupart des institutions bancaires s\'appuient sur la reconstruction a posteriori. Lorsqu\'un régulateur ou un auditeur exige une preuve, les équipes passent des semaines à fouiller dans des logs disparates, des extraits de données et des souvenirs humains pour tenter de « rebâtir » le passé.',
      points: [
        {
          iconKey: 'brain',
          title: 'La reconstruction est un récit',
          text: 'C\'est une interprétation du passé, pas une preuve du fait. Elle est soumise au biais de rétrospective et aux lacunes de données.',
        },
        {
          iconKey: 'hourglass',
          title: 'La reconstruction est instable',
          text: 'Les données de crédit (scores tiers, ratios d\'endettement) sont volatiles. Elles se dissolvent après l\'exécution, rendant la défense de la banque fragile.',
        },
        {
          iconKey: 'alert',
          title: 'La reconstruction est coûteuse',
          text: 'Un seul cycle d\'audit peut mobiliser une équipe transverse pendant des mois, coûtant jusqu\'à 1M€ en frais opérationnels.',
        },
      ],
      deepDive: {
        text: 'Dans le crédit critique, si la preuve n\'a pas été capturée à la source, elle n\'existe pas.',
        linkText: '',
        href: '',
      },
    },
    solution: {
      label: 'LA SOLUTION',
      title: 'Horizon - Le Registre Décisionnel',
      intro: 'Horizon est une couche d\'infrastructure passive conçue pour capturer et sceller vos décisions de crédit au Point de non-retour. C\'est précisément à ce moment, une décision automatisée contestée sans preuve native, que l\'exposition institutionnelle est maximale.',
      points: [
        {
          iconKey: 'target',
          title: 'Intégrité Factuelle',
          text: 'Chaque décision est capturée avec ses entrées et sorties exactes, scellée par chaînage de hash cryptographique.',
        },
        {
          iconKey: 'bolt',
          title: 'Examinabilité Structurelle',
          text: 'Passez de la « reconstruction du passé » à l\'« extraction de la vérité » via un référentiel de preuves dédié et indépendant.',
        },
        {
          iconKey: 'check',
          title: 'Préparation à l\'AI Act',
          text: 'Le règlement européen classe le crédit automatisé comme « à haut risque », imposant une traçabilité ex-post stricte. Horizon ne vous rend pas conforme ; il rend votre conformité démontrable.',
        },
      ],
    },
    impact: {
      label: 'L\'ÉCONOMIE DE LA PREUVE',
      title: 'Horizon est conçu pour être rentable dès la première enquête réglementaire ou contestation juridique.',
      headers: ['', 'Reconstruction Manuelle', 'Registre Décisionnel Horizon'],
      rows: [
        { iconKey: 'users', label: 'Effort', without: '8 à 12 semaines d\'investigation.', with: 'Extraction immédiate via API.' },
        { iconKey: 'dollar', label: 'Équipe', without: 'Risque, IT, Juridique, Data.', with: '1 Auditeur autorisé.' },
        { iconKey: 'rocket', label: 'Fiabilité', without: 'Probable (Basée sur un récit).', with: 'Irréfutable (Scellée mathématiquement).' },
      ],
    },
    safeguards: {
      label: 'GARANTIES INSTITUTIONNELLES',
      title: 'Des garanties de niveau entreprise',
      points: [
        {
          iconKey: 'bolt',
          title: 'Impact nul sur la latence',
          text: 'L\'architecture de capture asynchrone garantit que la performance de votre moteur d\'octroi n\'est jamais compromise.',
        },
        {
          iconKey: 'shield',
          title: 'Souveraineté In-Perimeter',
          text: 'Horizon est déployé au sein de votre infrastructure sécurisée. Aucune donnée ne quitte le contrôle de votre organisation.',
        },
        {
          iconKey: 'eye',
          title: 'Observateur Passif',
          text: 'Horizon ne nécessite aucune modification de votre logique métier ni de vos schémas de base de données.',
        },
      ],
      note: 'Horizon n\'analyse ni ne juge les décisions. Il garantit que les faits existent.',
    },
    faqTeaser: {
      text: 'Des questions sur l\'intégration ou la conformité ?',
      linkText: 'Consultez la FAQ complète',
      href: '/faq',
    },
    bridge: {
      label: 'ÉTABLISSEZ VOTRE AUTORITÉ FACTUELLE',
      title: 'Le coût d\'une seule investigation majeure dépasse le coût d\'une décennie de preuves structurelles.',
      text: '',
      link: '',
    },
    cta: {
      title: 'Établissez votre Autorité Factuelle.',
      subtitle: 'Le coût d\'une seule investigation majeure dépasse le coût d\'une décennie de preuves structurelles.',
      emailButton: 'Demander un briefing',
      calButton: 'Explorer les Fondations',
    },
    contact: {
      title: 'Contacter Asplenz',
      intro: 'Ce briefing s\'adresse aux responsables Risk, Compliance et Risk Technology dans les environnements régulés.',
      backToHome: 'Retour à l\'accueil',
      scheduleTitle: 'Planifier un briefing',
      scheduleDescription: 'Réservez un briefing technique ou risque de 30 minutes avec notre équipe.',
      scheduleButton: 'Choisir un créneau',
      emailTitle: 'Envoyer un email',
      emailDescription: 'Pour les demandes générales ou si vous préférez la communication écrite.',
      note: 'Nous répondons généralement sous 24-48 heures ouvrées.',
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

Cette approche mène au **paradoxe de la reconstruction** : plus un système devient complexe, dynamique et rapide, plus sa reconstruction devient coûteuse et incertaine. Dans des environnements systémiques, un récit reconstruit  - aussi cohérent soit-il  - ne peut se substituer à une preuve factuelle.`,
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
          content: 'Horizon opère comme un observateur non intrusif des systèmes décisionnels. Il n\'interfère pas avec le flux de décision, ne le valide pas et ne le modifie pas. Il capture l\'état factuel au **Point de non-retour**  - l\'instant précis où une décision est finalisée et sur le point d\'être externalisée  - et le préserve comme une preuve immuable.',
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
      label: 'Fondations : Aperçu',
      title: 'Gouvernance & Autorité des Décisions Automatisées',
      subtitle: 'Principes et architecture pour les systèmes régulés',
      backToHome: 'Retour à l\'accueil',
      introduction: {
        title: 'Introduction',
        content: 'Les institutions modernes s\'appuient de plus en plus sur des **décisions automatisées** pour fonctionner à grande échelle. À mesure que ces décisions s\'accélèrent en fréquence et en complexité, les notions traditionnelles d\'auditabilité, de responsabilité et de preuve commencent à faillir.',
        conclusion: 'Ce corpus documentaire décrit les principes architecturaux nécessaires pour établir la **gouvernance des décisions automatisées** - la capacité de préserver une autorité sur chaque fait d\'exécution, indépendamment des technologies, des fournisseurs ou des réglementations. Ces documents apportent une réponse structurelle à l\'érosion de la certitude factuelle dans les environnements automatisés.',
      },
      whatCovered: {
        title: 'Ce que couvrent les Fondations',
        intro: 'Les Fondations établissent une norme rigoureuse sur la manière dont les systèmes critiques doivent traiter leur propre historique d\'exécution. Cette architecture définit :',
        points: [
          {
            title: 'La Souveraineté de la Preuve',
            description: 'Comment les faits des décisions automatisées doivent être capturés pour rester probants et irréfutables.',
          },
          {
            title: 'Le Découplage Architectural',
            description: 'Pourquoi l\'intégrité (Layer 0) et l\'analyse (Layer 1) ne peuvent pas coexister dans la même couche technique.',
          },
          {
            title: 'La Chaîne de Confiance',
            description: 'Comment l\'investigation, l\'observabilité et l\'intelligence se construisent sur des faits immuables et contemporains de l\'action.',
          },
          {
            title: 'Les Classes de Systèmes',
            description: 'Quels types de systèmes critiques requièrent une autorité décisionnelle native par conception.',
          },
        ],
      },
      doiCategory: {
        title: 'La Catégorie : Decision Observability Infrastructure (DOI)',
        content: 'Ensemble, les principes énoncés dans ces documents définissent une nouvelle classe de système : l\'**Infrastructure d\'Observabilité Décisionnelle (DOI)**.',
        description: 'Une DOI est la couche d\'infrastructure spécialisée nécessaire pour implémenter la **Gouvernance des Décisions Automatisées**. Elle garantit qu\'une institution n\'aura jamais à s\'appuyer sur une reconstruction a posteriori fragile pour expliquer ses actes.',
        quote: 'La DOI est la réalisation technique du cadre de Gouvernance & Autorité des Décisions Automatisées.',
      },
      pillars: {
        title: 'Les Trois Piliers',
        intro: 'Les Fondations sont organisées en trois parties séquentielles, allant de la logique de gouvernance à la réalité technique :',
        items: [
          {
            number: '1',
            title: 'Le Cadre de l\'Autorité Décisionnelle Automatisée',
            description: 'Comment l\'intégrité de la décision est préservée par la séparation stratégique entre la Preuve et l\'Analyse.',
            linkText: 'Lire Fondations | Partie 1',
            href: '/foundations/framework',
          },
          {
            number: '2',
            title: 'La Preuve Décisionnelle avec Horizon',
            description: 'Comment le Layer 0 peut être implémenté comme un "Registre Décisionnel" passif pour les systèmes automatisés.',
            linkText: 'Lire Fondations | Partie 2',
            href: '/foundations/implementation',
          },
          {
            number: '3',
            title: 'Observabilité & Intelligence',
            description: 'Comment l\'investigation, la reconstruction de contexte et le reporting de gouvernance s\'appuient sur le socle des faits immuables.',
            linkText: 'Lire Fondations | Partie 3',
            href: '/foundations/observability',
          },
        ],
      },
      implementation: {
        title: 'Implémentation',
        content: 'Asplenz conçoit des systèmes de production qui instancient ces principes dans des environnements critiques. Notre rôle est de fournir l\'ingénierie nécessaire pour transformer ces exigences architecturales en actifs institutionnels fiables.',
      },
      additionalResources: {
        title: 'Ressources Complémentaires',
        items: [
          {
            title: 'Deep Dive : Le Snapshot Décisionnel',
            description: 'Anatomie technique de l\'unité atomique de preuve institutionnelle.',
            href: '/foundations/snapshot',
          },
          {
            title: 'Référence Conceptuelle',
            description: 'Documentation de référence complète sur l\'Infrastructure d\'Observabilité Décisionnelle.',
            href: '/foundations/conceptual-reference',
          },
          {
            title: 'FAQ',
            description: 'Réponses rapides sur la sécurité, la performance, l\'intégration et la conformité.',
            href: '/faq',
          },
          {
            title: 'Scénario Illustratif',
            description: 'Une comparaison concrète : audit à J+180 avec et sans Horizon.',
            href: '/credit-illustrative-scenario',
          },
        ],
      },
    },
    framework: {
      label: 'Fondations | Partie 1',
      title: 'Le Cadre de l\'Autorité Décisionnelle Automatisée',
      subtitle: 'Découpler l\'Intégrité de la Complexité',
      backToHub: 'Retour aux Fondations',
      backToHubHref: '/foundations',
      paradox: {
        title: 'Le Paradoxe de la Confiance Automatisée',
        content: 'La confiance institutionnelle dans les systèmes automatisés fait face à un paradoxe structurel : à mesure que les décisions s\'accélèrent et deviennent plus autonomes, la capacité à les prouver s\'érode.',
        explanation: 'Les systèmes actuels échouent à fournir une certitude car ils tentent de résoudre deux problèmes contradictoires au sein de la même couche : la **Préservation** (figer le passé) et l\'**Analyse** (interpréter le passé). Le **Cadre de l\'Autorité Décisionnelle Automatisée** résout ce paradoxe par un découplage architectural strict : **l\'Intégrité doit être séparée de la Complexité.**',
      },
      threeLayers: {
        title: 'Les Trois Couches de l\'Autorité Décisionnelle',
        intro: 'Pour établir une véritable gouvernance, l\'**Infrastructure d\'Observabilité Décisionnelle (DOI)** doit être organisée en trois couches spécialisées. Cette séparation garantit que l\'**intégrité de la preuve** n\'est jamais contaminée par la **complexité de l\'analyse**.',
        headers: ['Couche', 'Nom Fonctionnel', 'Focus', 'Objectif Principal'],
        rows: [
          {
            layer: 'Layer 0',
            name: 'Preuve Décisionnelle',
            focus: 'Vérité',
            objective: 'Capture passive et scellement cryptographique des faits au Point de Non-Retour.',
          },
          {
            layer: 'Layer 1',
            name: 'Observabilité Décisionnelle',
            focus: 'Clarté',
            objective: 'Reconstruction du contexte, lignage et interfaces d\'investigation.',
          },
          {
            layer: 'Layer 2',
            name: 'Intelligence Décisionnelle',
            focus: 'Alignement',
            objective: 'Suivi de la qualité des résultats, détection de biais et performance des politiques.',
          },
        ],
      },
      layer0: {
        title: 'Layer 0 : La Fondation Souveraine',
        intro: 'La **Couche 0 (instanciée par Horizon)** est la couche fondatrice du cadre. Elle est intentionnellement « aveugle » et non analytique. Son unique but est de servir de **Registre Décisionnel (Decision Ledger)** - un témoin immuable de ce qui a été exécuté.',
        points: [
          {
            title: 'La preuve ne peut pas être reconstruite après coup',
            text: 'Lorsqu\'une décision automatisée est contestée, soit vous possédez la preuve native capturée à T₀, soit vous êtes contraint à un récit de reconstruction.',
          },
          {
            title: 'Neutralité Structurelle',
            text: 'La Couche 0 ne juge ni n\'évalue. Elle garantit que les faits existent, exactement tels qu\'ils étaient au moment précis où la décision est devenue irréversible.',
          },
          {
            title: 'L\'Intégrité d\'abord',
            text: 'En gardant la Couche 0 séparée, la banque garantit que même si ses outils d\'analyse (Layer 1) ou ses politiques de risque (Layer 2) évoluent, la preuve sous-jacente reste stable, originale et irréfutable.',
          },
        ],
      },
      axiom: {
        title: 'L\'Axiome du « Point de Non-Retour »',
        content: 'Une décision devient un fait institutionnel au moment où elle est externalisée (ex : un crédit est refusé). Une fois ce **Point de Non-Retour** franchi, l\'état factuel d\'origine - incluant les données volatiles et la version spécifique de la logique appliquée - commence à se dissoudre.',
        conclusion: 'Le Cadre établit que **la preuve doit être produite au moment de l\'exécution, sous peine d\'être perdue.** Toute tentative de « rebâtir » cet état ultérieurement constitue une reconstruction, pas une preuve. C\'est le socle de la **Gouvernance des Décisions Automatisées.**',
      },
      nextPart: {
        text: 'Continuer vers la Partie 2',
        title: 'La Preuve Décisionnelle avec Horizon',
        href: '/foundations/implementation',
      },
    },
    snapshot: {
      title: 'Focus Technique : Anatomie du Snapshot Décisionnel',
      subtitle: 'L\'Unité Atomique de Preuve Institutionnelle',
      backToHub: 'Retour aux Fondations',
      backToHubHref: '/foundations',
      introduction: {
        title: 'Introduction',
        content: 'Le **Snapshot Décisionnel** est l\'artéfact immuable et auto-contenu produit par Horizon au moment exact de l\'exécution (T₀).',
        explanation: 'Contrairement aux logs applicatifs, qui sont des flux de données opérationnelles mutables conçus pour le débogage, un Snapshot Décisionnel est une **déclaration institutionnelle scellée cryptographiquement**. Il est conçu pour résister à un examen médico-légal hostile des années après la mise hors service du système d\'origine.',
        conclusion: 'Ce document présente la structure logique et les propriétés techniques de cette unité atomique de preuve.',
      },
      structure: {
        title: '1. Structure Logique : L\'Oignon Cryptographique',
        intro: 'Un Snapshot Décisionnel est composé de trois couches inséparables. Les couches externes fournissent le contexte et la sécurité aux données brutes internes, formant un objet unique et vérifiable.',
        layers: [
          {
            id: 'A',
            name: 'Le Payload Métier',
            subtitle: 'Le "Quoi"',
            description: 'C\'est la preuve brute, intacte. Horizon capture les entrées consommées et les sorties produites par le moteur de décision au point de non-retour.',
            points: [
              { title: 'Pureté des Données', text: 'Le payload est capturé verbatim. Horizon n\'effectue aucune transformation, normalisation ou enrichissement sur cette couche.' },
              { title: 'Agnostique au Schéma', text: 'La structure du payload est entièrement définie par la logique métier de l\'institution cliente.' },
            ],
          },
          {
            id: 'B',
            name: 'L\'Enveloppe de Contexte',
            subtitle: 'Le "Quand, Où, Qui"',
            description: 'Cette couche fournit les métadonnées standardisées nécessaires à l\'indexation, à la récupération et à la gouvernance.',
            points: [
              { title: 'ID de Décision Global', text: 'Un identifiant unique et résistant aux collisions pour l\'événement d\'exécution.' },
              { title: 'Horodatage Précis (T₀)', text: 'Un horodatage de haute précision capturé à l\'instant de l\'exécution, synchronisé avec des sources de temps fiables.' },
              { title: 'Référence Système (System_Ref)', text: 'Un identifiant critique spécifiant la version exacte de la logique, du modèle ou de la politique faisant autorité (ex: moteur-score-credit-v4.2.1-beta).' },
            ],
          },
          {
            id: 'C',
            name: 'Le Sceau d\'Intégrité',
            subtitle: 'La "Preuve"',
            description: 'La couche la plus externe est une signature cryptographique qui lie l\'Enveloppe et le Payload ensemble.',
            points: [
              { title: 'Mécanisme', text: 'Le contenu des Couches A et B est sérialisé de manière canonique et haché à l\'aide d\'un algorithme fort (ex: SHA-256). Ce hachage est ensuite signé à l\'aide de la clé privée de l\'institution.' },
              { title: 'Garantie', text: 'Toute altération d\'un seul bit dans le Payload ou le Contexte entraînera une non-correspondance lors du re-calcul du hachage, invalidant immédiatement le sceau.' },
            ],
          },
        ],
      },
      properties: {
        title: '2. Propriétés Techniques Clés',
        items: [
          {
            title: 'Sérialisation Canonique',
            description: 'Pour garantir un hachage répétable entre différents systèmes et langages, les snapshots utilisent une sérialisation canonique. Cela garantit que l\'ordre logique des champs de données n\'affecte pas le hachage cryptographique résultant, évitant les faux positifs lors de la vérification.',
          },
          {
            title: 'Chaînage Cryptographique',
            description: 'Les snapshots ne sont pas des îlots isolés. Le Sceau d\'Intégrité de chaque nouveau snapshot intègre le hachage du sceau du snapshot précédent.',
            outcome: 'Cela crée une chaîne chronologique ininterrompue (similaire à une structure de chaîne de Merkle ou blockchain).',
            security: 'Il devient informatiquement infaisable d\'insérer, de supprimer ou de réorganiser un enregistrement de décision dans le passé sans briser la chaîne de contrôle pour tous les enregistrements ultérieurs.',
          },
          {
            title: 'Auto-contenance et Portabilité',
            description: 'Un snapshot est conçu pour être vérifiable "hors ligne". Il contient tout le contexte nécessaire dans son enveloppe. Un auditeur n\'a pas besoin d\'accéder à la base de données de production d\'origine pour vérifier quelles données ont été utilisées dans une décision cinq ans auparavant.',
          },
        ],
      },
      verification: {
        title: '3. Le Modèle de Vérification (Souverain)',
        subtitle: 'Pourquoi ça marche',
        intro: 'Le processus de vérification est conçu pour être autonome et basé sur des standards. Il ne dépend pas d\'une technologie propriétaire Asplenz pour prouver la vérité.',
        steps: [
          { number: '1', title: 'Disponibilité de la Clé Publique', text: 'L\'institution publie la Clé Publique correspondant à la Clé Privée utilisée pour la signature par Horizon (stockée dans un HSM ou un coffre-fort sécurisé).' },
          { number: '2', title: 'Calcul standard', text: 'Un vérificateur (outil d\'audit interne, script du régulateur) prend l\'objet Snapshot.' },
          { number: '3', title: 'Re-Hachage', text: 'Il sépare le sceau du contenu, sérialise le contenu de manière canonique et calcule le hachage.' },
          { number: '4', title: 'Validation de Signature', text: 'Il utilise la Clé Publique pour déchiffrer le Sceau d\'Intégrité et compare les deux hachages. S\'ils correspondent, il est mathématiquement prouvé que la preuve est authentique et non altérée.' },
        ],
      },
      cta: {
        text: 'Questions sur l\'intégration technique ?',
        linkText: 'Consultez la FAQ',
        href: '/faq',
      },
    },
    implementation: {
      label: 'Fondations | Partie 2',
      title: 'Implémentation de la Preuve Décisionnelle',
      subtitle: 'Instancier le Layer 0 avec Horizon',
      backToHub: 'Retour aux Fondations',
      backToHubHref: '/foundations',
      intro: {
        title: 'Du Cadre à l\'Infrastructure',
        content: 'Alors que le *Cadre de l\'Autorité Décisionnelle Automatisée* définit les règles d\'intégrité, **Horizon** fournit l\'infrastructure physique pour les appliquer. En tant qu\'implémentation de référence du **Layer 0**, Horizon est conçu pour être un observateur passif de haute performance qui capture les faits décisionnels sans interférer avec la logique métier primaire.',
      },
      nonBlocking: {
        title: '1. Le Modèle de Capture Non-Bloquant',
        intro: 'L\'exigence la plus critique pour un Layer 0 est la **neutralité opérationnelle**. Horizon ne doit pas ralentir le moteur de crédit ni introduire de nouveaux points de défaillance dans le flux de décision.',
        explanation: 'Pour ce faire, Horizon utilise un **modèle asynchrone ("fire-and-forget")**. L\'appel de capture est déporté vers un processus d\'arrière-plan, garantissant que le temps de réponse au client reste inchangé.',
        codeExample: `# Intégration au Point de Non-Retour
# La décision métier est finalisée, puis la preuve est scellée.

horizon.capture(
    input=application_data,    # Données financières, scores, contexte
    output=credit_decision,   # Approuvé/Refusé + Conditions
    system_ref="lending_v2.1" # La version spécifique de l'autorité
)

# Le flux métier continue instantanément
envoyer_reponse_au_client(credit_decision)`,
      },
      deployment: {
        title: '2. Archétypes de Déploiement : Souveraineté Totale',
        intro: 'Horizon est une solution **in-perimeter**. Pour maintenir une souveraineté absolue sur la preuve, aucune donnée ne quitte l\'environnement sécurisé de l\'institution. Il s\'adapte aux architectures existantes via deux archétypes principaux :',
        archetypes: [
          {
            title: 'SDK Embarqué',
            text: 'Pour les environnements à haute fréquence où la latence se compte en microsecondes.',
          },
          {
            title: 'Service (API)',
            text: 'Pour les architectures de microservices cloud-native nécessitant un registre de preuves centralisé.',
          },
        ],
        securityGuarantee: 'Horizon ne nécessite aucun accès réseau externe pour signer, sceller ou vérifier les snapshots. L\'institution reste l\'unique propriétaire des clés cryptographiques et du registre résultant.',
      },
      systemRef: {
        title: '3. L\'Autorité du "System_Ref"',
        content: 'Un Snapshot Décisionnel n\'a de valeur que par le contexte de son autorité. Horizon impose l\'inclusion d\'une `System_Ref`  - un identifiant unique de la version spécifique de la logique, du modèle ou des règles qui faisaient autorité au moment de l\'exécution.',
        conclusion: 'Cela garantit que cinq ans après une décision, la banque peut identifier exactement quelle "version de la vérité" a été appliquée, même si le code source ou le modèle d\'IA a évolué depuis longtemps.',
      },
      passive: {
        title: '4. Observation Passive vs Validation Active',
        intro: 'Horizon ne se situe pas *dans* le chemin critique ; il se situe *à côté*.',
        points: [
          {
            title: 'Il ne valide pas',
            text: 'Horizon ne décide pas si un prêt doit être accordé.',
          },
          {
            title: 'Il ne transforme pas',
            text: 'Il enregistre les données exactement telles qu\'elles ont été consommées et produites.',
          },
          {
            title: 'Il est tolérant aux pannes',
            text: 'Si la couche de capture subit une interruption, le moteur métier continue de fonctionner. La preuve est découplée de l\'exécution pour protéger la continuité.',
          },
        ],
      },
      nextPart: {
        text: 'Deep Dive',
        title: 'L\'Anatomie du Snapshot Décisionnel',
        href: '/foundations/snapshot',
      },
      cta: {
        text: 'Continuez vers la Partie 3 des Fondations.',
        linkText: 'Lire Observabilité & Intelligence',
        href: '/foundations/observability',
      },
      ctaSecondary: {
        text: 'Envie d\'approfondir les détails techniques ?',
        linkText: 'Lire le Focus Technique',
        href: '/foundations/snapshot',
      },
    },
    observability: {
      label: 'Fondations | Partie 3',
      title: 'Observabilité & Intelligence',
      subtitle: 'De la Preuve Silencieuse à la Gouvernance Active',
      backToHub: 'Retour aux Fondations',
      backToHubHref: '/foundations',
      transition: {
        title: 'Introduction : Rendre la Vérité Actionnable',
        content: 'Les deux premiers piliers des Fondations garantissent qu\'une institution possède la **Vérité** (les faits immuables capturés par Horizon). Ils constituent le socle indispensable de **La Pile de l\'Autorité Décisionnelle (The Decision Authority Stack)** : une architecture à plusieurs niveaux où chaque strate d\'analyse est ancrée dans un registre souverain.',
        emphasis: '**Toutes les capacités d\'observabilité dérivent exclusivement des preuves immuables capturées par Horizon au Layer 0 (Preuve Décisionnelle).** Le Layer 1 et le Layer 2 représentent les niveaux analytiques suivants de la Pile, transformant les snapshots cryptographiques silencieux en une cartographie claire et stratégique de la vie automatisée de l\'institution.',
        guardrail: '**L\'Observabilité Décisionnelle est strictement en lecture seule.** Elle expose les faits d\'exécution existants sans inférence, enrichissement ou interprétation.',
      },
      layerSeparation: {
        layer1: 'Layer 1 (Observabilité) : Examiner ce qui s\'est passé, sur la base de faits immuables.',
        layer2: 'Layer 2 (Intelligence) : Interpréter ces faits pour produire des insights, métriques ou jugements.',
      },
      layer1: {
        title: '1. Layer 1 : L\'Observabilité Décisionnelle',
        subtitle: 'Le Moteur d\'Examen',
        intro: 'L\'Observabilité Décisionnelle est la capacité d\'exposer le contexte factuel d\'exécution d\'une décision, sans interprétation. Alors qu\'Horizon enregistre l\'exécution, **Asplenz Insights** fournit l\'interface pour l\'examiner.',
        points: [
          {
            title: 'Réassemblage Contextuel',
            text: 'Exposer l\'environnement d\'une décision (conditions de marché, versions des politiques) à n\'importe quel point de l\'histoire, sur la base des seuls faits préservés.',
          },
          {
            title: 'Lignage et Trajectoire',
            text: 'Visualiser comment un point de donnée client a traversé plusieurs modèles pour aboutir à une décision finale, sans inférence.',
          },
          {
            title: 'Investigation Augmentée (Human-in-the-Loop)',
            text: 'Offrir aux enquêteurs un espace de travail où les preuves sont pré-corrélées, réduisant le temps d\'enquête de plusieurs semaines à quelques heures.',
          },
        ],
      },
      layer2: {
        title: '2. Layer 2 : L\'Intelligence Décisionnelle',
        subtitle: 'Gouvernance Stratégique',
        intro: 'Une fois l\'observabilité établie à grande échelle, l\'institution peut passer de l\'analyse de cas individuels à l\'analyse de modèles globaux. C\'est le domaine de la **Gouvernance des Décisions Automatisées.** Le Layer 2 interprète les faits exposés par le Layer 1.',
        points: [
          {
            title: 'Détection de Dérive (Drift)',
            text: 'Alerte précoce lorsque les systèmes automatisés dévient de l\'intention stratégique ou des politiques de risque.',
          },
          {
            title: 'Audit de Biais & Équité',
            text: 'Analyse des snapshots agrégés pour détecter des distorsions de résultats. Conformité native avec l\'AI Act.',
          },
          {
            title: 'Feedback Opérationnel',
            text: 'Identification des "cas limites" où les modèles produisent des résultats inconsistants pour permettre une amélioration continue.',
          },
        ],
      },
      goldenRule: {
        title: '3. La Règle d\'Or : L\'Interprétation ne peut Corrompre la Preuve',
        content: 'Dans l\'architecture Asplenz, les Layers 1 et 2 sont strictement des consommateurs du Layer 0. Le Layer 1 expose les faits. Le Layer 2 les interprète. Aucun ne peut les altérer.',
        points: [
          {
            title: 'Intégrité Unidirectionnelle',
            text: 'Insights peut examiner, taguer et annoter les snapshots, mais il ne peut **jamais modifier** l\'enregistrement original.',
          },
          {
            title: 'Séparation des Responsabilités',
            text: 'Vos outils d\'enquête peuvent évoluer, vos modèles d\'IA peuvent changer - mais le **Registre Décisionnel** sous-jacent reste la référence souveraine et intacte.',
          },
        ],
      },
      conclusion: {
        title: 'Conclusion : Le Futur de l\'Institution Souveraine',
        content: 'En achevant la transition du Layer 0 au Layer 2, une banque passe d\'une **posture réactive** à une **gouvernance proactive**. À mesure que les décisions s\'automatisent, l\'institution devient plus responsable, et non l\'inverse.',
      },
      cta: {
        text: 'Questions sur les capacités ou l\'intégration ?',
        linkText: 'Consulter la FAQ',
        href: '/faq',
      },
      ctaSecondary: {
        text: 'Pour les responsables Risk et Compliance :',
        linkText: 'Lire le Briefing Exécutif',
        href: '/executive-briefing',
      },
    },
    executiveBriefing: {
      label: 'Note Stratégique : Briefing COMEX',
      title: 'Sécuriser l\'Autorité Institutionnelle dans le Crédit Automatisé',
      subtitle: 'Un briefing pour les dirigeants sur les risques du crédit automatisé.',
      backToHome: 'Retour à l\'accueil',
      executiveSummary: {
        title: 'Résumé Exécutif',
        content: 'À mesure que les opérations de crédit passent d\'un modèle humain à un modèle algorithmique (IA/ML), les pistes d\'audit traditionnelles deviennent obsolètes. Le « Paradoxe de la Reconstruction » crée un risque juridique : l\'incapacité de prouver mathématiquement la base factuelle d\'une décision passée.',
        conclusion: 'Asplenz fournit l\'infrastructure pour transformer ce risque systémique en un actif souverain.',
      },
      risk: {
        title: '1. Le Risque : L\'Érosion de la Preuve',
        intro: 'Dans un environnement régulé, un « récit probable » n\'est pas une preuve. Sans une **couche de preuve dédiée (Layer 0)**  - un socle de vérité indépendant de vos systèmes opérationnels  - la banque s\'expose à :',
        points: [
          {
            title: 'Fragilité Réglementaire',
            text: 'Incapacité à satisfaire aux mandats de transparence de l\'AI Act.',
          },
          {
            title: 'Friction Opérationnelle',
            text: 'Coût élevé des « Task Forces » mobilisées pour chaque audit ou litige.',
          },
          {
            title: 'Perte de Souveraineté',
            text: 'Dépendance à des logs mutables qui se dissolvent avec l\'évolution des systèmes.',
          },
        ],
      },
      solution: {
        title: '2. La Solution : L\'Autorité Décisionnelle',
        intro: 'En déployant **Horizon**, la banque établit un **Registre Décisionnel**. C\'est la « Boîte Noire » de vos systèmes automatisés : une garantie de gouvernance qui assure :',
        points: [
          {
            title: 'Preuve Contemporaine',
            text: 'La preuve est capturée au moment de l\'exécution, pas reconstruite après coup.',
          },
          {
            title: 'Certitude Cryptographique',
            text: 'Les décisions sont scellées et immuables, offrant une défendabilité absolue devant un régulateur ou un tribunal.',
          },
        ],
      },
      recommendation: {
        title: '3. Recommandation Stratégique',
        content: 'Nous recommandons l\'intégration immédiate de l\'Infrastructure d\'Observabilité Décisionnelle (DOI) comme composante centrale de l\'architecture Risque & Conformité. Cet investissement pérennise l\'institution, garantissant qu\'à mesure que les décisions s\'automatisent, la **Responsabilité** demeure une constante.',
      },
      cta: {
        text: 'Prêt à discuter de l\'implémentation ?',
        linkText: 'Demander un Briefing Exécutif',
        href: '/contact',
      },
    },
    conceptualReference: {
      label: 'Documentation de référence',
      title: 'Infrastructure d\'Observabilité Décisionnelle',
      subtitle: 'La preuve avant les questions',
      backToHub: 'Retour aux Fondations',
      backToHubHref: '/foundations',
      introduction: {
        title: 'Introduction',
        content: 'Ce livre blanc présente les fondations opérationnelles de la **preuve à l\'exécution** pour les systèmes de décision automatisés et semi-automatisés opérant dans des contextes institutionnels.',
        audience: 'Il s\'adresse aux organisations qui doivent établir, avec le temps, ce qui a réellement été exécuté lorsque les décisions deviennent irréversibles  - indépendamment de l\'évolution ultérieure des systèmes, des modèles, des données ou des équipes.',
        note: 'Ce document est volontairement non promotionnel. Il se concentre sur la préservation factuelle plutôt que sur l\'explication, la justification ou l\'évaluation.',
      },
      executiveSummary: {
        title: 'Résumé opérationnel',
        content: 'Les organisations s\'appuient de plus en plus sur des systèmes de décision dont les résultats entraînent des conséquences opérationnelles, juridiques, financières et réputationnelles durables. Ces systèmes évoluent continuellement : les modèles sont ré-entraînés, les règles ajustées, les sources de données modifiées, les infrastructures refondues et les équipes renouvelées.',
        problem: 'Dans la plupart des organisations, l\'état factuel des décisions passées n\'est pas préservé au moment de l\'exécution. Lorsque des questions surgissent, les institutions tentent de reconstruire ce qui s\'est passé à l\'aide de logs, de traces, de référentiels de configuration, de tableaux de bord et de souvenirs humains. Ce processus est intrinsèquement fragile, coûteux et incertain. Il produit des récits plutôt que des faits.',
        solution: 'L\'Infrastructure d\'Observabilité Décisionnelle comble cette lacune structurelle. Elle introduit une couche de preuve à l\'exécution dont le seul but est de capturer, au point de non-retour, l\'état factuel complet d\'une décision et de le préserver sous la forme d\'un artefact immuable et auto-contenu.',
        conclusion: 'L\'infrastructure n\'explique, ne justifie, ni n\'évalue les décisions. Elle préserve ce qui a été exécuté. Ce faisant, elle réduit l\'effort opérationnel, limite l\'incertitude et restaure une autorité factuelle durable sans altérer le contrôle institutionnel ou la gouvernance.',
      },
      problemStatement: {
        title: 'Énoncé du problème',
        subtitle: 'La reconstruction n\'est pas une preuve',
        intro: 'La plupart des systèmes de décision ne préservent pas les états d\'exécution factuels. Ils laissent derrière eux des logs, des métriques et des traces conçus pour l\'observabilité, et non pour la certitude probante.',
        consequences: [
          'des bases factuelles fragmentées et incomplètes,',
          'des divergences entre les équipes et les interprétations,',
          'un biais de rétrospective intégré aux explications,',
          'une augmentation exponentielle des coûts opérationnels au fil du temps.',
        ],
        conclusion: 'Ces défaillances sont structurelles. Elles découlent d\'une inadéquation entre ce que les systèmes d\'exécution sont conçus pour conserver et ce dont les institutions ont besoin plus tard pour établir les faits.',
      },
      corePrinciple: {
        title: 'Principe central',
        subtitle: 'Capturer au point de non-retour',
        intro: 'Une décision devient un fait lorsqu\'elle est exécutée. À cet instant :',
        points: [
          'des entrées spécifiques sont consommées,',
          'une logique spécifique est appliquée,',
          'dans un contexte d\'exécution spécifique,',
          'produisant un résultat spécifique.',
        ],
        conclusion: 'Une fois ce moment passé, l\'état factuel d\'origine ne peut plus être reconstitué avec certitude. La preuve doit donc être produite au moment de l\'exécution, et non déduite plus tard.',
      },
      snapshotArtifact: {
        title: 'Artefact de Snapshot Décisionnel',
        intro: 'Un **Artefact de Snapshot Décisionnel** est l\'enregistrement canonique de l\'exécution produit par le système lui-même. Ce n\'est ni un log, ni une trace, ni un rapport, ni une explication. Il constitue la déclaration institutionnelle de ce qui existait au moment de l\'exécution.',
        statement: 'Toute affirmation sur la réalité de l\'exécution est donc une affirmation sur le contenu de cet artefact.',
        propertiesTitle: 'Propriétés invariantes',
        properties: [
          { title: 'Complétude', text: 'toutes les entrées, le contexte, l\'état de la logique et les résultats présents à l\'exécution sont intégrés.' },
          { title: 'Intégrité temporelle', text: 'l\'horodatage de l\'exécution est lié par cryptographie.' },
          { title: 'Immuabilité', text: 'les artefacts sont en ajout exclusif (append-only) et non modifiables.' },
          { title: 'Ordonnancement', text: 'séquençage vérifiable entre les décisions.' },
          { title: 'Authenticité', text: 'preuve cryptographique de l\'origine et de l\'intégrité.' },
        ],
        warning: 'Si l\'établissement des faits nécessite d\'interroger des systèmes externes, la reconstruction a déjà commencé.',
      },
      comparison: {
        title: 'Preuve vs Reconstruction',
        headers: ['Reconstruction', 'Preuve à l\'exécution'],
        rows: [
          ['Récit assemblé après le résultat', 'Fait déclaré avant l\'examen'],
          ['Dépend des traces survivantes', 'Artefact auto-contenu'],
          ['Soumise au biais de rétrospective', 'Préserve la connaissance au temps T'],
          ['Coût croissant avec le temps', 'Coût fixe à l\'exécution'],
        ],
        conclusion: 'L\'Infrastructure d\'Observabilité Décisionnelle n\'améliore pas la reconstruction. Elle la rend inutile dans son périmètre.',
      },
      automatedDecisions: {
        title: 'Décisions automatisées',
        intro: 'Les décisions automatisées sont des événements d\'exécution composés d\'éléments volatils :',
        elements: [
          'les données d\'entrée,',
          'la logique de décision (règles, modèles, configurations),',
          'le contexte d\'exécution,',
          'les résultats produits.',
        ],
        explanation: 'Les logs capturent des fragments de ces éléments. Ils ne préservent pas l\'exécution dans son ensemble. Comme ces composantes évoluent indépendamment, la reconstruction a posteriori ne peut rétablir l\'état factuel de manière fiable.',
        conclusion: 'La capture à l\'exécution est donc la seule voie vers la certitude factuelle.',
      },
      separation: {
        title: 'Séparation de l\'Exécution et de l\'Évaluation',
        intro: 'L\'Infrastructure d\'Observabilité Décisionnelle distingue :',
        items: [
          { title: 'Les Exécutions', text: 'faits immuables déclarés au temps T.' },
          { title: 'Les Évaluations', text: 'appréciations humaines ou institutionnelles produites ultérieurement, explicitement datées et liées.' },
        ],
        conclusion: 'Cette séparation empêche structurellement le biais de rétrospective en garantissant que les connaissances ultérieures ne contaminent pas les faits d\'exécution.',
      },
      institutionalContexts: {
        title: 'Contextes institutionnels',
        intro: 'La preuve à l\'exécution devient critique partout où les organisations doivent répondre de manière fiable à des questions sur des décisions passées, incluant :',
        contexts: [
          'les revues réglementaires ou d\'audit,',
          'les enquêtes internes et les analyses post-mortem,',
          'les demandes d\'informations des clients ou partenaires,',
          'la responsabilité à long terme à travers les cycles de vie des systèmes.',
        ],
        conclusion: 'L\'infrastructure ne prescrit ni la gouvernance, ni l\'interprétation, ni la divulgation. Elle fournit un socle factuel partagé sur lequel s\'exerce le pouvoir discrétionnaire de l\'institution.',
      },
      operationalImpact: {
        title: 'Impact opérationnel',
        intro: 'L\'Infrastructure d\'Observabilité Décisionnelle ne change pas ce que les institutions choisissent de décider ou d\'enregistrer. Elle change le coût et la fragilité de l\'établissement des faits.',
        reduces: [
          'la coordination entre équipes lors des revues,',
          'la dépendance aux systèmes hérités (legacy),',
          'le temps passé à reconstruire des états passés,',
          'l\'incertitude lors de l\'examen.',
        ],
        conclusion: 'Ce qui change n\'est pas l\'autorité ou l\'intention. C\'est l\'effort opérationnel.',
      },
      principles: {
        title: 'Principes et limites',
        intro: 'L\'Infrastructure d\'Observabilité Décisionnelle est régie par les limites suivantes :',
        items: [
          'Capture les faits, pas les explications.',
          'Neutre vis-à-vis de l\'interprétation, du jugement et de la gouvernance.',
          'Indépendante du cycle de vie du système source.',
          'Non intrusive pour la logique de décision.',
          'Conçue par défaut comme immuable, vérifiable et en ajout exclusif.',
        ],
        conclusion: 'L\'infrastructure s\'arrête là où l\'interprétation commence.',
      },
      availability: {
        title: 'Disponibilité et adoption',
        content: 'L\'Infrastructure d\'Observabilité Décisionnelle est implémentée comme une capacité délimitée et introduite par des déploiements de validation contrôlés, intra-périmètre.',
        clarification: 'Ces déploiements ne sont pas des adoptions de plateforme. Ils existent pour permettre aux institutions d\'examiner l\'acceptabilité opérationnelle et institutionnelle de la preuve à l\'exécution produite par leurs propres systèmes. La décision de ne pas poursuivre est considérée comme un résultat valide de cette étape.',
      },
      conclusion: {
        title: 'Conclusion',
        problem: 'Les systèmes de décision automatisés ne faiblissent pas parce que les institutions sont incapables d\'agir. Ils faiblissent lorsque, avec le temps, les institutions ne peuvent plus établir avec certitude ce qui a réellement été exécuté, dans quelles conditions et avec quelles informations.',
        limitation: 'La reconstruction a posteriori est structurellement incapable de fournir cette certitude. Elle assemble des récits une fois les résultats connus, en utilisant des traces qui n\'ont jamais été conçues pour servir de preuve durable.',
        solution: 'L\'Infrastructure d\'Observabilité Décisionnelle restaure la continuité factuelle en garantissant que la preuve existe avant que les questions ne surgissent.',
        final: 'Elle ne dicte ni l\'interprétation, ni le jugement. Elle préserve le terrain factuel sur lequel s\'exerce la discrétion institutionnelle. La preuve n\'existe qu\'au moment de l\'exécution. Sa préservation n\'est pas un choix méthodologique, c\'est une nécessité structurelle.',
      },
      nextStep: {
        title: 'Étape suivante',
        content: 'Si vous souhaitez examiner comment ces principes s\'appliquent à vos propres systèmes de décision ou contraintes institutionnelles, vous pouvez initier une discussion.',
        linkText: 'Nous contacter',
        href: '/contact',
      },
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
      cta: {
        forCRO: {
          text: 'Pour les décideurs stratégiques :',
          linkText: 'Lire le Briefing Exécutif',
          href: '/executive-briefing',
        },
        forCTO: {
          text: 'Pour les architectes techniques :',
          linkText: 'Explorer le Focus Technique',
          href: '/foundations/snapshot',
        },
      },
    },
    faq: {
      title: 'Questions Fréquentes',
      subtitle: 'Sécuriser l\'Autorité Décisionnelle',
      backToHome: 'Retour à l\'accueil',
      categories: [
        {
          name: 'I. Terminologie',
          questions: [
            {
              q: 'Qu\'est-ce que la Decision Observability Infrastructure (DOI) ?',
              a: 'La DOI est une couche technique spécialisée dédiée à la capture et à la préservation des faits décisionnels au moment de l\'exécution. Elle garantit que les décisions automatisées ne sont pas seulement loguées, mais rendues structurellement observables et auditables.',
            },
            {
              q: 'Qu\'est-ce qu\'un Decision Snapshot ?',
              a: 'Un Decision Snapshot est l\'enregistrement vérifiable de ce qui a été décidé au moment de l\'exécution (T₀). C\'est la preuve - le fait décisionnel tel qu\'il est établi.',
            },
            {
              q: 'Qu\'est-ce qu\'un Decision Snapshot Artifact ?',
              a: 'C\'est la matérialisation technique du snapshot : un objet signé, immuable et auto-contenu. Il porte toutes les données nécessaires à sa propre vérification, préservé indépendamment des systèmes sources.',
            },
          ],
        },
        {
          name: 'II. Stratégie et Valeur Métier',
          questions: [
            {
              q: 'Pourquoi ne pas utiliser des logs applicatifs ?',
              a: 'Les logs sont conçus pour le débogage technique, pas pour la preuve institutionnelle. Ils sont mutables, fragmentés et dépendent de la persistance des systèmes sources. Horizon est le Layer 0 (Preuve Décisionnelle) : il crée un Registre Décisionnel indépendant. Contrairement aux logs, un Snapshot Horizon est irréfutable et scellé mathématiquement.',
            },
            {
              q: 'Quel est le ROI immédiat d\'Horizon ?',
              a: 'Le ROI est déclenché par une seule enquête réglementaire ou contestation juridique. En remplaçant des semaines de "reconstruction a posteriori" (coûtant généralement entre 500 000 € et 1 M€ par audit majeur) par une extraction de preuve instantanée, Horizon s\'amortit par l\'élimination des frais d\'investigation.',
            },
          ],
        },
        {
          name: 'III. Données et Souveraineté',
          questions: [
            {
              q: 'Horizon stocke-t-il des données sensibles (PII) ?',
              a: 'Horizon capture uniquement les données que vous choisissez de lui transmettre. Il supporte le hachage sélectif ou le masquage des champs sensibles avant le scellement. La minimisation des données, la rétention et la classification de sensibilité restent entièrement sous le contrôle de votre institution.',
            },
            {
              q: 'Nos snapshots décisionnels quittent-ils notre infrastructure ?',
              a: 'Non. Horizon est déployé in-perimeter. Toutes les données, les registres et les clés de signature restent sous le contrôle exclusif de votre institution. Asplenz n\'a aucun accès à vos données.',
            },
            {
              q: 'Qui décide quelles données sont capturées ?',
              a: 'L\'institution définit le schéma et les champs spécifiques pour chaque système. Horizon fournit un ensemble de champs standards (Enveloppe de Contexte), mais le contenu métier est entièrement défini par le client.',
            },
          ],
        },
        {
          name: 'IV. Performance et Intégration',
          questions: [
            {
              q: 'L\'ajout d\'une couche de preuve va-t-il ralentir mon moteur de crédit ?',
              a: 'Non. Horizon utilise un modèle de capture asynchrone (fire-and-forget). L\'appel est traité en arrière-plan et ne bloque jamais le flux métier. L\'impact sur la latence de vos décisions est nul.',
            },
            {
              q: 'Comment Horizon s\'intègre-t-il aux systèmes existants ?',
              a: 'Asplenz fournit un SDK léger qui s\'intègre au "Point de Non-Retour" (là où la décision est finalisée). Il agit comme un observateur passif et ne nécessite aucune modification de votre logique métier.',
            },
          ],
        },
        {
          name: 'V. Réglementation et Conformité',
          questions: [
            {
              q: 'Comment Horizon aide-t-il à la conformité avec l\'AI Act européen ?',
              a: 'L\'AI Act impose des obligations de traçabilité ex-post pour les systèmes "à haut risque". Horizon répond directement à cette exigence en fournissant une capacité de démonstration factuelle immédiate. Horizon rend votre conformité démontrable devant un régulateur.',
            },
            {
              q: 'Horizon est-il compatible avec l\'Article 22 du RGPD ?',
              a: 'Oui. L\'Article 22 encadre les décisions automatisées et les droits associés. Horizon garantit que l\'état factuel exact de la décision - les données précises vues par le moteur à T₀ - est disponible et irréfutable, permettant de fournir des explications basées sur des faits réels.',
            },
          ],
        },
      ],
      cta: {
        text: 'Demander un Briefing Decision Evidence',
        subtext: 'Généralement suivi par les responsables Risk Technology, Compliance et Risk',
        href: '/contact',
      },
      keyQuestions: [
        {
          q: 'Pourquoi ne pas utiliser des logs applicatifs ?',
          a: 'Les logs sont conçus pour le débogage technique, pas pour la preuve institutionnelle. Ils sont mutables, fragmentés et dépendent de la persistance des systèmes sources. Horizon crée un Registre Décisionnel indépendant avec des snapshots irréfutables et scellés mathématiquement.',
        },
        {
          q: 'Horizon influence-t-il ou participe-t-il à la prise de décision ?',
          a: 'Non. Horizon est un composant d\'infrastructure passif. Il observe et enregistre les données d\'exécution des décisions, mais n\'évalue ni ne prend jamais de décision.',
        },
        {
          q: 'Horizon stocke-t-il des données sensibles ?',
          a: 'Horizon capture uniquement les données que vous choisissez de lui transmettre. Il supporte le hachage sélectif ou le masquage des champs sensibles. Les données restent entièrement sous le contrôle de votre institution.',
        },
      ],
      viewAll: 'Voir toutes les questions',
      viewAllHref: '/faq',
    },
    creditIllustrativeScenario: {
      backToHome: 'Retour à l\'accueil',
      title: 'Scénario Illustratif : Le défi de l\'audit à J+180',
      subtitle: 'Du récit fragile à l\'autorité factuelle',
      context: {
        title: 'Le Contexte',
        content: 'Considérez une grande banque de détail traitant **50 000 demandes de crédit automatisées par jour**. Les décisions sont prises par un moteur complexe intégrant des ratios d\'endettement en temps réel, des scores de crédit tiers et des modèles de risque internes.',
        event: '**L\'Événement :** 180 jours après un refus de prêt spécifique, un organisme de réglementation (ou un représentant juridique) conteste la décision, invoquant un biais potentiel ou un manque de transparence. La banque est tenue de prouver la base factuelle exacte de cette décision spécifique.',
      },
      scenarioA: {
        title: 'Scénario A : Reconstruction a posteriori (Sans Horizon)',
        intro: '*La banque s\'appuie sur les logs traditionnels et les sauvegardes de base de données.*',
        steps: [
          {
            title: 'La Crise d\'Investigation',
            text: 'L\'équipe Risque contacte l\'IT. L\'IT découvre que la base de données de production a été mise à jour 12 fois depuis la décision. Les données d\'entrée originales ont été écrasées ou archivées dans un data lake.',
          },
          {
            title: 'L\'Excavation Manuelle',
            text: 'Une "Task Force" de 6 personnes est constituée. Ils passent 4 semaines à tenter de corréler les logs serveurs avec des extraits de données archivées pour « deviner » ce que le système a vu à T₀.',
          },
          {
            title: 'Le Résultat : Un Récit',
            text: 'La banque produit un rapport de 40 pages expliquant ce qui s\'est « probablement passé ».',
          },
          {
            title: 'La Faiblesse',
            text: 'La preuve est une **reconstruction**. Elle est sujette au biais de rétrospective. Le régulateur note que la banque ne peut pas prouver mathématiquement que les données utilisées dans le rapport sont exactement celles que le moteur a consommées il y a six mois. **La responsabilité de la preuve revient implicitement à la direction du risque.**',
          },
        ],
        cost: '~450 000 € en frais opérationnels',
        result: 'Amende réglementaire résiduelle pour « Manque de traçabilité des processus ».',
      },
      scenarioB: {
        title: 'Scénario B : Preuve à l\'exécution (Avec Horizon)',
        intro: '*La banque a implémenté Horizon comme son Registre Décisionnel (Decision Ledger).*',
        steps: [
          {
            title: 'L\'Extraction Instantanée',
            text: 'L\'auditeur interne saisit l\'identifiant de la décision (`Decision_ID`). Horizon récupère immédiatement le **Snapshot Décisionnel** capturé il y a 180 jours.',
          },
          {
            title: 'La Preuve Factuelle',
            text: 'Le snapshot contient les **Entrées** exactes, la **Référence Système** (version du modèle) et la **Sortie** telles qu\'elles existaient au Point de Non-Retour.',
          },
          {
            title: 'Le Sceau Mathématique',
            text: 'L\'auditeur exécute un script de vérification. Le **Sceau d\'Intégrité** correspond. Il est prouvé mathématiquement que cet enregistrement n\'a pas été modifié depuis son exécution.',
          },
          {
            title: 'Le Résultat : Un Fait',
            text: 'La banque fournit un certificat de preuve d\'une page. L\'affaire est classée en 48 heures. **Aucune interprétation n\'est requise. La preuve existe indépendamment de tout récit.**',
          },
        ],
        cost: 'Presque nul (temps de l\'auditeur interne)',
        result: 'Désensibilisation totale du risque réglementaire.',
      },
      comparison: {
        title: 'Comparaison Opérationnelle',
        headers: ['Métrique', 'Scénario A (Reconstruction)', 'Scénario B (Horizon)'],
        rows: [
          ['Délai de Réponse', '8 - 12 Semaines', '< 24 Heures'],
          ['Mobilisation Ressources', 'Task Force Transverse', '1 Auditeur Autorisé'],
          ['Nature du Résultat', 'Récit Analytique (Probable)', 'Preuve Factuelle (Certaine)'],
          ['Intégrité des Données', 'Fragile (Corrélation a posteriori)', 'Absolue (Sceau cryptographique)'],
          ['Risque Institutionnel', 'Élevé (Exposé à la contestation)', 'Nul (Autorité souveraine)'],
        ],
      },
      conclusion: {
        title: 'Conclusion',
        content: 'Ce scénario démontre que **la preuve ne peut pas être reconstruite après coup**.',
        statement: 'L\'autorité se construit à l\'exécution - ou elle ne se construit jamais. En déployant Horizon comme son Registre Décisionnel, la banque cesse d\'être un défendeur tentant de justifier son passé. Elle devient une **Autorité** capable de produire la vérité sur demande.',
      },
      ctas: {
        snapshot: 'Explorer le Snapshot Technique',
        snapshotHref: '/foundations/snapshot',
        contact: 'Discuter de ce Scénario d\'Audit',
        contactHref: '/contact',
      },
      faqLink: {
        text: 'Comment est-ce possible ? Consultez la',
        linkText: 'FAQ complète',
        href: '/faq',
      },
    },
  },
}

export function getContent(lang: Lang) {
  return content[lang]
}
