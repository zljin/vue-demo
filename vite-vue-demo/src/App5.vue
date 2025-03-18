<!--
course 06: 匿名插槽和具名插槽

插槽是指可以在父组件内自定义模板片段
在子组件中可以将定义的模板片段插入到子组件的特定位置

course 07: 作用域插槽


子组件向父组件传递数据，并在父组件定义的模板中渲染

-->
<script setup>
import {reactive,ref,provide} from 'vue'

import Header from './components/headerV4.vue'
import Footer from './components/footerV1.vue'


</script>

<template>

    <h3>App.vue</h3>

    <!--匿名插槽-->
    <Header>
        <a href="https://zljin.github.io">zljin blog</a>
    </Header>

    <!--具体插槽-->
    <Footer>
        <!-- <template v-slot:url>-->
        <template #url="data">

            {{data.title}}  {{data.user}} <br>

            <a href="www.baidu.com">baidu</a>
        </template>
    </Footer>


</template>

<style scoped>

</style>
