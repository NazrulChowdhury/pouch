import Post from "../model/post.model.js"

export const createPost = async(post, user) => { 
    const newPost = { 
        userId : user,
        postTitle : post.title,
        postDescription : post.description,
        tags : post.tags
    } 
    return await new Post(newPost).save()
}
export const getAllPosts = async(user) => {
    return await Post.find({userId : user})
}

