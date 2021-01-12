<template>
  <div class="flex space-x-2" v-if="account.bank">
    <div class="flex flex-col">
      <p class="text-xs uppercase">
        {{ account.name }}
      </p>
      <p class="border-black border rounded px-2 py-1 uppercase">
        {{ account.bank }} {{ account.cc }}
        <span v-if="account.cci"> CCI:{{ account.cci }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    account: Object,
  },
  data() {
    return {};
  },
};
</script>