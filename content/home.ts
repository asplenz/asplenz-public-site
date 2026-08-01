import type { Locale } from '@/lib/i18n'

export type HomePillarIcon = 'model' | 'engine' | 'replay'
export type HomeFeatureIcon = 'audience' | 'human' | 'channel'

export type HomeArchitectureLayer = {
  title: string
  detail: string
  emphasis?: boolean
}

export type HomeIndustry = {
  key: string
  label: string
}

export type HomeContent = {
  hero: {
    headingLine1: string
    headingLine2: string
    punchline: string
    sub: string
    whyNow: string
    primaryCta: string
    secondaryCta: string
  }
  architectureFit: {
    heading: string
    body: string[]
    layers: HomeArchitectureLayer[]
  }
  pillarsHeading: string
  pillars: {
    title: string
    body: string
    icon: HomePillarIcon
  }[]
  featuresHeading: string
  features: {
    title: string
    body: string
    bullets?: string[]
    icon: HomeFeatureIcon
  }[]
  whiteLabel: {
    heading: string
    body: string
    bullets: string[]
    cta: string
  }
  ecosystemTeaser: {
    heading: string
    body: string
    partners: string[]
    outro: string
    cta: string
  }
  industries: {
    heading: string
    lead: string
    items: HomeIndustry[]
    beyond: string
  }
  finalCta: {
    heading: string
    copy: string
    primary: string
    secondary: string
  }
}

const EN: HomeContent = {
  hero: {
    headingLine1: 'Compliance Decision Platform',
    headingLine2: 'for Regulated Industries',
    punchline:
      'Compliance is no longer just documentation. It has become executable.',
    sub: 'Every compliance decision can be executed, explained and replayed years later.',
    whyNow:
      'Modern applications, AI agents and human operators all require deterministic compliance decisions. Knowledge provides the runtime that executes compliance consistently across every channel.',
    primaryCta: 'Book a demo',
    secondaryCta: 'Explore the platform',
  },
  architectureFit: {
    heading: 'Fits your existing architecture',
    body: [
      'Most regulated organisations already operate a combination of workflow engines, decision platforms, GRC systems and business applications.',
      "Knowledge doesn't require you to replace them.",
      'It becomes the compliance execution layer that sits where deterministic compliance decisions are needed.',
    ],
    layers: [
      {
        title: 'Business applications',
        detail: 'Workflow · Decision engines · AI agents',
      },
      {
        title: 'Knowledge runtime',
        detail:
          'Policies · Rules · Targets · Approvals · Overrides · Governance',
        emphasis: true,
      },
      {
        title: 'Audit & regulatory evidence',
        detail: 'Replayable consultations · Pinned rule versions · Event log',
      },
    ],
  },
  pillarsHeading: 'The three pillars',
  pillars: [
    {
      title: 'Compliance operating model',
      body: 'Policies, Rules, Decision Tables, Targets, Approvals, Overrides, Governance, Consultations and Events are first-class objects in the runtime, not application code you have to rebuild.',
      icon: 'model',
    },
    {
      title: 'Deterministic execution',
      body: 'Same inputs, same policies, same decision, every time. AI stays strictly outside the decision path. It can explain, assist and answer. It never determines the verdict.',
      icon: 'engine',
    },
    {
      title: 'Replayable governance',
      body: 'Every decision can be reconstructed years later : applicable policies, rules, rule versions, approvals, overrides, governance decisions and the consultation record. Exactly as they existed when the decision was made.',
      icon: 'replay',
    },
  ],
  featuresHeading: 'Built for the reality of regulated organisations',
  features: [
    {
      title: 'Multi-audience applicability',
      body: 'The same rule applies differently to a Singapore desk, a Hong Kong desk and a regional compliance team. One rule, multiple audiences, no duplication.',
      icon: 'audience',
    },
    {
      title: 'Human governance',
      body: "Compliance isn't always automatic. When a human loop is needed, Knowledge provides it natively.",
      bullets: [
        'Approvals with audit trail',
        'Temporary scope-bounded overrides',
        'Observe mode for staged rollout',
        'Governance decisions on rule changes',
      ],
      icon: 'human',
    },
    {
      title: 'Execute everywhere',
      body: 'The same compliance decision reaches its callers where they already work.',
      bullets: [
        'REST APIs for OMS and back-office integrations',
        'MCP servers for AI agents',
        'Slack for the human loop',
        'Email for asynchronous approvals',
      ],
      icon: 'channel',
    },
  ],
  whiteLabel: {
    heading: 'White-label ready',
    body: 'Designed from day one for software vendors and consulting firms who want to operate compliance for their own customers under their own brand.',
    bullets: [
      'Organisations above tenants',
      'Structural tenant isolation',
      'Partner administration portal',
      'Cross-tenant monitoring',
    ],
    cta: 'Explore the OEM programme',
  },
  ecosystemTeaser: {
    heading: 'Fits alongside existing platforms',
    body: 'Knowledge complements existing enterprise software as often as it replaces it. It sits alongside decision engines, workflow orchestrators and GRC platforms rather than competing with all of them.',
    partners: [
      'IBM ODM',
      'GoRules',
      'DecisionRules',
      'Camunda',
      'ServiceNow GRC',
      'Fenergo',
    ],
    outro: 'Replace where it makes sense. Integrate everywhere else.',
    cta: 'See the ecosystem',
  },
  industries: {
    heading: 'Built for regulated industries',
    lead: 'Any organisation where compliance decisions must be deterministic, explainable and replayable.',
    items: [
      { key: 'wealth', label: 'Wealth management' },
      { key: 'insurance', label: 'Insurance' },
      { key: 'healthcare', label: 'Healthcare' },
      { key: 'ai-governance', label: 'AI governance' },
    ],
    beyond:
      'And beyond : banking, asset management, energy, government and any regulated workflow with an accountable owner.',
  },
  finalCta: {
    heading: 'Ready to see it live ?',
    copy: 'A fully configured demo tenant that mirrors your organisation, available in less than one hour.',
    primary: 'Book a demo',
    secondary: 'Talk to us',
  },
}

const FR: HomeContent = {
  hero: {
    headingLine1: 'Compliance Decision Platform',
    headingLine2: 'pour les Secteurs Régulés',
    punchline:
      "La compliance n'est plus seulement une documentation. Elle est devenue exécutable.",
    sub: 'Chaque décision compliance peut être exécutée, expliquée et rejouée des années plus tard.',
    whyNow:
      "Les applications modernes, les agents IA et les opérateurs humains ont tous besoin de décisions compliance déterministes. Knowledge fournit le runtime qui exécute la compliance de manière cohérente sur chaque canal.",
    primaryCta: 'Réserver une démo',
    secondaryCta: 'Explorer la plateforme',
  },
  architectureFit: {
    heading: "S'intègre à votre architecture existante",
    body: [
      "La plupart des organisations régulées opèrent déjà une combinaison de moteurs de workflow, de plateformes de décision, de systèmes GRC et d'applications métier.",
      "Knowledge ne vous demande pas de les remplacer.",
      "Il devient la couche d'exécution compliance qui se place là où des décisions compliance déterministes sont nécessaires.",
    ],
    layers: [
      {
        title: 'Applications métier',
        detail: 'Workflow · Moteurs de décision · Agents IA',
      },
      {
        title: 'Runtime Knowledge',
        detail:
          'Policies · Rules · Targets · Approvals · Overrides · Gouvernance',
        emphasis: true,
      },
      {
        title: "Audit et preuve réglementaire",
        detail: 'Consultations rejouables · Versions de règles figées · Journal d\'événements',
      },
    ],
  },
  pillarsHeading: 'Les trois piliers',
  pillars: [
    {
      title: 'Modèle opérationnel compliance',
      body: "Policies, Rules, Decision Tables, Targets, Approvals, Overrides, Gouvernance, Consultations et Events sont des objets de première classe dans le runtime, pas du code applicatif à reconstruire.",
      icon: 'model',
    },
    {
      title: 'Exécution déterministe',
      body: "Mêmes entrées, mêmes policies, même décision, à chaque fois. L'IA reste strictement hors du chemin de décision. Elle explique, elle assiste, elle répond. Elle ne rend jamais le verdict.",
      icon: 'engine',
    },
    {
      title: 'Gouvernance rejouable',
      body: "Chaque décision peut être reconstituée des années plus tard : policies applicables, règles, versions de règles, approbations, overrides, décisions de gouvernance et enregistrement de consultation. Exactement dans l'état où ils étaient au moment de la décision.",
      icon: 'replay',
    },
  ],
  featuresHeading: 'Conçu pour la réalité des organisations régulées',
  features: [
    {
      title: 'Applicabilité multi-audience',
      body: "La même règle s'applique différemment à un desk Singapour, un desk Hong Kong et une équipe compliance régionale. Une seule règle, plusieurs audiences, aucune duplication.",
      icon: 'audience',
    },
    {
      title: 'Gouvernance humaine',
      body: "La compliance n'est pas toujours automatique. Quand une boucle humaine est nécessaire, Knowledge la fournit nativement.",
      bullets: [
        "Approbations avec piste d'audit",
        "Overrides temporaires bornés par scope",
        "Mode observe pour déploiement progressif",
        "Décisions de gouvernance sur les changements de règles",
      ],
      icon: 'human',
    },
    {
      title: 'Exécuter partout',
      body: "La même décision compliance atteint ses appelants là où ils travaillent déjà.",
      bullets: [
        "API REST pour l'OMS et les intégrations back-office",
        "Serveurs MCP pour les agents IA",
        "Slack pour la boucle humaine",
        "Email pour les approbations asynchrones",
      ],
      icon: 'channel',
    },
  ],
  whiteLabel: {
    heading: 'Prêt pour le white-label',
    body: "Conçu dès le premier jour pour les éditeurs et cabinets de conseil qui veulent opérer la compliance pour leurs propres clients sous leur propre marque.",
    bullets: [
      'Organisations au-dessus des tenants',
      'Isolation structurelle des tenants',
      "Portail d'administration partenaire",
      "Monitoring cross-tenants",
    ],
    cta: 'Découvrir le programme OEM',
  },
  ecosystemTeaser: {
    heading: 'Cohabite avec vos plateformes existantes',
    body: "Knowledge complète l'existant aussi souvent qu'il le remplace. Il se place aux côtés des moteurs de décision, des orchestrateurs de workflow et des plateformes GRC plutôt que d'entrer en compétition avec chacun.",
    partners: [
      'IBM ODM',
      'GoRules',
      'DecisionRules',
      'Camunda',
      'ServiceNow GRC',
      'Fenergo',
    ],
    outro: "Remplacer là où ça fait sens. Intégrer partout ailleurs.",
    cta: "Voir l'écosystème",
  },
  industries: {
    heading: 'Conçu pour les secteurs régulés',
    lead: "Toute organisation où les décisions compliance doivent être déterministes, explicables et rejouables.",
    items: [
      { key: 'wealth', label: 'Wealth management' },
      { key: 'insurance', label: 'Assurance' },
      { key: 'healthcare', label: 'Santé' },
      { key: 'ai-governance', label: 'Gouvernance IA' },
    ],
    beyond:
      "Et au-delà : banque, gestion d'actifs, énergie, secteur public et tout workflow régulé avec un responsable identifié.",
  },
  finalCta: {
    heading: 'Prêt à voir la plateforme en action ?',
    copy: "Un tenant de démonstration entièrement configuré qui reproduit votre organisation, disponible en moins d'une heure.",
    primary: 'Réserver une démo',
    secondary: 'Nous parler',
  },
}

export function getHomeContent(locale: Locale): HomeContent {
  return locale === 'fr' ? FR : EN
}
