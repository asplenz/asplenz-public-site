import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/lib/LangContext'

export const metadata: Metadata = {
  title: 'Asplenz — Knowledge & Evidence for Decisions',
  description: 'Knowledge governs your decisions. Evidence proves them. Asplenz provides decision infrastructure for AI-native organizations.',
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
    <html lang="en">
      <body className="antialiased">
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  )
}
