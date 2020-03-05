<template lang="html">
  <section class="w-1/4">
    <ul>
      <li v-for="edge in $page.groups.edges" :key="edge.node.id">
        {{ edge.node.name }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
}
</script>

<page-query>
query Groups {
  groups: allGroup (sortBy: "name", order: ASC) {
    edges {
      node {
        id
        name: groupName
        path
      }
    }
  }
}
</page-query>

<style lang="css" scoped>
</style>
