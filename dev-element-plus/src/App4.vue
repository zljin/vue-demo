<!--
course04: 标签页
-->
<script setup>
import { reactive,ref } from 'vue'

const selectNamed = ref("2")

const tabClick = (tab,event)=>{
  console.log(tab.props+"===>"+event);
}

const tab = reactive({
  arr:[
    {name:"1",title:"title 1",content:"title 1 Content"},
    {name:"2",title:"title 2",content:"title 2 Content"},
    {name:"3",title:"title 3",content:"title 3 Content"}
  ]
})

const tabAdd = ()=>{
  let index = tab.arr.length
  index++
  tab.arr.push({name:index,title:"新选项卡"+index,content:"内容"+index})
}

const tabRemove = (name)=>{
  console.log("remove===>",name);
  const index = tab.arr.findIndex(item=>item.name===name)
  tab.arr.splice(index,1)
}



</script>

<template>

  <h3>zljin.github.io</h3>

  <h3>标签页</h3>

  <el-button @click="tabAdd">添加</el-button>

  <el-tabs v-model="selectNamed" @tab-remove="tabRemove" closable type="border-card" @tab-click="tabClick">
    <el-tab-pane v-for="item in tab.arr" :key="item.name" :label="item.title" :name="item.name">
      {{item.content}}
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped></style>
