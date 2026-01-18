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
      content: `Ce document ne fournit pas de référence comparative ou de chiffre de coût consolidé unique. Son objectif est d'expliquer :`,
      bullets: [
        'pourquoi la charge opérationnelle et organisationnelle associée à la reconstruction de décision a posteriori diffère si significativement d\'une organisation à l\'autre,',
        'pourquoi cette charge est systématiquement sous-estimée,',
        'et pourquoi elle dépend principalement de l\'architecture décisionnelle plutôt que du volume de transactions.'
      ],
      conclusion: 'Tout au long de ce document, le terme coût ne fait pas référence à un poste budgétaire unique. Il désigne la charge opérationnelle globale induite par la reconstruction, incluant la mobilisation des équipes, la dynamique des escalades, les frais de coordination et le risque associé. Les scénarios discutés représentent des ordres de grandeur d\'effort, et non des promesses ou des moyennes sectorielles.'
    },
    sections: [
      {
        id: 'definition',
        title: '1. Ce que signifie réellement la reconstruction de décision a posteriori',
        content: `Dans les environnements de décision automatisés, une reconstruction a posteriori se produit lorsqu'une organisation doit expliquer, justifier ou défendre une décision après son exécution, sans avoir préservé un enregistrement factuel complet au moment de la décision.

Les déclencheurs typiques incluent :`,
        bullets: [
          'les litiges clients ou marchands,',
          'les demandes de partenaires ou de réseaux,',
          'les requêtes réglementaires ou de supervision,',
          'les revues d\'incidents internes,',
          'les processus précontentieux ou contentieux.'
        ],
        conclusion: 'La reconstruction n\'est pas une explication. C\'est une tentative de déduire à nouveau des faits qui n\'ont jamais été capturés comme un tout cohérent et faisant autorité.'
      },
      {
        id: 'default',
        title: '2. Pourquoi la reconstruction est le mode de fonctionnement par défaut aujourd\'hui',
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
          'Les équipes sont consultées.',
          'Une explication narrative est reconstruite.'
        ],
        conclusion: 'Cela survient souvent des semaines ou des mois après l\'exécution. Ce n\'est pas un échec des équipes. C\'est une conséquence de la conception architecturale.'
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
        title: '4. Pourquoi la charge de reconstruction est systématiquement sous-estimée',
        content: `La reconstruction n'apparaît presque jamais comme un poste budgétaire unique. La charge associée est répartie entre :`,
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
          'la consommation épisodique du temps des cadres dirigeants,',
          'le coût d\'opportunité des équipes détournées de leurs missions,',
          'la fatigue organisationnelle et émotionnelle lors des audits ou des incidents.'
        ],
        conclusion: 'En conséquence, ce n\'est pas le coût qui est mal calculé, mais la charge qui est mal perçue.'
      },
      {
        id: 'distribution',
        title: '5. Le coût n\'est pas un nombre, c\'est une distribution d\'effort',
        content: `Deux organisations traitant des volumes de transactions similaires peuvent connaître des charges de reconstruction radicalement différentes. Cette différence dépend de :`,
        bullets: [
          'combien de décisions deviennent contestées,',
          'combien de cas escaladent au-delà de l\'explication de premier niveau,',
          'le degré de dépendance à des composants tiers opaques,',
          'la qualité du versionnage des règles et des modèles,',
          'la présence de faits à l\'exécution ou la nécessité de les inférer.'
        ],
        conclusion: 'La charge de reconstruction se comporte comme une distribution, et non comme une constante.'
      },
      {
        id: 'scenarios',
        title: '6. Scénarios de charge de reconstruction',
        content: `Les scénarios suivants ne sont ni des scores de maturité ni des références comparatives. Ils illustrent comment différentes trajectoires architecturales façonnent le comportement de l'effort de reconstruction.`,
        scenarios: [
          {
            name: 'Scénario A – Pile décisionnelle fragmentée',
            characteristics: 'Logs distribués entre plusieurs systèmes, traçabilité limitée des versions de règles et modèles, forte dépendance à des composants tiers opaques.',
            behavior: 'Escalades fréquentes vers des investigations profondes, forte dépendance aux profils seniors, justifications largement basées sur des récits reconstruits.',
            burdenProfile: 'Faible prévisibilité, forte variabilité, risque de queue important, haute sensibilité aux audits et incidents.'
          },
          {
            name: 'Scénario B – Pile décisionnelle avancée (PSP, Fintech)',
            characteristics: 'Journalisation centralisée, versionnage partiel des règles et modèles, outils de monitoring et de contrôle plus matures, combinaison de logiques de décision internes et externes.',
            behavior: 'La plupart des contestations sont résolues rapidement. Une part non négligeable de cas nécessite encore une reconstruction multi-équipes, en particulier pour les décisions complexes, multi-produits ou pilotées par des tiers.',
            burdenProfile: 'Tendance centrale relativement stable, avec des pics périodiques lors de changements réglementaires, d\'audits approfondis ou d\'incidents atypiques.'
          },
          {
            name: 'Scénario C – Ouverture vers la preuve de décision à l\'exécution',
            description: 'Ce scénario ne décrit pas un état largement observé aujourd\'hui. Il représente une ouverture vers un modèle cible, utilisé pour clarifier ce qui change lorsque la préservation factuelle devient systématique.',
            characteristics: 'Préservation explicite, au moment de l\'exécution, des éléments factuels ayant produit la décision. Séparation claire entre les faits de décision et l\'interprétation ultérieure. Couverture conçue pour être transversale plutôt que limitée à des produits ou flux isolés.',
            behavior: 'Là où de tels mécanismes sont introduits, même partiellement, une réduction immédiate de la charge de reconstruction est observée sur le périmètre couvert. Les justifications deviennent plus rapides, reproductibles et moins dépendantes de l\'escalade humaine.',
            burdenProfile: 'Effort plus linéaire et prévisible sur les décisions couvertes. Réduction matérielle du risque de queue, tout en soulignant la nécessité d\'une approche systémique pour éviter les effets de débordement en dehors du périmètre préservé.'
          }
        ]
      },
      {
        id: 'divergence',
        title: '7. Pourquoi la charge de reconstruction diverge si fortement',
        content: `Dans tous les scénarios, la divergence est alimentée par :`,
        bullets: [
          'l\'ambiguïté autour de ce qui qualifie une décision contestée,',
          'des seuils d\'escalade implicites,',
          'l\'opacité des composants tiers,',
          'l\'absence de snapshots au moment de la décision,',
          'les passages de relais organisationnels et les frais de coordination.'
        ],
        conclusion: 'Lorsque les faits manquent, le raisonnement se substitue à la preuve, et l\'effort devient non linéaire.'
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
        conclusion: 'Si plusieurs réponses sont non, votre organisation est probablement en train de reconstruire des décisions plutôt que de les préserver.'
      },
      {
        id: 'takeaway',
        title: '9. Point clé à retenir',
        content: `La question centrale n'est pas :
« Combien coûte la reconstruction a posteriori ? »
La vraie question est :
« Pourquoi reconstruisons-nous des décisions ? »

La reconstruction a posteriori n'est pas une anomalie. C'est le résultat prévisible d'architectures qui ne préservent pas les faits au moment de l'exécution.`,
        conclusion: 'C\'est cette lacune architecturale que l\'Infrastructure de Snapshot Décisionnel est conçue pour combler.'
      }
    ],
    closing: {
      title: 'Note de clôture',
      content: 'Ce document se concentre sur la réalité opérationnelle d\'aujourd\'hui. Il ne prescrit pas d\'outils, de produits ou d\'implémentations. Il décrit la charge structurelle liée à la reconstruction de ce qui n\'a jamais été préservé. Comprendre cette charge est la première étape vers un changement architectural.'
    },
    cta: {
      title: 'Étape suivante',
      content: 'Si vous souhaitez examiner comment ces principes s\'appliquent à vos propres systèmes de décision, vous pouvez initier une discussion.',
      button: 'Réserver un entretien d\'acceptabilité'
    }
  },
  en: {
    badge: 'Operational Analysis',
    title: 'The Cost of Post Hoc Decision Reconstruction',
    subtitle: 'Operational, organizational, and financial consequences of reconstructing automated decisions',
    positioning: {
      title: 'Positioning statement',
      content: `This document does not provide a benchmark or a single consolidated cost figure. Its purpose is to explain:`,
      bullets: [
        'why the operational and organizational burden associated with post hoc decision reconstruction differs so significantly across organizations,',
        'why this burden is systematically underestimated,',
        'and why it depends primarily on decision architecture rather than transaction volume.'
      ],
      conclusion: 'Throughout this document, the term cost does not refer to a single budget line item. It refers to the aggregate operational burden induced by reconstruction, including team mobilization, escalation dynamics, coordination overhead, and associated risk. The scenarios discussed are orders of magnitude of effort, not promises or industry averages.'
    },
    sections: [
      {
        id: 'definition',
        title: '1. What post hoc decision reconstruction actually means',
        content: `In automated decision environments, a post hoc reconstruction occurs when an organization must explain, justify, or defend a decision after it has been executed, without having preserved a complete factual record at decision time.

Typical triggers include:`,
        bullets: [
          'customer or merchant disputes,',
          'partner or scheme inquiries,',
          'regulatory or supervisory requests,',
          'internal incident reviews,',
          'pre litigation or litigation processes.'
        ],
        conclusion: 'Reconstruction is not explanation. It is an attempt to re infer facts that were never captured as a coherent, authoritative whole.'
      },
      {
        id: 'default',
        title: '2. Why reconstruction is the default operating mode today',
        content: `Most decision stacks rely on a combination of:`,
        bullets: [
          'transaction logs,',
          'configuration repositories,',
          'rule engines,',
          'model registries,',
          'third party APIs.'
        ],
        afterBullets: `These systems were designed to **execute decisions**, **monitor performance**, and **troubleshoot incidents**. They were not designed to preserve the exact factual state that produced a specific decision.

As a result, when a decision is challenged:`,
        numberedList: [
          'Logs are pulled.',
          'Identifiers are correlated.',
          'Rules and models are reviewed retrospectively.',
          'Teams are consulted.',
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
        conclusion: 'They rarely capture, in one place: the exact inputs consumed, the precise rule and model versions applied, the system state at the decision instant, the role of third party signals. Reconstruction therefore relies on inference and interpretation, not on preserved facts.'
      },
      {
        id: 'underestimated',
        title: '4. Why the reconstruction burden is systematically underestimated',
        content: `Reconstruction almost never appears as a single budget item. The associated burden is distributed across:`,
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
          'escalation paths that expand silently,',
          'episodic consumption of senior time,',
          'opportunity cost of diverted teams,',
          'organizational and emotional fatigue during audits or incidents.'
        ],
        conclusion: 'As a result, it is not the cost that is miscalculated, but the burden that is poorly perceived.'
      },
      {
        id: 'distribution',
        title: '5. Cost is not a number, it is a distribution of effort',
        content: `Two organizations processing similar transaction volumes can experience radically different reconstruction burdens. This difference depends on:`,
        bullets: [
          'how many decisions become contested,',
          'how many cases escalate beyond first level explanation,',
          'the degree of reliance on opaque third party components,',
          'the quality of rule and model versioning,',
          'whether execution time facts exist or must be inferred.'
        ],
        conclusion: 'Reconstruction burden behaves as a distribution, not as a constant.'
      },
      {
        id: 'scenarios',
        title: '6. Reconstruction burden scenarios',
        content: `The following scenarios are neither maturity scores nor benchmarks. They illustrate how different architectural trajectories shape the behavior of reconstruction effort.`,
        scenarios: [
          {
            name: 'Scenario A – Fragmented decision stack',
            characteristics: 'Logs distributed across multiple systems, limited traceability of rule and model versions, strong dependence on opaque third party components.',
            behavior: 'Frequent escalation to deep investigations, heavy reliance on senior profiles, justifications largely based on reconstructed narratives.',
            burdenProfile: 'Low predictability, high variability, strong tail risk, high sensitivity to audits and incidents.'
          },
          {
            name: 'Scenario B – Advanced decision stack (PSP, Fintech)',
            characteristics: 'Centralized logging, partial rule and model versioning, more mature monitoring and control tooling, combination of internal and external decision logic.',
            behavior: 'Most challenges are resolved quickly. A non trivial share of cases still requires multi team reconstruction, especially for complex, cross product, or third party driven decisions.',
            burdenProfile: 'Relatively stable central tendency, with periodic spikes during regulatory changes, deep audits, or atypical incidents.'
          },
          {
            name: 'Scenario C – Opening toward execution time decision evidence',
            description: 'This scenario does not describe a state that is broadly observed today. It represents an opening toward a target model, used to clarify what changes when factual preservation becomes systematic.',
            characteristics: 'Explicit preservation, at execution time, of the factual elements that produced the decision. Clear separation between decision facts and subsequent interpretation. Coverage designed to be transversal rather than limited to isolated products or flows.',
            behavior: 'Where such mechanisms are introduced, even partially, an immediate reduction of reconstruction burden is observed on the covered perimeter. Justifications become faster, reproducible, and less dependent on human escalation.',
            burdenProfile: 'More linear and predictable effort on covered decisions. Material reduction of tail risk, while highlighting the need for a systemic approach to avoid spillover effects outside the preserved perimeter.'
          }
        ]
      },
      {
        id: 'divergence',
        title: '7. Why reconstruction burden diverges so strongly',
        content: `Across all scenarios, divergence is driven by:`,
        bullets: [
          'ambiguity around what qualifies as a challenged decision,',
          'implicit escalation thresholds,',
          'opacity of third party components,',
          'absence of decision time snapshots,',
          'organizational handoffs and coordination overhead.'
        ],
        conclusion: 'When facts are missing, reasoning substitutes evidence, and effort becomes non linear.'
      },
      {
        id: 'assessment',
        title: '8. Self assessment: are you reconstructing or preserving decisions?',
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
              'Are most explanations resolved without multi team escalation?',
              'Do investigations rely on interviews or memory?',
              'Are explanations reproducible months later?'
            ]
          },
          {
            title: 'Audit and compliance',
            questions: [
              'Can you produce audit ready records without reconstruction?',
              'Are third party scores explainable retroactively?',
              'Do audits trigger emergency engineering work?'
            ]
          }
        ],
        conclusion: 'If several answers are no, your organization is likely reconstructing decisions rather than preserving them.'
      },
      {
        id: 'takeaway',
        title: '9. Key takeaway',
        content: `The central question is not:
"How much does post hoc reconstruction cost?"
The real question is:
"Why are we reconstructing decisions at all?"

Post hoc reconstruction is not an anomaly. It is the predictable outcome of architectures that do not preserve execution time facts.`,
        conclusion: 'This architectural gap is what Decision Snapshot Infrastructure is designed to address.'
      }
    ],
    closing: {
      title: 'Closing note',
      content: 'This document focuses on today\'s operational reality. It does not prescribe tools, products, or implementations. It describes the structural burden of reconstructing what was never preserved. Understanding this burden is the first step toward architectural change.'
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
          <blockquote className="border-l-4 border-[#005C99] pl-4 text-base text-black/70 italic">
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
                    {scenario.description && (
                      <p className="text-black/70 text-sm italic mb-4">{scenario.description}</p>
                    )}
                    <div className="space-y-2 text-sm">
                      <p><strong className="text-[#005C99]">{lang === 'fr' ? 'Caractéristiques :' : 'Characteristics:'}</strong> <span className="text-black/70">{scenario.characteristics}</span></p>
                      <p><strong className="text-[#005C99]">{lang === 'fr' ? 'Comportement observé :' : 'Observed behavior:'}</strong> <span className="text-black/70">{scenario.behavior}</span></p>
                      <p><strong className="text-[#005C99]">{lang === 'fr' ? 'Profil de charge :' : 'Burden profile:'}</strong> <span className="text-black/70">{scenario.burdenProfile}</span></p>
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
