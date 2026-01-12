import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  en: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Evidence Infrastructure</h1>
    
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">From reconstruction to decision evidence</h2>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">This section explains how to read and understand Horizon. It covers the problem being addressed, the core principle, and what "fact" means in this context.</p>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Most systems are built to operate. Few are built to be examined later.</p>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">When a specific transaction, incident, or decision is scrutinized, organizations often discover that their "memory" is distributed across tools and teams, and that the past must be reconstructed before it can even be discussed.</p>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">This approach is about one thing: ensuring that examinable facts exist <strong>at execution time</strong>, so that later examination relies on facts already constituted, not on correlation and interpretation assembled under pressure.</p>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1.rem;">The failure mode</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">When a case is questioned, teams typically rely on:</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Logs fragmented across multiple systems</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Dashboards that reflect current state, not past execution</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Tickets, emails, documents, and post-mortems written later</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Human memory and informal explanations</span></li>
      </ul>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">This creates a predictable pattern:</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Timelines are rebuilt from heterogeneous traces</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Context is inferred after the fact</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Multiple "versions" of what happened emerge</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Explanations remain contestable because the reconstruction is contestable</span></li>
      </ul>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;">(See: <a href="/en/evidence-vs-reconstruction" style="color: #18181b; text-decoration: underline;">Evidence vs reconstruction</a>)</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1.rem;">The shift</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Under scrutiny, the question changes from:</p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">"How does the system usually behave?"</p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">to:</p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 1.5rem;"><strong>"What exactly happened in this specific case, and what facts existed at that moment?"</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;">At that point, the cost is not only time. It is also governance: the organization loses the ability to ground discussions in a shared factual baseline.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1.rem;">Core principle</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 1.5rem;"><strong>Evidence should be created at the point of no return: the moment an action becomes irreversible, institutionally binding, or materially consequential.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;">Examination may happen later. But evidence must exist before questions arise.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1.rem;">What "a fact" means here</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">In this context, a "fact" is neither a business truth nor a compliance validation. It is a signed and recorded act or declaration produced by a system or a human actor at the exact moment of execution.</p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The goal is not to "explain" the past with better narratives, but to preserve what was declared and executed, in an immutable and ordered manner, so that institutional discussion starts from stable grounds.</p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 1rem; margin-top: 2rem;"><strong>Concrete Example:</strong></p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>The Action:</strong> A scoring algorithm approves a loan at Time T despite a threshold breach.</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>The "Fact" captured by Horizon:</strong> The exact approval signal, the specific input data used at that moment, and the system's associated risk assessment.</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>The Value:</strong> Even if it is later discovered that the loan should not have been granted (business truth), the <strong>fact</strong> remains that it was granted on that specific basis. <strong>Horizon enables the institution to safeguard the reality of its executions and assessments, providing it with a sovereign factual basis that makes any subsequent reconstruction or alteration technically impossible.</strong></span></li>
      </ul>
    </section>
  `,
  fr: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Infrastructure de preuve</h1>
    
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1.rem; font-weight: 600; color: #000;">De la reconstruction à la preuve décisionnelle</h2>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Cette section détaille la lecture et la compréhension d'Horizon. Elle traite du problème adressé, du principe fondamental et de la définition d'un « fait » dans ce contexte.</p>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La plupart des systèmes sont conçus pour opérer. Peu sont conçus pour être examinés ultérieurement.</p>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Lorsqu'une transaction, un incident ou une décision spécifique est scruté, les organisations découvrent souvent que leur « mémoire » est répartie entre différents outils et équipes. Le passé doit alors être reconstruit avant même de pouvoir être discuté.</p>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Cette approche repose sur un objectif unique : garantir que des faits examinables existent <strong>au moment de l'exécution</strong>. Ainsi, l'examen ultérieur s'appuie sur des faits déjà constitués, et non sur une corrélation ou une interprétation assemblée sous pression.</p>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1.rem;">Le mode de défaillance</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Lorsqu'un dossier est remis en question, les équipes s'appuient généralement sur :</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Des journaux (logs) fragmentés entre plusieurs systèmes</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Des tableaux de bord reflétant l'état actuel et non l'exécution passée</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Des tickets, courriels, documents et rapports d'incidents rédigés a posteriori</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">La mémoire humaine et des explications informelles</span></li>
      </ul>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Cela génère un schéma prévisible :</p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Les chronologies sont rebâties à partir de traces hétérogènes</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Le contexte est déduit après coup</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Plusieurs « versions » de l'événement émergent</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;">Les explications restent contestables car la reconstruction elle-même est contestable</span></li>
      </ul>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;">(Voir : <a href="/fr/evidence-vs-reconstruction" style="color: #18181b; text-decoration: underline;">Preuve vs reconstruction</a>)</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1.rem;">Le tournant</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Sous examen, la question change :</p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">« Comment le système se comporte-t-il habituellement ? »</p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">devient :</p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 1.5rem;"><strong>« Que s'est-il exactement passé dans ce cas précis, et quels faits existaient à cet instant ? »</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;">Le coût n'est alors pas seulement temporel. Il est aussi de gouvernance : l'organisation perd la capacité d'ancrer les discussions sur un socle factuel partagé.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1.rem;">Principe fondamental</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 1.5rem;"><strong>La preuve doit être créée au point de non-retour : au moment où une action devient irréversible, institutionnellement engageante ou matériellement conséquente.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;">L'examen peut survenir ultérieurement. Mais la preuve doit exister avant que les questions ne se posent.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1.rem;">Ce que signifie « un fait » ici</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Dans ce contexte, un « fait » n'est ni une vérité métier, ni une validation de conformité. C'est un acte ou une déclaration, signée et enregistrée, produite par un système ou un acteur humain au moment précis de l'exécution.</p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'objectif n'est pas d'« expliquer » le passé avec de meilleurs récits, mais de préserver ce qui a été déclaré et exécuté, de manière immuable et ordonnée, pour que la discussion institutionnelle repose sur des bases stables.</p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 1rem; margin-top: 2rem;"><strong>Exemple concret :</strong></p>
      
      <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>L'action :</strong> Un algorithme de scoring approuve un prêt à un instant T malgré un dépassement de seuil.</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>Le « fait » capturé par Horizon :</strong> Le signal exact d'approbation, les données d'entrée utilisées à cet instant précis et l'évaluation de risque associée par le système.</span></li>
        <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span style="font-size: 1.125rem; color: #18181b;"><strong>La valeur :</strong> Même si l'on découvre plus tard que le prêt n'aurait pas dû être accordé (vérité métier), le <strong>fait</strong> est qu'il l'a été sur cette base spécifique. <strong>Horizon permet à l'institution de sanctuariser la réalité de ses exécutions et de ses évaluations, lui garantissant une base factuelle souveraine qui rend toute reconstruction ou altération ultérieure techniquement impossible.</strong></span></li>
      </ul>
    </section>
  `
};

export default function EvidenceInfrastructurePage({ params }: { params: { lang: Language } }) {
  return (
    <article className="max-w-3xl">
      <div dangerouslySetInnerHTML={{ __html: content[params.lang] }} />
      <ReadingPath currentSlug="evidence-infrastructure" lang={params.lang} />
    </article>
  );
}
