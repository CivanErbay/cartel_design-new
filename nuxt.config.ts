// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/image'],
  devServer: {
    port: process.env.VITE_ENVIRONMENT === 'dev' ? 3001 : 3000, // default to 3000 or 3001 if VITE_ENVIRONMENT is 'dev'
  },
})