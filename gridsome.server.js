// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // api.loadSource(({ addCollection, store }) => {
  //   // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  //
  //   const posts = addCollection('Post')
  //   const tags = addCollection('Tag')
  //
  //   // posts.addReference('tags', 'Tag')
  //
  //   const tag = tags.addNode({
  //     id: '1',
  //     title: 'Tag 1'
  //   })
  //
  //   const post = posts.addNode({
  //     id: '1',
  //     title: 'Post 2',
  //     tag: store.createReference(tag)
  //   })
  // })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    createPage({
      path: '/food-products',
      component: './src/pages/Products.vue'
    })
    createPage({
      path: '/local-harvest',
      component: './src/pages/Harvest.vue'
    })
    createPage({
      path: '/wholefoods',
      component: './src/pages/Wholefoods.vue'
    })
  })
}
