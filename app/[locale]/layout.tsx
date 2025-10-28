import '../globals.css';
import React from 'react';
import { dict, Locale } from '../../lib/dictionaries';
import Link from 'next/link';

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
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
            <div className="kicker">{d.brand}</div>
            <nav className="lang">
              <Link href="/fr" className={locale==='fr' ? 'active' : ''}>FR</Link>
              <span>·</span>
              <Link href="/en" className={locale==='en' ? 'active' : ''}>EN</Link>
            </nav>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
