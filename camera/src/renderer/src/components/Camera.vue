<script setup lang="ts">
import { onMounted } from 'vue'
// import useConfig from '@renderer/composables/useConfig'
// const { config } = useConfig()

// import { useConfigStore } from '@renderer/stores/useConfigStore'
// const { config } = useConfigStore()
const devices = await navigator.mediaDevices.enumerateDevices()
console.log('devices: ', devices)

onMounted(() => {
  const constraints = {
    audio: false,
    video: true
    // video: { deviceId: config.deviceId, width: 1920, height: 1080 }
  }
  // as MediaStreamConstraints
  const video = document.querySelector('video')!
  // https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices
  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
    video.play()
  })
})
</script>

<template>
  <main class="w-screen h-screen overflow-hidden">
    <video class="object-cover h-full"></video>
  </main>
  <!-- {{ devices }} -->
  <!-- <main
    class="w-screen h-screen overflow-hidden"
    :class="{ 'rounded-full': config.rounded }"
    :style="`border:solid ${config.borderWidth} ${config.borderColor}`"
  >
    <video class="object-cover h-full" :class="{ 'rounded-full': config.rounded }"></video>
  </main> -->
</template>

<style lang="scss"></style>
