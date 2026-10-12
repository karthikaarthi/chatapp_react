import Message from "../model/message.model.js";
import User from "../model/user.model.js";

export const getUserForSidebar =async (req, res, next)=>{
    try {
        const loggedInUser = req.user._id;
        const filterUser = await User.find({_id: {$ne:loggedInUser }}).select("-password")
        res.status(200).json(filterUser)

    } catch (error) {
        next(error)
    }
}

export const getMessages =async (req, res, next)=>{
    try {
        const {id: userToChatId} = req.params
        const userId = req.user._id
        const messages = await Message.find(
            {$or: [
                {senderId: userId, receiverId: userToChatId },
                {senderId: userToChatId, receiverId: userId}
            ]}
        )
        console.log("message",messages  )

    } catch (error) {
        next(error)
    }
}
export const sendMessage =async (req, res, next)=>{
    try {
        
        const {id: receiverId} = req.params;

        const senderId = req.user._id;
        const {message}= req.body
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })
        await newMessage.save()
        return res.status(200).json(newMessage)
    } catch (error) {
        next(error)
    }
}


