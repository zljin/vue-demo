<!--

course03:
子传父 defineEmits

-->


<script setup>
import {reactive,ref} from 'vue'

import Header from './components/headerV2.vue'

//创建响应式数据
const web = reactive({
    name:"leonard blog",
    url:"zljin.github.io"
})

const user = ref(0)

const emitsGetWeb = (data) =>{
    console.log(data)
    web.url = data.url
}

const emitsUserAdd = (data) =>{
    console.log(data)
    user.value += data
}


</script>

<template>

<Header @getWeb = "emitsGetWeb" @userAdd="emitsUserAdd"/>

{{web.url}} -- {{user}}
  
</template>

<style scoped>

</style>
