<script setup lang="ts">
import IconChevronDown from '~/assets/svg/spotify/chevron-down.svg'
import IconEllipses from '~/assets/svg/spotify/ellipses.svg'
// import Vibrant from 'node-vibrant'
import analyze from 'rgbaster'

const currentAlbum = reactive({
  title: 'Synthesis',
  artist: 'Evanescence',
  artwork: 'https://i.scdn.co/image/ab67616d00001e02da80a3f19d59adceff0b96fe'
})

const imgRef = ref<HTMLImageElement>(null)
const imgIsLoaded = ref(false)
const onImgLoad = () => {
  imgIsLoaded.value = true
}
const primaryColor = ref('#000')
onMounted(() => getPalette())
const getPalette = async () => {
  const palette = await analyze(currentAlbum.artwork)
  const index = Math.floor(palette.length / 2)
  primaryColor.value = palette[index].color
}
</script>

<template>
  <div class="text-white font-spotify w-full px-4">
    <div class="flex items-center justify-between mb-12">
      <icon-chevron-down class="h-5 w-5" />
      <h1 class="text-xs font-semibold">{{ currentAlbum.title }}</h1>
      <icon-ellipses class="h-5 w-5" />
    </div>

    <img
      ref="imgRef"
      class="w-full"
      :src="currentAlbum.artwork"
      @load="onImgLoad"
    />
  </div>
</template>

<style>
.now-playing {
  background-image: linear-gradient(v-bind(primaryColor), rgb(0, 0, 0) 85%);
}
</style>
