<template>
  <div
    :class="[
      'bg-white border text-black flex flex-col space-y-4 p-5 items-center flex-1 rounded cursor-pointer',
      typeIsSelected ? 'border-black  bg-green' : '',
    ]"
    @click="$emit('typeSelected', type)"
  >
    <div>
      <img :src="`icons/${type}.svg`" />
    </div>
    <p class="capitalize">{{ $t(type) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    typeIsSelected: Boolean,
  },
};
</script>

<style>
</style>