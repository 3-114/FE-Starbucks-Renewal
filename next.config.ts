import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  images: {
    domains: [
      'sitem.ssgcdn.com',
      'https://e-dong1957.com/kr/images/content/content_ready_img.png',
    ],
    unoptimized: true,
  },
};

export default nextConfig;
