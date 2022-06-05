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
    class="grid grid-cols-3 mb-8 w-full font-apple text-white relative status-bar"
  >
    <!-- <span class="font-semibold pt-1 text-center">{{ time }}</span> -->
    <div class="bg-black notch"></div>
    <!-- <div class="flex gap-2 items-center justify-center pt-1">
      <icon-cellular-connectivity class="w-5 text-white" />
      <icon-wifi class="block w-5 h-5 text-white" />
      <icon-battery class="h-3 text-white" />
    </div> -->
  </div>
</template>

<style>
:root {
  --corner-size: 6;
}

.notch {
  position: absolute;
  top: 0;
  left: 50%;
  width: calc(1 / 3 * 100%);
  height: 24px;
  background-color: black;
  border-radius: 0 0 18px 18px;
  transform: translateX(-50%);
}

.notch::before,
.notch::after {
  content: '';
  position: absolute;
  top: 0;
  left: calc(var(--corner-size) * -1px);
  width: calc(var(--corner-size) * 2px);
  height: calc(var(--corner-size) * 1px);
  background-size: 50% 100%;
  background-repeat: no-repeat;
  background-image: radial-gradient(
    circle at 0 100%,
    transparent 6px,
    black calc(var(--corner-size) * 1px)
  );
}

.notch::after {
  left: 100%;
  margin-right: calc(var(--corner-size) * 1px);
  background-image: radial-gradient(
    circle at 100% 100%,
    transparent 6px,
    black calc(var(--corner-size) * 1px)
  );
}
</style>
