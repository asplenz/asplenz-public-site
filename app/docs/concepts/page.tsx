'use client'
import Link from 'next/link'
import { useLang } from '@/lib/LangContext'

const content = {
  en: {
    title: 'Concepts',
    intro: "Knowledge organizes your team's decisions, constraints, and standards into five core entities. This page explains what each one is, why it exists, and how they work together.",
    scopes: {
      title: 'Scopes and Namespaces',
      body: 'Scopes organize knowledge by domain. Namespaces subdivide scopes for finer-grained structure.',
      body2: 'A scope represents a domain or department — Engineering, Product, Operations, Security, Legal. Each scope contains its own decisions, invariants, rules, overrides, and events.',
      imgAlt: 'Scope and namespace tree',
      imgSrc: '/images/docs/knowledge-scope-tree-en.svg',
      body3: 'Namespaces subdivide a scope into sub-domains. Every scope starts with a `global` namespace. You can create additional namespaces to organize entries by team or area. Namespaces support up to two levels of nesting (e.g. `payments/stripe`).',
      body4: 'API keys control access at the scope level: no access, reader, contributor, or admin.',
      body5: 'Tenants represent organizations. Each tenant has its own scopes, entries, and API keys. Isolation is strict — a key from one tenant cannot access another tenant\'s data.',
    },
    decisions: {
      title: 'Decisions',
      intro: 'A decision records what was decided, by whom, when, and why — as an immutable historical fact.',
      example: '"We chose PostgreSQL for all transactional data stores. We evaluated PostgreSQL, DynamoDB, and CockroachDB. PostgreSQL won on ACID guarantees without distributed complexity."',
      body: 'Decisions capture four things: what was decided, the context that led to it, the reasoning behind the choice, and who made it (human, agent, or system).',
      immutable: 'Decisions are immutable — once created, they cannot be modified. If a decision is later revised, the new decision links to the old one via a `supersedes` relation. This preserves the full history of how thinking evolved.',
      creation: 'Decisions can be created from the dashboard, the API, or by an AI agent via MCP (e.g. "Record a decision: we chose Playwright for E2E testing").',
      whyTitle: 'Why decisions matter',
      why: 'Without recorded decisions, teams spend time re-debating settled questions. New hires don\'t know why things are the way they are. Knowledge makes the reasoning searchable and permanent.',
      bestPracticesTitle: 'Best practices',
      bestPractices: [
        { label: 'Record at decision time', desc: 'not retroactively — context and reasoning are freshest when the decision is made.' },
        { label: 'Include the alternatives considered', desc: '— "We evaluated X, Y, and Z" is more valuable than "We chose X."' },
        { label: 'Link to constraints', desc: '— if a decision creates a rule or invariant, link them so the reasoning is traceable.' },
      ],
    },
    invariants: {
      title: 'Invariants',
      intro: 'An invariant is an absolute constraint — something that must never be violated. Invariants are the strongest enforcement mechanism in Knowledge.',
      example: '"All public API endpoints must require authentication."',
      blocking: 'Invariants are blocking: if an action conflicts with an active invariant, Knowledge reports a blocking conflict. The action should be stopped or an override must be obtained.',
      enforcementTitle: 'How invariants are enforced',
      enforcementIntro: 'Invariants are checked at three points:',
      enforcement: [
        { label: 'Compliance check', desc: '— an agent or human tests an intended action against the registry. If it conflicts with an invariant, Knowledge returns a blocking result.' },
        { label: 'CI Verifier', desc: '— checks PRs against active invariants. If an applicable invariant is not addressed in the PR\'s Implementation Report, the pipeline fails. For example, a PR that adds an API endpoint without mentioning the "All endpoints require authentication" invariant would be blocked.' },
        { label: 'MCP Agent', desc: '— the agent queries invariants before acting. If a conflict is detected, it stops and reports, or requests approval.' },
      ],
      approvalTitle: 'Approval-gated invariants',
      approvalIntro: 'Some invariants are too critical for anyone to bypass silently. When `requires_approval` is enabled, an exception requires human approval:',
      approvalSteps: [
        'Agent detects conflict with invariant',
        'Agent requests approval (with justification)',
        'Human reviews in the dashboard (or via Slack notification)',
        'If approved → an override is auto-created',
        'Agent re-checks → conflict resolved → proceeds',
      ],
      approvalNote: 'This ensures human oversight for the most critical constraints.',
      bestPracticesTitle: 'Best practices',
      bestPractices: [
        { label: 'Keep invariants few and critical', desc: '— if everything is an invariant, nothing is. Reserve them for constraints that should genuinely never be violated.' },
        { label: 'Write clear rationale', desc: '— explain why the constraint exists, not just restate it.' },
        { label: 'Review periodically', desc: '— invariants that no longer apply should be revoked, not left as noise.' },
      ],
    },
    rules: {
      title: 'Rules',
      intro: 'A rule is an active directive — a statement of what should be done. Unlike invariants (absolute blocks), rules can be mandatory or advisory, and they are versioned to track how standards evolve.',
      example: '"All PRs must be reviewed by at least one team member before merging."',
      severityTitle: 'Severity levels',
      severity: {
        headers: ['Severity', 'Meaning', 'CI Behavior'],
        rows: [
          ['MANDATORY', 'Must be followed', 'Verifier fails if uncited'],
          ['ADVISORY', 'Should be followed', 'Verifier warns if uncited'],
        ],
      },
      versioningTitle: 'Versioning',
      versioning: 'Rules change over time. When a rule is updated, Knowledge creates a new version while preserving the full history. Each version records who changed it, when, and why — your audit trail for how standards evolved.',
      versioningExample: 'For example, a rule might start as "All PRs must be reviewed by one team member" and later become "...by two team members" after a production incident. Both versions are preserved.',
      bestPracticesTitle: 'Best practices',
      bestPractices: [
        { label: 'Distinguish mandatory from advisory', desc: '— not every guideline needs to block CI.' },
        { label: 'Version with change reasons', desc: '— a version without a reason is an incomplete audit trail.' },
        { label: 'Keep directives actionable', desc: '— "Code should be clean" is not enforceable. "All functions must have explicit return types" is.' },
      ],
    },
    overrides: {
      title: 'Overrides',
      intro: 'An override is a governed exception to an invariant or rule. It documents that the organization knowingly deviated from a constraint, with justification and conditions.',
      example: '"Health endpoint must be public for load balancer checks. Only applies to /health and /ready endpoints. Expires 2025-06-01."',
      notWorkaround: 'Overrides are not workarounds. They are explicit, documented exceptions that prove the organization acknowledged a constraint, evaluated the risk, and decided to deviate — with a clear paper trail.',
      tempPermTitle: 'Temporary vs. permanent',
      tempPerm: {
        headers: ['Type', 'Use Case', 'Behavior'],
        rows: [
          ['Temporary', 'Hotfix, time-limited exception', 'Expires at a set date, then the constraint re-applies'],
          ['Permanent', 'Deliberate long-term exception', 'Active until explicitly revoked'],
        ],
      },
      tempPermNote: 'Prefer temporary overrides. Permanent overrides should be rare and well-justified.',
      complianceTitle: 'How overrides affect compliance',
      compliance: 'When an override is active, the compliance check moves the target entry from "conflicts" to "overridden." The action is allowed, but the override is visible — it\'s not silent. The CI Verifier also recognizes overrides.',
      approvalNote: 'When an invariant has `requires_approval` enabled, overrides are created automatically after a human approves the exception through the approval workflow.',
      bestPracticesTitle: 'Best practices',
      bestPractices: [
        { label: 'Always include justification', desc: '— an override without justification is a gap in your audit trail.' },
        { label: 'Use conditions', desc: '— "Only applies to /health endpoint" is more precise than overriding the entire invariant.' },
        { label: 'Review expired overrides', desc: '— they may indicate constraints that need updating.' },
      ],
    },
    together: {
      title: 'How They Work Together',
      imgAlt: 'Entity relationship graph',
      imgSrc: '/images/docs/knowledge-entity-graph-en.svg',
      body: 'Links connect them into a navigable graph of organizational knowledge.',
      apiNote: 'For API details, see the ',
      apiLink: 'Integrations',
      apiHref: '/docs/integrations',
      apiSuffix: ' page (requires login).',
    },
  },
  fr: {
    title: 'Concepts',
    intro: "Knowledge organise les décisions, contraintes et standards de votre équipe en cinq entités fondamentales. Cette page explique ce qu'est chacune, pourquoi elle existe, et comment elles fonctionnent ensemble.",
    scopes: {
      title: 'Scopes et Namespaces',
      body: 'Les scopes organisent les connaissances par domaine. Les namespaces subdivisent les scopes pour une structure plus fine.',
      body2: 'Un scope représente un domaine ou département — Engineering, Product, Operations, Security, Legal. Chaque scope contient ses propres decisions, invariants, rules, overrides et events.',
      imgAlt: 'Arborescence scope et namespaces',
      imgSrc: '/images/docs/knowledge-scope-tree-fr.svg',
      body3: "Les namespaces subdivisent un scope en sous-domaines. Chaque scope commence avec un namespace `global`. Vous pouvez créer des namespaces supplémentaires pour organiser les entrées par équipe ou domaine. Les namespaces supportent jusqu'à deux niveaux d'imbrication (ex. `payments/stripe`).",
      body4: "Les clés API contrôlent l'accès au niveau du scope : aucun accès, reader, contributor ou admin.",
      body5: "Les tenants représentent des organisations. Chaque tenant a ses propres scopes, entrées et clés API. L'isolation est stricte — une clé d'un tenant ne peut pas accéder aux données d'un autre.",
    },
    decisions: {
      title: 'Decisions',
      intro: 'Une decision enregistre ce qui a été décidé, par qui, quand et pourquoi — comme un fait historique immuable.',
      example: '"On a choisi PostgreSQL pour tous les data stores transactionnels. On a évalué PostgreSQL, DynamoDB et CockroachDB. PostgreSQL l\'a emporté sur les garanties ACID sans complexité distribuée."',
      body: 'Les decisions capturent quatre choses : ce qui a été décidé, le contexte qui y a mené, le raisonnement derrière le choix, et qui l\'a pris (humain, agent ou système).',
      immutable: "Les decisions sont immuables — une fois créées, elles ne peuvent pas être modifiées. Si une décision est révisée, la nouvelle est liée à l'ancienne via une relation `supersedes`. Cela préserve l'historique complet de l'évolution de la réflexion.",
      creation: 'Les decisions peuvent être créées depuis le dashboard, l\'API, ou par un agent IA via MCP (ex. "Enregistre une décision : on a choisi Playwright pour les tests E2E").',
      whyTitle: 'Pourquoi les decisions comptent',
      why: "Sans decisions enregistrées, les équipes perdent du temps à redébattre de questions déjà tranchées. Les nouveaux arrivants ne savent pas pourquoi les choses sont ainsi. Knowledge rend le raisonnement recherchable et permanent.",
      bestPracticesTitle: 'Bonnes pratiques',
      bestPractices: [
        { label: 'Enregistrez au moment de la décision', desc: 'pas rétroactivement — le contexte et le raisonnement sont plus frais au moment de la décision.' },
        { label: 'Incluez les alternatives considérées', desc: '— "On a évalué X, Y et Z" est plus utile que "On a choisi X."' },
        { label: 'Liez aux contraintes', desc: '— si une decision crée une rule ou un invariant, liez-les pour que le raisonnement soit traçable.' },
      ],
    },
    invariants: {
      title: 'Invariants',
      intro: "Un invariant est une contrainte absolue — quelque chose qui ne doit jamais être violé. Les invariants sont le mécanisme d'enforcement le plus fort de Knowledge.",
      example: '"Tous les endpoints API publics doivent exiger une authentification."',
      blocking: "Les invariants sont bloquants : si une action entre en conflit avec un invariant actif, Knowledge signale un conflit bloquant. L'action doit être stoppée ou un override doit être obtenu.",
      enforcementTitle: 'Comment les invariants sont appliqués',
      enforcementIntro: 'Les invariants sont vérifiés à trois niveaux :',
      enforcement: [
        { label: 'Compliance check', desc: "— un agent ou un humain teste une action envisagée contre le registre. Si elle entre en conflit avec un invariant, Knowledge retourne un résultat bloquant." },
        { label: 'CI Verifier', desc: "— vérifie les PRs contre les invariants actifs. Si un invariant applicable n'est pas adressé dans l'Implementation Report de la PR, le pipeline échoue. Par exemple, une PR qui ajoute un endpoint API sans mentionner l'invariant \"All endpoints require authentication\" serait bloquée." },
        { label: 'Agent MCP', desc: "— l'agent interroge les invariants avant d'agir. Si un conflit est détecté, il s'arrête et signale, ou demande une approbation." },
      ],
      approvalTitle: 'Invariants à approbation requise',
      approvalIntro: "Certains invariants sont trop critiques pour être contournés silencieusement. Quand `requires_approval` est activé, une exception nécessite une approbation humaine :",
      approvalSteps: [
        "L'agent détecte un conflit avec un invariant",
        "L'agent demande une approbation (avec justification)",
        "L'humain review dans le dashboard (ou via notification Slack)",
        "Si approuvé → un override est auto-créé",
        "L'agent re-vérifie → conflit résolu → continue",
      ],
      approvalNote: 'Cela garantit une supervision humaine pour les contraintes les plus critiques.',
      bestPracticesTitle: 'Bonnes pratiques',
      bestPractices: [
        { label: 'Gardez les invariants peu nombreux et critiques', desc: "— si tout est un invariant, rien ne l'est. Réservez-les aux contraintes qui ne doivent genuinement jamais être violées." },
        { label: 'Rédigez un rationale clair', desc: '— expliquez le pourquoi, ne reformulez pas la contrainte.' },
        { label: 'Révisez périodiquement', desc: "— les invariants qui ne s'appliquent plus doivent être révoqués, pas laissés comme du bruit." },
      ],
    },
    rules: {
      title: 'Rules',
      intro: "Une rule est une directive active — un énoncé de ce qui doit être fait. Contrairement aux invariants (bloquants absolus), les rules peuvent être mandatory ou advisory, et elles sont versionnées pour suivre l'évolution des standards.",
      example: '"Toutes les PRs doivent être revues par au moins un membre de l\'équipe avant le merge."',
      severityTitle: 'Niveaux de sévérité',
      severity: {
        headers: ['Sévérité', 'Signification', 'Comportement CI'],
        rows: [
          ['MANDATORY', 'Doit être suivie', 'Le Verifier échoue si non citée'],
          ['ADVISORY', 'Devrait être suivie', 'Le Verifier avertit si non citée'],
        ],
      },
      versioningTitle: 'Versioning',
      versioning: "Les rules évoluent avec le temps. Quand une rule est mise à jour, Knowledge crée une nouvelle version tout en préservant l'historique complet. Chaque version enregistre qui l'a changée, quand et pourquoi — votre trace d'audit de l'évolution des standards.",
      versioningExample: 'Par exemple, une rule peut commencer par "Toutes les PRs doivent être revues par un membre" et devenir plus tard "...par deux membres" après un incident de production. Les deux versions sont préservées.',
      bestPracticesTitle: 'Bonnes pratiques',
      bestPractices: [
        { label: "Distinguez mandatory d'advisory", desc: '— pas chaque guideline ne doit bloquer le CI.' },
        { label: 'Versionnez avec des raisons de changement', desc: "— une version sans raison est une trace d'audit incomplète." },
        { label: 'Gardez les directives actionnables', desc: '— "Le code doit être propre" n\'est pas applicable. "Toutes les fonctions doivent avoir des types de retour explicites" l\'est.' },
      ],
    },
    overrides: {
      title: 'Overrides',
      intro: "Un override est une exception gouvernée à un invariant ou une rule. Il documente que l'organisation a sciemment dévié d'une contrainte, avec justification et conditions.",
      example: '"Le health endpoint doit être public pour les checks du load balancer. S\'applique uniquement à /health et /ready. Expire le 2025-06-01."',
      notWorkaround: "Les overrides ne sont pas des contournements. Ce sont des exceptions explicites et documentées qui prouvent que l'organisation a reconnu une contrainte, évalué le risque et décidé de dévier — avec une traçabilité complète.",
      tempPermTitle: 'Temporary vs. permanent',
      tempPerm: {
        headers: ['Type', "Cas d'usage", 'Comportement'],
        rows: [
          ['Temporary', 'Hotfix, exception limitée dans le temps', 'Expire à une date fixée, puis la contrainte se réapplique'],
          ['Permanent', 'Exception délibérée à long terme', "Actif jusqu'à révocation explicite"],
        ],
      },
      tempPermNote: 'Préférez les overrides temporaires. Les permanents doivent être rares et bien justifiés.',
      complianceTitle: 'Comment les overrides affectent la conformité',
      compliance: 'Quand un override est actif, le compliance check déplace l\'entrée cible de "conflicts" vers "overridden." L\'action est autorisée, mais l\'override est visible — ce n\'est pas silencieux. Le CI Verifier reconnaît aussi les overrides.',
      approvalNote: "Quand un invariant a `requires_approval` activé, les overrides sont créés automatiquement après qu'un humain approuve l'exception via le workflow d'approbation.",
      bestPracticesTitle: 'Bonnes pratiques',
      bestPractices: [
        { label: 'Incluez toujours une justification', desc: "— un override sans justification est une lacune dans votre trace d'audit." },
        { label: 'Utilisez les conditions', desc: '— "S\'applique uniquement à /health" est plus précis qu\'overrider l\'invariant entier.' },
        { label: 'Révisez les overrides expirés', desc: '— ils peuvent indiquer des contraintes à mettre à jour.' },
      ],
    },
    together: {
      title: 'Comment elles fonctionnent ensemble',
      imgAlt: 'Graphe des relations entre entités',
      imgSrc: '/images/docs/knowledge-entity-graph-fr.svg',
      body: 'Les liens les connectent en un graphe navigable de connaissances organisationnelles.',
      apiNote: 'Pour les détails API, voir la page ',
      apiLink: 'Intégrations',
      apiHref: '/docs/integrations',
      apiSuffix: ' (connexion requise).',
    },
  },
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-[var(--border)]">
            {headers.map((h, i) => (
              <th key={i} className="text-left py-2 pr-6 font-mono text-xs uppercase tracking-wide font-semibold text-[var(--text-primary)]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[var(--border-light)]">
              {row.map((cell, j) => (
                <td key={j} className={`py-2.5 pr-6 text-sm align-top ${j === 0 ? 'font-mono text-[var(--accent)] text-xs font-semibold' : 'text-[var(--text-secondary)]'}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function BestPractices({ title, items }: { title: string; items: { label: string; desc: string }[] }) {
  return (
    <>
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{title}</h3>
      <ul className="list-disc list-inside space-y-2 mb-6">
        {items.map((item, i) => (
          <li key={i} className="text-[var(--text-secondary)] text-sm">
            <strong className="font-semibold text-[var(--text-primary)]"><InlineText text={item.label} /></strong>
            {item.desc ? <InlineText text={' ' + item.desc} /> : ''}
          </li>
        ))}
      </ul>
    </>
  )
}

function Blockquote({ children }: { children: string }) {
  return (
    <blockquote className="border-l-4 border-[var(--accent-light)] pl-4 py-1 mb-4 italic text-[var(--text-muted)] text-sm leading-relaxed">
      {children}
    </blockquote>
  )
}

function InlineText({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`)/)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('`') && part.endsWith('`')
          ? <code key={i} className="font-mono text-[0.85em] bg-[var(--accent-light)] text-[var(--accent)] px-1 py-0.5 rounded">{part.slice(1, -1)}</code>
          : part
      )}
    </>
  )
}

export default function ConceptsPage() {
  const { lang } = useLang()
  const t = content[lang as 'fr' | 'en'] ?? content.en
  const sc = t.scopes
  const dec = t.decisions
  const inv = t.invariants
  const rul = t.rules
  const ov = t.overrides
  const tog = t.together

  return (
    <article>
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4 mt-0">{t.title}</h1>
      <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">{t.intro}</p>

      <hr className="border-[var(--border)] my-8" />

      {/* Scopes & Namespaces */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3 mt-10">{sc.title}</h2>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{sc.body}</p>
      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{sc.body2}</p>
      <img src={sc.imgSrc} alt={sc.imgAlt} className="w-full max-w-lg mb-4" />
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed"><InlineText text={sc.body3} /></p>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{sc.body4}</p>
      <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{sc.body5}</p>

      <hr className="border-[var(--border)] my-8" />

      {/* Decisions */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3 mt-10">{dec.title}</h2>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{dec.intro}</p>
      <Blockquote>{dec.example}</Blockquote>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{dec.body}</p>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed"><InlineText text={dec.immutable} /></p>
      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed"><InlineText text={dec.creation} /></p>
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 mt-6">{dec.whyTitle}</h3>
      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{dec.why}</p>
      <BestPractices title={dec.bestPracticesTitle} items={dec.bestPractices} />

      <hr className="border-[var(--border)] my-8" />

      {/* Invariants */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3 mt-10">{inv.title}</h2>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{inv.intro}</p>
      <Blockquote>{inv.example}</Blockquote>
      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{inv.blocking}</p>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 mt-6">{inv.enforcementTitle}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{inv.enforcementIntro}</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        {inv.enforcement.map((e, i) => (
          <li key={i} className="text-[var(--text-secondary)] text-sm">
            <strong className="font-semibold text-[var(--text-primary)]">{e.label}</strong><InlineText text={e.desc} />
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 mt-6">{inv.approvalTitle}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed"><InlineText text={inv.approvalIntro} /></p>
      <ol className="list-decimal list-inside space-y-1.5 mb-3">
        {inv.approvalSteps.map((step, i) => (
          <li key={i} className="text-[var(--text-secondary)] text-sm"><InlineText text={step} /></li>
        ))}
      </ol>
      <p className="text-sm text-[var(--text-muted)] italic mb-6">{inv.approvalNote}</p>

      <BestPractices title={inv.bestPracticesTitle} items={inv.bestPractices} />

      <hr className="border-[var(--border)] my-8" />

      {/* Rules */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3 mt-10">{rul.title}</h2>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{rul.intro}</p>
      <Blockquote>{rul.example}</Blockquote>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{rul.severityTitle}</h3>
      <Table headers={rul.severity.headers} rows={rul.severity.rows} />

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 mt-6">{rul.versioningTitle}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{rul.versioning}</p>
      <p className="text-sm text-[var(--text-muted)] italic mb-4">{rul.versioningExample}</p>

      <BestPractices title={rul.bestPracticesTitle} items={rul.bestPractices} />

      <hr className="border-[var(--border)] my-8" />

      {/* Overrides */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3 mt-10">{ov.title}</h2>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{ov.intro}</p>
      <Blockquote>{ov.example}</Blockquote>
      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{ov.notWorkaround}</p>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{ov.tempPermTitle}</h3>
      <Table headers={ov.tempPerm.headers} rows={ov.tempPerm.rows} />
      <p className="text-sm text-[var(--text-muted)] italic mb-6">{ov.tempPermNote}</p>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 mt-6">{ov.complianceTitle}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{ov.compliance}</p>
      <p className="text-sm text-[var(--text-muted)] italic mb-4"><InlineText text={ov.approvalNote} /></p>

      <BestPractices title={ov.bestPracticesTitle} items={ov.bestPractices} />

      <hr className="border-[var(--border)] my-8" />

      {/* How They Work Together */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{tog.title}</h2>
      <img src={tog.imgSrc} alt={tog.imgAlt} className="w-full max-w-lg mb-4" />
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{tog.body}</p>
      <p className="text-sm text-[var(--text-muted)]">
        {tog.apiNote}
        <Link href={tog.apiHref} className="text-[var(--accent)] hover:underline">{tog.apiLink}</Link>
        {tog.apiSuffix}
      </p>
    </article>
  )
}
