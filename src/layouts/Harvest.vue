<template>
  <div class="harvest">
    <header class="header">
      <Navbar></Navbar>
    </header>
    <slot/>
  </div>
</template>

<script type="text/javascript">
import Navbar from '~/components/Navs/TopNav/Harvest'
export default {
  components: {
    Navbar
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
</style>
