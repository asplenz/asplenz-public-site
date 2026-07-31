import type { Locale } from '@/lib/i18n'

export type OemContent = {
  hero: {
    eyebrow: string
    heading: string
    sub: string
    primaryCta: string
    secondaryCta: string
  }
  whyPartner: {
    heading: string
    intro: string
    items: { title: string; body: string; icon: 'backbone' | 'brand' | 'customers' }[]
  }
  capabilities: {
    heading: string
    intro: string
    items: string[]
  }
  wall: {
    heading: string
    intro: string
    seeLabel: string
    seeItems: string[]
    dontSeeLabel: string
    dontSeeItems: string[]
    closing: string
  }
  howItWorks: {
    heading: string
    steps: { number: string; title: string; body: string; icon: 'signature' | 'provision' | 'brand' | 'onboard' }[]
  }
  fdp: {
    heading: string
    body: string
    cta: string
  }
  faq: {
    heading: string
    items: { question: string; answer: string }[]
  }
  finalCta: {
    heading: string
    copy: string
    primary: string
    secondary: string
  }
}

const EN: OemContent = {
  hero: {
    eyebrow: 'OEM · PARTNERS',
    heading: 'Build your compliance platform on Knowledge',
    sub: 'For technology providers reselling to regulated institutions. Ship your platform without becoming a compliance backend company.',
    primaryCta: 'Discuss an OEM partnership',
    secondaryCta: 'See OEM pricing',
  },
  whyPartner: {
    heading: 'Why partner with Knowledge',
    intro: 'Three commitments we make to platform vendors that resell to banks, insurers and other regulated institutions.',
    items: [
      {
        title: 'Compliance backbone shipped',
        body: 'You get the runtime, the audit trail, the human workflow and the operator dashboard as one product. You focus on what makes your platform unique.',
        icon: 'backbone',
      },
      {
        title: 'Own your brand',
        body: 'The user experience your client institutions see carries your logo, your product name, your colour palette. Knowledge is invisible in their view.',
        icon: 'brand',
      },
      {
        title: 'Own your customers',
        body: 'Your client contracts, your commercial relationship, your billing. We provide the platform ; you own the partnership end to end.',
        icon: 'customers',
      },
    ],
  },
  capabilities: {
    heading: 'What OEM includes',
    intro: 'Everything Knowledge Enterprise ships, plus the layer that makes multi-institution reselling operationally practical.',
    items: [
      'White-label user experience with your branding',
      'OEM redistribution rights defined by contract',
      'Multi-institution management from one admin surface',
      'Multi-tenant operator dashboard : all your client institutions in one view',
      'Per-tenant health and activity monitoring',
      'Cross-tenant LLM consumption and cost dashboards',
      'Centralised platform administration for your operations team',
      'Partner onboarding and enablement',
      'Deployment and environment management',
      'Product updates included',
      'Support model calibrated to your redistribution obligations',
    ],
  },
  wall: {
    heading: 'The confidentiality wall',
    intro: 'Reselling a compliance runtime to competing banks only works if your client institutions trust you to not read their compliance content. Knowledge enforces that guarantee structurally, not by role permission.',
    seeLabel: 'As the platform vendor, you see',
    seeItems: [
      'Tenant list, IDs and provisioning status',
      'Consumption metrics per tenant',
      'FinOps dashboards and billing per tenant',
      'Per-tenant health and activity',
      'Org-scoped API keys',
      'Branding configuration',
    ],
    dontSeeLabel: 'You never see',
    dontSeeItems: [
      'Your client institutions\' rules and policies',
      'Their consultations, verdicts and precedence traces',
      'Their overrides and justifications',
      'Their approval decisions and comments',
      'Their audit trail contents',
      'Their compliance officers\' individual actions',
    ],
    closing: 'The wall is enforced at the API layer. An organisation-scoped API key returns 403 on any tenant-content route. Your client institutions pass their internal security review because the confidentiality guarantee is structural, not a role setting you could change.',
  },
  howItWorks: {
    heading: 'How it works',
    steps: [
      {
        number: '01',
        title: 'Signature',
        body: 'We agree the commercial terms : per-tenant model, distribution scope, support level, exclusivity if any. OEM contracts are structured around your redistribution shape.',
        icon: 'signature',
      },
      {
        number: '02',
        title: 'Provisioning',
        body: 'We provision your Organisation on Knowledge. You receive your organisation-scoped API keys, your admin dashboard, your billing view, and the operator interface for your client institutions.',
        icon: 'provision',
      },
      {
        number: '03',
        title: 'Branding',
        body: 'You configure your logo, product name, primary colour and email domain. What your client institutions see is your brand. Knowledge is invisible in their end-user surfaces.',
        icon: 'brand',
      },
      {
        number: '04',
        title: 'Onboarding your institutions',
        body: 'You add client institutions as tenants. Each institution gets an isolated compliance registry. You bill them, we bill you. The compliance content of each tenant is walled off from you and from other tenants.',
        icon: 'onboard',
      },
    ],
  },
  fdp: {
    heading: 'Interested in shaping the platform?',
    body: 'The Founding Design Partner Programme reserves preferential commercial terms and direct product collaboration for early OEM partners who want to co-shape the platform\'s evolution. Selective, subject to mutual fit.',
    cta: 'See the Design Partner Programme',
  },
  faq: {
    heading: 'OEM frequently asked questions',
    items: [
      {
        question: 'How do I support my client institutions?',
        answer: 'You are the first line of support for your client institutions. We provide you with runbooks, escalation channels for issues you cannot resolve, and product training for your support team.',
      },
      {
        question: 'Who owns the customer contracts?',
        answer: 'You do. Your client institutions sign with you, are billed by you, and are supported by you. We have a commercial relationship only with you.',
      },
      {
        question: 'How are LLM costs billed?',
        answer: 'LLM consumption is monitored per tenant in your operator dashboard. Billing arrangements are agreed in the OEM contract : pass-through, marked up, or included in your subscription pricing to your client institutions.',
      },
      {
        question: 'Can my client institutions customise rules independently?',
        answer: 'Yes. Each tenant has its own isolated compliance registry. Your client institutions configure their own policies, rules and targets. You retain administrative oversight without seeing their compliance content.',
      },
      {
        question: 'What about SSO and SAML for my client institutions?',
        answer: 'Standard SSO integration is supported at the tenant level. Each client institution can connect its own identity provider. The organisation admin does not need to be part of the tenant SSO group.',
      },
      {
        question: 'What happens if I want to migrate off Knowledge?',
        answer: 'The OEM contract defines the exit terms, including data export in a documented format, transition support duration, and continued API access for a wind-down period.',
      },
      {
        question: 'Can I extend the compliance model for my vertical?',
        answer: 'The nine entities are stable. Vertical-specific fields on Rule and Consultation are supported through the scope schema, which each tenant defines. This lets your platform ship with a domain-specific vocabulary without forking the runtime.',
      },
      {
        question: 'What SLAs are supported?',
        answer: 'SLAs are agreed in the OEM contract based on your client institutions\' regulatory obligations. Standard tiers range from best-effort to 24/7 with defined response and resolution windows.',
      },
      {
        question: 'Can I resell in multiple regions?',
        answer: 'Yes. Data residency per tenant is supported (specific region assignment for each client institution). Regional redistribution scope is defined in the OEM contract.',
      },
      {
        question: 'Is regional or sector exclusivity available?',
        answer: 'Yes, on request. Exclusivity requires minimum commercial commitments and defined performance conditions. Discussed case by case.',
      },
    ],
  },
  finalCta: {
    heading: 'Ready to discuss?',
    copy: 'Tell us about your platform, your target client institutions, and the shape of your deployment. We answer within one business day.',
    primary: 'Discuss an OEM partnership',
    secondary: 'See OEM pricing',
  },
}

const FR: OemContent = {
  hero: {
    eyebrow: 'OEM · PARTENAIRES',
    heading: 'Construisez votre plateforme compliance sur Knowledge',
    sub: 'Pour les fournisseurs technologiques qui revendent aux institutions régulées. Livrez votre plateforme sans devenir un éditeur de backend compliance.',
    primaryCta: 'Discuter d\'un partenariat OEM',
    secondaryCta: 'Voir les tarifs OEM',
  },
  whyPartner: {
    heading: 'Pourquoi partenariat avec Knowledge',
    intro: 'Trois engagements que nous prenons envers les éditeurs de plateformes qui revendent aux banques, assureurs et autres institutions régulées.',
    items: [
      {
        title: 'Le socle compliance livré',
        body: 'Vous obtenez le runtime, la piste d\'audit, le workflow humain et le dashboard opérateur comme un seul produit. Vous vous concentrez sur ce qui rend votre plateforme unique.',
        icon: 'backbone',
      },
      {
        title: 'Votre marque, votre visibilité',
        body: 'L\'expérience utilisateur que vos institutions clientes voient porte votre logo, votre nom de produit, votre palette de couleurs. Knowledge est invisible dans leur vue.',
        icon: 'brand',
      },
      {
        title: 'Vos clients, votre relation',
        body: 'Vos contrats clients, votre relation commerciale, votre facturation. Nous fournissons la plateforme ; vous possédez le partenariat de bout en bout.',
        icon: 'customers',
      },
    ],
  },
  capabilities: {
    heading: 'Ce que OEM inclut',
    intro: 'Tout ce que Knowledge Enterprise livre, plus la couche qui rend la revente multi-institutions opérationnellement praticable.',
    items: [
      'Expérience utilisateur en marque blanche à vos couleurs',
      'Droits de redistribution OEM définis par contrat',
      'Gestion multi-institutions depuis une seule surface admin',
      'Dashboard opérateur multi-tenants : toutes vos institutions clientes dans une seule vue',
      'Suivi de santé et d\'activité par tenant',
      'Dashboards de consommation et de coût IA cross-tenant',
      'Administration plateforme centralisée pour votre équipe opérations',
      'Onboarding et enablement partenaires',
      'Gestion des déploiements et environnements',
      'Mises à jour produit incluses',
      'Modèle de support calibré à vos obligations de redistribution',
    ],
  },
  wall: {
    heading: 'Le mur de confidentialité',
    intro: 'Revendre un runtime compliance à des banques concurrentes ne fonctionne que si vos institutions clientes vous font confiance pour ne pas lire leur contenu compliance. Knowledge garantit cela structurellement, pas par permission de rôle.',
    seeLabel: 'En tant qu\'éditeur, vous voyez',
    seeItems: [
      'Liste des tenants, IDs et statut de provisioning',
      'Métriques de consommation par tenant',
      'Dashboards FinOps et facturation par tenant',
      'Santé et activité par tenant',
      'Clés API scopées organisation',
      'Configuration de branding',
    ],
    dontSeeLabel: 'Vous ne voyez jamais',
    dontSeeItems: [
      'Les règles et policies de vos institutions clientes',
      'Leurs consultations, verdicts et traces de précédence',
      'Leurs overrides et justifications',
      'Leurs décisions d\'approbation et commentaires',
      'Le contenu de leur piste d\'audit',
      'Les actions individuelles de leurs compliance officers',
    ],
    closing: 'Le mur est appliqué au niveau API. Une clé API scopée organisation renvoie 403 sur toute route de contenu tenant. Vos institutions clientes passent leur revue sécurité interne parce que la garantie de confidentialité est structurelle, pas un paramètre de rôle que vous pourriez changer.',
  },
  howItWorks: {
    heading: 'Comment ça marche',
    steps: [
      {
        number: '01',
        title: 'Signature',
        body: 'Nous convenons des termes commerciaux : modèle par tenant, périmètre de distribution, niveau de support, exclusivité le cas échéant. Les contrats OEM sont structurés autour de la forme de votre redistribution.',
        icon: 'signature',
      },
      {
        number: '02',
        title: 'Provisioning',
        body: 'Nous provisionnons votre Organisation sur Knowledge. Vous recevez vos clés API scopées organisation, votre dashboard admin, votre vue de facturation, et l\'interface opérateur pour vos institutions clientes.',
        icon: 'provision',
      },
      {
        number: '03',
        title: 'Branding',
        body: 'Vous configurez votre logo, nom de produit, couleur principale et domaine email. Ce que vos institutions clientes voient est votre marque. Knowledge est invisible dans leurs surfaces utilisateur final.',
        icon: 'brand',
      },
      {
        number: '04',
        title: 'Onboarding de vos institutions',
        body: 'Vous ajoutez vos institutions clientes comme tenants. Chaque institution obtient un registre compliance isolé. Vous les facturez, nous vous facturons. Le contenu compliance de chaque tenant est isolé de vous et des autres tenants.',
        icon: 'onboard',
      },
    ],
  },
  fdp: {
    heading: 'Intéressé pour co-shaper la plateforme ?',
    body: 'Le Programme Founding Design Partner réserve des conditions commerciales préférentielles et une collaboration produit directe aux partenaires OEM précoces qui veulent co-shaper l\'évolution de la plateforme. Sélectif, soumis à un fit mutuel.',
    cta: 'Voir le Programme Design Partner',
  },
  faq: {
    heading: 'FAQ OEM',
    items: [
      {
        question: 'Comment je supporte mes institutions clientes ?',
        answer: 'Vous êtes la première ligne de support pour vos institutions clientes. Nous vous fournissons des runbooks, des canaux d\'escalade pour les problèmes que vous ne pouvez pas résoudre, et une formation produit pour votre équipe support.',
      },
      {
        question: 'Qui possède les contrats clients ?',
        answer: 'Vous. Vos institutions clientes signent avec vous, sont facturées par vous, et supportées par vous. Nous avons une relation commerciale uniquement avec vous.',
      },
      {
        question: 'Comment les coûts IA sont-ils facturés ?',
        answer: 'La consommation IA est monitorée par tenant dans votre dashboard opérateur. Les arrangements de facturation sont convenus dans le contrat OEM : pass-through, avec marge, ou inclus dans votre pricing d\'abonnement à vos institutions clientes.',
      },
      {
        question: 'Mes institutions clientes peuvent-elles personnaliser leurs règles indépendamment ?',
        answer: 'Oui. Chaque tenant a son propre registre compliance isolé. Vos institutions clientes configurent leurs propres policies, rules et targets. Vous conservez la supervision administrative sans voir leur contenu compliance.',
      },
      {
        question: 'Qu\'en est-il du SSO et SAML pour mes institutions clientes ?',
        answer: 'L\'intégration SSO standard est supportée au niveau tenant. Chaque institution cliente peut connecter son propre identity provider. L\'admin organisation n\'a pas besoin de faire partie du groupe SSO du tenant.',
      },
      {
        question: 'Que se passe-t-il si je veux migrer hors Knowledge ?',
        answer: 'Le contrat OEM définit les termes de sortie, y compris l\'export de données dans un format documenté, la durée de support à la transition, et l\'accès API continué pour une période de wind-down.',
      },
      {
        question: 'Puis-je étendre le modèle compliance pour mon vertical ?',
        answer: 'Les neuf entités sont stables. Les champs vertical-spécifiques sur Rule et Consultation sont supportés via le scope schema, que chaque tenant définit. Cela permet à votre plateforme de livrer avec un vocabulaire domaine-spécifique sans forker le runtime.',
      },
      {
        question: 'Quels SLAs sont supportés ?',
        answer: 'Les SLAs sont convenus dans le contrat OEM selon les obligations réglementaires de vos institutions clientes. Les tiers standards vont de best-effort à 24/7 avec des fenêtres de réponse et résolution définies.',
      },
      {
        question: 'Puis-je revendre dans plusieurs régions ?',
        answer: 'Oui. La data residency par tenant est supportée (assignation régionale spécifique pour chaque institution cliente). Le périmètre de redistribution régional est défini dans le contrat OEM.',
      },
      {
        question: 'L\'exclusivité régionale ou sectorielle est-elle disponible ?',
        answer: 'Oui, sur demande. L\'exclusivité nécessite des engagements commerciaux minimums et des conditions de performance définies. Discutée au cas par cas.',
      },
    ],
  },
  finalCta: {
    heading: 'Prêt à discuter ?',
    copy: 'Dites-nous en plus sur votre plateforme, vos institutions clientes cibles, et la forme de votre déploiement. Nous répondons sous un jour ouvré.',
    primary: 'Discuter d\'un partenariat OEM',
    secondary: 'Voir les tarifs OEM',
  },
}

export function getOemContent(locale: Locale): OemContent {
  return locale === 'fr' ? FR : EN
}
