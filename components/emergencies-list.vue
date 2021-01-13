<template>
  <div class="flex flex-col space-y-2 pt-5">
    <h3 v-if="emergencies.length" class="text-xl">
      Estas personas necesitan tu ayuda
    </h3>
    <div
      class="rounded bg-white border-black border py-2 px-3"
      v-for="emergency in emergencies"
      :key="emergency.id"
    >
      <div>
        <div>
          <p>
            {{ emergency.description }}
            <span v-if="emergency.phone">telf: {{ emergency.phone }}</span>
          </p>

          <p class="text-sm">
            hace
            {{ $dateFns.formatDistanceToNow(new Date(emergency.timestamp)) }}
          </p>
        </div>
        <div class="mt-1">
          <bank-account
            v-for="account in emergency.emergency_accounts"
            :key="account.id"
            class="flex space-x-2"
            :account="account"
          />
        </div>
        <!-- <div>
          <p>3 comentarios</p>
        </div> -->
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