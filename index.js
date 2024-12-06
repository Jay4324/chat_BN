const express=require("express")
const app=express()
require("dotenv").config()
require("./dbconfig")
app.listen(process.env.PORT,()=>{
    console.log(`PORT IS RUNNIG ON ${process.env.PORT}`)
})