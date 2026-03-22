'use client'
import Link from 'next/link'
import { useLang } from '@/lib/LangContext'

const content = {
  fr: {
    title: 'Agents IA et MCP',
    intro: 'Knowledge expose des outils via le Model Context Protocol (MCP). Tout agent compatible MCP peut interroger le registre, vérifier la conformité, enregistrer des décisions et demander des approbations.',

    setup: {
      tag: 'Mise en place',
      steps: [
        {
          title: '1. Configurer MCP',
          body: 'Ajoutez dans votre .mcp.json :',
          code: `{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com/knowledge",
      "headers": {
        "Authorization": "Bearer kn_..."
      }
    }
  }
}`,
        },
        {
          title: '2. Lancez votre agent',
          body: 'Les outils MCP sont automatiquement disponibles. Asplenz fournit des templates de system prompts pour que les agents les utilisent correctement dès le départ.',
        },
        {
          title: '3. Surveillez dans le dashboard',
          body: 'Chaque requête, vérification, approbation et référence apparaît dans la timeline d\'événements. Reviewez le comportement des agents en temps réel ou auditez a posteriori.',
        },
      ],
    },

    tools: {
      tag: 'Outils MCP disponibles',
      groups: [
        {
          label: 'Avant d\'agir',
          items: [
            ['knowledge_list_invariants', 'Obtenir toutes les contraintes bloquantes d\'un scope'],
            ['knowledge_list_rules', 'Obtenir toutes les directives actives (mandatory + advisory)'],
            ['knowledge_check', 'Tester une action envisagée contre l\'état normatif'],
            ['knowledge_resolve', 'Obtenir l\'état normatif complet d\'un scope/namespace'],
            ['knowledge_request_approval', 'Demander une approbation humaine pour les actions gatées'],
            ['knowledge_get_approval_status', 'Vérifier si l\'approbation a été accordée'],
          ],
        },
        {
          label: 'Après avoir agi',
          items: [
            ['knowledge_record_reference', 'Enregistrer qu\'une contrainte a été suivie ou divergée'],
            ['knowledge_record', 'Capturer une nouvelle décision avec contexte et raisonnement'],
          ],
        },
        {
          label: 'À tout moment',
          items: [
            ['knowledge_query', 'Rechercher dans le registre par mots-clés, type, scope'],
          ],
        },
      ],
    },

    constraints: {
      tag: 'Comment les contraintes s\'appliquent',
      items: [
        {
          title: 'Invariants : arrêts stricts',
          body: 'Contraintes absolues qui bloquent les actions en violation. Si l\'action envisagée par un agent entre en conflit avec un invariant, knowledge_check retourne un conflit et l\'agent doit s\'arrêter.',
        },
        {
          title: 'Rules : directives actives',
          body: 'Directives qui orientent le comportement. Les rules mandatory doivent être suivies ; les rules advisory doivent être considérées. Les agents reçoivent les deux et peuvent expliquer quelles rules ont influencé leurs décisions.',
        },
        {
          title: 'Portes d\'approbation',
          body: 'Certains invariants nécessitent une approbation humaine avant de procéder. L\'agent appelle knowledge_request_approval, Knowledge notifie les personnes concernées via webhook (Slack, Teams, ou tout système externe) avec une signature ECDSA. L\'agent peut fournir un callback_url pour être notifié automatiquement quand la décision est prise - sans polling.',
        },
      ],
    },

    example: {
      tag: 'Exemple : workflow complet',
      code: `Agent : Je dois ajouter un nouvel endpoint API pour le traitement des paiements.

1. knowledge_resolve(scope="Engineering", namespace="payments")
   --> 14 entrées applicables : 2 invariants, 5 decisions, 6 rules, 1 override

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
      note: 'L\'agent a agi avec le contexte complet. La trace de conformité est automatique.',
    },

    audit: {
      tag: 'Trace d\'audit',
      intro: 'Chaque interaction d\'un agent avec Knowledge génère des données structurées :',
      headers: ['Événement', 'Ce qui est enregistré'],
      rows: [
        ['Requête de contraintes', 'Scope, horodatage, entrées retournées'],
        ['Vérification de conformité', 'Action, conflits, résultat'],
        ['Demande d\'approbation', 'Entrée, justification, statut'],
        ['Référence', 'Entrée citée, contexte (PR, commit, deploy), statut de conformité'],
        ['Décision enregistrée', 'Décision complète avec contexte et raisonnement'],
      ],
      note: 'Quand un auditeur demande « quelles contraintes gouvernaient ce code généré par IA ? », la réponse est une requête en base de données.',
    },

    compatible: {
      tag: 'Agents compatibles',
      body: 'Knowledge fonctionne avec tout agent compatible MCP : agents de coding, agents finance, agents compliance, agents opérations. La même API est disponible en REST pour les intégrations custom, les pipelines CI et les scripts.',
    },

    learnMore: {
      tag: 'En savoir plus',
      links: [
        { label: 'Commencer →', href: '/docs/getting-started' },
        { label: 'Comment fonctionne Knowledge →', href: '/product/how-it-works' },
        { label: 'Extraction automatique →', href: '/docs/extraction' },
      ],
    },
  },

  en: {
    title: 'AI Agents and MCP',
    intro: 'Knowledge exposes tools through the Model Context Protocol (MCP). Any MCP-compatible agent can query the registry, check compliance, record decisions, and request approvals.',

    setup: {
      tag: 'Setup',
      steps: [
        {
          title: '1. Configure MCP',
          body: 'Add to your .mcp.json:',
          code: `{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com/knowledge",
      "headers": {
        "Authorization": "Bearer kn_..."
      }
    }
  }
}`,
        },
        {
          title: '2. Launch your agent',
          body: 'The MCP tools are automatically available. Asplenz provides system prompt templates so agents use them correctly out of the box.',
        },
        {
          title: '3. Monitor in the dashboard',
          body: 'Every query, check, approval, and reference appears in the event timeline. Review agent behavior in real time or audit historically.',
        },
      ],
    },

    tools: {
      tag: 'Available MCP Tools',
      groups: [
        {
          label: 'Before acting',
          items: [
            ['knowledge_list_invariants', 'Get all blocking constraints for a scope'],
            ['knowledge_list_rules', 'Get all active directives (mandatory + advisory)'],
            ['knowledge_check', 'Test an intended action against the normative state'],
            ['knowledge_resolve', 'Get the full normative state for a scope/namespace'],
            ['knowledge_request_approval', 'Request human approval for gated actions'],
            ['knowledge_get_approval_status', 'Check if approval was granted'],
          ],
        },
        {
          label: 'After acting',
          items: [
            ['knowledge_record_reference', 'Record that a constraint was followed or diverged from'],
            ['knowledge_record', 'Capture a new decision with context and reasoning'],
          ],
        },
        {
          label: 'Anytime',
          items: [
            ['knowledge_query', 'Search the registry by keywords, type, scope'],
          ],
        },
      ],
    },

    constraints: {
      tag: 'How Constraints Apply',
      items: [
        {
          title: 'Invariants: Hard Stops',
          body: 'Absolute constraints that block violating actions. If an agent\'s intended action conflicts with an invariant, knowledge_check returns a conflict and the agent must stop.',
        },
        {
          title: 'Rules: Active Guidance',
          body: 'Directives that shape behavior. Mandatory rules must be followed; advisory rules should be considered. Agents receive both and can explain which rules influenced their decisions.',
        },
        {
          title: 'Approval Gates',
          body: 'Some invariants require human approval before proceeding. The agent calls knowledge_request_approval, Knowledge notifies the right people via webhook (Slack, Teams, or any external system) with an ECDSA signature. The agent can provide a callback_url to be notified automatically when the decision is made - no polling needed.',
        },
      ],
    },

    example: {
      tag: 'Example: Full Workflow',
      code: `Agent: I need to add a new API endpoint for payment processing.

1. knowledge_resolve(scope="Engineering", namespace="payments")
   --> 14 applicable entries: 2 invariants, 5 decisions, 6 rules, 1 override

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
      note: 'The agent acted with full context. The compliance trail is automatic.',
    },

    audit: {
      tag: 'Audit Trail',
      intro: 'Every agent interaction with Knowledge generates structured data:',
      headers: ['Event', 'What\'s Recorded'],
      rows: [
        ['Constraint query', 'Scope, timestamp, entries returned'],
        ['Compliance check', 'Action, conflicts, result'],
        ['Approval request', 'Entry, justification, status'],
        ['Reference', 'Entry cited, context (PR, commit, deploy), compliance status'],
        ['Decision recorded', 'Full decision with context and reasoning'],
      ],
      note: 'When an auditor asks "what constraints governed this AI-generated code?", the answer is a database query.',
    },

    compatible: {
      tag: 'Compatible Agents',
      body: 'Knowledge works with any MCP-compatible agent: coding agents, finance agents, compliance agents, operations agents. The same API is available via REST for custom integrations, CI pipelines, and scripts.',
    },

    learnMore: {
      tag: 'Learn More',
      links: [
        { label: 'Getting Started →', href: '/docs/getting-started' },
        { label: 'How Knowledge Works →', href: '/product/how-it-works' },
        { label: 'Automatic Extraction →', href: '/docs/extraction' },
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

export default function Page() {
  const { lang } = useLang()
  const t = content[lang as 'fr' | 'en'] ?? content.en

  return (
    <article>
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4 mt-0">{t.title}</h1>
      <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">{t.intro}</p>

      <hr className="border-[var(--border)] my-8" />

      {/* Setup */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6 mt-10">{t.setup.tag}</h2>
      {t.setup.steps.map((step, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{step.title}</h3>
          <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{step.body}</p>
          {'code' in step && step.code && <CodeBlock code={step.code} />}
        </div>
      ))}

      <hr className="border-[var(--border)] my-8" />

      {/* MCP Tools */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6 mt-10">{t.tools.tag}</h2>
      {t.tools.groups.map((group, gi) => (
        <div key={gi} className="mb-6">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">{group.label}</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <tbody>
                {group.items.map((item, i) => (
                  <tr key={i} className="border-b border-[var(--border-light)]">
                    <td className="py-2 pr-6 font-mono text-xs text-[var(--accent)]">{item[0]}</td>
                    <td className="py-2 text-[var(--text-secondary)]">{item[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <hr className="border-[var(--border)] my-8" />

      {/* How Constraints Apply */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6 mt-10">{t.constraints.tag}</h2>
      {t.constraints.items.map((item, i) => (
        <div key={i} className="mb-5">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
          <p className="text-[var(--text-secondary)] leading-relaxed">{item.body}</p>
        </div>
      ))}

      <hr className="border-[var(--border)] my-8" />

      {/* Example */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.example.tag}</h2>
      <CodeBlock code={t.example.code} />
      <p className="text-sm text-[var(--text-muted)] italic">{t.example.note}</p>

      <hr className="border-[var(--border)] my-8" />

      {/* Audit Trail */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.audit.tag}</h2>
      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{t.audit.intro}</p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-[var(--border)]">
              {t.audit.headers.map((h, i) => (
                <th key={i} className="text-left py-2 pr-6 font-mono text-xs uppercase tracking-wide font-semibold text-[var(--text-primary)]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.audit.rows.map((row, i) => (
              <tr key={i} className="border-b border-[var(--border-light)]">
                <td className="py-2.5 pr-6 text-sm font-medium text-[var(--text-primary)]">{row[0]}</td>
                <td className="py-2.5 text-sm text-[var(--text-secondary)]">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-[var(--text-muted)] italic mb-6">{t.audit.note}</p>

      <hr className="border-[var(--border)] my-8" />

      {/* Compatible */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.compatible.tag}</h2>
      <p className="text-[var(--text-secondary)] leading-relaxed">{t.compatible.body}</p>

      <hr className="border-[var(--border)] my-8" />

      {/* Learn More */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.learnMore.tag}</h2>
      <ul className="space-y-2">
        {t.learnMore.links.map((link, i) => (
          <li key={i}>
            <Link href={link.href} className="text-[var(--accent)] hover:underline text-sm">{link.label}</Link>
          </li>
        ))}
      </ul>
    </article>
  )
}
