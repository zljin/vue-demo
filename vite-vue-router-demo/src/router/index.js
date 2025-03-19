import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

//定义路由规则
const routes = [
    {
        path:"/",
        alias: ["/home","/index"], //添加别名即可同时用alias中的路径访问
        component: ()=> import("@/views/index.vue")
    },
    {
        path:"/content", //http://localhost:5173/content?id=123&title=vue
        // component: ()=> import("../views/content.vue")
        //@ 路径别名在 vite.config.js 第11行配置 @指向 src目录
        component: ()=> import("@/views/content.vue")
    },
    {
        //必须满足path的规则，否则不会生效!!!  ?代表可以后面不加值
        path:"/user/:id/name/:name?", //http://localhost:5173/user/003/name/leonard
        name:"member", //定义路由名称
        component: ()=> import("@/views/user.vue")
    },
    {
        path:"/vip",//http://localhost:5173/vip
        component: ()=>import("@/views/vip.vue"),
        //定义嵌套路由，即子路由
        children:[
            {
                path:"",//http://localhost:5173/vip
                component: ()=>import("@/views/vip/defalut.vue")
            },
            {
                path:"order",//http://localhost:5173/vip/order
                component: ()=>import("@/views/vip/order.vue")
            },
            {
                path:"info",//http://localhost:5173/vip/info
                component: ()=>import("@/views/vip/info.vue")
            }
        ]
    },
    {
        path:"/svip",//重定向 redirect
        // redirect: "/vip" 
        redirect: {name:'member',params:{id:200,name:'leonard'}}
    }
]

//创建路由器
const router = createRouter({
    //默认传统模式 http://localhost:5173/content
    history: createWebHistory(),
    //哈希模式http://localhost:5173/#/content
    //区别：使用url #符号之后的部分模拟url路径变化,因为不会触发页面刷新，所以不需要服务器支持 (强掉不会触发页面刷新)
    //history: createWebHashHistory(),
    routes
})

//导出
export default router