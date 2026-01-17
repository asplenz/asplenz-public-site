import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    title: 'Contextes Institutionnels',
    subtitle: 'Là où la preuve à l\'exécution devient institutionnellement critique',
    intro: 'Les décisions automatisées opèrent de plus en plus au sein d\'environnements où la responsabilité, la capacité de revue et la durabilité des faits sont essentielles. Ces environnements sont qualifiés de **contextes institutionnels** - non parce qu\'ils imposent un modèle de gouvernance unique, mais parce qu\'ils exigent la capacité d\'établir ce qui s\'est réellement passé au moment de l\'exécution, indépendamment de toute interprétation ultérieure.',
    introP2: 'La preuve à l\'exécution n\'est pas spécifique à une seule fonction. Elle devient pertinente partout où les organisations doivent répondre de manière fiable à des questions factuelles sur des décisions passées.',
    beyondTitle: 'Au-delà de l\'audit et de la conformité',
    beyondP1: 'Les contextes institutionnels sont souvent associés à l\'audit, à la conformité ou au contrôle réglementaire. Ce sont des cas d\'usage importants, mais ils ne sont pas les seuls. La preuve à l\'exécution soutient également :',
    beyondPoints: [
      'les revues internes et les analyses après incident (post-mortem),',
      'la coordination entre équipes (ingénierie, data, opérations, risques),',
      'les demandes d\'informations des clients ou des partenaires,',
      'la responsabilité à long terme au sein de systèmes en évolution.',
    ],
    beyondConclusion: 'L\'exigence commune à ces contextes n\'est pas la conformité en soi. C\'est le besoin d\'un socle factuel stable qui ne dépend pas de la reconstruction.',
    limitsTitle: 'Les limites des récits rétrospectifs',
    limitsP1: 'Dans les cadres institutionnels, l\'analyse rétrospective est souvent traitée comme une preuve. Cependant, l\'analyse rétrospective :',
    limitsPoints: [
      'assemble des récits une fois que le résultat est connu,',
      's\'appuie sur des sources partielles et changeantes,',
      'et est intrinsèquement exposée à l\'interprétation ainsi qu\'au biais de rétrospective.',
    ],
    limitsConclusion: 'Les récits peuvent aider à la compréhension, mais ils n\'établissent pas de certitude factuelle. Là où la responsabilité institutionnelle est en jeu, cette distinction est cruciale.',
    foundationTitle: 'La preuve à l\'exécution comme fondation institutionnelle',
    foundationP1: 'La preuve à l\'exécution établit les faits avant que l\'examen ne commence. Elle ancre :',
    foundationSteps: [
      'quelles données étaient disponibles,',
      'quelle logique a été appliquée,',
      'dans quelles conditions,',
      'et quel résultat a été produit.',
    ],
    foundationConclusion: 'Cet ancrage ne dicte ni l\'interprétation ni le jugement. Il fournit une base factuelle partagée sur laquelle différentes fonctions institutionnelles peuvent s\'appuyer. L\'audit, l\'examen juridique, la gouvernance et l\'investigation technique peuvent tous se référer aux mêmes faits - sans pour autant exiger les mêmes conclusions.',
    infraTitle: 'Une infrastructure, pas une prescription institutionnelle',
    infraP1: 'Une Infrastructure de Snapshot Décisionnel n\'impose pas de posture institutionnelle. Elle ne définit pas :',
    infraPoints: [
      'ce qui doit être examiné,',
      'quelles décisions importent,',
      'comment les conclusions doivent être tirées,',
      'ou ce qui doit être communiqué.',
    ],
    infraConclusion: 'Ces choix restent institutionnels et contextuels. Le rôle de l\'infrastructure est limité et précis : garantir que des états factuels d\'exécution existent, indépendamment de l\'évolution du système, lorsqu\'ils sont nécessaires.',
    controlTitle: 'Le contrôle reste institutionnel',
    controlP1: 'La capture de preuves à l\'exécution ne centralise pas l\'autorité. Les institutions conservent le plein contrôle sur :',
    controlPoints: [
      'le périmètre de l\'examen,',
      'l\'interprétation des faits,',
      'l\'articulation de la responsabilité,',
      'et la communication externe.',
    ],
    controlConclusion: 'La preuve à l\'exécution contraint la reconstruction, pas le pouvoir discrétionnaire. Elle réduit l\'incertitude sans réduire la latitude institutionnelle.',
    impactTitle: 'Impact opérationnel à travers les fonctions institutionnelles',
    impactP1: 'En pratique, les contextes institutionnels sont aussi des contextes opérationnels. Lorsque la preuve à l\'exécution n\'existe pas :',
    impactWithoutPoints: [
      'établir les faits nécessite une coordination entre les équipes,',
      'les systèmes hérités doivent être accédés ou réactivés,',
      'des hypothèses doivent être négociées,',
      'et l\'effort croît avec le temps.',
    ],
    impactWithTitle: 'À l\'inverse, la preuve à l\'exécution :',
    impactWithPoints: [
      'réduit l\'effort requis pour établir l\'état factuel,',
      'raccourcit les cycles de revue,',
      'et limite la dépendance vis-à-vis des systèmes et configurations passés.',
    ],
    impactConclusion: 'Ce qui change n\'est pas le rôle institutionnel. C\'est le coût opérationnel nécessaire pour l\'assumer.',
    timeTitle: 'Pourquoi cela importe au fil du temps',
    timeP1: 'La responsabilité institutionnelle ne s\'arrête pas lorsque les systèmes changent. Les modèles sont remplacés. Les architectures sont refondues. Les équipes évoluent.',
    timeConclusion: 'La preuve à l\'exécution garantit que les décisions passées restent examinables sans exiger que le système d\'origine existe encore. Cette durabilité est essentielle partout où la responsabilité institutionnelle s\'étend au-delà du cycle de vie des composants techniques.',
    summaryTitle: 'Résumé',
    summaryP1: 'Les contextes institutionnels exigent plus que des récits rétrospectifs. Ils exigent une certitude factuelle qui survit au temps, à l\'évolution des systèmes et aux changements organisationnels.',
    summaryConclusion: 'Une Infrastructure de Snapshot Décisionnel apporte cette certitude en préservant la preuve à l\'exécution - sans prescrire d\'interprétation, de gouvernance ou de posture institutionnelle.',
  },
  en: {
    title: 'Institutional Contexts',
    subtitle: 'Where execution-time evidence becomes institutionally critical',
    intro: 'Automated decisions increasingly operate within environments where accountability, reviewability, and the durability of facts are essential. These environments are referred to as **institutional contexts** - not because they impose a single governance model, but because they require the ability to establish what actually happened at execution time, independent of any subsequent interpretation.',
    introP2: 'Execution-time evidence is not specific to any single function. It becomes relevant wherever organizations must reliably answer factual questions about past decisions.',
    beyondTitle: 'Beyond audit and compliance',
    beyondP1: 'Institutional contexts are often associated with audit, compliance, or regulatory oversight. These are important use cases, but they are not the only ones. Execution-time evidence also supports:',
    beyondPoints: [
      'internal reviews and post-incident analysis (post-mortems),',
      'cross-team coordination (engineering, data, operations, risk),',
      'information requests from clients or partners,',
      'long-term accountability within evolving systems.',
    ],
    beyondConclusion: 'The common requirement across these contexts is not compliance per se. It is the need for a stable factual foundation that does not depend on reconstruction.',
    limitsTitle: 'The limits of retrospective narratives',
    limitsP1: 'In institutional settings, retrospective analysis is often treated as evidence. However, retrospective analysis:',
    limitsPoints: [
      'assembles narratives once the outcome is known,',
      'relies on partial and changing sources,',
      'and is inherently exposed to interpretation and hindsight bias.',
    ],
    limitsConclusion: 'Narratives may aid understanding, but they do not establish factual certainty. Where institutional accountability is at stake, this distinction is crucial.',
    foundationTitle: 'Execution-time evidence as institutional foundation',
    foundationP1: 'Execution-time evidence establishes facts before examination begins. It anchors:',
    foundationSteps: [
      'what data was available,',
      'what logic was applied,',
      'under what conditions,',
      'and what outcome was produced.',
    ],
    foundationConclusion: 'This anchoring does not dictate interpretation or judgment. It provides a shared factual base upon which different institutional functions can rely. Audit, legal review, governance, and technical investigation can all refer to the same facts - without requiring the same conclusions.',
    infraTitle: 'An infrastructure, not an institutional prescription',
    infraP1: 'A Decision Snapshot Infrastructure does not impose an institutional posture. It does not define:',
    infraPoints: [
      'what should be examined,',
      'which decisions matter,',
      'how conclusions should be drawn,',
      'or what should be communicated.',
    ],
    infraConclusion: 'These choices remain institutional and contextual. The role of the infrastructure is limited and precise: to ensure that factual execution states exist, independently of system evolution, when they are needed.',
    controlTitle: 'Control remains institutional',
    controlP1: 'Capturing execution-time evidence does not centralize authority. Institutions retain full control over:',
    controlPoints: [
      'the scope of examination,',
      'the interpretation of facts,',
      'the articulation of accountability,',
      'and external communication.',
    ],
    controlConclusion: 'Execution-time evidence constrains reconstruction, not discretion. It reduces uncertainty without reducing institutional latitude.',
    impactTitle: 'Operational impact across institutional functions',
    impactP1: 'In practice, institutional contexts are also operational contexts. When execution-time evidence does not exist:',
    impactWithoutPoints: [
      'establishing facts requires cross-team coordination,',
      'legacy systems must be accessed or reactivated,',
      'assumptions must be negotiated,',
      'and effort grows with time.',
    ],
    impactWithTitle: 'Conversely, execution-time evidence:',
    impactWithPoints: [
      'reduces the effort required to establish factual state,',
      'shortens review cycles,',
      'and limits dependency on past systems and configurations.',
    ],
    impactConclusion: 'What changes is not the institutional role. It is the operational cost of fulfilling it.',
    timeTitle: 'Why this matters over time',
    timeP1: 'Institutional accountability does not stop when systems change. Models are replaced. Architectures are refactored. Teams move on.',
    timeConclusion: 'Execution-time evidence ensures that past decisions remain examinable without requiring the original system to still exist. This durability is essential wherever institutional accountability extends beyond the lifecycle of technical components.',
    summaryTitle: 'Summary',
    summaryP1: 'Institutional contexts require more than retrospective narratives. They require factual certainty that survives time, system evolution, and organizational change.',
    summaryConclusion: 'A Decision Snapshot Infrastructure provides this certainty by preserving execution-time evidence - without prescribing interpretation, governance, or institutional posture.',
  },
};

function renderMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

export default function InstitutionalContextsPage({ params }: { params: { lang: Language } }) {
  const c = content[params.lang];

  return (
    <article className="max-w-3xl">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-black mb-4">{c.title}</h1>
      <h2 className="text-xl text-black/70 mb-8">{c.subtitle}</h2>

      {/* Intro */}
      <p className="text-lg text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.intro) }} />
      <p className="text-lg text-black/80 mb-8">{c.introP2}</p>

      {/* Beyond audit and compliance */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.beyondTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.beyondP1}</p>
        <ul className="space-y-2 mb-6">
          {c.beyondPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.beyondConclusion}</p>
      </section>

      {/* The limits of retrospective narratives */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.limitsTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.limitsP1}</p>
        <ul className="space-y-2 mb-6">
          {c.limitsPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium">{c.limitsConclusion}</p>
        </div>
      </section>

      {/* Execution-time evidence as institutional foundation */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.foundationTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.foundationP1}</p>
        <ol className="space-y-2 mb-6">
          {c.foundationSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] font-semibold">{i + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="text-lg text-black/80">{c.foundationConclusion}</p>
      </section>

      {/* An infrastructure, not an institutional prescription */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.infraTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.infraP1}</p>
        <ul className="space-y-2 mb-6">
          {c.infraPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80">{c.infraConclusion}</p>
      </section>

      {/* Control remains institutional */}
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

      {/* Operational impact across institutional functions */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.impactTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.impactP1}</p>
        <ul className="space-y-2 mb-6">
          {c.impactWithoutPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg font-semibold text-black mb-3">{c.impactWithTitle}</p>
        <ul className="space-y-2 mb-6">
          {c.impactWithPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium">{c.impactConclusion}</p>
        </div>
      </section>

      {/* Why this matters over time */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.timeTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.timeP1}</p>
        <p className="text-lg text-black/80">{c.timeConclusion}</p>
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

      <ReadingPath currentSlug="institutional-contexts" lang={params.lang} />
    </article>
  );
}
