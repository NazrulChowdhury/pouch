import Post from "../models/post.model"
import { PostInput } from "../types/index"

export const createPost = async(post: PostInput, user:Express.User) => { 
    const newPost = { 
        userId : user,
        title : post.title,
        description : post.description,
        tags : post.tags
    } 
    return await new Post(newPost).save()
}

// export const getAllPosts = async(user) => {
//     return await Post.find({userId : user})
// }

// export const getAllPostsByTagName = async (user,tagName) => {
    
//     return await Post.find(
//         { 
//             userId : user, 
//             tags : {
//                 $all: [tagName]
//             }
//         }
//     )
// }

// export const getPostById = async(postId) => {
//     return await Post.findById({
//         "_id" : postId
//     })
// }

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

