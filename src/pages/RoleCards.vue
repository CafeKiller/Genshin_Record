<template>
    <div class="cont">
        <div class="card-list">
            <div class="card-item" v-for="(item, index) in roleArr" :key="index" @click="switchShowTc(item)">
                <img :src="item.cover_h" :alt="item.name">
                <a href="javascript:void(0)" >{{item.name}}</a>
            </div>
        </div>
    </div>
    <div class="dialog card-tc" v-show="isShowTc" @click="closeTc()">
        <div class="tc-cont">
            <h1 class="role-name">{{currentRole.name}}</h1>
            {{currentRole.elemType}}{{currentRole.WeapType}}
        </div>
    </div>
</template>

<script setup lang="ts">
    import { reactive, ref } from "vue";
    import ElemType from '../enums/ElemType'
    import WeapType from '../enums/WeapType'

    let isShowTc = ref(false);

    let currentRole: any = reactive({})
    
    const roleArr:Array<any> = [
        {
            name: "温迪",
            elemType: ElemType.Wind,
            WeapType: WeapType.Bow,
            birthDay: '生日',
            introduce: "介绍",
            cover: "封面",
            cover_h: "/src/assets/images/goRole/wendi-h.png",
            area: "地区",
            cv_zh: "中文声优",
            cv_jp: "日语声优"
        },
        {
            name: "温迪",
            elemType: ElemType.Wind,
            WeapType: WeapType.Bow,
            birthDay: '生日',
            introduce: "介绍",
            cover: "封面",
            cover_h: "封面头图",
            area: "地区",
            cv_zh: "中文声优",
            cv_jp: "日语声优"
        },
        {
            name: "温迪",
            elemType: ElemType.Wind,
            WeapType: WeapType.Bow,
            birthDay: '生日',
            introduce: "介绍",
            cover: "封面",
            cover_h: "封面头图",
            area: "地区",
            cv_zh: "中文声优",
            cv_jp: "日语声优"
        },
        {
            name: "温迪",
            elemType: ElemType.Wind,
            WeapType: WeapType.Bow,
            birthDay: '生日',
            introduce: "介绍",
            cover: "封面",
            cover_h: "封面头图",
            area: "地区",
            cv_zh: "中文声优",
            cv_jp: "日语声优"
        },
        {
            name: "温迪",
            elemType: ElemType.Wind,
            WeapType: WeapType.Bow,
            birthDay: '生日',
            introduce: "介绍",
            cover: "封面",
            cover_h: "封面头图",
            area: "地区",
            cv_zh: "中文声优",
            cv_jp: "日语声优"
        },
        {
            name: "温迪",
            elemType: ElemType.Wind,
            WeapType: WeapType.Bow,
            birthDay: '生日',
            introduce: "介绍",
            cover: "封面",
            cover_h: "封面头图",
            area: "地区",
            cv_zh: "中文声优",
            cv_jp: "日语声优"
        },
        {
            name: "温迪",
            elemType: ElemType.Wind,
            WeapType: WeapType.Bow,
            birthDay: '生日',
            introduce: "介绍",
            cover: "封面",
            cover_h: "封面头图",
            area: "地区",
            cv_zh: "中文声优",
            cv_jp: "日语声优"
        },
    ]
    
    //是否展示角色详细弹窗
    function switchShowTc(item:any) { 
        isShowTc.value = !isShowTc.value;
        currentRole = item
    }

    //关闭弹窗
    function closeTc() {
        isShowTc.value = !isShowTc.value;
    }
    
</script>

<style scoped>
.cont{
    margin: 0 auto 20px;
    width: 1200px;
}
.card-list{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 25px;
}
.card-item{
    padding: 10px;
    /* margin-bottom: 20px; */
    width: 220px;
    height: 260px;
    background-color: #ffffff;
    box-shadow: 2px 2px 4px 2px rgba(177,150,139,0.3);
    border-radius: 10px;
    text-align: center;
}
.card-item:last-child{
    margin-right: auto;
}
.card-item > img{
    width: 200px;
    height: 200px;
    border-radius: 10px;
}
.card-item > a{
    font-family: MaoKen;
    font-size: 20px;
    line-height: 40px;
}
.card-item:hover > a{
    color: #a89383;
    text-decoration: underline;
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
    padding: 0 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1000px;
    height: 800px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 2px 2px 4px 2px rgba(177,150,139,0.3);
    transform: translate(-50%,-50%);
    z-index: 9998;
}
.role-name{
    padding-bottom: 5px;
    line-height: 50px;
    font-family: MaoKen;
    font-size: 32px;
    text-align: center;
    border-bottom: 1px solid #a89383;
}
</style>