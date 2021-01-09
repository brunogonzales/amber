<template>
  <div class="flex flex-col space-y-2">
    <label :for="name">{{ label }}</label>
    <input
      :name="name"
      class="border rounded"
      type="file"
      @change="$emit('change', $event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
  },
};
</script>

<style>
</style>