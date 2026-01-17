import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    title: 'Preuve vs Reconstruction',
    subtitle: 'La différence entre la preuve au moment de l\'exécution et la reconstruction a posteriori',
    intro: 'De nombreux systèmes prétendent « prouver » ce qui s\'est passé. La plupart ne font que reconstruire. La distinction entre **preuve** et **reconstruction** est souvent floue dans les systèmes opérationnels et institutionnels. **Asplenz Horizon intervient spécifiquement pour écarter la nécessité de la reconstruction.**',
    whatIsTitle: 'Ce qu\'est la reconstruction',
    whatIsP1: 'La reconstruction est le processus consistant à assembler une explication **après** qu\'une décision a été exécutée. Elle s\'appuie généralement sur :',
    whatIsPoints: [
      'des journaux (logs)',
      'des tableaux de bord',
      'des tickets',
      'des alertes',
      'des entretiens',
      'la mémoire humaine',
    ],
    whatIsConclusion: 'La reconstruction produit un récit.',
    whyUnreliableTitle: 'Pourquoi la reconstruction n\'est pas fiable',
    whyUnreliableP1: 'La reconstruction échoue de manière structurelle, et non accidentelle. En effet :',
    whyUnreliablePoints: [
      { title: 'Les systèmes évoluent', desc: 'les configurations, les modèles et les rotations de logs changent.' },
      { title: 'Les signaux disparaissent', desc: 'les données d\'origine sont perdues et les interprétations divergent.' },
      { title: 'L\'interprétation adverse asymétrique', desc: 'L\'examen a lieu alors que le résultat est déjà connu. Sans preuve ancrée, l\'organisation s\'expose à un jugement basé sur des informations dont elle ne disposait pas encore au moment de l\'action (biais de rétrospective).' },
    ],
    whyUnreliableConclusion: 'La reconstruction explique ce qui a *pu* se passer. Elle ne préserve pas ce qui *existait* réellement.',
    chronologyTitle: 'La chronologie contre la narration',
    chronologyP1: 'La reconstruction cherche souvent à fusionner ce qu\'on savait hier et ce qu\'on sait aujourd\'hui dans un récit unique. **Horizon sépare ces faits :** ce qui a été fait (l\'exécution) reste figé au temps T, et ce qui a été pensé plus tard (l\'évaluation tardive) est enregistré à sa propre date de déclaration. Cela garantit que la défense de l\'institution repose sur son état de connaissance réel au moment de l\'action.',
    evidenceTitle: 'Ce qu\'est la preuve au moment de l\'exécution',
    evidenceP1: 'La preuve au moment de l\'exécution est un registre créé **à l\'instant même** où une décision est exécutée. Elle préserve :',
    evidencePoints: [
      'les données d\'entrée présentes à T0',
      'les évaluations produites',
      'la configuration active',
      'le résultat produit',
      'l\'ordonnancement de ces faits',
    ],
    evidenceConclusion: 'Ce registre est disponible **avant** que l\'examen ne commence.',
    changesTitle: 'Ce que Asplenz Horizon change',
    changesP1: 'Horizon n\'améliore pas la reconstruction. Il élimine la nécessité d\'y recourir dans des cas précis en garantissant que :',
    changesPoints: [
      'une décision laisse derrière elle un artefact immuable au moment de l\'exécution.',
      'l\'artefact est préservé indépendamment de l\'évolution du système.',
      'l\'examen ultérieur ne nécessite pas le réassemblage de fragments éparpillés.',
    ],
    changesConclusion: 'Horizon produit de la preuve, pas des explications.',
    postureTitle: 'Posture et périmètre du propos',
    postureP1: 'L\'objectif de ce texte n\'est pas de nier l\'utilité de l\'analyse rétrospective, mais de lui retirer sa fonction de preuve là où l\'exigence de certitude est absolue.',
    posturePoints: [
      { title: 'Supplanter le récit par le fait', desc: 'Horizon rend la reconstruction superflue pour établir la réalité technique et décisionnelle d\'un dossier. Là où Horizon opère, on ne « raconte » plus ce qui a dû se passer ; on produit la preuve de ce qui a eu lieu.' },
      { title: 'Sanctuariser l\'essentiel', desc: 'Horizon n\'a pas vocation à l\'exhaustivité totale (« tout » capturer). Il permet à l\'institution de capturer ce qu\'elle définit comme **institutionnellement examinable**, en se concentrant sur les points de bascule où sa responsabilité est engagée.' },
      { title: 'Établir une autorité factuelle', desc: 'Horizon ne définit pas la « Vérité » au sens moral ou juridique ; il fournit l\'artefact technique immuable qui rend les faits incontestables.' },
    ],
    postureConclusion: 'Horizon n\'est pas un adjuvant à la reconstruction. C\'est l\'infrastructure qui rend cette dernière superflue sur le périmètre critique de l\'organisation.',
    summaryTitle: 'Résumé',
    summaryP1: 'La reconstruction assemble des récits après coup. La preuve est établie avant que les questions ne surgissent. **Asplenz Horizon a été conçu pour préserver la preuve au moment de l\'exécution afin que l\'examen ultérieur ne dépende pas de la seule reconstruction.**',
  },
  en: {
    title: 'Evidence vs Reconstruction',
    subtitle: 'The difference between execution-time evidence and post-hoc reconstruction',
    intro: 'Many systems claim to "prove" what happened. Most merely reconstruct. The distinction between **evidence** and **reconstruction** is often blurred in operational and institutional systems. **Asplenz Horizon is specifically designed to bypass the need for reconstruction.**',
    whatIsTitle: 'What Reconstruction is',
    whatIsP1: 'Reconstruction is the process of assembling an explanation **after** a decision has been executed. It typically relies on:',
    whatIsPoints: [
      'logs',
      'dashboards',
      'tickets',
      'alerts',
      'interviews',
      'human memory',
    ],
    whatIsConclusion: 'Reconstruction produces a narrative.',
    whyUnreliableTitle: 'Why Reconstruction is unreliable',
    whyUnreliableP1: 'Reconstruction fails structurally, not accidentally. Indeed:',
    whyUnreliablePoints: [
      { title: 'Systems evolve', desc: 'configurations, models, and log rotations change over time.' },
      { title: 'Signals disappear', desc: 'original data points are lost, and interpretations begin to diverge.' },
      { title: 'Asymmetric adverse interpretation', desc: 'The examination occurs when the outcome is already known. Without anchored evidence, the organization is exposed to a judgment based on information it did not yet have at the time of action (hindsight bias).' },
    ],
    whyUnreliableConclusion: 'Reconstruction explains what *might* have happened. It does not preserve what actually *existed*.',
    chronologyTitle: 'Chronology vs Narrative',
    chronologyP1: 'Reconstruction often attempts to merge yesterday\'s knowledge and today\'s insights into a single narrative. **Horizon separates these facts:** what was done (execution) remains frozen at Time T, while later assessments (delayed evaluations) are recorded at their own declaration date. This ensures the institution\'s defense rests on its actual state of knowledge at the moment of action.',
    evidenceTitle: 'What Execution-time Evidence is',
    evidenceP1: 'Execution-time evidence is a record created **at the exact moment** a decision is executed. It preserves:',
    evidencePoints: [
      'input data present at the time',
      'evaluations produced',
      'active configuration',
      'the resulting outcome',
      'the sequencing of these facts',
    ],
    evidenceConclusion: 'This record is available **before** the examination begins.',
    changesTitle: 'What Asplenz Horizon changes',
    changesP1: 'Horizon does not improve reconstruction; it eliminates the need for it in specific cases by ensuring that:',
    changesPoints: [
      'a decision leaves behind an immutable artifact at the time of execution.',
      'the artifact is preserved independently of the system\'s evolution.',
      'subsequent examination does not require reassembling scattered fragments.',
    ],
    changesConclusion: 'Horizon produces evidence, not explanations.',
    postureTitle: 'Posture and Scope',
    postureP1: 'The purpose of this argument is not to deny the utility of retrospective analysis, but to strip it of its function as evidence where the requirement for certainty is absolute.',
    posturePoints: [
      { title: 'Replacing Narrative with Fact', desc: 'Horizon makes reconstruction redundant for establishing the technical and decisional reality of a case. Where Horizon operates, one no longer "tells the story" of what must have happened; one produces the evidence of what actually occurred.' },
      { title: 'Securing the Core', desc: 'Horizon does not aim for total exhaustivity (capturing "everything"). It enables the institution to capture what it defines as **institutionally examinable**, focusing on the pivot points where its accountability is at stake.' },
      { title: 'Establishing Factual Authority', desc: 'Horizon does not dictate "Truth" in a moral or legal sense; it provides the immutable technical artifact that makes the facts indisputable.' },
    ],
    postureConclusion: 'Horizon is not a support tool for reconstruction. It is the infrastructure that makes reconstruction unnecessary within the organization\'s critical perimeter.',
    summaryTitle: 'Summary',
    summaryP1: 'Reconstruction assembles narratives after the fact. Evidence is established before questions arise. **Asplenz Horizon was developed to preserve execution-time evidence so that subsequent examination does not depend on reconstruction alone.**',
  },
};

function renderMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

export default function EvidenceVsReconstructionPage({ params }: { params: { lang: Language } }) {
  const c = content[params.lang];

  return (
    <article className="max-w-3xl">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-black mb-4">{c.title}</h1>
      <h2 className="text-xl text-black/70 mb-8">{c.subtitle}</h2>

      {/* Intro */}
      <p className="text-lg text-black/80 mb-8" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.intro) }} />

      {/* What Reconstruction is */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.whatIsTitle}</h3>
        <p className="text-lg text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.whatIsP1) }} />
        <ul className="space-y-2 mb-6">
          {c.whatIsPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg font-semibold text-black">{c.whatIsConclusion}</p>
      </section>

      {/* Why Reconstruction is unreliable */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.whyUnreliableTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.whyUnreliableP1}</p>
        <ul className="space-y-4 mb-6">
          {c.whyUnreliablePoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span><strong>{point.title} :</strong> {point.desc}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.whyUnreliableConclusion) }} />
      </section>

      {/* Chronology vs Narrative */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.chronologyTitle}</h3>
        <p className="text-lg text-black/80" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.chronologyP1) }} />
      </section>

      {/* What Execution-time Evidence is */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.evidenceTitle}</h3>
        <p className="text-lg text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.evidenceP1) }} />
        <ul className="space-y-2 mb-6">
          {c.evidencePoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-black/80" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.evidenceConclusion) }} />
      </section>

      {/* What Asplenz Horizon changes */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.changesTitle}</h3>
        <p className="text-lg text-black/80 mb-4">{c.changesP1}</p>
        <ul className="space-y-2 mb-6">
          {c.changesPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium">👉 {c.changesConclusion}</p>
        </div>
      </section>

      {/* Posture and Scope */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.postureTitle}</h3>
        <p className="text-lg text-black/80 mb-6">{c.postureP1}</p>
        <ul className="space-y-4 mb-6">
          {c.posturePoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-black/80">
              <span className="text-[#005C99] mt-1">•</span>
              <span dangerouslySetInnerHTML={{ __html: `<strong>${point.title} :</strong> ${renderMarkdown(point.desc)}` }} />
            </li>
          ))}
        </ul>
        <div className="bg-[#005C99] text-white p-6">
          <p className="text-lg font-medium">👉 {c.postureConclusion}</p>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-10">
        <hr className="border-t border-black/10 mb-8" />
        <h3 className="text-2xl font-semibold text-black mb-4">{c.summaryTitle}</h3>
        <p className="text-lg text-black/80" dangerouslySetInnerHTML={{ __html: renderMarkdown(c.summaryP1) }} />
      </section>

      <ReadingPath currentSlug="evidence-vs-reconstruction" lang={params.lang} />
    </article>
  );
}
