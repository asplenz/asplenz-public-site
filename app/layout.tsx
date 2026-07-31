import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asplenz.com'),
  title: {
    default: 'Asplenz Knowledge',
    template: '%s | Asplenz Knowledge',
  },
  description: 'Compliance Decision Platform for regulated industries.',
  icons: {
    icon: '/images/log2_normal.png',
    apple: '/images/log2_normal.png',
  },
  openGraph: {
    siteName: 'Asplenz Knowledge',
    type: 'website',
    images: ['/images/log2_normal.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/log2_normal.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
