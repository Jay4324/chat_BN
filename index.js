const express=require("express")
const cors=require("cors")
const authRoutes=require("./Routes/authRoutes")
const app=express()

require("./dbconfig")
require("dotenv").config()

app.use(express.json())
app.use(cors({origin:"http://localhost:5173",credentials: true}))
app.use("api/auth",authRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`PORT IS RUNNIG ON ${process.env.PORT}`)
})