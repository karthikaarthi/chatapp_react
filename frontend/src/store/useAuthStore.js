import {create} from "zustand"
import { axiosInstance } from "../lib/axios.js"
import toast from "react-hot-toast"

export const useAuthStore = create((set)=>(
    {
        isSigningUp: false,
        isLoggingUp: false,
        authUser: null,
        isCheckingAuth: true,
        isUpdatingProfile : false,
        checkAuth: async() =>{
            try {
                const res =await axiosInstance.get("/auth/check")
                console.log("ddd",await res.data)
                set({authUser: res.data})
            } catch (error) {
                set({isCheckingAuth: false})
            }
        },
        signUp: async (data) =>{
           try {
                 set({isSigningUp: true})
                const res =await axiosInstance.post("/auth/register",data)
                console.log("ttt",res.data)
                toast.success(res.data.message)
                set ({authUser:res.data})


           } catch (error) {
            toast.error(res.data.message)
           }finally{
                set({isSigningUp: false})
           }
            
        },
        logOut: async ()=>{
            try {
                const res = await axiosInstance.post("/auth/logout")
                console.log(res)
                set({authUser: null})
                toast.success(res.data.message)
            } catch (error) {
                toast.error(res.data.message)

            }
        },
        login: async (data)=>{
            try {
                const res = await axiosInstance.post("/auth/login",data)
                console.log("ddd.//",res)
                set({authUser: res.data})
                toast.success(res.data.message)
            } catch (error) {
                console.log("tttd",error)
                toast.error(error.response.data.message)

            }
        },
        updateProfile: async (file)=>{
            try {

                set({isUpdatingProfile: true})
                const formData = new FormData();
                formData.append("avatar",file)

                const res = await axiosInstance.put("/auth/update-profile",formData)
                if(res.data.success){
                     set({isUpdatingProfile: false})
                     toast.success(res.data.message)
                     set({authUser:res.data.data})
                }
            } catch (error) {
                toast.error(error.response.data.message)

            }   
        }
    }
)
)