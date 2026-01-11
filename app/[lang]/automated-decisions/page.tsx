import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  en: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Automated Decisions</h1>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Why automated decisions create a specific evidence problem</h2>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Automated systems execute decisions continuously, at high frequency, and without human intervention. In these environments, the original execution context is often transient. By the time a decision is examined, the inputs, configuration, or model state that produced it may no longer exist.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Traditional logging and observability capture activity and aggregates. They do not preserve the decision context as it existed at execution time. Asplenz Horizon addresses this gap by preserving execution-time evidence for selected automated decisions, without explaining models or evaluating outcomes.</p>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">The automated decision boundary</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">An automated decision is considered at the point where:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>inputs are evaluated</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>rules or models are applied</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>an output is executed</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Asplenz Horizon operates at this boundary.</strong> It does not observe upstream data generation. It does not observe downstream impact.</p>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Examples of automated decisions</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Automated decisions with material effects include:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>fraud detection</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>ranking and allocation</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>pricing and regulation of flows (throttling)</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>content moderation</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>access control</span></li>
    </ul>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Why evidence is lost in automated systems</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">In automated environments:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>inputs are transient</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>models are retrained</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>parameters drift</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>configurations are overwritten</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>execution context is ephemeral</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">By the time a decision is questioned, the system that produced it may no longer exist in the same state. Logs show activity. Metrics show aggregates. <strong>Neither preserves decision context.</strong></p>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">The execution-time artefact</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">For each selected automated decision, Horizon preserves an immutable artefact containing:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>execution timestamp and strict ordering guarantees</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>observed inputs as seen by the decision system</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>rule set or model identifier</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>configuration state and thresholds</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>evaluation signals present at execution time</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>output produced</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Independence from system lifecycle</strong><br>This artefact exists independently of the system that produced it. It does not depend on model retraining, log retention, dashboards, or human memory.</p>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What Asplenz Horizon does not attempt (by design)</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Combining evidence preservation with interpretation introduces institutional risk. Asplenz Horizon avoids this by remaining strictly neutral. It does not attempt to:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>explain why a model behaved as it did or justify outcomes</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>assess bias, fairness, or correctness</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>provide counterfactuals or enforce governance</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>replace monitoring or observability</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Horizon preserves facts, not interpretations. Any such analysis occurs outside the infrastructure.</strong></p>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Summary</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Automation accelerates decision-making. It also accelerates evidence loss. Automated decisions require execution-time evidence because reconstruction becomes unreliable as systems evolve.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Asplenz Horizon ensures that, when examination is required, immutable decision artefacts already exist.</strong></p>
  `,
  fr: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Décisions Automatisées</h1>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Pourquoi l'automatisation crée un problème de preuve spécifique</h2>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Les systèmes automatisés exécutent des décisions en continu, à haute fréquence et sans intervention humaine. Dans ces environnements, le contexte d'exécution d'origine est souvent fugace. Au moment où une décision est examinée, les données d'entrée, la configuration ou l'état du modèle qui l'a produite peuvent avoir disparu.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Les journaux d'activité (logs) et l'observabilité traditionnelle capturent l'activité et des agrégats. Ils ne préservent pas le contexte décisionnel tel qu'il existait au moment de l'action. Asplenz Horizon comble cette lacune en préservant la preuve au moment de l'exécution pour des décisions automatisées ciblées, sans expliquer les modèles ni évaluer les résultats.</p>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Le périmètre de la décision automatisée</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Une décision automatisée est considérée au point précis où :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>les données d'entrée sont évaluées</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>les règles ou les modèles sont appliqués</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>un résultat est exécuté</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Asplenz Horizon opère à cette frontière.</strong> Il n'observe ni la génération des données en amont, ni l'impact opérationnel en aval.</p>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Exemples de décisions automatisées</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Les décisions automatisées ayant des effets matériels incluent :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>la détection de fraude</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>le classement et l'allocation</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>la tarification et la régulation de flux</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>la modération de contenu</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>le contrôle d'accès</span></li>
    </ul>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Pourquoi la preuve se perd dans les systèmes automatisés</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Dans les environnements automatisés :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>les données d'entrée sont transitoires</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>les modèles sont réentraînés</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>les paramètres dérivent (drift)</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>les configurations sont écrasées</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>le contexte d'exécution est éphémère</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Au moment où une décision est remise en question, le système qui l'a produite peut ne plus exister dans le même état. Les logs montrent l'activité. Les métriques montrent des agrégats. <strong>Aucun des deux ne préserve le contexte de la décision.</strong></p>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">L'artefact au moment de l'exécution</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Pour chaque décision automatisée sélectionnée, Horizon préserve un artefact immuable contenant :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>l'horodatage de l'exécution et des garanties strictes de séquençage</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>les données d'entrée telles qu'observées par le système de décision</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>l'identifiant du jeu de règles ou du modèle</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>l'état de la configuration et les seuils</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>les signaux d'évaluation présents au moment de l'exécution</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>le résultat produit</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Indépendance vis-à-vis du cycle de vie des systèmes</strong><br>Cet artefact existe indépendamment du système qui l'a produit. Il ne dépend ni du réentraînement des modèles, ni de la rétention des logs, ni des tableaux de bord, ni de la mémoire humaine.</p>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce que Asplenz Horizon ne tente pas (par conception)</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Combiner la préservation de la preuve avec l'interprétation introduit un risque institutionnel. Asplenz Horizon évite cela en restant strictement neutre. Il ne tente pas de :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>expliquer pourquoi un modèle s'est comporté ainsi ou justifier les résultats</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>évaluer le biais, l'équité ou la justesse</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>fournir des contrefactuels ou appliquer la gouvernance</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>remplacer le monitoring ou l'observabilité</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Horizon préserve les faits, pas les interprétations. Toute analyse de ce type se fait en dehors de l'infrastructure.</strong></p>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Résumé</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'automatisation accélère la prise de décision. Elle accélère aussi la perte de preuve. Les décisions automatisées nécessitent une preuve au moment de l'exécution car la reconstruction devient peu fiable à mesure que les systèmes évoluent.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Asplenz Horizon garantit que, lorsqu'un examen est requis, des artefacts de décision immuables existent déjà.</strong></p>
  `
};

export default function AutomatedDecisionsPage({ params }: { params: { lang: Language } }) {
  return (
    <article className="max-w-3xl">
      <div dangerouslySetInnerHTML={{ __html: content[params.lang] }} />
      <ReadingPath currentSlug="automated-decisions" lang={params.lang} />
    </article>
  );
}
