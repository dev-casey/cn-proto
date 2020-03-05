// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/main.css')

import Default from '~/layouts/Default.vue'
import Agent from '~/layouts/Agent.vue'
import Products from '~/layouts/Products.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', Default)
  Vue.component('Agent', Agent)
  Vue.component('Products', Products)
}
