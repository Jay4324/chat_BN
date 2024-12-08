const jwt=require("jsonwebtoken")
const authModel = require("../Model/authModel")
require("dotenv").config()
const isAuth=async(req,res,next)=>{
    try{
        let Token=req.cookies.Token
        if(!Token){
            return res.status(401).send({isSuccess:false,msg:"Token Not Found"})
        }
        let checkUser=jwt.verify(Token,process.env.SECRET_KEY)
        if(!checkUser){
            return res.status(401).send({isSuccess:false,msg:'Invalid Token'})
        }
     
        user=await authModel.findOne({_id:checkUser._id}).select("-password")
        if(!user){
            return res.status(404).send({isSuccess:false,msg:"user Not Found"})
        }
        req.currentLoginUser=user
        next()

    }catch(err){
        console.log("Error in isAuth Middleware")
        res.status(500).send({isSuccess:false,err})
    }
}
module.exports={isAuth}