/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // Default: /path serves EN. /fr/path serves FR.
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: false, // do not auto-redirect based on browser header
  },
  async redirects() {
    // 2026-08-26 : legacy URLs point at the new site architecture.
    // Every source path still resolves via the catch-all route (its
    // md file remains on disk), but the nav and inbound-link answer
    // should be the new canonical URL. Redirects are 301 permanent
    // so search engines transfer authority.
    return [
      { source: '/enforcement',        destination: '/product/enforcement',        permanent: true },
      { source: '/governance',         destination: '/product/auditability',       permanent: true },
      { source: '/ask-less',           destination: '/product/progressive-context', permanent: true },
      { source: '/developers',         destination: '/docs',                       permanent: true },
      { source: '/how-it-works',       destination: '/docs/what-is-knowledge',     permanent: true },
      { source: '/vs',                 destination: '/product/enforcement',        permanent: true },
      // Solutions by role : legacy ai-agents and automate-approvals
      // slugs now redirect to the canonical solutions/by-role/*
      // pages. Old md files are retired ; new md files live under
      // md/solutions/by-role/.
      { source: '/ai-agents',          destination: '/solutions/by-role/ai-product-teams',    permanent: true },
      { source: '/automate-approvals', destination: '/solutions/by-role/compliance-officers', permanent: true },
      { source: '/stack',              destination: '/product/integrations',                  permanent: true },
      // 2026-08-28 : /pilot page renamed to /design-partners to make
      // room for a dedicated /pricing landing above it.
      { source: '/pilot',              destination: '/design-partners',            permanent: true },
    ];
  },
};

module.exports = nextConfig;
