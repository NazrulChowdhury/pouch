import Post from "@models/post.model"
import { PostInput, Post as PostType } from "@types"

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

export const getPostById = async(postId:string) => {
    return await Post.findById({
        "_id" : postId
    })
}

export const updatePostById = async(data:PostType, postId:string) => {
    return await Post.findByIdAndUpdate({
        "_id" : postId
    }, 
    data,
    {new : true}
    )
}

export const deletePostById = async(postId:string, userId : string)=>{
    return await Post.deleteOne({
        "_id" : postId,
        userId
    })
}

