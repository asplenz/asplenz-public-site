'use client'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { useLang } from '@/lib/LangContext'

const content = {
  en: {
    tag: 'Product',
    title: 'CI Verifier',
    intro: "Check every PR against your team's rules — automatically.",
    subtitle: 'The Knowledge Verifier integrates into your CI/CD pipeline and checks pull requests against the normative state of your registry. Violations are caught before merge, not after deployment.',
    howItWorks: {
      tag: 'How It Works',
    },
    scopeMapping: {
      tag: 'Scope Mapping',
      body: "You define which files map to which scopes and namespaces in your configuration. When a PR changes src/payments/stripe.py, the Verifier matches it against your patterns and fetches invariants and rules from the corresponding namespace.",
      code: `scope_mapping:
  "src/payments/**": "Engineering/payments"
  "src/auth/**": "Engineering/auth"
  "infrastructure/**": "Operations"
  "**": "Engineering"`,
      note: "Patterns are matched in order — the first match wins. Use ** as a catch-all to ensure every file is covered. Files that don't match any pattern are checked against the scope level (no namespace filter).",
    },
    modes: {
      tag: 'Three Gating Modes',
      headers: ['Mode', 'Behavior', 'When to Use'],
      rows: [
        ['report-only', 'Posts compliance report, never blocks', 'Initial rollout, learning phase'],
        ['fail-on-blocking', 'Fails if invariants are violated', 'Standard enforcement'],
        ['strict', 'Fails on any violation (invariants + mandatory rules)', 'Regulated environments'],
      ],
      note: 'Recommended rollout: start with report-only for two weeks. Review the reports. When the team is comfortable, switch to fail-on-blocking. Move to strict when compliance is critical.',
    },
    implReport: {
      tag: 'Implementation Report',
      body: 'The coding agent (e.g. Claude Code) generates an Implementation Report as a `.knowledge/report.md` file committed alongside the code. The Verifier reads this file automatically.',
      code: `## Implementation Report

### Invariants
- [FOLLOWED] inv-a1b2c3: All endpoints require authentication
  Added bearer token middleware to /api/payments route.

### Rules
- [FOLLOWED] rul-d4e5f6: Use conventional commits
  All commits follow feat/fix/chore convention.

- [DIVERGED] rul-g7h8i9: Max function length 50 lines
  Payment validation requires 62 lines due to regulatory checks.
  Will refactor in follow-up PR #143.`,
      body2: 'The Verifier parses these citations, validates entry IDs against the registry, and checks that all applicable constraints are addressed.',
      body3: 'If the `.knowledge/report.md` file is missing from the commit, all applicable constraints are treated as "not cited" and evaluated according to the gating mode.',
    },
    checked: {
      tag: 'What Gets Checked',
      items: [
        {
          name: 'Invariants',
          body: "Blocking constraints. If an invariant applies to the changed files' scope and isn't cited as FOLLOWED (or has an active override), the Verifier reports a conflict.",
        },
        {
          name: 'Mandatory Rules',
          body: 'Active directives with MANDATORY severity. Uncited mandatory rules generate warnings in fail-on-blocking mode and failures in strict mode.',
        },
        {
          name: 'Advisory Rules',
          body: 'Active directives with ADVISORY severity. Reported for awareness but never block the pipeline.',
        },
        {
          name: 'Overrides',
          body: 'Active overrides are recognized. If a developer has a valid override for an invariant, the Verifier marks it as "overridden" rather than "violated."',
        },
        {
          name: 'Semantic Analysis (optional)',
          body: 'When enabled, the Verifier goes beyond citation matching. It analyzes the actual code diff against each applicable constraint and evaluates whether the change respects or violates each one — with a confidence score and explanation. This catches violations that citation matching alone would miss.',
        },
        {
          name: 'External Checkers',
          body: 'Some constraints can\'t be verified from code alone — for example, "PRs must have at least 2 approved reviewers" or "cloud budget must not exceed 10k/month." Constraints can have attached scripts or webhooks that collect dynamic data. The Verifier executes them automatically and evaluates the output against the constraint.',
        },
      ],
    },
    ci: {
      tag: 'CI Integration',
      github: {
        name: 'GitHub Actions',
        code: `- name: Knowledge Compliance Check
  run: |
    pip install knowledge-verifier
    knowledge-verifier \\
      --config .knowledge-verifier.yml \\
      --mode fail-on-blocking
  env:
    KNOWLEDGE_API_URL: \${{ secrets.KNOWLEDGE_API_URL }}
    KNOWLEDGE_API_KEY: \${{ secrets.KNOWLEDGE_API_KEY }}
    GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}`,
        note: 'GitHub Actions environment is auto-detected: PR number, changed files, and base branch are resolved automatically.',
      },
      gitlab: {
        name: 'GitLab CI',
        code: `compliance-check:
  stage: test
  script:
    - pip install knowledge-verifier
    - knowledge-verifier --config .knowledge-verifier.yml --mode fail-on-blocking
  variables:
    KNOWLEDGE_API_URL: $KNOWLEDGE_API_URL
    KNOWLEDGE_API_KEY: $KNOWLEDGE_API_KEY`,
      },
      local: {
        name: 'Local Execution',
        code: `knowledge-verifier \\
  --config .knowledge-verifier.yml \\
  --mode report-only \\
  --pr-number 142 \\
  --repo-url https://github.com/org/repo`,
      },
    },
    configuration: {
      tag: 'Configuration',
      code: `# .knowledge-verifier.yml
knowledge_api:
  url: https://api.asplenz.com
  # API key via KNOWLEDGE_API_KEY env var

verification:
  mode: fail-on-blocking
  report_path: .knowledge/report.md
  scope_mapping:
    "src/payments/**": "Engineering/payments"
    "src/auth/**": "Engineering/auth"
    "infrastructure/**": "Operations"
    "**": "Engineering"

# Optional: AI-powered semantic analysis of the diff against constraints
semantic_analysis:
  enabled: false
  # See configuration docs for provider setup

# Optional: execute scripts/webhooks attached to constraints
external_checkers:
  enabled: true
  allowed_commands: ["gh", "python", "node", "bash"]

output:
  json: verifier-result.json
  markdown: verifier-report.md`,
      note: 'For self-hosted deployments, replace the URL with your instance address.',
    },
    output: {
      tag: 'Output',
      json: {
        name: 'Machine-readable (JSON)',
        intro: 'The JSON output is consumed by the CI pipeline to set the PR status (pass/warn/fail).\nIt also feeds into the Knowledge dashboard for compliance analytics.\nCan be used by custom integrations: Slack alerts on violations,\nautomatic Jira tickets, aggregated compliance reports, or SIEM exports.',
        code: `{
  "verdict": "FAIL",
  "invariants": {
    "total": 3,
    "followed": 2,
    "violated": 1,
    "overridden": 0
  },
  "rules": {
    "mandatory": {"total": 5, "followed": 4, "diverged": 1},
    "advisory": {"total": 2, "followed": 1, "not_cited": 1}
  },
  "conflicts": [
    {
      "entry_id": "inv-a1b2c3",
      "constraint": "All API endpoints must require authentication",
      "status": "violated"
    }
  ],
  "semantic_findings": [
    {
      "entry_id": "inv-a1b2c3",
      "verdict": "violated",
      "confidence": 0.92,
      "explanation": "New endpoint /api/export has no auth middleware"
    }
  ],
  "checker_findings": [
    {
      "entry_id": "rul-d4e5f6",
      "verdict": "respected",
      "source": "script",
      "explanation": "PR has 2 approved reviews"
    }
  ]
}`,
      },
      markdown: {
        name: 'Human-readable (Markdown)',
        intro: 'Posted as a PR comment:',
      },
    },
    comparison: {
      tag: 'Why Not Just Code Review?',
      headers: ['Code Review', 'CI Verifier'],
      rows: [
        ['Reviewer must remember all rules', 'Rules are checked automatically'],
        ['Inconsistent across reviewers', 'Same checks every time'],
        ['Easy to miss a constraint', 'Every applicable constraint is evaluated'],
        ['No audit trail', 'Structured report for every PR'],
        ["Doesn't scale with team size", 'Scales to any number of PRs'],
      ],
      closing: "The Verifier doesn't replace code review — it ensures that organizational constraints are checked consistently, so reviewers can focus on logic, design, and quality.",
    },
    cta: {
      links: [
        { label: 'CI/CD Setup Guide →', href: '/docs/integrations/ci-verifier' },
        { label: 'Getting Started', href: '/docs/getting-started' },
      ],
    },
  },
  fr: {
    tag: 'Produit',
    title: 'Verifier CI',
    intro: "Vérifiez chaque PR contre les règles de votre équipe — automatiquement.",
    subtitle: "Le Knowledge Verifier s'intègre dans votre pipeline CI/CD et vérifie les pull requests contre l'état normatif de votre registre. Les violations sont détectées avant le merge, pas après le déploiement.",
    howItWorks: {
      tag: 'Comment ça fonctionne',
    },
    scopeMapping: {
      tag: 'Scope Mapping',
      body: "Vous définissez quels fichiers correspondent à quels scopes et namespaces dans votre configuration. Quand une PR modifie src/payments/stripe.py, le Verifier le matche contre vos patterns et récupère les invariants et rules du namespace correspondant.",
      code: `scope_mapping:
  "src/payments/**": "Engineering/payments"
  "src/auth/**": "Engineering/auth"
  "infrastructure/**": "Operations"
  "**": "Engineering"`,
      note: "Les patterns sont évalués dans l'ordre — le premier match gagne. Utilisez ** comme catch-all pour couvrir tous les fichiers. Les fichiers qui ne matchent aucun pattern sont vérifiés au niveau du scope (sans filtre de namespace).",
    },
    modes: {
      tag: 'Trois modes de gating',
      headers: ['Mode', 'Comportement', 'Quand l\'utiliser'],
      rows: [
        ['report-only', 'Poste le rapport de conformité, ne bloque jamais', 'Déploiement initial, phase d\'apprentissage'],
        ['fail-on-blocking', 'Échoue si des invariants sont violés', 'Enforcement standard'],
        ['strict', 'Échoue sur toute violation (invariants + rules mandatory)', 'Environnements régulés'],
      ],
      note: 'Déploiement recommandé : commencez en report-only pendant deux semaines. Reviewez les rapports. Quand l\'équipe est à l\'aise, passez en fail-on-blocking. Passez en strict quand la conformité est critique.',
    },
    implReport: {
      tag: 'Implementation Report',
      body: "L'agent de coding (ex. Claude Code) génère un Implementation Report sous forme de fichier `.knowledge/report.md` committé avec le code. Le Verifier lit ce fichier automatiquement.",
      code: `## Implementation Report

### Invariants
- [FOLLOWED] inv-a1b2c3: Tous les endpoints exigent une authentification
  Ajout du middleware bearer token sur la route /api/payments.

### Rules
- [FOLLOWED] rul-d4e5f6: Utiliser les conventional commits
  Tous les commits suivent la convention feat/fix/chore.

- [DIVERGED] rul-g7h8i9: Longueur max de fonction 50 lignes
  La validation de paiement nécessite 62 lignes à cause des contrôles réglementaires.
  Refactoring prévu dans la PR de suivi #143.`,
      body2: 'Le Verifier parse ces citations, valide les IDs d\'entrées contre le registre, et vérifie que toutes les contraintes applicables sont adressées.',
      body3: "Si le fichier `.knowledge/report.md` est absent du commit, toutes les contraintes applicables sont traitées comme « non citées » et évaluées selon le mode de gating.",
    },
    checked: {
      tag: 'Ce qui est vérifié',
      items: [
        {
          name: 'Invariants',
          body: "Contraintes bloquantes. Si un invariant s'applique au scope des fichiers modifiés et n'est pas cité comme FOLLOWED (ou n'a pas d'override actif), le Verifier signale un conflit.",
        },
        {
          name: 'Rules Mandatory',
          body: 'Directives actives avec sévérité MANDATORY. Les rules mandatory non citées génèrent des warnings en mode fail-on-blocking et des échecs en mode strict.',
        },
        {
          name: 'Rules Advisory',
          body: 'Directives actives avec sévérité ADVISORY. Signalées pour information mais ne bloquent jamais le pipeline.',
        },
        {
          name: 'Overrides',
          body: 'Les overrides actifs sont reconnus. Si un développeur a un override valide pour un invariant, le Verifier le marque comme "overridden" plutôt que "violated."',
        },
        {
          name: 'Analyse sémantique (optionnelle)',
          body: "Quand activée, le Verifier va au-delà du matching de citations. Il analyse le diff du code contre chaque contrainte applicable et évalue si le changement respecte ou viole chacune — avec un score de confiance et une explication. Cela détecte des violations que le matching de citations seul ne capturerait pas.",
        },
        {
          name: 'External Checkers',
          body: "Certaines contraintes ne peuvent pas être vérifiées à partir du code seul — par exemple, « Les PRs doivent avoir au moins 2 reviewers approuvés » ou « Le budget cloud ne doit pas dépasser 10k/mois ». Les contraintes peuvent avoir des scripts ou webhooks attachés qui collectent des données dynamiques. Le Verifier les exécute automatiquement et évalue le résultat contre la contrainte.",
        },
      ],
    },
    ci: {
      tag: 'Intégration CI',
      github: {
        name: 'GitHub Actions',
        code: `- name: Knowledge Compliance Check
  run: |
    pip install knowledge-verifier
    knowledge-verifier \\
      --config .knowledge-verifier.yml \\
      --mode fail-on-blocking
  env:
    KNOWLEDGE_API_URL: \${{ secrets.KNOWLEDGE_API_URL }}
    KNOWLEDGE_API_KEY: \${{ secrets.KNOWLEDGE_API_KEY }}
    GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}`,
        note: "L'environnement GitHub Actions est auto-détecté : numéro de PR, fichiers modifiés et branche de base sont résolus automatiquement.",
      },
      gitlab: {
        name: 'GitLab CI',
        code: `compliance-check:
  stage: test
  script:
    - pip install knowledge-verifier
    - knowledge-verifier --config .knowledge-verifier.yml --mode fail-on-blocking
  variables:
    KNOWLEDGE_API_URL: $KNOWLEDGE_API_URL
    KNOWLEDGE_API_KEY: $KNOWLEDGE_API_KEY`,
      },
      local: {
        name: 'Exécution locale',
        code: `knowledge-verifier \\
  --config .knowledge-verifier.yml \\
  --mode report-only \\
  --pr-number 142 \\
  --repo-url https://github.com/org/repo`,
      },
    },
    configuration: {
      tag: 'Configuration',
      code: `# .knowledge-verifier.yml
knowledge_api:
  url: https://api.asplenz.com
  # Clé API via la variable d'environnement KNOWLEDGE_API_KEY

verification:
  mode: fail-on-blocking
  report_path: .knowledge/report.md
  scope_mapping:
    "src/payments/**": "Engineering/payments"
    "src/auth/**": "Engineering/auth"
    "infrastructure/**": "Operations"
    "**": "Engineering"

# Optionnel : analyse sémantique du diff par IA contre les contraintes
semantic_analysis:
  enabled: false
  # Voir la documentation de configuration pour le setup du fournisseur

# Optionnel : exécuter des scripts/webhooks attachés aux contraintes
external_checkers:
  enabled: true
  allowed_commands: ["gh", "python", "node", "bash"]

output:
  json: verifier-result.json
  markdown: verifier-report.md`,
      note: 'Pour les déploiements self-hosted, remplacez l\'URL par l\'adresse de votre instance.',
    },
    output: {
      tag: 'Sorties',
      json: {
        name: 'Lisible par les machines (JSON)',
        intro: "La sortie JSON est consommée par le pipeline CI pour définir le statut de la PR (pass/warn/fail).\nElle alimente aussi le dashboard Knowledge pour les analytics de conformité.\nPeut être utilisée par des intégrations custom : alertes Slack sur les violations,\ntickets Jira automatiques, rapports de conformité agrégés, ou exports SIEM.",
        code: `{
  "verdict": "FAIL",
  "invariants": {
    "total": 3,
    "followed": 2,
    "violated": 1,
    "overridden": 0
  },
  "rules": {
    "mandatory": {"total": 5, "followed": 4, "diverged": 1},
    "advisory": {"total": 2, "followed": 1, "not_cited": 1}
  },
  "conflicts": [
    {
      "entry_id": "inv-a1b2c3",
      "constraint": "Tous les endpoints API doivent exiger une authentification",
      "status": "violated"
    }
  ],
  "semantic_findings": [
    {
      "entry_id": "inv-a1b2c3",
      "verdict": "violated",
      "confidence": 0.92,
      "explanation": "Le nouvel endpoint /api/export n'a pas de middleware d'authentification"
    }
  ],
  "checker_findings": [
    {
      "entry_id": "rul-d4e5f6",
      "verdict": "respected",
      "source": "script",
      "explanation": "La PR a 2 reviews approuvés"
    }
  ]
}`,
      },
      markdown: {
        name: 'Lisible par les humains (Markdown)',
        intro: 'Posté en commentaire de PR :',
      },
    },
    comparison: {
      tag: 'Pourquoi pas juste la code review ?',
      headers: ['Code Review', 'CI Verifier'],
      rows: [
        ['Le reviewer doit se souvenir de toutes les règles', 'Les règles sont vérifiées automatiquement'],
        ['Inconsistant entre les reviewers', 'Mêmes vérifications à chaque fois'],
        ['Facile de rater une contrainte', 'Chaque contrainte applicable est évaluée'],
        ['Pas de trace d\'audit', 'Rapport structuré pour chaque PR'],
        ['Ne scale pas avec la taille de l\'équipe', 'Scale à n\'importe quel nombre de PRs'],
      ],
      closing: "Le Verifier ne remplace pas la code review — il garantit que les contraintes organisationnelles sont vérifiées de manière cohérente, pour que les reviewers puissent se concentrer sur la logique, le design et la qualité.",
    },
    cta: {
      links: [
        { label: 'Guide CI/CD →', href: '/docs/integrations/ci-verifier' },
        { label: 'Commencer', href: '/docs/getting-started' },
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

function Table({ headers, rows, uniform }: { headers: string[]; rows: string[][]; uniform?: boolean }) {
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
                <td key={j} className={`py-2.5 pr-6 text-sm ${!uniform && j === 0 ? 'font-mono text-[var(--accent)] text-xs' : 'text-[var(--text-secondary)]'}`}>{cell}</td>
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
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">{t.howItWorks.tag}</p>
          <img
            src={`/images/product/knowledge-ci-verifier-flow-${lang}.svg`}
            alt={t.howItWorks.tag}
            className="w-full max-w-2xl"
          />
        </div>
      </section>

      {/* Scope mapping */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">{t.scopeMapping.tag}</p>
          <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.scopeMapping.body}</p>
          <div className="max-w-2xl mb-3"><CodeBlock code={t.scopeMapping.code} /></div>
          <p className="text-sm text-[var(--text-muted)] italic">{t.scopeMapping.note}</p>
        </div>
      </section>

      {/* Three gating modes */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.modes.tag}</p>
          <Table headers={t.modes.headers} rows={t.modes.rows} />
          <p className="text-sm text-[var(--text-muted)] italic">{t.modes.note}</p>
        </div>
      </section>

      {/* Implementation report */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">{t.implReport.tag}</p>
          <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl"><InlineText text={t.implReport.body} /></p>
          <div className="max-w-2xl mb-4"><CodeBlock code={t.implReport.code} /></div>
          <p className="text-[var(--text-secondary)] mb-3 leading-relaxed max-w-2xl">{t.implReport.body2}</p>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl"><InlineText text={t.implReport.body3} /></p>
        </div>
      </section>

      {/* What gets checked */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.checked.tag}</p>
          <div className="grid md:grid-cols-2 gap-6">
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
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.ci.tag}</p>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-3">{t.ci.github.name}</h3>
              <div className="max-w-2xl mb-2"><CodeBlock code={t.ci.github.code} /></div>
              <p className="text-sm text-[var(--text-muted)] italic">{t.ci.github.note}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-3">{t.ci.gitlab.name}</h3>
              <div className="max-w-2xl"><CodeBlock code={t.ci.gitlab.code} /></div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-3">{t.ci.local.name}</h3>
              <div className="max-w-2xl"><CodeBlock code={t.ci.local.code} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.configuration.tag}</p>
          <div className="max-w-2xl mb-3"><CodeBlock code={t.configuration.code} /></div>
          <p className="text-sm text-[var(--text-muted)] italic">{t.configuration.note}</p>
        </div>
      </section>

      {/* Output */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.output.tag}</p>
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-3">{t.output.json.name}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed whitespace-pre-line">{t.output.json.intro}</p>
              <div className="max-w-2xl"><CodeBlock code={t.output.json.code} /></div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-3">{t.output.markdown.name}</h3>
              <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.output.markdown.intro}</p>
              <img
                src={`/images/product/knowledge-verifier-report-github-${lang}.svg`}
                alt={t.output.markdown.name}
                className="w-full max-w-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why not code review */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.comparison.tag}</p>
          <Table headers={t.comparison.headers} rows={t.comparison.rows} uniform />
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl">{t.comparison.closing}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
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
