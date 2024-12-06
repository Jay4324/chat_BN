const mongoose=require("mongoose")
require("dotenv").config()
mongoose.connect(process.env.CON).then((data)=>{
    console.log("DATABASE CONNECTED SUCCESSFULLY")
}).catch((err)=>{
    console.log("Error in db connection ",err)
})