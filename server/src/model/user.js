import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
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
    },
})
const User = mongoose.model('User', userSchema)

export default User
