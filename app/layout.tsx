import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asplenz.com'),
  title: {
    default: 'Asplenz Knowledge',
    template: '%s | Asplenz Knowledge',
  },
  description: 'Compliance runtime for regulated industries.',
  openGraph: {
    siteName: 'Asplenz Knowledge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
