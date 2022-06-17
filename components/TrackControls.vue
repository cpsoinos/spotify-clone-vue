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

const repeatIcon = computed(() => {
  switch (props.repeat) {
    case 'none':
      return IconRepeat
    case 'one':
      return IconRepeatOne
    case 'all':
      return IconRepeat
  }
})
</script>

<template>
  <div class="flex items-center justify-between">
    <button
      @click="emit('shuffle')"
      class="relative"
      :class="{
        'text-spotify-essentialBrightAccent shuffle-all': isShuffling,
        'text-white': !isShuffling
      }"
    >
      <icon-shuffle class="w-5 h-5 fill-current" />
    </button>

    <button @click="emit('previous')" class="text-white active:text-gray-300">
      <icon-skip-backward class="w-9 h-9 fill-current" />
    </button>

    <button
      v-if="!isPlaying"
      @click="emit('play')"
      class="group rounded-full bg-white p-4 flex items-center justify-center active:bg-gray-300 active:m-1"
    >
      <icon-play
        class="w-7 h-7 group-active:w-5 group-active:h-5 text-black fill-current"
      />
    </button>
    <button
      v-else
      @click="emit('pause')"
      class="group rounded-full bg-white p-4 flex items-center justify-center active:bg-gray-300 active:m-1"
    >
      <icon-pause
        class="w-7 h-7 group-active:w-5 group-active:h-5 text-black fill-current"
      />
    </button>

    <button @click="emit('next')" class="text-white active:text-gray-300">
      <icon-skip-forward class="w-9 h-9 fill-current" />
    </button>

    <button
      @click="emit('repeat')"
      class="relative"
      :class="{
        'repeat-all': repeat === 'all',
        'text-spotify-essentialBrightAccent': repeat !== 'none',
        'text-white': repeat === 'none'
      }"
    >
      <component :is="repeatIcon" class="w-5 h-5 fill-current" />
    </button>
  </div>
</template>

<style scoped>
.shuffle-all::after,
.repeat-all::after {
  background-color: currentColor;
  position: absolute;
  content: '';
  display: block;
  height: 4px;
  left: 50%;
  transform: translateX(-50%) translateY(6px);
  width: 4px;
  border-radius: 50%;
  bottom: 0;
}
</style>
