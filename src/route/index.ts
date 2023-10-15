import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";

const Home = () => import("../pages/Home.vue");
const Version = () => import("../pages/Version.vue")

const RolePool = () => import("../pages/RolePool.vue")
const WeaponPool = () => import("../pages/WeaponPool.vue")

const routes: Array<RouteRecordRaw> = [
    { path: "/", name: "home", component: Home },
    { path: "/ver", name: "version", component: Version },
    { path: "/pool/role", name: "rolePool", component: RolePool },
    { path: "/pool/weapon", name: "weaponPool", component: WeaponPool }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

