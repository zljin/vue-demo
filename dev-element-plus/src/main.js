import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' //导入所需全局样式
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //导入组件库中的所有图标
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' //导入中文语言包

const app = createApp(App)

//注册 ElementPlus 组件库中所有的图标到全局Vue的应用中
for(const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}

//app.use(ElementPlus) //将ElementPlus注册到应用中

app.use(ElementPlus,{
    locale: zhCn
}) //将ElementPlus注册到应用中，并且设置中文语言包
app.mount('#app')