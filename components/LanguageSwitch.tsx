'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Language } from '@/lib/types';

interface LanguageSwitchProps {
  currentLang: Language;
}

export default function LanguageSwitch({ currentLang }: LanguageSwitchProps) {
  const pathname = usePathname();
  
  // Get URL for specific language
  const getLanguageUrl = (lang: Language) => {
    // Replace the language segment at the start of the path
    const segments = pathname.split('/');
    if (segments[1] === currentLang) {
      segments[1] = lang;
    }
    return segments.join('/') || `/${lang}`;
  };
  
  return (
    <div className="flex items-center gap-2 text-sm">
      {currentLang === 'fr' ? (
        <span className="font-bold text-black">FR</span>
      ) : (
        <Link
          href={getLanguageUrl('fr')}
          className="text-zinc-400 hover:text-black transition-colors"
        >
          FR
        </Link>
      )}
      <span className="text-zinc-300">|</span>
      {currentLang === 'en' ? (
        <span className="font-bold text-black">EN</span>
      ) : (
        <Link
          href={getLanguageUrl('en')}
          className="text-zinc-400 hover:text-black transition-colors"
        >
          EN
        </Link>
      )}
    </div>
  );
}
