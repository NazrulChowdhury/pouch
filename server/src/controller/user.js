import { getUserById } from "../service/user.js"

export const getSession = async(req, res, next)=>{ 
    if(req.user){
        try{
           const user = await getUserById(req.user) 
           const {firstName, lastName, picture} = user
           res.send({firstName, lastName, picture})
        } catch(error){
            next(error)
        }
    } else{ 
        res.send(null)
    }
}