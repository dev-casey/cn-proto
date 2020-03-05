<template lang="html">
  <div class="max-w-sm w-full xl:max-w-full xl:flex">
    <div class="h-48 xl:h-auto xl:w-48 flex flex-col justify-between bg-cover text-center overflow-hidden bg-1 relative">
      <div class="flex justify-between mb-2">
        <g-link :to="ingredient.path" class="text-gray-100 p-4 text-xl font-medium text-md">
          {{ ingredient.name }}
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngredientPreview',
  props: ['ingredient']
}
</script>

<style lang="css" scoped>
.bg-1 {
  background-image: url('../../assets/imgs/img-1.png');
}
</style>
