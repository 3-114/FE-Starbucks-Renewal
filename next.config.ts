import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sitem.ssgcdn.com',
        pathname: '/**',
        port: '',
      },
    ],
  },
};

export default nextConfig;
