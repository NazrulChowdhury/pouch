import mongoose, {Schema} from "mongoose"

interface IPlatform {
    googleID?: string;
    githubID?: string;
}
  
interface IUser extends Document {
    name: string;
    email: string;
    picture?: string;
    platform: IPlatform;
}

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
        required: true
    },
    picture: {
        type: String
    },
    platform: {
        type: platformSchema,
        validate: {
            validator: function (value: IPlatform) {
                return !!value.googleID || !!value.githubID;
            },
            message: 'At least one platform ID is required'
        }
    }
})

const User = mongoose.model<IUser>('User', userSchema)

export default User
