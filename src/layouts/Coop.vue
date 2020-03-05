<template>
  <div class="coop">
    <header class="header">
      <Navbar></Navbar>
    </header>
    <slot/>
  </div>
</template>

<script type="text/javascript">
import Navbar from '~/components/Navs/TopNav/Coop'
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
