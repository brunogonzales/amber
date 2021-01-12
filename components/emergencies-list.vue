<template>
  <div class="flex flex-col space-y-2 mt-2">
    <h3 v-if="emergencies.length">{{ emergencies.length }} necesitan ayuda</h3>
    <div
      class="rounded bg-white border-black border py-2 px-3"
      v-for="emergency in emergencies"
      :key="emergency.id"
    >
      <div>
        <div>
          <p>{{ emergency.description }}</p>
          <p class="text-sm">
            hace
            {{ $dateFns.formatDistanceToNow(new Date(emergency.timestamp)) }}
          </p>
        </div>
        <bank-account
          v-for="account in emergency.emergency_accounts"
          :key="account.id"
          class="flex space-x-2"
          :account="account"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    emergencies: Array,
  },
};
</script>