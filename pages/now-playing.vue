<script setup lang="ts">
import analyze from 'rgbaster'
import IconChevronDown from '~/assets/svg/spotify/chevron-down.svg'
import IconEllipses from '~/assets/svg/spotify/ellipses.svg'
import IconLikeFilled from '~/assets/svg/spotify/like-filled.svg'

const emit = defineEmits<{ (e: 'color-set', color: string): void }>()

const currentAlbum = reactive({
  title: 'Synthesis',
  artist: 'Evanescence',
  artwork: 'https://i.scdn.co/image/ab67616d00001e02da80a3f19d59adceff0b96fe'
})

const currentTrack = reactive({
  title: 'The End Of The Dream',
  length: 294
})

const imgRef = ref<HTMLImageElement>(null)

const palette = ref([])
const primaryColor = ref('#000')

const getPalette = async () => {
  palette.value = await analyze(currentAlbum.artwork)
  const index = Math.floor(palette.value.length / 2)
  primaryColor.value = palette.value[index].color
  emit('color-set', primaryColor.value)
}

onMounted(getPalette)
</script>

<template>
  <div class="px-4 w-full font-spotify text-white">
    <div class="flex justify-between items-center mb-12">
      <icon-chevron-down class="w-5 h-5" />
      <p class="text-xs font-semibold">
        {{ currentAlbum.title }}
      </p>
      <icon-ellipses class="w-5 h-5" />
    </div>

    <img ref="imgRef" class="w-full" :src="currentAlbum.artwork" />

    <div class="flex items-center mt-14 justify-between">
      <div>
        <h1 class="text-xl font-bold tracking-tighter">
          {{ currentTrack.title }}
        </h1>
        <p class="text-sm text-gray-300">{{ currentAlbum.artist }}</p>
      </div>
      <icon-like-filled
        class="fill-current text-spotify-essentialBrightAccent"
      />
    </div>

    <TrackProgressBar :track-length="currentTrack.length" />
  </div>
</template>
