<template>
  <Layout>
    {{ title }}

    <section class="products">
      <ProductPreview
        v-for="edge in $page.allProduct.edges"
        :key="edge.node.id"
        :to="edge.node.path"
        :product="edge.node" />
    </section>

    <Pager :info="$page.allProduct.pageInfo" class="product-navigation" />
    <div class="">
      {{ $page.allProduct.pageInfo.currentPage }}
      -
      {{ $page.allProduct.pageInfo.totalPages }}
    </div>
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
      title: 'Hello, world!'
    }
  }
}
</script>

<page-query>
</page-query

<style>
.product-navigation {
  display: flex;
  justify-content: center;
  flex: 0 1 auto;
}
.product-navigation a {
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
.product-navigation a.active {
  font-weight: normal;
  background-color: hsla(152, 65%, 80%, 1);
}
.products {
  display: flex;
  flex-wrap: wrap;
}
.products figure, .products img {
  width: 100%;
  margin: 0;
}
.products a {
  color: inherit;
}
.products .product {
  display: block;
  width: 10em;
  margin: 1em;
}
.product button {
  width: 100%;
}

</style>
