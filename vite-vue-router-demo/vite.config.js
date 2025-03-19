import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{//配置路径别名,当你输入@的时候，相当于找到了src的目录
      '@':path.resolve(__dirname,'src')
    }
  }
})
