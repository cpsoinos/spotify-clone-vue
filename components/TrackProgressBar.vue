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
  const initialDisplay = new Date(props.elapsed * 1000)
    .toISOString()
    .substring(14, 19)
  return initialDisplay.startsWith('0')
    ? initialDisplay.substring(1)
    : initialDisplay
})

const displayRemaining = computed(() => {
  const remaining = props.trackLength - props.elapsed
  const initialDisplay = new Date(remaining * 1000)
    .toISOString()
    .substring(14, 19)
  return initialDisplay.startsWith('0')
    ? initialDisplay.substring(1)
    : initialDisplay
})
</script>

<template>
  <div class="mt-8 w-full h-1 bg-white/20 rounded">
    <div
      class="flex relative items-center mb-1 h-1 bg-white rounded"
      :style="`width: ${progressPercent}%;`"
    >
      <div class="absolute right-0 w-2 h-2 bg-white rounded-full"></div>
    </div>
    <div class="flex justify-between w-full text-xxs text-gray-300">
      <span>{{ displayElapsed }}</span>
      <span>-{{ displayRemaining }}</span>
    </div>
  </div>
</template>
