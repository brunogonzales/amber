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
    script: [
      {
        src:
          "https://maps.googleapis.com/maps/api/js?key=" +
          process.env.GOOGLE_MAPS_API_KEY +
          "&libraries=places"
      }
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
    "@nuxtjs/tailwindcss",
    "@nuxtjs/date-fns"
  ],
  auth: {
    redirect: {
      login: "/auth/login",
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
  // router: {
  //   routeNameSplitter: "/"
  // },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            green: "#43B02A",
            blue: {
              dark: "#0070BA"
            }
          }
        }
      }
    }
  },

  //PLUGINS
  dateFns: {
    defaultLocale: "es"
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.HASURA_ENDPOINT,
        wsEndpoint: process.env.HASURA_WS_ENDPOINT
      }
    },
    defaultOptions: {
      $query: {
        fetchPolicy: "cache-and-network",
        loadingKey: "loading"
      }
    }
  },

  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000/"
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/svg",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "nuxt-i18n",
    "@nuxtjs/apollo",
    "@nuxtjs/date-fns"
  ],

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    seo: false,
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
          login: "Ingresar",
          missing: "desaparecidas"
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
