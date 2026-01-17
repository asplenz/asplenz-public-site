import Header from '@/components/Header';
import MobileMenu from '@/components/MobileMenu';
import { Language } from '@/lib/types';

export default function WhitePaperLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Language };
}) {
  return (
    <div className="flex">
      {/* Desktop Sidebar */}
      <Header lang={params.lang} />

      {/* Mobile Menu Button (fixed position) */}
      <div className="lg:hidden fixed top-2 right-4 z-50">
        <MobileMenu lang={params.lang} />
      </div>

      {/* Main Content */}
      <main className="lg:ml-80 w-full px-4 py-8 lg:px-16 lg:py-8">
        {children}
      </main>
    </div>
  );
}
