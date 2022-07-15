import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
//全局挂载echarts
import * as echarts from 'echarts'
import "../src/assets/css/reset.scss"

const app = createApp(App);

// vue3 给原型上挂载属性
app.config.globalProperties.$echarts = echarts;
app.use(router).mount('#app');