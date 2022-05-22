<script setup lang="ts">
import IconWifi from '~/assets/svg/ios/wifi.svg'
import IconCellularConnectivity from '~/assets/svg/ios/cellular-connectivity.svg'
import IconBattery from '~/assets/svg/ios/battery.svg'

const now = ref(new Date())

const time = computed(() => {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })
    .format(now.value)
    .split(' ')[0]
})
</script>

<template>
  <div
    class="flex justify-between items-center px-6 pt-6 mb-8 w-full font-apple text-white"
  >
    <span class="font-semibold">{{ time }}</span>
    <div class="flex gap-2 items-center">
      <icon-cellular-connectivity class="w-5 text-white" />
      <icon-wifi class="block w-5 h-5 text-white" />
      <icon-battery class="h-3 text-white" />
    </div>
  </div>
</template>
