import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    badge: 'Foundational Brief',
    title: 'Infrastructure de Snapshot Décisionnel',
    subtitle: 'La preuve avant les questions',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: `Ce livre blanc présente les fondations opérationnelles de la **preuve à l'exécution** pour les systèmes de décision automatisés et semi-automatisés opérant dans des contextes institutionnels.

Il s'adresse aux organisations qui doivent établir, avec le temps, ce qui a réellement été exécuté lorsque les décisions deviennent irréversibles – indépendamment de l'évolution ultérieure des systèmes, des modèles, des données ou des équipes.

Ce document est volontairement non promotionnel. Il se concentre sur la préservation factuelle plutôt que sur l'explication, la justification ou l'évaluation.`
      },
      {
        id: 'resume',
        title: 'Résumé opérationnel',
        content: `Les organisations s'appuient de plus en plus sur des systèmes de décision dont les résultats entraînent des conséquences opérationnelles, juridiques, financières et réputationnelles durables. Ces systèmes évoluent continuellement : les modèles sont ré-entraînés, les règles ajustées, les sources de données modifiées, les infrastructures refondues et les équipes renouvelées. Pourtant, les décisions produites restent souvent examinables bien après que les conditions techniques ayant présidé à leur création ont disparu.

Dans la plupart des organisations, l'état factuel des décisions passées n'est pas préservé au moment de l'exécution. Lorsque des questions surgissent, les institutions tentent de reconstruire ce qui s'est passé à l'aide de logs, de traces, de référentiels de configuration, de tableaux de bord et de souvenirs humains. Ce processus est intrinsèquement fragile, coûteux et incertain. Il produit des récits plutôt que des faits.

L'Infrastructure de Snapshot Décisionnel comble cette lacune structurelle. Elle introduit une couche de preuve à l'exécution dont le seul but est de capturer, au point de non-retour, l'état factuel complet d'une décision et de le préserver sous la forme d'un artefact immuable et auto-contenu. Cet artefact existe indépendamment de l'évolution future du système qui l'a produit.

L'infrastructure n'explique, ne justifie, ni n'évalue les décisions. Elle préserve ce qui a été exécuté. Ce faisant, elle réduit l'effort opérationnel, limite l'incertitude et restaure une autorité factuelle durable sans altérer le contrôle institutionnel ou la gouvernance.`
      },
      {
        id: 'probleme',
        title: 'Énoncé du problème',
        subtitle: 'La reconstruction n\'est pas une preuve',
        content: `La plupart des systèmes de décision ne préservent pas les états d'exécution factuels. Ils laissent derrière eux des logs, des métriques et des traces conçus pour l'observabilité, et non pour la certitude probante. Lorsque les décisions sont contestées plus tard, les organisations reconstruisent des récits sous des contraintes qui n'existaient pas au moment de l'exécution.`,
        bullets: [
          'des bases factuelles fragmentées et incomplètes,',
          'des divergences entre les équipes et les interprétations,',
          'un biais de rétrospective intégré aux explications,',
          'une augmentation exponentielle des coûts opérationnels au fil du temps.'
        ],
        conclusion: 'Ces défaillances sont structurelles. Elles découlent d\'une inadéquation entre ce que les systèmes d\'exécution sont conçus pour conserver et ce dont les institutions ont besoin plus tard pour établir les faits.'
      },
      {
        id: 'principe',
        title: 'Principe central',
        subtitle: 'Capturer au point de non-retour',
        content: `Une décision devient un fait lorsqu'elle est exécutée. À cet instant :`,
        bullets: [
          'des entrées spécifiques sont consommées,',
          'une logique spécifique est appliquée,',
          'dans un contexte d\'exécution spécifique,',
          'produisant un résultat spécifique.'
        ],
        conclusion: 'Une fois ce moment passé, l\'état factuel d\'origine ne peut plus être reconstitué avec certitude. La preuve doit donc être produite au moment de l\'exécution, et non déduite plus tard.'
      },
      {
        id: 'artefact',
        title: 'Artefact de Snapshot Décisionnel',
        content: `Un **Artefact de Snapshot Décisionnel** est l'enregistrement canonique de l'exécution produit par le système lui-même. Ce n'est ni un log, ni une trace, ni un rapport, ni une explication. Il constitue la déclaration institutionnelle de ce qui existait au moment de l'exécution.

Toute affirmation sur la réalité de l'exécution est donc une affirmation sur le contenu de cet artefact.`,
        subsection: {
          title: 'Propriétés invariantes',
          intro: 'Chaque artefact garantit :',
          bullets: [
            '**Complétude** – toutes les entrées, le contexte, l\'état de la logique et les résultats présents à l\'exécution sont intégrés.',
            '**Intégrité temporelle** – l\'horodatage de l\'exécution est lié par cryptographie.',
            '**Immuabilité** – les artefacts sont en ajout exclusif (append-only) et non modifiables.',
            '**Ordonnancement** – séquençage vérifiable entre les décisions.',
            '**Authenticité** – preuve cryptographique de l\'origine et de l\'intégrité.'
          ],
          conclusion: 'Si l\'établissement des faits nécessite d\'interroger des systèmes externes, la reconstruction a déjà commencé.'
        }
      },
      {
        id: 'comparaison',
        title: 'Preuve vs Reconstruction',
        isTable: true,
        tableData: {
          headers: ['Reconstruction', 'Preuve à l\'exécution'],
          rows: [
            ['Récit assemblé après le résultat', 'Fait déclaré avant l\'examen'],
            ['Dépend des traces survivantes', 'Artefact auto-contenu'],
            ['Soumise au biais de rétrospective', 'Préserve la connaissance au temps T'],
            ['Coût croissant avec le temps', 'Coût fixe à l\'exécution']
          ]
        },
        conclusion: 'L\'Infrastructure de Snapshot Décisionnel n\'améliore pas la reconstruction. Elle la rend inutile dans son périmètre.'
      },
      {
        id: 'decisions-auto',
        title: 'Décisions automatisées',
        content: 'Les décisions automatisées sont des événements d\'exécution composés d\'éléments volatils :',
        bullets: [
          'les données d\'entrée,',
          'la logique de décision (règles, modèles, configurations),',
          'le contexte d\'exécution,',
          'les résultats produits.'
        ],
        conclusion: 'Les logs capturent des fragments de ces éléments. Ils ne préservent pas l\'exécution dans son ensemble. Comme ces composantes évoluent indépendamment, la reconstruction a posteriori ne peut rétablir l\'état factuel de manière fiable. La capture à l\'exécution est donc la seule voie vers la certitude factuelle.'
      },
      {
        id: 'separation',
        title: 'Séparation de l\'Exécution et de l\'Évaluation',
        content: 'L\'Infrastructure de Snapshot Décisionnel distingue :',
        bullets: [
          '**Les Exécutions** – faits immuables déclarés au temps T.',
          '**Les Évaluations** – appréciations humaines ou institutionnelles produites ultérieurement, explicitement datées et liées.'
        ],
        conclusion: 'Cette séparation empêche structurellement le biais de rétrospective en garantissant que les connaissances ultérieures ne contaminent pas les faits d\'exécution.'
      },
      {
        id: 'contextes',
        title: 'Contextes institutionnels',
        content: 'La preuve à l\'exécution devient critique partout où les organisations doivent répondre de manière fiable à des questions sur des décisions passées, incluant :',
        bullets: [
          'les revues réglementaires ou d\'audit,',
          'les enquêtes internes et les analyses post-mortem,',
          'les demandes d\'informations des clients ou partenaires,',
          'la responsabilité à long terme à travers les cycles de vie des systèmes.'
        ],
        conclusion: 'L\'infrastructure ne prescrit ni la gouvernance, ni l\'interprétation, ni la divulgation. Elle fournit un socle factuel partagé sur lequel s\'exerce le pouvoir discrétionnaire de l\'institution.'
      },
      {
        id: 'impact',
        title: 'Impact opérationnel',
        content: 'L\'Infrastructure de Snapshot Décisionnel ne change pas ce que les institutions choisissent de décider ou d\'enregistrer. Elle change le coût et la fragilité de l\'établissement des faits.',
        bullets: [
          'la coordination entre équipes lors des revues,',
          'la dépendance aux systèmes hérités (legacy),',
          'le temps passé à reconstruire des états passés,',
          'l\'incertitude lors de l\'examen.'
        ],
        bulletIntro: 'Elle réduit :',
        conclusion: 'Ce qui change n\'est pas l\'autorité ou l\'intention. C\'est l\'effort opérationnel.'
      },
      {
        id: 'principes',
        title: 'Principes et limites',
        content: 'L\'Infrastructure de Snapshot Décisionnel est régie par les limites suivantes :',
        bullets: [
          'Capture les faits, pas les explications.',
          'Neutre vis-à-vis de l\'interprétation, du jugement et de la gouvernance.',
          'Indépendante du cycle de vie du système source.',
          'Non intrusive pour la logique de décision.',
          'Conçue par défaut comme immuable, vérifiable et en ajout exclusif.'
        ],
        conclusion: 'L\'infrastructure s\'arrête là où l\'interprétation commence.'
      },
      {
        id: 'disponibilite',
        title: 'Disponibilité et adoption',
        content: `L'Infrastructure de Snapshot Décisionnel est implémentée comme une capacité délimitée et introduite par des déploiements de validation contrôlés, intra-périmètre.

Ces déploiements ne sont pas des adoptions de plateforme. Ils existent pour permettre aux institutions d'examiner l'acceptabilité opérationnelle et institutionnelle de la preuve à l'exécution produite par leurs propres systèmes. La décision de ne pas poursuivre est considérée comme un résultat valide de cette étape.`
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        content: `Les systèmes de décision automatisés ne faiblissent pas parce que les institutions sont incapables d'agir. Ils faiblissent lorsque, avec le temps, les institutions ne peuvent plus établir avec certitude ce qui a réellement été exécuté, dans quelles conditions et avec quelles informations.

La reconstruction a posteriori est structurellement incapable de fournir cette certitude. Elle assemble des récits une fois les résultats connus, en utilisant des traces qui n'ont jamais été conçues pour servir de preuve durable. L'Infrastructure de Snapshot Décisionnel restaure la continuité factuelle en garantissant que la preuve existe avant que les questions ne surgissent.

Elle ne dicte ni l'interprétation, ni le jugement. Elle préserve le terrain factuel sur lequel s'exerce la discrétion institutionnelle. La preuve n'existe qu'au moment de l'exécution. Sa préservation n'est pas un choix méthodologique, c'est une nécessité structurelle.`
      }
    ],
    nextStep: {
      title: 'Étape suivante',
      content: 'Si vous souhaitez examiner comment ces principes s\'appliquent à vos propres systèmes de décision ou contraintes institutionnelles, vous pouvez initier une discussion.',
      conceptualRef: 'Pour les institutions nécessitant une définition formelle de la preuve à l\'exécution et des limites conceptuelles de l\'Infrastructure de Snapshot Décisionnel, une',
      conceptualRefLink: 'Référence Conceptuelle',
      conceptualRefEnd: 'est disponible.'
    }
  },
  en: {
    badge: 'Foundational Brief',
    title: 'Decision Snapshot Infrastructure',
    subtitle: 'Evidence before questions',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: `This white paper presents the operational foundations of **execution-time evidence** for automated and semi-automated decision systems operating in institutional contexts.

It is intended for organizations that must establish, over time, what was actually executed when decisions become irreversible - independently of how systems, models, data, or teams later evolve.

This document is intentionally non-promotional. It focuses on factual preservation rather than explanation, justification, or evaluation.`
      },
      {
        id: 'summary',
        title: 'Executive Summary',
        content: `Organizations increasingly rely on automated and semi-automated decision systems whose outputs carry durable operational, legal, financial, and reputational consequences. These systems evolve continuously: models are retrained, rules are adjusted, data sources change, infrastructures are refactored, and teams rotate. Yet the decisions produced by these systems often remain examinable long after the technical conditions that produced them have disappeared.

In most organizations, the factual state of past decisions is not preserved at execution time. When questions arise, institutions attempt to reconstruct what happened using logs, traces, configuration repositories, dashboards, tickets, and human recollection. This process is inherently fragile, costly, and uncertain. It produces narratives rather than facts.

Decision Snapshot Infrastructure addresses this structural gap. It introduces an execution-time evidence layer whose sole purpose is to capture, at the point of no return, the complete factual state of a decision and preserve it as an immutable, self-contained artifact. This artifact exists independently of the future evolution of the system that produced it.

The infrastructure does not explain, justify, or evaluate decisions. It preserves what was executed. By doing so, it reduces operational effort, limits uncertainty, and restores durable factual authority without altering institutional control or governance.`
      },
      {
        id: 'problem',
        title: 'Problem Statement',
        subtitle: 'Reconstruction is not evidence',
        content: `Most decision systems do not preserve factual execution states. They leave behind logs, metrics, and traces designed for observability, not evidentiary certainty. When decisions are later questioned, organizations reconstruct narratives under constraints that did not exist at execution time.`,
        bullets: [
          'fragmented and incomplete factual baselines,',
          'divergence between teams and interpretations,',
          'hindsight bias embedded into explanations,',
          'escalating operational cost over time.'
        ],
        conclusion: 'These failures are structural, not accidental. They arise from a mismatch between what execution systems are designed to retain and what institutions later require to establish facts.'
      },
      {
        id: 'principle',
        title: 'Core Principle',
        subtitle: 'Capture at the point of no return',
        content: `A decision becomes a fact when it is executed. At that moment:`,
        bullets: [
          'specific inputs are consumed,',
          'specific logic is applied,',
          'under a specific execution context,',
          'producing a specific outcome.'
        ],
        conclusion: 'Once this moment passes, the original factual state cannot be reconstituted with certainty. Evidence must therefore be produced at execution time, not inferred later.'
      },
      {
        id: 'artifact',
        title: 'Decision Snapshot Artifact',
        content: `A **Decision Snapshot Artifact** is the canonical execution-time record produced by the system itself. It is not a log, trace, report, or explanation. It constitutes the institutional declaration of record of what existed at execution time.

Statements about execution-time reality are therefore statements about the contents of this artifact.`,
        subsection: {
          title: 'Invariant properties',
          intro: 'Each artifact guarantees:',
          bullets: [
            '**Completeness** - all inputs, context, logic state, and outputs present at execution time are embedded.',
            '**Temporal integrity** - the execution timestamp is cryptographically bound.',
            '**Immutability** - artifacts are append-only and non-modifiable.',
            '**Ordering** - verifiable sequencing across decisions.',
            '**Authenticity** - cryptographic proof of origin and integrity.'
          ],
          conclusion: 'If establishing execution-time facts requires querying external systems, reconstruction has already begun.'
        }
      },
      {
        id: 'comparison',
        title: 'Evidence vs Reconstruction',
        isTable: true,
        tableData: {
          headers: ['Reconstruction', 'Execution-time Evidence'],
          rows: [
            ['Narrative assembled after outcome', 'Fact declared before examination'],
            ['Depends on surviving traces', 'Self-contained artifact'],
            ['Subject to hindsight bias', 'Preserves knowledge at Time T'],
            ['Cost increases over time', 'Cost fixed at execution']
          ]
        },
        conclusion: 'Decision Snapshot Infrastructure does not improve reconstruction. It makes reconstruction unnecessary within its perimeter.'
      },
      {
        id: 'automated',
        title: 'Automated Decisions',
        content: 'Automated decisions are execution-time events composed of volatile elements:',
        bullets: [
          'input data,',
          'decision logic (rules, models, configurations),',
          'execution context,',
          'produced outputs.'
        ],
        conclusion: 'Logs capture fragments of these elements. They do not preserve the execution as a whole. Because these components evolve independently, post-hoc reconstruction cannot reliably re-establish factual state. Execution-time capture is therefore not optional. It is the only way to preserve factual certainty.'
      },
      {
        id: 'separation',
        title: 'Separation of Execution and Evaluation',
        content: 'Decision Snapshot Infrastructure distinguishes:',
        bullets: [
          '**Executions** - immutable facts declared at Time T.',
          '**Evaluations** - human or institutional assessments produced later, explicitly timestamped and linked.'
        ],
        conclusion: 'This separation structurally prevents hindsight bias by ensuring that later knowledge does not contaminate execution-time facts.'
      },
      {
        id: 'contexts',
        title: 'Institutional Contexts',
        content: 'Execution-time evidence becomes critical wherever organizations must reliably answer questions about past decisions, including:',
        bullets: [
          'regulatory or audit review,',
          'internal investigations and post-mortems,',
          'client or partner inquiries,',
          'long-term accountability across system lifecycles.'
        ],
        conclusion: 'The infrastructure does not prescribe governance, interpretation, or disclosure. It provides a shared factual baseline upon which institutional discretion operates.'
      },
      {
        id: 'impact',
        title: 'Operational Impact',
        content: 'Decision Snapshot Infrastructure does not change what institutions choose to decide, record, or disclose. It changes the cost and fragility of establishing facts.',
        bullets: [
          'cross-team coordination during reviews,',
          'dependency on legacy systems,',
          'time spent reconstructing past states,',
          'uncertainty during examination.'
        ],
        bulletIntro: 'It reduces:',
        conclusion: 'What changes is not authority or intent. It is operational effort.'
      },
      {
        id: 'principles',
        title: 'Principles and Boundaries',
        content: 'Decision Snapshot Infrastructure is governed by the following boundaries:',
        bullets: [
          'Captures facts, not explanations.',
          'Neutral to interpretation, judgment, and governance.',
          'Independent of source system lifecycle.',
          'Non-intrusive to decision logic.',
          'Append-only, immutable, and verifiable by design.'
        ],
        conclusion: 'The infrastructure ends where interpretation begins.'
      },
      {
        id: 'availability',
        title: 'Availability and Adoption',
        content: `Decision Snapshot Infrastructure is implemented as a bounded capability and introduced through controlled, intra-perimeter validation deployments.

These deployments are not platform adoptions. They exist to allow institutions to examine the operational and institutional acceptability of execution-time evidence produced by their own systems. A determination that the capability should not be pursued is considered a valid outcome of this stage.`
      },
      {
        id: 'conclusion',
        title: 'Conclusion',
        content: `Automated decision systems do not fail because institutions are unable to act. They fail when, over time, institutions can no longer establish with certainty what was actually executed, under which conditions, and with what information.

Post-hoc reconstruction is structurally incapable of providing this certainty. It assembles narratives after outcomes are known, using traces that were never designed to serve as durable evidence. Decision Snapshot Infrastructure restores factual continuity by ensuring that execution-time evidence exists before questions arise.

It does not impose interpretation, governance, or judgment. It preserves the factual ground upon which institutional discretion operates. Evidence exists only at execution time. Preserving it is not a methodological choice. It is a structural necessity.`
      }
    ],
    nextStep: {
      title: 'Next step',
      content: 'If you want to examine how these principles apply to your own decision systems or institutional constraints, you can initiate a discussion.',
      conceptualRef: 'For institutions requiring an explicit, formal definition of execution-time evidence and the conceptual boundaries of Decision Snapshot Infrastructure, a',
      conceptualRefLink: 'Conceptual Reference',
      conceptualRefEnd: 'is available.'
    }
  }
};

function formatText(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export default function WhitePaperPage({
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

      {/* Sections */}
      {c.sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={index % 2 === 1 ? 'py-8 bg-zinc-50' : 'py-8'}
        >
          <div className="max-w-4xl mx-auto px-6">
            {section.subtitle ? (
              <>
                <p className="text-sm uppercase tracking-wider text-[#005C99] font-medium mb-2">{section.title}</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{section.subtitle}</h2>
              </>
            ) : (
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">{section.title}</h2>
            )}

            {section.content && (
              <div
                className="text-black/70 mb-6 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: formatText(section.content) }}
              />
            )}

            {section.bulletIntro && (
              <p className="text-black/70 mb-4">{section.bulletIntro}</p>
            )}

            {section.bullets && (
              <ul className="space-y-2 mb-6">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-black/70">
                    <span className="text-[#005C99] mt-1">•</span>
                    <span dangerouslySetInnerHTML={{ __html: formatText(bullet) }} />
                  </li>
                ))}
              </ul>
            )}

            {section.isTable && section.tableData && (
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 bg-zinc-100 font-bold text-black border-b-2 border-[#005C99]">
                        {section.tableData.headers[0]}
                      </th>
                      <th className="text-left py-3 px-4 bg-[#005C99] font-bold text-white">
                        {section.tableData.headers[1]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.tableData.rows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}>
                        <td className="py-3 px-4 text-black/70">{row[0]}</td>
                        <td className="py-3 px-4 text-[#005C99] font-medium">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.subsection && (
              <div className="mt-6">
                <h3 className="font-bold text-black mb-4">{section.subsection.title}</h3>
                {section.subsection.intro && (
                  <p className="text-black/70 mb-4">{section.subsection.intro}</p>
                )}
                {section.subsection.bullets && (
                  <ul className="space-y-2 mb-6">
                    {section.subsection.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-black/70">
                        <span className="text-[#005C99] mt-1">•</span>
                        <span dangerouslySetInnerHTML={{ __html: formatText(bullet) }} />
                      </li>
                    ))}
                  </ul>
                )}
                {section.subsection.conclusion && (
                  <blockquote className="border-l-4 border-[#005C99] pl-4 text-lg font-medium text-black">
                    {section.subsection.conclusion}
                  </blockquote>
                )}
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

      {/* Next Step Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#005C99]/5 border border-[#005C99]/20 p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-black mb-4">{c.nextStep.title}</h2>
            <p className="text-black/70 mb-4">{c.nextStep.content}</p>
            <p className="text-black/70">
              {c.nextStep.conceptualRef}{' '}
              <Link
                href={`/${lang}/decision-snapshot-conceptual-reference`}
                className="text-[#005C99] font-medium hover:underline"
              >
                {c.nextStep.conceptualRefLink}
              </Link>{' '}
              {c.nextStep.conceptualRefEnd}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
