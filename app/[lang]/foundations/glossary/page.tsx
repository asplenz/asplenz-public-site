import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

interface GlossaryItem {
  term: string;
  definition: string;
}

const content: Record<'fr' | 'en', { title: string; items: GlossaryItem[] }> = {
  fr: {
    title: 'Glossaire',
    items: [
      {
        term: 'Snapshot Décisionnel (Decision Snapshot)',
        definition: 'Le Snapshot Décisionnel est l\'état factuel complet d\'une décision automatisée au moment exact où elle devient irréversible. Il représente ce qui existait au moment de l\'exécution - et non ce qui est déduit ou reconstruit plus tard.',
      },
      {
        term: 'Artefact de Snapshot Décisionnel (Decision Snapshot Artifact)',
        definition: 'Un Artefact de Snapshot Décisionnel est un enregistrement auto-contenu, immuable et vérifiable qui capture un Snapshot Décisionnel. Il contient toutes les informations nécessaires pour établir l\'état factuel d\'une décision sans dépendre de systèmes externes.',
      },
      {
        term: 'Infrastructure de Snapshot Décisionnel (Decision Snapshot Infrastructure)',
        definition: 'L\'Infrastructure de Snapshot Décisionnel est l\'infrastructure technique conçue pour capturer, préserver et vérifier les Artefacts de Snapshot Décisionnel au moment de l\'exécution. Elle opère indépendamment du cycle de vie ou de l\'évolution du système source.',
      },
      {
        term: 'Preuve à l\'Exécution (Execution-Time Evidence)',
        definition: 'La Preuve à l\'Exécution est une preuve factuelle produite à l\'instant précis où une décision est exécutée. Elle s\'oppose à la reconstruction a posteriori, qui repose sur l\'inférence et l\'interprétation rétrospective.',
      },
      {
        term: 'Capture à l\'Exécution (Execution-Time Capture)',
        definition: 'La Capture à l\'Exécution est l\'acte d\'enregistrer la preuve à l\'exécution au moment de la décision. C\'est un prérequis pour produire des preuves non reconstructives.',
      },
      {
        term: 'Preuve (Evidence)',
        definition: 'Une preuve est une déclaration factuelle de ce qui existait à un moment précis dans le temps. La preuve est établie par la capture à l\'exécution et ne dépend pas d\'une interprétation ou d\'une reconstruction ultérieure.',
      },
      {
        term: 'Reconstruction',
        definition: 'La reconstruction est le processus a posteriori consistant à assembler un récit sur ce qui a pu se passer en utilisant des sources partielles. La reconstruction repose sur l\'inférence, l\'interprétation et la connaissance rétrospective.',
      },
      {
        term: 'Effort de Reconstruction (Reconstruction Effort)',
        definition: 'L\'Effort de Reconstruction désigne le processus opérationnel visant à déduire les états décisionnels passés à partir de logs, de traces, de configurations et de souvenirs humains. Cet effort est intrinsèquement incertain et augmente à mesure que les systèmes évoluent.',
      },
      {
        term: 'Effort Opérationnel (Operational Effort)',
        definition: 'L\'Effort Opérationnel est le temps, la coordination et les ressources cumulés nécessaires pour établir l\'état factuel d\'une décision passée. La preuve à l\'exécution réduit l\'effort opérationnel en éliminant le besoin de reconstruction.',
      },
      {
        term: 'Contexte d\'Exécution (Execution Context)',
        definition: 'Le Contexte d\'Exécution est l\'ensemble des conditions techniques et systémiques dans lesquelles une décision est exécutée. Il peut inclure l\'identité du système, la configuration d\'exécution, les dépendances actives, les seuils et les conditions environnementales.',
      },
      {
        term: 'Système Source (Source System)',
        definition: 'Le Système Source est le système technique qui exécute la décision. Les Artefacts de Snapshot Décisionnel sont conçus pour rester exploitables même si le système source change ou est décommissionné.',
      },
      {
        term: 'Indépendance de la Preuve (Evidence Independence)',
        definition: 'L\'Indépendance de la Preuve est la propriété par laquelle la preuve à l\'exécution reste exploitable sans accès au système source ou à son état futur.',
      },
      {
        term: 'Point de Non-Retour (Point of No Return)',
        definition: 'Le Point de Non-Retour est le moment où une décision devient irréversible et produit des effets durables. La capture à l\'exécution doit avoir lieu au plus tard à ce point.',
      },
      {
        term: 'Complétude (Completeness)',
        definition: 'La Complétude est la propriété garantissant que toutes les entrées pertinentes, le contexte, l\'état de la logique et les résultats présents au moment de l\'exécution sont inclus dans l\'artefact.',
      },
      {
        term: 'Intégrité Temporelle (Temporal Integrity)',
        definition: 'L\'Intégrité Temporelle garantit que l\'artefact est lié cryptographiquement à l\'instant exact de l\'exécution.',
      },
      {
        term: 'Immuabilité (Immutability)',
        definition: 'L\'Immuabilité est la garantie qu\'un Artefact de Snapshot Décisionnel ne peut être modifié, amendé ou supprimé après sa création.',
      },
      {
        term: 'Ordonnancement (Ordering)',
        definition: 'L\'Ordonnancement garantit que la position d\'une décision au sein d\'une séquence d\'exécutions est explicite et vérifiable.',
      },
      {
        term: 'Authenticité (Authenticity)',
        definition: 'L\'Authenticité garantit que l\'origine et l\'intégrité d\'un Artefact de Snapshot Décisionnel peuvent être vérifiées par cryptographie.',
      },
      {
        term: 'Vérifiabilité (Verifiability)',
        definition: 'La Vérifiabilité est la capacité de valider indépendamment l\'intégrité, l\'authenticité et la complétude d\'un artefact sans dépendre du système source.',
      },
      {
        term: 'Attestation',
        definition: 'L\'Attestation est la déclaration formelle d\'un état d\'exécution factuel par le biais d\'un Artefact de Snapshot Décisionnel signé.',
      },
      {
        term: 'Interprétation (Interpretation)',
        definition: 'L\'Interprétation est le processus humain ou institutionnel consistant à attribuer un sens, une responsabilité ou un jugement à une preuve factuelle. L\'interprétation survient après l\'établissement de la preuve à l\'exécution.',
      },
      {
        term: 'Contrôle Institutionnel (Institutional Control)',
        definition: 'Le Contrôle Institutionnel est le principe selon lequel la capture de preuves à l\'exécution ne modifie pas l\'autorité d\'une organisation sur l\'interprétation, le jugement, le périmètre d\'examen ou la communication.',
      },
      {
        term: 'Cycle de Vie de l\'Artefact (Artifact Lifecycle)',
        definition: 'Le Cycle de Vie de l\'Artefact décrit la séquence d\'états d\'un artefact après sa création : vérification, conservation, contrôle d\'accès, archivage ou suppression. Ce cycle est indépendant de celui du système source.',
      },
      {
        term: 'Log (Journal)',
        definition: 'Un Log est un enregistrement généré par le système, conçu pour l\'observabilité ou le débogage. Les logs sont partiels, distribués et ne garantissent pas une preuve complète de l\'exécution.',
      },
      {
        term: 'Trace',
        definition: 'Une Trace est un enregistrement du flux d\'exécution à travers les composants du système. Les traces soutiennent l\'observabilité mais ne constituent pas une preuve à l\'exécution.',
      },
      {
        term: 'Dossier de Décision (Decision Record)',
        definition: 'Un Dossier de Décision est une collection générique d\'informations décrivant une décision. Les dossiers de décision ne sont pas nécessairement auto-contenus, immuables ou vérifiables, et ne doivent pas être confondus avec les Artefacts de Snapshot Décisionnel.',
      },
      {
        term: 'Environnement de Démonstration (Demonstration Environment)',
        definition: 'Un Environnement de Démonstration est tout système actif (test, sandbox ou démo) où la capture à l\'exécution peut être observée. Les preuves capturées dans ces environnements reflètent l\'état factuel de cette exécution spécifique uniquement.',
      },
    ],
  },
  en: {
    title: 'Glossary',
    items: [
      {
        term: 'Decision Snapshot',
        definition: 'A Decision Snapshot is the complete factual state of an automated decision at the moment it becomes irreversible. It represents what existed at execution time - not what is later inferred or reconstructed.',
      },
      {
        term: 'Decision Snapshot Artifact',
        definition: 'A Decision Snapshot Artifact is a self-contained, immutable, and verifiable record that captures a Decision Snapshot. It contains all information required to establish the factual state of a decision without relying on external systems.',
      },
      {
        term: 'Decision Snapshot Infrastructure',
        definition: 'Decision Snapshot Infrastructure is the technical infrastructure designed to capture, preserve, and verify Decision Snapshot Artifacts at execution time. It operates independently of the lifecycle or evolution of the source system.',
      },
      {
        term: 'Execution-Time Evidence',
        definition: 'Execution-Time Evidence is factual evidence produced at the exact moment a decision is executed. It contrasts with post-hoc reconstruction, which relies on inference and retrospective interpretation.',
      },
      {
        term: 'Execution-Time Capture',
        definition: 'Execution-Time Capture is the act of recording execution-time evidence at the moment of decision execution. It is a prerequisite for producing non-reconstructive evidence.',
      },
      {
        term: 'Evidence',
        definition: 'Evidence is a factual declaration of what existed at a specific moment in time. Evidence is established through execution-time capture and does not depend on later interpretation or reconstruction.',
      },
      {
        term: 'Reconstruction',
        definition: 'Reconstruction is the post-hoc process of assembling a narrative about what might have happened using partial sources. Reconstruction relies on inference, interpretation, and retrospective knowledge.',
      },
      {
        term: 'Reconstruction Effort',
        definition: 'Reconstruction Effort refers to the operational process of attempting to infer past decision states from logs, traces, configurations, and human recollection. Reconstruction effort is inherently uncertain and increases as systems evolve.',
      },
      {
        term: 'Operational Effort',
        definition: 'Operational Effort is the cumulative time, coordination, and resources required to establish the factual state of a past decision. Execution-time evidence reduces operational effort by eliminating the need for reconstruction.',
      },
      {
        term: 'Execution Context',
        definition: 'Execution Context is the full set of technical and systemic conditions under which a decision is executed. It may include system identity, runtime configuration, active dependencies, thresholds, and environmental conditions.',
      },
      {
        term: 'Source System',
        definition: 'The Source System is the technical system that executes the decision. Decision Snapshot Artifacts are designed to remain usable even if the source system changes or is decommissioned.',
      },
      {
        term: 'Evidence Independence',
        definition: 'Evidence Independence is the property by which execution-time evidence remains usable without access to the source system or its future state.',
      },
      {
        term: 'Point of No Return',
        definition: 'The Point of No Return is the moment at which a decision becomes irreversible and produces durable effects. Execution-time capture must occur at or before this point.',
      },
      {
        term: 'Completeness',
        definition: 'Completeness is the property that all relevant inputs, context, logic state, and outputs present at execution time are included in the artifact.',
      },
      {
        term: 'Temporal Integrity',
        definition: 'Temporal Integrity ensures that the artifact is cryptographically bound to the exact moment of execution.',
      },
      {
        term: 'Immutability',
        definition: 'Immutability is the guarantee that a Decision Snapshot Artifact cannot be modified, amended, or deleted after creation.',
      },
      {
        term: 'Ordering',
        definition: 'Ordering ensures that the position of a decision within a sequence of executions is explicit and verifiable.',
      },
      {
        term: 'Authenticity',
        definition: 'Authenticity guarantees that the origin and integrity of a Decision Snapshot Artifact can be cryptographically verified.',
      },
      {
        term: 'Verifiability',
        definition: 'Verifiability is the ability to independently validate the integrity, authenticity, and completeness of an artifact without relying on the source system.',
      },
      {
        term: 'Attestation',
        definition: 'Attestation is the formal declaration of a factual execution state through a signed Decision Snapshot Artifact.',
      },
      {
        term: 'Interpretation',
        definition: 'Interpretation is the human or institutional process of assigning meaning, responsibility, or judgment to factual evidence. Interpretation occurs after execution-time evidence is established.',
      },
      {
        term: 'Institutional Control',
        definition: 'Institutional Control is the principle that capturing execution-time evidence does not alter an organization\'s authority over interpretation, judgment, scope of examination, or communication.',
      },
      {
        term: 'Artifact Lifecycle',
        definition: 'Artifact Lifecycle describes the sequence of states a Decision Snapshot Artifact goes through after creation, including verification, retention, access control, archival, or deletion. The artifact lifecycle is independent of the source system lifecycle.',
      },
      {
        term: 'Log',
        definition: 'A Log is a system-generated record designed for observability or debugging. Logs are partial, distributed, and not guaranteed to represent complete execution-time evidence.',
      },
      {
        term: 'Trace',
        definition: 'A Trace is a record of execution flow across system components. Traces support observability but do not constitute execution-time evidence.',
      },
      {
        term: 'Decision Record',
        definition: 'A Decision Record is a generic collection of information describing a decision. Decision records are not necessarily self-contained, immutable, or verifiable and should not be conflated with Decision Snapshot Artifacts.',
      },
      {
        term: 'Demonstration Environment',
        definition: 'A Demonstration Environment is any live system (test, sandbox, or demo) where execution-time capture can be observed. Evidence captured in such environments reflects the factual state of that execution only.',
      },
    ],
  },
};

export default function GlossaryPage({ params }: { params: { lang: Language } }) {
  const c = content[params.lang];

  return (
    <article className="max-w-3xl">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-black mb-8">{c.title}</h1>

      {/* Glossary items */}
      <div className="space-y-8">
        {c.items.map((item, i) => (
          <section key={i} className="border-b border-black/10 pb-6">
            <h3 className="text-xl font-semibold text-black mb-2">{item.term}</h3>
            <p className="text-lg text-black/80">{item.definition}</p>
          </section>
        ))}
      </div>

      <div className="mt-10">
        <ReadingPath currentSlug="glossary" lang={params.lang} />
      </div>
    </article>
  );
}
