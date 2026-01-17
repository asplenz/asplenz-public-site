import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  en: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Horizon: Technical Capabilities</h1>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">A Decision Snapshot Infrastructure (intra-perimeter)</h2>

    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What it records</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon records <strong>Decision Snapshots</strong>, encapsulated in immutable and self-contained <strong>Artifacts</strong>. These snapshots consist of two types of declared facts, strictly separated:</p>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">1) Executions</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">An execution is <strong>an irreversible act</strong>:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>An automated decision applied</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>A human authorization</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>A choice to continue or suspend</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>A publication, override, or acceptance</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Executions record what happened, in a declared context, at time T.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">2) Evaluations & Chronological Anchoring</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">An evaluation is an <strong>evidentiary record of judgment</strong> captured at Time T. It documents the organizational stance (human or policy-based) that contextualizes a specific factual event.</p>
    
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Functional Decoupling:</strong> Horizon is functionally independent of the operational execution path. It records the evaluation without ever intervening in the system's workflow.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Point-in-Time Binding:</strong> Evaluations are bound to factual triggers at the exact moment they are produced. This ensures the "state of knowledge" is frozen, preventing any post-hoc justification or hindsight bias.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Sequential Integrity:</strong> Every evaluation is treated as an immutable block. It proves what the organization judged to be true at Time T, regardless of the eventual outcome.</span></li>
    </ul>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1rem;"><strong>Captured Stance Attributes:</strong></p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Severity classification</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Risk acceptance</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Declared basis (The rationale used at that specific moment)</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Confidence level</span></li>
    </ul>
    
    <blockquote style="border-left: 4px solid #1e3a8a; padding: 1.5rem 2rem; background: #fafafa; font-style: italic; margin: 2rem 0;">
      <p style="font-size: 1.125rem; line-height: 1.625; margin-bottom: 0; color: #18181b;"><strong>Design Principle:</strong> A <strong>Decision Snapshot Artifact</strong> is the evidence itself. It carries everything required to establish what occurred within itself, ensuring absolute independence from the source system's future state.</p>
    </blockquote>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Contexts where this applies</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">This infrastructure is agnostic to the decision source. It applies whenever a specific decision or action may later require case-by-case examination.</p>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">AI-assisted decisions</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The same approach captures executions and evaluations from AI-assisted workflows at execution time, immutably, before any question arises. This supports a shift from outcome-based testing to <strong>behavior-based examinability</strong>: what did the system see, evaluate, and decide, and when?</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Asplenz Horizon does not replace AI governance frameworks (EU AI Act, CDMC). It provides the <strong>evidence layer</strong> that allows those frameworks to be demonstrated in real, case-by-case examinations.</p>

    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">Automated decision workflows</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Risk engines and eligibility rules are recorded as declared executions. Optional evaluations preserve the organizational stance at time T.</p>

    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">Human-in-the-loop escalations</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">When automated outcomes escalate, the original execution reference is propagated. Human decisions are recorded as evaluations linked to the triggering execution, preserving a <strong>single factual chain</strong>.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>

    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Properties</h3>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Self-contained</strong>: Everything needed for verification is inside the artifact (no reliance on external databases).</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Append-only</strong>: No edits, no deletes.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Ordering</strong>: Explicit and verifiable chronology.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Integrity</strong>: Cryptographically signed records (Ed25519).</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Intra-perimeter</strong>: Deployable on-premise or in private cloud.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Non-intrusive</strong>: Outside the critical execution path.</span></li>
    </ul>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What it is NOT</h3>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Not observability or monitoring.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Not SIEM.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Not a workflow tool.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Not a decision-making system.</span></li>
    </ul>

    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>

    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Common questions</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem;"><strong>We already capture execution-time facts and generate artefacts. Why is this not sufficient?</strong></p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Most systems generate traces that depend on the source system's current state (database, API, version). If the system evolves, the trace requires a complex and uncertain <strong>reconstruction</strong>. Horizon produces <strong>Decision Snapshot Artifacts</strong> that are <strong>independently verifiable</strong>: they remain valid and readable even after the model is retrained, the database schema changes, or the source system is decommissioned.</p>
  `,
  fr: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Horizon : Capacités Techniques</h1>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Une Infrastructure de Persistance Décisionnelle (intra-périmètre)</h2>

    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce qu'il consigne</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon consigne des <strong>Snapshots Décisionnels</strong>, encapsulés dans des <strong>Artefacts</strong> immuables et auto-contenus. Ces snapshots se composent de deux types de faits déclarés, strictement séparés :</p>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">1) Les exécutions</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Une exécution est <strong>un acte irréversible</strong> :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Une décision automatisée appliquée</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Une autorisation humaine</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Un choix de poursuite ou de suspension</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Une publication, un passage outre (override) ou une acceptation</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Les exécutions consignent ce qui s'est produit, dans un contexte déclaré, à l'instant T.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">2) Les évaluations et l'ancrage chronologique</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Une évaluation est un <strong>acte de jugement consigné</strong> à l'instant T. Elle documente la posture organisationnelle (humaine ou réglementaire) qui contextualise un fait précis.</p>
    
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Indépendance fonctionnelle :</strong> Horizon est déconnecté du flux d'exécution opérationnel. Il consigne l'évaluation sans jamais interférer avec le déroulement du système.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Lien indissociable :</strong> Les évaluations sont liées aux déclencheurs factuels au moment exact de leur production. Cela fige « l'état des connaissances », interdisant toute reconstruction a posteriori ou biais de rétrospective.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Intégrité séquentielle :</strong> Chaque évaluation est traitée comme un bloc immuable. Elle prouve ce que l'organisation jugeait vrai à l'instant T, indépendamment du résultat final.</span></li>
    </ul>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1rem;"><strong>Attributs de posture consignés :</strong></p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Classification de sévérité</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Acceptation du risque</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Fondement déclaré (Le raisonnement à cet instant précis)</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Niveau de confiance</span></li>
    </ul>
    
    <blockquote style="border-left: 4px solid #1e3a8a; padding: 1.5rem 2rem; background: #fafafa; font-style: italic; margin: 2rem 0;">
      <p style="font-size: 1.125rem; line-height: 1.625; margin-bottom: 0; color: #18181b;"><strong>Principe de conception :</strong> L'<strong>Artefact de Persistance Décisionnelle</strong> est la preuve elle-même. Il porte en lui-même tout ce qui est nécessaire pour établir ce qui s'est produit, garantissant une indépendance absolue vis-à-vis de l'évolution future du système source.</p>
    </blockquote>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Contextes d'application</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Ce dispositif est agnostique vis-à-vis de la source de décision.</p>

    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">Décisions assistées par l'IA</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Cette approche capture les exécutions et les évaluations des flux d'IA au moment de l'exécution, de manière immuable. Cela permet de passer d'un test basé sur le résultat à une <strong>examinabilité comportementale</strong> : qu'est-ce que le système a vu, évalué et décidé, et à quel moment ?</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Asplenz Horizon fournit la <strong>couche de preuve</strong> qui permet de démontrer l'application des cadres de gouvernance (IA Act, CDMC) lors d'examens réels.</p>

    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">Flux de décisions automatisés</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Les moteurs de risques et les règles d'éligibilité sont consignés en tant qu'exécutions. Des évaluations optionnelles préservent la posture organisationnelle à l'instant T.</p>

    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">Escalades vers l'humain (Human-in-the-loop)</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">En cas d'escalade, la référence d'exécution d'origine est propagée. Toute décision humaine est consignée comme une évaluation liée à l'exécution déclencheuse, préservant une <strong>chaîne factuelle unique</strong>.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>

    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Propriétés</h3>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Auto-contenu</strong> : Tout ce qui est nécessaire à la vérification est dans l'artefact (pas de dépendance aux bases de données externes).</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Ajout exclusif (Append-only)</strong> : Ni modification, ni suppression.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Séquençage</strong> : Chronologie explicite et vérifiable.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Intégrité</strong> : Registres signés cryptographiquement (Ed25519).</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Intra-périmètre</strong> : Déploiement on-premise ou cloud privé.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Non-intrusif</strong> : Hors du chemin critique d'exécution.</span></li>
    </ul>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce que ceci n'est PAS</h3>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ni observabilité, ni monitoring.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ni SIEM.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ni outil de gestion de flux (workflow).</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ni système de prise de décision.</span></li>
    </ul>

    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>

    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Questions fréquentes</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 0.5rem;"><strong>Nous capturons déjà des faits à l'exécution et générons des artefacts. Pourquoi cela ne suffit-il pas ?</strong></p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La plupart des systèmes génèrent des traces dépendantes de l'état actuel du système (base de données, API, version). Si le système évolue, la trace nécessite une <strong>reconstitution</strong> complexe et incertaine. Horizon produit des <strong>Artefacts de Persistance Décisionnelle</strong> qui sont <strong>vérifiables de manière indépendante</strong> : ils restent valides et lisibles même après le réentraînement d'un modèle, un changement de schéma de base de données ou le décommissionnement du système source.</p>
  `
};

export default function HorizonTechnicalCapabilitiesPage({ params }: { params: { lang: Language } }) {
  return (
    <article className="max-w-3xl">
      <div dangerouslySetInnerHTML={{ __html: content[params.lang] }} />
      <ReadingPath currentSlug="horizon-technical-capabilities" lang={params.lang} />
    </article>
  );
}
