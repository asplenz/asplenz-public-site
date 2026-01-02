import type { Locale } from "./config"

const dictionaries = {
  en: {
    hero: {
      headline: "Make automated decisions examinable, without reconstruction",
      subheadline: "In-perimeter evidence infrastructure",
      description:
        "Horizon records what systems execute and what organizations evaluate as verifiable facts, at the time of execution.\nHorizon does not decide, optimize, interpret, or enforce.\nHorizon ensures that facts exist and remain examinable over time.",
      clarifier: "Not an observability platform. Not a decision engine. Not a compliance tool.",
      microLine: "Contact us to discuss your context.",
      primaryCTA: "Contact Us",
      secondaryCTA: "Learn more",
    },
   problem: {
      title: "When scrutiny begins, reconstruction becomes necessary",
      subtitle: "Past decisions are explained, not established as facts",
      paragraph1:
        "In most organizations, past decisions are explained using scattered logs, dashboards reflecting the current state, and human explanations after the fact.",
      paragraph2:
        "This works until a specific decision is examined.",
      paragraph3:
        "At that point, reconstruction becomes unavoidable: context must be rebuilt, systems have already evolved, and explanations replace facts.",
      list1: [
        "scattered logs",
        "dashboards reflecting the current state",
        "human explanations after the fact"
      ],
      paragraph4:
        "Investigations take days. Answers remain fragile and disputable."
    },
    consequence: {
      title: "Why reconstruction fails",
      paragraph1: "Reconstruction is a dependency on things that do not survive time:",
      list: [
        "system configurations",
        "model versions",
        "human memory",
        "current tooling"
      ],
      paragraph2:
        "When decisions are examined later, organizations are forced to answer: \"Here is what the system does today.\" That is not evidence. That is approximation. Horizon removes reconstruction as a prerequisite for examination.",
    },
    whatIs: {
      title: "Evidence must be created at execution time",
      paragraph1:
        "Horizon is built on a simple principle:\nEvidence is created when execution happens — not when questions arise.",
      paragraph2:
        "Horizon acts as a notarial backbone for declared observations: what a system executed, what an organization evaluated, in what order, with cryptographic integrity.\nIt does not interpret meaning. It preserves facts of record.",
    },
    produces: {
      title: "How Horizon works (high level)",
      paragraph1:
        "Horizon records declared observations, not inferred truths.",
      paragraph2: "Executions and Evaluations:",
      list: [
        "Executions: concrete system actions, recorded with time, context, and source",
        "Evaluations: assessments produced by the organization, treated as facts of declaration, independent of correctness or outcome"
      ],
      paragraph3:
        "Horizon guarantees: integrity, ordering, durability, and offline verifiability.",
      paragraph4:
        "It never inspects business meaning.",
      paragraph5:
        "What the system executed and what the organization evaluated are preserved as verifiable facts.",
    },
    evidenceEval: {
      title: "AI-assisted decisions make this unavoidable",
      paragraph1: "Many organizations are introducing GenAI or RAG systems to assist high-risk decisions: credit approvals, risk assessments, compliance reviews.",
      paragraph2:
        "These systems evolve continuously, rely on changing sources, and produce non-deterministic outputs.\nThe same question asked later will not produce the same result.",
      paragraph3:
        "Responsibility remains fully organizational.",
      paragraph4:
        "Horizon preserves: what was evaluated, what was presented, what was declared, at the moment the decision was made.",
      tagline: "Facts exist. Systems decide, interpret, and enforce.",
    },
    notIs: {
      title: "What Horizon is, and is not",
      paragraph1: "Horizon is:",
      list: [
        "an infrastructure for factual evidence",
        "a system of record for executions and evaluations",
        "a cryptographically verifiable, ordered ledger",
        "deployed inside your trust perimeter"
      ],
      paragraph2:
        "Horizon is not: an observability platform, a decision engine, a compliance or governance tool, an AI system.",
      paragraph3:
        "Horizon ensures that facts exist. Other systems decide, interpret, and enforce.",
    },
    relationship: {
      title: "Why reconstruction fails",
      paragraph1:
        "When decisions are examined later, organizations are forced to answer:\n\"Here is what the system does today.\"",
      paragraph2:
        "That is not evidence.\nThat is approximation.",
      tagline1: "Horizon removes reconstruction as a prerequisite for examination.",
      tagline2: "Evidence remains under your control.",
    },
    assurance: {
      title: "Representative use cases",
      paragraph1: "Horizon provides stable, independent evidence of what happened:",
      list: [
        "Transaction or payment dispute: examine exactly why a transaction was refused, using evidence recorded at execution time",
        "AI-assisted credit decision: examine what was known, evaluated, and presented to the agent, without replaying models",
        "Audit or regulatory review: provide stable, independent evidence of what happened, regardless of current system state"
      ],
      paragraph2:
        "When a decision is contested, you examine facts, not reconstruct a story.",
    },
    deployment: {
      title: "Trust boundary and deployment",
      paragraph1:
        "Horizon is deployed inside your perimeter:",
      list: [
        "on-premise",
        "private cloud",
        "air-gapped environments"
      ],
      paragraph2:
        "No external notarization service is required.\nVerification remains possible offline, without vendor dependency.",
      paragraph3:
        "Evidence remains under your control.",
    },
    users: {
      title: "Who Horizon is for",
      paragraph1:
        "Horizon is designed for organizations where automated decisions are frequent and contestable:",
      list: [
        "Fintech and payment platforms: automated decisions at scale, frequent disputes, costly explanations",
        "Banks and financial institutions: AI-assisted decisions in credit, risk, or compliance",
        "Other regulated industries: insurance, marketplaces, public-sector systems"
      ],
      paragraph2:
        "A simple qualification question: When a decision is contested, do you examine facts, or reconstruct a story?",
    },
    when: {
      title: "Closing",
      paragraph1:
        "Most systems are built to operate.",
      paragraph2: "Few are built to be examined later.",
      list: [
        "Most systems are built to operate",
        "Few are built to be examined later",
        "Horizon ensures that when questions arise, facts already exist"
      ],
      paragraph3: "Horizon ensures that when questions arise, facts already exist.",
    },
    philosophy: {
      title: "The Horizon Philosophy",
      paragraph1:
        "Evidence infrastructure for automated decisions. Notary, not judge. Infrastructure, not product. Proof, not opinion. Examinable facts, not procedural.",
      tagline: "We prove, we don't promise.",
    },
    cta: {
      title: "Get Started",
      paragraph1:
        "Contact us to discuss your context.",
      primaryCTA: "Contact Us",
      secondaryCTA: "Learn more",
    },
    contact: {
      title: "Contact",
      email: "contact@asplenz.com",
      intro: "Get in touch:",
      copied: "Copied",
      copy: "Copy email",
      mailto: "Send an email",
      note: "For technical discussions, pilot programs, or partnership inquiries.",
    },
  },

  fr: {
    hero: {
      headline: "Rendre les décisions automatisées examinables, sans reconstruction",
      subheadline: "Infrastructure de preuve factuelle souveraine",
      description:
        "Horizon enregistre ce que les systèmes exécutent et ce que l'organisation évalue sous forme de faits vérifiables, au moment de l'exécution.\nHorizon ne décide pas, n'optimise pas, n'interprète pas et n'exerce aucune contrainte.\nHorizon garantit que les faits existent et restent examinables dans le temps.",
      clarifier: "Ni un outil d'observabilité, ni un moteur de décision, ni un système de conformité.",
      microLine: "Contactez-nous pour discuter de votre contexte.",
      primaryCTA: "Contactez-nous",
      secondaryCTA: "En savoir plus",
    },
    problem: {
      title: "Lorsque l’examen commence, la reconstruction devient nécessaire",
      subtitle: "Les décisions passées sont expliquées, pas établies comme des faits",
      paragraph1:
        "Dans la plupart des organisations, les décisions passées sont expliquées à partir de journaux dispersés, de tableaux de bord reflétant l’état courant, et d’explications humaines a posteriori.",
      paragraph2:
        "Cela fonctionne jusqu’à ce qu’une décision précise soit examinée.",
      paragraph3:
        "À ce moment-là, la reconstruction devient inévitable : le contexte doit être reconstitué, les systèmes ont déjà évolué, et les explications remplacent les faits.",
      list1: [
        "journaux dispersés",
        "tableaux de bord reflétant l’état courant",
        "explications humaines a posteriori"
      ],
      paragraph4:
        "Les investigations prennent des jours. Les réponses restent fragiles et contestables."
    }
    ,
    consequence: {
      title: "Pourquoi la reconstruction échoue",
      paragraph1: "La reconstruction dépend d'éléments qui ne survivent pas au temps :",
      list: [
        "configurations",
        "versions de modèles",
        "mémoire humaine",
        "outillage courant"
      ],
      paragraph2:
        "Lorsqu'une décision est examinée plus tard, l'organisation est forcée de dire : « Voilà comment le système fonctionne aujourd'hui. » Ce n'est pas une preuve. C'est une approximation. Horizon élimine la reconstruction comme dépendance.",
    },
    whatIs: {
      title: "L'évidence doit être créée au moment de l'exécution",
      paragraph1:
        "Horizon repose sur un principe simple :\nL'évidence se crée à l'exécution, pas lorsque les questions apparaissent.",
      paragraph2:
        "Horizon agit comme une colonne vertébrale notariale pour des observations déclarées : ce qui a été exécuté, ce qui a été évalué, dans quel ordre, avec intégrité cryptographique.\nHorizon ne donne pas de sens. Horizon préserve des faits enregistrés.",
    },
    produces: {
      title: "Fonctionnement d'Horizon (vue d'ensemble)",
      paragraph1:
        "Horizon enregistre des observations déclarées, pas des vérités inférées.",
      paragraph2: "Exécutions et Évaluations :",
      list: [
        "Exécutions : actions concrètes du système, enregistrées avec temps, contexte et source",
        "Évaluations : appréciations produites par l'organisation, traitées comme des faits de déclaration, indépendantes de leur justesse"
      ],
      paragraph3:
        "Horizon garantit : l'intégrité, l'ordre, la durabilité, et la vérifiabilité hors ligne.",
      paragraph4:
        "Horizon n'interprète jamais le sens métier.",
      paragraph5:
        "Ce qui a été exécuté et ce qui a été évalué sont préservés comme des faits vérifiables.",
    },
    evidenceEval: {
      title: "Les décisions assistées par IA rendent cela inévitable",
      paragraph1: "De nombreuses organisations introduisent des systèmes GenAI ou RAG pour assister des décisions à fort enjeu : décisions de crédit, évaluations de risque, contrôles de conformité.",
      paragraph2:
        "Ces systèmes évoluent en continu, reposent sur des sources changeantes, et produisent des résultats non déterministes.\nLa même question posée plus tard ne produira pas la même réponse.",
      paragraph3:
        "La responsabilité reste entièrement organisationnelle.",
      paragraph4:
        "Horizon préserve : ce qui a été évalué, ce qui a été présenté, ce qui a été déclaré, au moment exact de la décision.",
      tagline: "Les faits existent. Les autres systèmes décident, interprètent et appliquent.",
    },
    notIs: {
      title: "Ce que Horizon est, et n'est pas",
      paragraph1: "Horizon est :",
      list: [
        "une infrastructure de preuve factuelle",
        "un système de référence pour exécutions et évaluations",
        "un registre ordonné et vérifiable cryptographiquement",
        "déployé dans le périmètre de confiance"
      ],
      paragraph2:
        "Horizon n'est pas : un outil d'observabilité, un moteur de décision, un système de conformité, un produit d'IA.",
      paragraph3:
        "Horizon garantit l'existence des faits. Les autres systèmes décident, interprètent et appliquent.",
    },
    relationship: {
      title: "Pourquoi la reconstruction échoue",
      paragraph1:
        "Lorsqu'une décision est examinée plus tard, l'organisation est forcée de dire :\n« Voilà comment le système fonctionne aujourd'hui. »",
      paragraph2:
        "Ce n'est pas une preuve.\nC'est une approximation.",
      tagline1: "Horizon élimine la reconstruction comme dépendance.",
      tagline2: "Les preuves restent sous votre contrôle.",
    },
    assurance: {
      title: "Cas d'usage représentatifs",
      paragraph1: "Horizon présente des faits stables et indépendants de l'état actuel des systèmes :",
      list: [
        "Litige de transaction ou de paiement : examiner précisément pourquoi une transaction a été refusée, à partir des faits enregistrés",
        "Décision de crédit assistée par IA : examiner ce qui était connu, évalué et présenté à l'agent, sans rejouer les modèles",
        "Audit ou revue réglementaire : présenter des faits stables et indépendants de l'état actuel des systèmes"
      ],
      paragraph2:
        "Lorsqu'une décision est contestée, examinez-vous des faits, ou reconstruisez-vous une histoire ?",
    },
    deployment: {
      title: "Périmètre de confiance et déploiement",
      paragraph1:
        "Horizon est déployée dans votre périmètre :",
      list: [
        "on-premise",
        "cloud privé",
        "environnements isolés"
      ],
      paragraph2:
        "Aucun service de notarisation externe n'est requis.\nLa vérification reste possible hors ligne, sans dépendance éditeur.",
      paragraph3:
        "Les preuves restent sous votre contrôle.",
    },
    users: {
      title: "Pour qui Horizon est conçue",
      paragraph1:
        "Horizon est conçue pour les organisations où les décisions automatisées sont fréquentes et contestables :",
      list: [
        "Fintech et paiement : décisions automatisées à grande échelle, litiges fréquents, forte pression explicative",
        "Banques et institutions financières : décisions assistées par IA en crédit, risque ou conformité",
        "Autres secteurs régulés : assurance, plateformes, secteur public"
      ],
      paragraph2:
        "Question de qualification simple : Lorsqu'une décision est contestée, examinez-vous des faits, ou reconstruisez-vous une histoire ?",
    },
    when: {
      title: "Conclusion",
      paragraph1:
        "La plupart des systèmes sont conçus pour opérer.",
      paragraph2: "Très peu sont conçus pour être examinés plus tard.",
      list: [
        "La plupart des systèmes sont conçus pour opérer",
        "Très peu sont conçus pour être examinés plus tard",
        "Horizon garantit que lorsque des questions surgissent, les faits existent déjà"
      ],
      paragraph3: "Horizon garantit que lorsque des questions surgissent, les faits existent déjà.",
    },
    philosophy: {
      title: "La Philosophie Horizon",
      paragraph1:
        "Infrastructure de preuve pour les décisions automatisées. Notaire, pas juge. Infrastructure, pas produit. Preuve, pas opinion. Faits examinables, pas procédural.",
        tagline: "Nous ne faisons pas de promesses. Nous établissons des preuves."
    },
    cta: {
      title: "Commencer",
      paragraph1:
        "Contactez-nous pour discuter de votre contexte.",
      primaryCTA: "Contactez-nous",
      secondaryCTA: "En savoir plus",
    },
    contact: {
      title: "Contact",
      email: "contact@asplenz.com",
      intro: "Nous contacter :",
      copied: "Copié",
      copy: "Copier l'adresse",
      mailto: "Envoyer un e-mail",
      note: "Pour discussions techniques, programmes pilotes ou demandes de partenariat.",
    },
  },
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]
}
