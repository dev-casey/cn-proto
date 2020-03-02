<template lang="html">
  <Layout>
    <section class="pt-32">
      <div>
        <g-link :to="category.path">
          {{ $page.category.id }}
        </g-link>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  name: "Category"
}
</script>

<style lang="css" scoped>
</style>

<page-query>
query Category ($id: ID) {
  category(id: $id) {
    id
    categoryName
  }
}
</page-query>
