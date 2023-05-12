import mongoose, {Document, ObjectId} from 'mongoose'
export type GitHubProfile = {
    id : string
    name : string
    avatar_url : string
}
export interface UserInput {
    name : string 
    email ?: string
    picture : string
    sub ?: string // present in google strategy 
    id ?: string // present in github strategy
}
export interface Platform {
    googleID?: string;
    githubID?: string;
}
export interface UserDocument extends Document{
    name : string 
    email ?: string
    picture : string
    platform: Platform;
} 
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
export type ProviderType  = 'google' | 'github'