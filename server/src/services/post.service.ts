import Post from "@models/post.model"
import { PostInput, Post as PostType } from "@types"
import mongoose, { Document, ObjectId } from "mongoose"


export const createNewPost = async(post: PostInput, user:Express.User) => { 
    const newPost:PostType = { 
        userId : user as string,
        title : post.title,
        description : post.description,
        tags : post.tags
    } 
    return await new Post(newPost,{},{lean :true}).save()
}

export const getAllPosts = async(user:Express.User) => {
    return await Post.find({userId : user})
}

export const getAllPostsByTagName = async (user:Express.User,tagName:string) => {
    
    return await Post.find(
        { 
            userId : user, 
            tags : {
                $all: [tagName]
            }
        }
    )
}

export const getPostById = async(postId : ObjectId) => {
    return await Post.findById({
        "_id" : postId
    })
}

// export const updatePostById = async(data, postId) => {
//     return await Post.findByIdAndUpdate({
//         "_id" : postId
//     }, 
//     data,
//     {new : true}
//     )
// }

// export const deletePostById = async(postId)=>{
//     return await Post.deleteOne({
//         "_id" : postId
//     })
// }

