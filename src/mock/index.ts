import { MockMethod } from "vite-plugin-mock"
import { Random } from "mockjs"

import Mock from "mockjs"

Mock.mock('/test/mock/per',"get", import('./json/permission.json'))