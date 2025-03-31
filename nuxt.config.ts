// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  css:["~/assets/css/app.css"],
  modules: [
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "@stefanobartoletti/nuxt-social-share",
    "@sidebase/nuxt-pdf",
    "@vueuse/nuxt",
    "reka-ui/nuxt"
  ],
  socialShare:{
    baseUrl:'https://vitaresumebuilder.netlify.app'
  }
})