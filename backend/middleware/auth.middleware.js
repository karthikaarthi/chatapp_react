
import jwt from "jsonwebtoken"
import User from "../model/user.model.js"


export const authMiddleware = async(req, res, next)=>{
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({
                error: true,
                success: false,
                message: "Authentication required"
            })
        }
        const decode = jwt.verify(token,process.env.JWT_SECRETE_KEY)
        if(!decode){
           return res.status(401).json({
                error: true,
                success: false,
                message: "Invalid or expired token"
            })
        }
        const user= await User.findById({_id: decode.id}).select("-password")
        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}