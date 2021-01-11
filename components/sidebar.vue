<template>
  <div
    class="absolute px-4 py-2 shadow-md top-0 bottom-96 right-0 bg-white flex flex-col h-full items-end"
    v-show="showSidebar"
  >
    <div @click="$emit('closeSidebar')" class="pb-4 cursor-pointer">
      <img src="icons/close.svg" />
    </div>
    <div class="flex flex-col space-y-4 items-end text-xl">
      <a
        class="cursor-pointer"
        v-show="!$auth.loggedIn"
        @click="() => $auth.login()"
        >Registro</a
      >
      <nuxt-link to="/found">Encontrados</nuxt-link>
      <a class="cursor-pointer" @click="$auth.logout()">Cerrar sesion</a>
    </div>
    <signature />
  </div>
</template>

<script>
export default {
  props: {
    showSidebar: Boolean,
  },
};
</script>

<style>
</style>