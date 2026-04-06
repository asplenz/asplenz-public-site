'use client'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { useLang } from '@/lib/LangContext'

const content = {
  en: {
    tag: 'Product',
    title: 'Knowledge for AI Agents',
    intro: "Give your agents the context they're missing.",
    subtitle: "When an AI agent writes code, reviews a PR, or makes a deployment decision, it acts without knowledge of your team's architectural choices, compliance requirements, or operational rules. It does its best, and you review after the fact, hoping to catch violations.",
    closing: 'Knowledge closes that gap. Agents query your decision registry before acting, not after.',
    problem: {
      tag: 'The Problem: Reviewing After the Fact',
      body: "AI agents act without knowledge of your organization's constraints. When a human reviews each output, this creates a bottleneck that defeats the purpose of automation. When agents operate autonomously, violations go undetected until they cause real damage: a non-compliant deployment, a regulatory breach, a decision that contradicts an existing policy.",
    },
    preflight: {
      tag: 'With Knowledge, agents check constraints before acting',
      body: 'With Knowledge, the workflow becomes:',
      closing: 'Every action is informed. Every constraint check is recorded. Every compliance question has a structured answer.',
      useCasesIntro: 'See concrete examples for your domain:',
      useCases: [
        { label: 'Engineering', href: '/use-cases/engineering' },
        { label: 'Finance', href: '/use-cases/finance' },
        { label: 'Healthcare', href: '/use-cases/healthcare' },
        { label: 'Cybersecurity', href: '/use-cases/cybersecurity' },
        { label: 'Legal & Compliance', href: '/use-cases/legal' },
      ],
    },
    connect: {
      tag: 'Connect your agent to Knowledge',
      intro: 'Knowledge exposes tools through the Model Context Protocol (MCP), compatible with any MCP client. Add the Knowledge MCP server to your agent configuration:',
      code: `{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com/knowledge",
      "headers": {
        "Authorization": "Bearer kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      }
    }
  }
}`,
      toolsIntro: 'The MCP tools are automatically available. Asplenz provides system prompt templates so agents use them correctly out of the box.',
      featuresTag: 'Available features',
      beforeTag: 'Before acting',
      beforeItems: [
        'Get all blocking constraints for a scope',
        'Get all active directives (mandatory + advisory)',
        'Test an intended action against the normative state',
        'Request human approval for gated actions',
        'Check if approval was granted',
      ],
      afterTag: 'After acting',
      afterItems: [
        'Record that a constraint was followed or diverged from',
        'Capture a new decision with context and reasoning',
      ],
      anytimeTag: 'Anytime',
      anytimeItems: [
        'Search the registry by keywords, type, scope',
        'Get the full normative state for a scope',
      ],
      closing: 'Works with any MCP-compatible agent: coding agents, finance agents, compliance agents, operations agents. The same API is available via REST for custom integrations and scripts.',
      ciLink: 'You can also run an agent automatically on every pull request to check compliance against your team\'s rules.',
      ciLinkLabel: 'CI Compliance Check →',
    },
    example: {
      tag: 'Example with a coding agent',
      code: `Agent: I need to add a new API endpoint for payment processing.

1. knowledge_list_invariants(scope="Engineering")
   --> "All API endpoints must require authentication"
   --> "No eventual consistency for financial transactions"

2. knowledge_check(scope="Engineering", action="Add REST endpoint for payment processing")
   --> No conflicts. Proceed.

3. Agent writes the endpoint with authentication middleware and PostgreSQL.

4. knowledge_record_reference(
     entry_id="inv-a1b2c3",
     context_type="pull_request",
     context_ref="PR #142",
     compliance="followed"
   )

5. knowledge_create_decision(
     scope="Engineering",
     decision="Added /api/payments endpoint using REST with bearer auth",
     context="Payment team requested payment initiation API",
     reasoning="Followed existing REST convention per Engineering rules"
   )`,
      closing: 'The agent acted with full context. The compliance trail is automatic.',
      seeUseCases: 'This example uses an engineering workflow. See Use Cases for domain-specific examples (finance, healthcare, cybersecurity).',
      seeUseCasesLink: 'Use Cases',
      seeUseCasesHref: '/use-cases',
    },
    constraints: {
      tag: 'How Constraints Apply',
      items: [
        {
          name: 'Hard Stops',
          body: "Invariants are absolute constraints that block violating actions. If an agent's intended action conflicts with an invariant, the compliance check returns a conflict and the agent stops.",
        },
        {
          name: 'Active Guidance',
          body: 'Rules are directives that shape behavior. Mandatory rules must be followed; advisory rules should be considered. Agents receive both and can explain which rules influenced their decisions.',
        },
        {
          name: 'Approval Gates',
          body: 'Some invariants require human approval before proceeding. The agent requests approval, Knowledge notifies the right people via webhook (Slack, Teams, or any external system), and the agent is notified automatically when the decision is made. The entire exchange is recorded.',
        },
      ],
    },
    audit: {
      tag: 'Audit Trail',
      body: 'You can record every interaction between your agents and Knowledge. Constraint queries, compliance checks, approval requests, and decisions form an audit trail that you can query from the dashboard or API.',
    },
    cta: {
      links: [
        { label: 'MCP Setup Guide →', href: '/docs/integrations/claude-mcp' },
        { label: 'API Reference', href: '/docs/integrations/api-reference' },
        { label: 'Getting Started', href: '/docs/getting-started' },
      ],
    },
  },
  fr: {
    tag: 'Produit',
    title: 'Knowledge pour les Agents IA',
    intro: 'Donnez à vos agents le contexte qui leur manque.',
    subtitle: "Quand un agent IA écrit du code, review une PR ou prend une décision de déploiement, il agit sans connaître les choix d'architecture de votre équipe, les exigences de conformité ou les règles opérationnelles. Il fait de son mieux, et vous reviewez après coup, en espérant détecter les violations.",
    closing: "Knowledge comble ce gap. Les agents interrogent votre registre de décisions avant d'agir, pas après.",
    problem: {
      tag: 'Le problème : reviewer après coup',
      body: "Les agents IA agissent sans connaître les contraintes de votre organisation. Quand un humain review chaque résultat, c'est un goulot d'étranglement qui annule le bénéfice de l'automatisation. Quand les agents opèrent de façon autonome, les violations passent inaperçues jusqu'à ce qu'elles causent de vrais dégâts : un déploiement non conforme, une violation réglementaire, une décision qui contredit une politique existante.",
    },
    preflight: {
      tag: 'Avec Knowledge, les agents vérifient les contraintes avant d\'agir',
      body: 'Avec Knowledge, le workflow devient :',
      closing: 'Chaque action est informée. Chaque vérification de contrainte est enregistrée. Chaque question de conformité a une réponse structurée.',
      useCasesIntro: 'Voir des exemples concrets pour votre domaine :',
      useCases: [
        { label: 'Engineering', href: '/use-cases/engineering' },
        { label: 'Finance', href: '/use-cases/finance' },
        { label: 'Santé', href: '/use-cases/healthcare' },
        { label: 'Cybersécurité', href: '/use-cases/cybersecurity' },
        { label: 'Juridique & Conformité', href: '/use-cases/legal' },
      ],
    },
    connect: {
      tag: 'Connecter votre agent à Knowledge',
      intro: 'Knowledge expose des outils via le Model Context Protocol (MCP), compatibles avec tout client MCP. Ajoutez le serveur MCP Knowledge à la configuration de votre agent :',
      code: `{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com/knowledge",
      "headers": {
        "Authorization": "Bearer kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      }
    }
  }
}`,
      toolsIntro: 'Les outils MCP sont automatiquement disponibles. Asplenz fournit des templates de system prompts pour que les agents les utilisent correctement dès le départ.',
      featuresTag: 'Fonctionnalités disponibles',
      beforeTag: "Avant d'agir",
      beforeItems: [
        "Obtenir toutes les contraintes bloquantes d'un scope",
        'Obtenir toutes les directives actives (mandatory + advisory)',
        "Tester une action envisagée contre l'état normatif",
        'Demander une approbation humaine pour les actions gatées',
        "Vérifier si l'approbation a été accordée",
      ],
      afterTag: 'Après avoir agi',
      afterItems: [
        "Enregistrer qu'une contrainte a été suivie ou divergée",
        'Capturer une nouvelle décision avec contexte et raisonnement',
      ],
      anytimeTag: 'À tout moment',
      anytimeItems: [
        'Rechercher dans le registre par mots-clés, type, scope',
        "Obtenir l'état normatif complet d'un scope",
      ],
      closing: 'Fonctionne avec tout agent compatible MCP : agents de code, agents finance, agents conformité, agents opérations. La même API est disponible en REST pour les intégrations custom et les scripts.',
      ciLink: 'Vous pouvez aussi lancer un agent automatiquement sur chaque pull request pour vérifier la conformité avec les règles de votre équipe.',
      ciLinkLabel: 'CI Compliance Check →',
    },
    example: {
      tag: 'Exemple avec un agent de code',
      code: `Agent : Je dois ajouter un nouvel endpoint API pour le traitement des paiements.

1. knowledge_list_invariants(scope="Engineering")
   --> "Tous les endpoints API doivent exiger une authentification"
   --> "Pas de cohérence éventuelle pour les transactions financières"

2. knowledge_check(scope="Engineering", action="Ajouter un endpoint REST pour le traitement des paiements")
   --> Aucun conflit. Procéder.

3. L'agent écrit l'endpoint avec middleware d'authentification et PostgreSQL.

4. knowledge_record_reference(
     entry_id="inv-a1b2c3",
     context_type="pull_request",
     context_ref="PR #142",
     compliance="followed"
   )

5. knowledge_create_decision(
     scope="Engineering",
     decision="Ajout de l'endpoint /api/payments en REST avec bearer auth",
     context="L'équipe paiement a demandé une API d'initiation de paiement",
     reasoning="Convention REST existante suivie selon les rules Engineering"
   )`,
      closing: "L'agent a agi avec le contexte complet. La trace de conformité est automatique.",
      seeUseCases: 'Cet exemple utilise un workflow engineering. Voir les cas d\'usage pour des exemples par domaine (finance, santé, cybersécurité).',
      seeUseCasesLink: 'Cas d\'usage',
      seeUseCasesHref: '/use-cases',
    },
    constraints: {
      tag: "Comment les contraintes s'appliquent",
      items: [
        {
          name: 'Arrêts stricts',
          body: "Les invariants sont des contraintes absolues qui bloquent les actions en violation. Si l'action envisagée par un agent entre en conflit avec un invariant, la vérification de conformité retourne un conflit et l'agent s'arrête.",
        },
        {
          name: 'Directives actives',
          body: "Les rules sont des directives qui orientent le comportement. Les rules mandatory doivent être suivies ; les rules advisory doivent être considérées. Les agents reçoivent les deux et peuvent expliquer quelles rules ont influencé leurs décisions.",
        },
        {
          name: "Portes d'approbation",
          body: "Certains invariants nécessitent une approbation humaine avant de procéder. L'agent demande l'approbation, Knowledge notifie les personnes concernées via webhook (Slack, Teams, ou tout système externe), et l'agent est notifié automatiquement quand la décision est prise. L'échange complet est enregistré.",
        },
      ],
    },
    audit: {
      tag: "Trace d'audit",
      body: "Vous pouvez enregistrer chaque interaction entre vos agents et Knowledge. Requêtes de contraintes, vérifications de conformité, demandes d'approbation et decisions forment une trace d'audit consultable depuis le dashboard ou l'API.",
    },
    cta: {
      links: [
        { label: 'Guide MCP →', href: '/docs/integrations/claude-mcp' },
        { label: 'Référence API', href: '/docs/integrations/api-reference' },
        { label: 'Commencer', href: '/docs/getting-started' },
      ],
    },
  },
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="rounded-lg bg-[#1A1A2E] text-[#A8C8E8] text-xs p-4 overflow-x-hidden whitespace-pre-wrap break-words leading-relaxed font-mono mb-4">
      {code}
    </pre>
  )
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
                <td key={j} className={`py-2.5 pr-6 text-sm ${j === 0 ? 'font-mono text-[var(--accent)] text-xs' : 'text-[var(--text-secondary)]'}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Page() {
  const { lang } = useLang()
  const t = content[lang as 'fr' | 'en'] ?? content.en

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{t.tag}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-6">{t.title}</h1>
          <p className="text-[var(--text-secondary)] text-xl font-medium leading-relaxed max-w-3xl">{t.intro}</p>
        </div>
      </section>

      {/* Subtitle */}
      <section className="py-10 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl">{t.subtitle}</p>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl mt-4 font-medium">{t.closing}</p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">{t.problem.tag}</p>
          <div className="mb-6">
            <img
              src={`/images/product/knowledge-posthoc-workflow-${lang}.svg`}
              alt={t.problem.tag}
              className="w-full max-w-2xl"
            />
          </div>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl">{t.problem.body}</p>
        </div>
      </section>

      {/* Preflight */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">{t.preflight.tag}</p>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{t.preflight.body}</p>
          <div className="mb-6">
            <img
              src={`/images/product/knowledge-preflight-workflow-${lang}.svg`}
              alt={t.preflight.tag}
              className="w-full max-w-2xl"
            />
          </div>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl">{t.preflight.closing}</p>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl mt-4">{t.preflight.useCasesIntro}</p>
          <div className="flex flex-wrap gap-3 mt-3">
            {t.preflight.useCases.map((uc, i) => (
              <Link key={i} href={uc.href} className="text-[var(--accent)] font-medium hover:underline text-sm">{uc.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* MCP Integration */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">{t.connect.tag}</p>
          <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{t.connect.intro}</p>
          <div className="max-w-2xl mb-6"><CodeBlock code={t.connect.code} /></div>
          <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">{t.connect.toolsIntro}</p>
          <p className="font-serif text-2xl text-[var(--text-primary)] mb-6">{t.connect.featuresTag}</p>
          {[
            { tag: t.connect.beforeTag, items: t.connect.beforeItems },
            { tag: t.connect.afterTag, items: t.connect.afterItems },
            { tag: t.connect.anytimeTag, items: t.connect.anytimeItems },
          ].map((group, gi) => (
            <div key={gi} className={gi > 0 ? 'mt-6' : ''}>
              <h3 className="font-serif text-xl text-[var(--text-primary)] mb-3">{group.tag}</h3>
              <ul className="space-y-1 max-w-2xl pl-4">
                {group.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl mt-8">{t.connect.closing}</p>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl mt-4">{t.connect.ciLink}</p>
          <Link href="/product/ci-compliance-check" className="text-[var(--accent)] font-medium hover:underline mt-1 inline-block">{t.connect.ciLinkLabel}</Link>
        </div>
      </section>

      {/* How constraints apply */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.constraints.tag}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.constraints.items.map((item, i) => (
              <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <h3 className="font-semibold text-base text-[var(--text-primary)] mb-3">{item.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.example.tag}</p>
          <div className="max-w-2xl">
            <CodeBlock code={t.example.code} />
          </div>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-2">{t.example.closing}</p>
          <p className="text-sm text-[var(--text-secondary)] mt-4">
            {t.example.seeUseCases}
          </p>
        </div>
      </section>

      {/* Audit trail */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">{t.audit.tag}</p>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl">{t.audit.body}</p>
        </div>
      </section>


      <Footer />
    </div>
  )
}
