<script setup>
const props = defineProps({
    user:Number,
    url:{
        type: String,
        required: true,
        default: "zljin.github.io"
    }
})

console.log(props);


</script>

<template>
  <h3>Footer1</h3> {{props.user}}
</template>

<style scoped>

</style>
