export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@vueuse/nuxt', '@nuxt/image'],
  svgo: {
    svgoConfig: {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
            },
          },
        },
      ],
    },
  },
  typescript: {
    shim: false,
  },
  nitro: {
    preset: 'cloudflare',
    minify: false,
  },
})
