import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

const content = {
  en: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Contact</h1>
    
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Beyond product demonstrations</h2>
    
    <blockquote style="border-left: 4px solid #1e3a8a; padding: 1.5rem 2rem; background: #fafafa; font-style: italic; margin: 2rem 0;">
      <p style="font-size: 1.25rem; line-height: 1.75; margin-bottom: 0; color: #18181b;"><strong>Evidence is a reality, not a simulation.</strong></p>
    </blockquote>
    
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;">Asplenz Horizon is not a product of simulation. Because the integrity of execution evidence is inseparable from its actual environment, we do not provide standard commercial demonstrations.</p>
    
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;">We believe that the generation of institutional evidence alongside critical systems is not a matter of technical features, but a fundamental question of organizational acceptability.</p>
    
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;">We prioritize a transition from conceptual dialogue to concrete validation :</p>
    
    <ul style="list-style: none; border-left: 1px solid #e4e4e7; margin: 1.5rem 0; padding: 0;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem; margin-bottom: 0.5rem;">
        <span style="flex-shrink: 0; font-size: 0.75rem; color: #a1a1aa;">■</span>
        <span style="font-size: 1.125rem; line-height: 1.75; color: #18181b;"><strong>Conceptual Acceptability</strong> : A structured dialogue to explore how fact-based infrastructure resolves the friction between operational execution and regulatory scrutiny.</span>
      </li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem; margin-bottom: 0.5rem;">
        <span style="flex-shrink: 0; font-size: 0.75rem; color: #a1a1aa;">■</span>
        <span style="font-size: 1.125rem; line-height: 1.75; color: #18181b;"><strong>In-Perimeter Validation</strong> : Deployments within your own trust boundary to examine the capability through the lens of real facts produced by your own systems.</span>
      </li>
    </ul>
    
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;">If your organization operates at the intersection of high stakes and high uncertainty, let us discuss the framework of your future record.</p>
    
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.5rem;"><strong>Contact for an Acceptability Discussion:</strong></p>
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.25rem;">Ahmed Mohamed Ali</p>
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.75rem;">Founder & CEO, Asplenz</p>
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.25rem;"><a href="mailto:amohamedali@asplenz.com" style="color: #18181b; text-decoration: underline;">amohamedali@asplenz.com</a></p>
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.25rem;">+33 (0)6 84 97 15 84</p>
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;"><a href="https://www.linkedin.com/in/ahmohamedali" target="_blank" rel="noopener noreferrer" style="color: #18181b; text-decoration: underline;">linkedin.com/in/ahmohamedali</a></p>
  `,
  fr: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Contact</h1>
    
    <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;">Au-delà de la démonstration produit</h2>
    
    <blockquote style="border-left: 4px solid #1e3a8a; padding: 1.5rem 2rem; background: #fafafa; font-style: italic; margin: 2rem 0;">
      <p style="font-size: 1.25rem; line-height: 1.75; margin-bottom: 0; color: #18181b;"><strong>La preuve est une réalité, pas une simulation.</strong></p>
    </blockquote>
    
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;">Asplenz Horizon n'est pas un outil de simulation. Parce que l'intégrité d'une preuve d'exécution est indissociable de son environnement réel, nous ne procédons à aucune démonstration commerciale standard.</p>
    
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;">Nous considérons que la production de preuves institutionnelles au cœur de systèmes critiques n'est pas une question de fonctionnalités techniques, mais un enjeu fondamental d'acceptabilité organisationnelle.</p>
    
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;">Nous privilégions une transition du dialogue conceptuel vers la validation concrète :</p>
    
    <ul style="list-style: none; border-left: 1px solid #e4e4e7; margin: 1.5rem 0; padding: 0;">
      <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem; margin-bottom: 0.5rem;">
        <span style="flex-shrink: 0; font-size: 0.75rem; color: #a1a1aa;">■</span>
        <span style="font-size: 1.125rem; line-height: 1.75; color: #18181b;"><strong>Acceptabilité Conceptuelle</strong> : Un dialogue structuré pour explorer comment une infrastructure de faits résout les tensions entre exécution opérationnelle et examen réglementaire.</span>
      </li>
      <li style="display: flex; align-items: baseline; gap: 0.75rem; padding-left: 1.25rem; margin-bottom: 0.5rem;">
        <span style="flex-shrink: 0; font-size: 0.75rem; color: #a1a1aa;">■</span>
        <span style="font-size: 1.125rem; line-height: 1.75; color: #18181b;"><strong>Validation en Intra-périmètre</strong> : Des déploiements au sein de votre propre périmètre de confiance pour examiner le dispositif à l'aune de faits réels produits par vos propres systèmes.</span>
      </li>
    </ul>
    
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;">Si votre organisation opère à l'intersection d'enjeux majeurs et d'une forte incertitude, engageons une discussion sur le cadre de vos futurs registres.</p>
    
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.5rem;"><strong>Contact pour une discussion d'acceptabilité :</strong></p>
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.25rem;">Ahmed Mohamed Ali</p>
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.75rem;">Founder & CEO, Asplenz</p>
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.25rem;"><a href="mailto:amohamedali@asplenz.com" style="color: #18181b; text-decoration: underline;">amohamedali@asplenz.com</a></p>
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.25rem;">+33 (0)6 84 97 15 84</p>
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;"><a href="https://www.linkedin.com/in/ahmohamedali" target="_blank" rel="noopener noreferrer" style="color: #18181b; text-decoration: underline;">linkedin.com/in/ahmohamedali</a></p>
  `
};

export default function ContactPage({ params }: { params: { lang: Language } }) {
  return (
    <article className="max-w-3xl">
      <div dangerouslySetInnerHTML={{ __html: content[params.lang] }} />
      <ReadingPath currentSlug="contact" lang={params.lang} />
    </article>
  );
}
