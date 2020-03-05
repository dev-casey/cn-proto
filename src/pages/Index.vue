<template lang="html">
  <Layout>
    <section class="px-64 py-16 flex flex-col bg-green-600 h-104 text-center justify-center items-center">
      <div class="max-w-sm">
        <h1 class="text-2xl tracking-wide mb-2">Welcome to your local<br>
          <span class="font-semibold text-3xl">
            Community Food Coop
          </span>
        </h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
    <section class="px-8 pt-8">
      <h1 class="text-2xl font-semibold pb-8">Product List</h1>
      <div class="grid grid-cols-3 gap-8">
        <ProductPreview
          v-for="edge in $page.products.edges"
          :key="edge.node.id"
          :product="edge.node">
        </ProductPreview>
      </div>
    </section>
    <section>
      <Pager :info="$page.products.pageInfo" class="page-nav mb-16" />
    </section>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'
import ProductPreview from '../components/Previews/Product.vue'

export default {
  name: 'Index',
  components: {
    Pager,
    ProductPreview
  },
  data() {
    return {
    }
  }
}
</script>

<page-query>
query Products($page: Int) {
  products: allProduct(sortBy: "productName", order: ASC, perPage: 18, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        name: productName
        source
        item
        form
        categories
        pricePerWeight
        organic
        earthGrown
        glutenFree
        fairTrade
        superfood
      }
    }
  }
}
</page-query>

<style lang="css" scoped>
</style>
