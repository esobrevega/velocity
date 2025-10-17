/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.velocitytaxexpress.com", // ✅ your live site URL
  generateRobotsTxt: true, // (optional) generate robots.txt as well
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin*", "/api/*", "/vte/test*", "/coming-soon"], // optional exclusions
}
