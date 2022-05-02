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
    class="flex pt-6 mb-8 text-white font-apple items-center justify-between w-full"
  >
    <span class="font-semibold">{{ time }}</span>
    <div class="flex items-center gap-2">
      <icon-cellular-connectivity class="text-white w-5" />
      <icon-wifi class="block text-white w-5 h-5" />
      <icon-battery class="text-white h-3" />
    </div>
  </div>
</template>
