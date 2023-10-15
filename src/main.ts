import { createApp } from 'vue'
import './style.css'
import App from "@/App.vue"
import router from "./route";
import "@/mock/index"
import { mockAPI } from "@/mock/index"
import * as process from "process";

if (process.env.NODE_ENV == "development"){
    mockAPI()
}

createApp(App).use(router).mount('#app')
