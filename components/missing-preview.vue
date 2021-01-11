<template>
  <div
    class="flex flex-col space-y-2 shadow-lg border-2 border-blue-dark rounded w-full"
  >
    <nuxt-link :to="'/' + missing.id">
      <p>
        {{ missing.name }}
      </p>
      <p>
        Visto por ultima vez {{ missing.last_seen }} en {{ missing.location }}
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    missing: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>