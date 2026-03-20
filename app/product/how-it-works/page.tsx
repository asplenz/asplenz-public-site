'use client'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { useLang } from '@/lib/LangContext'

const content = {
  fr: {
    tag: 'Produit',
    title: 'Comment fonctionne Knowledge',
    intro: 'Knowledge est un registre de décisions qui connecte humains, agents IA et pipelines CI à une source de vérité unique pour les contraintes organisationnelles.',

    coreIdea: {
      tag: 'L\'idée centrale',
      body: 'Les organisations prennent des décisions. Ces décisions produisent des contraintes. Ces contraintes doivent être appliquées. Aujourd\'hui, les décisions vivent dans des wikis, les contraintes dans la tête des gens, et l\'application est manuelle. Knowledge change ça en extrayant ce qui existe déjà, en structurant les décisions, en rendant les contraintes lisibles par les machines, et en automatisant leur application.',
    },

    entries: {
      tag: 'Quatre types d\'entrées, un seul registre',
      types: [
        {
          name: 'Decisions',
          badge: 'Immuable',
          desc: 'Un choix enregistré avec son contexte, son raisonnement et son auteur. Certaines decisions produisent des règles ou des contraintes. D\'autres sont des actions ponctuelles ou des changements d\'état - un changement de fournisseur cloud, un choix technique pour un cas spécifique, une réponse à un incident. Dans tous les cas, la decision est un fait historique immuable : elle documente ce qui a été décidé, pas ce qui doit être fait ensuite. Si une décision doit être révisée, elle peut être remplacée par une nouvelle décision liée à l\'originale.',
          code: `{
  "decision": "Utiliser PostgreSQL pour tous les data stores transactionnels",
  "context": "Évaluation de PostgreSQL, DynamoDB et CockroachDB",
  "reasoning": "Garanties ACID sans complexité distribuée",
  "author": "sarah.chen",
  "tags": ["database", "infrastructure"]
}`,
          note: 'Knowledge ne bloque pas la création de decisions contradictoires - c\'est un fait historique, on l\'enregistre tel quel. Mais un check de cohérence (on-demand ou nightly) détecte les tensions et doublons par similarité sémantique, avec des actions pour résoudre chaque finding.',
        },
        {
          name: 'Invariants',
          badge: 'Bloquant',
          desc: 'Une contrainte absolue - quelque chose qui ne doit jamais être violé. Les invariants sont bloquants : si une action entre en conflit avec un invariant, l\'action est stoppée. Les invariants sont immuables comme les decisions. Si une contrainte doit évoluer, l\'invariant actuel est archivé et un nouvel invariant le supersede via un lien explicite. L\'ancien reste consultable pour l\'audit. Pour les cas exceptionnels, un override permet de déroger temporairement sans modifier l\'invariant lui-même.',
          code: `{
  "constraint": "Tous les endpoints API publics doivent exiger une authentification",
  "rationale": "Baseline sécurité - aucune exception sans approbation explicite",
  "requires_approval": true
}`,
          question: '« Qu\'est-ce qui ne doit jamais arriver ? »',
        },
        {
          name: 'Rules',
          badge: 'Versionné',
          desc: 'Une directive active - quelque chose qui doit être suivi. Les rules sont versionnées : quand les exigences changent, une nouvelle version est créée tandis que l\'historique est préservé. Deux niveaux de sévérité : Mandatory (doit être suivie ; violations bloquent CI) et Advisory (devrait être suivie ; violations génèrent des avertissements).',
          code: `{
  "directive": "Toutes les PRs doivent être revues par au moins un membre de l'équipe",
  "severity": "MANDATORY"
}`,
          question: '« Que devons-nous faire ? »',
        },
        {
          name: 'Overrides',
          badge: 'Gouverné',
          desc: 'Une exception gouvernée - une dérogation explicite et approuvée à une rule ou un invariant. Les overrides ne sont pas des contournements. Ce sont des preuves documentées que l\'organisation a reconnu une contrainte, décidé d\'y déroger, et enregistré pourquoi.',
          code: `{
  "target": "rule:rul-9c2a",
  "justification": "Le gateway de paiement legacy nécessite REST - migration gRPC prévue au Q3",
  "conditions": "S'applique uniquement au service payment-gateway-v2",
  "expires": "2026-09-30",
  "approved_by": "sarah.chen"
}`,
          note: 'Un override ne peut pas être modifié - il peut être révoqué et recréé si les conditions changent.',
        },
      ],
    },

    scopes: {
      tag: 'Scopes et organisation',
      body: 'Knowledge est organisé en scopes - des domaines comme Engineering, Product, Operations ou Security. Chaque scope contient ses propres decisions, invariants et rules. Au sein d\'un scope, les namespaces permettent une subdivision plus fine (ex : payments, auth, infra). Pour les organisations multi-entités, les tenants assurent l\'isolation. Un groupe peut avoir des tenants par filiale, chacun avec ses propres scopes et entrées.',
    },

    extraction: {
      tag: 'Partez de ce que vous avez déjà',
      intro: 'Vos règles existantes peuvent être extraites automatiquement à partir de vos différents documents tels que les fichiers README, les docs d\'architecture, les runbooks, le code source, les fichiers CLAUDE.md, etc.',
      steps: [
        {
          title: 'Extraction depuis le code source',
          desc: 'Un prompt Asplenz permet à votre agent IA (Claude Code, Cursor) d\'analyser votre codebase localement et d\'enregistrer les règles détectées dans Knowledge via MCP. Le code ne quitte jamais votre machine, seules les règles extraites sont envoyées au registre.',
        },
        {
          title: 'Extraction depuis les documents',
          desc: 'Uploadez vos documents dans Knowledge via l\'API d\'ingestion. Knowledge les analyse et génère des drafts typés.',
        },
        {
          title: 'Validation humaine',
          desc: 'Rien n\'est publié sans validation. Chaque extraction génère un draft visible dans le dashboard : approuver, rejeter ou éditer. La déduplication sémantique élimine les doublons, ce qui permet de ré-extraire régulièrement sans polluer le registre.',
        },
      ],
    },

    interfaces: {
      tag: 'Cinq interfaces, une seule source de vérité',
      items: [
        {
          name: 'Dashboard web',
          desc: 'Les humains parcourent les scopes, lisent les decisions, passent en revue les drafts et approbations, et recherchent dans le registre.',
          bullets: [
            'Cartes KPI (compteurs d\'entrées par type)',
            'Drafts d\'extraction avec workflow approuver/rejeter',
            'Pages scope avec onglets (Decisions, Invariants, Rules, Overrides, Approvals, Events, References)',
            'Recherche full-text avec filtres type/scope',
            'Vérificateur de conformité (tester une action envisagée contre les contraintes)',
          ],
        },
        {
          name: 'API REST',
          desc: 'L\'interface programmatique directe au registre. Toutes les autres interfaces (MCP, Bot, Verifier) en sont des clients. Authentification par clé API, permissions granulaires.',
          examples: [
            {
              label: 'Exemple',
              code: `curl -X POST https://api.asplenz.com/knowledge/v1/check \\
  -H "Authorization: Bearer kn_..." \\
  -d '{"scope_id": "scp-...", "intended_action": "Déployer vendredi soir"}'`,
            },
          ],
        },
        {
          name: 'MCP pour les agents IA',
          desc: 'Les agents IA se connectent via MCP et interagissent en langage naturel. Knowledge expose un ensemble d\'outils que les agents appellent avant, pendant et après leurs actions. Quand un agent demande une approbation, Knowledge peut notifier les personnes concernées via webhook (Slack, Teams, ou tout système externe) avec une signature ECDSA pour garantir l\'authenticité. L\'agent peut fournir un callback_url pour être notifié automatiquement quand l\'approbation est traitée - sans polling.',
          examples: [
            {
              label: 'Vérifier avant d\'agir',
              code: `Utilisateur : "Est-ce que je peux déployer vendredi soir ?"
Agent → knowledge_check(scope="Engineering", intended_action="Déployer vendredi soir")
Knowledge → Conflit : invariant inv-8a3f "Pas de déploiement le vendredi après 16h UTC"
Agent : "Non - bloqué par l'invariant inv-8a3f. L'équipe a une politique no-deploy le vendredi."`,
            },
            {
              label: 'Résoudre le contexte avant de coder',
              code: `L'agent démarre une tâche dans le namespace payments
Agent → knowledge_resolve(scope="Engineering", namespace="payments")
Knowledge → Retourne 14 entrées applicables : 2 invariants, 5 decisions, 6 rules, 1 override
L'agent sait maintenant : PostgreSQL obligatoire, pas de dépendances AGPL, gRPC pour les nouveaux
  services, override REST actif pour payment-gateway-v2`,
            },
            {
              label: 'Enregistrer une décision après l\'avoir prise',
              code: `Utilisateur : "On prend Redis pour le cache de sessions plutôt que Memcached"
Agent → knowledge_record(scope="Engineering", type="decision",
        decision="Redis pour le cache de sessions",
        reasoning="Pub/sub natif, meilleures options de persistance")
Knowledge → Créé dec-4f2a, lié à la rule existante rul-7b1c (stratégie de cache)`,
            },
          ],
        },
        {
          name: 'Bot Slack & Teams',
          desc: 'Le Knowledge Bot permet de capturer des entrées directement depuis Slack ou Teams :',
          bullets: [
            'Créez une decision, rule ou invariant depuis n\'importe quel canal via un raccourci',
            'Transformez un message en entrée Knowledge structurée en un clic',
            'Consultez les entrées du registre dans un dashboard intégré',
          ],
        },
        {
          name: 'Verifier CI/CD',
          desc: 'Le Verifier s\'exécute dans votre pipeline CI et analyse le diff de chaque PR contre l\'état normatif du registre. Une IA évalue si les changements respectent ou violent chaque contrainte applicable.',
          examples: [
            {
              label: 'Une PR qui passe',
              code: `PR #142 : "Ajouter un endpoint de health avec auth JWT"
  → Le Verifier résout le scope Engineering (3 invariants, 2 rules mandatory)
  → L'IA analyse le diff contre chaque contrainte
  → inv-a1b2 "Tous les endpoints doivent exiger une auth" : RESPECTÉ (confiance : 0.95)
  → Verdict : PASS ✓`,
            },
            {
              label: 'Une PR qui échoue',
              code: `PR #143 : "Ajouter une librairie PDF sous licence AGPL"
  → Le Verifier résout le scope Engineering
  → L'IA détecte une violation : inv-2b1c "Pas de dépendances sous licence AGPL"
  → Aucun override actif pour cet invariant
  → Verdict : FAIL ✗`,
            },
          ],
          summary: 'Trois modes : report-only, fail-on-blocking, strict.',
        },
      ],
    },

    security: {
      tag: 'Sécurité et contrôle d\'accès',
      items: [
        'Clés API : chaque clé est liée à un principal (humain ou agent) avec un rôle (developer → senior-dev → tech-lead → admin), des permissions granulaires et un accès restreint à des scopes spécifiques',
        'Isolation tenant : séparation complète des données entre organisations',
      ],
    },

    cta: {
      tag: 'Prêt à essayer ?',
      body: 'Créez votre premier scope et extrayez vos premières règles en 2 minutes.',
      primary: 'Commencer →',
      primaryHref: '/docs/getting-started',
      secondary: 'Voir les tarifs →',
      secondaryHref: '/pricing',
    },
  },

  en: {
    tag: 'Product',
    title: 'How Knowledge Works',
    intro: 'Knowledge is a decision registry that connects humans, AI agents, and CI pipelines to a single source of truth for organizational constraints.',

    coreIdea: {
      tag: 'The Core Idea',
      body: 'Organizations make decisions. Those decisions produce constraints. Constraints must be enforced. Today, decisions live in wikis, constraints live in people\'s heads, and enforcement is manual. Knowledge changes this by extracting what already exists, making decisions structured, constraints machine-readable, and enforcement automatic.',
    },

    entries: {
      tag: 'Four Entry Types, One Registry',
      types: [
        {
          name: 'Decisions',
          badge: 'Immutable',
          desc: 'A recorded choice with its context, reasoning, and author. Some decisions produce rules or constraints. Others are one-time actions or state changes - switching cloud providers, a technical choice for a specific case, a response to an incident. In all cases, the decision is an immutable historical fact: it documents what was decided, not what should be done next. If a decision needs to be revised, it can be superseded by a new decision linked to the original.',
          code: `{
  "decision": "Use PostgreSQL for all transactional data stores",
  "context": "Evaluated PostgreSQL, DynamoDB, and CockroachDB",
  "reasoning": "ACID guarantees without distributed complexity",
  "author": "sarah.chen",
  "tags": ["database", "infrastructure"]
}`,
          note: 'Knowledge does not block the creation of contradictory decisions - they are historical facts, recorded as-is. But a coherence check (on-demand or nightly) detects tensions and duplicates via semantic similarity, with actions to resolve each finding.',
        },
        {
          name: 'Invariants',
          badge: 'Blocking',
          desc: 'An absolute constraint - something that must never be violated. Invariants are blocking: if an action conflicts with an invariant, the action is stopped. Invariants are immutable like decisions. If a constraint needs to evolve, the current invariant is archived and a new invariant supersedes it via an explicit link. The old one remains available for audit. For exceptional cases, an override allows a temporary deviation without modifying the invariant itself.',
          code: `{
  "constraint": "All public API endpoints must require authentication",
  "rationale": "Security baseline - no exceptions without explicit approval",
  "requires_approval": true
}`,
          question: '"What must never happen?"',
        },
        {
          name: 'Rules',
          badge: 'Versioned',
          desc: 'An active directive - something that should be followed. Rules are versioned: when requirements change, a new version is created while the history is preserved. Two severity levels: Mandatory (must be followed; violations block CI checks) and Advisory (should be followed; violations generate warnings).',
          code: `{
  "directive": "All PRs must be reviewed by at least one team member",
  "severity": "MANDATORY"
}`,
          question: '"What should we do?"',
        },
        {
          name: 'Overrides',
          badge: 'Governed',
          desc: 'A governed exception - an explicit, approved deviation from a rule or invariant. Overrides are not workarounds. They are documented proof that the organization acknowledged a constraint, decided to deviate, and recorded why.',
          code: `{
  "target": "rule:rul-9c2a",
  "justification": "Legacy payment gateway requires REST - gRPC migration planned for Q3",
  "conditions": "Applies only to payment-gateway-v2 service",
  "expires": "2026-09-30",
  "approved_by": "sarah.chen"
}`,
          note: 'An override cannot be modified - it can be revoked and recreated if conditions change.',
        },
      ],
    },

    scopes: {
      tag: 'Scopes and Organization',
      body: 'Knowledge is organized into scopes - domains like Engineering, Product, Operations, or Security. Each scope contains its own decisions, invariants, and rules. Within a scope, namespaces allow further subdivision (e.g., payments, auth, infra). For multi-entity organizations, tenants provide isolation. A holding company can have subsidiary tenants, each with their own scopes and entries.',
    },

    extraction: {
      tag: 'Start from What You Have',
      intro: 'Your existing rules can be extracted automatically from your various documents such as README files, architecture docs, runbooks, source code, CLAUDE.md files, etc.',
      steps: [
        {
          title: 'Extraction from Source Code',
          desc: 'An Asplenz prompt enables your AI agent (Claude Code, Cursor) to analyze your codebase locally and record detected rules into Knowledge via MCP. The code never leaves your machine, only the extracted rules are sent to the registry.',
        },
        {
          title: 'Extraction from Documents',
          desc: 'Upload your documents into Knowledge via the Ingestion API. Knowledge analyzes them and generates typed drafts.',
        },
        {
          title: 'Human Review',
          desc: 'Nothing is published without validation. Each extraction generates a draft visible in the dashboard: approve, reject, or edit. Semantic deduplication filters out duplicates, so you can re-extract regularly without polluting the registry.',
        },
      ],
    },

    interfaces: {
      tag: 'Five Interfaces, One Source of Truth',
      items: [
        {
          name: 'Web Dashboard',
          desc: 'Humans browse scopes, read decisions, review pending drafts and approvals, and search the registry.',
          bullets: [
            'KPI cards (entry counts by type)',
            'Extraction drafts with approve/reject workflow',
            'Scope pages with tabs (Decisions, Invariants, Rules, Overrides, Approvals, Events, References)',
            'Full-text search with type/scope filters',
            'Compliance checker (test an intended action against constraints)',
          ],
        },
        {
          name: 'REST API',
          desc: 'The direct programmatic interface to the registry. All other interfaces (MCP, Bot, Verifier) are clients of this API. Authentication via API key, with granular per-key permissions.',
          examples: [
            {
              label: 'Example',
              code: `curl -X POST https://api.asplenz.com/knowledge/v1/check \\
  -H "Authorization: Bearer kn_..." \\
  -d '{"scope_id": "scp-...", "intended_action": "Deploy on Friday evening"}'`,
            },
          ],
        },
        {
          name: 'MCP for AI Agents',
          desc: 'AI agents connect via MCP and interact using natural language. Knowledge exposes a set of tools that agents call before, during, and after acting. When an agent requests an approval, Knowledge can notify the right people via webhook (Slack, Teams, or any external system) with an ECDSA signature to guarantee authenticity. The agent can provide a callback_url to be notified automatically when the approval is resolved - no polling needed.',
          examples: [
            {
              label: 'Check before acting',
              code: `User: "Can I deploy on Friday evening?"
Agent → knowledge_check(scope="Engineering", intended_action="Deploy on Friday evening")
Knowledge → Conflict: invariant inv-8a3f "No Friday deploys after 16:00 UTC"
Agent: "No - blocked by invariant inv-8a3f. The team has a no-Friday-deploy policy."`,
            },
            {
              label: 'Resolve context before coding',
              code: `Agent starts a task in the payments namespace
Agent → knowledge_resolve(scope="Engineering", namespace="payments")
Knowledge → Returns 14 applicable entries: 2 invariants, 5 decisions, 6 rules, 1 override
Agent now knows: PostgreSQL required, no AGPL deps, gRPC for new services,
  REST override active for payment-gateway-v2`,
            },
            {
              label: 'Record a decision after making one',
              code: `User: "Let's use Redis for session caching instead of Memcached"
Agent → knowledge_record(scope="Engineering", type="decision",
        decision="Redis for session caching",
        reasoning="Native pub/sub, better persistence options")
Knowledge → Created dec-4f2a, linked to existing rule rul-7b1c (caching strategy)`,
            },
          ],
        },
        {
          name: 'Slack & Teams Bot',
          desc: 'The Knowledge Bot lets you capture entries directly from Slack or Teams:',
          bullets: [
            'Create a decision, rule, or invariant from any channel via a shortcut',
            'Turn a message into a structured Knowledge entry in one click',
            'Browse the registry entries in an integrated dashboard',
          ],
        },
        {
          name: 'CI/CD Verifier',
          desc: 'The Verifier runs in your CI pipeline and analyzes the diff of each PR against the normative state of the registry. An AI evaluates whether the changes respect or violate each applicable constraint.',
          examples: [
            {
              label: 'A PR that passes',
              code: `PR #142: "Add health endpoint with JWT auth"
  → Verifier resolves Engineering scope (3 invariants, 2 mandatory rules)
  → AI analyzes the diff against each constraint
  → inv-a1b2 "All endpoints must require auth": RESPECTED (confidence: 0.95)
  → Verdict: PASS ✓`,
            },
            {
              label: 'A PR that fails',
              code: `PR #143: "Add AGPL-licensed PDF library"
  → Verifier resolves Engineering scope
  → AI detects a violation: inv-2b1c "No AGPL-licensed dependencies"
  → No active override for this invariant
  → Verdict: FAIL ✗`,
            },
          ],
          summary: 'Three modes: report-only, fail-on-blocking, strict.',
        },
      ],
    },

    security: {
      tag: 'Security and Access Control',
      items: [
        'API keys: each key is tied to a principal (human or agent) with a role (developer → senior-dev → tech-lead → admin), granular permissions, and access restricted to specific scopes',
        'Tenant isolation: complete data separation between organizations',
      ],
    },

    cta: {
      tag: 'Ready to Try?',
      body: 'Create your first scope and extract your first rules in 2 minutes.',
      primary: 'Get Started →',
      primaryHref: '/docs/getting-started',
      secondary: 'View Pricing →',
      secondaryHref: '/pricing',
    },
  },
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="rounded-lg bg-[#1A1A2E] text-[#A8C8E8] text-xs p-4 overflow-x-hidden whitespace-pre-wrap break-words leading-relaxed font-mono">
      {code}
    </pre>
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
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl">{t.intro}</p>
        </div>
      </section>

      {/* Core Idea */}
      <section className="py-10 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.coreIdea.tag}</p>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-3xl">{t.coreIdea.body}</p>
        </div>
      </section>

      {/* Four Entry Types */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.entries.tag}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {t.entries.types.map((type, i) => (
              <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-semibold text-lg text-[var(--text-primary)]">{type.name}</h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--accent-light)] text-[var(--accent)]">{type.badge}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{type.desc}</p>
                {'question' in type && type.question && (
                  <p className="text-xs font-medium text-[var(--text-muted)] italic mb-3">{type.question}</p>
                )}
                <CodeBlock code={type.code} />
                {'note' in type && type.note && (
                  <p className="text-xs text-[var(--text-muted)] mt-3 leading-relaxed">{type.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scopes */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.scopes.tag}</p>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl">{t.scopes.body}</p>
          <div className="mt-8 max-w-xl">
            <Image src="/images/docs/knowledge-scopes-tree.svg" alt={lang === 'fr' ? 'Scopes et namespaces' : 'Scopes and namespaces'} width={720} height={420} className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Extraction */}
      <section className="py-12 px-6 md:px-16 lg:px-24" id="start-from-what-you-have">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.extraction.tag}</p>
          <p className="text-[var(--text-secondary)] mb-10 leading-relaxed max-w-2xl">{t.extraction.intro}</p>
          <div className="space-y-8">
            {t.extraction.steps.map((step, i) => (
              <div key={i}>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed max-w-2xl">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interfaces */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-10">{t.interfaces.tag}</p>
          <div className="space-y-12">
            {t.interfaces.items.map((item, i) => (
              <div key={i}>
                <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-3">{item.name}</h3>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{item.desc}</p>
                {'bullets' in item && item.bullets && (
                  <ul className="space-y-1 mb-4 max-w-2xl">
                    {item.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {'examples' in item && item.examples && (
                  <div className="space-y-4 max-w-2xl">
                    {item.examples.map((ex, ei) => (
                      <div key={ei}>
                        <p className="text-xs font-mono font-medium text-[var(--text-muted)] mb-2 uppercase tracking-wide">{ex.label}</p>
                        <CodeBlock code={ex.code} />
                      </div>
                    ))}
                  </div>
                )}
                {'summary' in item && item.summary && (
                  <p className="text-sm text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl">{item.summary}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.security.tag}</p>
          <ul className="space-y-3 mb-6">
            {t.security.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                <span className="text-[var(--accent)] mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.cta.tag}</p>
          <p className="text-[var(--text-secondary)] mb-10 text-base leading-relaxed">{t.cta.body}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={t.cta.primaryHref} className="px-7 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors">
              {t.cta.primary}
            </Link>
            <Link href={t.cta.secondaryHref} className="px-7 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
              {t.cta.secondary}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
