
export interface MockParams {
    url: string
    type: string
    data? : any
    params? : any
    response(options?: any): Record<string, unknown>
}