// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

module.exports = {
  siteName: 'Co-Nourish',
  siteUrl: 'https://collectivenourishment.org',
  plugins: [
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        modulePath: 'src/static/admin/index.js',
        configPath: 'src/static/admin/config.yml',
        htmlPath: 'src/static/admin/index.html',
        publicPath: '/admin',
        htmlTitle: 'CN Admin',
        enableIdentityWidget: false
      }
    },
    {
      use: '~/src/data/products',
      options: {
        apiKey: 'keyrBK5AQ6XDpRwPw',
        base: 'appW55rTNEuyr5bpP'
      }
    }
  ],
  templates: {
    Product: [
      {
        path: '/p/:id/',
        component: './src/templates/Product.vue'
      }
    ]
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      }
    }
  }
}
