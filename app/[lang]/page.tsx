import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    // 1. Hero – affirmation structurante
    hero: {
      title: 'Les systèmes automatisés ne conservent pas les faits d\'exécution des décisions',
      subtitle: 'À mesure que les données, règles et modèles évoluent, les faits d\'exécution d\'une décision s\'éparpillent. L\'examen ultérieur repose alors sur des traces partielles et une reconstruction incertaine.',
    },
    // 2. Constat structurel
    structural: {
      title: 'Le problème est architectural, pas technique',
      content: `Dans les environnements réels, tout bouge : les données évoluent, les règles changent, les modèles sont mis à jour, les architectures se transforment et les équipes se renouvellent.

Pourtant, les décisions produites par ces systèmes restent souvent examinables bien après que les conditions techniques ayant présidé à leur création ont disparu.

Lorsqu'une décision passée doit être comprise, les équipes doivent reconstituer ce qui existait à l'instant T :`,
      points: [
        'Les données réellement consommées.',
        'L\'état exact de la logique appliquée.',
        'Le contexte d\'exécution précis.',
        'Les signaux tiers éventuellement impliqués.',
      ],
      conclusion: 'Cette reconstitution est coûteuse, incertaine et dépendante d\'un système qui n\'existe plus dans son état d\'origine.',
    },
    // 3. Pourquoi ce problème est mal traité
    mistreated: {
      title: 'Un problème structurellement mal nommé',
      subtitle: 'La reconstruction n\'est pas une preuve',
      content: `La plupart des systèmes de décision ne préservent pas les états d'exécution factuels. Ils laissent derrière eux des logs, métriques et traces conçus pour l'observabilité (journaux applicatifs, registres de modèles, configurations, dépendances tierces), et non pour la certitude probante.

Ce que les organisations appellent "preuves" ou "dossiers décisionnels" sont en réalité des reconstructions assemblées après coup :`,
      failures: [
        'Des bases factuelles fragmentées et incomplètes.',
        'Des divergences entre les équipes et les interprétations.',
        'Un biais de rétrospective intégré aux explications.',
        'Un coût opérationnel qui augmente avec le temps.',
      ],
      conclusion: 'Ces défaillances ne sont pas accidentelles. Elles découlent d\'une inadéquation entre ce que les systèmes d\'exécution sont conçus pour conserver et ce dont les institutions ont besoin plus tard pour établir les faits.',
    },
    // 4. Ce qu'est Asplenz (tardivement)
    asplenz: {
      title: 'Une couche d\'infrastructure pour l\'état factuel à l\'exécution',
      brandLine: 'Asplenz Horizon introduit une Decision Snapshot Infrastructure : une couche dédiée à la préservation des faits d\'exécution.',
      intro: `En tant que couche de préservation factuelle, son seul but est de capturer, au point de non-retour, l'état factuel complet d'une décision et de le préserver sous la forme d'un artefact immuable et auto-contenu.`,
      principle: 'Cet artefact existe indépendamment de l\'évolution future du système qui l\'a produit.',
      what: {
        title: 'Ce que l\'infrastructure capture',
        points: [
          'Les données réellement consommées à T0.',
          'L\'état exact de la logique (règles, modèles, configurations).',
          'Le contexte d\'exécution et l\'horodatage précis.',
          'Le résultat produit et ses codes de raison.',
        ],
      },
      boundaries: {
        title: 'Ce que l\'infrastructure ne fait pas',
        points: [
          'Elle n\'explique pas les décisions.',
          'Elle ne justifie pas les résultats.',
          'Elle n\'automatise aucun jugement.',
          'Elle n\'intervient jamais dans l\'exécution.',
        ],
      },
      conclusion: 'L\'infrastructure s\'arrête là où l\'interprétation commence. Elle capture ce qui a été exécuté.',
    },
    // 5. Conséquences organisationnelles
    consequences: {
      title: 'Ce qui change dans la durée',
      intro: 'L\'infrastructure ne change pas ce que les institutions choisissent de décider ou d\'enregistrer. Elle change le coût et la fragilité de l\'établissement des faits.',
      changes: {
        title: 'Ce qui est réduit',
        points: [
          'La coordination entre équipes lors des revues.',
          'La dépendance aux systèmes hérités et aux équipes passées.',
          'Le temps passé à reconstruire des états passés.',
          'L\'incertitude lors de l\'examen.',
        ],
      },
      unchanged: {
        title: 'Ce qui reste inchangé',
        points: [
          'Le contrôle institutionnel sur ce qui est consigné.',
          'L\'interprétation des faits, qui reste humaine.',
          'La gouvernance et les politiques en place.',
          'L\'autorité décisionnelle.',
        ],
      },
      conclusion: 'Ce qui change n\'est pas l\'autorité ou l\'intention. C\'est l\'effort opérationnel.',
    },
    // 6. À qui s'adresse / ne s'adresse pas
    audience: {
      title: 'À qui cette infrastructure s\'adresse',
      forWhom: {
        title: 'Contextes pertinents',
        points: [
          'Organisations dont les décisions automatisées entraînent des conséquences durables.',
          'Environnements soumis à des revues réglementaires ou d\'audit.',
          'Systèmes où la capacité à établir les faits se dégrade avec le temps.',
          'Équipes confrontées à la reconstruction récurrente d\'états passés.',
        ],
      },
      notFor: {
        title: 'Contextes non pertinents',
        points: [
          'Systèmes dont les décisions sont réversibles sans conséquence.',
          'Environnements où la reconstruction est rapide et fiable.',
          'Organisations n\'ayant pas de besoin de preuve à long terme.',
        ],
      },
    },
    // 7. Point de contact discret
    contact: {
      title: 'Initier une discussion',
      content: 'Si vous souhaitez examiner comment ces principes s\'appliquent à vos propres systèmes de décision ou contraintes institutionnelles, vous pouvez initier une discussion.',
      note: 'L\'échange commence par un entretien d\'acceptabilité. Conclure que ce n\'est pas pertinent est un résultat valide.',
      button: 'Réserver un entretien d\'acceptabilité',
    },
    // Liens vers ressources
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
    // 1. Hero – structural assertion
    hero: {
      title: 'Automated systems do not preserve the execution facts of decisions',
      subtitle: 'As data, rules, and models evolve, the execution facts of a decision scatter. Subsequent examination then relies on partial traces and uncertain reconstruction.',
    },
    // 2. Structural observation
    structural: {
      title: 'The problem is architectural, not technical',
      content: `In real-world environments, everything moves: data evolves, rules change, models are updated, architectures transform, and teams rotate.

Yet the decisions produced by these systems often remain examinable long after the technical conditions that produced them have disappeared.

When a past decision must be understood, teams must reconstitute what existed at time T:`,
      points: [
        'The data actually consumed.',
        'The exact state of the logic applied.',
        'The precise execution context.',
        'Any third-party signals involved.',
      ],
      conclusion: 'This reconstitution is costly, uncertain, and dependent on a system that no longer exists in its original state.',
    },
    // 3. Why this problem is mistreated
    mistreated: {
      title: 'A structurally misnamed problem',
      subtitle: 'Reconstruction is not evidence',
      content: `Most decision systems do not preserve factual execution states. They leave behind logs, metrics, and traces designed for observability (application logs, model registries, configurations, third-party dependencies), not evidentiary certainty.

What organizations call "evidence" or "decision records" are actually reconstructions assembled after the fact:`,
      failures: [
        'Fragmented and incomplete factual baselines.',
        'Divergence between teams and interpretations.',
        'Hindsight bias embedded into explanations.',
        'Operational cost that increases over time.',
      ],
      conclusion: 'These failures are not accidental. They arise from a mismatch between what execution systems are designed to retain and what institutions later require to establish facts.',
    },
    // 4. What Asplenz is (introduced late)
    asplenz: {
      title: 'An infrastructure layer for execution-time factual state',
      brandLine: 'Asplenz Horizon introduces a Decision Snapshot Infrastructure: a layer dedicated to preserving execution facts.',
      intro: `As a factual preservation layer, its sole purpose is to capture, at the point of no return, the complete factual state of a decision and preserve it as an immutable, self-contained artifact.`,
      principle: 'This artifact exists independently of the future evolution of the system that produced it.',
      what: {
        title: 'What the infrastructure captures',
        points: [
          'The data actually consumed at T0.',
          'The exact state of the logic (rules, models, configurations).',
          'The execution context and precise timestamp.',
          'The output produced and its reason codes.',
        ],
      },
      boundaries: {
        title: 'What the infrastructure does not do',
        points: [
          'It does not explain decisions.',
          'It does not justify outcomes.',
          'It does not automate judgment.',
          'It never intervenes in execution.',
        ],
      },
      conclusion: 'The infrastructure ends where interpretation begins. It captures what was executed.',
    },
    // 5. Organizational consequences
    consequences: {
      title: 'What changes over time',
      intro: 'The infrastructure does not change what institutions choose to decide or record. It changes the cost and fragility of establishing facts.',
      changes: {
        title: 'What is reduced',
        points: [
          'Cross-team coordination during reviews.',
          'Dependence on legacy systems and past teams.',
          'Time spent reconstructing past states.',
          'Uncertainty during examination.',
        ],
      },
      unchanged: {
        title: 'What remains unchanged',
        points: [
          'Institutional control over what is recorded.',
          'Interpretation of facts, which remains human.',
          'Governance and existing policies.',
          'Decision-making authority.',
        ],
      },
      conclusion: 'What changes is not authority or intent. It is operational effort.',
    },
    // 6. Who this is for / not for
    audience: {
      title: 'Who this infrastructure is for',
      forWhom: {
        title: 'Relevant contexts',
        points: [
          'Organizations whose automated decisions carry durable consequences.',
          'Environments subject to regulatory or audit review.',
          'Systems where the ability to establish facts degrades over time.',
          'Teams facing recurring reconstruction of past states.',
        ],
      },
      notFor: {
        title: 'Non-relevant contexts',
        points: [
          'Systems whose decisions are reversible without consequence.',
          'Environments where reconstruction is fast and reliable.',
          'Organizations with no long-term evidence requirement.',
        ],
      },
    },
    // 7. Discreet contact point
    contact: {
      title: 'Initiate a discussion',
      content: 'If you want to examine how these principles apply to your own decision systems or institutional constraints, you can initiate a discussion.',
      note: 'The exchange starts with an acceptability discussion. Concluding that it is not relevant is a valid outcome.',
      button: 'Book an acceptability discussion',
    },
    // Resource links
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
      {/* 1. Hero – affirmation structurante, pas de promesse, pas de CTA */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-black mb-6 leading-tight">
            {c.hero.title}
          </h1>
          <p className="text-xl text-black/70 leading-relaxed">
            {c.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Constat structurel */}
      <section className="py-12 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">
            {c.structural.title}
          </h2>
          <div className="text-black/70 mb-6 whitespace-pre-line">
            {c.structural.content}
          </div>
          <ul className="space-y-2 mb-8">
            {c.structural.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
            {c.structural.conclusion}
          </blockquote>
        </div>
      </section>

      {/* 3. Pourquoi ce problème est mal traité */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-2">
            {c.mistreated.title}
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">
            {c.mistreated.subtitle}
          </h2>
          <div className="text-black/70 mb-6 whitespace-pre-line">
            {c.mistreated.content}
          </div>
          <ul className="space-y-2 mb-8">
            {c.mistreated.failures.map((failure, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">•</span>
                <span>{failure}</span>
              </li>
            ))}
          </ul>
          <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
            {c.mistreated.conclusion}
          </blockquote>
        </div>
      </section>

      {/* 4. Ce qu'est Asplenz (tardivement) */}
      <section className="py-12 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            {c.asplenz.title}
          </h2>
          <p className="text-black/90 font-medium mb-6">
            {c.asplenz.brandLine}
          </p>
          <p className="text-black/70 mb-4">
            {c.asplenz.intro}
          </p>
          <p className="text-black/70 mb-8 font-medium">
            {c.asplenz.principle}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-black mb-4">{c.asplenz.what.title}</h3>
              <ul className="space-y-2">
                {c.asplenz.what.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-[#005C99] mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-4">{c.asplenz.boundaries.title}</h3>
              <ul className="space-y-2">
                {c.asplenz.boundaries.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-[#005C99] mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
            {c.asplenz.conclusion}
          </blockquote>
        </div>
      </section>

      {/* 5. Conséquences organisationnelles */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            {c.consequences.title}
          </h2>
          <p className="text-black/70 mb-8">
            {c.consequences.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-black mb-4">{c.consequences.changes.title}</h3>
              <ul className="space-y-2">
                {c.consequences.changes.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-[#005C99] mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-black mb-4">{c.consequences.unchanged.title}</h3>
              <ul className="space-y-2">
                {c.consequences.unchanged.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-[#005C99] mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
            {c.consequences.conclusion}
          </blockquote>
        </div>
      </section>

      {/* 6. À qui s'adresse / ne s'adresse pas */}
      <section className="py-12 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
            {c.audience.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-black/10 p-6">
              <h3 className="font-bold text-black mb-4">{c.audience.forWhom.title}</h3>
              <ul className="space-y-2">
                {c.audience.forWhom.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-[#005C99] mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-black/10 p-6">
              <h3 className="font-bold text-black mb-4">{c.audience.notFor.title}</h3>
              <ul className="space-y-2">
                {c.audience.notFor.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-zinc-400 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Point de contact discret */}
      <section id="engage" className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-4">
            {c.contact.title}
          </h2>
          <p className="text-black/70 mb-4">
            {c.contact.content}
          </p>
          <p className="text-black/50 text-sm mb-8">
            {c.contact.note}
          </p>
          <Link
            href={`/${params.lang}/engagement`}
            className="inline-flex items-center gap-2 border border-[#005C99] text-[#005C99] px-6 py-3 font-medium hover:bg-[#005C99]/5 transition-colors"
          >
            {c.contact.button}
          </Link>
        </div>
      </section>

      {/* Ressources */}
      <section className="py-12 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-black mb-8">{c.resources.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-black/10 p-6">
              <h3 className="font-bold text-black mb-2">{c.resources.foundations.title}</h3>
              <p className="text-black/70 text-sm mb-4">{c.resources.foundations.content}</p>
              <Link
                href={`/${params.lang}/foundations`}
                className="text-[#005C99] font-medium hover:underline inline-flex items-center gap-1"
              >
                {c.resources.foundations.linkText} <span>→</span>
              </Link>
            </div>
            <div className="bg-white border border-black/10 p-6">
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
