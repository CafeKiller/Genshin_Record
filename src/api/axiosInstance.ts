import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

//配置拦截器
const axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:3333/",
    timeout: 5000
})
// 配置请求拦截器
axiosInstance.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        return config;
    },
    (error: any) => {
        // 处理请求错误
        return Promise.reject(error);
    },
)

// 配置响应拦截器
axiosInstance.interceptors.response.use(
    (config) => {
        return config;
    },
    (error: any) => {
        return Promise.reject(error)
    }
)

export default axiosInstance