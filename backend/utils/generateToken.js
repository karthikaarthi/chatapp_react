
import jwt from "jsonwebtoken"
const generateToken = (userId, res) =>{

    const token = jwt.sign({id:userId},process.env.JWT_SECRETE_KEY,
        {expiresIn:"1d"}
    )
    res.cookie("token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "lax",
    secure: false
});
    return token
    
}
export default generateToken