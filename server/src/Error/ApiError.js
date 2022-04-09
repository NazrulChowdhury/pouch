export class ApiError {
    constructor(code, message){
        this.statusCode = code
        this.message = message
    }
    static badRequest(msg) {
        return new ApiError(400, msg)
    }
    static internal() {
        return new ApiError(500,'internal server error')
    }
} 