'use client'
import Link from 'next/link'
import { useLang } from '@/lib/LangContext'

const content = {
  en: {
    title: 'Getting Started with Knowledge',
    intro: "By the end of this guide, you'll be able to:",
    goals: [
      'Create scopes and record decisions, invariants, and rules',
      'Connect an AI agent to query and enforce them in real time',
      'Extract rules from your existing docs and code',
      'Check compliance in CI',
    ],
    account: {
      tag: '1. Create Your Account',
      body: 'Sign up at asplenz.com/signup. Once your workspace is ready, you\'ll receive:',
      items: [
        { label: 'API base URL', value: 'https://api.asplenz.com/knowledge' },
        { label: 'Admin API key', value: '<api_key>' },
      ],
      note: 'Save the API key — it is shown only once. You can generate additional keys from the dashboard.',
    },
    dashboard: {
      tag: '2. Explore the Dashboard',
      body: 'Log into the dashboard at app.asplenz.com/knowledge. From there you can:',
      items: [
        { label: 'Create scopes', desc: 'to organize your knowledge (e.g. Engineering, Operations, Product)' },
        { label: 'Add entries', desc: '— decisions, invariants, and rules — manually or via extraction' },
        { label: 'Search', desc: 'across all entries with full-text filtering' },
        { label: 'Check compliance', desc: 'by testing an intended action against your constraints' },
      ],
    },
    api: {
      tag: '3. Your First API Calls',
      body: "All API calls require the Authorization header with your API key. Start by listing your scopes to get the scope ID — you'll use it in the next calls.",
      listScopes: {
        title: 'List your scopes',
        code: `curl https://api.asplenz.com/knowledge/v1/scopes \\
  -H "Authorization: Bearer <api_key>"`,
      },
      recordDecision: {
        title: 'Record a decision',
        code: `curl -X POST https://api.asplenz.com/knowledge/v1/scopes/<scope_id>/decisions \\
  -H "Authorization: Bearer <api_key>" \\
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
        code: `curl -X POST https://api.asplenz.com/knowledge/v1/check \\
  -H "Authorization: Bearer <api_key>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "scope_id": "<scope_id>",
    "intended_action": "Deploy on Friday evening without review"
  }'`,
        note: 'The response shows any conflicting invariants or rules — with IDs, severity, and whether approval can unlock the action.',
      },
    },
    mcp: {
      tag: '4. Connect an AI Agent (MCP)',
      body: 'Knowledge exposes a hosted MCP server. Any MCP-compatible agent — Claude.ai, Claude Code, or any other client — can connect to it using your API key.',
      server: { label: 'MCP server URL', value: 'https://mcp.asplenz.com/knowledge' },
      note: 'Refer to your agent\'s documentation to add an MCP server. Use the URL above and set the Authorization header to Bearer <api_key>.',
      tryIt: {
        title: 'Try it',
        body: 'Once connected, your agent has access to Knowledge tools. Ask it:',
        examples: [
          `> "What invariants does Engineering have?"\n  → The agent calls the knowledge_list_invariants tool to list invariants in the "Engineering" scope`,
          `> "Can I push directly to main without a PR review?"\n  → The agent calls the knowledge_check tool to check compliance for the intended action`,
          `> "Record a decision: we chose Playwright for E2E testing"\n  → The agent calls the knowledge_record tool to save the decision to the registry`,
        ],
      },
    },
    extract: {
      tag: '5. Extract Rules from Your Documents',
      body: 'Upload your documents (PDF, Word, Markdown) via the dashboard or the ingestion API. Knowledge analyzes them and generates typed drafts — invariants, rules, and decisions — for your review.',
      code: `curl -X POST https://api.asplenz.com/knowledge/v1/extract/stream \\
  -H "Authorization: Bearer <api_key>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "scope_id": "<scope_id>",
    "documents": [{"content": "..."}],
    "auto_run": true
  }'`,
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
    },
    engineering: {
      tag: 'For Engineering Teams',
      body: 'The following steps are specific to engineering teams: extracting rules from source code and checking PR compliance in CI.',
      mcpExample: {
        title: 'Example: configuring MCP with Claude Code',
        body: 'If you use Claude Code, create or update .mcp.json in your project root and launch Claude from that directory:',
        code: `{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com/knowledge",
      "headers": {
        "Authorization": "Bearer <api_key>"
      }
    }
  }
}`,
      },
      extractCode: {
        title: '6. Extract Rules from Your Codebase',
        body: 'Your AI agent reads and analyzes your source files locally, then creates typed drafts directly in Knowledge via MCP. Nothing leaves your machine.',
        withLocal: {
          title: 'With your local AI agent',
          code: `> "Extract rules from ./docs, ./CLAUDE.md and ./src for the Engineering scope"\n  → The agent reads and analyzes the files locally, then creates typed drafts in Knowledge via MCP`,
          output: `Scanning 23 files...
  47 chunks analyzed
  12 drafts generated (4 invariants, 5 rules, 3 decisions)
  2 duplicates skipped`,
        },
        withAsplenz: {
          title: 'With Asplenz remote agent',
          body: 'You can also send your source files to the ingestion API and let the Asplenz agent analyze them server-side.',
        },
      },
      ci: {
        title: '7. Add Compliance Checks to CI (Optional)',
        body: 'Your AI agent reads the PR diff and checks it against the applicable rules and invariants in Knowledge before the PR is merged.',
        choiceNote: 'You can use your local AI agent or Asplenz\'s hosted agent — both connect to the same Knowledge API.',
        withAgent: {
          title: 'With your local AI agent',
          body: 'Your agent reads the PR diff locally and checks it against Knowledge:',
          code: `> "Check the diff of this PR against Knowledge for the Engineering scope"\n  → The agent calls knowledge_check for each change and reports any violations`,
        },
        withoutAgent: {
          title: 'With Asplenz remote agent',
          body: 'Send the PR diff to Knowledge via the API:',
          code: `# .github/workflows/knowledge.yml
- name: Knowledge Compliance Check
  run: |
    curl -X POST https://api.asplenz.com/knowledge/v1/verify/diff \\
      -H "Authorization: Bearer \$KNOWLEDGE_API_KEY" \\
      -H "Content-Type: application/json" \\
      -d '{
        "scope_id": "<scope_id>",
        "diff": "\${{ steps.get_diff.outputs.diff }}"
      }'
  env:
    KNOWLEDGE_API_KEY: \${{ secrets.KNOWLEDGE_API_KEY }}`,
        },
        note: "The response includes any conflicting invariants or rules, their severity, and whether an approval can unblock the action.",
        link: { label: 'CI integration →', href: '/product/ci-verifier' },
        linkNote: 'for details on gating modes and implementation reports.',
      },
    },
  },
  fr: {
    title: 'Démarrer avec Knowledge',
    intro: 'À la fin de ce guide, vous serez en mesure de :',
    goals: [
      'Créer des scopes et enregistrer des decisions, invariants et rules',
      'Connecter un agent IA pour interroger et appliquer les contraintes en temps réel',
      'Extraire des règles depuis vos docs et votre code existants',
      'Vérifier la conformité en CI',
    ],
    account: {
      tag: '1. Créez votre compte',
      body: 'Inscrivez-vous sur asplenz.com/signup. Une fois votre workspace prêt, vous recevrez :',
      items: [
        { label: 'URL de base API', value: 'https://api.asplenz.com/knowledge' },
        { label: 'Clé API admin', value: '<api_key>' },
      ],
      note: 'Conservez la clé API — elle n\'est affichée qu\'une seule fois. Vous pouvez générer des clés supplémentaires depuis le dashboard.',
    },
    dashboard: {
      tag: '2. Explorez le dashboard',
      body: 'Connectez-vous au dashboard sur app.asplenz.com/knowledge. Depuis celui-ci vous pouvez :',
      items: [
        { label: 'Créer des scopes', desc: 'pour organiser vos connaissances (ex. Engineering, Operations, Product)' },
        { label: 'Ajouter des entrées', desc: '— decisions, invariants et rules — manuellement ou via extraction' },
        { label: 'Rechercher', desc: 'dans toutes les entrées avec filtrage full-text' },
        { label: 'Vérifier la conformité', desc: 'en testant une action envisagée contre vos contraintes' },
      ],
    },
    api: {
      tag: '3. Vos premiers appels API',
      body: 'Tous les appels API nécessitent le header Authorization avec votre clé API. Commencez par lister vos scopes pour obtenir le scope ID — vous l\'utiliserez dans les appels suivants.',
      listScopes: {
        title: 'Lister vos scopes',
        code: `curl https://api.asplenz.com/knowledge/v1/scopes \\
  -H "Authorization: Bearer <api_key>"`,
      },
      recordDecision: {
        title: 'Enregistrer une décision',
        code: `curl -X POST https://api.asplenz.com/knowledge/v1/scopes/<scope_id>/decisions \\
  -H "Authorization: Bearer <api_key>" \\
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
        code: `curl -X POST https://api.asplenz.com/knowledge/v1/check \\
  -H "Authorization: Bearer <api_key>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "scope_id": "<scope_id>",
    "intended_action": "Deploy on Friday evening without review"
  }'`,
        note: 'La réponse indique les invariants ou rules en conflit — avec leurs IDs, sévérité, et si une approbation peut débloquer l\'action.',
      },
    },
    mcp: {
      tag: '4. Connecter un agent IA (MCP)',
      body: 'Knowledge expose un serveur MCP hébergé. Tout agent compatible MCP — Claude.ai, Claude Code ou tout autre client — peut s\'y connecter avec votre clé API.',
      server: { label: 'URL du serveur MCP', value: 'https://mcp.asplenz.com/knowledge' },
      note: 'Référez-vous à la documentation de votre agent pour ajouter un serveur MCP. Utilisez l\'URL ci-dessus et définissez le header Authorization à Bearer <api_key>.',
      tryIt: {
        title: 'Essayez',
        body: 'Une fois connecté, votre agent a accès aux outils Knowledge. Demandez-lui :',
        examples: [
          `> "Quels invariants a le scope Engineering ?"\n  → L'agent appelle l'outil knowledge_list_invariants pour lister les invariants du scope "Engineering"`,
          `> "Puis-je pusher directement sur main sans code review ?"\n  → L'agent appelle l'outil knowledge_check pour vérifier la conformité de l'action`,
          `> "Enregistre une décision : on a choisi Playwright pour les tests E2E"\n  → L'agent appelle l'outil knowledge_record pour sauvegarder la décision dans le registre`,
        ],
      },
    },
    extract: {
      tag: '5. Extraire les règles de vos documents',
      body: 'Uploadez vos documents (PDF, Word, Markdown) via le dashboard ou l\'API d\'ingestion. Knowledge les analyse et génère des drafts typés — invariants, rules et decisions — pour votre revue.',
      code: `curl -X POST https://api.asplenz.com/knowledge/v1/extract/stream \\
  -H "Authorization: Bearer <api_key>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "scope_id": "<scope_id>",
    "documents": [{"content": "..."}],
    "auto_run": true
  }'`,
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
    },
    engineering: {
      tag: 'Pour les équipes engineering',
      body: 'Les étapes suivantes sont spécifiques aux équipes engineering : extraction de règles depuis le code source et vérification de conformité des PRs en CI.',
      mcpExample: {
        title: 'Exemple : configurer MCP avec Claude Code',
        body: 'Si vous utilisez Claude Code, créez ou mettez à jour .mcp.json à la racine de votre projet et lancez Claude depuis ce répertoire :',
        code: `{
  "mcpServers": {
    "knowledge": {
      "url": "https://mcp.asplenz.com/knowledge",
      "headers": {
        "Authorization": "Bearer <api_key>"
      }
    }
  }
}`,
      },
      extractCode: {
        title: '6. Extraire les règles depuis votre codebase',
        body: 'Votre agent IA lit et analyse vos fichiers source localement, puis crée des drafts typés directement dans Knowledge via MCP. Rien ne quitte votre machine.',
        withLocal: {
          title: 'Avec votre agent IA local',
          code: `> "Extrais les règles depuis ./docs, ./CLAUDE.md et ./src pour le scope Engineering"\n  → L'agent lit et analyse les fichiers localement, puis crée des drafts typés dans Knowledge via MCP`,
          output: `Scanning 23 files...
  47 chunks analyzed
  12 drafts generated (4 invariants, 5 rules, 3 decisions)
  2 duplicates skipped`,
        },
        withAsplenz: {
          title: 'Avec l\'agent Asplenz',
          body: 'Vous pouvez aussi envoyer vos fichiers source à l\'API d\'ingestion et laisser l\'agent Asplenz les analyser côté serveur.',
        },
      },
      ci: {
        title: '7. Ajouter des checks de conformité en CI (Optionnel)',
        body: 'Votre agent IA lit le diff de la PR et le vérifie contre les rules et invariants applicables dans Knowledge avant le merge.',
        choiceNote: 'Vous pouvez utiliser votre agent IA local ou l\'agent hébergé Asplenz — les deux se connectent à la même API Knowledge.',
        withAgent: {
          title: 'Avec votre agent IA local',
          body: 'Votre agent lit le diff de la PR localement et le vérifie contre Knowledge :',
          code: `> "Vérifie le diff de cette PR contre Knowledge pour le scope Engineering"\n  → L'agent appelle knowledge_check pour chaque changement et rapporte les violations`,
        },
        withoutAgent: {
          title: 'Avec l\'agent Asplenz',
          body: 'Envoyez le diff de la PR à Knowledge via l\'API :',
          code: `# .github/workflows/knowledge.yml
- name: Knowledge Compliance Check
  run: |
    curl -X POST https://api.asplenz.com/knowledge/v1/verify/diff \\
      -H "Authorization: Bearer \$KNOWLEDGE_API_KEY" \\
      -H "Content-Type: application/json" \\
      -d '{
        "scope_id": "<scope_id>",
        "diff": "\${{ steps.get_diff.outputs.diff }}"
      }'
  env:
    KNOWLEDGE_API_KEY: \${{ secrets.KNOWLEDGE_API_KEY }}`,
        },
        note: 'La réponse indique les invariants ou rules en conflit, leur sévérité, et si une approbation peut débloquer l\'action.',
        link: { label: 'Intégration CI →', href: '/product/ci-verifier' },
        linkNote: 'pour les détails sur les modes de gating et les implementation reports.',
      },
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
      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{t.mcp.body}</p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li className="text-[var(--text-secondary)] text-sm">
          <strong className="font-semibold text-[var(--text-primary)]">{t.mcp.server.label}</strong>{' : '}
          <InlineCode>{t.mcp.server.value}</InlineCode>
        </li>
      </ul>
      <p className="text-sm text-[var(--text-muted)] italic mb-6">{t.mcp.note}</p>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.mcp.tryIt.title}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.mcp.tryIt.body}</p>
      <CodeBlock code={t.mcp.tryIt.examples.join('\n\n')} />

      <hr className="border-[var(--border)] my-8" />

      {/* 5. Extract from documents */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.extract.tag}</h2>
      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{t.extract.body}</p>
      <CodeBlock code={t.extract.code} />

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

      <hr className="border-[var(--border)] my-8" />

      {/* Engineering section */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.engineering.tag}</h2>
      <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{t.engineering.body}</p>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.engineering.mcpExample.title}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.engineering.mcpExample.body}</p>
      <CodeBlock code={t.engineering.mcpExample.code} />

      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.engineering.extractCode.title}</h2>
      <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{t.engineering.extractCode.body}</p>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.engineering.extractCode.withLocal.title}</h3>
      <CodeBlock code={t.engineering.extractCode.withLocal.code} />
      <CodeBlock code={t.engineering.extractCode.withLocal.output} />

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.engineering.extractCode.withAsplenz.title}</h3>
      <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{t.engineering.extractCode.withAsplenz.body}</p>

      <hr className="border-[var(--border)] my-8" />

      {/* CI */}
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4 mt-10">{t.engineering.ci.title}</h2>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.engineering.ci.body}</p>
      <p className="text-sm text-[var(--text-muted)] italic mb-6">{t.engineering.ci.choiceNote}</p>

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.engineering.ci.withAgent.title}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.engineering.ci.withAgent.body}</p>
      <CodeBlock code={t.engineering.ci.withAgent.code} />

      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 mt-6">{t.engineering.ci.withoutAgent.title}</h3>
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed">{t.engineering.ci.withoutAgent.body}</p>
      <CodeBlock code={t.engineering.ci.withoutAgent.code} />
      <p className="text-[var(--text-secondary)] mb-3 leading-relaxed text-sm">{t.engineering.ci.note}</p>
      <p className="text-[var(--text-secondary)] mb-4 text-sm">
        <Link href={t.engineering.ci.link.href} className="text-[var(--accent)] hover:underline font-medium">{t.engineering.ci.link.label}</Link>
        {' '}{t.engineering.ci.linkNote}
      </p>
    </article>
  )
}
