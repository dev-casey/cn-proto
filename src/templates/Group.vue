<template>
  <Layout>
    <section class="pt-32">
      <h1>{{ $page.group.groupName }}</h1>
      <ul>
        <li
          v-for="edge in $page.group.belongsTo.edges"
          :key="edge.node.id">
            <h1 class="border">{{ edge.node.title }}</h1>
        </li>
      </ul>
    </section>
  </Layout>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'Group'
}
</script>

<page-query>
query ($id: ID) {
  group(id: $id) {
    groupName
    belongsTo {
      edges {
        node {
          ... on Tag {
            id
            title
          }
        }
      }
    }
  }
}
</page-query>
