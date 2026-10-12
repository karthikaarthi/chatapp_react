import express from "express"
import { getMessages, getUserForSidebar, sendMessage } from "../controller/message.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

const messageRouter = express.Router()

messageRouter.get("/users",authMiddleware,getUserForSidebar)
             .get("/:id",authMiddleware,getMessages)   
             .post("/send/:id",authMiddleware,sendMessage)   
export default messageRouter