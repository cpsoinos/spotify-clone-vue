<script setup lang="ts">
import IconConnectToDevice from '~/assets/svg/spotify/connect-to-device.svg'
import IconShare from '~/assets/svg/spotify/share.svg'
import IconQueue from '~/assets/svg/spotify/queue.svg'
</script>

<template>
  <div class="flex justify-between">
    <button>
      <icon-connect-to-device class="w-4 h-4 fill-current" />
    </button>
    <div class="flex gap-7 items-center">
      <button>
        <icon-share class="w-4 h-4 fill-current" />
      </button>
      <button>
        <icon-queue class="w-4 h-4 fill-current" />
      </button>
    </div>
  </div>
</template>
