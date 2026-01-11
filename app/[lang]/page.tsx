import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  en: `
    <h1 style="font-size: 3.5rem; line-height: 1.1; margin-bottom: 2.5rem; font-weight: 700; letter-spacing: -0.035em; color: #000;">Evidence must exist before questions.</h1>
    <p style="font-size: 1.375rem; line-height: 1.75; color: #18181b; margin-bottom: 2rem; max-width: 38rem;">A factual evidence layer for regulated institutions. Designed to capture and preserve, at the moment of execution, exactly what systems do and evaluate, without interfering with the operational flow.</p>
    <section style="margin-top: 3rem;"><hr style="border: none; height: 1px; background: linear-gradient(to right, transparent, #e4e4e7 20%, #e4e4e7 80%, transparent); margin-bottom: 2.5rem;" /></section>
    <p style="font-size: 1.125rem; line-height: 1.75; color: #000; margin-bottom: 1.5rem; font-weight: 600;">Reading path</p>
    <ol style="list-style: decimal; padding-left: 1.5rem; margin-left: 0.25rem; border-left: 2px solid #1e3a8a/20; margin-bottom: 1.5rem;">
      <li style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.75rem; padding-left: 1.25rem;"><strong>Approach</strong> : What is this infrastructure and why does it exist?</li>
      <li style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.75rem; padding-left: 1.25rem;"><strong>Illustrative scenario</strong> : Two possible worlds: reconstruction vs examination.</li>
      <li style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.75rem; padding-left: 1.25rem;"><strong>The Mechanism</strong> : What does it record and how?</li>
      <li style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.75rem; padding-left: 1.25rem;"><strong>Automated decisions</strong> : Why automated decisions create a specific evidence problem.</li>
      <li style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.75rem; padding-left: 1.25rem;"><strong>Contact</strong> : Two ways to engage.</li>
    </ol>
  `,
  fr: `
    <h1 style="font-size: 3.5rem; line-height: 1.1; margin-bottom: 2.5rem; font-weight: 700; letter-spacing: -0.035em; color: #000;">La preuve doit exister avant l'interrogation.</h1>
    <p style="font-size: 1.375rem; line-height: 1.75; color: #18181b; margin-bottom: 2rem; max-width: 38rem;">Une infrastructure de preuve factuelle pour les institutions régulées. Conçue pour capturer et préserver, au moment de l'exécution, l'action et l'évaluation réelles des systèmes, sans interférer avec les flux opérationnels.</p>
    <section style="margin-top: 3rem;"><hr style="border: none; height: 1px; background: linear-gradient(to right, transparent, #e4e4e7 20%, #e4e4e7 80%, transparent); margin-bottom: 2.5rem;" /></section>
    <p style="font-size: 1.125rem; line-height: 1.75; color: #000; margin-bottom: 1.5rem; font-weight: 600;">Parcours de lecture</p>
    <ol style="list-style: decimal; padding-left: 1.5rem; margin-left: 0.25rem; border-left: 2px solid #1e3a8a/20; margin-bottom: 1.5rem;">
      <li style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.75rem; padding-left: 1.25rem;"><strong>L'Approche</strong> : Qu'est-ce que cette infrastructure et pourquoi existe-t-elle ?</li>
      <li style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.75rem; padding-left: 1.25rem;"><strong>Scénario illustratif</strong> : Deux mondes possibles : reconstruction vs examen.</li>
      <li style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.75rem; padding-left: 1.25rem;"><strong>Le Dispositif</strong> : Que consigne-t-il et par quel moyen ?</li>
      <li style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.75rem; padding-left: 1.25rem;"><strong>Décisions automatisées</strong> : Pourquoi l'automatisation crée un problème de preuve spécifique.</li>
      <li style="font-size: 1.125rem; line-height: 1.75; color: #18181b; margin-bottom: 0.75rem; padding-left: 1.25rem;"><strong>Contact</strong> : Deux modes de collaboration.</li>
    </ol>
  `
};

export default function HomePage({
  params,
}: {
  params: { lang: Language };
}) {
  return (
    <article className="max-w-3xl">
      <div dangerouslySetInnerHTML={{ __html: content[params.lang] }} />
      
      <ReadingPath currentSlug="home" lang={params.lang} />
    </article>
  );
}
