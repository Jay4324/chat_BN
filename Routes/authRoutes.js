const express=require("express")
const Routes=express.Router()
const {loginUser,logoutUser,signupUser}=require("../Controller/authController")
Routes.post("/login",loginUser)
Routes.post("/signup",signupUser)
Routes.delete("/logoutUser",logoutUser)

module.exports=Routes