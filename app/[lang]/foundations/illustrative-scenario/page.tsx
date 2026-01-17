import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    title: 'Scénario Illustratif',
    subtitle: 'Une illustration concrète de la preuve à l\'exécution face à la reconstruction',
    intro: 'Ce scénario est volontairement générique. Il ne décrit pas une organisation, un produit ou un contexte réglementaire spécifique.',
    purposeP1: 'Son objectif est d\'illustrer, en termes concrets, la différence structurelle entre :',
    purposePoints: [
      'des décisions dont l\'état factuel doit être reconstruit a posteriori, et',
      'des décisions dont l\'état factuel a été capturé au moment de l\'exécution.',
    ],
    purposeConclusion: 'La qualité, la justesse ou la légitimité de la décision elle-même **n\'est pas** évaluée ici.',
    contextTitle: 'Le contexte',
    contextP1: 'Un système de décision automatisé produit des décisions ayant des effets durables.',
    contextP2: 'Au moment de l\'exécution, le système :',
    contextPoints: [
      'consomme des données d\'entrée spécifiques,',
      'applique une logique ou un modèle donné,',
      'opère sous une configuration concrète,',
      'et produit un résultat.',
    ],
    contextConclusion: 'Quelque temps plus tard, l\'organisation doit répondre à une question concernant cette décision. La différence entre les deux mondes ci-dessous ne réside pas dans la décision elle-même, mais dans la persistance - ou non - de l\'état factuel de l\'exécution.',
    twoWorldsTitle: 'Deux mondes possibles',
    worldATitle: 'Monde A - La Reconstruction',
    worldAP1: 'Dans ce monde, aucune preuve n\'a été capturée au moment où la décision a été prise. Lorsque la décision est examinée plus tard, l\'organisation doit reconstruire ce qui s\'est passé en utilisant :',
    worldAPoints: [
      'des journaux (logs),',
      'des états de bases de données,',
      'des référentiels de configuration,',
      'des outils de monitoring,',
      'des tickets et rapports d\'incidents,',
      'et la mémoire humaine.',
    ],
    worldAConclusion: 'L\'état factuel de la décision est déduit après coup. Différentes équipes peuvent reconstruire des versions divergentes de l\'événement, selon les sources disponibles, l\'évolution des systèmes et les interprétations appliquées. Le résultat est un récit assemblé sous le signe de l\'incertitude.',
    worldBTitle: 'Monde B - La Preuve à l\'exécution',
    worldBP1: 'Dans ce monde, l\'état factuel de la décision a été capturé au moment exact de l\'exécution. Cela implique qu\'un mécanisme de preuve - tel qu\'une **Infrastructure de Snapshot Décisionnel** - était déjà en place.',
    worldBP2: 'Lorsque la décision est examinée plus tard :',
    worldBPoints: [
      'les données d\'entrée réellement utilisées sont disponibles,',
      'l\'état exact de la logique ou du modèle est connu,',
      'le contexte d\'exécution est préservé,',
      'et le résultat produit est enregistré.',
    ],
    worldBConclusion: 'L\'état factuel n\'a pas besoin d\'être déduit. Il existe déjà.',
    changesTitle: 'Ce qui change entre les deux mondes',
    changesP1: 'La décision peut être identique dans les deux mondes. Ce qui change, c\'est la **disponibilité des faits**.',
    changesWorldATitle: 'Dans le Monde A :',
    changesWorldAPoints: [
      'les faits doivent être reconstruits,',
      'l\'interprétation est inévitable pour combler les vides,',
      'l\'incertitude s\'accumule avec le temps.',
    ],
    changesWorldBTitle: 'Dans le Monde B :',
    changesWorldBPoints: [
      'les faits sont examinés directement,',
      'l\'interprétation est séparée de l\'exécution,',
      'l\'état de connaissance au moment de l\'action est préservé.',
    ],
    changesQuote: 'Moins d\'efforts sont requis pour établir, conserver et accéder à l\'état factuel lorsqu\'il est nécessaire.',
    changesConclusion: 'La différence n\'est pas une intention institutionnelle. C\'est un coût opérationnel.',
    notAssessTitle: 'Ce que ce scénario n\'évalue pas',
    notAssessP1: 'Ce scénario n\'évalue **pas** :',
    notAssessPoints: [
      'si la décision était correcte ou incorrecte,',
      'si la politique ou le modèle était approprié,',
      'si un résultat différent aurait été préférable.',
    ],
    notAssessP2: 'Une décision capturée à l\'exécution peut plus tard être contestée, révisée ou annulée. La preuve à l\'exécution ne légitime pas la décision. Elle ne justifie pas le résultat.',
    notAssessConclusion: 'Elle établit une seule chose : **ce que le système a réellement fait, avec ce qu\'il avait, à cet instant précis.**',
    controlTitle: 'Le contrôle institutionnel reste inchangé',
    controlP1: 'Dans les deux mondes, l\'institution conserve le plein contrôle sur :',
    controlPoints: [
      'ce qui est examiné,',
      'la manière dont les faits sont interprétés,',
      'les conclusions qui en sont tirées,',
      'et ce qui est communiqué.',
    ],
    controlConclusion: 'La preuve à l\'exécution n\'impose pas de récit. Elle n\'automatise pas le jugement. Elle fournit une base factuelle stable sur laquelle le pouvoir discrétionnaire de l\'institution peut s\'exercer.',
    whyMattersTitle: 'Pourquoi cette distinction est cruciale',
    whyMattersP1: 'Les institutions échouent rarement parce qu\'elles ne peuvent pas décider. Elles échouent parce que, avec le temps, elles ne peuvent plus **démontrer** ce qui s\'est réellement passé.',
    whyMattersConclusion: 'L\'absence de preuve à l\'exécution n\'empêche pas l\'action, mais elle augmente le coût, l\'incertitude et la fragilité de l\'examen ultérieur. Ce scénario illustre pourquoi la préservation des faits au moment de l\'exécution change fondamentalement la relation d\'une organisation avec ses propres décisions passées.',
    summaryTitle: 'Résumé',
    summaryP1: 'La différence entre les deux mondes n\'est pas la décision elle-même. C\'est la nature de l\'état factuel de l\'exécution :',
    summaryPoints: [
      'doit-il être reconstruit dans l\'incertitude, ou',
      'existe-t-il déjà sous la forme d\'un enregistrement immuable ?',
    ],
    summaryConclusion: 'Une Infrastructure de Snapshot Décisionnel rend le second monde possible.',
  },
  en: {
    title: 'Illustrative Scenario',
    subtitle: 'A concrete illustration of execution-time evidence versus reconstruction',
    intro: 'This scenario is intentionally generic. It does not describe a specific organization, product, or regulatory context.',
    purposeP1: 'Its purpose is to illustrate, in concrete terms, the structural difference between:',
    purposePoints: [
      'decisions whose factual state must be reconstructed after the fact, and',
      'decisions whose factual state was captured at execution time.',
    ],
    purposeConclusion: 'The quality, correctness, or legitimacy of the decision itself is **not** evaluated here.',
    contextTitle: 'The context',
    contextP1: 'An automated decision system produces decisions that have durable effects.',
    contextP2: 'At the moment of execution, the system:',
    contextPoints: [
      'consumes specific input data,',
      'applies a given logic or model,',
      'operates under a concrete configuration,',
      'and produces an outcome.',
    ],
    contextConclusion: 'Some time later, the organization must answer a question about that decision. The difference between the two worlds below lies not in the decision itself, but in whether the factual state of execution still exists.',
    twoWorldsTitle: 'Two possible worlds',
    worldATitle: 'World A - Reconstruction',
    worldAP1: 'In this world, no execution-time evidence was captured when the decision was made. When the decision is later examined, the organization must reconstruct what happened using:',
    worldAPoints: [
      'logs,',
      'database states,',
      'configuration repositories,',
      'monitoring tools,',
      'tickets and incident reports,',
      'and human recollection.',
    ],
    worldAConclusion: 'The factual state of the decision is inferred after the fact. Different teams may reconstruct different versions of what happened, depending on which sources are still available, how systems have evolved, and which interpretations are applied. The result is a narrative assembled under uncertainty.',
    worldBTitle: 'World B - Execution-time evidence',
    worldBP1: 'In this world, the factual state of the decision was captured at the moment of execution. This implies that an execution-time evidence mechanism - such as a **Decision Snapshot Infrastructure** - was already in place.',
    worldBP2: 'When the decision is later examined:',
    worldBPoints: [
      'the input data actually used is available,',
      'the exact logic or model state is known,',
      'the execution context is preserved,',
      'and the produced outcome is recorded.',
    ],
    worldBConclusion: 'The factual state does not need to be inferred. It already exists.',
    changesTitle: 'What changes between the two worlds',
    changesP1: 'The decision itself may be identical in both worlds. What changes is the **availability of facts**.',
    changesWorldATitle: 'In World A:',
    changesWorldAPoints: [
      'facts must be reconstructed,',
      'interpretations are unavoidable,',
      'and uncertainty accumulates over time.',
    ],
    changesWorldBTitle: 'In World B:',
    changesWorldBPoints: [
      'facts are examined directly,',
      'interpretation is separated from execution,',
      'and the state of knowledge at the moment of action is preserved.',
    ],
    changesQuote: 'Less effort is required to establish, retain, and access factual state when it is needed.',
    changesConclusion: 'The difference is not institutional intent. It is operational cost.',
    notAssessTitle: 'What this scenario does not assess',
    notAssessP1: 'This scenario does **not** assess:',
    notAssessPoints: [
      'whether the decision was correct or incorrect,',
      'whether the policy or model was appropriate,',
      'whether a different outcome would have been preferable.',
    ],
    notAssessP2: 'A decision captured at execution time may later be challenged, revised, or overturned. Execution-time evidence does **not** legitimize the decision. It does **not** justify the outcome.',
    notAssessConclusion: 'It establishes only one thing: **what the system actually did, with what it had, at that moment.**',
    controlTitle: 'Institutional control remains unchanged',
    controlP1: 'In both worlds, the institution retains full control over:',
    controlPoints: [
      'what is examined,',
      'how facts are interpreted,',
      'what conclusions are drawn,',
      'and what is communicated.',
    ],
    controlConclusion: 'Execution-time evidence does not impose a narrative. It does not automate judgment. It provides a stable factual base upon which institutional discretion can be exercised.',
    whyMattersTitle: 'Why this distinction matters',
    whyMattersP1: 'Institutions rarely fail because they cannot decide. They fail because, over time, they can no longer **demonstrate** what actually happened.',
    whyMattersConclusion: 'The absence of execution-time evidence does not prevent action. It increases the cost, uncertainty, and fragility of later examination. This scenario illustrates why preserving facts at execution time fundamentally changes the organization\'s relationship to its own past decisions.',
    summaryTitle: 'Summary',
    summaryP1: 'The difference between the two worlds is not the decision itself. It is whether the factual state of execution:',
    summaryPoints: [
      'must be reconstructed under uncertainty, or',
      'already exists as an immutable record.',
    ],
    summaryConclusion: 'A Decision Snapshot Infrastructure makes the second world possible.',
  },
};

function renderMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

export default function IllustrativeScenarioPage({ params }: { params: { lang: Language } }) {
  const c = content[params.lang];

  return (
    <article className="max-w-3xl">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-black mb-4">{c.title}</h1>
      <h2 className="text-xl text-black/70 mb-8">{c.subtitle}</h2>

      {/* Intro */}
      <p className="text-lg text-black/80 mb-6">{c.intro}</p>
      <p className="text-lg text-black/80 mb-4">{c.purposeP1}</p>
      <ul className="space-y-2 mb-6">
        {c.purposePoints.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-lg text-black/80">
            <span className="text-[#005C99] mt-1">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="text-lg text-black/80 mb-8" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.purposeConclusion) }} />

      {/* Context */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.contextTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.contextP1}</p>
        <p className="text-lg text-black/80 mb-4">{c.contextP2}</p>
        <ul className="space-y-2 mb-6">
          {c.contextPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.contextConclusion}</p>
      </section>

      {/* Two possible worlds */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-6">{c.twoWorldsTitle}</h3>

        {/* World A */}
        <h4 className="text-xl font-semibold text-black mb-4">{c.worldATitle}</h4>
        <p className="text-lg text-black/80 mb-4">{c.worldAP1}</p>
        <ul className="space-y-2 mb-6">
          {c.worldAPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80 mb-8">{c.worldAConclusion}</p>

        {/* World B */}
        <h4 className="text-xl font-semibold text-black mb-4">{c.worldBTitle}</h4>
        <p className="text-lg text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.worldBP1) }} />
        <p className="text-lg text-black/80 mb-4">{c.worldBP2}</p>
        <ul className="space-y-2 mb-6">
          {c.worldBPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="bg-[#005C99] text-white p-6 mb-4">
          <p className="text-lg font-medium">{c.worldBConclusion}</p>
        </div>
      </section>

      {/* What changes between the two worlds */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.changesTitle}</h3>
        <p className="text-lg text-black/80 mb-6" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.changesP1) }} />

        <p className="text-lg font-semibold text-black mb-3">{c.changesWorldATitle}</p>
        <ul className="space-y-2 mb-6">
          {c.changesWorldAPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="text-lg font-semibold text-black mb-3">{c.changesWorldBTitle}</p>
        <ul className="space-y-2 mb-6">
          {c.changesWorldBPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <blockquote className="border-l-4 border-[#005C99] pl-6 py-2 my-6 bg-black/5">
          <p className="text-lg text-black/80 italic">{c.changesQuote}</p>
        </blockquote>

        <p className="text-lg text-black/80">{c.changesConclusion}</p>
      </section>

      {/* What this scenario does not assess */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.notAssessTitle}</h3>
        <p className="text-lg text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.notAssessP1) }} />
        <ul className="space-y-2 mb-6">
          {c.notAssessPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.notAssessP2) }} />
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.notAssessConclusion) }} />
        </div>
      </section>

      {/* Institutional control remains unchanged */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.controlTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.controlP1}</p>
        <ul className="space-y-2 mb-6">
          {c.controlPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.controlConclusion}</p>
      </section>

      {/* Why this distinction matters */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.whyMattersTitle}</h3>
        <p className="text-lg text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.whyMattersP1) }} />
        <p className="text-lg text-black/80">{c.whyMattersConclusion}</p>
      </section>

      {/* Summary */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.summaryTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.summaryP1}</p>
        <ul className="space-y-2 mb-6">
          {c.summaryPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium">{c.summaryConclusion}</p>
        </div>
      </section>

      <ReadingPath currentSlug="illustrative-scenario" lang={params.lang} />
    </article>
  );
}
