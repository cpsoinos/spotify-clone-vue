<script setup lang="ts">
  useHead({
    bodyAttrs: {
      class: 'antialiased bg-gray-900',
    },
  })
  const currentAlbum = useCurrentAlbum()

  const bgColor = ref('rgb(0, 0, 0)')

  const extractColor = () => {
    return Vibrant.from(currentAlbum.value.artwork)
      .getPalette()
      .then(({ DarkVibrant }) => {
        const [r, g, b] = DarkVibrant.rgb
        bgColor.value = `rgba(${r}, ${g}, ${b}, 0.6)`
      })
  }

  onMounted(async () => {
    if (window) {
      await import(
        'https://cdn.jsdelivr.net/npm/node-vibrant@3.2.1-alpha.1/dist/vibrant.worker.min.js'
      )
      extractColor()
    }
  })
</script>

<template>
  <div class="flex min-h-screen items-center justify-center">
    <div
      class="relative mx-auto flex h-[843px] w-full max-w-[390px] overflow-hidden overflow-y-scroll rounded-[3rem] border-2 border-zinc-600 bg-black shadow-2xl"
    >
      <div class="flex w-full flex-col items-center p-3">
        <div class="background-gradient size-full rounded-[2rem]">
          <StatusBar />
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .background-gradient {
    background-image: linear-gradient(v-bind(bgColor), rgb(0, 0, 0) 85%);
  }
</style>
