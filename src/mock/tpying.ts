import {ObjectId} from "mongodb";

export interface MockParams {
    url: string
    type: string
    data? : any
    params? : any
    response(options?: any): Record<string, unknown>
}

export interface rolePoolType {
    _id: number,
    poolName: string,
    goRole: {name: string, profile: string},
    puRole: {name: string, profile: string}[],
    version: string,
    startTime: string,
    endTime: string,
    cover: string,
    number: string,
    isRemaker: number
}