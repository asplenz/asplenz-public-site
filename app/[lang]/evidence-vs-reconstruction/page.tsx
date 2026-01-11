import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

const content = {
  en: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Evidence vs Reconstruction</h1>
    
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">The difference between execution-time evidence and post-hoc reconstruction</h2>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Many systems claim to "prove" what happened. Most of them reconstruct. The distinction between <strong>evidence</strong> and <strong>reconstruction</strong> is often blurred in operational and institutional systems. <strong>Asplenz Horizon exists specifically to avoid reconstruction.</strong></p>
    
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
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Why reconstruction is unreliable</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Reconstruction fails structurally, not accidentally. Because:</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">systems evolve</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">configurations change</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">models are retrained</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">logs are rotated or sampled</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">signals disappear</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">interpretations diverge</span></li>
      </ul>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-top: 1.5rem;">By the time a decision is examined, the original execution context often no longer exists. Reconstruction explains what <em>might</em> have happened. It does not preserve what <em>did</em> exist.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What execution-time evidence is</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Execution-time evidence is a record created <strong>at the moment a decision is executed</strong>. It preserves:</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">what inputs were present</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">what evaluations existed</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">what configuration was active</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">what output was produced</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">the ordering of these facts</span></li>
      </ul>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-top: 1.5rem;">This record exists <strong>before scrutiny begins</strong>. It does not depend on later interpretation to exist.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What Asplenz Horizon changes</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon does not improve reconstruction. It eliminates the need for it in specific cases by ensuring that:</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">a decision leaves behind an artefact at execution time</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">the artefact exists independently of system evolution</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">later review does not require re-assembling fragments</span></li>
      </ul>
      
      <p style="margin-top: 1.5rem; color: #000; font-size: 1.125rem; line-height: 1.625;"><strong>Horizon produces evidence, not explanations.</strong></p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What this page is not claiming</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">This page does not claim that:</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">reconstruction is useless</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">reconstruction can be fully eliminated</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Horizon captures everything</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Horizon determines truth</span></li>
      </ul>
      
      <p style="margin-top: 1.5rem; color: #000; font-size: 1.125rem; line-height: 1.625;">Reconstruction will always exist. <strong>Horizon exists to bound it.</strong></p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Summary</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;">Reconstruction assembles narratives after the fact. Evidence exists before questions arise. <strong>Asplenz Horizon exists to preserve execution-time evidence so that later examination is not dependent on reconstruction alone.</strong></p>
    </section>
  `,
  fr: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Preuve vs Reconstruction</h1>
    
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">La différence entre la preuve au moment de l'exécution et la reconstruction a posteriori</h2>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">De nombreux systèmes prétendent « prouver » ce qui s'est passé. La plupart ne font que reconstruire. La distinction entre <strong>preuve</strong> et <strong>reconstruction</strong> est souvent floue dans les systèmes opérationnels et institutionnels. <strong>Asplenz Horizon existe spécifiquement pour éviter la reconstruction.</strong></p>
    
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
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-top: 1.5rem;">Au moment où une décision est examinée, le contexte d'exécution d'origine a souvent cessé d'exister. La reconstruction explique ce qui a <em>pu</em> se passer. Elle ne préserve pas ce qui <em>existait</em> réellement.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce qu'est la preuve au moment de l'exécution</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La preuve au moment de l'exécution est un registre créé <strong>à l'instant même où une décision est exécutée</strong>. Elle préserve :</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">les données d'entrée présentes</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">les évaluations produites</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">la configuration active</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">le résultat produit</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">l'ordonnancement de ces faits</span></li>
      </ul>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-top: 1.5rem;">Ce registre existe <strong>avant que l'examen ne commence</strong>. Il ne dépend pas d'une interprétation ultérieure pour exister.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce que Asplenz Horizon change</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon n'améliore pas la reconstruction. Il élimine la nécessité d'y recourir dans des cas précis en garantissant que :</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">une décision laisse derrière elle un artefact au moment de l'exécution</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">l'artefact existe indépendamment de l'évolution du système</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">l'examen ultérieur ne nécessite pas le réassemblage de fragments éparpillés</span></li>
      </ul>
      
      <p style="margin-top: 1.5rem; color: #000; font-size: 1.125rem; line-height: 1.625;"><strong>Horizon produit de la preuve, pas des explications.</strong></p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce que cette page ne prétend pas</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Cette page ne prétend pas que :</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">la reconstruction est inutile</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">la reconstruction peut être totalement éliminée</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Horizon capture tout</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Horizon définit la vérité</span></li>
      </ul>
      
      <p style="margin-top: 1.5rem; color: #000; font-size: 1.125rem; line-height: 1.625;">La reconstruction existera toujours. <strong>Horizon existe pour lui fixer des bornes.</strong></p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Résumé</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;">La reconstruction assemble des récits après coup. La preuve existe avant que les questions ne surgissent. <strong>Asplenz Horizon existe pour préserver la preuve au moment de l'exécution afin que l'examen ultérieur ne dépende pas de la seule reconstruction.</strong></p>
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
