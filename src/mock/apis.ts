import Mock from "mockjs";

import data from "./datas/user.json"

import rolePoolData from "./datas/role_pools.json"
import weaponPoolData from "./datas/weapon_pools.json"

type mockResult = {
    code: number
    message: string
    data: {}
}

enum requestMethod  {
    GET = 'get',
    POST= 'post'
}

export default [
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
