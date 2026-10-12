import User from "../model/user.model.js";
import bcrypt from "bcrypt"
import error from "../middleware/error.middleware.js";
import jwt from "jsonwebtoken"
import generateToken from "../utils/generateToken.js";
import cloudinary from "../lib/cloudinary.js";


export const userRegister = async (req, res,next) => {
  try {


    
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({email})
    if(existingUser){
      return res.status(400).json({
        error: true,
        success: false,
        message: "User already register in this email id",
      });
    }
    const hashPassword  =await bcrypt.hash(password,10)
    const newUser = new User({
      name,
      password:hashPassword,
      email
    })
    await newUser.save()
        generateToken(newUser._id, res)

     return res.status(200).json({
        success: true,
        error: false,
        message: "User register successfully",
        data: newUser
      });

    } catch (error) {
    
    next(error)
  }
};

export const userLogin = async (req, res,next) => {
  try {

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({email})
    if(!existingUser){
      return res.status(400).json({
        error: true,
        success: false,
        message: "User not register in this email id",
      });
    }

    const isPassword  =await bcrypt.compare(password,existingUser.password)
    if(!isPassword){
      return res.status(400).json({
        error: true,
        success: false,
        message: "Password is mismatch",
      });
    }

    generateToken(existingUser._id, res)
  
    res.status(200).json({
      success: true,
      error: false,
      message: "User login successfully"
    })
  } catch (error) {
    
    next(error)
  }
};


export const userLogOut= async (req, res, next) =>{
  try {
    res.clearCookie("token",{
      httpOnly: true,
      secure: false
    })
    return res.status(200).json({
      success: true,
      error: false,
      message: "User logout successfully"
    })
  } catch (error) {
    next(error)
  }
}

export const updateProfile = async (req, res, next) =>{
  try {
  
    if(!req.file){
      return res.status(400).json({
        error: true,
        success: false,
        message: "Profile picture is required"
      })
    }

    const uploadRes = await cloudinary.uploader.upload(req.file.path,{folder: "chat-app/avatar"})
    console.log("FILE:", uploadRes.secure_url);
    const updatedUser =await  User.findByIdAndUpdate(
      req.user._id,
      {
        profile_image: uploadRes.secure_url
      },{
        new: true
      }
    )
    return res.status(200).json({
     
      success: true,
      error: false,
      message: "Profile image upload successfully",
      data: updatedUser
    });   
    
  } catch (error) {
    
  }
}


export const checkProfile = async (req, res, next) =>{
  try {
   
    return res.status(200).json(req.user)
  } catch (error) {
    next(error)
  }
}
