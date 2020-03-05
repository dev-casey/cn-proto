// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/

    createPage({
      path: '/order',
      component: './src/pages/Coop/Order.vue'
    })


    createPage({
      path: '/account',
      component: './src/pages/Agent/Account.vue'
    })
    createPage({
      path: '/agent',
      component: './src/pages/Agent/Profile.vue'
    })
    createPage({
      path: '/cart',
      component: './src/pages/Agent/Cart.vue'
    })
    createPage({
      path: '/data',
      component: './src/pages/Agent/Data.vue'
    })
    createPage({
      path: '/persona',
      component: './src/pages/Agent/Persona.vue'
    })
    createPage({
      path: '/preferences',
      component: './src/pages/Agent/Preferences.vue'
    })

  })
}
