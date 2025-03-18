<!--

course01: 基于Vite创建vue3 改写demo05

-->


<script setup>
import {reactive} from 'vue'

const web = reactive({
    show: true
})

const toggle = () => {
    web.show = !web.show
}

</script>

<template>
  
{{web.show}}  <hr>

<p v-show="web.show">zljin.github.io</p>

<button @click="toggle">切换显示状态</button>
  
</template>

<style scoped>

</style>
