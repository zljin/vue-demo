import {defineStore} from 'pinia'
import { reactive,ref } from 'vue'

//导出，注意命名规范
export const useWebStore = defineStore('web',()=>{
    const web = reactive({
        title: "zljin blog",
        url:"https://zljin.github.io"
    })

    const users = ref(1000)

    const userAdd = ()=>{
        users.value++
    }

    return{
        web,
        users,
        userAdd
    }
},{
    persist:true
})