import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

const content = {
  en: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Institutional contexts</h1>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Contexts where execution may later be examined</h2>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon is considered in environments where decisions may later require case-by-case scrutiny, and where reconstruction under pressure creates institutional risk. The following contexts describe why this capability is considered in these environments, not what benefits it provides.</p>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Market infrastructures</h2>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Market infrastructures operate under a distinct constraint: decisions are examined not only for correctness, but for <strong>institutional legitimacy</strong>. When trading continues or halts, when data is published, or when exceptions are applied, the question is often: "Was the decision justifiable at the time?"</p>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Critical moments</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">This capability becomes relevant at points of no return such as:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Trading halt or continuation decisions under uncertainty.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Market data publication under degraded conditions.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Methodology interpretation during exceptional events.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Exception handling and manual overrides in critical workflows.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Post-incident reviews where chronology itself becomes contested.</span></li>
    </ul>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What "good" looks like under scrutiny</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">A defensible dossier contains:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>The exact execution that occurred.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>The evaluations that existed at the time.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Their order and timestamps.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>The roles involved, without relying on human memory.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Integrity verifiable independently of source systems.</span></li>
    </ul>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Systemic banks</h2>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">In systemic contexts, what matters is not only whether controls existed, but whether the institution can prove what it knew, what it evaluated, and what it decided at time T. This is most visible when automated decisions interact with human escalation.</p>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">High-criticality situations</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Examples of "point of no return" situations:</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Continuing critical services during a partial outage.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Overriding a blocking control under time pressure: fraud, sanctions, AML, or risk.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Approving an exception with explicit risk acceptance.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Operating under degraded or ambiguous market data.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Model-assisted decisions where context changes, including GenAI or RAG-assisted workflows.</span></li>
    </ul>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What is typically missing today</h3>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>The human decision is recorded later (ticket notes, emails, post-mortems).</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>The "state of knowledge" at the moment of action must be reconstructed.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Technical logs exist, but the institutional stance remains unclear.</span></li>
    </ul>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">What the infrastructure provides</h3>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Combined execution facts and evaluation facts.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Explicit linkage between automated triggers and human decisions.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Ordered, immutable chronology.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Verifiable integrity.</span></li>
    </ul>
  `,
  fr: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Contextes institutionnels</h1>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Contextes où l'exécution peut faire l'objet d'un examen ultérieur</h2>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon est envisagé dans des environnements où les décisions peuvent nécessiter un examen au cas par cas, et où la reconstruction sous pression crée un risque institutionnel. Les contextes suivants décrivent pourquoi ce dispositif est pertinent pour ces milieux, et non les bénéfices qu'il procure.</p>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Infrastructures de marché</h2>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Les infrastructures de marché opèrent sous une contrainte spécifique : les décisions sont examinées non seulement pour leur exactitude, mais pour leur <strong>légitimité institutionnelle</strong>. Lorsque les transactions se poursuivent ou s'arrêtent, lorsque des données sont publiées ou que des exceptions sont appliquées, la question est souvent : « La décision était-elle justifiable à cet instant précis ? »</p>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Moments critiques</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Ce dispositif devient crucial aux points de non-retour tels que :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Les décisions de suspension ou de poursuite des transactions en période d'incertitude.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>La publication de données de marché en conditions dégradées.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>L'interprétation méthodologique lors d'événements exceptionnels.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>La gestion des exceptions et les passages outre (overrides) manuels dans les flux critiques.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Les revues post-incidents où la chronologie elle-même est contestée.</span></li>
    </ul>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce qu'est un dossier « défendable » lors d'un examen</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Un dossier robuste contient :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>L'exécution exacte qui a eu lieu.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Les évaluations qui existaient à ce moment-là.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Leur ordre et leurs horodatages précis.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Les rôles impliqués, sans dépendre de la mémoire humaine.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Une intégrité vérifiable indépendamment des systèmes sources.</span></li>
    </ul>
    <section style="margin-top: 2.5rem;"><hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" /></section>
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Banques systémiques</h2>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Dans les contextes systémiques, ce qui importe n'est pas seulement l'existence de contrôles, mais la capacité de l'institution à prouver ce qu'elle savait, ce qu'elle a évalué et ce qu'elle a décidé à l'instant T. Cela est particulièrement visible lorsque des décisions automatisées interagissent avec une escalade humaine.</p>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Situations de haute criticité</h3>
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Exemples de situations de « point de non-retour » :</p>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Le maintien de services critiques lors d'une interruption partielle.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Le passage outre d'un contrôle bloquant sous pression temporelle : fraude, sanctions, AML ou risque.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>L'approbation d'une exception avec acceptation explicite du risque.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>L'exploitation sous des données de marché dégradées ou ambiguës.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Les décisions assistées par des modèles où le contexte évolue, y compris les flux assistés par GenAI ou RAG.</span></li>
    </ul>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce qui manque généralement aujourd'hui</h3>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>La décision humaine est enregistrée plus tard (notes de tickets, e-mails, rapports d'incidents).</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>L'« état des connaissances » au moment de l'action doit être reconstruit.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Les logs techniques existent, mais la posture institutionnelle reste floue.</span></li>
    </ul>
    <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Ce que le dispositif apporte</h3>
    <ul style="list-style: none; padding-left: 0; margin-left: 0.25rem; border-left: 1px solid #e4e4e7; margin-bottom: 1.5rem;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>La réunion des faits d'exécution et des faits d'évaluation.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Un lien explicite entre les déclencheurs automatisés et les décisions humaines.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Une chronologie ordonnée et immuable.</span></li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 0.5rem; padding-left: 1.25rem; font-size: 1.125rem; line-height: 1.625; color: #18181b;"><span style="font-size: 0.75rem; color: #a1a1aa;">■</span><span>Une intégrité vérifiable.</span></li>
    </ul>
  `
};

export default function InstitutionalContextsPage({ params }: { params: { lang: Language } }) {
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
      <ReadingPath currentSlug="institutional-contexts" lang={params.lang} />
    </article>
  );
}
