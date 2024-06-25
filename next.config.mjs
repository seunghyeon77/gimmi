/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  workboxOptions: {},
  dest: 'public',
  disable: process.env.NEXT_PUBLIC_MODE === 'development',
});

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
