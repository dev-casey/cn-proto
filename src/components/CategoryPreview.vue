<template lang="html">
  <g-link :to="category.path" class="max-w-sm w-full xl:max-w-full xl:flex h-48 xl:h-auto xl:w-48 flex flex-col justify-between bg-cover bg-1 relative justify-around items-center">
    <h1 class="text-gray-100 text-2xl font-medium text-md">
      {{ category.name }}
    </h1>
  </g-link>
</template>

<script>
export default {
  name: 'CategoryPreview',
  props: ['category']
}
</script>

<style lang="css" scoped>
.bg-1 {
  background-image: url('../assets/imgs/img-1.png');
}
</style>
