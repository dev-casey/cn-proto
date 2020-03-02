<template lang="html">
  <Layout>
    <h1 class="pt-32 text-xl underline">{{ $page.tag.title }}</h1>
    <ul>
      <li
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id">
          <h1 class="border p-2">{{ edge.node.groupName }}</h1>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query ($id: ID) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Group {
            id
            groupName
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
