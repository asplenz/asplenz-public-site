'use client'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { useLang } from '@/lib/LangContext'

const content = {
  en: {
    tag: 'Product',
    title: 'CI Compliance Check',
    intro: "Automatically check every PR against your team's rules.",

    principle: {
      tag: 'Principle',
      body: 'The PR diff is analyzed by an AI agent that checks whether the changes comply with the decisions, invariants, and rules your organization has defined in Knowledge. You can use your own local AI agent or the agent running on the Asplenz platform. The agent only receives the PR diff, not your full source code. To automate the analysis, add a step to your CI to invoke the AI agent with the PR diff and the Asplenz prompt as inputs.',
      prereq: 'This page assumes familiarity with Knowledge concepts.',
      prereqLink: 'See How It Works',
      prereqHref: '/product/how-it-works',
    },

    steps: {
      tag: 'Overview',
      body: 'When a PR is opened or updated, your CI pipeline calls an AI agent with the PR diff. The agent queries Knowledge to fetch the rules that apply to the changed files — invariants, mandatory rules, and active overrides. It analyzes the diff against those constraints and returns a verdict to your CI pipeline. The CI then merges or blocks the PR based on the configured gating mode.',
      implTitle: 'To set it up:',
      items: [
        { label: 'Map your source modules to your Knowledge scopes', desc: 'See "Mapping source modules to your scopes" below.' },
        { label: 'Invoke the AI agent from your CI pipeline', desc: 'See "Agent Invocation" below.' },
        { label: 'Fail the pipeline or Merge the PR', desc: 'Read the verdict from the agent. Exit with a failure code to block the merge, or let the pipeline succeed to allow it.' },
      ],
    },

    scopeMapping: {
      tag: 'Mapping source modules to your scopes',
      body: 'Create a `.knowledge-scope-mapping.yml` file at the root of your repository. Each entry maps a path pattern to a Knowledge scope. For example, when a PR changes `src/payments/stripe.py`, the agent fetches invariants and rules from the `Engineering/payments` scope.',
      code: `# .knowledge-scope-mapping.yml
scope_mapping:
  "src/payments/**": "Engineering/payments"
  "src/auth/**": "Engineering/auth"
  "infrastructure/**": "Operations"
  "**": "Engineering"`,
      note: 'Patterns are matched in order. The first match wins. Use ** as a catch-all to ensure every file is covered.',
    },

    ciInvocation: {
      tag: 'Agent Invocation',
      setup: {
        label: 'Setup',
        code: `# Retrieve the diff between the base branch and the PR commit
DIFF=$(git diff origin/$BASE_BRANCH...$HEAD_SHA)

# Read the scope mapping file (YAML) and convert it to JSON
SCOPE_JSON=$(python3 -c 'import sys,yaml,json; print(json.dumps(yaml.safe_load(sys.stdin)))' \\
  < .knowledge-scope-mapping.yml)`,
      },
      local: {
        label: 'Option 1: Local AI agent',
        body: 'The example below uses Claude Code. Adapt the command to your agent and refer to its documentation for the exact syntax.',
        mcpLabel: 'Configure the Knowledge MCP server in `.mcp.json` at the root of your repository:',
        mcpCode: `{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com/knowledge",
      "headers": { "Authorization": "Bearer <api_key>" }
    }
  }
}`,
        callLabel: 'Invoke the agent with the diff and scope mapping:',
        code: `# The agent calls knowledge_resolve via MCP, analyzes the diff locally,
# and exits with code 0 (pass) or 1 (fail)
RESPONSE=$(claude -p "$(printf '## Scope Mapping\\n%s\\n\\n## PR Diff\\n%s\\n\\nRun the compliance check.' "$SCOPE_JSON" "$DIFF")" \\
  --system-prompt-file .asplenz/ci-check-prompt.md \\
  --allowedTools "mcp__knowledge__knowledge_resolve" \\
  --output-format json)`,
        note: 'Your source code stays local. Only the Knowledge tool calls go to the API.',
      },
      remote: {
        label: 'Option 2: Asplenz agent',
        body: 'Send the diff to the Knowledge platform via API. The Asplenz agent runs server-side — no MCP configuration required.',
        code: `# Send the diff to the Knowledge platform via API.
# jq builds the JSON body by injecting the bash variables.
RESPONSE=$(curl -s -X POST https://api.asplenz.com/knowledge/v1/verify/diff \\
  -H "Authorization: Bearer $KNOWLEDGE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d "$(jq -n \\
    --arg diff "$DIFF" \\
    --argjson scope_mapping "$SCOPE_JSON" \\
    --arg mode "fail-on-blocking" \\
    '{ diff: $diff, scope_mapping: $scope_mapping, mode: $mode }')")`,
      },
      verdict: {
        label: 'Act on the verdict',
        body: 'In both cases, the report includes any conflicting invariants or rules, their severity, and whether an approval can unblock the action.',
        code: `# Extract the "verdict" field from the JSON returned by the agent
VERDICT=$(echo "$RESPONSE" | jq -r '.verdict')

# Post the Markdown report as a PR comment via the GitHub CLI
echo "$RESPONSE" | jq -r '.report_markdown' | gh pr comment $PR_NUMBER --body-file -

# Exit with failure if the verdict is "fail", pass otherwise
[ "$VERDICT" = "fail" ] && exit 1 || exit 0`,
      },
    },

    modes: {
      tag: 'The Compliance Check',
      body: 'The agent returns a compliance report and exits with a pass or fail result. Your CI pipeline acts on that result to allow or block the merge. The gating mode controls what the agent reports as a failure.',
      headers: ['Mode', 'Agent result', 'When to Use'],
      rows: [
        ['report-only', 'Always passes. Posts report for visibility only.', 'Initial rollout, learning phase'],
        ['fail-on-blocking', 'Fails if any invariant is violated.', 'Standard enforcement'],
        ['strict', 'Fails on any violation (invariants + mandatory rules).', 'Regulated environments'],
      ],
      note: 'Recommended rollout: start with report-only for two weeks. Review the reports. When the team is comfortable, switch to fail-on-blocking. Move to strict when compliance is critical.',
    },

    checked: {
      tag: 'What Gets Checked',
      items: [
        {
          name: 'Invariants',
          body: "Blocking constraints. If an invariant applies to the changed files' scope and isn't addressed, the agent reports a conflict.",
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
          body: 'Active overrides are recognized. If a valid override exists for an invariant, the agent marks it as "overridden" rather than "violated."',
        },
      ],
    },

    discovery: {
      tag: 'Rule Discovery',
      body: 'Beyond compliance, the agent also detects decisions, rules, or invariants that are implicit in the PR but not yet in the registry. These are reported as suggestions in a dedicated section of the report.',
      example: `Detected entries:
  - "All payment endpoints must validate currency codes" (invariant candidate)
  - "Use Redis for session caching instead of Memcached" (decision candidate)`,
      note: 'Discoveries are informational only and never affect the verdict. If you want to turn them into registry entries, pass the discoveries section of the report to the extraction endpoint to create drafts for review.',
    },

    comparison: {
      tag: 'Why automate compliance checking?',
      headers: ['Checking compliance manually', 'CI Compliance Check'],
      rows: [
        ['Rules, decisions and invariants are scattered across docs, code comments, people\'s memories, or lost when someone leaves', 'Centralized in a single structured registry'],
        ['Reviewer must recall all applicable rules', 'Rules are fetched automatically for each changed file'],
        ['Easy to miss an invariant or decision', 'Every applicable constraint is evaluated'],
        ['Inconsistent across reviewers', 'Same checks on every PR'],
        ['No structured audit trail', 'Structured report for every PR'],
        ["Doesn't scale as rules accumulate", 'Scales to any number of rules and PRs'],
      ],
      closing: "The CI compliance check handles the systematic part: verifying every PR against your organization's rules, decisions, and invariants. Code reviewers can focus on logic, design, and quality.",
    },

  },

  fr: {
    tag: 'Produit',
    title: 'Vérification CI',
    intro: "Vérifiez automatiquement chaque PR contre les règles de votre équipe.",

    principle: {
      tag: 'Principe',
      body: "Le diff de la PR est analysé par un agent IA qui vérifie que les modifications sont conformes aux decisions, invariants et rules que votre organisation a définis dans Knowledge. Vous pouvez utiliser votre propre agent IA en local ou l'agent qui tourne sur la plateforme Asplenz. L'agent ne reçoit que le diff de la PR, pas votre code source complet. Pour automatiser l'analyse, ajoutez simplement une étape à votre CI pour invoquer l'agent IA avec le diff de la PR et le prompt Asplenz en entrée.",
      prereq: 'Cette page suppose une connaissance des concepts Knowledge.',
      prereqLink: 'Voir Comment ça fonctionne',
      prereqHref: '/product/how-it-works',
    },

    steps: {
      tag: 'Vue d\'ensemble',
      body: "Quand une PR est ouverte ou mise à jour, votre pipeline CI appelle un agent IA avec le diff de la PR. L'agent interroge Knowledge pour récupérer les règles applicables aux fichiers modifiés — invariants, rules mandatory et overrides actifs. Il analyse le diff contre ces contraintes et retourne un verdict au pipeline CI. La CI autorise ou bloque ensuite le merge selon le mode de gating configuré.",
      implTitle: 'Pour le mettre en place :',
      items: [
        { label: 'Associez vos modules aux scopes Knowledge', desc: 'Voir "Mapping des scopes" ci-dessous.' },
        { label: 'Invoquez l\'agent IA depuis votre pipeline CI', desc: 'Voir "Invocation de l\'agent" ci-dessous.' },
        { label: 'Faites échouer la pipeline ou mergez la PR', desc: "Lisez le verdict retourné par l'agent. Sortez en erreur pour bloquer le merge, ou laissez la pipeline réussir pour l'autoriser." },
      ],
    },

    scopeMapping: {
      tag: '1. Mapping des scopes',
      body: "Créez un fichier `.knowledge-scope-mapping.yml` à la racine de votre dépôt. Chaque entrée associe un path pattern à un scope Knowledge. Par exemple, quand une PR modifie `src/payments/stripe.py`, l'agent récupère les invariants et rules du scope `Engineering/payments`.",
      code: `# .knowledge-scope-mapping.yml
scope_mapping:
  "src/payments/**": "Engineering/payments"
  "src/auth/**": "Engineering/auth"
  "infrastructure/**": "Operations"
  "**": "Engineering"`,
      note: "Les patterns sont évalués dans l'ordre. Le premier match gagne. Utilisez ** comme catch-all pour couvrir tous les fichiers.",
    },

    ciInvocation: {
      tag: 'Invocation de l\'agent',
      setup: {
        label: 'Préparation',
        code: `# Récupère le diff entre la branche base et le commit de la PR
DIFF=$(git diff origin/$BASE_BRANCH...$HEAD_SHA)

# Lit le fichier de mapping (YAML) et le convertit en JSON
SCOPE_JSON=$(python3 -c 'import sys,yaml,json; print(json.dumps(yaml.safe_load(sys.stdin)))' \\
  < .knowledge-scope-mapping.yml)`,
      },
      local: {
        label: 'Option 1 : agent IA local',
        body: "L'exemple ci-dessous utilise Claude Code. Adaptez la commande à votre agent et référez-vous à sa documentation pour la syntaxe exacte.",
        mcpLabel: "Configurez le serveur MCP Knowledge dans `.mcp.json` à la racine de votre dépôt :",
        mcpCode: `{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com/knowledge",
      "headers": { "Authorization": "Bearer <api_key>" }
    }
  }
}`,
        callLabel: "Invoquez l'agent avec le diff et le mapping :",
        code: `# L'agent appelle knowledge_resolve via MCP, analyse le diff localement,
# et sort avec le code 0 (pass) ou 1 (fail)
RESPONSE=$(claude -p "$(printf '## Scope Mapping\\n%s\\n\\n## PR Diff\\n%s\\n\\nRun the compliance check.' "$SCOPE_JSON" "$DIFF")" \\
  --system-prompt-file .asplenz/ci-check-prompt.md \\
  --allowedTools "mcp__knowledge__knowledge_resolve" \\
  --output-format json)`,
        note: 'Votre code source reste local. Seuls les appels aux outils Knowledge vont vers la plateforme.',
      },
      remote: {
        label: 'Option 2 : agent Asplenz',
        body: "Envoyez le diff à la plateforme Knowledge via l'API. L'agent Asplenz s'exécute côté serveur — aucune configuration MCP requise.",
        code: `# Envoie le diff à la plateforme Knowledge via l'API.
# jq construit le body JSON en injectant les variables bash.
RESPONSE=$(curl -s -X POST https://api.asplenz.com/knowledge/v1/verify/diff \\
  -H "Authorization: Bearer $KNOWLEDGE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d "$(jq -n \\
    --arg diff "$DIFF" \\
    --argjson scope_mapping "$SCOPE_JSON" \\
    --arg mode "fail-on-blocking" \\
    '{ diff: $diff, scope_mapping: $scope_mapping, mode: $mode }')")`,
      },
      verdict: {
        label: 'Agir sur le verdict',
        body: 'Dans les deux cas, le rapport inclut les invariants ou rules en conflit, leur sévérité, et si une approbation peut débloquer l\'action.',
        code: `# Extrait le champ "verdict" du JSON retourné par l'agent
VERDICT=$(echo "$RESPONSE" | jq -r '.verdict')

# Poste le rapport Markdown en commentaire de PR via le CLI GitHub
echo "$RESPONSE" | jq -r '.report_markdown' | gh pr comment $PR_NUMBER --body-file -

# Sort en échec si le verdict est "fail", laisse passer sinon
[ "$VERDICT" = "fail" ] && exit 1 || exit 0`,
      },
    },

    modes: {
      tag: 'La vérification de conformité',
      body: "L'agent retourne un rapport de conformité et sort avec un résultat pass ou fail. Votre pipeline CI agit sur ce résultat pour autoriser ou bloquer le merge. Le mode de gating contrôle ce que l'agent rapporte comme échec.",
      headers: ['Mode', "Résultat de l'agent", "Quand l'utiliser"],
      rows: [
        ['report-only', 'Toujours pass. Poste le rapport pour visibilité uniquement.', "Déploiement initial, phase d'apprentissage"],
        ['fail-on-blocking', 'Fail si un invariant est violé.', 'Enforcement standard'],
        ['strict', 'Fail sur toute violation (invariants + rules mandatory).', 'Environnements régulés'],
      ],
      note: "Déploiement recommandé : commencez en report-only pendant deux semaines. Reviewez les rapports. Quand l'équipe est à l'aise, passez en fail-on-blocking. Passez en strict quand la conformité est critique.",
    },

    checked: {
      tag: 'Ce qui est vérifié',
      items: [
        {
          name: 'Invariants',
          body: "Contraintes bloquantes. Si un invariant s'applique au scope des fichiers modifiés et n'est pas adressé, l'agent signale un conflit.",
        },
        {
          name: 'Rules Mandatory',
          body: 'Directives actives avec sévérité MANDATORY. Les rules mandatory non adressées génèrent des warnings en mode fail-on-blocking et des échecs en mode strict.',
        },
        {
          name: 'Rules Advisory',
          body: "Directives actives avec sévérité ADVISORY. Signalées pour information mais ne bloquent jamais le pipeline.",
        },
        {
          name: 'Overrides',
          body: 'Les overrides actifs sont reconnus. Si un override valide existe pour un invariant, l\'agent le marque comme "overridden" plutôt que "violated."',
        },
      ],
    },

    discovery: {
      tag: 'Détection de règles',
      body: "Au-delà de la conformité, l'agent détecte aussi les decisions, rules ou invariants implicites dans la PR mais absents du registre. Ils sont rapportés comme suggestions dans une section dédiée du rapport.",
      example: `Entrées détectées :
  - "Tous les endpoints de paiement doivent valider les codes devise" (candidat invariant)
  - "Utiliser Redis pour le cache de sessions plutôt que Memcached" (candidat decision)`,
      note: "Les détections sont purement informatives et n'affectent jamais le verdict. Si vous voulez les transformer en entrées du registre, passez la section discoveries du rapport à l'endpoint d'extraction pour créer des drafts à valider.",
    },

    comparison: {
      tag: 'Pourquoi automatiser le contrôle de conformité ?',
      headers: ['Contrôle manuel de conformité', 'Vérification CI'],
      rows: [
        ["Les règles, decisions et invariants sont éparpillés dans des docs, des commentaires de code, la mémoire des gens, ou perdus quand quelqu'un part", 'Centralisés dans un registre structuré'],
        ['Le reviewer doit se souvenir de toutes les règles applicables', 'Les règles sont récupérées automatiquement pour chaque fichier modifié'],
        ['Facile de rater un invariant ou une décision', 'Chaque contrainte applicable est évaluée'],
        ['Inconsistant entre les reviewers', 'Mêmes vérifications sur chaque PR'],
        ["Pas de trace d'audit structurée", 'Rapport structuré pour chaque PR'],
        ["Ne scale pas avec l'accumulation des règles", "Scale à n'importe quel nombre de règles et de PRs"],
      ],
      closing: "La vérification CI prend en charge la partie systématique : vérifier chaque PR contre les règles, decisions et invariants de votre organisation. Les reviewers peuvent se concentrer sur la logique, le design et la qualité.",
    },

    cta_unused: {
      links: [
        { label: 'Commencer →', href: '/docs/getting-started' },
        { label: 'Tarifs →', href: '/pricing' },
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

      {/* Principle */}
      <section className="py-10 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-3">{t.principle.tag}</p>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl mb-3">{t.principle.body}</p>
          <p className="text-sm text-[var(--text-secondary)]">
            {t.principle.prereq}{' '}
            <Link href={t.principle.prereqHref} className="text-[var(--accent)] hover:underline">{t.principle.prereqLink}</Link>.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">{t.steps.tag}</p>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl mb-8">{t.steps.body}</p>
          <img src={`/ci-compliance-flow-${lang}.svg`} alt={t.steps.tag} className="w-full max-w-3xl mb-10" />
          <p className="font-semibold text-lg text-[var(--text-primary)] mb-6">{t.steps.implTitle}</p>
          <ol className="space-y-6">
            {t.steps.items.map((step, i) => (
              <li key={i} className="flex gap-5">
                <span className="font-mono text-sm text-[var(--accent)] font-bold min-w-[1.5rem] mt-0.5">{i + 1}.</span>
                <div>
                  <p className="font-semibold text-[var(--text-primary)] mb-1">{step.label}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Scope Mapping */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">{t.scopeMapping.tag}</p>
          <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl"><InlineText text={t.scopeMapping.body} /></p>
          <div className="max-w-2xl mb-3"><CodeBlock code={t.scopeMapping.code} /></div>
          <p className="text-sm text-[var(--text-muted)] italic">{t.scopeMapping.note}</p>
        </div>
      </section>

      {/* CI Invocation */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.ciInvocation.tag}</p>

          {/* Setup */}
          <div className="mb-10">
            <h3 className="font-semibold text-base text-[var(--text-primary)] mb-3">{t.ciInvocation.setup.label}</h3>
            <div className="max-w-2xl"><CodeBlock code={t.ciInvocation.setup.code} /></div>
          </div>

          {/* Option 1: local agent */}
          <div className="mb-10">
            <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.ciInvocation.local.label}</h3>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.ciInvocation.local.body}</p>
            <p className="text-sm text-[var(--text-secondary)] mb-2"><InlineText text={t.ciInvocation.local.mcpLabel} /></p>
            <div className="max-w-2xl mb-4"><CodeBlock code={t.ciInvocation.local.mcpCode} /></div>
            <p className="text-sm text-[var(--text-secondary)] mb-2">{t.ciInvocation.local.callLabel}</p>
            <div className="max-w-2xl mb-2"><CodeBlock code={t.ciInvocation.local.code} /></div>
            <p className="text-sm text-[var(--text-muted)] italic">{t.ciInvocation.local.note}</p>
          </div>

          {/* Option 2: remote agent */}
          <div className="mb-10">
            <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.ciInvocation.remote.label}</h3>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.ciInvocation.remote.body}</p>
            <div className="max-w-2xl"><CodeBlock code={t.ciInvocation.remote.code} /></div>
          </div>

          {/* Verdict */}
          <div>
            <h3 className="font-semibold text-base text-[var(--text-primary)] mb-2">{t.ciInvocation.verdict.label}</h3>
            <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.ciInvocation.verdict.body}</p>
            <div className="max-w-2xl"><CodeBlock code={t.ciInvocation.verdict.code} /></div>
          </div>
        </div>
      </section>

      {/* Gating modes */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">{t.modes.tag}</p>
          <p className="text-[var(--text-secondary)] mb-5 leading-relaxed max-w-2xl">{t.modes.body}</p>
          <Table headers={t.modes.headers} rows={t.modes.rows} />
          <p className="text-sm text-[var(--text-muted)] italic">{t.modes.note}</p>
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

      {/* Rule Discovery */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">{t.discovery.tag}</p>
          <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.discovery.body}</p>
          <div className="max-w-2xl mb-3"><CodeBlock code={t.discovery.example} /></div>
          <p className="text-sm text-[var(--text-muted)] italic max-w-2xl">{t.discovery.note}</p>
        </div>
      </section>

      {/* Why automate compliance checking */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.comparison.tag}</p>
          <Table headers={t.comparison.headers} rows={t.comparison.rows} uniform />
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl">{t.comparison.closing}</p>
        </div>
      </section>


      <Footer />
    </div>
  )
}
