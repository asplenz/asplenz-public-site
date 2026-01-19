import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    // 1. Hero
    hero: {
      title: 'Les décisions automatisées engagent votre responsabilité.',
      subtitle: 'Encore faut-il pouvoir en établir les faits, lorsque l\'examen commence.',
      anchor: 'Décisions de crédit, de tarification, d\'acceptation, de blocage : prises par des systèmes automatisés.',
      intro: 'Dans les infrastructures financières critiques, ces décisions sont exécutées en continu.',
      trigger: 'Audit. Incident. Litige. Contrôle.',
      problem: 'Ces décisions produisent des effets immédiats. Mais leurs faits constitutifs ne sont pas conservés comme des objets probants.',
      solution: 'Horizon a été conçu pour combler cette lacune structurelle.',
    },
    // Définition canonique
    definition: {
      term: 'Infrastructure d\'Instantanés Décisionnels',
      text: 'Une infrastructure dédiée à la création de faits décisionnels vérifiables, au moment même de l\'exécution.',
    },
    // 2. Le problème
    problem: {
      badge: 'Le problème',
      title: 'Un défaut de conception, pas de maturité',
      subtitle: 'Les architectures décisionnelles produisent des résultats, pas des faits.',
      characteristics: [
        'Les décisions sont distribuées.',
        'Les règles et modèles évoluent.',
        'Les données sont contextuelles et volatiles.',
        'Les systèmes sources ne sont pas synchronisés dans le temps.',
      ],
      consequences: [
        'Les journaux (logs) décrivent une exécution, pas une décision.',
        'Les états système dérivent.',
        'La justification est reconstruite, non observée.',
      ],
      labelCharacteristics: 'Dans la majorité des systèmes décisionnels',
      labelConsequences: 'Par construction',
      // Bloc IT
      itReality: {
        title: 'Aujourd\'hui, lorsqu\'une décision doit être examinée',
        points: [
          'Agrégation de logs hétérogènes.',
          'Reconstitution d\'états qui n\'existent plus.',
          'Mobilisation de plusieurs équipes.',
          'Dépendance à des versions de règles et données obsolètes.',
        ],
      },
      conclusion: 'Lorsque l\'examen commence (audit, incident, litige, régulation), la décision telle qu\'elle a été prise n\'existe plus comme objet factuel autonome.',
    },
    // 3. Changement de paradigme
    paradigm: {
      badge: 'Changement de paradigme',
      title: 'Capturer, pas reconstruire',
      subtitle: 'La décision comme fait primaire.',
      principle: 'Les faits décisionnels doivent être créés au moment de l\'exécution. Pas reconstruits lorsque l\'examen commence.',
      explanation: 'Horizon ne cherche pas à expliquer après coup. Il fige les faits constitutifs au moment exact où la décision est produite.',
      pointsIntro: 'Chaque décision devient :',
      points: [
        'Un objet autonome.',
        'Horodaté.',
        'Contextualisé.',
        'Vérifiable indépendamment des systèmes sources.',
      ],
    },
    // 4. Infrastructure
    infrastructure: {
      badge: 'Infrastructure d\'Instantanés Décisionnels',
      title: 'Description architecturale',
      subtitle: 'Une infrastructure transverse, indépendante des moteurs décisionnels.',
      what: {
        title: 'Horizon s\'insère dans les flux critiques pour',
        points: [
          'Capturer la décision au point d\'exécution.',
          'Normaliser son expression factuelle.',
          'Conserver un instantané immuable du contexte décisionnel.',
          'Rendre cet instantané accessible à des fonctions d\'examen, sans dépendance aux systèmes d\'origine.',
        ],
      },
      boundaries: {
        title: 'Horizon ne',
        points: [
          'Prend aucune décision.',
          'Modifie aucune règle.',
          'N\'explique aucun résultat.',
          'N\'impose aucun modèle.',
        ],
      },
      insertionPoint: 'Horizon s\'insère au point où une décision devient effective.',
      conclusion: 'Il opère en amont de la justification, et en dehors de la reconstruction.',
    },
    // 5. À qui s'adresse
    audience: {
      badge: 'À qui s\'adresse Horizon',
      title: 'Contextes d\'exposition maximale',
      subtitle: 'Environnements où la charge de la preuve est structurelle.',
      intro: 'Horizon est conçu pour les organisations où :',
      criteria: [
        'Les décisions automatisées ont un impact réglementaire, financier ou systémique.',
        'La responsabilité ne peut pas être déduite.',
        'La démonstration des faits est une exigence, pas une option.',
      ],
      examples: {
        title: 'Typiquement',
        points: [
          'Banques systémiques.',
          'Plateformes de négociation.',
          'Prestataires de services de paiement.',
          'Infrastructures financières critiques.',
        ],
      },
    },
    // 6. Ce que cela change
    changes: {
      badge: 'Ce que cela change',
      title: 'En termes de posture, pas de bénéfices',
      points: [
        'L\'audit devient constat, non reconstitution.',
        'La responsabilité peut être démontrée sans interprétation.',
        'La décision reste vérifiable indépendamment de l\'évolution des systèmes.',
        'La redevabilité ne dépend plus de l\'état courant des moteurs, modèles ou règles.',
      ],
      itBenefit: 'L\'examen ne déclenche plus un projet de reconstitution.',
      conclusion: 'La décision automatisée cesse d\'être un événement éphémère. Elle devient un fait durable, examinable et opposable.',
    },
    // 7. Positionnement
    positioning: {
      title: 'Horizon ne gouverne pas vos décisions.',
      subtitle: 'Il garantit que leurs faits existent.',
      conclusion: 'Dans des environnements où la confiance repose sur la preuve, Horizon constitue la couche factuelle des décisions automatisées.',
    },
    // 8. CTA
    cta: {
      badge: 'Appel à l\'action',
      title: 'Examiner l\'architecture avant qu\'elle ne soit examinée',
      content: 'Découvrir comment l\'Infrastructure d\'Instantanés Décisionnels s\'intègre dans des environnements décisionnels critiques existants.',
      button: 'Demander une présentation Horizon',
    },
    // Ressources
    resources: {
      title: 'Ressources',
      foundations: {
        title: 'Fondements',
        content: 'Le document Foundational Brief présente les fondations opérationnelles de la preuve à l\'exécution.',
        linkText: 'Lire les Fondements',
      },
      costAnalysis: {
        title: 'Analyse des coûts',
        content: 'Ce document analyse pourquoi le coût de la reconstruction est systématiquement sous-estimé.',
        linkText: 'Lire l\'analyse',
      },
    },
  },
  en: {
    // 1. Hero
    hero: {
      title: 'Automated decisions entail your responsibility.',
      subtitle: 'Yet, their constituent facts must be established when scrutiny begins.',
      anchor: 'Credit decisions, pricing, acceptance, blocking: made by automated systems.',
      intro: 'In critical financial infrastructures, these decisions are executed continuously.',
      trigger: 'Audit. Incident. Litigation. Regulatory review.',
      problem: 'These decisions produce immediate effects. But their constituent facts are not preserved as evidentiary objects.',
      solution: 'Horizon was designed to address this structural gap.',
    },
    // Canonical definition
    definition: {
      term: 'Decision Snapshot Infrastructure',
      text: 'An infrastructure dedicated to the creation of verifiable decision facts at the very moment of execution.',
    },
    // 2. The problem
    problem: {
      badge: 'The problem',
      title: 'A design flaw, not a lack of maturity',
      subtitle: 'Decision architectures produce results, not facts.',
      characteristics: [
        'Decisions are distributed.',
        'Rules and models evolve.',
        'Data is contextual and volatile.',
        'Source systems are not synchronized in time.',
      ],
      consequences: [
        'Logs describe an execution, not a decision.',
        'System states drift.',
        'Justification is reconstructed, not observed.',
      ],
      labelCharacteristics: 'In the majority of decision systems',
      labelConsequences: 'By design',
      // IT block
      itReality: {
        title: 'Today, when a decision must be examined',
        points: [
          'Aggregation of heterogeneous logs.',
          'Reconstruction of states that no longer exist.',
          'Mobilization of multiple teams.',
          'Dependency on obsolete rule and data versions.',
        ],
      },
      conclusion: 'When scrutiny begins (audit, incident, litigation, regulation), the decision as it was made no longer exists as an autonomous factual object.',
    },
    // 3. Paradigm shift
    paradigm: {
      badge: 'Paradigm shift',
      title: 'Capture, don\'t reconstruct',
      subtitle: 'The decision as a primary fact.',
      principle: 'Decision facts must be created at execution time. Not reconstructed when scrutiny begins.',
      explanation: 'Horizon does not seek to explain after the fact. It freezes the constituent facts at the exact moment the decision is produced.',
      pointsIntro: 'Every decision becomes:',
      points: [
        'An autonomous object.',
        'Timestamped.',
        'Contextualized.',
        'Verifiable independently of source systems.',
      ],
    },
    // 4. Infrastructure
    infrastructure: {
      badge: 'Decision Snapshot Infrastructure',
      title: 'Architectural description',
      subtitle: 'A transversal infrastructure, independent of decision engines.',
      what: {
        title: 'Horizon integrates into critical flows to',
        points: [
          'Capture the decision at the point of execution.',
          'Normalize its factual expression.',
          'Preserve an immutable snapshot of the decision context.',
          'Make this snapshot accessible for examination functions, without dependency on the original systems.',
        ],
      },
      boundaries: {
        title: 'Horizon does not',
        points: [
          'Make any decision.',
          'Modify any rule.',
          'Explain any result.',
          'Impose any model.',
        ],
      },
      insertionPoint: 'Horizon inserts at the point where a decision becomes effective.',
      conclusion: 'It operates upstream of justification and outside of reconstruction.',
    },
    // 5. Who is it for
    audience: {
      badge: 'Who Horizon is for',
      title: 'Maximum exposure contexts',
      subtitle: 'Environments where the burden of proof is structural.',
      intro: 'Horizon is designed for organizations where:',
      criteria: [
        'Automated decisions have a regulatory, financial, or systemic impact.',
        'Responsibility cannot be inferred.',
        'The demonstration of facts is a requirement, not an option.',
      ],
      examples: {
        title: 'Typically',
        points: [
          'Systemic banks.',
          'Market exchanges.',
          'Payment Service Providers.',
          'Critical financial infrastructures.',
        ],
      },
    },
    // 6. What changes
    changes: {
      badge: 'What changes',
      title: 'In terms of posture, not benefits',
      points: [
        'Audit becomes observation, not reconstruction.',
        'Accountability can be demonstrated without interpretation.',
        'The decision remains verifiable regardless of system evolution.',
        'Accountability no longer depends on the current state of engines, models, or rules.',
      ],
      itBenefit: 'Examination no longer triggers a reconstruction project.',
      conclusion: 'Automated decision-making ceases to be an ephemeral event. It becomes a durable, examinable, and opposable fact.',
    },
    // 7. Positioning
    positioning: {
      title: 'Horizon does not govern your decisions.',
      subtitle: 'It guarantees that their facts exist.',
      conclusion: 'In environments where trust relies on evidence, Horizon constitutes the factual layer of automated decisions.',
    },
    // 8. CTA
    cta: {
      badge: 'Call to action',
      title: 'Examine the architecture before it is examined',
      content: 'Discover how Decision Snapshot Infrastructure integrates into existing critical decision environments.',
      button: 'Request a Horizon presentation',
    },
    // Resources
    resources: {
      title: 'Resources',
      foundations: {
        title: 'Foundations',
        content: 'The Foundational Brief presents the operational foundations of execution-time evidence.',
        linkText: 'Read the Foundations',
      },
      costAnalysis: {
        title: 'Cost analysis',
        content: 'This document analyzes why the cost of reconstruction is systematically underestimated.',
        linkText: 'Read the analysis',
      },
    },
  },
};

export default function LandingPage({
  params,
}: {
  params: { lang: Language };
}) {
  const c = content[params.lang];

  return (
    <div className="min-h-screen">
      {/* 1. Hero */}
      <section className="pt-12 pb-8 lg:pt-16 lg:pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-black mb-2 leading-tight">
            {c.hero.title}
          </h1>
          <p className="text-xl lg:text-2xl text-[#005C99] font-medium mb-6">
            {c.hero.subtitle}
          </p>

          {/* Phrase d'ancrage */}
          <p className="text-base text-black/60 mb-6 italic">
            {c.hero.anchor}
          </p>

          <p className="text-lg text-black/70 mb-4">
            {c.hero.intro}
          </p>

          {/* Moments critiques */}
          <p className="text-base font-medium text-black/80 mb-4">
            {c.hero.trigger}
          </p>

          <p className="text-lg text-black/70 mb-6">
            {c.hero.problem}
          </p>
          <p className="text-lg text-[#005C99] font-medium mb-8">
            {c.hero.solution}
          </p>

          {/* Définition canonique */}
          <div className="bg-[#005C99] p-6 rounded">
            <p className="font-bold text-white mb-2">{c.definition.term}</p>
            <p className="text-white/90">{c.definition.text}</p>
          </div>
        </div>
      </section>

      {/* 2. Le problème */}
      <section className="py-12 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-2">
            {c.problem.badge}
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2">
            {c.problem.title}
          </h2>
          <p className="text-lg text-[#005C99] font-medium mb-8">
            {c.problem.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-sm uppercase tracking-wider text-black/50 mb-4">{c.problem.labelCharacteristics}</p>
              <ul className="space-y-2">
                {c.problem.characteristics.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-black/50 mb-4">{c.problem.labelConsequences}</p>
              <ul className="space-y-2">
                {c.problem.consequences.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bloc IT - reconnaissance du quotidien */}
          <div className="bg-white border border-black/10 p-6 rounded mb-8">
            <p className="font-medium text-black mb-4">{c.problem.itReality.title}</p>
            <ul className="space-y-2">
              {c.problem.itReality.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-black/60">
                  <span className="text-black/40 mt-1">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
            {c.problem.conclusion}
          </blockquote>
        </div>
      </section>

      {/* 3. Changement de paradigme */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-2">
            {c.paradigm.badge}
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2">
            {c.paradigm.title}
          </h2>
          <p className="text-lg text-[#005C99] font-medium mb-6">
            {c.paradigm.subtitle}
          </p>

          <div className="bg-[#005C99] p-6 rounded mb-8">
            <p className="text-white font-medium text-lg">
              {c.paradigm.principle}
            </p>
          </div>

          <p className="text-black/70 mb-6">
            {c.paradigm.explanation}
          </p>

          <p className="text-black/70 mb-4">{c.paradigm.pointsIntro}</p>
          <ul className="space-y-2 mb-8">
            {c.paradigm.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-green-600 mt-1">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Infrastructure */}
      <section className="py-12 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-2">
            {c.infrastructure.badge}
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2">
            {c.infrastructure.title}
          </h2>
          <p className="text-lg text-[#005C99] font-medium mb-8">
            {c.infrastructure.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded shadow-md border border-black/5">
              <h3 className="font-bold text-[#005C99] mb-4">{c.infrastructure.what.title}</h3>
              <ul className="space-y-2">
                {c.infrastructure.what.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded shadow-md border border-red-100">
              <h3 className="font-bold text-red-600 mb-4">{c.infrastructure.boundaries.title}</h3>
              <ul className="space-y-2">
                {c.infrastructure.boundaries.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Point d'insertion */}
          <div className="bg-[#005C99]/5 border border-[#005C99]/20 p-6 rounded mb-8">
            <p className="text-[#005C99] font-medium">
              {c.infrastructure.insertionPoint}
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow-md border border-black/5">
            <p className="text-lg font-medium text-[#005C99]">
              {c.infrastructure.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* 5. À qui s'adresse */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-2">
            {c.audience.badge}
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2">
            {c.audience.title}
          </h2>
          <p className="text-lg text-[#005C99] font-medium mb-6">
            {c.audience.subtitle}
          </p>

          <p className="text-black/70 mb-4">{c.audience.intro}</p>
          <ul className="space-y-2 mb-8">
            {c.audience.criteria.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="bg-zinc-50 p-6 rounded">
            <p className="font-medium text-black mb-4">{c.audience.examples.title}</p>
            <ul className="space-y-2">
              {c.audience.examples.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70">
                  <span className="text-[#005C99] mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Ce que cela change */}
      <section className="py-12 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-2">
            {c.changes.badge}
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
            {c.changes.title}
          </h2>

          <ul className="space-y-3 mb-8">
            {c.changes.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-green-600 mt-1">↓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Bénéfice IT */}
          <div className="bg-green-50 border border-green-200 p-4 rounded mb-8">
            <p className="text-green-800 font-medium">
              {c.changes.itBenefit}
            </p>
          </div>

          <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
            {c.changes.conclusion}
          </blockquote>
        </div>
      </section>

      {/* 7. Positionnement */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#005C99] py-12 px-8 text-center rounded">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              {c.positioning.title}
            </h2>
            <p className="text-xl text-white/90 mb-6">
              {c.positioning.subtitle}
            </p>
            <p className="text-white/80">
              {c.positioning.conclusion}
            </p>
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section id="engage" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 rounded shadow-lg border border-black/5">
            <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-2">
              {c.cta.badge}
            </p>
            <h2 className="text-2xl font-bold text-black mb-4">
              {c.cta.title}
            </h2>
            <p className="text-black/70 mb-8">
              {c.cta.content}
            </p>
            <Link
              href={`/${params.lang}/engagement`}
              className="inline-flex items-center gap-2 bg-[#005C99] text-white px-6 py-3 font-medium hover:bg-[#005C99]/90 transition-colors rounded"
            >
              {c.cta.button}
            </Link>
          </div>
        </div>
      </section>

      {/* Ressources */}
      <section className="py-12 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-black mb-8">{c.resources.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-black/10 p-6 rounded">
              <h3 className="font-bold text-black mb-2">{c.resources.foundations.title}</h3>
              <p className="text-black/70 text-sm mb-4">{c.resources.foundations.content}</p>
              <Link
                href={`/${params.lang}/foundations`}
                className="text-[#005C99] font-medium hover:underline inline-flex items-center gap-1"
              >
                {c.resources.foundations.linkText} <span>→</span>
              </Link>
            </div>
            <div className="bg-white border border-black/10 p-6 rounded">
              <h3 className="font-bold text-black mb-2">{c.resources.costAnalysis.title}</h3>
              <p className="text-black/70 text-sm mb-4">{c.resources.costAnalysis.content}</p>
              <Link
                href={`/${params.lang}/cost-of-reconstruction`}
                className="text-[#005C99] font-medium hover:underline inline-flex items-center gap-1"
              >
                {c.resources.costAnalysis.linkText} <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
