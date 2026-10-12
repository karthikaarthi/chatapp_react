import express from "express"
import "dotenv/config"
import connectdb from "./lib/connectDB.js"
import authRouter from "./router/auth.router.js"
import error from "./middleware/error.middleware.js"
import cookieParser from "cookie-parser"
import messageRouter from "./router/message.router.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials: true
    }
))

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/message",messageRouter)

app.use(error)
connectdb()
app.listen(process.env.PORT, ()=>{
    console.log("Server is running on the port: ",process.env.PORT)
})

