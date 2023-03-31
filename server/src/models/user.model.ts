import mongoose, {Schema} from "mongoose"

const userSchema = new Schema({
    name:{
        type:String 
    },
    email:{
        type:String
    },
    picture : {
        type: String
    },
    platform:{
        googleID: String,
        githubID : String
    },
})
const User = mongoose.model('User', userSchema)

export default User
