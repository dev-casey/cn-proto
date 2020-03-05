<template lang="html">
  <div class="flex justify-between text-sm uppercase font-medium tracking-wide text-gray-600">
    <div v-if="agentActive" class="pr-3">
      <g-link to="/agent" class="text-md font-medium">A</g-link>
    </div>
    <div v-if="cartActive" class="pr-3">
      <g-link to="/cart" class="text-md font-medium">C</g-link>
    </div>
    <div v-if="orderActive" class="">
      <g-link to="/order" class="text-md font-medium">O</g-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      agentActive: true,
      cartActive: true,
      orderActive: true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
