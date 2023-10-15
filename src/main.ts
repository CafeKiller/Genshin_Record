import { createApp } from 'vue'
import './style.css'
import App from "@/App.vue"
import router from "./route";
console.log("%c hello", "background:#09c;color: #ffffff;");

createApp(App).use(router).mount('#app')
