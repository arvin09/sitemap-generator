# Sitemap generator

## Setup
```
 $ npm install
```

## How can we generate sitemaps for our website at build time

### So here I have tried two approaches
1. Standard - applicable to all website
    This uses the npm package [sitemap-generator] (https://www.npmjs.com/package/sitemap-generator), where we provide url and a sitemap is generated in public folder of the project

```
 $ npm run sitemap
```

2. React - applicable to only react projects with router
    This uses the npm package [react-router-sitemap] (https://www.npmjs.com/package/react-router-sitemap), where it takes input of the react router and based on it generates sitemap for the React site in public folder of the project

```
 $ npm run sitemap-react
```

Once you have this scripts ready you can add them to you build process and you should have your sitemap ready when ever your build step runs via Continues Integration or even manually 

Thanks!