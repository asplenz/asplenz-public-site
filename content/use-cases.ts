import type { Locale } from '@/lib/i18n'

export type UseCaseDecisionTableRow = {
  cells: string[]
}

export type UseCaseDecisionTable = {
  caption: string
  columns: string[]
  rows: UseCaseDecisionTableRow[]
  footer: string
}

export type UseCasesContent = {
  hero: {
    eyebrow: string
    heading: string
    sub: string
  }
  intro: string
  verticals: {
    icon: 'wealth' | 'agent' | 'insurance' | 'health' | 'gateway'
    tag: string
    title: string
    body: string[]
    decisionTable?: UseCaseDecisionTable
    fitsLabel: string
    fits: string
  }[]
  agentSplit: {
    heading: string
    autonomousTitle: string
    autonomousBody: string
    conversationalTitle: string
    conversationalBody: string
    closing: string
  }
  commonThread: {
    heading: string
    body: string
  }
  finalCta: {
    heading: string
    copy: string
    primary: string
    secondary: string
  }
}

const EN: UseCasesContent = {
  hero: {
    eyebrow: 'USE CASES',
    heading: 'Where Knowledge runs',
    sub: 'The compliance model is vertical-agnostic (Policy, Rule, Target, Override, Approval, Consultation). Four industries where the shape of the work fits the shape of the product.',
  },
  intro: '',
  verticals: [
    {
      icon: 'wealth',
      tag: 'FINANCE',
      title: 'Wealth management and private banking',
      body: [
        'A relationship manager instructs a trade for a client with a conservative mandate. Before it reaches the market, the order management system checks the trade against the desk\'s rules : jurisdiction, client classification, mandate type, asset class, post-trade exposures. The applicable rules evaluate the case (equity cap, single-name cap, suitability sign-off, jurisdiction-specific requirements).',
        'The equity cap is not a single number. It is a decision table : one Rule that carries different thresholds for different client segments, evaluated top-to-bottom until a row matches.',
      ],
      decisionTable: {
        caption: 'The equity cap rule, one Rule with three rows.',
        columns: ['Client segment', 'Equity cap'],
        rows: [
          { cells: ['Retail · lower net worth', '40 %'] },
          { cells: ['Retail · high net worth', '50 %'] },
          { cells: ['Accredited investor', '70 %'] },
        ],
        footer: 'Three thresholds, one governance lifecycle. Compliance approves the table, not three separate rules.',
      },
      fitsLabel: 'Fits',
      fits: 'Private banking desks, asset managers, family offices, brokerage compliance.',
    },
    {
      icon: 'agent',
      tag: 'AI GOVERNANCE',
      title: 'AI agent governance',
      body: [],
      fitsLabel: 'Fits',
      fits: 'Banks and insurers deploying agent copilots, back-office automation, conversational assistants for compliance and business users.',
    },
    {
      icon: 'insurance',
      tag: 'INSURANCE',
      title: 'Insurance underwriting',
      body: [
        'A policy issuance request is checked against the underwriting guide, the AML watchlist, the medical exclusion policy, and the reinsurance limits. Rules carry the metric conditions (age brackets, sum insured thresholds, geographic exclusions). When a case falls outside the auto-issue envelope, it escalates to an underwriter with the exact rules that fired attached. The underwriter\'s decision becomes an authorised exception tied to the policy ; the next quote for the same case is instantaneous.',
      ],
      fitsLabel: 'Fits',
      fits: 'Life insurers, P&C underwriting, health insurance intake, reinsurance treaty checks.',
    },
    {
      icon: 'health',
      tag: 'HEALTHCARE',
      title: 'Healthcare and medical devices',
      body: [
        'Clinical decisions and device operations that fall under HIPAA, FDA 21 CFR Part 11, or EMA supervision need auditable gates. A connected device checks with Knowledge before a class of operations ; a clinical workflow app checks before releasing a prescription for controlled substances ; a research protocol validates a subject enrollment against inclusion / exclusion criteria. The audit trail is the deliverable the regulator asks for.',
      ],
      fitsLabel: 'Fits',
      fits: 'Connected medical devices, EHR compliance layers, clinical research workflow, pharmacy operations.',
    },
    {
      icon: 'gateway',
      tag: 'HORIZONTAL',
      title: 'Compliance as an AI Gateway',
      body: [
        'AI agents are entering regulated workflows across finance, insurance, healthcare and legal operations. Knowledge sits between the agent and the action as a policy enforcement point : every intended action is checked against the applicable rules before it is executed, regardless of the agent framework, model provider or business domain.',
        'The organisation defines policies once ; every agent, from Claude to a custom LangChain workflow to a back-office bot, consults the same runtime and is subject to the same audit trail. AI stays outside the decision path ; humans stay in the approval loop for anything that requires it.',
      ],
      fitsLabel: 'Fits',
      fits: 'Any organisation deploying autonomous agents into regulated processes : agent copilots in finance, autonomous underwriting assistants, back-office automation in healthcare, contract review agents in legal operations.',
    },
  ],
  agentSplit: {
    heading: 'Two integration patterns benefit from Knowledge',
    autonomousTitle: 'Autonomous agents',
    autonomousBody: 'Programs built on the Anthropic or OpenAI API, a LangChain workflow, a bespoke back-office bot must ask before acting when the action touches regulated ground. Through the MCP protocol, the agent checks its intended action against the applicable rules before creating a customer, moving funds, sending a communication, or applying a discount. The verdict is returned instantly ; the agent proceeds, opens an approval request and waits, or aborts.',
    conversationalTitle: 'Conversational surfaces',
    conversationalBody: 'Claude.ai or chatgpt.com augmented with an MCP connector reach the same runtime. A compliance officer, a relationship manager or a business analyst can ask the assistant to draft a rule, list active approvals, or check whether an intended action would pass. Same audit trail, same rules, same verdicts as any programmatic caller.',
    closing: 'Everything captured : the intent, the verdict, the rules that fired, the human decision if any. Governance over autonomous work is a first-class concern of the platform, not a bolted-on log.',
  },
  commonThread: {
    heading: 'The common thread',
    body: 'All four verticals share the same shape : a business action needs to pass a compliance check before executing, and the audit of that decision needs to survive multi-year regulator review. Knowledge is designed for exactly that shape.',
  },
  finalCta: {
    heading: 'Your vertical here?',
    copy: 'If your regulated business action can be gated with rules and needs auditable replay, Knowledge fits.',
    primary: 'Talk to us',
    secondary: 'Explore the product',
  },
}

const FR: UseCasesContent = {
  hero: {
    eyebrow: 'CAS D\'USAGE',
    heading: 'Là où Knowledge tourne',
    sub: 'Le modèle compliance est agnostique du vertical (Policy, Rule, Target, Override, Approval, Consultation). Quatre industries où la forme du travail épouse la forme du produit.',
  },
  intro: '',
  verticals: [
    {
      icon: 'wealth',
      tag: 'FINANCE',
      title: 'Gestion de patrimoine et banque privée',
      body: [
        'Un chargé de clientèle prépare un trade pour un client au mandat conservateur. Avant que l\'ordre n\'atteigne le marché, l\'order management system confronte le trade aux règles du desk : juridiction, classification client, type de mandat, classe d\'actif, expositions post-trade. Les règles applicables évaluent le cas (plafond equity, plafond single-name, attestation suitability, exigences juridictionnelles).',
        'Le plafond equity n\'est pas un nombre unique. C\'est une decision table : une Rule qui porte différents seuils selon le segment client, évaluée de haut en bas jusqu\'à ce qu\'une rangée matche.',
      ],
      decisionTable: {
        caption: 'La règle de plafond equity, une Rule à trois rangées.',
        columns: ['Segment client', 'Plafond equity'],
        rows: [
          { cells: ['Retail · lower net worth', '40 %'] },
          { cells: ['Retail · high net worth', '50 %'] },
          { cells: ['Accredited investor', '70 %'] },
        ],
        footer: 'Trois seuils, un seul cycle de gouvernance. Compliance approuve la table, pas trois règles séparées.',
      },
      fitsLabel: 'Convient à',
      fits: 'Desks de banque privée, gérants d\'actifs, family offices, compliance de courtage.',
    },
    {
      icon: 'agent',
      tag: 'GOUVERNANCE IA',
      title: 'Gouvernance des agents IA',
      body: [],
      fitsLabel: 'Convient à',
      fits: 'Banques et assureurs déployant des copilotes agents, automatisation back-office, assistants conversationnels pour les équipes compliance et métier.',
    },
    {
      icon: 'insurance',
      tag: 'ASSURANCE',
      title: 'Souscription en assurance',
      body: [
        'Une demande d\'émission de police est confrontée au guide de souscription, à la watchlist AML, à la politique d\'exclusion médicale, et aux limites de réassurance. Les règles portent les conditions métriques (tranches d\'âge, seuils de capital assuré, exclusions géographiques). Quand un dossier sort de l\'enveloppe auto-issue, il est escaladé à un souscripteur avec les règles déclenchées attachées. La décision du souscripteur devient une exception autorisée liée à la police ; le prochain devis sur le même dossier est instantané.',
      ],
      fitsLabel: 'Convient à',
      fits: 'Assureurs vie, souscription IARD, admission santé, vérifications de traités de réassurance.',
    },
    {
      icon: 'health',
      tag: 'SANTÉ',
      title: 'Santé et dispositifs médicaux',
      body: [
        'Les décisions cliniques et opérations de dispositifs sous HIPAA, FDA 21 CFR Part 11, ou supervision EMA ont besoin de gates auditables. Un dispositif connecté consulte Knowledge avant une classe d\'opérations ; une app de workflow clinique vérifie avant de libérer une prescription de substances contrôlées ; un protocole de recherche valide une inclusion de sujet contre les critères d\'inclusion / exclusion. La piste d\'audit est le livrable que le régulateur demande.',
      ],
      fitsLabel: 'Convient à',
      fits: 'Dispositifs médicaux connectés, couches de compliance EHR, workflow de recherche clinique, opérations pharmacie.',
    },
    {
      icon: 'gateway',
      tag: 'HORIZONTAL',
      title: 'Compliance as an AI Gateway',
      body: [
        'Les agents IA entrent dans les workflows régulés à travers la finance, l\'assurance, la santé et les opérations juridiques. Knowledge s\'insère entre l\'agent et l\'action comme point d\'application des politiques : chaque action envisagée est confrontée aux règles applicables avant d\'être exécutée, quel que soit le framework agent, le fournisseur de modèle ou le domaine métier.',
        'L\'organisation définit ses policies une fois ; chaque agent, de Claude à un workflow LangChain custom à un bot back-office, consulte le même runtime et est soumis à la même piste d\'audit. L\'IA reste hors du chemin de décision ; les humains restent dans la boucle d\'approbation pour tout ce qui l\'exige.',
      ],
      fitsLabel: 'Convient à',
      fits: 'Toute organisation déployant des agents autonomes dans des processus régulés : copilotes agents en finance, assistants d\'underwriting autonomes, automatisation back-office en santé, agents de revue de contrats en juridique.',
    },
  ],
  agentSplit: {
    heading: 'Deux patterns d\'intégration bénéficient de Knowledge',
    autonomousTitle: 'Agents autonomes',
    autonomousBody: 'Les programmes construits sur l\'API Anthropic ou OpenAI, workflow LangChain, bot back-office maison doivent demander avant d\'agir quand l\'action touche un terrain régulé. Via le protocole MCP, l\'agent confronte son intention aux règles applicables avant de créer un client, de déplacer des fonds, d\'envoyer une communication, ou d\'appliquer un discount. Le verdict est renvoyé instantanément ; l\'agent poursuit, ouvre une demande d\'approbation et attend, ou abandonne.',
    conversationalTitle: 'Surfaces conversationnelles',
    conversationalBody: 'Claude.ai ou chatgpt.com augmentés d\'un connecteur MCP atteignent le même runtime. Un compliance officer, un chargé de clientèle ou un analyste métier peut demander à l\'assistant de rédiger une règle, de lister les approbations actives, ou de vérifier si une intention passerait. Même piste d\'audit, mêmes règles, mêmes verdicts que n\'importe quel appelant programmatique.',
    closing: 'Tout est capturé : l\'intention, le verdict, les règles qui ont fired, la décision humaine le cas échéant. La gouvernance du travail autonome est une préoccupation de première classe de la plateforme, pas un log bolt-on.',
  },
  commonThread: {
    heading: 'Le fil rouge',
    body: 'Les quatre verticaux partagent la même forme : une action métier doit passer un check compliance avant de s\'exécuter, et l\'audit de cette décision doit survivre à une revue régulateur pluri-annuelle. Knowledge est conçu pour exactement cette forme.',
  },
  finalCta: {
    heading: 'Votre vertical ici ?',
    copy: 'Si votre action métier régulée peut être encadrée par des règles et nécessite un audit rejouable, Knowledge convient.',
    primary: 'Nous parler',
    secondary: 'Explorer le produit',
  },
}

export function getUseCasesContent(locale: Locale): UseCasesContent {
  return locale === 'fr' ? FR : EN
}
