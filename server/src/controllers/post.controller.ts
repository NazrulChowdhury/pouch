import { ApiError } from "../Error/ApiError"
import { Request, Response, NextFunction } from "express"
import { Post, PostDocument, PostInput } from "@types"
import { createNewPost, deletePostById, getAllPostsByTagName, getPostById, updatePostById } from "@services/post.service"


export const createNewPostHandler = async(
    req:Request<{},{},PostInput>, 
    res:Response, 
    next:NextFunction
    ) => { 
    try{
        const result = await createNewPost(req.body, req.user!) 
        res.send('success!')
    } catch (error){
        next(error)
    }
}

export const getPostsByTagHandler = async(
    req:Request<{tagName : string}>, 
    res:Response, 
    next:NextFunction
    ) => {
    const {tagName} = req.params
    try{
        const response = await getAllPostsByTagName(req.user!, tagName)
        !response.length ?
        next(ApiError.badRequest('no post found!'))
        :
        res.send(response)
    }catch(error){
        next(error)
    }  
}

export const getPostByIdHandler = async(
    req:Request<{postId : string}>, 
    res:Response, 
    next:NextFunction
    ) => {
    const {postId} = req.params
    try{
        const response = await getPostById(postId)
        !response ? next(ApiError.badRequest('post is not found'))
        : res.send(response)
    }catch(error){
        next(error)
    }
}

export const updatePostHandler = async(
    req:Request<{},{},Omit<PostDocument,"userId">>, 
    res:Response, 
    next:NextFunction
    ) => {
    //const {title, description, tags, _id } = req.body
    const postData :Post = {
        userId : req.user as string,
        ...req.body
    }
    try{
        const result = await updatePostById(postData, req.body._id, req.user as string)
        result && '_id' in result ?
        res.send(result)
        :
        next(ApiError.badRequest('update failed!'))
        
    }catch(error){
        next(error)
    }
}

export const deletePostHandler = async(
    req:Request<{postId : string}>, 
    res:Response, 
    next:NextFunction
    ) => {
    try{
        const response = await deletePostById(req.params.postId, req.user as string)
        if(response?.deletedCount > 0){
            res.send('post deleted!')
        } else{
            next(ApiError.badRequest('request failed!'))
        }
    }catch(error){
        next(error)
    }
}