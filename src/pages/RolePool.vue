<template>
    <div class="cont">
        <div ref="poolItem" class="pool-box" v-for="item in rolePoolArr" :key="item.poolName + item._id">
            <div   class="pool-item" :data-key="item.poolName + item._id">
                <div class="left">
                    <img :src="'http://localhost:5173/static'+item.cover" :alt="item.poolName">
                    <span class="ver-text">Version {{item.version}}</span>
                </div>
                <div class="right">
                    <div class="row-1">
                        <div class="title">卡池名称:<em>pool name</em></div>
                        <div class="poolname">
                            {{item.poolName}}
                            <span v-if="item.isRemake" class="remake-ico">
                                Remake {{item.isRemake}}
                                <em>当前角色复刻次数：{{item.isRemake}}</em>
                            </span>
                        </div>
                    </div>
                    <div class="row-2">
                        <div class="start-time">
                            <span>Start Time</span> <span>{{item.startTime}}</span>
                        </div>
                        <div class="end-time">
                            <span>— End Time</span> <span>{{item.endTime}}</span>
                        </div>
                    </div>
                    <div class="row-3">
                        <div class="role-item">
                            <img :src="'http://localhost:5173/static'+item.goRole.profile">
                            <span class="role-name">{{item.goRole.name}}</span>
                        </div>
                        <div class="pu-role-box" v-for="(inn, index) in item.puRole" :key="index">
                            <div class="role-item">
                                <img :src="'http://localhost:5173/static'+inn.profile">
                                <span class="role-name">{{inn.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { get } from '../api/api';
import {ref, reactive, onBeforeMount, Ref, onMounted, onUpdated} from 'vue';
import axios from "axios";
import {ObjectId} from "mongodb";
import cardLoading from "@/utils/gsapAnima";
import {debounce, hasPageBottom, throttle} from "@/utils/util";

// 角色卡池类型
type rolePool = {
    _id:ObjectId,
    poolName: string,
    goRole: {name:string,profile:string},
    puRole: {name:string,profile:string}[],
    cover: string,
    startTime: string,
    endTime:string,
    version:string,
    isRemake:number
}

let elemList:HTMLElement[] = [];
let poolItem = ref<any>([])
let rolePoolArr:Ref<rolePool[]> = ref([])
let currentPage = 1
let pageSize = 2
let befResLen = 0
let aftResLen = 0

//获取后台全部角色卡池数据
// get("/api/role/pool/get").then((result: any) => {
//     // console.log("result",result);
//     rolePoolArr.value = result.data;
// }).catch((err) => {
//     console.log(err);
// })

onMounted(()=>{
    init()
    window.addEventListener("scroll", ()=>{
        hitBottomLoad()
    })
})
onUpdated(()=>{
    // 执行加载动画
    cardLoading(poolItem.value.slice(-pageSize))
})

/**
 * @description 组件页面初始化函数
 * */
async function init(){
    // 请求数据
    await axios.post("/pools/role/page",{page:currentPage,pageSize}).then((result)=>{
        rolePoolArr.value = result.data.data
        befResLen = rolePoolArr.value.length
    })
    // 执行加载动画
    cardLoading(poolItem.value)
}

let flag = true
const hitBottomLoad:Function = debounce(() => {

    if(!hasPageBottom()) return
    if (flag){
        flag = false
    }else {
        return
    }
    // 对比上次和本次的数据长度, 若不相同则表示数据请求完毕
    if (befResLen != aftResLen){
        currentPage++
        axios.post("/pools/role/page",{page:currentPage,pageSize}).then((result)=>{
            befResLen = aftResLen // 更新上次请求数据的长度
            rolePoolArr.value = rolePoolArr.value.concat(result.data.data)
            aftResLen = rolePoolArr.value.length // 更新本次的请求长度
            flag = true
        })
    }
}, 200)

</script>

<style scoped>
    .cont{
        padding-top: 10px;
        margin: 0 auto;
        width: 1200px;
    }
    .pool-box{
        display: flex;
        flex-wrap: wrap;
    }
    .pool-item{
        position: relative;
        left: -100px;
        padding-left: 30px;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        width: 100%;
        height: 350px;
        border-radius: 5px;
        background: url(../assets/images/box-2.jpg) no-repeat center center;
        background-size: 1190px 345px;
        background-color: #fff;
        box-shadow:
        3px 3px 7px rgba(0, 0, 0, .1),
        -3px -3px 7px rgba(0, 0, 0, .4);
        opacity: 1;
    }
    .left{
        position: relative;
        width: 520px;
        height: 300px;
    }
    .left>img{
        width: 520px;
        height: 300px;
        border-radius: 20px;
        border: 3px solid #cfb8a6;
        object-fit: cover;
    }
    .ver-text{
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 140px;
        height: 30px;
        font-family: Maoken;
        font-size: 18px;
        line-height: 30px;
        background-color: #cfb8a6;
        text-align: center;
        border-radius: 0px 20px 0 30px;
    }
    .right{
        width: 100%;
        height: 300px;
        margin-left: 30px;
    }
    .row-1{
        display: flex;
        align-items: center;
        width: 100%;
        height: 62px;
    }
    .title{
        display: inline-block;
        position: relative;
        font-family: Maoken;
        font-size: 42px;
        color: #333;
        z-index: 99;
    }
    .title>em{
        position: absolute;
        left: 50%;
        bottom: -10px;
        letter-spacing: 3px;
        font-size: 14px;
        white-space: nowrap;
        transform: translateX(-50%);
        color: #999;
        text-transform: uppercase;
        z-index: 95;
        opacity: .2;
        cursor:default;
    }
    .poolname{
        position: relative;
        margin-left: 15px;
        display: inline-block;
        letter-spacing: 1px;
        font-family: Maoken;
        font-size: 50px;
        color:#333;
    }
    .remake-ico{
        padding: 3px 8px;
        position: absolute;
        right: -80px;
        top: 20%;
        font-size: 12px;
        white-space: nowrap;
        border-radius: 10px;
        background-color: #ffcc32;
        color: #fff;
        transform: scale(.8);
    }
    .remake-ico>em{
        display: none;
        padding: 5px 20px;
        position: absolute;
        left: 50%;
        top: -45px;
        font-size: 16px;
        color: #fff;
        background-color: rgba(0, 0, 0, .5);
        border-radius: 20px;
        transform: translateX(-50%);
    }
    .remake-ico>em::before{
        content: "";
        position: absolute;
        bottom: -20px;
        left: 50%;
        width: 0;
        height: 0;
        border: 10px solid ;
        border-color: transparent transparent rgba(0, 0, 0, .5);
        transform: translateX(-50%) rotateX(180deg);
    }
    .remake-ico:hover>em{
        display: block;
    }
    .row-2{
        font-family: Maoken;
        width: 100%;
        margin-top: 20px;
        cursor: default;
    }
    .start-time,
    .end-time{
        width: 100%;
        font-size: 20px;
    }
    .end-time{
        margin-top: 5px;
    }
    .end-time>span:nth-child(1),
    .start-time>span:nth-child(1){
        display: inline-block;
        width: 170px;
        text-align: center;
    }
    .end-time>span:nth-child(1){
        text-align: right;
        color: #aaa;
    }
    .start-time>span:nth-child(2){
        padding-left: 20px;
    }
    .end-time>span:nth-child(2){
        padding-left: 70px;
        color: #aaa;
    }
    .row-3{
        display: flex;
        margin-top: 15px;
    }
    .role-item{
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 121px;
        height: 150px;
        background: url(../assets/images/box-1.png) no-repeat;
        background-size: 121px 150px;
        text-align: center;
        cursor: pointer;
        vertical-align: middle;
    }
    .role-item>img{
        margin-top: 5px;
        width: 112px;
        border-radius: 2px;
    }
    .role-item .role-name{
        margin-top: 5px;
        white-space: nowrap;
        font-size: 16px;
        font-weight: bold;
        color: #333333;
    }
    .role-item:hover .role-name{
        color: #967c68 !important;
    }
    .pu-role-box{
        padding-left: 15px;
    }
</style>