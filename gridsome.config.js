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
      use: '~/src/data/foodcoop',
      options: {
        apiKey: 'keyrBK5AQ6XDpRwPw',
        base: 'appW55rTNEuyr5bpP'
      }
    }
  ],
  templates: {
    Group: [
      {
        path: '/g/:id/',
        component: './src/templates/Group.vue'
      }
    ],
    Ingredient: [
      {
        path: '/i/:id/',
        component: './src/templates/Ingredient.vue'
      }
    ],
    Product: [
      {
        path: '/p/:id/',
        component: './src/templates/Product.vue'
      }
    ],
    Tag: [
      {
        path: '/t/:id/',
        component: './src/templates/Tag.vue'
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
