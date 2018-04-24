var sm = require('sitemap'),
  fs = require('fs');

var sitemap = sm.createSitemap({
  hostname: 'http://www.ruthscoolcakes.co.uk',
  urls: [
    {
      url: '/',
      priority: 0.8
    }, {
      url: '/gallery',
      priority: 0.8
    }, {
      url: '/flavours',
      priority: 0.8
    }, {
      url: '/reviews',
      priority: 0.8
    }, {
      url: '/contact',
      priority: 0.8
    }
  ]
});

fs.writeFileSync("./dist/sitemap.xml", sitemap.toString());
