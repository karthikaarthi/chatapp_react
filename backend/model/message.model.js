import mongoose from "mongoose"

const messageSchema = mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true
        },
        receiverId: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true
        },
        message: {
            type: String
        },
        imageurl: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Message = mongoose.model("message",messageSchema)

export default Message