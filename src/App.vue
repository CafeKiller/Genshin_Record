<template>
  <div class="wrap" id="context">

    <Header></Header>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import Header from './components/Header.vue'
  import Nav from "./components/Nav.vue";
</script>

<style>
.wrap{
    margin: 0 auto;
    width: 100%;
    max-width: 1960px;
    min-width: 1200px;
    overflow: hidden;
    background-color: #f0f1f5;

}
.wrap *{
  color: #333;
  box-sizing: border-box;
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
