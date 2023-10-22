<template>
    <div class="home-cont">
        <v-md-preview :text="text"></v-md-preview>
    </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import axios from "axios";

// data
let text =ref(``)

// init
axios.get("docs/home/all")
    .then((res) => {
        console.log(res.data.data[0])
        text.value = res.data.data[0].content
    })

// method


</script>

<style>
.home-cont{
    margin: 0 auto;
    width: 1200px;
}
</style>