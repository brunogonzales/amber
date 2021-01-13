<template>
  <div class="px-3 flex flex-col space-y-2">
    <a @click="$router.back()" class="text-gray-600">Regresar</a>
    <h2 class="text-xl">Solicitar ayuda</h2>
    <p class="text-md text-red-400">{{ errors }}</p>
    <div v-if="submitted">
      <p class="text-xl">Tu emergencia ha sido enviada</p>
    </div>
    <div class="flex flex-col space-y-2" v-else>
      <text-field
        label="Descripcion de la situacion"
        v-model="description"
        name="description"
      />
      <text-field v-model="phone" label="Numero de contacto" name="phone" />
      <h3 class="text-md flex items-center space-x-2">Donaciones</h3>
      <div v-if="emergency_accounts">
        <bank-account
          v-for="account in emergency_accounts"
          :account="account"
          :key="account.id"
        />
      </div>
      <div v-if="showAccountForm">
        <text-field
          name="name"
          label="Titular de la cuenta"
          v-model="account.name"
        />
        <text-field
          name="bank"
          label="Banco (Yape, BCP, BBVA, Lukita)"
          v-model="account.bank"
        />
        <div class="flex space-x-1">
          <div class="w-1/2">
            <text-field
              name="cc"
              label="Codigo de cuenta"
              v-model="account.cc"
            />
          </div>
          <div class="w-1/2">
            <text-field
              name="cci"
              label="CCI (Opcional)"
              v-model="account.cci"
            />
          </div>
        </div>
      </div>
      <div>
        <button
          v-if="!showAccountForm"
          @click="() => (showAccountForm = true)"
          class="w-full rounded border border-black py-2 text-ink-400 border-ink-400"
        >
          + Agregar cuenta bancaria
        </button>
        <div v-else class="flex">
          <button
            @click="saveAccountDraft"
            class="w-full rounded border border-black py-2 bg-blue-400 text-black"
          >
            Guardar cuenta
          </button>
          <button @click="() => (showAccountForm = false)">
            <img src="/icons/close.svg" alt="" />
          </button>
        </div>
      </div>

      <button
        v-if="!showAccountForm"
        @click="submit"
        type="submit"
        :class="{
          'rounded px-3 py-2 bg-green text-white w-full': true,
        }"
      >
        Reportar emergencia
      </button>
    </div>
    <emergencies-list :emergencies="emergencies" />
  </div>
</template>

<script>
import { FETCH_EMERGENCIES } from "@/queries/fetch_emergencies.js";
import { INSERT_EMERGENCIES } from "@/queries/insert_emergencies.js";
import { SUBSCRIBE_TO_EMERGENCIES } from "@/queries/subscribe_to_emergencies.js";
export default {
  computed: {
    accountsToDisplay() {
      return [this.account, ...this.emergency_accounts];
    },
    submitDisabled() {
      return this.description.length < 0 || this.phone.length < 0;
    },
  },
  data() {
    return {
      showAccountForm: false,
      description: "",
      phone: "",
      emergencies: [],
      emergency_accounts: [],
      account: { name: "", cc: "", cci: "", bank: "" },
      errors: "",
      submitted: false,
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      this.errors = "";
      if (this.submitDisabled) {
        this.errors = "Por favor rellena todos los campos";
      }
      this.$apollo.mutate({
        mutation: INSERT_EMERGENCIES,
        variables: {
          description: this.description,
          phone: this.phone,
          emergency_accounts: this.accountsToDisplay,
        },
      });
      this.description = "";
      this.account = { name: "", cc: "", cci: "", bank: "" };
      this.emergency_accounts = [];
      this.submitted = true;
    },
    saveAccountDraft() {
      const { bank, cc, name } = this.account;
      if (!bank || !cc || !name) {
        this.errors = "Por favor completa la informacion sobre la cuenta.";
        return;
      }
      this.errors = "";
      this.emergency_accounts.push(this.account);
      this.showAccountForm = false;
      this.account = { name: "", cc: "", cci: "", bank: "" };
    },
  },
  apollo: {
    emergencies: {
      query: FETCH_EMERGENCIES,
      subscribeToMore: {
        document: SUBSCRIBE_TO_EMERGENCIES,
        updateQuery(previousResult, { subscriptionData }) {
          return {
            emergencies: [...subscriptionData.data.emergencies],
          };
        },
      },
    },
  },
};
</script>

<style>
</style>