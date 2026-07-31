import Link from 'next/link'
import Script from 'next/script'

export default function RootRedirect() {
  return (
    <>
      <Script id="lang-redirect" strategy="beforeInteractive">
        {`
          (function () {
            try {
              var stored = document.cookie.match(/(?:^|;\\s*)NEXT_LOCALE=(en|fr)/);
              var lang = stored ? stored[1] : (navigator.language || 'en').slice(0, 2);
              var target = lang === 'fr' ? '/fr' : '/en';
              window.location.replace(target);
            } catch (e) {
              window.location.replace('/en');
            }
          })();
        `}
      </Script>
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/en" />
        <p style={{ padding: 24, fontFamily: 'sans-serif' }}>
          Redirecting to <Link href="/en">/en</Link> or <Link href="/fr">/fr</Link>.
        </p>
      </noscript>
    </>
  )
}
