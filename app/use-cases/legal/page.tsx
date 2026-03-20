'use client'

import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { useLang } from '@/lib/LangContext'

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="rounded-lg bg-[#1A1A2E] text-[#A8C8E8] text-xs p-4 overflow-x-auto whitespace-pre-wrap break-words leading-relaxed font-mono">
      {code}
    </pre>
  )
}

const content = {
  en: {
    eyebrow: 'Use Cases',
    title: 'Knowledge for Legal and Compliance Teams',
    intro:
      'Legal and compliance teams need to document policy decisions, enforce regulatory constraints, and produce structured evidence for auditors. Knowledge provides the registry to do this systematically.',

    challengeTitle: 'The Challenge',
    challengeItems: [
      'Policy decisions are recorded in emails, meeting notes, and scattered documents',
      'Compliance constraints exist in regulatory texts but are not machine-enforceable',
      'When auditors ask for evidence, teams spend days assembling it manually',
      'AI tools used by the organization operate without awareness of compliance requirements',
      'No structured way to prove that constraints were checked before actions were taken',
    ],

    howTitle: 'How Knowledge Helps',

    extractTitle: 'Extract Rules from Existing Policy Documents',
    extractDesc:
      'Your legal team already has rules in policy documents, compliance frameworks, and regulatory interpretations. Knowledge extracts them automatically:',
    extractCode: `> "Extract rules from ./policies and ./compliance-docs for the Privacy scope"`,
    extractOutput: `Scanning ./policies, ./compliance-docs...
  > 4 invariant candidates  (e.g., "Personal data processing requires documented legal basis")
  > 8 rule candidates       (e.g., "Privacy impact assessment required for new processing activities")
  > 3 decision candidates   (e.g., "GDPR data retention limit set to 36 months for customer records")
  > 2 duplicates skipped`,
    extractNote: 'You review in the dashboard and approve what\'s correct. Regulatory requirements become invariants, operational directives become rules.',
    extractLink: 'See how extraction works →',
    extractHref: '/product/how-it-works#start-from-what-you-have',

    decisionTitle: 'Document Policy Decisions',
    decisionDesc: 'Record every compliance decision with full context:',
    decisionCode1: `Decision: "GDPR data retention limit set to 36 months for customer records"
  Context: "Legal review of GDPR Art. 5(1)(e) and sector-specific guidance"
  Reasoning: "36 months balances legitimate business interest against minimization"
  Author: legal-team
  Tags: [gdpr, data-retention, privacy]`,
    decisionLink: 'Link decisions to the constraints they create:',
    decisionCode2: `Decision: "36-month retention for customer records"
    creates > Invariant: "No customer data retained beyond 36 months"
    creates > Rule: "Automated deletion pipeline must run monthly"`,
    decisionNote:
      'Six months later, when someone asks "why 36 months?", the answer is one search away — with the regulatory reasoning attached.',

    encodeTitle: 'Encode Regulatory Constraints',
    encodeDesc: 'Turn regulatory requirements into machine-readable invariants:',
    encodeCode: `Invariant: "Personal data processing requires documented legal basis"
  Rationale: "GDPR Art. 6 - no processing without lawful basis"
  requires_approval: true

Invariant: "Data transfers outside EU require adequacy decision or SCCs"
  Rationale: "GDPR Art. 44-49"

Rule: "Privacy impact assessment required for new data processing activities"
  Severity: MANDATORY`,
    encodeNote:
      'These constraints are checked automatically — by AI agents before they act, by the Verifier before code ships.',

    agentTitle: 'Give AI Agents Your Compliance Context',
    agentDesc:
      'When an agent works on code that touches regulated data, it queries Knowledge first:',
    agentCode: `Agent starts a task in the data-processing namespace
Agent > knowledge_resolve(scope="Privacy", namespace="data-processing")
  > Returns 8 applicable entries: 2 invariants, 3 decisions, 2 rules, 1 override

Agent > knowledge_check(scope="Privacy", action="Add user analytics tracking")
  > Conflict: inv-3b1c "Personal data processing requires documented legal basis"
  > requires_approval: true

Agent > knowledge_request_approval(
    trigger_id="inv-3b1c",
    intended_action="Add analytics tracking for user behavior",
    justification="Legitimate interest basis, PIA completed ref DOC-2024-47"
  )
  > Pending, waiting for legal review

Legal team reviews in dashboard > Approve with conditions
  > Override created: "PIA completed, limited to aggregated data"
  > Agent proceeds, reference recorded`,
    agentNote:
      'The agent does not bypass compliance. It reads the constraints from the same registry your legal team maintains.',

    evidenceTitle: 'Produce Structured Evidence',
    evidenceDesc:
      'When an auditor asks "how do you ensure AI systems comply with your data governance policies?":',
    evidenceHeaders: ['Auditor Question', 'Knowledge Answer'],
    evidenceRows: [
      ['"What constraints exist?"', 'Export invariant and rule registry'],
      ['"Who set these constraints?"', 'Each entry has author + timestamp'],
      ['"Were constraints checked before deployment?"', 'Reference traces with status'],
      ['"Who approved this exception?"', 'Approval chain: request > decision > override'],
      ['"What changed and when?"', 'Event timeline with full attribution'],
    ],
    evidenceNote: 'This is not a manual report. It is a structured export from a live registry.',

    gateTitle: 'Gate High-Risk Actions',
    gateDesc: 'For actions that require legal review:',
    gateCode: `Engineer: deploys feature with new data collection
  > Verifier: conflict with invariant "Privacy impact required"
  > PR blocked

Engineer: creates approval request with justification
  > Legal team reviews > approves with conditions
  > Override created: "PIA completed, ref DOC-2024-47"
  > PR passes`,

    ciTitle: 'CI Compliance Checks',
    ciDesc:
      'The Verifier runs in your pipeline and checks that code changes address applicable compliance constraints:',
    ciCode: `# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml`,
    ciNote:
      'The coding agent generates an Implementation Report as `.knowledge/report.md`, committed alongside the code. The Verifier validates citations, overrides, and mandatory entries. With semantic analysis enabled, it evaluates the actual code diff against each constraint.',
    ciLink: 'See the full Verifier flow →',
    ciHref: '/product/how-it-works#cicd-verifier',

    workflowTitle: 'Day-to-Day Workflow',
    workflowGroups: [
      {
        title: 'For Legal Counsel',
        items: [
          'Define invariants: encode regulatory requirements as machine-enforceable constraints',
          'Set rules: define compliance directives (PIA requirements, retention policies, consent standards)',
          'Review approvals: approve or reject exception requests from engineers and agents',
          'Monitor events: track policy changes and compliance status in the event timeline',
          'Export evidence: generate structured reports for regulators and auditors',
        ],
      },
      {
        title: 'For Compliance Officers',
        items: [
          'Extract existing rules: run `knowledge extract` on policy documents to populate the registry',
          'Review drafts: approve extracted constraints, reject noise, edit as needed',
          'Attach external checkers: add scripts or webhooks for dynamic verification (consent checks, data residency validation)',
          'Browse references: verify that constraints are being followed across the organization',
          'Generate reports: export compliance evidence for regulatory filings',
        ],
      },
      {
        title: 'For Engineers',
        items: [
          'Before coding: agent queries Knowledge via `knowledge_resolve` and `knowledge_check`',
          'During coding: agent follows compliance rules and records decisions',
          'In the commit: agent generates `.knowledge/report.md` citing applicable constraints',
          'CI runs: Verifier checks compliance (citations + semantic analysis + external checkers)',
        ],
      },
    ],

    useCasesTitle: 'Use Cases in Legal/Compliance',
    useCases: [
      {
        title: 'Data Privacy (GDPR)',
        items: [
          'Invariants for data processing constraints (legal basis, retention, transfers)',
          'Rules for privacy impact assessments and data mapping',
          'Approval gates for new processing activities',
          'Decision history linking regulatory interpretation to operational controls',
        ],
      },
      {
        title: 'Contract and IP Management',
        items: [
          'Decisions recording licensing and contract interpretations',
          'Rules for IP attribution requirements in generated content',
          'Invariants for prohibited uses of third-party IP',
          'Reference traces proving compliance with licensing terms',
        ],
      },
      {
        title: 'Corporate Governance',
        items: [
          'Decisions documenting board resolutions and policy changes',
          'Rules for approval thresholds and delegation of authority',
          'Invariants for separation-of-duties requirements',
          'Event timeline for governance audit trail',
        ],
      },
      {
        title: 'AI Governance',
        items: [
          'Map to EU AI Act requirements',
          'Invariants for AI system risk controls',
          'Rules for model validation and monitoring',
          'Approval workflows for high-risk AI deployments',
        ],
      },
    ],
    aiActHref: '/compliance/ai-act',
    aiActLabel: 'AI Act Compliance',

    replacesTitle: 'What It Replaces',
    replacesHeaders: ['Before', 'With Knowledge'],
    replacesRows: [
      [
        'Policy decisions in emails and meeting notes',
        'Immutable decisions with regulatory context and reasoning',
      ],
      [
        'Compliance constraints in unstructured regulatory texts',
        'Machine-readable invariants enforced by agents and CI',
      ],
      [
        'Days of manual evidence assembly for auditors',
        'Structured export from a live registry',
      ],
      [
        'Email threads for compliance approvals',
        'Approval workflows with role verification and override tracking',
      ],
      [
        'Spreadsheets tracking policy compliance',
        'Automated Verifier in CI with semantic analysis',
      ],
      [
        '"Ask legal, they\'ll tell you what the policy is"',
        'Searchable registry with full decision chains',
      ],
    ],

    getStartedTitle: 'Get Started',
    getStartedSteps: [
      { label: 'Create your account', href: '/docs/getting-started' },
      { label: 'Create scopes for your compliance domains (Privacy, Contracts, Corporate Governance)' },
      {
        label:
          'Run `knowledge extract --scope "Privacy" --source ./policies --source ./compliance-docs` to populate from existing docs',
      },
      { label: 'Review and approve extracted drafts, then refine with manual entries' },
      { label: 'Connect agents via MCP for real-time constraint checking' },
      { label: 'Add the Verifier to your CI pipeline' },
    ],
    ctaPrimary: 'Getting Started →',
    ctaPrimaryHref: '/docs/getting-started',
    ctaSecondary: 'AI Act Compliance →',
    ctaSecondaryHref: '/compliance/ai-act',
    ctaTertiary: 'Pricing →',
    ctaTertiaryHref: '/pricing',
  },

  fr: {
    eyebrow: 'Cas d\'usage',
    title: 'Knowledge pour les équipes Juridique et Conformité',
    intro:
      'Les équipes juridiques et de conformité ont besoin de documenter les décisions de politique, appliquer les contraintes réglementaires et produire des preuves structurées pour les auditeurs. Knowledge fournit le registre pour faire cela systématiquement.',

    challengeTitle: 'Le défi',
    challengeItems: [
      'Les décisions de politique sont enregistrées dans des emails, des notes de réunion et des documents dispersés',
      'Les contraintes de conformité existent dans des textes réglementaires mais ne sont pas applicables par les machines',
      'Quand les auditeurs demandent des preuves, les équipes passent des jours à les assembler manuellement',
      'Les outils IA utilisés par l\'organisation opèrent sans connaissance des exigences de conformité',
      'Pas de moyen structuré de prouver que les contraintes ont été vérifiées avant que les actions soient prises',
    ],

    howTitle: 'Comment Knowledge aide',

    extractTitle: 'Extraire les règles des documents de politique existants',
    extractDesc:
      'Votre équipe juridique a déjà des règles dans les documents de politique, les frameworks de conformité et les interprétations réglementaires. Knowledge les extrait automatiquement :',
    extractCode: `> "Extrais les règles depuis ./policies et ./compliance-docs pour le scope Privacy"`,
    extractOutput: `Scanning ./policies, ./compliance-docs...
  > 4 candidats invariant  (ex. "Personal data processing requires documented legal basis")
  > 8 candidats rule       (ex. "Privacy impact assessment required for new processing activities")
  > 3 candidats decision   (ex. "GDPR data retention limit set to 36 months for customer records")
  > 2 doublons ignores`,
    extractNote:
      'Vous reviewez dans le dashboard et approuvez ce qui est correct. Les exigences réglementaires deviennent des invariants, les directives opérationnelles deviennent des rules.',
    extractLink: 'Voir comment fonctionne l\'extraction →',
    extractHref: '/product/how-it-works#start-from-what-you-have',

    decisionTitle: 'Documenter les décisions de politique',
    decisionDesc: 'Enregistrez chaque décision de conformité avec son contexte complet :',
    decisionCode1: `Decision: "Limite de rétention GDPR fixée à 36 mois pour les dossiers clients"
  Context: "Revue juridique de l'Art. 5(1)(e) du GDPR et directives sectorielles"
  Reasoning: "36 mois équilibre l'intérêt commercial légitime contre la minimisation"
  Author: legal-team
  Tags: [gdpr, data-retention, privacy]`,
    decisionLink: 'Liez les décisions aux contraintes qu\'elles créent :',
    decisionCode2: `Decision: "Rétention de 36 mois pour les dossiers clients"
    creates > Invariant: "Aucune donnée client conservée au-delà de 36 mois"
    creates > Rule: "Le pipeline de suppression automatique doit tourner mensuellement"`,
    decisionNote:
      'Six mois plus tard, quand quelqu\'un demande "pourquoi 36 mois ?", la réponse est à une recherche près — avec le raisonnement réglementaire attaché.',

    encodeTitle: 'Encoder les contraintes réglementaires',
    encodeDesc: 'Transformez les exigences réglementaires en invariants lisibles par les machines :',
    encodeCode: `Invariant: "Le traitement de données personnelles nécessite une base juridique documentée"
  Rationale: "GDPR Art. 6 - pas de traitement sans base licite"
  requires_approval: true

Invariant: "Les transferts de données hors UE nécessitent une décision d'adéquation ou des CCT"
  Rationale: "GDPR Art. 44-49"

Rule: "Analyse d'impact sur la vie privée requise pour les nouvelles activités de traitement"
  Severity: MANDATORY`,
    encodeNote:
      'Ces contraintes sont vérifiées automatiquement — par les agents avant d\'agir, par le Verifier avant que le code soit déployé.',

    agentTitle: 'Donner le contexte conformité aux agents',
    agentDesc:
      'Quand un agent travaille sur du code qui touche à des données réglementées, il interroge Knowledge d\'abord :',
    agentCode: `L'agent démarre une tâche dans le namespace data-processing
Agent > knowledge_resolve(scope="Privacy", namespace="data-processing")
  > Retourne 8 entrées applicables : 2 invariants, 3 decisions, 2 rules, 1 override

Agent > knowledge_check(scope="Privacy", action="Ajouter un tracking analytics utilisateur")
  > Conflit : inv-3b1c "Le traitement de données personnelles nécessite une base juridique"
  > requires_approval: true

Agent > knowledge_request_approval(
    trigger_id="inv-3b1c",
    intended_action="Ajouter un tracking analytics du comportement utilisateur",
    justification="Base d'intérêt légitime, PIA complétée ref DOC-2024-47"
  )
  > En attente, revue juridique requise

L'équipe juridique review dans le dashboard > Approuve avec conditions
  > Override créé : "PIA complétée, limitée aux données agrégées"
  > L'agent procède, référence enregistrée`,
    agentNote:
      'L\'agent ne contourne pas la conformité. Il lit les contraintes depuis le même registre que votre équipe juridique maintient.',

    evidenceTitle: 'Produire des preuves structurées',
    evidenceDesc:
      'Quand un auditeur demande "comment assurez-vous que les systèmes IA respectent vos politiques de gouvernance des données ?" :',
    evidenceHeaders: ['Question de l\'auditeur', 'Réponse Knowledge'],
    evidenceRows: [
      ['"Quelles contraintes existent ?"', 'Export du registre d\'invariants et rules'],
      ['"Qui a défini ces contraintes ?"', 'Chaque entrée a un auteur + timestamp'],
      ['"Les contraintes ont-elles été vérifiées avant le déploiement ?"', 'Traces de références avec statut'],
      ['"Qui a approuvé cette exception ?"', 'Chaîne d\'approbation : demande > décision > override'],
      ['"Qu\'est-ce qui a changé et quand ?"', 'Timeline d\'événements avec attribution complète'],
    ],
    evidenceNote:
      'Ce n\'est pas un rapport manuel. C\'est un export structuré depuis un registre vivant.',

    gateTitle: 'Bloquer les actions à haut risque',
    gateDesc: 'Pour les actions qui nécessitent une revue juridique :',
    gateCode: `Ingénieur : déploie une fonctionnalité avec une nouvelle collecte de données
  > Verifier : conflit avec l'invariant "Analyse d'impact requise"
  > PR bloquée

Ingénieur : crée une demande d'approbation avec justification
  > L'équipe juridique review > approuve avec conditions
  > Override créé : "PIA complétée, ref DOC-2024-47"
  > PR passe`,

    ciTitle: 'Checks de conformité CI',
    ciDesc:
      'Le Verifier s\'exécute dans votre pipeline et vérifie que les changements de code adressent les contraintes de conformité applicables :',
    ciCode: `# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml`,
    ciNote:
      'L\'agent de coding génère un Implementation Report sous forme de `.knowledge/report.md`, commité avec le code. Le Verifier valide les citations, overrides et entrées mandatory. Avec l\'analyse sémantique activée, il évalue le diff réel du code contre chaque contrainte.',
    ciLink: 'Voir le flux complet du Verifier →',
    ciHref: '/product/how-it-works#cicd-verifier',

    workflowTitle: 'Workflow au quotidien',
    workflowGroups: [
      {
        title: 'Pour les juristes',
        items: [
          'Définir les invariants : encoder les exigences réglementaires comme contraintes applicables par les machines',
          'Définir les rules : directives de conformité (exigences PIA, politiques de rétention, standards de consentement)',
          'Reviewer les approbations : approuver ou rejeter les demandes d\'exception des ingénieurs et agents',
          'Surveiller les événements : suivre les changements de politique et le statut de conformité dans la timeline',
          'Exporter les preuves : générer des rapports structurés pour les régulateurs et auditeurs',
        ],
      },
      {
        title: 'Pour les responsables conformité',
        items: [
          'Extraire les règles existantes : lancer `knowledge extract` sur les documents de politique pour peupler le registre',
          'Reviewer les brouillons : approuver les contraintes extraites, rejeter le bruit, éditer si nécessaire',
          'Attacher des external checkers : scripts ou webhooks pour vérification dynamique (checks de consentement, validation de résidence des données)',
          'Parcourir les références : vérifier que les contraintes sont suivies dans l\'organisation',
          'Générer des rapports : exporter les preuves de conformité pour les déclarations réglementaires',
        ],
      },
      {
        title: 'Pour les ingénieurs',
        items: [
          'Avant de coder : l\'agent interroge Knowledge via `knowledge_resolve` et `knowledge_check`',
          'Pendant le coding : l\'agent suit les rules de conformité et enregistre les décisions',
          'Dans le commit : l\'agent génère `.knowledge/report.md` citant les contraintes applicables',
          'Le CI tourne : le Verifier vérifie la conformité (citations + analyse sémantique + external checkers)',
        ],
      },
    ],

    useCasesTitle: 'Cas d\'usage en juridique/conformité',
    useCases: [
      {
        title: 'Protection des données (GDPR)',
        items: [
          'Invariants pour les contraintes de traitement des données (base juridique, rétention, transferts)',
          'Rules pour les analyses d\'impact et la cartographie des données',
          'Gates d\'approbation pour les nouvelles activités de traitement',
          'Historique de décisions liant l\'interprétation réglementaire aux contrôles opérationnels',
        ],
      },
      {
        title: 'Gestion des contrats et de la PI',
        items: [
          'Décisions enregistrant les interprétations de licences et contrats',
          'Rules pour les exigences d\'attribution de PI dans le contenu généré',
          'Invariants pour les utilisations interdites de PI tierce',
          'Traces de références prouvant la conformité aux termes de licence',
        ],
      },
      {
        title: 'Gouvernance d\'entreprise',
        items: [
          'Décisions documentant les résolutions du conseil et les changements de politique',
          'Rules pour les seuils d\'approbation et la délégation d\'autorité',
          'Invariants pour les exigences de séparation des fonctions',
          'Timeline d\'événements pour la piste d\'audit de gouvernance',
        ],
      },
      {
        title: 'Gouvernance IA',
        items: [
          'Mapper aux exigences du EU AI Act',
          'Invariants pour les contrôles de risque des systèmes IA',
          'Rules pour la validation et le monitoring des modèles',
          'Workflows d\'approbation pour les déploiements IA à haut risque',
        ],
      },
    ],
    aiActHref: '/compliance/ai-act',
    aiActLabel: 'Conformité AI Act',

    replacesTitle: 'Ce que ça remplace',
    replacesHeaders: ['Avant', 'Avec Knowledge'],
    replacesRows: [
      [
        'Décisions de politique dans des emails et notes de réunion',
        'Décisions immuables avec contexte réglementaire et raisonnement',
      ],
      [
        'Contraintes de conformité dans des textes réglementaires non structurés',
        'Invariants lisibles par les machines appliqués par les agents et le CI',
      ],
      [
        'Des jours d\'assemblage manuel de preuves pour les auditeurs',
        'Export structuré depuis un registre vivant',
      ],
      [
        'Fils d\'emails pour les approbations de conformité',
        'Workflows d\'approbation avec vérification de rôle et suivi des overrides',
      ],
      [
        'Tableurs de suivi de conformité aux politiques',
        'Verifier automatisé en CI avec analyse sémantique',
      ],
      [
        '"Demandez au juridique, ils vous diront quelle est la politique"',
        'Registre recherchable avec chaînes de décisions complètes',
      ],
    ],

    getStartedTitle: 'Commencer',
    getStartedSteps: [
      { label: 'Créer votre compte', href: '/docs/getting-started' },
      { label: 'Créer des scopes pour vos domaines de conformité (Privacy, Contracts, Corporate Governance)' },
      {
        label:
          'Lancer `knowledge extract --scope "Privacy" --source ./policies --source ./compliance-docs` pour peupler depuis les docs existantes',
      },
      { label: 'Reviewer et approuver les brouillons extraits, puis affiner avec des entrées manuelles' },
      { label: 'Connecter les agents via MCP pour le contrôle de contraintes en temps réel' },
      { label: 'Ajouter le Verifier à votre pipeline CI' },
    ],
    ctaPrimary: 'Commencer →',
    ctaPrimaryHref: '/docs/getting-started',
    ctaSecondary: 'Conformité AI Act →',
    ctaSecondaryHref: '/compliance/ai-act',
    ctaTertiary: 'Tarifs →',
    ctaTertiaryHref: '/pricing',
  },
}

export default function LegalPage() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{t.eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-6">{t.title}</h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl">{t.intro}</p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">{t.challengeTitle}</p>
          <ul className="space-y-3">
            {t.challengeItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How Knowledge Helps */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-10">{t.howTitle}</p>
          <div className="space-y-12">

            {/* 1. Extract Rules */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.extractTitle}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.extractDesc}</p>
              <div className="space-y-3 max-w-2xl">
                <CodeBlock code={t.extractCode} />
                <CodeBlock code={t.extractOutput} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">
                {t.extractNote}{' '}
                <Link href={t.extractHref} className="text-[var(--accent)] hover:underline">{t.extractLink}</Link>
              </p>
            </div>

            {/* 2. Document Policy Decisions */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.decisionTitle}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.decisionDesc}</p>
              <div className="space-y-3 max-w-2xl">
                <CodeBlock code={t.decisionCode1} />
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{t.decisionLink}</p>
                <CodeBlock code={t.decisionCode2} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">{t.decisionNote}</p>
            </div>

            {/* 3. Encode Regulatory Constraints */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.encodeTitle}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.encodeDesc}</p>
              <div className="max-w-2xl">
                <CodeBlock code={t.encodeCode} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">{t.encodeNote}</p>
            </div>

            {/* 4. Give AI Agents Your Compliance Context */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.agentTitle}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.agentDesc}</p>
              <div className="max-w-2xl">
                <CodeBlock code={t.agentCode} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">{t.agentNote}</p>
            </div>

            {/* 5. Produce Structured Evidence */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.evidenceTitle}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.evidenceDesc}</p>
              <div className="overflow-x-auto max-w-2xl">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      {t.evidenceHeaders.map((h) => (
                        <th key={h} className="text-left py-2 pr-6 font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.evidenceRows.map((row, i) => (
                      <tr key={i} className="border-b border-[var(--border-light)]">
                        <td className="py-3 pr-6 text-[var(--text-muted)] leading-relaxed font-mono text-xs">{row[0]}</td>
                        <td className="py-3 pr-6 text-[var(--text-secondary)] leading-relaxed">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">{t.evidenceNote}</p>
            </div>

            {/* 6. Gate High-Risk Actions */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.gateTitle}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.gateDesc}</p>
              <div className="max-w-2xl">
                <CodeBlock code={t.gateCode} />
              </div>
            </div>

            {/* 7. CI Compliance Checks */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.ciTitle}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.ciDesc}</p>
              <div className="max-w-2xl">
                <CodeBlock code={t.ciCode} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">
                {t.ciNote}{' '}
                <Link href={t.ciHref} className="text-[var(--accent)] hover:underline">{t.ciLink}</Link>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Day-to-Day Workflow */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.workflowTitle}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.workflowGroups.map((group) => (
              <div key={group.title} className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <h3 className="font-semibold text-[var(--text-primary)] mb-4">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases in Legal/Compliance */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.useCasesTitle}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {t.useCases.map((area) => (
              <div key={area.title} className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <h3 className="font-semibold text-[var(--text-primary)] mb-4">
                  {area.title === 'AI Governance' || area.title === 'Gouvernance IA' ? (
                    <>
                      {area.title}{' '}
                      <Link href={t.aiActHref} className="text-[var(--accent)] hover:underline text-sm font-normal">({t.aiActLabel})</Link>
                    </>
                  ) : area.title}
                </h3>
                <ul className="space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Replaces */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">{t.replacesTitle}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  {t.replacesHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-6 font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.replacesRows.map((row, i) => (
                  <tr key={i} className="border-b border-[var(--border-light)]">
                    <td className="py-3 pr-6 text-[var(--text-muted)] leading-relaxed">{row[0]}</td>
                    <td className="py-3 pr-6 text-[var(--text-secondary)] leading-relaxed">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.getStartedTitle}</p>
          <ol className="space-y-3 text-left mb-10">
            {t.getStartedSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border border-[var(--accent)] text-[var(--accent)] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-[var(--text-secondary)] leading-relaxed pt-0.5">
                  {'href' in step ? (
                    <Link href={step.href!} className="text-[var(--accent)] hover:underline">{step.label}</Link>
                  ) : (
                    step.label
                  )}
                </span>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={t.ctaPrimaryHref} className="px-7 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors">
              {t.ctaPrimary}
            </Link>
            <Link href={t.ctaSecondaryHref} className="px-7 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
              {t.ctaSecondary}
            </Link>
            <Link href={t.ctaTertiaryHref} className="px-7 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
              {t.ctaTertiary}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
