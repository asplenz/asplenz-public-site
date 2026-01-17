import LanguageSwitch from './LanguageSwitch';
import Navigation from './Navigation';
import { Language } from '@/lib/types';

interface HeaderProps {
  lang: Language;
}

export default function Header({ lang }: HeaderProps) {
  return (
    <header className="hidden lg:block fixed top-14 left-0 w-80 h-[calc(100vh-3.5rem)] border-r border-black/10 bg-white p-8 overflow-y-auto">
      <div className="space-y-8">
        {/* Language Switch */}
        <LanguageSwitch currentLang={lang} />

        {/* Navigation */}
        <Navigation lang={lang} />
      </div>
    </header>
  );
}
