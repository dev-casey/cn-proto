<template>
  <div class="layout">
    <header class="header">
      <Navbar></Navbar>
    </header>
    <slot/>
  </div>
</template>

<script type="text/javascript">
import Navbar from '~/components/Navbar'
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
