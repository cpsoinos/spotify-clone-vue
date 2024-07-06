<script setup lang="ts">
  import IconConnectToDevice from '~/assets/svg/spotify/connect-to-device.svg'
  import IconShare from '~/assets/svg/spotify/share.svg'
  import IconQueue from '~/assets/svg/spotify/queue.svg'
</script>

<template>
  <div class="flex justify-between">
    <button>
      <icon-connect-to-device class="size-4 fill-current" :font-controlled="false" />
    </button>
    <div class="flex items-center gap-7">
      <button>
        <icon-share class="size-4 fill-current" :font-controlled="false" />
      </button>
      <button>
        <icon-queue class="size-4 fill-current" :font-controlled="false" />
      </button>
    </div>
  </div>
</template>
