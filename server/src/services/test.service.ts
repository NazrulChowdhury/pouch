import { singlePost } from "@fixtures"
import Post from "@models/post.model"
import { Post as PostType, PostInput } from "@types"


export const clearPosts = async() => {
    return Post.deleteMany({})
}

export const createManyPosts = async(Posts : PostInput[] ) => {
    return Post.insertMany(Posts)
}

