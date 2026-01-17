import Link from 'next/link';
import Image from 'next/image';
import MainHeader from '@/components/MainHeader';
import { Language } from '@/lib/types';

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Language };
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Header */}
      <MainHeader lang={params.lang} />

      {/* Main Content */}
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
              <Link href={`/${params.lang}/foundations`} className="hover:text-black transition-colors">
                {params.lang === 'en' ? 'Foundations' : 'Fondements'}
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
