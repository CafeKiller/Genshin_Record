<template>
    <div class="router-nav color-white">
        <router-link to="/" class="nav-item">
            <span>Home</span>
        </router-link>
        <router-link to="/pool/role" class="nav-item">
            <span>RolePool</span>
        </router-link>
        <router-link to="/pool/weapon" class="nav-item">
            <span>WeaponPool</span>
        </router-link>
        <router-link to="/ver" class="nav-item">
            <span>Version</span>
        </router-link>
    </div>
</template>

<script setup lang="ts">
</script>

<style>
.router-nav{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px; 
}
.nav-item{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    width: 120px;
    height:50px;
    border-radius: 5px;
    background: linear-gradient(90deg, #f1eae2 ,#f1eae2, #f1eae2,#f1eae2);
    background-size: 400%;
    z-index: 999;
    box-shadow:
        3px 3px 6px rgba(0, 0, 0, .1),
        -3px -3px 6px rgba(0, 0, 0, .4);
    transition: background 1s ease;
}
.nav-item>span{
    font-size: 12px;
    font-weight: bold;
    color: #333 !important;
    text-transform: uppercase;
}
.nav-item:hover{
    background: linear-gradient(90deg, #feac5e ,#c779d0, #4bc0c8,#feac5e);
    background-size: 400%;
    animation: nav-anima 8s linear infinite;
}

@keyframes nav-anima{
    0%{
        background-position: 0%;
    }
    100%{
        background-position: 400%;
    }
}
.nav-item::before{
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    bottom: -5px;
    right: -5px;
    background: linear-gradient(90deg, #feac5e ,#c779d0, #4bc0c8,#feac5e);
    background-size: 400%;
    border-radius: 10px;
    opacity: -1;
    transition: .5s; 
    z-index: -1;
}
.nav-item:hover::before{
    animation: nav-anima 8s linear infinite;
    filter: blur(15px);
    opacity: .5;
}

</style>