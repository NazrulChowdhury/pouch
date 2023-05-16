import { Request, Response, NextFunction } from "express"
import { getUserById } from "../services/user.service"
import { ApiError } from "@error/ApiError"

export const getSession = async(req:Request, res:Response, next:NextFunction)=>{ 
    if(!req.user){
        res.send(null)
        return
    }
    try{
        const user = await getUserById(req.user as string) 
        if(!user) throw ApiError.badRequest('Invalid user ID, No user found!')
        const {name, picture, email} = user
        res.send({name, picture, email})
    } catch(error){
        next(error)
    }
}