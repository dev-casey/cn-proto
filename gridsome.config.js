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
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: []
    }
  },

  plugins: [
    {
    // Filesystem
      // Content: MD Posts
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: []
        }
      }
    },
    {
      // NetlifyCMS
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin',
        enableIdentityWidget: true
      }
    },
    {
      // Airtable
      use: '~/src/data/products',
      options: {
        apiKey: 'keyrBK5AQ6XDpRwPw',
        base: 'appW55rTNEuyr5bpP'
      }
    }
  ],
  templates: {
    Post: [
      {
        path: '/:title',
        component: './src/templates/Post.vue'
      }
    ],
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
