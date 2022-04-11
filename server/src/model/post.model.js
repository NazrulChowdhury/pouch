import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    userId : String,
    postTitle : {
        type : String,
        required : true
    },
    postDescription : {
        type : String,
        required : true
    },
    tag : [String]
})

const Post = mongoose.model('Post', postSchema)
export default Post