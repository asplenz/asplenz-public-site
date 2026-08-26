import type { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import MarkdownPage from '../components/MarkdownPage';
import { loadPage, listPageSlugs, PageContent } from '../lib/content';

interface Props {
  page: PageContent;
}

// Catch-all route (2026-08-26). Supports both flat slugs
// (/enforcement, /security) and nested (/product/enforcement,
// /docs/quickstart-mcp-proxy) by reading a matching filesystem
// path under md/. The listPageSlugs helper walks the tree so any
// .en.md file yields its own URL.
export default function DynamicPage({ page }: Props) {
  return (
    <Layout
      title={page.title}
      description={page.description}
      fullBleedMain
      theme={page.theme}
    >
      <PageHero
        kicker={page.kicker || undefined}
        title={page.title}
        sub={page.description}
        ctaLabel={page.ctaLabel}
        ctaHref={page.ctaHref}
        contactEmail={page.contactEmail}
      />
      <MarkdownPage body={page.body} theme={page.theme} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = listPageSlugs().filter((s) => s !== 'home');
  const paths: { params: { slug: string[] }; locale: string }[] = [];
  for (const slug of slugs) {
    // URL path is the slug split on '/'. Next.js expects the catch-all
    // param as an array of segments (e.g. ['product', 'enforcement']).
    const segments = slug.split('/');
    for (const locale of locales || ['en']) {
      paths.push({ params: { slug: segments }, locale });
    }
  }
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params, locale }) => {
  const raw = params?.slug;
  const segments = Array.isArray(raw) ? raw : raw ? [raw as string] : [];
  const slug = segments.join('/');
  const page = loadPage(slug, locale || 'en');
  return { props: { page } };
};
