import Header from '@/components/Header';
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
      <Header lang={params.lang} />
      <main className="ml-80 px-16 py-16">
        {children}
      </main>
    </div>
  );
}
