import mongoose, {Document, ObjectId} from 'mongoose'
export type GitHubProfile = {
    id : string
    name : string
    avatar_url : string
}
export interface User {
    name : string 
    email : string
    picture : string
    platform: {
        googleID: string,
        githubID : string
    }
}
export interface UserDocument extends User, Document{} 
export interface PostInput {
    title : string,
    description : string,
    tags : string[]
}
export interface Post extends PostInput {
    userId : string
}
export interface PostDocument extends Post, Document{
}
