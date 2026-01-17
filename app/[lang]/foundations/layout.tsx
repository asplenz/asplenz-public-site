import { Language } from '@/lib/types';

export default function WhitePaperLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Language };
}) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {children}
    </div>
  );
}
