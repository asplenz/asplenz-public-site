import type { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import MarkdownPage from '../components/MarkdownPage';
import { loadPage, listPageSlugs, PageContent } from '../lib/content';

interface Props {
  page: PageContent;
}

export default function DynamicPage({ page }: Props) {
  return (
    <Layout title={page.title} description={page.description} fullBleedMain>
      <PageHero
        kicker={page.kicker || undefined}
        title={page.title}
        sub={page.description}
        ctaLabel={page.ctaLabel}
        ctaHref={page.ctaHref}
        contactEmail={page.contactEmail}
      />
      <MarkdownPage body={page.body} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const slugs = listPageSlugs().filter((s) => s !== 'home');
  const paths: { params: { slug: string }; locale: string }[] = [];
  for (const slug of slugs) {
    for (const locale of locales || ['en']) {
      paths.push({ params: { slug }, locale });
    }
  }
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params, locale }) => {
  const slug = params?.slug as string;
  const page = loadPage(slug, locale || 'en');
  return { props: { page } };
};
