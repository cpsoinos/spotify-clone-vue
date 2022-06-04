import { defineNuxtConfig } from 'nuxt'
import NuxtSVGO from 'nuxt-svgo'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', NuxtSVGO],
  svgo: {
    svgoConfig: {
      multipass: true,
      removeViewBox: false
    }
  },
  typescript: {
    shim: false
  }
})
