<template>
  <div class="flex flex-col space-y-2 rounded px-3 py-2">
    <nuxt-link :to="'/' + missing.id">
      <div class="flex space-x-2 items-center">
        <p class="text-xl">
          {{ missing.name }}
        </p>
      </div>
      <div class="relative">
        <img :src="missing.image_url" :alt="'photo of ' + missing.name" />
        <div class="flex absolute right-0 bottom-0 rounded">
          <nuxt-link :to="'/edit/' + missing.id" v-if="editable">
            <div
              class="flex space-x-2 p-2 bg-yellow-300 shadow-md items-center rounded"
            >
              <div>
                <img src="icons/edit.svg" alt="edit icon" />
              </div>
              <span class="text-xs">Editar</span>
            </div>
          </nuxt-link>
        </div>
      </div>
      <p class="text-gray-600">
        Visto por ultima vez hace
        {{ $dateFns.formatDistanceToNow(new Date(missing.last_seen)) }}
        en
        {{ missing.location }}
      </p>
      <p v-if="missing.comments">{{ missing.comments.length }} comentarios</p>
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
    editable: Boolean,
  },
};
</script>

<style>
</style>