import Post from "@models/post.model"
import { PostInput } from "@types"


export const clearPosts = async() => {
    return Post.deleteMany({})
}

export const createManyPosts = async(Posts : PostInput[] ) => {
    return Post.insertMany(Posts)
}
