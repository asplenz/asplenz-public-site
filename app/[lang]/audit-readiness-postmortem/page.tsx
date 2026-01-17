import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    title: 'Audit de Conformité & Post-mortem',
    subtitle: 'Établir ce qui peut être prouvé, et ce qui ne peut pas l\'être, quand la responsabilité est engagée.',
    why: {
      title: 'Pourquoi ce diagnostic existe',
      intro: 'Dans certaines situations, la responsabilité n\'est plus un concept abstrait.',
      situations: [
        'Un audit est programmé.',
        'Un contrôle réglementaire est annoncé.',
        'Une décision est contestée.',
        'Un incident s\'est produit.',
      ],
      consequence: 'À ce stade, on ne demande plus aux organisations ce qu\'elles avaient l\'intention de faire : on leur demande ce qu\'elles peuvent démontrer factuellement.',
      discoveries: [
        'les traces de décision sont incomplètes,',
        'les responsabilités sont implicites ou fragmentées,',
        'les discours ne sont pas étayés par des preuves,',
        'la reconstruction des faits introduirait un risque inacceptable.',
      ],
      conclusion: 'Cette mission existe pour traiter ces moments avec rigueur, sans artifice narratif.',
    },
    objective: {
      title: 'Objectif de l\'intervention',
      intro: 'Aider les organisations à établir une vision claire et défendable des faits et des preuves existants, et déterminer précisément :',
      points: [
        'ce qui peut être prouvé,',
        'ce qui ne peut pas l\'être,',
        'et où la responsabilité est matériellement exposée.',
      ],
      conclusion: 'Il ne s\'agit pas de justification. Il s\'agit de clarté factuelle sous examen.',
    },
    work: {
      title: 'Ce sur quoi nous travaillons concrètement',
      inventory: {
        title: 'Inventaire des faits et des preuves',
        intro: 'Nous partons strictement de ce qui existe.',
        points: [
          'Identifier les traces, enregistrements, logs, artéfacts et documentations disponibles.',
          'Déterminer leur périmètre, leur intégrité et leur fiabilité.',
          'Clarifier ce qui se rapporte aux décisions, à l\'exécution, au contexte, à la responsabilité.',
        ],
        conclusion: 'Aucune hypothèse n\'est ajoutée.',
      },
      reconstruction: {
        title: 'Reconstruction des décisions et des responsabilités, sans fiction',
        intro: 'Pour les décisions concernées, nous évaluons :',
        points: [
          'si la décision peut être reconstruite factuellement,',
          'quels éléments de contexte et de saisie sont démontrables,',
          'où la responsabilité peut être clairement attribuée,',
          'où l\'attribution devient impossible.',
        ],
        distinction: 'Nous distinguons explicitement : l\'absence de preuve, de la preuve de l\'absence.',
        conclusion: 'Cette distinction est critique lors d\'un audit ou d\'un litige.',
      },
      clarification: {
        title: 'Clarification du périmètre de preuve',
        intro: 'Nous identifions et documentons :',
        points: [
          'ce qui peut être défendu avec confiance,',
          'ce qui reste incertain,',
          'ce qui ne peut être soutenu sans reconstruction des faits.',
        ],
        conclusion: 'Cette phase fournit à la direction une cartographie précise de son exposition au risque, plutôt qu\'un faux sentiment de sécurité.',
      },
    },
    isAndIsNot: {
      title: 'Ce que cette intervention est, et ce qu\'elle n\'est pas',
      is: [
        'Une mission rigoureusement factuelle.',
        'Fondée exclusivement sur des éléments existants.',
        'Conçue pour des moments où les enjeux de responsabilité sont élevés.',
        'Applicable avant ou après un incident.',
      ],
      isNot: [
        'Un exercice d\'optimisation de récit.',
        'Une stratégie de défense juridique.',
        'Une reconstruction de faits manquants.',
        'Une justification rétroactive de décisions.',
      ],
      conclusion: 'Nous ne créons pas de preuves. Nous travaillons uniquement avec ce qui existe.',
    },
    situations: {
      title: 'Situations types',
      intro: 'Cette intervention est pertinente lorsque :',
      list: [
        'un audit interne ou externe est imminent,',
        'un contrôle ou une enquête réglementaire est initié,',
        'une décision est contestée en interne ou en externe,',
        'un incident nécessite une analyse post-mortem,',
        'la direction a besoin d\'une vision claire de son exposition en matière de responsabilité.',
      ],
    },
    connection: {
      title: 'Le lien avec Asplenz',
      principle: 'Le diagnostic "Audit de Conformité & Post-mortem" reflète un principe fondamental d\'Asplenz :',
      quote: 'La responsabilité ne se rajoute pas après coup.',
      points: [
        'expose les limites de la reconstruction a posteriori,',
        'clarifie les points où la preuve d\'exécution fait défaut,',
        'permet de savoir si des capacités structurelles comme Horizon auraient fait la différence.',
      ],
      conclusion: 'Il ne remplace pas l\'infrastructure. Il révèle si l\'infrastructure aurait été nécessaire.',
    },
    format: {
      title: 'Format de l\'intervention',
      points: [
        'Missions courtes et ciblées.',
        'Périmètre défini selon la situation.',
        'Sans engagement de durée.',
        'Conçu pour éclairer des décisions sous contrainte.',
      ],
    },
    quote: 'Sous examen, la crédibilité vient des faits, pas des récits.',
    cta: {
      intro: 'Si vous faites face à un audit, un contrôle ou une décision contestée, ou si vous avez besoin de savoir ce qui peut être prouvé avant qu\'un examen ne commence :',
      linkText: 'Contactez-nous',
    },
  },
  en: {
    title: 'Audit Readiness & Post-mortem',
    subtitle: 'Establishing what can — and cannot — be proven when accountability is explicit.',
    why: {
      title: 'Why this exists',
      intro: 'In some situations, accountability is no longer abstract.',
      situations: [
        'An audit is scheduled.',
        'A regulatory review is announced.',
        'A decision is contested.',
        'An incident has occurred.',
      ],
      consequence: 'At that point, organizations are no longer asked what they intended to do — but what they can demonstrate factually.',
      discoveries: [
        'decision traces are incomplete,',
        'responsibilities are implicit or fragmented,',
        'narratives cannot be supported by evidence,',
        'reconstruction would introduce unacceptable risk.',
      ],
      conclusion: 'This engagement exists to address that moment with rigor, not storytelling.',
    },
    objective: {
      title: 'Objective of the engagement',
      intro: 'Help organizations establish a clear, defensible view of existing facts and evidence, and determine precisely:',
      points: [
        'what can be proven,',
        'what cannot be proven,',
        'and where responsibility is materially exposed.',
      ],
      conclusion: 'This is not about justification. It is about factual clarity under scrutiny.',
    },
    work: {
      title: 'What we actually work on',
      inventory: {
        title: 'Fact and evidence inventory',
        intro: 'We start strictly from what exists.',
        points: [
          'Identify available traces, records, logs, artifacts, and documentation.',
          'Determine their scope, integrity, and reliability.',
          'Clarify what relates to decisions, execution, context, responsibility.',
        ],
        conclusion: 'No assumptions are added.',
      },
      reconstruction: {
        title: 'Decision and accountability reconstruction — without fiction',
        intro: 'For relevant decisions, we assess:',
        points: [
          'whether the decision can be reconstructed factually,',
          'which inputs and context are demonstrable,',
          'where responsibility can be clearly attributed,',
          'where attribution breaks down.',
        ],
        distinction: 'We explicitly distinguish: absence of evidence from evidence of absence.',
        conclusion: 'This distinction is critical under audit or dispute.',
      },
      clarification: {
        title: 'Proof boundary clarification',
        intro: 'We identify and document:',
        points: [
          'what can be defended with confidence,',
          'what remains uncertain,',
          'what cannot be supported without reconstruction.',
        ],
        conclusion: 'This phase provides leadership with a clear exposure map, rather than false reassurance.',
      },
    },
    isAndIsNot: {
      title: 'What this engagement is — and is not',
      is: [
        'A rigorously factual engagement',
        'Grounded exclusively in existing material',
        'Designed for high-stakes accountability moments',
        'Applicable before or after an incident',
      ],
      isNot: [
        'A narrative optimization exercise',
        'A legal defense strategy',
        'A reconstruction of missing facts',
        'A retroactive justification of decisions',
      ],
      conclusion: 'We do not create evidence. We work only with what exists.',
    },
    situations: {
      title: 'Typical situations',
      intro: 'This engagement is relevant when:',
      list: [
        'an internal or external audit is upcoming,',
        'a regulatory review or investigation is initiated,',
        'a decision is challenged internally or externally,',
        'an incident requires post-mortem analysis,',
        'leadership needs a clear view of accountability exposure.',
      ],
    },
    connection: {
      title: 'How this connects to Asplenz',
      principle: 'Audit Readiness & Post-mortem reflects a core principle of Asplenz:',
      quote: 'Accountability cannot be retrofitted.',
      points: [
        'exposes the limits of ex post reconstruction,',
        'clarifies where execution proof is missing,',
        'informs whether structural capabilities like Horizon would have mattered.',
      ],
      conclusion: 'It does not replace infrastructure. It reveals whether infrastructure would have mattered.',
    },
    format: {
      title: 'Engagement format',
      points: [
        'Short, focused engagements',
        'Scope defined by the situation',
        'No lock-in',
        'Designed to inform decisions under constraint',
      ],
    },
    quote: 'Under scrutiny, credibility comes from facts — not from narratives.',
    cta: {
      intro: 'If you are facing an audit, review, or contested decision, or need clarity on what can be proven before scrutiny begins:',
      linkText: 'Get in touch',
    },
  },
};

export default function AuditReadinessPage({
  params,
}: {
  params: { lang: Language };
}) {
  const c = content[params.lang];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-black mb-4">
            {c.title}
          </h1>
          <p className="text-xl lg:text-2xl text-black/60 font-light">
            {c.subtitle}
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-6">{c.why.title}</h2>
          <p className="text-black/70 mb-4">{c.why.intro}</p>
          <ul className="space-y-1 mb-6 bg-white p-4 border border-black/5">
            {c.why.situations.map((s, i) => (
              <li key={i} className="text-black font-medium">{s}</li>
            ))}
          </ul>
          <p className="text-black/70 mb-4">{c.why.consequence}</p>
          <p className="text-black/70 mb-2">{params.lang === 'fr' ? 'Beaucoup d\'organisations découvrent trop tard que :' : 'Many organizations discover too late that:'}</p>
          <ul className="space-y-1 mb-6">
            {c.why.discoveries.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <p className="text-black/80 font-medium">{c.why.conclusion}</p>
        </div>
      </section>

      {/* Objective */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-6">{c.objective.title}</h2>
          <p className="text-black/70 mb-4">{c.objective.intro}</p>
          <ul className="space-y-1 mb-6">
            {c.objective.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-black border-l-4 border-[#1e3a8a] pl-4 font-medium">{c.objective.conclusion}</p>
        </div>
      </section>

      {/* Work */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-8">{c.work.title}</h2>

          {/* Inventory */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-black mb-4">{c.work.inventory.title}</h3>
            <p className="text-black/70 mb-4">{c.work.inventory.intro}</p>
            <ul className="space-y-2 mb-4">
              {c.work.inventory.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70">
                  <span className="text-[#1e3a8a] mt-1">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/80 font-medium">{c.work.inventory.conclusion}</p>
          </div>

          {/* Reconstruction */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-black mb-4">{c.work.reconstruction.title}</h3>
            <p className="text-black/70 mb-2">{c.work.reconstruction.intro}</p>
            <ul className="space-y-1 mb-4">
              {c.work.reconstruction.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70">
                  <span className="text-[#1e3a8a] mt-1">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-black bg-white p-4 border border-black/5 mb-4 font-medium">{c.work.reconstruction.distinction}</p>
            <p className="text-black/80 italic">{c.work.reconstruction.conclusion}</p>
          </div>

          {/* Clarification */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">{c.work.clarification.title}</h3>
            <p className="text-black/70 mb-2">{c.work.clarification.intro}</p>
            <ul className="space-y-1 mb-4">
              {c.work.clarification.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70">
                  <span className="text-[#1e3a8a] mt-1">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/80">{c.work.clarification.conclusion}</p>
          </div>
        </div>
      </section>

      {/* Is and Is Not */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-8">{c.isAndIsNot.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div className="bg-zinc-50 p-6">
              <h3 className="font-bold text-black mb-4">{params.lang === 'fr' ? 'C\'est :' : 'This is:'}</h3>
              <ul className="space-y-2">
                {c.isAndIsNot.is.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-50 p-6">
              <h3 className="font-bold text-black mb-4">{params.lang === 'fr' ? 'Ce n\'est pas :' : 'This is not:'}</h3>
              <ul className="space-y-2">
                {c.isAndIsNot.isNot.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/50">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-black font-bold text-center">{c.isAndIsNot.conclusion}</p>
        </div>
      </section>

      {/* Situations */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-6">{c.situations.title}</h2>
          <p className="text-black/70 mb-4">{c.situations.intro}</p>
          <ul className="space-y-2">
            {c.situations.list.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Connection */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-6">{c.connection.title}</h2>
          <p className="text-black/70 mb-4">{c.connection.principle}</p>
          <blockquote className="text-xl font-bold text-[#1e3a8a] border-l-4 border-[#1e3a8a] pl-4 my-6">
            "{c.connection.quote}"
          </blockquote>
          <p className="text-black/70 mb-2">{params.lang === 'fr' ? 'Ce travail :' : 'This work:'}</p>
          <ul className="space-y-1 mb-6">
            {c.connection.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p className="text-black/80 italic">{c.connection.conclusion}</p>
        </div>
      </section>

      {/* Format */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-6">{c.format.title}</h2>
          <ul className="space-y-2">
            {c.format.points.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#1e3a8a] mt-1">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-[#1e3a8a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl lg:text-2xl font-medium italic text-white">
            "{c.quote}"
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-black/70 mb-8 max-w-2xl mx-auto">{c.cta.intro}</p>
          <Link
            href={`/${params.lang}/engagement`}
            className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 font-medium hover:bg-[#1e3a8a]/90 transition-colors"
          >
            {c.cta.linkText} <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
