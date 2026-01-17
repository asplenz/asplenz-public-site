import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  en: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Glossary</h1>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Decision Snapshot</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">A <strong>Decision Snapshot</strong> is the frozen factual state of a decision at the moment it becomes irreversible. It represents the exact combination of inputs, context, evaluations, and outcome that existed at that point in time, independent of any future system evolution.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Decision Snapshot Artifact</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.75rem;">A <strong>Decision Snapshot Artifact</strong> is a self-contained, immutable, and cryptographically verifiable record that captures a Decision Snapshot. It is the canonical and authoritative representation of what the decision-making system actually executed at the point of no return.</p>
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">A Decision Snapshot Artifact does not describe a decision.</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>It is the decision, fixed in time.</strong></span></li>
      </ul>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Decision Snapshot Infrastructure</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">A <strong>Decision Snapshot Infrastructure</strong> is a system-level capability designed to produce, preserve, and verify Decision Snapshot Artifacts at the moment decisions are executed. Its purpose is not to explain decisions, but to attest to their factual existence.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Evidence</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Evidence</strong> refers to a factual record whose integrity, completeness, authenticity, and temporal validity can be independently verified. Evidence is declared at the time of occurrence, not reconstructed after the fact.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Reconstruction</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Reconstruction</strong> is any attempt to infer, reassemble, or approximate the state of a past decision by querying systems, logs, models, or data sources after the decision has occurred. Reconstruction is inherently dependent on the continued availability and correctness of the source systems.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Log</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">A <strong>Log</strong> is a system-generated record intended for debugging, monitoring, or operational visibility. Logs are partial, mutable, and not designed to serve as authoritative evidence of a decision.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Trace</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">A <strong>Trace</strong> is a sequence of execution events or signals captured during system operation. Traces provide observability but do not declare a complete or authoritative decision state.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Record</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">A <strong>Record</strong> is a generic stored datum or entry. Unless explicitly defined as a Decision Snapshot Artifact, a record does not guarantee completeness, immutability, or verifiability.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Completeness</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Completeness</strong> is the property by which a Decision Snapshot Artifact contains all inputs, contextual parameters, evaluations, and outputs required to establish what occurred, without reliance on external sources.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Temporal Integrity</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Temporal Integrity</strong> is the property by which the exact moment of decision execution is cryptographically bound to the Decision Snapshot Artifact and cannot be altered or disputed.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Immutability</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Immutability</strong> is the guarantee that a Decision Snapshot Artifact cannot be modified, amended, or deleted once created.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Ordering</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Ordering</strong> is the property that establishes the verifiable position of a Decision Snapshot Artifact within a sequence of decisions, including what preceded and followed it.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Authenticity</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Authenticity</strong> is the cryptographic assurance that a Decision Snapshot Artifact originates from the declared system and has not been altered.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Verifiability</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Verifiability</strong> is the ability to independently confirm the integrity, authenticity, completeness, and temporal integrity of a Decision Snapshot Artifact without access to the source system.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Point of No Return</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The <strong>Point of No Return</strong> is the moment at which a decision becomes irreversible and must therefore be captured as a Decision Snapshot Artifact.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Source System</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The <strong>Source System</strong> is the system, model, or process that executed the decision. A Decision Snapshot Artifact is designed to remain valid, readable, and verifiable even after the source system has changed or no longer exists.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Interpretation</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Interpretation</strong> refers to the human or analytical process of deriving meaning, explanation, or justification from a factual record. A Decision Snapshot Artifact does not provide interpretation; it provides attestation.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Attestation</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Attestation</strong> is the act of formally declaring and preserving a factual state such that it can be relied upon independently of the declaring system.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Evidence Independence</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Evidence Independence</strong> is the principle that evidence must not depend on the continued existence, availability, or cooperation of the source system that produced it.</p>
    </section>
  `,
  fr: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Glossaire</h1>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Persistance Décisionnelle</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Un <strong>Persistance Décisionnelle</strong> est l'état factuel figé d'une décision au moment où elle devient irréversible. Il représente la combinaison exacte des entrées, du contexte, des évaluations et du résultat qui existaient à cet instant précis, indépendamment de toute évolution future du système.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Artefact de Persistance Décisionnelle</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.75rem;">Un <strong>Artefact de Persistance Décisionnelle</strong> est un enregistrement auto-contenu, immuable et vérifiable par cryptographie qui capture un Persistance Décisionnelle. Il constitue la représentation canonique et faisant autorité de ce que le système décisionnel a réellement exécuté au point de non-retour.</p>
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Un Artefact de Persistance Décisionnelle ne décrit pas une décision.</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>Il est la décision, figée dans le temps.</strong></span></li>
      </ul>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Infrastructure de Persistance Décisionnelle</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Une <strong>Infrastructure de Persistance Décisionnelle</strong> est une capacité au niveau système conçue pour produire, préserver et vérifier des Artefacts de Persistance Décisionnelle au moment de l'exécution des décisions. Son but n'est pas d'expliquer les décisions, mais d'attester de leur existence factuelle.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Preuve</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La <strong>Preuve</strong> désigne un enregistrement factuel dont l'intégrité, l'exhaustivité, l'authenticité et la validité temporelle peuvent être vérifiées de manière indépendante. La preuve est déclarée au moment de l'événement, et non reconstituée après coup.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Reconstitution</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La <strong>Reconstitution</strong> est toute tentative de déduire, réassembler ou approximer l'état d'une décision passée en interrogeant des systèmes, des logs, des modèles ou des sources de données après que la décision a eu lieu. La reconstitution est intrinsèquement dépendante de la disponibilité continue et de l'exactitude des systèmes sources.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Log (Journal)</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Un <strong>Log</strong> est un enregistrement généré par le système destiné au débogage, à la surveillance ou à la visibilité opérationnelle. Les logs sont partiels, mutables et ne sont pas conçus pour servir de preuve d'autorité pour une décision.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Trace</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Une <strong>Trace</strong> est une séquence d'événements ou de signaux d'exécution capturés pendant le fonctionnement du système. Les traces offrent une observabilité mais ne déclarent pas un état décisionnel complet ou faisant autorité.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Enregistrement (Record)</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Un <strong>Enregistrement</strong> est une donnée ou une entrée stockée de manière générique. À moins d'être explicitement défini comme un Artefact de Persistance Décisionnelle, un enregistrement ne garantit ni l'exhaustivité, ni l'immuabilité, ni la vérifiabilité.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Exhaustivité</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'<strong>Exhaustivité</strong> est la propriété par laquelle un Artefact de Persistance Décisionnelle contient toutes les entrées, paramètres contextuels, évaluations et sorties nécessaires pour établir ce qui s'est produit, sans recours à des sources externes.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Intégrité Temporelle</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'<strong>Intégrité Temporelle</strong> est la propriété par laquelle le moment exact de l'exécution de la décision est lié cryptographiquement à l'Artefact de Persistance Décisionnelle et ne peut être altéré ou contesté.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Immuabilité</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'<strong>Immuabilité</strong> est la garantie qu'un Artefact de Persistance Décisionnelle ne peut être modifié, amendé ou supprimé une fois créé.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Ordonnancement</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'<strong>Ordonnancement</strong> est la propriété qui établit la position vérifiable d'un Artefact de Persistance Décisionnelle au sein d'une séquence de décisions, incluant ce qui l'a précédé et ce qui l'a suivi.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Authenticité</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'<strong>Authenticité</strong> est l'assurance cryptographique qu'un Artefact de Persistance Décisionnelle provient bien du système déclaré et n'a pas été altéré.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Vérifiabilité</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La <strong>Vérifiabilité</strong> est la capacité de confirmer de manière indépendante l'intégrité, l'authenticité, l'exhaustivité et l'intégrité temporelle d'un Artefact de Persistance Décisionnelle sans accès au système source.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Point de Non-Retour</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Le <strong>Point de Non-Retour</strong> est le moment où une décision devient irréversible et doit donc être capturée sous forme d'Artefact de Persistance Décisionnelle.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Système Source</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Le <strong>Système Source</strong> est le système, le modèle ou le processus qui a exécuté la décision. Un Artefact de Persistance Décisionnelle est conçu pour rester valide, lisible et vérifiable même après que le système source a changé ou a cessé d'exister.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Interprétation</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'<strong>Interprétation</strong> désigne le processus humain ou analytique consistant à dériver une signification, une explication ou une justification à partir d'un enregistrement factuel. Un Artefact de Persistance Décisionnelle ne fournit pas d'interprétation ; il fournit une attestation.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Attestation</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'<strong>Attestation</strong> est l'acte de déclarer formellement et de préserver un état factuel de telle sorte qu'il puisse faire foi indépendamment du système qui l'a déclaré.</p>
    </section>

    <section style="margin-bottom: 2.5rem;">
      <h3 style="font-size: 1.25rem; font-weight: 700; color: #000; margin-bottom: 0.75rem;">Indépendance de la Preuve</h3>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'<strong>Indépendance de la Preuve</strong> est le principe selon lequel une preuve ne doit pas dépendre de l'existence continue, de la disponibilité ou de la coopération du système source qui l'a produite.</p>
    </section>
  `
};

export default function GlossaryPage({ params }: { params: { lang: Language } }) {
  return (
    <article className="max-w-3xl">
      <div dangerouslySetInnerHTML={{ __html: content[params.lang] }} />
      <ReadingPath currentSlug="glossary" lang={params.lang} />
    </article>
  );
}
