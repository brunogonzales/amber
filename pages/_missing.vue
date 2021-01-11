<template>
  <div>
    <a @click="$router.back()">Atras</a>
    <div v-if="missing">
      <div>
        <p>{{ missing.name }}</p>
        <img :src="missing.image_url" alt="" />
        <p>{{ missing.description }}</p>
        <p>{{ missing.location }}</p>
      </div>
      <div>
        <h3>3 comentarios</h3>
        <div v-for="comment in missing.comments" :key="comment.id">
          {{ comment }}
        </div>
        <form @submit.prevent="postComment">
          <input v-model="comment" />
          <button type="submit">Comentar</button>
        </form>
        <div></div>
      </div>
    </div>
    <div v-else>LOADING...</div>
  </div>
</template>

<script>
import {
  GET_MISSING_BY_ID,
  SUBSCRIBE_TO_MISSING,
} from "@/queries/get_missing_by_id";
import { ADD_COMMENT } from "@/queries/add_comment";
export default {
  data() {
    return {
      missing: null,
      comment: "",
    };
  },
  methods: {
    postComment() {
      this.$apollo.mutate({
        mutation: ADD_COMMENT,
        variables() {
          return {
            author: this.$auth.user.email,
            message: this.comment,
            missing_id: this.missing.id,
          };
        },
      });
    },
  },
  apollo: {
    missing: {
      query: GET_MISSING_BY_ID,
      prefetch: true,
      variables() {
        return { id: this.$route.params.missing };
      },
      update: (data) => data.missings[0],
    },
  },
  head() {
    return {
      title: "Missing",
    };
  },
};
</script>

<style>
</style>