import type { Locale } from '@/lib/i18n'

export type PricingContent = {
  hero: {
    eyebrow: string
    headingLine1: string
    headingLine2: string
    sub: string
    primaryCta: string
    secondaryCta: string
  }
  principles: {
    heading: string
    intro: string
    items: { title: string; body: string; icon: 'seat' | 'cost' | 'ai' }[]
  }
  plansHeading: string
  enterprise: {
    label: string
    title: string
    price: string
    priceNote: string
    description: string
    capabilities: string[]
    cta: string
  }
  oem: {
    label: string
    title: string
    price: string
    description: string
    capabilities: string[]
    cta: string
    smallNote: string
  }
  designPartner: {
    heading: string
    intro: string
    body: string
    receivesHeading: string
    receives: string[]
    commitmentsHeading: string
    commitments: string[]
    cta: string
    note: string
  }
  comparison: {
    heading: string
    columns: [string, string]
    included: string
    notIncluded: string
    rows: [string, string, string][]
  }
  drivers: {
    heading: string
    items: { title: string; body: string; icon: 'deploy' | 'inst' | 'scope' | 'support' }[]
    note: string
  }
  whyNotPerUser: {
    heading: string
    body: string[]
  }
  faq: {
    heading: string
    items: { question: string; answer: string }[]
  }
  finalCta: {
    heading: string
    copy: string
    primaryCta: string
    secondaryCta: string
  }
}

export const CONTENT_EN: PricingContent = {
  hero: {
    eyebrow: 'PRICING',
    headingLine1: 'Built for regulated institutions.',
    headingLine2: 'Designed to scale with your business.',
    sub: 'Choose Knowledge for your own compliance operations, or embed it into your platform as a white-label compliance decision layer.',
    primaryCta: 'Discuss your requirements',
    secondaryCta: 'Explore the platform',
  },
  principles: {
    heading: 'Simple commercial principles',
    intro: 'Knowledge pricing reflects the value and operational scope of the platform, not the number of employees who log in.',
    items: [
      {
        title: 'No per-seat pricing',
        body: 'Compliance decisions often run through APIs, channels and service accounts. Pricing is not tied to individual user seats.',
        icon: 'seat',
      },
      {
        title: 'Predictable platform cost',
        body: 'Core platform pricing is agreed annually, with clear limits for institutions, environments and support.',
        icon: 'cost',
      },
      {
        title: 'Transparent AI usage',
        body: 'LLM usage is monitored separately through the operator dashboard. AI remains outside the deterministic decision path.',
        icon: 'ai',
      },
    ],
  },
  plansHeading: 'Two ways to buy Knowledge',
  enterprise: {
    label: 'FOR REGULATED INSTITUTIONS',
    title: 'Knowledge Enterprise',
    price: 'From €36,000',
    priceNote: 'Final pricing depends on deployment, usage, integrations and support requirements.',
    description: 'For banks, wealth managers, insurers and other regulated institutions operating Knowledge under the Knowledge brand.',
    capabilities: [
      'Compliance operating model',
      'Policy, rule and target management',
      'Deterministic real-time decision engine',
      'Approvals and scoped overrides',
      'Pauses and observe mode',
      'Immutable consultation history',
      'Replayable audit trails',
      'Natural-language explanations',
      'API and supported channels',
      'Standard onboarding',
      'Standard support',
      'One production institution',
      'Development and testing environments',
    ],
    cta: 'Request Enterprise pricing',
  },
  oem: {
    label: 'FOR INTEGRATORS AND PLATFORM PROVIDERS',
    title: 'Knowledge OEM',
    price: 'Custom annual licence',
    description: 'For technology providers that want to embed, operate and redistribute Knowledge under their own brand.',
    capabilities: [
      'Everything in Knowledge Enterprise',
      'White-label user experience',
      'OEM redistribution rights',
      'Multi-institution management',
      'Multi-tenant operator dashboard',
      'Tenant health and activity monitoring',
      'LLM consumption and cost monitoring',
      'Centralised platform administration',
      'Partner onboarding and enablement',
      'Deployment and environment management',
      'Product updates',
      'Commercial usage rights defined by contract',
    ],
    cta: 'Discuss an OEM partnership',
    smallNote: 'OEM pricing is based on distribution scope, number of client institutions, operational responsibility, support level and deployment model.',
  },
  designPartner: {
    heading: 'Founding Design Partner Programme',
    intro: 'We work with a limited number of strategic partners that want to shape the next generation of compliance infrastructure.',
    body: 'Founding Design Partners receive preferential commercial terms, early access to new capabilities and direct product collaboration. In return, partners commit to structured product feedback, recurring design reviews and a meaningful deployment plan.',
    receivesHeading: 'What partners receive',
    receives: [
      'Preferential launch terms',
      'Direct access to the product team',
      'Early access to new releases',
      'Influence on relevant roadmap priorities',
      'Joint architecture and deployment reviews',
      'Partner enablement',
    ],
    commitmentsHeading: 'Expected commitments',
    commitments: [
      'Structured monthly or quarterly feedback',
      'Access to anonymised operational feedback',
      'A defined integration and deployment plan',
      'A multi-year commercial commitment',
      'Reference or case-study participation when permitted',
    ],
    cta: 'Apply as a Design Partner',
    note: 'Participation is selective and subject to mutual fit.',
  },
  comparison: {
    heading: 'Feature comparison',
    columns: ['Knowledge Enterprise', 'Knowledge OEM'],
    included: 'Included',
    notIncluded: 'Not included',
    rows: [
      ['Deterministic compliance engine', 'yes', 'yes'],
      ['Policy, Rule and Target model', 'yes', 'yes'],
      ['Approvals and Overrides', 'yes', 'yes'],
      ['Replayable audit trail', 'yes', 'yes'],
      ['Natural-language explanations', 'yes', 'yes'],
      ['API access', 'yes', 'yes'],
      ['Knowledge branding', 'yes', 'Optional'],
      ['White label', 'no', 'yes'],
      ['Multi-institution control plane', 'no', 'yes'],
      ['Tenant monitoring', 'Single institution', 'Multi-institution'],
      ['LLM cost monitoring', 'Institution view', 'Partner-wide view'],
      ['Redistribution rights', 'no', 'yes'],
      ['Partner enablement', 'no', 'yes'],
      ['Commercial model', 'Annual subscription', 'OEM licence agreement'],
    ],
  },
  drivers: {
    heading: 'What determines pricing?',
    items: [
      {
        title: 'Deployment model',
        body: 'Knowledge-hosted, partner-hosted or customer-controlled infrastructure.',
        icon: 'deploy',
      },
      {
        title: 'Number of institutions',
        body: 'The number of separate regulated organisations operating the platform.',
        icon: 'inst',
      },
      {
        title: 'Operational scope',
        body: 'Production environments, tenants, transaction volume, storage and retention requirements.',
        icon: 'scope',
      },
      {
        title: 'Support and assurance',
        body: 'Support hours, response times, security reviews, regulatory requirements and service-level commitments.',
        icon: 'support',
      },
    ],
    note: 'An institution may operate several development, testing and production tenants. Raw tenant count is not the only pricing metric.',
  },
  whyNotPerUser: {
    heading: 'Why Knowledge is not priced per user',
    body: [
      'Knowledge is infrastructure for compliance decisions.',
      'A decision may be initiated by a compliance officer, an order management system, a Slack application, an email channel or another service acting on behalf of a regulated user.',
      'Pricing therefore reflects platform scope, institutional deployment and operational responsibility rather than login counts.',
    ],
  },
  faq: {
    heading: 'Frequently asked questions',
    items: [
      {
        question: 'Is there a free plan?',
        answer: 'No. Knowledge is designed for regulated production environments and requires solution design, onboarding and governance configuration.',
      },
      {
        question: 'Can we run a pilot?',
        answer: 'Yes. A time-bounded paid pilot can be defined around a specific compliance workflow, integration or institution.',
      },
      {
        question: 'Do you charge per user?',
        answer: 'No. Knowledge is not priced per seat. Commercial terms reflect the deployment and operational scope of the platform.',
      },
      {
        question: 'Do you charge per API request?',
        answer: 'Normal usage is covered by an agreed platform capacity. Exceptional volumes or infrastructure requirements may be addressed in the commercial agreement.',
      },
      {
        question: 'How are tenants counted?',
        answer: 'Tenants are used for technical and operational isolation. Pricing primarily considers client institutions and overall operating scope, since one institution may require several development, testing and production tenants.',
      },
      {
        question: 'How are LLM costs handled?',
        answer: 'Knowledge exposes LLM consumption and cost monitoring through its dashboards. Billing and provider arrangements are agreed according to the deployment model.',
      },
      {
        question: 'Can Knowledge be fully white-labelled?',
        answer: 'Yes. The OEM edition supports white-label deployment and contractual redistribution rights.',
      },
      {
        question: 'Can we host Knowledge ourselves?',
        answer: 'Supported deployment models are assessed during solution design. Hosting, security and operational responsibilities are defined in the commercial agreement.',
      },
      {
        question: 'Is the AI involved in compliance decisions?',
        answer: 'No. The critical decision path is deterministic. AI is used only for grounded natural-language explanations and related assistance outside the verdict-producing runtime.',
      },
      {
        question: 'Do you offer exclusivity?',
        answer: 'Exclusivity is not included by default. Any geographic, sector-specific or commercial exclusivity requires a separate agreement, minimum commitments and defined performance conditions.',
      },
    ],
  },
  finalCta: {
    heading: 'Define the right commercial model for your deployment',
    copy: 'Tell us whether you are deploying Knowledge inside your institution or embedding it into a platform for your clients.',
    primaryCta: 'Talk to us',
    secondaryCta: 'Explore Knowledge',
  },
}

export const CONTENT_FR: PricingContent = {
  hero: {
    eyebrow: 'TARIFS',
    headingLine1: 'Conçu pour les institutions régulées.',
    headingLine2: "Pensé pour grandir avec votre activité.",
    sub: 'Choisissez Knowledge pour vos propres opérations compliance, ou embarquez-le dans votre plateforme comme couche de décision compliance en marque blanche.',
    primaryCta: 'Discuter de vos besoins',
    secondaryCta: 'Explorer la plateforme',
  },
  principles: {
    heading: 'Des principes commerciaux simples',
    intro: 'La tarification Knowledge reflète la valeur et le périmètre opérationnel de la plateforme, pas le nombre d\'employés qui se connectent.',
    items: [
      {
        title: 'Aucun tarif au siège utilisateur',
        body: 'Les décisions compliance passent souvent par des API, des canaux et des comptes de service. Le tarif n\'est pas lié au nombre de sièges utilisateur.',
        icon: 'seat',
      },
      {
        title: 'Coût plateforme prévisible',
        body: 'La tarification cœur plateforme est convenue annuellement, avec des limites claires en institutions, environnements et support.',
        icon: 'cost',
      },
      {
        title: 'Consommation IA transparente',
        body: 'L\'usage IA est monitoré séparément dans le dashboard opérateur. L\'IA reste hors du chemin de décision déterministe.',
        icon: 'ai',
      },
    ],
  },
  plansHeading: 'Deux façons d\'acheter Knowledge',
  enterprise: {
    label: 'POUR LES INSTITUTIONS RÉGULÉES',
    title: 'Knowledge Enterprise',
    price: 'À partir de 36 000 €',
    priceNote: 'Le prix final dépend du déploiement, de l\'usage, des intégrations et des besoins de support.',
    description: 'Pour les banques, gérants de patrimoine, assureurs et autres institutions régulées qui opèrent Knowledge sous la marque Knowledge.',
    capabilities: [
      'Modèle opérationnel compliance',
      'Gestion des Policies, Rules et Targets',
      'Moteur de décision déterministe temps réel',
      'Approvals et Overrides scopés',
      'Pauses et mode observe',
      'Historique de consultations immuable',
      'Pistes d\'audit rejouables',
      'Explications en langage naturel',
      'API et canaux supportés',
      'Onboarding standard',
      'Support standard',
      'Une institution en production',
      'Environnements de développement et de test',
    ],
    cta: 'Demander un devis Enterprise',
  },
  oem: {
    label: 'POUR LES INTÉGRATEURS ET PLATEFORMES',
    title: 'Knowledge OEM',
    price: 'Licence annuelle sur mesure',
    description: 'Pour les fournisseurs technologiques qui veulent embarquer, opérer et redistribuer Knowledge sous leur propre marque.',
    capabilities: [
      'Tout Knowledge Enterprise',
      'Expérience utilisateur en marque blanche',
      'Droits de redistribution OEM',
      'Gestion multi-institutions',
      'Dashboard opérateur multi-tenants',
      'Suivi de santé et d\'activité des tenants',
      'Monitoring de la consommation et du coût IA',
      'Administration plateforme centralisée',
      'Onboarding et enablement partenaires',
      'Gestion des déploiements et environnements',
      'Mises à jour produit',
      'Droits d\'usage commercial définis par contrat',
    ],
    cta: 'Discuter d\'un partenariat OEM',
    smallNote: 'La tarification OEM dépend du périmètre de distribution, du nombre d\'institutions clientes, de la responsabilité opérationnelle, du niveau de support et du modèle de déploiement.',
  },
  designPartner: {
    heading: 'Programme Founding Design Partner',
    intro: 'Nous travaillons avec un nombre limité de partenaires stratégiques qui veulent façonner la prochaine génération d\'infrastructure compliance.',
    body: 'Les Founding Design Partners reçoivent des conditions commerciales préférentielles, un accès en avant-première aux nouvelles capacités et une collaboration produit directe. En retour, les partenaires s\'engagent sur un feedback produit structuré, des revues de design récurrentes et un plan de déploiement significatif.',
    receivesHeading: 'Ce que les partenaires reçoivent',
    receives: [
      'Conditions de lancement préférentielles',
      'Accès direct à l\'équipe produit',
      'Accès anticipé aux nouvelles versions',
      'Influence sur les priorités roadmap pertinentes',
      'Revues d\'architecture et de déploiement conjointes',
      'Enablement partenaire',
    ],
    commitmentsHeading: 'Engagements attendus',
    commitments: [
      'Feedback structuré mensuel ou trimestriel',
      'Accès à du feedback opérationnel anonymisé',
      'Un plan d\'intégration et de déploiement défini',
      'Un engagement commercial pluri-annuel',
      'Participation en référence ou étude de cas quand autorisé',
    ],
    cta: 'Postuler comme Design Partner',
    note: 'La participation est sélective et soumise à un fit mutuel.',
  },
  comparison: {
    heading: 'Comparaison des capacités',
    columns: ['Knowledge Enterprise', 'Knowledge OEM'],
    included: 'Inclus',
    notIncluded: 'Non inclus',
    rows: [
      ['Moteur compliance déterministe', 'yes', 'yes'],
      ['Modèle Policy, Rule et Target', 'yes', 'yes'],
      ['Approvals et Overrides', 'yes', 'yes'],
      ['Piste d\'audit rejouable', 'yes', 'yes'],
      ['Explications en langage naturel', 'yes', 'yes'],
      ['Accès API', 'yes', 'yes'],
      ['Marque Knowledge', 'yes', 'Optionnelle'],
      ['Marque blanche', 'no', 'yes'],
      ['Control plane multi-institutions', 'no', 'yes'],
      ['Monitoring tenants', 'Institution unique', 'Multi-institutions'],
      ['Monitoring coût IA', 'Vue institution', 'Vue partenaire'],
      ['Droits de redistribution', 'no', 'yes'],
      ['Enablement partenaire', 'no', 'yes'],
      ['Modèle commercial', 'Abonnement annuel', 'Contrat de licence OEM'],
    ],
  },
  drivers: {
    heading: 'Qu\'est-ce qui détermine le prix ?',
    items: [
      {
        title: 'Modèle de déploiement',
        body: 'Infrastructure hébergée par Knowledge, par le partenaire ou contrôlée par le client.',
        icon: 'deploy',
      },
      {
        title: 'Nombre d\'institutions',
        body: 'Le nombre d\'organisations régulées distinctes qui opèrent la plateforme.',
        icon: 'inst',
      },
      {
        title: 'Périmètre opérationnel',
        body: 'Environnements de production, tenants, volume de transactions, stockage et exigences de rétention.',
        icon: 'scope',
      },
      {
        title: 'Support et garanties',
        body: 'Heures de support, temps de réponse, revues sécurité, exigences réglementaires et engagements de service.',
        icon: 'support',
      },
    ],
    note: 'Une institution peut opérer plusieurs tenants de développement, test et production. Le compte brut de tenants n\'est pas la seule métrique de prix.',
  },
  whyNotPerUser: {
    heading: 'Pourquoi Knowledge n\'est pas tarifé au siège',
    body: [
      'Knowledge est une infrastructure pour les décisions compliance.',
      'Une décision peut être initiée par un compliance officer, un order management system, une application Slack, un canal email ou tout autre service agissant pour le compte d\'un utilisateur régulé.',
      'Le prix reflète donc le périmètre plateforme, le déploiement institutionnel et la responsabilité opérationnelle plutôt que le nombre de logins.',
    ],
  },
  faq: {
    heading: 'Questions fréquentes',
    items: [
      {
        question: 'Existe-t-il une offre gratuite ?',
        answer: 'Non. Knowledge est conçu pour des environnements de production régulés et nécessite une conception de solution, un onboarding et une configuration de gouvernance.',
      },
      {
        question: 'Pouvons-nous faire un pilote ?',
        answer: 'Oui. Un pilote payant borné dans le temps peut être défini autour d\'un workflow compliance, d\'une intégration ou d\'une institution spécifique.',
      },
      {
        question: 'Facturez-vous à l\'utilisateur ?',
        answer: 'Non. Knowledge n\'est pas tarifé au siège. Les conditions commerciales reflètent le déploiement et le périmètre opérationnel de la plateforme.',
      },
      {
        question: 'Facturez-vous à la requête API ?',
        answer: 'L\'usage normal est couvert par une capacité plateforme convenue. Des volumes exceptionnels ou des besoins d\'infrastructure peuvent être traités dans l\'accord commercial.',
      },
      {
        question: 'Comment sont comptés les tenants ?',
        answer: 'Les tenants servent à l\'isolation technique et opérationnelle. Le prix considère principalement les institutions clientes et le périmètre opérationnel global, car une institution peut nécessiter plusieurs tenants de développement, test et production.',
      },
      {
        question: 'Comment sont gérés les coûts IA ?',
        answer: 'Knowledge expose la consommation et le coût IA dans ses dashboards. La facturation et les arrangements fournisseurs sont convenus selon le modèle de déploiement.',
      },
      {
        question: 'Knowledge peut-il être entièrement en marque blanche ?',
        answer: 'Oui. L\'édition OEM supporte le déploiement en marque blanche et les droits contractuels de redistribution.',
      },
      {
        question: 'Pouvons-nous héberger Knowledge nous-mêmes ?',
        answer: 'Les modèles de déploiement supportés sont évalués pendant la conception de la solution. L\'hébergement, la sécurité et les responsabilités opérationnelles sont définis dans l\'accord commercial.',
      },
      {
        question: 'L\'IA intervient-elle dans les décisions compliance ?',
        answer: 'Non. Le chemin de décision critique est déterministe. L\'IA est utilisée uniquement pour des explications en langage naturel groundées et l\'assistance associée, hors du runtime qui produit le verdict.',
      },
      {
        question: 'Proposez-vous de l\'exclusivité ?',
        answer: 'L\'exclusivité n\'est pas incluse par défaut. Toute exclusivité géographique, sectorielle ou commerciale nécessite un accord séparé, des engagements minimums et des conditions de performance définies.',
      },
    ],
  },
  finalCta: {
    heading: 'Définissons le bon modèle commercial pour votre déploiement',
    copy: 'Dites-nous si vous déployez Knowledge dans votre institution ou l\'embarquez dans une plateforme pour vos clients.',
    primaryCta: 'Nous parler',
    secondaryCta: 'Explorer Knowledge',
  },
}

export function getPricingContent(locale: Locale): PricingContent {
  return locale === 'fr' ? CONTENT_FR : CONTENT_EN
}
