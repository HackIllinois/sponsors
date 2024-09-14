/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sponsors.pdf',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
