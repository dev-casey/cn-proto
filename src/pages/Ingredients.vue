<template lang="html">
  <Layout>
    <section class="grid grid-cols-3 gap-8 px-8 py-16">
      <IngredientPreview
      v-for="edge in $page.ingredients.edges"
      :key="edge.node.id"
      :ingredient="edge.node">
    </IngredientPreview>
    </section>
  </Layout>
</template>

<script>
import IngredientPreview from '../components/IngredientPreview'

export default {
  components: {
    IngredientPreview
  }
}
</script>

<page-query>
query Ingredients($page: Int) {
  ingredients: allIngredient(
    sortBy: "ingredientName", order: ASC,
    filter: {}
    page: $page
  ) {
    edges {
      node {
        id
        name: ingredientName
        path
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
