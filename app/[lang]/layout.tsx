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
      {/* Minimal Header for Landing Pages */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <Link href={`/${params.lang}`} className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <Image
              src="/logo.png"
              alt="Asplenz Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-lg font-medium tracking-tight text-black">ASPLENZ</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href={`/${params.lang}/white-paper`}
              className="text-sm text-black/60 hover:text-black transition-colors hidden sm:block"
            >
              White Paper
            </Link>
            <Link
              href={`/${otherLang}`}
              className="text-sm uppercase tracking-wider text-black/40 hover:text-black transition-colors"
            >
              {otherLang}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content - Full Width for Landing Pages */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Asplenz Logo"
                width={24}
                height={24}
                className="object-contain opacity-60"
              />
              <span className="text-sm text-black/40">Asplenz</span>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-black/40">
              <Link href={`/${params.lang}/white-paper`} className="hover:text-black transition-colors">
                White Paper
              </Link>
              <Link href={`/${params.lang}/engagement`} className="hover:text-black transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
