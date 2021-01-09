<template>
  <div class="flex flex-col space-y-1">
    <label :for="name">{{ label }}</label>
    <input
      :name="name"
      class="border rounded h-10"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
    value: String,
  },
};
</script>

<style>
</style>