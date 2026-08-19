import type { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import HomeLayout, { HomeSections } from '../components/HomeLayout';
import { loadPage, PageContent } from '../lib/content';

interface Props {
  page: PageContent;
}

export default function Home({ page }: Props) {
  const sections = page.sections as unknown as HomeSections;
  return (
    <Layout title={page.title} description={page.description} fullBleedMain>
      <HomeLayout sections={sections} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const page = loadPage('home', locale || 'en');
  return { props: { page } };
};
