<template>
  <label class="text-bold" :name="name">
    <slot></slot>
  </label>
</template>


<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style>
</style>