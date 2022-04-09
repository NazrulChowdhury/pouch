import {ApiError} from "../Error/ApiError.js"

export const errorHandler= (error, req, res, next) => {
    if(error instanceof ApiError){
        res.status(error.statusCode).send(error.message) 
        return
    }
    res.status(500).send('opps! something went wrong')  
} 