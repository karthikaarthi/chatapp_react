import express from "express"
import { checkProfile, updateProfile, userLogin, userLogOut, userRegister } from "../controller/auth.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"
import { upload } from "../middleware/upload.middleware.js"

const authRouter = express.Router()

authRouter.post("/register",userRegister)
        .post("/login",userLogin)
        .post("/logout",userLogOut)
        .put("/update-profile",authMiddleware,upload.single("avatar"),updateProfile)
        .get("/check",authMiddleware,checkProfile)
        
         

export default authRouter