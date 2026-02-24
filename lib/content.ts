export type Lang = 'en' | 'fr'

export const content = {
  en: {
    brand: 'ASPLENZ',
    brandFull: 'ASPLENZ',
    langSwitch: 'FR',
    nav: {
      knowledge: 'Knowledge',
      evidence: 'Evidence',
      platform: 'Platform',
      foundations: 'Foundations',
      contact: 'Contact',
      // Sub-nav labels
      features: 'Features',
      docs: 'Docs',
      pricing: 'Pricing',
      overview: 'Overview',
      perspectives: 'Perspectives',
      theProblem: 'The Problem',
      theShift: 'The Shift',
      company: 'Company',
      about: 'About',
      whyAsplenz: 'Why Asplenz',
    },

    // Homepage - Landing page
    index: {
      hero: {
        headline: 'Govern AI-driven engineering before it turns into risk.',
        sub1: 'AI agents generate code.',
        sub2: 'Your organization still owns the consequences.',
        description: '**Asplenz Knowledge** gives your agents a structured decision layer - so they don\'t guess.',
        ctaPrimary: 'Start with Knowledge',
        ctaPrimaryHref: '/knowledge',
        ctaSecondary: 'See pricing',
        ctaSecondaryHref: '/knowledge/pricing',
      },
      shift: {
        title: 'AI velocity changed. Governance didn\'t.',
        intro: 'AI-assisted development is becoming default in many teams.',
        agentsNow: 'Agents now:',
        agentsDo: [
          'introduce dependencies',
          'modify APIs',
          'refactor architecture',
          'deploy infrastructure',
        ],
        butDontKnow: 'But they don\'t know:',
        dontKnow: [
          'your architectural decisions',
          'your non-negotiable security invariants',
          'which exceptions were approved',
          'what must never change',
        ],
        conclusion: 'Without a declared decision layer, agents guess.',
      },
      knowledge: {
        title: 'Asplenz Knowledge',
        subtitle: 'Operational Decision Governance for AI Systems',
        intro: 'Knowledge is a declarative system of record for:',
        entities: [
          { name: 'Invariants', description: 'constraints that must never be violated' },
          { name: 'Rules', description: 'directives that guide implementation' },
          { name: 'Decisions', description: 'documented architectural choices' },
          { name: 'Overrides', description: 'governed, time-bound exceptions' },
        ],
        after1: 'Agents query this normative state before acting.',
        after2: 'Knowledge does not block execution; it exposes the applicable decision state. Your ecosystem decides.',
        note: 'MCP-native (Model Context Protocol compatible). Built for modern AI coding environments and CI pipelines.',
        cta: 'Explore Knowledge',
        ctaHref: '/knowledge',
      },
      verifier: {
        title: 'From declaration to enforcement',
        subtitle: 'Knowledge Verifier (Premium Add-on)',
        intro: 'Declaring rules is not enough.',
        description: 'Knowledge Verifier analyzes every Pull Request against your declared normative state.',
        capabilitiesTitle: 'It:',
        capabilities: [
          'Resolves applicable scope',
          'Detects invariant and rule violations',
          'Validates override usage',
          'Enforces Implementation Report citations',
          'Produces a CI-ready verdict (pass | warn | fail)',
          'Generates a human-readable Compliance Report',
        ],
        modeTitle: 'You choose the mode:',
        modes: [
          'Report-only',
          'Fail on blocking violations',
          'Strict (citation enforced)',
        ],
      },
      whatChanges: {
        title: 'What operational governance looks like',
        instead: 'Instead of:',
        insteadQuote: '"We think this change is fine."',
        youGet: 'You get:',
        pr: {
          title: 'PR #847 - payment-service',
          items: [
            'Invariants checked: 3',
            'Rules (mandatory): 2',
            'Violations: 0',
            'Overrides used: ovr-d4e5 (expires 2025-03-01)',
            'Citations validated: yes',
          ],
          verdict: 'Verdict: PASS',
          verdictDetail: 'No blocking violations detected.',
        },
        after1: 'Every merge becomes explicitly evaluated against declared constraints.',
        after2: 'No tribal knowledge. No invisible assumptions.',
      },
      who: {
        title: 'Who this is for',
        items: [
          'Engineering teams using AI coding tools',
          'Organizations introducing autonomous agents',
          'Platform & security teams defining invariants',
          'CTOs who want velocity without architectural drift',
        ],
      },
      evidenceNote: {
        title: 'A note on Evidence',
        p1: 'Asplenz also builds **Evidence** - an independent product for sealing high-stakes decisions and generating cryptographically verifiable proof artifacts.',
        p2: 'Evidence addresses a different layer of governance: immutable proof for critical commitments.',
        cta: 'Explore Evidence',
        ctaHref: '/evidence',
      },
      ctas: {
        title: 'Start governing decisions at AI speed',
        primary: 'Start with Knowledge',
        primaryHref: '/knowledge',
        secondary: 'See pricing',
        secondaryHref: '/knowledge/pricing',
        tertiary: 'Talk to us',
        tertiaryHref: '/contact',
      },
      closing: {
        line1: 'Agents act.',
        line2: 'Organizations remain accountable.',
        line3: '**Asplenz Knowledge** makes that sustainable.',
      },
      pricing: {
        title: 'Pricing',
        tiers: [
          { name: 'Free', price: '', cta: 'Start for free', features: ['1 scope', '100 entries', 'MCP + API access'] },
          { name: 'Team', price: '€299/mo', cta: 'Start with Team', features: ['3 scopes', 'Unlimited entries', 'Approval-required overrides', 'Webhook event distribution'] },
          { name: 'Business', price: '€799/mo', cta: 'Start with Business', features: ['10 scopes', 'Unlimited entries', 'Governance dashboard (Overrides + Coverage)', 'Cross-scope visibility', 'Expiration alerts', 'Full event distribution', 'Knowledge Verifier (report-only mode included)'] },
          { name: 'Enterprise', price: 'Custom', cta: 'Contact Sales', features: ['Unlimited scopes', 'Advanced governance analytics', 'Cross-scope enforcement policies', 'Evidence bridge', 'SSO & audit log', 'Advanced Verifier controls', 'Dedicated support'] },
        ],
        verifierAddon: {
          title: 'Add-on: Knowledge Verifier (Premium Gating)',
          description: 'Turn declaration into automated enforcement in your CI/CD pipeline.',
          features: [
            'Fail-on-blocking: Automatically block PRs with critical violations.',
            'Strict mode: Enforce mandatory decision citations.',
            'Cross-scope CI policies: Standardize enforcement across the organization.',
          ],
          note: 'Available as a paid add-on for Business and Enterprise plans.',
        },
      },
    },

    // Knowledge product page
    knowledge: {
      hero: {
        title: 'Asplenz Knowledge',
        subtitle: 'Decision Governance for AI-Native Organizations',
        lines: [
          'Structure your decisions.',
          'Let your agents check them.',
          'Govern exceptions.',
          'Trace everything.',
        ],
        note: 'Make it operational in CI with Knowledge Verifier.',
      },
      problem: {
        title: 'The problem Asplenz Knowledge solves',
        intro: 'AI systems now generate code, modify infrastructure, and refactor architecture.',
        fast: 'They move fast.',
        butDontKnow: 'But they don\'t know:',
        dontKnow: [
          'Your architectural commitments',
          'Your non-negotiable security invariants',
          'Which exceptions were approved',
          'What must never change',
        ],
        conclusion: 'Without a declared decision layer, AI systems operate on assumptions.',
        punchline: 'Asplenz Knowledge makes your normative state explicit, structured, and consumable by systems.',
      },
      buildingBlocks: {
        title: 'The four building blocks',
        intro: 'Knowledge organizes your decision surface into four types of entries.',
        blocks: [
          { name: 'Decisions', description: 'Documented architectural choices and strategic commitments.\nImmutable once recorded. Preserved with full reasoning and context.', example: 'We use PostgreSQL for services requiring ACID guarantees.' },
          { name: 'Invariants', description: 'Absolute constraints that must not be violated.\nSecurity boundaries, compliance requirements, critical policies.', example: 'All public API endpoints require authentication.' },
          { name: 'Rules', description: 'Active implementation directives.\nVersioned, configurable, mandatory or advisory.', example: 'All new services must use structured logging.' },
          { name: 'Overrides', description: 'Governed exceptions to rules or invariants.\nExplicitly approved. Scoped. Time-bound when needed. Fully traceable.', example: 'Service X temporarily exempt from logging rule until migration is complete.' },
        ],
      },
      howSystemsUse: {
        title: 'How systems use Knowledge',
        intro: 'Knowledge is designed to be consumed by both humans and machines.',
        retrieveTitle: 'Retrieve the applicable decision state',
        retrieveIntro: 'Systems can request the full normative context for a given scope:',
        retrieveItems: [
          'Active invariants',
          'Mandatory and advisory rules',
          'Relevant architectural decisions',
          'Active overrides',
          'Explicit relationships',
        ],
        retrieveConclusion: 'This allows CI pipelines, dashboards, and internal tools to operate with accurate decision awareness.',
        evaluateTitle: 'Evaluate a proposed action',
        evaluateIntro: 'An agent can ask if an action is compliant with the declared rules.',
        evaluateNote: 'Knowledge returns one of three outcomes:',
        outcomes: ['Allowed', 'Denied', 'Requires human approval'],
        evaluateConclusion: 'Knowledge does not enforce execution. It exposes the evaluation result. Your ecosystem decides how to respond.',
      },
      approval: {
        title: 'Human approval for critical actions',
        intro: 'Some constraints require explicit human validation before they can be bypassed.',
        stepsIntro: 'When an action triggers such a constraint:',
        steps: [
          'The system signals that approval is required.',
          'The designated approver is notified.',
          'The human approves or rejects.',
          'If approved, a scoped exception is recorded.',
          'The action may proceed within declared boundaries.',
        ],
        conclusion: 'The agent decides whether to proceed. The human decides whether to allow it. Knowledge records the entire process.',
      },
      references: {
        title: 'Trace every usage',
        intro: 'Every interaction with a declared decision can be recorded:',
        items: [
          'Which entry was referenced',
          'In what context (PR, deployment, documentation)',
          'Whether it was followed, challenged, or overridden',
          'By whom',
        ],
        conclusion: 'This creates a living map of decision usage across your organization. You gain visibility into compliance coverage, frequently challenged constraints, and patterns of architectural drift.',
      },
      realtime: {
        title: 'Real-time decision awareness',
        description: 'When your normative state changes, connected systems can be notified. Agents and CI systems can react immediately. Your teams do not operate on outdated rules.',
      },
      verifierSection: {
        title: 'From declaration to operational governance',
        intro: 'Declaring rules is step one. To verify compliance automatically in CI, use:',
        subtitle: 'Knowledge Verifier (Premium Add-on)',
        description: 'Knowledge Verifier analyzes Pull Requests against your declared normative state. It resolves applicable scope, detects violations, validates override coverage, and checks required decision citations.',
        conclusion: 'This transforms Knowledge from a registry into operational compliance infrastructure.',
        cta: 'Learn about Knowledge Verifier',
        ctaHref: '/verifier',
      },
      isNot: {
        title: 'What Knowledge is not',
        intro: 'Knowledge is not:',
        items: [
          'A wiki',
          'A code scanner',
          'A workflow engine',
          'A policy runtime that blocks execution',
          'A replacement for engineering judgment',
        ],
        conclusion: 'It is a structured decision layer for AI-driven systems.',
      },
      replaces: {
        title: 'What Knowledge replaces',
        rows: [
          { before: 'Architecture decisions in documents', after: 'Structured, versioned, queryable entries' },
          { before: 'Security rules in someone\'s head', after: 'Explicit, checkable invariants' },
          { before: 'Exceptions in Slack threads', after: 'Governed, traceable overrides' },
          { before: '"What did we decide about X?"', after: 'Structured queryable answer' },
          { before: 'Reviews without decision context', after: 'PRs evaluated against declared rules' },
        ],
      },
      ctas: {
        title: 'Start declaring your decision surface',
        subtitle: 'Govern decisions at AI speed.',
        primary: 'Start with Knowledge',
        primaryHref: '/contact',
        secondary: 'See pricing',
        secondaryHref: '/knowledge/pricing',
        tertiary: 'Talk to us',
        tertiaryHref: '/contact',
        tagline: 'Asplenz Knowledge - operational decision governance for AI-native engineering.',
      },
    },

    // Platform page
    platform: {
      hero: {
        title: 'Decision Governance Infrastructure',
        subtitle: 'Asplenz builds systems for governing and proving organizational decisions.',
        lines: [
          'AI systems accelerate action.',
          'Organizations remain accountable.',
          'Two products address two distinct governance layers.',
        ],
      },
      layer1: {
        label: 'Layer 1',
        title: 'Govern operational decisions',
        product: 'Asplenz Knowledge',
        lines: [
          'Structure architectural decisions, rules, and invariants.',
          'Let agents check them before acting.',
          'Govern exceptions.',
          'Trace usage.',
        ],
        who: 'CTO, Engineering, Platform',
        when: 'Every PR, every deploy, every architectural change',
        purpose: 'Make the decision surface explicit and operational',
        cta: 'Explore Knowledge',
        ctaHref: '/knowledge',
      },
      layer2: {
        label: 'Layer 2',
        title: 'Prove critical commitments',
        product: 'Evidence',
        lines: [
          'Seal legally significant decisions as immutable, cryptographically verifiable facts.',
          'Generate independently verifiable proof artifacts.',
        ],
        who: 'Legal, Compliance, CISO',
        when: 'Regulatory audit, incident review, contractual dispute',
        purpose: 'Make accountability defensible',
        cta: 'Explore Evidence',
        ctaHref: '/evidence',
      },
      comparison: {
        title: 'Independent products. Shared philosophy.',
        headers: ['Feature', 'Knowledge', 'Evidence'],
        rows: [
          { label: 'Focus', knowledge: 'Operational governance', evidence: 'Legal-grade proof' },
          { label: 'Data scope', knowledge: 'All engineering decisions', evidence: 'Critical commitments only' },
          { label: 'Mutability', knowledge: 'Versioned and editable', evidence: 'Immutable and sealed' },
          { label: 'Buyer', knowledge: 'Engineering leadership', evidence: 'Legal / Compliance' },
          { label: 'Dependency', knowledge: 'None', evidence: 'None' },
        ],
        standalone1: 'A client can use Knowledge without Evidence.',
        standalone2: 'A client can use Evidence without Knowledge.',
        together: 'Together, they form a complete decision governance infrastructure.',
      },
      intersection: {
        title: 'When they intersect',
        p1: 'Sometimes an operational decision becomes legally significant.',
        p2: 'In those cases, it may be sealed in Evidence.',
        p3: 'But this is optional - not structural.',
      },
      whyMatters: {
        title: 'Why this matters',
        lines: [
          'AI accelerates execution.',
          'Decision governance must scale accordingly.',
        ],
        intro: 'Asplenz provides both:',
        items: [
          'Structured decision governance',
          'Cryptographic proof infrastructure',
        ],
        closing: 'Two layers. One philosophy: decisions are assets.',
      },
    },

    // Evidence product page
    evidence: {
      header: 'Part of the Asplenz platform. Evidence works standalone or alongside Knowledge and Knowledge Verifier.',
      headerCta: 'Learn about Knowledge',
      headerCtaVerifier: 'Learn about Knowledge Verifier',
      headerCtaVerifierHref: '/verifier',
      title: 'Evidence: A Decision Evidence Infrastructure',
      subtitle: 'An infrastructure of proof',
      sections: [
        {
          title: 'An infrastructure of proof',
          content: 'Evidence is an infrastructure of proof. It exists for a simple reason: to allow an organization to rely on facts, rather than narratives, when a critical decision is called into question.',
        },
        {
          title: 'Outside the decision system',
          content: 'Evidence does not help decide. It does not control action. It does not impose any process. It intentionally stands outside the decision-making system.\n\nThis stance is not a shortcoming, but a prerequisite. As soon as a system validates, authorizes, or blocks, it becomes a stakeholder in the decision. The evidence it produces then ceases to be neutral.',
        },
        {
          title: 'What Evidence records',
          content: 'What Evidence captures are declared facts: that an intention was expressed, that information was transmitted, that a result was observed. It infers nothing. It qualifies nothing.\n\nIt solely guarantees that these facts existed, at a specific point in time, and that they can be independently verified.',
        },
        {
          title: 'No workflow, no interface to decide',
          content: 'Evidence does not seek to replace existing tools. Decisions continue to originate where they actually occur: in human exchanges, business systems, or contexts of urgency or exception. Evidence adapts to these environments without requiring decision-makers to change their habits or learn a new interface.',
        },
        {
          title: 'Invisible when it matters',
          content: 'This discretion is essential. Evidence is not a destination where people go to work. It is a silent layer, present at the moment facts are expressed, invisible to operations, but fully accessible after the fact for those who must establish what truly happened.',
        },
        {
          title: 'Facts, not explanations',
          content: 'What Evidence provides is neither an analysis, nor an explanation, nor a justification. It is factual material, intended to be examined by others: auditors, risk teams, legal experts, or regulatory authorities. All interpretation belongs to these entities, outside the system.',
        },
        {
          title: 'What Evidence does not promise',
          content: 'Evidence does not make decisions better. It does not prevent errors. It does not guarantee that rules were followed.\n\nIt guarantees something more fundamental: that certain facts exist, that they are dated, and that they cannot be denied a posteriori.',
        },
        {
          title: 'Why it exists',
          content: 'In a world where decisions are fast, distributed, and contestable, Evidence does not simplify reality. It makes it verifiable.',
        },
      ],
      knowledgeBridge: {
        title: 'From Knowledge to Evidence',
        p1: 'Organizations using Knowledge can submit critical decisions for cryptographic sealing in Evidence. The context, justification, and approval chain travel with the decision.',
        p2: 'But Evidence does not require Knowledge. Any declared fact — from any system, any process — can be sealed directly.',
      },
      perspectiveHeader: 'This perspective is about **Evidence**, Asplenz\'s proof infrastructure.',
      perspectiveHeaderCta: 'Looking for **Knowledge** (agent guardrails & decision governance)?',
      perspectiveHeaderCtaLabel: 'Go to Knowledge',
      pricing: {
        title: 'Pricing',
        headline: 'Seal critical decisions with confidence',
        intro: 'Evidence is designed for legally significant decisions and regulated environments. Deployments are tailored to your organization\'s risk profile, integration requirements, and verification needs.',
        enterprise: {
          title: 'Enterprise',
          price: 'Custom',
          description: 'Evidence is offered exclusively as an enterprise product. Pricing depends on:',
          factors: [
            'Deployment model (hosted or dedicated environment)',
            'Expected sealing volume',
            'Verification requirements',
            'Retention policy',
            'Integration complexity',
            'Support and SLA requirements',
          ],
        },
        included: {
          title: 'Included capabilities',
          items: [
            'Cryptographic sealing of decision artifacts',
            'Independently verifiable proof artifacts',
            'Long-term integrity guarantees',
            'Verification tooling',
            'Secure API access',
            'Role-based access control (RBAC)',
            'Audit support',
          ],
        },
        extensions: {
          title: 'Optional extensions',
          items: [
            'Dedicated infrastructure',
            'Custom retention policies',
            'Advanced compliance workflows',
            'Integration with internal governance systems',
            'Dedicated support and premium SLA',
          ],
        },
        engagement: {
          title: 'Typical engagement model',
          steps: [
            { label: 'Discovery call', description: 'Understand your regulatory and operational requirements.' },
            { label: 'Technical validation', description: 'Review the integration and verification model.' },
            { label: 'Deployment plan', description: 'Define environment, access model, and retention.' },
            { label: 'Go-live', description: 'Begin sealing legally significant decisions.' },
          ],
        },
        deployment: {
          title: 'Independent or integrated',
          intro: 'Evidence can be deployed:',
          options: [
            'As a standalone proof infrastructure.',
            'Alongside Asplenz Knowledge.',
            'Integrated with existing governance or compliance workflows.',
          ],
          note: 'There is no required dependency between products.',
        },
        whyCustom: {
          title: 'Why pricing is custom',
          description: 'Evidence addresses legally significant commitments. Deployment requirements vary depending on regulatory exposure, risk tolerance, jurisdiction, and internal governance models. For this reason, pricing is structured per organization.',
        },
        cta: 'Talk to sales',
      },
    },

    // Contact page
    contact: {
      title: 'Contact',
      channels: [
        { label: 'For product inquiries, enterprise discussions, or technical questions:', email: 'contact@asplenz.com' },
        { label: 'Security concerns or vulnerability disclosures:', email: 'security@asplenz.com' },
      ],
      responseTime: 'We aim to respond within two business days.',
      location: 'Asplenz — Paris, France',
    },

    // About page
    about: {
      title: 'About Asplenz',
      intro: 'Asplenz builds infrastructure for governing and proving organizational decisions.',
      body: [
        'As software systems become AI-assisted and increasingly autonomous, execution accelerates.',
        'Accountability does not.',
        'We focus on decision governance as a first-class infrastructure layer.',
      ],
      products: {
        title: 'What we build',
        intro: 'Asplenz develops two independent products:',
        items: [
          { name: 'Knowledge', description: 'A declarative system of record for operational decisions. Knowledge structures architectural decisions, rules, and invariants so that agents and systems can evaluate actions before they occur. It makes decision governance explicit and operational.' },
          { name: 'Evidence', description: 'A cryptographic proof infrastructure for legally significant commitments. Evidence seals critical decisions as immutable, independently verifiable artifacts. It makes accountability defensible.' },
        ],
      },
      perspective: {
        title: 'Our perspective',
        intro: 'Organizations increasingly rely on automated systems to act:',
        items: [
          'AI-generated code',
          'Autonomous workflows',
          'Policy-driven infrastructure',
          'Distributed decision-making',
        ],
        body: [
          'These systems increase speed and scale. They also increase exposure.',
          'Asplenz exists to ensure that governance scales with execution.',
        ],
      },
      company: {
        title: 'Company',
        description: 'Asplenz is an independent software company focused on infrastructure-grade governance systems. We work with engineering leaders, security teams, and compliance functions operating in environments where accountability matters.',
        cta: 'For enterprise inquiries:',
        email: 'contact@asplenz.com',
      },
    },

    // Why Asplenz page
    whyAsplenz: {
      title: 'Why Asplenz',
      intro: [
        'Modern organizations execute faster than ever.',
        'AI systems generate code.',
        'Automation deploys infrastructure.',
        'Policies are enforced programmatically.',
        'But decisions remain human responsibilities.',
        'When something goes wrong, the organization answers — not the model.',
      ],
      governance: {
        title: 'Governance is not documentation',
        body: [
          'Most organizations document decisions.',
          'Few operationalize them.',
        ],
        items: [
          'Architecture decisions live in documents.',
          'Security constraints live in policies.',
          'Exceptions live in chat threads.',
        ],
        closing: [
          'As systems accelerate, this fragmentation becomes a liability.',
          'Asplenz addresses this gap.',
        ],
      },
      layers: {
        title: 'Two governance layers',
        intro: [
          'Operational governance and legal accountability are different problems.',
          'They require different tools.',
        ],
        items: [
          { name: 'Knowledge', description: 'structures and evaluates operational decisions.' },
          { name: 'Evidence', description: 'seals legally significant commitments.' },
        ],
        closing: [
          'They are independent products.',
          'They share a philosophy:',
        ],
        philosophy: [
          'Decisions are assets.',
          'They must be structured, traceable, and, when necessary, provable.',
        ],
      },
      infrastructure: {
        title: 'Infrastructure, not consultancy',
        body: [
          'Asplenz does not provide advisory services.',
          'We build systems that organizations operate themselves.',
          'Governance must be systematic, not performative.',
        ],
      },
    },

    // Foundations (rewritten — covers both products)
    foundations: {
      problem: {
        title: 'The Problem',
        sections: [
          {
            title: 'Decisions live everywhere, and nowhere',
            content: `Today, organizational decisions live nowhere in particular. They appear in fragments — scattered across Slack, email, Confluence, Jira, meetings, and verbal agreements. The action itself is executed elsewhere still: in a terminal, a cloud console, an automated system, or increasingly, by an AI agent.\n\nOn the moment, this dispersion is not a problem. Teams understand each other, the decision flows, the organization moves forward.`,
          },
          {
            title: 'Two problems, not one',
            content: `The difficulty appears in two distinct moments.\n\n**The governance gap — before the action.**\nAI agents now make hundreds of implementation decisions per day. Which framework to use. Which dependency to add. Whether to follow the existing pattern or diverge. They act fast, but they act without organizational memory. The architecture decisions are in Confluence. The security constraints are in someone's head. The exceptions were discussed in Slack three months ago. The agent doesn't know any of this.\n\nThe result: code that works but violates unstated constraints. Dependencies that introduce legal risk. Patterns that contradict architecture choices nobody documented. Drift that compounds silently.\n\n**The proof gap — after the decision.**\nWhen something goes wrong — an incident, an audit, a regulatory inquiry — the organization must establish what was decided, by whom, and when. But the evidence is scattered. Messages in Slack, emails written after the fact, tickets modified multiple times, logs designed for diagnostics. Reconstruction replaces proof. And reconstruction, however rigorous, is never equivalent to proof.`,
          },
          {
            title: 'The common root',
            content: `Both problems share the same root: **decisions are not treated as first-class organizational assets.**\n\nThey are not structured. They are not versioned. They are not queryable. They are not traceable. They are not provable.\n\nThey exist as ephemeral conversations — and when the conversation ends, the decision becomes invisible.`,
          },
          {
            title: 'What this costs',
            content: `For engineering: agents that ignore constraints, architecture drift, repeated debates, incidents from invisible rules.\n\nFor compliance: audits that become investigations, individuals personally exposed, accountability that depends on narrative.\n\nFor the organization: decisions that cannot be governed before they happen, and cannot be proven after.`,
          },
        ],
      },
      shift: {
        title: 'The Shift',
        sections: [
          {
            title: 'The reflex to improve what exists',
            content: `Faced with ungoverned agents and fragile evidence, the natural reaction is to improve what already exists. Add more fields to Jira. Write longer \`.cursorrules\`. Keep logs longer. Ask teams to document more. The effort is sincere, often costly, and sometimes effective in the short term. Yet, the problem does not go away.`,
          },
          {
            title: 'Two missing categories, not one',
            content: `What is missing is not a better rule file or a longer retention policy. Two entire categories of infrastructure are missing:\n\n**A normative layer** — a system that structures decisions, rules, and constraints as queryable objects, so that agents and humans can consult them before acting. Not a wiki. Not a policy engine. A declared source of truth that agents can check in real-time.\n\n**A proof layer** — a system that captures the existence of a decisional fact at the precise moment it occurs, before any interpretation or reconstruction. Not a log. Not a ticket. An immutable, cryptographically sealed record.`,
          },
          {
            title: 'From implicit to explicit',
            content: `The first shift is about governance. Decisions must move from implicit (conversations, tribal knowledge, scattered documents) to explicit (structured entries, versioned, with context and reasoning, queryable by agents).\n\nThis is not about writing more documentation. It is about creating a normative state that agents can consult programmatically. When an agent can call \`check()\` before acting, governance becomes automatic.`,
          },
          {
            title: 'From reconstruction to anchoring',
            content: `The second shift is about proof. Evidence must move from reconstruction (gathering fragments after the fact) to anchoring (sealing the fact at the moment it occurs).\n\nThis is not about logging more. It is about recognizing that certain facts must be anchored before time, systems, and interpretations alter them. Evidence is not deduced. It is anchored, or it is lost.`,
          },
          {
            title: 'What these shifts make possible',
            content: `Once decisions are structured, agents act with context. Exceptions are governed. Usage is traceable. The organization has memory.\n\nOnce critical decisions are sealed, proof is immediate. Audits become verification exercises, not investigations. Accountability rests on facts, not narratives.\n\n**Knowledge makes the first shift possible.**\n**Evidence makes the second.**`,
          },
        ],
      },
    },

    // Perspectives
    perspectives: {
      auditRisk: {
        title: 'Audit & Risk Perspective',
        subtitle: 'For audit, risk, and internal control teams responsible for post-incident truth.',
        sections: [
          {
            title: 'The reality of your role',
            content: `You investigate events **after they happened**.\n\nEvidence reaches you late, extracted from systems you do not operate, already filtered, explained, or summarized by others. You depend on narratives, screenshots, exports, and assurances that data "has not been altered".\n\nYour challenge is not analysis. It is **establishing whether a fact can still be trusted at all**.`,
          },
          {
            title: 'Where Evidence fits',
            content: `Evidence provides an **independent infrastructure of proof**.\n\nIt does not assess compliance. It does not interpret responsibility. It does not validate decisions.\n\nIt records declared facts and seals them at the moment they are submitted, producing evidence that can be verified **without relying on the operational systems that generated it**.\n\nEvidence exists so that audit does not depend on trust in IT-controlled data.`,
          },
          {
            title: 'What Evidence provides to Audit & Risk',
            items: [
              'An append-only record of declared facts',
              'Independent timestamps assigned at sealing time',
              'Cryptographic integrity that makes later alteration detectable',
              'Exportable proof bundles verifiable outside Evidence',
            ],
            conclusion: 'Nothing more.',
          },
          {
            title: 'What Evidence does not do',
            items: [
              'Does not decide whether a process is compliant',
              'Does not replace audit methodology',
              'Does not qualify responsibility or intent',
              'Does not explain what should have happened',
            ],
            conclusion: 'Evidence produces facts. Audit produces conclusions.',
          },
          {
            title: 'After an incident, you can establish',
            intro: 'Using Evidence, you can verify:',
            items: [
              'Whether a declaration existed',
              'When it was sealed',
              'Who declared it',
              'Whether it was altered afterward',
            ],
            conclusion: 'You no longer need to reconstruct events from memory, tickets, or log excerpts. You verify integrity first, interpretation second.',
          },
          {
            title: 'Why this matters for Audit & Risk',
            content: `Audit credibility depends on independence.\n\nWhen evidence is produced and stored by the same systems that executed the actions, integrity can only be assumed. Evidence introduces a structural separation between **action** and **proof**.\n\nThis separation allows audit to operate on facts that are **immutable by design**, not by policy.`,
          },
          {
            title: 'What Evidence changes',
            before: ['Evidence is reconstructed', 'Integrity is assumed', 'Verification is indirect'],
            after: ['Facts are sealed at declaration time', 'Integrity is verifiable', 'Proof is autonomous'],
          },
        ],
        next: {
          title: 'View how facts are sealed',
          description: 'This example shows a real post-incident timeline composed of sealed facts, their timestamps, and their integrity hashes, exactly as an auditor would review them.',
        },
      },
      security: {
        title: 'Security Perspective',
        subtitle: 'For CISOs and security teams responsible for post-incident integrity.',
        sections: [
          {
            title: 'The reality of your role',
            content: `You operate in environments where compromise is assumed.\n\nAttackers escalate privileges. Logs are erased, altered, or selectively preserved. By the time the incident is contained, traces are already incomplete.\n\nYour challenge is not detection. It is establishing which facts still exist after the systems have been touched.`,
          },
          {
            title: 'Where Evidence fits',
            content: `Evidence provides a passive, external layer of proof.\n\nIt does not detect attacks. It does not block actions. It does not secure infrastructure. It records declared facts outside the execution path and seals them in a way that makes later modification detectable, even if the originating systems are fully compromised.\n\nEvidence exists to preserve post-incident integrity, not to prevent incidents.`,
          },
          {
            title: 'What Evidence provides to Security',
            items: [
              'A passive channel to declare security-relevant facts',
              'Evidence sealed independently from security tooling',
              'Append-only integrity that survives administrative access',
              'Proof that remains verifiable after system compromise',
            ],
            conclusion: 'Nothing more.',
          },
          {
            title: 'What Evidence does not do',
            items: [
              'Does not prevent or detect attacks',
              'Does not replace SIEM, EDR, or logging platforms',
              'Does not harden infrastructure',
              'Does not qualify intent or responsibility',
            ],
            conclusion: 'Evidence is not part of the defensive stack. It is the witness that remains when defenses fail.',
          },
          {
            title: 'After an incident, you can establish',
            intro: 'Using Evidence, you can verify:',
            items: [
              'Which facts were declared before, during, or after the incident',
              'When those facts were sealed',
              'Whether any trace was altered afterward',
            ],
            conclusion: 'You no longer depend solely on logs that may have been cleaned or reconstructed.',
          },
          {
            title: 'Why this matters for Security',
            content: `Security tools operate inside the system they protect. When that system is compromised, their output becomes suspect.\n\nEvidence introduces an external point of truth. It does not claim immunity. It provides detectability of tampering, which is the only property that survives total compromise.\n\nThis shifts post-incident discussions from "what do we believe?" to "what can we verify?".`,
          },
          {
            title: 'What Evidence changes',
            before: ['Traces are mutable', 'Integrity is assumed', 'Forensics depends on trust'],
            after: ['Facts are sealed externally', 'Integrity is verifiable', 'Forensics starts from proof, not belief'],
          },
        ],
        next: {
          title: 'View how facts are sealed',
          description: 'This example shows a post-incident timeline composed of sealed facts, their timestamps, and their integrity hashes, exactly as reviewed during security forensics.',
        },
      },
      engineering: {
        title: 'Engineering Perspective',
        subtitle: 'For CTOs, system architects, and engineering leaders responsible for reliable systems and governed agent workflows.',
        sections: [
          {
            title: 'The reality of your role',
            content: `Your teams ship fast. Your agents ship faster.\n\nAI coding agents generate PRs, refactor services, add dependencies, configure infrastructure. They follow instructions — but not necessarily yours. Your architecture decisions live in Confluence pages nobody reads. Your security constraints are implicit. Your exceptions are invisible.\n\nYou don't have an execution problem. You have a governance problem.`,
          },
          {
            title: 'Where Knowledge fits',
            content: `Knowledge provides a structured, queryable source of truth for your technical decisions.\n\nIt doesn't replace your tools. It doesn't block your agents. It gives them a system to consult before acting — and gives you a system to verify what they did.`,
          },
          {
            title: 'What Knowledge provides to Engineering',
            items: [
              'Architecture decisions — structured, versioned, with reasoning',
              'Security invariants — explicit, checkable by agents and CI',
              'Active rules — configurable directives that agents follow',
              'Governed overrides — exceptions that are approved, time-limited, traceable',
              'Human approvals — for critical actions that need a checkpoint',
              'Usage references — which rules were followed, diverged, by whom',
              'Real-time propagation — agents learn about rule changes immediately',
            ],
            conclusion: '',
          },
          {
            title: 'What Knowledge does not do',
            items: [
              'Does not block deployments (unless your CI calls `check()` and acts on it)',
              'Does not replace code review',
              'Does not make decisions for you',
              'Does not generate code',
            ],
            conclusion: '',
          },
          {
            title: 'After a PR, you can establish',
            intro: 'Using Knowledge, you can verify:',
            items: [
              'Which architecture decisions the agent consulted',
              'Which invariants were verified',
              'Which rules were followed or diverged (and why)',
              'Whether an approval was requested and by whom it was granted',
              'The complete Implementation Report with `knowledge://` references',
            ],
            conclusion: 'Without asking the agent. Without reading Slack history. Without guessing.',
          },
          {
            title: 'When proof matters',
            content: `Some engineering decisions carry legal weight: production go-live, security exceptions, compliance overrides.\n\nFor those, Asplenz offers **Evidence** — a cryptographic proof layer that seals decisions as immutable, independently verifiable facts. Evidence is separate from Knowledge. It exists for when accountability is questioned, not just governance.`,
          },
          {
            title: 'What Knowledge changes',
            before: ['Decisions are scattered across Confluence, Slack, and heads', 'Agents code without context', 'Exceptions are invisible', 'Reviews lack reasoning'],
            after: ['Decisions are structured, versioned, and queryable', 'Agents check rules before generating code', 'Exceptions are governed and approved', 'Reviews include Implementation Reports with full traceability'],
          },
        ],
        next: {
          title: 'Start free',
          description: 'Install the MCP server, create your first scope, and record your first decision.',
        },
      },
      legal: {
        title: 'Legal Perspective',
        subtitle: 'For legal, general counsel, and legal operations teams responsible for factual clarity.',
        sections: [
          {
            title: 'The reality of your role',
            content: `You operate where interpretation begins after the facts.\n\nDisputes arise when narratives diverge. Evidence is challenged because its origin, integrity, or timing is uncertain. What should be factual becomes debatable.\n\nYour challenge is not argumentation. It is establishing whether a fact can be relied upon before it is interpreted.`,
          },
          {
            title: 'Where Evidence fits',
            content: `Evidence provides a neutral infrastructure for factual records.\n\nIt does not assess legality. It does not qualify responsibility. It does not issue judgments or conclusions. It records declared facts and seals their existence at a specific point in time, producing evidence whose integrity can be verified independently of the systems and people involved.\n\nEvidence exists to separate fact from interpretation.`,
          },
          {
            title: 'What Evidence provides to Legal',
            items: [
              'Neutral, non-qualifying factual records',
              'Independent timestamps assigned at sealing time',
              'Detectable integrity for declared facts',
              'Evidence that can be verified without testimony or system trust',
            ],
            conclusion: 'Nothing more.',
          },
          {
            title: 'What Evidence does not do',
            items: [
              'Does not determine legal compliance',
              'Does not assess liability or fault',
              'Does not replace legal analysis',
              'Does not assert evidentiary weight',
            ],
            conclusion: 'Evidence records facts. Legal interpretation remains entirely human and contextual.',
          },
          {
            title: 'After an incident or dispute, you can establish',
            intro: 'Using Evidence, you can verify:',
            items: [
              'That a declaration existed',
              'When it was sealed',
              'Who declared it',
              'Whether it was altered afterward',
            ],
            conclusion: 'Without relying solely on recollection, internal attestations, or reconstructed timelines.',
          },
          {
            title: 'Why this matters for Legal',
            content: `Legal reasoning depends on stable premises. When the integrity of facts is disputed, the discussion shifts from substance to credibility.\n\nEvidence provides a factual baseline that precedes interpretation and survives organizational or technical change. This allows legal teams to argue from verified facts, not reconstructed narratives.`,
          },
          {
            title: 'What Evidence changes',
            before: ['Facts are debated', 'Integrity is asserted', 'Narratives dominate'],
            after: ['Facts are sealed', 'Integrity is verifiable', 'Interpretation starts from stable ground'],
          },
        ],
        next: {
          title: 'View how facts are sealed',
          description: 'This example shows a sealed factual timeline, its timestamps, and integrity markers, exactly as reviewed during legal analysis.',
        },
      },
      aiGovernance: {
        title: 'AI & Data Governance Perspective',
        subtitle: 'For teams responsible for long-term traceability of automated systems.',
        sections: [
          {
            title: 'The reality of your role',
            content: `You govern systems that evolve by design.\n\nModels are retrained. Inputs are replaced. Outputs are overwritten or aggregated. Decision paths disappear as systems optimize themselves.\n\nYour challenge is not performance. It is preserving stable factual reference points in systems built to change.`,
          },
          {
            title: 'Where Evidence fits',
            content: `Evidence provides a neutral infrastructure for sealing declared facts.\n\nIt does not evaluate models. It does not explain decisions. It does not enforce governance rules. It records declared inputs, outputs, or observations at a specific moment in time and seals them independently from learning systems.\n\nEvidence exists to ensure that facts do not drift as systems evolve.`,
          },
          {
            title: 'What Evidence provides to AI & Data Governance',
            items: [
              'Sealed records of declared inputs or outputs',
              'Independent timestamps at declaration time',
              'Append-only integrity outside training pipelines',
              'Evidence that remains verifiable after model updates',
            ],
            conclusion: 'Nothing more.',
          },
          {
            title: 'What Evidence does not do',
            items: [
              'Does not explain model behavior',
              'Does not ensure fairness or bias mitigation',
              'Does not enforce regulatory compliance',
              'Does not monitor performance or drift',
            ],
            conclusion: 'Evidence does not govern AI. It preserves facts around it.',
          },
          {
            title: 'After an incident or review, you can establish',
            intro: 'Using Evidence, you can verify:',
            items: [
              'What data or output was declared',
              'When it was sealed',
              'Whether it was altered afterward',
            ],
            conclusion: 'Even if models, datasets, or pipelines have since changed.',
          },
          {
            title: 'Why this matters for AI & Data Governance',
            content: `AI systems rewrite their own past. Logs are pruned. Training data is replaced. Outputs are no longer reproducible.\n\nEvidence introduces fixed reference points that remain stable while systems evolve. This allows governance and oversight to operate on facts, not on reconstructed or simulated histories.`,
          },
          {
            title: 'What Evidence changes',
            before: ['AI traces drift', 'Historical outputs are lost', 'Governance relies on approximations'],
            after: ['Facts are sealed', 'Integrity is verifiable', 'Oversight starts from stable records'],
          },
        ],
        next: {
          title: 'View how facts are sealed',
          description: 'This example shows how declared AI-related facts are sealed, timestamped, and appended to an immutable chain, independent of model lifecycle.',
        },
      },
    },

    // Docs
    docs: {
      firstSeal: {
        title: 'First Seal',
        subtitle: 'Seal a Fact in 5 Minutes',
        audience: 'CTO · Staff Engineer · SRE',
        intro: 'This page shows how to seal a fact technically. It does not explain how to interpret its meaning.',
        sections: [
          {
            title: 'One Endpoint',
            code: 'POST /streams/{stream_id}/facts\nContent-Type: application/json',
            content: 'A stream is identified by stream_id, provided by the client in the URL. If no stream with that ID exists, Evidence creates it implicitly when the first fact is sealed.\n\nThe only identifier you manage is stream_id; Evidence does not impose any business semantics on it.',
          },
          {
            title: 'One Request',
            code: `{
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "custom_payload": {
    "action": "stop_service",
    "context": "Memory leak confirmed"
  }
}`,
            content: 'In production deployments, tenant_id is typically derived from authentication context rather than provided in the payload.\n\nYour payload is opaque to Evidence. It is recorded exactly as provided.',
          },
          {
            title: 'One Response',
            code: `{
  "fact_id": "fact-01HRX7G2NB",
  "stream_id": "stream-034",
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "sealed_at_ms": 1706284801000,
  "custom_payload": {
    "action": "stop_service",
    "context": "Memory leak confirmed"
  },
  "fact_hash": "a1b2c3d4e5f6...",
  "prev_hash": "9f8e7d6c5b4a...",
  "parent_fact_id": "fact-01HRX7F1MA"
}`,
            content: 'Fields such as fact_hash and prev_hash are used for integrity and verification, not business logic.',
          },
          {
            title: 'What Happened',
            items: [
              'Evidence assigned sealed_at_ms (authoritative timestamp)',
              'Evidence computed fact_hash from a deterministic representation of the fact',
              'Evidence chained to previous fact via prev_hash',
              'Evidence stored the fact (append-only)',
            ],
            content: 'Evidence did not interpret custom_payload. That\'s your data.',
            link: { text: 'See Verification', href: '/docs/verification' },
          },
          {
            title: 'Idempotency',
            code: `{
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "client_ref": "incident-2024-01-26-stop-001",
  "custom_payload": { ... }
}`,
            content: 'Add client_ref to make the request idempotent:\n\nSame client_ref → same fact returned. No duplicate sealing.\n\nIdempotency does not alter the proof. It prevents duplication only.',
          },
        ],
        storageGuarantees: {
          title: 'Storage Guarantees',
          items: [
            { property: 'Append-only', guarantee: 'Facts cannot be modified or deleted' },
            { property: 'Hash chain', guarantee: 'Each fact links to previous via prev_hash' },
            { property: 'Tamper detection', guarantee: 'Recompute hashes to detect modification' },
            { property: 'Tenant isolation', guarantee: 'Facts scoped by tenant_id' },
            { property: 'Proof authority', guarantee: 'sealed_at_ms assigned by Evidence' },
          ],
          note: 'These properties hold even if the client system is compromised, because any modification is detectable.',
        },
        whatNotDo: {
          title: 'What Evidence Does Not Do',
          items: [
            { label: 'No interpretation', description: 'custom_payload is opaque' },
            { label: 'No workflow', description: 'No states, no transitions, no approvals' },
            { label: 'No validation', description: 'Your payload, your schema' },
            { label: 'No business logic', description: 'Seal facts, nothing else' },
          ],
          link: { text: 'For the semantic boundary of what a sealed fact proves and does not prove, see Proof Semantics', href: '/docs/proof-semantic' },
        },
        verifyChain: {
          title: 'Verify Chain Integrity',
          code: 'POST /streams/{stream_id}/verify',
          content: 'Returns { "valid": true } if hash chain is intact.\n\nVerification recomputes hashes and signatures. It does not interpret facts or assert correctness.\n\nVerification results only attest that the recorded sequence hasn\'t been tampered with.',
        },
      },
      proofSemantic: {
        title: 'Proof Semantics',
        subtitle: 'What a Sealed Fact Proves, and What It Doesn\'t',
        status: 'Canonical · Public · Reference',
        appliesTo: 'All Evidence deployments',
        sections: [
          {
            number: '1',
            title: 'Purpose of This Document',
            content: `This document defines the semantic scope and limits of Evidence evidence. It exists to:\n\n• clarify what a sealed fact establishes as evidence,\n• explicitly delimit what Evidence does not assert,\n• prevent misinterpretation or requalification of Evidence evidence.\n\nEvidence evidence is factual, declarative, and non-interpretive. This document is a semantic responsibility boundary between:\n\n• **Evidence** (integrity of evidence),\n• and **Evidence clients** (truth, legitimacy, interpretation).`,
          },
          {
            number: '2',
            title: 'Core Semantic Principle',
            content: `A Evidence proof establishes the existence of a declaration: nothing more. It proves that:\n\n• a declaration was received,\n• it was sealed at a precise time,\n• it was attributed as declared,\n• it belongs to a stream of related facts.\n\nIt does not prove intent, legitimacy, correctness, causality, or outcome.`,
          },
          {
            number: '3',
            title: 'What a Sealed Fact Proves',
            content: `A sealed fact proves, and only proves, that:\n\n• a piece of information was declared,\n• by the actor identified in the fact,\n• and sealed by Evidence at sealed_at,\n• without alteration after sealing.\n\nThis proof is:\n\n• append-only,\n• tamper-evident,\n• independently verifiable.`,
          },
          {
            number: '4',
            title: 'What a Sealed Fact Does NOT Prove',
            content: `A sealed fact does not prove:\n\n• that the declaration is true,\n• that the declaration reflects intent,\n• that the declaration was authorized,\n• that an action occurred at the declared time,\n• that an action occurred at all,\n• that one fact caused another,\n• that responsibility or fault exists,\n• that any policy, rule, or obligation was satisfied.\n\nEvidence does not infer, compute, or assess meaning.`,
          },
          {
            number: '5',
            title: 'Time Semantics',
            content: `Evidence assigns a single authoritative time: **sealed_at**.\n\nsealed_at represents:\n\n• the moment Evidence sealed the declaration,\n• the moment from which the fact becomes provable.\n\nEvidence does not assert:\n\n• when an action actually occurred,\n• when an observation was made,\n• whether client clocks were synchronized.\n\nAny client-provided timestamps belong to the payload, are not authoritative, and are not validated or reconciled by Evidence.`,
          },
          {
            number: '6',
            title: 'Actor Attribution Semantics',
            content: `The actor field represents **declared attribution**. Evidence:\n\n• records attribution as provided through a technical channel (API, email, system integration),\n• proves the provenance of the declaration via that channel.\n\nEvidence does not prove:\n\n• the biological identity of a human,\n• the legitimacy of the actor,\n• the authority or role associated with the declaration.\n\nResponsibility for the truth, legitimacy, and authority of a declaration remains with the declaring party.`,
          },
          {
            number: '7',
            title: 'Stream Semantics',
            content: `A stream is a container of related facts. Evidence:\n\n• does not define workflow steps,\n• does not enforce order beyond sealing time,\n• does not define completion or closure,\n• does not infer process state.\n\nStreams are never closed by Evidence. New facts may be appended at any time. Any notion of "process", "decision", or "outcome" is external to Evidence.`,
          },
          {
            number: '8',
            title: 'Fact Correlation and Causality',
            content: `Relationships between facts within a stream (such as parent references or shared identifiers) are provided by client systems. Evidence:\n\n• does not infer causality,\n• does not compute dependency,\n• does not assert procedural sequence.\n\nAny perceived sequence, dependency, or workflow is an interpretation external to Evidence and must not be attributed to Evidence itself.`,
          },
          {
            number: '9',
            title: 'Incomplete Streams and Silence',
            content: `Evidence does not interpret the absence of facts. If no additional fact is appended after a declaration:\n\n• Evidence does not infer failure,\n• does not infer success,\n• does not infer abandonment,\n• does not infer intent or negligence.\n\nSilence, delay, or incompleteness are not evidence within Evidence. Interpretation of incomplete streams depends entirely on external context.`,
          },
          {
            number: '10',
            title: 'Interpretation Boundary',
            content: `All interpretation happens outside Evidence. Evidence evidence may be used by humans, organizations, auditors, courts, or regulators.\n\nEvidence itself:\n\n• does not interpret,\n• does not recommend,\n• does not conclude.`,
          },
          {
            number: '11',
            title: 'Legal and Regulatory Positioning',
            content: `Evidence evidence is technical, factual, and neutral. It does not constitute:\n\n• a decision,\n• an authorization,\n• a sanction,\n• a policy evaluation,\n• a compliance assertion.\n\nEvidence is a **witness**, not a judge.`,
          },
          {
            number: '12',
            title: 'Canonical Summary',
            content: `Evidence produces evidence of declaration, not evidence of correctness or legitimacy. This principle governs all Evidence proofs.`,
          },
          {
            number: '13',
            title: 'What This Document Explicitly Prevents',
            content: `• Misuse of Evidence as an approval system\n• Requalification as governance or compliance tooling\n• Attribution of responsibility to Evidence\n• Over-interpretation during audits or investigations\n\n> **Final Note:** If a reader concludes that Evidence decided, validated, authorized, or judged anything, then Evidence has been misinterpreted.`,
          },
        ],
      },
      understandingProof: {
        title: 'Understanding Evidence Proofs',
        subtitle: 'How Evidence evidence is produced and how it can be read',
        status: 'Informative · Public',
        intro: 'This document complements Proof Semantics. It does not redefine what a Evidence proof means. It explains how Evidence produces evidence and how that evidence can be examined.',
        sections: [
          {
            title: 'Sealing – How Evidence seals facts',
            content: `A fact in Evidence is simply something declared by an identified actor, at a given moment. When a fact is declared (during a crisis, an exception, or normal operations), Evidence treats this declaration as a technical event to be sealed.\n\nThe sealing process follows a fixed sequence. First, the declaration is received from a technical channel (API, email, or system integration). Evidence does not inspect, validate, or interpret its content.\n\nEvidence then assigns a single authoritative timestamp, called sealed_at. This timestamp represents the moment the declaration was sealed by Evidence. It is the only time reference asserted by the system.\n\nThe declared content is stored as fully opaque data. Evidence does not impose a schema, enforce structure, or extract meaning from the payload.\n\nThe fact is then cryptographically hashed and signed. Its integrity becomes tamper-evident.\n\nFinally, the fact is appended to an immutable chain, linked to the previous fact within the same stream. This append-only construction ensures that facts cannot be altered or removed without detection.\n\nFacts are appended to a Facts Stream. A stream has no business state. It has no opening or closing. It does not represent a workflow, a decision lifecycle, or a process state.\n\nAt any point in time, additional facts may be declared and appended to the same stream. Evidence records that a relationship was declared and seals it, without interpreting its meaning.\n\nThroughout this process, Evidence does not decide what the fact means. It does not assess correctness, legitimacy, causality, or outcome. All interpretation remains external to Evidence.`,
          },
          {
            title: 'Reading a proof – Timeline example',
            intro: 'This section illustrates how Evidence evidence can be examined once facts have been sealed. The example below shows a post-incident timeline, ordered by sealing time (sealed_at).',
            timeline: [
              { time: '08:30:00', actor: 'monitoring@', payload: 'metric=memory_usage, threshold=95%', hash: 'a1b2c3...d4e5f6' },
              { time: '08:32:00', actor: 'ops-lead@', payload: 'action=stop_service, target=payment-gateway-eu-west-1', hash: 'b2c3d4...e5f6a7' },
              { time: '08:33:00', actor: 'cto@', payload: 'message=Proceed with controlled shutdown.', hash: 'c3d4e5...f6a7b8' },
              { time: '08:35:02', actor: 'ops-lead@', payload: 'method=kubectl_drain, result=service_stopped', hash: 'd4e5f6...a7b8c9' },
              { time: '08:40:00', actor: 'monitoring@', payload: 'observation=service_stopped, error_rate=0%', hash: 'e5f6a7...b8c9d0' },
            ],
            bundleInfo: 'Proof Bundle · 5 facts · Signed',
            note: 'This example illustrates one way to examine sealed facts; it does not imply any interpretation beyond what is defined in Proof Semantics.',
            shows: [
              'that certain declarations existed',
              'who declared them (as attributed)',
              'when Evidence sealed them',
              'that they belong to the same stream',
            ],
            doesNotShow: [
              'whether the declarations are true',
              'whether they were authorized',
              'whether actions occurred as described',
              'whether one fact caused another',
              'whether a decision was correct or legitimate',
            ],
            conclusion: 'The timeline does not explain events. It does not reconstruct intent. It does not assign responsibility. It simply exposes sealed facts, in a verifiable order.\n\nEvidence shows what was declared. You draw the conclusions. Any conclusion (operational, legal, or ethical) must be derived outside Evidence, using external context, rules, and judgment.',
          },
          {
            title: 'Relationship to Proof Semantics',
            content: 'This document does not alter the meaning of Evidence evidence. The semantic scope and limits of Evidence proofs are defined exclusively in Proof Semantics. If a reader interprets a timeline, a stream, or a proof bundle as asserting intent, correctness, authorization, or responsibility, that interpretation is external to Evidence and not supported by the evidence itself.',
            link: { text: 'See Proof Semantics', href: '/docs/proof-semantic' },
          },
          {
            title: 'Summary',
            content: 'Evidence produces evidence by sealing declared facts. It exposes those facts in a structured, verifiable form. Understanding how Evidence seals and presents facts helps readers examine evidence correctly: without attributing meaning that Evidence does not provide.',
          },
        ],
      },
      verification: {
        title: 'Verification Guide',
        subtitle: 'Verifying a Evidence Proof Bundle',
        status: 'Canonical · Public · Reference',
        audience: 'Auditors · External reviewers · Security teams · Legal experts',
        appliesTo: 'All Evidence deployments',
        sections: [
          {
            number: '1',
            title: 'Purpose of This Document',
            content: `This document explains how Evidence evidence can be verified and what such verification guarantees. It defines:\n\n• what a Evidence proof bundle contains,\n• what is cryptographically verifiable,\n• how tampering is detected,\n• and the limits of verification.\n\nThis guide does not explain how Evidence is implemented internally. It explains what can be independently checked.`,
          },
          {
            number: '2',
            title: 'What Is a Evidence Proof Bundle',
            content: `A proof bundle is a verifiable artifact produced by Evidence that packages:\n\n• a set of sealed facts,\n• their cryptographic hashes,\n• their chaining information,\n• and a Evidence signature.\n\nA bundle represents the state of a stream at a given point in time. Bundles are immutable once issued.`,
          },
          {
            number: '3',
            title: 'Contents of a Proof Bundle',
            content: `A Evidence proof bundle includes, at minimum:\n\n• bundle_id\n• bundle_version\n• a list or manifest of facts\n• the head_hash of the stream at bundle time\n• a cryptographic signature\n• a reference to the signing key (key_id or equivalent)\n\nOptionally, a bundle may reference:\n\n• attachments manifests,\n• external evidence objects.`,
          },
          {
            number: '4',
            title: 'What Verification Checks',
            content: `Verification of a Evidence proof bundle consists of four independent checks.\n\n**4.1 Signature Verification**\nThe bundle signature is verified using the public key corresponding to the declared signing key. This establishes that the bundle was produced by Evidence and the bundle content has not been altered since signing.\n\n**4.2 Fact Hash Verification**\nFor each fact in the bundle, the fact payload is hashed and the computed hash is compared to the stored fact_hash. This establishes that each fact has not been modified after sealing.\n\n**4.3 Hash Chain Verification**\nFacts are linked using a hash chain (prev_hash → fact_hash). Verification recomputes the chain and confirms that each fact correctly references the previous one and the final computed hash matches the bundle head_hash. This establishes append-only ordering and tamper evidence across the entire stream segment.\n\n**4.4 Bundle Consistency Verification**\nThe verifier checks that the bundle references the correct stream, the set of facts is complete up to head_hash, and no fact is missing, reordered, or duplicated.`,
          },
          {
            number: '5',
            title: 'What Verification Proves',
            content: `Successful verification proves that:\n\n• the bundle was produced by Evidence,\n• the included facts were sealed by Evidence,\n• the facts have not been altered since sealing,\n• the ordering of facts is append-only and intact.\n\nVerification establishes integrity and authenticity of the evidence.`,
          },
          {
            number: '6',
            title: 'What Verification Does NOT Prove',
            content: `Verification does not prove:\n\n• that the declared facts are true,\n• that the declared actors are legitimate,\n• that actions occurred as described,\n• that timestamps reflect real-world occurrence,\n• that the stream is complete,\n• that no other facts exist outside the bundle.\n\nVerification validates evidence integrity, not evidence meaning.`,
          },
          {
            number: '7',
            title: 'Verification Scope and Independence',
            content: `Verification can be performed:\n\n• by Evidence systems,\n• by client systems,\n• by third-party auditors,\n• by regulators or courts.\n\nNo access to Evidence internal systems is required, provided that the proof bundle and the corresponding public verification material are available.`,
          },
          {
            number: '8',
            title: 'Handling of Incomplete or Partial Bundles',
            content: `A proof bundle reflects the stream up to a specific point in time. The absence of later facts:\n\n• does not indicate failure,\n• does not indicate success,\n• does not indicate abandonment.\n\nVerification does not infer completeness.`,
          },
          {
            number: '9',
            title: 'Key Management and Trust Assumptions',
            content: `Verification assumes:\n\n• the authenticity of the Evidence public signing key,\n• correct key distribution or trust anchoring.\n\nVerification does not:\n\n• assess key governance,\n• assess Evidence operational security,\n• assess client security posture.`,
          },
          {
            number: '10',
            title: 'Legal Interpretation Boundary',
            content: `Verification establishes technical integrity, not legal qualification. A verified bundle:\n\n• is not a decision,\n• is not an authorization,\n• is not a compliance assertion,\n• is not a determination of responsibility.\n\nInterpretation remains the responsibility of organizations, auditors, courts, or regulators.`,
          },
          {
            number: '11',
            title: 'Canonical Summary',
            content: `Verification confirms that Evidence evidence is intact and authentic. It does not confirm what the evidence means.`,
          },
          {
            number: '12',
            title: 'Status and Stability',
            content: `This document defines the stable verification semantics of Evidence. Any future evolution of Evidence must remain consistent with the guarantees described here.`,
          },
        ],
      },
    },

    common: {
      backToHome: 'Back to home',
      next: 'Next',
      viewPerspectives: 'View perspectives',
    },
  },

  // ============ FRENCH VERSION ============
  fr: {
    brand: 'ASPLENZ',
    brandFull: 'ASPLENZ',
    langSwitch: 'EN',
    nav: {
      knowledge: 'Knowledge',
      evidence: 'Evidence',
      platform: 'Plateforme',
      foundations: 'Fondations',
      contact: 'Contact',
      features: 'Fonctionnalités',
      docs: 'Docs',
      pricing: 'Tarifs',
      overview: 'Aperçu',
      perspectives: 'Perspectives',
      theProblem: 'Le Problème',
      theShift: 'Le Déplacement',
      company: 'Entreprise',
      about: 'À propos',
      whyAsplenz: 'Pourquoi Asplenz',
    },

    // Homepage - Landing page
    index: {
      hero: {
        headline: 'Gouvernez l\'ingénierie pilotée par l\'IA avant qu\'elle ne devienne un risque.',
        sub1: 'Les agents IA génèrent du code.',
        sub2: 'Votre organisation en assume toujours les conséquences.',
        description: '**Asplenz Knowledge** offre à vos agents une couche de décision structurée - pour qu\'ils cessent d\'improviser.',
        ctaPrimary: 'Démarrer avec Knowledge',
        ctaPrimaryHref: '/knowledge',
        ctaSecondary: 'Voir les tarifs',
        ctaSecondaryHref: '/knowledge/pricing',
      },
      shift: {
        title: 'La vélocité de l\'IA a changé. Pas la gouvernance.',
        intro: 'Le développement assisté par l\'IA devient la norme pour de nombreuses équipes.',
        agentsNow: 'Désormais, les agents :',
        agentsDo: [
          'introduisent des dépendances',
          'modifient les API',
          'refactorisent l\'architecture',
          'déploient l\'infrastructure',
        ],
        butDontKnow: 'Mais ils ignorent :',
        dontKnow: [
          'vos décisions d\'architecture',
          'vos invariants de sécurité non négociables',
          'quelles exceptions ont été approuvées',
          'ce qui ne doit jamais changer',
        ],
        conclusion: 'Sans une couche de décision déclarée, les agents improvisent.',
      },
      knowledge: {
        title: 'Asplenz Knowledge',
        subtitle: 'Gouvernance opérationnelle des décisions pour les systèmes d\'IA',
        intro: 'Knowledge est un système d\'enregistrement déclaratif pour vos :',
        entities: [
          { name: 'Invariants', description: 'contraintes qui ne doivent jamais être transgressées' },
          { name: 'Règles', description: 'directives qui guident l\'implémentation' },
          { name: 'Décisions', description: 'choix architecturaux documentés' },
          { name: 'Dérogations (Overrides)', description: 'exceptions gouvernées et limitées dans le temps' },
        ],
        after1: 'Les agents interrogent cet état normatif avant d\'agir.',
        after2: 'Knowledge ne bloque pas l\'exécution ; il expose l\'état décisionnel applicable. Votre écosystème décide.',
        note: 'Natif MCP (compatible Model Context Protocol). Conçu pour les environnements de codage IA modernes et les pipelines CI.',
        cta: 'Explorer Knowledge',
        ctaHref: '/knowledge',
      },
      verifier: {
        title: 'De la déclaration à l\'application',
        subtitle: 'Knowledge Verifier (Add-on Premium)',
        intro: 'Déclarer des règles ne suffit pas.',
        description: 'Knowledge Verifier analyse chaque Pull Request par rapport à votre état normatif déclaré.',
        capabilitiesTitle: 'Ses capacités :',
        capabilities: [
          'Résolution du périmètre applicable',
          'Détection des violations d\'invariants et de règles',
          'Validation de l\'utilisation des dérogations',
          'Vérification des citations des rapports d\'implémentation',
          'Production d\'un verdict prêt pour la CI (pass | warn | fail)',
          'Génération d\'un rapport de conformité lisible par l\'humain',
        ],
        modeTitle: 'Choisissez votre mode :',
        modes: [
          'Rapport uniquement',
          'Échec sur violations bloquantes',
          'Strict (citations obligatoires)',
        ],
      },
      whatChanges: {
        title: 'À quoi ressemble la gouvernance opérationnelle',
        instead: 'Au lieu de :',
        insteadQuote: '« Nous pensons que cette modification est correcte. »',
        youGet: 'Vous obtenez :',
        pr: {
          title: 'PR #847 - payment-service',
          items: [
            'Invariants vérifiés : 3',
            'Règles (obligatoires) : 2',
            'Violations : 0',
            'Dérogations utilisées : ovr-d4e5 (expire le 01-03-2025)',
            'Citations validées : oui',
          ],
          verdict: 'Verdict : PASS',
          verdictDetail: 'Aucune violation bloquante détectée.',
        },
        after1: 'Chaque fusion est explicitement évaluée face aux contraintes déclarées.',
        after2: 'Plus de savoir tribal. Plus d\'hypothèses invisibles.',
      },
      who: {
        title: 'À qui cela s\'adresse',
        items: [
          'Équipes d\'ingénierie utilisant des outils de codage IA',
          'Organisations introduisant des agents autonomes',
          'Équipes Plateforme & Sécurité définissant des invariants',
          'CTO souhaitant de la vélocité sans dérive architecturale',
        ],
      },
      evidenceNote: {
        title: 'Note sur Evidence',
        p1: 'Asplenz développe également **Evidence** - un produit indépendant pour sceller les décisions critiques et générer des preuves cryptographiquement vérifiables.',
        p2: 'Evidence répond à une couche différente de la gouvernance : la preuve immuable pour les engagements critiques.',
        cta: 'Explorer Evidence',
        ctaHref: '/evidence',
      },
      ctas: {
        title: 'Gouvernez vos décisions à la vitesse de l\'IA',
        primary: 'Démarrer avec Knowledge',
        primaryHref: '/knowledge',
        secondary: 'Voir les tarifs',
        secondaryHref: '/knowledge/pricing',
        tertiary: 'Nous contacter',
        tertiaryHref: '/contact',
      },
      closing: {
        line1: 'Les agents agissent.',
        line2: 'Les organisations restent responsables.',
        line3: '**Asplenz Knowledge** rend cela viable.',
      },
      pricing: {
        title: 'Tarifs',
        tiers: [
          { name: 'Gratuit (Free)', price: '', cta: 'Démarrer gratuitement', features: ['1 périmètre (scope)', '100 entrées', 'Accès MCP + API'] },
          { name: 'Team', price: '299 €/mois', cta: 'Choisir Team', features: ['3 périmètres', 'Entrées illimitées', 'Dérogations (overrides) avec approbation requise', 'Distribution d\'événements via webhook'] },
          { name: 'Business', price: '799 €/mois', cta: 'Choisir Business', features: ['10 périmètres', 'Entrées illimitées', 'Tableau de bord de gouvernance (Dérogations + Couverture)', 'Visibilité multi-périmètres (cross-scope)', 'Alertes d\'expiration', 'Distribution complète d\'événements', 'Knowledge Verifier (mode rapport uniquement inclus)'] },
          { name: 'Enterprise', price: 'Sur mesure', cta: 'Contacter le service commercial', features: ['Périmètres illimités', 'Analytique de gouvernance avancée', 'Politiques d\'application multi-périmètres', 'Pont vers Evidence (Evidence bridge)', 'SSO et journaux d\'audit', 'Contrôles Verifier avancés', 'Support dédié'] },
        ],
        verifierAddon: {
          title: 'Add-on : Knowledge Verifier (Premium Gating)',
          description: 'Transformez la déclaration en application automatisée dans vos pipelines CI/CD.',
          features: [
            'Échec sur blocage (Fail-on-blocking) : Bloquez automatiquement les PR présentant des violations critiques.',
            'Mode strict : Rendez obligatoires les citations de décisions.',
            'Politiques CI multi-périmètres : Standardisez l\'application des règles à l\'échelle de l\'organisation.',
          ],
          note: 'Disponible en option payante pour les forfaits Business et Enterprise.',
        },
      },
    },

    // Knowledge product page
    knowledge: {
      hero: {
        title: 'Asplenz Knowledge',
        subtitle: 'Gouvernance des décisions pour les organisations natives de l\'IA',
        lines: [
          'Structurez vos décisions.',
          'Laissez vos agents les vérifier.',
          'Gouvernez les exceptions.',
          'Tracez tout.',
        ],
        note: 'Rendez-le opérationnel dans votre CI avec Knowledge Verifier.',
      },
      problem: {
        title: 'Le problème que résout Asplenz Knowledge',
        intro: 'Les systèmes d\'IA génèrent désormais du code, modifient l\'infrastructure et refactorisent l\'architecture.',
        fast: 'Ils vont vite.',
        butDontKnow: 'Mais ils ignorent :',
        dontKnow: [
          'Vos engagements architecturaux',
          'Vos invariants de sécurité non négociables',
          'Quelles exceptions ont été approuvées',
          'Ce qui ne doit jamais changer',
        ],
        conclusion: 'Sans une couche de décision déclarée, les systèmes d\'IA opèrent sur des hypothèses.',
        punchline: 'Asplenz Knowledge rend votre état normatif explicite, structuré et consommable par les machines.',
      },
      buildingBlocks: {
        title: 'Les quatre piliers',
        intro: 'Knowledge organise votre surface décisionnelle en quatre types d\'entrées.',
        blocks: [
          { name: 'Décisions (Decisions)', description: 'Choix d\'architecture et engagements stratégiques documentés.\nImmuables une fois enregistrés. Préservés avec leur raisonnement et leur contexte complet.', example: 'Nous utilisons PostgreSQL pour les services nécessitant des garanties ACID.' },
          { name: 'Invariants', description: 'Contraintes absolues qui ne doivent pas être transgressées.\nLimites de sécurité, exigences de conformité, politiques critiques.', example: 'Tous les points de terminaison d\'API publics requièrent une authentification.' },
          { name: 'Règles (Rules)', description: 'Directives d\'implémentation actives.\nVersionnées, configurables, obligatoires ou indicatives.', example: 'Tous les nouveaux services doivent utiliser des logs structurés.' },
          { name: 'Dérogations (Overrides)', description: 'Exceptions gouvernées aux règles ou aux invariants.\nExplicitement approuvées. Ciblées. Limitées dans le temps si nécessaire. Entièrement traçables.', example: 'Le service X est temporairement exempté de la règle de logging jusqu\'à la fin de sa migration.' },
        ],
      },
      howSystemsUse: {
        title: 'Comment les systèmes utilisent Knowledge',
        intro: 'Knowledge est conçu pour être consommé aussi bien par les humains que par les machines.',
        retrieveTitle: 'Récupérer l\'état décisionnel applicable',
        retrieveIntro: 'Les systèmes peuvent demander le contexte normatif complet pour un périmètre donné :',
        retrieveItems: [
          'Invariants actifs',
          'Règles obligatoires et indicatives',
          'Décisions architecturales pertinentes',
          'Dérogations actives',
          'Relations explicites',
        ],
        retrieveConclusion: 'Cela permet aux pipelines CI, aux tableaux de bord et aux outils internes d\'opérer avec une connaissance exacte des décisions.',
        evaluateTitle: 'Évaluer une action proposée',
        evaluateIntro: 'Un agent peut demander si une action est conforme aux règles déclarées.',
        evaluateNote: 'Knowledge renvoie l\'un des trois résultats suivants :',
        outcomes: ['Autorisé (Allowed)', 'Refusé (Denied)', 'Nécessite une approbation humaine'],
        evaluateConclusion: 'Knowledge ne bloque pas l\'exécution par lui-même. Il expose le résultat de l\'évaluation. C\'est votre écosystème qui décide de la réponse à apporter.',
      },
      approval: {
        title: 'Approbation humaine pour les actions critiques',
        intro: 'Certaines contraintes nécessitent une validation humaine explicite avant de pouvoir être contournées.',
        stepsIntro: 'Lorsqu\'une action déclenche une telle contrainte :',
        steps: [
          'Le système signale qu\'une approbation est requise.',
          'L\'approvateur désigné est notifié.',
          'L\'humain approuve ou rejette.',
          'Si l\'action est approuvée, une exception ciblée est enregistrée.',
          'L\'action peut se poursuivre dans les limites déclarées.',
        ],
        conclusion: 'L\'agent décide s\'il doit continuer. L\'humain décide s\'il l\'autorise. Knowledge enregistre l\'intégralité du processus.',
      },
      references: {
        title: 'Tracer chaque utilisation',
        intro: 'Chaque interaction avec une décision déclarée peut être enregistrée :',
        items: [
          'Quelle entrée a été référencée',
          'Dans quel contexte (PR, déploiement, documentation)',
          'Si elle a été suivie, contestée ou contournée',
          'Par qui',
        ],
        conclusion: 'Cela crée une cartographie vivante de l\'utilisation des décisions dans votre organisation. Vous gagnez en visibilité sur la couverture de conformité, les contraintes fréquemment remises en question et les schémas de dérive architecturale.',
      },
      realtime: {
        title: 'Connaissance des décisions en temps réel',
        description: 'Lorsque votre état normatif change, les systèmes connectés peuvent être notifiés. Les agents et les systèmes de CI peuvent réagir immédiatement. Vos équipes ne travaillent plus sur des règles obsolètes.',
      },
      verifierSection: {
        title: 'De la déclaration à la gouvernance opérationnelle',
        intro: 'Déclarer des règles est la première étape. Pour vérifier la conformité automatiquement dans la CI, utilisez :',
        subtitle: 'Knowledge Verifier (Add-on Premium)',
        description: 'Knowledge Verifier analyse les Pull Requests par rapport à votre état normatif déclaré. Il résout le périmètre applicable, détecte les violations d\'invariants et de règles, valide la couverture des dérogations et vérifie les citations de décisions requises.',
        conclusion: 'Cela transforme Knowledge d\'un simple registre en une infrastructure de conformité opérationnelle.',
        cta: 'En savoir plus sur Knowledge Verifier',
        ctaHref: '/verifier',
      },
      isNot: {
        title: 'Ce que Knowledge n\'est pas',
        intro: 'Knowledge n\'est pas :',
        items: [
          'Un wiki',
          'Un scanner de code',
          'Un moteur de workflow',
          'Un runtime de politique qui bloque l\'exécution',
          'Un substitut au jugement des ingénieurs',
        ],
        conclusion: 'C\'est une couche de décision structurée pour les systèmes pilotés par l\'IA.',
      },
      replaces: {
        title: 'Ce que Knowledge remplace',
        rows: [
          { before: 'Décisions d\'architecture dans des documents', after: 'Entrées structurées, versionnées, interrogeables' },
          { before: 'Règles de sécurité dans la tête de quelqu\'un', after: 'Invariants explicites et vérifiables' },
          { before: 'Exceptions dans des fils Slack', after: 'Dérogations gouvernées et traçables' },
          { before: '« Qu\'est-ce qu\'on a décidé pour X ? »', after: 'Réponse structurée et interrogeable' },
          { before: 'Revues sans contexte décisionnel', after: 'PR évaluées face aux règles déclarées' },
        ],
      },
      ctas: {
        title: 'Commencez à déclarer votre surface décisionnelle',
        subtitle: 'Gouvernez vos décisions à la vitesse de l\'IA.',
        primary: 'Démarrer avec Knowledge',
        primaryHref: '/contact',
        secondary: 'Voir les tarifs',
        secondaryHref: '/knowledge/pricing',
        tertiary: 'Nous contacter',
        tertiaryHref: '/contact',
        tagline: 'Asplenz Knowledge - la gouvernance opérationnelle des décisions pour l\'ingénierie IA.',
      },
    },

    // Platform page
    platform: {
      hero: {
        title: 'Infrastructure de Gouvernance des Décisions',
        subtitle: 'Asplenz conçoit des systèmes pour gouverner et prouver les décisions des organisations.',
        lines: [
          'L\'IA accélère l\'action.',
          'L\'organisation en reste responsable.',
          'Deux produits répondent à deux couches de gouvernance distinctes.',
        ],
      },
      layer1: {
        label: 'Couche 1',
        title: 'Gouverner les décisions opérationnelles',
        product: 'Asplenz Knowledge',
        lines: [
          'Structurez vos décisions d\'architecture, vos règles et vos invariants.',
          'Laissez les agents les vérifier avant d\'agir.',
          'Gouvernez les exceptions.',
          'Tracez l\'utilisation.',
        ],
        who: 'CTO, Ingénierie, Plateforme',
        when: 'Chaque PR, chaque déploiement, chaque changement architectural',
        purpose: 'Rendre la surface décisionnelle explicite et opérationnelle',
        cta: 'Explorer Knowledge',
        ctaHref: '/knowledge',
      },
      layer2: {
        label: 'Couche 2',
        title: 'Prouver les engagements critiques',
        product: 'Evidence',
        lines: [
          'Scellez les décisions à portée juridique sous forme de faits immuables et cryptographiquement vérifiables.',
          'Générez des preuves vérifiables de manière indépendante.',
        ],
        who: 'Juridique, Conformité, CISO (RSSI)',
        when: 'Audit réglementaire, revue d\'incident, litige contractuel',
        purpose: 'Rendre la responsabilité (accountability) défendable',
        cta: 'Explorer Evidence',
        ctaHref: '/evidence',
      },
      comparison: {
        title: 'Produits indépendants. Philosophie commune.',
        headers: ['Caractéristique', 'Knowledge', 'Evidence'],
        rows: [
          { label: 'Focus', knowledge: 'Gouvernance opérationnelle', evidence: 'Preuve de niveau juridique' },
          { label: 'Périmètre', knowledge: 'Toutes les décisions techniques', evidence: 'Engagements critiques uniquement' },
          { label: 'Mutabilité', knowledge: 'Versionné et modifiable', evidence: 'Immuable et scellé' },
          { label: 'Acheteur', knowledge: 'Leadership technique', evidence: 'Juridique / Conformité' },
          { label: 'Dépendance', knowledge: 'Aucune', evidence: 'Aucune' },
        ],
        standalone1: 'Un client peut utiliser Knowledge sans Evidence.',
        standalone2: 'Un client peut utiliser Evidence sans Knowledge.',
        together: 'Ensemble, ils forment une infrastructure complète de gouvernance des décisions.',
      },
      intersection: {
        title: 'Le point d\'intersection',
        p1: 'Parfois, une décision opérationnelle prend une importance juridique.',
        p2: 'Dans ces cas précis, elle peut être scellée dans Evidence.',
        p3: 'Cela reste optionnel - ce n\'est pas structurel.',
      },
      whyMatters: {
        title: 'Pourquoi c\'est crucial',
        lines: [
          'L\'IA accélère l\'exécution.',
          'La gouvernance des décisions doit passer à l\'échelle.',
        ],
        intro: 'Asplenz fournit les deux :',
        items: [
          'Une gouvernance structurée des décisions',
          'Une infrastructure de preuve cryptographique',
        ],
        closing: 'Deux couches. Une seule philosophie : les décisions sont des actifs.',
      },
    },

    // Evidence product page
    evidence: {
      header: 'Partie de la plateforme Asplenz. Evidence fonctionne seul ou aux côtés de Knowledge et Knowledge Verifier.',
      headerCta: 'Découvrir Knowledge',
      headerCtaVerifier: 'Découvrir Knowledge Verifier',
      headerCtaVerifierHref: '/verifier',
      title: 'Evidence : Une infrastructure de preuve décisionnelle',
      subtitle: 'Une infrastructure de preuve',
      sections: [
        {
          title: 'Une infrastructure de preuve',
          content: 'Evidence est une infrastructure de preuve. Elle existe pour une raison simple : permettre à une organisation de s\'appuyer sur des faits, et non sur des récits, lorsqu\'une décision critique est remise en question.',
        },
        {
          title: 'En dehors du système décisionnel',
          content: 'Evidence n\'aide pas à décider. Il ne contrôle pas l\'action. Il n\'impose aucun processus. Il se tient volontairement en dehors du système décisionnel.\n\nCette posture n\'est pas un manque, mais une condition. Dès lors qu\'un système valide, autorise ou bloque, il devient partie prenante de la décision. La preuve qu\'il produit cesse alors d\'être neutre.',
        },
        {
          title: 'Ce qu\'Evidence enregistre',
          content: 'Ce qu\'Evidence capture, ce sont des faits déclarés : qu\'une intention a été exprimée, qu\'une information a été transmise, qu\'un résultat a été observé. Il n\'en déduit rien. Il ne qualifie rien.\n\nIl garantit uniquement que ces faits ont existé, à un moment donné, et qu\'ils peuvent être vérifiés indépendamment.',
        },
        {
          title: 'Pas de workflow, pas d\'interface pour décider',
          content: 'Evidence ne cherche pas à remplacer les outils existants. Les décisions continuent de naître là où elles naissent réellement : dans des échanges humains, des systèmes métiers, des contextes d\'urgence ou d\'exception. Evidence s\'adapte à ces lieux sans demander aux décideurs de changer leurs habitudes ni d\'apprendre une nouvelle interface.',
        },
        {
          title: 'Invisible quand cela compte',
          content: 'Cette discrétion est essentielle. Evidence n\'est pas une destination où l\'on va travailler. C\'est une couche silencieuse, présente au moment où les faits s\'expriment, invisible pour l\'opérationnel, mais pleinement accessible après coup pour ceux qui doivent établir ce qui s\'est réellement passé.',
        },
        {
          title: 'Des faits, pas des explications',
          content: 'Ce que fournit Evidence n\'est ni une analyse, ni une explication, ni une justification. C\'est une matière factuelle, destinée à être examinée par d\'autres : auditeurs, équipes risque, juristes, autorités de contrôle. Toute interprétation appartient à ces instances, hors du système.',
        },
        {
          title: 'Ce qu\'Evidence ne promet pas',
          content: 'Evidence ne rend pas les décisions meilleures. Il ne prévient pas les erreurs. Il ne garantit pas que les règles ont été respectées.\n\nIl garantit quelque chose de plus fondamental : que certains faits existent, qu\'ils sont datés, et qu\'ils ne peuvent pas être niés a posteriori.',
        },
        {
          title: 'Pourquoi il existe',
          content: 'Dans un monde où les décisions sont rapides, distribuées et contestables, Evidence ne simplifie pas la réalité. Il la rend vérifiable.',
        },
      ],
      knowledgeBridge: {
        title: 'De Knowledge à Evidence',
        p1: 'Les organisations utilisant Knowledge peuvent soumettre les décisions critiques au scellement cryptographique dans Evidence. Le contexte, la justification et la chaîne d\'approbation accompagnent la décision.',
        p2: 'Mais Evidence ne nécessite pas Knowledge. Tout fait déclaré — de n\'importe quel système, n\'importe quel processus — peut être scellé directement.',
      },
      perspectiveHeader: 'Cette perspective concerne **Evidence**, l\'infrastructure de preuve d\'Asplenz.',
      perspectiveHeaderCta: 'Vous cherchez **Knowledge** (guardrails agents & gouvernance décisionnelle) ?',
      perspectiveHeaderCtaLabel: 'Aller à Knowledge',
      pricing: {
        title: 'Tarifs',
        headline: 'Scellez vos décisions critiques avec confiance',
        intro: 'Evidence est conçu pour les décisions à portée juridique et les environnements réglementés. Les déploiements sont adaptés au profil de risque de votre organisation, à vos exigences d\'intégration et à vos besoins de vérification.',
        enterprise: {
          title: 'Enterprise',
          price: 'Sur mesure',
          description: 'Evidence est proposé exclusivement comme produit Enterprise. Le tarif dépend des facteurs suivants :',
          factors: [
            'Modèle de déploiement (hébergé ou environnement dédié)',
            'Volume de scellement attendu',
            'Exigences de vérification',
            'Politique de rétention',
            'Complexité d\'intégration',
            'Exigences de support et de SLA',
          ],
        },
        included: {
          title: 'Capacités incluses',
          items: [
            'Scellement cryptographique des artefacts de décision',
            'Preuves vérifiables de manière indépendante',
            'Garanties d\'intégrité à long terme',
            'Outils de vérification',
            'Accès API sécurisé',
            'Contrôle d\'accès basé sur les rôles (RBAC)',
            'Support à l\'audit',
          ],
        },
        extensions: {
          title: 'Extensions optionnelles',
          items: [
            'Infrastructure dédiée',
            'Politiques de rétention personnalisées',
            'Workflows de conformité avancés',
            'Intégration avec les systèmes de gouvernance internes',
            'Support dédié et SLA premium',
          ],
        },
        engagement: {
          title: 'Modèle d\'engagement type',
          steps: [
            { label: 'Appel de découverte', description: 'Comprendre vos exigences réglementaires et opérationnelles.' },
            { label: 'Validation technique', description: 'Réviser le modèle d\'intégration et de vérification.' },
            { label: 'Plan de déploiement', description: 'Définir l\'environnement, le modèle d\'accès et la rétention.' },
            { label: 'Mise en production', description: 'Début du scellement des décisions critiques.' },
          ],
        },
        deployment: {
          title: 'Indépendant ou intégré',
          intro: 'Evidence peut être déployé :',
          options: [
            'Comme une infrastructure de preuve autonome.',
            'En parallèle de Asplenz Knowledge.',
            'Intégré à vos flux de gouvernance ou de conformité existants.',
          ],
          note: 'Il n\'y a aucune dépendance obligatoire entre les produits.',
        },
        whyCustom: {
          title: 'Pourquoi les tarifs sont sur mesure',
          description: 'Evidence traite des engagements à portée juridique. Les exigences de déploiement varient selon l\'exposition réglementaire, la tolérance au risque, la juridiction et le modèle de gouvernance interne. C\'est pourquoi la tarification est structurée par organisation.',
        },
        cta: 'Contacter le service commercial',
      },
    },

    // Contact page
    contact: {
      title: 'Contact',
      channels: [
        { label: 'Pour toute demande concernant nos produits, les offres entreprise ou des questions techniques :', email: 'contact@asplenz.com' },
        { label: 'Pour les questions de sécurité ou la divulgation de vulnérabilités :', email: 'security@asplenz.com' },
      ],
      responseTime: 'Nous nous efforçons de répondre sous deux jours ouvrés.',
      location: 'Asplenz — Paris, France',
    },

    // About page
    about: {
      title: 'À propos d\'Asplenz',
      intro: 'Asplenz conçoit l\'infrastructure pour gouverner et prouver les décisions des organisations.',
      body: [
        'À mesure que les systèmes logiciels deviennent assistés par l\'IA et de plus en plus autonomes, l\'exécution s\'accélère.',
        'La responsabilité, elle, ne suit pas le même rythme.',
        'Nous traitons la gouvernance des décisions comme une couche d\'infrastructure de premier rang.',
      ],
      products: {
        title: 'Ce que nous développons',
        intro: 'Asplenz développe deux produits indépendants :',
        items: [
          { name: 'Knowledge', description: 'Un système d\'enregistrement déclaratif pour les décisions opérationnelles. Knowledge structure les décisions d\'architecture, les règles et les invariants afin que les agents et les systèmes puissent évaluer les actions avant qu\'elles ne se produisent. Il rend la gouvernance des décisions explicite et opérationnelle.' },
          { name: 'Evidence', description: 'Une infrastructure de preuve cryptographique pour les engagements à portée juridique. Evidence scelle les décisions critiques sous forme d\'artefacts immuables et vérifiables de manière indépendante. Il rend l\'imputabilité (accountability) défendable.' },
        ],
      },
      perspective: {
        title: 'Notre vision',
        intro: 'Les organisations s\'appuient de plus en plus sur des systèmes automatisés pour agir :',
        items: [
          'Code généré par l\'IA',
          'Workflows autonomes',
          'Infrastructure pilotée par les politiques',
          'Prise de décision distribuée',
        ],
        body: [
          'Ces systèmes augmentent la vitesse et l\'échelle. Ils augmentent également l\'exposition au risque.',
          'Asplenz existe pour garantir que la gouvernance passe à l\'échelle en même temps que l\'exécution.',
        ],
      },
      company: {
        title: 'L\'entreprise',
        description: 'Asplenz est un éditeur de logiciels indépendant spécialisé dans les systèmes de gouvernance de niveau infrastructure. Nous travaillons avec les responsables de l\'ingénierie, les équipes de sécurité et les fonctions de conformité opérant dans des environnements où la responsabilité est primordiale.',
        cta: 'Pour toute demande entreprise :',
        email: 'contact@asplenz.com',
      },
    },

    // Why Asplenz page
    whyAsplenz: {
      title: 'Pourquoi Asplenz',
      intro: [
        'Les organisations modernes exécutent plus vite que jamais.',
        'Les systèmes d\'IA génèrent du code.',
        'L\'automatisation déploie l\'infrastructure.',
        'Les politiques sont appliquées de manière programmatique.',
        'Mais les décisions restent une responsabilité humaine.',
        'En cas de problème, c\'est l\'organisation qui répond — pas le modèle.',
      ],
      governance: {
        title: 'La gouvernance n\'est pas de la documentation',
        body: [
          'La plupart des organisations documentent les décisions.',
          'Peu les opérationnalisent.',
        ],
        items: [
          'Les décisions d\'architecture vivent dans des documents.',
          'Les contraintes de sécurité vivent dans des politiques.',
          'Les exceptions vivent dans des fils de discussion.',
        ],
        closing: [
          'À mesure que les systèmes s\'accélèrent, cette fragmentation devient un passif.',
          'Asplenz comble ce fossé.',
        ],
      },
      layers: {
        title: 'Deux couches de gouvernance',
        intro: [
          'La gouvernance opérationnelle et la responsabilité juridique sont des problèmes différents.',
          'Ils nécessitent des outils différents.',
        ],
        items: [
          { name: 'Knowledge', description: 'structure et évalue les décisions opérationnelles.' },
          { name: 'Evidence', description: 'scelle les engagements à portée juridique.' },
        ],
        closing: [
          'Ce sont des produits indépendants.',
          'Ils partagent une philosophie :',
        ],
        philosophy: [
          'Les décisions sont des actifs.',
          'Elles doivent être structurées, traçables et, si nécessaire, prouvables.',
        ],
      },
      infrastructure: {
        title: 'Infrastructure, pas conseil',
        body: [
          'Asplenz ne fournit pas de services de conseil.',
          'Nous construisons des systèmes que les organisations opèrent elles-mêmes.',
          'La gouvernance doit être systématique, pas performative.',
        ],
      },
    },

    // Foundations (rewritten — covers both products)
    foundations: {
      problem: {
        title: 'Le Problème',
        sections: [
          {
            title: 'Les décisions vivent partout, et nulle part',
            content: `Aujourd'hui, les décisions organisationnelles ne vivent nulle part en particulier. Elles apparaissent par fragments — dispersées entre Slack, email, Confluence, Jira, réunions et accords verbaux. L'action elle-même s'exécute ailleurs encore : dans un terminal, une console cloud, un système automatisé, ou de plus en plus, par un agent IA.\n\nSur le moment, cette dispersion n'est pas un problème. Les équipes se comprennent, la décision circule, l'organisation avance.`,
          },
          {
            title: 'Deux problèmes, pas un',
            content: `La difficulté apparaît à deux moments distincts.\n\n**Le déficit de gouvernance — avant l'action.**\nLes agents IA prennent désormais des centaines de décisions d'implémentation par jour. Quel framework utiliser. Quelle dépendance ajouter. S'il faut suivre le pattern existant ou diverger. Ils agissent vite, mais sans mémoire organisationnelle. Les décisions d'architecture sont dans Confluence. Les contraintes de sécurité sont dans la tête de quelqu'un. Les exceptions ont été discutées sur Slack il y a trois mois. L'agent ne sait rien de tout ça.\n\nLe résultat : du code qui fonctionne mais viole des contraintes non exprimées. Des dépendances qui introduisent un risque juridique. Des patterns qui contredisent des choix d'architecture que personne n'a documentés. Du drift qui s'accumule en silence.\n\n**Le déficit de preuve — après la décision.**\nQuand quelque chose tourne mal — un incident, un audit, une demande réglementaire — l'organisation doit établir ce qui a été décidé, par qui, et quand. Mais les preuves sont dispersées. Des messages dans Slack, des emails écrits après coup, des tickets modifiés plusieurs fois, des logs conçus pour le diagnostic. La reconstruction remplace la preuve. Et la reconstruction, aussi rigoureuse soit-elle, n'est jamais équivalente à la preuve.`,
          },
          {
            title: 'La racine commune',
            content: `Les deux problèmes partagent la même racine : **les décisions ne sont pas traitées comme des actifs organisationnels de premier ordre.**\n\nElles ne sont pas structurées. Elles ne sont pas versionnées. Elles ne sont pas interrogeables. Elles ne sont pas traçables. Elles ne sont pas prouvables.\n\nElles existent comme des conversations éphémères — et quand la conversation se termine, la décision devient invisible.`,
          },
          {
            title: 'Ce que ça coûte',
            content: `Pour l'engineering : des agents qui ignorent les contraintes, du drift d'architecture, des débats répétés, des incidents liés à des règles invisibles.\n\nPour la conformité : des audits qui deviennent des enquêtes, des individus personnellement exposés, une redevabilité qui dépend du récit.\n\nPour l'organisation : des décisions qui ne peuvent être ni gouvernées avant qu'elles arrivent, ni prouvées après.`,
          },
        ],
      },
      shift: {
        title: 'Le Déplacement',
        sections: [
          {
            title: 'Le réflexe d\'améliorer l\'existant',
            content: `Face à des agents non gouvernés et des preuves fragiles, la réaction naturelle est d'améliorer ce qui existe. Ajouter des champs à Jira. Écrire des \`.cursorrules\` plus longs. Conserver les logs plus longtemps. Demander aux équipes de documenter davantage. L'effort est sincère, souvent coûteux, parfois efficace à court terme. Pourtant, le problème ne disparaît pas.`,
          },
          {
            title: 'Deux catégories manquantes, pas une',
            content: `Ce qui manque n'est pas un meilleur fichier de règles ou une politique de rétention plus longue. Deux catégories entières d'infrastructure sont manquantes :\n\n**Une couche normative** — un système qui structure les décisions, règles et contraintes comme des objets interrogeables, pour que les agents et les humains puissent les consulter avant d'agir. Pas un wiki. Pas un moteur de policy. Une source de vérité déclarée que les agents peuvent vérifier en temps réel.\n\n**Une couche de preuve** — un système qui capture l'existence d'un fait décisionnel au moment précis où il se produit, avant toute interprétation ou reconstruction. Pas un log. Pas un ticket. Un enregistrement immuable, scellé cryptographiquement.`,
          },
          {
            title: 'De l\'implicite à l\'explicite',
            content: `Le premier déplacement concerne la gouvernance. Les décisions doivent passer de l'implicite (conversations, savoirs tribaux, documents dispersés) à l'explicite (entrées structurées, versionnées, avec contexte et raisonnement, interrogeables par les agents).\n\nIl ne s'agit pas d'écrire plus de documentation. Il s'agit de créer un état normatif que les agents peuvent consulter programmatiquement. Quand un agent peut appeler \`check()\` avant d'agir, la gouvernance devient automatique.`,
          },
          {
            title: 'De la reconstruction à l\'ancrage',
            content: `Le second déplacement concerne la preuve. La preuve doit passer de la reconstruction (rassembler des fragments après coup) à l'ancrage (sceller le fait au moment où il se produit).\n\nIl ne s'agit pas de logger davantage. Il s'agit de reconnaître que certains faits doivent être ancrés avant que le temps, les systèmes et les interprétations ne les altèrent. La preuve ne se déduit pas. Elle s'ancre, ou elle se perd.`,
          },
          {
            title: 'Ce que ces déplacements rendent possible',
            content: `Une fois les décisions structurées, les agents agissent avec du contexte. Les exceptions sont gouvernées. L'usage est traçable. L'organisation a une mémoire.\n\nUne fois les décisions critiques scellées, la preuve est immédiate. Les audits deviennent des exercices de vérification, pas des enquêtes. La redevabilité repose sur des faits, pas des récits.\n\n**Knowledge rend le premier déplacement possible.**\n**Evidence rend le second.**`,
          },
        ],
      },
    },

    // Perspectives (French)
    perspectives: {
      auditRisk: {
        title: 'Perspective Audit & Risque',
        subtitle: 'Pour les équipes d\'audit, de risque et de contrôle interne responsables de la vérité post-incident.',
        sections: [
          {
            title: 'La réalité de votre rôle',
            content: `Vous enquêtez sur les événements **après** qu'ils se sont produits.\n\nLes preuves vous parviennent tardivement, extraites de systèmes que vous n'opérez pas, déjà filtrées, expliquées ou résumées par d'autres. Vous dépendez de récits, de captures d'écran, d'exports et d'assurances selon lesquelles les données « n'ont pas été altérées ».\n\nVotre défi n'est pas l'analyse. Il s'agit d'**établir si un fait peut encore être cru du tout**.`,
          },
          {
            title: 'Où Evidence se situe',
            content: `Evidence fournit une **infrastructure de preuve indépendante**.\n\nIl n'évalue pas la conformité. Il n'interprète pas la responsabilité. Il ne valide pas les décisions.\n\nIl enregistre les faits déclarés et les scelle au moment où ils sont soumis, produisant des preuves qui peuvent être vérifiées **sans dépendre des systèmes opérationnels qui les ont générées**.\n\nEvidence existe pour que l'audit ne dépende pas de la confiance envers les données contrôlées par l'informatique.`,
          },
          {
            title: 'Ce que Evidence apporte à l\'Audit & au Risque',
            items: [
              'Un enregistrement append-only des faits déclarés',
              'Des horodatages indépendants assignés au moment du scellement',
              'Une intégrité cryptographique qui rend toute altération ultérieure détectable',
              'Des dossiers de preuve (proof bundles) exportables et vérifiables hors d\'Evidence',
            ],
            conclusion: 'Rien de plus.',
          },
          {
            title: 'Ce que Evidence ne fait pas',
            items: [
              'Ne décide pas si un processus est conforme',
              'Ne remplace pas la méthodologie d\'audit',
              'Ne qualifie ni la responsabilité ni l\'intention',
              'N\'explique pas ce qui aurait dû se passer',
            ],
            conclusion: 'Evidence produit des faits. L\'audit produit des conclusions.',
          },
          {
            title: 'Après un incident, vous pouvez établir',
            intro: 'En utilisant Evidence, vous pouvez vérifier :',
            items: [
              'Si une déclaration a existé',
              'Quand elle a été scellée',
              'Qui l\'a déclarée',
              'Si elle a été altérée par la suite',
            ],
            conclusion: 'Vous n\'avez plus besoin de reconstruire les événements à partir de souvenirs, de tickets ou d\'extraits de logs. Vous vérifiez l\'intégrité d\'abord, l\'interprétation ensuite.',
          },
          {
            title: 'Pourquoi cela compte pour l\'Audit & le Risque',
            content: `La crédibilité de l'audit dépend de l'indépendance.\n\nLorsque les preuves sont produites et stockées par les mêmes systèmes qui ont exécuté les actions, l'intégrité ne peut être que présumée. Evidence introduit une séparation structurelle entre **l'action** et **la preuve**.\n\nCette séparation permet à l'audit d'opérer sur des faits **immuables par conception** (by design), et non par politique.`,
          },
          {
            title: 'Ce que Evidence change',
            before: ['Les preuves sont reconstruites', 'L\'intégrité est présumée', 'La vérification est indirecte'],
            after: ['Les faits sont scellés au moment de la déclaration', 'L\'intégrité est vérifiable', 'La preuve est autonome'],
          },
        ],
        next: {
          title: 'Voir comment les faits sont scellés',
          description: 'Cet exemple montre une véritable chronologie post-incident composée de faits scellés, de leurs horodatages et de leurs hachages d\'intégrité, exactement comme un auditeur les examinerait.',
        },
      },
      security: {
        title: 'Perspective Sécurité',
        subtitle: 'Pour les RSSI et les équipes de sécurité responsables de l\'intégrité post-incident.',
        sections: [
          {
            title: 'La réalité de votre rôle',
            content: `Vous opérez dans des environnements où la compromission est présumée.\n\nLes attaquants pratiquent l'escalade de privilèges. Les logs sont effacés, altérés ou préservés sélectivement. Au moment où l'incident est maîtrisé, les traces sont déjà incomplètes.\n\nVotre défi n'est pas la détection. Il s'agit d'établir quels faits existent encore après que les systèmes ont été touchés.`,
          },
          {
            title: 'Où Evidence se situe',
            content: `Evidence fournit une couche de preuve passive et externe.\n\nIl ne détecte pas les attaques. Il ne bloque pas les actions. Il ne sécurise pas l'infrastructure. Il enregistre les faits déclarés en dehors du chemin d'exécution et les scelle de manière à rendre toute modification ultérieure détectable, même si les systèmes d'origine sont totalement compromis.\n\nEvidence existe pour préserver l'intégrité post-incident, non pour prévenir les incidents.`,
          },
          {
            title: 'Ce que Evidence apporte à la Sécurité',
            items: [
              'Un canal passif pour déclarer des faits pertinents pour la sécurité',
              'Des preuves scellées indépendamment des outils de sécurité',
              'Une intégrité append-only qui survit aux accès administratifs',
              'Une preuve qui reste vérifiable après la compromission du système',
            ],
            conclusion: 'Rien de plus.',
          },
          {
            title: 'Ce que Evidence ne fait pas',
            items: [
              'Ne prévient ni ne détecte les attaques',
              'Ne remplace pas les plateformes SIEM, EDR ou de journalisation',
              'Ne durcit pas l\'infrastructure',
              'Ne qualifie ni l\'intention ni la responsabilité',
            ],
            conclusion: 'Evidence ne fait pas partie de la stack défensive. C\'est le témoin qui reste quand les défenses échouent.',
          },
          {
            title: 'Après un incident, vous pouvez établir',
            intro: 'En utilisant Evidence, vous pouvez vérifier :',
            items: [
              'Quels faits ont été déclarés avant, pendant ou après l\'incident',
              'Quand ces faits ont été scellés',
              'Si une trace quelconque a été altérée par la suite',
            ],
            conclusion: 'Vous ne dépendez plus uniquement de logs qui pourraient avoir été nettoyés ou reconstruits.',
          },
          {
            title: 'Pourquoi cela compte pour la Sécurité',
            content: `Les outils de sécurité opèrent à l'intérieur du système qu'ils protègent. Lorsque ce système est compromis, leur sortie devient suspecte.\n\nEvidence introduit un point de vérité externe. Il ne prétend pas à l'immunité. Il offre une détectabilité de l'altération, qui est la seule propriété survivant à une compromission totale.\n\nCela déplace les discussions post-incident de « que croyons-nous ? » à « que pouvons-nous vérifier ? ».`,
          },
          {
            title: 'Ce que Evidence change',
            before: ['Les traces sont mutables', 'L\'intégrité est présumée', 'La forensique dépend de la confiance'],
            after: ['Les faits sont scellés de manière externe', 'L\'intégrité est vérifiable', 'La forensique part de la preuve, non de la croyance'],
          },
        ],
        next: {
          title: 'Voir comment les faits sont scellés',
          description: 'Cet exemple montre une chronologie post-incident composée de faits scellés, de leurs horodatages et de leurs hachages d\'intégrité, exactement telle qu\'examinée lors d\'une analyse forensique de sécurité.',
        },
      },
      engineering: {
        title: 'Perspective Engineering',
        subtitle: 'Pour les CTO, architectes système et leaders engineering responsables de systèmes fiables et de workflows d\'agents gouvernés.',
        sections: [
          {
            title: 'La réalité de votre rôle',
            content: `Vos équipes livrent vite. Vos agents livrent encore plus vite.\n\nLes agents de coding IA génèrent des PR, refactorent des services, ajoutent des dépendances, configurent l'infrastructure. Ils suivent des instructions — mais pas nécessairement les vôtres. Vos décisions d'architecture vivent dans des pages Confluence que personne ne lit. Vos contraintes de sécurité sont implicites. Vos exceptions sont invisibles.\n\nVous n'avez pas un problème d'exécution. Vous avez un problème de gouvernance.`,
          },
          {
            title: 'Où Knowledge se situe',
            content: `Knowledge fournit une source de vérité structurée et interrogeable pour vos décisions techniques.\n\nIl ne remplace pas vos outils. Il ne bloque pas vos agents. Il leur donne un système à consulter avant d'agir — et il vous donne un système pour vérifier ce qu'ils ont fait.`,
          },
          {
            title: 'Ce que Knowledge apporte à l\'Engineering',
            items: [
              'Décisions d\'architecture — structurées, versionnées, avec raisonnement',
              'Invariants de sécurité — explicites, vérifiables par les agents et le CI',
              'Règles actives — directives configurables que les agents suivent',
              'Overrides gouvernés — exceptions approuvées, limitées dans le temps, traçables',
              'Approbations humaines — pour les actions critiques qui nécessitent un checkpoint',
              'Références d\'usage — quelles règles ont été suivies, contournées, par qui',
              'Propagation temps réel — les agents apprennent les changements de règles immédiatement',
            ],
            conclusion: '',
          },
          {
            title: 'Ce que Knowledge ne fait pas',
            items: [
              'Ne bloque pas les déploiements (sauf si votre CI appelle `check()` et agit en conséquence)',
              'Ne remplace pas la code review',
              'Ne prend pas de décisions à votre place',
              'Ne génère pas de code',
            ],
            conclusion: '',
          },
          {
            title: 'Après une PR, vous pouvez établir',
            intro: 'En utilisant Knowledge, vous pouvez vérifier :',
            items: [
              'Quelles décisions d\'architecture l\'agent a consultées',
              'Quels invariants ont été vérifiés',
              'Quelles règles ont été suivies ou contournées (et pourquoi)',
              'Si une approbation a été demandée et par qui elle a été accordée',
              'L\'Implementation Report complet avec les références `knowledge://`',
            ],
            conclusion: 'Sans interroger l\'agent. Sans lire l\'historique Slack. Sans deviner.',
          },
          {
            title: 'Quand la preuve compte',
            content: `Certaines décisions engineering ont un poids juridique : mise en production, exceptions sécurité, dérogations de conformité.\n\nPour celles-ci, Asplenz propose **Evidence** — une couche de preuve cryptographique qui scelle les décisions comme des faits immuables et vérifiables de manière indépendante. Evidence est séparé de Knowledge. Il existe pour quand la redevabilité est remise en question, pas juste la gouvernance.`,
          },
          {
            title: 'Ce que Knowledge change',
            before: ['Les décisions sont dispersées entre Confluence, Slack et les têtes', 'Les agents codent sans contexte', 'Les exceptions sont invisibles', 'Les reviews manquent de raisonnement'],
            after: ['Les décisions sont structurées, versionnées et interrogeables', 'Les agents vérifient les règles avant de générer du code', 'Les exceptions sont gouvernées et approuvées', 'Les reviews incluent des Implementation Reports avec traçabilité complète'],
          },
        ],
        next: {
          title: 'Commencer gratuitement',
          description: 'Installez le serveur MCP, créez votre premier scope et enregistrez votre première décision.',
        },
      },
      legal: {
        title: 'Perspective Juridique',
        subtitle: 'Pour les équipes juridiques, les secrétariats généraux et les legal operations responsables de la clarté factuelle.',
        sections: [
          {
            title: 'La réalité de votre rôle',
            content: `Vous intervenez là où l'interprétation commence après les faits.\n\nLes litiges surviennent lorsque les récits divergent. Les preuves sont contestées parce que leur origine, leur intégrité ou leur timing sont incertains. Ce qui devrait être factuel devient débattable.\n\nVotre défi n'est pas l'argumentation. Il s'agit d'établir si un fait est fiable avant qu'il ne soit interprété.`,
          },
          {
            title: 'Où Evidence se situe',
            content: `Evidence fournit une infrastructure neutre pour les enregistrements factuels.\n\nIl n'évalue pas la légalité. Il ne qualifie pas la responsabilité. Il n'émet ni jugements ni conclusions. Il enregistre les faits déclarés et scelle leur existence à un instant précis, produisant des preuves dont l'intégrité peut être vérifiée indépendamment des systèmes et des personnes impliqués.\n\nEvidence existe pour séparer le fait de l'interprétation.`,
          },
          {
            title: 'Ce que Evidence apporte au Juridique',
            items: [
              'Des enregistrements factuels neutres et non qualifiés',
              'Des horodatages indépendants assignés au moment du scellement',
              'Une intégrité détectable pour les faits déclarés',
              'Une preuve qui peut être vérifiée sans témoignage ni confiance système',
            ],
            conclusion: 'Rien de plus.',
          },
          {
            title: 'Ce que Evidence ne fait pas',
            items: [
              'Ne détermine pas la conformité légale',
              'N\'évalue pas la responsabilité ou la faute',
              'Ne remplace pas l\'analyse juridique',
              'N\'affirme pas de valeur probante',
            ],
            conclusion: 'Evidence enregistre des faits. L\'interprétation juridique reste entièrement humaine et contextuelle.',
          },
          {
            title: 'Après un incident ou un litige, vous pouvez établir',
            intro: 'En utilisant Evidence, vous pouvez vérifier :',
            items: [
              'Qu\'une déclaration a existé',
              'Quand elle a été scellée',
              'Qui l\'a déclarée',
              'Si elle a été altérée par la suite',
            ],
            conclusion: 'Sans dépendre uniquement de souvenirs, d\'attestations internes ou de chronologies reconstruites.',
          },
          {
            title: 'Pourquoi cela compte pour le Juridique',
            content: `Le raisonnement juridique dépend de prémisses stables. Lorsque l'intégrité des faits est contestée, la discussion passe du fond à la crédibilité.\n\nEvidence fournit un socle factuel qui précède l'interprétation et survit aux changements organisationnels ou techniques. Cela permet aux équipes juridiques d'argumenter à partir de faits vérifiés, et non de récits reconstruits.`,
          },
          {
            title: 'Ce que Evidence change',
            before: ['Les faits sont débattus', 'L\'intégrité est affirmée', 'Les récits dominent'],
            after: ['Les faits sont scellés', 'L\'intégrité est vérifiable', 'L\'interprétation part d\'un sol stable'],
          },
        ],
        next: {
          title: 'Voir comment les faits sont scellés',
          description: 'Cet exemple montre une chronologie factuelle scellée, ses horodatages et ses marqueurs d\'intégrité, exactement telle qu\'examinée lors d\'une analyse juridique.',
        },
      },
      aiGovernance: {
        title: 'Perspective Gouvernance de l\'IA et des Données',
        subtitle: 'Pour les équipes responsables de la traçabilité à long terme des systèmes automatisés.',
        sections: [
          {
            title: 'La réalité de votre rôle',
            content: `Vous gouvernez des systèmes qui évoluent par conception.\n\nLes modèles sont réentraînés. Les entrées sont remplacées. Les sorties sont écrasées ou agrégées. Les chemins de décision disparaissent à mesure que les systèmes s'optimisent eux-mêmes.\n\nVotre défi n'est pas la performance. Il s'agit de préserver des points de référence factuels stables dans des systèmes conçus pour changer.`,
          },
          {
            title: 'Où Evidence se situe',
            content: `Evidence fournit une infrastructure neutre pour sceller les faits déclarés.\n\nIl n'évalue pas les modèles. Il n'explique pas les décisions. Il n'impose pas de règles de gouvernance. Il enregistre les entrées, les sorties ou les observations déclarées à un instant précis et les scelle indépendamment des systèmes d'apprentissage.\n\nEvidence existe pour garantir que les faits ne dérivent pas à mesure que les systèmes évoluent.`,
          },
          {
            title: 'Ce que Evidence apporte à la Gouvernance de l\'IA et des Données',
            items: [
              'Des enregistrements scellés des entrées ou sorties déclarées',
              'Des horodatages indépendants au moment de la déclaration',
              'Une intégrité append-only en dehors des pipelines d\'entraînement',
              'Une preuve qui reste vérifiable après la mise à jour des modèles',
            ],
            conclusion: 'Rien de plus.',
          },
          {
            title: 'Ce que Evidence ne fait pas',
            items: [
              'N\'explique pas le comportement du modèle',
              'N\'assure pas l\'équité ou l\'atténuation des biais',
              'N\'impose pas la conformité réglementaire',
              'Ne surveille pas la performance ou la dérive',
            ],
            conclusion: 'Evidence ne gouverne pas l\'IA. Il préserve les faits qui l\'entourent.',
          },
          {
            title: 'Après un incident ou une révision, vous pouvez établir',
            intro: 'En utilisant Evidence, vous pouvez vérifier :',
            items: [
              'Quelles données ou sorties ont été déclarées',
              'Quand elles ont été scellées',
              'Si elles ont été altérées par la suite',
            ],
            conclusion: 'Même si les modèles, les jeux de données ou les pipelines ont changé depuis.',
          },
          {
            title: 'Pourquoi cela compte pour la Gouvernance de l\'IA et des Données',
            content: `Les systèmes d'IA réécrivent leur propre passé. Les logs sont élagués. Les données d'entraînement sont remplacées. Les sorties ne sont plus reproductibles.\n\nEvidence introduit des points de référence fixes qui restent stables pendant que les systèmes évoluent. Cela permet à la gouvernance et à la surveillance d'opérer sur des faits, et non sur des histoires reconstruites ou simulées.`,
          },
          {
            title: 'Ce que Evidence change',
            before: ['Les traces de l\'IA dérivent', 'Les sorties historiques sont perdues', 'La gouvernance repose sur des approximations'],
            after: ['Les faits sont scellés', 'L\'intégrité est vérifiable', 'La surveillance part de registres stables'],
          },
        ],
        next: {
          title: 'Voir comment les faits sont scellés',
          description: 'Cet exemple montre comment les faits déclarés liés à l\'IA sont scellés, horodatés et ajoutés à une chaîne immuable, indépendamment du cycle de vie du modèle.',
        },
      },
    },

    // Docs (French) - Using English docs as the technical documentation is often kept in English
    // For brevity, I'll add shortened French versions
    docs: {
      firstSeal: {
        title: 'Premier Scellement',
        subtitle: 'Sceller un fait en 5 minutes',
        audience: 'CTO · Staff Engineer · SRE',
        intro: 'Cette page montre comment sceller un fait techniquement. Elle n\'explique pas comment interpréter sa signification.',
        sections: [
          {
            title: 'Un seul point de terminaison',
            code: 'POST /streams/{stream_id}/facts\nContent-Type: application/json',
            content: 'Un flux est identifié par stream_id, fourni par le client dans l\'URL. Si aucun flux avec cet ID n\'existe, Evidence le crée implicitement lors du scellement du premier fait.\n\nLe seul identifiant que vous gérez est stream_id ; Evidence n\'impose aucune sémantique métier sur celui-ci.',
          },
          {
            title: 'Une seule requête',
            code: `{
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "custom_payload": {
    "action": "stop_service",
    "context": "Memory leak confirmed"
  }
}`,
            content: 'Dans les déploiements en production, le tenant_id est généralement dérivé du contexte d\'authentification plutôt que fourni dans la charge utile.\n\nVotre charge utile est opaque pour Evidence. Elle est enregistrée exactement telle que fournie.',
          },
          {
            title: 'Une seule réponse',
            code: `{
  "fact_id": "fact-01HRX7G2NB",
  "stream_id": "stream-034",
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "sealed_at_ms": 1706284801000,
  "custom_payload": {
    "action": "stop_service",
    "context": "Memory leak confirmed"
  },
  "fact_hash": "a1b2c3d4e5f6...",
  "prev_hash": "9f8e7d6c5b4a...",
  "parent_fact_id": "fact-01HRX7F1MA"
}`,
            content: 'Les champs comme fact_hash et prev_hash servent à l\'intégrité et à la vérification, pas à la logique métier.',
          },
          {
            title: 'Ce qu\'il s\'est passé',
            items: [
              'Evidence a attribué sealed_at_ms (horodatage faisant autorité)',
              'Evidence a calculé fact_hash à partir d\'une représentation déterministe du fait',
              'Evidence a lié le fait au précédent via prev_hash',
              'Evidence a stocké le fait (en ajout uniquement / append-only)',
            ],
            content: 'Evidence n\'a pas interprété custom_payload. Ce sont vos données.',
            link: { text: 'Voir Vérification', href: '/docs/verification' },
          },
          {
            title: 'Idempotence',
            code: `{
  "tenant_id": "acme-corp",
  "actor": "ops-lead@acme-corp.com",
  "client_ref": "incident-2024-01-26-stop-001",
  "custom_payload": { ... }
}`,
            content: 'Ajoutez client_ref pour rendre la requête idempotente :\n\nMême client_ref → même fait retourné. Pas de double scellement.\n\nL\'idempotence ne modifie pas la preuve. Elle empêche uniquement la duplication.',
          },
        ],
        storageGuarantees: {
          title: 'Garanties de stockage',
          items: [
            { property: 'Ajout uniquement', guarantee: 'Les faits ne peuvent être ni modifiés ni supprimés' },
            { property: 'Chaîne de hachage', guarantee: 'Chaque fait est lié au précédent via prev_hash' },
            { property: 'Détection d\'altération', guarantee: 'Recalcul des hachages pour détecter toute modification' },
            { property: 'Isolation des tenants', guarantee: 'Les faits sont cloisonnés par tenant_id' },
            { property: 'Autorité de preuve', guarantee: 'sealed_at_ms est attribué par Evidence' },
          ],
          note: 'Ces propriétés sont garanties même si le système client est compromis, car toute modification est détectable.',
        },
        whatNotDo: {
          title: 'Ce qu\'Evidence ne fait pas',
          items: [
            { label: 'Aucune interprétation', description: 'custom_payload est opaque' },
            { label: 'Aucun workflow', description: 'Pas d\'états, pas de transitions, pas d\'approbations' },
            { label: 'Aucune validation', description: 'Votre charge utile, votre schéma' },
            { label: 'Aucune logique métier', description: 'Scelle les faits, rien d\'autre' },
          ],
          link: { text: 'Pour la frontière sémantique de ce qu\'un fait scellé prouve et ne prouve pas, voir Sémantique de la Preuve', href: '/docs/proof-semantic' },
        },
        verifyChain: {
          title: 'Vérifier l\'intégrité de la chaîne',
          code: 'POST /streams/{stream_id}/verify',
          content: 'Retourne { "valid": true } si la chaîne de hachage est intacte.\n\nLa vérification recalcule les hachages et les signatures. Elle n\'interprète pas les faits et ne se prononce pas sur leur exactitude.\n\nLes résultats de vérification attestent uniquement que la séquence enregistrée n\'a pas été altérée.',
        },
      },
      proofSemantic: {
        title: 'Sémantique de la Preuve',
        subtitle: 'Ce qu\'un Fait Scellé Prouve, et ce qu\'il ne prouve pas',
        status: 'Canonique · Public · Référence',
        appliesTo: 'Tous les déploiements Evidence',
        sections: [
          {
            number: '1',
            title: 'Objet de ce document',
            content: `Ce document définit la portée et les limites sémantiques des preuves produites par Evidence. Il existe pour :\n\n• clarifier ce qu'un fait scellé établit en tant que preuve,\n• délimiter explicitement ce qu'Evidence n'affirme pas,\n• prévenir toute mauvaise interprétation ou requalification des preuves Evidence.\n\nLa preuve Evidence est factuelle, déclarative et non interprétative. Ce document constitue une frontière de responsabilité sémantique entre :\n\n• **Evidence** (intégrité de la preuve),\n• et les **clients Evidence** (vérité, légitimité, interprétation).`,
          },
          {
            number: '2',
            title: 'Principe sémantique central',
            content: `Une preuve Evidence établit l'existence d'une déclaration : rien de plus. Elle prouve que :\n\n• une déclaration a été reçue,\n• elle a été scellée à un instant précis,\n• elle a été attribuée telle que déclarée,\n• elle appartient à un flux de faits liés.\n\nElle ne prouve ni l'intention, ni la légitimité, ni l'exactitude, ni la causalité, ni le résultat.`,
          },
          {
            number: '3',
            title: 'Ce qu\'un fait scellé prouve',
            content: `Un fait scellé prouve, et prouve uniquement, que :\n\n• une information a été déclarée,\n• par l'acteur identifié dans le fait,\n• et scellée par Evidence à l'instant sealed_at,\n• sans altération après le scellement.\n\nCette preuve est :\n\n• en ajout uniquement (append-only),\n• infalsifiable (tamper-evident),\n• vérifiable de manière indépendante.`,
          },
          {
            number: '4',
            title: 'Ce qu\'un fait scellé ne prouve PAS',
            content: `Un fait scellé ne prouve pas :\n\n• que la déclaration est vraie,\n• que la déclaration reflète une intention,\n• que la déclaration était autorisée,\n• qu'une action a eu lieu à l'heure déclarée,\n• qu'une action a eu lieu tout court,\n• qu'un fait a causé un autre fait,\n• qu'une responsabilité ou une faute existe,\n• qu'une politique, une règle ou une obligation a été satisfaite.\n\nEvidence n'induit, ne calcule, ni n'évalue le sens des données.`,
          },
          {
            number: '11',
            title: 'Positionnement juridique et réglementaire',
            content: `La preuve Evidence est technique, factuelle et neutre. Elle ne constitue pas :\n\n• une décision,\n• une autorisation,\n• une sanction,\n• une évaluation de politique,\n• une assertion de conformité.\n\nEvidence est un **témoin**, pas un juge.`,
          },
          {
            number: '12',
            title: 'Résumé canonique',
            content: `Evidence produit une preuve de déclaration, et non une preuve d'exactitude ou de légitimité. Ce principe régit toutes les preuves Evidence.`,
          },
        ],
      },
      understandingProof: {
        title: 'Comprendre les preuves Evidence',
        subtitle: 'Comment les preuves Evidence sont produites et comment elles peuvent être lues',
        status: 'Informatif · Public',
        intro: 'Ce document complète Proof Semantics. Il ne redéfinit pas la signification d\'une preuve Evidence. Il explique comment Evidence produit des preuves et comment ces preuves peuvent être examinées.',
        sections: [
          {
            title: 'Le scellement – Comment Evidence scelle les faits',
            content: `Un fait dans Evidence est simplement une chose déclarée par un acteur identifié, à un moment donné. Lorsqu'un fait est déclaré (pendant une crise, une exception ou des opérations normales), Evidence traite cette déclaration comme un événement technique à sceller.`,
          },
          {
            title: 'Lire une preuve – Exemple de chronologie',
            intro: 'Cette section illustre comment les preuves Evidence peuvent être examinées une fois les faits scellés.',
            timeline: [
              { time: '08:30:00', actor: 'monitoring@', payload: 'metric=memory_usage, threshold=95%', hash: 'a1b2c3...d4e5f6' },
              { time: '08:32:00', actor: 'ops-lead@', payload: 'action=stop_service, target=payment-gateway-eu-west-1', hash: 'b2c3d4...e5f6a7' },
              { time: '08:33:00', actor: 'cto@', payload: 'message=Proceed with controlled shutdown.', hash: 'c3d4e5...f6a7b8' },
              { time: '08:35:02', actor: 'ops-lead@', payload: 'method=kubectl_drain, result=service_stopped', hash: 'd4e5f6...a7b8c9' },
              { time: '08:40:00', actor: 'monitoring@', payload: 'observation=service_stopped, error_rate=0%', hash: 'e5f6a7...b8c9d0' },
            ],
            bundleInfo: 'Dossier de preuve · 5 faits · Signé',
            note: 'Cet exemple illustre une façon d\'examiner les faits scellés.',
            shows: [
              'que certaines déclarations ont existé',
              'qui les a déclarées (selon l\'attribution)',
              'quand Evidence les a scellées',
              'qu\'elles appartiennent au même flux',
            ],
            doesNotShow: [
              'si les déclarations sont vraies',
              'si elles ont été autorisées',
              'si les actions se sont produites comme décrit',
              'si un fait a causé un autre',
              'si une décision était correcte ou légitime',
            ],
            conclusion: 'Evidence montre ce qui a été déclaré. Vous tirez les conclusions.',
          },
          {
            title: 'Résumé',
            content: 'Evidence produit des preuves en scellant des faits déclarés. Il expose ces faits sous une forme structurée et vérifiable.',
          },
        ],
      },
      verification: {
        title: 'Guide de vérification',
        subtitle: 'Vérifier un faisceau de preuves Evidence',
        status: 'Canonique · Public · Référence',
        audience: 'Auditeurs · Reviseurs externes · Équipes sécurité · Experts juridiques',
        appliesTo: 'Tous les déploiements Evidence',
        sections: [
          {
            number: '1',
            title: 'Objet de ce document',
            content: `Ce document explique comment les preuves Evidence peuvent être vérifiées et ce qu'une telle vérification garantit.`,
          },
          {
            number: '5',
            title: 'Ce que la vérification prouve',
            content: `Une vérification réussie prouve que :\n\n• le faisceau a été produit par Evidence,\n• les faits inclus ont été scellés par Evidence,\n• les faits n'ont pas été altérés depuis leur scellement,\n• l'ordre des faits est en ajout uniquement et intact.`,
          },
          {
            number: '6',
            title: 'Ce que la vérification ne prouve PAS',
            content: `La vérification ne prouve pas :\n\n• que les faits déclarés sont vrais,\n• que les acteurs déclarés sont légitimes,\n• que les actions se sont déroulées comme décrit.`,
          },
          {
            number: '11',
            title: 'Résumé canonique',
            content: `La vérification confirme que la preuve Evidence est intacte et authentique. Elle ne confirme pas ce que la preuve signifie.`,
          },
        ],
      },
    },

    common: {
      backToHome: 'Retour à l\'accueil',
      next: 'Suivant',
      viewPerspectives: 'Voir les perspectives',
    },
  },
}

export function getContent(lang: Lang) {
  return content[lang]
}
