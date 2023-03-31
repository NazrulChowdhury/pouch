import mongoose, {Schema} from "mongoose"
import { PostInput } from "../types"
 
const postSchema = new Schema(
{  
    userId : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    tags : {
        type : [String],
        required : true
    }
}
)

const Post = mongoose.model<PostInput>('Post', postSchema)
export default Post