<template lang="html">
  <div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div class="h-48 lg:h-auto lg:w-48 flex flex-col justify-between bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg relative" title="">
      <div class="flex justify-between absolute p-2">
        <div class="flex text-xs">
          <span v-if="product.organic" class="rounded-full border text-gray-100 border-gray-400 shadow px-2 font-bold mr-1">
            Org
          </span>
          <span v-if="product.earthGrown" class="rounded-full border text-gray-100 border-gray-400 shadow px-2 font-bold mr-1">
            EG
          </span>
          <span v-if="product.fairTrade" class="rounded-full border text-gray-100 border-gray-400 shadow px-2 font-bold mr-1">
            FT
          </span>
          <span v-if="product.glutenFree" class="rounded-full border text-gray-100 border-gray-400 shadow px-2 font-bold mr-1">
            GF
          </span>
          <span v-if="product.superfood" class="rounded-full border text-gray-100 border-gray-400 shadow px-2 font-bold mr-1">
            SF
          </span>
        </div>
      </div>
      <div class="flex items-center absolute bottom-0 right-0 p-2">
        <div class="">
          <p class="text-gray-400 text-sm">
            From
            <span class="text-gray-100 text-sm font-medium">
              {{ product.pricePerWeight }}
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-3 flex flex-col justify-between leading-normal">
      <div class="">
        <div class="flex justify-between mb-2">
          <g-link :to="product.path" class="text-gray-900 font-medium text-md">
            {{ product.name }}
          </g-link>
        </div>
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
  background-image: url('../assets/imgs/img.png');
}
</style>
