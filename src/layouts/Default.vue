<template>
  <div class="default">
    <header class="header">
      <Navbar></Navbar>
    </header>
    <slot/>
  </div>
</template>

<script type="text/javascript">
import Navbar from '~/components/Navs/TopNav/Default'
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
