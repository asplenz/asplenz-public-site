import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  en: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Clarifications</h1>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">This page addresses common questions raised when considering whether a decision evidence capability should exist within an organization. It focuses on scope, governance implications, and institutional consequences, not on product features or commercial terms.</p>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">1. What problem does Horizon actually solve?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 1.5rem;"><strong>Asplenz Horizon eliminates the need to reconstruct facts after a decision is questioned.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Today, when a decision is examined, companies pull logs from multiple systems, search emails, and reconcile timelines manually. Horizon preserves existing factual artefacts at decision time, so examination relies on <strong>presentation</strong>, not reconstruction. This shifts examination from a reactive activity to a property of execution itself.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">2. Does Horizon decide anything or influence decisions?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 0.5rem;"><strong>No.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon does not make decisions, recommend actions, or replace business logic. It only observes and preserves what already happened.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">3. How are implementation details addressed?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">This documentation focuses on conceptual acceptability and institutional boundaries. Specific implementation details (interfaces, integration mechanisms, access control, performance) are intentionally not specified here. These aspects are defined during a bounded acceptability discussion, once the capability is deemed conceptually acceptable and the organization's constraints are known.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">4. We already have observability and logging. Why is this different?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Observability and logging are designed to support reconstruction. Horizon addresses a different question: whether <strong>declared, examinable facts</strong> existed at execution time, before any investigation was required. Improving observability reduces the cost of reconstruction but does not remove it as a dependency. <strong>Horizon is concerned with situations where reconstruction itself becomes the object of examination.</strong></p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">5. We already generate artefacts automatically. Why is this not sufficient?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The distinction Horizon makes is not about whether data exists, but about <strong>when a fact becomes institutionally declared</strong>. In most architectures, artefacts are assembled post-hoc after a question is raised. Asplenz Horizon ensures facts are explicitly declared at execution time, with their scope and structure defined in advance, and preserved independently of any later investigation.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">6. Does Horizon force companies to log more decisions?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 0.5rem;"><strong>No.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon does not define what should be logged or expand the decision surface. It only consolidates facts already produced (logs, files, tickets) that are currently fragmented.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">7. Does Horizon create new legal or regulatory exposure?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 0.5rem;"><strong>Not by design.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Scope, integration, and retention are company-controlled. Horizon does not publish to regulators. While clearer evidence can make weaknesses visible, most relevant facts already exist in fragmented archives today. Horizon changes <strong>when</strong> and <strong>how consistently</strong> existing facts are accessible, preventing decisions from being assessed based on competing reconstructed narratives.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">8. Could Horizon records be subpoenaed or discovered?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon records are subject to the same legal processes as any other internal company data (emails, logs, databases). Horizon does not introduce new categories of data or special legal status. It preserves evidence under the same rules governing discovery, subpoenas, and legal holds.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">9. Does Horizon record every decision in the company?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 0.5rem;"><strong>No.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Integration is selective. Companies explicitly choose which systems are covered. Adoption typically starts with one high-pain or high-scrutiny area. Horizon is not an omniscient recorder: it is a <strong>deliberately scoped evidence layer</strong>.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">10. Can Horizon be limited to high-risk decisions only?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 0.5rem;"><strong>Yes.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">The choice of scope reflects organizational priorities, not product constraints. Typical starting points include regulatory decisions, automated approvals, or compliance-critical workflows.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">11. Does Horizon replace logging or audit tools?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 0.5rem;"><strong>No.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">It sits above them, acting as an evidence layer that correlates, stabilizes, and preserves.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">12. Does Horizon only matter after something goes wrong?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 0.5rem;"><strong>No.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon matters before anything goes wrong, because evidence must exist <strong>before questions arise</strong>. The capability is exercised at execution time.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">13. How is Horizon different from just improving logging?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Logging improves observation. Horizon establishes evidence at execution time. Improved logging still leaves companies with fragmented sources and heavy reconstruction work.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">14. Does Horizon record human decisions and overrides?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Only if the company chooses to integrate those points. If human artefacts already exist (tickets, approvals), Horizon can preserve them as facts.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">15. Could Horizon increase individual accountability?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon increases <strong>factual clarity</strong>. Whether this leads to changes in accountability depends on governance rules and organizational culture. These outcomes are determined by how evidence is used, not by the existence of the evidence layer itself.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">16. Does Horizon lock companies into rigid narratives?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon grounds interpretation in a shared factual baseline. This applies symmetrically to the organization and the examiner. Horizon does not interpret intent or quality: it anchors human interpretation to stable facts.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">17. Who typically uses Horizon?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon is designed for internal use by functions such as Internal Audit, Risk Management, Legal, and Compliance. External parties may review outputs only if the company decides or is required to disclose them.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">18. What happens if a company decides not to retain certain evidence?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Retention, deletion, and scope are entirely determined by the company's governance choices. The organization retains <strong>full sovereignty</strong> over what is retained, for how long, and for what purpose.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Final note</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;">Horizon does not force truth or change decisions. It answers one question reliably: <strong>"What facts already existed at the moment this decision was made?"</strong> Whether that capability should exist is an <strong>institutional choice</strong>, not a technical one.</p>
    </section>
  `,
  fr: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Clarifications</h1>
    
    <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Cette page répond aux questions courantes soulevées lors de l'évaluation de l'opportunité d'intégrer un dispositif de preuve décisionnelle au sein d'une organisation. Elle se concentre sur le périmètre, les enjeux de gouvernance et les conséquences institutionnelles, plutôt que sur les fonctionnalités du produit ou les conditions commerciales.</p>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">1. Quel problème Horizon résout-il réellement ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 1.5rem;"><strong>Asplenz Horizon élimine le besoin de reconstruire les faits après qu'une décision a été remise en question.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Aujourd'hui, lorsqu'une décision est examinée, les entreprises extraient des logs de multiples systèmes, fouillent des courriels et réconcilient manuellement des chronologies. Horizon préserve les artefacts factuels existants au moment de la décision. Ainsi, l'examen repose sur la <strong>présentation</strong> de faits, et non sur leur reconstruction. Cela transforme l'examen, d'une activité réactive en une propriété intrinsèque de l'exécution.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">2. Horizon décide-t-il de quoi que ce soit ou influence-t-il les décisions ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 0.5rem;"><strong>Non.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon ne prend pas de décisions, ne recommande aucune action et ne remplace pas la logique métier. Il se contente d'observer et de préserver ce qui s'est déjà produit.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">3. Comment les détails de mise en œuvre sont-ils abordés ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Cette documentation se concentre sur l'acceptabilité conceptuelle et les limites institutionnelles. Les questions relatives à l'instanciation du dispositif (interfaces, mécanismes d'intégration, contrôle d'accès, performance) ne sont pas spécifiées ici. Ces aspects sont définis lors d'une discussion d'acceptabilité délimitée, une fois que le dispositif est jugé conceptuellement acceptable et que les contraintes d'architecture et de sécurité de l'organisation sont connues.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">4. Nous avons déjà de l'observabilité et des logs. En quoi est-ce différent ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'observabilité et les logs sont conçus pour faciliter la reconstruction. Horizon répond à une question différente : est-ce que des <strong>faits déclarés et examinables</strong> existaient au moment de l'exécution, avant que toute enquête ou explication ne soit requise ? Améliorer l'observabilité réduit le coût de la reconstruction mais ne l'élimine pas en tant que dépendance. <strong>Horizon s'adresse aux situations où la reconstruction elle-même devient l'objet de l'examen.</strong></p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">5. Nous générons déjà des artefacts automatiquement. Pourquoi cela ne suffit-il pas ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La distinction établie par Horizon ne porte pas sur l'existence des données, mais sur <strong>le moment où un fait devient institutionnellement déclaré</strong>. Dans la plupart des architectures, les artefacts sont assemblés a posteriori, une fois qu'une question a été soulevée. Asplenz Horizon garantit que les faits sont explicitement déclarés au moment de l'exécution, avec un périmètre et une structure définis à l'avance, et préservés indépendamment de toute enquête ultérieure.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">6. Horizon force-t-il les entreprises à tracer plus de décisions ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 0.5rem;"><strong>Non.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon ne définit pas ce qui doit être tracé et n'étend pas la surface de décision. Il se contente de consolider des faits déjà produits (logs, fichiers, tickets) qui sont actuellement fragmentés.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">7. Horizon crée-t-il de nouvelles expositions juridiques ou réglementaires ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 0.5rem;"><strong>Pas par conception.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Le périmètre, l'intégration et la rétention sont contrôlés par l'entreprise. Horizon ne publie rien vers les régulateurs. Si une preuve plus claire peut rendre des faiblesses visibles, la plupart des faits pertinents existent déjà aujourd'hui dans des archives fragmentées. Horizon modifie <strong>le moment</strong> et <strong>la cohérence</strong> avec lesquels les faits existants sont accessibles, évitant ainsi que des décisions ne soient évaluées sur la base de récits reconstruits contradictoires.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">8. Les registres Horizon peuvent-ils faire l'objet d'une communication de pièces ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Les registres Horizon sont soumis aux mêmes processus juridiques que toute autre donnée interne (courriels, logs, bases de données). Horizon n'introduit pas de nouvelles catégories de données ou de statut juridique spécial. Il préserve les preuves selon les mêmes règles régissant la communication de pièces (discovery), les injonctions et le secret professionnel.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">9. Horizon enregistre-t-il chaque décision de l'entreprise ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 0.5rem;"><strong>Non.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">L'intégration est sélective. Les entreprises choisissent explicitement les systèmes couverts. L'adoption commence généralement par une zone de forte tension ou de contrôle intensif. Horizon n'est pas un enregistreur omniscient : c'est une <strong>couche de preuve au périmètre délibérément restreint</strong>.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">10. Horizon peut-il être limité aux seules décisions à haut risque ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 0.5rem;"><strong>Oui.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Le choix du périmètre reflète les priorités organisationnelles, et non les contraintes du produit. Les points de départ types incluent les décisions réglementaires, les approbations automatisées ou les flux critiques pour la conformité.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">11. Horizon remplace-t-il les outils de logging ou d'audit ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 0.5rem;"><strong>Non.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Il se situe au-dessus d'eux, agissant comme une couche de preuve qui corrèle, stabilise et préserve.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">12. Horizon n'est-il utile qu'en cas de problème ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #000; margin-bottom: 0.5rem;"><strong>Non.</strong></p>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon est utile avant que tout problème ne survienne, car la preuve doit exister <strong>avant que les questions ne surgissent</strong>. Le dispositif est actionné au moment de l'exécution.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">13. Quelle est la différence avec une simple amélioration du logging ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Le logging améliore l'observation. Horizon établit la preuve au moment de l'exécution. Même amélioré, le logging laisse les entreprises face à des sources fragmentées et un travail de reconstruction lourd.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">14. Horizon enregistre-t-il les décisions humaines et les passages outre ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Uniquement si l'entreprise choisit d'intégrer ces points. Si des artefacts humains existent déjà (tickets, approbations), Horizon peut les préserver en tant que faits.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">15. Horizon pourrait-il accroître la responsabilité individuelle ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon accroît la <strong>clarté factuelle</strong>. Le fait que cela mène à des changements en matière de responsabilité dépend des règles de gouvernance et de la culture organisationnelle. Ces résultats sont déterminés par l'usage de la preuve, et non par l'existence même de la couche de preuve.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">16. Horizon enferme-t-il les entreprises dans des récits rigides ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon fonde l'interprétation sur un socle factuel commun. Cela s'applique symétriquement à l'organisation et à l'examinateur. Horizon n'interprète ni l'intention ni la qualité : il ancre l'interprétation humaine sur des faits stables.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">17. Qui utilise généralement Horizon ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">Horizon est conçu pour un usage interne par des fonctions telles que l'Audit Interne, la Gestion des Risques, le Juridique et la Conformité. Des tiers ne peuvent consulter les résultats que si l'entreprise décide ou est tenue de les divulguer.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">18. Que se passe-t-il si une entreprise décide de ne pas conserver certaines preuves ?</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b; margin-bottom: 1.5rem;">La rétention, la suppression et le périmètre sont exclusivement déterminés par les choix de gouvernance de l'entreprise. L'organisation conserve sa <strong>pleine souveraineté</strong> sur ce qui est conservé, pour quelle durée et à quelle fin.</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; border-top: 1px solid #e4e4e7; margin-bottom: 2rem;" />
      
      <h3 style="font-size: 1.25rem; font-weight: 500; letter-spacing: -0.025em; color: #000; margin-bottom: 1rem;">Note finale</h3>
      
      <p style="font-size: 1.125rem; line-height: 1.625; color: #18181b;">Horizon n'impose pas de vérité et ne modifie pas les décisions. Il répond de manière fiable à une seule question : <strong>« Quels faits existaient déjà au moment où cette décision a été prise ? »</strong> Le fait que ce dispositif doive exister est un <strong>choix institutionnel</strong>, et non technique.</p>
    </section>
  `
};

export default function ClarificationsPage({ params }: { params: { lang: Language } }) {
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
      <ReadingPath currentSlug="clarifications" lang={params.lang} />
    </article>
  );
}
