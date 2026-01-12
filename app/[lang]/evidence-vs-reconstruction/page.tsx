import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  en: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Evidence vs Reconstruction</h1>
    
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">The difference between execution-time evidence and post-hoc reconstruction</h2>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Many systems claim to "prove" what happened. Most merely reconstruct. The distinction between <strong>evidence</strong> and <strong>reconstruction</strong> is often blurred in operational and institutional systems. <strong>Asplenz Horizon is specifically designed to bypass the need for reconstruction.</strong></p>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What reconstruction is</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Reconstruction is the process of assembling an explanation <em>after</em> a decision has been executed. It typically relies on:</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">logs</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">dashboards</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">tickets</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">alerts</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">interviews</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">human memory</span></li>
      </ul>
      
      <p style="margin-top: 1.5rem; color: #000; font-size: 1.125rem; line-height: 1.625;"><strong>Reconstruction produces a narrative.</strong></p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Why Reconstruction is unreliable</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Reconstruction fails structurally, not accidentally. Indeed:</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">systems evolve (configurations, models, log rotations)</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">signals disappear and interpretations diverge</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>asymmetric adverse interpretation:</strong> The examination occurs when the outcome is already known. Without anchored evidence, the organization is exposed to a judgment based on information it did not yet have at the time of action (hindsight bias).</span></li>
      </ul>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-top: 1.5rem;">Reconstruction explains what <em>might</em> have happened. It does not preserve what actually <em>existed</em>.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Chronology vs Narrative</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Reconstruction often attempts to merge yesterday's knowledge and today's insights into a single narrative. <strong>Horizon separates these facts:</strong> what was done (execution) remains frozen at Time T, while later assessments (delayed evaluations) are recorded at their own declaration date. This ensures the institution's defense rests on its actual state of knowledge at the moment of action.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What Execution-time Evidence is</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Execution-time evidence is a record created <strong>at the exact moment</strong> a decision is executed. It preserves:</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">input data present at the time</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">evaluations produced</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">active configuration</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">the resulting outcome</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">the sequencing of these facts</span></li>
      </ul>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-top: 1.5rem;">This record is available <strong>before</strong> the examination begins.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What Asplenz Horizon changes</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon does not improve reconstruction. It eliminates the need for it in specific cases by ensuring that:</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">a decision leaves behind an immutable artefact at the time of execution</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">the artefact is preserved independently of the system's evolution</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">subsequent examination does not require reassembling scattered fragments</span></li>
      </ul>
      
      <p style="margin-top: 1.5rem; color: #000; font-size: 1.125rem; line-height: 1.625;"><strong>Horizon produces evidence, not explanations.</strong></p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Posture and Scope</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The purpose of this argument is not to deny the utility of retrospective analysis, but to strip it of its function as evidence where the requirement for certainty is absolute.</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>Replacing Narrative with Fact:</strong> Horizon makes reconstruction redundant for establishing the technical and decisional reality of a case. Where Horizon operates, one no longer "tells the story" of what must have happened; one produces the evidence of what actually occurred.</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>Securing the Core:</strong> Horizon does not aim for total exhaustivity (capturing "everything"). It enables the institution to capture what it defines as <strong>institutionally examinable</strong>, focusing on the pivot points where its accountability is at stake.</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>Establishing Factual Authority:</strong> Horizon does not dictate "Truth" in a moral or legal sense; it provides the immutable technical artefact that makes the facts indisputable.</span></li>
      </ul>
      
      <p style="margin-top: 1.5rem; color: #000; font-size: 1.125rem; line-height: 1.625;"><strong>Horizon is not a support tool for reconstruction. It is the infrastructure that makes reconstruction unnecessary within the organization's critical perimeter.</strong></p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Summary</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;">Reconstruction assembles narratives after the fact. Evidence is established before questions arise. <strong>Asplenz Horizon was developed to preserve execution-time evidence so that subsequent examination does not depend on reconstruction alone.</strong></p>
    </section>
  `,
  fr: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Preuve vs Reconstruction</h1>
    
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">La différence entre la preuve au moment de l'exécution et la reconstruction a posteriori</h2>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">De nombreux systèmes prétendent « prouver » ce qui s'est passé. La plupart ne font que reconstruire. La distinction entre <strong>preuve</strong> et <strong>reconstruction</strong> est souvent floue dans les systèmes opérationnels et institutionnels. <strong>Asplenz Horizon intervient spécifiquement pour écarter la nécessité de la reconstruction.</strong></p>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce qu'est la reconstruction</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La reconstruction est le processus consistant à assembler une explication <em>après</em> qu'une décision a été exécutée. Elle s'appuie généralement sur :</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">des journaux (logs)</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">des tableaux de bord</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">des tickets</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">des alertes</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">des entretiens</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">la mémoire humaine</span></li>
      </ul>
      
      <p style="margin-top: 1.5rem; color: #000; font-size: 1.125rem; line-height: 1.625;"><strong>La reconstruction produit un récit.</strong></p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Pourquoi la reconstruction n'est pas fiable</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La reconstruction échoue de manière structurelle, et non accidentelle. En effet :</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">les systèmes évoluent</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">les configurations changent</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">les modèles sont réentraînés</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">les logs subissent des rotations ou des échantillonnages</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">les signaux disparaissent</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">les interprétations divergent</span></li>
      </ul>
      
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Pourquoi la reconstruction n'est pas fiable</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La reconstruction échoue de manière structurelle, et non accidentelle. En effet :</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">les systèmes évoluent (configurations, modèles, rotations de logs)</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">les signaux disparaissent et les interprétations divergent</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>l'interprétation adverse asymétrique :</strong> L'examen a lieu alors que le résultat est connu. Sans preuve ancrée, l'organisation s'expose à un jugement basé sur des informations dont elle ne disposait pas encore au moment de l'action (biais de rétrospective).</span></li>
      </ul>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-top: 1.5rem;">La reconstruction explique ce qui a <em>pu</em> se passer. Elle ne préserve pas ce qui <em>existait</em> réellement.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">La chronologie contre la narration</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La reconstruction cherche souvent à fusionner ce qu'on savait hier et ce qu'on sait aujourd'hui dans un récit unique. <strong>Horizon sépare ces faits :</strong> ce qui a été fait (l'exécution) reste figé au temps T, et ce qui a été pensé plus tard (l'évaluation tardive) est enregistré à sa propre date de déclaration. Cela garantit que la défense de l'institution repose sur son état de connaissance réel au moment de l'action.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce qu'est la preuve au moment de l'exécution</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La preuve au moment de l'exécution est un registre créé <strong>à l'instant même</strong> où une décision est exécutée. Elle préserve :</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">les données d'entrée présentes</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">les évaluations produites</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">la configuration active</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">le résultat produit</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">l'ordonnancement de ces faits</span></li>
      </ul>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-top: 1.5rem;">Ce registre est disponible <strong>avant</strong> que l'examen ne commence.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce que Asplenz Horizon change</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon n'améliore pas la reconstruction. Il élimine la nécessité d'y recourir dans des cas précis en garantissant que :</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">une décision laisse derrière elle un artefact immuable au moment de l'exécution</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">l'artefact est préservé indépendamment de l'évolution du système</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">l'examen ultérieur ne nécessite pas le réassemblage de fragments éparpillés</span></li>
      </ul>
      
      <p style="margin-top: 1.5rem; color: #000; font-size: 1.125rem; line-height: 1.625;"><strong>Horizon produit de la preuve, pas des explications.</strong></p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Posture et périmètre du propos</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'objectif de ce texte n'est pas de nier l'utilité de l'analyse rétrospective, mais de lui retirer sa fonction de preuve là où l'exigence de certitude est absolue.</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>Supplanter le récit par le fait :</strong> Horizon rend la reconstruction superflue pour établir la réalité technique et décisionnelle d'un dossier. Là où Horizon opère, on ne « raconte » plus ce qui a dû se passer ; on produit la preuve de ce qui a eu lieu.</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>Sanctuariser l'essentiel :</strong> Horizon n'a pas vocation à l'exhaustivité totale (« tout » capturer). Il permet à l'institution de capturer ce qu'elle définit comme <strong>institutionnellement examinable</strong>, en se concentrant sur les points de bascule où sa responsabilité est engagée.</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>Établir une autorité factuelle :</strong> Horizon ne définit pas la « Vérité » au sens moral ou juridique ; il fournit l'artefact technique immuable qui rend les faits incontestables.</span></li>
      </ul>
      
      <p style="margin-top: 1.5rem; color: #000; font-size: 1.125rem; line-height: 1.625;"><strong>Horizon n'est pas un adjuvant à la reconstruction. C'est l'infrastructure qui rend cette dernière superflue sur le périmètre critique de l'organisation.</strong></p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Résumé</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;">La reconstruction assemble des récits après coup. La preuve est établie avant que les questions ne surgissent. <strong>Asplenz Horizon a été conçu pour préserver la preuve au moment de l'exécution afin que l'examen ultérieur ne dépende pas de la seule reconstruction.</strong></p>
    </section>
  `
};

export default function EvidencePage({ params }: { params: { lang: Language } }) {
  return (
    <article className="max-w-3xl">
      <div 
        className="prose prose-lg prose-black max-w-none
          prose-headings:font-light prose-headings:tracking-tight
          prose-h1:text-5xl prose-h1:mb-8
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-base prose-p:leading-relaxed prose-p:mb-6
          prose-blockquote:border-l-2 prose-blockquote:border-black/20 
          prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-black/80
          prose-ul:my-6 prose-li:my-2
          prose-strong:font-medium prose-strong:text-black
          prose-hr:border-black/10 prose-hr:my-12"
        dangerouslySetInnerHTML={{ __html: content[params.lang] }}
      />
      <ReadingPath currentSlug="evidence-vs-reconstruction" lang={params.lang} />
    </article>
  );
}
