<template>
  <h1 class="px-3 py-2">CARGANDO...</h1>
</template>

<script>
export default {
  mounted() {
    this.$auth.login();
  },
};
</script>