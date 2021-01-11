<template>
  <input
    class="border"
    :value="value"
    @input="$emit('input', $event.target.value)"
    :placeholder="placeholder"
  />
</template>
<script>
export default {
  props: {
    value: String,
    placeholder: String,
  },
};
</script>