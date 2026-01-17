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
      cta: 'Book an acceptability discussion',
      ctaSubtext: 'Horizon s\'intègre aux systèmes existants. L\'adoption commence par une discussion d\'acceptabilité, pas par une décision imposée.',
    },
    factsFirst: {
      title: 'Les faits avant la reconstruction',
      intro: 'Les équipes techniques produisent déjà aujourd\'hui des dossiers décisionnels : logs, bases de données, configurations, modèles, documents internes.',
      description: 'Horizon **ne redéfinit pas ce qu\'est un dossier**. Il **simplifie radicalement la production de ses éléments factuels**.',
      points: [
        'Ce qui change, ce n\'est pas le contenu du dossier.',
        'C\'est l\'effort nécessaire pour l\'établir.',
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
        { title: 'État de la Logique', desc: 'La version exacte du modèle et sa configuration.' },
        { title: 'Contexte', desc: 'L\'identité du système et l\'horodatage précis.' },
        { title: 'Indépendance', desc: 'Généré en temps réel, il ne dépend pas de l\'évolution future du système.' },
      ],
    },
    artifact: {
      title: 'Decision Snapshot Artifact',
      intro: 'L\'Artefact est un **objet auto-contenu** qui permet d\'établir les faits sans reconstitution. Il inclut :',
      points: [
        { title: 'Métadonnées d\'exécution', desc: 'ID unique et horodatage UTC précis.' },
        { title: 'Snapshot Data', desc: 'Les entrées brutes vues par le système à T0.' },
        { title: 'Model State', desc: 'Le hash du modèle et les seuils actifs.' },
        { title: 'Output', desc: 'Le résultat et ses codes de raison (*reason codes*).' },
        { title: 'Intégrité', desc: 'Signature cryptographique assurant l\'immuabilité.' },
      ],
    },
    support: {
      title: 'Un support factuel, pas une contrainte',
      description: 'Horizon n\'impose aucune narration et n\'automatise aucun jugement. Les équipes conservent **le même contrôle qu\'aujourd\'hui** sur ce qui est consigné, interprété ou communiqué.',
      conclusion: 'La seule différence est opérationnelle : **les faits sont déjà là.**',
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
        { q: 'Est-ce un système d\'audit ?', a: 'Non. C\'est une infrastructure de capture factuelle.' },
        { q: 'Est-ce une explication automatique ?', a: 'Non. L\'interprétation reste humaine.' },
        { q: 'Perd-on de la flexibilité ?', a: 'Non. Le contrôle est inchangé, seul l\'effort diminue.' },
      ],
    },
    whitePaper: {
      title: 'Comprendre en profondeur',
      content: 'Le White Paper détaille les principes de la preuve d\'exécution, l\'architecture de Horizon, et les implications institutionnelles, juridiques et techniques.',
      linkText: 'Lire le White Paper',
    },
  },
  en: {
    hero: {
      badge: 'Decision Snapshot Infrastructure',
      title: 'Making automated decisions durable over time',
      intro: 'Automated systems make decisions that have long-term consequences. Yet the factual state behind those decisions quickly disappears as systems evolve.',
      description: 'Horizon is an **infrastructure** that preserves the **factual state of a decision at the exact moment it is executed**, allowing teams to rely on it later **without depending on the original system**.',
      points: [
        'Facts are captured at execution time.',
        'Institutional control remains unchanged.',
        'Operational cost is dramatically reduced.',
      ],
      cta: 'Book an Acceptability Discussion',
      ctaSubtext: 'Horizon integrates into existing systems. Adoption starts with an acceptability discussion, not an imposed rule.',
    },
    factsFirst: {
      title: 'Facts before reconstruction',
      intro: 'Teams already assemble decision records today: logs, databases, configurations, models, internal documents.',
      description: 'Horizon **does not redefine what the record is**. It **removes the friction of producing its factual components**.',
      points: [
        'What changes is not the content of the record.',
        'It is the cost of assembling it.',
      ],
    },
    problem: {
      title: 'The operational problem',
      subtitle: 'Automated decisions do not survive the systems that produced them',
      description: 'In real-world environments, everything moves: data evolves, rules change, models are retrained, and architectures move on. When a past decision must be understood, teams are forced to **reconstruct facts** from partial sources.',
      quote: 'The reality: This reconstruction is costly, uncertain, and dependent on a system that no longer exists in its original state.',
    },
    principle: {
      title: 'The Horizon principle',
      subtitle: 'Capture facts once, at the right moment',
      description: 'Horizon captures the **factual state of a decision at execution time**, producing a **Decision Snapshot Artifact**.',
      points: [
        { title: 'Data Actually Consumed', desc: 'The complete raw inputs at T0.' },
        { title: 'Logic State', desc: 'The exact model version and configuration.' },
        { title: 'Context', desc: 'System identity and precise UTC timestamp.' },
        { title: 'Independence', desc: 'Generated in real-time; independent from future system evolution.' },
      ],
    },
    artifact: {
      title: 'Decision Snapshot Artifact',
      intro: 'The Artifact is a **self-contained object** that establishes facts without reconstruction. It includes:',
      points: [
        { title: 'Execution Metadata', desc: 'Unique ID and precise UTC timestamp.' },
        { title: 'Snapshot Data', desc: 'Raw inputs exactly as seen by the system at T0.' },
        { title: 'Model State', desc: 'Model hash and active thresholds.' },
        { title: 'Decision Output', desc: 'Final result and actionable reason codes.' },
        { title: 'Integrity', desc: 'Cryptographic signature ensuring non-alteration.' },
      ],
    },
    support: {
      title: 'Factual support, not institutional constraint',
      description: 'Horizon does not impose narratives or automate judgment. Teams retain **the same control as today** over what enters the record, what is interpreted, and what is communicated.',
      conclusion: 'The difference is operational: **the facts already exist.**',
    },
    comparison: {
      title: 'What changes in practice',
      items: [
        { before: 'Reconstructed facts', after: 'Captured facts' },
        { before: 'High effort', after: 'Marginal cost' },
        { before: 'Legacy dependency', after: 'Temporal independence' },
        { before: 'Long investigations', after: 'Immediate access' },
        { before: 'Factual uncertainty', after: 'Immutable factual base' },
      ],
    },
    cta: {
      title: 'How to start',
      subtitle: 'Demonstration is possible. Reconstruction is not.',
      description: 'Horizon can be demonstrated on any live system (test, sandbox, demo). What cannot be simulated is the capture of **past executions**.',
      discussionIntro: 'Adoption starts with an **acceptability discussion**:',
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
        { q: 'Is this an audit system?', a: 'No. It is a factual capture infrastructure.' },
        { q: 'Is interpretation automated?', a: 'No. Interpretation remains human.' },
        { q: 'Does this reduce flexibility?', a: 'No. Control is unchanged; effort is reduced.' },
      ],
    },
    whitePaper: {
      title: 'Understand in depth',
      content: 'The White Paper details execution-time evidence principles, Horizon\'s architecture, and institutional, legal, and technical implications.',
      linkText: 'Read the White Paper',
    },
  },
};

export default function HomePage({
  params,
}: {
  params: { lang: Language };
}) {
  const c = content[params.lang];
  const isFr = params.lang === 'fr';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-4">{c.hero.badge}</p>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-black mb-6 leading-tight">
            {c.hero.title}
          </h1>
          <p className="text-lg text-black/70 mb-4">{c.hero.intro}</p>
          <p className="text-lg text-black/70 mb-8" dangerouslySetInnerHTML={{ __html: c.hero.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          <ul className="space-y-2 mb-8 inline-block text-left">
            {c.hero.points.map((point, i) => (
              <li key={i} className="flex items-center gap-2 text-[#005C99] font-medium">
                <span>👉</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mb-4">
            <Link
              href={`/${params.lang}/contact`}
              className="inline-flex items-center gap-2 bg-[#00205E] text-white px-6 py-3 font-medium hover:bg-[#00205E]/90 transition-colors"
            >
              {c.hero.cta}
            </Link>
          </div>
          <p className="text-sm text-black italic">{c.hero.ctaSubtext}</p>
        </div>
      </section>

      {/* Facts First Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#00205E] p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {c.factsFirst.title}
            </h2>
            <p className="text-lg text-white/80 mb-4">{c.factsFirst.intro}</p>
            <p className="text-lg text-white/80 mb-6" dangerouslySetInnerHTML={{ __html: c.factsFirst.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            <ul className="space-y-2 inline-block text-left">
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
      <section className="py-16 bg-zinc-50">
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
      <section className="py-16">
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
      <section className="py-16 bg-zinc-50">
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#00205E] text-white p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">{c.support.title}</h2>
            <p className="text-lg mb-6 opacity-90" dangerouslySetInnerHTML={{ __html: c.support.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            <p className="text-lg font-medium" dangerouslySetInnerHTML={{ __html: '👉 ' + c.support.conclusion.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">{c.comparison.title}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 bg-zinc-100 font-bold text-black border-b-2 border-[#005C99]">
                    {isFr ? 'Avant' : 'Before'}
                  </th>
                  <th className="text-left py-3 px-4 bg-[#00205E] font-bold text-white">
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
      <section id="engage" className="py-16 bg-zinc-50">
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
            href={`/${params.lang}/contact`}
            className="inline-flex items-center gap-2 bg-[#00205E] text-white px-6 py-3 font-medium hover:bg-[#00205E]/90 transition-colors"
          >
            {c.cta.button}
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-black mb-6">{c.faq.title}</h2>
          <div className="space-y-4">
            {c.faq.items.map((item, i) => (
              <div key={i} className="bg-zinc-50 p-4 border border-black/5">
                <p className="font-bold text-black mb-1">{item.q}</p>
                <p className="text-black/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Paper CTA */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#00205E]/5 border border-[#005C99]/20 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-black mb-4">{c.whitePaper.title}</h2>
            <p className="text-black/70 mb-6 max-w-2xl">{c.whitePaper.content}</p>
            <Link
              href={`/${params.lang}/white-paper`}
              className="inline-flex items-center gap-2 bg-[#00205E] text-white px-6 py-3 font-medium hover:bg-[#00205E]/90 transition-colors"
            >
              {c.whitePaper.linkText} <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
