import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    hero: {
      badge: 'Decision Snapshot Infrastructure',
      title: 'Rendre les décisions automatisées durablement exploitables',
      intro: 'Aujourd\'hui, les systèmes automatisés prennent des décisions qui engagent l\'organisation sur la durée. Pourtant, les faits ayant conduit à ces décisions disparaissent rapidement avec l\'évolution des systèmes.',
      description: 'Horizon est une **infrastructure** qui permet de **préserver l\'état factuel d\'une décision au moment exact où elle est exécutée**, afin que les équipes puissent y revenir plus tard **sans dépendre du système d\'origine**.',
      points: [
        'Les faits sont capturés au moment de l\'exécution.',
        'Le contrôle institutionnel reste inchangé.',
        'Le coût opérationnel est radicalement réduit.',
      ],
      cta: 'Réserver un entretien d\'acceptabilité',
      ctaSubtext: 'Horizon s\'intègre aux systèmes existants. L\'adoption commence par une discussion d\'acceptabilité, pas par une décision imposée.',
    },
    factsFirst: {
      title: 'Les faits avant la reconstruction',
      intro: 'Les équipes techniques produisent déjà aujourd\'hui des dossiers décisionnels : logs, bases de données, configurations, modèles, documents internes.',
      description: 'Horizon **ne redéfinit pas ce qu\'est un dossier**. Il **simplifie radicalement la production de ces éléments factuels**.',
      points: [
        'Ce qui change, ce n\'est pas le contenu du dossier.',
        'C\'est l\'effort nécessaire pour l\'établir, le conserver et le mobiliser.',
      ],
    },
    problem: {
      title: 'Le problème opérationnel',
      subtitle: 'Les décisions automatisées ne survivent pas aux systèmes qui les produisent',
      description: 'Dans les environnements réels, tout bouge : les données évoluent, les règles changent, les modèles sont mis à jour et les architectures se transforment. Lorsqu\'une décision passée doit être comprise, les équipes doivent **reconstruire les faits** à partir de sources partielles.',
      quote: 'Le constat : Cette reconstruction est coûteuse, incertaine et dépendante d\'un système qui n\'existe plus dans son état d\'origine.',
    },
    principle: {
      title: 'Le principe Horizon',
      subtitle: 'Capturer les faits une fois, au bon moment',
      description: 'Horizon capture **l\'état factuel d\'une décision au moment exact de son exécution**, sous la forme d\'un **Decision Snapshot Artifact**.',
      points: [
        { title: 'Données réellement consommées', desc: 'L\'intégralité des entrées à T0.' },
        { title: 'État de la logique', desc: 'La version exacte du modèle et sa configuration.' },
        { title: 'Contexte', desc: 'L\'identité du système et l\'horodatage précis.' },
        { title: 'Indépendance', desc: 'L\'artefact est généré en temps réel ; il ne dépend pas de l\'évolution future du système.' },
      ],
    },
    artifact: {
      title: 'Decision Snapshot Artifact',
      intro: 'L\'artefact est un **objet auto-contenu** qui permet d\'établir les faits sans reconstitution. Il inclut :',
      points: [
        { title: 'Métadonnées d\'exécution', desc: 'ID unique et horodatage UTC précis.' },
        { title: 'Snapshot Data', desc: 'Les entrées brutes vues par le système à T0.' },
        { title: 'Model State', desc: 'Le hash du modèle et les seuils actifs.' },
        { title: 'Output', desc: 'Le résultat et ses *reason codes*.' },
        { title: 'Intégrité', desc: 'Signature cryptographique assurant l\'immuabilité.' },
      ],
    },
    support: {
      title: 'Un support factuel, pas une contrainte',
      description: 'Horizon n\'impose aucune narration et n\'automatise aucun jugement. Les équipes conservent **le même contrôle qu\'aujourd\'hui** sur ce qui est consigné, interprété ou communiqué.',
      conclusion: 'La seule différence est opérationnelle : **les faits sont déjà là.**',
    },
    infrastructure: {
      title: 'Conçu comme une infrastructure',
      intro: 'Horizon n\'est ni un outil d\'analyse, ni un système métier, ni un processus de gouvernance. C\'est une **couche d\'infrastructure** qui :',
      points: [
        'S\'intègre aux systèmes existants sans les perturber.',
        'Fonctionne avec règles, scoring et systèmes IA.',
        'Capture les décisions en mode synchrone ou asynchrone.',
        'Respecte les politiques de conservation et de sécurité en place.',
        'N\'intervient jamais dans l\'exécution de la décision.',
      ],
      conclusions: [
        'Horizon **ne décide rien**.',
        'Il **enregistre l\'état factuel de ce qui s\'exécute**, puis s\'efface.',
      ],
    },
    value: {
      title: 'Valeur opérationnelle',
      intro: 'Horizon ne crée pas de nouveaux processus. Il **supprime des coûts invisibles mais récurrents** liés à la reconstruction des faits.',
      costTitle: 'Réduction des coûts opérationnels',
      costPoints: [
        'Effort réduit pour établir l\'état factuel lors de revues ou d\'incidents.',
        'Moins de mobilisation transverse (IT, data, support, risques).',
        'Moins de dépendance aux anciens systèmes et aux équipes passées.',
      ],
      timeTitle: 'Gain de temps cumulatif',
      timePoints: [
        'Les faits sont immédiatement disponibles.',
        'Plus besoin de reconstituer laborieusement des états passés.',
        'Une base factuelle commune pour toutes les parties prenantes.',
      ],
      conclusion: '**Un effort de capture unique. Plusieurs usages. Aucun coût marginal.**',
    },
    comparison: {
      title: 'Ce qui change concrètement',
      items: [
        { before: 'Faits reconstruits', after: 'Faits capturés' },
        { before: 'Effort élevé', after: 'Coût marginal' },
        { before: 'Dépendance aux anciens systèmes', after: 'Indépendance temporelle' },
        { before: 'Investigations longues', after: 'Accès immédiat' },
        { before: 'Incertitude factuelle', after: 'Base factuelle immuable' },
      ],
    },
    cta: {
      title: 'Comment commencer',
      subtitle: 'Une démonstration est possible. Une reconstitution ne l\'est pas.',
      description: 'Horizon peut être démontré sur tout système vivant (test, sandbox, démo). Ce qui ne peut pas être simulé, c\'est la capture de décisions **déjà passées**.',
      discussionIntro: 'L\'adoption commence par un **entretien d\'acceptabilité** :',
      steps: [
        'Évaluer l\'adéquation technique et organisationnelle.',
        'Définir les périmètres pertinents.',
        'Décider explicitement d\'une adoption (ou non).',
      ],
      button: 'Réserver un entretien d\'acceptabilité',
    },
    faq: {
      title: 'FAQ',
      items: [
        { q: 'Est-ce un système d\'audit ?', a: 'Non. C\'est une infrastructure de capture factuelle, utilisable par différentes équipes (audit, support, IT, ingénierie).' },
        { q: 'Est-ce une explication automatique ?', a: 'Non. L\'interprétation reste humaine.' },
        { q: 'Perd-on de la flexibilité ?', a: 'Non. Le contrôle est inchangé, seul l\'effort diminue.' },
      ],
    },
    foundations: {
      title: 'Approfondir le sujet',
      content: 'Le document Foundational Brief présente les fondations opérationnelles de la preuve à l\'exécution et les principes de l\'Infrastructure de Snapshot Décisionnel.',
      linkText: 'Lire les Fondements',
    },
  },
  en: {
    hero: {
      badge: 'Decision Snapshot Infrastructure',
      title: 'Making automated decisions durably actionable',
      intro: 'Today, automated systems make decisions that commit organizations over the long term. Yet, the facts that led to these decisions quickly disappear as systems evolve.',
      description: 'Horizon is an **infrastructure** that **preserves the factual state of a decision at the exact moment of execution**, allowing teams to revisit it later **without depending on the original system**.',
      points: [
        'Facts are captured at the moment of execution.',
        'Institutional control remains unchanged.',
        'Operational cost is drastically reduced.',
      ],
      cta: 'Book an Acceptability Discussion',
      ctaSubtext: 'Horizon integrates into existing systems. Adoption starts with an acceptability discussion, not an imposed decision.',
    },
    factsFirst: {
      title: 'Facts before reconstruction',
      intro: 'Technical teams already produce decision records today: logs, databases, configurations, rules, models, and internal documents.',
      description: 'Horizon **does not redefine what a record is**. It **radically simplifies the production of its factual components**.',
      points: [
        'What changes is not the content of the record.',
        'It is the effort required to establish, preserve, and mobilize it.',
      ],
    },
    problem: {
      title: 'The operational problem',
      subtitle: 'Automated decisions do not survive the systems that produced them',
      description: 'In real-world environments, everything moves: data evolves, rules change, models are updated, and architectures transform. When a past decision must be understood, teams are forced to **reconstruct the facts** from partial sources.',
      quote: 'The reality: This reconstruction is costly, uncertain, and dependent on a system that no longer exists in its original state.',
    },
    principle: {
      title: 'The Horizon principle',
      subtitle: 'Capture facts once, at the right moment',
      description: 'Horizon captures the **factual state of a decision at the exact moment of execution**, in the form of a **Decision Snapshot Artifact**.',
      points: [
        { title: 'Data actually consumed', desc: 'The entirety of the inputs at T0.' },
        { title: 'Logic state', desc: 'The exact version of the model and its configuration.' },
        { title: 'Context', desc: 'System identity and precise timestamp.' },
        { title: 'Independence', desc: 'Generated in real-time; it does not depend on future system evolution.' },
      ],
    },
    artifact: {
      title: 'Decision Snapshot Artifact',
      intro: 'The artifact is a **self-contained object** that establishes facts without reconstruction. It includes:',
      points: [
        { title: 'Execution metadata', desc: 'Unique ID and precise UTC timestamp.' },
        { title: 'Snapshot Data', desc: 'Raw inputs as seen by the system at T0.' },
        { title: 'Model State', desc: 'Model hash and active thresholds.' },
        { title: 'Output', desc: 'The result and its *reason codes*.' },
        { title: 'Integrity', desc: 'Cryptographic signature ensuring immutability.' },
      ],
    },
    support: {
      title: 'Factual support, not a constraint',
      description: 'Horizon does not impose a narrative and does not automate judgment. Teams retain **the same control as they have today** over what is recorded, interpreted, or communicated.',
      conclusion: 'The only difference is operational: **the facts are already there.**',
    },
    infrastructure: {
      title: 'Designed as infrastructure',
      intro: 'Horizon is not an analysis tool, a business system, or a governance process. It is an **infrastructure layer** that:',
      points: [
        'Integrates into existing systems without disrupting them.',
        'Works with rules, scoring, and AI systems.',
        'Captures decisions in synchronous or asynchronous mode.',
        'Respects existing retention and security policies.',
        'Never intervenes in the execution of the decision.',
      ],
      conclusions: [
        'Horizon **decides nothing**.',
        'It **records the factual state of what is executing**, then fades into the background.',
      ],
    },
    value: {
      title: 'Operational value',
      intro: 'Horizon does not create new processes. It **eliminates invisible but recurring costs** related to factual reconstruction.',
      costTitle: 'Reduction of operational costs',
      costPoints: [
        'Reduced effort to establish factual state during reviews or incidents.',
        'Less cross-functional mobilization (IT, data, support, risk).',
        'Less dependence on legacy systems and teams.',
      ],
      timeTitle: 'Cumulative time savings',
      timePoints: [
        'Facts are immediately available.',
        'No more need to reconstitute past states.',
        'A common factual base for all teams.',
      ],
      conclusion: '**A single capture effort. Multiple uses. Zero marginal cost.**',
    },
    comparison: {
      title: 'What changes in practice',
      items: [
        { before: 'Reconstructed facts', after: 'Captured facts' },
        { before: 'High effort', after: 'Marginal cost' },
        { before: 'Legacy system dependence', after: 'Temporal independence' },
        { before: 'Long investigations', after: 'Immediate access' },
        { before: 'Factual uncertainty', after: 'Immutable factual base' },
      ],
    },
    cta: {
      title: 'How to start',
      subtitle: 'Demonstration is possible. Reconstruction is not.',
      description: 'Horizon can be demonstrated on any live system (test, sandbox, demo). What cannot be simulated is the capture of **past decisions**.',
      discussionIntro: 'Adoption starts with an **Acceptability Discussion**:',
      steps: [
        'Assess technical and organizational fit.',
        'Define relevant scopes.',
        'Explicitly decide on adoption (or non-adoption).',
      ],
      button: 'Book an Acceptability Discussion',
    },
    faq: {
      title: 'FAQ',
      items: [
        { q: 'Is this an audit system?', a: 'No. It is a factual capture infrastructure, usable by different teams when necessary (audit, support, IT, engineering).' },
        { q: 'Is this an automated explanation?', a: 'No. Interpretation remains human.' },
        { q: 'Does it reduce flexibility?', a: 'No. Control is unchanged; only the effort decreases.' },
      ],
    },
    foundations: {
      title: 'Learn more',
      content: 'The Foundational Brief presents the operational foundations of execution-time evidence and the principles of Decision Snapshot Infrastructure.',
      linkText: 'Read the Foundations',
    },
  },
};

export default function LandingPage({
  params,
}: {
  params: { lang: Language };
}) {
  const c = content[params.lang];
  const isFr = params.lang === 'fr';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-4 lg:pt-6 pb-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-4">{c.hero.badge}</p>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-black mb-6 leading-tight">
            {c.hero.title}
          </h1>
          <p className="text-lg text-black/70 mb-4">{c.hero.intro}</p>
          <p className="text-lg text-black/70 mb-8" dangerouslySetInnerHTML={{ __html: c.hero.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          <ul className="space-y-2 mb-8">
            {c.hero.points.map((point, i) => (
              <li key={i} className="flex items-center gap-2 text-[#005C99] font-medium">
                <span>👉</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mb-4">
            <Link
              href={`/${params.lang}/engagement`}
              className="inline-flex items-center gap-2 bg-[#005C99] text-white px-6 py-3 font-medium hover:bg-[#005C99]/90 transition-colors"
            >
              {c.hero.cta}
            </Link>
          </div>
          <p className="text-sm text-black italic">{c.hero.ctaSubtext}</p>
        </div>
      </section>

      {/* Facts First Section */}
      <section className="pt-0 pb-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#005C99] p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {c.factsFirst.title}
            </h2>
            <p className="text-lg text-white/80 mb-4">{c.factsFirst.intro}</p>
            <p className="text-lg text-white/80 mb-6" dangerouslySetInnerHTML={{ __html: c.factsFirst.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            <ul className="space-y-2">
              {c.factsFirst.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-white/90 font-medium">
                  <span>👉</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-2">{c.problem.title}</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.problem.subtitle}</h2>
          <p className="text-black/70 mb-6" dangerouslySetInnerHTML={{ __html: c.problem.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
            {c.problem.quote}
          </blockquote>
        </div>
      </section>

      {/* Principle Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-2">{c.principle.title}</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.principle.subtitle}</h2>
          <p className="text-black/70 mb-6" dangerouslySetInnerHTML={{ __html: c.principle.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          <ul className="space-y-3">
            {c.principle.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">•</span>
                <span><strong>{point.title} :</strong> {point.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Artifact Section */}
      <section className="py-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.artifact.title}</h2>
          <p className="text-black/70 mb-6" dangerouslySetInnerHTML={{ __html: c.artifact.intro.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          <ul className="space-y-3">
            {c.artifact.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">•</span>
                <span dangerouslySetInnerHTML={{ __html: `<strong>${point.title} :</strong> ${point.desc.replace(/\*(.*?)\*/g, '<em>$1</em>')}` }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#005C99] text-white p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">{c.support.title}</h2>
            <p className="text-lg mb-6 opacity-90" dangerouslySetInnerHTML={{ __html: c.support.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            <p className="text-lg font-medium" dangerouslySetInnerHTML={{ __html: '👉 ' + c.support.conclusion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.infrastructure.title}</h2>
          <p className="text-black/70 mb-6" dangerouslySetInnerHTML={{ __html: c.infrastructure.intro.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          <ul className="space-y-2 mb-6">
            {c.infrastructure.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2">
            {c.infrastructure.conclusions.map((conclusion, i) => (
              <p key={i} className="text-[#005C99] font-medium" dangerouslySetInnerHTML={{ __html: '👉 ' + conclusion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">{c.value.title}</h2>
          <p className="text-black/70 mb-8" dangerouslySetInnerHTML={{ __html: c.value.intro.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-black mb-4">{c.value.costTitle}</h3>
              <ul className="space-y-2">
                {c.value.costPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-[#005C99] mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-4">{c.value.timeTitle}</h3>
              <ul className="space-y-2">
                {c.value.timePoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-[#005C99] mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-[#005C99] font-medium" dangerouslySetInnerHTML={{ __html: '👉 ' + c.value.conclusion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">{c.comparison.title}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 bg-zinc-100 font-bold text-black border-b-2 border-[#005C99]">
                    {isFr ? 'Avant' : 'Before'}
                  </th>
                  <th className="text-left py-3 px-4 bg-[#005C99] font-bold text-white">
                    {isFr ? 'Avec Horizon' : 'With Horizon'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.comparison.items.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}>
                    <td className="py-3 px-4 text-black/70">{item.before}</td>
                    <td className="py-3 px-4 text-[#005C99] font-medium">{item.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="engage" className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-2">{c.cta.title}</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.cta.subtitle}</h2>
          <p className="text-black/70 mb-6" dangerouslySetInnerHTML={{ __html: c.cta.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          <p className="text-black/70 mb-4" dangerouslySetInnerHTML={{ __html: c.cta.discussionIntro.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          <ol className="space-y-2 mb-8 list-decimal list-inside">
            {c.cta.steps.map((step, i) => (
              <li key={i} className="text-black/70">{step}</li>
            ))}
          </ol>
          <Link
            href={`/${params.lang}/engagement`}
            className="inline-flex items-center gap-2 bg-[#005C99] text-white px-6 py-3 font-medium hover:bg-[#005C99]/90 transition-colors"
          >
            {c.cta.button}
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-black mb-6">{c.faq.title}</h2>
          <div className="space-y-4">
            {c.faq.items.map((item, i) => (
              <div key={i} className="bg-white p-4 border border-black/5">
                <p className="font-bold text-black mb-1">{item.q}</p>
                <p className="text-black/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundations CTA */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#005C99]/5 border border-[#005C99]/20 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-black mb-4">{c.foundations.title}</h2>
            <p className="text-black/70 mb-6 max-w-2xl">{c.foundations.content}</p>
            <Link
              href={`/${params.lang}/foundations`}
              className="inline-flex items-center gap-2 bg-[#005C99] text-white px-6 py-3 font-medium hover:bg-[#005C99]/90 transition-colors"
            >
              {c.foundations.linkText} <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
