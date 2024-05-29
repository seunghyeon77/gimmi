/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
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
