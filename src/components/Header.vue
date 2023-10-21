<template>
  <div ref="header" class="header-wrap">
    <div ref="headerNav" class="header-nav">
        <a href="javascript:void(0)" class="logo">GenShin Record</a>
    </div>
  </div>
</template>

<script setup lang="ts">
// let title: string = "知识是用于提升自我的,而不是用来彰显优越的";

import {ref, onMounted, Ref} from "vue";
import * as events from "events";
import {throttle} from "@/utils/util";

const headerNav = ref()

onMounted(() => { 
  window.addEventListener("scroll", throttle(()=>{
      let top = document.documentElement.scrollTop
      let el:HTMLElement = headerNav.value
      const logoEl = el?.querySelector(".logo")
      if (top > 100){
          logoEl ? logoEl.className = "logo on" : undefined
      }else{
          logoEl ? logoEl.className = "logo" : undefined
      }
  },200))
})
</script>

<style scoped lang="scss">
.header-wrap{
  width: 100%;
  height: 740px;
  text-align: center;
  background: url(../assets/images/genshin.jpg) no-repeat center top; 
  background-size: 1960px 868px;
  .header-nav{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    z-index: 9990;
    .logo{
      position: absolute;
      top: 12px;
      left: 50%;
      padding: 0 30px;
      font-family: SD1-Logo;
      font-size: 50px;
      line-height: 80px;
      text-shadow: #ccc 3px 3px 3px;
      color: #ffffff;
      opacity: 1;
      transform: translateX(-50%);
      transition: all .5s ease 0s;
      border-radius: 50px;
      background-color: rgba(0,0,0,0);
      box-shadow: rgba(0,0,0,.2) 0px 0px 0px 0px;
      &.on{
        font-size: 30px;
        line-height: 60px;
        background-color: rgba(0,0,0,.7);
        box-shadow: rgba(0,0,0,.2) 1px 3px 10px 3px;
      }
    }

  }
}


</style>
