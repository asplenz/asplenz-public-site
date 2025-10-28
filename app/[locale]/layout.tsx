import '../globals.css';
import React from 'react';
import { dict, Locale } from '../../lib/dictionaries';
import Link from 'next/link';
import Image from 'next/image';

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }];
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: Locale }
}) {
  const locale = params.locale;
  const d = dict[locale];

  return (
    <html lang={locale}>
      <body>
        <div className="container">
          {/* --- Header --- */}
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 24,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Image
                src="/logo.png"
                alt="Asplenz"
                width={40}
                height={40}
                priority
              />
              <div className="kicker">{d.brand}</div>
            </div>

            <nav className="lang" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Link href="/fr" className={locale === 'fr' ? 'active' : ''}>FR</Link>
              <span>·</span>
              <Link href="/en" className={locale === 'en' ? 'active' : ''}>EN</Link>
            </nav>
          </header>

          {/* --- Main content --- */}
          {children}

          {/* --- Footer --- */}
          <footer style={{ marginTop: 40, textAlign: 'center', fontSize: 12, color: '#777' }}>
            © {new Date().getFullYear()} Asplenz. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
