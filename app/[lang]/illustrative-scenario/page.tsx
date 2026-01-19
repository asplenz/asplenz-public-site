import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    badge: 'Scénario illustratif',
    title: 'Une situation type où la reconstruction devient le problème',
    intro: {
      title: 'Ce que ce scénario démontre',
      content: `Ce scénario démontre que lorsqu'une décision est examinée ultérieurement, l'issue dépend de l'existence d'un registre au moment de l'exécution ou de la nécessité d'une reconstruction.

Il procède par la comparaison de **deux mondes possibles** :`,
      worlds: [
        { name: 'Monde A : La reconstruction', description: 'La décision est examinée des semaines plus tard à l\'aide de journaux (logs), de tableaux de bord, de tickets et de la mémoire des acteurs.' },
        { name: 'Monde B : La preuve au moment de l\'exécution', description: 'La décision a laissé derrière elle un artefact préservé à l\'instant même où elle a été exécutée.' }
      ],
      conclusion: 'Les événements sont identiques. La différence ne réside **pas dans la décision**, mais dans **ce qui existe avant que l\'examen ne commence**.'
    },
    purpose: {
      title: 'Objet de cette page',
      content: `Cette page ne décrit pas un cas client, un incident ou un déploiement spécifique.

Elle décrit une situation archétypale propre aux institutions régulées, quels que soient leur secteur, leur pile technologique ou leur logique décisionnelle.

L'objectif est de rendre le problème sous-jacent concret sans divulgation opérationnelle.`
    },
    situation: {
      title: 'La situation',
      content: `À l'instant T, un système procède à une exécution.

Cette exécution peut être :`,
      types: [
        'entièrement automatisée',
        'partiellement automatisée',
        'initiée par un humain assisté par un système'
      ],
      outcome: `L'exécution produit un résultat :`,
      characteristics: [
        'porteur de conséquences institutionnelles',
        'irréversible',
        'extérieurement contestable'
      ],
      conclusion: 'Au moment où elle survient, rien ne semble anormal.'
    },
    later: {
      title: 'Des semaines ou des mois plus tard',
      content: `Une question surgit. Il ne s'agit pas d'une question générale sur le comportement habituel du système, mais d'une **question précise sur un cas spécifique** :`,
      questions: [
        'Pourquoi cette action a-t-elle été entreprise ?',
        'Quelles informations étaient disponibles à cet instant ?',
        'Quelles évaluations ont été produites ?',
        'Qu\'est-ce qui était connu, évalué ou supposé lors de l\'exécution ?'
      ],
      conclusion: 'La question est qualitative, spécifique au cas et non statistique.'
    },
    worlds: {
      title: 'Deux mondes possibles',
      intro: 'À ce stade, l\'institution se trouve dans l\'une des deux situations suivantes.',
      worldA: {
        title: 'Monde A : La reconstruction',
        content: `Aucune preuve déclarée n'existe pour l'exécution à l'instant T.

Pour répondre à la question, l'organisation doit reconstruire les événements :`,
        steps: [
          'en corrélant les logs de plusieurs systèmes',
          'en examinant les tickets, courriels ou tableaux de bord',
          'en interrogeant les ingénieurs et les opérateurs',
          'en rechargeant des configurations ou des modèles ayant pu évoluer'
        ],
        result: `Les faits sont déduits. Le contexte est réassemblé. Les explications sont produites après coup. Bien que la reconstruction puisse être honnête et diligente, elle est :`,
        characteristics: [
          'chronophage',
          'fragile',
          'dépendante de l\'intervention humaine',
          'potentiellement contestable'
        ],
        conclusion: 'À ce stade, la reconstruction elle-même devient l\'un des objets de l\'examen.'
      },
      worldB: {
        title: 'Monde B : L\'examen',
        content: `Une preuve déclarée existe pour l'exécution à l'instant T.

Au moment de l'exécution :`,
        preserved: [
          'l\'action a été consignée comme un fait',
          'les évaluations produites à cet instant ont été préservées',
          'l\'ordre et l\'intégrité ont été garantis'
        ],
        result: `Pour répondre à la question, l'organisation ne reconstruit pas. Elle examine. Les faits examinés sont :`,
        characteristics: [
          'les mêmes faits que ceux existant au moment de l\'exécution',
          'indépendants de l\'état actuel du système',
          'indépendants du personnel en place'
        ],
        focus: 'La discussion se concentre sur :',
        focusItems: [
          'ce qui a été exécuté',
          'ce qui a été évalué',
          'le contexte déclaré'
        ],
        conclusion: 'Et non sur la crédibilité de la reconstruction du passé.'
      }
    },
    changes: {
      title: 'Ce qui change entre les deux mondes',
      content: `La différence entre ces deux mondes n'est pas d'ordre technique. **Elle réside dans le moment où la preuve est créée.**`,
      comparison: [
        'Dans le Monde A, la preuve est assemblée quand la question se pose.',
        'Dans le Monde B, la preuve existe déjà quand la question est posée.'
      ],
      impact: 'Ce simple décalage modifie :',
      impacts: [
        'la durée des investigations',
        'le nombre d\'équipes mobilisées',
        'la stabilité des conclusions',
        'le profil de risque institutionnel'
      ]
    },
    notAbout: {
      title: 'Ce que ce scénario n\'est pas',
      content: 'Ce scénario ne traite pas :',
      items: [
        'de la justesse ou de l\'erreur de la décision',
        'de la qualité du modèle ou de la politique appliquée',
        'de la pertinence du résultat obtenu'
      ],
      conclusion: 'Il porte exclusivement sur la capacité à examiner des faits sans reconstruction.'
    },
    whyMatters: {
      title: 'Pourquoi ce scénario est crucial',
      content: `Les institutions échouent rarement par incapacité à décider. Elles échouent parce que, plus tard, elles ne peuvent démontrer ce qui s'est passé sous la pression d'un examen, sans avoir à réassembler le passé.`,
      conclusion: 'Ce scénario capture l\'instant où la capacité de reconstruction ne suffit plus, car la reconstruction elle-même fait l\'objet de l\'examen.'
    },
    relation: {
      title: 'Relation avec Horizon',
      content: `Asplenz Horizon existe pour rendre le Monde B possible. Il n'explique pas les décisions. Il ne juge pas les résultats. Il ne prévient pas les incidents.`,
      conclusion: 'Il garantit que, lorsqu\'un examen est requis, les faits existent déjà.'
    },
    closing: {
      title: 'Note finale',
      content: `Ce scénario est intentionnellement générique. Il s'applique partout où :`,
      conditions: [
        'les exécutions sont lourdes de conséquences',
        'le temps passe',
        'les systèmes et les équipes évoluent',
        'des questions sont posées après coup'
      ],
      conclusion: 'Le scénario ne prétend pas qu\'un tel dispositif doive impérativement exister. Il clarifie ce qui change s\'il existe.'
    },
    cta: {
      title: 'Étape suivante',
      content: 'Si vous souhaitez examiner comment ces principes s\'appliquent à vos propres systèmes de décision, vous pouvez initier une discussion.',
      button: 'Réserver un entretien d\'acceptabilité'
    }
  },
  en: {
    badge: 'Illustrative scenario',
    title: 'A canonical situation where reconstruction becomes the problem',
    intro: {
      title: 'What this scenario demonstrates',
      content: `This scenario demonstrates that when a decision is later examined, the outcome depends on whether an execution-time record exists or must be reconstructed.

It does so by comparing **two worlds**:`,
      worlds: [
        { name: 'World A: Reconstruction', description: 'The decision is examined weeks later using logs, dashboards, tickets, and memory.' },
        { name: 'World B: Execution-time evidence', description: 'The decision left behind a preserved artefact at the moment it was executed.' }
      ],
      conclusion: 'The events are identical. The difference is **not the decision**, but **what exists before scrutiny begins**.'
    },
    purpose: {
      title: 'Purpose of this page',
      content: `This page does not describe a customer case, an incident, or a deployment.

It describes an archetypal situation that occurs across regulated institutions, regardless of industry, technology stack, or decision logic.

The purpose is to make the underlying problem concrete without operational disclosure.`
    },
    situation: {
      title: 'The situation',
      content: `At time T, a system performs an execution.

The execution may be:`,
      types: [
        'fully automated',
        'partially automated',
        'initiated by a human supported by a system'
      ],
      outcome: `The execution produces an outcome that is:`,
      characteristics: [
        'institutionally consequential',
        'irreversible',
        'externally contestable'
      ],
      conclusion: 'At the time it occurs, nothing appears abnormal.'
    },
    later: {
      title: 'Weeks or months later',
      content: `A question arises. Not a general question about how the system usually behaves, but a **specific question about a specific case**:`,
      questions: [
        'Why was this action taken?',
        'What information was available at that moment?',
        'What evaluations were produced?',
        'What was known, assessed, or assumed when the execution occurred?'
      ],
      conclusion: 'The question is qualitative, case-specific, and non-statistical.'
    },
    worlds: {
      title: 'Two possible worlds',
      intro: 'At this point, the institution finds itself in one of two situations.',
      worldA: {
        title: 'World A: Reconstruction',
        content: `No declared evidence exists for the execution at time T.

To answer the question, the organization must reconstruct what happened by:`,
        steps: [
          'correlating logs from multiple systems',
          'reviewing tickets, emails, or dashboards',
          'interviewing engineers and operators',
          'reloading configurations or models that may have changed'
        ],
        result: `Facts are inferred. Context is reassembled. Explanations are produced after the fact. The reconstruction may be honest and diligent, but it is:`,
        characteristics: [
          'time-consuming',
          'fragile',
          'dependent on human mediation',
          'potentially contestable'
        ],
        conclusion: 'At this stage, the reconstruction itself becomes part of what is examined.'
      },
      worldB: {
        title: 'World B: Examination',
        content: `Declared evidence exists for the execution at time T.

When the execution occurred:`,
        preserved: [
          'the action was recorded as a fact',
          'the evaluations produced at that moment were preserved',
          'ordering and integrity were guaranteed'
        ],
        result: `To answer the question, the organization does not reconstruct. It examines. The facts examined are:`,
        characteristics: [
          'the same facts that existed at execution time',
          'independent of current system state',
          'independent of current personnel'
        ],
        focus: 'The discussion focuses on:',
        focusItems: [
          'what was executed',
          'what was evaluated',
          'the declared context'
        ],
        conclusion: 'Not on how convincingly the past can be rebuilt.'
      }
    },
    changes: {
      title: 'What changes between the two worlds',
      content: `The difference between these two worlds is not technical sophistication. **It is when evidence is created.**`,
      comparison: [
        'In World A, evidence is assembled when the question arises.',
        'In World B, evidence already exists when the question is asked.'
      ],
      impact: 'This single shift changes:',
      impacts: [
        'the duration of investigations',
        'the number of teams involved',
        'the stability of conclusions',
        'the institutional risk profile'
      ]
    },
    notAbout: {
      title: 'What this scenario is not about',
      content: 'This scenario does not address:',
      items: [
        'whether the decision was correct or incorrect',
        'whether the model or policy was good or bad',
        'whether the outcome should have been different'
      ],
      conclusion: 'It is strictly about whether facts are examinable without reconstruction.'
    },
    whyMatters: {
      title: 'Why this scenario matters',
      content: `Institutions rarely fail because they cannot decide. They fail because, later, they cannot demonstrate what happened, under scrutiny, without reassembling the past.`,
      conclusion: 'This scenario captures the moment where the ability to reconstruct is no longer sufficient, because reconstruction itself is examined.'
    },
    relation: {
      title: 'Relation to Horizon',
      content: `Asplenz Horizon exists to make World B possible. It does not explain decisions. It does not judge outcomes. It does not prevent incidents.`,
      conclusion: 'It ensures that, when examination is required, facts already exist.'
    },
    closing: {
      title: 'Closing note',
      content: `This scenario is intentionally generic. It applies wherever:`,
      conditions: [
        'executions are consequential',
        'time passes',
        'systems and teams evolve',
        'questions are asked after the fact'
      ],
      conclusion: 'The scenario does not argue that such a capability must exist. It clarifies what changes if it does.'
    },
    cta: {
      title: 'Next step',
      content: 'If you want to examine how these principles apply to your own decision systems, you can initiate a discussion.',
      button: 'Book an acceptability discussion'
    }
  }
};

function formatText(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export default function IllustrativeScenarioPage({
  params,
}: {
  params: { lang: Language };
}) {
  const lang = params.lang;
  const c = content[lang];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-4">{c.badge}</p>
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-black mb-2 leading-tight">
            {c.title}
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.intro.title}</h2>
          <div
            className="text-black/70 mb-6 whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: formatText(c.intro.content) }}
          />
          <div className="space-y-4 mb-6">
            {c.intro.worlds.map((world, i) => (
              <div key={i} className="bg-white border border-black/10 p-4">
                <p className="font-bold text-black mb-1">{world.name}</p>
                <p className="text-black/70">{world.description}</p>
              </div>
            ))}
          </div>
          <blockquote
            className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black"
            dangerouslySetInnerHTML={{ __html: formatText(c.intro.conclusion) }}
          />
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.purpose.title}</h2>
          <p className="text-black/70 whitespace-pre-line">{c.purpose.content}</p>
        </div>
      </section>

      {/* Situation Section */}
      <section className="py-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.situation.title}</h2>
          <p className="text-black/70 mb-4 whitespace-pre-line">{c.situation.content}</p>
          <ul className="space-y-2 mb-6">
            {c.situation.types.map((type, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">•</span>
                <span>{type}</span>
              </li>
            ))}
          </ul>
          <p className="text-black/70 mb-4">{c.situation.outcome}</p>
          <ul className="space-y-2 mb-6">
            {c.situation.characteristics.map((char, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">•</span>
                <span>{char}</span>
              </li>
            ))}
          </ul>
          <p className="text-black/70 italic">{c.situation.conclusion}</p>
        </div>
      </section>

      {/* Later Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.later.title}</h2>
          <div
            className="text-black/70 mb-4"
            dangerouslySetInnerHTML={{ __html: formatText(c.later.content) }}
          />
          <ul className="space-y-2 mb-6">
            {c.later.questions.map((q, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">•</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <p className="text-black/70 italic">{c.later.conclusion}</p>
        </div>
      </section>

      {/* Two Worlds Section */}
      <section className="py-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.worlds.title}</h2>
          <p className="text-black/70 mb-8">{c.worlds.intro}</p>

          {/* World A */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4">{c.worlds.worldA.title}</h3>
            <p className="text-black/70 mb-4 whitespace-pre-line">{c.worlds.worldA.content}</p>
            <ul className="space-y-2 mb-4">
              {c.worlds.worldA.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70">
                  <span className="text-[#005C99] mt-1">•</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/70 mb-4">{c.worlds.worldA.result}</p>
            <ul className="space-y-2 mb-4">
              {c.worlds.worldA.characteristics.map((char, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70">
                  <span className="text-[#005C99] mt-1">•</span>
                  <span>{char}</span>
                </li>
              ))}
            </ul>
            <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
              {c.worlds.worldA.conclusion}
            </blockquote>
          </div>

          {/* World B */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">{c.worlds.worldB.title}</h3>
            <p className="text-black/70 mb-4 whitespace-pre-line">{c.worlds.worldB.content}</p>
            <ul className="space-y-2 mb-4">
              {c.worlds.worldB.preserved.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70">
                  <span className="text-[#005C99] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/70 mb-4">{c.worlds.worldB.result}</p>
            <ul className="space-y-2 mb-4">
              {c.worlds.worldB.characteristics.map((char, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70">
                  <span className="text-[#005C99] mt-1">•</span>
                  <span>{char}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/70 mb-4">{c.worlds.worldB.focus}</p>
            <ul className="space-y-2 mb-4">
              {c.worlds.worldB.focusItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-black/70">
                  <span className="text-[#005C99] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
              {c.worlds.worldB.conclusion}
            </blockquote>
          </div>
        </div>
      </section>

      {/* Changes Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.changes.title}</h2>
          <div
            className="text-black/70 mb-6"
            dangerouslySetInnerHTML={{ __html: formatText(c.changes.content) }}
          />
          <ul className="space-y-2 mb-6">
            {c.changes.comparison.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-black/70 mb-4">{c.changes.impact}</p>
          <ul className="space-y-2">
            {c.changes.impacts.map((impact, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">•</span>
                <span>{impact}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Not About Section */}
      <section className="py-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.notAbout.title}</h2>
          <p className="text-black/70 mb-4">{c.notAbout.content}</p>
          <ul className="space-y-2 mb-6">
            {c.notAbout.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
            {c.notAbout.conclusion}
          </blockquote>
        </div>
      </section>

      {/* Why Matters Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.whyMatters.title}</h2>
          <p className="text-black/70 mb-6">{c.whyMatters.content}</p>
          <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
            {c.whyMatters.conclusion}
          </blockquote>
        </div>
      </section>

      {/* Relation Section */}
      <section className="py-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.relation.title}</h2>
          <p className="text-black/70 mb-6">{c.relation.content}</p>
          <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
            {c.relation.conclusion}
          </blockquote>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.closing.title}</h2>
          <p className="text-black/70 mb-4">{c.closing.content}</p>
          <ul className="space-y-2 mb-6">
            {c.closing.conditions.map((cond, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">•</span>
                <span>{cond}</span>
              </li>
            ))}
          </ul>
          <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
            {c.closing.conclusion}
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#005C99]/5 border border-[#005C99]/20 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-black mb-4">{c.cta.title}</h2>
            <p className="text-black/70 mb-6">{c.cta.content}</p>
            <Link
              href={`/${lang}/engagement`}
              className="inline-flex items-center gap-2 bg-[#005C99] text-white px-6 py-3 font-medium hover:bg-[#005C99]/90 transition-colors"
            >
              {c.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
