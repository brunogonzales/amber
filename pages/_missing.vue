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
import {
  GET_MISSING_BY_ID,
  SUBSCRIBE_TO_MISSING,
} from "@/queries/get_missing_by_id";
import { ADD_COMMENT } from "@/queries/add_comment";
import gql from "graphql-tag";

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
        document: gql`
          subscription($id: Int!) {
            missings(where: { id: { _eq: $id } }) {
              id
              name
              description
              location
              image_url
              comments {
                id
                author
                message
                timestamp
              }
            }
          }
        `,
        // Variables passed to the subscription. Since we're using a function,
        // they are reactive
        variables() {
          return {
            id: this.$route.params.missing,
          };
        },
        // Mutate the previous result
        updateQuery: (previousResult, { subscriptionData }) => {
          console.log(subscriptionData.data.missings);
          return { missings: [...subscriptionData.data.missings] };
          // Here, return the new result from the previous with the new data
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