<script setup lang="ts">
import { Setting as SettingIcon, CameraFive, InnerShadowTopLeft } from '@icon-park/vue-next'
import { ref } from 'vue'
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
// const page = ref('setting')
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()
const quit = () => {
  window.api.quit()
}
</script>

<template>
  <Suspense>
    <main class="relative group" @contextmenu="quit">
      <section>
        <CameraFive
          v-if="config.page == 'setting'"
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10"
          @click="config.page = 'camera'"
        />
        <!--  TODO 给上下两标签加上 hidden group-hover:block -->
        <SettingIcon
          v-if="config.page == 'camera'"
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-white opacity-80 cursor-pointer z-10"
          @click="config.page = 'setting'"
        />
        <InnerShadowTopLeft
          v-if="config.page == 'camera'"
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 bottom-3 text-white opacity-80 cursor-pointer z-10"
          @click="config.rounded = !config.rounded"
        />
      </section>
      <!-- <div class="text-yellow-400">哈哈哈</div> -->
      <!-- <Camera /> -->
      <!-- <el-button type="primary" size="default" @click="">按钮</el-button> -->
      <section>
        <Camera v-if="config.page == 'camera'" />
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>

<style lang="less">
// @import './assets/css/styles.less';
</style>
