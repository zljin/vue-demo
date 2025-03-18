<script setup>
import { inject } from 'vue'
import Nav from "./nav.vue"

const user = inject("provideUser")
const userAdd = inject("provideUserAdd")


</script>

<template>
  <h3>-------------------------Header3-middle-------------------------</h3>

  <button @click="userAdd">添加用户</button>

  <h3>-------------------------Header3-middle-------------------------</h3>

  <!--子组件-->
  <Nav/>
</template>

<style scoped>

</style>
