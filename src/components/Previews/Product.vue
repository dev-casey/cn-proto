<template lang="html">
  <div class="w-full">
    <div class="h-64 flex flex-col justify-between rounded border shadow text-center bg-gray-100">
      <div class="flex text-xs p-2">
        <span v-if="product.organic" class="rounded-full border text-gray-600 border-gray-400 shadow px-2 font-bold mr-1">
          Org
        </span>
        <span v-if="product.earthGrown" class="rounded-full border text-gray-600 border-gray-400 shadow px-2 font-bold mr-1">
          EG
        </span>
        <span v-if="product.fairTrade" class="rounded-full border text-gray-600 border-gray-400 shadow px-2 font-bold mr-1">
          FT
        </span>
        <span v-if="product.glutenFree" class="rounded-full border text-gray-600 border-gray-400 shadow px-2 font-bold mr-1">
          GF
        </span>
        <span v-if="product.superfood" class="rounded-full border text-gray-600 border-gray-400 shadow px-2 font-bold mr-1">
          SF
        </span>
      </div>
      <div class="flex justify-center mb-2">
        <g-link :to="product.path" class="text-gray-800 font-medium text-lg uppercase tracking-wide">
          {{ product.name }}
        </g-link>
      </div>
      <div class="flex justify-end p-2">
        <p class="text-gray-400 text-sm">
          From
          <span class="text-gray-600 text-sm font-medium">
            {{ product.pricePerWeight }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPreview',
  props: ['product']
}
</script>

<style lang="css" scoped>
.bg {
  background-image: url('../../assets/imgs/img.png');
}
</style>
