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
    tag: 'Use Cases',
    h1: 'Knowledge for Cybersecurity',
    subtitle: 'Give every agent your security rules — before it touches the infrastructure.',
    intro: 'AI agents are operating on your infrastructure: scanning vulnerabilities, remediating incidents, generating code, deploying services. They act fast - but they don\'t know your security policies, your pentest boundaries, or your incident response playbooks. Knowledge gives your security team a structured registry where invariants, rules, and decisions are captured once and enforced everywhere - by every agent, every pipeline, every time.',

    problemTitle: 'The Problem',
    problemIntro: 'Your security rules exist. They\'re just not where agents can find them:',
    problemItems: [
      'ISO 27001 controls in a PDF no one opens',
      'Incident response playbooks in Confluence, last updated 18 months ago',
      'Pentest boundaries agreed in a Slack thread',
      'Post-mortem decisions buried in Jira tickets',
      'Code security rules scattered across READMEs and PR comments',
    ],
    problemOutro: 'When an AI agent remediates a production incident at 3am, it doesn\'t check any of these. It acts on its training - not on your policies.',

    howTitle: 'How Knowledge Solves This',

    sub1Title: '1. Extract Rules from Existing Security Sources',
    sub1Desc: 'Your team already has security rules — they\'re just not structured. Knowledge extracts them automatically:',
    sub1Code: `> "Extract rules from ./policies and ./runbooks for the Security scope"`,
    sub1Output: `Scanning ./policies, ./runbooks, ./post-mortems...
  > 7 invariant candidates  (e.g., "Never log PII data")
  > 10 rule candidates       (e.g., "npm dependencies must be audited before merge")
  > 6 decision candidates    (e.g., "Ransomware playbook v3 approved 2024-11-12")
  > 3 duplicates skipped`,
    sub1SourcesLabel: 'Sources that produce the best results:',
    sub1Sources: [
      'Security policies and standards (ISO 27001, SOC 2 controls)',
      'Incident response runbooks and playbooks',
      'Resolved vulnerability tickets - every fix is an implicit rule',
      'PRs rejected for security reasons - a mine of undocumented invariants',
      'Slack #security - decisions made in real time during incidents',
    ],
    sub1Link: 'See how extraction works →',
    sub1LinkHref: '/product/how-it-works#start-from-what-you-have',

    sub2Title: '2. Security Guardrails for Coding Agents',
    sub2Desc: 'AI agents generating code must respect your security invariants:',
    sub2Code: `Invariant: "Never log PII data"
Invariant: "All external connections go through the API Gateway"
Invariant: "Secrets must never transit as plaintext in environment variables"
Rule: "npm dependencies must be audited before merge" (MANDATORY)
Rule: "SQL queries must use parameterized statements" (MANDATORY)`,
    sub2Outro: 'Agents query Knowledge before writing code. The CI Verifier flags violations if generated code conflicts with a declared constraint.',

    sub3Title: '3. Give AI Agents Your Security Context',
    sub3Desc: 'When an AI agent operates on your infrastructure, it queries Knowledge first:',
    sub3Code: `Agent starts an incident remediation task
Agent > knowledge_resolve(scope="Security", namespace="incident-response")
  > Returns 12 applicable entries: 4 invariants, 3 decisions, 4 rules, 1 override

Agent > knowledge_check(scope="Security", action="Restart nginx on prod-web-03")
  > Conflict: inv-7c3d "No remediation action on production without human approval"
  > requires_approval: true

Agent > knowledge_request_approval(
    trigger_id="inv-7c3d",
    intended_action="Restart nginx on prod-web-03",
    justification="Service unresponsive after memory leak, P1 incident INC-2026-0412"
  )
  > Pending, waiting for CISO

CISO approves in dashboard
  > Override auto-created with conditions
  > Agent proceeds, reference recorded`,
    sub3Outro: 'Every interaction is recorded. Every constraint check is traceable.',

    sub4Title: '4. Governed Incident Response',
    sub4Desc: 'An agent analyzing logs and proposing remediation actions must operate within strict boundaries:',
    sub4Code: `Invariant: "No remediation action on production without human approval"
Rule: "Isolate the host before any forensic analysis" (MANDATORY)
Rule: "Notify the CISO within 30 minutes for any P1 incident" (MANDATORY)
Decision: "Ransomware playbook v3 - approved 2024-11-12"`,
    sub4Outro: 'Every decision made during the incident is traced - who approved what, which rule was consulted, which exception was created and by whom. This is exactly what an auditor or regulator asks for after an incident.',

    sub5Title: '5. Controlled Pentest and Vulnerability Scanning',
    sub5Desc: 'Autonomous scanning agents must know the authorized perimeter:',
    sub5Code: `Invariant: "Scan perimeter limited to assets declared in the registry"
Invariant: "No active scanning on production during business hours"
Rule: "Any vulnerability with CVSS >= 9.0 escalated immediately to CISO" (MANDATORY)
Override: "Production scan authorized 2026-03-15 02:00-05:00 - approved by CISO"`,
    sub5Outro: 'The Override with TTL is particularly suited here - a temporary, traceable authorization that automatically expires. No risk of forgetting to revoke it.',

    sub6Title: '6. Agent-to-Agent Governance',
    sub6Desc: 'When multiple agents operate on the same infrastructure, Knowledge prevents conflicts:',
    sub6Code: `Agent A (scanner): "I want to scan 10.0.1.0/24"
  > knowledge_check: OK, within declared perimeter

Agent B (deployer): "I want to deploy service-x to production"
  > knowledge_check: BLOCKED - "No deployments during active scan window"

Agent C (remediator): "I want to restart nginx on prod-web-03"
  > knowledge_check: REQUIRES APPROVAL - "No remediation on prod without human approval"
  > knowledge_request_approval > CISO approves > proceed`,

    sub7Title: '7. CI Compliance Checks',
    sub7Desc: 'The Verifier runs in your pipeline and checks that code changes address applicable security constraints:',
    sub7Code: `# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml`,
    sub7Outro: 'The coding agent generates an Implementation Report as `.knowledge/report.md`, committed alongside the code. The Verifier validates citations, overrides, and mandatory entries. With semantic analysis enabled, it evaluates the actual code diff against each constraint.',
    sub7Link: 'See the full Verifier flow →',
    sub7LinkHref: '/product/how-it-works#cicd-verifier',

    complianceTitle: 'NIS2 and ISO 27001 Compliance',
    complianceIntro: 'Knowledge maps directly to the traceability requirements of NIS2 and ISO 27001:',
    complianceHeaders: ['Requirement', 'Knowledge Feature'],
    complianceRows: [
      ['Risk management measures (NIS2 Art. 21)', 'Invariants codify security controls, rules enforce operational measures'],
      ['Incident handling (NIS2 Art. 21.2b)', 'Decisions trace every action during incidents, approval workflows gate critical actions'],
      ['Supply chain security (NIS2 Art. 21.2d)', 'Rules enforce dependency auditing, CI Verifier flags non-compliant code'],
      ['Policies on cryptography (NIS2 Art. 21.2h)', 'Invariants enforce encryption standards, overrides trace exceptions'],
      ['Access control (ISO 27001 A.9)', 'Role-based access, approval workflows, override governance'],
      ['Operations security (ISO 27001 A.12)', 'Rules version operational procedures, event timeline traces changes'],
      ['Incident management (ISO 27001 A.16)', 'Full decision trail with timestamps, approvals, and references'],
      ['Compliance (ISO 27001 A.18)', 'Registry queryable at any point in time - audit-ready by design'],
    ],

    dayTitle: 'Day-to-Day Workflow',
    dayGroups: [
      {
        title: 'For the CISO',
        items: [
          'Define invariants: codify non-negotiable security controls (production access, data handling, encryption)',
          'Review extracted rules: approve, reject, or edit security rules surfaced by extraction',
          'Approve overrides: authorize temporary exceptions (pentest windows, emergency access)',
          'Monitor events: track agent compliance and security decisions in the event timeline',
          'Export evidence: produce compliance reports for auditors - structured data, not PDF screenshots',
        ],
      },
      {
        title: 'For the SecOps Team',
        items: [
          'Declare rules: set security standards as rules (dependency auditing, code scanning requirements)',
          'Attach external checkers: add scripts or webhooks for dynamic verification (vulnerability scan status, certificate expiry)',
          'Use the bot: post a security decision in #security, the bot detects and structures it',
          'Review CI reports: check Verifier reports on security-related PRs',
          'Create overrides: time-limited exceptions for maintenance and testing windows',
        ],
      },
      {
        title: 'For the Security Auditor',
        items: [
          'Browse scopes: see Security, Incident Response, Compliance at a glance',
          'Read invariants: understand what constraints govern agent actions on infrastructure',
          'Trace decisions: follow the chain from incident to remediation to approval',
          'Verify compliance: query the registry for all active constraints at any date',
        ],
      },
    ],

    replacesTitle: 'What It Replaces',
    replacesHeaders: ['Before', 'With Knowledge'],
    replacesRows: [
      ['Security policies in PDFs', 'Typed, searchable invariants and rules'],
      ['Playbooks in Confluence', 'Versioned rules with change history'],
      ['Pentest boundaries in Slack', 'Invariants with traceable overrides'],
      ['Post-incident "what happened?"', 'Structured decision trail with timestamps'],
      ['Manual compliance evidence gathering', 'Registry queryable at any point in time'],
      ['Agents acting without security context', 'Pre-flight constraint checking on every action'],
    ],

    getStartedTitle: 'Get Started',
    getStartedItems: [
      { text: 'Create your account', href: '/docs/getting-started' },
      { text: 'Create a Security scope', href: null },
      { text: 'Run knowledge extract --scope Security --source ./policies --source ./runbooks to populate from existing docs', href: null },
      { text: 'Review and approve the extracted rules in the dashboard', href: null },
      { text: 'Connect your AI agents via MCP', href: null },
      { text: 'Add the Verifier to your CI pipeline', href: null },
    ],
    ctaStart: 'Getting Started →',
    ctaStartHref: '/docs/getting-started',
    ctaCompliance: 'AI Act Compliance →',
    ctaComplianceHref: '/compliance/ai-act',
    ctaPricing: 'Pricing →',
    ctaPricingHref: '/pricing',
  },
  fr: {
    tag: 'Cas d\'usage',
    h1: 'Knowledge pour la Cybersecurite',
    subtitle: 'Donnez a chaque agent vos regles de securite — avant qu\'il touche a l\'infrastructure.',
    intro: 'Les agents IA operent sur votre infrastructure : scan de vulnerabilites, remediation d\'incidents, generation de code, deploiement de services. Ils agissent vite - mais ils ne connaissent pas vos politiques de securite, vos perimetres de pentest, ni vos playbooks de reponse aux incidents. Knowledge donne a votre equipe securite un registre structure ou les invariants, rules et decisions sont captures une fois et appliques partout - par chaque agent, chaque pipeline, a chaque fois.',

    problemTitle: 'Le probleme',
    problemIntro: 'Vos regles de securite existent. Elles ne sont simplement pas la ou les agents peuvent les trouver :',
    problemItems: [
      'Les controles ISO 27001 dans un PDF que personne n\'ouvre',
      'Les playbooks de reponse aux incidents dans Confluence, mis a jour il y a 18 mois',
      'Les perimetres de pentest convenus dans un thread Slack',
      'Les decisions post-mortem enterrees dans des tickets Jira',
      'Les regles de securite du code dispersees dans des READMEs et commentaires de PR',
    ],
    problemOutro: 'Quand un agent IA remedie un incident de production a 3h du matin, il ne consulte aucun de ces documents. Il agit selon son entrainement - pas selon vos politiques.',

    howTitle: 'Comment Knowledge resout ce probleme',

    sub1Title: '1. Extraire les regles des sources de securite existantes',
    sub1Desc: 'Votre équipe a déjà des règles de sécurité — elles ne sont simplement pas structurées. Knowledge les extrait automatiquement :',
    sub1Code: `> "Extrais les règles depuis ./policies et ./runbooks pour le scope Security"`,
    sub1Output: `Scanning ./policies, ./runbooks, ./post-mortems...
  > 7 candidats invariant  (ex. "Never log PII data")
  > 10 candidats rule       (ex. "npm dependencies must be audited before merge")
  > 6 candidats decision    (ex. "Ransomware playbook v3 approved 2024-11-12")
  > 3 doublons ignores`,
    sub1SourcesLabel: 'Sources qui produisent les meilleurs resultats :',
    sub1Sources: [
      'Politiques et standards de securite (ISO 27001, controles SOC 2)',
      'Runbooks et playbooks de reponse aux incidents',
      'Tickets de vulnerabilites resolus - chaque correctif est une regle implicite',
      'PRs rejetees pour raisons de securite - une mine d\'invariants non documentes',
      'Slack #security - decisions prises en temps reel pendant les incidents',
    ],
    sub1Link: 'Voir comment fonctionne l\'extraction →',
    sub1LinkHref: '/product/how-it-works#start-from-what-you-have',

    sub2Title: '2. Garde-fous de securite pour les agents de coding',
    sub2Desc: 'Les agents IA qui generent du code doivent respecter vos invariants de securite :',
    sub2Code: `Invariant: "Ne jamais logger de donnees PII"
Invariant: "Toutes les connexions externes passent par l'API Gateway"
Invariant: "Les secrets ne doivent jamais transiter en clair dans les variables d'environnement"
Rule: "Les dependances npm doivent etre auditees avant merge" (MANDATORY)
Rule: "Les requetes SQL doivent utiliser des statements parametres" (MANDATORY)`,
    sub2Outro: 'Les agents interrogent Knowledge avant d\'ecrire du code. Le CI Verifier signale les violations si le code genere entre en conflit avec une contrainte declaree.',

    sub3Title: '3. Donner le contexte securite aux agents IA',
    sub3Desc: 'Quand un agent IA opere sur votre infrastructure, il interroge Knowledge d\'abord :',
    sub3Code: `L'agent demarre une tache de remediation d'incident
Agent > knowledge_resolve(scope="Security", namespace="incident-response")
  > Retourne 12 entrees applicables : 4 invariants, 3 decisions, 4 rules, 1 override

Agent > knowledge_check(scope="Security", action="Redemarrer nginx sur prod-web-03")
  > Conflit : inv-7c3d "Pas d'action de remediation en production sans approbation humaine"
  > requires_approval: true

Agent > knowledge_request_approval(
    trigger_id="inv-7c3d",
    intended_action="Redemarrer nginx sur prod-web-03",
    justification="Service injoignable apres fuite memoire, incident P1 INC-2026-0412"
  )
  > En attente, CISO requis

Le CISO approuve dans le dashboard
  > Override auto-cree avec conditions
  > L'agent procede, reference enregistree`,
    sub3Outro: 'Chaque interaction est enregistree. Chaque verification de contrainte est tracable.',

    sub4Title: '4. Reponse aux incidents gouvernee',
    sub4Desc: 'Un agent qui analyse les logs et propose des actions de remediation doit operer dans des limites strictes :',
    sub4Code: `Invariant: "Pas d'action de remediation en production sans approbation humaine"
Rule: "Isoler l'hote avant toute analyse forensique" (MANDATORY)
Rule: "Notifier le CISO dans les 30 minutes pour tout incident P1" (MANDATORY)
Decision: "Playbook ransomware v3 - approuve 2024-11-12"`,
    sub4Outro: 'Chaque decision prise pendant l\'incident est tracee - qui a approuve quoi, quelle regle a ete consultee, quelle exception a ete creee et par qui. C\'est exactement ce qu\'un auditeur ou regulateur demande apres un incident.',

    sub5Title: '5. Pentest et scan de vulnerabilites controles',
    sub5Desc: 'Les agents de scan autonomes doivent connaitre le perimetre autorise :',
    sub5Code: `Invariant: "Perimetre de scan limite aux assets declares dans le registre"
Invariant: "Pas de scan actif en production pendant les heures ouvrees"
Rule: "Toute vulnerabilite avec CVSS >= 9.0 escaladee immediatement au CISO" (MANDATORY)
Override: "Scan production autorise 2026-03-15 02:00-05:00 - approuve par le CISO"`,
    sub5Outro: 'L\'Override avec TTL est particulierement adapte ici - une autorisation temporaire et tracable qui expire automatiquement. Pas de risque d\'oublier de la revoquer.',

    sub6Title: '6. Gouvernance agent-a-agent',
    sub6Desc: 'Quand plusieurs agents operent sur la meme infrastructure, Knowledge previent les conflits :',
    sub6Code: `Agent A (scanner) : "Je veux scanner 10.0.1.0/24"
  > knowledge_check : OK, dans le perimetre declare

Agent B (deployer) : "Je veux deployer service-x en production"
  > knowledge_check : BLOQUE - "Pas de deploiement pendant une fenetre de scan active"

Agent C (remediateur) : "Je veux redemarrer nginx sur prod-web-03"
  > knowledge_check : APPROBATION REQUISE - "Pas de remediation en prod sans approbation humaine"
  > knowledge_request_approval > Le CISO approuve > proceder`,

    sub7Title: '7. Checks de conformite CI',
    sub7Desc: 'Le Verifier s\'execute dans votre pipeline et verifie que les changements de code adressent les contraintes de securite applicables :',
    sub7Code: `# .github/workflows/knowledge.yml
- name: Knowledge Compliance
  run: knowledge-verifier --config .knowledge-verifier.yml`,
    sub7Outro: 'L\'agent de coding genere un Implementation Report sous forme de `.knowledge/report.md`, committe avec le code. Le Verifier valide les citations, overrides et entrees mandatory. Avec l\'analyse semantique activee, il evalue le diff reel du code contre chaque contrainte.',
    sub7Link: 'Voir le flux complet du Verifier →',
    sub7LinkHref: '/product/how-it-works#cicd-verifier',

    complianceTitle: 'Conformite NIS2 et ISO 27001',
    complianceIntro: 'Knowledge se mappe directement aux exigences de tracabilite de NIS2 et ISO 27001 :',
    complianceHeaders: ['Exigence', 'Fonctionnalite Knowledge'],
    complianceRows: [
      ['Mesures de gestion des risques (NIS2 Art. 21)', 'Les invariants codifient les controles de securite, les rules appliquent les mesures operationnelles'],
      ['Gestion des incidents (NIS2 Art. 21.2b)', 'Les decisions tracent chaque action pendant les incidents, les workflows d\'approbation gatent les actions critiques'],
      ['Securite de la chaine d\'approvisionnement (NIS2 Art. 21.2d)', 'Les rules imposent l\'audit des dependances, le CI Verifier signale le code non conforme'],
      ['Politiques de cryptographie (NIS2 Art. 21.2h)', 'Les invariants imposent les standards de chiffrement, les overrides tracent les exceptions'],
      ['Controle d\'acces (ISO 27001 A.9)', 'Acces base sur les roles, workflows d\'approbation, gouvernance des overrides'],
      ['Securite des operations (ISO 27001 A.12)', 'Les rules versionnent les procedures operationnelles, la timeline d\'evenements trace les changements'],
      ['Gestion des incidents (ISO 27001 A.16)', 'Piste de decisions complete avec horodatages, approbations et references'],
      ['Conformite (ISO 27001 A.18)', 'Registre interrogeable a tout moment - pret pour l\'audit par conception'],
    ],

    dayTitle: 'Workflow au quotidien',
    dayGroups: [
      {
        title: 'Pour le CISO',
        items: [
          'Definir les invariants : codifier les controles de securite non-negociables (acces production, gestion des donnees, chiffrement)',
          'Reviewer les regles extraites : approuver, rejeter ou editer les regles de securite surfacees par l\'extraction',
          'Approuver les overrides : autoriser les exceptions temporaires (fenetres de pentest, acces d\'urgence)',
          'Surveiller les evenements : suivre la conformite des agents et les decisions de securite dans la timeline',
          'Exporter les preuves : produire des rapports de conformite pour les auditeurs - donnees structurees, pas de captures d\'ecran de PDF',
        ],
      },
      {
        title: 'Pour l\'equipe SecOps',
        items: [
          'Declarer les rules : fixer les standards de securite comme rules (audit des dependances, exigences de scan de code)',
          'Attacher des external checkers : scripts ou webhooks pour verification dynamique (statut de scan de vulnerabilites, expiration de certificats)',
          'Utiliser le bot : poster une decision de securite dans #security, le bot la detecte et la structure',
          'Reviewer les rapports CI : verifier les rapports du Verifier sur les PRs liees a la securite',
          'Creer des overrides : exceptions a duree limitee pour les fenetres de maintenance et de test',
        ],
      },
      {
        title: 'Pour l\'auditeur securite',
        items: [
          'Parcourir les scopes : voir Security, Incident Response, Compliance d\'un coup d\'oeil',
          'Lire les invariants : comprendre quelles contraintes gouvernent les actions des agents sur l\'infrastructure',
          'Tracer les decisions : suivre la chaine de l\'incident a la remediation a l\'approbation',
          'Verifier la conformite : interroger le registre pour toutes les contraintes actives a n\'importe quelle date',
        ],
      },
    ],

    replacesTitle: 'Ce que ca remplace',
    replacesHeaders: ['Avant', 'Avec Knowledge'],
    replacesRows: [
      ['Politiques de securite dans des PDF', 'Invariants et rules types et recherchables'],
      ['Playbooks dans Confluence', 'Rules versionnees avec historique de changements'],
      ['Perimetres de pentest dans Slack', 'Invariants avec overrides tracables'],
      ['Post-incident "que s\'est-il passe ?"', 'Piste de decisions structuree avec horodatages'],
      ['Collecte manuelle de preuves de conformite', 'Registre interrogeable a tout moment'],
      ['Agents agissant sans contexte securite', 'Verification pre-vol des contraintes a chaque action'],
    ],

    getStartedTitle: 'Commencer',
    getStartedItems: [
      { text: 'Creer votre compte', href: '/docs/getting-started' },
      { text: 'Creer un scope Security', href: null },
      { text: 'Lancer knowledge extract --scope Security --source ./policies --source ./runbooks pour peupler depuis les docs existantes', href: null },
      { text: 'Reviewer et approuver les regles extraites dans le dashboard', href: null },
      { text: 'Connecter vos agents IA via MCP', href: null },
      { text: 'Ajouter le Verifier a votre pipeline CI', href: null },
    ],
    ctaStart: 'Commencer →',
    ctaStartHref: '/docs/getting-started',
    ctaCompliance: 'Conformite AI Act →',
    ctaComplianceHref: '/compliance/ai-act',
    ctaPricing: 'Tarifs →',
    ctaPricingHref: '/pricing',
  },
}

export default function CybersecurityPage() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">{t.tag}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-4">{t.h1}</h1>
          <p className="font-serif text-xl text-[var(--text-secondary)] mb-6 italic">{t.subtitle}</p>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-3xl">{t.intro}</p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">{t.problemTitle}</p>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed max-w-2xl">{t.problemIntro}</p>
          <ul className="space-y-3">
            {t.problemItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[var(--text-secondary)] mt-6 leading-relaxed max-w-2xl text-sm">{t.problemOutro}</p>
        </div>
      </section>

      {/* How Knowledge Solves This */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-10">{t.howTitle}</p>
          <div className="space-y-12">

            {/* 1. Extract Rules */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.sub1Title}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.sub1Desc}</p>
              <div className="max-w-2xl space-y-3">
                <CodeBlock code={t.sub1Code} />
                <CodeBlock code={t.sub1Output} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 mb-2 leading-relaxed max-w-2xl text-sm">{t.sub1SourcesLabel}</p>
              <ul className="space-y-2 mb-4">
                {t.sub1Sources.map((src, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                    {src}
                  </li>
                ))}
              </ul>
              <Link href={t.sub1LinkHref} className="text-sm text-[var(--accent)] hover:underline">{t.sub1Link}</Link>
            </div>

            {/* 2. Security Guardrails */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.sub2Title}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.sub2Desc}</p>
              <div className="max-w-2xl">
                <CodeBlock code={t.sub2Code} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">{t.sub2Outro}</p>
            </div>

            {/* 3. Give AI Agents Security Context */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.sub3Title}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.sub3Desc}</p>
              <div className="max-w-2xl">
                <CodeBlock code={t.sub3Code} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">{t.sub3Outro}</p>
            </div>

            {/* 4. Governed Incident Response */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.sub4Title}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.sub4Desc}</p>
              <div className="max-w-2xl">
                <CodeBlock code={t.sub4Code} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">{t.sub4Outro}</p>
            </div>

            {/* 5. Controlled Pentest */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.sub5Title}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.sub5Desc}</p>
              <div className="max-w-2xl">
                <CodeBlock code={t.sub5Code} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">{t.sub5Outro}</p>
            </div>

            {/* 6. Agent-to-Agent Governance */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.sub6Title}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.sub6Desc}</p>
              <div className="max-w-2xl">
                <CodeBlock code={t.sub6Code} />
              </div>
            </div>

            {/* 7. CI Compliance Checks */}
            <div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-2">{t.sub7Title}</h3>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed max-w-2xl">{t.sub7Desc}</p>
              <div className="max-w-2xl">
                <CodeBlock code={t.sub7Code} />
              </div>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed max-w-2xl text-sm">{t.sub7Outro}</p>
              <Link href={t.sub7LinkHref} className="text-sm text-[var(--accent)] hover:underline mt-2 inline-block">{t.sub7Link}</Link>
            </div>

          </div>
        </div>
      </section>

      {/* NIS2 / ISO 27001 Compliance */}
      <section className="py-12 px-6 md:px-16 lg:px-24 bg-[var(--bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">{t.complianceTitle}</p>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed max-w-2xl">{t.complianceIntro}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  {t.complianceHeaders.map((h) => (
                    <th key={h} className="text-left py-2 pr-6 font-mono text-xs uppercase tracking-wide text-[var(--text-muted)]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.complianceRows.map((row, i) => (
                  <tr key={i} className="border-b border-[var(--border-light)]">
                    <td className="py-3 pr-6 text-[var(--accent)] font-mono text-xs leading-relaxed">{row[0]}</td>
                    <td className="py-3 pr-6 text-[var(--text-secondary)] leading-relaxed">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Day-to-Day Workflow */}
      <section className="py-12 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">{t.dayTitle}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.dayGroups.map((group) => (
              <div key={group.title} className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
                <h3 className="font-semibold text-[var(--text-primary)] mb-4">{group.title}</h3>
                <ol className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <span className="font-mono text-xs text-[var(--accent)] shrink-0 mt-0.5">{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
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
          <ol className="text-left mb-10 space-y-3 max-w-lg mx-auto">
            {t.getStartedItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                <span className="font-mono text-xs text-[var(--accent)] shrink-0 mt-0.5">{i + 1}.</span>
                {item.href ? (
                  <Link href={item.href} className="hover:text-[var(--accent)] hover:underline transition-colors">{item.text}</Link>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={t.ctaStartHref} className="px-7 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors">
              {t.ctaStart}
            </Link>
            <Link href={t.ctaComplianceHref} className="px-7 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
              {t.ctaCompliance}
            </Link>
            <Link href={t.ctaPricingHref} className="px-7 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
              {t.ctaPricing}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
