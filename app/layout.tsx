import type { Metadata } from 'next'
import { DM_Serif_Display, Instrument_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/lib/LangContext'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: '400',
  variable: '--font-serif',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Knowledge — Gouvernance pour vos agents IA',
  description: 'Knowledge est le registre que vos agents interrogent avant d\'agir. Exposez vos règles, tracez comment elles ont été suivies.',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${dmSerif.variable} ${instrumentSans.variable} ${dmMono.variable}`}>
      <body className="antialiased">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
