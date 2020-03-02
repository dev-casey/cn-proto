<template>
  <Layout>
    <section class="pt-32">
      <h1>{{ $page.ingredient.name }}</h1>
    </section>
  </Layout>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'Ingredient'
}
</script>

<page-query>
query Ingredient ($id: ID) {
  ingredient(id: $id) {
    id
    name: ingredientName
  }
}
</page-query>
