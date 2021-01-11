<template>
  <div class="flex flex-col space-y-2">
    <field-label :for="name">{{ label }}</field-label>
    <input
      :name="name"
      class="border rounded h-10 pl-1"
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