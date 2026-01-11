import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitch from './LanguageSwitch';
import Navigation from './Navigation';
import { Language } from '@/lib/types';

interface HeaderProps {
  lang: Language;
}

export default function Header({ lang }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-80 h-screen border-r border-black/10 bg-white p-8 overflow-y-auto">
      <div className="space-y-8">
        {/* Logo / Brand - Link to Home */}
        <div>
          <Link href={`/${lang}`} className="block hover:opacity-70 transition-opacity">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Asplenz Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-medium tracking-tight text-black">ASPLENZ</span>
                <span className="text-xs text-zinc-500 tracking-wide">Evidence Infrastructure</span>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Language Switch */}
        <LanguageSwitch currentLang={lang} />
        
        {/* Navigation */}
        <Navigation lang={lang} />
      </div>
    </header>
  );
}
