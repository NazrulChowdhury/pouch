import { getUserById } from "../service/user.js"

export const getSession = async(req, res, next)=>{ 
    if(req.user){
        try{
           const user = await getUserById(req.user) 
           const {name, picture, email} = user
           res.send({name, picture, email})
        } catch(error){
            next(error)
        }
    } else{ 
        res.send(null)
    }
}