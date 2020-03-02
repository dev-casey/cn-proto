<template lang="html">
  <Layout>
    <section class="grid grid-cols-3 gap-8 px-8 py-16">
      <GroupPreview
      v-for="edge in $page.groups.edges"
      :key="edge.node.id"
      :group="edge.node">
    </GroupPreview>
    </section>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'
import GroupPreview from '../components/GroupPreview'

export default {
  components: {
    GroupPreview
  }
}
</script>

<page-query>
query Groups {
  groups: allGroup (sortBy: "groupName", order: ASC) {
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
