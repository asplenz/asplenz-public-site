'use client'
import Link from 'next/link'
import { useLang } from '@/lib/LangContext'

const content = {
  en: {
    title: 'Getting Started with Knowledge',
    intro: "Get up and running in under 10 minutes. By the end of this guide, you'll have:",
    goals: [
      'Your scopes and first entries created',
      'An AI agent connected via MCP',
      'Rules extracted from your existing docs and code',
    ],
    account: {
      tag: '1. Create Your Account',
      body: 'Sign up at asplenz.com/signup. Once your workspace is ready, you\'ll receive:',
      items: [
        { label: 'API base URL', value: 'https://api.asplenz.com' },
        { label: 'Admin API key', value: 'kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
      ],
      note: 'Save the API key — it is shown only once. You can generate additional keys from the dashboard.',
    },
    dashboard: {
      tag: '2. Explore the Dashboard',
      body: 'Log into the dashboard at app.asplenz.com. From there you can:',
      items: [
        { label: 'Create scopes', desc: 'to organize your knowledge (e.g. Engineering, Operations, Product)' },
        { label: 'Add entries', desc: '— decisions, invariants, and rules — manually or via extraction' },
        { label: 'Search', desc: 'across all entries with full-text filtering' },
        { label: 'Check compliance', desc: 'by testing an intended action against your constraints' },
      ],
    },
    api: {
      tag: '3. Your First API Calls',
      body: "All API calls require the Authorization header with your API key. Copy the scope ID from the dashboard — it's shown on each scope page.",
      listScopes: {
        title: 'List your scopes',
        code: `curl https://api.asplenz.com/api/v1/scopes \\
  -H "Authorization: Bearer kn_xxxxxxxx"`,
      },
      recordDecision: {
        title: 'Record a decision',
        code: `curl -X POST https://api.asplenz.com/api/v1/scopes/scp-XXXX/decisions \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "decision": "Use Docker Compose for local development",
    "context": "Developers waste time setting up services manually",
    "author": "your-name",
    "author_type": "human",
    "tags": ["infrastructure", "dx"]
  }'`,
      },
      checkCompliance: {
        title: 'Check compliance',
        code: `curl -X POST https://api.asplenz.com/api/v1/check \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "scope_id": "scp-XXXX",
    "intended_action": "Deploy on Friday evening without review"
  }'`,
        note: 'The response shows any conflicting invariants or rules — with IDs, severity, and whether approval can unlock the action.',
      },
    },
    mcp: {
      tag: '4. Connect an AI Agent (MCP)',
      body: 'Knowledge includes an MCP server that lets Claude Code, Cursor, and other AI tools query the registry in real time.',
      install: {
        title: 'Install the MCP server',
        code: 'pip install knowledge-mcp',
      },
      configure: {
        title: 'Configure Claude Code',
        body: 'Create or update .mcp.json in your project root:',
        code: `{
  "mcpServers": {
    "knowledge": {
      "command": "knowledge-mcp",
      "env": {
        "KNOWLEDGE_API_KEY": "kn_xxxxxxxx",
        "KNOWLEDGE_API_URL": "https://api.asplenz.com"
      }
    }
  }
}`,
        note: 'Launch your agent from the same Python environment where knowledge-mcp is installed.',
      },
      tryIt: {
        title: 'Try it',
        body: 'Launch Claude Code from your project directory and try:',
        examples: [
          'What invariants does Engineering have?',
          'Can I push directly to main without a PR review?',
          'Record a decision: we chose Playwright for E2E testing',
        ],
        note: 'Claude queries Knowledge in real time, respects constraints, and records decisions on your behalf.',
      },
    },
    extract: {
      tag: '5. Extract Rules from Existing Docs and Code',
      body: 'Knowledge can scan your existing documentation and source code to extract implicit rules, decisions, and constraints automatically.',
      extractDocs: {
        title: 'Extract from your docs',
        code: `knowledge extract \\
  --api-url https://api.asplenz.com \\
  --api-key kn_xxxxxxxx \\
  --scope Engineering \\
  --source ./docs --source ./CLAUDE.md`,
      },
      extractCode: {
        title: 'Extract from your codebase',
        body: 'Knowledge also analyzes source code, configuration files, and infrastructure definitions to surface implicit rules that are not documented anywhere:',
        code: `knowledge extract \\
  --api-url https://api.asplenz.com \\
  --api-key kn_xxxxxxxx \\
  --scope Engineering \\
  --source ./src --pattern "**/*.{ts,py,yaml}"`,
        note: 'The CLI reads every matching file, analyzes each chunk, and creates typed drafts:',
        output: `Scanning 23 files...
  47 chunks analyzed
  12 drafts generated (4 invariants, 5 rules, 3 decisions)
  2 duplicates skipped`,
      },
      review: {
        title: 'Review in the dashboard',
        body: 'Open the dashboard and navigate to the extraction page. Each draft shows:',
        items: [
          { label: 'Type', desc: 'invariant, rule, or decision' },
          { label: 'Content', desc: 'the extracted constraint or directive' },
          { label: 'Source', desc: 'the file and excerpt that motivated the extraction' },
          { label: 'Confidence', desc: 'confidence level (0.6 – 1.0)' },
        ],
        note: 'Approve to publish to the registry. Reject to discard. Edit before approving if needed.',
      },
      patterns: {
        title: 'Configure patterns',
        body: 'You can combine multiple sources and patterns in a single run:',
        code: `knowledge extract \\
  --scope Engineering \\
  --source ./docs --pattern "**/*.md" \\
  --source ./src --pattern "**/*.{ts,py,yaml}" \\
  --source . --pattern "CLAUDE.md"`,
      },
    },
    verifier: {
      tag: '6. Add the CI Verifier (Optional)',
      body: 'The Verifier runs in your CI pipeline and checks that PRs comply with your Knowledge entries.',
      install: {
        title: 'Install',
        code: 'pip install knowledge-verifier',
      },
      configure: {
        title: 'Configure',
        body: 'Create .knowledge-verifier.yml in your repository root:',
        code: `knowledge_api:
  url: https://api.asplenz.com
  # API key via KNOWLEDGE_API_KEY env var

verification:
  mode: report-only
  report_path: .knowledge/report.md
  scope_mapping:
    "src/payments/**": "Engineering/payments"
    "src/auth/**": "Engineering/auth"
    "infrastructure/**": "Operations"
    "**": "Engineering"`,
      },
      ci: {
        title: 'Add to your CI pipeline',
        code: `# .github/workflows/knowledge.yml
- name: Knowledge Compliance Check
  run: |
    pip install knowledge-verifier
    knowledge-verifier --config .knowledge-verifier.yml
  env:
    KNOWLEDGE_API_URL: \${{ secrets.KNOWLEDGE_API_URL }}
    KNOWLEDGE_API_KEY: \${{ secrets.KNOWLEDGE_API_KEY }}`,
      },
      note: "Start in report-only mode to see results without blocking PRs, then promote to fail-on-blocking when the team is ready.",
      link: { label: 'CI Verifier →', href: '/product/ci-verifier' },
      linkNote: 'for details on gating modes and implementation reports.',
    },
    next: {
      tag: "What's Next",
      rows: [
        { goal: 'Extract rules from existing docs', label: 'Automatic Extraction', href: '/docs/extraction' },
        { goal: 'Set up CI compliance checks', label: 'Integrations: CI/CD', href: '/docs/integrations/ci-cd' },
        { goal: 'Connect AI agents', label: 'Integrations: Claude MCP', href: '/docs/integrations/claude-mcp' },
        { goal: 'Explore the full API', label: 'API Reference', href: '/docs/integrations/api-reference' },
        { goal: 'See pricing and plans', label: 'Pricing', href: '/pricing' },
      ],
    },
    issues: {
      tag: 'Common Issues',
      rows: [
        { problem: '401 Unauthorized', fix: 'Check your API key in the Authorization header' },
        { problem: 'Invalid or expired API key', fix: 'Generate a new key from the dashboard' },
        { problem: 'MCP tools not showing in Claude', fix: 'Launch Claude from the directory containing .mcp.json' },
        { problem: 'Verifier reports no constraints', fix: 'Check your scope_mapping patterns in .knowledge-verifier.yml' },
      ],
    },
  },
  fr: {
    title: 'Démarrer avec Knowledge',
    intro: 'Soyez opérationnel en moins de 10 minutes. À la fin de ce guide, vous aurez :',
    goals: [
      'Vos scopes et premières entrées créés',
      'Un agent IA connecté via MCP',
      'Des règles extraites de votre documentation et de votre code existants',
    ],
    account: {
      tag: '1. Créez votre compte',
      body: 'Inscrivez-vous sur asplenz.com/signup. Une fois votre workspace prêt, vous recevrez :',
      items: [
        { label: 'URL de base API', value: 'https://api.asplenz.com' },
        { label: 'Clé API admin', value: 'kn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
      ],
      note: 'Conservez la clé API — elle n\'est affichée qu\'une seule fois. Vous pouvez générer des clés supplémentaires depuis le dashboard.',
    },
    dashboard: {
      tag: '2. Explorez le dashboard',
      body: 'Connectez-vous au dashboard sur app.asplenz.com. Depuis celui-ci vous pouvez :',
      items: [
        { label: 'Créer des scopes', desc: 'pour organiser vos connaissances (ex. Engineering, Operations, Product)' },
        { label: 'Ajouter des entrées', desc: '— decisions, invariants et rules — manuellement ou via extraction' },
        { label: 'Rechercher', desc: 'dans toutes les entrées avec filtrage full-text' },
        { label: 'Vérifier la conformité', desc: 'en testant une action envisagée contre vos contraintes' },
      ],
    },
    api: {
      tag: '3. Vos premiers appels API',
      body: 'Tous les appels API nécessitent le header Authorization avec votre clé API. Copiez le scope ID depuis le dashboard — il est affiché sur chaque page de scope.',
      listScopes: {
        title: 'Lister vos scopes',
        code: `curl https://api.asplenz.com/api/v1/scopes \\
  -H "Authorization: Bearer kn_xxxxxxxx"`,
      },
      recordDecision: {
        title: 'Enregistrer une décision',
        code: `curl -X POST https://api.asplenz.com/api/v1/scopes/scp-XXXX/decisions \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "decision": "Use Docker Compose for local development",
    "context": "Developers waste time setting up services manually",
    "author": "your-name",
    "author_type": "human",
    "tags": ["infrastructure", "dx"]
  }'`,
      },
      checkCompliance: {
        title: 'Vérifier la conformité',
        code: `curl -X POST https://api.asplenz.com/api/v1/check \\
  -H "Authorization: Bearer kn_xxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "scope_id": "scp-XXXX",
    "intended_action": "Deploy on Friday evening without review"
  }'`,
        note: 'La réponse indique les invariants ou rules en conflit — avec leurs IDs, sévérité, et si une approbation peut débloquer l\'action.',
      },
    },
    mcp: {
      tag: '4. Connecter un agent IA (MCP)',
      body: 'Knowledge inclut un serveur MCP qui permet à Claude Code, Cursor et d\'autres outils IA d\'interroger le registre en temps réel.',
      install: {
        title: 'Installer le serveur MCP',
        code: 'pip install knowledge-mcp',
      },
      configure: {
        title: 'Configurer Claude Code',
        body: 'Créez ou mettez à jour .mcp.json à la racine de votre projet :',
        code: `{
  "mcpServers": {
    "knowledge": {
      "command": "knowledge-mcp",
      "env": {
        "KNOWLEDGE_API_KEY": "kn_xxxxxxxx",
        "KNOWLEDGE_API_URL": "https://api.asplenz.com"
      }
    }
  }
}`,
        note: 'Lancez votre agent depuis le même environnement Python où knowledge-mcp est installé.',
      },
      tryIt: {
        title: 'Essayez',
        body: 'Lancez Claude Code depuis votre répertoire de projet et essayez :',
        examples: [
          'Quels invariants a le scope Engineering ?',
          'Puis-je pusher directement sur main sans code review ?',
          'Enregistre une décision : on a choisi Playwright pour les tests E2E',
        ],
        note: 'Claude interroge Knowledge en temps réel, respecte les contraintes et enregistre les décisions pour vous.',
      },
    },
    extract: {
      tag: '5. Extraire les règles de vos docs et de votre code',
      body: 'Knowledge peut scanner votre documentation existante et votre code source pour extraire automatiquement les règles, décisions et contraintes implicites.',
      extractDocs: {
        title: 'Extraire depuis vos docs',
        code: `knowledge extract \\
  --api-url https://api.asplenz.com \\
  --api-key kn_xxxxxxxx \\
  --scope Engineering \\
  --source ./docs --source ./CLAUDE.md`,
      },
      extractCode: {
        title: 'Extraire depuis votre codebase',
        body: "Knowledge analyse aussi les fichiers source, les configurations et les définitions d'infrastructure pour faire émerger les règles implicites qui ne sont documentées nulle part :",
        code: `knowledge extract \\
  --api-url https://api.asplenz.com \\
  --api-key kn_xxxxxxxx \\
  --scope Engineering \\
  --source ./src --pattern "**/*.{ts,py,yaml}"`,
        note: 'La CLI lit chaque fichier, analyse chaque chunk, et crée des drafts typés :',
        output: `Scanning 23 files...
  47 chunks analyzed
  12 drafts generated (4 invariants, 5 rules, 3 decisions)
  2 duplicates skipped`,
      },
      review: {
        title: 'Reviewer dans le dashboard',
        body: "Ouvrez le dashboard et naviguez vers la page d'extraction. Chaque draft affiche :",
        items: [
          { label: 'Type', desc: 'invariant, rule ou decision' },
          { label: 'Contenu', desc: 'la contrainte ou directive extraite' },
          { label: 'Source', desc: "le fichier et l'extrait ayant motivé l'extraction" },
          { label: 'Confiance', desc: 'niveau de confiance (0.6 – 1.0)' },
        ],
        note: "Approuvez pour publier dans le registre. Rejetez pour supprimer. Éditez avant d'approuver si nécessaire.",
      },
      patterns: {
        title: 'Configurer les patterns',
        body: 'Vous pouvez combiner plusieurs sources et patterns en un seul run :',
        code: `knowledge extract \\
  --scope Engineering \\
  --source ./docs --pattern "**/*.md" \\
  --source ./src --pattern "**/*.{ts,py,yaml}" \\
  --source . --pattern "CLAUDE.md"`,
      },
    },
    verifier: {
      tag: '6. Ajouter le CI Verifier (Optionnel)',
      body: 'Le Verifier s\'exécute dans votre pipeline CI et vérifie que les PRs respectent vos entrées Knowledge.',
      install: {
        title: 'Installer',
        code: 'pip install knowledge-verifier',
      },
      configure: {
        title: 'Configurer',
        body: 'Créez .knowledge-verifier.yml à la racine de votre dépôt :',
        code: `knowledge_api:
  url: https://api.asplenz.com
  # Clé API via la variable d'environnement KNOWLEDGE_API_KEY

verification:
  mode: report-only
  report_path: .knowledge/report.md
  scope_mapping:
    "src/payments/**": "Engineering/payments"
    "src/auth/**": "Engineering/auth"
    "infrastructure/**": "Operations"
    "**": "Engineering"`,
      },
      ci: {
        title: 'Ajouter à votre pipeline CI',
        code: `# .github/workflows/knowledge.yml
- name: Knowledge Compliance Check
  run: |
    pip install knowledge-verifier
    knowledge-verifier --config .knowledge-verifier.yml
  env:
    KNOWLEDGE_API_URL: \${{ secrets.KNOWLEDGE_API_URL }}
    KNOWLEDGE_API_KEY: \${{ secrets.KNOWLEDGE_API_KEY }}`,
      },
      note: 'Commencez en mode report-only pour voir les résultats sans bloquer les PRs, puis passez en fail-on-blocking quand l\'équipe est prête.',
      link: { label: 'CI Verifier →', href: '/product/ci-verifier' },
      linkNote: 'pour les détails sur les modes de gating et les implementation reports.',
    },
    next: {
      tag: 'Et ensuite',
      rows: [
        { goal: 'Extraire les règles de vos docs', label: 'Extraction automatique', href: '/docs/extraction' },
        { goal: 'Configurer les checks CI', label: 'Intégrations : CI/CD', href: '/docs/integrations/ci-cd' },
        { goal: 'Connecter des agents IA', label: 'Intégrations : Claude MCP', href: '/docs/integrations/claude-mcp' },
        { goal: "Explorer l'API complète", label: 'Référence API', href: '/docs/integrations/api-reference' },
        { goal: 'Voir les tarifs', label: 'Tarifs', href: '/pricing' },
      ],
    },
    issues: {
      tag: 'Problèmes courants',
      rows: [
        { problem: '401 Unauthorized', fix: 'Vérifiez votre clé API dans le header Authorization' },
        { problem: 'Invalid or expired API key', fix: 'Générez une nouvelle clé depuis le dashboard' },
        { problem: 'Les outils MCP n\'apparaissent pas dans Claude', fix: 'Lancez Claude depuis le répertoire contenant .mcp.json' },
        { problem: 'Le Verifier ne trouve aucune contrainte', fix: 'Vérifiez vos patterns scope_mapping dans .knowledge-verifier.yml' },
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
    <code className="font-mono text-[0.85em] bg-[var(--accent-light)] text-[var(--accent)] px-1 py-0.5 rounded">{children}</code>
  )
}

export default function Page() {
  const { lang } = useLang()
  const t = content[lang as 'fr' | 'en'] ?? content.en

  return (
    <article>
      <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4 mt-0">{t.title}</h1>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.intro}</p>
      <ul className="list-disc list-inside space-y-1 mb-8">
        {t.goals.map((g, i) => (
          <li key={i} className="text-[var(--text-secondary)] text-sm">{g}</li>
        ))}
      </ul>

      <hr className="border-[var(--border)] my-8" />

      {/* 1. Create Account */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.account.tag}</h2>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.account.body}</p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        {t.account.items.map((item, i) => (
          <li key={i} className="text-[var(--text-secondary)] text-sm">
            <strong className="font-semibold text-[var(--text-primary)]">{item.label}</strong>{' : '}
            <InlineCode>{item.value}</InlineCode>
          </li>
        ))}
      </ul>
      <p className="text-sm text-[var(--text-muted)] italic">{t.account.note}</p>

      <hr className="border-[var(--border)] my-8" />

      {/* 2. Dashboard */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.dashboard.tag}</h2>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.dashboard.body}</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        {t.dashboard.items.map((item, i) => (
          <li key={i} className="text-[var(--text-secondary)] text-sm">
            <strong className="font-semibold text-[var(--text-primary)]">{item.label}</strong>{' '}{item.desc}
          </li>
        ))}
      </ul>

      <hr className="border-[var(--border)] my-8" />

      {/* 3. API Calls */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.api.tag}</h2>
      <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{t.api.body}</p>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.api.listScopes.title}</h3>
      <CodeBlock code={t.api.listScopes.code} />

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.api.recordDecision.title}</h3>
      <CodeBlock code={t.api.recordDecision.code} />

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.api.checkCompliance.title}</h3>
      <CodeBlock code={t.api.checkCompliance.code} />
      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed text-sm">{t.api.checkCompliance.note}</p>

      <hr className="border-[var(--border)] my-8" />

      {/* 4. MCP */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.mcp.tag}</h2>
      <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{t.mcp.body}</p>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.mcp.install.title}</h3>
      <CodeBlock code={t.mcp.install.code} />

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.mcp.configure.title}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.mcp.configure.body}</p>
      <CodeBlock code={t.mcp.configure.code} />
      <p className="text-sm text-[var(--text-muted)] italic mb-4">{t.mcp.configure.note}</p>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.mcp.tryIt.title}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.mcp.tryIt.body}</p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        {t.mcp.tryIt.examples.map((ex, i) => (
          <li key={i} className="text-[var(--text-secondary)] text-sm italic">{ex}</li>
        ))}
      </ul>
      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed text-sm">{t.mcp.tryIt.note}</p>

      <hr className="border-[var(--border)] my-8" />

      {/* 5. Extract */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.extract.tag}</h2>
      <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{t.extract.body}</p>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.extract.extractDocs.title}</h3>
      <CodeBlock code={t.extract.extractDocs.code} />

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.extract.extractCode.title}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.extract.extractCode.body}</p>
      <CodeBlock code={t.extract.extractCode.code} />
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed text-sm">{t.extract.extractCode.note}</p>
      <CodeBlock code={t.extract.extractCode.output} />

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.extract.review.title}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.extract.review.body}</p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        {t.extract.review.items.map((item, i) => (
          <li key={i} className="text-[var(--text-secondary)] text-sm">
            <strong className="font-semibold text-[var(--text-primary)]">{item.label}</strong>{' : '}{item.desc}
          </li>
        ))}
      </ul>
      <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-sm">{t.extract.review.note}</p>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.extract.patterns.title}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.extract.patterns.body}</p>
      <CodeBlock code={t.extract.patterns.code} />

      <hr className="border-[var(--border)] my-8" />

      {/* 6. CI Verifier */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.verifier.tag}</h2>
      <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{t.verifier.body}</p>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.verifier.install.title}</h3>
      <CodeBlock code={t.verifier.install.code} />

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.verifier.configure.title}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.verifier.configure.body}</p>
      <CodeBlock code={t.verifier.configure.code} />

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.verifier.ci.title}</h3>
      <CodeBlock code={t.verifier.ci.code} />
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed text-sm">{t.verifier.note}</p>
      <p className="text-[var(--text-secondary)] mb-4 text-sm">
        <Link href={t.verifier.link.href} className="text-[var(--accent)] hover:underline font-medium">{t.verifier.link.label}</Link>
        {' '}{t.verifier.linkNote}
      </p>

      <hr className="border-[var(--border)] my-8" />

      {/* What's Next */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.next.tag}</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <tbody>
            {t.next.rows.map((row, i) => (
              <tr key={i} className="border-b border-[var(--border-light)]">
                <td className="py-2.5 pr-6 text-[var(--text-secondary)]">{row.goal}</td>
                <td className="py-2.5">
                  <Link href={row.href} className="text-[var(--accent)] hover:underline text-sm">{row.label}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="border-[var(--border)] my-8" />

      {/* Common Issues */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.issues.tag}</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <tbody>
            {t.issues.rows.map((row, i) => (
              <tr key={i} className="border-b border-[var(--border-light)]">
                <td className="py-2.5 pr-6 font-mono text-[var(--accent)] text-xs">{row.problem}</td>
                <td className="py-2.5 text-[var(--text-secondary)]">{row.fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
