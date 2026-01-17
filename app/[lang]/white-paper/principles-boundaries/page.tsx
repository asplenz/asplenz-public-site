import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    title: 'Principes et Limites',
    subtitle: 'Définir ce qu\'est la preuve à l\'exécution - et ce qu\'elle n\'est pas',
    intro: 'Les principes suivants définissent les fondations conceptuelles de Horizon et les limites au sein desquelles l\'infrastructure opère. Ils ne constituent pas des prescriptions de gouvernance ou de prise de décision. Ils décrivent les contraintes structurelles observées dans les systèmes de décision automatisés et les conditions dans lesquelles une certitude factuelle peut exister durablement.',
    principle1Title: 'Principe 1 - La preuve n\'existe qu\'au moment de l\'exécution',
    principle1P1: 'Une décision devient un fait à l\'instant même où elle est exécutée. À cet instant précis :',
    principle1Points: [
      'des entrées spécifiques sont consommées,',
      'une logique spécifique est appliquée,',
      'dans un contexte d\'exécution spécifique,',
      'produisant un résultat spécifique.',
    ],
    principle1Conclusion: 'Une fois ce moment passé, l\'état factuel d\'origine n\'existe plus dans son intégralité au sein du système. Toute tentative ultérieure d\'établir ce qui s\'est passé repose sur la reconstruction. La preuve à l\'exécution ne peut donc être produite qu\'au moment de l\'exécution. Elle ne peut être recréée après coup sans perte ni interprétation.',
    principle2Title: 'Principe 2 - Les faits et les interprétations doivent rester distincts',
    principle2P1: 'La preuve à l\'exécution établit les faits, pas le sens. Les faits décrivent :',
    principle2Points: [
      'ce qui a été exécuté,',
      'avec quelles données,',
      'dans quelles conditions,',
      'et avec quel résultat.',
    ],
    principle2Conclusion: 'L\'interprétation, l\'évaluation et le jugement peuvent suivre - mais ils surviennent dans une couche temporelle différente. Confondre les faits et l\'interprétation introduit de l\'ambiguïté et un biais de rétrospective. Les séparer préserve l\'état réel des connaissances de l\'institution au moment de l\'action.',
    principle3Title: 'Principe 3 - La reconstruction n\'est pas une preuve',
    principle3P1: 'La reconstruction assemble des récits a posteriori. Elle peut soutenir la compréhension, l\'explication ou l\'apprentissage. Elle ne préserve pas l\'état factuel qui existait au moment de l\'exécution. La reconstruction dépend :',
    principle3Points: [
      'des traces survivantes,',
      'de systèmes évolutifs,',
      'de données partielles,',
      'et d\'une interprétation rétrospective.',
    ],
    principle3Conclusion: 'Il s\'agit de limites structurelles, et non de défauts de mise en œuvre. Là où une certitude factuelle est requise, la reconstruction ne peut servir de fondation.',
    boundary1Title: 'Limite 1 - Horizon n\'explique pas les décisions',
    boundary1P1: 'Horizon ne fournit ni explications, ni justifications, ni interprétations. Il ne :',
    boundary1Points: [
      'juge pas la pertinence,',
      'n\'attribue pas de responsabilité,',
      'n\'évalue pas les résultats.',
    ],
    boundary1Conclusion: 'Son rôle s\'arrête à la déclaration et à la préservation des faits. L\'interprétation reste une activité humaine et institutionnelle.',
    boundary2Title: 'Limite 2 - Horizon n\'est pas un système d\'audit ou de monitoring',
    boundary2P1: 'Horizon n\'est pas : une plateforme d\'observabilité, un outil de monitoring ou d\'alerte, un SIEM, un moteur de workflow ou un système de décision.',
    boundary2Conclusion: 'Ces outils répondent à des questions différentes. Horizon comble une lacune structurelle : l\'absence de registres factuels durables, produits à l\'exécution, pour les décisions automatisées.',
    boundary3Title: 'Limite 3 - Horizon n\'impose pas de posture institutionnelle',
    boundary3P1: 'Horizon ne définit pas quelles décisions importent, ce qui doit être examiné, comment les conclusions doivent être tirées ou ce qui doit être communiqué. Ces choix restent institutionnels et contextuels.',
    boundary3Conclusion: 'La preuve à l\'exécution contraint la reconstruction, pas le pouvoir discrétionnaire. L\'organisation conserve l\'entière maîtrise du périmètre, de l\'interprétation, de l\'articulation et de la communication.',
    infraTitle: 'Principe d\'infrastructure - Neutralité par conception',
    infraP1: 'Horizon opère comme une couche d\'infrastructure. Il s\'intègre aux côtés des systèmes existants sans interférer avec la logique de décision, les structures de gouvernance ou l\'autorité organisationnelle. L\'infrastructure n\'encode ni politique ni intention. Elle garantit que des états factuels d\'exécution existent lorsqu\'ils sont nécessaires.',
    temporalTitle: 'Limite temporelle - Indépendance vis-à-vis de l\'évolution du système',
    temporalP1: 'La preuve à l\'exécution doit rester exploitable au-delà du cycle de vie du système qui l\'a produite. Les Artefacts de Snapshot Décisionnel sont donc conçus pour être auto-contenus, vérifiables et indépendants de l\'état futur du système. Ils restent utilisables même si les modèles sont ré-entraînés, les configurations modifiées, les architectures refondues ou les systèmes décommissionnés.',
    operationalTitle: 'Limite opérationnelle - Réduire l\'effort, pas redéfinir le dossier',
    operationalP1: 'Horizon ne modifie pas ce que les organisations choisissent d\'enregistrer. Il modifie l\'effort requis pour établir l\'état factuel. En capturant la preuve à l\'exécution, le coût de la reconstruction a posteriori est réduit, la coordination entre équipes est minimisée et la dépendance vis-à-vis des systèmes hérités diminue. Ce qui change n\'est pas le contenu du dossier, c\'est le coût pour l\'assembler, le conserver et y accéder au fil du temps.',
    summaryTitle: 'Résumé',
    summaryP1: 'Horizon repose sur un ensemble limité de principes et des limites strictes. Il capture les faits à l\'exécution, les préserve indépendamment de l\'évolution du système, sépare les faits de l\'interprétation et laisse le contrôle institutionnel inchangé.',
    summaryConclusion: 'Au sein de ces limites, la preuve à l\'exécution devient durable, exploitable et efficace - sans prescrire de gouvernance, de jugement ou d\'intention.',
  },
  en: {
    title: 'Principles & Boundaries',
    subtitle: 'Defining what execution-time evidence is - and what it is not',
    intro: 'The following principles define the conceptual foundations of Horizon and the boundaries within which it operates. They are not prescriptions for governance or decision-making. They describe structural constraints observed in automated decision systems and the conditions under which factual certainty can exist over time.',
    principle1Title: 'Principle 1 - Evidence exists only at execution time',
    principle1P1: 'A decision becomes a fact at the moment it is executed. At that moment:',
    principle1Points: [
      'specific inputs are consumed,',
      'specific logic is applied,',
      'under a specific execution context,',
      'producing a specific outcome.',
    ],
    principle1Conclusion: 'Once this moment has passed, the original factual state no longer exists as a whole within the system. Any later attempt to establish what happened relies on reconstruction. Execution-time evidence can therefore only be produced at execution time. It cannot be recreated afterward without loss or interpretation.',
    principle2Title: 'Principle 2 - Facts and interpretations must remain distinct',
    principle2P1: 'Execution-time evidence establishes facts, not meaning. Facts describe:',
    principle2Points: [
      'what was executed,',
      'with what data,',
      'under which conditions,',
      'and with what result.',
    ],
    principle2Conclusion: 'Interpretation, assessment, and judgment may follow - but they occur in a different temporal layer. Conflating facts with interpretation introduces ambiguity and hindsight bias. Separating them preserves the institution\'s actual state of knowledge at the moment of action.',
    principle3Title: 'Principle 3 - Reconstruction is not evidence',
    principle3P1: 'Reconstruction assembles narratives after the fact. It may support understanding, explanation, or learning. It does not preserve the factual state that existed at execution time. Reconstruction depends on:',
    principle3Points: [
      'surviving traces,',
      'evolving systems,',
      'partial data,',
      'and retrospective interpretation.',
    ],
    principle3Conclusion: 'These are structural limitations, not implementation flaws. Where factual certainty is required, reconstruction cannot serve as the foundation.',
    boundary1Title: 'Boundary 1 - Horizon does not explain decisions',
    boundary1P1: 'Horizon does not provide explanations, justifications, or interpretations. It does not:',
    boundary1Points: [
      'assess correctness,',
      'assign responsibility,',
      'or evaluate outcomes.',
    ],
    boundary1Conclusion: 'Its role ends with the declaration and preservation of facts. Interpretation remains a human and institutional activity.',
    boundary2Title: 'Boundary 2 - Horizon is not an audit or monitoring system',
    boundary2P1: 'Horizon is not: an observability platform, a monitoring or alerting tool, a SIEM, a workflow engine, or a decision system.',
    boundary2Conclusion: 'Those tools answer different questions. Horizon addresses a structural gap: the absence of durable, execution-time factual records for automated decisions.',
    boundary3Title: 'Boundary 3 - Horizon does not impose institutional posture',
    boundary3P1: 'Horizon does not define which decisions matter, what must be examined, how conclusions should be drawn, or what should be communicated. These choices remain institutional and contextual.',
    boundary3Conclusion: 'Execution-time evidence constrains reconstruction, not discretion. The organization retains full control over scope, interpretation, articulation, and communication.',
    infraTitle: 'Infrastructure principle - Neutrality by design',
    infraP1: 'Horizon operates as an infrastructure layer. It integrates alongside existing systems without interfering with decision logic, governance structures, or organizational authority. The infrastructure does not encode policy or intent. It ensures that factual execution states exist when they are needed.',
    temporalTitle: 'Temporal boundary - Independence from system evolution',
    temporalP1: 'Execution-time evidence must remain usable beyond the lifecycle of the system that produced it. Decision Snapshot Artifacts are therefore designed to be self-contained, verifiable, and independent of future system state. They remain usable even if models are retrained, configurations change, architectures are refactored, or systems are decommissioned.',
    operationalTitle: 'Operational boundary - Reducing effort, not redefining records',
    operationalP1: 'Horizon does not change what organizations choose to record. It changes the effort required to establish factual state. By capturing execution-time evidence, the cost of post-hoc reconstruction is reduced, cross-team coordination is minimized, and dependency on legacy systems decreases. What changes is not the content of the record, but the cost of assembling, retaining, and accessing it over time.',
    summaryTitle: 'Summary',
    summaryP1: 'Horizon is built on a limited set of principles and strict boundaries. It captures facts at execution time, preserves them independently of system evolution, separates facts from interpretation, and leaves institutional control unchanged.',
    summaryConclusion: 'Within these boundaries, execution-time evidence becomes durable, usable, and operationally efficient - without prescribing governance, judgment, or intent.',
  },
};

function renderMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

export default function PrinciplesBoundariesPage({ params }: { params: { lang: Language } }) {
  const c = content[params.lang];

  return (
    <article className="max-w-3xl">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-black mb-4">{c.title}</h1>
      <h2 className="text-xl text-black/70 mb-8">{c.subtitle}</h2>

      {/* Intro */}
      <p className="text-lg text-black/80 mb-8">{c.intro}</p>

      {/* Principle 1 */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.principle1Title}</h3>
        <p className="text-lg text-black/80 mb-4">{c.principle1P1}</p>
        <ul className="space-y-2 mb-6">
          {c.principle1Points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.principle1Conclusion}</p>
      </section>

      {/* Principle 2 */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-black mb-4">{c.principle2Title}</h3>
        <p className="text-lg text-black/80 mb-4">{c.principle2P1}</p>
        <ul className="space-y-2 mb-6">
          {c.principle2Points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.principle2Conclusion}</p>
      </section>

      {/* Principle 3 */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-black mb-4">{c.principle3Title}</h3>
        <p className="text-lg text-black/80 mb-4">{c.principle3P1}</p>
        <ul className="space-y-2 mb-6">
          {c.principle3Points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium">{c.principle3Conclusion}</p>
        </div>
      </section>

      {/* Boundary 1 */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.boundary1Title}</h3>
        <p className="text-lg text-black/80 mb-4">{c.boundary1P1}</p>
        <ul className="space-y-2 mb-6">
          {c.boundary1Points.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.boundary1Conclusion}</p>
      </section>

      {/* Boundary 2 */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-black mb-4">{c.boundary2Title}</h3>
        <p className="text-lg text-black/80 mb-4">{c.boundary2P1}</p>
        <p className="text-lg text-black/80">{c.boundary2Conclusion}</p>
      </section>

      {/* Boundary 3 */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-black mb-4">{c.boundary3Title}</h3>
        <p className="text-lg text-black/80 mb-4">{c.boundary3P1}</p>
        <p className="text-lg text-black/80">{c.boundary3Conclusion}</p>
      </section>

      {/* Infrastructure principle */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.infraTitle}</h3>
        <p className="text-lg text-black/80">{c.infraP1}</p>
      </section>

      {/* Temporal boundary */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-black mb-4">{c.temporalTitle}</h3>
        <p className="text-lg text-black/80">{c.temporalP1}</p>
      </section>

      {/* Operational boundary */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-black mb-4">{c.operationalTitle}</h3>
        <p className="text-lg text-black/80">{c.operationalP1}</p>
      </section>

      {/* Summary */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.summaryTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.summaryP1}</p>
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium">{c.summaryConclusion}</p>
        </div>
      </section>

      <ReadingPath currentSlug="principles-boundaries" lang={params.lang} />
    </article>
  );
}
