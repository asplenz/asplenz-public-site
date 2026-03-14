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
          desc: 'Un fait historique — ce qui a été décidé, par qui, quand, et pourquoi. Les decisions sont immuables : une fois enregistrées, elles ne peuvent pas être modifiées.',
          question: '« Pourquoi cette règle existe-t-elle ? »',
          code: `{
  "decision": "Utiliser PostgreSQL pour tous les data stores transactionnels",
  "context": "Évaluation de PostgreSQL, DynamoDB et CockroachDB",
  "reasoning": "Garanties ACID sans complexité distribuée",
  "author": "sarah.chen",
  "tags": ["database", "infrastructure"]
}`,
        },
        {
          name: 'Invariants',
          badge: 'Bloquant',
          desc: 'Une contrainte absolue — quelque chose qui ne doit jamais être violé. Les invariants sont bloquants : si une action entre en conflit avec un invariant, l\'action est stoppée.',
          question: '« Qu\'est-ce qui ne doit jamais arriver ? »',
          code: `{
  "constraint": "Tous les endpoints API publics doivent exiger une authentification",
  "rationale": "Baseline sécurité — aucune exception sans approbation explicite",
  "requires_approval": true
}`,
        },
        {
          name: 'Rules',
          badge: 'Versionné',
          desc: 'Une directive active — quelque chose qui doit être suivi. Les rules sont versionnées : quand les exigences changent, une nouvelle version est créée tandis que l\'historique est préservé.',
          question: '« Que devons-nous faire ? »',
          code: `{
  "directive": "Toutes les PRs doivent être revues par au moins un membre de l'équipe",
  "severity": "MANDATORY"
}`,
        },
        {
          name: 'Overrides',
          badge: 'Gouverné',
          desc: 'Une exception gouvernée — une dérogation explicite et approuvée à une rule ou un invariant. Les overrides ne sont pas des contournements. Ce sont des preuves documentées.',
          question: '« Pourquoi cette règle n\'a-t-elle pas été suivie ? »',
          code: `{
  "target": "rule:rul-9c2a",
  "justification": "Le gateway de paiement legacy nécessite REST — migration gRPC prévue au Q3",
  "conditions": "S'applique uniquement au service payment-gateway-v2",
  "expires": "2026-09-30",
  "approved_by": "sarah.chen"
}`,
        },
      ],
    },
    relations: {
      tag: 'Comment les entrées se connectent',
      body: 'Les entités sont liées entre elles par des relations typées : depends_on, supersedes, replaces, contradicts, in_tension_with. Ce graphe signifie qu\'on peut toujours remonter au pourquoi d\'une contrainte — il suffit de suivre les liens jusqu\'à la decision.',
    },
    scopes: {
      tag: 'Scopes et organisation',
      body: 'Knowledge est organisé en scopes — des domaines comme Engineering, Product, Operations ou Security. Chaque scope contient ses propres decisions, invariants et rules. Au sein d\'un scope, les namespaces permettent une subdivision plus fine (ex : payments, auth, infra). Pour les organisations multi-entités, les tenants assurent l\'isolation.',
    },
    extraction: {
      tag: 'Partez de ce que vous avez déjà',
      intro: 'La plupart des équipes ont déjà des règles — elles ne sont simplement pas structurées. Elles vivent dans des READMEs, des docs d\'architecture, des runbooks, des commentaires de code et des fichiers CLAUDE.md. Knowledge les extrait automatiquement.',
      steps: [
        {
          title: 'Extraction automatique',
          desc: 'La CLI knowledge extract scanne vos sources et utilise une analyse LLM pour faire émerger les règles, décisions et contraintes implicites. Chaque extraction inclut un score de confiance, l\'extrait source et des tags suggérés.',
          code: `knowledge extract --scope Engineering --source ./docs --source ./README.md`,
        },
        {
          title: 'Validation humaine',
          desc: 'Rien n\'est publié sans validation humaine. Chaque extraction devient un draft dans la file de revue. Les reviewers voient le contexte source, le niveau de confiance, et les relations détectées.',
          code: `knowledge extract → 47 chunks analysés → 12 drafts générés

Draft dsd-8a3f (invariant, confiance : 0.91)
  Contrainte : "Tous les endpoints API doivent exiger une authentification"
  Source : docs/security.md, ligne 42
  → Approuver | Rejeter | Éditer`,
        },
        {
          title: 'API d\'ingestion',
          desc: 'Pour les intégrations custom, les équipes peuvent pousser des documents directement via l\'API. Cela permet l\'extraction depuis n\'importe quelle source : wikis internes, exports Confluence, digests Slack ou artefacts CI.',
          code: `curl -X POST http://localhost:8090/api/v1/distill/stream \\
  -H "Authorization: Bearer kn_..." \\
  -d '{"scope_id": "scp-...", "documents": [{"content": "..."}], "auto_run": true}'`,
        },
      ],
    },
    interfaces: {
      tag: 'Six interfaces, une seule source de vérité',
      items: [
        {
          name: 'CLI',
          desc: 'Les développeurs extraient les règles, lancent le pipeline d\'extraction et gèrent le registre depuis le terminal. Supporte les glob patterns, plusieurs types de sources et le ciblage par scope.',
        },
        {
          name: 'Dashboard web',
          desc: 'Les humains parcourent les scopes, lisent les decisions, passent en revue les drafts et approbations, et recherchent dans le registre. KPI cards, workflow approuver/rejeter, recherche full-text, vérificateur de conformité.',
        },
        {
          name: 'API REST',
          desc: 'L\'API REST est l\'interface programmatique directe au registre. Toutes les autres interfaces (CLI, MCP, Bot, Verifier) sont des clients de cette API. Les équipes peuvent l\'utiliser directement pour intégrer Knowledge dans n\'importe quel workflow ou outil interne. L\'API couvre la totalité des opérations : lecture, écriture, recherche, extraction, vérification de conformité et gestion des approbations. Authentification par clé API, permissions granulaires par clé.',
          examples: [
            {
              label: 'Exemples d\'appels',
              code: `# Lister les invariants d'un scope
curl http://localhost:8090/api/v1/invariants?scope_id=scp-... \\
  -H "Authorization: Bearer kn_..."

# Vérifier la conformité d'une action
curl -X POST http://localhost:8090/api/v1/check \\
  -H "Authorization: Bearer kn_..." \\
  -d '{"scope_id": "scp-...", "intended_action": "Déployer vendredi soir"}'`,
            },
          ],
        },
        {
          name: 'MCP pour les agents IA',
          desc: 'Les agents IA (Claude, Cursor, etc.) se connectent via MCP et interagissent en langage naturel. Knowledge expose 6 outils que les agents appellent avant, pendant et après leurs actions.',
          examples: [
            {
              label: 'Vérifier avant d\'agir',
              code: `Utilisateur : "Est-ce que je peux déployer vendredi soir ?"
Agent → knowledge_check(scope="Engineering", intended_action="Déployer vendredi soir")
Knowledge → Conflit : invariant inv-8a3f "Pas de déploiement le vendredi après 16h UTC"
Agent : "Non — bloqué par l'invariant inv-8a3f."`,
            },
            {
              label: 'Résoudre le contexte avant de coder',
              code: `Agent → knowledge_resolve(scope="Engineering", namespace="payments")
Knowledge → Retourne 14 entrées applicables : 2 invariants, 5 decisions, 6 rules, 1 override
L'agent sait : PostgreSQL obligatoire, pas de dépendances AGPL, gRPC pour les nouveaux services`,
            },
            {
              label: 'Enregistrer une décision',
              code: `Utilisateur : "On prend Redis pour le cache de sessions"
Agent → knowledge_record(scope="Engineering", type="decision",
        decision="Redis pour le cache de sessions",
        reasoning="Pub/sub natif, meilleures options de persistance")
Knowledge → Créé dec-4f2a, lié à la rule existante rul-7b1c`,
            },
          ],
        },
        {
          name: 'Bot Slack & Teams',
          desc: 'Le Knowledge Bot surveille un canal dédié (#knowledge) et détecte automatiquement les décisions, invariants et règles dans les messages de votre équipe. Quand un message contient du knowledge, le bot poste un résumé structuré dans le thread avec des boutons Valider, Éditer ou Ignorer. Le bot supporte aussi le transfert de messages et fonctionne via Socket Mode (Slack) ou HTTP (Teams).',
          examples: [
            {
              label: 'Capture depuis Slack',
              code: `Message dans #knowledge :
  "On interdit les déploiements le vendredi après 16h à partir de maintenant"

Bot → Détecte un invariant (confiance : 0.94)
  → Poste dans le thread :
    Type : Invariant
    Contrainte : "Pas de déploiement le vendredi après 16h UTC"
    Scope : Engineering (modifiable via dropdown)
    → [Valider] [Éditer] [Ignorer]

L'utilisateur clique [Valider] → l'entrée est publiée dans le registre`,
            },
          ],
        },
        {
          name: 'Verifier CI/CD',
          desc: 'Le Verifier s\'exécute dans votre pipeline CI et vérifie que chaque PR cite les entrées Knowledge applicables. Trois modes : report-only, fail-on-blocking, strict.',
          examples: [
            {
              label: 'Une PR qui passe',
              code: `PR #142 : "Ajouter un endpoint de health"
  → Le Verifier résout le scope Engineering
  → Trouve 3 invariants applicables, 2 rules mandatory
  → Le corps de la PR cite les 5 avec statut : "followed"
  → Verdict : PASS ✓`,
            },
            {
              label: 'Une PR qui échoue',
              code: `PR #143 : "Ajouter une librairie PDF sous licence AGPL"
  → Le Verifier résout le scope Engineering
  → Conflit : invariant inv-2b1c "Pas de dépendances sous licence AGPL"
  → Aucun override enregistré pour cet invariant
  → Verdict : FAIL ✗ — invariant inv-2b1c violé`,
            },
          ],
        },
      ],
    },
    loop: {
      tag: 'La boucle de conformité',
      steps: [
        { n: '0', label: 'Extract', desc: 'Scanner la documentation existante et faire émerger les règles implicites comme drafts typés pour validation humaine.' },
        { n: '1', label: 'Record', desc: 'Les decisions sont capturées avec leur contexte, raisonnement et attribution d\'auteur.' },
        { n: '2', label: 'Enforce', desc: 'Les invariants bloquent, les rules dirigent, les overrides gouvernent les exceptions, les approbations gatent les actions à risque.' },
        { n: '3', label: 'Trace', desc: 'Les références prouvent ce qui a été consulté, les events loguent chaque changement.' },
      ],
      body: 'La boucle commence par l\'extraction — peuplez le registre à partir de ce que votre équipe a déjà. Ensuite elle tourne en continu : chaque requête d\'agent, chaque check de PR, chaque décision d\'approbation s\'ajoute à la trace.',
    },
    security: {
      tag: 'Sécurité et contrôle d\'accès',
      items: [
        'Clés API avec permissions — chaque clé a un ensemble spécifique d\'opérations autorisées',
        'Hiérarchie de rôles : developer → senior-dev → tech-lead → admin',
        'Accès par scope — les clés peuvent être restreintes à des scopes spécifiques',
        'Isolation tenant — les déploiements multi-tenant assurent une séparation complète des données',
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
          desc: 'A historical fact — what was decided, by whom, when, and why. Decisions are immutable: once recorded, they cannot be edited. The historical record is preserved exactly as it was captured.',
          question: '"Why does this rule exist?"',
          code: `{
  "decision": "Use PostgreSQL for all transactional data stores",
  "context": "Evaluated PostgreSQL, DynamoDB, and CockroachDB",
  "reasoning": "ACID guarantees without distributed complexity",
  "author": "sarah.chen",
  "tags": ["database", "infrastructure"]
}`,
        },
        {
          name: 'Invariants',
          badge: 'Blocking',
          desc: 'An absolute constraint — something that must never be violated. Invariants are blocking: if an action conflicts with an invariant, the action is stopped.',
          question: '"What must never happen?"',
          code: `{
  "constraint": "All public API endpoints must require authentication",
  "rationale": "Security baseline — no exceptions without explicit approval",
  "requires_approval": true
}`,
        },
        {
          name: 'Rules',
          badge: 'Versioned',
          desc: 'An active directive — something that should be followed. Rules are versioned: when requirements change, a new version is created while the history is preserved.',
          question: '"What should we do?"',
          code: `{
  "directive": "All PRs must be reviewed by at least one team member",
  "severity": "MANDATORY"
}`,
        },
        {
          name: 'Overrides',
          badge: 'Governed',
          desc: 'A governed exception — an explicit, approved deviation from a rule or invariant. Overrides are not workarounds. They are documented proof that the organization acknowledged a constraint, decided to deviate, and recorded why.',
          question: '"Why was this rule not followed?"',
          code: `{
  "target": "rule:rul-9c2a",
  "justification": "Legacy payment gateway requires REST — gRPC migration planned for Q3",
  "conditions": "Applies only to payment-gateway-v2 service",
  "expires": "2025-09-30",
  "approved_by": "sarah.chen"
}`,
        },
      ],
    },
    relations: {
      tag: 'How Entries Connect',
      body: 'Entities link to each other through typed relations: depends_on, supersedes, replaces, contradicts, in_tension_with. This graph means you can always trace why a constraint exists — follow the links back to the decision.',
    },
    scopes: {
      tag: 'Scopes and Organization',
      body: 'Knowledge is organized into scopes — domains like Engineering, Product, Operations, or Security. Each scope contains its own decisions, invariants, and rules. Within a scope, namespaces allow further subdivision (e.g., payments, auth, infra). For multi-entity organizations, tenants provide isolation.',
    },
    extraction: {
      tag: 'Start from What You Have',
      intro: 'Most teams already have rules — they\'re just not structured. They live in READMEs, architecture docs, runbooks, code comments, and CLAUDE.md files. Knowledge extracts them automatically.',
      steps: [
        {
          title: 'Automatic Extraction',
          desc: 'The knowledge extract CLI scans your sources and uses LLM analysis to surface implicit rules, decisions, and constraints. Each extraction includes a confidence score, the source excerpt, and suggested tags.',
          code: `knowledge extract --scope Engineering --source ./docs --source ./README.md`,
        },
        {
          title: 'Human Review',
          desc: 'Nothing is published without human validation. Every extraction becomes a draft in the review queue. Reviewers see the source context, confidence level, and any detected relations to existing entries.',
          code: `knowledge extract → 47 chunks analyzed → 12 drafts generated

Draft dsd-8a3f (invariant, confidence: 0.91)
  Constraint: "All API endpoints must require authentication"
  Source: docs/security.md, line 42
  → Approve | Reject | Edit`,
        },
        {
          title: 'Ingestion API',
          desc: 'For custom integrations, teams can push documents directly via the API. This enables extraction from any source: internal wikis, Confluence exports, Slack digests, or CI artifacts.',
          code: `curl -X POST http://localhost:8090/api/v1/distill/stream \\
  -H "Authorization: Bearer kn_..." \\
  -d '{"scope_id": "scp-...", "documents": [{"content": "..."}], "auto_run": true}'`,
        },
      ],
    },
    interfaces: {
      tag: 'Six Interfaces, One Source of Truth',
      items: [
        {
          name: 'CLI',
          desc: 'Engineers extract rules from existing documentation, run the extraction pipeline, and manage the registry from the terminal. Supports glob patterns, multiple source types, and scope targeting.',
        },
        {
          name: 'Web Dashboard',
          desc: 'Humans browse scopes, read decisions, review pending drafts and approvals, and search the registry. KPI cards, approve/reject workflow, full-text search with filters, compliance checker.',
        },
        {
          name: 'REST API',
          desc: 'The REST API is the direct programmatic interface to the registry. All other interfaces (CLI, MCP, Bot, Verifier) are clients of this API. Teams can use it directly to integrate Knowledge into any workflow or internal tool. The API covers all operations: read, write, search, extraction, compliance checking, and approval management. Authentication via API key, with granular per-key permissions.',
          examples: [
            {
              label: 'Example calls',
              code: `# List invariants for a scope
curl http://localhost:8090/api/v1/invariants?scope_id=scp-... \\
  -H "Authorization: Bearer kn_..."

# Check compliance for an intended action
curl -X POST http://localhost:8090/api/v1/check \\
  -H "Authorization: Bearer kn_..." \\
  -d '{"scope_id": "scp-...", "intended_action": "Deploy on Friday evening"}'`,
            },
          ],
        },
        {
          name: 'MCP for AI Agents',
          desc: 'AI agents (Claude, Cursor, etc.) connect via MCP and interact using natural language. Knowledge exposes 6 tools that agents call before, during, and after acting.',
          examples: [
            {
              label: 'Check before acting',
              code: `User: "Can I deploy on Friday evening?"
Agent → knowledge_check(scope="Engineering", intended_action="Deploy on Friday evening")
Knowledge → Conflict: invariant inv-8a3f "No Friday deploys after 16:00 UTC"
Agent: "No — blocked by invariant inv-8a3f."`,
            },
            {
              label: 'Resolve context before coding',
              code: `Agent → knowledge_resolve(scope="Engineering", namespace="payments")
Knowledge → Returns 14 applicable entries: 2 invariants, 5 decisions, 6 rules, 1 override
Agent now knows: PostgreSQL required, no AGPL deps, gRPC for new services`,
            },
            {
              label: 'Record a decision',
              code: `User: "Let's use Redis for session caching instead of Memcached"
Agent → knowledge_record(scope="Engineering", type="decision",
        decision="Redis for session caching",
        reasoning="Native pub/sub, better persistence options")
Knowledge → Created dec-4f2a, linked to existing rule rul-7b1c`,
            },
          ],
        },
        {
          name: 'Slack & Teams Bot',
          desc: 'The Knowledge Bot monitors a dedicated channel (#knowledge) and automatically detects decisions, invariants, and rules in your team\'s messages. When a message contains knowledge, the bot posts a structured summary in the thread with Validate, Edit, or Ignore buttons. The bot also supports message forwarding and runs via Socket Mode (Slack) or HTTP (Teams) — no public URL required for Slack.',
          examples: [
            {
              label: 'Capture from Slack',
              code: `Message in #knowledge:
  "We're banning Friday deploys after 4pm starting now"

Bot → Detects an invariant (confidence: 0.94)
  → Posts in thread:
    Type: Invariant
    Constraint: "No Friday deploys after 16:00 UTC"
    Scope: Engineering (changeable via dropdown)
    → [Validate] [Edit] [Ignore]

User clicks [Validate] → entry is published to the registry`,
            },
          ],
        },
        {
          name: 'CI/CD Verifier',
          desc: 'The Verifier runs in your CI pipeline and checks that every PR cites applicable Knowledge entries. Three modes: report-only, fail-on-blocking, strict.',
          examples: [
            {
              label: 'A PR that passes',
              code: `PR #142: "Add health endpoint"
  → Verifier resolves Engineering scope
  → Finds 3 applicable invariants, 2 mandatory rules
  → PR body cites all 5 with status: "followed"
  → Verdict: PASS ✓`,
            },
            {
              label: 'A PR that fails',
              code: `PR #143: "Add AGPL-licensed PDF library"
  → Verifier resolves Engineering scope
  → Conflict: invariant inv-2b1c "No AGPL-licensed dependencies"
  → No override registered for this invariant
  → Verdict: FAIL ✗ — invariant inv-2b1c violated`,
            },
          ],
        },
      ],
    },
    loop: {
      tag: 'The Compliance Loop',
      steps: [
        { n: '0', label: 'Extract', desc: 'Scan existing documentation and surface implicit rules as typed drafts for human review.' },
        { n: '1', label: 'Record', desc: 'Decisions are captured with context, reasoning, and author attribution.' },
        { n: '2', label: 'Enforce', desc: 'Invariants block, rules direct, overrides govern exceptions, approvals gate high-risk actions.' },
        { n: '3', label: 'Trace', desc: 'References prove what was consulted, events log every change.' },
      ],
      body: 'The loop starts with extraction — populate the registry from what your team already has. Then it runs continuously: every agent query, every PR check, every approval decision adds to the trail.',
    },
    security: {
      tag: 'Security and Access Control',
      items: [
        'API keys with permissions — each key has a specific set of allowed operations',
        'Role hierarchy: developer → senior-dev → tech-lead → admin',
        'Scope-level access — keys can be restricted to specific scopes',
        'Tenant isolation — multi-tenant deployments ensure complete data separation',
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
          <p className="text-[var(--text-secondary)] text-base leading-relaxed">{t.coreIdea.body}</p>
        </div>
      </section>

      {/* Four Entry Types */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.entries.tag}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {t.entries.types.map((type, i) => (
              <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-semibold text-lg text-[var(--text-primary)]">{type.name}</h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--accent-light)] text-[var(--accent)]">{type.badge}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{type.desc}</p>
                <p className="text-xs font-medium text-[var(--text-muted)] italic mb-3">{type.question}</p>
                <CodeBlock code={type.code} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relations graph */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.relations.tag}</p>
          <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">{t.relations.body}</p>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 flex justify-center">
            <Image
              src="/images/product/knowledge-entry-relations.svg"
              alt="Entry relations graph"
              width={700}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Scopes */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.scopes.tag}</p>
          <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">{t.scopes.body}</p>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 flex justify-center">
            <Image
              src="/images/product/knowledge-scopes-tree.svg"
              alt="Scopes and namespaces"
              width={700}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Extraction */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.extraction.tag}</p>
          <p className="text-[var(--text-secondary)] mb-10 leading-relaxed max-w-2xl">{t.extraction.intro}</p>
          <div className="space-y-8">
            {t.extraction.steps.map((step, i) => (
              <div key={i}>
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed max-w-2xl">{step.desc}</p>
                <div className="max-w-2xl"><CodeBlock code={step.code} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four interfaces */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.interfaces.tag}</p>
          <div className="space-y-12">
            {t.interfaces.items.map((item, i) => (
              <div key={i}>
                <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-3">{item.name}</h3>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{item.desc}</p>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance loop */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.loop.tag}</p>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6 flex justify-center mb-10">
            <Image
              src="/images/product/knowledge-compliance-loop.svg"
              alt="Compliance loop"
              width={700}
              height={360}
              className="max-w-full h-auto"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {t.loop.steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-[var(--accent-light)] text-[var(--accent)] font-mono text-sm font-bold flex items-center justify-center shrink-0">
                  {step.n}
                </span>
                <div>
                  <p className="font-semibold text-[var(--text-primary)] mb-1">{step.label}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{t.loop.body}</p>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.security.tag}</p>
          <ul className="space-y-3">
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
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.cta.tag}</p>
          <p className="text-[var(--text-secondary)] mb-10 text-base leading-relaxed">{t.cta.body}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={t.cta.primaryHref}
              className="px-7 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
            >
              {t.cta.primary}
            </Link>
            <Link
              href={t.cta.secondaryHref}
              className="px-7 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {t.cta.secondary}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
