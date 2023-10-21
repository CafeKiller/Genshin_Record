import Mock from "mockjs";

import data from "./datas/user.json"

import rolePoolData from "./datas/role_pools.json"
import weaponPoolData from "./datas/weapon_pools.json"
import {rolePoolType} from "@/mock/tpying";

type mockResult = {
    code: number
    message: string
    data: {}
}
type pageParam = {
    page: number,
    pageSize: number
}

enum requestMethod  {
    GET = 'get',
    POST= 'post'
}

// 角色池mock配置
const mockRoleRequestList = [
    {
        url: "/pools/role/all",
        type: requestMethod.GET,
        response: (): mockResult => {
            return {
                code: 200,
                message: "成功",
                data: rolePoolData
            };
        },
    },
    {
        url: "/pools/role/page",
        type: requestMethod.POST,
        response: (params:any): mockResult => {
            const body = JSON.parse(params.body)
            let {page, pageSize} = body
            let total:number = rolePoolData.length
            let len: number = total / pageSize
            const resList:rolePoolType[] = rolePoolData.slice((page-1) * pageSize, page * pageSize)
            return {
                code: 200,
                message: "成功",
                data: resList
            };
        },
    },
]

export default [
    ...mockRoleRequestList,
    // 武器池mock配置
    {
        url: "/pools/weapon/all",
        type: requestMethod.GET,
        response: (): mockResult =>{
            return {
                code:200,
                message: "success",
                data: weaponPoolData
            }
        }
    }
    /*{
        url: "/auth/oauth/token",
        type: "post",
        response: (option: any) => {
            const $name = JSON.parse(option.body).name;
            if ($name) {
                return Mock.mock({
                    code: 200,
                    message: "成功",
                    data: {
                        name: "testToken",
                    },
                });
            } else {
                return Mock.mock({
                    code: 400,
                    message: "未提交参数",
                });
            }
        },
    },*/
];
