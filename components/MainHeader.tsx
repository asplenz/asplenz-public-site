'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Language } from '@/lib/types';

interface MainHeaderProps {
  lang: Language;
}

export default function MainHeader({ lang }: MainHeaderProps) {
  const pathname = usePathname();
  const otherLang = lang === 'en' ? 'fr' : 'en';
  const isFoundations = pathname.includes('/foundations');

  const foundationsLabel = lang === 'en' ? 'Foundations' : 'Fondements';

  return (
    <header className="sticky top-0 z-50 bg-[#005C99] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="Asplenz Logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="text-lg font-medium tracking-tight text-white">ASPLENZ</span>
        </Link>

        <div className="flex items-center gap-6">
          {!isFoundations && (
            <Link
              href={`/${lang}/foundations`}
              className="text-sm text-white/70 hover:text-white transition-colors hidden sm:block"
            >
              {foundationsLabel}
            </Link>
          )}
          <Link
            href={isFoundations ? `/${otherLang}/foundations` : `/${otherLang}`}
            className="text-sm uppercase tracking-wider text-white/60 hover:text-white transition-colors"
          >
            {otherLang}
          </Link>
        </div>
      </div>
    </header>
  );
}
