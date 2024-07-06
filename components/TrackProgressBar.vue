<script setup lang="ts">
  const props = defineProps<{
    counter: number
    elapsed: number
    trackLength: number
  }>()

  const progressPercent = computed(() => {
    return (props.counter / props.trackLength) * 10
  })

  const displayElapsed = computed(() => {
    const initialDisplay = new Date(props.elapsed * 1000).toISOString().substring(14, 19)
    return initialDisplay.startsWith('0') ? initialDisplay.substring(1) : initialDisplay
  })

  const displayRemaining = computed(() => {
    const remaining = props.trackLength - props.elapsed
    const initialDisplay = new Date(remaining * 1000).toISOString().substring(14, 19)
    return initialDisplay.startsWith('0') ? initialDisplay.substring(1) : initialDisplay
  })
</script>

<template>
  <div class="mt-8 h-1 w-full rounded bg-white/20">
    <div
      class="relative mb-1 flex h-1 items-center rounded bg-white"
      :style="`width: ${progressPercent}%;`"
    >
      <div class="absolute right-0 size-2 rounded-full bg-white"></div>
    </div>
    <div class="flex w-full justify-between text-xxs text-gray-300">
      <span>{{ displayElapsed }}</span>
      <span>-{{ displayRemaining }}</span>
    </div>
  </div>
</template>
