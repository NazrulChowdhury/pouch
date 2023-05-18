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