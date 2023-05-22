interface IApiError {
    statusCode : number
    message : string
}

export class ApiError implements IApiError {
    statusCode: number
    message : string
    constructor(code : number, message : string){
        this.statusCode = code
        this.message = message
    }
    static badRequest(msg : string) {
        return new ApiError(400, msg)
    }
    static unauthorized(msg : string) {
        return new ApiError(401, msg)
    }
    static internal() {
        return new ApiError(500,'internal server error')
    }
} 