<template>
  <div>
    <input
      class="border rounded-full w-full py-2 px-4"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
export default {
  props: {
    value: String,
    placeholder: String,
  },
};
</script>