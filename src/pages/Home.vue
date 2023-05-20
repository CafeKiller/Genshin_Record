<template>
    <h1>这里是home组件</h1>
</template>

<script setup lang="ts">

import { get, post } from '../api/api';

get("/role/get").then((data) => { 
    console.log(data);
}).catch((err) => {
    console.log(err);
})

</script>

<style>

</style>