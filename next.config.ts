import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  images: {
    domains: [
      'sitem.ssgcdn.com',
      'e-dong1957.com',
      'simg.ssgcdn.com',
      'image.istarbucks.co.kr',
      'sui.ssgcdn.com',
    ],
  },
};

export default nextConfig;
