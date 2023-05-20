<template>
  <div ref="header" class="header-wrap">
    <div ref="headerNav" class="header-nav">
        <a href="javascript:void(0)" class="logo">Genshin Record</a>
    </div>
  </div>
</template>

<script setup lang="ts">
// let title: string = "知识是用于提升自我的,而不是用来彰显优越的";

import { ref,onMounted } from "vue";

const headerNav = ref()

onMounted(() => { 
  window.addEventListener("scroll", () => { 
    // console.log(document.documentElement.scrollTop);
    
    
  })
})





</script>

<style scoped>
.header-wrap{
  width: 100%;
  height: 740px;
  text-align: center;
  background: url(../assets/images/genshin.jpg) no-repeat center top; 
  background-size: 1960px 868px;

}
.header-nav{
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: rgba(0,0,0,.8);
  box-shadow: 3px 3px 3px 0 rgba(0,0,0,.3);
  
  z-index: 9990;
}
.logo{
  position: absolute;
  top: 12px;
  left: 50%;
  font-family: SD1-Logo;
  font-size: 50px;
  color: #FFFFFF;
  transform: translateX(-50%);
  opacity: 1;
}
</style>
