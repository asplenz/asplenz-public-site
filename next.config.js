/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // Default: /path serves EN. /fr/path serves FR.
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localeDetection: false, // do not auto-redirect based on browser header
  },
};

module.exports = nextConfig;
