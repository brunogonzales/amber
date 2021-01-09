<template>
  <div class="flex flex-col space-y-3 px-3">
    <h2>Estoy buscando</h2>
    <div class="flex space-x-4 justify-center">
      <type
        v-for="type in types"
        :type="type"
        :key="type"
        @typeSelected="(typeSelected) => (missing.type = typeSelected)"
        :typeIsSelected="missing.type === type"
      />
    </div>
    <div class="flex flex-col">
      <text-field name="name" label="Nombre" v-model="missing.name" />
      <text-field
        name="description"
        label="Descripcion"
        v-model="missing.description"
      />
      <datetime-field
        name="last_seen"
        label="Visto por ultima vez"
        v-model="missing.last_seen"
      />
      <text-field name="location" label="Lugar" v-model="missing.location" />
      <file-field label="Foto" name="image" />
      <button
        @click="submit"
        class="bg-green py-6 text-white fixed bottom-0 left-0 w-full"
      >
        Publicar
      </button>
    </div>
  </div>
</template>

<script>
import { ADD_MISSING } from "@/constants/queries";
export default {
  data() {
    return {
      missing: {
        type: "person",
        name: "",
        description: "",
        last_seen: "",
        location: "",
      },
      types: ["person", "pet", "thing"],
    };
  },

  methods: {
    submit() {
      console.log(this.missing);

      this.$apollo.mutate({
        mutation: ADD_MISSING,
        variables: {
          type: this.missing.type,
          name: this.missing.name,
          description: this.missing.description,
          last_seen: this.missing.last_seen,
          location: this.missing.location,
        },
      });
    },
  },
};
</script>

<style>
</style>