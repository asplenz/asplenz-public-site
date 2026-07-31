import type { Locale } from '@/lib/i18n'

export type CompanyContent = {
  hero: {
    eyebrow: string
    heading: string
    sub: string
  }
  mission: {
    heading: string
    body: string[]
  }
  valuesHeading: string
  values: {
    icon: 'determinism' | 'explainability' | 'immutability' | 'humanLoop' | 'agnostic'
    title: string
    body: string
  }[]
  contact: {
    heading: string
    sub: string
    emailLabel: string
    email: string
    replyTime: string
    cta: string
  }
}

const EN: CompanyContent = {
  hero: {
    eyebrow: 'COMPANY',
    heading: 'Asplenz',
    sub: 'We build Knowledge, the Compliance Decision Platform for regulated industries.',
  },
  mission: {
    heading: 'Why we started',
    body: [
      'Compliance work in regulated industries is typically documented in memos, then re-implemented as hard-coded checks inside business software, then re-implemented again as post-trade reviews. Three copies of the same discipline, always out of sync.',
      'Knowledge collapses the three copies into one runtime that compliance teams control directly, that business systems integrate against, and that produces the audit trail a regulator asks for, without any of the three sides doing translation work.',
    ],
  },
  valuesHeading: 'What we care about',
  values: [
    {
      icon: 'determinism',
      title: 'Determinism',
      body: 'Same inputs, same decision, every time. The verdict never depends on the model of the day.',
    },
    {
      icon: 'explainability',
      title: 'Explainability',
      body: 'Every verdict can be rendered in natural language for a compliance officer, an auditor or a regulator. The engine decides ; AI explains on demand, never in the decision path.',
    },
    {
      icon: 'immutability',
      title: 'Immutability',
      body: 'Every decision is a row that can be replayed months later on the exact rule state that produced it.',
    },
    {
      icon: 'humanLoop',
      title: 'The human loop',
      body: 'Compliance officers are the authority. The product makes their decisions easy to reach, easy to make, and easy to audit.',
    },
    {
      icon: 'agnostic',
      title: 'Vertical-agnostic primitives',
      body: 'One runtime, several industries. Rule, Policy, Target, Override, Approval, Consultation carry the same meaning whether you are in wealth, insurance, healthcare, or governing an autonomous agent.',
    },
  ],
  contact: {
    heading: 'Contact',
    sub: 'The fastest way to see if Knowledge fits your situation is a working demo on a demo tenant that mirrors your shape.',
    emailLabel: 'Email',
    email: 'contact@asplenz.com',
    replyTime: 'We answer within one business day.',
    cta: 'Write to us',
  },
}

const FR: CompanyContent = {
  hero: {
    eyebrow: 'SOCIÉTÉ',
    heading: 'Asplenz',
    sub: 'Nous construisons Knowledge, la Compliance Decision Platform pour les secteurs régulés.',
  },
  mission: {
    heading: 'Pourquoi nous avons commencé',
    body: [
      'Le travail compliance dans les secteurs régulés est typiquement documenté dans des mémos, puis réimplémenté en dur dans les logiciels métier, puis réimplémenté encore en revues post-trade. Trois copies de la même discipline, toujours désynchronisées.',
      'Knowledge collapse les trois copies en un runtime unique que les équipes compliance contrôlent directement, contre lequel les systèmes métier s\'intègrent, et qui produit la piste d\'audit qu\'un régulateur demande, sans qu\'aucun des trois côtés fasse un travail de traduction.',
    ],
  },
  valuesHeading: 'Ce qui nous importe',
  values: [
    {
      icon: 'determinism',
      title: 'Déterminisme',
      body: 'Mêmes entrées, même décision, à chaque fois. Le verdict ne dépend jamais du modèle du jour.',
    },
    {
      icon: 'explainability',
      title: 'Explicabilité',
      body: 'Chaque verdict peut être rendu en langage naturel pour un compliance officer, un auditeur ou un régulateur. Le moteur décide ; l\'IA explique à la demande, jamais dans le chemin de décision.',
    },
    {
      icon: 'immutability',
      title: 'Immuabilité',
      body: 'Chaque décision est une ligne rejouable des mois plus tard sur l\'état exact des règles qui l\'a produite.',
    },
    {
      icon: 'humanLoop',
      title: 'La boucle humaine',
      body: 'Les compliance officers sont l\'autorité. Le produit rend leurs décisions faciles à joindre, faciles à prendre, faciles à auditer.',
    },
    {
      icon: 'agnostic',
      title: 'Primitives agnostiques du vertical',
      body: 'Un runtime, plusieurs industries. Rule, Policy, Target, Override, Approval, Consultation portent le même sens que vous soyez dans le wealth, l\'assurance, la santé, ou la gouvernance d\'un agent autonome.',
    },
  ],
  contact: {
    heading: 'Contact',
    sub: 'Le plus rapide pour évaluer si Knowledge convient à votre situation est une démo sur un tenant de démonstration qui reproduit votre forme.',
    emailLabel: 'Email',
    email: 'contact@asplenz.com',
    replyTime: 'Nous répondons sous un jour ouvré.',
    cta: 'Nous écrire',
  },
}

export function getCompanyContent(locale: Locale): CompanyContent {
  return locale === 'fr' ? FR : EN
}
