import Mock from "mockjs"
import { MockParams } from "./tpying"
import apis from "./apis"
const mocks = [...apis]

Mock.setup({
    timeout: "300-1000" // 设置随机请求响应时间 300ms至1s
})

export function mockAPI(){
    let i: MockParams
    for (i of mocks){
        Mock.mock(new RegExp(i.url), i.type || 'get', i.response)
    }
}
