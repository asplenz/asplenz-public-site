import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  en: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">The Decision Snapshot Artifact</h1>

    <p style="font-size: 1.125rem; line-height: 1.625; color: #52525b; font-style: italic; margin-bottom: 2.5rem;">This page defines the canonical and authoritative definition of a Decision Snapshot Artifact.</p>

    <section style="margin-bottom: 2.5rem;">
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Definition</h2>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">A <strong>Decision Snapshot Artifact</strong> is a self-contained, immutable record that captures the complete factual state of a decision at the moment it becomes irreversible.</p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem;">It is not a log entry.</p>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem;">It is not a trace.</p>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">It is not a report generated after the fact.</p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">It is the <strong>institutional declaration of record</strong>, by the decision-making system itself, of what existed  – inputs, context, evaluation, and output  – at the point of no return.</p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The Decision Snapshot Artifact does not describe a decision.<br/><strong>It is the decision, fixed in time.</strong></p>

      <p style="font-size: 1rem; line-height: 1.625; color: #71717a; font-style: italic;">(Hereafter referred to as the "Snapshot Artifact")</p>
    </section>

    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />

      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Invariant Properties</h2>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">A Decision Snapshot Artifact guarantees five properties that <strong>cannot be altered after creation</strong>.</p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">These properties are not implementation choices.<br/>They are <strong>non-negotiable invariants</strong>.</p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr>
            <th style="text-align: left; padding: 0.75rem; background: #f4f4f5; border-bottom: 2px solid #1e3a8a; font-weight: 600;">Property</th>
            <th style="text-align: left; padding: 0.75rem; background: #f4f4f5; border-bottom: 2px solid #1e3a8a; font-weight: 600;">Guarantee</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: white;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;"><strong>Completeness</strong></td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Contains all inputs, context, evaluations, and outputs that were present at decision time  – nothing must be fetched elsewhere.</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;"><strong>Temporal Integrity</strong></td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Timestamp is cryptographically bound to the record  – the moment of execution cannot be disputed.</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;"><strong>Immutability</strong></td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Once written, the artifact cannot be modified, amended, or deleted.</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;"><strong>Ordering</strong></td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Position in the decision sequence is explicit and verifiable  – what came before, what came after.</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;"><strong>Authenticity</strong></td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Cryptographically signed  – origin and integrity are provable.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />

      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Why Self-Contained</h2>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">A Decision Snapshot Artifact carries everything required to establish what occurred <strong>within itself</strong>.</p>

      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>No external dependencies</strong>  – It does not rely on databases, APIs, or systems that may change or disappear.</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>No reconstruction required</strong>  – The examiner does not need to query other sources to understand what happened.</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>No interpretation required to establish facts</strong>  – The facts are declared, not inferred.</span></li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1rem;">This means:</p>

      <blockquote style="border-left: 4px solid #1e3a8a; padding-left: 1.5rem; margin: 1.5rem 0; font-style: italic;">
        <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;"><strong>Two years later, the artifact alone is sufficient to answer:</strong><br/><em>"What did the system see, evaluate, and decide at that moment?"</em></p>
      </blockquote>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;">If understanding the decision requires fetching data from elsewhere, it is <strong>not</strong> a Decision Snapshot Artifact  – it is a <strong>pointer to a reconstruction</strong>.</p>
    </section>

    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />

      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Why It Survives the Source System</h2>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Systems evolve. Models are retrained. Configurations are updated.<br/>Teams move on. Vendors change. Systems are decommissioned.</p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">A Decision Snapshot Artifact is explicitly designed to <strong>outlive its source</strong>.</p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr>
            <th style="text-align: left; padding: 0.75rem; background: #f4f4f5; border-bottom: 2px solid #1e3a8a; font-weight: 600;">Source system reality</th>
            <th style="text-align: left; padding: 0.75rem; background: #f4f4f5; border-bottom: 2px solid #1e3a8a; font-weight: 600;">Artifact guarantee</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: white;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Model is retrained monthly</td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Artifact contains the model hash and version at T₀.</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Configuration is updated</td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Artifact contains the full configuration state at T₀.</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Database schema changes</td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Artifact contains the snapshot data, not a foreign key.</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">System is decommissioned</td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Artifact remains readable and verifiable independently.</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Vendor relationship ends</td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Artifact has no runtime dependency on the vendor.</td>
          </tr>
        </tbody>
      </table>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1rem;">The Snapshot Artifact does not ask the source system:<br/><em>"What did you do?"</em></p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #000;"><strong>It is the record of what was done.</strong></p>
    </section>

    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />

      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">The Core Principle: Evidence Independence</h2>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Evidence that depends on the continued existence, availability, or cooperation of the source system <strong>is not evidence</strong>.</p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">It is a promise to reconstruct.</p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #000;">A Decision Snapshot Artifact makes no such promise.<br/><strong>It is the evidence.</strong></p>
    </section>
  `,
  fr: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">L'Artefact de Persistance Décisionnelle</h1>

    <p style="font-size: 1.125rem; line-height: 1.625; color: #52525b; font-style: italic; margin-bottom: 2.5rem;">Cette page établit la définition canonique et faisant autorité de l'Artefact de Persistance Décisionnelle.</p>

    <section style="margin-bottom: 2.5rem;">
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Définition</h2>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Un <strong>Artefact de Persistance Décisionnelle</strong> est un enregistrement auto-contenu et immuable qui capture l'état factuel complet d'une décision au moment précis où elle devient irréversible.</p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem;">Ce n'est pas une entrée de log.</p>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem;">Ce n'est pas une trace d'exécution.</p>
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Ce n'est pas un rapport généré après coup.</p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">C'est la <strong>déclaration institutionnelle officielle</strong> du système décisionnel lui-même, faisant foi de ce qui existait  – entrées, contexte, évaluation et sortie  – au point de non-retour.</p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'Artefact de Persistance Décisionnelle ne décrit pas une décision.<br/><strong>Il est la décision, figée dans le temps.</strong></p>

      <p style="font-size: 1rem; line-height: 1.625; color: #71717a; font-style: italic;">(Ci-après dénommé l'« Artefact »)</p>
    </section>

    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />

      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Propriétés Invariantes</h2>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Un Artefact de Persistance Décisionnelle garantit cinq propriétés qui <strong>ne peuvent être altérées après sa création</strong>.</p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Ces propriétés ne sont pas des choix d'implémentation.<br/>Ce sont des <strong>invariants non négociables</strong>.</p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr>
            <th style="text-align: left; padding: 0.75rem; background: #f4f4f5; border-bottom: 2px solid #1e3a8a; font-weight: 600;">Propriété</th>
            <th style="text-align: left; padding: 0.75rem; background: #f4f4f5; border-bottom: 2px solid #1e3a8a; font-weight: 600;">Garantie</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: white;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;"><strong>Exhaustivité</strong></td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Contient toutes les entrées, contextes, évaluations et sorties présents au moment de la décision  – rien ne doit être récupéré ailleurs.</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;"><strong>Intégrité Temporelle</strong></td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">L'horodatage est lié cryptographiquement à l'enregistrement  – le moment exact de l'exécution est indiscutable.</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;"><strong>Immuabilité</strong></td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Une fois écrit, l'artefact ne peut être modifié, amendé ou supprimé.</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;"><strong>Ordonnancement</strong></td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">La position dans la séquence décisionnelle est explicite et vérifiable  – ce qui est arrivé avant, ce qui est arrivé après.</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;"><strong>Authenticité</strong></td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Signé cryptographiquement  – l'origine et l'intégrité sont prouvables.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />

      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Pourquoi l'Auto-Contenu ?</h2>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Un Artefact porte en lui-même tout ce qui est nécessaire pour établir ce qui s'est produit.</p>

      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>Aucune dépendance externe</strong>  – Il ne repose pas sur des bases de données, des API ou des systèmes qui pourraient changer ou disparaître.</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>Aucune reconstitution requise</strong>  – L'examinateur n'a pas besoin de consulter d'autres sources pour comprendre ce qui s'est passé.</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>Aucune interprétation requise pour établir les faits</strong>  – Les faits sont déclarés, pas déduits.</span></li>
      </ul>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1rem;">Cela signifie que :</p>

      <blockquote style="border-left: 4px solid #1e3a8a; padding-left: 1.5rem; margin: 1.5rem 0; font-style: italic;">
        <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;"><strong>Deux ans plus tard, l'artefact seul suffit à répondre :</strong><br/><em>« Qu'est-ce que le système a vu, évalué et décidé à cet instant précis ? »</em></p>
      </blockquote>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;">Si la compréhension de la décision nécessite de récupérer des données ailleurs, ce n'est <strong>pas</strong> un Artefact de Persistance Décisionnelle  – c'est un <strong>pointeur vers une reconstitution</strong>.</p>
    </section>

    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />

      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Pourquoi il survit au système source</h2>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Les systèmes évoluent. Les modèles sont réentraînés. Les configurations sont mises à jour.<br/>Les équipes tournent. Les fournisseurs changent. Les systèmes sont déclassés.</p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'Artefact est explicitement conçu pour <strong>survivre à sa source</strong>.</p>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
        <thead>
          <tr>
            <th style="text-align: left; padding: 0.75rem; background: #f4f4f5; border-bottom: 2px solid #1e3a8a; font-weight: 600;">Réalité du système source</th>
            <th style="text-align: left; padding: 0.75rem; background: #f4f4f5; border-bottom: 2px solid #1e3a8a; font-weight: 600;">Garantie de l'Artefact</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: white;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Modèle réentraîné mensuellement</td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">L'artefact contient le hash et la version du modèle à T₀.</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Configuration mise à jour</td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">L'artefact contient l'état complet de la configuration à T₀.</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Schéma de base de données modifié</td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">L'artefact contient les données du snapshot, pas une clé étrangère.</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Système mis hors service</td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">L'artefact reste lisible et vérifiable de manière indépendante.</td>
          </tr>
          <tr style="background: white;">
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">Fin de relation fournisseur</td>
            <td style="padding: 0.75rem; border-bottom: 1px solid #e4e4e7;">L'artefact n'a aucune dépendance d'exécution envers le fournisseur.</td>
          </tr>
        </tbody>
      </table>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1rem;">L'Artefact ne demande pas au système source :<br/><em>« Qu'as-tu fait ? »</em></p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #000;"><strong>Il est le compte-rendu de ce qui a été fait.</strong></p>
    </section>

    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />

      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Le Principe Fondamental : l'Indépendance de la Preuve</h2>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Une preuve qui dépend de l'existence continue, de la disponibilité ou de la coopération du système source <strong>n'est pas une preuve</strong>.</p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">C'est une promesse de reconstitution.</p>

      <p style="font-size: 1.125rem; line-height: 1.625; color: #000;">L'Artefact de Persistance Décisionnelle ne fait aucune promesse de ce genre.<br/><strong>Il est la preuve.</strong></p>
    </section>
  `
};

export default function DecisionSnapshotArtifactPage({ params }: { params: { lang: Language } }) {
  return (
    <article className="max-w-3xl">
      <div dangerouslySetInnerHTML={{ __html: content[params.lang] }} />
      <ReadingPath currentSlug="decision-snapshot-artifact" lang={params.lang} />
    </article>
  );
}
