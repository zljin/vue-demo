<!--
course 32: 安装pinia以及定义和使用Store

course 33: Pinia持久化存储插件
-->

<script setup>
import { useWebStore } from './stores/web';

const webStore = useWebStore()

console.log(webStore.web)
console.log(webStore.users)
</script>

<template>
  {{webStore.web.url}}

  {{webStore.web.title}}

  {{webStore.users}}

  <button @click="webStore.userAdd">添加用户</button>

</template>

<style scoped>

</style>
