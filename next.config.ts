import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const pagesPath = isGitHubPages && repositoryName ? `/${repositoryName}` : '';

const nextConfig: NextConfig = {
  output: isGitHubPages ? 'export' : undefined,
  // Vinext's static prerenderer currently cannot probe routes when basePath is
  // set, so route/public URLs use sitePath() while bundled assets use this.
  assetPrefix: pagesPath,
  trailingSlash: false,
  images: {
    // GitHub Pages cannot run Next's image optimization service.
    unoptimized: isGitHubPages,
  },
};

export default nextConfig;
