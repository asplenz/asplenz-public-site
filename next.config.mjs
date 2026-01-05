/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/fr',
        destination: '/',
        permanent: true
      },
      {
        source: '/fr/:path*',
        destination: '/:path*',
        permanent: true
      },
      {
        source: '/en',
        destination: '/',
        permanent: true
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
