/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [{
    source: '/',
    destination: '/games',
    permanent: false
  }]
};

export default nextConfig;
