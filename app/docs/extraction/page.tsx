'use client'
import Link from 'next/link'
import { useLang } from '@/lib/LangContext'

const content = {
  fr: {
    title: 'Extraction Automatique',
    intro: "Knowledge peut scanner vos sources existantes et extraire automatiquement les règles, décisions et contraintes implicites. Rien n'est publié sans validation humaine.",
    why: {
      tag: "Pourquoi l'extraction automatique ?",
      body: [
        "La plupart des équipes ont déjà des règles — elles ne sont simplement pas structurées. Elles vivent dans des READMEs, des décisions d'architecture, des runbooks, des commentaires de code, des threads Slack et des pages wiki.",
        "Saisir manuellement chaque règle dans un registre prend un temps que la plupart des équipes n'ont pas. L'extraction automatique résout le problème du démarrage à froid : pointez-la vers vos sources et obtenez un registre peuplé en quelques minutes.",
        "Et à mesure que votre documentation évolue, vous pouvez relancer l'extraction régulièrement pour faire émerger les nouvelles règles implicites — votre registre reste à jour sans maintenance manuelle.",
      ],
    },
    howItWorks: {
      tag: 'Comment ça fonctionne',
      step1: {
        title: '1. Pointez vers vos sources',
        code1: 'knowledge extract --scope Engineering --source ./docs --source ./CLAUDE.md',
        code2Label: 'Ciblez des répertoires et types de fichiers spécifiques :',
        code2: `knowledge extract --scope Engineering \\
  --source ./docs --pattern "**/*.md" \\
  --source ./src --pattern "**/README.md" \\
  --source . --pattern "CLAUDE.md"`,
      },
      step2: {
        title: '2. Chaque chunk est analysé',
        body: "Les fichiers sont découpés en chunks contextuels (~1500 caractères avec 10% de chevauchement). Chaque chunk est analysé avec un prompt d'extraction structuré qui identifie :",
        candidates: [
          { name: 'Candidats invariant', desc: '« Tous les endpoints API doivent exiger une authentification »' },
          { name: 'Candidats rule', desc: '« Utiliser les conventional commits »' },
          { name: 'Candidats decision', desc: '« On a choisi PostgreSQL pour les données transactionnelles »' },
        ],
        includesLabel: 'Chaque extraction inclut :',
        includes: [
          { name: 'Score de confiance', desc: '(0.0 – 1.0, minimum 0.6 pour être conservé)' },
          { name: "Extrait source", desc: "qui a motivé l'extraction" },
          { name: 'Tags suggérés', desc: 'et namespace' },
          { name: 'Une explication', desc: 'de pourquoi cet élément a été identifié' },
        ],
      },
      step3: {
        title: 'La déduplication filtre le bruit',
        body: 'Chaque extraction est comparée aux entrées existantes dans le scope cible par similarité sémantique :',
        headers: ['Similarité', 'Résultat'],
        rows: [
          ['>= 0.92', "Doublon exact — automatiquement filtré et logué dans le rapport d'extraction"],
          ['>= 0.80', "Similaire — draft créé avec une relation REPLACES pointant vers l'entrée existante"],
          ['< 0.80', 'Nouveau — draft créé sans relations'],
        ],
      },
      step4: {
        title: 'Validation humaine',
        body: 'Rien n\'est publié sans validation. Chaque extraction devient un draft visible dans le dashboard, montrant :',
        items: [
          "L'entrée proposée avec son type détecté (Invariant, Rule ou Decision) et son score de confiance",
          "L'extrait source qui a motivé l'extraction",
          'Les relations détectées avec les entrées existantes - doublons, remplacements, tensions',
          'Une explication de pourquoi cet élément a été identifié',
        ],
        actionsLabel: 'Trois actions :',
        actions: [
          { name: 'Approuver', desc: "publie le draft comme une entrée Knowledge avec l'attribution source: auto_extracted" },
          { name: 'Rejeter', desc: 'supprime le draft' },
          { name: 'Éditer', desc: 'modifier le contenu, les tags ou le namespace avant d\'approuver' },
        ],
      },
    },
    sourceTypes: {
      tag: 'Types de sources',
      git: {
        name: 'Dépôts Git',
        desc: "Pointez la CLI vers n'importe quel dépôt et filtrez par glob pattern. Knowledge analyse les fichiers source - code, configuration, définitions d'infrastructure - et fait émerger les règles et contraintes implicites qui ne sont documentées nulle part.",
        code: `knowledge extract --scope Engineering --source /path/to/repo --pattern "**/*.{ts,py,yaml,md}"`,
      },
      docs: {
        name: 'Documents spécifiques',
        code: `knowledge extract --scope Engineering \\
  --source /path/to/runbook.md \\
  --source /path/to/architecture.md`,
      },
      api: {
        name: "API d'ingestion",
        desc: "Pour les sources qui ne sont pas sur disque, poussez les documents directement via l'API :",
        code: `curl -X POST http://localhost:8090/api/v1/extract/stream \\
  -H "Authorization: Bearer kn_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "scope_id": "scp-...",
    "documents": [
      {
        "content": "Tous les deploiements doivent passer par staging d abord.",
        "metadata": {"author": "ops-team", "source": "runbook-v3"}
      }
    ],
    "auto_run": true
  }'`,
      },
      connectors: {
        name: 'Connecteurs additionnels',
        desc: 'Les connecteurs Slack, Teams, Notion, Confluence et Excel sont disponibles sur les plans Team et Scale.',
        link: { label: 'Voir les intégrations →', href: '/docs/integrations' },
      },
    },
    llmConfig: {
      tag: 'Configuration IA',
      body: "L'extraction nécessite un accès IA. Deux options :",
      headers: ['Option', 'Description'],
      rows: [
        ['Géré par Asplenz', "Aucune configuration nécessaire. L'usage IA est facturé au coût sur votre facture."],
        ['Votre propre clé API', 'Apportez votre propre clé. Vous contrôlez votre contrat fournisseur et la résidence des données.'],
      ],
      note: 'Les organisations avec des exigences strictes de résidence des données ou de Zero Data Retention doivent utiliser leur propre clé API.',
    },
    permissions: {
      tag: 'Permissions',
      headers: ['Action', 'Permission requise', 'Rôle minimum'],
      rows: [
        ['Lancer une extraction', 'extract_run', 'senior-dev'],
        ['Voir les runs et drafts', 'extract_read', 'developer'],
        ['Approuver / rejeter / éditer les drafts', 'extract_review', 'tech-lead'],
        ["Pousser via l'API d'ingestion", 'extract_stream', 'admin'],
      ],
    },
    configuration: {
      tag: 'Configuration',
      headers: ['Paramètre', 'Défaut', 'Description'],
      rows: [
        ['Modèle', 'Configurable', "Modèle IA utilisé pour l'extraction"],
        ['Température', '0.1', 'Basse pour une extraction factuelle'],
        ['Confiance minimum', '0.6', 'En dessous, les extractions sont supprimées'],
        ['Max extractions par chunk', '5', 'Limite le bruit'],
        ['Max drafts par run', '200', 'Plafonne la sortie totale'],
        ['Taille des chunks', '~1500 car.', 'Découpage par paragraphe avec 10% de chevauchement'],
        ['Seuil dedup exact', '0.92', 'Au-dessus = doublon'],
        ['Seuil dedup similaire', '0.80', 'Au-dessus = relation REPLACES'],
      ],
    },
    bestPractices: {
      tag: 'Bonnes pratiques',
      items: [
        { title: 'Commencez large, puis affinez.', body: "Lancez l'extraction sur tout votre répertoire docs/ d'abord. Reviewez les résultats, puis restreignez vos patterns aux sources les plus productives." },
        { title: 'Re-extrayez régulièrement.', body: "Lancez l'extraction trimestriellement, après une réécriture majeure, ou quand de nouveaux docs apparaissent. La déduplication intelligente garantit que votre registre ne sera pas pollué par des doublons." },
        { title: 'Reviewez par lots.', body: "Reviewez tous les drafts en attente d'un run en une seule session — rejetez le bruit, approuvez les bons." },
        { title: 'Utilisez les tags de manière cohérente.', body: "L'extraction suggère des tags, mais vérifiez-les pour la cohérence. Un système de tags propre rend le registre plus facilement cherchable." },
      ],
    },
    learnMore: {
      tag: 'En savoir plus',
      links: [
        { label: 'Commencer →', href: '/docs/getting-started' },
        { label: 'Comment fonctionne Knowledge →', href: '/product/how-it-works' },
        { label: 'Référence API →', href: '/docs/integrations/api-reference' },
      ],
    },
  },
  en: {
    title: 'Automatic Extraction',
    intro: 'Knowledge can scan your existing sources and extract implicit rules, decisions, and constraints automatically. Nothing is published without human review.',
    why: {
      tag: 'Why Automatic Extraction?',
      body: [
        "Most teams already have rules — they're just not structured. They live in READMEs, architecture decisions, runbooks, code comments, Slack threads, and wiki pages.",
        "Manually entering each rule into a registry takes time most teams don't have. Automatic extraction solves the cold-start problem: point it at your sources and get a populated registry in minutes.",
        'And as your documentation evolves, you can re-extract regularly to surface new implicit rules — your registry stays current without manual maintenance.',
      ],
    },
    howItWorks: {
      tag: 'How It Works',
      step1: {
        title: '1. Point at your sources',
        code1: 'knowledge extract --scope Engineering --source ./docs --source ./CLAUDE.md',
        code2Label: 'Target specific directories and file types:',
        code2: `knowledge extract --scope Engineering \\
  --source ./docs --pattern "**/*.md" \\
  --source ./src --pattern "**/README.md" \\
  --source . --pattern "CLAUDE.md"`,
      },
      step2: {
        title: '2. Each chunk is analyzed',
        body: 'Files are split into contextual chunks (~1500 characters with 10% overlap). Each chunk is analyzed with a structured extraction prompt that identifies:',
        candidates: [
          { name: 'Invariant candidates', desc: '"All API endpoints must require authentication"' },
          { name: 'Rule candidates', desc: '"Use conventional commits"' },
          { name: 'Decision candidates', desc: '"We chose PostgreSQL for transactional data"' },
        ],
        includesLabel: 'Each extraction includes:',
        includes: [
          { name: 'Confidence score', desc: '(0.0 – 1.0, minimum 0.6 to be kept)' },
          { name: 'Source excerpt', desc: 'that motivated the extraction' },
          { name: 'Suggested tags', desc: 'and namespace' },
          { name: 'An explanation', desc: 'of why this was identified' },
        ],
      },
      step3: {
        title: 'Deduplication filters noise',
        body: 'Every extraction is compared against existing entries in the target scope using semantic similarity:',
        headers: ['Similarity', 'Result'],
        rows: [
          ['>= 0.92', 'Exact duplicate — automatically filtered out and logged in the extraction report'],
          ['>= 0.80', 'Similar — draft created with REPLACES relation pointing to the existing entry'],
          ['< 0.80', 'New — draft created without relations'],
        ],
      },
      step4: {
        title: 'Human review',
        body: 'Nothing is published without validation. Every extraction becomes a draft visible in the dashboard, showing:',
        items: [
          'The proposed entry with its detected type (Invariant, Rule, or Decision) and confidence score',
          'The source excerpt that motivated the extraction',
          'Detected relations to existing entries - duplicates, replacements, tensions',
          'An explanation of why this was identified',
        ],
        actionsLabel: 'Three actions:',
        actions: [
          { name: 'Approve', desc: 'publishes the draft as a real Knowledge entry with source: auto_extracted attribution' },
          { name: 'Reject', desc: 'discards the draft' },
          { name: 'Edit', desc: 'modify the content, tags, or namespace before approving' },
        ],
      },
    },
    sourceTypes: {
      tag: 'Source Types',
      git: {
        name: 'Git Repositories',
        desc: 'Point the CLI at any repository and filter by glob pattern. Knowledge analyzes source files - code, configuration, infrastructure definitions - and surfaces implicit rules and constraints that are not documented anywhere.',
        code: `knowledge extract --scope Engineering --source /path/to/repo --pattern "**/*.{ts,py,yaml,md}"`,
      },
      docs: {
        name: 'Specific Documents',
        code: `knowledge extract --scope Engineering \\
  --source /path/to/runbook.md \\
  --source /path/to/architecture.md`,
      },
      api: {
        name: 'Ingestion API',
        desc: "For sources that don't live on disk, push documents directly via the API:",
        code: `curl -X POST http://localhost:8090/api/v1/extract/stream \\
  -H "Authorization: Bearer kn_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "scope_id": "scp-...",
    "documents": [
      {
        "content": "All deployments must go through staging first.",
        "metadata": {"author": "ops-team", "source": "runbook-v3"}
      }
    ],
    "auto_run": true
  }'`,
      },
      connectors: {
        name: 'Additional Connectors',
        desc: 'Slack, Teams, Notion, Confluence, and Excel connectors are available on Team and Scale plans.',
        link: { label: 'See integrations →', href: '/docs/integrations' },
      },
    },
    llmConfig: {
      tag: 'AI Configuration',
      body: 'Extraction requires AI access. Two options:',
      headers: ['Option', 'Description'],
      rows: [
        ['Asplenz-managed', 'No configuration needed. AI usage billed at cost on your invoice.'],
        ['Your own API key', 'Bring your own key. You control your provider contract and data residency.'],
      ],
      note: 'Organizations with strict data residency or Zero Data Retention requirements should use their own API key.',
    },
    permissions: {
      tag: 'Permissions',
      headers: ['Action', 'Required permission', 'Minimum role'],
      rows: [
        ['Launch extraction', 'extract_run', 'senior-dev'],
        ['View runs and drafts', 'extract_read', 'developer'],
        ['Approve / reject / edit drafts', 'extract_review', 'tech-lead'],
        ['Push via Ingestion API', 'extract_stream', 'admin'],
      ],
    },
    configuration: {
      tag: 'Configuration',
      headers: ['Parameter', 'Default', 'Description'],
      rows: [
        ['Model', 'Configurable', 'AI model used for extraction'],
        ['Temperature', '0.1', 'Low for factual extraction'],
        ['Min confidence', '0.6', 'Below this, extractions are discarded'],
        ['Max extractions per chunk', '5', 'Limits noise'],
        ['Max drafts per run', '200', 'Caps total output'],
        ['Chunk size', '~1500 chars', 'Paragraph-based splitting with 10% overlap'],
        ['Dedup exact threshold', '0.92', 'Similarity above this = duplicate'],
        ['Dedup similar threshold', '0.80', 'Similarity above this = REPLACES relation'],
      ],
    },
    bestPractices: {
      tag: 'Best Practices',
      items: [
        { title: 'Start broad, then refine.', body: "Run extraction on your entire docs/ directory first. Review the results, then narrow your patterns to the most productive sources." },
        { title: 'Re-extract regularly.', body: "Run extraction quarterly, after a major rewrite, or whenever new docs appear. Smart deduplication ensures your registry won't be polluted with duplicates." },
        { title: 'Review in batches.', body: 'Review all pending drafts for a run in a single session — reject the noise, approve the good ones.' },
        { title: 'Use tags consistently.', body: 'The extraction suggests tags, but review them for consistency. A clean tagging system makes the registry more searchable.' },
      ],
    },
    learnMore: {
      tag: 'Learn More',
      links: [
        { label: 'Getting Started →', href: '/docs/getting-started' },
        { label: 'How Knowledge Works →', href: '/product/how-it-works' },
        { label: 'API Reference →', href: '/docs/integrations/api-reference' },
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

function InlineCode({ children }: { children: string }) {
  return (
    <code className="text-[var(--accent)] bg-[var(--bg-card)] px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
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
  const h = t.howItWorks
  const s = t.sourceTypes

  return (
    <article>
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4 mt-0">{t.title}</h1>
      <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">{t.intro}</p>

      <hr className="border-[var(--border)] my-8" />

      {/* Why */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.why.tag}</h2>
      {t.why.body.map((p, i) => (
        <p key={i} className="text-[var(--text-secondary)] mb-4 leading-relaxed">{p}</p>
      ))}

      <hr className="border-[var(--border)] my-8" />

      {/* How it works */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6 mt-10">{h.tag}</h2>

      <div className="mb-8">
        <img
          src={`/images/docs/knowledge-extraction-pipeline-${lang}.svg`}
          alt={h.tag}
          className="w-full max-w-2xl"
        />
      </div>

      {/* Step 1 */}
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{h.step1.title}</h3>
      <CodeBlock code={h.step1.code1} />
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{h.step1.code2Label}</p>
      <CodeBlock code={h.step1.code2} />

      {/* Step 2 */}
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{h.step2.title}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{h.step2.body}</p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        {h.step2.candidates.map((c, i) => (
          <li key={i} className="text-[var(--text-secondary)] text-sm">
            <strong className="font-semibold text-[var(--text-primary)]">{c.name}</strong> : {c.desc}
          </li>
        ))}
      </ul>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{h.step2.includesLabel}</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        {h.step2.includes.map((c, i) => (
          <li key={i} className="text-[var(--text-secondary)] text-sm">
            <strong className="font-semibold text-[var(--text-primary)]">{c.name}</strong>{' '}{c.desc}
          </li>
        ))}
      </ul>

      {/* Step 3 */}
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{h.step3.title}</h3>
      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{h.step3.body}</p>
      <Table headers={h.step3.headers} rows={h.step3.rows} />

      {/* Step 4 */}
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{h.step4.title}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{h.step4.body}</p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        {h.step4.items.map((item, i) => (
          <li key={i} className="text-[var(--text-secondary)] text-sm">{item}</li>
        ))}
      </ul>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{h.step4.actionsLabel}</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        {h.step4.actions.map((a, i) => (
          <li key={i} className="text-[var(--text-secondary)] text-sm">
            <strong className="font-semibold text-[var(--text-primary)]">{a.name}</strong> : {a.desc}
          </li>
        ))}
      </ul>

      <hr className="border-[var(--border)] my-8" />

      {/* Source types */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-6 mt-10">{s.tag}</h2>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 mt-4">{s.git.name}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{s.git.desc}</p>
      <CodeBlock code={s.git.code} />

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 mt-4">{s.docs.name}</h3>
      <CodeBlock code={s.docs.code} />

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 mt-4">{s.api.name}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{s.api.desc}</p>
      <CodeBlock code={s.api.code} />

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 mt-4">{s.connectors.name}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{s.connectors.desc}</p>
      <Link href={s.connectors.link.href} className="text-[var(--accent)] hover:underline text-sm">
        {s.connectors.link.label}
      </Link>

      <hr className="border-[var(--border)] my-8" />

      {/* LLM config */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3 mt-10">{t.llmConfig.tag}</h2>
      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{t.llmConfig.body}</p>
      <Table headers={t.llmConfig.headers} rows={t.llmConfig.rows} />
      <p className="text-sm text-[var(--text-muted)] italic mb-6">{t.llmConfig.note}</p>

      <hr className="border-[var(--border)] my-8" />

      {/* Permissions */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.permissions.tag}</h2>
      <Table headers={t.permissions.headers} rows={t.permissions.rows} />

      <hr className="border-[var(--border)] my-8" />

      {/* Configuration */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.configuration.tag}</h2>
      <Table headers={t.configuration.headers} rows={t.configuration.rows} />

      <hr className="border-[var(--border)] my-8" />

      {/* Best practices */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.bestPractices.tag}</h2>
      {t.bestPractices.items.map((item, i) => (
        <p key={i} className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          <strong className="font-semibold text-[var(--text-primary)]">{item.title}</strong>{' '}{item.body}
        </p>
      ))}

      <hr className="border-[var(--border)] my-8" />

      {/* Learn more */}
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
