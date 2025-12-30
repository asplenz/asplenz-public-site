import type { Metadata } from 'next'
import { i18n } from '@/lib/i18n/config'
import '@/app/globals.css'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
  title: 'Horizon - AI Decision Assurance',
  description: 'Prove what happened. Not what should have happened.',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  return (
    <html lang={params.then(p => p.lang).toString()}>
      <body>{children}</body>
    </html>
  )
}
