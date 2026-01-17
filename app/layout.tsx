import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Asplenz Horizon',
  description: 'A factual evidence layer for regulated institutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
