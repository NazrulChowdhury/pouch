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

export const getAllPostsByTagName = async (user,tagName) => {
    
    return await Post.find(
        { 
            userId : user, 
            tags : {
                $all: [tagName]
            }
        }
    )
}

export const getPostById = async(postId) => {
    return await Post.findById({
        "_id" : postId
    })
}

export const updatePostById = async(data, postId) => {
    return await Post.findByIdAndUpdate({
        "_id" : postId
    }, 
    data,
    {new : true}
    )
}

export const deletePostById = async(postId)=>{
    return await Post.deleteOne({
        "_id" : postId
    })
}

