<template lang="html">
  <div class="flex flex-row z-50 items-center align-vertical fixed w-full justify-between px-4 py-2 bg-gray-100 shadow">
    <div class="flex">
      <g-link to="/" class="text-gray-900 text-xl font-bold uppercase tracking-wide">{{ logo }}</g-link>
    </div>
    <div class="flex flex-row justify-around text-sm text-gray-800">
      <p class="pr-3">Delivery: <span class="font-bold tracking-wide">01/03/2020</span></p>
      <p class="pr-3">Threshold:
        <span class="font-bold text-red-700 tracking-wide">£278</span>
        <span class="font-bold tracking-wide">/ £300</span>
      </p>
      <p class="pr-3">Coverage:
        <span class="font-bold tracking-wide">89%</span>
      </p>
      <p class="pr-3">Footprint:
        <span class="font-bold tracking-wide text-green-700">LOW</span>
      </p>
    </div>
    <NavLinks></NavLinks>
  </div>
</template>

<script>
import NavLinks from '../Links/Links.vue'

export default {
  components: {
    NavLinks
  },
  data () {
    return {
      logo: 'Co-Nourish',
      agentActive: true,
      cartActive: true,
      orderActive: true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
