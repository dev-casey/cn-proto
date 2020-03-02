<template>
  <Layout>
    <section class="pt-32">
      <h1>{{ $page.product.name }}</h1>
    </section>
  </Layout>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'Product'
}
</script>

<page-query>
query Product ($id: ID) {
  product(id: $id) {
    id
    name: productName
    size
    process
    variety
    item
    form
    categories
    pricePerWeight
    organic
    earthGrown
    fairTrade
    glutenFree
    superfood
    stock
  }
}
</page-query>
