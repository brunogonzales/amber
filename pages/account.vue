<template>
  <div class="px-4">
    <div v-if="missings.length">
      <h2 class="text-bold text-black text-xl">Mis anuncios</h2>
      <missing-preview
        v-for="missing in missings"
        :key="missing.id"
        :missing="missing"
      >
      </missing-preview>
    </div>
    <p v-else>CARGANDO...</p>
  </div>
</template>

<script>
import { GET_MISSINGS_BY_AUTHOR } from "@/queries/get_missings_by_author";
import gql from "graphql-tag";

export default {
  middleware: "auth",
  data() {
    return {
      missings: [],
      loading: 0,
    };
  },
  apollo: {
    missings: {
      query: GET_MISSINGS_BY_AUTHOR,
      prefetch: true,
      variables() {
        console.log(this.$auth.user.email);
        return {
          author: this.$auth.user.email,
        };
      },
    },
  },
};
</script>