import { createApp } from 'vue'
import './style.css'
import App from "@/App.vue"
import router from "./route";
console.log(`%c${'hello'}`,'color: red;')

createApp(App).use(router).mount('#app')
