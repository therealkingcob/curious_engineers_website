const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const repositoryOwner = process.env.GITHUB_REPOSITORY?.split('/')[0];

export const siteBasePath =
  process.env.GITHUB_PAGES === 'true' && repositoryName
    ? `/${repositoryName}`
    : '';

export const siteUrl =
  process.env.GITHUB_PAGES === 'true' && repositoryOwner && repositoryName
    ? `https://${repositoryOwner}.github.io`
    : 'http://localhost:3000';

export function sitePath(path: string) {
  return `${siteBasePath}${path === '/' ? '' : path}` || '/';
}
