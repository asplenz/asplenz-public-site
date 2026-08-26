import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  fullBleedMain?: boolean;
  theme?: string | null;
}

export default function Layout({ title, description, children, fullBleedMain = false, theme }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/log2_normal.png" />
      </Head>
      <div
        className="min-h-screen"
        data-theme={theme || undefined}
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <Nav />
        <main className={fullBleedMain ? 'pt-14' : 'pt-24 pb-20'}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
