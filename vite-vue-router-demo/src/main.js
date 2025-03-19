import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.use(router)

//全局前置守卫(过滤 拦击器)

router.beforeEach((to,from,next)=>{
    console.log("to:"+to);
    console.log("from:"+from);

    next()

    // if(to.name=="member"){
    //     next(false) //拦截
    // }else{
    //     next()//继续
    // }
    
})



app.mount('#app')