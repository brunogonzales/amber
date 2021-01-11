<template>
  <div>
    <div class="flex items-center p-3">
      <nuxt-link to="/" class="font-bold text-lg">amber</nuxt-link>
      <nav class="flex ml-auto space-x-4 items-center">
        <nuxt-link to="/find">{{ $t("lost_something") }}</nuxt-link>
        <nuxt-link v-if="$auth.loggedIn" to="/account">{{
          $auth.user.nickname
        }}</nuxt-link>
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
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
