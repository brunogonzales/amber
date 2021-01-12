<template>
  <div class="flex flex-col">
    <div v-if="!missings" class="pl-3">CARGANDO...</div>
    <div v-else class="flex flex-col space-y-3">
      <div class="flex">
        <tabs
          :tabs="tabs"
          :activeTab="activeTab"
          @tabClick="(tab) => (activeTab = tab)"
        >
        </tabs>
      </div>
      <div class="flex px-3 w-full space-x-3 align-center">
        <div class="w-full">
          <search
            v-model="search"
            placeholder="🔍  Buscar por nombre, descripcion, o lugar"
          />
        </div>
        <!-- <div
          class="bg-gray-200 border p-4 border-box shadow-md rounded cursor-pointer"
        >
          <img src="icons/filters.svg" />
        </div> -->
      </div>
      <h2 class="pl-3">
        {{ missingsToDisplay.length }} {{ $t(activeTab.label) }}
        {{ $t("missing") }}
        <span v-if="search">coinciden con "{{ search }}"</span>
      </h2>
      <client-only>
        <div class="flex flex-wrap">
          <div
            v-for="missing in missingsToDisplay"
            :key="missing.id"
            class="w-1/2"
          >
            <missing-preview :missing="missing" />
          </div>
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import { GET_MISSINGS } from "@/queries/get_missings";
export default {
  computed: {
    missingsToDisplay() {
      return this.missings.filter((missing) => {
        const sameType = missing.type === this.activeTab.value;
        if (!this.search) return sameType;
        const matchSearch = missing.name
          .toLowerCase()
          .includes(this.search.toLowerCase());
        return sameType && matchSearch;
      });
    },
  },
  data() {
    return {
      loading: 0,
      activeTab: { label: "people", value: "person" },
      search: "",
      tabs: [
        { label: "people", value: "person" },
        { label: "pets", value: "pet" },
        { label: "things", value: "thing" },
      ],
      missings: [],
    };
  },
  apollo: {
    missings: GET_MISSINGS,
  },
};
</script>

<style>
</style>