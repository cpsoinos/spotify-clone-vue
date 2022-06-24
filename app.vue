<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'antialiased bg-gray-900'
  }
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

onMounted(() => {
  if (window && window.Vibrant) {
    extractColor()
  }
})
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <Script
      src="https://cdn.jsdelivr.net/npm/node-vibrant@3.2.1-alpha.1/dist/vibrant.worker.min.js"
    ></Script>
    <div
      class="flex overflow-hidden overflow-y-scroll relative mx-auto w-full max-w-[390px] h-[843px] bg-black rounded-[3rem] border-2 border-zinc-600 shadow-2xl"
    >
      <div class="flex flex-col items-center p-3 w-full">
        <div class="w-full h-full rounded-[2rem] background-gradient">
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
