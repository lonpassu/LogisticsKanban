// 1. 定义路由组件：
import {createRouter,createWebHashHistory,} from 'vue-router'
// import Index from '../views/Index.vue'

// 2. 定义一些路由：每个路由都需要映射到一个组件，后面再讨论嵌套路由。
const routes = [
  // { 
  //   path: '/', 
  //   // component: Index
  //   component: () => import('../views/Index.vue'),
  // },
  {
    path: '/',
    meta: {
      name: '',
      nav: false
    },
    redirect: {
      path: '/sdport',
    }
  },
  // {
  //   path: '/layout',
  //   name: 'layout',
  //   meta: {
  //     name: '布局',
  //     nav: false
  //   },
  //   component: () => import('../views/layout/Layout.vue'),
  // },
  {
    path: '/sdport',
    name: 'sdport',
    meta: {
      name: '布局',
      nav: false
    },
    component: () => import('../views/sdport/Index.vue'),
  },
]

// 3. 创建路由实例并传递 `routes` 配置： 你可以在这里输入更多的配置，但我们在这里暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
   history: createWebHashHistory(),
   routes, // `routes: routes` 的缩写
})
export default router;