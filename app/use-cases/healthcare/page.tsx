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
    hero: {
      title: 'Knowledge for Healthcare',
      intro:
        'Healthcare organizations deploying AI systems need rigorous documentation, human oversight, and audit trails. Knowledge provides the infrastructure to govern clinical AI, enforce protocol constraints, and meet regulatory requirements.',
    },
    challenge: {
      heading: 'The Challenge',
      items: [
        'Clinical protocols and AI governance rules live in policy documents that no system reads',
        'AI-assisted diagnostic or treatment tools operate without structured awareness of clinical constraints',
        'Regulatory submissions require proof that AI systems were governed throughout their lifecycle',
        'Audit trails for AI decisions are manual and incomplete',
        'Changes to clinical protocols must cascade to all systems that depend on them',
      ],
    },
    howItHelps: {
      heading: 'How Knowledge Helps',
      sections: [
        {
          title: 'Extract Rules from Clinical Protocols',
          description:
            'Your clinical governance team already has rules in protocol documents, standard operating procedures, and compliance runbooks. Knowledge extracts them automatically:',
          code: `> "Extract rules from ./protocols and ./sops for the Clinical AI scope"`,
          output: `Scanning ./protocols, ./sops...
  > 5 invariant candidates  (e.g., "No AI diagnostic without clinician review")
  > 7 rule candidates       (e.g., "AI triage scores must be recalibrated quarterly")
  > 3 decision candidates   (e.g., "Use ensemble model for sepsis risk prediction")
  > 1 duplicate skipped`,
          afterText: 'You review in the dashboard and approve what\'s correct. Patient safety constraints become invariants, governance standards become rules.',
          link: { href: '/product/how-it-works#start-from-what-you-have', label: 'See how extraction works →' },
        },
        {
          title: 'Codify Clinical Protocol Constraints',
          description: 'Turn clinical requirements into machine-enforceable invariants:',
          code: `Invariant: "No AI-generated diagnostic suggestion without clinician review"
  Rationale: "Patient safety - all AI outputs in clinical context are advisory"
  requires_approval: false  (hard block, no override path)

Invariant: "Drug interaction alerts cannot be suppressed by AI agents"
  Rationale: "Regulatory requirement - safety alerts must always reach clinician"

Rule: "AI-assisted triage scores must be recalibrated quarterly"
  Severity: MANDATORY`,
          afterText: 'When an AI agent processes clinical data, Knowledge enforces these constraints in real time.',
        },
        {
          title: 'Document Decision Rationale',
          description: 'Record clinical AI decisions with full traceability:',
          code: `Decision: "Use ensemble model for sepsis risk prediction"
  Context: "Single-model approach had 12% false negative rate"
  Reasoning: "Ensemble reduces FNR to 4% on validation cohort (n=12,400)"
  Author: clinical-ai-team
  Tags: [clinical, sepsis, model-selection]
    |
    creates > Rule: "Sepsis model requires validation on current quarter data"
    creates > Invariant: "No sepsis prediction without vital signs within 4 hours"`,
          afterText: 'Six months later, when someone asks "why did we switch the sepsis model?", the answer is one search away.',
        },
        {
          title: 'Give AI Agents Your Clinical Context',
          description: 'When an AI agent works in a clinical environment, it queries Knowledge first:',
          code: `Agent starts a task in the diagnostics namespace
Agent > knowledge_resolve(scope="Clinical AI", namespace="diagnostics")
  > Returns 9 applicable entries: 3 invariants, 3 decisions, 2 rules, 1 override

Agent > knowledge_check(scope="Clinical AI", action="Generate radiology analysis")
  > Constraint: inv-4a2b "All AI diagnostic outputs require clinician sign-off"
  > Agent generates analysis but flags for review

Clinician reviews and approves
  > Reference recorded: "Followed inv-4a2b in case CAS-2024-892"`,
          afterText: 'The agent does not bypass clinical oversight. It reads the constraints from the same registry your governance team maintains.',
        },
        {
          title: 'CI Compliance Checks',
          description: 'The Verifier runs in your pipeline and checks that code changes address applicable clinical constraints:',
          code: `# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml`,
          afterText: 'The coding agent generates an Implementation Report as .knowledge/report.md, committed alongside the code. The Verifier validates citations, overrides, and mandatory entries. With semantic analysis enabled, it evaluates the actual code diff against each constraint.',
          link: { href: '/product/how-it-works#cicd-verifier', label: 'See the full Verifier flow →' },
        },
      ],
    },
    regulatoryTable: {
      heading: 'Regulatory Audit Readiness',
      cols: ['Regulatory Need', 'Knowledge Feature'],
      rows: [
        ['FDA 21 CFR Part 11 (electronic records)', 'Immutable decisions, timestamped events, audit trail'],
        ['EU MDR / AI Act', 'Invariants as risk controls, approval workflows, compliance reports'],
        ['HIPAA audit trail', 'Event log with actor attribution, reference traces'],
        ['Clinical trial governance', 'Decision history, protocol change tracking, version control on rules'],
      ],
    },
    dayToDay: {
      heading: 'Day-to-Day Workflow',
      groups: [
        {
          title: 'For Clinical AI Engineers',
          items: [
            'Before coding: AI agent queries Knowledge via knowledge_resolve and knowledge_check',
            'During development: agent follows clinical governance rules and records decisions',
            'In the commit: agent generates .knowledge/report.md citing applicable constraints',
            'CI runs: Verifier checks compliance (citations + semantic analysis + external checkers)',
          ],
        },
        {
          title: 'For Clinical Governance Officers',
          items: [
            'Define invariants: codify patient safety constraints (clinician review, alert thresholds)',
            'Set rules: define AI governance standards (validation cadence, recalibration requirements)',
            'Attach external checkers: add scripts or webhooks for dynamic verification (model performance monitoring, data freshness)',
            'Review approvals: approve or reject AI deployment requests',
            'Export evidence: generate structured audit reports for regulatory submissions',
          ],
        },
        {
          title: 'For Auditors and Regulators',
          items: [
            'Browse scopes: see Clinical AI, Health IT, Data Governance at a glance',
            'Read invariants: understand what constraints govern AI-assisted decisions',
            'Trace decisions: follow the chain from clinical need to model selection to deployment',
            'Verify compliance: check reference traces proving patient safety constraints were enforced',
          ],
        },
      ],
    },
    useCases: {
      heading: 'Use Cases in Healthcare',
      areas: [
        {
          title: 'Clinical AI Governance',
          items: [
            'Invariants for patient safety constraints (human review, alert thresholds)',
            'Rules for model validation and monitoring cadence',
            'Approval gates for deploying AI models to clinical environments',
            'Decision history for model selection with clinical justification',
          ],
        },
        {
          title: 'Drug Development',
          items: [
            'Decisions documenting trial protocol choices with regulatory context',
            'Rules for data handling and analysis methodology',
            'Invariants for safety reporting requirements',
            'Event timeline for GCP (Good Clinical Practice) audit trail',
          ],
        },
        {
          title: 'Health IT Operations',
          items: [
            'Deployment rules for clinical systems (change windows, rollback requirements)',
            'Invariants for data integrity (no modification of clinical records by AI)',
            'Rules for system access and authentication standards',
            'CI Verifier for health IT code changes',
          ],
        },
        {
          title: 'Interoperability and Data Governance',
          items: [
            'Decisions for data standard adoption (HL7 FHIR, DICOM)',
            'Rules for data quality requirements in AI training sets',
            'Invariants for consent-based data access',
            'Reference traces proving compliance per data use',
          ],
        },
      ],
    },
    replaces: {
      heading: 'What It Replaces',
      cols: ['Before', 'With Knowledge'],
      rows: [
        ['Clinical protocols in PDF documents nobody queries', 'Structured invariants enforced by AI agents in real time'],
        ['AI governance decisions in committee minutes', 'Immutable decisions with context, reasoning, and traceability'],
        ['Manual audit evidence for regulatory submissions', 'Structured export from a live registry'],
        ['Email threads for AI deployment approvals', 'Approval workflows with role verification and override tracking'],
        ['Spreadsheets tracking clinical AI compliance', 'Automated Verifier in CI with semantic analysis'],
        ['"Ask Dr. Chen, she led that initiative"', 'Searchable registry with full decision chains'],
      ],
    },
    getStarted: {
      heading: 'Get Started',
      steps: [
        { text: 'Create your account', href: '/docs/getting-started' },
        { text: 'Create scopes for your domains (Clinical AI, Health IT, Data Governance)' },
        { text: 'Run knowledge extract --scope "Clinical AI" --source ./protocols --source ./sops to populate from existing docs' },
        { text: 'Review extracted drafts — approve patient safety constraints as invariants' },
        { text: 'Connect AI agents via MCP for real-time constraint checking' },
        { text: 'Add the Verifier to your CI pipeline' },
      ],
      links: [
        { href: '/docs/getting-started', label: 'Getting Started →', primary: true },
        { href: '/compliance/ai-act', label: 'AI Act Compliance →', primary: false },
      ],
    },
  },
  fr: {
    eyebrow: 'Cas d\'usage',
    hero: {
      title: 'Knowledge pour la Sante',
      intro:
        'Les organisations de sante qui deploient des systemes IA ont besoin d\'une documentation rigoureuse, d\'une supervision humaine et de pistes d\'audit. Knowledge fournit l\'infrastructure pour gouverner l\'IA clinique, appliquer les contraintes de protocole et repondre aux exigences reglementaires.',
    },
    challenge: {
      heading: 'Le defi',
      items: [
        'Les protocoles cliniques et regles de gouvernance IA vivent dans des documents de politique que aucun systeme ne lit',
        'Les outils de diagnostic ou traitement assistes par IA operent sans connaissance structuree des contraintes cliniques',
        'Les soumissions reglementaires exigent la preuve que les systemes IA ont ete gouvernes tout au long de leur cycle de vie',
        'Les pistes d\'audit pour les decisions IA sont manuelles et incompletes',
        'Les changements de protocoles cliniques doivent se propager a tous les systemes qui en dependent',
      ],
    },
    howItHelps: {
      heading: 'Comment Knowledge aide',
      sections: [
        {
          title: 'Extraire les regles des protocoles cliniques',
          description:
            'Votre équipe de gouvernance clinique a déjà des règles dans les documents de protocole, les procédures opérationnelles standard et les runbooks de conformité. Knowledge les extrait automatiquement :',
          code: `> "Extrais les règles depuis ./protocols et ./sops pour le scope Clinical AI"`,
          output: `Scanning ./protocols, ./sops...
  > 5 candidats invariant  (ex. "No AI diagnostic without clinician review")
  > 7 candidats rule       (ex. "AI triage scores must be recalibrated quarterly")
  > 3 candidats decision   (ex. "Use ensemble model for sepsis risk prediction")
  > 1 doublon ignore`,
          afterText: 'Vous reviewez dans le dashboard et approuvez ce qui est correct. Les contraintes de securite patient deviennent des invariants, les standards de gouvernance deviennent des rules.',
          link: { href: '/product/how-it-works#start-from-what-you-have', label: 'Voir comment fonctionne l\'extraction →' },
        },
        {
          title: 'Codifier les contraintes de protocole clinique',
          description: 'Transformez les exigences cliniques en invariants applicables par les machines :',
          code: `Invariant: "Aucune suggestion diagnostique generee par IA sans revue du clinicien"
  Rationale: "Securite patient - tous les outputs IA en contexte clinique sont consultatifs"
  requires_approval: false  (blocage dur, pas de chemin d'override)

Invariant: "Les alertes d'interaction medicamenteuse ne peuvent pas etre supprimees par les agents IA"
  Rationale: "Exigence reglementaire - les alertes de securite doivent toujours atteindre le clinicien"

Rule: "Les scores de triage assistes par IA doivent etre recalibres trimestriellement"
  Severity: MANDATORY`,
          afterText: 'Quand un agent IA traite des donnees cliniques, Knowledge applique ces contraintes en temps reel.',
        },
        {
          title: 'Documenter le raisonnement des decisions',
          description: 'Enregistrez les decisions IA cliniques avec une tracabilite complete :',
          code: `Decision: "Utiliser un modele d'ensemble pour la prediction du risque de sepsis"
  Context: "L'approche modele unique avait un taux de faux negatifs de 12%"
  Reasoning: "L'ensemble reduit le FNR a 4% sur la cohorte de validation (n=12 400)"
  Author: clinical-ai-team
  Tags: [clinical, sepsis, model-selection]
    |
    creates > Rule: "Le modele sepsis necessite une validation sur les donnees du trimestre courant"
    creates > Invariant: "Pas de prediction sepsis sans signes vitaux dans les 4 heures"`,
          afterText: 'Six mois plus tard, quand quelqu\'un demande "pourquoi a-t-on change le modele sepsis ?", la reponse est a une recherche pres.',
        },
        {
          title: 'Donner le contexte clinique aux agents IA',
          description: 'Quand un agent IA travaille en environnement clinique, il interroge Knowledge d\'abord :',
          code: `L'agent demarre une tache dans le namespace diagnostics
Agent > knowledge_resolve(scope="Clinical AI", namespace="diagnostics")
  > Retourne 9 entrees applicables : 3 invariants, 3 decisions, 2 rules, 1 override

Agent > knowledge_check(scope="Clinical AI", action="Generer une analyse radiologique")
  > Contrainte : inv-4a2b "Tous les outputs diagnostiques IA necessitent la validation du clinicien"
  > L'agent genere l'analyse mais la signale pour revue

Le clinicien review et approuve
  > Reference enregistree : "Suivi inv-4a2b dans le cas CAS-2024-892"`,
          afterText: 'L\'agent ne contourne pas la supervision clinique. Il lit les contraintes depuis le meme registre que votre equipe de gouvernance maintient.',
        },
        {
          title: 'Checks de conformite CI',
          description: 'Le Verifier s\'execute dans votre pipeline et verifie que les changements de code adressent les contraintes cliniques applicables :',
          code: `# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml`,
          afterText: 'L\'agent de coding genere un Implementation Report sous forme de .knowledge/report.md, committe avec le code. Le Verifier valide les citations, overrides et entrees mandatory. Avec l\'analyse semantique activee, il evalue le diff reel du code contre chaque contrainte.',
          link: { href: '/product/how-it-works#cicd-verifier', label: 'Voir le flux complet du Verifier →' },
        },
      ],
    },
    regulatoryTable: {
      heading: 'Pret pour l\'audit reglementaire',
      cols: ['Besoin reglementaire', 'Fonctionnalite Knowledge'],
      rows: [
        ['FDA 21 CFR Part 11 (enregistrements electroniques)', 'Decisions immuables, evenements horodates, piste d\'audit'],
        ['EU MDR / AI Act', 'Invariants comme controles de risque, workflows d\'approbation, rapports de conformite'],
        ['Piste d\'audit HIPAA', 'Log d\'evenements avec attribution d\'acteur, traces de references'],
        ['Gouvernance des essais cliniques', 'Historique de decisions, suivi des changements de protocole, versionning des rules'],
      ],
    },
    dayToDay: {
      heading: 'Workflow au quotidien',
      groups: [
        {
          title: 'Pour les ingenieurs IA clinique',
          items: [
            'Avant de coder : l\'agent IA interroge Knowledge via knowledge_resolve et knowledge_check',
            'Pendant le developpement : l\'agent suit les rules de gouvernance clinique et enregistre les decisions',
            'Dans le commit : l\'agent genere .knowledge/report.md citant les contraintes applicables',
            'Le CI tourne : le Verifier verifie la conformite (citations + analyse semantique + external checkers)',
          ],
        },
        {
          title: 'Pour les responsables de gouvernance clinique',
          items: [
            'Definir les invariants : codifier les contraintes de securite patient (revue clinicien, seuils d\'alerte)',
            'Definir les rules : standards de gouvernance IA (cadence de validation, exigences de recalibration)',
            'Attacher des external checkers : scripts ou webhooks pour verification dynamique (monitoring de performance modele, fraicheur des donnees)',
            'Reviewer les approbations : approuver ou rejeter les demandes de deploiement IA',
            'Exporter les preuves : generer des rapports d\'audit structures pour les soumissions reglementaires',
          ],
        },
        {
          title: 'Pour les auditeurs et regulateurs',
          items: [
            'Parcourir les scopes : voir Clinical AI, Health IT, Data Governance d\'un coup d\'oeil',
            'Lire les invariants : comprendre quelles contraintes gouvernent les decisions assistees par IA',
            'Tracer les decisions : suivre la chaine du besoin clinique a la selection de modele au deploiement',
            'Verifier la conformite : consulter les traces de references prouvant que les contraintes de securite patient ont ete appliquees',
          ],
        },
      ],
    },
    useCases: {
      heading: 'Cas d\'usage en sante',
      areas: [
        {
          title: 'Gouvernance IA clinique',
          items: [
            'Invariants pour les contraintes de securite patient (revue humaine, seuils d\'alerte)',
            'Rules pour la cadence de validation et monitoring des modeles',
            'Gates d\'approbation pour le deploiement de modeles IA en environnement clinique',
            'Historique de decisions pour la selection de modeles avec justification clinique',
          ],
        },
        {
          title: 'Developpement de medicaments',
          items: [
            'Decisions documentant les choix de protocole d\'essai avec contexte reglementaire',
            'Rules pour la gestion des donnees et la methodologie d\'analyse',
            'Invariants pour les exigences de reporting de securite',
            'Timeline d\'evenements pour la piste d\'audit GCP (Good Clinical Practice)',
          ],
        },
        {
          title: 'Operations IT sante',
          items: [
            'Regles de deploiement pour les systemes cliniques (fenetres de changement, exigences de rollback)',
            'Invariants pour l\'integrite des donnees (pas de modification des dossiers cliniques par l\'IA)',
            'Rules pour les standards d\'acces et d\'authentification des systemes',
            'CI Verifier pour les changements de code IT sante',
          ],
        },
        {
          title: 'Interoperabilite et gouvernance des donnees',
          items: [
            'Decisions pour l\'adoption de standards de donnees (HL7 FHIR, DICOM)',
            'Rules pour les exigences de qualite des donnees dans les jeux d\'entrainement IA',
            'Invariants pour l\'acces aux donnees base sur le consentement',
            'Traces de references prouvant la conformite par utilisation de donnees',
          ],
        },
      ],
    },
    replaces: {
      heading: 'Ce que ca remplace',
      cols: ['Avant', 'Avec Knowledge'],
      rows: [
        ['Protocoles cliniques dans des PDF que personne n\'interroge', 'Invariants structures appliques par les agents IA en temps reel'],
        ['Decisions de gouvernance IA dans des PVs de comite', 'Decisions immuables avec contexte, raisonnement et tracabilite'],
        ['Preuves d\'audit manuelles pour les soumissions reglementaires', 'Export structure depuis un registre vivant'],
        ['Fils d\'emails pour les approbations de deploiement IA', 'Workflows d\'approbation avec verification de role et suivi des overrides'],
        ['Tableurs de suivi de conformite IA clinique', 'Verifier automatise en CI avec analyse semantique'],
        ['"Demandez au Dr. Chen, c\'est elle qui a mene cette initiative"', 'Registre recherchable avec chaines de decisions completes'],
      ],
    },
    getStarted: {
      heading: 'Commencer',
      steps: [
        { text: 'Creer votre compte', href: '/docs/getting-started' },
        { text: 'Creer des scopes pour vos domaines (Clinical AI, Health IT, Data Governance)' },
        { text: 'Lancer knowledge extract --scope "Clinical AI" --source ./protocols --source ./sops pour peupler depuis les docs existantes' },
        { text: 'Reviewer les brouillons extraits — approuver les contraintes de securite patient comme invariants' },
        { text: 'Connecter les agents IA via MCP pour le controle de contraintes en temps reel' },
        { text: 'Ajouter le Verifier a votre pipeline CI' },
      ],
      links: [
        { href: '/docs/getting-started', label: 'Commencer →', primary: true },
        { href: '/compliance/ai-act', label: 'Conformite AI Act →', primary: false },
      ],
    },
  },
}

export default function HealthcarePage() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{t.eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-6">{t.hero.title}</h1>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl">{t.hero.intro}</p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">{t.challenge.heading}</p>
          <ul className="space-y-3">
            {t.challenge.items.map((item, i) => (
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
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-10">{t.howItHelps.heading}</p>
          <div className="space-y-12">
            {t.howItHelps.sections.map((section, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{section.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{section.description}</p>
                <div className="max-w-2xl space-y-3">
                  <CodeBlock code={section.code} />
                  {'output' in section && section.output && <CodeBlock code={section.output} />}
                </div>
                {section.afterText && (
                  <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">
                    {section.afterText}
                    {'link' in section && section.link && (
                      <>
                        {' '}
                        <Link href={section.link.href} className="text-[var(--accent)] hover:underline">
                          {section.link.label}
                        </Link>
                      </>
                    )}
                  </p>
                )}
              </div>
            ))}

            {/* Regulatory Audit Readiness table */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-4">{t.regulatoryTable.heading}</h3>
              <div className="overflow-x-auto max-w-2xl">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      {t.regulatoryTable.cols.map((col) => (
                        <th key={col} className="text-left py-2 pr-6 font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.regulatoryTable.rows.map((row, i) => (
                      <tr key={i} className="border-b border-[var(--border-light)]">
                        <td className="py-3 pr-6 text-[var(--accent)] font-mono text-xs leading-relaxed">{row[0]}</td>
                        <td className="py-3 pr-6 text-[var(--text-secondary)] leading-relaxed">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day-to-Day Workflow */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.dayToDay.heading}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.dayToDay.groups.map((group) => (
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

      {/* Use Cases in Healthcare */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.useCases.heading}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {t.useCases.areas.map((area) => (
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
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">{t.replaces.heading}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  {t.replaces.cols.map((col) => (
                    <th key={col} className="text-left py-2 pr-6 font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.replaces.rows.map((row, i) => (
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
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-5">{t.getStarted.heading}</p>
          <ol className="space-y-3 text-left mb-10">
            {t.getStarted.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border border-[var(--accent)] text-[var(--accent)] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-[var(--text-secondary)] leading-relaxed pt-0.5">
                  {'href' in step && step.href ? (
                    <Link href={step.href} className="text-[var(--accent)] hover:underline">
                      {step.text}
                    </Link>
                  ) : (
                    step.text
                  )}
                </span>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-4 justify-center">
            {t.getStarted.links.map((link) =>
              link.primary ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-7 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-7 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
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
