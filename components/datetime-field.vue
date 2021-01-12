<template>
  <div class="flex flex-col">
    <label :for="name">{{ label }}</label>
    <input
      :name="name"
      class="border rounded h-10"
      type="datetime-local"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
import { format, parseISO } from "date-fns";
export default {
  props: {
    label: String,
    name: String,
    value: String,
  },
  mounted() {
    this.$emit("input", format(new Date(), "yyyy-MM-dd'T'HH:mm"));
  },
};
</script>

<style>
</style>