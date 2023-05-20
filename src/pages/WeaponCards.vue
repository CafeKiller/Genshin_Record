<template>
    <div class="cont">
        <div class="card-list">
            <div class="card-item" v-for="(item, index) in weaponArr" :key="index" @click="switchTcShow(item)">
                <img :src="item.cover_h" :alt="item.name">
                <a href="javascript:void(0)">{{item.name}}</a>
            </div>
        </div>
    </div>
    <div class="dialog weap-tc" v-show="isShowTc" @click="closeWeapTc()"> 
        <div class="tc-cont">
            
        </div>  
    </div>
</template>

<script setup lang="ts">
import { reactive , ref} from 'vue';
import WeapType from '../enums/WeapType';

let isShowTc = ref(false);

let currentWeap = reactive({})

// 切换弹窗
function switchTcShow(weap:any) { 
    isShowTc.value = !isShowTc.value
    currentWeap = weap
}
// 关闭弹窗
function closeWeapTc() { 
    isShowTc.value = false
}


const weaponArr = [
    {
        name: "风鹰剑",
        type: WeapType.Sword,
        ATK: 999,
        entry:"物理伤害加成",
        introduce: "介绍",
        cover: "图片",
        cover_h: "/src/assets/images/goWeap/fyj.png",
    },
    {
        name: "风鹰剑",
        type: WeapType.Sword,
        ATK: 999,
        entry:"物理伤害加成 ",
        introduce: "介绍",
        cover: "图片",
        cover_h: "图标",
    },
    {
        name: "风鹰剑",
        type: WeapType.Sword,
        ATK: 999,
        entry:"物理伤害加成 ",
        introduce: "介绍",
        cover: "图片",
        cover_h: "图标",
    },
    {
        name: "风鹰剑",
        type: WeapType.Sword,
        ATK: 999,
        entry:"物理伤害加成 ",
        introduce: "介绍",
        cover: "图片",
        cover_h: "图标",
    },
    {
        name: "风鹰剑",
        type: WeapType.Sword,
        ATK: 999,
        entry:"物理伤害加成 ",
        introduce: "介绍",
        cover: "图片",
        cover_h: "图标",
    },
    {
        name: "风鹰剑",
        type: WeapType.Sword,
        ATK: 999,
        entry:"物理伤害加成 ",
        introduce: "介绍",
        cover: "图片",
        cover_h: "图标",
    },
]

</script>

<style scoped>
.cont{
    margin: 0 auto;
    width: 1200px;
}
.card-list{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 25px;
}
.card-item{
    margin-bottom: 25px;
    padding: 10px;
    width: 160px;
    height: 190px;
    border-radius: 10px;
    box-shadow: 2px 2px 4px 2px rgba(177,150,139,0.3);
    background-color: #ffffff;
    text-align: center;
}
.card-item>img{
    width: 140px;
    height: 145px;
    object-fit: cover;
}
.card-item>a{
    font-family: MaoKen;
    font-size: 20px;
    line-height: 25px;
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
.tc-cont{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 600px;
    border-radius: 10px;
    background-color: #ffffff;
    transform: translate(-50%,-50%);
}
</style>