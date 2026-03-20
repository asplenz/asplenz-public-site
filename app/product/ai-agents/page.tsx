'use client'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { useLang } from '@/lib/LangContext'

const content = {
  en: {
    tag: 'Product',
    title: 'AI Agent Integration',
    intro: "Give your agents the context they're missing.",
    subtitle: "When an AI agent writes code, reviews a PR, or makes a deployment decision, it acts without knowledge of your team's architectural choices, compliance requirements, or operational rules. It does its best — and you review after the fact, hoping to catch violations.",
    closing: 'Knowledge closes that gap. Agents query your decision registry before acting, not after.',
    problem: {
      tag: 'The Problem with Post-Hoc Review',
      body: "The agent doesn't know that your team decided to use PostgreSQL for transactional data, that all API endpoints must require authentication, or that deployments to production require a staging step. It discovers these constraints when you reject its work.",
    },
    preflight: {
      tag: 'Pre-Flight Constraint Checking',
      body: 'With Knowledge, the workflow becomes:',
      closing: 'Every action is informed. Every constraint check is recorded. Every compliance question has a structured answer.',
    },
    mcp: {
      tag: 'MCP Integration',
      intro: 'Knowledge exposes 9 tools through the Model Context Protocol (MCP), compatible with Claude Code, Cursor, and any MCP client.',
      beforeTag: 'Before acting',
      beforeHeaders: ['Tool', 'Purpose'],
      beforeRows: [
        ['knowledge_list_invariants', 'Get all blocking constraints for a scope'],
        ['knowledge_list_rules', 'Get all active directives (mandatory + advisory)'],
        ['knowledge_check', 'Test an intended action against the normative state'],
        ['knowledge_request_approval', 'Request human approval for gated actions'],
        ['knowledge_get_approval_status', 'Check if approval was granted'],
      ],
      afterTag: 'After acting',
      afterHeaders: ['Tool', 'Purpose'],
      afterRows: [
        ['knowledge_record_reference', 'Record that a constraint was followed or diverged from'],
        ['knowledge_record', 'Capture a new decision with context and reasoning'],
      ],
      anytimeTag: 'Anytime',
      anytimeHeaders: ['Tool', 'Purpose'],
      anytimeRows: [
        ['knowledge_query', 'Search the registry by keywords, type, scope'],
        ['knowledge_resolve', 'Get the full normative state for a scope'],
      ],
    },
    example: {
      tag: 'Example: Agent Workflow',
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

5. knowledge_record(
     scope="Engineering",
     decision="Added /api/payments endpoint using REST with bearer auth",
     context="Payment team requested payment initiation API",
     reasoning="Followed existing REST convention per Engineering rules"
   )`,
      closing: 'The agent acted with full context. The compliance trail is automatic.',
    },
    constraints: {
      tag: 'How Constraints Apply',
      items: [
        {
          name: 'Invariants — Hard Stops',
          body: "Absolute constraints that block violating actions. If an agent's intended action conflicts with an invariant, the compliance check returns a conflict and the agent stops.",
        },
        {
          name: 'Rules — Active Guidance',
          body: 'Directives that shape behavior. Mandatory rules must be followed; advisory rules should be considered. Agents receive both and can explain which rules influenced their decisions.',
        },
        {
          name: 'Approval Gates',
          body: 'Some invariants require human approval before proceeding. The agent requests approval, Knowledge notifies the right people via ECDSA-signed webhook (Slack, Teams, or any external system), and the agent is notified automatically when the decision is made. The entire exchange is recorded.',
        },
      ],
    },
    audit: {
      tag: 'Audit Trail',
      intro: 'Every agent interaction with Knowledge generates structured data:',
      headers: ['Event', "What's Recorded"],
      rows: [
        ['Constraint query', 'Scope, timestamp, entries returned'],
        ['Compliance check', 'Action, conflicts, result'],
        ['Approval request', 'Entry, justification, status'],
        ['Reference', 'Entry cited, context (PR, commit, deploy), compliance status'],
        ['Decision recorded', 'Full decision with context and reasoning'],
      ],
      closing: 'When an auditor asks "what constraints governed this AI-generated code?", the answer is a database query.',
    },
    setup: {
      tag: 'Setup',
      steps: [
        {
          n: '1',
          title: 'Configure MCP',
          body: 'Add to your .mcp.json:',
          code: `{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com",
      "headers": {
        "Authorization": "Bearer kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      }
    }
  }
}`,
          note: null as string | null,
        },
        {
          n: '2',
          title: 'Launch your agent',
          body: 'The MCP tools are automatically available. Asplenz provides system prompt templates so agents use them correctly out of the box.',
          code: null as string | null,
          note: null as string | null,
        },
        {
          n: '3',
          title: 'Monitor in the dashboard',
          body: 'Every query, check, approval, and reference appears in the event timeline. Review agent behavior in real time or audit historically.',
          code: null as string | null,
          note: null as string | null,
        },
      ],
    },
    compatible: {
      tag: 'Compatible Agents',
      intro: 'Knowledge works with any MCP-compatible client:',
      items: [
        { name: 'Claude Code', desc: 'full MCP support, recommended workflow' },
        { name: 'Cursor', desc: 'MCP integration for IDE-based agents' },
        { name: 'Custom agents', desc: 'any client implementing the MCP protocol' },
      ],
      closing: 'The same API that agents use is available via REST for custom integrations, CI pipelines, and scripts.',
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
    title: 'Intégration des Agents IA',
    intro: 'Donnez à vos agents le contexte qui leur manque.',
    subtitle: "Quand un agent IA écrit du code, review une PR ou prend une décision de déploiement, il agit sans connaître les choix d'architecture de votre équipe, les exigences de conformité ou les règles opérationnelles. Il fait de son mieux — et vous reviewez après coup, en espérant détecter les violations.",
    closing: "Knowledge comble ce gap. Les agents interrogent votre registre de décisions avant d'agir, pas après.",
    problem: {
      tag: 'Le problème du review a posteriori',
      body: "L'agent ne sait pas que votre équipe a décidé d'utiliser PostgreSQL pour les données transactionnelles, que tous les endpoints API doivent exiger une authentification, ou que les déploiements en production nécessitent un passage par staging. Il découvre ces contraintes quand vous rejetez son travail.",
    },
    preflight: {
      tag: 'Vérification pré-action',
      body: 'Avec Knowledge, le workflow devient :',
      closing: 'Chaque action est informée. Chaque vérification de contrainte est enregistrée. Chaque question de conformité a une réponse structurée.',
    },
    mcp: {
      tag: 'Intégration MCP',
      intro: 'Knowledge expose 9 outils via le Model Context Protocol (MCP), compatibles avec Claude Code, Cursor, et tout client MCP.',
      beforeTag: "Avant d'agir",
      beforeHeaders: ['Outil', 'Usage'],
      beforeRows: [
        ['knowledge_list_invariants', "Obtenir toutes les contraintes bloquantes d'un scope"],
        ['knowledge_list_rules', 'Obtenir toutes les directives actives (mandatory + advisory)'],
        ['knowledge_check', "Tester une action envisagée contre l'état normatif"],
        ['knowledge_request_approval', 'Demander une approbation humaine pour les actions gatées'],
        ['knowledge_get_approval_status', "Vérifier si l'approbation a été accordée"],
      ],
      afterTag: 'Après avoir agi',
      afterHeaders: ['Outil', 'Usage'],
      afterRows: [
        ['knowledge_record_reference', "Enregistrer qu'une contrainte a été suivie ou divergée"],
        ['knowledge_record', 'Capturer une nouvelle décision avec contexte et raisonnement'],
      ],
      anytimeTag: 'À tout moment',
      anytimeHeaders: ['Outil', 'Usage'],
      anytimeRows: [
        ['knowledge_query', 'Rechercher dans le registre par mots-clés, type, scope'],
        ['knowledge_resolve', "Obtenir l'état normatif complet d'un scope"],
      ],
    },
    example: {
      tag: "Exemple : Workflow d'un agent",
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

5. knowledge_record(
     scope="Engineering",
     decision="Ajout de l'endpoint /api/payments en REST avec bearer auth",
     context="L'équipe paiement a demandé une API d'initiation de paiement",
     reasoning="Convention REST existante suivie selon les rules Engineering"
   )`,
      closing: "L'agent a agi avec le contexte complet. La trace de conformité est automatique.",
    },
    constraints: {
      tag: "Comment les contraintes s'appliquent",
      items: [
        {
          name: 'Invariants — Arrêts stricts',
          body: "Contraintes absolues qui bloquent les actions en violation. Si l'action envisagée par un agent entre en conflit avec un invariant, la vérification de conformité retourne un conflit et l'agent s'arrête.",
        },
        {
          name: 'Rules — Directives actives',
          body: "Directives qui orientent le comportement. Les rules mandatory doivent être suivies ; les rules advisory doivent être considérées. Les agents reçoivent les deux et peuvent expliquer quelles rules ont influencé leurs décisions.",
        },
        {
          name: "Portes d'approbation",
          body: "Certains invariants nécessitent une approbation humaine avant de procéder. L'agent demande l'approbation, Knowledge notifie les personnes concernées via webhook signé ECDSA (Slack, Teams, ou tout système externe), et l'agent est notifié automatiquement quand la décision est prise. L'échange complet est enregistré.",
        },
      ],
    },
    audit: {
      tag: "Trace d'audit",
      intro: "Chaque interaction d'un agent avec Knowledge génère des données structurées :",
      headers: ['Événement', 'Ce qui est enregistré'],
      rows: [
        ['Requête de contraintes', 'Scope, horodatage, entrées retournées'],
        ['Vérification de conformité', 'Action, conflits, résultat'],
        ["Demande d'approbation", 'Entrée, justification, statut'],
        ['Référence', 'Entrée citée, contexte (PR, commit, deploy), statut de conformité'],
        ['Décision enregistrée', 'Décision complète avec contexte et raisonnement'],
      ],
      closing: "Quand un auditeur demande « quelles contraintes gouvernaient ce code généré par IA ? », la réponse est une requête en base de données.",
    },
    setup: {
      tag: 'Mise en place',
      steps: [
        {
          n: '1',
          title: 'Configurer MCP',
          body: 'Ajoutez dans votre .mcp.json :',
          code: `{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com",
      "headers": {
        "Authorization": "Bearer kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
      }
    }
  }
}`,
          note: null as string | null,
        },
        {
          n: '2',
          title: 'Lancez votre agent',
          body: 'Les outils MCP sont automatiquement disponibles. Asplenz fournit des templates de system prompts pour que les agents les utilisent correctement dès le départ.',
          code: null as string | null,
          note: null as string | null,
        },
        {
          n: '3',
          title: 'Surveillez dans le dashboard',
          body: "Chaque requête, vérification, approbation et référence apparaît dans la timeline d'événements. Reviewez le comportement des agents en temps réel ou auditez a posteriori.",
          code: null as string | null,
          note: null as string | null,
        },
      ],
    },
    compatible: {
      tag: 'Agents compatibles',
      intro: 'Knowledge fonctionne avec tout client compatible MCP :',
      items: [
        { name: 'Claude Code', desc: 'support MCP complet, workflow recommandé' },
        { name: 'Cursor', desc: 'intégration MCP pour les agents en IDE' },
        { name: 'Agents custom', desc: 'tout client implémentant le protocole MCP' },
      ],
      closing: 'La même API utilisée par les agents est disponible en REST pour les intégrations custom, les pipelines CI et les scripts.',
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
        </div>
      </section>

      {/* MCP Integration */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">{t.mcp.tag}</p>
          <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">{t.mcp.intro}</p>
          <h3 className="font-serif text-xl text-[var(--text-primary)] mb-3">{t.mcp.beforeTag}</h3>
          <Table headers={t.mcp.beforeHeaders} rows={t.mcp.beforeRows} />
          <h3 className="font-serif text-xl text-[var(--text-primary)] mb-3 mt-6">{t.mcp.afterTag}</h3>
          <Table headers={t.mcp.afterHeaders} rows={t.mcp.afterRows} />
          <h3 className="font-serif text-xl text-[var(--text-primary)] mb-3 mt-6">{t.mcp.anytimeTag}</h3>
          <Table headers={t.mcp.anytimeHeaders} rows={t.mcp.anytimeRows} />
        </div>
      </section>

      {/* Example */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.example.tag}</p>
          <div className="max-w-2xl">
            <CodeBlock code={t.example.code} />
          </div>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-2">{t.example.closing}</p>
        </div>
      </section>

      {/* How constraints apply */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
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

      {/* Audit trail */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">{t.audit.tag}</p>
          <p className="text-[var(--text-secondary)] mb-5 leading-relaxed">{t.audit.intro}</p>
          <Table headers={t.audit.headers} rows={t.audit.rows} />
          <p className="text-[var(--text-secondary)] leading-relaxed italic text-sm mt-2">{t.audit.closing}</p>
        </div>
      </section>

      {/* Setup */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.setup.tag}</p>
          <div className="space-y-8">
            {t.setup.steps.map((step, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-3">
                  {step.n}. {step.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-3 leading-relaxed max-w-2xl">{step.body}</p>
                {step.code && (
                  <div className="max-w-2xl">
                    <CodeBlock code={step.code} />
                  </div>
                )}
                {step.note && (
                  <p className="text-sm text-[var(--text-muted)] italic mt-2">{step.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible agents */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">{t.compatible.tag}</p>
          <p className="text-[var(--text-secondary)] mb-5 leading-relaxed">{t.compatible.intro}</p>
          <ul className="list-disc list-inside space-y-2 mb-5">
            {t.compatible.items.map((item, i) => (
              <li key={i} className="text-[var(--text-secondary)] text-sm">
                <strong className="font-semibold text-[var(--text-primary)]">{item.name}</strong> — {item.desc}
              </li>
            ))}
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl">{t.compatible.closing}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-4">
          {t.cta.links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={i === 0
                ? 'px-7 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors'
                : 'px-7 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
