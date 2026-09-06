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
      // 2026-09-06 : eliminate the /en duplicate that Google Search
      // Console flagged as "Duplicate without user-selected canonical".
      // Next.js i18n with defaultLocale=en serves the same content at
      // both `/` and `/en/*`. Redirecting `/en/*` -> `/*` collapses the
      // duplicate ; the Layout component also emits canonical +
      // hreflang tags for defense in depth.
      //
      // `locale: false` is required so the redirect source matches the
      // literal `/en/*` path. Without it, Next.js auto-prefixes the
      // pattern with the active locale, so `/en/foo` becomes
      // `/{locale}/en/foo` and never matches - the redirect silently
      // does nothing.
      { source: '/en/:path*',          destination: '/:path*',                     permanent: true, locale: false },
      { source: '/en',                 destination: '/',                           permanent: true, locale: false },
    ];
  },
};

module.exports = nextConfig;
