// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  css: ['~/assets/css/main.css'],
})
