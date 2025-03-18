<!--
course 04: 跨组件通信
-->
<script setup>
import {reactive,ref,provide} from 'vue'

import Header from './components/headerV3.vue'

//创建响应式数据
const web = reactive({
    name:"leonard blog",
    url:"zljin.github.io"
})

const user = ref(0)

const userAdd = ()=>{
    user.value++
}

provide("provideWeb",web)
provide("provideUser",user)
provide("provideUserAdd",userAdd)


</script>

<template>

    <h3>App.vue - Top组件</h3>

    user: {{user}}

    <Header/>

</template>

<style scoped>

</style>
