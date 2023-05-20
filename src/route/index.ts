import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";

const Home = () => import("../pages/Home.vue");
const Version = () => import("../pages/Version.vue")

const RolePool = () => import("../pages/RolePool.vue")
const WeaponPool = () => import("../pages/WeaponPool.vue")
const RoleCrads = () => import("../pages/RoleCards.vue")
const WeaponCrads = () => import("../pages/WeaponCards.vue")

const routes: Array<RouteRecordRaw> = [
    { path: "/", name: "home", component: Home },
    { path: "/ver", name: "version", component: Version },
    { path: "/pool/role", name: "rolePool", component: RolePool },
    { path: "/pool/weapon", name: "weaponPool", component: WeaponPool },
    { path: "/cards/role", name: "roleCrads", component: RoleCrads },
    { path: "/cards/weapon", name: "weaponCrads", component: WeaponCrads },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

