// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        "Space+Grotesk": true,
      }
    }],
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      { code: "es", name: "Español" },
      { code: "en", name: "English" }
    ],
    defaultLocale: "es",
    strategy: "prefix_except_default",
    vueI18n: './i18n.config.ts' // if you are using custom path, defaul
  },

  app: {
    head: {
      bodyAttrs: {
        class: "bg-[#1b1f24] text-[#c3cad5] text-[16px] lg:text-[17px] leading-[1.6em] font-[400] font-['Space_Grotesk']"
      }
    }
  },
  alias: {
    // "~": "/<rootDir>",
    // "@": "/<rootDir>",
    // "~~": "/<rootDir>",
    // "@@": "/<rootDir>",
    // "assets": "/<rootDir>/assets",
    // "public": "/<rootDir>/public"
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
