<template>
  <div class="flex flex-col space-y-3 px-3">
    <h2 class="text-xl">Estoy buscando</h2>
    <div class="flex space-x-4 justify-center">
      <type
        v-for="type in types"
        :type="type"
        :key="type"
        @typeSelected="(typeSelected) => (missing.type = typeSelected)"
        :typeIsSelected="missing.type === type"
      />
    </div>
    <div class="flex space-y-2 flex-col">
      <p v-for="error in errors" :key="error" class="text-red-400">
        {{ error }}
      </p>
    </div>
    <form @submit.prevent="submit" class="flex flex-col space-y-2">
      <text-field name="name" label="Nombre" v-model="missing.name" />
      <text-field
        name="description"
        label="Descripcion"
        v-model="missing.description"
      />
      <datetime-field
        name="last_seen"
        label="Vista por ultima vez"
        v-model="missing.last_seen"
      />
      <text-field name="location" label="Lugar" v-model="missing.location" />
      <file-field label="Foto" name="image" />
      <button
        class="bg-green py-6 text-white fixed bottom-0 left-0 w-full"
        type="submit"
      >
        Publicar
      </button>
    </form>
  </div>
</template>

<script>
import { ADD_MISSING } from "@/queries/add_missing";
export default {
  middleware: "auth",
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
      errors: [],
    };
  },
  watch: {
    missing: {
      handler(val) {
        this.errors = [];
      },
      deep: true,
    },
  },
  methods: {
    resetForm() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    validateForm() {
      const { name, type, description, last_seen, location } = this.missing;
      if (!name || !type || !description || !last_seen || !location) {
        this.errors.push("Por favor completa todos los campos");
      }
      if (!this.errors.length) {
        return true;
      }
    },
    submit(e) {
      if (!this.validateForm(e)) {
        return;
      }

      this.$apollo.mutate({
        mutation: ADD_MISSING,
        variables: {
          type: this.missing.type,
          name: this.missing.name,
          description: this.missing.description,
          last_seen: this.missing.last_seen,
          location: this.missing.location,
          author: this.$auth.user.email,
        },
      });
      this.resetForm();
      this.$router.push("/account");
    },
  },
};
</script>

<style>
</style>