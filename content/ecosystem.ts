import type { Locale } from '@/lib/i18n'

export type EcosystemPlatformRow = {
  name: string
  isKnowledge?: boolean
  purpose: string
  models: string
  useCases: string
}

export type EcosystemTogetherBlock = {
  id: string
  partner: string
  partnerRole: string
  knowledgeRole: string
  contrast?: {
    partnerQuestion: string
    knowledgeQuestion: string
  }
  body: string[]
}

export type EcosystemArchitectureNode = {
  label: string
  emphasis?: boolean
}

export type EcosystemArchitecture = {
  id: string
  title: string
  nodes: EcosystemArchitectureNode[]
}

export type EcosystemHeroCategoryIcon = 'decisions' | 'workflow' | 'governance' | 'lifecycle'

export type EcosystemHeroCategory = {
  icon: EcosystemHeroCategoryIcon
  label: string
}

export type EcosystemContent = {
  hero: {
    eyebrow: string
    heading: string
    lead: string
    categoriesLead: string
    categories: EcosystemHeroCategory[]
    highlight: string
    outro: string
  }
  tableSection: {
    heading: string
    columns: {
      product: string
      purpose: string
      models: string
      useCases: string
    }
    rows: EcosystemPlatformRow[]
  }
  fitSection: {
    heading: string
    intro: string[]
    blocks: EcosystemTogetherBlock[]
  }
  architectureSection: {
    heading: string
    lead: string
    items: EcosystemArchitecture[]
  }
  philosophy: {
    eyebrow: string
    heading: string
    lines: EcosystemHeroCategory[]
    highlight: string
    closing: string[]
  }
}

const EN: EcosystemContent = {
  hero: {
    eyebrow: 'ECOSYSTEM',
    heading: 'Every platform solves a different problem.',
    lead: 'Enterprise architectures rarely rely on a single platform.',
    categoriesLead: 'Each platform category solves a different problem.',
    categories: [
      { icon: 'decisions', label: 'Execute business decisions' },
      { icon: 'workflow', label: 'Orchestrate workflows' },
      { icon: 'governance', label: 'Document governance' },
      { icon: 'lifecycle', label: 'Manage client lifecycle' },
    ],
    highlight:
      'Knowledge focuses on one problem : executing the compliance operating model.',
    outro:
      'Rather than replacing your existing stack, Knowledge is designed to integrate with it, or replace only the components that make sense.',
  },
  tableSection: {
    heading: 'Platform comparison',
    columns: {
      product: 'Product',
      purpose: 'Primary purpose',
      models: 'What the product lets you model',
      useCases: 'Typical use cases',
    },
    rows: [
      {
        name: 'Asplenz Knowledge',
        isKnowledge: true,
        purpose: 'Compliance decision platform',
        models:
          'Policies, Rules, Decision Tables, Targets, Approvals, Overrides, Consultations, Governance',
        useCases:
          'Regulatory compliance, internal policies, product eligibility, suitability, compliance operations',
      },
      {
        name: 'IBM ODM',
        purpose: 'Enterprise decision management',
        models: 'Business rules, Decision Tables, Decision Services',
        useCases:
          'Enterprise decision services, pricing, eligibility, routing',
      },
      {
        name: 'GoRules',
        purpose: 'Decision execution',
        models: 'Decision Graphs, Decision Tables, calculations',
        useCases:
          'Credit decisions, pricing, fraud, operational automation',
      },
      {
        name: 'DecisionRules',
        purpose: 'Business decision automation',
        models:
          'Decision Tables, Decision Trees, Decision Flows, scripts',
        useCases:
          'Pricing, routing, fee calculation, operational rules',
      },
      {
        name: 'Camunda',
        purpose: 'Process orchestration',
        models: 'BPMN processes, human tasks, events',
        useCases:
          'Workflow automation, case management, long-running processes',
      },
      {
        name: 'Taktile',
        purpose: 'AI decisioning',
        models: 'Risk strategies, scoring pipelines, decision flows',
        useCases: 'Credit underwriting, fraud detection',
      },
      {
        name: 'ServiceNow GRC · OneTrust · MetricStream',
        purpose: 'Governance',
        models: 'Policies, risks, controls, evidence',
        useCases: 'Governance, regulatory documentation',
      },
      {
        name: 'Fenergo',
        purpose: 'Client lifecycle management',
        models: 'KYC, AML, onboarding workflows',
        useCases: 'Client onboarding',
      },
      {
        name: 'Drools · Red Hat DM',
        purpose: 'Rule engine',
        models: 'Rules, facts, inference logic',
        useCases: 'Embedded business rules',
      },
      {
        name: 'Internal development',
        purpose: 'Custom platform',
        models: 'Anything',
        useCases: 'Organisation-specific platforms',
      },
    ],
  },
  fitSection: {
    heading: 'How Knowledge fits',
    intro: [
      'Knowledge does not compete with every platform.',
      'It complements many of them.',
      'Its role depends on the architecture you already have.',
    ],
    blocks: [
      {
        id: 'ibm-odm',
        partner: 'IBM ODM',
        partnerRole: 'IBM ODM executes enterprise decision services.',
        knowledgeRole:
          'Knowledge provides the compliance operating model around those decisions : policies, applicability, approvals, overrides and replayable governance.',
        body: [],
      },
      {
        id: 'camunda',
        partner: 'Camunda',
        partnerRole: 'Camunda orchestrates processes.',
        knowledgeRole: 'Knowledge evaluates compliance.',
        contrast: {
          partnerQuestion: 'Camunda decides when something happens.',
          knowledgeQuestion: 'Knowledge decides whether it complies.',
        },
        body: [],
      },
      {
        id: 'gorules',
        partner: 'GoRules',
        partnerRole: 'GoRules models decision logic using decision graphs.',
        knowledgeRole:
          'Knowledge models compliance policies and their applicability.',
        body: [
          'GoRules can calculate a business decision.',
          'Knowledge determines which compliance rules apply, records the governance around the decision and provides replayable evidence.',
          'The two products can coexist in the same architecture.',
        ],
      },
      {
        id: 'decisionrules',
        partner: 'DecisionRules',
        partnerRole:
          'DecisionRules automates operational business decisions.',
        knowledgeRole: 'Knowledge executes compliance decisions.',
        contrast: {
          partnerQuestion:
            'DecisionRules answers : what decision should be produced ?',
          knowledgeQuestion:
            'Knowledge answers : which compliance policies apply and how should this decision be governed ?',
        },
        body: [],
      },
      {
        id: 'grc',
        partner: 'GRC platforms',
        partnerRole: 'Governance platforms document compliance.',
        knowledgeRole: 'Knowledge executes compliance.',
        body: [
          'Policies documented in a GRC platform can be operationalised by Knowledge.',
        ],
      },
      {
        id: 'fenergo',
        partner: 'Fenergo',
        partnerRole:
          'Fenergo specialises in KYC and client lifecycle management.',
        knowledgeRole:
          'Knowledge provides a generic compliance execution platform that can also support onboarding decisions alongside many other regulated processes.',
        body: [],
      },
      {
        id: 'internal',
        partner: 'Internal development',
        partnerRole:
          'Many organisations already have internal rule engines or compliance services.',
        knowledgeRole:
          'Knowledge can progressively replace those components or integrate alongside them while preserving existing business applications.',
        body: [],
      },
    ],
  },
  architectureSection: {
    heading: 'Typical architectures',
    lead: 'Four common shapes. Knowledge sits wherever compliance decisions matter.',
    items: [
      {
        id: 'compliance-platform',
        title: 'Compliance platform',
        nodes: [
          { label: 'Business Application' },
          { label: 'Knowledge', emphasis: true },
          { label: 'Enterprise Systems' },
        ],
      },
      {
        id: 'decision-engine-plus-compliance',
        title: 'Decision engine + compliance',
        nodes: [
          { label: 'Business Application' },
          { label: 'Knowledge', emphasis: true },
          { label: 'GoRules' },
          { label: 'Enterprise Systems' },
        ],
      },
      {
        id: 'workflow-plus-compliance',
        title: 'Workflow + compliance',
        nodes: [
          { label: 'Business Application' },
          { label: 'Camunda' },
          { label: 'Knowledge', emphasis: true },
          { label: 'Enterprise Systems' },
        ],
      },
      {
        id: 'enterprise-decision-services',
        title: 'Enterprise decision services',
        nodes: [
          { label: 'Business Application' },
          { label: 'Knowledge', emphasis: true },
          { label: 'IBM ODM' },
        ],
      },
    ],
  },
  philosophy: {
    eyebrow: 'PHILOSOPHY',
    heading: 'Every platform has a purpose.',
    lines: [
      { icon: 'workflow', label: 'Workflow engines orchestrate.' },
      { icon: 'decisions', label: 'Decision engines calculate.' },
      { icon: 'governance', label: 'GRC platforms document.' },
      { icon: 'lifecycle', label: 'Client lifecycle platforms manage onboarding.' },
    ],
    highlight: 'Knowledge operationalises compliance.',
    closing: [
      'Its purpose is not to replace every system in your architecture.',
      'Its purpose is to provide a deterministic, replayable and governed compliance execution layer wherever compliance decisions matter.',
    ],
  },
}

const FR: EcosystemContent = {
  hero: {
    eyebrow: 'ÉCOSYSTÈME',
    heading: 'Chaque plateforme résout un problème différent.',
    lead: 'Les architectures enterprise reposent rarement sur une seule plateforme.',
    categoriesLead: 'Chaque catégorie de plateforme résout un problème différent.',
    categories: [
      { icon: 'decisions', label: 'Exécuter des décisions métier' },
      { icon: 'workflow', label: 'Orchestrer des workflows' },
      { icon: 'governance', label: 'Documenter la gouvernance' },
      { icon: 'lifecycle', label: 'Gérer le cycle de vie client' },
    ],
    highlight:
      "Knowledge se concentre sur un seul problème : exécuter le modèle opérationnel compliance.",
    outro:
      "Plutôt que de remplacer votre stack existante, Knowledge est conçu pour s'y intégrer, ou pour ne remplacer que les composants qui font sens.",
  },
  tableSection: {
    heading: 'Comparaison des plateformes',
    columns: {
      product: 'Produit',
      purpose: 'Objectif principal',
      models: 'Ce que le produit permet de modéliser',
      useCases: "Cas d'usage typiques",
    },
    rows: [
      {
        name: 'Asplenz Knowledge',
        isKnowledge: true,
        purpose: 'Plateforme de décision compliance',
        models:
          'Policies, Rules, Decision Tables, Targets, Approvals, Overrides, Consultations, Gouvernance',
        useCases:
          "Compliance réglementaire, politiques internes, éligibilité produit, suitability, opérations compliance",
      },
      {
        name: 'IBM ODM',
        purpose: 'Gestion de décision enterprise',
        models: 'Règles métier, Decision Tables, Decision Services',
        useCases:
          "Services de décision enterprise, pricing, éligibilité, routage",
      },
      {
        name: 'GoRules',
        purpose: "Exécution de décision",
        models: 'Decision Graphs, Decision Tables, calculs',
        useCases:
          'Décisions de crédit, pricing, fraude, automatisation opérationnelle',
      },
      {
        name: 'DecisionRules',
        purpose: 'Automatisation de décisions métier',
        models:
          'Decision Tables, Decision Trees, Decision Flows, scripts',
        useCases:
          'Pricing, routage, calcul de frais, règles opérationnelles',
      },
      {
        name: 'Camunda',
        purpose: 'Orchestration de processus',
        models: 'Processus BPMN, tâches humaines, événements',
        useCases:
          "Automatisation de workflow, gestion de cas, processus longs",
      },
      {
        name: 'Taktile',
        purpose: 'Decisioning IA',
        models: 'Stratégies de risque, pipelines de scoring, decision flows',
        useCases: 'Octroi de crédit, détection de fraude',
      },
      {
        name: 'ServiceNow GRC · OneTrust · MetricStream',
        purpose: 'Gouvernance',
        models: 'Politiques, risques, contrôles, preuves',
        useCases: 'Gouvernance, documentation réglementaire',
      },
      {
        name: 'Fenergo',
        purpose: 'Gestion du cycle de vie client',
        models: 'KYC, AML, workflows d\'onboarding',
        useCases: 'Onboarding client',
      },
      {
        name: 'Drools · Red Hat DM',
        purpose: 'Moteur de règles',
        models: 'Règles, faits, logique d\'inférence',
        useCases: 'Règles métier embarquées',
      },
      {
        name: 'Développement interne',
        purpose: 'Plateforme sur mesure',
        models: "N'importe quoi",
        useCases: "Plateformes propres à l'organisation",
      },
    ],
  },
  fitSection: {
    heading: "Comment Knowledge s'intègre",
    intro: [
      "Knowledge n'entre pas en compétition avec chaque plateforme.",
      "Il en complète beaucoup.",
      "Son rôle dépend de l'architecture que vous avez déjà.",
    ],
    blocks: [
      {
        id: 'ibm-odm',
        partner: 'IBM ODM',
        partnerRole:
          "IBM ODM exécute les services de décision enterprise.",
        knowledgeRole:
          "Knowledge fournit le modèle opérationnel compliance autour de ces décisions : politiques, applicabilité, approbations, overrides et gouvernance rejouable.",
        body: [],
      },
      {
        id: 'camunda',
        partner: 'Camunda',
        partnerRole: 'Camunda orchestre les processus.',
        knowledgeRole: 'Knowledge évalue la compliance.',
        contrast: {
          partnerQuestion:
            "Camunda décide quand quelque chose se produit.",
          knowledgeQuestion:
            "Knowledge décide si c'est conforme.",
        },
        body: [],
      },
      {
        id: 'gorules',
        partner: 'GoRules',
        partnerRole:
          'GoRules modélise la logique de décision via des decision graphs.',
        knowledgeRole:
          "Knowledge modélise les politiques compliance et leur applicabilité.",
        body: [
          'GoRules peut calculer une décision métier.',
          'Knowledge détermine quelles règles compliance s\'appliquent, enregistre la gouvernance autour de la décision et fournit une preuve rejouable.',
          "Les deux produits peuvent coexister dans la même architecture.",
        ],
      },
      {
        id: 'decisionrules',
        partner: 'DecisionRules',
        partnerRole:
          'DecisionRules automatise les décisions métier opérationnelles.',
        knowledgeRole: 'Knowledge exécute les décisions compliance.',
        contrast: {
          partnerQuestion:
            'DecisionRules répond à : quelle décision faut-il produire ?',
          knowledgeQuestion:
            'Knowledge répond à : quelles politiques compliance s\'appliquent et comment cette décision doit-elle être gouvernée ?',
        },
        body: [],
      },
      {
        id: 'grc',
        partner: 'Plateformes GRC',
        partnerRole:
          'Les plateformes de gouvernance documentent la compliance.',
        knowledgeRole: 'Knowledge exécute la compliance.',
        body: [
          "Les politiques documentées dans une plateforme GRC peuvent être opérationnalisées par Knowledge.",
        ],
      },
      {
        id: 'fenergo',
        partner: 'Fenergo',
        partnerRole:
          'Fenergo se spécialise dans le KYC et le cycle de vie client.',
        knowledgeRole:
          "Knowledge fournit une plateforme d'exécution compliance générique qui peut aussi supporter les décisions d'onboarding aux côtés de nombreux autres processus régulés.",
        body: [],
      },
      {
        id: 'internal',
        partner: 'Développement interne',
        partnerRole:
          'Beaucoup d\'organisations ont déjà des moteurs de règles ou services compliance internes.',
        knowledgeRole:
          "Knowledge peut remplacer progressivement ces composants ou s'intégrer à leurs côtés tout en préservant les applications métier existantes.",
        body: [],
      },
    ],
  },
  architectureSection: {
    heading: 'Architectures typiques',
    lead: 'Quatre formes courantes. Knowledge se place là où les décisions compliance comptent.',
    items: [
      {
        id: 'compliance-platform',
        title: 'Plateforme compliance',
        nodes: [
          { label: 'Application métier' },
          { label: 'Knowledge', emphasis: true },
          { label: "Systèmes enterprise" },
        ],
      },
      {
        id: 'decision-engine-plus-compliance',
        title: 'Moteur de décision + compliance',
        nodes: [
          { label: 'Application métier' },
          { label: 'Knowledge', emphasis: true },
          { label: 'GoRules' },
          { label: "Systèmes enterprise" },
        ],
      },
      {
        id: 'workflow-plus-compliance',
        title: 'Workflow + compliance',
        nodes: [
          { label: 'Application métier' },
          { label: 'Camunda' },
          { label: 'Knowledge', emphasis: true },
          { label: "Systèmes enterprise" },
        ],
      },
      {
        id: 'enterprise-decision-services',
        title: 'Services de décision enterprise',
        nodes: [
          { label: 'Application métier' },
          { label: 'Knowledge', emphasis: true },
          { label: 'IBM ODM' },
        ],
      },
    ],
  },
  philosophy: {
    eyebrow: 'PHILOSOPHIE',
    heading: 'Chaque plateforme a un objectif.',
    lines: [
      { icon: 'workflow', label: 'Les moteurs de workflow orchestrent.' },
      { icon: 'decisions', label: 'Les moteurs de décision calculent.' },
      { icon: 'governance', label: 'Les plateformes GRC documentent.' },
      { icon: 'lifecycle', label: "Les plateformes de cycle de vie client gèrent l'onboarding." },
    ],
    highlight: 'Knowledge opérationnalise la compliance.',
    closing: [
      "Son objectif n'est pas de remplacer chaque système de votre architecture.",
      "Son objectif est de fournir une couche d'exécution compliance déterministe, rejouable et gouvernée, là où les décisions compliance comptent.",
    ],
  },
}

export function getEcosystemContent(locale: Locale): EcosystemContent {
  return locale === 'fr' ? FR : EN
}
