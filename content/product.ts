import type { Locale } from '@/lib/i18n'

export type ProductContent = {
  hero: {
    eyebrow: string
    heading: string
    sub: string
    primaryCta: string
    secondaryCta: string
  }
  operatingModel: {
    heading: string
    intro: string
    entitiesHeading: string
    entities: { name: string; body: string }[]
    quote: string
  }
  pillars: {
    heading: string
    items: { number: string; title: string; body: string; icon: 'model' | 'engine' | 'replay' }[]
  }
  captures: {
    heading: string
    intro: string
    brmsLabel: string
    brmsQuestion: string
    knowledgeLabel: string
    knowledgeQuestions: string[]
    closing: string
    captureList: { label: string; body: string }[]
  }
  replaces: {
    heading: string
    intro: string
    items: string[]
    closing: string
  }
  finalCta: {
    heading: string
    copy: string
    primary: string
    secondary: string
  }
}

const EN: ProductContent = {
  hero: {
    eyebrow: 'PRODUCT',
    heading: 'Built around the compliance operating model',
    sub: 'Nine entities replace spreadsheets, emails, Word procedures and duplicated business logic with one executable compliance model. Knowledge starts where decision platforms stop : the objects a compliance department actually manipulates are native in the runtime.',
    primaryCta: 'Talk to us',
    secondaryCta: 'Explore the ecosystem',
  },
  operatingModel: {
    heading: 'Nine entities, one operating model',
    intro: 'Every compliance workflow reduces to reads and writes on these nine entities. Onboarding a new relationship manager is a Target membership. Approving an exception mints an Override. Suspending a rule while reviewing it is a Pause. The vocabulary matches the discipline, and the discipline replaces the scatter of tools it used to live across.',
    entitiesHeading: 'The compliance data model',
    entities: [
      { name: 'Policy', body: 'A named container for related rules. Carries a governance log of adoption, amendment and renewal acts.' },
      { name: 'Rule', body: 'A directive with a scope, a severity, an optional metric condition, and a rationale that explains why it exists.' },
      { name: 'Target', body: 'A named audience of principals. A rule is applied to a target ; a principal is a member of one or more targets.' },
      { name: 'Approval', body: 'A request for exception, filed by a business actor when a check blocks. One per operation, N triggers attached.' },
      { name: 'Override', body: 'An authorised exception, scope-bounded, time-bounded, tied to the rules it neutralises and to the approver who granted it.' },
      { name: 'Pause', body: 'A temporal admin suspension of a rule or a target. Strictly permissive : it never converts allow into block.' },
      { name: 'Consultation', body: 'The immutable audit row written on every check or reason call. Carries the pinned rule versions, the resolved audience, the winning rule and the precedence trace.' },
      { name: 'GovernanceNote', body: 'A structured act inside a policy\'s governance log. Adoption, amendment, renewal, all recorded and citable.' },
      { name: 'Event', body: 'The audit trail for every mutation of every entity.' },
    ],
    quote: 'We didn\'t build a better rules engine. We built the compliance operating model.',
  },
  pillars: {
    heading: 'The three pillars',
    items: [
      {
        number: '01',
        title: 'Compliance operating model',
        body: 'Every compliance workflow, from routine trade checks to yearly regulator audits, reduces to reads and writes on the nine entities. The vocabulary matches the discipline. Compliance teams stop translating policy into rules-engine primitives.',
        icon: 'model',
      },
      {
        number: '02',
        title: 'Deterministic execution',
        body: 'The engine matches a business action against candidate rules, applies severity ranking plus scope specificity plus priority, and returns a typed verdict in milliseconds. Same inputs always produce the same decision. AI never sits on this critical path ; it only renders the resulting state into prose when someone asks.',
        icon: 'engine',
      },
      {
        number: '03',
        title: 'Replayable governance',
        body: 'Consultations are immutable and cite pinned rule versions. Six months later, one call reconstructs the exact reasoning : the rule versions as they stood, the scope, the winning rule, the trace, the override in effect if any. The regulator asks « why was this blocked on 15 March ? ». You answer without archaeology.',
        icon: 'replay',
      },
    ],
  },
  captures: {
    heading: 'What Knowledge captures beyond rules',
    intro: 'A traditional decision engine answers one question. Knowledge answers seven.',
    brmsLabel: 'A traditional decision engine answers',
    brmsQuestion: 'What rule fired?',
    knowledgeLabel: 'Knowledge answers',
    knowledgeQuestions: [
      'What rule fired?',
      'Why does this rule exist?',
      'Who approved it?',
      'Why was it modified?',
      'Why was it overridden?',
      'Why was it paused?',
      'Why was it attached to this audience?',
    ],
    closing: 'Every governance movement is a first-class object with authorship, timestamp, and full history. There is no ephemeral state in the compliance backbone.',
    captureList: [
      { label: 'Rationale', body: 'Every rule carries a rationale field, cited in prose output.' },
      { label: 'Adoption', body: 'The governance log records the adoption act with author and date.' },
      { label: 'Modification', body: 'Every rule version carries the reason for the change, mandatory in V3.' },
      { label: 'Override', body: 'Every Override has a justification and a decider.' },
      { label: 'Pause', body: 'Pauses carry a note and an initiator.' },
      { label: 'Attachment', body: 'TargetRuleAttachment records the decision, its author, and its rationale.' },
    ],
  },
  replaces: {
    heading: 'What Knowledge replaces',
    intro: 'For most compliance teams today, the discipline lives across a scatter of tools none of which was designed for the job.',
    items: [
      'Excel sheets that never quite match the current book of rules',
      'Word procedures nobody reads at decision time',
      'SharePoint pages of last quarter\'s exceptions',
      'Email approvals that no auditor can reconstruct in year 3',
      'Rules re-implemented in three or four business applications, inevitably out of sync',
    ],
    closing: 'Knowledge collapses these into one operating model that compliance teams control directly, that business systems integrate against, and that produces the audit trail a regulator asks for.',
  },
  finalCta: {
    heading: 'Ready to walk through it live?',
    copy: 'The best way to see the product is on a demo tenant that mirrors your shape.',
    primary: 'Book a demo',
    secondary: 'Explore the ecosystem',
  },
}

const FR: ProductContent = {
  hero: {
    eyebrow: 'PRODUIT',
    heading: 'Construit autour du modèle opérationnel compliance',
    sub: 'Neuf entités remplacent les feuilles Excel, les emails, les procédures Word et la logique métier dupliquée par un modèle compliance exécutable unique. Knowledge démarre là où les plateformes de décision s\'arrêtent : les objets qu\'un département compliance manipule réellement sont natifs dans le runtime.',
    primaryCta: 'Nous parler',
    secondaryCta: 'Explorer l\'écosystème',
  },
  operatingModel: {
    heading: 'Neuf entités, un modèle opérationnel',
    intro: 'Chaque workflow compliance se réduit à des lectures et écritures sur ces neuf entités. Onboarder un nouveau chargé de clientèle = une adhésion à Target. Approuver une exception = créer un Override. Suspendre une règle en cours de revue = une Pause. Le vocabulaire épouse la discipline, et la discipline remplace l\'éparpillement d\'outils dans lequel elle vivait.',
    entitiesHeading: 'Le modèle de données compliance',
    entities: [
      { name: 'Policy', body: 'Un conteneur nommé de règles liées. Porte un journal de gouvernance : actes d\'adoption, d\'amendement et de renouvellement.' },
      { name: 'Rule', body: 'Une directive avec un scope, une sévérité, une condition métrique optionnelle, et un rationale qui explique pourquoi elle existe.' },
      { name: 'Target', body: 'Une audience nommée de principals. Une règle est appliquée à une target ; un principal est membre d\'une ou plusieurs targets.' },
      { name: 'Approval', body: 'Une demande d\'exception, déposée par un acteur métier quand un check bloque. Une par opération, N triggers attachés.' },
      { name: 'Override', body: 'Une exception autorisée, scopée, bornée dans le temps, liée aux règles qu\'elle neutralise et à l\'approbateur qui l\'a accordée.' },
      { name: 'Pause', body: 'Une suspension administrative temporaire d\'une règle ou d\'une target. Strictement permissive : ne convertit jamais un autorisé en bloqué.' },
      { name: 'Consultation', body: 'La ligne d\'audit immuable écrite à chaque appel de check ou de reason. Porte les versions de règles figées, l\'audience résolue, la règle gagnante et la trace de précédence.' },
      { name: 'GovernanceNote', body: 'Un acte structuré dans le journal de gouvernance d\'une policy. Adoption, amendement, renouvellement, tous enregistrés et citables.' },
      { name: 'Event', body: 'La piste d\'audit de chaque mutation de chaque entité.' },
    ],
    quote: 'Nous n\'avons pas construit un meilleur moteur de règles. Nous avons construit le modèle opérationnel compliance.',
  },
  pillars: {
    heading: 'Les trois piliers',
    items: [
      {
        number: '01',
        title: 'Modèle opérationnel compliance',
        body: 'Chaque workflow compliance, du check de trade routinier à l\'audit régulateur annuel, se réduit à des lectures et écritures sur les neuf entités. Le vocabulaire épouse la discipline. Les équipes compliance arrêtent de traduire de la policy en primitives de rules-engine.',
        icon: 'model',
      },
      {
        number: '02',
        title: 'Exécution déterministe',
        body: 'Le moteur confronte une action métier aux règles candidates, applique classement par sévérité plus spécificité de scope plus priorité, et renvoie un verdict typé en millisecondes. Mêmes entrées produisent toujours la même décision. L\'IA ne siège jamais sur ce chemin critique ; elle rend seulement l\'état résultant en prose quand quelqu\'un le demande.',
        icon: 'engine',
      },
      {
        number: '03',
        title: 'Gouvernance rejouable',
        body: 'Les Consultations sont immuables et citent des versions figées de règles. Six mois plus tard, un appel reconstitue le raisonnement exact : les versions de règles telles qu\'elles étaient, le scope, la règle gagnante, la trace, l\'override en vigueur le cas échéant. Le régulateur demande « pourquoi ceci a-t-il été bloqué le 15 mars ? ». Vous répondez sans archéologie.',
        icon: 'replay',
      },
    ],
  },
  captures: {
    heading: 'Ce que Knowledge capture au-delà des règles',
    intro: 'Un moteur de décision classique répond à une question. Knowledge répond à sept.',
    brmsLabel: 'Un moteur de décision classique répond à',
    brmsQuestion: 'Quelle règle a fired ?',
    knowledgeLabel: 'Knowledge répond à',
    knowledgeQuestions: [
      'Quelle règle a fired ?',
      'Pourquoi cette règle existe-t-elle ?',
      'Qui l\'a approuvée ?',
      'Pourquoi a-t-elle été modifiée ?',
      'Pourquoi a-t-elle été overridée ?',
      'Pourquoi a-t-elle été mise en pause ?',
      'Pourquoi attachée à cette audience ?',
    ],
    closing: 'Chaque mouvement de gouvernance est un objet de première classe avec paternité, timestamp et historique complet. Il n\'y a pas d\'état éphémère dans le socle compliance.',
    captureList: [
      { label: 'Rationale', body: 'Chaque règle porte un champ rationale, cité dans la prose de sortie.' },
      { label: 'Adoption', body: 'Le journal de gouvernance enregistre l\'acte d\'adoption avec auteur et date.' },
      { label: 'Modification', body: 'Chaque version de règle porte le motif du changement, obligatoire en V3.' },
      { label: 'Override', body: 'Chaque Override a une justification et un décideur.' },
      { label: 'Pause', body: 'Les Pauses portent une note et un initiateur.' },
      { label: 'Attachement', body: 'TargetRuleAttachment enregistre la décision, son auteur, et son rationale.' },
    ],
  },
  replaces: {
    heading: 'Ce que Knowledge remplace',
    intro: 'Pour la plupart des équipes compliance aujourd\'hui, la discipline vit à travers un éparpillement d\'outils dont aucun n\'a été conçu pour ce travail.',
    items: [
      'Des feuilles Excel qui ne collent jamais tout à fait au corpus de règles courant',
      'Des procédures Word que personne ne lit au moment de la décision',
      'Des pages SharePoint des exceptions du trimestre dernier',
      'Des approbations par email qu\'aucun auditeur ne peut reconstituer en année 3',
      'Des règles réimplémentées dans trois ou quatre applications métier, inévitablement désynchronisées',
    ],
    closing: 'Knowledge collapse cela en un modèle opérationnel unique que les équipes compliance contrôlent directement, contre lequel les systèmes métier s\'intègrent, et qui produit la piste d\'audit qu\'un régulateur demande.',
  },
  finalCta: {
    heading: 'Prêt à voir la plateforme en direct ?',
    copy: 'La meilleure façon de découvrir le produit est sur un tenant de démonstration qui reproduit votre forme.',
    primary: 'Réserver une démo',
    secondary: 'Explorer l\'écosystème',
  },
}

export function getProductContent(locale: Locale): ProductContent {
  return locale === 'fr' ? FR : EN
}
