<!--
course02:
父传子defineProps

-->


<script setup>
import {reactive} from 'vue'
//导入组件，组件名称首字母大写
import Header from './components/header.vue'
import Footer from './components/footer.vue'

//创建响应式数据
const propsWeb = reactive({
    user:10,
    url:"https://zljin.github.io"
})

const userAdd = ()=>{
    propsWeb.user++;
    console.log(propsWeb.user)
}


</script>

<template>

<!--引用组件-->

<!--父传子数据，数组形式-->

<Header propName="leonard" propUrl="zljin.github.io"></Header>

zljin.github.io

<button @click="userAdd">添加用户</button>

<!-- <Footer v-bind="propsWeb"></Footer> -->

<!--父传子数据，对象形式-->
<Footer :="propsWeb"></Footer>

  
</template>

<style scoped>

</style>
