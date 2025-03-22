<!--
course03: 导航栏
-->
<script setup>
import { reactive,ref } from 'vue'

const selectedIndex = ref("2-2") //默认选择2-2这个索引

const defaultOpeneds = ref(["2","3"]) //默认展开的菜单索引

const selected = (index,indexPath)=>{
  console.log(index+"===>"+indexPath);
}

const userCommand = (command) =>{
  console.log("command:",command)
}


</script>

<template>

  <h3>水平导航</h3>
  <el-menu mode="horizontal" :default-active="selectedIndex" @select="selected" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1">zljin.github.io</el-menu-item>
    <el-sub-menu index="2">
      <template #title> 我的工作台 </template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">消息中心</el-menu-item>
    <el-menu-item index="4">订单管理</el-menu-item>
  </el-menu>

  <hr>

  <h3>垂直导航</h3> <!--去掉 mode="horizontal" -->
  <el-menu  
    :default-openeds="defaultOpeneds" 
    @select="selected" 
    background-color="#545c64" 
    text-color="#fff" 
    active-text-color="#ffd04b" 
    style="width: 200px;">
    <el-menu-item index="1">zljin.github.io</el-menu-item>
    <el-sub-menu index="2">
      <template #title> 我的工作台 </template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">消息中心</el-menu-item>
    <el-menu-item index="4">订单管理</el-menu-item>
  </el-menu>

  <h3>面包屑</h3>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item><a href="#">首页</a></el-breadcrumb-item>
    <el-breadcrumb-item>zljin blog</el-breadcrumb-item>
    <el-breadcrumb-item>zljin.github.io</el-breadcrumb-item>
  </el-breadcrumb>

  <h3>下拉菜单</h3>
  <el-dropdown @command="userCommand">
    <span>
      个人中心 <el-icon><User/></el-icon>
    </span>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="order">订单</el-dropdown-item>
        <el-dropdown-item command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  
</template>

<style scoped></style>
