const mongoose=require("mongoose")
require("dotenv").config()
mongoose.connect(process.env.CON).then((data)=>{
    console.log("DATABSE CONNECTED SUCCESFULLU")
}).catch((err)=>{
    console.log(err)
})