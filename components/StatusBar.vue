<script setup lang="ts">
  import IconWifi from '~/assets/svg/ios/wifi.svg'
  import IconCellularConnectivity from '~/assets/svg/ios/cellular-connectivity.svg'
  import IconBattery from '~/assets/svg/ios/battery.svg'

  const now = ref(new Date())

  const time = computed(() => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
      .format(now.value)
      .split(' ')[0]
  })
</script>

<template>
  <div class="status-bar relative mb-8 grid w-full grid-cols-3 font-apple text-white">
    <span class="pt-1.5 text-center text-[15px] font-semibold">{{ time }}</span>
    <div>
      <div class="notch bg-black"></div>
    </div>
    <div class="flex items-center justify-center gap-2 pt-1.5">
      <icon-cellular-connectivity class="w-[18px] text-white" :font-controlled="false" />
      <icon-wifi class="block w-[18px] text-white" :font-controlled="false" />
      <icon-battery class="w-[24px] text-white" :font-controlled="false" />
    </div>
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
    width: 144px;
    height: 28px;
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
