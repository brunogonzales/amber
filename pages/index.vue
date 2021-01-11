<template>
  <div>
    <div class="flex">
      <tabs
        :tabs="categories"
        :activeTab="activeTab"
        @tabClick="(tab) => (activeTab = tab)"
      />
      <search v-model="search" />
    </div>
    <div class="pt-6 px-4">
      <div
        v-for="missing in missingsToDisplay"
        :key="missing.id"
        class="flex flex-wrap"
      >
        <missing-preview :missing="missing" />
      </div>
      <!-- {{ search }}
      {{ missingsToDisplay }}
      {{ missings }} -->
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
      activeTab: { label: "people", value: "person" },
      search: "",
      categories: [
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