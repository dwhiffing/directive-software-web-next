/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [{
    source: '/',
    destination: '/games',
    permanent: true
  },
  {
    source: '/:path*',
    has: [{ type: 'header', key: 'host', value: 'directive.software' }],
    destination: 'https://www.directive.software/:path*',
    permanent: true,
  },]
};

export default nextConfig;
