import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  en: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Horizon: Technical Capabilities</h1>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">A factual evidence infrastructure (intra-perimeter)</h2>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What it records</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Two types of declared facts, strictly separated:</p>
    
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
      <p style="font-size: 1.125rem; line-height: 1.625; margin-bottom: 0; color: #18181b;"><strong>Design Principle:</strong> An evaluation is an evidentiary artifact; it is functionally independent of the execution path. Horizon documents the <em>why</em> without participating in the <em>what</em>.</p>
    </blockquote>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Contexts where this applies</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">This infrastructure is agnostic to the decision source. It applies whenever a specific decision or action may later require case-by-case examination.</p>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">AI-assisted decisions</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">AI-assisted systems increasingly inform or produce decisions. When those decisions are later examined by Risk, Audit, Legal, or regulators, the question is not only about model performance, but about <strong>what actually happened in that specific case</strong>.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The same approach captures executions and evaluations from AI-assisted workflows at execution time, immutably, before any question arises. This supports a shift from outcome-based testing (the "right" answer) to <strong>behavior-based examinability</strong>: what did the system see, evaluate, and decide, and when?</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Asplenz Horizon does not replace AI governance frameworks such as the EU AI Act or CDMC. It provides the <strong>evidence layer</strong> that allows those frameworks to be demonstrated in real, case-by-case examinations.</p>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">Automated decision workflows</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Risk engines, eligibility rules, throttling, and automated outcomes are recorded as declared executions. Optional evaluations preserve the organizational stance at time T.</p>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">Human-in-the-loop escalations</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">When automated outcomes escalate to humans, the original execution reference is propagated through existing channels: alerts, tickets, or consoles. Human decisions are recorded as evaluations linked to the triggering execution, preserving a single factual chain.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">How automated and human decisions become examinable as one</h3>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Automated systems produce <strong>declared executions</strong>, each identified by a stable execution reference.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>When a situation escalates, this reference is propagated through the organization's existing channels.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Any human decision taken in response is recorded as a <strong>declared evaluation</strong>, explicitly linked to the original execution.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Subsequent actions may reference either or both, preserving a <strong>single factual chain</strong>.</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Facts are linked by explicit references, not reconstructed through interfaces or workflows.</strong></p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Properties</h3>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Append-only</strong>: no edits, no deletes.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Ordering</strong>: explicit chronology.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Integrity</strong>: verifiable records.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Intra-perimeter</strong>: deployable on-premise or in private cloud.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Non-intrusive</strong>: not in the critical execution path.</span></li>
    </ul>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What it is NOT</h3>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Not observability or monitoring.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Not SIEM.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Not a workflow tool.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Not a decision-making system.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Not compliance automation.</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">(See also: <a href="/en/principles-boundaries" style="color: #18181b; text-decoration: underline;">Principles & Boundaries</a>)</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Operational Dividend</strong><br>In practice, these same facts are often used daily to avoid transaction reconstruction, without turning the infrastructure into an operations tool.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Deployment</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon is designed to operate entirely within an institution's trust perimeter.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon can be deployed in different modalities depending on institutional constraints and integration preferences. These modalities do not change the conceptual scope of Horizon: they affect how execution evidence is produced and managed operationally, not what Horizon exists to establish.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The choice of deployment modality is addressed during technical discussions and depends on performance, isolation, and operational requirements.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Technical documentation</strong> describing deployment modes, integration boundaries, and performance considerations is available upon request: contact@asplenz.com</p>
  `,
  fr: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Horizon: Capacités Techniques</h1>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Une infrastructure de preuve factuelle (intra-périmètre)</h2>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce qu'il consigne</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Deux types de faits déclarés, strictement séparés :</p>
    
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
      <p style="font-size: 1.125rem; line-height: 1.625; margin-bottom: 0; color: #18181b;"><strong>Principe de conception :</strong> Une évaluation est un artefact de preuve ; elle est fonctionnellement indépendante du chemin d'exécution. Horizon documente le <em>pourquoi</em> sans participer au <em>quoi</em>.</p>
    </blockquote>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Contextes d'application</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Cette infrastructure est agnostique quant à la source de décision. Elle s'applique chaque fois qu'une décision ou action spécifique peut nécessiter un examen au cas par cas.</p>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">Décisions assistées par IA</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Les systèmes assistés par IA informent ou produisent de plus en plus de décisions. Lorsque ces décisions sont examinées par les Risques, l'Audit, le Juridique ou les régulateurs, la question ne porte pas seulement sur la performance du modèle, mais sur <strong>ce qui s'est réellement passé dans ce cas spécifique</strong>.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La même approche capture les exécutions et évaluations des flux assistés par IA au moment de l'exécution, de manière immuable, avant que toute question ne surgisse. Cela favorise un passage des tests basés sur les résultats (la "bonne" réponse) à l'<strong>examinabilité basée sur le comportement</strong> : qu'a vu, évalué et décidé le système, et quand ?</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Asplenz Horizon ne remplace pas les cadres de gouvernance de l'IA tels que l'EU AI Act ou CDMC. Il fournit la <strong>couche de preuve</strong> qui permet de démontrer ces cadres dans des examens réels, cas par cas.</p>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">Flux de décisions automatisées</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Les moteurs de risque, règles d'éligibilité, régulation de flux et résultats automatisés sont enregistrés comme exécutions déclarées. Les évaluations optionnelles préservent la posture organisationnelle à l'instant T.</p>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">Escalades avec intervention humaine</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Lorsque des résultats automatisés sont escaladés vers des humains, la référence d'exécution d'origine est propagée via les canaux existants : alertes, tickets ou consoles. Les décisions humaines sont enregistrées comme évaluations liées à l'exécution déclencheuse, préservant une chaîne factuelle unique.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Comment les décisions automatisées et humaines deviennent examinables comme un tout</h3>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Les systèmes automatisés produisent des <strong>exécutions déclarées</strong>, chacune identifiée par une référence d'exécution stable.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Lorsqu'une situation est escaladée, cette référence est propagée via les canaux existants de l'organisation.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Toute décision humaine prise en réponse est enregistrée comme une <strong>évaluation déclarée</strong>, explicitement liée à l'exécution d'origine.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Les actions ultérieures peuvent référencer l'une ou l'autre, préservant une <strong>chaîne factuelle unique</strong>.</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Les faits sont liés par des références explicites, non reconstruits via des interfaces ou flux de travail.</strong></p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Propriétés</h3>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Ajout exclusif</strong> : pas de modifications, pas de suppressions.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Ordonnancement</strong> : chronologie explicite.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Intégrité</strong> : registres vérifiables.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Intra-périmètre</strong> : déployable sur site ou en cloud privé.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Non-intrusif</strong> : pas sur le chemin critique d'exécution.</span></li>
    </ul>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce que ce N'EST PAS</h3>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem;  margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ni observabilité ou monitoring.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ni SIEM.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ni outil de workflow.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ni système de prise de décision.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ni automatisation de la conformité.</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">(Voir aussi : <a href="/fr/principles-boundaries" style="color: #18181b; text-decoration: underline;">Principes & Limites</a>)</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Dividende opérationnel</strong><br>En pratique, ces mêmes faits sont souvent utilisés quotidiennement pour éviter la reconstruction de transactions, sans transformer l'infrastructure en outil opérationnel.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Déploiement</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon est conçu pour opérer entièrement au sein du périmètre de confiance d'une institution.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon peut être déployé selon différentes modalités en fonction des contraintes institutionnelles et des préférences d'intégration. Ces modalités ne modifient pas le périmètre conceptuel d'Horizon : elles affectent la manière dont la preuve d'exécution est produite et gérée opérationnellement, pas ce qu'Horizon existe pour établir.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Le choix de la modalité de déploiement est abordé lors des discussions techniques et dépend des exigences de performance, d'isolation et opérationnelles.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>La documentation technique</strong> décrivant les modes de déploiement, les limites d'intégration et les considérations de performance est disponible sur demande : contact@asplenz.com</p>
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
