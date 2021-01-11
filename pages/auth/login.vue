<template>
  <h1>LOADING>...</h1>
</template>

<script>
export default {
  mounted() {
    this.$auth.login();
  },
};
</script>