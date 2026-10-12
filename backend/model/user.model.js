import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            trim: true,
            required: true,

        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required:true
        },
        profile_image: {
            type: String,
            default:""
        },
        isOnline: {
            type: Boolean,
            default: false
        },
        lastSeen: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("user",userSchema)
export default User