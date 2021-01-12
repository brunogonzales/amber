<template>
  <div>
    <div class="flex items-center p-3">
      <nuxt-link to="/" class="font-bold text-lg">amber</nuxt-link>
      <nav class="flex ml-auto space-x-4 items-center">
        <nuxt-link to="/emergency"> Emergencia </nuxt-link>
        <nuxt-link to="/find">{{ $t("lost_something") }}</nuxt-link>
        <nuxt-link v-if="$auth.loggedIn" to="/account">Mi cuenta</nuxt-link>
        <a v-else @click="$auth.login()" class="cursor-pointer">{{
          $t("login")
        }}</a>
        <div
          class="w-8 h-8 items-center cursor-pointer"
          @click="showSidebar = !showSidebar"
        >
          <img src="icons/menu.svg" />
        </div>
        <sidebar
          @closeSidebar="showSidebar = !showSidebar"
          :showSidebar="showSidebar"
        />
      </nav>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return { showSidebar: false };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>

<style>
</style>
