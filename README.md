![11ty_logo](/11ty_logo.png)

# 111ty base clone for 11ty with Tailwind

This starter contains a combination of good practices and best plugin and module choices to save you repetitive setup steps everytime you create a new 11ty site. It saves about 30-mins of setup each time.

**Features included**
* Good baseline eleventy folder structure
* [Site and page level SEO](https://github.com/artstorm/eleventy-plugin-seo)
* [Official navigation plugin](https://github.com/11ty/eleventy-navigation)
* [TailwindCSS pipeline with PurgeCSS](https://github.com/dafiulh/eleventy-plugin-tailwindcss#readme) setup to cope with `.njk, .html and .svg` by default
* [Inlining of JS from UnPkg CDN](https://github.com/jaredgorski/eleventy-njk-unpkg-inliner#readme) This may get changed to JSDelivr due to the lack of minification with UnPkg
* Basic `site.js` site level metadata file (JS used to allow dynamic variables such as build time)
* `_includes`folder supporting SVG and component inlining as well as layouts
* Very barebones `base.njk` layout
* Nunjucks as primary template engine
