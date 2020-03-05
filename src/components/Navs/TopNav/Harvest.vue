<template lang="html">
  <div class="flex flex-row z-50 items-center align-vertical fixed w-full justify-between px-4 py-2 bg-gray-100 shadow">
    <div class="flex">
      <g-link to="/" class="text-gray-900 text-xl font-bold uppercase tracking-wide">{{ logo }}</g-link>
    </div>
    <div class="flex flex-row justify-around text-sm text-gray-800">
      <p class="pr-3">Location: <span class="font-bold tracking-wide">Rectory Road</span></p>
      <p class="pr-3">Availability:
        <span class="font-bold text-green-700 tracking-wide">High</span>
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
      logo: 'Co-Nourish'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
