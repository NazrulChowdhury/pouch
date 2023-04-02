//import { ApiError } from "../Error/ApiError.js"
import { Request, Response, NextFunction } from "express"
import { PostInput } from "@types"
import { createNewPost, getPostById } from "@services/post.service"
import { ObjectId } from "mongoose"

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

// export const getAllPostsByTag = async(req:Request, res:Response, next:NextFunction) => {
//     const {tagName} = req.params
//     try{
//         const response = await getAllPostsByTagName(req.user, tagName)
//         res.send(response)
//     }catch(error){
//         next(error)
//     }  
// }

export const getPost = async(req:Request, res:Response, next:NextFunction) => {
    const {postId} = req.params
    try{
        const response = await getPostById(postId as unknown as ObjectId)
        res.send(response)
    }catch(error){
        next(error)
    }
}

// export const updatePost = async(req:Request, res:Response, next:NextFunction) => {
//     const {title, description, tags, postId } = req.body.data
//     const postData = {
//         userId : req.user,
//         postTitle : title,
//         postDescription : description,
//         tags 
//     }
//     try{
//         const result = await updatePostById(postData, postId)
//         if(result && '_id' in result) { 
//             res.send(result)
//         } else{
//             next(ApiError.badRequest('update failed!'))
//         }
//     }catch(error){
//         next(error)
//     }
// }

// export const deletePost = async(req:Request, res:Response, next:NextFunction) => {
//     try{
//         const response = await deletePostById(req.params.postId)
//         if(response.deletedCount > 0){
//             res.send('post deleted!')
//         } else{
//             next(ApiError.badRequest('request failed!'))
//         }
//     }catch(error){
//         next(error)
//     }
// }