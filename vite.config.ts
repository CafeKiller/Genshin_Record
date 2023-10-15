import { defineConfig } from 'vite'
import { viteMockServe } from "vite-plugin-mock"
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      viteMockServe({
        mockPath:"/mock",  // mock文件所在位置
        localEnabled:true,  // 是否应用于本地测试环境
        prodEnabled: false, // 是否用于生产环境
        supportTs: true,    // true 可以读取ts文件模块
        watchFiles: true    // 监听mock文件修改
      })
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"./src")   //配置@别名
    }
  },

})
