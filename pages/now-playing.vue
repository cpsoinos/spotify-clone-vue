<script setup lang="ts">
import analyze from 'rgbaster'
import IconChevronDown from '~/assets/svg/spotify/chevron-down.svg'
import IconEllipses from '~/assets/svg/spotify/ellipses.svg'

const emit = defineEmits<{ (e: 'color-set', color: string): void }>()

const currentAlbum = reactive({
  title: 'Synthesis',
  artist: 'Evanescence',
  artwork: 'https://i.scdn.co/image/ab67616d00001e02da80a3f19d59adceff0b96fe'
})

const imgRef = ref<HTMLImageElement>(null)

const getPalette = async () => {
  const palette = await analyze(currentAlbum.artwork)
  const index = Math.floor(palette.length / 2)
  emit('color-set', palette[index].color)
}
onMounted(() => getPalette())
</script>

<template>
  <div class="px-4 w-full font-spotify text-white">
    <div class="flex justify-between items-center mb-12">
      <icon-chevron-down class="w-5 h-5" />
      <h1 class="text-xs font-semibold">
        {{ currentAlbum.title }}
      </h1>
      <icon-ellipses class="w-5 h-5" />
    </div>

    <img ref="imgRef" class="w-full" :src="currentAlbum.artwork" />
  </div>
</template>
