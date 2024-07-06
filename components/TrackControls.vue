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
      class="relative"
      :class="{
        'shuffle-all text-spotify-essentialBrightAccent': isShuffling,
        'text-white': !isShuffling,
      }"
      @click="emit('shuffle')"
    >
      <icon-shuffle class="size-5 fill-current" :font-controlled="false" />
    </button>

    <button class="text-white active:text-gray-300" @click="emit('previous')">
      <icon-skip-backward class="size-9 fill-current" :font-controlled="false" />
    </button>

    <button
      v-if="!isPlaying"
      class="group flex items-center justify-center rounded-full bg-white p-4 active:m-1 active:bg-gray-300"
      @click="emit('play')"
    >
      <icon-play
        class="size-7 fill-current text-black group-active:size-5"
        :font-controlled="false"
      />
    </button>
    <button
      v-else
      class="group flex items-center justify-center rounded-full bg-white p-4 active:m-1 active:bg-gray-300"
      @click="emit('pause')"
    >
      <icon-pause
        class="size-7 fill-current text-black group-active:size-5"
        :font-controlled="false"
      />
    </button>

    <button class="text-white active:text-gray-300" @click="emit('next')">
      <icon-skip-forward class="size-9 fill-current" :font-controlled="false" />
    </button>

    <button
      class="relative"
      :class="{
        'repeat-all': repeat === 'all',
        'text-spotify-essentialBrightAccent': repeat !== 'none',
        'text-white': repeat === 'none',
      }"
      @click="emit('repeat')"
    >
      <component :is="repeatIcon" class="size-5 fill-current" />
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
