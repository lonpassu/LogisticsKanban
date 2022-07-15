
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';
// 引入自动导入插件
import AutoImport from 'unplugin-auto-import/vite';
// 使用你所使用的UI组件库的 resolver
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //配置jsx
    vueJsx(),
    // 配置自动导入，dts配置需要重新运行才可以在src中生成auto-import.d.ts文件
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts'
    }),
    Components({
      dirs: ['src/components'], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
      resolvers: [AntDesignVueResolver({ importStyle: false, resolveIcons: true })]
    })
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});