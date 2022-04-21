import Post from "../model/post.model.js"

export const getAllPosts = () => {}
export const createPost = async(post, user) => { 
    const newPost = { 
        userId : user,
        postTitle : post.title,
        postDescription : post.description,
        tags : post.tags
    } 
    return await new Post(newPost).save()
}

