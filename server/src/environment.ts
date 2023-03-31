import dotenv  from "dotenv"
dotenv.config()


export const MONGO_URI = process.env.MONGO_URI
export const MONGO_TEST_URI = process.env.MONGO_TEST_URI
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
export const SERVER_HOST_URL = process.env.SERVER_HOST_URL
export const CLIENT_HOST_URL = process.env.CLIENT_HOST_URL
export const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
export const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET
export const PORT = process.env.PORT
export const POST_TITLE_MAX_LIMIT =  parseInt(process.env.POST_TITLE_MAX_LIMIT!) 
export const POST_DESCRIPTION_MAX_LIMIT = parseInt(process.env.POST_DESCRIPTION_MAX_LIMIT!)
export const POST_TAGS_MAX_LIMIT = parseInt(process.env.POST_TAGS_MAX_LIMIT!)