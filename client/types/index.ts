
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
export interface UserDocument {
    _id : string
    name : string 
    email ?: string
    picture : string
    platform: Platform;
} 
export interface SessionData {
    name : string
    picture : string, 
    email ?: string
}
export interface PostInput {
    title : string,
    description : string,
    tags : string[]
}
export interface Post extends PostInput {
    userId : string
}
export interface PostDocument extends Post {
    _id: string;
}
export interface IPostForm {
    submitForm : (data: PostDocument) => void
    data ?: PostDocument
}