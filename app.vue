<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'antialiased bg-gray-900'
  }
})
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div
      class="flex overflow-hidden overflow-y-scroll relative flex-col mx-auto w-full max-w-[390px] h-[843px] shadow-2xl sm:rounded-xl"
    >
      <div class="flex flex-col items-center px-6 w-full">
        <status-bar />
      </div>
    </div>
  </div>
</template>
