import Post from "@models/post.model"
import { PostInput, UserInput } from "@types"
import User from "@models/user.model"

export const clearPosts = async() => {
    return Post.deleteMany({})
}

export const createManyPosts = async(Posts : PostInput[] ) => {
    return Post.insertMany(Posts)
}
export const createUser = async(user : UserInput) => {
  return await new User(user).save()
}
export const clearUsers = async() => {
    return User.deleteMany({})
}

