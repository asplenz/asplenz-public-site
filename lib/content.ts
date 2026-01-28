export type Lang = 'en' | 'fr'

export const content = {
  en: {
    brand: 'HORIZON by ASPLENZ',
    brandShort: 'ASPLENZ',
    tagline: 'Decision Observability Infrastructure (DOI)',
    nav: {
      overview: 'Overview',
      theProblem: 'The Problem',
      theShift: 'The Shift',
      horizon: 'Horizon',
      proof: 'Proof',
      proofModel: 'Proof Model',
      proofSemantic: 'Proof Semantics',
      quickStart: 'Quick Start',
      firstSeal: 'First Seal',
      verification: 'Verification',
      understandingProof: 'Understanding Proofs',
      documentation: 'Documentation',
      talkToUs: 'Contact',
      contact: 'Contact',
      menu: 'Menu',
    },
    footer: {
      product: 'Product',
      expertise: 'Expertise',
      company: 'Company',
      home: 'Home',
      copyright: '© 2026 Horizon by Asplenz. All rights reserved.',
    },
    // Common CTAs
    common: {
      cta_primary: 'See how facts are sealed',
      cta_secondary: 'See the architecture',
      cta_view_timeline: 'View a post-incident timeline',
      cta_hero: 'Understand how Horizon works',
      cta_request_overview: 'Request a technical overview',
      cta_discuss_use_case: 'Discuss your use case',
    },
    // Category framing
    categoryFraming: {
      definition: 'Horizon is Decision Evidence Infrastructure.',
      clarification: 'It produces verifiable facts about decisions without interpreting, enforcing, or governing them.',
    },
    theProblem: {
      title: 'The Problem',
      sections: [
        {
          title: 'Decisions live everywhere, and nowhere',
          content: 'Today, corporate decisions live nowhere in particular. They appear in fragments, scattered across a multitude of tools that were never designed to hold them. A discussion begins in Slack, continues via email, is clarified orally during a meeting, is settled over the phone, and then sometimes leaves an indirect trace in a Jira ticket or a ServiceNow form. The action itself is executed elsewhere still - in a terminal, a cloud console, or an automated system - while applications log what they can in files designed for diagnostics, not for proof. At the moment, this dispersion is not a problem. Teams understand each other, the decision flows, the organization moves forward.',
        },
        {
          title: 'The question always comes later',
          content: 'The difficulty only appears later, when one tries to establish what actually happened. At that point, there is no single point to turn to. One must reconstruct. We gather what remains: messages extracted from Slack, screenshots attached to emails, PDFs exported from business tools, tickets modified multiple times, technical logs that are difficult to interpret outside their original context. Very quickly, it becomes clear that this material is incomplete. Some discussions were never written down, some exchanges took place orally, some messages were deleted, some logs were purged, some people are no longer there. What is missing can no longer be recovered.',
        },
        {
          title: 'Reconstruction replaces proof',
          content: 'Faced with these absences, reconstruction inevitably becomes interpretive. Gaps are filled with memories, assumed intentions, and reasoning formulated after the fact. A coherent story takes shape, often in good faith, sometimes under pressure, but always influenced by the context in which the question is asked. This narrative may seem solid, but it no longer constitutes proof. The elements produced - screenshots, PDF exports, isolated emails - do not carry their own integrity. They do not allow an independent third party to verify that they have not been modified, selected, or taken out of context. They ask to be believed, and as soon as a piece of evidence asks to be believed, it ceases to be binding.',
        },
        {
          title: 'Time works against certainty',
          content: 'Over time, this fragility only worsens. Tools evolve, formats change, systems are updated, and retention policies erase what was not intended to last. Memories alter, certainties shift. Six months later, or sometimes a year later, the decision only exists as a narrative the organization is capable of producing about itself. This narrative may be honest, precise, and detailed, but it remains vulnerable to doubt because it relies on a late reconstruction of a reality that was never captured.',
        },
        {
          title: 'Tools were never designed for proof',
          content: 'The problem is not that companies lack tools. On the contrary, they use too many, each optimized for a specific function. Slack facilitates discussion, email structures communication, Jira organizes work, ServiceNow frames processes, technical systems execute, logs observe. But none of these tools is intended to freeze the moment a decision becomes irreversible, nor to attest that an authority declared something at a specific time. The decision traverses systems without ever being fully inscribed in them. It exists in action, but not as an autonomous, independently verifiable fact.',
        },
        {
          title: 'Explaining is not proving',
          content: 'When the question is finally asked - often long after the events - the organization can no longer show what happened. It can only explain it. And explaining, as rigorously as possible, is never equivalent to proving. This is not a problem of discipline, nor of method, nor of goodwill. It is a structural problem. As long as it remains invisible, organizations will continue to believe they can explain later, only to discover, too late, that explaining is not proving.',
        },
      ],
      closingLine: 'What is missing is not another tool, but a way to preserve reality before it disappears.',
    },
    theShift: {
      title: 'The Shift',
      sections: [
        {
          title: 'The reflex to improve what exists',
          content: 'Faced with the fragility of evidence, the natural reaction of organizations is almost always the same. We seek to improve what already exists. We add mandatory fields, reinforce validation workflows, keep logs longer, and ask teams to write more. The effort is sincere, often costly, and sometimes even effective in the short term. Yet, the problem does not go away.',
        },
        {
          title: 'More structure does not create proof',
          content: 'These responses rest on an implicit assumption: if tools are organized well enough, evidence will eventually emerge. But organization does not produce proof; it produces coherence. Workflows impose a path, but they do not guarantee that the actual decision was made within that path. Logs describe what systems do, not what authorities declare. Documentation formalizes narratives, almost always after the fact. In every case, the evidence remains derivative.',
        },
        {
          title: 'An entire missing category',
          content: 'What is missing is not an additional rule, another tool, or better human discipline. An entire category of infrastructure is missing: a decision evidence infrastructure. Its role is not to decide, nor to govern, nor to control. Its role is to capture the existence of a decisional fact at the precise moment it occurs - before any interpretation, before any reconstruction. As long as this category does not exist, every attempt at proof relies on secondary traces, which are fragile by nature.',
        },
        {
          title: 'From reconstruction to anchoring',
          content: 'This is where the shift lies. It is no longer about reconstructing after the fact, nor analyzing more finely, nor governing more strictly. It is about recognizing that certain facts must be anchored at the moment they exist, before time, systems, and interpretations alter them. Evidence is not deduced. It is anchored, or it is lost.',
        },
        {
          title: 'A clear boundary',
          content: 'From this observation, a clear boundary emerges. On one side are the systems that decide, execute, communicate, and analyze. On the other is an infrastructure of factual, neutral, and independent anchoring, whose role is not to intervene, but to attest. This shift does not make decisions better. It makes their existence less debatable.',
        },
        {
          title: 'What this shift makes possible',
          content: 'Once this shift is made, the nature of the question of proof changes. It ceases to be a fragile exercise in justification and becomes a problem of verification. Not because organizations have better control, but because they finally possess facts that do not need to be narrated.\n\nThis shift changes the question from "Can we reconstruct what happened?" to "Can we independently verify what was captured?"',
        },
      ],
      closingLine: 'Without anchoring at the moment of declaration, verification remains an exercise in interpretation.',
      horizonLink: 'Explore how Horizon implements this shift',
    },
    horizonAbout: {
      title: 'Horizon',
      subtitle: 'A Decision Evidence Infrastructure',
      sections: [
        {
          title: 'An infrastructure of proof',
          content: 'Horizon is an infrastructure of proof. Factual evidence for decisions when they matter most.\n\nIt exists for a simple reason: to allow an organization to rely on facts, rather than narratives, when a critical decision is called into question.',
        },
        {
          title: 'Outside the decision system',
          content: 'Horizon does not help decide. It does not control action. It does not impose any process. It intentionally stands outside the decision-making system.\n\nThis stance is not a shortcoming, but a prerequisite. As soon as a system validates, authorizes, or blocks, it becomes a stakeholder in the decision. The evidence it produces then ceases to be neutral.',
        },
        {
          title: 'What Horizon records',
          content: 'What Horizon captures are declared facts: that an intention was expressed, that information was transmitted, that a result was observed. It infers nothing. It qualifies nothing.\n\nIt solely guarantees that these facts existed, at a specific point in time, and that they can be independently verified.',
        },
        {
          title: 'No workflow, no interface to decide',
          content: 'Horizon does not seek to replace existing tools. Decisions continue to originate where they actually occur: in human exchanges, business systems, or contexts of urgency or exception. Horizon adapts to these environments without requiring decision-makers to change their habits or learn a new interface.',
        },
        {
          title: 'Invisible when it matters',
          content: 'This discretion is essential. Horizon is not a destination where people go to work. It is a silent layer, present at the moment facts are expressed, invisible to operations, but fully accessible after the fact for those who must establish what truly happened.',
        },
        {
          title: 'Facts, not explanations',
          content: 'What Horizon provides is neither an analysis, nor an explanation, nor a justification. It is factual material, intended to be examined by others: auditors, risk teams, legal experts, or regulatory authorities. All interpretation belongs to these entities, outside the system.',
        },
        {
          title: 'What Horizon does not promise',
          content: 'Horizon does not make decisions better. It does not prevent errors. It does not guarantee that rules were followed.\n\nIt guarantees something more fundamental: that certain facts exist, that they are dated, and that they cannot be denied a posteriori.',
        },
        {
          title: 'Why it exists',
          content: 'In a world where decisions are fast, distributed, and contestable, Horizon does not simplify reality. It makes it verifiable.',
        },
      ],
      proofLink: 'For the boundary of what evidence means, see Proof Semantics.',
    },
    howHorizonSeals: {
      title: 'How Horizon seals facts',
      steps: [
        'A fact is declared by an actor',
        'Horizon processes the declaration',
        'The fact is hashed and signed',
        'A sealed_at timestamp is assigned',
        'The fact is appended to an immutable chain',
      ],
      exampleTitle: 'Example of a sealed fact',
      closing: [
        'Horizon does not decide what this fact means.',
        'It only proves that it was declared and sealed at that moment.',
      ],
    },
    postIncidentTimeline: {
      title: 'Post-incident timeline',
      subtitle: 'Timeline ordered by sealing time (sealed_at)',
      columns: ['Time', 'Actor', 'Payload', 'Sealed'],
      bundleLabel: 'Proof Bundle',
      bundleFacts: 'facts',
      bundleSigned: 'Signed',
      closing: 'Horizon shows what was declared. You draw the conclusions.',
    },
    hero: {
      headline: 'Horizon seals declared facts.',
      headlineSubtext: 'Declared by humans or systems. Sealed without interpretation.',
      subheadline: 'Horizon is a neutral, append-only proof infrastructure that captures facts at the moment they are declared, so they can be independently verified later.',
      bullets: [
        'No workflow. No approval. No operational friction.',
      ],
      image: 'hero.png',
    },
    whatHorizonRecords: {
      title: 'What Horizon records',
      paragraphs: [
        'Horizon records declared facts.\nFacts declared by humans or by systems.',
        'Facts recorded as they are expressed, without interpretation or judgment.\nHorizon does not infer intent, assess validity, or derive meaning.',
        'It records that something was declared, by whom, and when.\nWhat is recorded is independent of workflows, tools, and outcomes.',
        'It exists as a fact: nothing more, nothing less.',
      ],
    },
    problem: {
      title: 'When context vanishes and facts are contested',
      paragraphs: [
        'When a critical event unfolds (operational, technical, or human: incidents, failures, reports, exceptions, deviations, crises), decisions are taken under pressure. Channels become informal. Approvals are given verbally. Actions happen immediately, often before anything has been written down. At that moment, speed matters more than traceability, and no one is thinking about proof.',
        'Weeks or months later (audits, disputes, investigations), the questions arrive.',
        'Who knew what, and when. What was actually declared, and by whom. Which decisions were taken under pressure, and based on what information. What evidence still exists that can be examined independently.',
        'By then, reality no longer exists as a set of facts. It must be reconstructed.',
        'Communications are searched. Logs are exported. Testimonies and screenshots are assembled. Human memory fills the gaps. A coherent narrative eventually emerges, often honest, sometimes confident, but fragile by nature.',
        'That reconstruction cannot be verified independently. It depends on what remains, on what was kept, and on the perception of those who are still there to explain it. Over time, what cannot be proven becomes debatable. What becomes debatable eventually becomes contestable.',
        'This is the moment when organizations realize that the problem is not what they decided, but that the facts themselves were never captured when they existed.',
      ],
    },
    horizonDoesNot: {
      title: 'What Horizon does not do',
      paragraphs: [
        'Horizon does not decide, approve, or enforce anything.',
        'It does not run workflows, block actions, or judge outcomes.',
        'It is not a SIEM, a SOAR, an IR platform, a compliance engine, or a decision system.',
        'Horizon records declarations and seals them as facts.',
        'All interpretation happens elsewhere.',
      ],
    },
    whatThisEnables: {
      title: 'What this enables',
      paragraphs: [
        'By sealing facts when they are declared, Horizon makes post-incident analysis possible without reconstruction.',
        'It allows organizations to establish what was declared, by whom, and when: even when systems have changed and context is gone.',
        'Horizon does not resolve ambiguity.',
        'It preserves the factual ground on which ambiguity can be examined.',
      ],
    },
    indexFoundations: {
      title: 'Foundations',
      links: [
        { label: 'The Problem', description: 'Why post-incident proof fails', href: '/problem' },
        { label: 'The Shift', description: 'From reconstruction to sealed facts', href: '/shift' },
        { label: 'Horizon', description: 'The proof infrastructure', href: '/horizon' },
        { label: 'Proof', description: 'How Horizon evidence works', href: '/proof-semantic' },
      ],
    },
    indexContactCTA: {
      title: 'Contact',
      cta: 'Discuss a real situation',
    },
    howHorizonWorks: {
      title: 'How Horizon seals facts',
      image: 'how.png',
      intro: 'A fact is simply something declared by an identified actor, at a given moment.',
      whenDeclared: {
        intro: 'When a fact is declared, during a crisis, an exception, or normal operations, Horizon:',
        bullets: [
          'assigns a single authoritative timestamp (sealed_at),',
          'stores the content as fully opaque data,',
          'cryptographically links it to the previous fact.',
        ],
      },
      factsStream: {
        intro: 'Facts are appended to a Facts Stream:',
        bullets: [
          'append-only by construction,',
          'with no business state,',
          'no opening or closing,',
          'and no imposed causality.',
        ],
      },
      evaluations: {
        intro: 'Later, additional facts may be declared as evaluations of previous facts.',
        horizonDoes: 'Horizon:',
        bullets: [
          'records the declared relationship,',
          'seals the evaluation,',
          'does not interpret its meaning.',
        ],
        note: 'Compliance, legitimacy, responsibility, or fault are always external to Horizon.',
      },
      footer: 'Horizon produces structured, verifiable evidence. Without producing judgment.',
    },
    postIncident: {
      title: 'Built for scrutiny, whenever it happens.',
      image: 'timeline.png',
      intro: 'After an incident, Horizon allows you to show:',
      bullets: [
        'what was declared,',
        'by whom,',
        'when Horizon received proof of it,',
        'in what factual sequence,',
        'and which evaluations were later declared.',
      ],
      footer: 'Without log interpretation. Without narrative reconstruction.',
    },
    whyCISOs: {
      title: 'Why CISOs rely on Horizon',
      bullets: [
        'Incidents escape ideal workflows',
        'Reality is judged after the fact',
        'Personal and organizational exposure is real',
        'Logs are necessary but insufficient',
      ],
      footer: 'Horizon provides independent evidence, not explanations.',
    },
    whoElse: {
      title: 'Who else relies on it?',
      subtitle: 'Horizon aligns security, engineering, risk, and legal around facts.',
      personas: [
        {
          name: 'Engineering / CTO',
          description: 'Append-only, API, non-intrusive, no runtime impact.',
        },
        {
          name: 'Risk',
          description: 'Traceability of exceptions, continuity, after-the-fact clarity.',
        },
        {
          name: 'Legal',
          description: 'No qualification, no decision, neutral and opposable facts.',
        },
      ],
    },
    whatHorizonIsNot: {
      title: 'What Horizon is not',
      bullets: [
        'Not a SIEM',
        'Not a SOAR',
        'Not an IR platform',
        'Not a compliance engine',
        'Not a decision system',
      ],
      footer: 'Horizon complements them by recording what they cannot guarantee.',
    },
    signature: {
      one_liner: 'Horizon provides indisputable evidence of what was declared during a security incident, by whom, and when it was sealed.',
      short: 'The system of record for incident facts.',
    },
    proofModel: {
      title: 'Horizon Proof Model',
      subtitle: 'Decision Evidence Infrastructure',
      whatIs: {
        title: '1. What Horizon Is',
        definition: 'Horizon is Decision Evidence Infrastructure.',
        description: 'It produces independent, append-only, verifiable evidence that decision-related facts were declared, by a declared actor, and sealed at a precise moment in time.',
        purpose: 'Horizon exists to replace fragile, post-incident reconstructions with factually sealed records that can be verified independently.',
        designedFor: 'Horizon is designed for situations where decisions are:',
        situations: [
          'urgent or exceptional,',
          'human or semi-human,',
          'judged after the fact (incident review, audit, regulator inquiry).',
        ],
      },
      whatIsNot: {
        title: '2. What Horizon Is Not',
        intro: 'Horizon is strictly passive.',
        notLabel: 'It is not:',
        notList: [
          'a decision engine,',
          'a workflow or approval system,',
          'a governance or compliance tool,',
          'a security control,',
          'a logging or observability system.',
        ],
        doesNotLabel: 'Horizon does not:',
        doesNotList: [
          'decide,',
          'approve or reject,',
          'block or allow,',
          'enforce rules,',
          'interpret meaning,',
          'assign responsibility.',
        ],
        conclusion: 'These absences are intentional guarantees, not missing features.',
      },
      proofModelSection: {
        title: '3. The Append-Only Proof Model',
        intro: 'Horizon is built on a simple, immutable model composed of Streams and Facts.',
        stream: {
          title: 'Stream',
          description: 'A Stream groups a sequence of related facts over time.',
          points: [
            'Streams are never closed by Horizon.',
            'New facts can be appended at any time, even long after an incident.',
            'Any notion of "completion" or "workflow end" is external to Horizon.',
          ],
        },
        fact: {
          title: 'Fact',
          description: 'A Fact is a declared piece of information, sealed by Horizon.',
          includesLabel: 'Each fact includes:',
          includes: [
            'a declared actor,',
            'a client-defined payload (opaque to Horizon),',
            'a cryptographic hash,',
            'a signature,',
            'a Horizon-assigned timestamp.',
          ],
          areLabel: 'Facts are:',
          are: [
            'append-only,',
            'immutable,',
            'cryptographically chained.',
          ],
          conclusion: 'Horizon never modifies or reorders facts once sealed.',
        },
      },
      timeSemantics: {
        title: '4. Time Semantics: sealed_at',
        intro: 'Horizon assigns a single authoritative time to each fact: sealed_at.',
        representsLabel: 'sealed_at represents:',
        represents: [
          'the moment Horizon received and sealed the declaration,',
          'the moment from which the fact becomes provable.',
        ],
        doesNotAssertLabel: 'Horizon does not assert:',
        doesNotAssert: [
          'when an action actually occurred,',
          'when an observation was made,',
          'whether timestamps declared by clients are accurate.',
        ],
        conclusion: 'Any client-provided time information belongs in the payload and is not authoritative.',
      },
      neutrality: {
        title: '5. Neutrality and Non-Interpretation',
        intro: 'Horizon is intentionally neutral.',
        doesNotInferLabel: 'It does not infer:',
        doesNotInfer: [
          'intent,',
          'causality,',
          'authorization,',
          'responsibility,',
          'correctness.',
        ],
        records: 'Horizon records that something was declared, not what it means.',
        interpretation: 'All interpretation, judgment, or qualification happens outside Horizon, by humans, organizations, or regulators.',
        ensuresLabel: 'This neutrality ensures Horizon cannot be requalified as:',
        ensures: [
          'a decision system,',
          'an authorization system,',
          'a disciplinary or governance tool.',
        ],
      },
      whatProves: {
        title: '6. What Horizon Proves',
        intro: 'Horizon can produce verifiable proof that:',
        proves: [
          'a fact was declared,',
          'by a declared actor,',
          'at a precise sealing time,',
          'within a given stream of related facts,',
          'without alteration after sealing.',
        ],
        proofIsLabel: 'This proof is:',
        proofIs: [
          'append-only,',
          'tamper-evident,',
          'independently verifiable.',
        ],
      },
      whatNeverProves: {
        title: '7. What Horizon Never Proves',
        intro: 'Horizon does not prove:',
        neverProves: [
          'that a decision was correct,',
          'that a decision was authorized,',
          'that an action should have been taken,',
          'that an action actually occurred at a given real-world time,',
          'that one fact caused another,',
          'that responsibility or fault exists.',
        ],
        conclusion: 'Horizon provides evidence of declaration, not evidence of legitimacy, intent, or outcome correctness.',
      },
      positioning: {
        title: '8. Positioning Summary',
        blackBox: 'Horizon is the black box of critical decisions.',
        doesNot: [
          'It does not pilot action.',
          'It does not explain behavior.',
          'It does not judge outcomes.',
        ],
        guarantee: 'It guarantees that facts exist, are sealed, and can be verified when scrutiny begins.',
      },
      canonical: {
        title: 'Canonical Definition (Reference)',
        definition: 'Horizon is Decision Evidence Infrastructure: independent infrastructure that seals verifiable facts related to decisions, without interpreting, enforcing, or governing them.',
      },
      status: 'Canonical · Public · Stable · Reference version',
    },
    quickStart: {
      title: 'First Seal',
      subtitle: 'Seal a Fact in 5 Minutes',
      audience: 'Audience: CTO · Staff Engineer · SRE',
      disclaimer: 'This page shows how to seal a fact technically. It does not explain how to interpret its meaning.',
      oneEndpoint: {
        title: 'One Endpoint',
        code: 'POST /streams/{stream_id}/facts\nContent-Type: application/json',
        note: 'A stream is identified by stream_id, provided by the client in the URL. If no stream with that ID exists, Horizon creates it implicitly when the first fact is sealed.',
        clarification: 'The only identifier you manage is stream_id; Horizon does not impose any business semantics on it.',
      },
      oneRequest: {
        title: 'One Request',
        note: 'In production deployments, tenant_id is typically derived from authentication context rather than provided in the payload.',
        clarification: 'Your payload is opaque to Horizon. It is recorded exactly as provided.',
      },
      oneResponse: {
        title: 'One Response',
        clarification: 'Fields such as fact_hash and prev_hash are used for integrity and verification, not business logic.',
      },
      whatHappened: {
        title: 'What Happened',
        steps: [
          'Horizon assigned sealed_at_ms (authoritative timestamp)',
          'Horizon computed fact_hash from a deterministic representation of the fact',
          'Horizon chained to previous fact via prev_hash',
          'Horizon stored the fact (append-only)',
        ],
        note: 'Horizon did not interpret custom_payload. That\'s your data.',
        verificationLink: 'See Verification to learn how to independently verify the chain.',
      },
      idempotency: {
        title: 'Idempotency',
        intro: 'Add client_ref to make the request idempotent:',
        result: 'Same client_ref → same fact returned. No duplicate sealing.',
        clarification: 'Idempotency does not alter the proof. It prevents duplication only.',
      },
      storageGuarantees: {
        title: 'Storage Guarantees',
        rows: [
          { property: 'Append-only', guarantee: 'Facts cannot be modified or deleted' },
          { property: 'Hash chain', guarantee: 'Each fact links to previous via prev_hash' },
          { property: 'Tamper detection', guarantee: 'Recompute hashes to detect modification' },
          { property: 'Tenant isolation', guarantee: 'Facts scoped by tenant_id' },
          { property: 'Proof authority', guarantee: 'sealed_at_ms assigned by Horizon' },
        ],
        clarification: 'These properties hold even if the client system is compromised, because any modification is detectable.',
      },
      whatHorizonDoesNot: {
        title: 'What Horizon Does Not Do',
        items: [
          { label: 'No interpretation', description: 'custom_payload is opaque' },
          { label: 'No workflow', description: 'No states, no transitions, no approvals' },
          { label: 'No validation', description: 'Your payload, your schema' },
          { label: 'No business logic', description: 'Seal facts, nothing else' },
        ],
        proofSemanticsLink: 'For the semantic boundary of what a sealed fact proves and does not prove, see Proof Semantics.',
      },
      verifyChain: {
        title: 'Verify Chain Integrity',
        code: 'POST /streams/{stream_id}/verify',
        result: 'Returns { "valid": true } if hash chain is intact.',
        note: 'Verification recomputes hashes and signatures. It does not interpret facts or assert correctness.',
        clarification: 'Verification results only attest that the recorded sequence hasn\'t been tampered with.',
      },
    },
    understandingProof: {
      title: 'Understanding Horizon Proofs',
      status: 'Informative · Public',
      purpose: 'Explain how Horizon evidence is produced and how it can be read — with a concrete example — without redefining its meaning.',
      intro: [
        'This document complements Proof Semantics.',
        'It does not redefine what a Horizon proof means.',
        'It explains how Horizon produces evidence and how that evidence can be examined.',
      ],
      chapter1: {
        title: 'Sealing – How Horizon seals facts',
        paragraphs: [
          'A fact in Horizon is simply something declared by an identified actor, at a given moment. When a fact is declared (during a crisis, an exception, or normal operations), Horizon treats this declaration as a technical event to be sealed.',
          'The sealing process follows a fixed sequence. First, the declaration is received from a technical channel (API, email, or system integration). Horizon does not inspect, validate, or interpret its content.',
          'Horizon then assigns a single authoritative timestamp, called sealed_at. This timestamp represents the moment the declaration was sealed by Horizon. It is the only time reference asserted by the system.',
          'The declared content is stored as fully opaque data. Horizon does not impose a schema, enforce structure, or extract meaning from the payload.',
          'The fact is then cryptographically hashed and signed. Its integrity becomes tamper-evident.',
          'Finally, the fact is appended to an immutable chain, linked to the previous fact within the same stream. This append-only construction ensures that facts cannot be altered or removed without detection.',
          'Facts are appended to a Facts Stream. A stream has no business state. It has no opening or closing. It does not represent a workflow, a decision lifecycle, or a process state.',
          'At any point in time, additional facts may be declared and appended to the same stream. Horizon records that a relationship was declared and seals it, without interpreting its meaning.',
          'Throughout this process, Horizon does not decide what the fact means. It does not assess correctness, legitimacy, causality, or outcome. All interpretation remains external to Horizon.',
        ],
      },
      chapter2: {
        title: 'Reading a proof – Timeline example',
        intro: 'This section illustrates how Horizon evidence can be examined once facts have been sealed. The example below shows a post-incident timeline, ordered by sealing time (sealed_at).',
        timelineNote: 'This example illustrates one way to examine sealed facts; it does not imply any interpretation beyond what is defined in Proof Semantics.',
        shows: {
          title: 'What the timeline shows:',
          items: [
            'that certain declarations existed,',
            'who declared them (as attributed),',
            'when Horizon sealed them,',
            'that they belong to the same stream.',
          ],
        },
        doesNotShow: {
          title: 'What the timeline does not show:',
          items: [
            'whether the declarations are true,',
            'whether they were authorized,',
            'whether actions occurred as described,',
            'whether one fact caused another,',
            'whether a decision was correct or legitimate.',
          ],
        },
        conclusion: [
          'The timeline does not explain events. It does not reconstruct intent. It does not assign responsibility. It simply exposes sealed facts, in a verifiable order.',
          'Horizon shows what was declared. You draw the conclusions. Any conclusion (operational, legal, or ethical) must be derived outside Horizon, using external context, rules, and judgment.',
        ],
      },
      relationToProofSemantics: {
        title: 'Relationship to Proof Semantics',
        content: 'This document does not alter the meaning of Horizon evidence. The semantic scope and limits of Horizon proofs are defined exclusively in Proof Semantics. If a reader interprets a timeline, a stream, or a proof bundle as asserting intent, correctness, authorization, or responsibility, that interpretation is external to Horizon and not supported by the evidence itself.',
      },
      summary: {
        title: 'Summary',
        content: 'Horizon produces evidence by sealing declared facts. It exposes those facts in a structured, verifiable form. Understanding how Horizon seals and presents facts helps readers examine evidence correctly: without attributing meaning that Horizon does not provide.',
      },
    },
    proofSemantic: {
      title: 'Proof Semantics',
      subtitle: 'What a Sealed Fact Proves - and What It Doesn\'t',
      status: 'Canonical · Public · Reference',
      appliesTo: 'Applies to: All Horizon deployments',
      intro: 'This document defines semantic boundaries of what Horizon evidence technically proves.',
      sections: [
        {
          title: '1. Purpose of This Document',
          content: 'This document defines the semantic scope and limits of Horizon evidence.',
          existsTo: 'It exists to:',
          purposes: [
            'clarify what a sealed fact establishes as evidence,',
            'explicitly delimit what Horizon does not assert,',
            'prevent misinterpretation or requalification of Horizon evidence.',
          ],
          nature: 'Horizon evidence is factual, declarative, and non-interpretive.',
          boundary: 'This document is a semantic responsibility boundary between:',
          parties: [
            'Horizon (integrity of evidence),',
            'and Horizon clients (truth, legitimacy, interpretation).',
          ],
        },
        {
          title: '2. Core Semantic Principle',
          content: 'A Horizon proof establishes the existence of a declaration - nothing more.',
          proves: 'It proves that:',
          provesList: [
            'a declaration was received,',
            'it was sealed at a precise time,',
            'it was attributed as declared,',
            'it belongs to a stream of related facts.',
          ],
          doesNotProve: 'It does not prove intent, legitimacy, correctness, causality, or outcome.',
        },
        {
          title: '3. What a Sealed Fact Proves',
          content: 'A sealed fact proves, and only proves, that:',
          provesList: [
            'a piece of information was declared,',
            'by the actor identified in the fact,',
            'and sealed by Horizon at sealed_at,',
            'without alteration after sealing.',
          ],
          proofIs: 'This proof is:',
          proofProperties: [
            'append-only,',
            'tamper-evident,',
            'independently verifiable.',
          ],
        },
        {
          title: '4. What a Sealed Fact Does NOT Prove',
          content: 'A sealed fact does not prove:',
          doesNotProveList: [
            'that the declaration is true,',
            'that the declaration reflects intent,',
            'that the declaration was authorized,',
            'that an action occurred at the declared time,',
            'that an action occurred at all,',
            'that one fact caused another,',
            'that responsibility or fault exists,',
            'that any policy, rule, or obligation was satisfied.',
          ],
          conclusion: 'Horizon does not infer, compute, or assess meaning.',
        },
        {
          title: '5. Time Semantics',
          intro: 'Horizon assigns a single authoritative time: sealed_at.',
          represents: 'sealed_at represents:',
          representsList: [
            'the moment Horizon sealed the declaration,',
            'the moment from which the fact becomes provable.',
          ],
          doesNotAssert: 'Horizon does not assert:',
          doesNotAssertList: [
            'when an action actually occurred,',
            'when an observation was made,',
            'whether client clocks were synchronized.',
          ],
          clientTimestamps: 'Any client-provided timestamps:',
          clientTimestampsList: [
            'belong to the payload,',
            'are not authoritative,',
            'are not validated or reconciled by Horizon.',
          ],
        },
        {
          title: '6. Actor Attribution Semantics',
          intro: 'The actor field represents declared attribution.',
          horizonDoes: 'Horizon:',
          horizonDoesList: [
            'records attribution as provided through a technical channel (API, email, system integration),',
            'proves the provenance of the declaration via that channel.',
          ],
          doesNotProve: 'Horizon does not prove:',
          doesNotProveList: [
            'the biological identity of a human,',
            'the legitimacy of the actor,',
            'the authority or role associated with the declaration.',
          ],
          responsibility: 'Responsibility for the truth, legitimacy, and authority of a declaration remains with the declaring party.',
        },
        {
          title: '7. Stream Semantics',
          intro: 'A stream is a container of related facts.',
          horizonDoes: 'Horizon:',
          horizonDoesList: [
            'does not define workflow steps,',
            'does not enforce order beyond sealing time,',
            'does not define completion or closure,',
            'does not infer process state.',
          ],
          conclusion: 'Streams are never closed by Horizon. New facts may be appended at any time. Any notion of "process", "decision", or "outcome" is external to Horizon.',
        },
        {
          title: '8. Fact Correlation and Causality',
          intro: 'Relationships between facts within a stream (such as parent references or shared identifiers) are provided by client systems.',
          horizonDoes: 'Horizon:',
          horizonDoesList: [
            'does not infer causality,',
            'does not compute dependency,',
            'does not assert procedural sequence.',
          ],
          conclusion: 'Any perceived sequence, dependency, or workflow is an interpretation external to Horizon and must not be attributed to Horizon itself.',
        },
        {
          title: '9. Incomplete Streams and Silence',
          intro: 'Horizon does not interpret the absence of facts.',
          ifNoFact: 'If no additional fact is appended after a declaration:',
          ifNoFactList: [
            'Horizon does not infer failure,',
            'does not infer success,',
            'does not infer abandonment,',
            'does not infer intent or negligence.',
          ],
          conclusion: 'Silence, delay, or incompleteness are not evidence within Horizon. Interpretation of incomplete streams depends entirely on external context.',
        },
        {
          title: '10. Interpretation Boundary',
          intro: 'All interpretation happens outside Horizon.',
          usage: 'Horizon evidence may be used by humans, organizations, auditors, courts, or regulators.',
          horizonItself: 'Horizon itself:',
          horizonItselfList: [
            'does not interpret,',
            'does not recommend,',
            'does not conclude.',
          ],
        },
        {
          title: '11. Legal and Regulatory Positioning',
          intro: 'Horizon evidence is technical, factual, and neutral.',
          doesNotConstitute: 'It does not constitute:',
          doesNotConstituteList: [
            'a decision,',
            'an authorization,',
            'a sanction,',
            'a policy evaluation,',
            'a compliance assertion.',
          ],
          conclusion: 'Horizon is a witness, not a judge.',
        },
        {
          title: '12. Canonical Summary',
          content: 'Horizon produces evidence of declaration, not evidence of correctness or legitimacy. This principle governs all Horizon proofs.',
        },
        {
          title: '13. What This Document Explicitly Prevents',
          prevents: [
            'Misuse of Horizon as an approval system',
            'Requalification as governance or compliance tooling',
            'Attribution of responsibility to Horizon',
            'Over-interpretation during audits or investigations',
          ],
        },
      ],
      finalNote: 'If a reader concludes that Horizon decided, validated, authorized, or judged anything, then Horizon has been misinterpreted.',
    },
    verification: {
      title: 'Verification Guide',
      subtitle: 'Verifying a Horizon Proof Bundle',
      status: 'Canonical · Public · Reference',
      audience: 'Audience: Auditors · External reviewers · Security teams · Legal experts',
      appliesTo: 'Applies to: All Horizon deployments',
      sections: [
        {
          title: '1. Purpose of This Document',
          content: 'This document explains how Horizon evidence can be verified and what such verification guarantees.',
          defines: 'It defines:',
          definesList: [
            'what a Horizon proof bundle contains,',
            'what is cryptographically verifiable,',
            'how tampering is detected,',
            'and the limits of verification.',
          ],
          conclusion: 'This guide does not explain how Horizon is implemented internally. It explains what can be independently checked.',
        },
        {
          title: '2. What Is a Horizon Proof Bundle',
          content: 'A proof bundle is a verifiable artifact produced by Horizon that packages:',
          packagesList: [
            'a set of sealed facts,',
            'their cryptographic hashes,',
            'their chaining information,',
            'and a Horizon signature.',
          ],
          conclusion: 'A bundle represents the state of a stream at a given point in time. Bundles are immutable once issued.',
        },
        {
          title: '3. Contents of a Proof Bundle',
          intro: 'A Horizon proof bundle includes, at minimum:',
          minimumList: [
            'bundle_id',
            'bundle_version',
            'a list or manifest of facts',
            'the head_hash of the stream at bundle time',
            'a cryptographic signature',
            'a reference to the signing key (key_id or equivalent)',
          ],
          optional: 'Optionally, a bundle may reference:',
          optionalList: [
            'attachments manifests,',
            'external evidence objects.',
          ],
        },
        {
          title: '4. What Verification Checks',
          intro: 'Verification of a Horizon proof bundle consists of four independent checks.',
          subsections: [
            {
              title: '4.1 Signature Verification',
              content: 'The bundle signature is verified using the public key corresponding to the declared signing key.',
              establishes: 'This establishes that:',
              establishesList: [
                'the bundle was produced by Horizon,',
                'the bundle content has not been altered since signing.',
              ],
            },
            {
              title: '4.2 Fact Hash Verification',
              intro: 'For each fact in the bundle:',
              steps: [
                'the fact payload is hashed,',
                'the computed hash is compared to the stored fact_hash.',
              ],
              conclusion: 'This establishes that each fact has not been modified after sealing.',
            },
            {
              title: '4.3 Hash Chain Verification',
              intro: 'Facts are linked using a hash chain (prev_hash → fact_hash).',
              confirms: 'Verification recomputes the chain and confirms that:',
              confirmsList: [
                'each fact correctly references the previous one,',
                'the final computed hash matches the bundle head_hash.',
              ],
              establishes: 'This establishes:',
              establishesList: [
                'append-only ordering,',
                'tamper evidence across the entire stream segment.',
              ],
            },
            {
              title: '4.4 Bundle Consistency Verification',
              intro: 'The verifier checks that:',
              checksList: [
                'the bundle references the correct stream,',
                'the set of facts is complete up to head_hash,',
                'no fact is missing, reordered, or duplicated.',
              ],
            },
          ],
        },
        {
          title: '5. What Verification Proves',
          intro: 'Successful verification proves that:',
          provesList: [
            'the bundle was produced by Horizon,',
            'the included facts were sealed by Horizon,',
            'the facts have not been altered since sealing,',
            'the ordering of facts is append-only and intact.',
          ],
          conclusion: 'Verification establishes integrity and authenticity of the evidence.',
        },
        {
          title: '6. What Verification Does NOT Prove',
          intro: 'Verification does not prove:',
          doesNotProveList: [
            'that the declared facts are true,',
            'that the declared actors are legitimate,',
            'that actions occurred as described,',
            'that timestamps reflect real-world occurrence,',
            'that the stream is complete,',
            'that no other facts exist outside the bundle.',
          ],
          conclusion: 'Verification validates evidence integrity, not evidence meaning.',
        },
        {
          title: '7. Verification Scope and Independence',
          intro: 'Verification can be performed:',
          performedBy: [
            'by Horizon systems,',
            'by client systems,',
            'by third-party auditors,',
            'by regulators or courts.',
          ],
          noAccess: 'No access to Horizon internal systems is required, provided that:',
          noAccessList: [
            'the proof bundle,',
            'and the corresponding public verification material are available.',
          ],
        },
        {
          title: '8. Handling of Incomplete or Partial Bundles',
          intro: 'A proof bundle reflects the stream up to a specific point in time.',
          absence: 'The absence of later facts:',
          absenceList: [
            'does not indicate failure,',
            'does not indicate success,',
            'does not indicate abandonment.',
          ],
          conclusion: 'Verification does not infer completeness.',
        },
        {
          title: '9. Key Management and Trust Assumptions',
          assumes: 'Verification assumes:',
          assumesList: [
            'the authenticity of the Horizon public signing key,',
            'correct key distribution or trust anchoring.',
          ],
          doesNot: 'Verification does not:',
          doesNotList: [
            'assess key governance,',
            'assess Horizon operational security,',
            'assess client security posture.',
          ],
        },
        {
          title: '10. Legal Interpretation Boundary',
          intro: 'Verification establishes technical integrity, not legal qualification.',
          bundleIs: 'A verified bundle:',
          bundleIsList: [
            'is not a decision,',
            'is not an authorization,',
            'is not a compliance assertion,',
            'is not a determination of responsibility.',
          ],
          conclusion: 'Interpretation remains the responsibility of organizations, auditors, courts, or regulators.',
        },
        {
          title: '11. Canonical Summary',
          content: 'Verification confirms that Horizon evidence is intact and authentic. It does not confirm what the evidence means.',
        },
        {
          title: '12. Status and Stability',
          content: 'This document defines the stable verification semantics of Horizon. Any future evolution of Horizon must remain consistent with the guarantees described here.',
        },
      ],
    },
    final: {
      title: 'Stop reconstructing incidents. Seal them.',
    },
    contact: {
      title: 'Discuss your use case',
      intro: 'This briefing is intended for leaders responsible for Security (CISO), Risk, Compliance, and Risk Technology in regulated environments.',
      introDetail: 'The purpose is to discuss evidence requirements, post-incident scrutiny, and integration constraints—not to sell a workflow or a tool.',
      backToHome: 'Back to home',
      scheduleTitle: 'Schedule a Briefing',
      scheduleDescription: 'Book a 30-minute technical or risk briefing with our team.',
      scheduleScope: 'Scope',
      scheduleScopeItems: ['decision evidence', 'post-incident proof', 'audit and verification'],
      scheduleAudience: 'Audience',
      scheduleAudienceItems: ['CISO', 'Risk', 'Legal', 'CTO'],
      scheduleFormat: 'Format',
      scheduleFormatValue: 'technical and factual',
      scheduleButton: 'Schedule a briefing',
      emailTitle: 'Send an Email',
      emailDescription: 'For general inquiries or if you prefer written communication.',
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
      overview: 'Vue d\'ensemble',
      theProblem: 'Le Problème',
      theShift: 'Le Déplacement',
      horizon: 'Horizon',
      proof: 'Preuve',
      proofModel: 'Modèle de Preuve',
      proofSemantic: 'Sémantique de la Preuve',
      quickStart: 'Démarrage rapide',
      firstSeal: 'Premier Scellement',
      verification: 'Vérification',
      understandingProof: 'Comprendre les preuves',
      documentation: 'Documentation',
      talkToUs: 'Contact',
      contact: 'Contact',
      menu: 'Menu',
    },
    footer: {
      product: 'Produit',
      expertise: 'Expertise',
      company: 'Entreprise',
      home: 'Accueil',
      copyright: '© 2026 Horizon par Asplenz. Tous droits réservés.',
    },
    // Common CTAs
    common: {
      cta_primary: 'Voir comment les faits sont scellés',
      cta_secondary: 'Voir l\'architecture',
      cta_view_timeline: 'Voir une timeline post-incident',
      cta_hero: 'Comprendre comment Horizon fonctionne',
      cta_request_overview: 'Demander une présentation technique',
      cta_discuss_use_case: 'Discuter de votre cas d\'usage',
    },
    // Category framing
    categoryFraming: {
      definition: 'Horizon est une Infrastructure de Preuve Décisionnelle.',
      clarification: 'Il produit des faits vérifiables sur les décisions, sans les interpréter, les imposer ou les gouverner.',
    },
    theProblem: {
      title: 'The Problem',
      sections: [
        {
          title: 'Decisions live everywhere, and nowhere',
          content: 'Aujourd\'hui, les décisions des entreprises ne vivent nulle part en particulier. Elles apparaissent par fragments, disséminées dans une multitude d\'outils qui n\'ont jamais été conçus pour les contenir. Une discussion commence dans Slack, se prolonge par email, se précise à l\'oral lors d\'une réunion, se tranche au téléphone, puis laisse parfois une trace indirecte dans un ticket Jira ou un formulaire ServiceNow. L\'action, elle, s\'exécute ailleurs encore, dans un terminal, une console cloud ou un système automatisé, pendant que les applications consignent ce qu\'elles peuvent dans des fichiers de logs pensés pour le diagnostic, non pour la preuve. Sur le moment, cette dispersion n\'est pas un problème. Les équipes se comprennent, la décision circule, l\'organisation avance.',
        },
        {
          title: 'The question always comes later',
          content: 'La difficulté n\'apparaît que plus tard, lorsque l\'on cherche à établir ce qui s\'est réellement passé. À ce moment-là, il n\'existe aucun point unique vers lequel se tourner. Il faut reconstruire. On rassemble ce qui reste : des messages extraits de Slack, des captures d\'écran jointes à des emails, des PDF exportés depuis des outils métiers, des tickets modifiés plusieurs fois, des logs techniques difficiles à interpréter hors de leur contexte initial. Très vite, on s\'aperçoit que cette matière est incomplète. Certaines discussions n\'ont jamais été écrites, certains échanges ont eu lieu à l\'oral, certains messages ont été supprimés, certains logs ont été purgés, certaines personnes ne sont plus là. Ce qui manque ne peut plus être récupéré.',
        },
        {
          title: 'Reconstruction replaces proof',
          content: 'Face à ces absences, la reconstruction devient inévitablement interprétative. On comble les vides avec des souvenirs, des intentions supposées, des raisonnements formulés après coup. Une histoire cohérente se forme, souvent de bonne foi, parfois sous contrainte, toujours influencée par le contexte dans lequel la question est posée. Ce récit peut sembler solide, mais il ne constitue plus une preuve. Les éléments produits - captures d\'écran, exports PDF, emails isolés - ne portent pas leur propre intégrité. Ils ne permettent pas à un tiers indépendant de vérifier qu\'ils n\'ont pas été modifiés, sélectionnés ou sortis de leur contexte. Ils demandent à être crus, et dès qu\'une preuve demande à être crue, elle cesse d\'être opposable.',
        },
        {
          title: 'Time works against certainty',
          content: 'Avec le temps, cette fragilité ne fait que s\'accentuer. Les outils évoluent, les formats changent, les systèmes sont mis à jour, les politiques de rétention effacent ce qui n\'était pas destiné à durer. Les souvenirs s\'altèrent, les certitudes se déplacent. Six mois plus tard, parfois un an plus tard, la décision n\'existe plus que sous la forme d\'un récit que l\'organisation est capable de produire sur elle-même. Ce récit peut être honnête, précis, détaillé, mais il reste vulnérable au doute, parce qu\'il repose sur une reconstruction tardive d\'un réel qui n\'a jamais été capturé.',
        },
        {
          title: 'Tools were never designed for proof',
          content: 'Le problème n\'est pas que les entreprises manquent d\'outils. Au contraire, elles en utilisent trop, chacun optimisé pour une fonction particulière. Slack facilite la discussion, l\'email structure la communication, Jira organise le travail, ServiceNow encadre les processus, les systèmes techniques exécutent, les logs observent. Mais aucun de ces outils n\'a pour vocation de figer l\'instant où une décision devient irréversible, ni d\'attester qu\'une autorité a déclaré quelque chose à un moment précis. La décision traverse les systèmes sans jamais s\'y inscrire pleinement. Elle existe dans l\'action, mais pas comme un fait autonome, vérifiable indépendamment.',
        },
        {
          title: 'Explaining is not proving',
          content: 'Lorsque la question est finalement posée - souvent bien après les événements - l\'organisation ne peut plus montrer ce qui s\'est passé. Elle peut seulement l\'expliquer. Et expliquer, aussi rigoureusement que possible, n\'est jamais équivalent à prouver. Ce n\'est pas un problème de discipline, ni de méthode, ni de bonne volonté. C\'est un problème structurel. Tant qu\'il restera invisible, les organisations continueront de croire qu\'elles pourront expliquer plus tard, pour découvrir, trop tard, qu\'expliquer n\'est pas prouver.',
        },
      ],
      closingLine: 'Ce qui manque n\'est pas un nouvel outil, mais un moyen de préserver la réalité avant qu\'elle ne disparaisse.',
    },
    theShift: {
      title: 'Le Déplacement',
      sections: [
        {
          title: 'Le réflexe d\'améliorer l\'existant',
          content: 'Face à la fragilité de la preuve, la réaction naturelle des organisations est presque toujours la même. On cherche à améliorer ce qui existe déjà. On ajoute des champs obligatoires, on renforce les workflows de validation, on conserve les logs plus longtemps, on demande aux équipes d\'écrire davantage. L\'effort est sincère, souvent coûteux, parfois même efficace sur le court terme. Pourtant, le problème ne disparaît pas.',
        },
        {
          title: 'Plus de structure ne crée pas de preuve',
          content: 'Ces réponses reposent sur une hypothèse implicite : si les outils sont suffisamment bien organisés, la preuve finira par émerger. Or l\'organisation ne produit pas de preuve. Elle produit de la cohérence. Les workflows imposent un chemin, mais ne garantissent pas que la décision réelle a été prise dans ce chemin. Les logs décrivent ce que les systèmes font, pas ce que les autorités déclarent. La documentation formalise des récits, presque toujours après coup. Dans tous les cas, la preuve reste dérivée.',
        },
        {
          title: 'Une catégorie entière manquante',
          content: 'Ce qui manque n\'est pas une règle supplémentaire, ni un outil de plus, ni une meilleure discipline humaine. Il manque une catégorie entière d\'infrastructure : une infrastructure de preuve des décisions. Son rôle n\'est pas de décider, ni de gouverner, ni de contrôler. Son rôle est de capturer l\'existence d\'un fait décisionnel au moment précis où il se produit, avant toute interprétation, avant toute reconstruction. Tant que cette catégorie n\'existe pas, toute tentative de preuve repose sur des traces secondaires, fragiles par nature.',
        },
        {
          title: 'De la reconstruction à l\'ancrage',
          content: 'Le déplacement est là. Il ne s\'agit plus de reconstruire après coup, ni d\'analyser plus finement, ni de gouverner plus strictement. Il s\'agit de reconnaître que certains faits doivent être ancrés au moment où ils existent, avant que le temps, les systèmes et les interprétations ne les altèrent. La preuve ne se déduit pas. Elle s\'ancre, ou elle se perd.',
        },
        {
          title: 'Une frontière claire',
          content: 'À partir de ce constat, une frontière devient nette. D\'un côté, les systèmes qui décident, exécutent, communiquent et analysent. De l\'autre, une infrastructure d\'ancrage factuel, neutre et indépendante, dont le rôle n\'est pas d\'intervenir, mais d\'attester. Ce déplacement ne rend pas les décisions meilleures. Il rend leur existence moins discutable.',
        },
        {
          title: 'Ce que ce déplacement rend possible',
          content: 'Une fois ce déplacement opéré, la question de la preuve change de nature. Elle cesse d\'être un exercice fragile de justification pour devenir un problème de vérification. Non pas parce que les organisations contrôlent mieux, mais parce qu\'elles disposent enfin de faits qui n\'ont pas besoin d\'être racontés.\n\nCe déplacement transforme la question de « Peut-on reconstruire ce qui s\'est passé ? » en « Peut-on vérifier indépendamment ce qui a été capturé ? »',
        },
      ],
      closingLine: 'Sans ancrage au moment de la déclaration, la vérification reste un exercice d\'interprétation.',
      horizonLink: 'Découvrir comment Horizon réalise ce déplacement',
    },
    horizonAbout: {
      title: 'Horizon',
      subtitle: 'Une infrastructure de preuve',
      sections: [
        {
          title: 'Une infrastructure de preuve',
          content: 'Horizon est une infrastructure de preuve. Des faits vérifiables pour les décisions qui comptent.\n\nElle existe pour une raison simple : permettre à une organisation de s\'appuyer sur des faits, et non sur des récits, lorsqu\'une décision critique est remise en question.',
        },
        {
          title: 'En dehors du système décisionnel',
          content: 'Horizon n\'aide pas à décider. Il ne contrôle pas l\'action. Il n\'impose aucun processus. Il se tient volontairement en dehors du système décisionnel.\n\nCette posture n\'est pas un manque, mais une condition. Dès lors qu\'un système valide, autorise ou bloque, il devient partie prenante de la décision. La preuve qu\'il produit cesse alors d\'être neutre.',
        },
        {
          title: 'Ce qu\'Horizon enregistre',
          content: 'Ce qu\'Horizon capture, ce sont des faits déclarés : qu\'une intention a été exprimée, qu\'une information a été transmise, qu\'un résultat a été observé. Il n\'en déduit rien. Il ne qualifie rien.\n\nIl garantit uniquement que ces faits ont existé, à un moment donné, et qu\'ils peuvent être vérifiés indépendamment.',
        },
        {
          title: 'Pas de workflow, pas d\'interface pour décider',
          content: 'Horizon ne cherche pas à remplacer les outils existants. Les décisions continuent de naître là où elles naissent réellement : dans des échanges humains, des systèmes métiers, des contextes d\'urgence ou d\'exception. Horizon s\'adapte à ces lieux sans demander aux décideurs de changer leurs habitudes ni d\'apprendre une nouvelle interface.',
        },
        {
          title: 'Invisible quand cela compte',
          content: 'Cette discrétion est essentielle. Horizon n\'est pas une destination où l\'on va travailler. C\'est une couche silencieuse, présente au moment où les faits s\'expriment, invisible pour l\'opérationnel, mais pleinement accessible après coup pour ceux qui doivent établir ce qui s\'est réellement passé.',
        },
        {
          title: 'Des faits, pas des explications',
          content: 'Ce que fournit Horizon n\'est ni une analyse, ni une explication, ni une justification. C\'est une matière factuelle, destinée à être examinée par d\'autres : auditeurs, équipes risque, juristes, autorités de contrôle. Toute interprétation appartient à ces instances, hors du système.',
        },
        {
          title: 'Ce qu\'Horizon ne promet pas',
          content: 'Horizon ne rend pas les décisions meilleures. Il ne prévient pas les erreurs. Il ne garantit pas que les règles ont été respectées.\n\nIl garantit quelque chose de plus fondamental : que certains faits existent, qu\'ils sont datés, et qu\'ils ne peuvent pas être niés a posteriori.',
        },
        {
          title: 'Pourquoi il existe',
          content: 'Dans un monde où les décisions sont rapides, distribuées et contestables, Horizon ne simplifie pas la réalité. Il la rend vérifiable.',
        },
      ],
      proofLink: 'Pour la définition précise de ce que signifie la preuve, voir Sémantique de la Preuve.',
    },
    howHorizonSeals: {
      title: 'Comment Horizon scelle les faits',
      steps: [
        'Un fait est déclaré par un acteur',
        'Horizon traite la déclaration',
        'Le fait est hashé et signé',
        'Un timestamp sealed_at est attribué',
        'Le fait est ajouté à une chaîne immuable',
      ],
      exampleTitle: 'Exemple d\'un fait scellé',
      closing: [
        'Horizon ne décide pas ce que ce fait signifie.',
        'Il prouve seulement qu\'il a été déclaré et scellé à ce moment.',
      ],
    },
    postIncidentTimeline: {
      title: 'Timeline post-incident',
      subtitle: 'Timeline ordonnée par temps de scellement (sealed_at)',
      columns: ['Heure', 'Acteur', 'Payload', 'Scellé'],
      bundleLabel: 'Proof Bundle',
      bundleFacts: 'faits',
      bundleSigned: 'Signé',
      closing: 'Horizon montre ce qui a été déclaré. Vous tirez les conclusions.',
    },
    hero: {
      headline: 'Horizon scelle les faits déclarés.',
      headlineSubtext: 'Déclaré par des humains ou des systèmes. Scellé sans interprétation.',
      subheadline: 'Horizon est une infrastructure de preuve neutre et append-only qui capture des faits au moment où ils sont déclarés, pour qu\'ils puissent être vérifiés indépendamment plus tard.',
      bullets: [
        'Aucun workflow. Aucune approbation. Aucune friction opérationnelle.',
      ],
      image: 'hero.png',
    },
    whatHorizonRecords: {
      title: 'Ce que Horizon enregistre',
      paragraphs: [
        'Horizon enregistre des faits déclarés.\nDes faits déclarés par des humains ou par des systèmes.',
        'Des faits enregistrés tels qu\'ils sont exprimés, sans interprétation ni jugement.\nHorizon ne déduit pas d\'intention, n\'évalue pas la validité et ne dérive aucun sens.',
        'Il enregistre que quelque chose a été déclaré, par qui, et quand.\nCe qui est enregistré est indépendant des workflows, des outils et des résultats.',
        'Il existe en tant que fait : rien de plus, rien de moins.',
      ],
    },
    problem: {
      title: 'Quand le contexte disparaît et que les faits sont contestés',
      paragraphs: [
        'Lorsqu\'un événement critique survient (opérationnel, technique ou humain : incidents, pannes, signalements, exceptions, déviations, crises), les décisions sont prises sous pression. Les canaux deviennent informels. Les approbations sont verbales. L\'action est immédiate, souvent avant même que quoi que ce soit n\'ait été consigné. À cet instant, l\'urgence prime sur la traçabilité, et personne ne pense à la preuve.',
        'Des semaines ou des mois plus tard (audits, litiges, enquêtes), les questions arrivent.',
        'Qui savait quoi, et quand ? Qu\'est-ce qui a été réellement déclaré, et par qui ? Quelles décisions ont été prises dans l\'urgence, et sur la base de quelles informations ? Quelles preuves subsistent qui puissent être examinées de manière indépendante ?',
        'À ce stade, la réalité n\'existe plus en tant qu\'ensemble de faits. Elle doit être reconstruite.',
        'On fouille les échanges, on extrait des logs, on rassemble des témoignages et des captures d\'écran. La mémoire humaine comble les vides. Un récit cohérent finit par émerger, souvent honnête, parfois assuré, mais fragile par nature.',
        'Cette reconstruction ne peut être vérifiée indépendamment. Elle dépend de ce qu\'il reste, de ce qui a été conservé, et de la perception de ceux qui sont encore là pour l\'expliquer. Avec le temps, ce qui ne peut être prouvé devient débattable. Ce qui devient débattable finit par être contesté.',
        'C\'est à ce moment que les organisations réalisent que le problème n\'est pas ce qu\'elles ont décidé, mais que les faits eux-mêmes n\'ont jamais été capturés au moment où ils existaient.',
      ],
    },
    horizonDoesNot: {
      title: 'Ce que Horizon ne fait pas',
      paragraphs: [
        'Horizon ne décide pas, n\'approuve pas et n\'impose rien.',
        'Il n\'exécute pas de workflows, ne bloque pas d\'actions et ne juge pas les résultats.',
        'Ce n\'est pas un SIEM, un SOAR, une plateforme d\'IR, un moteur de conformité ou un système de décision.',
        'Horizon enregistre des déclarations et les scelle en tant que faits.',
        'Toute l\'interprétation se fait ailleurs.',
      ],
    },
    whatThisEnables: {
      title: 'Ce que cela permet',
      paragraphs: [
        'En scellant les faits au moment où ils sont déclarés, Horizon rend l\'analyse post-incident possible sans reconstruction.',
        'Il permet aux organisations d\'établir ce qui a été déclaré, par qui, et quand : même lorsque les systèmes ont changé et que le contexte a disparu.',
        'Horizon ne lève pas l\'ambiguïté.',
        'Il préserve le terrain factuel sur lequel l\'ambiguïté peut être examinée.',
      ],
    },
    indexFoundations: {
      title: 'Fondements',
      links: [
        { label: 'Le Problème', description: 'Pourquoi la preuve post-incident échoue', href: '/problem' },
        { label: 'Le Déplacement', description: 'De la reconstruction aux faits scellés', href: '/shift' },
        { label: 'Horizon', description: 'L\'infrastructure de preuve', href: '/horizon' },
        { label: 'Preuve', description: 'Comment fonctionne la preuve Horizon', href: '/proof-semantic' },
      ],
    },
    indexContactCTA: {
      title: 'Contact',
      cta: 'Discuter d\'une situation réelle',
    },
    howHorizonWorks: {
      title: 'Comment Horizon scelle les faits',
      image: 'how.png',
      intro: 'Un fait est simplement quelque chose de déclaré par un acteur identifié, à un moment donné.',
      whenDeclared: {
        intro: 'Quand un fait est déclaré, pendant une crise, une exception ou des opérations normales, Horizon :',
        bullets: [
          'attribue un timestamp autoritatif unique (sealed_at),',
          'stocke le contenu comme donnée entièrement opaque,',
          'le relie cryptographiquement au fait précédent.',
        ],
      },
      factsStream: {
        intro: 'Les faits sont ajoutés à un Facts Stream :',
        bullets: [
          'append-only par construction,',
          'sans état métier,',
          'sans ouverture ni fermeture,',
          'et sans causalité imposée.',
        ],
      },
      evaluations: {
        intro: 'Plus tard, des faits supplémentaires peuvent être déclarés comme évaluations de faits précédents.',
        horizonDoes: 'Horizon :',
        bullets: [
          'enregistre la relation déclarée,',
          'scelle l\'évaluation,',
          'n\'interprète pas sa signification.',
        ],
        note: 'Conformité, légitimité, responsabilité ou faute sont toujours externes à Horizon.',
      },
      footer: 'Horizon produit des preuves structurées et vérifiables. Sans produire de jugement.',
    },
    postIncident: {
      title: 'Conçu pour l\'examen, quel que soit le moment.',
      image: 'timeline.png',
      intro: 'Après un incident, Horizon permet de montrer :',
      bullets: [
        'ce qui a été déclaré,',
        'par qui,',
        'quand Horizon en a eu la preuve,',
        'dans quel enchaînement factuel,',
        'et quelles évaluations ont été déclarées ensuite.',
      ],
      footer: 'Sans interpréter des logs. Sans reconstruire une narration.',
    },
    whyCISOs: {
      title: 'Pourquoi les RSSI font confiance à Horizon',
      bullets: [
        'Les incidents échappent aux workflows idéaux',
        'La réalité est jugée après coup',
        'L\'exposition personnelle et organisationnelle est réelle',
        'Les logs sont nécessaires mais insuffisants',
      ],
      footer: 'Horizon fournit une preuve indépendante, pas des explications.',
    },
    whoElse: {
      title: 'Qui d\'autre compte sur Horizon ?',
      subtitle: 'Horizon aligne sécurité, ingénierie, risque et juridique autour des faits.',
      personas: [
        {
          name: 'Engineering / CTO',
          description: 'Append-only, API, non-intrusif, aucun impact runtime.',
        },
        {
          name: 'Risk',
          description: 'Traçabilité des exceptions, continuité, clarté après coup.',
        },
        {
          name: 'Legal',
          description: 'Pas de qualification, pas de décision, faits neutres et opposables.',
        },
      ],
    },
    whatHorizonIsNot: {
      title: 'Ce que Horizon n\'est pas',
      bullets: [
        'Pas un SIEM',
        'Pas un SOAR',
        'Pas une plateforme IR',
        'Pas un moteur de conformité',
        'Pas un système de décision',
      ],
      footer: 'Horizon les complète en enregistrant ce qu\'ils ne peuvent pas garantir.',
    },
    signature: {
      one_liner: 'Horizon fournit une preuve incontestable de ce qui a été déclaré pendant un incident de sécurité, par qui, et quand cela a été scellé.',
      short: 'Le system of record des faits d\'incident.',
    },
    proofModel: {
      title: 'Horizon Modèle de Preuve',
      subtitle: 'Infrastructure de Preuve de Décision',
      whatIs: {
        title: '1. Ce qu\'est Horizon',
        definition: 'Horizon est une Infrastructure de Preuve de Décision.',
        description: 'Il produit des preuves indépendantes, en ajout uniquement (append-only) et vérifiables, attestant que des faits liés à une décision ont été déclarés par un acteur identifié et scellés à un instant précis.',
        purpose: 'Horizon existe pour remplacer les reconstructions post-incident fragiles par des enregistrements factuels scellés, vérifiables de manière indépendante.',
        designedFor: 'Horizon est conçu pour les situations où les décisions sont :',
        situations: [
          'urgentes ou exceptionnelles,',
          'humaines ou semi-humaines,',
          'jugées après coup (revue d\'incident, audit, enquête réglementaire).',
        ],
      },
      whatIsNot: {
        title: '2. Ce qu\'Horizon n\'est pas',
        intro: 'Horizon est strictement passif.',
        notLabel: 'Il n\'est pas :',
        notList: [
          'un moteur de décision,',
          'un système de workflow ou d\'approbation,',
          'un outil de gouvernance ou de conformité,',
          'un contrôle de sécurité,',
          'un système de logging ou d\'observabilité.',
        ],
        doesNotLabel: 'Horizon ne fait pas :',
        doesNotList: [
          'décider,',
          'approuver ou rejeter,',
          'bloquer ou autoriser,',
          'appliquer des règles,',
          'interpréter le sens,',
          'attribuer des responsabilités.',
        ],
        conclusion: 'Ces absences sont des garanties délibérées, et non des fonctionnalités manquantes.',
      },
      proofModelSection: {
        title: '3. Le modèle de preuve Append-Only',
        intro: 'Horizon repose sur un modèle simple et immuable composé de Flux (Streams) et de Faits (Facts).',
        stream: {
          title: 'Flux (Stream)',
          description: 'Un Flux regroupe une séquence de faits liés dans le temps.',
          points: [
            'Les Flux ne sont jamais fermés par Horizon.',
            'De nouveaux faits peuvent être ajoutés à tout moment, même longtemps après un incident.',
            'Toute notion de « complétion » ou de « fin de workflow » est externe à Horizon.',
          ],
        },
        fact: {
          title: 'Fait (Fact)',
          description: 'Un Fait est une information déclarée, scellée par Horizon.',
          includesLabel: 'Chaque fait inclut :',
          includes: [
            'un acteur déclaré,',
            'une charge utile (payload) définie par le client (opaque pour Horizon),',
            'un hachage cryptographique,',
            'une signature,',
            'un horodatage attribué par Horizon.',
          ],
          areLabel: 'Les Faits sont :',
          are: [
            'en ajout uniquement (append-only),',
            'immuables,',
            'chaînés cryptographiquement.',
          ],
          conclusion: 'Horizon ne modifie ni ne réordonne jamais les faits une fois qu\'ils sont scellés.',
        },
      },
      timeSemantics: {
        title: '4. Sémantique temporelle : sealed_at',
        intro: 'Horizon attribue une heure unique et autoritaire à chaque fait : sealed_at.',
        representsLabel: 'sealed_at représente :',
        represents: [
          'l\'instant où Horizon a reçu et scellé la déclaration,',
          'le moment à partir duquel le fait devient prouvable.',
        ],
        doesNotAssertLabel: 'Horizon ne certifie pas :',
        doesNotAssert: [
          'le moment où une action a réellement eu lieu,',
          'le moment où une observation a été faite,',
          'la véracité des horodatages déclarés par les clients.',
        ],
        conclusion: 'Toute information temporelle fournie par le client appartient à la payload et n\'est pas considérée comme faisant autorité.',
      },
      neutrality: {
        title: '5. Neutralité et non-interprétation',
        intro: 'Horizon est intentionnellement neutre.',
        doesNotInferLabel: 'Il n\'induit aucune :',
        doesNotInfer: [
          'intention,',
          'causalité,',
          'autorisation,',
          'responsabilité,',
          'exactitude.',
        ],
        records: 'Horizon enregistre qu\'une chose a été déclarée, et non sa signification.',
        interpretation: 'Toute interprétation, jugement ou qualification intervient en dehors d\'Horizon, par des humains, des organisations ou des régulateurs.',
        ensuresLabel: 'Cette neutralité garantit qu\'Horizon ne peut être requalifié en :',
        ensures: [
          'système de décision,',
          'système d\'autorisation,',
          'outil disciplinaire ou de gouvernance.',
        ],
      },
      whatProves: {
        title: '6. Ce qu\'Horizon prouve',
        intro: 'Horizon peut produire la preuve vérifiable que :',
        proves: [
          'un fait a été déclaré,',
          'par un acteur déclaré,',
          'à un moment de scellement précis,',
          'au sein d\'un flux donné de faits liés,',
          'sans altération après le scellement.',
        ],
        proofIsLabel: 'Cette preuve est :',
        proofIs: [
          'infalsifiable,',
          'vérifiable indépendamment.',
        ],
      },
      whatNeverProves: {
        title: '7. Ce qu\'Horizon ne prouve jamais',
        intro: 'Horizon ne prouve pas :',
        neverProves: [
          'qu\'une décision était correcte,',
          'qu\'une décision était autorisée,',
          'qu\'une action aurait dû être entreprise,',
          'qu\'une action a réellement eu lieu à une heure donnée dans le monde réel,',
          'qu\'un fait a causé un autre fait,',
          'que la responsabilité ou la faute est établie.',
        ],
        conclusion: 'Horizon fournit une preuve de déclaration, et non une preuve de légitimité, d\'intention ou de justesse du résultat.',
      },
      positioning: {
        title: '8. Résumé du positionnement',
        blackBox: 'Horizon est la boîte noire des décisions critiques.',
        doesNot: [
          'Il ne pilote pas l\'action.',
          'Il n\'explique pas le comportement.',
          'Il ne juge pas les résultats.',
        ],
        guarantee: 'Il garantit que les faits existent, sont scellés et peuvent être vérifiés lorsque l\'examen commence.',
      },
      canonical: {
        title: 'Définition Canonique (Référence)',
        definition: 'Horizon est une Infrastructure de Preuve de Décision : une infrastructure indépendante qui scelle des faits vérifiables liés aux décisions, sans les interpréter, les imposer ou les gouverner.',
      },
      status: 'Canonique · Public · Stable · Version de référence',
    },
    quickStart: {
      title: 'Premier Scellement',
      subtitle: 'Sceller un fait en 5 minutes',
      audience: 'Audience : CTO · Staff Engineer · SRE',
      disclaimer: 'Cette page montre comment sceller un fait techniquement. Elle n\'explique pas comment interpréter sa signification.',
      oneEndpoint: {
        title: 'Un seul point de terminaison',
        code: 'POST /streams/{stream_id}/facts\nContent-Type: application/json',
        note: 'Un flux est identifié par stream_id, fourni par le client dans l\'URL. Si aucun flux avec cet ID n\'existe, Horizon le crée implicitement lors du scellement du premier fait.',
        clarification: 'Le seul identifiant que vous gérez est stream_id ; Horizon n\'impose aucune sémantique métier sur celui-ci.',
      },
      oneRequest: {
        title: 'Une seule requête',
        note: 'Dans les déploiements en production, le tenant_id est généralement dérivé du contexte d\'authentification plutôt que fourni dans la charge utile.',
        clarification: 'Votre charge utile est opaque pour Horizon. Elle est enregistrée exactement telle que fournie.',
      },
      oneResponse: {
        title: 'Une seule réponse',
        clarification: 'Les champs comme fact_hash et prev_hash servent à l\'intégrité et à la vérification, pas à la logique métier.',
      },
      whatHappened: {
        title: 'Ce qu\'il s\'est passé',
        steps: [
          'Horizon a attribué sealed_at_ms (horodatage faisant autorité)',
          'Horizon a calculé fact_hash à partir d\'une représentation déterministe du fait',
          'Horizon a lié le fait au précédent via prev_hash',
          'Horizon a stocké le fait (en ajout uniquement / append-only)',
        ],
        note: 'Horizon n\'a pas interprété custom_payload. Ce sont vos données.',
        verificationLink: 'Voir Vérification pour apprendre à vérifier la chaîne de manière indépendante.',
      },
      idempotency: {
        title: 'Idempotence',
        intro: 'Ajoutez client_ref pour rendre la requête idempotente :',
        result: 'Même client_ref → même fait retourné. Pas de double scellement.',
        clarification: 'L\'idempotence ne modifie pas la preuve. Elle empêche uniquement la duplication.',
      },
      storageGuarantees: {
        title: 'Garanties de stockage',
        rows: [
          { property: 'Ajout uniquement', guarantee: 'Les faits ne peuvent être ni modifiés ni supprimés' },
          { property: 'Chaîne de hachage', guarantee: 'Chaque fait est lié au précédent via prev_hash' },
          { property: 'Détection d\'altération', guarantee: 'Recalcul des hachages pour détecter toute modification' },
          { property: 'Isolation des tenants', guarantee: 'Les faits sont cloisonnés par tenant_id' },
          { property: 'Autorité de preuve', guarantee: 'sealed_at_ms est attribué par Horizon' },
        ],
        clarification: 'Ces propriétés sont garanties même si le système client est compromis, car toute modification est détectable.',
      },
      whatHorizonDoesNot: {
        title: 'Ce qu\'Horizon ne fait pas',
        items: [
          { label: 'Aucune interprétation', description: 'custom_payload est opaque' },
          { label: 'Aucun workflow', description: 'Pas d\'états, pas de transitions, pas d\'approbations' },
          { label: 'Aucune validation', description: 'Votre charge utile, votre schéma' },
          { label: 'Aucune logique métier', description: 'Scelle les faits, rien d\'autre' },
        ],
        proofSemanticsLink: 'Pour la frontière sémantique de ce qu\'un fait scellé prouve et ne prouve pas, voir Sémantique de la Preuve.',
      },
      verifyChain: {
        title: 'Vérifier l\'intégrité de la chaîne',
        code: 'POST /streams/{stream_id}/verify',
        result: 'Retourne { "valid": true } si la chaîne de hachage est intacte.',
        note: 'La vérification recalcule les hachages et les signatures. Elle n\'interprète pas les faits et ne se prononce pas sur leur exactitude.',
        clarification: 'Les résultats de vérification attestent uniquement que la séquence enregistrée n\'a pas été altérée.',
      },
    },
    understandingProof: {
      title: 'Comprendre les preuves Horizon',
      status: 'Informatif · Public',
      purpose: 'Expliquer comment les preuves Horizon sont produites et comment elles peuvent être lues — avec un exemple concret — sans en redéfinir le sens.',
      intro: [
        'Ce document complète Proof Semantics.',
        'Il ne redéfinit pas la signification d\'une preuve Horizon.',
        'Il explique comment Horizon produit des preuves et comment ces preuves peuvent être examinées.',
      ],
      chapter1: {
        title: 'Le scellement – Comment Horizon scelle les faits',
        paragraphs: [
          'Un fait dans Horizon est simplement une chose déclarée par un acteur identifié, à un moment donné. Lorsqu\'un fait est déclaré (pendant une crise, une exception ou des opérations normales), Horizon traite cette déclaration comme un événement technique à sceller.',
          'Le processus de scellement suit une séquence fixe. D\'abord, la déclaration est reçue via un canal technique (API, e-mail ou intégration système). Horizon n\'inspecte pas, ne valide pas et n\'interprète pas son contenu.',
          'Horizon assigne ensuite un horodatage unique qui fait foi, nommé sealed_at. Cet horodatage représente le moment où la déclaration a été scellée par Horizon. C\'est la seule référence temporelle affirmée par le système.',
          'Le contenu déclaré est stocké sous forme de données totalement opaques. Horizon n\'impose pas de schéma, n\'applique pas de structure et n\'extrait aucun sens de la charge utile.',
          'Le fait est ensuite haché et signé cryptographiquement. Son intégrité devient détectable en cas d\'altération.',
          'Enfin, le fait est ajouté à une chaîne immuable, lié au fait précédent au sein du même flux. Cette construction par ajout seul garantit que les faits ne peuvent être modifiés ou supprimés sans être détectés.',
          'Les faits sont ajoutés à un Flux de Faits. Un flux n\'a pas d\'état métier. Il n\'a pas d\'ouverture ni de fermeture. Il ne représente pas un workflow, un cycle de vie de décision ou un état de processus.',
          'À tout moment, des faits supplémentaires peuvent être déclarés et ajoutés au même flux. Horizon enregistre qu\'une relation a été déclarée et la scelle, sans interpréter sa signification.',
          'Tout au long de ce processus, Horizon ne décide pas de ce que le fait signifie. Il n\'évalue pas l\'exactitude, la légitimité, la causalité ou le résultat. Toute interprétation reste externe à Horizon.',
        ],
      },
      chapter2: {
        title: 'Lire une preuve – Exemple de chronologie',
        intro: 'Cette section illustre comment les preuves Horizon peuvent être examinées une fois les faits scellés. L\'exemple ci-dessous montre une chronologie post-incident, ordonnée par heure de scellement (sealed_at).',
        timelineNote: 'Cet exemple illustre une façon d\'examiner les faits scellés ; il n\'implique aucune interprétation au-delà de ce qui est défini dans Proof Semantics.',
        shows: {
          title: 'Ce que la chronologie montre :',
          items: [
            'que certaines déclarations ont existé,',
            'qui les a déclarées (selon l\'attribution),',
            'quand Horizon les a scellées,',
            'qu\'elles appartiennent au même flux.',
          ],
        },
        doesNotShow: {
          title: 'Ce que la chronologie ne montre pas :',
          items: [
            'si les déclarations sont vraies,',
            'si elles ont été autorisées,',
            'si les actions se sont produites comme décrit,',
            'si un fait a causé un autre,',
            'si une décision était correcte ou légitime.',
          ],
        },
        conclusion: [
          'La chronologie n\'explique pas les événements. Elle ne reconstruit pas l\'intention. Elle n\'assigne pas de responsabilité. Elle expose simplement des faits scellés, dans un ordre vérifiable.',
          'Horizon montre ce qui a été déclaré. Vous tirez les conclusions. Toute conclusion (opérationnelle, juridique ou éthique) doit être dérivée hors d\'Horizon, en utilisant le contexte externe, les règles et le jugement.',
        ],
      },
      relationToProofSemantics: {
        title: 'Relation avec Proof Semantics',
        content: 'Ce document ne modifie pas le sens des preuves Horizon. La portée sémantique et les limites des preuves Horizon sont définies exclusivement dans Proof Semantics. Si un lecteur interprète une chronologie, un flux ou un dossier de preuve comme affirmant une intention, une exactitude, une autorisation ou une responsabilité, cette interprétation est externe à Horizon et n\'est pas étayée par la preuve elle-même.',
      },
      summary: {
        title: 'Résumé',
        content: 'Horizon produit des preuves en scellant des faits déclarés. Il expose ces faits sous une forme structurée et vérifiable. Comprendre comment Horizon scelle et présente les faits aide les lecteurs à examiner les preuves correctement : sans attribuer un sens que Horizon ne fournit pas.',
      },
    },
    proofSemantic: {
      title: 'Sémantique de la Preuve',
      subtitle: 'Ce qu\'un Fait Scellé Prouve - et ce qu\'il ne prouve pas',
      status: 'Canonique · Public · Référence',
      appliesTo: 'S\'applique à : Tous les déploiements Horizon',
      intro: 'Ce document définit les frontières sémantiques de ce que les preuves Horizon établissent techniquement.',
      sections: [
        {
          title: '1. Objet de ce document',
          content: 'Ce document définit la portée et les limites sémantiques des preuves produites par Horizon.',
          existsTo: 'Il existe pour :',
          purposes: [
            'clarifier ce qu\'un fait scellé établit en tant que preuve,',
            'délimiter explicitement ce qu\'Horizon n\'affirme pas,',
            'prévenir toute mauvaise interprétation ou requalification des preuves Horizon.',
          ],
          nature: 'La preuve Horizon est factuelle, déclarative et non interprétative.',
          boundary: 'Ce document constitue une frontière de responsabilité sémantique entre :',
          parties: [
            'Horizon (intégrité de la preuve),',
            'et les clients Horizon (vérité, légitimité, interprétation).',
          ],
        },
        {
          title: '2. Principe sémantique central',
          content: 'Une preuve Horizon établit l\'existence d\'une déclaration - rien de plus.',
          proves: 'Elle prouve que :',
          provesList: [
            'une déclaration a été reçue,',
            'elle a été scellée à un instant précis,',
            'elle a été attribuée telle que déclarée,',
            'elle appartient à un flux de faits liés.',
          ],
          doesNotProve: 'Elle ne prouve ni l\'intention, ni la légitimité, ni l\'exactitude, ni la causalité, ni le résultat.',
        },
        {
          title: '3. Ce qu\'un fait scellé prouve',
          content: 'Un fait scellé prouve, et prouve uniquement, que :',
          provesList: [
            'une information a été déclarée,',
            'par l\'acteur identifié dans le fait,',
            'et scellée par Horizon à l\'instant sealed_at,',
            'sans altération après le scellement.',
          ],
          proofIs: 'Cette preuve est :',
          proofProperties: [
            'en ajout uniquement (append-only),',
            'infalsifiable (tamper-evident),',
            'vérifiable de manière indépendante.',
          ],
        },
        {
          title: '4. Ce qu\'un fait scellé ne prouve PAS',
          content: 'Un fait scellé ne prouve pas :',
          doesNotProveList: [
            'que la déclaration est vraie,',
            'que la déclaration reflète une intention,',
            'que la déclaration était autorisée,',
            'qu\'une action a eu lieu à l\'heure déclarée,',
            'qu\'une action a eu lieu tout court,',
            'qu\'un fait a causé un autre fait,',
            'qu\'une responsabilité ou une faute existe,',
            'qu\'une politique, une règle ou une obligation a été satisfaite.',
          ],
          conclusion: 'Horizon n\'induit, ne calcule, ni n\'évalue le sens des données.',
        },
        {
          title: '5. Sémantique temporelle',
          intro: 'Horizon attribue une heure unique faisant autorité : sealed_at.',
          represents: 'sealed_at représente :',
          representsList: [
            'l\'instant où Horizon a scellé la déclaration,',
            'le moment à partir duquel le fait devient prouvable.',
          ],
          doesNotAssert: 'Horizon n\'affirme pas :',
          doesNotAssertList: [
            'quand une action s\'est réellement produite,',
            'quand une observation a été faite,',
            'si les horloges des clients étaient synchronisées.',
          ],
          clientTimestamps: 'Tout horodatage fourni par le client :',
          clientTimestampsList: [
            'appartient à la charge utile (payload),',
            'ne fait pas autorité,',
            'n\'est ni validé ni réconcilié par Horizon.',
          ],
        },
        {
          title: '6. Sémantique de l\'attribution de l\'acteur',
          intro: 'Le champ "actor" représente une attribution déclarée.',
          horizonDoes: 'Horizon :',
          horizonDoesList: [
            'enregistre l\'attribution telle qu\'elle est fournie via un canal technique (API, email, intégration système),',
            'prouve la provenance de la déclaration via ce canal.',
          ],
          doesNotProve: 'Horizon ne prouve pas :',
          doesNotProveList: [
            'l\'identité biologique d\'un humain,',
            'la légitimité de l\'acteur,',
            'l\'autorité ou le rôle associé à la déclaration.',
          ],
          responsibility: 'La responsabilité de la véracité, de la légitimité et de l\'autorité d\'une déclaration incombe exclusivement à la partie déclarante.',
        },
        {
          title: '7. Sémantique des flux (Streams)',
          intro: 'Un flux est un conteneur de faits liés.',
          horizonDoes: 'Horizon :',
          horizonDoesList: [
            'ne définit pas les étapes d\'un workflow,',
            'n\'impose pas d\'ordre au-delà de l\'heure de scellement,',
            'ne définit pas l\'achèvement ou la clôture,',
            'n\'induit pas l\'état d\'un processus.',
          ],
          conclusion: 'Les flux ne sont jamais fermés par Horizon. De nouveaux faits peuvent être ajoutés à tout moment. Toute notion de « processus », de « décision » ou de « résultat » est externe à Horizon.',
        },
        {
          title: '8. Corrélation des faits et causalité',
          intro: 'Les relations entre les faits au sein d\'un flux (telles que les références parentes ou les identifiants partagés) sont fournies par les systèmes clients.',
          horizonDoes: 'Horizon :',
          horizonDoesList: [
            'n\'induit pas de causalité,',
            'ne calcule pas de dépendance,',
            'n\'affirme pas de séquence procédurale.',
          ],
          conclusion: 'Toute séquence, dépendance ou workflow perçu est une interprétation externe à Horizon et ne doit pas être attribué à Horizon lui-même.',
        },
        {
          title: '9. Flux incomplets et silence',
          intro: 'Horizon n\'interprète pas l\'absence de faits.',
          ifNoFact: 'Si aucun fait supplémentaire n\'est ajouté après une déclaration :',
          ifNoFactList: [
            'Horizon n\'induit pas un échec,',
            'n\'induit pas un succès,',
            'n\'induit pas un abandon,',
            'n\'induit pas une intention ou une négligence.',
          ],
          conclusion: 'Le silence, le délai ou le caractère incomplet ne constituent pas des preuves au sein d\'Horizon. L\'interprétation des flux incomplets dépend entièrement du contexte externe.',
        },
        {
          title: '10. Frontière d\'interprétation',
          intro: 'Toute interprétation a lieu en dehors d\'Horizon.',
          usage: 'Les preuves Horizon peuvent être utilisées par des humains, des organisations, des auditeurs, des tribunaux ou des régulateurs.',
          horizonItself: 'Horizon lui-même :',
          horizonItselfList: [
            'n\'interprète pas,',
            'ne recommande pas,',
            'ne conclut pas.',
          ],
        },
        {
          title: '11. Positionnement juridique et réglementaire',
          intro: 'La preuve Horizon est technique, factuelle et neutre.',
          doesNotConstitute: 'Elle ne constitue pas :',
          doesNotConstituteList: [
            'une décision,',
            'une autorisation,',
            'une sanction,',
            'une évaluation de politique,',
            'une assertion de conformité.',
          ],
          conclusion: 'Horizon est un témoin, pas un juge.',
        },
        {
          title: '12. Résumé canonique',
          content: 'Horizon produit une preuve de déclaration, et non une preuve d\'exactitude ou de légitimité. Ce principe régit toutes les preuves Horizon.',
        },
        {
          title: '13. Ce que ce document empêche explicitement',
          prevents: [
            'Le détournement d\'Horizon comme système d\'approbation',
            'La requalification en outil de gouvernance ou de conformité',
            'L\'attribution de responsabilité à Horizon',
            'La sur-interprétation lors d\'audits ou d\'enquêtes',
          ],
        },
      ],
      finalNote: 'Si un lecteur conclut qu\'Horizon a décidé, validé, autorisé ou jugé quoi que ce soit, alors Horizon a été mal interprété.',
    },
    verification: {
      title: 'Guide de vérification',
      subtitle: 'Vérifier un faisceau de preuves Horizon',
      status: 'Canonique · Public · Référence',
      audience: 'Audience : Auditeurs · Reviseurs externes · Équipes sécurité · Experts juridiques',
      appliesTo: 'S\'applique à : Tous les déploiements Horizon',
      sections: [
        {
          title: '1. Objet de ce document',
          content: 'Ce document explique comment les preuves Horizon peuvent être vérifiées et ce qu\'une telle vérification garantit.',
          defines: 'Il définit :',
          definesList: [
            'ce qu\'un faisceau de preuves Horizon contient,',
            'ce qui est vérifiable par cryptographie,',
            'comment les altérations sont détectées,',
            'et les limites de la vérification.',
          ],
          conclusion: 'Ce guide n\'explique pas comment Horizon est implémenté en interne. Il explique ce qui peut être contrôlé de manière indépendante.',
        },
        {
          title: '2. Qu\'est-ce qu\'un faisceau de preuves Horizon',
          content: 'Un faisceau de preuves (proof bundle) est un artefact vérifiable produit par Horizon qui regroupe :',
          packagesList: [
            'un ensemble de faits scellés,',
            'leurs hachages cryptographiques,',
            'leurs informations de chaînage,',
            'et une signature Horizon.',
          ],
          conclusion: 'Un faisceau représente l\'état d\'un flux à un instant donné. Les faisceaux sont immuables une fois émis.',
        },
        {
          title: '3. Contenu d\'un faisceau de preuves',
          intro: 'Un faisceau de preuves Horizon comprend, au minimum :',
          minimumList: [
            'bundle_id',
            'bundle_version',
            'une liste ou un manifeste des faits',
            'le head_hash (hachage de tête) du flux au moment du faisceau',
            'une signature cryptographique',
            'une référence à la clé de signature (key_id ou équivalent)',
          ],
          optional: 'Optionnellement, un faisceau peut référencer :',
          optionalList: [
            'des manifestes de pièces jointes,',
            'des objets de preuve externes.',
          ],
        },
        {
          title: '4. Ce que la vérification contrôle',
          intro: 'La vérification d\'un faisceau de preuves Horizon consiste en quatre contrôles indépendants.',
          subsections: [
            {
              title: '4.1 Vérification de la signature',
              content: 'La signature du faisceau est vérifiée à l\'aide de la clé publique correspondant à la clé de signature déclarée.',
              establishes: 'Cela établit que :',
              establishesList: [
                'le faisceau a été produit par Horizon,',
                'le contenu du faisceau n\'a pas été altéré depuis sa signature.',
              ],
            },
            {
              title: '4.2 Vérification du hachage des faits',
              intro: 'Pour chaque fait du faisceau :',
              steps: [
                'la charge utile (payload) du fait est hachée,',
                'le hachage calculé est comparé au fact_hash stocké.',
              ],
              conclusion: 'Cela établit que chaque fait n\'a pas été modifié après son scellement.',
            },
            {
              title: '4.3 Vérification de la chaîne de hachage',
              intro: 'Les faits sont liés à l\'aide d\'une chaîne de hachage (prev_hash → fact_hash).',
              confirms: 'La vérification recalcule la chaîne et confirme que :',
              confirmsList: [
                'chaque fait référence correctement le précédent,',
                'le hachage final calculé correspond au head_hash du faisceau.',
              ],
              establishes: 'Cela établit :',
              establishesList: [
                'l\'ordre chronologique en ajout uniquement (append-only),',
                'la détection d\'altération sur l\'ensemble du segment de flux.',
              ],
            },
            {
              title: '4.4 Vérification de la cohérence du faisceau',
              intro: 'Le vérificateur contrôle que :',
              checksList: [
                'le faisceau référence le bon flux,',
                'l\'ensemble des faits est complet jusqu\'au head_hash,',
                'aucun fait n\'est manquant, réordonné ou dupliqué.',
              ],
            },
          ],
        },
        {
          title: '5. Ce que la vérification prouve',
          intro: 'Une vérification réussie prouve que :',
          provesList: [
            'le faisceau a été produit par Horizon,',
            'les faits inclus ont été scellés par Horizon,',
            'les faits n\'ont pas été altérés depuis leur scellement,',
            'l\'ordre des faits est en ajout uniquement et intact.',
          ],
          conclusion: 'La vérification établit l\'intégrité et l\'authenticité de la preuve.',
        },
        {
          title: '6. Ce que la vérification ne prouve PAS',
          intro: 'La vérification ne prouve pas :',
          doesNotProveList: [
            'que les faits déclarés sont vrais,',
            'que les acteurs déclarés sont légitimes,',
            'que les actions se sont déroulées comme décrit,',
            'que les horodatages reflètent la réalité du monde réel,',
            'que le flux est complet,',
            'qu\'aucun autre fait n\'existe en dehors du faisceau.',
          ],
          conclusion: 'La vérification valide l\'intégrité de la preuve, pas sa signification.',
        },
        {
          title: '7. Portée et indépendance de la vérification',
          intro: 'La vérification peut être effectuée :',
          performedBy: [
            'par les systèmes Horizon,',
            'par les systèmes clients,',
            'par des auditeurs tiers,',
            'par des régulateurs ou des tribunaux.',
          ],
          noAccess: 'Aucun accès aux systèmes internes d\'Horizon n\'est requis, à condition que :',
          noAccessList: [
            'le faisceau de preuves,',
            'et le matériel de vérification public correspondant soient disponibles.',
          ],
        },
        {
          title: '8. Traitement des faisceaux incomplets ou partiels',
          intro: 'Un faisceau de preuves reflète le flux jusqu\'à un point précis dans le temps.',
          absence: 'L\'absence de faits ultérieurs :',
          absenceList: [
            'n\'indique pas un échec,',
            'n\'indique pas un succès,',
            'n\'indique pas un abandon.',
          ],
          conclusion: 'La vérification n\'induit pas la complétude.',
        },
        {
          title: '9. Gestion des clés et hypothèses de confiance',
          assumes: 'La vérification suppose :',
          assumesList: [
            'l\'authenticité de la clé de signature publique d\'Horizon,',
            'une distribution correcte des clés ou un ancrage de confiance.',
          ],
          doesNot: 'La vérification ne permet pas :',
          doesNotList: [
            'd\'évaluer la gouvernance des clés,',
            'd\'évaluer la sécurité opérationnelle d\'Horizon,',
            'd\'évaluer la posture de sécurité du client.',
          ],
        },
        {
          title: '10. Frontière d\'interprétation juridique',
          intro: 'La vérification établit l\'intégrité technique, pas la qualification juridique.',
          bundleIs: 'Un faisceau vérifié :',
          bundleIsList: [
            'n\'est pas une décision,',
            'n\'est pas une autorisation,',
            'n\'est pas une assertion de conformité,',
            'n\'est pas une détermination de responsabilité.',
          ],
          conclusion: 'L\'interprétation reste de la responsabilité des organisations, des auditeurs, des tribunaux ou des régulateurs.',
        },
        {
          title: '11. Résumé canonique',
          content: 'La vérification confirme que la preuve Horizon est intacte et authentique. Elle ne confirme pas ce que la preuve signifie.',
        },
        {
          title: '12. Statut et stabilité',
          content: 'Ce document définit la sémantique de vérification stable d\'Horizon. Toute évolution future d\'Horizon doit rester cohérente avec les garanties décrites ici.',
        },
      ],
    },
    final: {
      title: 'Arrêtez de reconstruire les incidents. Scellez-les.',
    },
    contact: {
      title: 'Discuter de votre cas d\'usage',
      intro: 'Ce briefing s\'adresse aux responsables Sécurité (CISO), Risk, Compliance et Risk Technology dans les environnements régulés.',
      introDetail: 'L\'objectif est de discuter des exigences en matière de preuves, de l\'examen post-incident et des contraintes d\'intégration—pas de vendre un workflow ou un outil.',
      backToHome: 'Retour à l\'accueil',
      scheduleTitle: 'Planifier un briefing',
      scheduleDescription: 'Réservez un briefing technique ou risque de 30 minutes avec notre équipe.',
      scheduleScope: 'Périmètre',
      scheduleScopeItems: ['preuves décisionnelles', 'preuves post-incident', 'audit et vérification'],
      scheduleAudience: 'Audience',
      scheduleAudienceItems: ['CISO', 'Risk', 'Legal', 'CTO'],
      scheduleFormat: 'Format',
      scheduleFormatValue: 'technique et factuel',
      scheduleButton: 'Planifier un briefing',
      emailTitle: 'Envoyer un email',
      emailDescription: 'Pour les demandes générales ou si vous préférez la communication écrite.',
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
