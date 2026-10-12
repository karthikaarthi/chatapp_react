import {create} from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast"


export const useChatStore = create((set)=>(
    {
        users:null,
        isUserLoading: false,
        getUser:async ()=>{
            set({isUserLoading: true})
            try {   
               const res = await axiosInstance.get("/message/users")
               console.log("ddd",res.data)
               set({users: res.data})
            } catch (error) {
                toast.error(error.responses.data.message)
            }
        }
    }
))