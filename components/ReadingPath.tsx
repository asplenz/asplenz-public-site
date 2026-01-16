import Link from 'next/link';
import { getNextInReadingPath } from '@/lib/navigation';
import { Language } from '@/lib/types';

interface ReadingPathProps {
  currentSlug: string;
  lang: Language;
}

export default function ReadingPath({ currentSlug, lang }: ReadingPathProps) {
  const nextPage = getNextInReadingPath(currentSlug);
  
  if (!nextPage) {
    return null;
  }
  
  return (
    <div className="mt-16 pt-8 border-t border-black/10">
      <p className="text-xs uppercase tracking-wider text-black/40 mb-3">
        {lang === 'en' ? 'Next' : 'Suivant'}
      </p>
      <Link
        href={`/${lang}/white-paper/${nextPage.slug}`}
        className="group inline-flex items-center gap-2 text-black hover:text-[#1e3a8a] transition-colors"
      >
        <span className="text-lg font-medium">{nextPage.title[lang]}</span>
        <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}
