const express=require("express")
const {getUserForSideBar}=require("../Controller/userController")
const { isAuth } = require("../Middleware/middleware")

const Routes=express.Router()
Routes.get("/getUserForSidebar",isAuth,getUserForSideBar)



module.exports=Routes