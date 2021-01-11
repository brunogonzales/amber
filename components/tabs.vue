<template>
  <div class="flex space-x-4 pl-3 shadow-md">
    <p
      @click="$emit('tabClick', tab)"
      v-for="tab in tabs"
      :key="tab.label"
      :class="{
        'hover:text-blue-dark cursor-pointer capitalize py-3 cursor-pointer': true,
        'border-b-2 border-blue-dark text-blue-dark':
          activeTab.value === tab.value,
      }"
    >
      {{ $t(tab.label) }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    tabs: Array,
    activeTab: Object,
  },
};
</script>

<style>
</style>