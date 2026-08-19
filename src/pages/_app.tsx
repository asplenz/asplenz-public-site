import type { AppProps } from 'next/app';
import { DM_Serif_Display, Instrument_Sans, DM_Mono } from 'next/font/google';
import '../styles/globals.css';

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: '400',
  variable: '--font-serif',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Attach the next/font CSS variables to :root so body + all
          children can consume them via `var(--font-sans)` in globals.css. */}
      <style jsx global>{`
        :root {
          --font-sans: ${instrumentSans.style.fontFamily};
          --font-serif: ${dmSerif.style.fontFamily};
          --font-mono: ${dmMono.style.fontFamily};
        }
      `}</style>
      <div
        className={`${dmSerif.variable} ${instrumentSans.variable} ${dmMono.variable} font-sans`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
