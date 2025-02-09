/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [{
    source: '/',
    destination: '/games',
    permanent: true
  }]
};

export default nextConfig;
