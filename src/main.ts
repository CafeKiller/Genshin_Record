import { createApp } from 'vue'
import './style.css'
import App from "@/App.vue"
import router from "./route";
import "@/mock/index"
import { mockAPI } from "@/mock/index"
import * as process from "process";

// 使用VueMarkdownEditor
// @ts-ignore
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// @ts-ignore
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// @ts-ignore
import Prism from 'prismjs';
// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
    Hljs: hljs,
});

if (process.env.NODE_ENV == "development"){
    mockAPI()
}

createApp(App).use(router).use(VMdPreview).mount('#app')
