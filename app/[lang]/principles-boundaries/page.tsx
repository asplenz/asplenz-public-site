import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

const content = {
  en: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Principles & Boundaries</h1>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Principles, boundaries, and non-goals</h2>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Reconstruction is valuable, until it becomes the object of contestation.</strong> These principles are not design preferences. They exist because, in formal examination contexts, flexibility becomes a liability: evidence must be created at the moment of execution, not rebuilt later.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">We use the term <strong>Execution Evidence Infrastructure (EEI)</strong> to describe this capability: a dedicated evidence layer that creates examinable facts at execution time, independently of later audits, investigations, or reconstructions. (Descriptive, non-normative terminology.)</p>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Non-negotiable principles</h3>
    <ol style="list-style: decimal; padding-left: 1.5rem; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem; padding-left: 1.25rem;"><strong>Evidence at time T</strong> (point of no return)<br>Prevents retrospective reconstruction from becoming "the evidence" by producing facts when the action occurs.</li>
      <li style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem; padding-left: 1.25rem;"><strong>Append-only</strong> records<br>Eliminates ambiguity about edits, deletions, or rewrites. Evidence can be trusted without relying on narratives.</li>
      <li style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem; padding-left: 1.25rem;"><strong>Agnostic to agent</strong> (human or machine)<br>Preserves a single factual chain across automated decisions and human interventions, with no handoff gap.</li>
      <li style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem; padding-left: 1.25rem;"><strong>Non-intrusive</strong> (no gating, no decision influence)<br>Ensures evidence capture does not act as a control point. It is designed to avoid altering outcomes or workflows, and to minimize overhead. The evidence layer stays observational.</li>
      <li style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem; padding-left: 1.25rem;"><strong>Strict separation</strong>: execution vs evaluation<br>Keeps "what happened" distinct from "what was assessed," so later examination can separate action from interpretation.</li>
      <li style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem; padding-left: 1.25rem;"><strong>Independent verification</strong> (including offline)<br>Integrity can be checked from exported evidence artefacts (case bundles) without trusting the producing systems, and without requiring access to the vendor or runtime when scrutiny is highest.</li>
    </ol>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Clear non-goals</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">These non-goals are deliberate. They preserve Horizon's role as an evidence layer, orthogonal to operational tooling, so evidence remains stable even as systems evolve.</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Not an investigation platform</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Not observability or SIEM</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Not a case-management workflow</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Not a compliance tool</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Not a "single pane of glass" for operations</span></li>
    </ul>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Why logs + tickets are not equivalent</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Logs and tickets can support reconstruction. They do not create immutable, ordered, declared evidence at time T. When scrutiny is case-specific, the question is no longer "what usually happens," but "what exactly happened here," and reconstruction itself becomes contestable.</p>
  `,
  fr: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Principes & Limites</h1>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Principes, périmètres et objectifs exclus</h2>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>La reconstruction est précieuse, jusqu'à ce qu'elle devienne l'objet de la contestation.</strong> Ces principes ne sont pas des préférences de conception. Ils existent car, dans les contextes d'examen formel, la flexibilité devient une vulnérabilité : la preuve doit être créée au moment de l'exécution, et non reconstruite a posteriori.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Nous utilisons le terme <strong>Infrastructure de Preuve d'Exécution (EEI)</strong> pour décrire ce dispositif : une couche de preuve dédiée qui crée des faits examinables au moment de l'exécution, indépendamment des audits, enquêtes ou reconstructions ultérieurs. (Terminologie descriptive et non normative.)</p>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Principes non négociables</h3>
    <ol style="list-style: decimal; padding-left: 1.5rem; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem; padding-left: 1.25rem;"><strong>La preuve à l'instant T</strong> (point de non-retour)<br>Empêche la reconstruction rétrospective de devenir « la preuve » en produisant des faits au moment même où l'action survient.</li>
      <li style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem; padding-left: 1.25rem;"><strong>Registres en ajout exclusif</strong> (append-only)<br>Élimine toute ambigüité concernant les modifications, les suppressions ou les réécritures. La preuve peut être considérée comme fiable sans dépendre de récits a posteriori.</li>
      <li style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem; padding-left: 1.25rem;"><strong>Agnostique vis-à-vis de l'agent</strong> (humain ou machine)<br>Préserve une chaîne factuelle unique entre les décisions automatisées et les interventions humaines, sans rupture de continuité.</li>
      <li style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem; padding-left: 1.25rem;"><strong>Non-intrusivité</strong> (pas de filtrage, aucune influence sur la décision)<br>Garantit que la capture de la preuve n'agit pas comme un point de contrôle. Le dispositif est conçu pour ne modifier ni les résultats ni les flux de travail, et pour minimiser la charge système. La couche de preuve reste purement observationnelle.</li>
      <li style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem; padding-left: 1.25rem;"><strong>Séparation stricte</strong> : exécution vs évaluation<br>Distingue « ce qui s'est passé » de « ce qui a été évalué », afin que l'examen ultérieur puisse séparer l'action de son interprétation.</li>
      <li style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem; padding-left: 1.25rem;"><strong>Vérification indépendante</strong> (y compris hors ligne)<br>L'intégrité peut être vérifiée à partir d'artefacts de preuve exportés (dossiers de preuves) sans avoir à accorder sa confiance aux systèmes d'origine, et sans nécessiter d'accès au fournisseur ou à l'environnement d'exécution au moment où l'examen est le plus critique.</li>
    </ol>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Objectifs exclus délibérément</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Ces exclusions sont volontaires. Elles préservent le rôle d'Horizon en tant que couche de preuve, orthogonale aux outils opérationnels, afin que la preuve reste stable même lorsque les systèmes évoluent.</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ni plateforme d'enquête</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ni observabilité ou SIEM</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ni flux de gestion de dossiers (case-management)</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ni outil de conformité</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ni console de supervision opérationnelle unique</span></li>
    </ul>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Pourquoi les logs et les tickets ne sont pas équivalents</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Les logs et les tickets facilitent la reconstruction. Ils ne créent pas une preuve déclarée, ordonnée et immuable à l'instant T. Lorsqu'un examen porte sur un cas spécifique, la question n'est plus « que se passe-t-il habituellement », mais « que s'est-il passé exactement ici », et la reconstruction elle-même devient alors contestable.</p>
  `
};

export default function PrinciplesBoundariesPage({ params }: { params: { lang: Language } }) {
  return (
    <article className="max-w-3xl">
      <div dangerouslySetInnerHTML={{ __html: content[params.lang] }} />
      <ReadingPath currentSlug="principles-boundaries" lang={params.lang} />
    </article>
  );
}
