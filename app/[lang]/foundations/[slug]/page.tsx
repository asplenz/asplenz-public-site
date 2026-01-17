import { getContentBySlug, getAllSlugs } from '@/lib/markdown';
import ReadingPath from '@/components/ReadingPath';
import { Language } from '@/lib/types';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    lang: Language;
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  const langs: Language[] = ['en', 'fr'];
  
  const params = [];
  for (const lang of langs) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }
  
  return params;
}

export default async function ContentPage({ params }: PageProps) {
  const { lang, slug } = params;
  const content = await getContentBySlug(slug, lang);
  
  if (!content) {
    notFound();
  }
  
  return (
    <article className="max-w-3xl">
      <div dangerouslySetInnerHTML={{ __html: content.content }} />
      
      <ReadingPath currentSlug={slug} lang={lang} />
    </article>
  );
}
