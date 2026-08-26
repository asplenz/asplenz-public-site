import type { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import MarkdownPage from '../components/MarkdownPage';
import { loadPage, PageContent } from '../lib/content';

interface Props {
  page: PageContent;
}

// Home page is markdown-body content (7 sections per the site strategy).
// No PageHero prefix - the body carries its own H1 + hero paragraph so
// the composition stays entirely authored in md.
export default function Home({ page }: Props) {
  return (
    <Layout
      title={page.title}
      description={page.description}
      fullBleedMain
      theme={page.theme}
    >
      <MarkdownPage body={page.body} theme={page.theme} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const page = loadPage('home', locale || 'en');
  return { props: { page } };
};
