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
    badge: 'Use Cases',
    heroTitle: 'Knowledge for Financial Services',
    heroIntro:
      'Financial institutions face regulatory requirements that demand traceability, auditability, and human oversight of automated decision-making. Knowledge provides the infrastructure to document, enforce, and prove compliance — from model risk management to AI governance.',

    challengeTitle: 'The Challenge',
    challengeIntro:
      'Financial services teams operate under strict regulatory frameworks (MiFID II, Basel III, EU AI Act, SOX). When AI agents or automated systems make decisions:',
    challengeItems: [
      'Regulators want proof that constraints were enforced, not just documented',
      'Model risk management requires traceable decision chains from risk identification to control implementation',
      'Audit teams need structured evidence, not wiki pages and email threads',
      'Compliance officers must demonstrate human oversight of high-risk automated decisions',
      'AI agents and automated systems act without awareness of risk controls',
    ],
    challengeClose:
      'Traditional approaches — wikis, spreadsheets, email approvals — produce evidence that is scattered, incomplete, and expensive to reconstruct.',

    howTitle: 'How Knowledge Helps',

    extractTitle: 'Extract Rules from Existing Risk Frameworks',
    extractDesc:
      'Your risk team already has rules in policy documents, model governance frameworks, and compliance runbooks. Knowledge extracts them automatically:',
    extractCmd: `> "Extract rules from ./risk-policies and ./model-docs for the Model Governance scope"`,
    extractOutput: `Scanning ./risk-policies, ./model-docs...
  > 6 invariant candidates  (e.g., "No model deployed without validation committee sign-off")
  > 9 rule candidates       (e.g., "All model changes require back-testing on 24 months")
  > 4 decision candidates   (e.g., "Switched credit scoring from logistic regression to gradient boosting")
  > 2 duplicates skipped`,
    extractClose:
      'You review in the dashboard and approve what\'s correct. In minutes, scattered policy documents become a structured registry.',
    extractLink: 'See how extraction works →',
    extractHref: '/product/how-it-works#start-from-what-you-have',

    modelRiskTitle: 'Model Risk Controls',
    modelRiskDesc:
      'Codify model governance requirements as invariants and rules:',
    modelRiskCode: `Invariant: "No model deployed to production without validation committee sign-off"
  requires_approval: true
  min_role_to_decide: tech-lead

Rule (mandatory): "All model changes require back-testing on 24 months of data"
  severity: MANDATORY

Rule (advisory): "Prefer ensemble methods over single models for credit scoring"
  severity: ADVISORY`,
    modelRiskClose:
      'When an AI agent or engineer attempts to deploy a model, Knowledge flags violations before deployment.',

    traceTitle: 'Traceable Decision Chains',
    traceDesc: 'Every decision links to its consequences:',
    traceCode: `Decision: "Switch credit scoring from logistic regression to gradient boosting"
  Context: "False positive rate of 18% unacceptable for SME lending"
  Reasoning: "Gradient boosting reduces FPR to 7% on backtesting data"
  Author: risk-analytics-team
    |
    creates > Rule: "Gradient boosting models require quarterly recalibration"
    creates > Invariant: "No credit score change > 50 points without human review"
    supersedes > Decision: "Use logistic regression for all scoring" (2019)`,
    traceClose:
      'When an auditor asks "why did you change the scoring model?", the answer is one query away — not a week of investigation.',

    agentTitle: 'Give AI Agents Your Risk Context',
    agentDesc:
      'When an AI agent works on risk-related code, it queries Knowledge first:',
    agentCode: `Agent starts a task in the credit-risk namespace
Agent > knowledge_resolve(scope="Model Governance", namespace="credit-risk")
  > Returns 11 applicable entries: 3 invariants, 4 decisions, 3 rules, 1 override

Agent > knowledge_check(scope="Model Governance", action="Deploy credit model v2.3")
  > Conflict: inv-8a3f "No model deployed without validation committee"
  > requires_approval: true

Agent > knowledge_request_approval(
    trigger_id="inv-8a3f",
    intended_action="Deploy credit model v2.3",
    justification="Backtested on 36 months, FPR improved 60%"
  )
  > Pending, waiting for tech-lead

Committee reviews in dashboard > Approve
  > Override auto-created with conditions
  > Agent proceeds, reference recorded`,
    agentClose:
      'The entire chain — check, conflict, request, approval, override, deployment trace — is one connected timeline.',

    auditTitle: 'Regulatory Audit Trail',
    auditDesc: 'Knowledge produces audit-ready artifacts:',
    auditHeaders: ['What Regulators Ask', 'What Knowledge Provides'],
    auditRows: [
      ['"How are AI decisions governed?"', 'Invariant and rule registry with version history'],
      ['"Who approved this model change?"', 'Approval chain: request > decision > override'],
      ['"Was this change reviewed by a human?"', 'Approval workflow with role verification'],
      ['"What constraints applied at deployment time?"', 'Normative hash + reference traces'],
      ['"Can you prove the agent checked before acting?"', 'Reference with status (followed/diverged) and context'],
    ],

    ciTitle: 'CI Compliance Checks',
    ciDesc:
      'The Verifier runs in your pipeline and checks that code changes address applicable risk constraints:',
    ciCode: `# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml`,
    ciClose:
      'The coding agent generates an Implementation Report as `.knowledge/report.md`, committed alongside the code. The Verifier validates citations, overrides, and mandatory entries. With semantic analysis enabled, it evaluates the actual code diff against each constraint.',
    ciLink: 'See the full Verifier flow →',
    ciHref: '/product/how-it-works#cicd-verifier',

    workflowTitle: 'Day-to-Day Workflow',
    workflowGroups: [
      {
        title: 'For Risk Analysts',
        items: [
          'Before modeling: AI agent queries Knowledge via knowledge_resolve and knowledge_check',
          'During development: agent follows model governance rules and records decisions',
          'Before deployment: agent generates .knowledge/report.md citing applicable constraints',
          'CI runs: Verifier checks compliance (citations + semantic analysis + external checkers)',
        ],
      },
      {
        title: 'For Risk Officers',
        items: [
          'Define invariants: codify non-negotiable risk controls (model deployment gates, exposure limits)',
          'Set rules: define model governance standards (validation cadence, back-testing requirements)',
          'Attach external checkers: add scripts or webhooks for dynamic verification (position limits, exposure checks)',
          'Review approvals: approve or reject model deployment requests from agents and engineers',
          'Export evidence: generate structured audit reports for regulators',
        ],
      },
      {
        title: 'For Auditors',
        items: [
          'Browse scopes: see Model Governance, Credit Risk, Market Risk, AML at a glance',
          'Read invariants: understand what constraints govern automated decisions',
          'Trace decisions: follow the chain from risk appetite change to model update to deployment',
          'Verify compliance: check reference traces proving constraints were checked',
        ],
      },
    ],

    useCasesTitle: 'Use Cases in Finance',
    useCases: [
      {
        title: 'Credit Risk',
        items: [
          'Invariants for credit decision boundaries (max exposure, minimum documentation)',
          'Rules for model validation cadence and methodology',
          'Approval gates for credit limit changes above threshold',
          'Decision history linking risk appetite changes to model updates',
        ],
      },
      {
        title: 'Trading and Market Risk',
        items: [
          'Invariants for position limits and hedging requirements',
          'Rules for pre-trade compliance checks',
          'Reference traces proving risk limits were checked before execution',
          'Override mechanism for emergency situations with full audit trail',
        ],
      },
      {
        title: 'Anti-Money Laundering (AML)',
        items: [
          'Invariants for screening requirements (no transaction without sanctions check)',
          'Rules for enhanced due diligence thresholds',
          'Decision records for risk rating changes with justification',
          'Event timeline for regulatory reporting',
        ],
      },
      {
        title: 'AI Governance (EU AI Act)',
        items: [
          'Map AI systems to scopes (one scope per high-risk system)',
          'Codify Article 14 human oversight requirements as approval-gated invariants',
          'Export event logs and reference traces for Article 12 compliance',
          'Generate compliance reports per deployment via the CI Verifier',
        ],
      },
    ],

    replacesTitle: 'What It Replaces',
    replacesHeaders: ['Before', 'With Knowledge'],
    replacesRows: [
      ['Model governance rules in PDF policy documents', 'Structured invariants and rules that agents query in real-time'],
      ['Risk decisions in committee meeting minutes', 'Immutable decisions with context, reasoning, and links'],
      ['Audit evidence assembled manually over days', 'Structured export from a live registry'],
      ['Email threads for model deployment approvals', 'Approval workflows with role verification and override tracking'],
      ['Spreadsheets tracking compliance status', 'Automated Verifier in CI with semantic analysis'],
      ['"Ask the risk team, they\'ll know"', 'Searchable registry with full decision chains'],
    ],

    getStartedTitle: 'Get Started',
    getStartedSteps: [
      { text: 'Create your account', href: '/docs/getting-started', isLink: true },
      { text: 'Create scopes for your risk domains (Model Governance, Credit Risk, Market Risk, AML)', isLink: false },
      { text: 'Run knowledge extract --scope "Model Governance" --source ./risk-policies --source ./model-docs to populate from existing docs', isLink: false },
      { text: 'Review extracted drafts and approve the ones that are correct', isLink: false },
      { text: 'Connect your AI agents via MCP', isLink: false },
      { text: 'Add the Verifier to your CI pipeline', isLink: false },
    ],
    getStartedLinks: [
      { label: 'Getting Started →', href: '/docs/getting-started', primary: true },
      { label: 'AI Act Compliance →', href: '/compliance/ai-act', primary: false },
      { label: 'Pricing →', href: '/pricing', primary: false },
    ],
  },

  fr: {
    badge: 'Cas d\'usage',
    heroTitle: 'Knowledge pour les Services Financiers',
    heroIntro:
      'Les institutions financières font face à des exigences réglementaires qui demandent traçabilité, auditabilité et supervision humaine des décisions automatisées. Knowledge fournit l\'infrastructure pour documenter, appliquer et prouver la conformité — de la gestion des risques modèles à la gouvernance IA.',

    challengeTitle: 'Le défi',
    challengeIntro:
      'Les équipes de services financiers opèrent sous des cadres réglementaires stricts (MiFID II, Bâle III, EU AI Act, SOX). Lorsque des agents IA ou des systèmes automatisés prennent des décisions :',
    challengeItems: [
      'Les régulateurs veulent la preuve que les contraintes ont été appliquées, pas seulement documentées',
      'La gestion des risques modèles exige des chaînes de décisions traçables de l\'identification du risque à l\'implémentation du contrôle',
      'Les équipes d\'audit ont besoin de preuves structurées, pas de pages wiki et de fils d\'emails',
      'Les responsables conformité doivent démontrer la supervision humaine des décisions automatisées à haut risque',
      'Les agents IA et systèmes automatisés agissent sans connaissance des contrôles de risque',
    ],
    challengeClose:
      'Les approches traditionnelles — wikis, tableurs, approbations par email — produisent des preuves dispersées, incomplètes et coûteuses à reconstituer.',

    howTitle: 'Comment Knowledge aide',

    extractTitle: 'Extraire les règles des frameworks de risque existants',
    extractDesc:
      'Votre équipe risque a déjà des règles dans les documents de politique, les frameworks de gouvernance modèles et les runbooks de conformité. Knowledge les extrait automatiquement :',
    extractCmd: `> "Extrais les règles depuis ./risk-policies et ./model-docs pour le scope Model Governance"`,
    extractOutput: `Scanning ./risk-policies, ./model-docs...
  > 6 candidats invariant  (ex. "No model deployed without validation committee sign-off")
  > 9 candidats rule       (ex. "All model changes require back-testing on 24 months")
  > 4 candidats decision   (ex. "Switched credit scoring from logistic regression to gradient boosting")
  > 2 doublons ignores`,
    extractClose:
      'Vous reviewez dans le dashboard et approuvez ce qui est correct. En quelques minutes, des documents de politique dispersés deviennent un registre structuré.',
    extractLink: 'Voir comment fonctionne l\'extraction →',
    extractHref: '/product/how-it-works#start-from-what-you-have',

    modelRiskTitle: 'Contrôles des risques modèles',
    modelRiskDesc:
      'Codifiez les exigences de gouvernance modèles comme invariants et rules :',
    modelRiskCode: `Invariant: "Aucun modèle déployé en production sans validation du comité"
  requires_approval: true
  min_role_to_decide: tech-lead

Rule (mandatory): "Tout changement de modèle nécessite un back-testing sur 24 mois"
  severity: MANDATORY

Rule (advisory): "Privilégier les méthodes d'ensemble pour le scoring crédit"
  severity: ADVISORY`,
    modelRiskClose:
      'Quand un agent IA ou un ingénieur tente de déployer un modèle, Knowledge signale les violations avant le déploiement.',

    traceTitle: 'Chaînes de décisions traçables',
    traceDesc: 'Chaque décision est liée à ses conséquences :',
    traceCode: `Decision: "Passer le scoring crédit de la régression logistique au gradient boosting"
  Context: "Taux de faux positifs de 18% inacceptable pour le prêt PME"
  Reasoning: "Le gradient boosting réduit le FPR à 7% sur les données de back-test"
  Author: risk-analytics-team
    |
    creates > Rule: "Les modèles gradient boosting nécessitent une recalibration trimestrielle"
    creates > Invariant: "Pas de changement de score crédit > 50 points sans revue humaine"
    supersedes > Decision: "Utiliser la régression logistique pour tout le scoring" (2019)`,
    traceClose:
      'Quand un auditeur demande "pourquoi avez-vous changé le modèle de scoring ?", la réponse est à une requête près — pas une semaine d\'investigation.',

    agentTitle: 'Donner le contexte risque aux agents IA',
    agentDesc:
      'Quand un agent IA travaille sur du code lié au risque, il interroge Knowledge d\'abord :',
    agentCode: `L'agent démarre une tâche dans le namespace credit-risk
Agent > knowledge_resolve(scope="Model Governance", namespace="credit-risk")
  > Retourne 11 entrées applicables : 3 invariants, 4 decisions, 3 rules, 1 override

Agent > knowledge_check(scope="Model Governance", action="Déployer le modèle crédit v2.3")
  > Conflit : inv-8a3f "Aucun modèle déployé sans validation du comité"
  > requires_approval: true

Agent > knowledge_request_approval(
    trigger_id="inv-8a3f",
    intended_action="Déployer le modèle crédit v2.3",
    justification="Back-testé sur 36 mois, FPR amélioré de 60%"
  )
  > En attente, tech-lead requis

Le comité review dans le dashboard > Approuvé
  > Override auto-créé avec conditions
  > L'agent procède, référence enregistrée`,
    agentClose:
      'La chaîne complète — vérification, conflit, demande, approbation, override, trace de déploiement — est une seule timeline connectée.',

    auditTitle: 'Piste d\'audit réglementaire',
    auditDesc: 'Knowledge produit des artefacts prêts pour l\'audit :',
    auditHeaders: ['Ce que demandent les régulateurs', 'Ce que fournit Knowledge'],
    auditRows: [
      ['"Comment sont gouvernées les décisions IA ?"', 'Registre d\'invariants et rules avec historique de versions'],
      ['"Qui a approuvé ce changement de modèle ?"', 'Chaîne d\'approbation : demande > décision > override'],
      ['"Ce changement a-t-il été revu par un humain ?"', 'Workflow d\'approbation avec vérification de rôle'],
      ['"Quelles contraintes s\'appliquaient au moment du déploiement ?"', 'Hash normatif + traces de références'],
      ['"Pouvez-vous prouver que l\'agent a vérifié avant d\'agir ?"', 'Référence avec statut (suivi/divergé) et contexte'],
    ],

    ciTitle: 'Checks de conformité CI',
    ciDesc:
      'Le Verifier s\'exécute dans votre pipeline et vérifie que les changements de code adressent les contraintes de risque applicables :',
    ciCode: `# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml`,
    ciClose:
      'L\'agent de coding génère un Implementation Report sous forme de `.knowledge/report.md`, commité avec le code. Le Verifier valide les citations, overrides et entrées mandatory. Avec l\'analyse sémantique activée, il évalue le diff réel du code contre chaque contrainte.',
    ciLink: 'Voir le flux complet du Verifier →',
    ciHref: '/product/how-it-works#cicd-verifier',

    workflowTitle: 'Workflow au quotidien',
    workflowGroups: [
      {
        title: 'Pour les analystes risque',
        items: [
          'Avant la modélisation : l\'agent IA interroge Knowledge via knowledge_resolve et knowledge_check',
          'Pendant le développement : l\'agent suit les rules de gouvernance modèles et enregistre les décisions',
          'Avant le déploiement : l\'agent génère .knowledge/report.md citant les contraintes applicables',
          'Le CI tourne : le Verifier vérifie la conformité (citations + analyse sémantique + external checkers)',
        ],
      },
      {
        title: 'Pour les responsables risque',
        items: [
          'Définir les invariants : codifier les contrôles de risque non-négociables (gates de déploiement modèles, limites d\'exposition)',
          'Définir les rules : standards de gouvernance modèles (cadence de validation, exigences de back-testing)',
          'Attacher des external checkers : scripts ou webhooks pour vérification dynamique (limites de position, checks d\'exposition)',
          'Reviewer les approbations : approuver ou rejeter les demandes de déploiement modèles',
          'Exporter les preuves : générer des rapports d\'audit structurés pour les régulateurs',
        ],
      },
      {
        title: 'Pour les auditeurs',
        items: [
          'Parcourir les scopes : voir Model Governance, Credit Risk, Market Risk, AML d\'un coup d\'œil',
          'Lire les invariants : comprendre quelles contraintes gouvernent les décisions automatisées',
          'Tracer les décisions : suivre la chaîne du changement d\'appétit au risque jusqu\'au déploiement',
          'Vérifier la conformité : consulter les traces de références prouvant que les contraintes ont été vérifiées',
        ],
      },
    ],

    useCasesTitle: 'Cas d\'usage en finance',
    useCases: [
      {
        title: 'Risque crédit',
        items: [
          'Invariants pour les limites de décisions crédit (exposition max, documentation minimale)',
          'Rules pour la cadence et la méthodologie de validation modèles',
          'Gates d\'approbation pour les changements de limites crédit au-dessus du seuil',
          'Historique de décisions liant les changements d\'appétit au risque aux mises à jour modèles',
        ],
      },
      {
        title: 'Trading et risque de marché',
        items: [
          'Invariants pour les limites de position et exigences de couverture',
          'Rules pour les checks de conformité pré-trade',
          'Traces de références prouvant que les limites de risque ont été vérifiées avant exécution',
          'Mécanisme d\'override pour situations d\'urgence avec piste d\'audit complète',
        ],
      },
      {
        title: 'Anti-blanchiment (AML)',
        items: [
          'Invariants pour les exigences de screening (aucune transaction sans vérification sanctions)',
          'Rules pour les seuils de due diligence renforcée',
          'Enregistrements de décisions pour les changements de notation de risque avec justification',
          'Timeline d\'événements pour le reporting réglementaire',
        ],
      },
      {
        title: 'Gouvernance IA (EU AI Act)',
        items: [
          'Mapper les systèmes IA aux scopes (un scope par système à haut risque)',
          'Codifier les exigences de supervision humaine de l\'Article 14 comme invariants avec approbation',
          'Exporter les logs d\'événements et traces de références pour la conformité Article 12',
          'Générer des rapports de conformité par déploiement via le CI Verifier',
        ],
      },
    ],

    replacesTitle: 'Ce que ça remplace',
    replacesHeaders: ['Avant', 'Avec Knowledge'],
    replacesRows: [
      ['Règles de gouvernance modèles dans des PDFs de politique', 'Invariants et rules structurés que les agents interrogent en temps réel'],
      ['Décisions risque dans des PVs de comité', 'Décisions immuables avec contexte, raisonnement et liens'],
      ['Preuves d\'audit assemblées manuellement en plusieurs jours', 'Export structuré depuis un registre vivant'],
      ['Fils d\'emails pour les approbations de déploiement modèles', 'Workflows d\'approbation avec vérification de rôle et suivi des overrides'],
      ['Tableurs de suivi de conformité', 'Verifier automatisé en CI avec analyse sémantique'],
      ['"Demande à l\'équipe risque, ils sauront"', 'Registre recherchable avec chaînes de décisions complètes'],
    ],

    getStartedTitle: 'Commencer',
    getStartedSteps: [
      { text: 'Créer votre compte', href: '/docs/getting-started', isLink: true },
      { text: 'Créer des scopes pour vos domaines de risque (Model Governance, Credit Risk, Market Risk, AML)', isLink: false },
      { text: 'Lancer knowledge extract --scope "Model Governance" --source ./risk-policies --source ./model-docs pour peupler depuis les docs existantes', isLink: false },
      { text: 'Reviewer les brouillons extraits et approuver ceux qui sont corrects', isLink: false },
      { text: 'Connecter vos agents IA via MCP', isLink: false },
      { text: 'Ajouter le Verifier à votre pipeline CI', isLink: false },
    ],
    getStartedLinks: [
      { label: 'Commencer →', href: '/docs/getting-started', primary: true },
      { label: 'Conformité AI Act →', href: '/compliance/ai-act', primary: false },
      { label: 'Tarifs →', href: '/pricing', primary: false },
    ],
  },
}

export default function FinancePage() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{t.badge}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-6">{t.heroTitle}</h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl">{t.heroIntro}</p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">{t.challengeTitle}</p>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed max-w-2xl">{t.challengeIntro}</p>
          <ul className="space-y-3">
            {t.challengeItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">{t.challengeClose}</p>
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
              <div className="max-w-2xl space-y-3">
                <CodeBlock code={t.extractCmd} />
                <CodeBlock code={t.extractOutput} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">
                {t.extractClose}{' '}
                <Link href={t.extractHref} className="text-[var(--accent)] hover:underline">{t.extractLink}</Link>
              </p>
            </div>

            {/* 2. Model Risk Controls */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.modelRiskTitle}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.modelRiskDesc}</p>
              <div className="max-w-2xl">
                <CodeBlock code={t.modelRiskCode} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">{t.modelRiskClose}</p>
            </div>

            {/* 3. Traceable Decision Chains */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.traceTitle}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.traceDesc}</p>
              <div className="max-w-2xl">
                <CodeBlock code={t.traceCode} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">{t.traceClose}</p>
            </div>

            {/* 4. Give AI Agents Your Risk Context */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.agentTitle}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.agentDesc}</p>
              <div className="max-w-2xl">
                <CodeBlock code={t.agentCode} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">{t.agentClose}</p>
            </div>

            {/* 5. Regulatory Audit Trail */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.auditTitle}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.auditDesc}</p>
              <div className="overflow-x-auto max-w-2xl">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      {t.auditHeaders.map((h) => (
                        <th key={h} className="text-left py-2 pr-6 font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.auditRows.map((row, i) => (
                      <tr key={i} className="border-b border-[var(--border-light)]">
                        <td className="py-3 pr-6 text-[var(--text-muted)] leading-relaxed font-mono text-xs">{row[0]}</td>
                        <td className="py-3 pr-6 text-[var(--text-secondary)] leading-relaxed">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6. CI Compliance Checks */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.ciTitle}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.ciDesc}</p>
              <div className="max-w-2xl">
                <CodeBlock code={t.ciCode} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">
                {t.ciClose}{' '}
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

      {/* Use Cases in Finance */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.useCasesTitle}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {t.useCases.map((area) => (
              <div key={area.title} className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <h3 className="font-semibold text-[var(--text-primary)] mb-4">{area.title}</h3>
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
                <span className="w-6 h-6 rounded-full border border-[var(--accent)] text-[var(--accent)] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <span className="text-[var(--text-secondary)] leading-relaxed pt-0.5">
                  {step.isLink && step.href ? (
                    <Link href={step.href} className="text-[var(--accent)] hover:underline">{step.text}</Link>
                  ) : (
                    step.text
                  )}
                </span>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-4 justify-center">
            {t.getStartedLinks.map((link) =>
              link.primary ? (
                <Link key={link.href} href={link.href} className="px-7 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors">
                  {link.label}
                </Link>
              ) : (
                <Link key={link.href} href={link.href} className="px-7 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
