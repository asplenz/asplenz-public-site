import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/lib/LangContext'

export const metadata: Metadata = {
  title: 'Horizon - Decision Evidence Infrastructure',
  description: 'Horizon seals declared facts. A neutral, append-only proof infrastructure that captures facts when they are declared.',
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
