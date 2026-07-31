import type { Locale } from '@/lib/i18n'

export type HomeContent = {
  hero: {
    headingLine1: string
    headingLine2: string
    sub: string
    whyNow: string
    primaryCta: string
    secondaryCta: string
  }
  pillarsHeading: string
  pillars: {
    title: string
    body: string
    icon: 'model' | 'engine' | 'replay'
  }[]
  featuresHeading: string
  features: {
    title: string
    body: string
    icon: 'audience' | 'override' | 'channel'
  }[]
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
    sub: 'Every compliance decision can be executed, explained and replayed years later.',
    whyNow: 'AI agents are entering regulated workflows. Regulators expect deterministic, explainable decisions. Compliance is moving from documentation to execution.',
    primaryCta: 'Book a demo',
    secondaryCta: 'Explore the platform',
  },
  pillarsHeading: 'The three pillars',
  pillars: [
    {
      title: 'Compliance operating model',
      body: 'Policies, Rules, Targets, Approvals, Overrides, Governance. The objects a compliance department actually manipulates, native in the runtime.',
      icon: 'model',
    },
    {
      title: 'Deterministic execution',
      body: 'Same inputs. Same decision. Every time. AI is kept strictly out of the decision path : it only explains, never decides.',
      icon: 'engine',
    },
    {
      title: 'Replayable governance',
      body: 'Every decision can be reconstructed years later, together with the rule versions, approvals and governance decisions that produced it.',
      icon: 'replay',
    },
  ],
  featuresHeading: 'Built for the shape of regulated work',
  features: [
    {
      title: 'Multi-audience attribution',
      body: 'The same rule applies differently to a Singapore desk, a Hong Kong desk, and a compliance oversight seat. One row in the registry, three audiences, zero duplication.',
      icon: 'audience',
    },
    {
      title: 'First-class overrides',
      body: 'Exceptions are objects with a scope, a duration, a justification and a decider. Not a boolean flag hidden in your codebase.',
      icon: 'override',
    },
    {
      title: 'Multi-channel',
      body: 'REST API for OMS integrations, MCP for AI agents, Slack and email for the human loop. The compliance conversation reaches its participants where they already are.',
      icon: 'channel',
    },
  ],
  finalCta: {
    heading: 'Ready to see it live?',
    copy: 'A working demo on a demo tenant that mirrors your shape, in under an hour.',
    primary: 'Book a demo',
    secondary: 'Talk to us',
  },
}

const FR: HomeContent = {
  hero: {
    headingLine1: 'Compliance Decision Platform',
    headingLine2: 'pour les Secteurs Régulés',
    sub: 'Chaque décision compliance peut être exécutée, expliquée et rejouée des années plus tard.',
    whyNow: 'Les agents IA entrent dans les workflows régulés. Les régulateurs attendent des décisions déterministes et explicables. La compliance passe de la documentation à l\'exécution.',
    primaryCta: 'Réserver une démo',
    secondaryCta: 'Explorer la plateforme',
  },
  pillarsHeading: 'Les trois piliers',
  pillars: [
    {
      title: 'Modèle opérationnel compliance',
      body: 'Policies, Rules, Targets, Approvals, Overrides, Governance. Les objets qu\'un département compliance manipule réellement, natifs dans le runtime.',
      icon: 'model',
    },
    {
      title: 'Exécution déterministe',
      body: 'Mêmes entrées. Même décision. À chaque fois. L\'IA reste strictement hors du chemin de décision : elle explique, elle ne décide jamais.',
      icon: 'engine',
    },
    {
      title: 'Gouvernance rejouable',
      body: 'Chaque décision peut être reconstituée des années plus tard, avec les versions de règles, les approbations et les décisions de gouvernance qui l\'ont produite.',
      icon: 'replay',
    },
  ],
  featuresHeading: 'Conçu pour la forme réelle du travail régulé',
  features: [
    {
      title: 'Attribution multi-audience',
      body: 'La même règle s\'applique différemment à un desk Singapour, un desk Hong Kong, un poste d\'oversight compliance. Une ligne dans le registre, trois audiences, zéro duplication.',
      icon: 'audience',
    },
    {
      title: 'Overrides de première classe',
      body: 'Les exceptions sont des objets avec un scope, une durée, une justification et un décideur. Pas un booléen caché dans votre code.',
      icon: 'override',
    },
    {
      title: 'Multi-canal',
      body: 'API REST pour l\'OMS, MCP pour les agents IA, Slack et email pour la boucle humaine. La conversation compliance atteint ses participants là où ils travaillent déjà.',
      icon: 'channel',
    },
  ],
  finalCta: {
    heading: 'Prêt à voir la plateforme en action ?',
    copy: 'Une démo live sur un tenant de démonstration qui reproduit votre forme, en moins d\'une heure.',
    primary: 'Réserver une démo',
    secondary: 'Nous parler',
  },
}

export function getHomeContent(locale: Locale): HomeContent {
  return locale === 'fr' ? FR : EN
}
