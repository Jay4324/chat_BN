const express=require("express")
const cors=require("cors")
const authRoutes=require("./Routes/authRoutes")
const messageRoutes=require("./Routes/messageRoutes")
const userRoutes=require("./Routes/userRoutes")
const cookieparser=require("cookie-parser")

const app=express()

require("./dbconfig")
require("dotenv").config()

app.use(express.json())
app.use(cookieparser())
app.use(cors({origin:"http://localhost:5173",credentials: true}))
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/user",userRoutes)



app.listen(process.env.PORT,()=>{
    console.log(`PORT IS RUNNIG ON ${process.env.PORT}`)
})