import axiosInstance from "./axiosInstance"

export interface ApiResult<T> {
    code: number,
    message: string,
    data: T
}


//get请求
export async function get<T>(url: string, params?: any): Promise<ApiResult<T>> {
    const respone = await axiosInstance.get<ApiResult<T>>(url, { params })
    return respone.data;
}

//post请求
export async function post<T>(url: string, data?: any): Promise<ApiResult<T>> {
    const respone = await axiosInstance.post<ApiResult<T>>(url, data)
    return respone.data;
}