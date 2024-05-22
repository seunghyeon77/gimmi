/** @type {import('next').NextConfig} */
import nextPWA from 'next-pwa';
const withPWA = nextPWA({ dest: 'public' });

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
};

export default withPWA(nextConfig);
