import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    ['@coreyander/nuxt-svgo', { multipass: true, removeViewBox: false }]
  ],
  typescript: {
    shim: false
  }
})
