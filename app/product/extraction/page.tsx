'use client'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { useLang } from '@/lib/LangContext'

const content = {
  fr: {
    tag: 'Produit',
    title: 'Extraction automatique',
    intro: 'Vos règles existent déjà. Elles ne sont simplement pas structurées.',
    coldStart: {
      body: 'Chaque équipe a des règles implicites - enfouies dans des READMEs, des docs d\'architecture, des runbooks, des commentaires de code et des fils Slack. Les saisir manuellement une par une prend un temps que la plupart des équipes n\'ont pas. Knowledge résout le problème du démarrage à froid : demandez à votre agent IA de scanner vos sources existantes et obtenez un registre peuplé en quelques minutes.',
    },
    howItWorks: {
      tag: 'Comment ça fonctionne',
      body: 'Demandez à votre agent IA (Claude Code, Cursor, etc.) d\'extraire les règles de vos sources existantes. L\'agent lit les fichiers localement, les analyse via MCP, et les expose comme drafts typés dans votre dashboard. Vous passez chacun en revue — approuver, éditer ou rejeter. Rien n\'est publié sans validation humaine.',
      code: `> "Extrais les règles depuis ./docs et ./CLAUDE.md pour le namespace Engineering/payments"`,
      note: 'La déduplication sémantique vous permet de ré-extraire régulièrement sans noyer le registre.',
    },
    extracted: {
      tag: 'Ce qui est extrait',
      intro: 'L\'IA identifie trois types de contenu normatif :',
      types: [
        {
          name: 'Invariants',
          desc: 'Contraintes absolues qui ne doivent jamais être violées.',
          example: '"Tous les endpoints API doivent exiger une authentification" - extrait de vos docs sécurité, exposé comme contrainte bloquante.',
        },
        {
          name: 'Rules',
          desc: 'Directives actives qui guident le comportement, avec une sévérité mandatory ou advisory.',
          example: '"Utiliser les conventional commits pour tous les dépôts" - extrait de votre guide de contribution, exposé comme règle mandatory.',
        },
        {
          name: 'Decisions',
          desc: 'Choix historiques avec contexte et raisonnement.',
          example: '"On a choisi PostgreSQL pour les données transactionnelles car on a besoin de garanties ACID" - extrait de vos docs d\'architecture, exposé comme enregistrement de décision immuable.',
        },
      ],
    },
    sources: {
      tag: 'Types de sources',
      items: [
        {
          name: 'Fichiers locaux',
          desc: 'Pointez vers des répertoires ou des fichiers spécifiques. L\'agent lit tout ce qui correspond à vos patterns.',
          code: `> "Extrais les règles depuis ./docs (*.md), ./src (README.md) et ./CLAUDE.md pour Engineering/infra"`,
        },
        {
          name: 'Dépôts Git',
          desc: 'Demandez à votre agent IA de scanner un dépôt. Il lit les fichiers localement, les analyse, et envoie les résultats à Knowledge via MCP. Les règles implicites remontent — même celles non documentées.',
          code: `> "Scanne /path/to/repo pour les fichiers .ts, .py, .yaml et .md dans le scope Engineering"`,
        },
        {
          name: 'API d\'ingestion',
          desc: 'Pour les sources qui ne vivent pas sur disque — exports Confluence, digests Slack, pages wiki, artefacts CI — poussez les documents directement via l\'API REST.',
          code: `$ curl -X POST https://api.asplenz.com/knowledge/v1/extract/stream \\
  -H "Authorization: Bearer kn_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "scope_id": "scp-...",
    "documents": [
      {"content": "...", "metadata": {"source": "confluence-export", "author": "ops-team"}}
    ],
    "auto_run": true
  }'`,
        },
      ],
    },
    dedup: {
      tag: 'Déduplication intelligente',
      body1: 'Chaque extraction est comparée aux entrées existantes par similarité sémantique. Les doublons exacts sont automatiquement filtrés et consignés dans le rapport d\'extraction. Les quasi-doublons sont signalés avec une relation REPLACES et apparaissent dans la file de revue aux côtés de l\'entrée existante, pour que vous puissiez comparer les deux versions et décider si la nouvelle doit remplacer l\'ancienne.',
      body2: 'Vous pouvez ainsi ré-extraire régulièrement - chaque trimestre, après une refonte majeure, ou à chaque nouvel ajout de documentation - sans risquer de polluer votre registre.',
    },
    review: {
      tag: 'Validation humaine',
      intro: 'Rien n\'est publié sans validation. Chaque extraction devient un draft visible dans le dashboard, affichant :',
      items: [
        'L\'entrée proposée avec son type détecté (Invariant, Rule ou Decision) et son score de confiance',
        'L\'extrait source qui a motivé l\'extraction',
        'Les relations détectées avec les entrées existantes - doublons, remplacements, tensions',
        'Une explication de pourquoi ceci a été identifié',
      ],
      actions: 'Trois actions : Approuver (publie dans le registre), Rejeter (supprime), ou Éditer (modifier avant approbation).',
    },
    comparison: {
      tag: 'De la documentation éparpillée à un registre structuré',
      headers: ['Avant', 'Après'],
      rows: [
        ['Règles enfouies dans les READMEs', 'Entrées typées et cherchables'],
        ['Décisions dans des fils Slack', 'Enregistrements immuables avec contexte'],
        ['Contraintes dans la tête des gens', 'Invariants bloquants dans le registre'],
        ['Saisie manuelle, une par une', 'Extraction batch en quelques minutes'],
        ['Personne ne maintient les docs', 'Ré-extraction trimestrielle, la dédup fait le reste'],
      ],
    },
    cta: {
      tag: 'Prêt à commencer ?',
      code: `> "Extrais les règles depuis ./docs et ./CLAUDE.md pour Engineering/payments"`,
      body: 'Passez en revue les drafts dans votre dashboard. Approuvez les bons, rejetez le bruit. Votre registre est peuplé.',
      links: [
        { label: 'Documentation complète →', href: '/docs/extraction' },
        { label: 'Guide de démarrage', href: '/docs/getting-started' },
      ],
    },
  },
  en: {
    tag: 'Product',
    title: 'Automatic Extraction',
    intro: 'Your rules already exist. They\'re just not structured.',
    coldStart: {
      body: 'Every team has implicit rules - buried in READMEs, architecture docs, runbooks, code comments, and Slack threads. Manually entering each one into a registry takes time most teams don\'t have. Knowledge solves the cold-start problem: ask your AI agent to scan your existing sources and get a populated registry in minutes.',
    },
    howItWorks: {
      tag: 'How It Works',
      body: 'Ask your AI agent (Claude Code, Cursor, etc.) to extract rules from your existing sources. The agent reads files locally, chunks them, and sends them to Knowledge via MCP for analysis. Implicit rules and constraints are surfaced as typed drafts in your dashboard. You review each one — approve, edit, or reject. Nothing is published without human validation.',
      code: `> "Extract rules from ./docs and ./CLAUDE.md for the Engineering/payments namespace"`,
      note: 'Semantic deduplication ensures you can re-extract regularly without flooding the registry.',
    },
    extracted: {
      tag: 'What Gets Extracted',
      intro: 'The AI identifies three types of normative content:',
      types: [
        {
          name: 'Invariants',
          desc: 'Absolute constraints that must never be violated.',
          example: '"All API endpoints must require authentication" - extracted from your security docs, surfaced as a blocking constraint.',
        },
        {
          name: 'Rules',
          desc: 'Active directives that guide behavior, with mandatory or advisory severity.',
          example: '"Use conventional commits for all repositories" - extracted from your contributing guide, surfaced as a mandatory rule.',
        },
        {
          name: 'Decisions',
          desc: 'Historical choices with context and reasoning.',
          example: '"We chose PostgreSQL for transactional data because we need ACID guarantees" - extracted from your architecture docs, surfaced as an immutable decision record.',
        },
      ],
    },
    sources: {
      tag: 'Source Types',
      items: [
        {
          name: 'Local files',
          desc: 'Point at directories or specific files. The agent reads everything matching your patterns.',
          code: `> "Extract rules from ./docs (*.md), ./src (README.md), and ./CLAUDE.md for Engineering/infra"`,
        },
        {
          name: 'Git repositories',
          desc: 'Ask your AI agent to scan a repository. It reads files locally, chunks them, and sends them to Knowledge for analysis. Implicit rules and constraints surface — even ones not documented anywhere.',
          code: `> "Scan /path/to/repo for .ts, .py, .yaml, and .md files in the Engineering scope"`,
        },
        {
          name: 'Ingestion API',
          desc: 'For sources that don\'t live on disk — Confluence exports, Slack digests, wiki pages, CI artifacts — push documents directly via the REST API.',
          code: `$ curl -X POST https://api.asplenz.com/knowledge/v1/extract/stream \\
  -H "Authorization: Bearer kn_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "scope_id": "scp-...",
    "documents": [
      {"content": "...", "metadata": {"source": "confluence-export", "author": "ops-team"}}
    ],
    "auto_run": true
  }'`,
        },
      ],
    },
    dedup: {
      tag: 'Smart Deduplication',
      body1: 'Every extraction is compared against existing entries using semantic similarity. Exact duplicates are automatically filtered out and logged in the extraction report. Near-matches are flagged with a REPLACES relation and appear in the review queue alongside the existing entry, so you can compare both versions and decide whether the new one should replace the old one.',
      body2: 'This means you can re-extract regularly - quarterly, after a major rewrite, or whenever new docs appear - without worrying about polluting your registry.',
    },
    review: {
      tag: 'Human Review',
      intro: 'Nothing is published without validation. Every extraction becomes a draft visible in the dashboard, showing:',
      items: [
        'The proposed entry with its detected type (Invariant, Rule, or Decision) and confidence score',
        'The source excerpt that motivated the extraction',
        'Detected relations to existing entries - duplicates, replacements, tensions',
        'An explanation of why this was identified',
      ],
      actions: 'Three actions: Approve (publishes to registry), Reject (discards), or Edit (modify before approving).',
    },
    comparison: {
      tag: 'From Scattered Docs to Structured Registry',
      headers: ['Before', 'After'],
      rows: [
        ['Rules buried in READMEs', 'Typed, searchable entries'],
        ['Decisions in Slack threads', 'Immutable records with context'],
        ['Constraints in people\'s heads', 'Blocking invariants in the registry'],
        ['Manual entry, one at a time', 'Batch extraction in minutes'],
        ['No one maintains the docs', 'Re-extract quarterly, dedup handles the rest'],
      ],
    },
    cta: {
      tag: 'Get Started',
      code: `> "Extract rules from ./docs and ./CLAUDE.md for Engineering/payments"`,
      body: 'Review the drafts in your dashboard. Approve the good ones, reject the noise. Your registry is populated.',
      links: [
        { label: 'Full Extraction Documentation →', href: '/docs/extraction' },
        { label: 'Getting Started Guide', href: '/docs/getting-started' },
      ],
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
          <p className="text-[var(--text-secondary)] text-xl font-medium leading-relaxed max-w-3xl">{t.intro}</p>
        </div>
      </section>

      {/* Cold start body */}
      <section className="py-10 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-2xl">{t.coldStart.body}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.howItWorks.tag}</p>
          <p className="text-[var(--text-secondary)] mb-5 leading-relaxed max-w-2xl">{t.howItWorks.body}</p>
          <div className="max-w-2xl mb-4"><CodeBlock code={t.howItWorks.code} /></div>
          <p className="text-sm text-[var(--text-muted)] italic">{t.howItWorks.note}</p>
        </div>
      </section>

      {/* What gets extracted */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">{t.extracted.tag}</p>
          <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">{t.extracted.intro}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.extracted.types.map((type, i) => (
              <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{type.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{type.desc}</p>
                <p className="text-xs text-[var(--text-muted)] italic leading-relaxed">{type.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three source types */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.sources.tag}</p>
          <div className="space-y-10">
            {t.sources.items.map((source, i) => (
              <div key={i}>
                <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-2">{source.name}</h3>
                <p className="text-[var(--text-secondary)] mb-3 leading-relaxed max-w-2xl">{source.desc}</p>
                {'code' in source && source.code && (
                  <div className="max-w-2xl"><CodeBlock code={source.code} /></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart deduplication */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.dedup.tag}</p>
          <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.dedup.body1}</p>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl">{t.dedup.body2}</p>
        </div>
      </section>

      {/* Human review */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">{t.review.tag}</p>
          <p className="text-[var(--text-secondary)] mb-5 leading-relaxed">{t.review.intro}</p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            {t.review.items.map((item, i) => (
              <li key={i} className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[var(--text-secondary)] leading-relaxed">{t.review.actions}</p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">{t.comparison.tag}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  {t.comparison.headers.map((h, i) => (
                    <th key={i} className="text-left py-2 pr-6 font-mono text-xs uppercase tracking-wide font-semibold text-[var(--text-primary)] w-1/2">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.comparison.rows.map((row, i) => (
                  <tr key={i} className="border-b border-[var(--border-light)]">
                    <td className="py-2.5 pr-6 text-[var(--text-muted)]">{row[0]}</td>
                    <td className="py-2.5 text-[var(--text-secondary)] font-medium">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.cta.tag}</p>
          <div className="max-w-2xl mb-5"><CodeBlock code={t.cta.code} /></div>
          <p className="text-[var(--text-secondary)] mb-8 leading-relaxed max-w-2xl">{t.cta.body}</p>
          <div className="flex flex-wrap gap-4">
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
        </div>
      </section>

      <Footer />
    </div>
  )
}
