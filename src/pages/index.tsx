import type { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import MarkdownPage from '../components/MarkdownPage';
import { loadPage, PageContent } from '../lib/content';

interface Props {
  page: PageContent;
}

// 2026-08-26 : home page reshipped as markdown body content (7 sections
// per the from-scratch site strategy). No PageHero prefix - the body
// carries its own H1 + hero paragraph so the composition stays entirely
// authored in md. The legacy HomeLayout (data-driven, 7 typed YAML
// sections) is preserved in the component tree but no longer consumed
// from the home route ; delete on next sweep if no other page needs
// its shape.
export default function Home({ page }: Props) {
  return (
    <Layout title={page.title} description={page.description} fullBleedMain>
      <MarkdownPage body={page.body} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const page = loadPage('home', locale || 'en');
  return { props: { page } };
};
