<script setup lang="ts">
import Camera from './components/Camera.vue'
</script>

<template>
  <Suspense>
    <main>
      <!-- <div class="text-yellow-400">哈哈哈</div> -->
      <Camera />
      <!-- <el-button type="primary" size="default" @click="">按钮</el-button> -->
    </main>
  </Suspense>
</template>

<style lang="less">
// @import './assets/css/styles.less';
</style>
