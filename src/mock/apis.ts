import Mock from "mockjs";

import data from "./datas/user.json"

export default [
    // GetUserInfo
    {
        url: "/upms/user/info",
        type: "get",
        response: () => {
            return {
                code: 200,
                message: "成功",
                data: data
            };
        },
    },
    // GetToken
    {
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
    },
];
