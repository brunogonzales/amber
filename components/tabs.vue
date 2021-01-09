<template>
  <div class="flex space-x-4 pl-3 shadow-md">
    <p
      @click="$emit('tabClick', tab)"
      v-for="tab in tabs"
      :key="tab"
      :class="{
        'hover:text-blue-400 cursor-pointer capitalize py-3 cursor-pointer': true,
        'border-b-2 border-blue-400 text-blue-400': activeTab === tab,
      }"
    >
      {{ $t(tab) }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    tabs: Array,
    activeTab: String,
  },
};
</script>

<style>
</style>