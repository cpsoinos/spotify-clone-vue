<script setup lang="ts">
const props = defineProps<{ trackLength: number; elapsed: number }>()

const progressPercent = computed(() => {
  return ((props.elapsed / props.trackLength) * 100).toFixed(2)
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
  <div class="w-full h-1 bg-white/20 rounded mt-8">
    <div
      class="h-1 bg-white rounded relative flex items-center mb-1"
      :style="`width: ${progressPercent}%;`"
    >
      <div class="rounded-full h-2 w-2 bg-white right-0 absolute"></div>
    </div>
    <div class="w-full flex justify-between text-xs text-gray-300">
      <span>{{ displayElapsed }}</span>
      <span>-{{ displayRemaining }}</span>
    </div>
  </div>
</template>
