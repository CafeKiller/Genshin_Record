<template>
    <div class="cont">
        <div class="pool-box" v-for="item in weaponArr" :key="item._id">
            <div class="pool-item">
                <div class="left">
                    <img :src="item.cover" :alt="item.poolName">
                    <span class="ver-text">Version {{item.version}}</span>
                </div>
                <div class="right">
                    <div class="data-row">
                        <p> <span class="data-text">时间：</span>{{item.startTime}} —— {{item.endTime}}</p>
                    </div>
                    <div class="row-1">
                        <div class="go-weap-item" v-for="(goWeap, gw_idx) in item.goWeapon" :key="gw_idx">
                            <img :src="goWeap.img" :alt="goWeap.name">
                            <span>
                                <p>{{goWeap.type}}</p>
                                <p>{{goWeap.name}}</p>
                            </span>
                        </div>
                    </div>
                    <div class="row-2">
                        <div class="pu-weap-item" v-for="(puWeap, pw_idx) in item.puWeapon" :key="pw_idx">
                            <img :src="puWeap.img" :alt="puWeap.name">
                            <span>{{puWeap.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const weaponArr: Array<any> = [
    {
        "_id":"100001",
        "version": "1.0",
        "goWeapon": [
            {name:"风鹰剑",img: "/src/assets/images/goWeap/fyj.png"},
            {name:"阿莫斯之弓",img:"/src/assets/images/goWeap/amszg.png"}
        ],
        "puWeapon": [
            {name:"笛剑",img:"/src/assets/images/puWeap/dijian.png"},
            {name:"钟剑",img:"/src/assets/images/puWeap/zhongjian.png"},
            {name:"绝弦",img:"/src/assets/images/puWeap/juexian.png"},
            {name:"西风长枪",img:"/src/assets/images/puWeap/xifengchangqiang.png"},
            {name:"流浪乐章",img:"/src/assets/images/puWeap/liulangyuezhang.png"}
        ],
        "cover": "/src/assets/images/w1.webp",
        "startTime": "2020-09-28 11:00:00",
        "endTime": "2020-10-18 17:59:59",
        "number": "1601262000000"
    }
]

</script>

<style scoped>
    .cont{
        margin: 0 auto;
        width: 1200px;
    }
    .pool-box{
        display: flex;
        flex-wrap: wrap;
    }
    .pool-item{
        padding-left: 25px;
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
        margin-left: 20px;
        width: 100%;
        height: 300px;
        font-family: Maoken;        
    }
    .data-row{
        font-size: 18px;
        line-height: 1;
        margin-bottom: 20px;
    }
    .data-text{
        font-size: 20px;
    }

    .row-1{
        display: flex;
    }
    .go-weap-item{
        display: flex;
        align-items: center;
        flex: 50%;
    }
    .go-weap-item>span{
        padding-left: 8px;
        font-size: 22px;
        font-family: Maoken;
    }
    .go-weap-item>span>p:last-child{
        font-size: 24px;
    }
    .row-2{
        padding-top: 20px;
        padding-right: 20px;
        display: flex;
    }
    .pu-weap-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        width: 20%;
    }
    .pu-weap-item>img{
        width: 90px;
        height: 92px;
        object-fit: cover;
    }
    .pu-weap-item>span{
        font-size: 18px;
        line-height: 24px;
        font-family: Maoken;
    }
</style>