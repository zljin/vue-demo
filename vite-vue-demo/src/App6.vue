<!--course 08: vue生命周期函数-->

<script setup>
import { onMounted,onUpdated,ref } from 'vue';

onMounted(()=>{
    console.log("onMounted")
})

onUpdated(()=>{
    //指的是响应式数据更新
    console.log("onUpdated")
})

const user = ref(0)
console.log("user:",user.value)

</script>


<template>

{{ user }}

<button @click="user++">用户增加</button>


</template>

<style scoped>

</style>
