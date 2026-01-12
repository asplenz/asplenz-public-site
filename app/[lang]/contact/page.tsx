import ReadingPath from '@/components/ReadingPath';
import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  en: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Engagement & Contact</h1>
    
    <blockquote style="border-left: 4px solid #1e3a8a; padding: 1.5rem 2rem; background: #fafafa; font-style: italic; margin: 2rem 0;">
      <p style="font-size: 1.25rem; line-height: 1.75; margin-bottom: 0; color: #18181b;"><strong>Evidence is a reality, not a simulation.</strong></p>
    </blockquote>
    
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;">Asplenz Horizon is not a product of simulation. Because the integrity of execution evidence is inseparable from its actual environment, we do not provide standard commercial demonstrations. We prioritize a transition from conceptual dialogue to concrete validation.</p>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; height: 1px; background: linear-gradient(to right, transparent, #e4e4e7 20%, #e4e4e7 80%, transparent); margin: 2.5rem 0;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;"><span style="color: #71717a; margin-right: 0.5rem; font-size: 1.75rem;">▪</span>1. Acceptability Dialogue</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1rem;"><strong>Concept:</strong> A structured discussion to assess whether and how factual execution evidence mechanisms could be institutionally acceptable within your infrastructure.</p>
      
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;"><strong>Objective:</strong> Identify institutional boundaries, clarify 'non-goals', and validate acceptability in principle (explicit adoption or non-adoption).</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; height: 1px; background: linear-gradient(to right, transparent, #e4e4e7 20%, #e4e4e7 80%, transparent); margin: 2.5rem 0;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;"><span style="color: #71717a; margin-right: 0.5rem; font-size: 1.75rem;">▪</span>2. Audit Readiness & Post-mortem</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1rem;"><strong>Concept:</strong> Assistance with evidence scoping, structuring factual dossiers, and articulating an institutional posture during formal examinations, regulatory investigations, or complex incident analyses.</p>
      
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;"><strong>Objective:</strong> Reduce exposure created by fragmented or reconstructed evidence <em>post-facto</em>. Separate facts, evaluations, and interpretations.</p>
    </section>
    
    <section style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid #e4e4e7;">
      <p style="font-size: 1.125rem; line-height: 1.75; color: #000; margin-bottom: 1rem; font-weight: 600;">Contact for an Engagement Discussion:</p>
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.25rem; font-weight: 600;">Ahmed Mohamed Ali</p>
      <p style="font-size: 1.125rem; line-height: 1.75; color: #52525b; margin-bottom: 0.75rem;">Founder & CEO, Asplenz</p>
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.25rem;">Email: <a href="mailto:amohamedali@asplenz.com" style="color: #18181b; text-decoration: underline;">amohamedali@asplenz.com</a></p>
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.25rem;">Mobile: <span style="unicode-bidi: bidi-override; direction: rtl;">48 51 79 48 6 33+</span></p>
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;"><a href="https://www.linkedin.com/in/ahmohamedali/" target="_blank" rel="noopener noreferrer" style="color: #18181b; text-decoration: underline; border-bottom: 1px solid #1e3a8a/30;">linkedin.com/in/ahmohamedali</a></p>
    </section>
  `,
  fr: `
    <h1 style="font-size: 2.25rem; line-height: 1.1; margin-bottom: 2rem; font-weight: 700; letter-spacing: -0.025em; color: #000;">Engagement & Contact</h1>
    
    <blockquote style="border-left: 4px solid #1e3a8a; padding: 1.5rem 2rem; background: #fafafa; font-style: italic; margin: 2rem 0;">
      <p style="font-size: 1.25rem; line-height: 1.75; margin-bottom: 0; color: #18181b;"><strong>La preuve est une réalité, pas une simulation.</strong></p>
    </blockquote>
    
    <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;">Asplenz Horizon n'est pas un produit de simulation. Parce que l'intégrité de la preuve d'exécution est inséparable de son environnement réel, nous ne fournissons pas de démonstrations commerciales standard. Nous privilégions une transition du dialogue conceptuel à la validation concrète.</p>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; height: 1px; background: linear-gradient(to right, transparent, #e4e4e7 20%, #e4e4e7 80%, transparent); margin: 2.5rem 0;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;"><span style="color: #71717a; margin-right: 0.5rem; font-size: 1.75rem;">▪</span>1. Dialogue d'Acceptabilité</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1rem;"><strong>Concept :</strong> Une discussion structurée pour évaluer si et comment les mécanismes de preuve factuelle d'exécution pourraient être institutionnellement acceptables au sein de votre infrastructure.</p>
      
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;"><strong>Objectif :</strong> Identifier les limites institutionnelles, clarifier les 'non-objectifs' et valider l'acceptabilité de principe (adoption ou non-adoption explicite).</p>
    </section>
    
    <section style="margin-top: 2.5rem;">
      <hr style="border: none; height: 1px; background: linear-gradient(to right, transparent, #e4e4e7 20%, #e4e4e7 80%, transparent); margin: 2.5rem 0;" />
      
      <h2 style="font-size: 1.5rem; line-height: 1.3; margin-bottom: 1rem; font-weight: 600; color: #000;"><span style="color: #71717a; margin-right: 0.5rem; font-size: 1.75rem;">▪</span>2. Audit Readiness & Post-mortem</h2>
      
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1rem;"><strong>Concept :</strong> Assistance au cadrage des preuves, à la structuration des dossiers factuels et à l'articulation d'une posture institutionnelle lors d'examens formels, d'enquêtes réglementaires ou d'analyses d'incidents complexes.</p>
      
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;"><strong>Objectif :</strong> Réduire l'exposition créée par des preuves fragmentées ou reconstruites <em>a posteriori</em>. Séparer les faits, les évaluations et les interprétations.</p>
    </section>
    
    <section style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid #e4e4e7;">
      <p style="font-size: 1.125rem; line-height: 1.75; color: #000; margin-bottom: 1rem; font-weight: 600;">Contact pour une discussion d'engagement :</p>
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.25rem; font-weight: 600;">Ahmed Mohamed Ali</p>
      <p style="font-size: 1.125rem; line-height: 1.75; color: #52525b; margin-bottom: 0.75rem;">Founder & CEO, Asplenz</p>
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.25rem;">Email : <a href="mailto:amohamedali@asplenz.com" style="color: #18181b; text-decoration: underline;">amohamedali@asplenz.com</a></p>
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.25rem;">Mobile : <span style="unicode-bidi: bidi-override; direction: rtl;">48 51 79 48 6 33+</span></p>
      <p style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 1.5rem;"><a href="https://www.linkedin.com/in/ahmohamedali/" target="_blank" rel="noopener noreferrer" style="color: #18181b; text-decoration: underline; border-bottom: 1px solid #1e3a8a/30;">linkedin.com/in/ahmohamedali</a></p>
    </section>
  `
};

export default function ContactPage({ params }: { params: { lang: Language } }) {
  return (
    <article className="max-w-3xl">
      <div className="mb-6">
        <Link href={`/${params.lang}`} className="text-sm text-zinc-400 hover:text-black transition-colors">
          ← ASPLENZ
        </Link>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content[params.lang] }} />
      <ReadingPath currentSlug="contact" lang={params.lang} />
    </article>
  );
}
