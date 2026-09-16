import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    // GitHub Pages cannot run Next's image optimization service.
    unoptimized: true,
  },
};

export default nextConfig;
