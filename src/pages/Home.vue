<template>
    <h1>这里是home组件</h1>
    <div class="home-cont">
        <v-md-preview :text="text"></v-md-preview>
    </div>
</template>

<script setup lang="ts">
let text =
    `\n # Hello Markdown
     \n ---
    `
</script>

<style>
.home-cont{
    margin: 0 auto;
    width: 1200px;
}
</style>