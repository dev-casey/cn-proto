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
      <h1 class="text-2xl font-semibold pb-8">Store Options</h1>
      <div class="grid grid-cols-3 gap-8">
        <CategoryPreview
          v-for="category in categories"
          :key="category.name"
          :category="category">
        </CategoryPreview>
      </div>
    </section>
    <section class="px-8 pt-8">
      <h1 class="text-2xl font-semibold pb-8">Tags</h1>
      <div class="grid grid-cols-3 gap-8">
        <TagPreview
          v-for="edge in $page.tags.edges"
          :key="edge.node.id"
          :tag="edge.node">
        </TagPreview>
      </div>
    </section>
  </Layout>
</template>

<script>
import CategoryPreview from '../components/CategoryPreview.vue'
import TagPreview from '../components/TagPreview.vue'

export default {
  name: 'Index',
  components: {
    CategoryPreview,
    TagPreview
  },
  data() {
    return {
      categories: [
        {
          name: 'Food Products',
          path: '/food-products',
          component: './src/pages/Products.vue'
        },
        {
          name: 'Local Harvest',
          path: '/local-harvest',
          component: './src/pages/Harvest.vue'
        },
        {
          name: 'Wholefoods',
          path: '/wholefoods',
          component: './src/pages/Wholefoods.vue'
        }
      ]
    }
  }
}
</script>

<page-query>
query Tags {
  tags: allTag {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<style lang="css" scoped>
</style>
