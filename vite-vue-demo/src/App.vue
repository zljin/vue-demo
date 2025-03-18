<!--course 10: toRef和toRefs 

指针应用

-->

<script setup>
import { reactive,toRefs,toRef } from 'vue';

let web = reactive({
    name: "zljin blog",
    url: "https://zljin.github.io"
})

// let {num,url} = toRefs(web)
let url = toRef(web,"url")

//这里输出的url对象不是单纯的string,而是ref响应式对象
console.log(url)

</script>


<template>

{{ url }}



</template>

<style scoped>

</style>
