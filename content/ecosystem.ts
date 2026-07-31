import type { Locale } from '@/lib/i18n'

export type EcosystemItem = {
  id: string
  name: string
  tag: string
  strengths: string[]
}

export type EcosystemContent = {
  hero: {
    eyebrow: string
    heading: string
    sub: string
  }
  strengthsLabel: string
  items: EcosystemItem[]
  conclusion: {
    heading: string
    body: string
  }
}

const EN: EcosystemContent = {
  hero: {
    eyebrow: 'ECOSYSTEM',
    heading: 'Ecosystem',
    sub: 'The compliance and decisioning landscape at a glance. Strengths of each platform, side by side.',
  },
  strengthsLabel: 'Strengths',
  items: [
    {
      id: 'knowledge',
      name: 'Asplenz Knowledge',
      tag: 'COMPLIANCE DECISION PLATFORM',
      strengths: [
        'Native compliance data model : Policy, Rule, Target, Approval, Override, Pause, Consultation, GovernanceNote, Event',
        'Deterministic execution ; AI kept strictly out of the decision path',
        'Replayable audit trail with pinned rule versions, years later',
        'First-class Approvals, Overrides and Pauses as objects',
        'Multi-audience attribution without rule duplication',
        'Multi-channel human loop : REST API, MCP for AI agents, Slack, email',
        'White-label deployment : Organisation over Tenants with structural confidentiality wall',
      ],
    },
    {
      id: 'internal-development',
      name: 'Internal Development',
      tag: 'BUILD IT YOURSELF',
      strengths: [
        'Perfect fit for today\'s requirements',
        'Full control over implementation',
        'Existing development standards and CI',
        'No licensing costs',
        'Deep knowledge inside the team',
      ],
    },
    {
      id: 'decisionrules',
      name: 'decisionrules.io',
      tag: 'MODERN BRMS',
      strengths: [
        'Mature decision table experience',
        'Fast rule execution',
        'API-first architecture',
        'Low-code rule authoring',
        'Easy adoption for development teams',
      ],
    },
    {
      id: 'ibm-odm',
      name: 'IBM Operational Decision Manager',
      tag: 'ENTERPRISE BRMS',
      strengths: [
        'Enterprise maturity (20+ years)',
        'Large ecosystem and partner network',
        'DMN standard support',
        'Enterprise governance and controls',
        'Proven scalability',
        'Existing presence in many banks',
      ],
    },
    {
      id: 'camunda',
      name: 'Camunda',
      tag: 'BPM ORCHESTRATION',
      strengths: [
        'Workflow orchestration',
        'BPMN standard',
        'Human task management',
        'Process visibility and monitoring',
        'Enterprise integrations',
      ],
    },
    {
      id: 'taktile',
      name: 'Taktile',
      tag: 'AI DECISIONING',
      strengths: [
        'Risk scoring and credit underwriting',
        'AI-assisted decisioning',
        'Financial services expertise',
        'Excellent user experience',
        'Continuous model iteration',
      ],
    },
    {
      id: 'grc',
      name: 'ServiceNow GRC · OneTrust · MetricStream',
      tag: 'GRC PLATFORMS',
      strengths: [
        'Policy documentation and taxonomy',
        'Risk registers',
        'Internal controls catalogue',
        'Governance workflows',
        'Regulatory mapping and reporting',
      ],
    },
    {
      id: 'drools',
      name: 'Drools · Red Hat Decision Manager',
      tag: 'OPEN-SOURCE RULES',
      strengths: [
        'Very flexible inference engine',
        'Mature and battle-tested',
        'Open source with commercial support option',
        'Highly customisable',
        'Excellent for embedded rule execution',
      ],
    },
    {
      id: 'fenergo',
      name: 'Fenergo',
      tag: 'KYC · ONBOARDING',
      strengths: [
        'Deep KYC expertise',
        'Client onboarding workflows',
        'AML workflows',
        'Pre-packaged regulatory content',
        'Financial institution focus',
      ],
    },
  ],
  conclusion: {
    heading: 'One philosophy',
    body: 'Knowledge is designed to integrate with existing enterprise architecture as often as it replaces it. Whether your organisation already operates BPM, BRMS, GRC or decisioning platforms depends on your context, not on a predetermined architecture. Our goal is to provide deterministic compliance execution, replayable governance and a compliance operating model wherever those capabilities are needed.',
  },
}

const FR: EcosystemContent = {
  hero: {
    eyebrow: 'ÉCOSYSTÈME',
    heading: 'Écosystème',
    sub: 'Le paysage compliance et decisioning en un coup d\'œil. Les forces de chaque plateforme, côte à côte.',
  },
  strengthsLabel: 'Forces',
  items: [
    {
      id: 'knowledge',
      name: 'Asplenz Knowledge',
      tag: 'COMPLIANCE DECISION PLATFORM',
      strengths: [
        'Modèle de données compliance natif : Policy, Rule, Target, Approval, Override, Pause, Consultation, GovernanceNote, Event',
        'Exécution déterministe ; l\'IA reste strictement hors du chemin de décision',
        'Piste d\'audit rejouable avec versions de règles figées, des années plus tard',
        'Approvals, Overrides et Pauses comme objets de première classe',
        'Attribution multi-audience sans duplication de règles',
        'Boucle humaine multi-canal : API REST, MCP pour agents IA, Slack, email',
        'Déploiement en marque blanche : Organisation au-dessus de Tenants avec mur de confidentialité structurel',
      ],
    },
    {
      id: 'internal-development',
      name: 'Développement interne',
      tag: 'CONSTRUIRE SOI-MÊME',
      strengths: [
        'Fit parfait avec les besoins d\'aujourd\'hui',
        'Contrôle total sur l\'implémentation',
        'Standards de dev et CI existants',
        'Aucun coût de licence',
        'Connaissance profonde dans l\'équipe',
      ],
    },
    {
      id: 'decisionrules',
      name: 'decisionrules.io',
      tag: 'BRMS MODERNE',
      strengths: [
        'Expérience decision table mature',
        'Exécution rapide des règles',
        'Architecture API-first',
        'Rédaction de règles low-code',
        'Adoption facile pour les équipes dev',
      ],
    },
    {
      id: 'ibm-odm',
      name: 'IBM Operational Decision Manager',
      tag: 'BRMS ENTERPRISE',
      strengths: [
        'Maturité enterprise (20+ ans)',
        'Large écosystème et réseau de partenaires',
        'Support du standard DMN',
        'Gouvernance et contrôles enterprise',
        'Scalabilité éprouvée',
        'Présence existante dans de nombreuses banques',
      ],
    },
    {
      id: 'camunda',
      name: 'Camunda',
      tag: 'ORCHESTRATION BPM',
      strengths: [
        'Orchestration de workflow',
        'Standard BPMN',
        'Gestion des tâches humaines',
        'Visibilité et monitoring des processus',
        'Intégrations enterprise',
      ],
    },
    {
      id: 'taktile',
      name: 'Taktile',
      tag: 'DECISIONING IA',
      strengths: [
        'Risk scoring et credit underwriting',
        'Decisioning assisté par IA',
        'Expertise financial services',
        'Excellente expérience utilisateur',
        'Itération continue des modèles',
      ],
    },
    {
      id: 'grc',
      name: 'ServiceNow GRC · OneTrust · MetricStream',
      tag: 'PLATEFORMES GRC',
      strengths: [
        'Documentation et taxonomie des policies',
        'Registres de risques',
        'Catalogue de contrôles internes',
        'Workflows de gouvernance',
        'Mapping et reporting réglementaire',
      ],
    },
    {
      id: 'drools',
      name: 'Drools · Red Hat Decision Manager',
      tag: 'RÈGLES OPEN SOURCE',
      strengths: [
        'Moteur d\'inférence très flexible',
        'Mature et éprouvé',
        'Open source avec option de support commercial',
        'Hautement personnalisable',
        'Excellent pour l\'exécution de règles embarquées',
      ],
    },
    {
      id: 'fenergo',
      name: 'Fenergo',
      tag: 'KYC · ONBOARDING',
      strengths: [
        'Expertise KYC profonde',
        'Workflows d\'onboarding client',
        'Workflows AML',
        'Contenu réglementaire pré-packagé',
        'Focus institutions financières',
      ],
    },
  ],
  conclusion: {
    heading: 'Une philosophie',
    body: 'Knowledge est conçu pour s\'intégrer à l\'architecture enterprise existante aussi souvent qu\'il la remplace. Que votre organisation opère déjà du BPM, du BRMS, du GRC ou des plateformes de decisioning dépend de votre contexte, pas d\'une architecture prédéterminée. Notre objectif est de fournir l\'exécution compliance déterministe, la gouvernance rejouable et un modèle opérationnel compliance là où ces capacités sont nécessaires.',
  },
}

export function getEcosystemContent(locale: Locale): EcosystemContent {
  return locale === 'fr' ? FR : EN
}
