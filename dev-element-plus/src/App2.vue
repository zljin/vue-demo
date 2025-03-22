<!--
course02: 提示框
-->
<script setup>
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'

const openMsg = () => {
  ElMessage({
    type: 'success', //success | waring | info | error
    message: 'zljin.github.com',
    showClose: true
  })
}

const openConfirm = () => {
  ElMessageBox.confirm('确认删除?','标题',{
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  }).then(()=>{
    console.log('确认');
  }).catch(()=>{
    console.log('取消');
  })
}

const openNotifiy = ()=>{
  ElNotification({
    title:'标题',
    message: 'zljin.github.io',
    duration: 1500 //展示时间毫秒
  })
}
const openNotifiy2 = ()=>{
  ElNotification({
    type: 'success',
    title:'标题',
    message: 'zljin.github.io',
    duration: 1500, //展示时间毫秒
    position: 'bottom-right'
  })
}



</script>

<template>
  <h3>按钮</h3>
  <el-button @click="openMsg">消息</el-button>
  <el-button @click="openConfirm">确认框</el-button>
  <el-button @click="openNotifiy">通知1</el-button>
  <el-button @click="openNotifiy2">通知2</el-button>



</template>

<style scoped></style>
