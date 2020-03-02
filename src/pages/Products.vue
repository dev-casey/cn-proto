<template>
  <Layout>
    <section class="grid grid-cols-3 gap-8 px-8 py-16">
      <ProductPreview
        v-for="edge in $page.products.edges"
        :key="edge.node.id"
        :product="edge.node">
      </ProductPreview>
    </section>
    <section>
      <Pager :info="$page.products.pageInfo" class="page-nav mb-16" />
    </section>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'
import ProductPreview from '../components/ProductPreview'

export default {
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

<style>
.page-nav {
  display: flex;
  justify-content: center;
  flex: 0 1 auto;
}
.page-nav a {
  box-sizing: border-box;
  width: 2em;
  background-color: #E3E3E3;
  color: black;
  font-weight: bold;
  margin: .5em;
  text-align: center;
  text-decoration: none;
  border-radius: .2em;
}
.page-nav a.active {
  font-weight: normal;
  background-color: hsla(36, 72%, 81%, 1);
}
</style>
