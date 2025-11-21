/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sparkleshine-mount-ommaney.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,

  // Very important for Next.js App Router
  outDir: 'public', 
};
