<template>
  <div class="px-3">
    <a @click="$router.back()" class="text-gray-600">Regresar</a>
    <div class="flex flex-col space-y-2" v-if="missings[0]">
      <div>
        <h2 class="text-xl">{{ missings[0].name }}</h2>
        <img :src="missings[0].image_url" alt="" />
        <div class="flex flex-col">
          <h3 class="text-lg">Descripcion</h3>
          <p>{{ missings[0].description }}</p>
        </div>
        <p>{{ missings[0].location }}</p>
      </div>
      <div
        class="border border-black flex space-x-2 p-3 rounded justify-center"
      >
        <img src="icons/share.svg" alt="" />
        <p>Compartir</p>
      </div>
      <h3>{{ missings[0].comments.length }} comentarios</h3>
      <div>
        <form @submit.prevent="postComment">
          <input
            class="border border-black rounded px-4 py-2"
            v-model="comment"
          />
          <button
            type="submit"
            class="rounded border-black border bg-green text-white px-4 py-2"
          >
            Comentar
          </button>
        </form>
        <div class="flex flex-col space-y-2 mt-2">
          <div
            class="flex flex-col rounded"
            v-for="comment in missings[0].comments"
            :key="comment.id"
          >
            <p>{{ comment.message }}</p>
            <div class="flex space-x-2 items-center">
              <p class="text-sm text-gray-500">
                {{ $dateFns.formatDistanceToNow(new Date(comment.timestamp)) }}
              </p>
              <p class="text-gray-600 text-sm">
                {{ comment.author.split("@")[0] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>LOADING...</div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { GET_MISSING_BY_ID } from "@/queries/get_missing_by_id";
import { ADD_COMMENT } from "@/queries/add_comment";
import { SUBSCRIBE_TO_MISSING } from "@/queries/subscribe_to_missing";

export default {
  middleware: "auth",
  data() {
    return {
      missings: [],
      comment: "",
    };
  },
  methods: {
    postComment() {
      this.$apollo.mutate({
        mutation: ADD_COMMENT,
        variables: {
          author: this.$auth.user.email,
          message: this.comment,
          missing_id: this.missings[0].id,
        },
      });
      this.comment = "";
    },

    formatToDate(comment) {
      return distanceInWordsToNow(new Date(comment.timestamp));
    },
  },
  apollo: {
    missings: {
      query: GET_MISSING_BY_ID,
      subscribeToMore: {
        document: SUBSCRIBE_TO_MISSING,
        updateQuery(previousResult, { subscriptionData }) {
          return {
            missings: [
              ...(previousResult ? previousResult.missings : []),
              ...subscriptionData.data.missings,
            ],
          };
        },
        variables() {
          return {
            id: parseInt(this.$route.params.missing),
          };
        },
      },
      variables() {
        return { id: this.$route.params.missing };
      },
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