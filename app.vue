<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'antialiased bg-gray-900'
  }
})

const primaryColor = ref('#000')

const onColorSet = (color: string) => {
  primaryColor.value = color
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div
      class="flex overflow-hidden overflow-y-scroll relative mx-auto w-full max-w-[390px] h-[843px] bg-black rounded-[3rem] border-2 border-zinc-600 shadow-2xl"
    >
      <div class="flex flex-col items-center p-3 w-full">
        <div class="background-gradient w-full h-full rounded-[2rem]">
          <StatusBar />
          <NuxtPage @color-set="onColorSet" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.background-gradient {
  /* background-image: linear-gradient(v-bind(primaryColor), rgb(0, 0, 0) 85%); */
  background-image: linear-gradient(rgba(152, 48, 48, 0.6), rgb(0, 0, 0) 85%);
}
</style>
