export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "amber",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  auth: {
    redirect: {
      login: "/",
      callback: "/auth/signed-in"
    },
    strategies: {
      local: false,
      auth0: {
        domain: "amberauth.us.auth0.com",
        clientId: "z2aoBuqtSOg0YRWcjWOAncaY8cyP2gAQ",
        audience: "amber.api"
      }
    }
  },

  components: true,
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            green: "#43B02A",
            blue: "#0070BA"
          }
        }
      }
    }
  },

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.HASURA_ENDPOINT
      }
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/svg",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "nuxt-i18n",
    "@nuxtjs/apollo"
  ],

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    vueI18n: {
      fallbackLocale: "es",
      messages: {
        es: {
          pet: "mascota",
          pets: "mascotas",
          people: "personas",
          person: "persona",
          thing: "objeto",
          things: "objetos",
          found: "encontrado",
          lost_something: "Perdí algo",
          login: "Ingresar"
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
