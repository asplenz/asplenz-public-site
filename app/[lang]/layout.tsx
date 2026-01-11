import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/lib/types';

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Language };
}) {
  const otherLang = params.lang === 'en' ? 'fr' : 'en';
  
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-white border-b border-black/10 px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${params.lang}`} className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Asplenz Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="text-base font-medium tracking-tight text-black">ASPLENZ</span>
              <span className="text-xs text-zinc-500 tracking-wide">Evidence Infrastructure</span>
            </div>
          </Link>
          
          {/* Mobile Language Switch */}
          <Link 
            href={`/${otherLang}`}
            className="text-xs uppercase tracking-wider text-black/40 hover:text-black transition-colors px-3 py-2"
          >
            {otherLang}
          </Link>
        </div>
      </header>
      
      {/* Desktop Header (Sidebar) */}
      <Header lang={params.lang} />
      
      {/* Main Content */}
      <main className="lg:ml-80 px-4 py-8 lg:px-16 lg:py-16">
        {children}
      </main>
    </div>
  );
}
