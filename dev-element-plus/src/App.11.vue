<!--
course11: 分页
-->
<script setup>
const currentPage = (val)=>{
    console.log(val)
}

</script>

<template>

<h3>分页</h3>
<el-pagination layout="prev,pager,next,jumper,total" :page-size="10" :total="50" @current-change="currentPage" background></el-pagination>

</template>

<style scoped></style>
