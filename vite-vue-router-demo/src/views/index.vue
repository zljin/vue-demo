<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const goTo = ()=>{
  //router.push("/content?id=123&title=vue")
  router.push({name:'member',params:{id:200,name:'leonard'}})
}

</script>

<template>
  首页 https:zljin.github.io <hr>

  <router-link to="/content?id=123&title=vue">查询字符串传参</router-link> <br>
  <router-link to="/user/003/name/leonard">路径传参</router-link> <br>

  <router-link :to="{path:'/content',query:{id:200,title:'vue'}}">查询字符串传参 - 动态数据绑定</router-link> <br>

  <!--定义路由名称 member-->
  <router-link :to="{name:'member',params:{id:200,name:'leonard'}}">路径传参 - 动态数据绑定</router-link> <br>

  <button @click="goTo">编程式导航</button>
</template>

<style scoped>

</style>
