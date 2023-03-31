import Post from "@models/post.model"

export const clearPosts = async() => {
    return Post.deleteMany({})
}
