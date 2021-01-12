<template>
  <div class="flex w-full flex-col">
    <field-label :for="name">{{ label }}</field-label>
    <input
      :name="name"
      class="border rounded h-8 pl-1"
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