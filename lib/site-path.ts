export const siteBasePath = '';

export const siteUrl =
  process.env.GITHUB_PAGES === 'true'
    ? 'https://curiousengineers.org'
    : 'http://localhost:3000';

export function sitePath(path: string) {
  return `${siteBasePath}${path === '/' ? '' : path}` || '/';
}
