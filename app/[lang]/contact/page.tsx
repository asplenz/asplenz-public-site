import Link from 'next/link';
import { Language } from '@/lib/types';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

const content = {
  fr: {
    title: 'Contact',
    subtitle: 'Asplenz s\'engage dans des conversations où la responsabilité compte.',
    getInTouch: 'Nous contacter',
    context: 'Vous souhaitez discuter d\'Horizon, d\'un diagnostic IA, ou d\'un accompagnement audit.',
    name: 'Ahmed Mohamed Ali',
    role: 'Fondateur & CEO, Asplenz',
    email: 'amohamedali@asplenz.com',
    phone: '+33 6 84 97 15 84',
    linkedin: 'linkedin.com/in/ahmohamedali',
    backToHome: 'Retour à l\'accueil',
  },
  en: {
    title: 'Contact',
    subtitle: 'Asplenz engages in conversations where accountability matters.',
    getInTouch: 'Get in touch',
    context: 'You want to discuss Horizon, an AI diagnostic, or audit support.',
    name: 'Ahmed Mohamed Ali',
    role: 'Founder & CEO, Asplenz',
    email: 'amohamedali@asplenz.com',
    phone: '+33 6 84 97 15 84',
    linkedin: 'linkedin.com/in/ahmohamedali',
    backToHome: 'Back to home',
  },
};

export default function ContactPage({
  params,
}: {
  params: { lang: Language };
}) {
  const c = content[params.lang];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-black mb-4">
            {c.title}
          </h1>
          <p className="text-xl lg:text-2xl text-black/60 font-light">
            {c.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-black mb-2">{c.getInTouch}</h2>
          <p className="text-black/60 mb-8">{c.context}</p>

          <div className="bg-white p-8 border border-black/5 max-w-md">
            <h3 className="text-xl font-bold text-black mb-1">{c.name}</h3>
            <p className="text-black/60 mb-6">{c.role}</p>

            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-black/40 mb-1">Email</p>
                <a
                  href={`mailto:${c.email}`}
                  className="text-[#1e3a8a] hover:underline font-medium"
                >
                  {c.email}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-black/40 mb-1">{params.lang === 'fr' ? 'Téléphone' : 'Phone'}</p>
                <a
                  href={`tel:${c.phone.replace(/\s/g, '')}`}
                  className="text-black hover:text-[#1e3a8a] transition-colors"
                >
                  {c.phone}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-black/40 mb-1">LinkedIn</p>
                <a
                  href={`https://${c.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1e3a8a] hover:underline"
                >
                  {c.linkedin}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href={`/${params.lang}`}
            className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors"
          >
            <span>←</span> {c.backToHome}
          </Link>
        </div>
      </section>
    </div>
  );
}
