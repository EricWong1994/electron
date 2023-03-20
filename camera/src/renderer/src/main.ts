import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import '@renderer/assets/css/global.scss'
import '@renderer/assets/css/tailwind.css'

import App from './App.vue'
const app = createApp(App)
app.use(ElementPlus)

// createApp(App).mount('#app')
app.mount('#app')
