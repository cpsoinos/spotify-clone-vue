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
      class="now-playing flex overflow-hidden overflow-y-scroll relative mx-auto w-full max-w-[390px] h-[843px] shadow-2xl rounded-[3rem] border-2 border-zinc-600 bg-black"
    >
      <div class="flex flex-col items-center px-6 w-full">
        <status-bar />
        <nuxt-page />
      </div>
    </div>
  </div>
</template>
