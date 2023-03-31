import { Request, Response, NextFunction } from "express"
import { getUserById } from "../services/user.service"

export const getSession = async(req:Request, res:Response, next:NextFunction)=>{ 
    if(req.user){
        try{
           const user = await getUserById(req.user as string) 
           const {name, picture, email} = user
           res.send({name, picture, email})
        } catch(error){
            next(error)
        }
    } else{ 
        res.send(null)
    }
}