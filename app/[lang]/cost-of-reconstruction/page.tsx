import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    badge: 'Analyse opérationnelle',
    title: 'Le coût de la reconstruction de décision a posteriori',
    subtitle: 'Conséquences opérationnelles, organisationnelles et financières de la reconstruction de décisions automatisées',
    positioning: {
      title: 'Déclaration de positionnement',
      content: `Ce document ne fournit pas de référence comparative ou de chiffre de coût unique. Son objectif est d'expliquer :`,
      bullets: [
        'pourquoi le coût de la reconstruction de décision a posteriori varie si largement,',
        'pourquoi il est systématiquement sous-estimé,',
        'et pourquoi il dépend principalement de l\'architecture, et non du volume de transactions.'
      ],
      conclusion: 'Les chiffres et les scénarios abordés ici sont des ordres de grandeur, et non des promesses ou des moyennes.'
    },
    sections: [
      {
        id: 'definition',
        title: '1. Ce que signifie réellement la « reconstruction de décision a posteriori »',
        content: `Dans les environnements de décision automatisés, une reconstruction a posteriori se produit lorsqu'une organisation doit expliquer, justifier ou défendre une décision après son exécution, sans avoir préservé un enregistrement factuel complet au moment de la décision.

Les déclencheurs typiques incluent :`,
        bullets: [
          'les litiges clients ou marchands,',
          'les demandes de partenaires ou de réseaux (schemes),',
          'les requêtes réglementaires ou de supervision,',
          'les revues d\'incidents internes,',
          'les processus précontentieux ou contentieux.'
        ],
        conclusion: 'La reconstruction n\'est pas une explication. C\'est une tentative de déduire à nouveau des faits qui n\'ont jamais été capturés comme un tout cohérent.'
      },
      {
        id: 'default',
        title: '2. Pourquoi la reconstruction est le choix par défaut aujourd\'hui',
        content: `La plupart des piles décisionnelles s'appuient sur une combinaison de :`,
        bullets: [
          'journaux de transactions (logs),',
          'référentiels de configuration,',
          'moteurs de règles,',
          'registres de modèles,',
          'API tierces.'
        ],
        afterBullets: `Ces systèmes ont été conçus pour **exécuter des décisions**, **surveiller les performances** et **dépanner les incidents**. Ils n'ont pas été conçus pour préserver l'état factuel exact ayant produit une décision spécifique.

En conséquence, lorsqu'une décision est contestée :`,
        numberedList: [
          'Les logs sont extraits.',
          'Les identifiants sont corrélés.',
          'Les règles et les modèles sont revus rétrospectivement.',
          'Les équipes sont interrogées.',
          'Une explication narrative est reconstruite.'
        ],
        conclusion: 'Souvent des semaines ou des mois après l\'exécution. Ce n\'est pas un échec des équipes. C\'est une conséquence de la conception architecturale.'
      },
      {
        id: 'logs',
        title: '3. Pourquoi les logs ne sont pas des faits',
        content: `Les logs sont souvent confondus avec des preuves. En réalité, ils sont :`,
        bullets: [
          'fragmentés entre plusieurs systèmes,',
          'asynchrones,',
          'mutables ou écrasés,',
          'incomplets par rapport au contexte de la décision.'
        ],
        conclusion: 'Ils capturent rarement, en un seul endroit : les entrées exactes consommées, les versions précises des règles et des modèles appliqués, l\'état du système à l\'instant de la décision et le rôle des signaux tiers. La reconstruction repose donc sur l\'inférence et l\'interprétation, et non sur des faits préservés.'
      },
      {
        id: 'underestimated',
        title: '4. Pourquoi les coûts de reconstruction sont systématiquement sous-estimés',
        content: `Les coûts de reconstruction apparaissent rarement comme un poste budgétaire unique. Ils sont répartis entre :`,
        bullets: [
          'les opérations et le support,',
          'les équipes fraude et risques,',
          'la data et l\'ingénierie,',
          'la conformité et le juridique,',
          'les fonctions d\'audit et de gouvernance.'
        ],
        afterBullets: `D'autres facteurs contribuent à cette sous-estimation :`,
        secondBullets: [
          'l\'absence de centre de coûts dédié,',
          'des parcours d\'escalade qui s\'étendent silencieusement,',
          'le temps des cadres supérieurs consommé de façon épisodique,',
          'le coût d\'opportunité des équipes détournées de leurs missions,',
          'la fatigue émotionnelle et organisationnelle lors des audits ou des incidents.'
        ],
        conclusion: 'En conséquence, de nombreuses organisations sous-estiment les coûts de reconstruction d\'un ordre de grandeur.'
      },
      {
        id: 'distribution',
        title: '5. Le coût n\'est pas un nombre — c\'est une distribution',
        content: `Deux organisations ayant des volumes de transactions similaires peuvent connaître des coûts de reconstruction radicalement différents. Pourquoi ? Parce que le coût de reconstruction dépend de :`,
        bullets: [
          'combien de décisions deviennent contestées,',
          'combien de cas escaladent au-delà de l\'explication de premier niveau,',
          'la fréquence d\'implication de composants tiers,',
          'la précision du versionnage des règles et des modèles,',
          'la présence de faits à l\'exécution ou la nécessité de les inférer.'
        ],
        conclusion: 'Le coût se comporte donc comme une distribution, et non comme une constante.'
      },
      {
        id: 'scenarios',
        title: '6. Scénarios de coûts de reconstruction',
        content: `Les scénarios suivants ne sont pas des scores de maturité ni des références comparatives. Ils illustrent comment les choix architecturaux façonnent le comportement des coûts.`,
        scenarios: [
          {
            name: 'Scénario A — Pile décisionnelle fragmentée',
            characteristics: 'Logs distribués, traçabilité limitée des versions de règles/modèles, forte dépendance aux composants tiers.',
            behavior: 'Escalades fréquentes vers des investigations profondes, forte dépendance aux profils seniors, justifications basées sur des récits.',
            costProfile: 'Faible prévisibilité, risque de queue (tail risk) important, haute sensibilité aux audits et incidents.'
          },
          {
            name: 'Scénario B — Pile décisionnelle standard (PSP / Fintech)',
            characteristics: 'Centralisation des logs, versionnage partiel, mélange de logiques internes et externes.',
            behavior: 'Majorité des cas résolus rapidement, minorité nécessitant une reconstruction multi-équipes. Les audits restent coûteux et perturbateurs.',
            costProfile: 'Tendance centrale stable, pics occasionnels sous pression réglementaire.'
          },
          {
            name: 'Scénario C — Pile avec preuve à l\'exécution',
            characteristics: 'Préservation des entrées, règles, modèles et état du système au moment de la décision. Séparation claire entre faits et interprétation.',
            behavior: 'Justifications rapides et reproductibles, escalades limitées. Processus d\'audit basés sur des preuves, et non sur des inférences.',
            costProfile: 'Linéaire et prévisible, réduction matérielle du risque de queue.'
          }
        ]
      },
      {
        id: 'divergence',
        title: '7. Pourquoi les coûts de reconstruction divergent si largement',
        content: `Dans tous les scénarios, la divergence des coûts est alimentée par :`,
        bullets: [
          'l\'ambiguïté de ce qui qualifie une « décision contestée »,',
          'des seuils d\'escalade silencieux,',
          'l\'opacité des composants tiers,',
          'l\'absence de snapshots au moment de la décision,',
          'les passages de relais organisationnels et les frais de coordination.'
        ],
        conclusion: 'Lorsque les faits manquent, le raisonnement se substitue à la preuve, et le coût devient non linéaire.'
      },
      {
        id: 'assessment',
        title: '8. Auto-évaluation : reconstruisez-vous ou préservez-vous les décisions ?',
        assessmentGroups: [
          {
            title: 'Preuve de décision',
            questions: [
              'Pouvez-vous récupérer les entrées exactes consommées par une décision ?',
              'Pouvez-vous identifier les versions précises des règles et modèles appliqués ?',
              'Pouvez-vous prouver l\'état du système au moment de l\'exécution ?'
            ]
          },
          {
            title: 'Gestion opérationnelle',
            questions: [
              'La plupart des explications sont-elles résolues sans escalade multi-équipes ?',
              'Les investigations reposent-elles sur des entretiens ou la mémoire ?',
              'Les explications sont-elles reproductibles des mois plus tard ?'
            ]
          },
          {
            title: 'Audit et conformité',
            questions: [
              'Pouvez-vous produire des enregistrements prêts pour l\'audit sans reconstruction ?',
              'Les scores tiers sont-ils explicables rétroactivement ?',
              'Les audits déclenchent-ils des travaux d\'ingénierie d\'urgence ?'
            ]
          }
        ],
        conclusion: 'Si plusieurs réponses sont « non », votre organisation reconstruit probablement des décisions plutôt que de les préserver.'
      },
      {
        id: 'takeaway',
        title: '9. Point clé à retenir',
        content: `La question centrale n'est pas : « Combien coûte la reconstruction a posteriori ? »
La vraie question est : « Pourquoi reconstruisons-nous des décisions ? »

La reconstruction a posteriori n'est pas une anomalie. C'est le résultat prévisible d'architectures qui ne préservent pas les faits au moment de l'exécution.`,
        conclusion: 'C\'est cette lacune architecturale que l\'Infrastructure de Snapshot Décisionnel est conçue pour combler.'
      }
    ],
    closing: {
      title: 'Note de clôture',
      content: 'Ce document se concentre sur la réalité d\'aujourd\'hui. Il ne prescrit pas d\'outils, de produits ou d\'implémentations. Il décrit le coût structurel de la reconstruction de ce qui n\'a jamais été préservé. Comprendre ce coût est la première étape vers un changement d\'architecture.'
    },
    cta: {
      title: 'Étape suivante',
      content: 'Si vous souhaitez examiner comment ces principes s\'appliquent à vos propres systèmes de décision, vous pouvez initier une discussion.',
      button: 'Réserver un entretien d\'acceptabilité'
    }
  },
  en: {
    badge: 'Operational Analysis',
    title: 'The Cost of Post-Hoc Decision Reconstruction',
    subtitle: 'Operational, organizational, and financial consequences of reconstructing automated decisions',
    positioning: {
      title: 'Positioning statement',
      content: `This document does not provide a benchmark or a single cost figure. Its purpose is to explain:`,
      bullets: [
        'why the cost of post-hoc decision reconstruction varies so widely,',
        'why it is systematically underestimated,',
        'and why it depends primarily on architecture, not on transaction volume.'
      ],
      conclusion: 'The figures and scenarios discussed here are orders of magnitude, not promises or averages.'
    },
    sections: [
      {
        id: 'definition',
        title: '1. What "post-hoc decision reconstruction" actually means',
        content: `In automated decision environments, a post-hoc reconstruction occurs when an organization must explain, justify, or defend a decision after it has been executed, without having preserved a complete factual record at decision time.

Typical triggers include:`,
        bullets: [
          'customer or merchant disputes,',
          'partner or scheme inquiries,',
          'regulatory or supervisory requests,',
          'internal incident reviews,',
          'pre-litigation or litigation processes.'
        ],
        conclusion: 'Reconstruction is not explanation. It is an attempt to re-infer facts that were never captured as a coherent whole.'
      },
      {
        id: 'default',
        title: '2. Why reconstruction is the default today',
        content: `Most decision stacks rely on a combination of:`,
        bullets: [
          'transaction logs,',
          'configuration repositories,',
          'rule engines,',
          'model registries,',
          'third-party APIs.'
        ],
        afterBullets: `These systems were designed to **execute decisions**, **monitor performance**, and **troubleshoot incidents**. They were not designed to preserve the exact factual state that produced a specific decision.

As a result, when a decision is challenged:`,
        numberedList: [
          'Logs are pulled.',
          'Identifiers are correlated.',
          'Rules and models are reviewed retrospectively.',
          'Teams are interviewed.',
          'A narrative explanation is reconstructed.'
        ],
        conclusion: 'Often weeks or months after execution. This is not a failure of teams. It is a consequence of architectural design.'
      },
      {
        id: 'logs',
        title: '3. Why logs are not facts',
        content: `Logs are often mistaken for evidence. In reality, they are:`,
        bullets: [
          'fragmented across systems,',
          'asynchronous,',
          'mutable or overwritten,',
          'incomplete with respect to decision context.'
        ],
        conclusion: 'They rarely capture, in one place: the exact inputs consumed, the precise rule and model versions applied, the system state at the decision instant, and the role of third-party signals. Reconstruction therefore relies on inference and interpretation, not on preserved facts.'
      },
      {
        id: 'underestimated',
        title: '4. Why reconstruction costs are systematically underestimated',
        content: `Reconstruction costs rarely appear as a single line item. They are distributed across:`,
        bullets: [
          'operations and support,',
          'fraud and risk teams,',
          'data and engineering,',
          'compliance and legal,',
          'audit and governance functions.'
        ],
        afterBullets: `Additional factors contribute to underestimation:`,
        secondBullets: [
          'no dedicated cost center,',
          'escalation paths that grow silently,',
          'senior time consumed episodically,',
          'opportunity cost of diverted teams,',
          'emotional and organizational fatigue during audits or incidents.'
        ],
        conclusion: 'As a result, many organizations underestimate reconstruction costs by an order of magnitude.'
      },
      {
        id: 'distribution',
        title: '5. Cost is not a number — it is a distribution',
        content: `Two organizations with similar transaction volumes can experience radically different reconstruction costs. Why? Because reconstruction cost depends on:`,
        bullets: [
          'how many decisions become contested,',
          'how many cases escalate beyond first-level explanation,',
          'how often third-party components are involved,',
          'how precisely rules and models are versioned,',
          'whether execution-time facts exist or must be inferred.'
        ],
        conclusion: 'Cost therefore behaves as a distribution, not a constant.'
      },
      {
        id: 'scenarios',
        title: '6. Reconstruction cost scenarios',
        content: `The following scenarios are not maturity scores and not benchmarks. They illustrate how architectural choices shape cost behavior.`,
        scenarios: [
          {
            name: 'Scenario A — Fragmented decision stack',
            characteristics: 'Logs distributed across multiple systems, limited rule and model version traceability, heavy reliance on third-party decision components.',
            behavior: 'Frequent escalation from simple explanation to deep investigation, high dependency on senior staff, narrative-driven justifications.',
            costProfile: 'Low predictability, strong tail risk, high sensitivity to audits and incidents.'
          },
          {
            name: 'Scenario B — Standard PSP / fintech decision stack',
            characteristics: 'Centralized logging, partial versioning of rules and models, mix of internal and external decision logic.',
            behavior: 'Majority of cases resolved quickly, minority requiring multi-team reconstruction. Audits remain costly and disruptive.',
            costProfile: 'Stable central tendency, occasional spikes under regulatory pressure.'
          },
          {
            name: 'Scenario C — Execution-time evidence stack',
            characteristics: 'Preservation of inputs, rules, models, and system state at decision time. Clear separation between facts and interpretation.',
            behavior: 'Rapid, reproducible justifications, limited escalation. Audit processes based on evidence, not inference.',
            costProfile: 'Linear and predictable, materially reduced tail risk.'
          }
        ]
      },
      {
        id: 'divergence',
        title: '7. Why reconstruction costs diverge so widely',
        content: `Across all scenarios, cost divergence is driven by:`,
        bullets: [
          'ambiguity in what qualifies as a "challenged decision",',
          'silent escalation thresholds,',
          'opacity of third-party components,',
          'absence of decision-time snapshots,',
          'organizational handoffs and coordination overhead.'
        ],
        conclusion: 'When facts are missing, reasoning substitutes evidence, and cost becomes non-linear.'
      },
      {
        id: 'assessment',
        title: '8. Self-assessment: are you reconstructing or preserving decisions?',
        assessmentGroups: [
          {
            title: 'Decision evidence',
            questions: [
              'Can you retrieve the exact inputs consumed by a decision?',
              'Can you identify the precise rule and model versions applied?',
              'Can you prove the system state at the moment of execution?'
            ]
          },
          {
            title: 'Operational handling',
            questions: [
              'Are most explanations resolved without multi-team escalation?',
              'Do investigations rely on interviews or memory?',
              'Are explanations reproducible months later?'
            ]
          },
          {
            title: 'Audit and compliance',
            questions: [
              'Can you produce audit-ready records without reconstruction?',
              'Are third-party scores explainable retroactively?',
              'Do audits trigger emergency engineering work?'
            ]
          }
        ],
        conclusion: 'If several answers are "no", your organization is likely reconstructing decisions rather than preserving them.'
      },
      {
        id: 'takeaway',
        title: '9. Key takeaway',
        content: `The central question is not: "How much does post-hoc reconstruction cost?"
The real question is: "Why are we reconstructing decisions at all?"

Post-hoc reconstruction is not an anomaly. It is the predictable outcome of architectures that do not preserve execution-time facts.`,
        conclusion: 'This architectural gap is what Decision Snapshot Infrastructure is designed to address.'
      }
    ],
    closing: {
      title: 'Closing note',
      content: 'This document focuses on today\'s reality. It does not prescribe tools, products, or implementations. It describes the structural cost of reconstructing what was never preserved. Understanding that cost is the first step toward changing the architecture.'
    },
    cta: {
      title: 'Next step',
      content: 'If you want to examine how these principles apply to your own decision systems, you can initiate a discussion.',
      button: 'Book an Acceptability Discussion'
    }
  }
};

function formatText(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export default function CostOfReconstructionPage({
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
          <p className="text-xl text-[#005C99] italic">{c.subtitle}</p>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{c.positioning.title}</h2>
          <p className="text-black/70 mb-4">{c.positioning.content}</p>
          <ul className="space-y-2 mb-6">
            {c.positioning.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-black/70">
                <span className="text-[#005C99] mt-1">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
            {c.positioning.conclusion}
          </blockquote>
        </div>
      </section>

      {/* Main Sections */}
      {c.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={index % 2 === 0 ? 'py-8' : 'py-8 bg-zinc-50'}
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{section.title}</h2>

            {section.content && (
              <div
                className="text-black/70 mb-6 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: formatText(section.content) }}
              />
            )}

            {section.bullets && (
              <ul className="space-y-2 mb-6">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-[#005C99] mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.afterBullets && (
              <div
                className="text-black/70 mb-6 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: formatText(section.afterBullets) }}
              />
            )}

            {section.numberedList && (
              <ol className="space-y-2 mb-6 list-decimal list-inside">
                {section.numberedList.map((item, i) => (
                  <li key={i} className="text-black/70">{item}</li>
                ))}
              </ol>
            )}

            {section.secondBullets && (
              <ul className="space-y-2 mb-6">
                {section.secondBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-[#005C99] mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.scenarios && (
              <div className="space-y-6 mb-6">
                {section.scenarios.map((scenario, i) => (
                  <div key={i} className="bg-white border border-black/10 p-6">
                    <h3 className="font-bold text-black mb-4">{scenario.name}</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong className="text-[#005C99]">{lang === 'fr' ? 'Caractéristiques :' : 'Characteristics:'}</strong> <span className="text-black/70">{scenario.characteristics}</span></p>
                      <p><strong className="text-[#005C99]">{lang === 'fr' ? 'Comportement observé :' : 'Observed behavior:'}</strong> <span className="text-black/70">{scenario.behavior}</span></p>
                      <p><strong className="text-[#005C99]">{lang === 'fr' ? 'Profil de coût :' : 'Cost profile:'}</strong> <span className="text-black/70">{scenario.costProfile}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.assessmentGroups && (
              <div className="space-y-6 mb-6">
                {section.assessmentGroups.map((group, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-black mb-3">{group.title}</h3>
                    <ul className="space-y-2">
                      {group.questions.map((question, j) => (
                        <li key={j} className="flex items-start gap-3 text-black/70">
                          <span className="text-[#005C99] mt-1">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.conclusion && (
              <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
                {section.conclusion}
              </blockquote>
            )}
          </div>
        </section>
      ))}

      {/* Closing Note */}
      <section className="py-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-4">{c.closing.title}</h2>
          <p className="text-black/70">{c.closing.content}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8">
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
