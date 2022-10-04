const SitemapGenerator = require('sitemap-generator');
 
// create generator
const generator = SitemapGenerator('https://techyaries.in/', {
  maxDepth: 0,
  filepath: './public/sitemap.xml',
  maxEntriesPerFile: 50000,
  stripQuerystring: false
});
 
// register event listeners
generator.on('done', () => {
  // sitemaps created
});
 
// start the crawler
generator.start();