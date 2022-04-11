import { createPost } from "../service/post.service.js"

export const createNewPost = async(req, res, next) => { 
    try{
        await createPost(req.body.data, req.user)
        res.send('success!')
    } catch (error){
        next(error)
    }
}