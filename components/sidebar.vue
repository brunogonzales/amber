<template>
  <div
    class="absolute px-4 py-2 shadow-md top-0 bottom-96 right-0 bg-white flex flex-col h-full items-end"
    v-if="showSidebar"
  >
    <div @click="$emit('closeSidebar')" class="pb-4 cursor-pointer">
      <img src="~assets/icons/close.svg" />
    </div>
    <div class="flex flex-col space-y-4 items-end text-xl">
      <a v-if="!$auth.loggedIn" @click="$auth.login()">Registro</a>
      <nuxt-link to="/found">Encontrados</nuxt-link>
      <a @click="$auth.logout()">Cerrar sesion</a>
    </div>
    <signature />
  </div>
</template>

<script>
import signature from "@/components/signature";
export default {
  components: { signature },
  props: {
    showSidebar: Boolean,
  },
};
</script>

<style>
</style>