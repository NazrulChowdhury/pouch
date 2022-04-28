import { ApiError } from "../Error/ApiError.js"
import { createPost, deletePostById, getAllPostsByTagName, getPostById, updatePostById } from "../service/post.service.js"

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
    try{
        const response = await getAllPostsByTagName(req.user, tagName)
        res.send(response)
    }catch(error){
        next(error)
    }  
}

export const getPost = async(req, res, next) => {
    const {postId} = req.params
    try{
        const response = await getPostById(postId)
        res.send(response)
    }catch(error){
        next(error)
    }
}

export const updatePost = async(req, res, next) => {
    const {title, description, tags, postId } = req.body.data
    const postData = {
        userId : req.user,
        postTitle : title,
        postDescription : description,
        tags 
    }
    try{
        const result = await updatePostById(postData, postId)
        if('_id' in result) { 
            res.send(result)
        } else{
            next(ApiError.badRequest('update failed!'))
        }
    }catch(error){
        next(error)
    }
}

export const deletePost = async(req, res, next) => {
    try{
        const response = await deletePostById(req.params.postId)
        if(response.deletedCount > 0){
            res.send('post deleted!')
        } else{
            next(ApiError.badRequest('request failed!'))
        }
    }catch(error){
        next(error)
    }
}