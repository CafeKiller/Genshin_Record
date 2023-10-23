<template>
  <div class="wrap">

    <Header></Header>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import Header from './components/Header.vue'
  import Nav from "./components/Nav.vue";
</script>

<style lang="scss">
.wrap{
    margin: 0 auto;
    max-width: 1960px;
    min-width: 1200px;
    height: 100vh;
    background-color: #f1eae2;
    *{
        color: #333;
        box-sizing: border-box;
    }
    &::-webkit-scrollbar{
      width: 0;
      height: 0;
    }
}
.dialog{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
  z-index: 9995;
}
</style>
