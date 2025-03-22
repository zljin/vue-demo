<!--
course05: 输入框
-->
<script setup>
import { ref } from 'vue'

const name=ref('')
const password=ref('')
const content=ref('')
const url=ref('')
const email=ref('')
const url2=ref('')

const selected = ref('2')

</script>

<template>


<div style="width: 300px;">
  <h3>输入框</h3>
  <el-input v-model="name" clearable  placeholder="请输入用户名"></el-input>
  <h3>输入框,内容长度限制</h3>
  <el-input v-model="name" clearable  placeholder="请输入用户名" maxlength="10" show-word-limit ></el-input>
  <h3>密码框</h3>
  <el-input v-model="password" show-password  placeholder="请输入密码"></el-input>
  <h3>文本域</h3>
  <el-input v-model="content" type="textarea" rows="2"/>
  <h3>文本域,内容长度限制</h3>
  <el-input v-model="content" type="textarea" rows="3" maxlength="20" show-word-limit />

  <h3>前置</h3>
  <el-input v-model="url" placeholder="请输入网址">
    <template #prepend>http://</template>
  </el-input>
  <h3>后置</h3>
  <el-input v-model="email" placeholder="请输入网址">
    <template #append>@qq.com</template>
  </el-input>
  <h3>前置和后置</h3>
  <el-input v-model="url2" placeholder="请输入网址">
    <template #prepend>http://</template>
    <template #append>.com</template>
  </el-input>

  <h3>前置后置扩展</h3>
  <el-input placeholder="请输入课程名称">
    <template #prepend>
      <el-select v-model="selected" placeholder="请选择" style="width: 100px;">
        <el-option label="前端" value="1"></el-option>
        <el-option label="后端" value="2"></el-option>
        <el-option label="服务端" value="3"></el-option>
      </el-select>
    </template>
    <template #append>
      <el-button>
          <el-icon><Search/></el-icon>
      </el-button>
    </template>
  </el-input>

</div>

  
</template>

<style scoped></style>
