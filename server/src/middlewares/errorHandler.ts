import {ApiError} from "../Error/ApiError"
import { Request, Response, NextFunction } from "express"

export const errorHandler= (error:any, req:Request, res:Response, next:NextFunction) => {
    if(error instanceof ApiError){
        res.status(error.statusCode).send(error.message) 
        return
    }
    res.status(500).send('opps! something went wrong')  
} 