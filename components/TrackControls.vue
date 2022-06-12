<script lang="ts" setup>
import IconShuffle from '@/assets/svg/spotify/shuffle.svg'
import IconSkipBackward from '@/assets/svg/spotify/skip-backward.svg'
import IconPlay from '@/assets/svg/spotify/play.svg'
import IconPause from '@/assets/svg/spotify/pause.svg'
import IconSkipForward from '@/assets/svg/spotify/skip-forward.svg'
import IconRepeat from '@/assets/svg/spotify/repeat.svg'
import IconRepeatOne from '@/assets/svg/spotify/repeat-one.svg'

const props = defineProps<{
  isPlaying: boolean
  isShuffling: boolean
  repeat: 'none' | 'all' | 'one'
}>()

const emit = defineEmits<{
  (e: 'shuffle'): void
  (e: 'previous'): void
  (e: 'play'): void
  (e: 'pause'): void
  (e: 'next'): void
  (e: 'repeat'): void
}>()
</script>

<template>
  <div class="flex items-center justify-between">
    <button @click="emit('shuffle')">
      <icon-shuffle class="w-6 h-6 text-white fill-current" />
    </button>

    <button @click="emit('previous')">
      <icon-skip-backward class="w-10 h-10 text-white fill-current" />
    </button>

    <button
      v-if="!isPlaying"
      @click="emit('play')"
      class="rounded-full bg-white p-4 flex items-center justify-center"
    >
      <icon-play class="w-8 h-8 text-black fill-current" />
    </button>
    <button
      v-else
      @click="emit('pause')"
      class="rounded-full bg-white p-4 flex items-center justify-center"
    >
      <icon-pause class="w-8 h-8 text-black fill-current" />
    </button>

    <button @click="emit('next')">
      <icon-skip-forward class="w-10 h-10 text-white fill-current" />
    </button>

    <button @click="emit('shuffle')">
      <icon-repeat class="w-6 h-6 text-white fill-current" />
    </button>
  </div>
</template>
