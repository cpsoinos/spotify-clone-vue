<script setup lang="ts">
import IconChevronDown from '~/assets/svg/spotify/chevron-down.svg'
import IconEllipses from '~/assets/svg/spotify/ellipses.svg'
import IconLikeFilled from '~/assets/svg/spotify/like-filled.svg'

const currentAlbum = useCurrentAlbum()
const currentTrack = useCurrentTrack()

const { counter, pause, resume: play } = useInterval(100, { controls: true })

const elapsed = computed(() => counter.value / 10)

const controls = reactive<{
  isPlaying: boolean
  isShuffling: boolean
  repeat: 'none' | 'all' | 'one'
}>({
  isPlaying: true,
  isShuffling: false,
  repeat: 'all'
})

const onPause = () => {
  pause()
  controls.isPlaying = false
}
const onPlay = () => {
  play()
  controls.isPlaying = true
}
const onRepeat = () => {
  switch (controls.repeat) {
    case 'none':
      controls.repeat = 'all'
      break
    case 'all':
      controls.repeat = 'one'
      break
    case 'one':
      controls.repeat = 'none'
      break
  }
}
const onShuffle = () => {
  controls.isShuffling = !controls.isShuffling
}

watch(elapsed, (value) => {
  if (value >= currentTrack.value.length) {
    onPause()
    counter.value = 0
  }
})
</script>

<template>
  <div class="px-4 w-full font-spotify text-white">
    <div class="flex justify-between items-center mb-12">
      <button>
        <icon-chevron-down class="w-5 h-5" />
      </button>
      <p class="text-xs font-semibold">
        {{ currentAlbum.title }}
      </p>
      <button>
        <icon-ellipses class="w-5 h-5" />
      </button>
    </div>

    <img class="w-full" :src="currentAlbum.artwork" />

    <div class="flex justify-between items-center mt-14">
      <div>
        <h1 class="text-xl font-bold tracking-tighter">
          {{ currentTrack.title }}
        </h1>
        <p class="text-sm text-gray-300">{{ currentAlbum.artist }}</p>
      </div>
      <icon-like-filled
        class="text-spotify-essentialBrightAccent fill-current"
      />
    </div>

    <TrackProgressBar
      :track-length="currentTrack.length"
      :elapsed="elapsed"
      :counter="counter"
    />
    <TrackControls
      v-bind="controls"
      class="mt-10"
      @pause="onPause"
      @play="onPlay"
      @repeat="onRepeat"
      @shuffle="onShuffle"
    />

    <FooterControls class="mt-9" />
  </div>
</template>
