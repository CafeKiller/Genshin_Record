<template>
    <div class="content">
        <div v-for="item in mdList" :key="item.id">
            <v-md-preview :text="item.content"></v-md-preview>
        </div>
    </div>
</template>

<script setup lang="ts">

// val
import {onMounted, Ref, ref} from "vue";
import axios from "axios";

type mdType = {
    id:string,
    content: string
}

let mdList:Ref<mdType[]> = ref([])

onMounted(()=>{
    axios.get("/docs/version/all")
        .then((res)=>{
            mdList.value = res.data.data
        })
})


</script>

<style scoped lang="scss">
.content{
    margin: 0 auto;
    width: 1200px;
}
</style>