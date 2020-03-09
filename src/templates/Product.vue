<template>
  <Layout>
    <section class="pt-32">
      <h1>ID: {{ $page.product.id }}</h1>
      <h1>Name: {{ $page.product.name }}</h1>
      <h1>Size: {{ $page.product.size }}</h1>
      <h1>Process: {{ $page.product.process }}</h1>
      <h1>Variety: {{ $page.product.variety }}</h1>
      <h1>Item: {{ $page.product.item }}</h1>
      <h1>Form: {{ $page.product.form }}</h1>
      <h1>Categories: {{ $page.product.categories }}</h1>
      <h1>pricePerWeight: {{ $page.product.pricePerWeight }}</h1>
      <h1>organic: {{ $page.product.organic }}</h1>
      <h1>earthGrown: {{ $page.product.earthGrown }}</h1>
      <h1>fairTrade: {{ $page.product.fairTrade }}</h1>
      <h1>Gluten Free: {{ $page.product.glutenFree }}</h1>
      <h1>superfood: {{ $page.product.superfood }}</h1>
      <h1>inStock: {{ $page.product.inStock }}</h1>

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
    inStock: stock
  }
}
</page-query>
