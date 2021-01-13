<template>
  <form @submit.prevent="$emit('submit')" class="flex flex-col space-y-2">
    <text-field
      name="name"
      label="Nombre"
      v-model="missing.name"
      placeholder="Nombre"
    />
    <text-field
      name="description"
      label="Descripcion"
      v-model="missing.description"
      placeholder="Escribe algo..."
    />
    <datetime-field
      name="last_seen"
      label="Vista por ultima vez"
      v-model="missing.last_seen"
    />
    <location-field name="location" label="Lugar" v-model="missing.location" />

    <file-field
      label="Foto"
      name="image"
      @fileUpload="(url) => $emit('fileUpload', url)"
    />
    <button
      class="bg-green py-6 text-white fixed bottom-0 left-0 w-full"
      type="submit"
    >
      Publicar
    </button>
  </form>
</template>

<script>
export default {
  props: {
    missing: {
      type: Object,
      required: true,
    },
    submit: Function,
  },
};
</script>

<style>
</style>