export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@vueuse/nuxt'],
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
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/anderapps-favicon.svg',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/anderapps-favicon.png',
        },
      ],
    },
  },
})
