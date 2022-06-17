<script setup lang="ts">
import IconConnectToDevice from '~/assets/svg/spotify/connect-to-device.svg'
import IconShare from '~/assets/svg/spotify/share.svg'
import IconQueue from '~/assets/svg/spotify/queue.svg'
</script>

<template>
  <div class="flex justify-between">
    <button>
      <icon-connect-to-device class="fill-current w-4 h-4" />
    </button>
    <div class="flex items-center gap-7">
      <button>
        <icon-share class="fill-current w-4 h-4" />
      </button>
      <button>
        <icon-queue class="fill-current w-4 h-4" />
      </button>
    </div>
  </div>
</template>
