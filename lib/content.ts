export type Lang = 'en' | 'fr'

export const content = {
  en: {
    brand: 'HORIZON',
    brandFull: 'HORIZON by ASPLENZ',
    langSwitch: 'FR',
    nav: {
      foundations: 'Foundations',
      perspectives: 'Perspectives',
      docs: 'Documentation',
      contact: 'Contact',
    },

    // Landing page (index.md)
    index: {
      hero: {
        title: 'The Native Proof Infrastructure.',
        tagline: 'End the era of narrative reconstruction. Secure the scrutiny of your critical decisions.',
        cta1: 'Discover the Shift',
        cta2: 'Get Started',
      },
      reality: {
        title: 'The Reality: Explaining is not proving.',
        content: 'Today, corporate decisions live in fragments: a **Slack** discussion, an **email** agreement, an oral clarification, and an indirect trace in a **Jira** ticket. When the moment of audit or scrutiny arrives, you can no longer show what happened; you can only attempt to explain it.',
        risk: 'Late reconstruction is inevitably interpretive and remains vulnerable to doubt.',
      },
      paradigm: {
        intro: 'Horizon shifts the paradigm.',
        content: "We don't manage your processes; we anchor your facts at the moment they exist. Horizon provides a proof infrastructure that captures decisions at the source, before time and interpretations alter them.",
      },
      useCases: {
        title: 'A factual infrastructure for your critical challenges',
        items: [
          {
            icon: '🇪🇺',
            title: 'AI Governance & Compliance (AI Act)',
            subtitle: 'Independent Accountability Layer',
            challenge: 'Establishing "Reasonable Diligence" and human oversight without creating security friction or depending on the MLOps tools being audited.',
            value: 'Horizon operates as a neutral, append-only fact store sitting strictly **outside your operational stack**.\n\n**Separation of Duties:** decouple execution (MLOps) from evidence (Horizon) for indisputable audit trails.\n\n**Zero-Access Architecture:** we never access your models or your data; we only anchor the cryptographic proof of your governance actions.\n\n**Audit-Ready Mastery:** attest to your operational control before regulatory bodies with facts that cannot be altered by the systems they describe.',
          },
          {
            icon: '🛡️',
            title: 'Cyber Resilience & Crisis Management',
            subtitle: 'Isolated Evidence Layer',
            challenge: 'In a crisis, speed trumps documentation. Post-incident audits require evidence that could not have been compromised along with your systems.',
            value: 'Horizon operates as an immutable evidence layer **completely isolated from your operational infrastructure**.\n\n**Compromise-Proof Records:** even if attackers gain admin access, sealed facts remain mathematically unalterable.\n\n**Independent Timeline:** your crisis decisions are anchored outside the systems being defended.\n\n**Forensic Authority:** demonstrate your response integrity to regulators with evidence that could not have been planted or modified post-breach.',
          },
          {
            icon: '🏭',
            title: 'Sovereign Operations & Critical Sectors',
            subtitle: 'Independent Vault for Operational Facts',
            challenge: 'Maintaining absolute accountability in high-security environments where internal registries are primary targets for sophisticated threats or internal compromise.',
            value: 'Horizon provides a mathematically verifiable layer that ensures **the sovereignty of your evidence**, even in the most restricted environments.\n\n**Air-Gapped Readiness:** deployable in isolated environments to guarantee that proof remains autonomous and verifiable without external dependencies.\n\n**Tamper-Proof Architecture:** any attempt to alter or delete an anchored fact is mathematically detectable, ensuring the total integrity of your operational history.\n\n**Strategic Autonomy:** take back control of your evidence. Horizon ensures that once a fact is sealed, its existence and timing can no longer be denied, even by the system that created it.',
          },
        ],
      },
      pillars: {
        title: 'The Pillars of Horizon Infrastructure',
        items: [
          {
            title: 'Native Integrity',
            description: 'Facts cannot be modified or deleted without detection thanks to cryptographic chaining.',
          },
          {
            title: 'Total Neutrality',
            description: 'Horizon does not interpret your data (your payload is opaque) and imposes no business workflows.',
          },
          {
            title: 'Authoritative Timestamping',
            description: 'Every fact receives a certified, immutable timestamp assigned by Horizon, serving as definitive evidence during audits or reviews.',
          },
          {
            title: 'Independent Verification',
            description: 'Any auditor can verify chain integrity autonomously, without access to your internal systems.',
          },
        ],
      },
      quote: 'What is sealed becomes a reference.',
      closing: 'Horizon is a factual, neutral, and independent proof infrastructure. It does not make decisions better; it makes their existence less debatable.',
      ctas: {
        briefing: 'Schedule a Strategic Briefing',
        verification: 'Access the Verification Guide',
      },
    },

    // Contact page
    contact: {
      title: 'Discuss your use case',
      intro: 'This briefing is intended for leaders responsible for **Security (CISO)**, **Risk**, **Compliance**, and **Risk Technology** in regulated environments.',
      purpose: 'The purpose is to discuss **evidence requirements**, **post-incident scrutiny**, and **integration constraints**, *not* to sell a workflow or a tool.',
      option1: {
        title: 'Schedule a Briefing',
        description: 'Book a **30-minute technical or risk briefing** with our team.',
        scope: {
          title: 'Scope:',
          items: ['decision evidence', 'post-incident proof', 'audit and verification'],
        },
        audience: {
          title: 'Audience:',
          items: ['CISO', 'Risk', 'Legal', 'CTO'],
        },
        format: {
          title: 'Format:',
          items: ['technical and factual'],
        },
        cta: 'Schedule a briefing',
      },
      option2: {
        title: 'Send an Email',
        description: 'For general inquiries or if you prefer written communication.',
        email: 'contact@asplenz.com',
      },
    },

    // Foundations
    foundations: {
      problem: {
        title: 'The Problem',
        sections: [
          {
            title: 'Decisions live everywhere, and nowhere',
            content: `Today, corporate decisions live nowhere in particular. They appear in fragments, scattered across a multitude of tools that were never designed to hold them. A discussion begins in Slack, continues via email, is clarified orally during a meeting, is settled over the phone, and then sometimes leaves an indirect trace in a Jira ticket or a ServiceNow form. The action itself is executed elsewhere still, in a terminal, a cloud console, or an automated system, while applications log what they can in files designed for diagnostics, not for proof. At the moment, this dispersion is not a problem. Teams understand each other, the decision flows, the organization moves forward.`,
          },
          {
            title: 'The question always comes later',
            content: `The difficulty only appears later, when one tries to establish what actually happened. At that point, there is no single point to turn to. One must reconstruct. We gather what remains: messages extracted from Slack, screenshots attached to emails, PDFs exported from business tools, tickets modified multiple times, technical logs that are difficult to interpret outside their original context. Very quickly, it becomes clear that this material is incomplete. Some discussions were never written down, some exchanges took place orally, some messages were deleted, some logs were purged, some people are no longer there. What is missing can no longer be recovered.`,
          },
          {
            title: 'Reconstruction replaces proof',
            content: `Faced with these absences, reconstruction inevitably becomes interpretive. Gaps are filled with memories, assumed intentions, and reasoning formulated after the fact. A coherent story takes shape, often in good faith, sometimes under pressure, but always influenced by the context in which the question is asked. This narrative may seem solid, but it no longer constitutes proof. The elements produced (screenshots, PDF exports, isolated emails) do not carry their own integrity. They do not allow an independent third party to verify that they have not been modified, selected, or taken out of context. They ask to be believed, and as soon as a piece of evidence asks to be believed, it ceases to be binding.`,
          },
          {
            title: 'Time works against certainty',
            content: `Over time, this fragility only worsens. Tools evolve, formats change, systems are updated, and retention policies erase what was not intended to last. Memories alter, certainties shift. Six months later, or sometimes a year later, the decision only exists as a narrative the organization is capable of producing about itself. This narrative may be honest, precise, and detailed, but it remains vulnerable to doubt because it relies on a late reconstruction of a reality that was never captured.`,
          },
          {
            title: 'Tools were never designed for proof',
            content: `The problem is not that companies lack tools. On the contrary, they use too many, each optimized for a specific function. Slack facilitates discussion, email structures communication, Jira organizes work, ServiceNow frames processes, technical systems execute, logs observe. But none of these tools is intended to freeze the moment a decision becomes irreversible, nor to attest that an authority declared something at a specific time. The decision traverses systems without ever being fully inscribed in them. It exists in action, but not as an autonomous, independently verifiable fact.`,
          },
          {
            title: 'Explaining is not proving',
            content: `When the question is finally asked, often long after the events, the organization can no longer show what happened. It can only explain it. And explaining, as rigorously as possible, is never equivalent to proving. This is not a problem of discipline, nor of method, nor of goodwill. It is a structural problem. As long as it remains invisible, organizations will continue to believe they can explain later, only to discover, too late, that explaining is not proving.`,
          },
        ],
      },
      shift: {
        title: 'The Shift',
        sections: [
          {
            title: 'The reflex to improve what exists',
            content: `Faced with the fragility of evidence, the natural reaction of organizations is almost always the same. We seek to improve what already exists. We add mandatory fields, reinforce validation workflows, keep logs longer, and ask teams to write more. The effort is sincere, often costly, and sometimes even effective in the short term. Yet, the problem does not go away.`,
          },
          {
            title: 'More structure does not create proof',
            content: `These responses rest on an implicit assumption: if tools are organized well enough, evidence will eventually emerge. But organization does not produce proof; it produces coherence. Workflows impose a path, but they do not guarantee that the actual decision was made within that path. Logs describe what systems do, not what authorities declare. Documentation formalizes narratives, almost always after the fact. In every case, the evidence remains derivative.`,
          },
          {
            title: 'An entire missing category',
            content: `What is missing is not an additional rule, another tool, or better human discipline. An entire category of infrastructure is missing: a decision evidence infrastructure. Its role is not to decide, nor to govern, nor to control. Its role is to capture the existence of a decisional fact at the precise moment it occurs, before any interpretation, before any reconstruction. As long as this category does not exist, every attempt at proof relies on secondary traces, which are fragile by nature.`,
          },
          {
            title: 'From reconstruction to anchoring',
            content: `This is where the shift lies. It is no longer about reconstructing after the fact, nor analyzing more finely, nor governing more strictly. It is about recognizing that certain facts must be anchored at the moment they exist, before time, systems, and interpretations alter them. Evidence is not deduced. It is anchored, or it is lost.`,
          },
          {
            title: 'A clear boundary',
            content: `From this observation, a clear boundary emerges. On one side are the systems that decide, execute, communicate, and analyze. On the other is an infrastructure of factual, neutral, and independent anchoring, whose role is not to intervene, but to attest. This shift does not make decisions better. It makes their existence less debatable.`,
          },
          {
            title: 'What this shift makes possible',
            content: `Once this shift is made, the nature of the question of proof changes. It ceases to be a fragile exercise in justification and becomes a problem of verification. Not because organizations have better control, but because they finally possess facts that do not need to be narrated.`,
          },
        ],
      },
      horizon: {
        title: 'Horizon: A Decision Evidence Infrastructure',
        subtitle: 'An infrastructure of proof',
        sections: [
          {
            title: 'An infrastructure of proof',
            content: `Horizon is an infrastructure of proof. It exists for a simple reason: to allow an organization to rely on facts, rather than narratives, when a critical decision is called into question.`,
          },
          {
            title: 'Outside the decision system',
            content: `Horizon does not help decide. It does not control action. It does not impose any process. It intentionally stands outside the decision-making system.\n\nThis stance is not a shortcoming, but a prerequisite. As soon as a system validates, authorizes, or blocks, it becomes a stakeholder in the decision. The evidence it produces then ceases to be neutral.`,
          },
          {
            title: 'What Horizon records',
            content: `What Horizon captures are declared facts: that an intention was expressed, that information was transmitted, that a result was observed. It infers nothing. It qualifies nothing.\n\nIt solely guarantees that these facts existed, at a specific point in time, and that they can be independently verified.`,
          },
          {
            title: 'No workflow, no interface to decide',
            content: `Horizon does not seek to replace existing tools. Decisions continue to originate where they actually occur: in human exchanges, business systems, or contexts of urgency or exception. Horizon adapts to these environments without requiring decision-makers to change their habits or learn a new interface.`,
          },
          {
            title: 'Invisible when it matters',
            content: `This discretion is essential. Horizon is not a destination where people go to work. It is a silent layer, present at the moment facts are expressed, invisible to operations, but fully accessible after the fact for those who must establish what truly happened.`,
          },
          {
            title: 'Facts, not explanations',
            content: `What Horizon provides is neither an analysis, nor an explanation, nor a justification. It is factual material, intended to be examined by others: auditors, risk teams, legal experts, or regulatory authorities. All interpretation belongs to these entities, outside the system.`,
          },
          {
            title: 'What Horizon does not promise',
            content: `Horizon does not make decisions better. It does not prevent errors. It does not guarantee that rules were followed.\n\nIt guarantees something more fundamental: that certain facts exist, that they are dated, and that they cannot be denied a posteriori.`,
          },
          {
            title: 'Why it exists',
            content: `In a world where decisions are fast, distributed, and contestable, Horizon does not simplify reality. It makes it verifiable.`,
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
            title: 'Where Horizon fits',
            content: `Horizon provides an **independent infrastructure of proof**.\n\nIt does not assess compliance. It does not interpret responsibility. It does not validate decisions.\n\nIt records declared facts and seals them at the moment they are submitted, producing evidence that can be verified **without relying on the operational systems that generated it**.\n\nHorizon exists so that audit does not depend on trust in IT-controlled data.`,
          },
          {
            title: 'What Horizon provides to Audit & Risk',
            items: [
              'An append-only record of declared facts',
              'Independent timestamps assigned at sealing time',
              'Cryptographic integrity that makes later alteration detectable',
              'Exportable proof bundles verifiable outside Horizon',
            ],
            conclusion: 'Nothing more.',
          },
          {
            title: 'What Horizon does not do',
            items: [
              'Does not decide whether a process is compliant',
              'Does not replace audit methodology',
              'Does not qualify responsibility or intent',
              'Does not explain what should have happened',
            ],
            conclusion: 'Horizon produces facts. Audit produces conclusions.',
          },
          {
            title: 'After an incident, you can establish',
            intro: 'Using Horizon, you can verify:',
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
            content: `Audit credibility depends on independence.\n\nWhen evidence is produced and stored by the same systems that executed the actions, integrity can only be assumed. Horizon introduces a structural separation between **action** and **proof**.\n\nThis separation allows audit to operate on facts that are **immutable by design**, not by policy.`,
          },
          {
            title: 'What Horizon changes',
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
            title: 'Where Horizon fits',
            content: `Horizon provides a passive, external layer of proof.\n\nIt does not detect attacks. It does not block actions. It does not secure infrastructure. It records declared facts outside the execution path and seals them in a way that makes later modification detectable, even if the originating systems are fully compromised.\n\nHorizon exists to preserve post-incident integrity, not to prevent incidents.`,
          },
          {
            title: 'What Horizon provides to Security',
            items: [
              'A passive channel to declare security-relevant facts',
              'Evidence sealed independently from security tooling',
              'Append-only integrity that survives administrative access',
              'Proof that remains verifiable after system compromise',
            ],
            conclusion: 'Nothing more.',
          },
          {
            title: 'What Horizon does not do',
            items: [
              'Does not prevent or detect attacks',
              'Does not replace SIEM, EDR, or logging platforms',
              'Does not harden infrastructure',
              'Does not qualify intent or responsibility',
            ],
            conclusion: 'Horizon is not part of the defensive stack. It is the witness that remains when defenses fail.',
          },
          {
            title: 'After an incident, you can establish',
            intro: 'Using Horizon, you can verify:',
            items: [
              'Which facts were declared before, during, or after the incident',
              'When those facts were sealed',
              'Whether any trace was altered afterward',
            ],
            conclusion: 'You no longer depend solely on logs that may have been cleaned or reconstructed.',
          },
          {
            title: 'Why this matters for Security',
            content: `Security tools operate inside the system they protect. When that system is compromised, their output becomes suspect.\n\nHorizon introduces an external point of truth. It does not claim immunity. It provides detectability of tampering, which is the only property that survives total compromise.\n\nThis shifts post-incident discussions from "what do we believe?" to "what can we verify?".`,
          },
          {
            title: 'What Horizon changes',
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
        subtitle: 'For CTOs and system architects responsible for reliable systems and long-term integrity.',
        sections: [
          {
            title: 'The reality of your role',
            content: `You design systems that must evolve.\n\nThey change, scale, are patched, reconfigured, and operated by many hands. They must allow correction, rollback, override, and deletion to remain usable. Yet you are often asked to prove, after the fact, what those systems did and why.\n\nYour challenge is not execution. It is producing proof from systems that cannot be frozen.`,
          },
          {
            title: 'Where Horizon fits',
            content: `Horizon provides a separate infrastructure for proof.\n\nIt does not participate in execution. It does not validate flows. It does not enforce models or workflows. It receives declared facts and seals them outside your operational systems, so proof does not depend on the mutability of production infrastructure.\n\nHorizon exists to resolve a structural conflict: systems that act cannot also be their own immutable record.`,
          },
          {
            title: 'What Horizon provides to Engineering',
            items: [
              'A passive API to declare facts',
              'No dependency in the execution path',
              'No imposed schema or workflow',
              'Append-only integrity handled externally',
            ],
            conclusion: 'Nothing more.',
          },
          {
            title: 'What Horizon does not do',
            items: [
              'Does not validate actions',
              'Does not store secrets or business data',
              'Does not replace logs or observability tools',
              'Does not impose runtime constraints',
            ],
            conclusion: 'Horizon is not an operational component. It is an external evidence layer.',
          },
          {
            title: 'After an incident, you can establish',
            intro: 'Using Horizon, you can verify:',
            items: [
              'What was declared by your systems or operators',
              'When it was sealed',
              'Whether it was altered afterward',
            ],
            conclusion: 'Without hardening logs, freezing databases, or rebuilding audit pipelines.',
          },
          {
            title: 'Why this matters for Engineering',
            content: `Building systems that act is already complex. Building systems that must also prove their own past creates a conflict of responsibility.\n\nHorizon removes that burden. By externalizing proof, you keep operational systems flexible while ensuring that declared facts remain verifiable over time.`,
          },
          {
            title: 'What Horizon changes',
            before: ['Proof is embedded in mutable systems', 'Integrity relies on access control', 'Architects carry the burden of immutability'],
            after: ['Proof is externalized', 'Integrity is verifiable independently', 'Responsibility for immobility is removed from production systems'],
          },
        ],
        next: {
          title: 'View how facts are sealed',
          description: 'This example shows how a declared fact is sealed, timestamped, and appended to an immutable chain, without impacting system execution.',
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
            title: 'Where Horizon fits',
            content: `Horizon provides a neutral infrastructure for factual records.\n\nIt does not assess legality. It does not qualify responsibility. It does not issue judgments or conclusions. It records declared facts and seals their existence at a specific point in time, producing evidence whose integrity can be verified independently of the systems and people involved.\n\nHorizon exists to separate fact from interpretation.`,
          },
          {
            title: 'What Horizon provides to Legal',
            items: [
              'Neutral, non-qualifying factual records',
              'Independent timestamps assigned at sealing time',
              'Detectable integrity for declared facts',
              'Evidence that can be verified without testimony or system trust',
            ],
            conclusion: 'Nothing more.',
          },
          {
            title: 'What Horizon does not do',
            items: [
              'Does not determine legal compliance',
              'Does not assess liability or fault',
              'Does not replace legal analysis',
              'Does not assert evidentiary weight',
            ],
            conclusion: 'Horizon records facts. Legal interpretation remains entirely human and contextual.',
          },
          {
            title: 'After an incident or dispute, you can establish',
            intro: 'Using Horizon, you can verify:',
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
            content: `Legal reasoning depends on stable premises. When the integrity of facts is disputed, the discussion shifts from substance to credibility.\n\nHorizon provides a factual baseline that precedes interpretation and survives organizational or technical change. This allows legal teams to argue from verified facts, not reconstructed narratives.`,
          },
          {
            title: 'What Horizon changes',
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
            title: 'Where Horizon fits',
            content: `Horizon provides a neutral infrastructure for sealing declared facts.\n\nIt does not evaluate models. It does not explain decisions. It does not enforce governance rules. It records declared inputs, outputs, or observations at a specific moment in time and seals them independently from learning systems.\n\nHorizon exists to ensure that facts do not drift as systems evolve.`,
          },
          {
            title: 'What Horizon provides to AI & Data Governance',
            items: [
              'Sealed records of declared inputs or outputs',
              'Independent timestamps at declaration time',
              'Append-only integrity outside training pipelines',
              'Evidence that remains verifiable after model updates',
            ],
            conclusion: 'Nothing more.',
          },
          {
            title: 'What Horizon does not do',
            items: [
              'Does not explain model behavior',
              'Does not ensure fairness or bias mitigation',
              'Does not enforce regulatory compliance',
              'Does not monitor performance or drift',
            ],
            conclusion: 'Horizon does not govern AI. It preserves facts around it.',
          },
          {
            title: 'After an incident or review, you can establish',
            intro: 'Using Horizon, you can verify:',
            items: [
              'What data or output was declared',
              'When it was sealed',
              'Whether it was altered afterward',
            ],
            conclusion: 'Even if models, datasets, or pipelines have since changed.',
          },
          {
            title: 'Why this matters for AI & Data Governance',
            content: `AI systems rewrite their own past. Logs are pruned. Training data is replaced. Outputs are no longer reproducible.\n\nHorizon introduces fixed reference points that remain stable while systems evolve. This allows governance and oversight to operate on facts, not on reconstructed or simulated histories.`,
          },
          {
            title: 'What Horizon changes',
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
            content: 'A stream is identified by stream_id, provided by the client in the URL. If no stream with that ID exists, Horizon creates it implicitly when the first fact is sealed.\n\nThe only identifier you manage is stream_id; Horizon does not impose any business semantics on it.',
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
            content: 'In production deployments, tenant_id is typically derived from authentication context rather than provided in the payload.\n\nYour payload is opaque to Horizon. It is recorded exactly as provided.',
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
              'Horizon assigned sealed_at_ms (authoritative timestamp)',
              'Horizon computed fact_hash from a deterministic representation of the fact',
              'Horizon chained to previous fact via prev_hash',
              'Horizon stored the fact (append-only)',
            ],
            content: 'Horizon did not interpret custom_payload. That\'s your data.',
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
            { property: 'Proof authority', guarantee: 'sealed_at_ms assigned by Horizon' },
          ],
          note: 'These properties hold even if the client system is compromised, because any modification is detectable.',
        },
        whatNotDo: {
          title: 'What Horizon Does Not Do',
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
        appliesTo: 'All Horizon deployments',
        sections: [
          {
            number: '1',
            title: 'Purpose of This Document',
            content: `This document defines the semantic scope and limits of Horizon evidence. It exists to:\n\n• clarify what a sealed fact establishes as evidence,\n• explicitly delimit what Horizon does not assert,\n• prevent misinterpretation or requalification of Horizon evidence.\n\nHorizon evidence is factual, declarative, and non-interpretive. This document is a semantic responsibility boundary between:\n\n• **Horizon** (integrity of evidence),\n• and **Horizon clients** (truth, legitimacy, interpretation).`,
          },
          {
            number: '2',
            title: 'Core Semantic Principle',
            content: `A Horizon proof establishes the existence of a declaration: nothing more. It proves that:\n\n• a declaration was received,\n• it was sealed at a precise time,\n• it was attributed as declared,\n• it belongs to a stream of related facts.\n\nIt does not prove intent, legitimacy, correctness, causality, or outcome.`,
          },
          {
            number: '3',
            title: 'What a Sealed Fact Proves',
            content: `A sealed fact proves, and only proves, that:\n\n• a piece of information was declared,\n• by the actor identified in the fact,\n• and sealed by Horizon at sealed_at,\n• without alteration after sealing.\n\nThis proof is:\n\n• append-only,\n• tamper-evident,\n• independently verifiable.`,
          },
          {
            number: '4',
            title: 'What a Sealed Fact Does NOT Prove',
            content: `A sealed fact does not prove:\n\n• that the declaration is true,\n• that the declaration reflects intent,\n• that the declaration was authorized,\n• that an action occurred at the declared time,\n• that an action occurred at all,\n• that one fact caused another,\n• that responsibility or fault exists,\n• that any policy, rule, or obligation was satisfied.\n\nHorizon does not infer, compute, or assess meaning.`,
          },
          {
            number: '5',
            title: 'Time Semantics',
            content: `Horizon assigns a single authoritative time: **sealed_at**.\n\nsealed_at represents:\n\n• the moment Horizon sealed the declaration,\n• the moment from which the fact becomes provable.\n\nHorizon does not assert:\n\n• when an action actually occurred,\n• when an observation was made,\n• whether client clocks were synchronized.\n\nAny client-provided timestamps belong to the payload, are not authoritative, and are not validated or reconciled by Horizon.`,
          },
          {
            number: '6',
            title: 'Actor Attribution Semantics',
            content: `The actor field represents **declared attribution**. Horizon:\n\n• records attribution as provided through a technical channel (API, email, system integration),\n• proves the provenance of the declaration via that channel.\n\nHorizon does not prove:\n\n• the biological identity of a human,\n• the legitimacy of the actor,\n• the authority or role associated with the declaration.\n\nResponsibility for the truth, legitimacy, and authority of a declaration remains with the declaring party.`,
          },
          {
            number: '7',
            title: 'Stream Semantics',
            content: `A stream is a container of related facts. Horizon:\n\n• does not define workflow steps,\n• does not enforce order beyond sealing time,\n• does not define completion or closure,\n• does not infer process state.\n\nStreams are never closed by Horizon. New facts may be appended at any time. Any notion of "process", "decision", or "outcome" is external to Horizon.`,
          },
          {
            number: '8',
            title: 'Fact Correlation and Causality',
            content: `Relationships between facts within a stream (such as parent references or shared identifiers) are provided by client systems. Horizon:\n\n• does not infer causality,\n• does not compute dependency,\n• does not assert procedural sequence.\n\nAny perceived sequence, dependency, or workflow is an interpretation external to Horizon and must not be attributed to Horizon itself.`,
          },
          {
            number: '9',
            title: 'Incomplete Streams and Silence',
            content: `Horizon does not interpret the absence of facts. If no additional fact is appended after a declaration:\n\n• Horizon does not infer failure,\n• does not infer success,\n• does not infer abandonment,\n• does not infer intent or negligence.\n\nSilence, delay, or incompleteness are not evidence within Horizon. Interpretation of incomplete streams depends entirely on external context.`,
          },
          {
            number: '10',
            title: 'Interpretation Boundary',
            content: `All interpretation happens outside Horizon. Horizon evidence may be used by humans, organizations, auditors, courts, or regulators.\n\nHorizon itself:\n\n• does not interpret,\n• does not recommend,\n• does not conclude.`,
          },
          {
            number: '11',
            title: 'Legal and Regulatory Positioning',
            content: `Horizon evidence is technical, factual, and neutral. It does not constitute:\n\n• a decision,\n• an authorization,\n• a sanction,\n• a policy evaluation,\n• a compliance assertion.\n\nHorizon is a **witness**, not a judge.`,
          },
          {
            number: '12',
            title: 'Canonical Summary',
            content: `Horizon produces evidence of declaration, not evidence of correctness or legitimacy. This principle governs all Horizon proofs.`,
          },
          {
            number: '13',
            title: 'What This Document Explicitly Prevents',
            content: `• Misuse of Horizon as an approval system\n• Requalification as governance or compliance tooling\n• Attribution of responsibility to Horizon\n• Over-interpretation during audits or investigations\n\n> **Final Note:** If a reader concludes that Horizon decided, validated, authorized, or judged anything, then Horizon has been misinterpreted.`,
          },
        ],
      },
      understandingProof: {
        title: 'Understanding Horizon Proofs',
        subtitle: 'How Horizon evidence is produced and how it can be read',
        status: 'Informative · Public',
        intro: 'This document complements Proof Semantics. It does not redefine what a Horizon proof means. It explains how Horizon produces evidence and how that evidence can be examined.',
        sections: [
          {
            title: 'Sealing – How Horizon seals facts',
            content: `A fact in Horizon is simply something declared by an identified actor, at a given moment. When a fact is declared (during a crisis, an exception, or normal operations), Horizon treats this declaration as a technical event to be sealed.\n\nThe sealing process follows a fixed sequence. First, the declaration is received from a technical channel (API, email, or system integration). Horizon does not inspect, validate, or interpret its content.\n\nHorizon then assigns a single authoritative timestamp, called sealed_at. This timestamp represents the moment the declaration was sealed by Horizon. It is the only time reference asserted by the system.\n\nThe declared content is stored as fully opaque data. Horizon does not impose a schema, enforce structure, or extract meaning from the payload.\n\nThe fact is then cryptographically hashed and signed. Its integrity becomes tamper-evident.\n\nFinally, the fact is appended to an immutable chain, linked to the previous fact within the same stream. This append-only construction ensures that facts cannot be altered or removed without detection.\n\nFacts are appended to a Facts Stream. A stream has no business state. It has no opening or closing. It does not represent a workflow, a decision lifecycle, or a process state.\n\nAt any point in time, additional facts may be declared and appended to the same stream. Horizon records that a relationship was declared and seals it, without interpreting its meaning.\n\nThroughout this process, Horizon does not decide what the fact means. It does not assess correctness, legitimacy, causality, or outcome. All interpretation remains external to Horizon.`,
          },
          {
            title: 'Reading a proof – Timeline example',
            intro: 'This section illustrates how Horizon evidence can be examined once facts have been sealed. The example below shows a post-incident timeline, ordered by sealing time (sealed_at).',
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
              'when Horizon sealed them',
              'that they belong to the same stream',
            ],
            doesNotShow: [
              'whether the declarations are true',
              'whether they were authorized',
              'whether actions occurred as described',
              'whether one fact caused another',
              'whether a decision was correct or legitimate',
            ],
            conclusion: 'The timeline does not explain events. It does not reconstruct intent. It does not assign responsibility. It simply exposes sealed facts, in a verifiable order.\n\nHorizon shows what was declared. You draw the conclusions. Any conclusion (operational, legal, or ethical) must be derived outside Horizon, using external context, rules, and judgment.',
          },
          {
            title: 'Relationship to Proof Semantics',
            content: 'This document does not alter the meaning of Horizon evidence. The semantic scope and limits of Horizon proofs are defined exclusively in Proof Semantics. If a reader interprets a timeline, a stream, or a proof bundle as asserting intent, correctness, authorization, or responsibility, that interpretation is external to Horizon and not supported by the evidence itself.',
            link: { text: 'See Proof Semantics', href: '/docs/proof-semantic' },
          },
          {
            title: 'Summary',
            content: 'Horizon produces evidence by sealing declared facts. It exposes those facts in a structured, verifiable form. Understanding how Horizon seals and presents facts helps readers examine evidence correctly: without attributing meaning that Horizon does not provide.',
          },
        ],
      },
      verification: {
        title: 'Verification Guide',
        subtitle: 'Verifying a Horizon Proof Bundle',
        status: 'Canonical · Public · Reference',
        audience: 'Auditors · External reviewers · Security teams · Legal experts',
        appliesTo: 'All Horizon deployments',
        sections: [
          {
            number: '1',
            title: 'Purpose of This Document',
            content: `This document explains how Horizon evidence can be verified and what such verification guarantees. It defines:\n\n• what a Horizon proof bundle contains,\n• what is cryptographically verifiable,\n• how tampering is detected,\n• and the limits of verification.\n\nThis guide does not explain how Horizon is implemented internally. It explains what can be independently checked.`,
          },
          {
            number: '2',
            title: 'What Is a Horizon Proof Bundle',
            content: `A proof bundle is a verifiable artifact produced by Horizon that packages:\n\n• a set of sealed facts,\n• their cryptographic hashes,\n• their chaining information,\n• and a Horizon signature.\n\nA bundle represents the state of a stream at a given point in time. Bundles are immutable once issued.`,
          },
          {
            number: '3',
            title: 'Contents of a Proof Bundle',
            content: `A Horizon proof bundle includes, at minimum:\n\n• bundle_id\n• bundle_version\n• a list or manifest of facts\n• the head_hash of the stream at bundle time\n• a cryptographic signature\n• a reference to the signing key (key_id or equivalent)\n\nOptionally, a bundle may reference:\n\n• attachments manifests,\n• external evidence objects.`,
          },
          {
            number: '4',
            title: 'What Verification Checks',
            content: `Verification of a Horizon proof bundle consists of four independent checks.\n\n**4.1 Signature Verification**\nThe bundle signature is verified using the public key corresponding to the declared signing key. This establishes that the bundle was produced by Horizon and the bundle content has not been altered since signing.\n\n**4.2 Fact Hash Verification**\nFor each fact in the bundle, the fact payload is hashed and the computed hash is compared to the stored fact_hash. This establishes that each fact has not been modified after sealing.\n\n**4.3 Hash Chain Verification**\nFacts are linked using a hash chain (prev_hash → fact_hash). Verification recomputes the chain and confirms that each fact correctly references the previous one and the final computed hash matches the bundle head_hash. This establishes append-only ordering and tamper evidence across the entire stream segment.\n\n**4.4 Bundle Consistency Verification**\nThe verifier checks that the bundle references the correct stream, the set of facts is complete up to head_hash, and no fact is missing, reordered, or duplicated.`,
          },
          {
            number: '5',
            title: 'What Verification Proves',
            content: `Successful verification proves that:\n\n• the bundle was produced by Horizon,\n• the included facts were sealed by Horizon,\n• the facts have not been altered since sealing,\n• the ordering of facts is append-only and intact.\n\nVerification establishes integrity and authenticity of the evidence.`,
          },
          {
            number: '6',
            title: 'What Verification Does NOT Prove',
            content: `Verification does not prove:\n\n• that the declared facts are true,\n• that the declared actors are legitimate,\n• that actions occurred as described,\n• that timestamps reflect real-world occurrence,\n• that the stream is complete,\n• that no other facts exist outside the bundle.\n\nVerification validates evidence integrity, not evidence meaning.`,
          },
          {
            number: '7',
            title: 'Verification Scope and Independence',
            content: `Verification can be performed:\n\n• by Horizon systems,\n• by client systems,\n• by third-party auditors,\n• by regulators or courts.\n\nNo access to Horizon internal systems is required, provided that the proof bundle and the corresponding public verification material are available.`,
          },
          {
            number: '8',
            title: 'Handling of Incomplete or Partial Bundles',
            content: `A proof bundle reflects the stream up to a specific point in time. The absence of later facts:\n\n• does not indicate failure,\n• does not indicate success,\n• does not indicate abandonment.\n\nVerification does not infer completeness.`,
          },
          {
            number: '9',
            title: 'Key Management and Trust Assumptions',
            content: `Verification assumes:\n\n• the authenticity of the Horizon public signing key,\n• correct key distribution or trust anchoring.\n\nVerification does not:\n\n• assess key governance,\n• assess Horizon operational security,\n• assess client security posture.`,
          },
          {
            number: '10',
            title: 'Legal Interpretation Boundary',
            content: `Verification establishes technical integrity, not legal qualification. A verified bundle:\n\n• is not a decision,\n• is not an authorization,\n• is not a compliance assertion,\n• is not a determination of responsibility.\n\nInterpretation remains the responsibility of organizations, auditors, courts, or regulators.`,
          },
          {
            number: '11',
            title: 'Canonical Summary',
            content: `Verification confirms that Horizon evidence is intact and authentic. It does not confirm what the evidence means.`,
          },
          {
            number: '12',
            title: 'Status and Stability',
            content: `This document defines the stable verification semantics of Horizon. Any future evolution of Horizon must remain consistent with the guarantees described here.`,
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
    brand: 'HORIZON',
    brandFull: 'HORIZON par ASPLENZ',
    langSwitch: 'EN',
    nav: {
      foundations: 'Fondations',
      perspectives: 'Perspectives',
      docs: 'Documentation',
      contact: 'Contact',
    },

    // Landing page (index.md)
    index: {
      hero: {
        title: 'L\'infrastructure de preuve native.',
        tagline: 'Mettez fin à l\'ère de la reconstitution narrative. Sécurisez l\'examen de vos décisions critiques.',
        cta1: 'Comprendre la Bascule',
        cta2: 'Démarrer',
      },
      reality: {
        title: 'Le constat : Expliquer n\'est pas prouver.',
        content: 'Aujourd\'hui, les décisions de votre entreprise sont fragmentées : une discussion dans **Slack**, un accord par **email**, une précision à l\'oral et une trace indirecte dans un ticket **Jira**. Lorsque vient le moment de l\'audit ou de l\'examen, vous ne pouvez plus montrer ce qui s\'est passé ; vous ne pouvez que tenter de l\'expliquer.',
        risk: 'Cette reconstruction tardive est inévitablement interprétative et fragile face au doute.',
      },
      paradigm: {
        intro: 'Horizon change de paradigme.',
        content: 'Nous ne gérons pas vos processus, nous ancrons vos faits au moment où ils existent. Horizon fournit une infrastructure de preuve qui capture la décision à la source, avant que le temps et les interprétations ne l\'altèrent.',
      },
      useCases: {
        title: 'Une infrastructure factuelle pour vos enjeux critiques',
        items: [
          {
            icon: '🇪🇺',
            title: 'Gouvernance de l\'IA & Conformité (IA Act)',
            subtitle: 'Couche d\'Imputabilité Indépendante',
            challenge: 'Établir une « Diligence Raisonnable » et un contrôle humain effectif sans créer de friction sécuritaire, ni dépendre des outils MLOps faisant l\'objet de l\'audit.',
            value: 'Horizon opère comme un registre de faits neutre et immuable, situé strictement **en dehors de votre stack opérationnelle**.\n\n**Séparation des Responsabilités :** découplez l\'exécution (MLOps) de la preuve (Horizon) pour des pistes d\'audit indiscutables.\n\n**Architecture Zéro-Accès :** nous ne touchons ni à vos modèles, ni à vos données ; nous ancrons uniquement la preuve cryptographique de vos actions de gouvernance.\n\n**Maîtrise Certifiée :** attestez de votre contrôle opérationnel devant les autorités avec des faits qui ne peuvent être altérés par les systèmes qu\'ils décrivent.',
          },
          {
            icon: '🛡️',
            title: 'Résilience Cyber & Gestion de Crise',
            subtitle: 'Couche de Preuve Isolée',
            challenge: 'En pleine crise, la vitesse prime sur la documentation. Les audits post-incident exigent des preuves qui n\'ont pas pu être compromises en même temps que vos systèmes.',
            value: 'Horizon opère comme une couche de preuve immuable, totalement **isolée de votre infrastructure opérationnelle**.\n\n**Registres Inviolables :** même si les attaquants obtiennent un accès admin, les faits scellés restent mathématiquement inaltérables.\n\n**Chronologie Indépendante :** vos décisions de crise sont ancrées en dehors des systèmes défendus.\n\n**Autorité Forensique :** démontrez l\'intégrité de votre réponse aux régulateurs avec des preuves qui n\'ont pas pu être plantées ou modifiées après la brèche.',
          },
          {
            icon: '🏭',
            title: 'Opérations Souveraines & Secteurs Critiques',
            subtitle: 'Coffre-fort Indépendant pour Faits Opérationnels',
            challenge: 'Maintenir une imputabilité absolue dans des environnements de haute sécurité où les registres internes sont des cibles privilégiées pour les menaces sophistiquées ou les compromissions internes.',
            value: 'Horizon fournit une couche de vérification mathématique qui garantit la **souveraineté de vos preuves**, même dans les environnements les plus restreints.\n\n**Compatibilité Air-Gapped :** déployable en environnement isolé pour garantir que la preuve reste autonome et vérifiable sans dépendances externes.\n\n**Architecture Infalsifiable :** toute tentative d\'altération ou de suppression d\'un fait ancré est mathématiquement détectable, garantissant l\'intégrité totale de votre historique.\n\n**Autonomie Stratégique :** reprenez le contrôle de vos preuves. Horizon garantit qu\'une fois un fait scellé, son existence et sa chronologie ne peuvent plus être niées, même par le système qui l\'a créé.',
          },
        ],
      },
      pillars: {
        title: 'Les garanties de l\'infrastructure Horizon',
        items: [
          {
            title: 'Intégrité Native',
            description: 'Les faits ne peuvent être ni modifiés ni supprimés sans que cela ne soit détecté grâce au chaînage cryptographique.',
          },
          {
            title: 'Neutralité Totale',
            description: 'Horizon n\'interprète pas vos données (votre charge utile est opaque) et n\'impose aucun workflow métier.',
          },
          {
            title: 'Horodatage d\'Autorité',
            description: 'Chaque fait reçoit un horodatage certifié et immuable attribué par Horizon, faisant foi de manière indiscutable lors des examens.',
          },
          {
            title: 'Indépendance de Vérification',
            description: 'Tout auditeur peut vérifier l\'intégrité de la chaîne de manière autonome, sans accès à vos systèmes internes.',
          },
        ],
      },
      quote: 'Ce qui est scellé devient une référence.',
      closing: 'Horizon est une infrastructure de preuve factuelle, neutre et indépendante. Elle ne rend pas vos décisions meilleures. Elle rend leur existence indiscutable.',
      ctas: {
        briefing: 'Programmer un Briefing Stratégique',
        verification: 'Accéder au Guide de Vérification',
      },
    },

    // Contact page
    contact: {
      title: 'Discuter de votre cas d\'usage',
      intro: 'Ce briefing s\'adresse aux responsables **Sécurité (CISO)**, **Risk**, **Compliance** et **Risk Technology** dans des environnements régulés.',
      purpose: 'L\'objectif est de discuter des **exigences en matière de preuves**, de **l\'examen post-incident** et des **contraintes d\'intégration**, *pas* de vendre un workflow ou un outil.',
      option1: {
        title: 'Planifier un briefing',
        description: 'Réservez un briefing **technique ou risque de 30 minutes** avec notre équipe.',
        scope: {
          title: 'Périmètre :',
          items: ['preuves décisionnelles', 'preuves post-incident', 'audit et vérification'],
        },
        audience: {
          title: 'Audience :',
          items: ['CISO', 'Risk', 'Legal', 'CTO'],
        },
        format: {
          title: 'Format :',
          items: ['technique et factuel'],
        },
        cta: 'Planifier un briefing',
      },
      option2: {
        title: 'Envoyer un email',
        description: 'Pour les demandes générales ou si vous préférez la communication écrite.',
        email: 'contact@asplenz.com',
      },
    },

    // Foundations
    foundations: {
      problem: {
        title: 'Le Problème',
        sections: [
          {
            title: 'Les décisions vivent partout, et nulle part',
            content: `Aujourd'hui, les décisions des entreprises ne vivent nulle part en particulier. Elles apparaissent par fragments, disséminées dans une multitude d'outils qui n'ont jamais été conçus pour les contenir. Une discussion commence dans Slack, se prolonge par email, se précise à l'oral lors d'une réunion, se tranche au téléphone, puis laisse parfois une trace indirecte dans un ticket Jira ou un formulaire ServiceNow. L'action, elle, s'exécute ailleurs encore, dans un terminal, une console cloud ou un système automatisé, pendant que les applications consignent ce qu'elles peuvent dans des fichiers de logs pensés pour le diagnostic, non pour la preuve. Sur le moment, cette dispersion n'est pas un problème. Les équipes se comprennent, la décision circule, l'organisation avance.`,
          },
          {
            title: 'La question vient toujours plus tard',
            content: `La difficulté n'apparaît que plus tard, lorsque l'on cherche à établir ce qui s'est réellement passé. À ce moment-là, il n'existe aucun point unique vers lequel se tourner. Il faut reconstruire. On rassemble ce qui reste : des messages extraits de Slack, des captures d'écran jointes à des emails, des PDF exportés depuis des outils métiers, des tickets modifiés plusieurs fois, des logs techniques difficiles à interpréter hors de leur contexte initial. Très vite, on s'aperçoit que cette matière est incomplète. Certaines discussions n'ont jamais été écrites, certains échanges ont eu lieu à l'oral, certains messages ont été supprimés, certains logs ont été purgés, certaines personnes ne sont plus là. Ce qui manque ne peut plus être récupéré.`,
          },
          {
            title: 'La reconstruction remplace la preuve',
            content: `Face à ces absences, la reconstruction devient inévitablement interprétative. On comble les vides avec des souvenirs, des intentions supposées, des raisonnements formulés après coup. Une histoire cohérente se forme, souvent de bonne foi, parfois sous contrainte, toujours influencée par le contexte dans lequel la question est posée. Ce récit peut sembler solide, mais il ne constitue plus une preuve. Les éléments produits (captures d'écran, exports PDF, emails isolés) ne portent pas leur propre intégrité. Ils ne permettent pas à un tiers indépendant de vérifier qu'ils n'ont pas été modifiés, sélectionnés ou sortis de leur contexte. Ils demandent à être crus, et dès qu'une preuve demande à être crue, elle cesse d'être opposable.`,
          },
          {
            title: 'Le temps travaille contre la certitude',
            content: `Avec le temps, cette fragilité ne fait que s'accentuer. Les outils évoluent, les formats changent, les systèmes sont mis à jour, les politiques de rétention effacent ce qui n'était pas destiné à durer. Les souvenirs s'altèrent, les certitudes se déplacent. Six mois plus tard, parfois un an plus tard, la décision n'existe plus que sous la forme d'un récit que l'organisation est capable de produire sur elle-même. Ce récit peut être honnête, précis, détaillé, mais il reste vulnérable au doute, parce qu'il repose sur une reconstruction tardive d'un réel qui n'a jamais été capturé.`,
          },
          {
            title: 'Les outils n\'ont jamais été conçus pour la preuve',
            content: `Le problème n'est pas que les entreprises manquent d'outils. Au contraire, elles en utilisent trop, chacun optimisé pour une fonction particulière. Slack facilite la discussion, l'email structure la communication, Jira organise le travail, ServiceNow encadre les processus, les systèmes techniques exécutent, les logs observent. Mais aucun de ces outils n'a pour vocation de figer l'instant où une décision devient irréversible, ni d'attester qu'une autorité a déclaré quelque chose à un moment précis. La décision traverse les systèmes sans jamais s'y inscrire pleinement. Elle existe dans l'action, mais pas comme un fait autonome, vérifiable indépendamment.`,
          },
          {
            title: 'Expliquer n\'est pas prouver',
            content: `Lorsque la question est finalement posée, souvent bien après les événements, l'organisation ne peut plus montrer ce qui s'est passé. Elle peut seulement l'expliquer. Et expliquer, aussi rigoureusement que possible, n'est jamais équivalent à prouver. Ce n'est pas un problème de discipline, ni de méthode, ni de bonne volonté. C'est un problème structurel. Tant qu'il restera invisible, les organisations continueront de croire qu'elles pourront expliquer plus tard, pour découvrir, trop tard, qu'expliquer n'est pas prouver.`,
          },
        ],
      },
      shift: {
        title: 'Le Déplacement',
        sections: [
          {
            title: 'Le réflexe d\'améliorer l\'existant',
            content: `Face à la fragilité de la preuve, la réaction naturelle des organisations est presque toujours la même. On cherche à améliorer ce qui existe déjà. On ajoute des champs obligatoires, on renforce les workflows de validation, on conserve les logs plus longtemps, on demande aux équipes d'écrire davantage. L'effort est sincère, souvent coûteux, parfois même efficace sur le court terme. Pourtant, le problème ne disparaît pas.`,
          },
          {
            title: 'Plus de structure ne crée pas de preuve',
            content: `Ces réponses reposent sur une hypothèse implicite : si les outils sont suffisamment bien organisés, la preuve finira par émerger. Or l'organisation ne produit pas de preuve. Elle produit de la cohérence. Les workflows imposent un chemin, mais ne garantissent pas que la décision réelle a été prise dans ce chemin. Les logs décrivent ce que les systèmes font, pas ce que les autorités déclarent. La documentation formalise des récits, presque toujours après coup. Dans tous les cas, la preuve reste dérivée.`,
          },
          {
            title: 'Une catégorie entière manquante',
            content: `Ce qui manque n'est pas une règle supplémentaire, ni un outil de plus, ni une meilleure discipline humaine. Il manque une catégorie entière d'infrastructure : une infrastructure de preuve des décisions. Son rôle n'est pas de décider, ni de gouverner, ni de contrôler. Son rôle est de capturer l'existence d'un fait décisionnel au moment précis où il se produit, avant toute interprétation, avant toute reconstruction. Tant que cette catégorie n'existe pas, toute tentative de preuve repose sur des traces secondaires, fragiles par nature.`,
          },
          {
            title: 'De la reconstruction à l\'ancrage',
            content: `Le déplacement est là. Il ne s'agit plus de reconstruire après coup, ni d'analyser plus finement, ni de gouverner plus strictement. Il s'agit de reconnaître que certains faits doivent être ancrés au moment où ils existent, avant que le temps, les systèmes et les interprétations ne les altèrent. La preuve ne se déduit pas. Elle s'ancre, ou elle se perd.`,
          },
          {
            title: 'Une frontière claire',
            content: `À partir de ce constat, une frontière devient nette. D'un côté, les systèmes qui décident, exécutent, communiquent et analysent. De l'autre, une infrastructure d'ancrage factuel, neutre et indépendante, dont le rôle n'est pas d'intervenir, mais d'attester. Ce déplacement ne rend pas les décisions meilleures. Il rend leur existence moins discutable.`,
          },
          {
            title: 'Ce que ce déplacement rend possible',
            content: `Une fois ce déplacement opéré, la question de la preuve change de nature. Elle cesse d'être un exercice fragile de justification pour devenir un problème de vérification. Non pas parce que les organisations contrôlent mieux, mais parce qu'elles disposent enfin de faits qui n'ont pas besoin d'être racontés.`,
          },
        ],
      },
      horizon: {
        title: 'Horizon : Une infrastructure de preuve décisionnelle',
        subtitle: 'Une infrastructure de preuve',
        sections: [
          {
            title: 'Une infrastructure de preuve',
            content: `Horizon est une infrastructure de preuve. Elle existe pour une raison simple : permettre à une organisation de s'appuyer sur des faits, et non sur des récits, lorsqu'une décision critique est remise en question.`,
          },
          {
            title: 'En dehors du système décisionnel',
            content: `Horizon n'aide pas à décider. Il ne contrôle pas l'action. Il n'impose aucun processus. Il se tient volontairement en dehors du système décisionnel.\n\nCette posture n'est pas un manque, mais une condition. Dès lors qu'un système valide, autorise ou bloque, il devient partie prenante de la décision. La preuve qu'il produit cesse alors d'être neutre.`,
          },
          {
            title: 'Ce qu\'Horizon enregistre',
            content: `Ce qu'Horizon capture, ce sont des faits déclarés : qu'une intention a été exprimée, qu'une information a été transmise, qu'un résultat a été observé. Il n'en déduit rien. Il ne qualifie rien.\n\nIl garantit uniquement que ces faits ont existé, à un moment donné, et qu'ils peuvent être vérifiés indépendamment.`,
          },
          {
            title: 'Pas de workflow, pas d\'interface pour décider',
            content: `Horizon ne cherche pas à remplacer les outils existants. Les décisions continuent de naître là où elles naissent réellement : dans des échanges humains, des systèmes métiers, des contextes d'urgence ou d'exception. Horizon s'adapte à ces lieux sans demander aux décideurs de changer leurs habitudes ni d'apprendre une nouvelle interface.`,
          },
          {
            title: 'Invisible quand cela compte',
            content: `Cette discrétion est essentielle. Horizon n'est pas une destination où l'on va travailler. C'est une couche silencieuse, présente au moment où les faits s'expriment, invisible pour l'opérationnel, mais pleinement accessible après coup pour ceux qui doivent établir ce qui s'est réellement passé.`,
          },
          {
            title: 'Des faits, pas des explications',
            content: `Ce que fournit Horizon n'est ni une analyse, ni une explication, ni une justification. C'est une matière factuelle, destinée à être examinée par d'autres : auditeurs, équipes risque, juristes, autorités de contrôle. Toute interprétation appartient à ces instances, hors du système.`,
          },
          {
            title: 'Ce qu\'Horizon ne promet pas',
            content: `Horizon ne rend pas les décisions meilleures. Il ne prévient pas les erreurs. Il ne garantit pas que les règles ont été respectées.\n\nIl garantit quelque chose de plus fondamental : que certains faits existent, qu'ils sont datés, et qu'ils ne peuvent pas être niés a posteriori.`,
          },
          {
            title: 'Pourquoi il existe',
            content: `Dans un monde où les décisions sont rapides, distribuées et contestables, Horizon ne simplifie pas la réalité. Il la rend vérifiable.`,
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
            title: 'Où Horizon se situe',
            content: `Horizon fournit une **infrastructure de preuve indépendante**.\n\nIl n'évalue pas la conformité. Il n'interprète pas la responsabilité. Il ne valide pas les décisions.\n\nIl enregistre les faits déclarés et les scelle au moment où ils sont soumis, produisant des preuves qui peuvent être vérifiées **sans dépendre des systèmes opérationnels qui les ont générées**.\n\nHorizon existe pour que l'audit ne dépende pas de la confiance envers les données contrôlées par l'informatique.`,
          },
          {
            title: 'Ce que Horizon apporte à l\'Audit & au Risque',
            items: [
              'Un enregistrement append-only des faits déclarés',
              'Des horodatages indépendants assignés au moment du scellement',
              'Une intégrité cryptographique qui rend toute altération ultérieure détectable',
              'Des dossiers de preuve (proof bundles) exportables et vérifiables hors d\'Horizon',
            ],
            conclusion: 'Rien de plus.',
          },
          {
            title: 'Ce que Horizon ne fait pas',
            items: [
              'Ne décide pas si un processus est conforme',
              'Ne remplace pas la méthodologie d\'audit',
              'Ne qualifie ni la responsabilité ni l\'intention',
              'N\'explique pas ce qui aurait dû se passer',
            ],
            conclusion: 'Horizon produit des faits. L\'audit produit des conclusions.',
          },
          {
            title: 'Après un incident, vous pouvez établir',
            intro: 'En utilisant Horizon, vous pouvez vérifier :',
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
            content: `La crédibilité de l'audit dépend de l'indépendance.\n\nLorsque les preuves sont produites et stockées par les mêmes systèmes qui ont exécuté les actions, l'intégrité ne peut être que présumée. Horizon introduit une séparation structurelle entre **l'action** et **la preuve**.\n\nCette séparation permet à l'audit d'opérer sur des faits **immuables par conception** (by design), et non par politique.`,
          },
          {
            title: 'Ce que Horizon change',
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
            title: 'Où Horizon se situe',
            content: `Horizon fournit une couche de preuve passive et externe.\n\nIl ne détecte pas les attaques. Il ne bloque pas les actions. Il ne sécurise pas l'infrastructure. Il enregistre les faits déclarés en dehors du chemin d'exécution et les scelle de manière à rendre toute modification ultérieure détectable, même si les systèmes d'origine sont totalement compromis.\n\nHorizon existe pour préserver l'intégrité post-incident, non pour prévenir les incidents.`,
          },
          {
            title: 'Ce que Horizon apporte à la Sécurité',
            items: [
              'Un canal passif pour déclarer des faits pertinents pour la sécurité',
              'Des preuves scellées indépendamment des outils de sécurité',
              'Une intégrité append-only qui survit aux accès administratifs',
              'Une preuve qui reste vérifiable après la compromission du système',
            ],
            conclusion: 'Rien de plus.',
          },
          {
            title: 'Ce que Horizon ne fait pas',
            items: [
              'Ne prévient ni ne détecte les attaques',
              'Ne remplace pas les plateformes SIEM, EDR ou de journalisation',
              'Ne durcit pas l\'infrastructure',
              'Ne qualifie ni l\'intention ni la responsabilité',
            ],
            conclusion: 'Horizon ne fait pas partie de la stack défensive. C\'est le témoin qui reste quand les défenses échouent.',
          },
          {
            title: 'Après un incident, vous pouvez établir',
            intro: 'En utilisant Horizon, vous pouvez vérifier :',
            items: [
              'Quels faits ont été déclarés avant, pendant ou après l\'incident',
              'Quand ces faits ont été scellés',
              'Si une trace quelconque a été altérée par la suite',
            ],
            conclusion: 'Vous ne dépendez plus uniquement de logs qui pourraient avoir été nettoyés ou reconstruits.',
          },
          {
            title: 'Pourquoi cela compte pour la Sécurité',
            content: `Les outils de sécurité opèrent à l'intérieur du système qu'ils protègent. Lorsque ce système est compromis, leur sortie devient suspecte.\n\nHorizon introduit un point de vérité externe. Il ne prétend pas à l'immunité. Il offre une détectabilité de l'altération, qui est la seule propriété survivant à une compromission totale.\n\nCela déplace les discussions post-incident de « que croyons-nous ? » à « que pouvons-nous vérifier ? ».`,
          },
          {
            title: 'Ce que Horizon change',
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
        subtitle: 'Pour les CTO et architectes système responsables de la fiabilité des systèmes et de l\'intégrité à long terme.',
        sections: [
          {
            title: 'La réalité de votre rôle',
            content: `Vous concevez des systèmes qui doivent évoluer.\n\nIls changent, montent en charge, sont patchés, reconfigurés et opérés par de nombreuses mains. Ils doivent permettre la correction, le rollback, l'override et la suppression pour rester utilisables. Pourtant, on vous demande souvent de prouver, après coup, ce que ces systèmes ont fait et pourquoi.\n\nVotre défi n'est pas l'exécution. C'est de produire des preuves à partir de systèmes qui ne peuvent pas être figés.`,
          },
          {
            title: 'Où Horizon se situe',
            content: `Horizon fournit une infrastructure de preuve séparée.\n\nIl ne participe pas à l'exécution. Il ne valide pas les flux. Il n'impose ni modèles ni workflows. Il reçoit les faits déclarés et les scelle en dehors de vos systèmes opérationnels, de sorte que la preuve ne dépend pas de la mutabilité de l'infrastructure de production.\n\nHorizon existe pour résoudre un conflit structurel : les systèmes qui agissent ne peuvent pas être en même temps leur propre enregistrement immuable.`,
          },
          {
            title: 'Ce que Horizon apporte à l\'Engineering',
            items: [
              'Une API passive pour déclarer des faits',
              'Aucune dépendance dans le chemin d\'exécution',
              'Aucun schéma ou workflow imposé',
              'Une intégrité append-only gérée de manière externe',
            ],
            conclusion: 'Rien de plus.',
          },
          {
            title: 'Ce que Horizon ne fait pas',
            items: [
              'Ne valide pas les actions',
              'Ne stocke pas de secrets ou de données métier',
              'Ne remplace pas les logs ou les outils d\'observabilité',
              'N\'impose pas de contraintes au runtime',
            ],
            conclusion: 'Horizon n\'est pas un composant opérationnel. C\'est une couche de preuve externe.',
          },
          {
            title: 'Après un incident, vous pouvez établir',
            intro: 'En utilisant Horizon, vous pouvez vérifier :',
            items: [
              'Ce qui a été déclaré par vos systèmes ou opérateurs',
              'Quand cela a été scellé',
              'Si cela a été altéré par la suite',
            ],
            conclusion: 'Sans durcir les logs, figer les bases de données ou reconstruire des pipelines d\'audit.',
          },
          {
            title: 'Pourquoi cela compte pour l\'Engineering',
            content: `Construire des systèmes qui agissent est déjà complexe. Construire des systèmes qui doivent également prouver leur propre passé crée un conflit de responsabilité.\n\nHorizon supprime ce fardeau. En externalisant la preuve, vous maintenez la flexibilité des systèmes opérationnels tout en garantissant que les faits déclarés restent vérifiables dans le temps.`,
          },
          {
            title: 'Ce que Horizon change',
            before: ['La preuve est intégrée dans des systèmes mutables', 'L\'intégrité repose sur le contrôle d\'accès', 'Les architectes portent le fardeau de l\'immuabilité'],
            after: ['La preuve est externalisée', 'L\'intégrité est vérifiable indépendamment', 'La responsabilité de l\'immobilité est retirée des systèmes de production'],
          },
        ],
        next: {
          title: 'Voir comment les faits sont scellés',
          description: 'Cet exemple montre comment un fait déclaré est scellé, horodaté et ajouté à une chaîne immuable, sans impact sur l\'exécution du système.',
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
            title: 'Où Horizon se situe',
            content: `Horizon fournit une infrastructure neutre pour les enregistrements factuels.\n\nIl n'évalue pas la légalité. Il ne qualifie pas la responsabilité. Il n'émet ni jugements ni conclusions. Il enregistre les faits déclarés et scelle leur existence à un instant précis, produisant des preuves dont l'intégrité peut être vérifiée indépendamment des systèmes et des personnes impliqués.\n\nHorizon existe pour séparer le fait de l'interprétation.`,
          },
          {
            title: 'Ce que Horizon apporte au Juridique',
            items: [
              'Des enregistrements factuels neutres et non qualifiés',
              'Des horodatages indépendants assignés au moment du scellement',
              'Une intégrité détectable pour les faits déclarés',
              'Une preuve qui peut être vérifiée sans témoignage ni confiance système',
            ],
            conclusion: 'Rien de plus.',
          },
          {
            title: 'Ce que Horizon ne fait pas',
            items: [
              'Ne détermine pas la conformité légale',
              'N\'évalue pas la responsabilité ou la faute',
              'Ne remplace pas l\'analyse juridique',
              'N\'affirme pas de valeur probante',
            ],
            conclusion: 'Horizon enregistre des faits. L\'interprétation juridique reste entièrement humaine et contextuelle.',
          },
          {
            title: 'Après un incident ou un litige, vous pouvez établir',
            intro: 'En utilisant Horizon, vous pouvez vérifier :',
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
            content: `Le raisonnement juridique dépend de prémisses stables. Lorsque l'intégrité des faits est contestée, la discussion passe du fond à la crédibilité.\n\nHorizon fournit un socle factuel qui précède l'interprétation et survit aux changements organisationnels ou techniques. Cela permet aux équipes juridiques d'argumenter à partir de faits vérifiés, et non de récits reconstruits.`,
          },
          {
            title: 'Ce que Horizon change',
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
            title: 'Où Horizon se situe',
            content: `Horizon fournit une infrastructure neutre pour sceller les faits déclarés.\n\nIl n'évalue pas les modèles. Il n'explique pas les décisions. Il n'impose pas de règles de gouvernance. Il enregistre les entrées, les sorties ou les observations déclarées à un instant précis et les scelle indépendamment des systèmes d'apprentissage.\n\nHorizon existe pour garantir que les faits ne dérivent pas à mesure que les systèmes évoluent.`,
          },
          {
            title: 'Ce que Horizon apporte à la Gouvernance de l\'IA et des Données',
            items: [
              'Des enregistrements scellés des entrées ou sorties déclarées',
              'Des horodatages indépendants au moment de la déclaration',
              'Une intégrité append-only en dehors des pipelines d\'entraînement',
              'Une preuve qui reste vérifiable après la mise à jour des modèles',
            ],
            conclusion: 'Rien de plus.',
          },
          {
            title: 'Ce que Horizon ne fait pas',
            items: [
              'N\'explique pas le comportement du modèle',
              'N\'assure pas l\'équité ou l\'atténuation des biais',
              'N\'impose pas la conformité réglementaire',
              'Ne surveille pas la performance ou la dérive',
            ],
            conclusion: 'Horizon ne gouverne pas l\'IA. Il préserve les faits qui l\'entourent.',
          },
          {
            title: 'Après un incident ou une révision, vous pouvez établir',
            intro: 'En utilisant Horizon, vous pouvez vérifier :',
            items: [
              'Quelles données ou sorties ont été déclarées',
              'Quand elles ont été scellées',
              'Si elles ont été altérées par la suite',
            ],
            conclusion: 'Même si les modèles, les jeux de données ou les pipelines ont changé depuis.',
          },
          {
            title: 'Pourquoi cela compte pour la Gouvernance de l\'IA et des Données',
            content: `Les systèmes d'IA réécrivent leur propre passé. Les logs sont élagués. Les données d'entraînement sont remplacées. Les sorties ne sont plus reproductibles.\n\nHorizon introduit des points de référence fixes qui restent stables pendant que les systèmes évoluent. Cela permet à la gouvernance et à la surveillance d'opérer sur des faits, et non sur des histoires reconstruites ou simulées.`,
          },
          {
            title: 'Ce que Horizon change',
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
            content: 'Un flux est identifié par stream_id, fourni par le client dans l\'URL. Si aucun flux avec cet ID n\'existe, Horizon le crée implicitement lors du scellement du premier fait.\n\nLe seul identifiant que vous gérez est stream_id ; Horizon n\'impose aucune sémantique métier sur celui-ci.',
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
            content: 'Dans les déploiements en production, le tenant_id est généralement dérivé du contexte d\'authentification plutôt que fourni dans la charge utile.\n\nVotre charge utile est opaque pour Horizon. Elle est enregistrée exactement telle que fournie.',
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
              'Horizon a attribué sealed_at_ms (horodatage faisant autorité)',
              'Horizon a calculé fact_hash à partir d\'une représentation déterministe du fait',
              'Horizon a lié le fait au précédent via prev_hash',
              'Horizon a stocké le fait (en ajout uniquement / append-only)',
            ],
            content: 'Horizon n\'a pas interprété custom_payload. Ce sont vos données.',
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
            { property: 'Autorité de preuve', guarantee: 'sealed_at_ms est attribué par Horizon' },
          ],
          note: 'Ces propriétés sont garanties même si le système client est compromis, car toute modification est détectable.',
        },
        whatNotDo: {
          title: 'Ce qu\'Horizon ne fait pas',
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
        appliesTo: 'Tous les déploiements Horizon',
        sections: [
          {
            number: '1',
            title: 'Objet de ce document',
            content: `Ce document définit la portée et les limites sémantiques des preuves produites par Horizon. Il existe pour :\n\n• clarifier ce qu'un fait scellé établit en tant que preuve,\n• délimiter explicitement ce qu'Horizon n'affirme pas,\n• prévenir toute mauvaise interprétation ou requalification des preuves Horizon.\n\nLa preuve Horizon est factuelle, déclarative et non interprétative. Ce document constitue une frontière de responsabilité sémantique entre :\n\n• **Horizon** (intégrité de la preuve),\n• et les **clients Horizon** (vérité, légitimité, interprétation).`,
          },
          {
            number: '2',
            title: 'Principe sémantique central',
            content: `Une preuve Horizon établit l'existence d'une déclaration : rien de plus. Elle prouve que :\n\n• une déclaration a été reçue,\n• elle a été scellée à un instant précis,\n• elle a été attribuée telle que déclarée,\n• elle appartient à un flux de faits liés.\n\nElle ne prouve ni l'intention, ni la légitimité, ni l'exactitude, ni la causalité, ni le résultat.`,
          },
          {
            number: '3',
            title: 'Ce qu\'un fait scellé prouve',
            content: `Un fait scellé prouve, et prouve uniquement, que :\n\n• une information a été déclarée,\n• par l'acteur identifié dans le fait,\n• et scellée par Horizon à l'instant sealed_at,\n• sans altération après le scellement.\n\nCette preuve est :\n\n• en ajout uniquement (append-only),\n• infalsifiable (tamper-evident),\n• vérifiable de manière indépendante.`,
          },
          {
            number: '4',
            title: 'Ce qu\'un fait scellé ne prouve PAS',
            content: `Un fait scellé ne prouve pas :\n\n• que la déclaration est vraie,\n• que la déclaration reflète une intention,\n• que la déclaration était autorisée,\n• qu'une action a eu lieu à l'heure déclarée,\n• qu'une action a eu lieu tout court,\n• qu'un fait a causé un autre fait,\n• qu'une responsabilité ou une faute existe,\n• qu'une politique, une règle ou une obligation a été satisfaite.\n\nHorizon n'induit, ne calcule, ni n'évalue le sens des données.`,
          },
          {
            number: '11',
            title: 'Positionnement juridique et réglementaire',
            content: `La preuve Horizon est technique, factuelle et neutre. Elle ne constitue pas :\n\n• une décision,\n• une autorisation,\n• une sanction,\n• une évaluation de politique,\n• une assertion de conformité.\n\nHorizon est un **témoin**, pas un juge.`,
          },
          {
            number: '12',
            title: 'Résumé canonique',
            content: `Horizon produit une preuve de déclaration, et non une preuve d'exactitude ou de légitimité. Ce principe régit toutes les preuves Horizon.`,
          },
        ],
      },
      understandingProof: {
        title: 'Comprendre les preuves Horizon',
        subtitle: 'Comment les preuves Horizon sont produites et comment elles peuvent être lues',
        status: 'Informatif · Public',
        intro: 'Ce document complète Proof Semantics. Il ne redéfinit pas la signification d\'une preuve Horizon. Il explique comment Horizon produit des preuves et comment ces preuves peuvent être examinées.',
        sections: [
          {
            title: 'Le scellement – Comment Horizon scelle les faits',
            content: `Un fait dans Horizon est simplement une chose déclarée par un acteur identifié, à un moment donné. Lorsqu'un fait est déclaré (pendant une crise, une exception ou des opérations normales), Horizon traite cette déclaration comme un événement technique à sceller.`,
          },
          {
            title: 'Lire une preuve – Exemple de chronologie',
            intro: 'Cette section illustre comment les preuves Horizon peuvent être examinées une fois les faits scellés.',
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
              'quand Horizon les a scellées',
              'qu\'elles appartiennent au même flux',
            ],
            doesNotShow: [
              'si les déclarations sont vraies',
              'si elles ont été autorisées',
              'si les actions se sont produites comme décrit',
              'si un fait a causé un autre',
              'si une décision était correcte ou légitime',
            ],
            conclusion: 'Horizon montre ce qui a été déclaré. Vous tirez les conclusions.',
          },
          {
            title: 'Résumé',
            content: 'Horizon produit des preuves en scellant des faits déclarés. Il expose ces faits sous une forme structurée et vérifiable.',
          },
        ],
      },
      verification: {
        title: 'Guide de vérification',
        subtitle: 'Vérifier un faisceau de preuves Horizon',
        status: 'Canonique · Public · Référence',
        audience: 'Auditeurs · Reviseurs externes · Équipes sécurité · Experts juridiques',
        appliesTo: 'Tous les déploiements Horizon',
        sections: [
          {
            number: '1',
            title: 'Objet de ce document',
            content: `Ce document explique comment les preuves Horizon peuvent être vérifiées et ce qu'une telle vérification garantit.`,
          },
          {
            number: '5',
            title: 'Ce que la vérification prouve',
            content: `Une vérification réussie prouve que :\n\n• le faisceau a été produit par Horizon,\n• les faits inclus ont été scellés par Horizon,\n• les faits n'ont pas été altérés depuis leur scellement,\n• l'ordre des faits est en ajout uniquement et intact.`,
          },
          {
            number: '6',
            title: 'Ce que la vérification ne prouve PAS',
            content: `La vérification ne prouve pas :\n\n• que les faits déclarés sont vrais,\n• que les acteurs déclarés sont légitimes,\n• que les actions se sont déroulées comme décrit.`,
          },
          {
            number: '11',
            title: 'Résumé canonique',
            content: `La vérification confirme que la preuve Horizon est intacte et authentique. Elle ne confirme pas ce que la preuve signifie.`,
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
