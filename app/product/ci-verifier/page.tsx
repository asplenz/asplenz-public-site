'use client'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { useLang } from '@/lib/LangContext'

const content = {
  en: {
    tag: 'Product',
    title: 'CI Compliance Review',
    intro: "Check every PR against your team's rules — using your AI agent.",
    subtitle: 'When a PR is opened, your CI pipeline invokes an AI agent. The agent reads your scope mapping, fetches the applicable invariants and rules from Knowledge via MCP, analyzes the diff, and posts a compliance report as a PR comment. No binary to install — Asplenz provides the MCP server, the platform, and the recommended prompt. You bring the agent.',
    howItWorks: {
      tag: 'How It Works',
      steps: [
        'A PR is opened or updated',
        'CI invokes your AI agent with the PR diff and the recommended prompt',
        'The agent reads `.knowledge/config.yml` to determine which scopes apply to the changed files',
        'If the config file is absent, the agent infers relevant scopes from the file paths and diff content',
        'The agent calls Knowledge MCP tools to fetch invariants and rules for those scopes',
        'The agent analyzes the diff against each constraint',
        'The agent posts a structured report as a PR comment and exits with the appropriate status code',
      ],
    },
    scopeMapping: {
      tag: 'Scope Mapping',
      body: 'Create a `.knowledge/config.yml` file at the root of your repository:',
      code: `# .knowledge/config.yml
scopes:
  "src/payments/**": "Engineering/payments"
  "src/auth/**": "Engineering/auth"
  "infrastructure/**": "Operations"
  "**": "Engineering"`,
      note: 'Keep this file in version control. When you refactor (rename a module, restructure directories), update the mapping in the same PR — the agent uses the updated config immediately.',
      fallbackTitle: 'No config file?',
      fallbackBody: "If `.knowledge/config.yml` is absent, the agent infers which scopes are relevant from the file paths and the nature of the changes. Inference works well for standard project structures but is less precise than explicit mapping.",
    },
    checked: {
      tag: 'What Gets Checked',
      items: [
        {
          name: 'Invariants',
          body: 'Non-negotiable constraints. A violated invariant blocks the PR (exit code 1).',
        },
        {
          name: 'Rules',
          body: 'Directives with MANDATORY or ADVISORY severity. Violations are reported; whether they block depends on how you configure the agent step.',
        },
        {
          name: 'Overrides',
          body: 'Active overrides fetched from Knowledge are respected. An invariant with a valid override is reported as "overridden" rather than "violated."',
        },
      ],
    },
    ci: {
      tag: 'CI Integration',
      body: 'Asplenz provides a recommended prompt. Pass it to your agent of choice in CI.',
      github: {
        name: 'GitHub Actions (Claude)',
        code: `- name: Knowledge Compliance Review
  uses: anthropics/claude-code-action@beta
  with:
    prompt: |
      Review this PR for compliance with the team's Knowledge registry.

      Changed files: \${{ steps.changed-files.outputs.all }}
      PR diff: \${{ steps.diff.outputs.diff }}

      1. Read .knowledge/config.yml for scope mapping.
         If absent, infer scopes from the changed files.
      2. Use Knowledge MCP tools to fetch invariants and rules
         for the applicable scopes.
      3. Analyze the diff against each constraint.
      4. Post a structured compliance report as a PR comment.
      5. Exit with code 1 if any invariants are violated.
    mcp_config: |
      {
        "knowledge": {
          "url": "https://mcp.asplenz.com/knowledge",
          "headers": {
            "Authorization": "Bearer \${{ secrets.KNOWLEDGE_API_KEY }}"
          }
        }
      }`,
        note: 'The agent handles scope resolution, constraint fetching, and analysis. No additional configuration required.',
      },
    },
    report: {
      tag: 'The Compliance Report',
      body: 'The agent posts a comment on the PR with:',
      items: [
        'A pass / warn / fail verdict',
        'A list of applicable constraints with their status (followed, violated, overridden, not addressed)',
        'A brief explanation for each finding',
        'The scopes that were checked',
      ],
    },
    comparison: {
      tag: 'Why This Approach',
      body: 'Running compliance review through an AI agent rather than a static checker means the analysis is semantic, not just syntactic. The agent understands why a constraint exists and can evaluate whether the spirit of the rule is respected.',
      headers: ['Static checker', 'Agent-based review'],
      rows: [
        ['Pattern matching only', 'Understands intent and context'],
        ['Requires precise rule encoding', 'Works with natural-language constraints'],
        ['No judgment on partial compliance', 'Distinguishes "addressed" from "ignored"'],
        ['Fixed output format', 'Produces explanations reviewers can act on'],
      ],
    },
    cta: {
      links: [
        { label: 'Getting Started →', href: '/docs/getting-started' },
        { label: 'AI Agents & MCP →', href: '/docs/ai-agents' },
      ],
    },
  },
  fr: {
    tag: 'Produit',
    title: 'Revue de conformité CI',
    intro: "Vérifiez chaque PR contre les règles de votre équipe — via votre agent IA.",
    subtitle: "Quand une PR est ouverte, votre pipeline CI invoque un agent IA. L'agent lit votre mapping de scopes, récupère les invariants et rules applicables depuis Knowledge via MCP, analyse le diff, et poste un rapport de conformité en commentaire de PR. Aucun binaire à installer — Asplenz fournit le serveur MCP, la plateforme, et le prompt recommandé. Vous apportez l'agent.",
    howItWorks: {
      tag: 'Comment ça fonctionne',
      steps: [
        'Une PR est ouverte ou mise à jour',
        "La CI invoque votre agent IA avec le diff de la PR et le prompt recommandé",
        "L'agent lit `.knowledge/config.yml` pour déterminer quels scopes s'appliquent aux fichiers modifiés",
        "Si le fichier de config est absent, l'agent infère les scopes pertinents depuis les chemins de fichiers et le contenu du diff",
        "L'agent appelle les outils MCP Knowledge pour récupérer les invariants et rules de ces scopes",
        "L'agent analyse le diff contre chaque contrainte",
        "L'agent poste un rapport structuré en commentaire de PR et sort avec le code de statut approprié",
      ],
    },
    scopeMapping: {
      tag: 'Mapping de scopes',
      body: 'Créez un fichier `.knowledge/config.yml` à la racine de votre dépôt :',
      code: `# .knowledge/config.yml
scopes:
  "src/payments/**": "Engineering/payments"
  "src/auth/**": "Engineering/auth"
  "infrastructure/**": "Operations"
  "**": "Engineering"`,
      note: 'Versionnez ce fichier. Lors d\'un refactoring (renommer un module, restructurer les répertoires), mettez à jour le mapping dans la même PR — l\'agent utilisera la config mise à jour immédiatement.',
      fallbackTitle: 'Pas de fichier de config ?',
      fallbackBody: "Si `.knowledge/config.yml` est absent, l'agent infère quels scopes sont pertinents en se basant sur les chemins de fichiers et la nature des changements. L'inférence fonctionne bien pour les structures de projets standards, mais est moins précise qu'un mapping explicite.",
    },
    checked: {
      tag: 'Ce qui est vérifié',
      items: [
        {
          name: 'Invariants',
          body: 'Contraintes non-négociables. Un invariant violé bloque la PR (code de sortie 1).',
        },
        {
          name: 'Rules',
          body: 'Directives avec sévérité MANDATORY ou ADVISORY. Les violations sont rapportées ; si elles bloquent dépend de la configuration de votre step agent.',
        },
        {
          name: 'Overrides',
          body: 'Les overrides actifs récupérés depuis Knowledge sont respectés. Un invariant avec un override valide est rapporté comme « overridden » plutôt que « violated ».',
        },
      ],
    },
    ci: {
      tag: 'Intégration CI',
      body: 'Asplenz fournit un prompt recommandé. Passez-le à l\'agent de votre choix en CI.',
      github: {
        name: 'GitHub Actions (Claude)',
        code: `- name: Knowledge Compliance Review
  uses: anthropics/claude-code-action@beta
  with:
    prompt: |
      Revue cette PR pour la conformité avec le registre Knowledge.

      Fichiers modifiés : \${{ steps.changed-files.outputs.all }}
      Diff de la PR : \${{ steps.diff.outputs.diff }}

      1. Lis .knowledge/config.yml pour le mapping de scopes.
         Si absent, infère les scopes depuis les fichiers modifiés.
      2. Utilise les outils MCP Knowledge pour récupérer les invariants
         et rules des scopes applicables.
      3. Analyse le diff contre chaque contrainte.
      4. Poste un rapport de conformité structuré en commentaire de PR.
      5. Sors avec le code 1 si des invariants sont violés.
    mcp_config: |
      {
        "knowledge": {
          "url": "https://mcp.asplenz.com/knowledge",
          "headers": {
            "Authorization": "Bearer \${{ secrets.KNOWLEDGE_API_KEY }}"
          }
        }
      }`,
        note: "L'agent gère la résolution des scopes, la récupération des contraintes et l'analyse. Aucune configuration supplémentaire requise.",
      },
    },
    report: {
      tag: 'Le rapport de conformité',
      body: "L'agent poste un commentaire sur la PR avec :",
      items: [
        'Un verdict pass / warn / fail',
        'La liste des contraintes applicables avec leur statut (followed, violated, overridden, not addressed)',
        'Une brève explication pour chaque finding',
        'Les scopes qui ont été vérifiés',
      ],
    },
    comparison: {
      tag: 'Pourquoi cette approche',
      body: "Faire passer la revue de conformité par un agent IA plutôt qu'un checker statique signifie que l'analyse est sémantique, pas juste syntaxique. L'agent comprend pourquoi une contrainte existe et peut évaluer si l'esprit de la règle est respecté.",
      headers: ['Checker statique', 'Revue par agent'],
      rows: [
        ['Pattern matching uniquement', 'Comprend l\'intention et le contexte'],
        ['Nécessite un encodage précis des règles', 'Fonctionne avec des contraintes en langage naturel'],
        ['Pas de jugement sur la conformité partielle', 'Distingue « adressé » de « ignoré »'],
        ['Format de sortie fixe', 'Produit des explications actionnables'],
      ],
    },
    cta: {
      links: [
        { label: 'Commencer →', href: '/docs/getting-started' },
        { label: 'Agents IA & MCP →', href: '/docs/ai-agents' },
      ],
    },
  },
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
                <td key={j} className="py-2.5 pr-6 text-sm text-[var(--text-secondary)]">{cell}</td>
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
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.howItWorks.tag}</p>
          <ol className="space-y-4">
            {t.howItWorks.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full border border-[var(--accent)] text-[var(--accent)] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-[var(--text-secondary)] leading-relaxed pt-0.5"><InlineText text={step} /></p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Scope mapping */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">{t.scopeMapping.tag}</p>
          <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl"><InlineText text={t.scopeMapping.body} /></p>
          <div className="max-w-2xl mb-4"><CodeBlock code={t.scopeMapping.code} /></div>
          <p className="text-sm text-[var(--text-muted)] italic mb-6 max-w-2xl">{t.scopeMapping.note}</p>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5 max-w-2xl">
            <p className="font-semibold text-sm text-[var(--text-primary)] mb-2">{t.scopeMapping.fallbackTitle}</p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed"><InlineText text={t.scopeMapping.fallbackBody} /></p>
          </div>
        </div>
      </section>

      {/* What gets checked */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.checked.tag}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.checked.items.map((item, i) => (
              <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <h3 className="font-semibold text-base text-[var(--text-primary)] mb-3">{item.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CI Integration */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">{t.ci.tag}</p>
          <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">{t.ci.body}</p>
          <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-3">{t.ci.github.name}</h3>
          <div className="max-w-2xl mb-3"><CodeBlock code={t.ci.github.code} /></div>
          <p className="text-sm text-[var(--text-muted)] italic">{t.ci.github.note}</p>
        </div>
      </section>

      {/* Compliance report */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">{t.report.tag}</p>
          <p className="text-[var(--text-secondary)] mb-5 leading-relaxed">{t.report.body}</p>
          <ul className="space-y-3">
            {t.report.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                <span className="text-[var(--accent)] mt-1 shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why this approach */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">{t.comparison.tag}</p>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed max-w-2xl">{t.comparison.body}</p>
          <Table headers={t.comparison.headers} rows={t.comparison.rows} />
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
