<template>
  <div class="flex space-y-2 flex-col pb-20">
    <a @click="$router.back()" class="text-gray-600 pl-3">Regresar</a>
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
      <div v-if="errors.length" class="flex space-y-2 flex-col">
        <p class="text-red-400">
          {{ errors }}
        </p>
      </div>
      <missing-form
        :missing="missing"
        @submit="submit"
        @fileUpload="(url) => setImageUrl(url)"
      />
    </div>
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
        image_url: "",
      },
      types: ["person", "pet", "thing"],
      errors: [],
    };
  },
  watch: {
    missing: {
      handler(val) {
        this.errors = "";
      },
      deep: true,
    },
  },
  methods: {
    resetForm() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    validateForm() {
      const {
        name,
        type,
        description,
        last_seen,
        location,
        image_url,
      } = this.missing;
      if (
        !name ||
        !type ||
        !description ||
        !last_seen ||
        !location ||
        !image_url
      ) {
        this.errors = "Por favor completa todos los campos";
      }
      if (!this.errors.length) {
        return true;
      }
    },
    submit(e) {
      if (!this.validateForm(e)) {
        return;
      }

      this.$apollo
        .mutate({
          mutation: ADD_MISSING,
          variables: {
            type: this.missing.type,
            name: this.missing.name,
            description: this.missing.description,
            last_seen: this.missing.last_seen,
            location: this.missing.location,
            author: this.$auth.user.email,
            image_url: this.missing.image_url,
          },
        })
        .then(() => {
          this.resetForm();
          this.$router.push("/account");
        });
    },
    setImageUrl(url) {
      this.missing.image_url = url;
    },
  },
};
</script>

<style>
</style>