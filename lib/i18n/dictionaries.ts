import type { Locale } from "./config"

const dictionaries = {
  en: {
    hero: {
      headline: "Certainty for every automated decision.",
      subheadline: "Reliable evidence for audit. Trusted signals for operations.",
      description:
        "Horizon is the trust infrastructure for automated decision-making. It captures and certifies your critical process history to produce indisputable evidence files. Built for high-stakes environments: AI systems, payment platforms, fraud detection, credit risk, and regulated workflows.",
      clarifier: "Not a dashboard. Not a decision engine. No technical constraints on your runtime.",
      microLine: "Built for the rigor of scrutiny, not for demos.",
      primaryCTA: "Request a briefing",
      secondaryCTA: "Read the evidence philosophy",
    },
    problem: {
      title: "The Challenge",
      subtitle: "The missing memory in today's automated systems",
      paragraph1:
        "Automated systems increasingly drive consequential outcomes. During operations, teams rely on global metrics and alerts to understand system health. This visibility is necessary, but it cannot justify a specific, individual action.",
      paragraph2:
        "When a single decision is challenged or audited, the question changes:\nWhy exactly did this happen in this specific case?",
      paragraph3: "Most organizations can explain:",
      list1: [
        "average system performance and behavior",
        "general controls and policies in place",
        "current operational indicators",
      ],
      paragraph4:
        "They often struggle to isolate the exact facts of a single decision. Under scrutiny, teams are forced into slow, costly, and often incomplete reconstruction of events.",
    },
    consequence: {
      title: "The Risk of Uncertainty",
      paragraph1: "Without immediately actionable proof:",
      list: [
        "oversight remains subjective and open to interpretation",
        "incidents trigger complex manual investigations",
        "compliance depends on narrative coherence rather than hard facts",
      ],
      paragraph2:
        "A compliant decision can still be indefensible if it cannot be substantiated. This gap is rarely visible during normal operations, but it becomes critical the moment a regulator or auditor steps in.",
    },
    whatIs: {
      title: "What Horizon Is",
      paragraph1:
        "Horizon is a responsibility layer designed to operate alongside your production systems without ever influencing or slowing down execution.\nIt certifies facts as they occur to create a protected, unalterable decision history.",
      paragraph2:
        "Horizon does not guide or modify your decisions.\nIts role is to preserve decision facts in a form that remains examinable later, even after your systems, policies, or vendors have changed.",
    },
    produces: {
      title: "The Value Produced",
      paragraph1:
        "For every automated decision or regulated transaction step, Horizon produces a certified evidence file.",
      paragraph2: "This file is designed to:",
      list: [
        "anchor discussions in objective facts rather than interpretation",
        "be used by risk and audit teams with full autonomy",
        "ensure total transparency for third parties (customers, regulators)",
      ],
      paragraph3:
        "The evidence exists before any dispute or audit arises.\nInformation that must be gathered after the fact is no longer evidence—it is a reconstruction.",
      paragraph4:
        "The file preserves what determined the decision: the inputs received, the criteria applied, and the observed results. It remains usable independently of your technical infrastructure.",
      paragraph5:
        "Horizon does not guess what happened.\nIt ensures that the reality of the facts is preserved.",
    },
    evidenceEval: {
      title: "Facts and Judgment",
      paragraph1: "Horizon is grounded in a fundamental separation.",
      paragraph2:
        "Evidence describes what actually occurred and was recorded. The evaluation of that decision remains your professional or human prerogative, now backed by an unquestionable factual base.",
      paragraph3:
        "AI models and business rules evolve over time.\nPreserved evidence of what was done remains stable and definitive.",
      paragraph4:
        "Horizon never replaces human judgment.\nIt ensures that judgment can rely on certified, verifiable facts.",
      tagline: "Monitoring helps you act. Horizon helps you prove.",
    },
    notIs: {
      title: "What Horizon Is Not",
      paragraph1: "Horizon occupies a unique place in your ecosystem:",
      list: [
        "not a monitoring or observability platform",
        "not a performance or quality evaluator",
        "not a runtime control or guardrail",
        "not a decision engine",
        "not a governance dashboard",
      ],
      paragraph2:
        "Horizon does not intervene in execution.\nIt authenticates, protects, and attests to the integrity of your processes.",
      paragraph3:
        "It provides a guarantee that simple log accumulation or retrospective reconstruction cannot offer.",
    },
    relationship: {
      title: "Strategic Complementarity",
      paragraph1:
        "Operational tools manage the present (alerts, performance).\nHorizon secures the past to protect your future (auditability, legal defense).",
      paragraph2:
        "By using Horizon, your production data becomes a trust asset. When a case is challenged later, your proof no longer depends on complex technical access or third-party vendors.",
      tagline1: "Visibility is operational.",
      tagline2: "Defensibility is strategic.",
    },
    assurance: {
      title: "Assurance Properties",
      paragraph1: "Evidence produced through Horizon is designed to be:",
      list: [
        "directly linked to individual decisions or transaction steps",
        "interpretable by non-technical stakeholders",
        "usable independently of the original system",
        "suitable for the strictest regulatory and legal scrutiny",
      ],
      paragraph2:
        "Proof validity is universal. It does not depend on technical tuning and remains explicit across all regulated industries.",
    },
    deployment: {
      title: "Sovereignty and Trust",
      paragraph1:
        "Horizon operates within your organization's trust boundary.\nThe organization retains absolute control over:",
      list: ["its architecture", "its business data", "its evidence assets"],
      paragraph2:
        "You do not need us to validate or interpret your evidence.\nOwnership of the information remains 100% internal.",
      paragraph3:
        "Horizon is not an automated mitigation tool.\nIt enables informed human response when scrutiny arises.",
    },
    users: {
      title: "Intended Users",
      paragraph1:
        "Horizon is designed for leadership responsible for automated decisions and teams that must guarantee their compliance:",
      list: [
        "Fraud and Payment teams securing disputes and chargebacks",
        "AI Leads answering transparency and regulatory questions",
        "Risk and Compliance teams automating oversight",
        "Legal teams requiring admissible evidence",
        "Engineering teams offloading audit-level data management",
      ],
      paragraph2:
        "Horizon creates a shared factual substrate.\nOne stream of truth supports both operational excellence and audit readiness.",
    },
    when: {
      title: "When Horizon Becomes Essential",
      paragraph1:
        "The value of proof is built before anything goes wrong.",
      paragraph2: "It becomes necessary when:",
      list: [
        "a transaction can be disputed months after execution",
        "a regulator requires the reasoning behind an AI decision",
        "company liability is tied to an automated outcome",
        "defensibility must outlive technical tools and vendors",
      ],
      paragraph3: "If a decision matters, proof must exist by default.",
    },
    philosophy: {
      title: "Philosophy",
      paragraph1:
        "We enable organizations to scale automation without sacrificing accountability.\nAct with agility, prove with certainty.",
      tagline: "Signals guide action. Evidence establishes truth.",
    },
    cta: {
      title: "Call to Action",
      paragraph1:
        "Learn how Horizon transforms your automated processes into highly auditable and defensible systems.",
      primaryCTA: "Request a briefing",
      secondaryCTA: "Discuss audit and monitoring use cases",
    },
    contact: {
      title: "Contact",
      intro: "Get in touch:",
      copied: "Copied",
      copy: "Copy email",
      mailto: "Send an email",
      note: "You can use this address to reach us directly.",
    },
  },

  fr: {
    hero: {
      headline: "La certitude pour chaque décision automatisée.",
      subheadline: "Des preuves pour l'audit. Des signaux pour l'excellence opérationnelle.",
      description:
        "Horizon est l'infrastructure de confiance pour vos décisions automatisées. Elle capture et certifie l'historique de vos processus critiques pour produire des dossiers de preuve indiscutables. Conçu pour les environnements exigeants : IA, paiements, détection de la fraude, crédit et workflows réglementés.",
      clarifier: "Ni un tableau de bord, ni un moteur de décision, ni une contrainte technique sur vos systèmes.",
      microLine: "Bâti pour la rigueur des contrôles, pas pour la démonstration.",
      primaryCTA: "Demander une présentation",
      secondaryCTA: "Découvrir la philosophie de la preuve",
    },
    problem: {
      title: "Le défi",
      subtitle: "L'absence de mémoire fiable dans les systèmes automatisés",
      paragraph1:
        "Les systèmes automatisés pilotent aujourd'hui des décisions à fort enjeu. En exploitation, les équipes disposent de métriques globales pour comprendre la performance. Cette visibilité statistique est nécessaire, mais elle ne permet pas de justifier un acte précis.",
      paragraph2:
        "Dès qu'une décision est contestée ou auditée, la question devient individuelle :\nPourquoi ce résultat a-t-il été rendu dans ce cas précis ?",
      paragraph3: "La plupart des organisations savent expliquer :",
      list1: [
        "la performance moyenne de leurs modèles",
        "les politiques générales de contrôle",
        "les indicateurs de santé du système",
      ],
      paragraph4:
        "Mais elles peinent à isoler les faits exacts d'une décision unique. En cas de contrôle, la reconstitution des faits est lente, coûteuse et souvent incomplète.",
    },
    consequence: {
      title: "Le risque de l'incertitude",
      paragraph1: "Sans preuve exploitable immédiatement :",
      list: [
        "la supervision reste subjective",
        "chaque incident impose une enquête manuelle complexe",
        "la conformité dépend de la capacité à raconter une histoire plutôt qu'à fournir des faits",
      ],
      paragraph2:
        "Une décision conforme peut devenir indéfendable si elle ne peut être étayée. Ce manque de preuves ne se voit pas au quotidien, mais il devient critique sous le regard d'un régulateur ou d'un auditeur.",
    },
    whatIs: {
      title: "Ce qu'est Horizon",
      paragraph1:
        "Horizon est une couche de responsabilité qui fonctionne en parallèle de vos systèmes sans jamais ralentir leur exécution.\nElle certifie les faits au moment où ils se produisent pour créer un historique de décision protégé et inaltérable.",
      paragraph2:
        "Horizon n'intervient pas dans le choix final et ne modifie pas vos algorithmes.\nSon rôle est de garantir que la vérité d'une décision est préservée pour être examinée plus tard, même si vos systèmes ou vos fournisseurs changent entre-temps.",
    },
    produces: {
      title: "La valeur produite",
      paragraph1:
        "Pour chaque acte automatisé ou étape réglementée, Horizon génère un dossier de preuve certifié.",
      paragraph2: "Ce dossier est conçu pour :",
      list: [
        "baser les discussions sur des faits objectifs plutôt que sur des interprétations",
        "être utilisé par les métiers du risque et de l'audit en toute autonomie",
        "garantir la transparence totale vis-à-vis des tiers (clients, régulateurs)",
      ],
      paragraph3:
        "La preuve existe avant même que le litige ne survienne.\nUne information que l'on doit aller chercher après coup n'est plus une preuve, c'est une reconstitution.",
      paragraph4:
        "Le dossier contient tout ce qui a déterminé la décision : les données reçues, les critères appliqués et les résultats observés. Il reste exploitable même si vous changez d'infrastructure technique.",
      paragraph5:
        "Horizon ne devine pas ce qui s'est passé.\nIl garantit que la réalité des faits est conservée.",
    },
    evidenceEval: {
      title: "Faits et Jugement",
      paragraph1: "Horizon repose sur une distinction fondamentale.",
      paragraph2:
        "Le dossier de preuve relate ce qui s'est réellement passé. L'évaluation de la qualité de cette décision reste votre prérogative métier ou humaine, mais elle s'appuie désormais sur une base factuelle incontestable.",
      paragraph3:
        "Les modèles d'IA et les règles métier évoluent sans cesse.\nLa preuve de ce qui a été fait, elle, reste stable et définitive.",
      paragraph4:
        "Horizon ne remplace pas l'expert humain.\nIl lui donne les moyens d'exercer son jugement sur des données certifiées.",
      tagline: "Les outils de monitoring vous aident à agir. Horizon vous aide à prouver.",
    },
    notIs: {
      title: "Ce que Horizon n'est pas",
      paragraph1: "Horizon occupe une place unique dans votre écosystème :",
      list: [
        "ce n'est pas un outil de surveillance (monitoring)",
        "ce n'est pas un moteur de calcul ou de décision",
        "ce n'est pas un outil d'analyse de performance",
        "ce n'est pas un obstacle à l'exécution technique",
      ],
      paragraph2:
        "Horizon est un observateur passif et certificateur.\nIl authentifie, protège et atteste du bon déroulement de vos processus.",
      paragraph3:
        "Il apporte une garantie qu'aucune simple accumulation de fichiers journaux (logs) ne peut offrir.",
    },
    relationship: {
      title: "Complémentarité stratégique",
      paragraph1:
        "Vos outils actuels gèrent le présent (alertes, performance).\nHorizon sécurise le passé pour protéger votre futur (auditabilité, défense juridique).",
      paragraph2:
        "En utilisant Horizon, vos données de production deviennent des actifs de confiance. En cas de contestation, vous ne dépendez plus d'un accès technique complexe ou d'un fournisseur tiers pour justifier vos actions.",
      tagline1: "La visibilité est opérationnelle.",
      tagline2: "La preuve est stratégique.",
    },
    assurance: {
      title: "Garanties offertes",
      paragraph1: "Chaque dossier de preuve est conçu pour être :",
      list: [
        "directement lié à une transaction ou une décision précise",
        "compréhensible par des non-techniciens",
        "utilisable de manière autonome, sans accès au système d'origine",
        "conforme aux exigences des audits les plus stricts",
      ],
      paragraph2:
        "La validité de la preuve est universelle. Elle ne dépend pas d'un réglage technique et s'applique à tous les secteurs régulés.",
    },
    deployment: {
      title: "Souveraineté et Contrôle",
      paragraph1:
        "Horizon s'intègre dans votre propre environnement de confiance.\nVotre organisation garde la maîtrise absolue de :",
      list: ["son architecture", "ses données métier", "ses actifs de preuve"],
      paragraph2:
        "Vous n'avez pas besoin de nous pour valider vos preuves.\nLa propriété de l'information reste 100% interne.",
      paragraph3:
        "Horizon n'est pas un outil de correction automatique.\nC'est l'outil qui permet à l'humain de répondre avec certitude lors d'un contrôle.",
    },
    users: {
      title: "Pour qui ?",
      paragraph1:
        "Horizon s'adresse aux directions qui portent la responsabilité des décisions automatisées et à celles qui doivent en garantir la conformité :",
      list: [
        "Directions Fraude et Paiement : pour sécuriser les litiges",
        "Responsables IA : pour répondre aux exigences de transparence",
        "Directions Risques et Conformité : pour automatiser les contrôles",
        "Directions Juridiques : pour disposer de preuves opposables",
        "Équipes Engineering : pour décharger la gestion des logs d'audit",
      ],
      paragraph2:
        "Horizon crée un langage commun : une seule source de vérité pour l'exploitation et pour l'audit.",
    },
    when: {
      title: "Quand Horizon devient-il essentiel ?",
      paragraph1:
        "La valeur de la preuve se construit avant que le problème ne survienne.",
      paragraph2: "Horizon devient indispensable quand :",
      list: [
        "une transaction peut être contestée plusieurs mois après son exécution",
        "un régulateur exige de comprendre le cheminement d'une décision IA",
        "la responsabilité de l'entreprise est engagée sur un résultat automatisé",
        "vous devez prouver votre conformité au-delà de la durée de vie de vos outils techniques",
      ],
      paragraph3: "Si une décision compte, la preuve doit exister par défaut.",
    },
    philosophy: {
      title: "Philosophie",
      paragraph1:
        "Nous permettons aux entreprises de déployer l'automatisation à grande échelle sans sacrifier la responsabilité.\nAgissez avec agilité, prouvez avec certitude.",
      tagline: "Les signaux guident l'action. La preuve établit la vérité.",
    },
    cta: {
      title: "Passer à l'action",
      paragraph1:
        "Découvrez comment Horizon transforme vos processus automatisés en systèmes hautement auditables et défendables.",
      primaryCTA: "Demander une présentation",
      secondaryCTA: "Échanger sur vos cas d'usage audit et risque",
    },
    contact: {
      title: "Contact",
      intro: "Nous contacter :",
      copied: "Copié",
      copy: "Copier l'adresse",
      mailto: "Envoyer un e-mail",
      note: "Vous pouvez utiliser cette adresse pour nous joindre directement.",
    },
  },
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]
}