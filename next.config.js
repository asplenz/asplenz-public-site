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
      { source: '/developers',         destination: '/product/integrations',       permanent: true },
      { source: '/how-it-works',       destination: '/docs/what-is-knowledge',     permanent: true },
      { source: '/vs',                 destination: '/product/enforcement',        permanent: true },
      // Solutions by role : ai-agents and automate-approvals keep
      // their slugs since they are addressed as by-role entries in
      // the new nav.
    ];
  },
};

module.exports = nextConfig;
