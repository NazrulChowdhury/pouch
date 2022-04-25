import { createPost, getAllPostsByTagName } from "../service/post.service.js"

export const createNewPost = async(req, res, next) => { 
    try{
        await createPost(req.body.data, req.user)
        res.send('success!')
    } catch (error){
        next(error)
    }
}

export const getAllPostsByTag = async(req, res, next) => {
    const {tagName} = req.params
    const response = await getAllPostsByTagName(req.user, tagName)
    res.send(response)
}