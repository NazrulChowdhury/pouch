import { Platform, UserDocument } from "@types";
import mongoose, {Schema} from "mongoose"


const platformSchema = new Schema({
    googleID: String,
    githubID: String
})
  
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    picture: {
        type: String
    },
    platform: {
        type: platformSchema,
        validate: {
            validator: function (value: Platform) {
                return !!value.googleID || !!value.githubID;
            },
            message: 'At least one platform ID is required'
        }
    }
})

const User = mongoose.model<UserDocument>('User', userSchema)

export default User
