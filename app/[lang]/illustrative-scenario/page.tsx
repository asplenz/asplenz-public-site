import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  en: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Illustrative scenario</h1>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">A canonical situation where reconstruction becomes the problem</h2>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What this scenario demonstrates</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">This scenario demonstrates that when a decision is later examined, the outcome depends on whether an execution-time record exists or must be reconstructed.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">It does so by comparing <strong>two worlds</strong>:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>World A: Reconstruction</strong><br>The decision is examined weeks later using logs, dashboards, tickets, and memory.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>World B: Execution-time evidence</strong><br>The decision left behind a preserved artefact at the moment it was executed.</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The events are identical. The difference is <strong>not the decision</strong>, but <strong>what exists before scrutiny begins</strong>.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Purpose of this page</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">This page does not describe a customer case, an incident, or a deployment.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">It describes an archetypal situation that occurs across regulated institutions, regardless of industry, technology stack, or decision logic.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The purpose is to make the underlying problem concrete without operational disclosure.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">The situation</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">At time T, a system performs an execution.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The execution may be:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>fully automated</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>partially automated</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>initiated by a human supported by a system</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The execution produces an outcome that is:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>institutionally consequential</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>irreversible</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>externally contestable</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">At the time it occurs, nothing appears abnormal.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Weeks or months later</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">A question arises. Not a general question about how the system usually behaves, but a <strong>specific question about a specific case</strong>:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Why was this action taken?</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>What information was available at that moment?</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>What evaluations were produced?</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>What was known, assessed, or assumed when the execution occurred?</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The question is qualitative, case-specific, and non-statistical.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Two possible worlds</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">At this point, the institution finds itself in one of two situations.</p>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">World A: Reconstruction</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">No declared evidence exists for the execution at time T.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">To answer the question, the organization must reconstruct what happened by:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>correlating logs from multiple systems</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>reviewing tickets, emails, or dashboards</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>interviewing engineers and operators</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>reloading configurations or models that may have changed</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Facts are inferred. Context is reassembled. Explanations are produced after the fact. The reconstruction may be honest and diligent, but it is:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>time-consuming</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>fragile</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>dependent on human mediation</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>potentially contestable</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>At this stage, the reconstruction itself becomes part of what is examined.</strong></p>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">World B: Examination</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Declared evidence exists for the execution at time T.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">When the execution occurred:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>the action was recorded as a fact</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>the evaluations produced at that moment were preserved</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>ordering and integrity were guaranteed</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">To answer the question, the organization does not reconstruct. It examines. The facts examined are:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>the same facts that existed at execution time</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>independent of current system state</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>independent of current personnel</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The discussion focuses on:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>what was executed</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>what was evaluated</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>the declared context</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Not on how convincingly the past can be rebuilt.</strong></p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What changes between the two worlds</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The difference between these two worlds is not technical sophistication. <strong>It is when evidence is created.</strong></p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>In World A, evidence is assembled when the question arises.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>In World B, evidence already exists when the question is asked.</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">This single shift changes:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>the duration of investigations</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>the number of teams involved</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>the stability of conclusions</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>the institutional risk profile</span></li>
    </ul>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What this scenario is not about</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">This scenario does not address:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>whether the decision was correct or incorrect</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>whether the model or policy was good or bad</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>whether the outcome should have been different</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>It is strictly about whether facts are examinable without reconstruction.</strong></p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Why this scenario matters</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Institutions rarely fail because they cannot decide. They fail because, later, they cannot demonstrate what happened, under scrutiny, without reassembling the past.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>This scenario captures the moment where the ability to reconstruct is no longer sufficient, because reconstruction itself is examined.</strong></p>
  `,
  fr: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Scénario illustratif</h1>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Une situation canonique où la reconstruction devient le problème</h2>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce que ce scénario démontre</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Ce scénario démontre que lorsqu'une décision est examinée ultérieurement, le résultat dépend de l'existence d'un registre au moment de l'exécution ou de la nécessité de le reconstruire.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Il compare <strong>deux mondes</strong> :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Monde A : Reconstruction</strong><br>La décision est examinée des semaines plus tard en utilisant des logs, des tableaux de bord, des tickets et la mémoire.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span><strong>Monde B : Preuve au moment de l'exécution</strong><br>La décision a laissé un artefact préservé au moment où elle a été exécutée.</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Les événements sont identiques. La différence n'est <strong>pas la décision</strong>, mais <strong>ce qui existe avant que l'examen ne commence</strong>.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Objectif de cette page</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Cette page ne décrit pas un cas client, un incident ou un déploiement.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Elle décrit une situation archétypale qui se produit dans les institutions régulées, indépendamment du secteur, de la pile technologique ou de la logique de décision.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'objectif est de rendre le problème sous-jacent concret sans divulgation opérationnelle.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">La situation</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">À l'instant T, un système effectue une exécution.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'exécution peut être :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>entièrement automatisée</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>partiellement automatisée</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>initiée par un humain assisté par un système</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'exécution produit un résultat qui est :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>institutionnellement conséquent</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>irréversible</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>externalement contestable</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Au moment où cela se produit, rien ne semble anormal.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Des semaines ou des mois plus tard</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Une question surgit. Pas une question générale sur le comportement habituel du système, mais une <strong>question spécifique sur un cas spécifique</strong> :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Pourquoi cette action a-t-elle été prise ?</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Quelles informations étaient disponibles à ce moment ?</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Quelles évaluations ont été produites ?</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Que savait-on, qu'a-t-on évalué ou supposé lors de l'exécution ?</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La question est qualitative, spécifique au cas et non statistique.</p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Deux mondes possibles</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">À ce stade, l'institution se trouve dans l'une des deux situations.</p>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">Monde A : Reconstruction</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Aucune preuve déclarée n'existe pour l'exécution à l'instant T.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Pour répondre à la question, l'organisation doit reconstruire ce qui s'est passé en :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>corrélant les logs de plusieurs systèmes</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>examinant les tickets, e-mails ou tableaux de bord</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>interrogeant les ingénieurs et opérateurs</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>rechargeant les configurations ou modèles qui ont pu changer</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Les faits sont déduits. Le contexte est réassemblé. Les explications sont produites après coup. La reconstruction peut être honnête et diligente, mais elle est :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>chronophage</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>fragile</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>dépendante de la médiation humaine</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>potentiellement contestable</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>À ce stade, la reconstruction elle-même devient une partie de ce qui est examiné.</strong></p>
    
    <h4 style="font-size: 1.125rem; font-weight: 500; color: #000; margin-bottom: 0.75rem;">Monde B : Examen</h4>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Une preuve déclarée existe pour l'exécution à l'instant T.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Lorsque l'exécution s'est produite :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>l'action a été enregistrée comme un fait</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>les évaluations produites à ce moment ont été préservées</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>l'ordre et l'intégrité ont été garantis</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Pour répondre à la question, l'organisation ne reconstruit pas. Elle examine. Les faits examinés sont :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>les mêmes faits qui existaient au moment de l'exécution</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>indépendants de l'état actuel du système</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>indépendants du personnel actuel</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La discussion se concentre sur :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>ce qui a été exécuté</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>ce qui a été évalué</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>le contexte déclaré</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Pas sur la manière dont le passé peut être reconstruit de manière convaincante.</strong></p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce qui change entre les deux mondes</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La différence entre ces deux mondes n'est pas la sophistication technique. <strong>C'est quand la preuve est créée.</strong></p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Dans le Monde A, la preuve est assemblée lorsque la question surgit.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Dans le Monde B, la preuve existe déjà lorsque la question est posée.</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Ce seul changement modifie :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>la durée des enquêtes</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>le nombre d'équipes impliquées</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>la stabilité des conclusions</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>le profil de risque institutionnel</span></li>
    </ul>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce que ce scénario n'aborde pas</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Ce scénario n'aborde pas :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>si la décision était correcte ou incorrecte</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>si le modèle ou la politique était bon ou mauvais</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>si le résultat aurait dû être différent</span></li>
    </ul>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Il s'agit strictement de savoir si les faits sont examinables sans reconstruction.</strong></p>
    
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Pourquoi ce scénario est important</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Les institutions échouent rarement parce qu'elles ne peuvent pas décider. Elles échouent parce que, plus tard, elles ne peuvent pas démontrer ce qui s'est passé, sous examen, sans réassembler le passé.</p>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;"><strong>Ce scénario capture le moment où la capacité à reconstruire n'est plus suffisante, car la reconstruction elle-même est examinée.</strong></p>
  `
};

export default function IllustrativeScenarioPage({ params }: { params: { lang: Language } }) {
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
      <ReadingPath currentSlug="illustrative-scenario" lang={params.lang} />
    </article>
  );
}
