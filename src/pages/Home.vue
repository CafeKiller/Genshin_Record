<template>
    <div class="home-cont">
        <v-md-preview :text="text"></v-md-preview>
    </div>
</template>

<script setup lang="ts">
let text =
    `
    \n # Welcome! 👋

    \n 嗨，你好呀！欢迎来的我的Github，我是Coffee，一个喜欢荒木飞吕彦和硬核画风的不知名边缘小码农。

    \n > 目标成为一个有趣的全栈开发工程狮，一起加油呀~

    \n ## Data Statistics
    \n <!-- GitHub数据统计 -->
    \n <div >
    \n  <img height="150px" src="https://github-readme-stats-kk.vercel.app/api?username=CafeKiller&hide_title=true&hide_border=true&show_icons=trueline_height=21&text_color=000&icon_color=000&bg_color=f1eae2&theme=graywhite" />
    <img height="150px" src="https://github-readme-stats-kk.vercel.app/api/top-langs/?username=CafeKiller&hide_title=true&hide_border=true&layout=compact&langs_count=6&text_color=000&icon_color=fff&&bg_color=f1eae2&theme=graywhite" />
    \n</div>

    `
</script>

<style>
.home-cont{
    margin: 0 auto;
    width: 1200px;
}
</style>